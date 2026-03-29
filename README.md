# Awesome Full Stack Machine Learning Engineering Courses

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: CC0](https://img.shields.io/badge/License-CC0-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Last Commit](https://img.shields.io/github/last-commit/leehanchung/awesome-full-stack-machine-learning-courses.svg)](https://github.com/leehanchung/awesome-full-stack-machine-learning-courses)

This is a curated list of publicly accessible machine learning courses from top universities such as Berkeley, Harvard, Stanford, and MIT. It also includes machine learning project case studies from large and experienced companies. The list is broken down by topics and areas of specialization. Python is the preferred language of choice as it covers end-to-end machine learning engineering.

Special thanks to the schools for making their course videos and assignments publicly available.

## How to Use This List

This awesome list uses the following conventions:
- :star: indicates a highly recommended course that is foundational or excellent for that topic
- :tv: indicates a link to video lectures for that course
- **[Course Name](URL)** - Brief description of the course and what you will learn.

---

## Table of Contents

1. [Shortest Path to LLM / Agents](#shortest-path-to-llm--agents)
2. [TL;DR](#tldr)
3. [Computer Science](#computer-science)
4. [Math and Statistics](#math-and-statistics)
5. [Artificial Intelligence](#artificial-intelligence)
6. [Machine Learning](#machine-learning)
7. [Machine Learning Engineering](#machine-learning-engineering)
8. [Deep Learning Overview](#deep-learning-overview)
9. [Specializations](#specializations)
   - [Recommendation Systems](#recommendation-systems)
   - [Information Retrieval and Web Search](#information-retrieval-and-web-search)
   - [Natural Language Processing](#natural-language-processing)
   - [Vision](#vision)
   - [Unsupervised Learning and Generative Models](#unsupervised-learning-and-generative-models)
   - [Foundation Models](#foundation-models)
   - [Reinforcement Learning](#reinforcement-learning)
   - [Robotics](#robotics)
10. [Case Studies](#case-studies)
11. [License](#license)
12. [Contributing](#contributing)

---

## Shortest Path to LLM / Agents

Bare minimum list of courses to go through for basic background knowledge in LLM and AI Agents.

- [Berkeley CS188: Artificial Intelligence](https://edge.edx.org/courses/course-v1:BerkeleyX+CS188+2018_SP/course/) - Foundational course covering search, planning, and reasoning essential for understanding AI agents. :star:

- [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/) - Deep learning for computer vision with practical assignments. [[Assignment 2 Solution](https://github.com/leehanchung/cs182/tree/master/assignment1), [Assignment 3 Solution](https://github.com/leehanchung/cs182/tree/master/assignment2)] :star:

- [Stanford CS224n: Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/) - Covers neural networks for NLP, language models, and transformers. [[Reference Solutions](https://github.com/leehanchung/cs224n)] :star:

- [Berkeley CS285: Deep Reinforcement Learning](http://rail.eecs.berkeley.edu/deeprlcourse/) - Comprehensive course on deep RL algorithms and policy gradient methods. :star:

- [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/spring2025/) - Modern approach to building language models from first principles. :star:

---

## TL;DR

Bare minimum list of courses to go through for basic knowledge in machine learning engineering.

- [MIT: The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) - Essential practical skills for computer science and software development.

- [edX Harvard: CS50x: Introduction to Computer Science](https://www.edx.org/course/cs50s-introduction-to-computer-science) - Comprehensive introduction to computer science fundamentals.

- [MIT 18.05: Introduction to Probability and Statistics](https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/) - Foundation for statistical understanding in machine learning.

- [Columbia COMS W4995: Applied Machine Learning](https://www.cs.columbia.edu/~amueller/comsw4995s20/schedule/) - Applied ML with practical projects and real-world examples. [:tv:](https://www.youtube.com/playlist?list=PL_pVmAaAnxIRnSw6wiCpSvshFyCREZmlM)

- [MIT 18.06: Linear Algebra](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/) - Essential mathematical foundation for machine learning.

- [Berkeley CS182: Designing, Visualizing, and Understanding Deep Neural Networks](https://cs182sp21.github.io/) - Deep learning fundamentals with visual explanations and code. [:tv:](https://www.youtube.com/watch?v=rSY1pVGdZ4I&list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A) [[Reference Solutions](https://github.com/leehanchung/cs182)]

- [Berkeley: Full Stack Deep Learning](https://fullstackdeeplearning.com/) - End-to-end ML engineering covering infrastructure and deployment.

---

## Computer Science

Foundational computer science, Python, and SQL skills for machine learning engineering.

#### :books: Textbooks

- [Grokking Algorithms](https://github.com/KevinOfNeu/ebooks/blob/master/Grokking%20Algorithms.pdf) - Visual introduction to algorithms and data structures with clear illustrations.

- [Google Python Style Guide](https://github.com/google/styleguide/blob/gh-pages/pyguide.md) - Industry standard Python code style and conventions.

- [Python Design Patterns](https://github.com/faif/python-patterns) - Common Python patterns and idioms for writing clean code.

- [Python3 Patterns](https://python-3-patterns-idioms-test.readthedocs.io/en/latest/) - Python 3 specific patterns and best practices.

- [Design Patterns: Elements of Reusable Object-Oriented Software 1st Edition](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented-dp-0201633612/dp/0201633612) - Foundational book on software design patterns.

#### :school: Courses

- [MIT: The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) - Essential practical tools and skills for software development. :star:

- [edX MITX: Introduction to Computer Science and Programming Using Python](https://www.edx.org/course/6-00-1x-introduction-to-computer-science-and-programming-using-python-4) - Learn Python fundamentals through problem-solving and applications. :star:

- [edX Harvard: CS50x: Introduction to Computer Science](https://www.edx.org/course/cs50s-introduction-to-computer-science) - Comprehensive CS fundamentals from Harvard University.

- [SQL for Data Analysis](https://classroom.udacity.com/courses/ud198) - Learn SQL for querying and analyzing data.

- [PostgreSQL Exercises](https://pgexercises.com/) - Hands-on SQL practice with real-world scenarios.

- [U Waterloo: CS794: Optimization for Data Science](https://cs.uwaterloo.ca/~y328yu/mycourses/794-2020/lecture.html) - Optimization techniques essential for machine learning.

- [Berkeley CS 170: Efficient Algorithms and Intractable Problems](https://cs170.org/) - Study of algorithms, computational complexity, and NP-completeness.

- [Berkeley CS 294-165: Sketching Algorithms](https://www.sketchingbigdata.org/fall20/) - Algorithms for processing massive datasets efficiently.

- [MIT 6.824: Distributed Systems](http://nil.csail.mit.edu/6.824/2020/) - Foundations of distributed systems and fault tolerance. [:tv:](https://www.youtube.com/watch?v=cQP8WApzIQQ&list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB)

---

## Math and Statistics

Linear algebra, statistics, and mathematical foundations for machine learning.

![math and machine learning](images/math_ml.jpg)

#### :books: Textbooks

- [NIST Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/) - Comprehensive reference on statistical methods and applications.

#### :school: Courses

- [MIT 18.05: Introduction to Probability and Statistics](https://ocw.mit.edu/courses/mathematics/18-05-introduction-to-probability-and-statistics-spring-2014/) - Essential probability and statistics for understanding machine learning. :star:

- [MIT 18.06: Linear Algebra](https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/) - Comprehensive linear algebra covering vectors, matrices, and eigenvalues. :star:

- [Stanford Stats216: Statistical Learning](https://lagunita.stanford.edu/courses/HumanitiesSciences/StatLearning/Winter2016/about) - Statistical methods for learning from data with R labs. :star:

- [CalTech: Learning From Data](https://work.caltech.edu/telecourse.html) - Theoretical foundations of machine learning and generalization.

- [A Students Guide to Bayesian Statistics](https://www.youtube.com/watch?v=P_og8H-VkIY&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG) - Introduction to Bayesian methods and probabilistic thinking.

- [Introduction to Linear Algebra for Applied Machine Learning with Python](https://pabloinsente.github.io/intro-linear-algebra) - Practical linear algebra with Python applications.

---

## Artificial Intelligence

Artificial Intelligence is the superset of Machine Learning. These courses provide a high-level understanding of the field of AI, including searching, planning, logic, constraint optimization, and machine learning.

![artificial intelligence](images/artificial_intelligence.png)

#### :books: Textbooks

- [Artificial Intelligence: A Modern Approach](https://www.amazon.com/Artificial-Intelligence-Modern-Approach-3rd/dp/0136042597) - Comprehensive textbook on AI algorithms and techniques.

#### :school: Courses

- [Berkeley CS188: Artificial Intelligence](https://edge.edx.org/courses/course-v1:BerkeleyX+CS188+2018_SP/course/) - Foundational AI course covering search, planning, reasoning, and learning. :star:

- [edX ColumbiaX: Artificial Intelligence](https://www.edx.org/course/artificial-intelligence-ai) - Core AI concepts and algorithms with programming projects. [[Reference Solutions](https://github.com/leehanchung/CSMM-101x-AI)]

---

## Machine Learning

Core machine learning theory and applied methods.

![machine learning](images/machine_learning.png)

#### :books: Textbooks

- [Mathematics for Machine Learning](https://mml-book.github.io/) - Essential mathematics for understanding machine learning algorithms.

- [Concise Machine Learning](https://people.eecs.berkeley.edu/~jrs/papers/machlearn.pdf) - Concise overview of key machine learning concepts.

- [The Elements of Statistical Learning](https://web.stanford.edu/~hastie/Papers/ESLII.pdf) - Statistical foundations of supervised learning.

- [Mining of Massive Datasets](http://www.mmds.org/) - Algorithms for processing and analyzing large-scale data.

- [Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf) - Comprehensive coverage of pattern recognition techniques. [[Codes](https://github.com/ctgk/PRML)]

- [Cross-Industry Process for Data Mining methodology](ftp://public.dhe.ibm.com/software/analytics/spss/documentation/modeler/18.0/en/ModelerCRISPDM.pdf) - Standard process for data mining and analytics projects.

#### :school: Courses

- [Columbia COMS W4995: Applied Machine Learning](https://www.cs.columbia.edu/~amueller/comsw4995s20/schedule/) - Applied ML with hands-on projects and real-world problem solving. [:tv:](https://www.youtube.com/playlist?list=PL_pVmAaAnxIRnSw6wiCpSvshFyCREZmlM) :star:

- [Stanford CS229: Machine Learning](https://see.stanford.edu/Course/CS229) - Comprehensive ML course covering supervised, unsupervised, and reinforcement learning. [:tv:](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU)

- [Harvard CS 109A Data Science](https://harvard-iacs.github.io/2019-CS109A/pages/materials.html) - Data science fundamentals and machine learning methods.

- [edX ColumbiaX: Machine Learning](https://www.edx.org/course/machine-learning) - Core machine learning algorithms and applications.

- [Berkeley CS294: Fairness in Machine Learning](https://fairmlclass.github.io/) - Ethical considerations and fairness in machine learning systems.

- [Google: Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) - Practical introduction to machine learning from Google.

- [Google: AI Education](https://ai.google/education/) - Comprehensive AI and ML educational resources from Google.

- [Google: Applied Machine Learning Intensive](https://github.com/google/applied-machine-learning-intensive) - Hands-on applied ML training from Google.

- [Cornell Tech CS5785: Applied Machine Learning](https://cornelltech.github.io/cs5785-fall-2019/) - Applied ML techniques with programming assignments. [:tv:](https://www.youtube.com/playlist?list=PL2UML_KCiC0UlY7iCQDSiGDMovaupqc83)

- [Probabilistic Machine Learning (Summer 2020)](https://uni-tuebingen.de/de/180804) - Probabilistic approaches to machine learning. [:tv:](https://www.youtube.com/playlist?list=PL05umP7R6ij1tHaOFY96m5uX3J21a6yNd)

- [AutoML - Automated Machine Learning](https://ki-campus.org/courses/automl-luh2021) - Techniques for automating machine learning workflows.

- [MIT: Data Centric AI](https://dcai.csail.mit.edu/) - Focus on data quality and engineering for AI systems.

---

## Machine Learning Engineering

These courses help you bridge the gap from training machine learning models to deploying AI systems in the real world.

![production](images/production.jpg)

#### :books: Textbooks

- [Machine Learning Engineering](http://www.mlebook.com/wiki/doku.php) - Practical guide to building production ML systems.

- [Machine Learning System Design](https://huyenchip.com/machine-learning-systems-design/design-a-machine-learning-system.html) - Design principles for ML systems at scale.

- [Microsoft Commercial Software Engineering ML Fundamentals](https://microsoft.github.io/code-with-engineering-playbook/ml-fundamentals/) - ML engineering best practices from Microsoft.

- [Google Rules of ML](https://developers.google.com/machine-learning/guides/rules-of-ml) - Practical rules for effective ML projects.

- [The Twelve Factors App](https://12factor.net/) - Principles for building scalable software applications.

- [Feature Engineering and Selection: A Practical Approach for Predictive Models](http://www.feat.engineering/a-simple-example.html) - Feature engineering techniques and best practices.

- [Continuous Delivery for Machine Learning](https://martinfowler.com/articles/cd4ml.html) - CI/CD practices for machine learning systems.

#### :school: Courses

- [Berkeley: Full Stack Deep Learning](https://fullstackdeeplearning.com/) - End-to-end ML engineering from research to production. :star:

- [Stanford: CS 329S: Machine Learning Systems Design](https://stanford-cs329s.github.io/syllabus.html) - Design and architecture of production ML systems. :star:

- [CMU: Machine Learning in Production](https://ckaestne.github.io/seai/S2021/) - ML system design with focus on quality and reliability. [github](https://github.com/ckaestne/seai/)

- [Andrew Ng: Bridging AI's Proof-of-Concept to Production Gap](https://www.youtube.com/watch?v=tsPuVAMaADY) - Practical insights on moving ML from research to production.

- [Facebook Field Guide to Machine Learning](https://research.fb.com/blog/2018/05/the-facebook-field-guide-to-machine-learning-video-series/) - Machine learning practices from Facebook.

- [Udemy: Deployment of Machine Learning Models](https://www.udemy.com/course/deployment-of-machine-learning-models) - Practical guide to deploying ML models in production. :star:

- [Spark](https://classroom.udacity.com/courses/ud2002) - Large-scale data processing with Apache Spark.

- [Udemy: The Complete Hands On Course To Master Apache Airflow](https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow) - Workflow orchestration and scheduling for data pipelines.

---

## Deep Learning Overview

Basic overview and foundations of deep learning.

![deep learning](images/deep_learning.png)

#### :books: Textbooks

- [Deep Learning](http://www.deeplearningbook.org/) - Comprehensive textbook on deep learning methods and theory.

- [Dive into Deep Learning](http://d2l.ai/index.html) - Interactive deep learning book with code examples.

- [The Matrix Calculus You Need For Deep Learning](https://arxiv.org/pdf/1802.01528.pdf) - Essential calculus concepts for understanding deep learning.

#### :school: Courses

- [Berkeley CS182: Designing, Visualizing and Understanding Deep Neural Networks](https://cs182sp21.github.io/) - Deep learning fundamentals with focus on understanding neural networks. [:tv:](https://www.youtube.com/watch?v=rSY1pVGdZ4I&list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A) [[Reference Solutions](https://github.com/leehanchung/cs182)]

- [Stanford CS 25: Transformers](https://web.stanford.edu/class/cs25/) - Comprehensive course on transformer architectures and their applications. [:tv:](https://www.youtube.com/watch?v=P127jhj-8-Y&list=PLoROMvodv4rNiJRchCzutFw5ItR_Z27CM)

- [Deeplearning.ai Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) - Comprehensive specialization covering neural networks and deep learning. [[Reference Solutions](https://github.com/leehanchung/deeplearning.ai)] :star:

- [NYU: Deep Learning](https://atcold.github.io/pytorch-Deep-Learning/) - Deep learning course using PyTorch with code examples.

---

## Specializations

### Recommendation Systems

Recommendation systems are used when users do not know what they want and cannot use keywords to describe their needs. These systems learn user preferences and predict items of interest.

![youtube recommender](images/nobody-youtubes-recommendation-system.png)

#### :books: Textbooks

- [Mining of Massive Datasets](http://www.mmds.org/) - Foundational algorithms for recommendation systems at scale.

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - Natural language understanding for recommendation and search.

- [Dive into Deep Learning: Chapter 16 Recommender Systems](http://d2l.ai/chapter_recommender-systems/index.html) - Deep learning approaches to recommendation systems.

#### :school: Courses

- [Stanford CS246: Mining Massive Data Sets](http://web.stanford.edu/class/cs246/) - Algorithms for mining and analyzing massive datasets including recommendation systems.

---

### Information Retrieval and Web Search

Search and ranking systems are used when users have specific information needs and can use keywords to describe their queries.

#### :books: Textbooks

- [Introduction to Information Retrieval](https://nlp.stanford.edu/IR-book/) - Comprehensive introduction to information retrieval and search technology.

#### :school: Courses

- [Stanford CS224U: Natural Language Understanding - NLU and Information Retrieval](https://www.youtube.com/watch?v=Bn6RNrwwiI0&list=PLoROMvodv4rPt5D0zs3YhbWSZA8Q_DyiJ&index=38) - NLU methods for information retrieval and question answering.

- [TU Wein: Crash Course IR - Fundamentals](https://www.youtube.com/watch?v=6FNISntK6Sk&list=PLSg1mducmHTPZPDoal4m59pPxxsceXF-y) - Fundamentals of information retrieval systems.

- [UIUC: Text Retrieval and Search Engines](https://www.youtube.com/playlist?list=PLLssT5z_DsK8Jk8mpFc_RPzn2obhotfDO) - Search engine technology and text retrieval methods.

- [Stanford CS276: Information Retrieval and Web Search](http://web.stanford.edu/class/cs276/) - Web-scale search and ranking algorithms.

- [University of Freiburg: Information Retrieval](https://ad-wiki.informatik.uni-freiburg.de/teaching/InformationRetrievalWS1718) - Information retrieval concepts and implementation. [:tv:](https://www.youtube.com/watch?v=QjA7ujQsL0M&list=PLfgMNKpBVg4V8GtMB7eUrTyvITri8WF7i)

---

### Natural Language Processing

Modern NLP leverages deep learning and language models to understand and generate human language. Large language models have dramatically improved language understanding and generation capabilities.

![nlp](images/nlp.png)

#### :books: Textbooks

- [Deep Learning](http://www.deeplearningbook.org/) - Deep learning methods for NLP and sequence models.

- [Introduction to Natural Language Processing](https://www.amazon.com/Introduction-Language-Processing-Adaptive-Computation/dp/0262042843) - Foundations of natural language processing.

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) - Comprehensive NLP textbook covering linguistic and statistical methods.

#### :school: Courses

- [Stanford CS224n: Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/) - Neural networks and deep learning for NLP covering word embeddings, RNNs, and transformers. [[Reference Solutions](https://github.com/leehanchung/cs224n)] :star:

- [Berkeley CS182: Designing, Visualizing, and Understanding Deep Neural Networks](https://cs182sp21.github.io/) - Deep neural network fundamentals applicable to NLP. [:tv:](https://www.youtube.com/watch?v=rSY1pVGdZ4I&list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A) [[Reference Solutions](https://github.com/leehanchung/cs182)]

- [Stanford: CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/spring2025/) - Modern language models built from first principles. :star:

- [NYU: DS-GA 1011 Natural Language Processing with Representation Learning](https://www.youtube.com/playlist?list=PLdH9u0f1XKW_s-c8EcgJpn_HJz5Jj1IRf) - NLP with representation learning and neural methods.

- [Deeplearning.ai Natural Language Processing Specialization](https://www.deeplearning.ai/natural-language-processing-specialization/) - Comprehensive NLP specialization from DeepLearning.AI. [[Reference Solutions](https://github.com/leehanchung/deeplearning.ai-nlp-specialization)]

---

### Vision

Computer vision systems extract meaning from images and video. Modern vision-language models combine visual and textual understanding for comprehensive scene interpretation.

![computer vision](images/computer_vision.png)

#### :books: Textbooks

- [Deep Learning](http://www.deeplearningbook.org/) - Deep learning methods for computer vision tasks.

#### :school: Courses

- [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/) - Comprehensive course on CNNs for image recognition and understanding. [[Assignment 2 Solution](https://github.com/leehanchung/cs182/tree/master/assignment1), [Assignment 3 Solution](https://github.com/leehanchung/cs182/tree/master/assignment2)] :star:

- [Berkeley CS182: Designing, Visualizing, and Understanding Deep Neural Networks](https://cs182sp21.github.io/) - Deep neural network fundamentals with applications to vision. [:tv:](https://www.youtube.com/watch?v=rSY1pVGdZ4I&list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A) [[Reference Solutions](https://github.com/leehanchung/cs182)]

---

### Unsupervised Learning and Generative Models

Unsupervised learning discovers patterns in data without labeled examples. Generative models learn to create new data samples with similar properties to the training data.

![gan](images/gan.png)

#### :school: Courses

- [Stanford CS236: Deep Generative Models](https://deepgenerativemodels.github.io/) - Generative models including VAEs, GANs, and flow-based models.

- [Berkeley CS294-158: Deep Unsupervised Learning](https://sites.google.com/view/berkeley-cs294-158-sp19/home) - Deep learning methods for unsupervised learning tasks.

---

### Foundation Models

Foundation models are large models trained on broad data that can be adapted to many downstream tasks. These courses cover language models, multi-modal models, and model adaptation.

![llm](images/FoO-U_gaYAAIlPZ.jpg)

#### :school: Courses

- [Stanford CS324: Large Language Models (Winter 2022)](https://stanford-cs324.github.io/winter2022/) - Comprehensive course on large language models covering architecture, training, and applications.

- [Stanford CS324: Advances in Foundation Models (Winter 2023)](https://stanford-cs324.github.io/winter2023/) - Advanced topics in foundation models including multi-modal and domain-specific models.

---

### Reinforcement Learning

Reinforcement learning enables agents to learn optimal behaviors through interaction with environments. These courses cover policy gradient methods, value-based learning, and deep reinforcement learning.

![rl](images/rl.jpg)

#### :books: Textbooks

- [Reinforcement Learning](http://www.incompleteideas.net/book/the-book.html) - Foundational textbook on RL by Richard Sutton and Andrew Barto.

- [Deep Learning](http://www.deeplearningbook.org/) - Deep learning methods for reinforcement learning.

#### :school: Courses

- [Coursera: Reinforcement Learning Specialization](https://www.coursera.org/specializations/reinforcement-learning) - Comprehensive RL specialization recommended by Richard Sutton, the author of the foundational RL textbook. :star:

- [Berkeley CS182: Designing, Visualizing, and Understanding Deep Neural Networks](https://cs182sp21.github.io/) - Deep neural network fundamentals with RL applications. [:tv:](https://www.youtube.com/watch?v=rSY1pVGdZ4I&list=PL_iWQOsE6TfVmKkQHucjPAoRtIJYt8a5A) [[Reference Solutions](https://github.com/leehanchung/cs182)]

- [Stanford CS234: Reinforcement Learning](https://web.stanford.edu/class/cs234/) - Reinforcement learning algorithms and applications.

- [Berkeley CS285: Deep Reinforcement Learning](http://rail.eecs.berkeley.edu/deeprlcourse/) - Deep RL covering policy gradients, Q-learning, and actor-critic methods. :star:

- [CS 330: Deep Multi-Task and Meta Learning](http://cs330.stanford.edu/) - Meta-learning and multi-task learning for fast adaptation. [Videos](https://www.youtube.com/playlist?list=PLoROMvodv4rMC6zfYmnD7UG3LVvwaITY5)

- [Berkeley: Deep Reinforcement Learning Bootcamp](https://sites.google.com/view/deep-rl-bootcamp/lectures) - Intensive bootcamp on deep reinforcement learning fundamentals.

- [OpenAI Spinning Up](https://spinningup.openai.com/en/latest/) - Practical introduction to deep RL from OpenAI.

- [IDS at Stanford RL Forum](https://stanford.zoom.us/rec/share/3Xd-OxnFkFfXV3UBRGo68iScSbckWF-3OKuVQkEQc_igSL9JRyuwDvgXDArMHtFz.6s3GFT1XBvZf7eis?startTime=1610388191000) - Video 1 of RL forum discussion. [Video 2](https://stanford.zoom.us/rec/share/8Ex0ug8ueM0G3DLAW4XLYTlhgV812fOkL5aUYjxes6JFysWglqa-FCNryj-GUn2a.21yA0Q1WPwhwZMgF?startTime=1610560965000) [Slides](https://drive.google.com/file/d/1KSFVptieJ-b115mLqAYfp2pVhJZ02qWh/view?usp=sharing)

---

### Robotics

Robotics applies machine learning and control theory to physical systems. These courses cover kinematics, dynamics, planning, and learning for robotic control.

:robot:

![robotics](images/robotics.png)

#### :school: Courses

- [ColumbiaX: CSMM.103x Robotics](https://courses.edx.org/courses/course-v1:ColumbiaX+CSMM.103x+1T2020/) - Robotics fundamentals covering kinematics, dynamics, and control.

- [UC Berkeley CS 287: Advanced Robotics](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/) - Advanced robotics covering planning, learning, and control for manipulation.

---

## Case Studies

Technical case studies from companies applying and scaling machine learning systems.

- [Google: Best Practices for Machine Learning](https://developers.google.com/machine-learning/guides/rules-of-ml) - Rules and best practices for machine learning projects from Google.

- [ByteDance: How TikTok Wins The Social Media Recommendation System War](https://leehanchung.github.io/2020-02-18-Tik-Tok-Algorithm/) - Technical breakdown of TikTok's recommendation algorithm. (transcription)

- [NerdWallet: How NerdWallet Dialed Machine Learning Up to 11](https://www.nerdwallet.com/blog/engineering/how-nerdwallet-dialed-machine-learning-up-to-11/) - Case study on scaling ML infrastructure at fintech company.

- [AI Dungeon: How we scaled AI Dungeon 2 to support over 1,000,000 users](https://medium.com/@aidungeon/how-we-scaled-ai-dungeon-2-to-support-over-1-000-000-users-d207d5623de9) - Infrastructure lessons from scaling a generative AI application.

- [Spotify: The Winding Road to Better Machine Learning Infrastructure Through Tensorflow Extended and Kubeflow](https://labs.spotify.com/2019/12/13/the-winding-road-to-better-machine-learning-infrastructure-through-tensorflow-extended-and-kubeflow/) - Building ML infrastructure for music recommendation at Spotify.

- [Trigo: How Trigo built a scalable AI development & deployment pipeline for Frictionless Retail](https://medium.com/pytorch/how-trigo-built-a-scalable-ai-development-deployment-pipeline-for-frictionless-retail-b583d25d0dd) - AI/ML pipeline development for computer vision retail applications.

---

## License

All books, blogs, and courses are owned by their respective authors.

This compilation and reference solutions are released under the **CC0 1.0 Universal** license, which means:
- You are free to use this compilation for any purpose (personal, educational, commercial)
- No permission or attribution is required
- All copyrighted content referenced remains owned by its original authors

When using reference solutions or citing this work, you may optionally use:

```bibtex
@misc{leehanchung,
  author = {Lee, Hanchung},
  title = {Awesome Full Stack Machine Learning Engineering Courses},
  year = {2020},
  howpublished = {GitHub Repository},
  url = {https://github.com/leehanchung/awesome-full-stack-machine-learning-courses}
}
```

See [LICENSE](LICENSE) for full CC0 1.0 Universal license details.

---

## Contributing

Contributions are welcome! If you have course recommendations, case studies, or improvements to share, please follow the [contribution guidelines](CONTRIBUTING.md).

To contribute:
1. Fork the repository
2. Create your feature branch
3. Add your changes following the format: `- [Name](URL) - Brief description.`
4. Submit a pull request

Thank you for helping improve this resource!
