import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'grapesense',
    title: 'GrapeSense',
    role: 'Computer Vision Researcher · EPIC Laboratory, Santa Clara University',
    dates: 'Jun. 2024 – Present',
    tags: ['SAM2', 'Flux', 'IP-Adapter', 'YOLOv11', 'PyTorch'],
    description: [
      'Built a multimodal image-to-image diffusion pipeline using SAM2, Flux and IP-Adapter to generate high-feature training data of diseased grape crops in vineyard settings.',
      'Optimized, trained and analyzed a YOLOv11 model for grape disease classification, evaluating it with mAP@50, confusion matrices and loss curves.',
      'Presented our collaborative research paper at the IEEE SmartAgri&SuSy Conference as first author, fielding audience questions and exchanging ideas with experts in the field.',
    ],
  },
  {
    id: 'cuneiform-ocr',
    title: 'Cuneiform OCR',
    role: 'Intern · Tokenworks LLC',
    dates: 'Aug. 2026 – Present',
    tags: ['OCR', 'Computer Vision'],
    description: [
      'Developing an OCR and computer vision workflow to translate Assyrian cuneiform text.',
    ],
  },
  {
    id: 'redbean',
    title: 'RedBean',
    role: 'A productivity app',
    dates: 'May 2025 – Oct. 2025',
    tags: ['SwiftUI', 'MVVM', 'Stream API', 'Firebase'],
    description: [
      'A mobile app for studying alongside friends, with video calling, synchronized task lists and a Pomodoro timer.',
      'Built with the MVVM architecture to manage screen navigation and persistent data.',
    ],
  },
  {
    id: 'cs61a',
    title: 'CS61A Course Staff',
    role: 'Teaching Intern · Berkeley EECS',
    dates: 'Aug. 2026 – Present',
    tags: ['Teaching', 'Python', 'Functional Programming'],
    description: [
      'Teaching algorithmic thinking and the fundamentals of functional programming, and helping students debug their assignments.',
    ],
  },
  {
    id: 'calhacks',
    title: 'Hackathons at Berkeley',
    role: 'Director · CubStart iOS Lecturer',
    dates: 'CalHacks 13.0',
    tags: ['Organizing', 'iOS', 'Teaching'],
    description: [
      'Director with Hackathons at Berkeley, helping organize CalHacks 13.0.',
      'Lecturer for CubStart iOS, teaching students to build their first iOS apps.',
    ],
  },
  {
    id: 'youth4climate',
    title: 'Youth4Climate',
    role: 'President',
    dates: '',
    tags: ['Leadership', 'Climate'],
    description: [
      'Led Youth4Climate as president. I care about genetic applications for plant efficiency against climate change.',
    ],
  },
  {
    id: 'restitch',
    title: 'ReStitch',
    role: 'LLM chatbot · Kode With Klossy AI/ML camp',
    dates: 'Jul. 2025',
    tags: ['Python', 'HuggingFace', 'RAG', 'PyTorch', 'TensorFlow'],
    description: [
      'A chatbot that suggests crafting ideas for upcycling old items, built with Retrieval Augmented Generation and NLP vector tokenization.',
      'Worked with my team through the full process: pitching, wireframing, developing and presenting the first iteration.',
    ],
  },
]
