import { ServiceItem, CaseStudy, ProcessStage, Testimonial, FAQItem } from './types';

export const COMPANY_DETAILS = {
  name: 'Apex Tech',
  tagline: 'We build the climb to your apex.',
  subheadline: 'Apex Tech designs and crafts high-performing websites, modern UI/UX design systems, and organic search visibility for ambitious brands.',
  phone: '+91 7979968347',
  phoneRaw: '7979968347',
  phoneTel: '+917979968347',
  email: 'mrbeast797996@gmail.com',
  secondaryEmail: 'hello@apextech.com',
  whatsappUrl: 'https://wa.me/917979968347?text=Hi%20Apex%20Tech%20team%2C%20I%20would%20like%20to%20discuss%20a%20website%20or%20design%20project.',
  location: 'Tech Hub, Cyber Valley, India',
  hours: 'Monday – Saturday: 9:00 AM – 8:00 PM IST',
  responseTime: '< 2 hours response time guaranteed',
  stats: [
    { value: '40+', label: 'Websites & Designs Shipped' },
    { value: '4', label: 'Core Disciplines' },
    { value: '99.4%', label: 'On-time delivery' },
    { value: '100%', label: 'Client-owned code & assets' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Modern Web Development',
    shortDesc: 'Fast, responsive, pixel-perfect websites built with modern front-end technologies — from high-converting landing pages to interactive brand platforms.',
    longDesc: 'We build lightning-fast web experiences with clean TypeScript, modern React & Next.js architectures, fluid micro-animations, and 100% mobile-responsive design.',
    iconName: 'Globe',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / Semantic CSS', 'Motion'],
    features: [
      'Core Web Vitals 95+ speed & performance scores',
      'Pixel-perfect responsive layout across all screens',
      'Smooth micro-interactions & fluid animations',
      'Strict WCAG 2.1 accessibility & SEO-ready structure',
      'Direct WhatsApp, click-to-call & inquiry form integration'
    ],
    deliverables: ['Production-ready website files', 'Complete source code repository', 'Clean documentation', '30-day post-launch warranty'],
    timeline: '1 – 3 Weeks',
    popularFor: 'Business Websites, Landing Pages, Portfolios, Brand Showcases',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Brand Design',
    shortDesc: 'Modern digital design systems, high-fidelity Figma prototypes, and conversion-focused user interfaces tailored to your visual identity.',
    longDesc: 'We craft bespoke visual systems, intuitive user flows, and modern design prototypes in Figma before building — ensuring your brand looks distinctive and memorable.',
    iconName: 'Palette',
    technologies: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Typography & Layout', 'Wireframing'],
    features: [
      'Bespoke visual identity & color palette architecture',
      'High-fidelity interactive Figma prototypes',
      'Component-based design system & style guides',
      'Conversion Rate Optimization (CRO) UX patterns',
      'Comprehensive developer-ready design assets'
    ],
    deliverables: ['Complete Figma design file', 'Exported SVG/PNG asset library', 'Typography & color tokens guide', 'Interactive prototype link'],
    timeline: '1 – 2 Weeks',
    popularFor: 'Startups, Rebranding, Product Redesigns, Landing Pages',
  },
  {
    id: 'seo-search',
    title: 'Technical SEO & Speed Optimization',
    shortDesc: 'On-page SEO, structured schema data, and speed optimization designed to rank your business higher on Google Search.',
    longDesc: 'We optimize every layer of your website for search engines: semantic HTML5 tags, JSON-LD rich snippet schema, Core Web Vitals speed tuning, and search console indexing.',
    iconName: 'Search',
    technologies: ['Technical On-Page SEO', 'Schema.org JSON-LD', 'Core Web Vitals 95+', 'Google Search Console', 'Semantic Markup'],
    features: [
      'Complete site speed audit & Lighthouse performance tuning',
      'Semantic JSON-LD schema markup for Google rich snippets',
      'Search engine crawling, indexing & sitemap setup',
      'High-intent keyword placement & meta tag optimization',
      'Local business SEO & Google Map optimization'
    ],
    deliverables: ['SEO audit & speed optimization report', 'Live structured schema integration', 'Google Search Console verification', 'Ranking recommendations roadmap'],
    timeline: '1 – 2 Weeks (Foundation Setup)',
    popularFor: 'Local Businesses, Professional Services, Brand Websites',
  },
  {
    id: 'digital-marketing',
    title: 'Conversion Landing Pages & Growth',
    shortDesc: 'High-converting campaign landing pages and digital presence optimization engineered to turn web visitors into active client leads.',
    longDesc: 'We design and develop dedicated campaign landing pages focused on clear calls-to-action, instant lead capture, social proof highlights, and frictionless direct contact.',
    iconName: 'TrendingUp',
    technologies: ['Landing Page Design', 'Conversion Rate Optimization (CRO)', 'Google Analytics / GA4', 'A/B Layout Testing', 'Social Proof Systems'],
    features: [
      'High-converting landing page layouts & hero sections',
      'Frictionless lead capture (WhatsApp, Phone, Direct Forms)',
      'Clear value proposition & testimonial showcase modules',
      'Google Analytics (GA4) event & button click tracking setup',
      'Fast-loading campaign assets for high ad conversions'
    ],
    deliverables: ['Custom high-converting landing page', 'Analytics & conversion tracking setup', 'Mobile-optimized layout', 'Direct lead capture connections'],
    timeline: '1 – 2 Weeks',
    popularFor: 'Ad Campaigns, Product Launches, Service Inquiries',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    name: 'Base Camp — Discovery',
    subtitle: 'Brand Goals, Scope & Content Strategy',
    description: 'We align on your target audience, brand aesthetic, content structure, and key call-to-action goals before design begins.',
    activities: [
      'Brand discovery & target audience analysis',
      'Page structure & content architecture planning',
      'Visual style direction (colors, typography, tone)',
      'Project timeline and milestone definition'
    ],
    deliverable: 'Project Scope Summary & Sitemap Blueprint',
    duration: 'Sprint 1',
  },
  {
    number: '02',
    name: 'Route — UI/UX Design',
    subtitle: 'Interactive Wireframes & Figma Prototypes',
    description: 'We craft high-fidelity Figma visual designs and interactive prototypes tailored specifically to your brand identity.',
    activities: [
      'Wireframing layout hierarchy and conversion sections',
      'Typography pairing, color palette, and component design',
      'Interactive Figma prototype review & client feedback',
      'Responsive design review for desktop, tablet, and mobile'
    ],
    deliverable: 'Approved Figma Design Prototype & Asset Library',
    duration: 'Sprint 2',
  },
  {
    number: '03',
    name: 'Climb — Frontend Crafting',
    subtitle: 'Clean Code & Responsive Development',
    description: 'We turn approved designs into clean, responsive, fast-loading code using React, Next.js, TypeScript, and modern CSS.',
    activities: [
      'Component-driven frontend development',
      'Fluid micro-animations and interactive UI elements',
      'Direct WhatsApp, calling, and contact form integration',
      'Live staging URL reviews for continuous client feedback'
    ],
    deliverable: 'Live Staging Environment & Functional Website',
    duration: 'Sprint 3',
  },
  {
    number: '04',
    name: 'Summit — Launch & Speed QA',
    subtitle: 'Lighthouse 95+, SEO Schema & Go-Live',
    description: 'Rigorous pre-launch QA: speed optimization, mobile testing, cross-browser checks, SEO schema validation, and domain setup.',
    activities: [
      'Lighthouse 95+ Core Web Vitals speed optimization',
      'Meta tags, OpenGraph previews, and JSON-LD schema setup',
      'Custom domain connection & SSL deployment',
      'Handoff: 100% source code ownership & 30-day warranty'
    ],
    deliverable: 'Live Production Website, 100% Code Ownership & Warranty',
    duration: 'Launch & Handoff',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'retail-storefront',
    title: 'Modern E-Commerce Storefront & Website Builder',
    client: 'Velvet & Oak Lifestyle',
    category: 'web',
    summary: 'A fast, modular website with drag-and-drop CMS blocks that reduced page load times to 0.6s and boosted visitor conversions by 48%.',
    fullDescription: 'Designed and engineered an enterprise modular web storefront with custom product block builders, live color theming, and instant checkout flows inspired by the simplicity of modern website building suites.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80'
    ],
    impactMetrics: [
      { label: 'Page Load Speed', value: '0.6s (Core Vitals 100)' },
      { label: 'Conversion Rate', value: '+48% increase' },
      { label: 'Mobile Bounce Rate', value: '-35% reduction' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Modular CMS Blocks'],
    gradientBg: 'from-[#714B67] to-[#017E84]',
    accentColor: '#714B67',
  },
  {
    id: 'fitness-studio',
    title: 'SaaS Platform & Responsive Web Application',
    client: 'Pulse Wellness Network',
    category: 'web',
    summary: 'Integrated appointment scheduling, customer portal, and mobile-first website application with direct WhatsApp booking.',
    fullDescription: 'Engineered a modern web platform integrating dynamic service blocks, booking widgets, team rosters, and responsive lead capture with 100% Core Web Vitals speed scores.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80'
    ],
    impactMetrics: [
      { label: 'Monthly Visitors', value: '35,000+ unique' },
      { label: 'Direct Leads', value: '3.6x increase' },
      { label: 'Lighthouse Score', value: '99 / 100' }
    ],
    techStack: ['React', 'Tailwind CSS', 'TypeScript', 'Next.js', 'SEO Schema'],
    gradientBg: 'from-[#017E84] to-[#714B67]',
    accentColor: '#017E84',
  },
  {
    id: 'seo-growth',
    title: 'Business Enterprise Portal & SEO Optimization',
    client: 'Credence Wealth Advisory',
    category: 'seo',
    summary: 'Engineered technical schema architecture and semantic structured content resulting in 3.4x organic search leads.',
    fullDescription: 'Restructured the website with semantic HTML5 tags, JSON-LD business schema, optimized meta descriptions, and interactive calculation tools ranking on page 1 of Google.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80'
    ],
    impactMetrics: [
      { label: 'Organic Traffic', value: '340% increase' },
      { label: 'Page 1 Keywords', value: '160+ rankings' },
      { label: 'Direct Inquiries', value: '4.2x monthly' }
    ],
    techStack: ['Technical SEO', 'Structured JSON-LD', 'Next.js', 'Google Search Console', 'Tailwind CSS'],
    gradientBg: 'from-[#714B67] to-[#017E84]',
    accentColor: '#714B67',
  },
  {
    id: 'arch-portfolio',
    title: 'Editorial Design System & Digital Portfolio',
    client: 'Studio Apex Architects',
    category: 'uiux',
    summary: 'A minimalist visual portfolio featuring high-res imagery, interactive blueprint viewports, and typographic elegance.',
    fullDescription: 'Crafted a bespoke design system and responsive web portfolio highlighting award-winning residential and commercial architectural projects with fluid layout transitions.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    impactMetrics: [
      { label: 'Page Load Speed', value: '0.5s instant' },
      { label: 'Design Inquiries', value: '+72% growth' },
      { label: 'Design Recognition', value: 'Awwwards Nominee' }
    ],
    techStack: ['Figma UI/UX', 'React', 'Tailwind CSS', 'TypeScript', 'Lucide Icons'],
    gradientBg: 'from-[#017E84] to-[#1E293B]',
    accentColor: '#017E84',
  },
  {
    id: 'healthcare-clinic',
    title: 'Medical Practice & Aesthetic Clinic Web Portal',
    client: 'Aura Skin & Wellness Clinic',
    category: 'web',
    summary: 'Treatment guides, doctor credentials, and direct WhatsApp & phone consultation scheduling.',
    fullDescription: 'Designed an elegant, accessible website for a premier medical aesthetic clinic. Features interactive before/after treatment guides, doctor profiles, and direct click-to-call and WhatsApp appointment booking.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80'
    ],
    impactMetrics: [
      { label: 'Appointment Inquiries', value: '2.9x increase' },
      { label: 'Local Map Ranking', value: '#1 in region' },
      { label: 'Mobile Speed', value: '100% score' }
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Local SEO Schema', 'TypeScript', 'Responsive Design'],
    gradientBg: 'from-[#714B67] to-[#017E84]',
    accentColor: '#714B67',
  },
  {
    id: 'saas-landing',
    title: 'All-in-One Cloud Management Suite & Website',
    client: 'Vortex Analytics & Apps',
    category: 'uiux',
    summary: 'High-conversion SaaS product website with interactive app switcher previews, live templates, and clear lead capture.',
    fullDescription: 'Transformed an enterprise suite into a crisp, modern marketing website with interactive building blocks, app integrations, and friction-free inquiry flows.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    impactMetrics: [
      { label: 'Demo Inquiries', value: '+78% increase' },
      { label: 'Conversion Rate', value: '5.2% (top tier)' },
      { label: 'PageSpeed Score', value: '98 / 100' }
    ],
    techStack: ['Figma Prototyping', 'React', 'Tailwind CSS', 'TypeScript', 'Core Web Vitals'],
    gradientBg: 'from-[#017E84] to-[#714B67]',
    accentColor: '#017E84',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'Founder & Managing Director',
    company: 'UrbanKnot Living',
    content: 'Apex Tech took our brand concept and built an outstanding modern website in record time. Their direct communication via phone and WhatsApp, combined with exceptional design quality, made all the difference. Our customer inquiries doubled in 30 days.',
    rating: 5,
    projectType: 'Website Design & On-Page SEO',
  },
  {
    id: '2',
    name: 'Ananya Deshmukh',
    role: 'Creative Director',
    company: 'Zenith Studio',
    content: 'The Figma design system and responsive website Apex Tech delivered exceeded our expectations. Clean code, rock-solid responsiveness on every mobile device, and super fast page loading. Highly recommended!',
    rating: 5,
    projectType: 'UI/UX Design & Frontend Development',
  },
  {
    id: '3',
    name: 'Vikram Mehta',
    role: 'Partner',
    company: 'Credence Capital',
    content: 'Their SEO and technical execution is leagues ahead of traditional marketing agencies. They treat search visibility and speed as an engineering problem and delivered a 320% increase in high-ticket organic leads.',
    rating: 5,
    projectType: 'SEO Strategy & Speed Optimization',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I start a project with Apex Tech?',
    answer: 'Simply call us directly at +91 7979968347, send a WhatsApp message, or drop an email to mrbeast797996@gmail.com. We schedule a free 20-minute discovery discussion to understand your requirements and deliver a clear scope and timeline roadmap within 24 hours.',
    category: 'Process & Timelines',
  },
  {
    question: 'What is your typical turnaround timeline for a website or landing page?',
    answer: 'High-converting marketing landing pages typically take 5 to 10 business days. Full multi-page brand websites with custom UI/UX design, interactive components, responsive testing, and on-page SEO setup take 2 to 4 weeks. We provide staging links from week one so you see continuous progress.',
    category: 'Process & Timelines',
  },
  {
    question: 'Do I get 100% ownership of the code and Figma design files?',
    answer: 'Yes, absolutely. Once final delivery is completed and approved, you own 100% of all intellectual property, source code repositories (GitHub/GitLab), Figma design systems, visual assets, and deployment configurations. There are no lock-ins or proprietary licensing fees.',
    category: 'Web Development',
  },
  {
    question: 'How do you guarantee 95+ Google Core Web Vitals and lightning page speed?',
    answer: 'We build with modern frameworks like React, Next.js, and lightweight Tailwind CSS. We optimize WebP/AVIF image compression, bundle splitting, clean semantic HTML5 markup, and CDN edge delivery. Every build is rigorously tested across mobile and desktop Lighthouse audits before launch.',
    category: 'Web Development',
  },
  {
    question: 'What is your design revision process during the UI/UX stage?',
    answer: 'Before writing any code, we craft high-fidelity Figma prototypes representing the exact layout, typography, and responsive breakpoints. We iterate collaboratively with you through live feedback until you are 100% satisfied with the visual direction.',
    category: 'UI/UX & Design',
  },
  {
    question: 'Can you redesign our existing website without hurting our current SEO rankings?',
    answer: 'Yes. When redesigning an existing site, we audit your top-ranking URLs, preserve URL structures and meta titles, implement 301 redirects where needed, and enhance your semantic JSON-LD schema so you maintain and improve your Google search authority.',
    category: 'SEO & Warranties',
  },
  {
    question: 'How does direct communication work during active development?',
    answer: 'You have direct contact with the actual designers and developers via dedicated phone calls (+91 7979968347), WhatsApp, and email. No endless ticket queues, account manager layers, or delayed communication.',
    category: 'Process & Timelines',
  },
  {
    question: 'Do you provide post-launch support and a warranty?',
    answer: 'Every project comes with a complimentary 30-day post-launch warranty for bug fixes, speed calibration, and minor content adjustments. We also offer flexible on-demand support for future feature expansions.',
    category: 'SEO & Warranties',
  },
];
