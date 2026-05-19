export const BRAND = {
  name: "Alexander Moses",
  designerName: "Alexander Moses",
  logo: "/brand/logo.png",
  tagline: "Creative Designs That Make Brands Stand Out",
  description:
    "Premium slide decks, flyers, product labels, presentation designs, and powerful brand visuals that help businesses grow.",
  email: "Alexandermoses@mail.com",
  whatsapp: "+447444575791",
  instagram: "https://instagram.com/alexandermoses",
  behance: "https://behance.net/alexandermoses",
} as const;

/** Main navbar — kept lean so the header stays uncluttered */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
] as const;

/** Footer includes extra home sections */
export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export const HERO = {
  headline: "Creative Designs That Make Brands Stand Out",
  subheadline:
    "We create premium slide decks, flyers, product labels, presentation designs, and powerful brand visuals that help businesses grow.",
  ctaPortfolio: "View Portfolio",
  ctaHire: "Hire Me",
} as const;

export const ABOUT = {
  portrait: "/brand/portrait-suit.png",
  role: "Graphic Designer",
  headline: "Designing Brands That Connect & Convert",
  bio: "I help businesses communicate visually through high-converting and premium graphic designs that attract attention and build trust.",
  intro:
    "I'm Alexander Moses — a graphic designer passionate about creating visuals that tell your story and grow your brand.",
  paragraphs: [
    "From book covers and interiors for writers to pitch decks, product labels, flyers, and social campaigns, I craft designs that look premium and perform in the real world.",
    "Every project starts with understanding your audience and your goals. I combine clean typography, bold layouts, and thoughtful color to deliver work you're proud to share — on time and with clear communication throughout.",
  ],
  yearsExperience: "5+",
  specialties: [
    "Book Covers & Interior Layouts",
    "Presentation & Slide Design",
    "Product Labels & Packaging",
    "Brand Identity & Visual Systems",
    "Social Media & Marketing Graphics",
  ],
  strengths: [
    "Brand Identity & Visual Systems",
    "Presentation & Slide Design",
    "Product Labels & Packaging",
    "Social Media & Marketing Graphics",
    "Print & Digital Campaign Assets",
  ],
  trustStatement:
    "Clients trust me to deliver polished, on-brand designs on time — with clear communication at every step.",
} as const;

export const SERVICES = [
  {
    title: "Canva Template Design",
    description: "Custom, reusable Canva templates tailored to your brand.",
    icon: "layout-template",
  },
  {
    title: "Slide Webinar Design",
    description: "Engaging webinar decks that educate and convert.",
    icon: "presentation",
  },
  {
    title: "Product Label Design",
    description: "Shelf-ready labels that make your products stand out.",
    icon: "tag",
  },
  {
    title: "PowerPoint Design",
    description: "Professional PowerPoint decks for pitches and meetings.",
    icon: "monitor-play",
  },
  {
    title: "Stained Glass Design",
    description: "Artistic stained glass concepts and visual mockups.",
    icon: "sparkles",
  },
  {
    title: "Presentation Design",
    description: "High-impact presentations for brands and speakers.",
    icon: "file-sliders",
  },
  {
    title: "Juice Label Design",
    description: "Fresh, vibrant labels for beverage and juice brands.",
    icon: "cup-soda",
  },
  {
    title: "Mural Design",
    description: "Bold mural concepts for walls and public spaces.",
    icon: "paintbrush",
  },
  {
    title: "Novel Design",
    description: "Book covers and interior layouts for novels.",
    icon: "book-open",
  },
  {
    title: "Ebook Design",
    description: "Polished ebook layouts and cover designs.",
    icon: "tablet",
  },
  {
    title: "Social Media Design",
    description: "Scroll-stopping graphics for all major platforms.",
    icon: "share-2",
  },
  {
    title: "Brand Identity Design",
    description: "Logos, color systems, and complete brand kits.",
    icon: "gem",
  },
  {
    title: "Magazine Design",
    description: "Editorial layouts, covers, and spreads for print and digital magazines.",
    icon: "newspaper",
  },
  {
    title: "Marketing Materials",
    description: "Flyers, brochures, and assets for campaigns.",
    icon: "megaphone",
  },
] as const;

