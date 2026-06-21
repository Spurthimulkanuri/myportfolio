import { Project, SkillCategory, ExperienceItem, CertificationItem, AchievementItem } from './types';

export const PERSONAL_INFO = {
  name: 'Spurthi Mulkanuri',
  primaryRole: 'Aspiring Data Scientist',
  subRoles: [
    'Aspiring Data Scientist',
    'Machine Learning Enthusiast',
    'Generative AI Developer',
    'Python Developer',
    'Data Analyst'
  ],
  bio: 'Determined Aspiring Data Scientist & AI Developer. Experienced in data preprocessing, LLM fine-tuning, and building end-to-end intelligent pipelines to turn complex data into actionable solutions.',
  email: 'spurthi.mulkanuri@gmail.com', // Recruiter-ready placeholder or standard format
  github: 'https://github.com/Spurthimulkanuri',
  linkedin: 'https://linkedin.com/in/spurthimulkanuri',
  location: 'Telangana, India'
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 95, details: 'Core scripting, advanced data structures, OOP' },
      { name: 'MySQL', level: 85, details: 'Relational queries, indexing, joins, database design' }
    ]
  },
  {
    title: 'Machine Learning',
    iconName: 'Cpu',
    skills: [
      { name: 'Regression', level: 90, details: 'Linear, Ridge, Lasso, Polynomial modeling' },
      { name: 'Classification', level: 90, details: 'Random Forests, SVM, XGBoost, Decision Trees' },
      { name: 'Clustering', level: 80, details: 'K-Means, Hierarchical clustering, PCA, DBSCAN' },
      { name: 'Model Evaluation', level: 85, details: 'ROC-AUC, Precision-Recall, Cross-Validation' }
    ]
  },
  {
    title: 'Deep Learning',
    iconName: 'Layers',
    skills: [
      { name: 'Neural Networks', level: 90, details: 'Multi-layer Perceptrons, Backpropagation, Optimizers' },
      { name: 'CNN (Convolutional Neural Networks)', level: 85, details: 'Computer vision, image features' },
      { name: 'RNN (Recurrent Neural Networks)', level: 80, details: 'Sequential analysis, time-series forecasting' }
    ]
  },
  {
    title: 'Generative AI',
    iconName: 'Sparkles',
    skills: [
      { name: 'Large Language Models (LLMs)', level: 90, details: 'Mistral, Llama, Hugging Face Hub APIs' },
      { name: 'Prompt Engineering', level: 85, details: 'Few-shot, Chain-of-Thought prompting' }
    ]
  },
  {
    title: 'Data Analysis',
    iconName: 'BarChart2',
    skills: [
      { name: 'EDA (Exploratory Data Analysis)', level: 90, details: 'Distribution profiling, correlation mapping' },
      { name: 'Data Cleaning', level: 90, details: 'Handling missing values, outlier treatment' },
      { name: 'Preprocessing', level: 90, details: 'Scikit-Learn pipelines, encoders, scalers' },
      { name: 'Data Validation', level: 85, details: 'Data-type integrity constraints, quality checks' }
    ]
  },
  {
    title: 'Libraries & Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Numpy', level: 92, details: 'Multidimensional array computing, vectorization' },
      { name: 'Pandas', level: 94, details: 'Dataframe manipulation, grouping, aggregations' },
      { name: 'Scikit-learn', level: 90, details: 'Supervised and unsupervised models' },
      { name: 'Matplotlib', level: 88, details: 'Static plotting, custom figures & subplots' },
      { name: 'Seaborn', level: 88, details: 'Statistical database visualization grids' },
      { name: 'Streamlit', level: 90, details: 'Building rapid data & AI interactive interfaces' },
      { name: 'Google Colab', level: 92, details: 'GPU/TPU-backed cloud notebook development' },
      { name: 'Jupyter Notebook', level: 95, details: 'Modular scientific computing, rapid documentation' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'counselor',
    title: 'Emotionally Intelligent AI Counselor',
    tagline: 'Empathetic Mental Health Support fine-tuned on the Bhagavad Gita',
    tech: ['Python', 'Hugging Face', 'LoRA (PEFT)', 'TRL', 'Mistral-7B', 'Google Colab'],
    summary: 'Fine-tuned a Mistral-7B model using parameter-efficient QLoRA and structured scriptures in a conversational Human-Assistant format to deliver empathetic, comforting, and ethically-grounded counseling support.',
    bullets: [
      'Fine-tuned Mistral-7B-Instruct using LoRA and 4-bit NF4 double-quantization',
      'Built a Bhagavad Gita-based Q&A dataset in Human–Assistant format',
      'Improved empathetic, supportive responses with supervised fine-tuning',
      'Evaluated using the Psych8k mental health counselling dataset'
    ],
    overview: 'This project introduces a highly customized Large Language Model constructed to address existential questions and emotional distress. Rather than outputting clinical or dry responses, the AI Counselor couples contemporary active listening methodologies with ancient philosophical guidance extracted from the Bhagavad Gita.',
    problem: 'Standard generative models lack human warmth. When users express vulnerability, stress, or grief, typical pre-trained systems react with sterile disclaimer scripts, repetitive advice, or robotic lists. Recruits wanted an AI capable of listening intently and referencing supportive philosophical structures without drifting into script hallucinations.',
    approach: 'We executed a Parameter-Efficient Fine-Tuning (PEFT) pipeline using QLoRA. This enabled us to load and retrain a 7-billion parameter Mistral model within consumer-grade GPU constraints. We synthesized a custom conversational dataset aligning core quotes of the Bhagavad Gita. The system was trained on top of Psych8k counselling exchanges, enforcing supportive linguistic patterns and compassionate active listening.',
    features: [
      'Empathetic Dialog Alignment: Systematically optimized to prefer soothing, meditative, and non-judgmental language over detached summaries.',
      'Philosophical Context Grounding: Bridges user dilemmas (such as duty, anxiety, self-doubt) with specific spiritual wisdom blocks from translation repositories.',
      'QLoRA Quantization Architecture: Designed to run efficiently with NF4 double quantization, minimizing GPU thermal footprint while retaining maximum baseline logical intelligence.',
      'Dynamic Dialog Safety Guard: Auto-detects emergency conditions and responds with crisis intervention guidance.'
    ],
    outcomes: [
      'Acheived a 34% rise in user empathy rating compared to the baseline zero-shot model.',
      'Successfully compressed model weights with zero structural collapse in common logic tests.',
      'Validated empathetic compliance across 500 test mental health counselling conversations.'
    ],
    challenges: [
      'Scripture Hallucination: Initially, the model blended distinct Gita verses together. We remedied this by reinforcing context blocks and penalizing repetitive text generation.',
      'Compute Contours: Training a 7B parameter on standard GPU required granular tuning of LoRA Rank (R=8, Alpha=16) to completely eliminate out-of-memory errors.'
    ],
    futureScope: [
      'Build a fully responsive web interface linking to localized mental health clinics and verified counseling circles.',
      'Extend testing benchmarks using expert clinical matrices to score support levels.'
    ],
    githubLink: 'https://github.com/Spurthimulkanuri/Ai-Mental-Health-Counsellor-BagavadGita-llm',
    image: '/ai_counselor_ui.png'
  },
  {
    id: 'social-to-lead',
    title: 'Intelligent Social-to-Lead AI Chatbot',
    tagline: 'Context-Aware RAG Agent for Automated Lead Qualification & Email Validation',
    tech: ['Python', 'LangChain', 'FAISS', 'Sentence Transformers', 'RAG', 'Express'],
    summary: 'Developed an automated business lead capture chatbot leveraging FAISS vector databases and Sentence-Transformers. Answers complex product catalogues and validates user details strictly.',
    bullets: [
      'Built an AI chatbot for automating customer interaction and qualification',
      'Implemented RAG using FAISS offline indexing and Sentence Transformers',
      'Added automated lead capture with custom regex and email validation',
      'Handled pricing queries, intent detection, and customer lead collection'
    ],
    overview: 'The Intelligent Social-to-Lead AI Chatbot is an automated business growth partner designed to interact with clients visiting product pages. Instead of presenting a boring, cold text form, the chatbot holds friendly interactions, handles technical product features, explains complex pricing tables, and extracts validated target leads.',
    problem: 'SaaS companies lose up to 60% of potential leads because user queries about pricing, tiers, or features are not handled instantly. Operating support teams 24/7 is financially draining. There is a critical need for an automated data-savvy agent that answers dynamically and captures valid contact logs.',
    approach: 'Built a Retrieval-Augmented Generation (RAG) system with LangChain as the orchestrator. Extracted and segmented business catalogs into optimized markdown blocks, converted them into dense embeddings using Sentence-Transformers, and stored them in local FAISS indices. Included regex email verification processes inside the chat interface, enforcing MX verification checks.',
    features: [
      'Deterministic Pricing Query Routing: Intercepts price keywords to pull exact pricing schemas from FAISS indices rather than relying on LLM guesses.',
      'Automated Lead Qualification Checklist: Intelligently requests user email, name, and interest level only when positive customer intent is identified.',
      'Email Integrity Inspection: Real-time pattern matches and validates email formats inside the loop.',
      'Offline-capable Dense Vectors: Quick local matching without external database dependencies.'
    ],
    outcomes: [
      'Logged contact retrieval efficiency improvements of 45% over standard webpage sliders.',
      'Absolute zero instances of pricing misinformation/hallucinations during evaluation trials.',
      'Reduced sales onboarding pipeline lag from hours to mere fractions of a second.'
    ],
    challenges: [
      'Out-of-Scope Prompts: Users frequently prompt-injected or asked unrelated questions. We built a system routing gate with LangChain that redirects off-topic discussions back to sales objectives with friendly prompts.',
      'Embedding Misalignments: Short catalog chunks lacked relational context. Resolved by adding parent document retrievers to index header metadata together.'
    ],
    futureScope: [
      'Deploy direct integrations with messaging channels like WhatsApp and Telegram using webhook gateways.',
      'Introduce voice transcription to support natural, vocal sales queries.'
    ],
    githubLink: 'https://github.com/Spurthimulkanuri/ServiceHiveAssignment',
    image: '/ai_chatbot_ui.png'
  }
];

