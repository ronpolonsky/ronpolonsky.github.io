// Add your actual details here. Text is rendered as text, not HTML.
window.siteContent = {
  bio: 'I am an M.S. student in Computer Science at Stanford University, where I am advised by Chelsea Finn. My research focuses on reinforcement learning. Previously, I earned a B.S. in Computer Science from Stanford University.',
  portrait: '', // e.g. assets/portrait.jpg
  links: [{ label: 'GitHub', url: 'https://github.com/ronpolonsky' }],
  researchIntro: '',
  papers: [
    {
      title: 'Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning?',
      authors: 'Perry Dong*, Ron Polonsky*, Dorsa Sadigh, Chelsea Finn',
      venue: 'arXiv preprint · 2026',
      note: '* Equal contribution',
      description: 'Shows that standard Q-function pretraining gives little benefit over random initialization, and introduces Initialization via Policy Ensemble (IPE), which bootstraps Q-learning from the pooled rollouts of several diverse pretrained policies for more effective online RL fine-tuning.',
      image: 'assets/ipe.png',
      tags: ['Reinforcement Learning'],
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2607.27203' },
        { label: 'PDF', url: 'https://arxiv.org/pdf/2607.27203' },
      ],
    },
    {
      title: 'Document Optimization for Black-Box Retrieval via Reinforcement Learning',
      authors: 'Omri Uzan, Ron Polonsky, Douwe Kiela, Christopher Potts',
      venue: 'arXiv preprint · 2026',
      description: 'We fine-tune LMs with RL to rewrite documents into better representations for a target black-box retriever, allowing smaller retrievers to match or beat larger retrievers on code and visual document retrieval tasks.',
      image: 'assets/docopt.png',
      tags: ['Reinforcement Learning', 'Information Retrieval'],
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2604.05087' },
        { label: 'PDF', url: 'https://arxiv.org/pdf/2604.05087' },
      ],
    },
  ],
  // Paper: { title, authors, venue, description, image, tags: ['Robotics'],
  //          links: [{ label: 'Paper', url: 'https://...' }] }
  education: [
    {
      title: 'Stanford University',
      subtitle: 'B.S. in Computer Science',
      date: 'Spring 2026',
      gpa: 'GPA: 4.14/4.0',
      image: 'assets/stanford.png',
    },
  ],
  experience: [],
  service: [],
  teaching: [],
  // Entries: { title, subtitle, date, description, image }
};