export const CANVA_TEMPLATE_DESIGN = {
  title: "Canva Template Design",
  href: "/services/canva-template-design",
  headline: "Canva Templates Your Team Can Reuse",
  description:
    "Custom Canva template kits tailored to your brand — social posts, presentations, flyers, and marketing graphics your team can edit quickly without starting from scratch.",
  intro:
    "I build organized, on-brand Canva template systems with locked fonts, colors, and layouts so you stay consistent across every channel while saving hours on repetitive design work.",
  features: [
    "Brand-aligned template libraries for social, print, and decks",
    "Editable layouts with clear placeholders and hierarchy",
    "Consistent typography, color, and logo placement",
    "Multiple sizes and formats for Instagram, LinkedIn, stories, and more",
    "Handoff with organized folders and simple usage notes",
  ],
  cta: "Request Canva Templates",
  galleryTitle: "Canva Template Samples",
  galleryDescription: "templates from recent Canva design and brand kit projects",
  galleryItemLabel: "template",
  ctaHeadline: "Ready for your own Canva template kit?",
} as const;

export const SLIDE_WEBINAR = {
  title: "Slide Webinar Design",
  href: "/services/slide-webinar-design",
  headline: "Webinar Slides That Educate, Engage & Convert",
  description:
    "Professional webinar deck design that keeps your audience focused — clear layouts, strong visuals, and on-brand storytelling from opening slide to call-to-action.",
  intro:
    "Whether you're hosting a live training, product launch, or lead-generation webinar, I design slide decks that look premium on screen and support your message slide by slide.",
  features: [
    "Custom slide layouts aligned with your brand",
    "Clear hierarchy for teaching and storytelling",
    "Speaker-friendly designs with readable typography",
    "Consistent visual system across the full deck",
    "Export-ready files for PowerPoint, Google Slides, or PDF",
  ],
  cta: "Request Webinar Design",
  galleryTitle: "Webinar Slide Samples",
  galleryDescription: "slides from recent webinar design work",
  galleryItemLabel: "slide",
  ctaHeadline: "Ready for your next webinar deck?",
} as const;

export const EBOOK_DESIGN = {
  title: "Ebook Design",
  href: "/services/ebook-design",
  headline: "Ebook & Book Covers That Capture Readers",
  description:
    "Polished ebook layouts and striking cover designs that communicate genre, quality, and your author brand at a glance — built to perform on Amazon, your site, and social promos.",
  intro:
    "From fiction and non-fiction covers to full ebook interior styling, I design visuals that feel premium on every device and help your book stand out in a crowded marketplace.",
  features: [
    "Custom cover concepts tailored to your genre and audience",
    "Typography and imagery that read clearly at thumbnail size",
    "Cohesive series branding across multiple titles",
    "Print-ready and digital export specifications",
    "Optional interior layout styling for a unified book experience",
  ],
  cta: "Request Ebook Design",
  galleryTitle: "Book Cover Samples",
  galleryDescription: "covers from recent ebook and book cover projects",
  galleryItemLabel: "cover",
  ctaHeadline: "Ready for your next ebook or book cover?",
} as const;

export const NOVEL_DESIGN = {
  title: "Novel Design",
  href: "/services/novel-design",
  headline: "Novel Covers & Interiors Readers Love",
  description:
    "Captivating novel cover design and interior layouts for fiction and non-fiction — genre-perfect visuals that draw readers in before they read a single page.",
  intro:
    "From romance and thriller covers to literary fiction and series branding, I design novel artwork that works at full size and as a tiny online thumbnail, with optional interior styling for a cohesive reading experience.",
  features: [
    "Genre-tailored cover concepts and mood boards",
    "Bold typography and imagery for shelf appeal",
    "Series-consistent branding across multiple books",
    "Print and digital-ready cover specifications",
    "Interior layout options for a polished finished book",
  ],
  cta: "Request Novel Design",
  galleryTitle: "Novel Cover Samples",
  galleryDescription: "covers from recent novel and fiction book design projects",
  galleryItemLabel: "cover",
  ctaHeadline: "Ready for your next novel cover?",
} as const;

