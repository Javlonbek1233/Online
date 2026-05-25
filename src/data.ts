import { Course, Instructor, BlogPost, PricingPlan } from './types';

// Instructors
export const INSTRUCTORS: Instructor[] = [
  {
    id: 'inst-1',
    name: 'Dr. Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
    title: 'Ex-Google Staff engineer & AI Researcher',
    bio: 'Sarah is an industry pioneer in computer science, holding a Ph.D. in AI from Stanford. Over the last 12 years, she has designed production systems for Google, Meta, and Netflix. She focuses on translating high-level complex distributed architecture and AI systems into accessible concepts for engineers of all levels.',
    rating: 4.9,
    reviewsCount: 14250,
    studentsCount: 185400,
    coursesCount: 3,
    achievements: ['Top Tech Educator 2024', 'Author of "Next-Gen AI Systems"', 'Keynote Speaker at PyCon & NeurIPS']
  },
  {
    id: 'inst-2',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    title: 'Lead Designer & Creative Director',
    bio: 'Marcus is a passionate UI/UX expert with over 15 years of active digital design agency background. He has created interfaces for leading companies, combining functional design science with visual aesthetic rigor. His teaching philosophy emphasizes live design critiques, visual hierarchy theory, and interaction science.',
    rating: 4.85,
    reviewsCount: 8930,
    studentsCount: 92100,
    coursesCount: 2,
    achievements: ['Apple Design Award Winner', 'Awwwards Judge Since 2021', 'Design Lead at Sequoia-backed startups']
  },
  {
    id: 'inst-3',
    name: 'Liam Carter',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    title: 'Senior Product Lead & Agilist',
    bio: 'Liam is a product leadership advisor and scrum master. Having managed products at Spotify, Uber, and Wise, he brings raw executive insights from the global tech front. He teaches real-world frameworks for market validation, visual roadmapping, and managing engineering-to-business translation.',
    rating: 4.78,
    reviewsCount: 5410,
    studentsCount: 43200,
    coursesCount: 1,
    achievements: ['Product Council Member', 'Featured Writer at Mind the Product', 'Certified Scaled Agile Framework Coach']
  }
];

