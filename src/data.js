export const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'services', label: 'Services' },
  { key: 'work', label: 'Work' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
];

export const offices = [
  { city: 'Dubai, UAE', tag: 'Headquarters', active: true },
  { city: 'Cairo, Egypt', tag: 'Regional Office' },
  { city: 'Amman, Jordan', tag: 'Regional Office' },
];

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3', label: 'Regional Offices' },
  { value: '98%', label: 'Retention Rate' },
];

export const journey = [
  { year: '2025', text: 'Founded in Dubai' },
  { year: '2025', text: 'Expanded to Cairo and Amman' },
  { year: '2026', text: 'Full integrated growth model' },
];

export const services = [
  {
    key: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy',
    blurb: 'Clarity, positioning, and long-horizon differentiation.',
    description:
      'We architect foundational brand systems that create lasting competitive advantage, from market positioning to identity and messaging frameworks built to differentiate at scale.',
    agencyAngle: 'For founders and operators who need sharper perception before they scale media.',
    deliverables: ['Brand Audit', 'Positioning', 'Architecture', 'Messaging'],
    expandedDeliverables: ['Audience mapping', 'Competitive whitespace', 'Verbal identity', 'Offer hierarchy', 'Brand playbook'],
    channels: ['Brand platform', 'Launch strategy', 'Messaging systems'],
    outcome: 'A clearer reason to choose your brand and a stronger foundation for every campaign that follows.',
    accent: 'cyan',
  },
  {
    key: 'digital-marketing',
    number: '02',
    title: 'Digital Marketing',
    blurb: 'Performance systems that compound reach into growth.',
    description:
      'Performance-engineered campaigns that lower acquisition cost and transform paid channels into a scalable, measurable growth infrastructure.',
    agencyAngle: 'For brands that need paid media to feel strategic, not just busy.',
    deliverables: ['Paid Social', 'SEO and SEM', 'Analytics', 'Automation'],
    expandedDeliverables: ['Campaign architecture', 'Creative testing', 'Landing-page direction', 'Attribution setup', 'Reporting cadence'],
    channels: ['Meta', 'Google', 'TikTok'],
    outcome: 'A more efficient acquisition engine with tighter creative feedback loops and clearer reporting.',
    accent: 'blue',
  },
  {
    key: 'content-creation',
    number: '03',
    title: 'Content Creation',
    blurb: 'Cinematic production built for premium perception.',
    description:
      'Photography, video, motion, and copy crafted to elevate brand perception and stop the scroll for premium audiences across MENA.',
    agencyAngle: 'For brands that need their visual presence to sell before a word is read.',
    deliverables: ['Video', 'Photography', 'Copy', 'Motion'],
    expandedDeliverables: ['Campaign concepts', 'Shot planning', 'Short-form content', 'Motion direction', 'Content kits'],
    channels: ['Reels', 'Paid creatives', 'Launch assets'],
    outcome: 'A richer content library that increases perceived value and gives campaigns more to work with.',
    accent: 'purple',
  },
  {
    key: 'social-media',
    number: '04',
    title: 'Social Media',
    blurb: 'Strategy and community that keeps brands culturally alive.',
    description:
      'Always-on social systems that build community, strengthen relevance, and keep your brand present across the platforms that matter most.',
    agencyAngle: 'For brands that want consistency, relevance, and better community momentum.',
    deliverables: ['Platform Strategy', 'Community', 'Reporting', 'Calendars'],
    expandedDeliverables: ['Editorial planning', 'Community management', 'Monthly reporting', 'Trend adaptation', 'Campaign rollouts'],
    channels: ['Instagram', 'TikTok', 'LinkedIn'],
    outcome: 'A stronger day-to-day brand presence that feels active, current, and commercially aligned.',
    accent: 'cyan',
  },
];

export const impactNotes = [
  { label: 'System', value: 'One Integrated Layer' },
  { label: 'Focus', value: 'Premium Brand Growth' },
  { label: 'Reach', value: 'UAE, Egypt, Jordan' },
];

export const principles = [
  {
    title: 'One growth system',
    body: 'Strategy, creative, media, and reporting move together so brands are never split across disconnected vendors.',
  },
  {
    title: 'Regional sensitivity',
    body: 'We shape campaigns for how audiences across the Gulf and wider MENA actually behave, buy, and share.',
  },
  {
    title: 'Premium presentation',
    body: 'Every touchpoint is designed to feel considered, high trust, and commercially ready from day one.',
  },
];

export const workFilters = ['All', 'Branding', 'Digital', 'Content', 'Social Media'];

export const projects = [
  {
    id: 1,
    title: 'Town Bakery',
    category: 'Branding',
    type: 'Brand Identity and Social Media',
    year: '2025',
    color: '#c9a96e',
    description: 'Complete brand transformation and social media strategy for a premium bakery in Dubai.',
    tags: ['Brand Identity', 'Social Media', 'Photography'],
    results: ['200% increase in social engagement', 'New visual identity system', 'Content calendar framework'],
  },
  {
    id: 2,
    title: 'Layali Kaza Cafe',
    category: 'Content',
    type: 'Content Creation and Digital Marketing',
    year: '2025',
    color: '#22d3ee',
    description: 'Cinematic content and a growth-minded campaign system for a Dubai cafe experience.',
    tags: ['Video Production', 'Digital Marketing', 'Campaign Strategy'],
    results: ['3x engagement rate', 'Video-first content cadence', 'Increased foot traffic'],
  },
  {
    id: 3,
    title: 'Allo Broasted',
    category: 'Digital',
    type: 'Growth Marketing and Advertising',
    year: '2025',
    color: '#a855f7',
    description: 'A full-funnel performance strategy with measurable channel growth and sharper acquisition.',
    tags: ['Growth Marketing', 'Paid Advertising', 'Analytics'],
    results: ['3x engagement growth', 'Optimized ad spend', 'New customer acquisition funnel'],
  },
  {
    id: 4,
    title: 'Al Faraana Cafe',
    category: 'Social Media',
    type: 'Community and Social Management',
    year: '2025',
    color: '#22d3ee',
    description: 'A social management system rooted in cultural storytelling and always-on community care.',
    tags: ['Social Media', 'Community', 'Content Strategy'],
    results: ['Growing community', 'Consistent brand voice', 'Cultural content series'],
  },
  {
    id: 5,
    title: 'Al Bun Al Aseel',
    category: 'Branding',
    type: 'Brand Strategy and Content',
    year: '2025',
    color: '#c9a96e',
    description: 'Heritage-informed brand positioning blended with a contemporary digital presence.',
    tags: ['Brand Strategy', 'Content Creation', 'Positioning'],
    results: ['Refined positioning', 'New content framework', 'Expanded reach'],
  },
  {
    id: 6,
    title: 'ARD Restaurant',
    category: 'Content',
    type: 'Video Production and Social',
    year: '2025',
    color: '#a855f7',
    description: 'A premium content library designed to elevate atmosphere, culinary artistry, and demand.',
    tags: ['Video Production', 'Social Media', 'Food Photography'],
    results: ['Premium video library', 'Increased reservations', 'Social media growth'],
  },
];

export const contactChannels = [
  { label: 'Email', value: 'hello@mark-ora.com', href: 'mailto:hello@mark-ora.com' },
  { label: 'Phone', value: '+971 52 138 4084', href: 'tel:+971521384084' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/mark-ora/' },
  { label: 'Instagram', href: 'https://www.instagram.com/mark_ora.uae/' },
];