export const PRODUCT_LABEL_DESIGN = {
  title: "Product Label Design",
  href: "/services/product-label-design",
  headline: "Product Labels That Stand Out on the Shelf",
  description:
    "Shelf-ready label design that makes your products impossible to ignore — clear hierarchy, bold branding, and print-perfect files for bottles, jars, boxes, and more.",
  intro:
    "Whether you are launching a new beverage, skincare line, or food product, I create labels that look premium in hand and in product photography, while staying compliant and readable.",
  features: [
    "Custom layouts for bottles, jars, pouches, and boxes",
    "Brand-aligned color, typography, and iconography",
    "Clear ingredient and regulatory text hierarchy",
    "Mockups for marketing and e-commerce use",
    "Print-ready files with bleed and safe zones",
  ],
  cta: "Request Label Design",
  galleryTitle: "Product Label Samples",
  galleryDescription: "labels from recent packaging and product design work",
  galleryItemLabel: "label",
  ctaHeadline: "Ready for your next product label?",
} as const;

export const POWERPOINT_DESIGN = {
  title: "PowerPoint Design",
  href: "/services/powerpoint-design",
  headline: "PowerPoint Decks That Win the Room",
  description:
    "Professional PowerPoint presentations for pitches, meetings, and keynotes — polished layouts, clear storytelling, and visuals that keep your audience engaged from first slide to last.",
  intro:
    "From investor pitch decks to corporate reports and training presentations, I design PowerPoint slides that look executive-ready on screen and projector, with consistent branding and readable hierarchy throughout.",
  features: [
    "Custom slide masters aligned with your brand",
    "Clear data visualization and chart styling",
    "Speaker notes and animation-friendly layouts",
    "Consistent typography and color systems",
    "Editable PPTX files ready for your team",
  ],
  cta: "Request PowerPoint Design",
  galleryTitle: "PowerPoint Slide Samples",
  galleryDescription: "slides from recent PowerPoint and presentation design work",
  galleryItemLabel: "slide",
  ctaHeadline: "Ready for your next PowerPoint deck?",
} as const;

export const PRESENTATION_DESIGN = {
  title: "Presentation Design",
  href: "/services/presentation-design",
  headline: "Presentations That Communicate With Impact",
  description:
    "High-impact presentation design for brands, speakers, and teams — polished slide layouts, clear storytelling, and visuals built for boardrooms, stages, and screens.",
  intro:
    "From corporate decks and sales pitches to training materials and keynote slides, I design presentations that look professional, stay on brand, and help your message land with clarity and confidence.",
  features: [
    "Custom slide layouts and visual systems",
    "Clear hierarchy for data, charts, and key points",
    "On-brand typography, color, and imagery",
    "Speaker-friendly slides for live delivery",
    "Export-ready files for PowerPoint, Google Slides, or PDF",
  ],
  cta: "Request Presentation Design",
  galleryTitle: "Presentation Design Samples",
  galleryDescription: "slides from recent presentation and deck design projects",
  galleryItemLabel: "slide",
  ctaHeadline: "Ready for your next presentation?",
} as const;

export const MAGAZINE_DESIGN = {
  title: "Magazine Design",
  href: "/services/magazine-design",
  headline: "Magazine Layouts That Read Beautifully",
  description:
    "Professional magazine design for covers, editorial spreads, and digital editions — clean typography, striking imagery, and layouts that guide readers from page to page.",
  intro:
    "From fashion and lifestyle magazines to corporate publications and digital editorials, I design page layouts that balance bold visuals with readable structure for print and screen.",
  features: [
    "Eye-catching cover and feature spread design",
    "Consistent grid systems and typography",
    "Photo-driven layouts with clear hierarchy",
    "Print-ready and digital export specifications",
    "Mockups for client presentations and marketing",
  ],
  cta: "Request Magazine Design",
  galleryTitle: "Magazine Design Samples",
  galleryDescription: "layouts from recent magazine and editorial design projects",
  galleryItemLabel: "spread",
  ctaHeadline: "Ready for your next magazine layout?",
} as const;