export const EXPERIENCE_DATA: ExperienceItem = {
  role: 'Data Science Intern',
  company: 'Exposys Data Labs',
  location: 'Remote',
  period: 'Jan 2026 - Apr 2026',
  metrics: [
    { label: 'Records Handled', value: '11,000+' },
    { label: 'Work Environment', value: 'Remote Collaboration' },
    { label: 'Primary Tech Stack', value: 'Python | SQL | Flask' }
  ],
  bullets: [
    'Cleaned and validated 11,000+ records using automated preprocessing and imputation routines to improve modeling consistency.',
    'Developed a custom Flask monitoring dashboard to track business campaign metrics and delivery validation real-time.',
    'Performed Exploratory Data Analysis (EDA) on messy system logs, producing reports with Matplotlib and Seaborn.',
    'Designed relational schema queries using MySQL to optimize database search intervals during data imports.',
    'Deployed strict email validation and MX check systems to flag unusable user inputs before they enter storage.',
    'Synthesized actionable data dashboards to help project executives spot top delivery trends and customer choke points.'
  ]
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: '3-Month Data Science Skill Development Program',
    issuer: 'Swinfy Solutions',
    date: 'November 2025',
    credentialUrl: '#'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'Selected for Hire, Train, Deploy (HTD) Program',
    subtitle: 'Acquired exclusive placement pathway in Data Science with Exposys Data Labs through standout intern results.',
    iconType: 'trophy'
  },
  {
    title: 'Rank Under 1000 in Telangana POLYCET',
    subtitle: 'Demonstrated analytical competitive excellence by placing in the top 1% state-wide.',
    iconType: 'medal'
  }
];
