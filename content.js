// Add your actual details here. Text is rendered as text, not HTML.
window.siteContent = {
  bio: 'Welcome to my personal website. Biography coming soon.',
  portrait: '', // e.g. assets/portrait.jpg
  links: [{ label: 'GitHub', url: 'https://github.com/ronpolonsky' }],
  researchIntro: '',
  papers: [
    {
      title: 'Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning?',
      authors: 'Perry Dong, Ron Polonsky, Dorsa Sadigh, Chelsea Finn',
      venue: 'arXiv preprint · 2026',
      description: 'Studying when Q-function pretraining helps online reinforcement learning. Initialization via Policy Ensemble (IPE) uses rollouts from diverse policies to improve Q-function initialization and subsequent fine-tuning.',
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
      description: 'DocOpt trains language and vision-language models to rewrite documents for better retrieval. It learns from black-box ranking feedback, shifting rewriting offline and improving code and visual retrieval.',
      tags: ['Reinforcement Learning', 'Information Retrieval'],
      links: [
        { label: 'Paper', url: 'https://arxiv.org/abs/2604.05087' },
        { label: 'PDF', url: 'https://arxiv.org/pdf/2604.05087' },
      ],
    },
  ],
  // Paper: { title, authors, venue, description, image, tags: ['Robotics'],
  //          links: [{ label: 'Paper', url: 'https://...' }] }
  education: [],
  experience: [],
  service: [],
  teaching: [],
  // Entries: { title, subtitle, date, description, image }
};