export const BRAND_IDENTITY_DESIGN = {
  title: "Brand Identity Design",
  href: "/services/brand-identity-design",
  headline: "Brand Identities That Look Cohesive Everywhere",
  description:
    "Complete brand identity design — logos, color palettes, typography, and visual systems that make your business recognizable and trustworthy across every touchpoint.",
  intro:
    "From startups launching their first look to established businesses refreshing their image, I create brand identities with clear guidelines so your team stays consistent on social, print, packaging, and web.",
  features: [
    "Custom logo concepts and refinements",
    "Color palettes and typography systems",
    "Brand guidelines and usage rules",
    "Business cards, letterheads, and stationery mockups",
    "Social and marketing templates aligned to your brand",
  ],
  cta: "Request Brand Identity Design",
  galleryTitle: "Brand Identity Samples",
  galleryDescription: "logos and brand kits from recent identity design projects",
  galleryItemLabel: "project",
  ctaHeadline: "Ready to build your brand identity?",
} as const;

export const SOCIAL_MEDIA_DESIGN = {
  title: "Social Media Design",
  href: "/services/social-media-design",
  headline: "Social Graphics That Stop the Scroll",
  description:
    "Scroll-stopping social media design for Instagram, Facebook, LinkedIn, and more — on-brand posts, stories, carousels, and ads built to engage your audience and grow your presence.",
  intro:
    "I create social content that looks polished at a glance and reads clearly on mobile — from promotional posts and product launches to quote graphics, reels covers, and campaign creatives.",
  features: [
    "Feed posts, stories, and carousel layouts",
    "Platform-ready sizes for Instagram, Facebook, LinkedIn",
    "Bold typography and hierarchy for fast reading",
    "Consistent visuals aligned with your brand identity",
    "Campaign sets and reusable template styles",
  ],
  cta: "Request Social Media Design",
  galleryTitle: "Social Media Design Samples",
  galleryDescription: "posts and graphics from recent social media design projects",
  galleryItemLabel: "post",
  ctaHeadline: "Ready for scroll-stopping social content?",
} as const;

export const MARKETING_MATERIALS_DESIGN = {
  title: "Marketing Materials",
  href: "/services/marketing-materials",
  headline: "Marketing Materials That Drive Action",
  description:
    "Professional digital marketing materials — flyers, brochures, banners, and campaign graphics designed to promote your brand, launch products, and convert attention into results.",
  intro:
    "From event flyers and sale promos to product brochures and ad creatives, I design marketing assets that look polished in print and on screen, with clear messaging and strong visual hierarchy.",
  features: [
    "Flyers, posters, and promotional layouts",
    "Brochures and multi-page marketing pieces",
    "Digital ads and campaign banner sets",
    "Consistent branding across all materials",
    "Print-ready and web-optimized export files",
  ],
  cta: "Request Marketing Materials",
  galleryTitle: "Marketing Material Samples",
  galleryDescription: "flyers and campaign graphics from recent marketing design projects",
  galleryItemLabel: "design",
  ctaHeadline: "Ready for your next marketing campaign?",
} as const;

export const JUICE_LABEL_DESIGN = {
  title: "Juice Label Design",
  href: "/services/juice-label-design",
  headline: "Juice Labels That Look Fresh & Sell",
  description:
    "Vibrant juice label design for bottles and cartons — bold color, clear flavor cues, and shelf-ready artwork that makes your beverage brand impossible to miss.",
  intro:
    "From cold-pressed juices and smoothies to energy drinks and lemonades, I design labels that communicate freshness, taste, and trust at a glance — with layouts built for real bottles and real retail shelves.",
  features: [
    "Eye-catching color and flavor-driven visuals",
    "Clear typography for ingredients and nutrition",
    "Bottle mockups for marketing and social use",
    "Brand-consistent series across multiple flavors",
    "Print-ready files with bleed and safe zones",
  ],
  cta: "Request Juice Label Design",
  galleryTitle: "Juice Label Samples",
  galleryDescription: "labels from recent juice and beverage packaging work",
  galleryItemLabel: "label",
  ctaHeadline: "Ready for your next juice label?",
} as const;