// Courses
export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'The Full-Stack React & Node Developer Bootcamp',
    subtitle: 'Master React 19, Node.js, Express, and modern Cloud Run deployment in one comprehensive course.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80',
    description: 'Build robust, production-ready full-stack web applications. Learn state management, API design, database structures, and responsive layouts.',
    longDescription: 'Are you ready to become a confident, highly paid web engineer? This software bootcamp guides you from fundamental web states to cloud-deployed secure application servers. Instructed by industry staff engineers, you will learn React 19 architecture, asynchronous state, custom custom-hooks, server-side data models, routing controllers, and security standards.\n\nYou will build an offline-first workspace, complete nested routing with performance parameters, and utilize state synchronization. Perfect for transitioning developers looking to leap into engineering excellence.',
    rating: 4.8,
    reviewsCount: 3820,
    duration: '42h 15m',
    level: 'Beginner',
    category: 'Development',
    price: 94.99,
    isBestSeller: true,
    skillsLearned: [
      'React 19 functional patterns and hooks',
      'Asynchronous state managers and data structures',
      'Node.js & Express server routing architecture',
      'Client-side state synchronization with LocalStorage',
      'Tailwind CSS layouts & fluid layouts',
      'Authentication flows and JSON Web Token models'
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, and elementary JavaScript variables',
      'A computer with access to terminal tools and a text editor'
    ],
    instructor: INSTRUCTORS[0],
    chapters: [
      {
        id: 'c1-ch-1',
        title: 'Introduction & Local Setup Architecture',
        lessons: [
          { id: 'l-101', title: 'Welcome to the Bootcamp & Course Roadmap', duration: '08:12', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', isFreePreview: true },
          { id: 'l-102', title: 'Terminal Tools, VS Code Secrets, and Setup', duration: '12:45', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          { id: 'l-103', title: 'Node v22 Runtime & Package Managers Deep Dive', duration: '15:20', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
        ]
      },
      {
        id: 'c1-ch-2',
        title: 'The React 19 Landscape',
        lessons: [
          { id: 'l-104', title: 'Why React 19? Virtual DOM vs Fine-Grained Updates', duration: '19:40', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', isFreePreview: true },
          { id: 'l-105', title: 'Functional Components & Immutable Props Structure', duration: '22:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback.mp4' },
          { id: 'l-106', title: 'Advanced state with useState & useReducer Hooks', duration: '28:30', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' }
        ]
      },
      {
        id: 'c1-ch-3',
        title: 'Backend Frameworks with Express',
        lessons: [
          { id: 'l-107', title: 'Introducing Node HTTP Server Controls', duration: '18:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
          { id: 'l-108', title: 'Express Middleware Pattern & Route Isolation', duration: '25:40', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }
        ]
      }
    ],
    reviews: [
      { id: 'r1-1', userName: 'Emily Thorne', userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', rating: 5, date: '12 days ago', comment: 'Absolutely brilliant flow! Dr. Sarah breaks down high-level architectural concepts with incredibly simple metaphors. The project has directly helped me land junior react roles!' },
      { id: 'r1-2', userName: 'David Kim', userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80', rating: 4, date: '1 month ago', comment: 'Very deep and covers real-world debugging workflows instead of pre-rehearsed slides. I wish some lessons on Redux were included, but modern Context + custom hooks cover almost all patterns.' }
    ],
    quiz: {
      id: 'q-course-1',
      title: 'Full-Stack React & Node Essentials Assessment',
      questions: [
        {
          id: 'q1-1',
          question: 'Which of the following hooks is newly streamlined or introduced/heavily optimized in React 19 for asynchronous data interactions?',
          options: ['useActionState', 'useEffect', 'useLayoutEffect', 'useImperativeHandle'],
          correctAnswer: 0,
          explanation: 'React 19 introduces useActionState (primarily called useFormState previously) and action paradigms to natively manage form feedback, error state, and pending states during async transactions.'
        },
        {
          id: 'q1-2',
          question: 'How do you handle client-side environment secrets with Vite that need visibility in browser scripts?',
          options: ['Prefix the variable with VITE_', 'Place them in package.json', 'Add them into index.html directly', 'Write them as process.env declarations without prefixing'],
          correctAnswer: 0,
          explanation: 'Vite reserves VITE_ as the specific prefix. Any environment variable starting with VITE_ will be bundle-injected and readable inside your React components via import.meta.env.VITE_VAR.'
        },
        {
          id: 'q1-3',
          question: 'What is the purpose of CORS middleware in an Express application?',
          options: ['Encrypt incoming request payloads', 'Implement security headers allowing cross-origin resource sharing from specified client bundles', 'Serve static HTML files fast', 'Automate data schema serialization'],
          correctAnswer: 1,
          explanation: 'Cross-Origin Resource Sharing (CORS) header configuration governs whether foreign domain clients (like your Vite local host) can successfully query endpoints made to your node developer server.'
        }
      ]
    }
  },
  {
    id: 'course-2',
    title: 'Data Science & Neural Networks Masterclass',
    subtitle: 'Build predictive AI engines, analyze datasets with Python, and configure TensorFlow deep neural nets.',
    coverImage: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=1000&auto=format&fit=crop&q=80',
    description: 'A mathematical and code-heavy guide to intelligence structures. Unleash pandas, scikit-learn, decision trees, neural weights, and Gemini model tuning parameters.',
    longDescription: 'Demystify artificial intelligence. This intensive masterclass begins with mathematical fundamentals—vector arrays, matrix structures, standard gradients, and statistics—before diving into pure coding models using Python, Jupyter, and TensorFlow.\n\nYou will build custom neural structures, evaluate precision and recall rates, and configure advanced model training weights. Additionally, we cover embedding pipelines, vector databases (like Milvus or Pinecone), and standard APIs designed to extract textual structure. Transform your mathematical curiosity into solid tech deliverables.',
    rating: 4.92,
    reviewsCount: 2190,
    duration: '38h 40m',
    level: 'Advanced',
    category: 'Data Science & AI',
    price: 119.99,
    isBestSeller: true,
    skillsLearned: [
      'Multi-variable regression models & gradient descent math',
      'Advanced Pandas database structures and cleanup pipelines',
      'Configuring convolutional neural nets (CNNs) in TensorFlow',
      'Validating training metrics, loss configurations, and overfitting',
      'Designing vector semantic search engines'
    ],
    requirements: [
      'An algebra-level understanding of functions and basic coordinate math',
      'A working knowledge of intermediate Python lists, functions, and dictionaries'
    ],
    instructor: INSTRUCTORS[0],
    chapters: [
      {
        id: 'c2-ch-1',
        title: 'Core Math and Data Preprocessing',
        lessons: [
          { id: 'l-201', title: 'Why Neural Networks? Historical Evolution', duration: '14:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', isFreePreview: true },
          { id: 'l-202', title: 'Vector & Matrix Mathematics for Artificial Nets', duration: '24:50', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          { id: 'l-203', title: 'Pandas DataFrames: Handling Nulls, Outliers, and Joins', duration: '31:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' }
        ]
      },
      {
        id: 'c2-ch-2',
        title: 'Machine Learning Pipelines with Scikit-Learn',
        lessons: [
          { id: 'l-204', title: 'Supervised Learning Regression vs Classification Metrics', duration: '20:45', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
          { id: 'l-205', title: 'Feature Scaling & Cross-Validation Strategies', duration: '28:30', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' }
        ]
      }
    ],
    reviews: [
      { id: 'r2-1', userName: 'Aiden Patel', userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', rating: 5, date: '3 days ago', comment: 'Rigorous and comprehensive! Most AI courses skip the backpropagation math and let you just type fit(). Here, you understand the actual coefficients. Simply incredible.' }
    ],
    quiz: {
      id: 'q-course-2',
      title: 'Neural Networks & AI Structure Review',
      questions: [
        {
          id: 'q2-1',
          question: 'What is overfitting in machine learning algorithms?',
          options: [
            'When the system trains too fast',
            'When a model performs exceptionally on training data but fails to generalize on unseen test data',
            'When you do not import enough tensor packages',
            'When visual charts fail to render correctly'
          ],
          correctAnswer: 1,
          explanation: 'Overfitting occurs when a mathematical model is highly complex and memorizes noise/relationships unique only to the training set, severely degrading its score on real-world inputs.'
        },
        {
          id: 'q2-2',
          question: 'What is the primary role of an Activation Function (e.g., ReLU, Sigmoid) in deep neural nodes?',
          options: [
            'To accelerate CPU cooling',
            'To introduce non-linearity, allowing the model to project and solve highly complex boundaries',
            'To delete unused database records',
            'To format printable vector charts'
          ],
          correctAnswer: 1,
          explanation: 'Without non-linear activation functions, a neural net with infinitely many hidden layers behaves exactly like a single simple linear regression node.'
        }
      ]
    }
  },
  {
    id: 'course-3',
    title: 'Advanced UI/UX Design & Interaction Masterclass',
    subtitle: 'Learn visual hierarchy, interactive animations, digital typography, and design tokens.',
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1000&auto=format&fit=crop&q=80',
    description: 'Transform raw sketches into high-end design systems. Master vector layouts, micro-animations, design grids, color physics, and high-fidelity prototype handoffs.',
    longDescription: 'Design is not just how things look; it is how they interact and feel. This masterclass centers on visual logic, interaction psychology, and structural mechanics. Led by an Apple Design Award winner, this course bridges the critical gap between raw design vectors and scalable frontend assets.\n\nYou will master responsive system grids, the mathematics of human cognitive layouts (Fitts Law, Hick Law), dark-contrast ratio science, and complex vector transitions. Ideal for self-taught UI designers or developers looking to craft custom elite designs from scratch.',
    rating: 4.88,
    reviewsCount: 1980,
    duration: '22h 30m',
    level: 'Intermediate',
    category: 'Design & Creative',
    price: 79.99,
    isBestSeller: false,
    skillsLearned: [
      'Advanced auto-layouts and adaptive constraints',
      'Formulating typography pairings and micro-spacings',
      'Applying accessibility scales (WCAG Contrast Rules)',
      'Creating production-ready design tokens',
      'Configuring dynamic micro-animations'
    ],
    requirements: [
      'Access to standard design software (such as Figma or web mockups)',
      'An eye for detail and appreciation of typography spacing'
    ],
    instructor: INSTRUCTORS[1],
    chapters: [
      {
        id: 'c3-ch-1',
        title: 'Form, Weight, and Space Foundations',
        lessons: [
          { id: 'l-301', title: 'The Visual Hierarchy Hierarchy Checklist', duration: '15:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', isFreePreview: true },
          { id: 'l-302', title: 'Color Physics: HSL vs RGB & Perceived Lumens', duration: '21:30', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
          { id: 'l-303', title: 'The 8pt Grid Standard in Responsive Ecosystems', duration: '18:45', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }
        ]
      },
      {
        id: 'c3-ch-2',
        title: 'Micro-Interactions and Visual Physics',
        lessons: [
          { id: 'l-304', title: 'Cognitive Usability: Fitts Law and Click Zones', duration: '14:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          { id: 'l-305', title: 'Easing Dynamics, Mass, and Spring Physics', duration: '26:50', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' }
        ]
      }
    ],
    reviews: [
      { id: 'r3-1', userName: 'Genevieve Roy', userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', rating: 5, date: '2 weeks ago', comment: 'Marcus is an absolute design wizard! His lesson on colors and optical balance changed the way I look at buttons entirely. I changed my portfolio, got an agency upgrade. Highly recommended!' }
    ],
    quiz: {
      id: 'q-course-3',
      title: 'Interaction Design & Typography Assessment',
      questions: [
        {
          id: 'q3-1',
          question: 'According to the WCAG guidelines, what is the minimum contrast ratio required for standard body text?',
          options: ['3.0 : 1', '4.5 : 1', '7.0 : 1', '2.0 : 1'],
          correctAnswer: 1,
          explanation: 'WCAG AA requires a contrast ratio of at least 4.5:1 for normal text (under 18pt) and 3:1 for large, bold headings.'
        },
        {
          id: 'q3-2',
          question: 'What does Hick’s Law dictate in user interface layout psychology?',
          options: [
            'Colors should prioritize physical warm balances',
            'The time it takes for a user to make a decision increases logarithmically with the number and complexity of options.',
            'Always position core headers directly on top',
            'Interactive elements need shadows to symbolize weight'
          ],
          correctAnswer: 1,
          explanation: 'Hick-Hyman Law explains that more choices overwhelm user brains, suggesting layouts should stagger selection nodes to lower decision fatigue.'
        }
      ]
    }
  },
  {
    id: 'course-4',
    title: 'Modern Product Leadership & Validation Core',
    subtitle: 'From zero validation to scaling international roadmaps with live customer feedback.',
    coverImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=100&auto=format&fit=crop&q=80',
    description: 'Learn discovery frameworks, design sprints, visual charts, KPIs, scrum prioritization, and developer sync protocols.',
    longDescription: 'Product Management is an art and science. This detailed roadmap will teach you validation formulas, scrum-master operations, and scaling cycles. You will draft PRDs (Product Requirement Documents) that developers appreciate, outline roadmap models, configure key performance charts, and direct sprints with analytical precision.',
    rating: 4.75,
    reviewsCount: 1120,
    duration: '16h 15m',
    level: 'Intermediate',
    category: 'Business & Management',
    price: 69.99,
    isBestSeller: false,
    skillsLearned: [
      'Drafting flawless PRDs & Agile user stories',
      'Configuring quantitative validation surveys',
      'Managing stakeholder timelines & OKRs',
      'Facilitating Scrum and Kanban dev structures'
    ],
    requirements: [
      'Basic exposure to technology team environments'
    ],
    instructor: INSTRUCTORS[2],
    chapters: [
      {
        id: 'c4-ch-1',
        title: 'Validating the Vision',
        lessons: [
          { id: 'l-401', title: 'Why 90% of Startups Fail: The Product Mistake', duration: '12:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', isFreePreview: true },
          { id: 'l-402', title: 'The Opportunity Assessment Canvas', duration: '18:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          { id: 'l-403', title: 'Conducting Unbiased Customer Interviews', duration: '22:40', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
        ]
      }
    ],
    reviews: [
      { id: 'r4-1', userName: 'Zachary Cole', userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', rating: 4, date: '3 weeks ago', comment: 'Liam delivers excellent guidance for real PM scenarios. His validation loops saved our software startup thousands of dollars of useless coding.' }
    ],
    quiz: {
      id: 'q-course-4',
      title: 'Product Leadership Principles Quiz',
      questions: [
        {
          id: 'q4-1',
          question: 'What does the term "MVP" stand for in Product Management frameworks?',
          options: ['Most Value Program', 'Minimum Viable Product', 'Maximum Verified Progress', 'Modular Vector Project'],
          correctAnswer: 1,
          explanation: 'Minimum Viable Product is the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.'
        }
      ]
    }
  },
  {
    id: 'course-5',
    title: 'The Elite copywriting Blueprint: Psychology of Writing',
    subtitle: 'Learn to write highly convincing landing pages, copy structures, and sales triggers.',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&auto=format&fit=crop&q=80',
    description: 'Transform words into action. Master emotional hooks, cognitive triggers, structural clarity, and CTA optimization.',
    longDescription: 'Copywriting is the highest leverage skill on the internet. In this blueprint, you will master human incentive frameworks, modern headline structures, readability scales, CTA click optimizations, and email onboarding sequences.',
    rating: 4.82,
    reviewsCount: 740,
    duration: '11h 50m',
    level: 'Beginner',
    category: 'Marketing',
    price: 0, // FREE
    isBestSeller: false,
    skillsLearned: [
      'Applying the AIDA sales framework (Attention, Interest, Desire, Action)',
      'Constructing emotional visual narrative hooks',
      'Optimizing call-to-actions (CTAs) for conversion clicks',
      'Editing copy structure for modern readability metrics'
    ],
    requirements: [
      'A notebook or text editor, and standard English grammar fluency'
    ],
    instructor: INSTRUCTORS[1],
    chapters: [
      {
        id: 'c5-ch-1',
        title: 'The Psychology of Attention',
        lessons: [
          { id: 'l-501', title: 'Why Bland Copy is Invisible', duration: '11:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', isFreePreview: true },
          { id: 'l-502', title: 'Decoding the Human Incentive Matrix', duration: '16:45', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', isFreePreview: true },
          { id: 'l-503', title: 'The Double-Hook System: Attention + Instant Empathy', duration: '20:30', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
        ]
      }
    ],
    reviews: [
      { id: 'r5-1', userName: 'Leah Vance', userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', rating: 5, date: '1 month ago', comment: 'An absolute masterpiece of concise writing wisdom! The AIDA breakdown is a framework I apply to all my product marketing now.' }
    ],
    quiz: {
      id: 'q-course-5',
      title: 'Copywriting Ethics and Psychology Quiz',
      questions: [
        {
          id: 'q5-1',
          question: 'What does the abbreviation AIDA represent in marketing models?',
          options: [
            'Algorithm, Index, Data, Architecture',
            'Attention, Interest, Desire, Action',
            'Analytical Insight, Distribution, Automation',
            'Authority, Incentive, Demand, Attraction'
          ],
          correctAnswer: 1,
          explanation: 'AIDA outlines the human cognitive journey: attract Attention, spark Interest, fuel Desire, and compel immediate Action.'
        }
      ]
    }
  }
];

// Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Future of Web Development: Demystifying React 19 Paradigms',
    summary: 'A deep architectural look into server components, client components, form Actions, and hook optimizations in the React 19 release.',
    content: 'The web dev world is evolving rapidly. React 19 introduces critical optimizations that redefine client-server limits. Rather than standard client-side fetches triggering waterfall delays, React 19 encourages server-side actions and unified rendering systems. By shifting loading overhead to the cloud and native database drivers, users experience sub-second loads.\n\nKey takeaways:\n- Actions paradigm: React manages async states natively via form action callbacks, which cleans up useState blocks.\n- Document Metadata Support: Standard tags like <title>, <meta>, and <link> can be declared directly inside your deep component hierarchies without third-party head libraries.\n- Asset Loading Integration: Stylesheets, preloader tags, and script elements are automatically batchloaded in the background to prevent cumulative style shifts.\n\nUnderstanding these changes early will elevate your engineering design and keep you highly competitive.',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    date: 'May 12, 2026',
    author: 'Sarah Jenkins',
    authorRole: 'Ph.D. Computer Science',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    category: 'Development',
    readTime: '6 min read'
  },
  {
    id: 'post-2',
    title: 'Visual Weight and Human Eyes: Mastering Interaction Layout Science',
    summary: 'How to structure forms, layouts, margins, and landing grids with scientific precision to guide human decisions.',
    content: 'Why does a premium applet feel incredibly satisfying while an amateur layout looks chaotic? The secret lies in optical balancing, negative space rhythm, and cognitive flow parameters.\n\nDesign rules to apply:\n1. The 8pt Padding Rule: Stick strictly to multiples of 8 (8px, 16px, 24px, 32px...) to configure padding, margins, layouts, and gaps. This aligns visually across all device screens without rounding errors.\n2. Typography Weight: High contrast is your friend. Pair a bold "display" heading (like Plus Jakarta Sans) with a clean "neutral" sans-serif body text (like Inter) with 1.6x tracking ratios.\n3. Perceived Lumens: Do not just use standard dark gray #111111. Blend 3-5% blue tinting into your slate tones. This creates deep eye-safe twilight fields that keep users engaged longer without fatigue.',
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80',
    date: 'May 08, 2026',
    author: 'Marcus Vance',
    authorRole: 'Apple Award Designer',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    category: 'Design',
    readTime: '8 min read'
  },
  {
    id: 'post-3',
    title: 'The AI Engineering Roadmap: Bridging PyTorch Model Math to APIs',
    summary: 'A complete walkthrough of the technologies needed to build scalable AI systems, vector databases, and real-time inference services.',
    content: 'The era of generic wrapper apps is giving way to robust enterprise AI platforms. To join the ranks of elite machine learning engineers, you need to understand both the theory and the integration mechanics.\n\nStart by mastering neural scaling math, then move on to vector search and indices like HNSW, before implementing API routing middleware that maintains session integrity. This blog details how to build highly reliable, fine-tuned retrieval systems using modern developer pipelines.',
    coverImage: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=80',
    date: 'April 28, 2026',
    author: 'Sarah Jenkins',
    authorRole: 'Lead Instructor',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    category: 'Technology',
    readTime: '11 min read'
  }
];

// Pricing Plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-free',
    name: 'Basic Access',
    priceMonthly: 0,
    priceAnnually: 0,
    description: 'Perfect for exploring the platform and testing your learning style.',
    features: [
      'Access to all open free preview chapters',
      'Basic community forum discussions',
      'Standard video playback controls',
      'Digital student transcript'
    ],
    ctaText: 'Get Started for Free'
  },
  {
    id: 'plan-pro',
    name: 'Pro Premium',
    priceMonthly: 29,
    priceAnnually: 240, // 20 / month
    description: 'Unlock our entire catalog of masterclasses, exercises, projects, and credentials.',
    features: [
      'Unlimited access to 80+ elite courses',
      'Interactive graded quizzes & evaluation systems',
      'Downloadable Official Verification Certificates',
      'Direct developer projects & source files',
      'Premium member Discord channels with mentors',
      'No ads & offline-sync capability'
    ],
    isPopular: true,
    ctaText: 'Unlock Pro Access'
  },
  {
    id: 'plan-enterprise',
    name: 'Team Studio',
    priceMonthly: 89,
    priceAnnually: 828, // 69 / month
    description: 'Empower your software or engineering team with customized learning pathways.',
    features: [
      'All Pro features for up to 5 team members',
      'Admin monitoring console & visual statistics',
      'Custom learning path design services',
      'Live QA sessions with Stanford Ph.D. instructors',
      'Dedicated Customer Success representative',
      'SSO Integration & private repository permissions'
    ],
    ctaText: 'Contact Enterprise Sales'
  }
];

// FAQs for Contact
export const FAQS = [
  {
    q: 'How does course enrollment work? Is it a lifetime license?',
    a: 'Absolutely! If you purchase any individual course, you receive lifetime access to the curriculum, code repositories, and any future updates we publish. Subscribing to Pro unlocks the entire catalog dynamically for as long as your membership is active.'
  },
  {
    q: 'Can I download videos and study when offline?',
    a: 'Yes! Pro members can download any course video and view lessons offline using our companion mobile application or sync assets to modern local browsers.'
  },
  {
    q: 'Are the certificates industry-recognized with credentials?',
    a: 'Indeed. Every certificate we issue features a cryptographic Credential ID linked directly to our global database. You can append this link directly to your CV, LinkedIn profile, or job applications to verify your skillset.'
  },
  {
    q: 'Can I get refunds if a course doesn\'t match my workflow?',
    a: 'We offer an unconditional, 30-day money-back guarantee. If you are not fully satisfied with a course, you can request a complete refund in one click on your student dashboard.'
  }
];
