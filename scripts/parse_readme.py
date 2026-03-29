#!/usr/bin/env python3
"""
Parse README.md and generate structured JSON for Docusaurus.

This script parses the README.md markdown file and outputs three JSON files:
- website/data/courses.json - all courses and resources with metadata
- website/data/sections.json - section metadata
- website/data/learning_paths.json - learning paths and prerequisites
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple
from dataclasses import dataclass, asdict
from collections import defaultdict


@dataclass
class Solution:
    name: str
    url: str


@dataclass
class Course:
    name: str
    url: str
    description: str
    type: str  # "course" or "textbook"
    starred: bool
    has_video: bool
    video_url: Optional[str]
    solutions: List[Dict[str, str]]
    section: str
    subsection: Optional[str]
    tags: List[str]
    university: Optional[str]
    image: Optional[str]


@dataclass
class Section:
    name: str
    slug: str
    description: str
    image: Optional[str]
    order: int


class ReadmeParser:
    def __init__(self, readme_path: str):
        self.readme_path = Path(readme_path)
        self.content = self.readme_path.read_text(encoding='utf-8')
        self.courses: List[Course] = []
        self.sections: Dict[str, Section] = {}
        self.section_order = 0

        # University/platform patterns
        self.university_patterns = {
            'Berkeley': r'Berkeley|UC Berkeley|BerkeleyX',
            'Stanford': r'Stanford|StanfordX',
            'MIT': r'MIT|MITX',
            'Harvard': r'Harvard',
            'Columbia': r'Columbia|ColumbiaX',
            'NYU': r'NYU',
            'CMU': r'Carnegie Mellon|CMU',
            'CalTech': r'CalTech|Caltech',
            'Cornell': r'Cornell',
            'Coursera': r'Coursera',
            'edX': r'edX',
            'Udacity': r'Udacity',
            'Udemy': r'Udemy',
            'Google': r'Google',
            'Facebook': r'Facebook',
            'OpenAI': r'OpenAI',
            'DeepLearning.AI': r'Deeplearning\.ai|DeepLearning\.AI',
        }

    def extract_university(self, text: str) -> Optional[str]:
        """Extract university or platform name from text."""
        for university, pattern in self.university_patterns.items():
            if re.search(pattern, text, re.IGNORECASE):
                return university
        return None

    def extract_solutions(self, text: str) -> List[Dict[str, str]]:
        """Extract solution links from text: [[Name](url)]"""
        solutions = []
        pattern = r'\[\[([^\]]+)\]\(([^)]+)\)\]'
        matches = re.findall(pattern, text)
        for name, url in matches:
            solutions.append({'name': name, 'url': url})
        return solutions

    def parse_entry(self, line: str, section: str, subsection: Optional[str] = None) -> Optional[Course]:
        """Parse a single entry line (bullet point)."""
        line = line.strip()

        # Skip if not a markdown link
        if not line.startswith('- '):
            return None

        # Determine type based on section
        entry_type = self._determine_entry_type(section)

        # Check for star (highly recommended)
        starred = ':star:' in line

        # Extract video URL if present
        video_url = None
        has_video = ':tv:' in line
        if has_video:
            video_match = re.search(r'\[:tv:\]\(([^)]+)\)', line)
            if video_match:
                video_url = video_match.group(1)

        # Extract main link: [name](url)
        link_match = re.search(r'- (?:\[([^\]]+)\]\(([^)]+)\))?', line)
        if not link_match or not link_match.group(1):
            return None

        name = link_match.group(1)
        url = link_match.group(2)

        # Extract description (text after the link, before any special markers)
        # Remove the link part and special markers
        line_no_link = re.sub(r'- \[[^\]]+\]\([^)]+\)\s*', '', line)

        # Remove special markers to clean description
        description = re.sub(r'\s*:star:\s*', '', line_no_link)
        description = re.sub(r'\s*:tv:\s*', '', description)
        description = re.sub(r'\s*\[:tv:\]\([^)]+\)\s*', '', description)
        description = re.sub(r'\s*\[\[.*?\]\]', '', description)
        description = re.sub(r'\s*\[github\]\([^)]+\)\s*', '', description)
        description = re.sub(r'\s*\[\w+ \d+\]\([^)]+\)\s*', '', description)

        # Clean up description
        description = description.strip(' -').strip()

        # Extract solutions
        solutions = self.extract_solutions(line)

        # Extract university/platform
        full_text = f"{section} {subsection or ''} {name} {description}"
        university = self.extract_university(full_text)

        # Generate tags
        tags = self._generate_tags(section, subsection, university)

        return Course(
            name=name,
            url=url,
            description=description,
            type=entry_type,
            starred=starred,
            has_video=has_video,
            video_url=video_url,
            solutions=solutions,
            section=section,
            subsection=subsection,
            tags=tags,
            university=university,
            image=None
        )

    def _determine_entry_type(self, section: str) -> str:
        """Determine if entry is a course or textbook based on section."""
        return 'textbook' if ':books:' in section else 'course'

    def _generate_tags(self, section: str, subsection: Optional[str],
                       university: Optional[str]) -> List[str]:
        """Generate tags from section and subsection."""
        tags = []

        # Add section as tag
        if section:
            section_slug = section.lower().replace(' ', '-')
            tags.append(section_slug)

        # Add subsection as tag
        if subsection:
            subsection_slug = subsection.lower().replace(' ', '-')
            tags.append(subsection_slug)

        # Add university/platform as tag
        if university:
            uni_slug = university.lower().replace('.', '').replace(' ', '-')
            tags.append(uni_slug)

        return list(set(tags))  # Remove duplicates

    def _slug_from_name(self, name: str) -> str:
        """Convert section name to slug."""
        return name.lower().replace(' ', '-').replace('--', '-')

    def parse(self):
        """Parse the entire README.md file."""
        lines = self.content.split('\n')

        current_section = None
        current_subsection = None
        current_section_image = None
        section_lines = defaultdict(list)

        i = 0
        while i < len(lines):
            line = lines[i]

            # Check for image line (![description](path))
            if line.strip().startswith('![') and i > 0:
                img_match = re.match(r'!\[([^\]]*)\]\(([^)]+)\)', line.strip())
                if img_match:
                    current_section_image = img_match.group(2)

            # Check for main section (## heading)
            if line.startswith('## '):
                current_section = line.replace('## ', '').strip()
                current_subsection = None
                current_section_image = None
                self.sections[current_section] = Section(
                    name=current_section,
                    slug=self._slug_from_name(current_section),
                    description='',
                    image=current_section_image,
                    order=self.section_order
                )
                self.section_order += 1

            # Check for subsection (### heading)
            elif line.startswith('### '):
                current_subsection = line.replace('### ', '').strip()

            # Check for entry (bullet point starting with -)
            elif line.strip().startswith('- ') and current_section:
                course = self.parse_entry(line, current_section, current_subsection)
                if course:
                    # Update image in course if we found one
                    if current_section_image:
                        course.image = current_section_image
                    self.courses.append(course)

            i += 1

    def to_json(self) -> Tuple[List[Dict], List[Dict], Dict]:
        """Convert parsed data to JSON-serializable format."""
        courses_json = [asdict(c) for c in self.courses]
        sections_json = [asdict(s) for s in self.sections.values()]

        # Sort sections by order
        sections_json = sorted(sections_json, key=lambda x: x['order'])

        # Generate learning paths
        learning_paths = self._generate_learning_paths()

        return courses_json, sections_json, learning_paths

    def _generate_learning_paths(self) -> Dict[str, Any]:
        """Generate learning paths from 'Shortest Path' and 'TL;DR' sections."""
        paths = {}

        # Find courses in "Shortest Path to LLM / Agents"
        shortest_path_courses = [
            c for c in self.courses
            if c.section == "Shortest Path to LLM / Agents"
        ]

        # Find courses in "TL;DR"
        tldr_courses = [
            c for c in self.courses
            if c.section == "TL;DR"
        ]

        if shortest_path_courses:
            paths['shortest_path_to_llm'] = {
                'name': 'Shortest Path to LLM / Agents',
                'description': 'Bare minimum list of courses to go through for basic background knowledge in LLM and AI Agents.',
                'courses': [
                    {
                        'name': c.name,
                        'url': c.url,
                        'university': c.university,
                        'starred': c.starred
                    }
                    for c in shortest_path_courses
                ]
            }

        if tldr_courses:
            paths['tldr'] = {
                'name': 'TL;DR - Machine Learning Engineering Essentials',
                'description': 'Bare minimum list of courses to go through for basic knowledge in machine learning engineering.',
                'courses': [
                    {
                        'name': c.name,
                        'url': c.url,
                        'university': c.university,
                        'starred': c.starred
                    }
                    for c in tldr_courses
                ]
            }

        return paths


def main():
    """Main entry point."""
    # Determine paths relative to script location
    script_dir = Path(__file__).parent
    repo_root = script_dir.parent
    readme_path = repo_root / 'README.md'
    website_data_dir = repo_root / 'website' / 'data'

    # Create output directory if it doesn't exist
    website_data_dir.mkdir(parents=True, exist_ok=True)

    # Parse README
    parser = ReadmeParser(str(readme_path))
    parser.parse()

    # Generate JSON
    courses_json, sections_json, learning_paths_json = parser.to_json()

    # Write output files
    courses_file = website_data_dir / 'courses.json'
    sections_file = website_data_dir / 'sections.json'
    learning_paths_file = website_data_dir / 'learning_paths.json'

    with open(courses_file, 'w', encoding='utf-8') as f:
        json.dump(courses_json, f, indent=2, ensure_ascii=False)

    with open(sections_file, 'w', encoding='utf-8') as f:
        json.dump(sections_json, f, indent=2, ensure_ascii=False)

    with open(learning_paths_file, 'w', encoding='utf-8') as f:
        json.dump(learning_paths_json, f, indent=2, ensure_ascii=False)

    # Print summary
    print(f"✓ Parsed {len(parser.courses)} courses from README.md")
    print(f"✓ Found {len(parser.sections)} sections")
    print(f"✓ Generated {len(learning_paths_json)} learning paths")
    print()
    print(f"Output files created:")
    print(f"  - {courses_file}")
    print(f"  - {sections_file}")
    print(f"  - {learning_paths_file}")


if __name__ == '__main__':
    main()