export const MURAL_DESIGN = {
  title: "Mural Design",
  href: "/services/mural-design",
  headline: "Murals That Transform Spaces",
  description:
    "Bold mural design for walls, offices, retail, and public spaces — large-scale visuals that tell your brand story and create unforgettable environments.",
  intro:
    "From concept sketches to final wall-ready artwork, I design murals that balance artistic impact with your brand message — whether it is a café feature wall, office lobby, or outdoor installation.",
  features: [
    "Custom concepts tailored to your space and audience",
    "Bold color and composition for maximum visual impact",
    "Scalable layouts for walls of any size",
    "Brand-aligned storytelling and typography integration",
    "Print-ready files and mockups for client approval",
  ],
  cta: "Request Mural Design",
  galleryTitle: "Mural Design Samples",
  galleryDescription: "murals from recent wall and space design projects",
  galleryItemLabel: "mural",
  ctaHeadline: "Ready to transform your space?",
} as const;

export const STAINED_GLASS_DESIGN = {
  title: "Stained Glass Design",
  href: "/services/stained-glass-design",
  headline: "Stained Glass Art That Brings Light to Life",
  description:
    "Artistic stained glass design and visual mockups — rich color, luminous detail, and compositions that feel timeless in windows, doors, and decorative panels.",
  intro:
    "From traditional cathedral-inspired panels to modern geometric patterns, I create stained glass artwork and presentation mockups that show how your design will look with real light, texture, and depth.",
  features: [
    "Custom patterns and illustrative compositions",
    "Rich, harmonious color palettes",
    "Realistic light and glass texture mockups",
    "Designs for windows, panels, and décor",
    "High-resolution files for print and presentation",
  ],
  cta: "Request Stained Glass Design",
  galleryTitle: "Stained Glass Samples",
  galleryDescription: "pieces from recent stained glass and decorative glass work",
  galleryItemLabel: "design",
  ctaHeadline: "Ready for your next stained glass piece?",
} as const;

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "slides", label: "Presentations" },
  { id: "labels", label: "Labels & Packaging" },
  { id: "books", label: "Book Covers" },
  { id: "art", label: "Murals & Glass" },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description: "We discuss your goals, audience, and brand vision.",
  },
  {
    step: 2,
    title: "Concept Design",
    description: "Initial concepts aligned with your brand direction.",
  },
  {
    step: 3,
    title: "Revisions",
    description: "Refined designs based on your feedback.",
  },
  {
    step: 4,
    title: "Final Delivery",
    description: "Print-ready and digital files delivered on time.",
  },
] as const;

export const PRICING_PACKAGES = [
  {
    name: "Basic",
    price: "From $150",
    delivery: "5–7 business days",
    popular: false,
    features: [
      "1 design deliverable",
      "1 round of revisions",
      "High-resolution files",
      "Basic brand alignment",
    ],
  },
  {
    name: "Standard",
    price: "From $350",
    delivery: "3–5 business days",
    popular: true,
    features: [
      "Up to 3 design deliverables",
      "2 rounds of revisions",
      "Source files included",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    price: "From $750",
    delivery: "2–4 business days",
    popular: false,
    features: [
      "Full brand or campaign package",
      "Unlimited revisions*",
      "All source files",
      "Dedicated creative direction",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "Bloom Cosmetics",
    review:
      "Alexander transformed our product labels — sales visuals look premium and professional. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "TechStart Inc.",
    review:
      "Our pitch deck went from average to outstanding. Investors noticed the difference immediately.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    company: "Fresh Juice Co.",
    review:
      "The juice label designs were exactly what we envisioned. Clean, bold, and perfectly on brand.",
    rating: 5,
  },
] as const;

export const CONTACT = {
  headline: "Let's Create Something Amazing Together",
  formSuccess: "Thank you! Your message has been sent.",
} as const;
