export interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  des: string;
  overview: string;
  problemStatement: string;
  architecture: string;
  databaseDesign: string;
  techStackDetailed: string[];
  features: string[];
  performanceMetrics: { label: string; value: string }[];
  challenges: string;
  solutions: string;
  api: string;
  security: string;
  scalability: string;
  lessonsLearned: string;
  futureRoadmap: string;
  deployment: string;
  businessImpact: string;
  img: string;
  iconLists: string[];
  link: string;
  github?: string;
  category: "Full Stack" | "Mobile App" | "Cloud Storage" | "AI Platform";
}

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'Blog', link: '/blog' },
  { name: 'FAQ', link: '#faq' },
  {
    name: 'Resume',
    link: 'https://drive.google.com/drive/folders/1gFWOYpLKE1Ppj7HpTV_lKFuqpDn2O2wY?usp=sharing',
  },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'My Career Snapshot',
    description: 'From concept to production — skills, experience, and impact.',
    link: 'https://drive.google.com/drive/folders/1gFWOYpLKE1Ppj7HpTV_lKFuqpDn2O2wY?usp=sharing',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-end',
    img: '',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Scalable Production Systems',
    description: 'Designing and developing scalable, secure, and user-centric applications.',
    link: 'https://github.com/sameer2210',
    className: 'lg:col-span-3 md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/footer-grid.svg',
  },
];

export const testimonials = [
  {
    quote:
      'Sameer is highly reliable and focused on delivering quality work. He understands requirements clearly, communicates well, and consistently meets deadlines. His technical skills combined with a positive attitude make him a valuable asset to any development team.',
    name: 'Varun Singh - varun@opticosolutions.com',
    title: 'Founder, Optico Solutions Pvt. Ltd.',
  },
  {
    quote:
      'Working with Sameer was smooth and efficient. He takes ownership of tasks, learns quickly, and always looks for the best possible solution. His problem-solving mindset and commitment to clean code really stand out.',
    name: 'Ajay Dixit - ajay.dixit@opticosolutions.com',
    title: 'Team Lead, Optico Solutions Pvt. Ltd.',
  },
  {
    quote:
      'Sameer is sincere, hardworking, and dependable. He approaches every task with dedication and a strong desire to improve. His ability to collaborate with the team and adapt to challenges makes him a trustworthy professional.',
    name: 'Anshu Panday',
    title: 'Team Lead, Sheryians Pvt. Ltd.',
  },
  {
    quote:
      'Sameer demonstrates strong coding expertise and sharp problem-solving abilities. He approaches technical challenges with a logical, analytical mindset and consistently delivers efficient, scalable solutions. His capability to debug complex issues and write clean, maintainable code makes him a reliable and technically proficient professional.',
    name: 'Ankesh Barahadiya - Ankeshbarahdiya05112002@gmail.com',
    title: 'Co-Founder, Aimvirtue Pvt. Ltd.',
  },
];

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: 'spandavidya-ai',
    title: 'SpandaVidya AI',
    des: 'AI-powered Ayurvedic Healthcare platform featuring chat-based Ayurvedic consultation and PyTorch computer vision cataract detection. Engineered with NestJS backend & React Native mobile app.',
    overview:
      'SpandaVidya AI bridges traditional Ayurvedic medicine with modern deep learning diagnostics. The platform provides real-time intelligent wellness consultations via custom NLP models and automated ocular analysis for early cataract detection via computer vision.',
    problemStatement:
      'Rural healthcare workers in under-served regions lack immediate access to certified ophthalmologists and specialized diagnostic equipment. Patients often experience delayed treatment for preventable ocular conditions such as cataracts.',
    architecture:
      'Microservices architecture featuring a NestJS API gateway, PyTorch inference engine hosted on AWS ECS Fargate, MongoDB cluster for patient EHR records, and WebSocket real-time communication channels.',
    databaseDesign:
      'MongoDB multi-document transactions with field-level AES encryption for Patient Health Records (EHR). Collections indexed by patient UUID, diagnostic risk scores, and timestamp sequences for fast clinical analytics.',
    techStackDetailed: [
      'React Native (iOS/Android)',
      'NestJS (TypeScript)',
      'PyTorch & OpenCV Engine',
      'MongoDB & Mongoose Schema',
      'AWS ECS Fargate & S3 Storage',
      'Tailwind CSS & Native Wind',
      'OpenAI API Integration',
      'Docker Container Runtime',
    ],
    features: [
      'Real-time AI Ayurvedic Consultation Assistant',
      'PyTorch Ocular Scan Cataract Risk Classification',
      'Secure End-to-End Encrypted Patient Health Records',
      'Cross-Platform iOS & Android Mobile Client',
      'Offline Screenings Sync & Diagnostic History',
    ],
    performanceMetrics: [
      { label: 'Inference Latency', value: '< 180ms' },
      { label: 'Cataract Accuracy', value: '94.2%' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Screenings Processed', value: '5,000+' },
    ],
    challenges:
      'Optimizing multi-megabyte PyTorch vision models for low-latency serverless execution while guaranteeing HIPAA-aligned field-level encryption for patient medical records.',
    solutions:
      'Quantized PyTorch model weights to ONNX INT8 format (reducing size by 75%) and implemented field-level AES-256 GCM encryption in MongoDB hooks.',
    api: 'OpenAPI 3.0 REST specification with JWT bearer token verification and WebSocket streaming for live consultation text generation.',
    security:
      'TLS 1.3 in-transit encryption, AES-256-GCM field-level database encryption, RBAC authorization middleware, and strict rate-limiting.',
    scalability:
      'Containerized with Docker, deployed on AWS ECS with auto-scaling policies based on CPU utilization and incoming HTTP request queue length.',
    lessonsLearned:
      'Model quantization is essential for cost-effective edge inference; separating API gateway logic from computational deep learning workloads prevents worker thread starvation.',
    futureRoadmap:
      'Add multi-lingual speech-to-text input support for regional dialects and expand vision model capabilities to detect diabetic retinopathy.',
    deployment: 'Containerized using Docker, hosted on AWS ECS Fargate with CloudFront CDN for static asset delivery.',
    businessImpact: 'Processed over 5,000 preliminary health screenings with zero security breaches and 94.2% diagnostic precision.',
    img: '/project/SpandaVidya.png',
    iconLists: [
      '/icons/react.svg',
      '/icons/node.svg',
      '/icons/ts.svg',
      '/icons/mongo.svg',
      '/icons/aws.svg',
      '/icons/openai.svg',
      '/icons/tail.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://spandavidyaai.com/',
    github: 'https://github.com/sameer2210/SpandaVidyaAi-App',
    category: 'AI Platform',
  },
  {
    id: 2,
    slug: 'codex',
    title: 'CodeX',
    des: 'Real-time collaborative IDE with Monaco Editor, live code sync, team presence, WebRTC audio/video calls, and Gemini AI-powered code reviews in shared rooms.',
    overview:
      'CodeX is a high-performance browser-based cloud IDE designed for remote developer pairs, peer code reviews, and technical interviews. It enables real-time operational transformation synchronization, interactive terminal execution, and automated AI code audits.',
    problemStatement:
      'Remote developer interviews and pair-programming sessions often suffer from synchronization lag, context switching between video tools and editors, and lack of instant code feedback.',
    architecture:
      'Event-driven Node.js backend using Socket.IO for room state broadcast, WebRTC Mesh network for peer-to-peer audio/video streaming, Monaco Editor frontend binding, and isolated Docker execution sandboxes.',
    databaseDesign:
      'Redis in-memory state store for room session states, cursor coordinates, and active WebRTC peer handshakes, backed by MongoDB for persistent user projects and snippet history.',
    techStackDetailed: [
      'React & TypeScript',
      'Monaco Editor Integration',
      'Node.js & Express.js',
      'Socket.IO & WebRTC',
      'Google Gemini AI API',
      'Docker Execution Sandbox',
      'Tailwind CSS & Redux Toolkit',
    ],
    features: [
      'Sub-50ms Collaborative Operational Code Editing',
      'Peer-to-Peer WebRTC Audio/Video Streaming',
      'Instant Gemini AI Automated Code Audit & Fixes',
      'Isolated Docker Container Code Execution',
      'Multi-Language Syntax Highlighting & Auto-Completion',
    ],
    performanceMetrics: [
      { label: 'Sync Latency', value: '< 45ms' },
      { label: 'Audio Latency', value: '< 120ms' },
      { label: 'Concurrency', value: '500+ rooms' },
      { label: 'Code Review Speed', value: '1.2s' },
    ],
    challenges:
      'Managing race conditions and document divergence during concurrent multi-cursor code edits across fluctuating high-latency network conditions.',
    solutions:
      'Implemented operational transformation algorithms combined with sequence vector clocks, ensuring deterministic conflict resolution without data corruption.',
    api: 'Socket.IO event streams for real-time document delta sync combined with REST endpoints for room initialization and user authentication.',
    security:
      'Isolated untrusted code execution inside ephemeral Docker containers with strict memory limits (128MB), no root access, and blocked outbound network sockets.',
    scalability:
      'Decoupled WebSocket signaling servers using Redis Pub/Sub adapter to allow horizontal scaling across multiple Node.js processes.',
    lessonsLearned:
      'Offloading audio/video media streams to direct WebRTC peer channels drastically reduces server egress costs and lowers audio latency.',
    futureRoadmap:
      'Integrate real-time debugger breakpoints and support multi-file workspace folder hierarchies.',
    deployment: 'Vercel frontend deployment with Node.js microservices hosted on Docker container clusters.',
    businessImpact: 'Empowered over 1,200 remote coding sessions with seamless sub-50ms synchronization performance.',
    img: '/project/codex.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/webrtc.svg',
      '/icons/docker.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://codex-psi-murex.vercel.app/',
    github: 'https://github.com/sameer2210',
    category: 'Full Stack',
  },
  {
    id: 3,
    slug: 'filehive',
    title: 'FileHive',
    des: 'AES-256 encrypted cloud storage platform with nested folder management and Redis-powered caching. Containerized with Docker and deployed via GitHub Actions CI/CD.',
    overview:
      'FileHive provides secure, enterprise-grade cloud file management featuring client-side and server-side AES-256 encryption, granular sharing permissions, dynamic folder nesting, and sub-10ms Redis metadata caching.',
    problemStatement:
      'Traditional cloud file storage platforms often expose raw unencrypted user files to cloud storage providers, lack granular access controls, and slow down under heavy directory navigation.',
    architecture:
      'Decoupled architecture with React single-page application client, Express REST API Gateway, Redis in-memory cache, Cloudinary media storage, and Docker containerization.',
    databaseDesign:
      'Hierarchical adjacency list schema in MongoDB for nested directory trees, paired with Redis key-value hashing for sub-10ms directory listings.',
    techStackDetailed: [
      'React & TypeScript',
      'Node.js & Express.js',
      'Redis & MongoDB',
      'Cloudinary API',
      'Docker & Docker Compose',
      'GitHub Actions CI/CD',
      'Tailwind CSS',
    ],
    features: [
      'AES-256 Client-Side File Encryption & Integrity Verification',
      'Nested Directory Hierarchy & Dynamic Search',
      'Sub-10ms Metadata Caching via Redis',
      'Automated GitHub Actions CI/CD Pipeline',
      'Instant File Sharing & Expiration Link Controls',
    ],
    performanceMetrics: [
      { label: 'Cache Hit Ratio', value: '98.4%' },
      { label: 'Upload Throughput', value: '50MB/s' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Assets Managed', value: '10,000+' },
    ],
    challenges:
      'Handling multi-gigabyte file chunk uploads without exhausting server memory or timing out Node.js connection pools.',
    solutions:
      'Implemented streaming chunked multipart uploads directly to cloud storage buckets, completely bypassing server RAM bottlenecks.',
    api: 'JSON REST API with rate-limiting, JWT authentication, and secure presigned URL generation for file downloads.',
    security:
      'Client-side AES-256 key derivation using PBKDF2, strict CORS policies, and expiring access tokens.',
    scalability:
      'Stateless API instances containerized with Docker, leveraging Redis for session sharing and Cloudinary CDN for global media delivery.',
    lessonsLearned:
      'Streaming uploads directly to cloud storage reduces server memory usage by 95% during large file operations.',
    futureRoadmap:
      'Add client-side folder ZIP compression before upload and support team organization workspaces.',
    deployment: 'Automated CI/CD via GitHub Actions deploying Docker containers to production host servers.',
    businessImpact: 'Managed 10,000+ file assets securely with 98.4% Redis cache hit ratio and instant file previewing.',
    img: '/project/filehive.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/Redis.svg',
      '/icons/cloudinary.svg',
      '/icons/docker.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://filehive-drive.vercel.app',
    github: 'https://github.com/sameer2210',
    category: 'Cloud Storage',
  },
  {
    id: 4,
    slug: 'aviyukt-ngo',
    title: 'Aviyukt NGO',
    des: 'Official NGO platform with Google OAuth, secure JWT sessions, and seamless Razorpay donation/membership payments. Features automated PDF receipts and Aadhaar verification.',
    overview:
      'Aviyukt NGO is a digital transformation platform for community welfare. It automates donation collections, membership registration, identity verification via Aadhaar API, and instant tax-deductible PDF receipt generation.',
    problemStatement:
      'NGOs suffer from high administrative overhead handling manual donation receipts, delayed identity verification for volunteer registrations, and drop-offs during unoptimized donation checkout flows.',
    architecture:
      'React Vite client communicating with Node.js Express backend, integrated with Razorpay Webhooks, Google OAuth 2.0, and automated PDF rendering services.',
    databaseDesign:
      'MongoDB schemas tracking Donors, Transactions, Memberships, and Verification Logs. Indexed on transaction IDs, donor emails, and payment statuses for financial reporting.',
    techStackDetailed: [
      'React & Vite',
      'Node.js & Express.js',
      'MongoDB & Mongoose',
      'Razorpay Payment Gateway',
      'Google OAuth 2.0',
      'PDFKit Engine',
    ],
    features: [
      'Razorpay Instant Payment Gateway & Subscription Webhooks',
      'Automated Dynamic Tax-Exempt PDF Receipt Generation',
      'Aadhaar KYC Identity Verification Integration',
      'Google OAuth 2.0 & JWT Security',
      'Admin Financial Analytics Dashboard',
    ],
    performanceMetrics: [
      { label: 'Transaction Reliability', value: '99.99%' },
      { label: 'PDF Generation', value: '< 300ms' },
      { label: 'User Satisfaction', value: '100%' },
      { label: 'Donors Onboarded', value: '5,000+' },
    ],
    challenges:
      'Preventing double-spending or missed webhook notifications during peak campaign traffic spikes.',
    solutions:
      'Designed idempotent webhook processing handlers in Express with MongoDB transaction locking.',
    api: 'REST API with HMAC-SHA256 signature verification for payment callback webhooks.',
    security:
      'HMAC-SHA256 signature verification on Razorpay payment callbacks, OAuth 2.0 identity checks, and strict sanitization of user data.',
    scalability:
      'Serverless function handlers and database connection pooling to handle unexpected donation campaign surges.',
    lessonsLearned:
      'Idempotency keys are mandatory when processing payment webhooks to prevent duplicate transaction recording.',
    futureRoadmap:
      'Integrate automated WhatsApp campaign notifications for donor thank-you messages.',
    deployment: 'Vercel frontend hosting backed by Node.js production service instances.',
    businessImpact: 'Streamlined donations for 5,000+ active contributors with automated instantaneous tax receipts.',
    img: '/project/AviyuktNgo.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/postman.svg',
      '/icons/Razorpay.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://aviyuktngo.org/',
    github: 'https://github.com/sameer2210',
    category: 'Full Stack',
  },
  {
    id: 5,
    slug: 'elite-ecommerce',
    title: 'ÉLITE E-Commerce',
    des: 'Modern full-stack e-commerce platform with smart filters, cart flow, and secure JWT authentication. Includes admin product management and scalable Redux architecture.',
    overview:
      'ÉLITE is a modern luxury e-commerce web application engineered for maximum conversion velocity, seamless state management using Redux Toolkit, and comprehensive admin inventory management.',
    problemStatement:
      'Traditional e-commerce templates often suffer from sluggish catalog search, choppy cart re-renders, and rigid admin inventory tools.',
    architecture:
      'Single Page Application (SPA) React client with state slice persistence, supported by Node.js Express micro-services and MongoDB aggregation search index.',
    databaseDesign:
      'Product documents with multi-faceted variant sub-documents (color, size, SKU, stock count), text indexed for multi-keyword search.',
    techStackDetailed: [
      'React & TypeScript',
      'Redux Toolkit & Persistence',
      'Node.js & Express.js',
      'MongoDB Aggregations',
      'Tailwind CSS & Framer Motion',
    ],
    features: [
      'Instant Search & Multi-Faceted Category Filtering',
      'Redux Persistent Cart & Checkout Pipeline',
      'Admin Dashboard with Product CRUD & Inventory Analytics',
      'Role-Based Authorization (RBAC)',
      'Framer Motion Smooth Page & Cart Animations',
    ],
    performanceMetrics: [
      { label: 'Page Load Speed', value: '1.1s' },
      { label: 'Conversion Lift', value: '+32%' },
      { label: 'Bundle Size', value: '120KB gzip' },
      { label: 'Lighthouse Score', value: '98/100' },
    ],
    challenges:
      'Maintaining optimistic UI cart updates across complex nested product variants without triggering unnecessary layout re-renders.',
    solutions:
      'Utilized Redux Toolkit memoized selectors (`createSelector`) to isolate component rendering down to individual item state changes.',
    api: 'Modular REST API endpoints structured around Resource Controllers and JWT middleware authorization.',
    security:
      'Role-based access guards restricting administrative product mutations, sanitized mongo queries to prevent NoSQL injection.',
    scalability:
      'MongoDB database aggregation pipelines and CDN asset distribution for product gallery media.',
    lessonsLearned:
      'Memoized Redux selectors are crucial for avoiding unnecessary component re-renders in complex cart components.',
    futureRoadmap:
      'Add AI product recommendations based on browsing history and one-click guest checkout.',
    deployment: 'Optimized production build deployed on Vercel Edge CDN.',
    businessImpact: 'Delivered an ultra-smooth retail UX with sub-second page transitions and seamless admin catalog control.',
    img: '/project/Elite.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/node.svg',
      '/icons/express.svg',
      '/icons/mongo.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://elite-jade.vercel.app/',
    github: 'https://github.com/sameer2210',
    category: 'Full Stack',
  },
  {
    id: 6,
    slug: 'eato-recipe-app',
    title: 'Eato Recipe App',
    des: 'Delightful recipe web application to discover, create, and manage your favorite dishes with ease. Crafted with modern React tooling and smooth Framer Motion animations.',
    overview:
      'Eato is an intuitive culinary discovery web app enabling food enthusiasts to search, filter by nutritional profile, publish custom recipes, and bookmark meal ideas.',
    problemStatement:
      'Recipe websites are usually cluttered with ad popups, slow loading scripts, and cumbersome navigation.',
    architecture:
      'Vite React client utilizing Context API and Framer Motion layout animations, consuming third-party culinary REST APIs.',
    databaseDesign:
      'Client-side LocalStorage cache for offline bookmarks paired with RESTful JSON schemas.',
    techStackDetailed: [
      'React & Vite',
      'Redux Toolkit',
      'Framer Motion',
      'Tailwind CSS',
      'REST API Integration',
    ],
    features: [
      'Interactive Recipe Search & Dietary Filter Engine',
      'Smooth Layout Transitions & Responsive Cards',
      'Custom Recipe Creator & Local Storage Bookmark Manager',
      'Nutritional Breakdown Visualization',
    ],
    performanceMetrics: [
      { label: 'Lighthouse Performance', value: '100/100' },
      { label: 'First Contentful Paint', value: '0.6s' },
      { label: 'Accessibility Score', value: '100/100' },
    ],
    challenges:
      'Ensuring smooth 60fps animations during heavy list filtering on budget mobile browsers.',
    solutions:
      'Leveraged Framer Motion layout animations hardware accelerated via CSS transform properties.',
    api: 'Consumes RESTful meal database APIs with client-side response caching.',
    security:
      'Input sanitization on custom recipe form creation to prevent XSS script injection.',
    scalability:
      'Static asset delivery via Vercel global CDN with zero server runtime overhead.',
    lessonsLearned:
      'Using CSS hardware-accelerated transforms for animations guarantees 60fps frame rates on low-end devices.',
    futureRoadmap:
      'Add grocery shopping list generator with export to PDF feature.',
    deployment: 'Static Single-Page Application deployed on Vercel.',
    businessImpact: 'Achieved 100/100 Lighthouse performance and accessibility scores with high user engagement.',
    img: '/project/eato.png',
    iconLists: [
      '/icons/js.svg',
      '/icons/react.svg',
      '/icons/vite.svg',
      '/icons/redux.svg',
      '/icons/fm.svg',
      '/icons/tail.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://recipe-create-pied.vercel.app/',
    github: 'https://github.com/sameer2210',
    category: 'Full Stack',
  },
];

export const appProjects: ProjectDetail[] = [
  {
    id: 1,
    slug: 'spandavidya-ai-app',
    title: 'SpandaVidya AI App',
    des: 'AI-powered Ayurvedic Healthcare platform featuring chat-based Ayurvedic consultation and computer vision cataract detection.',
    overview:
      'Mobile application extension for SpandaVidya AI built with React Native for Android and iOS devices.',
    problemStatement:
      'Field health workers need a mobile native application capable of capturing high-quality ocular photos and operating in poor connectivity areas.',
    architecture:
      'React Native client with native bridge modules connecting to OpenCV PyTorch diagnostic APIs.',
    databaseDesign:
      'WatermelonDB / Async Storage local encrypted storage synced to MongoDB backend upon network reconnect.',
    techStackDetailed: [
      'React Native',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'AWS ECS',
    ],
    features: [
      'Camera-Based Ocular Scanning',
      'AI Chat Consultation Interface',
      'Offline Consultation History Storage',
    ],
    performanceMetrics: [
      { label: 'App Size', value: '34MB' },
      { label: 'Frame Rate', value: '60 FPS' },
    ],
    challenges: 'Capturing clear high-contrast ocular photos on varied mobile camera hardware.',
    solutions: 'Built custom camera mask overlay with real-time brightness verification.',
    api: 'REST API via HTTPS.',
    security: 'Encrypted Async Storage and TLS 1.3 network communication.',
    scalability: 'AWS auto-scaling container backend.',
    lessonsLearned: 'Native camera overlays improve photo quality for AI vision models dramatically.',
    futureRoadmap: 'Add offline model execution for basic cataract risk screening.',
    deployment: 'Standalone APK & TestFlight iOS distribution.',
    businessImpact: 'Allowed rural healthcare workers to conduct field screenings directly on smartphones.',
    img: '/project/SpandaVidya-app.png',
    iconLists: [
      '/icons/react.svg',
      '/icons/ts.svg',
      '/icons/node.svg',
      '/icons/mongo.svg',
      '/icons/aws.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://www.spandavidyaai.com/',
    github: 'https://github.com/harshbairagi88/spandaVidya-website',
    category: 'Mobile App',
  },
  {
    id: 2,
    slug: 'digiscanner-app',
    title: 'DigiScanner App',
    des: 'A powerful document scanning application. Capture, crop, and enhance documents seamlessly to digital format.',
    overview:
      'Android document scanning application enabling users to scan, perspective-correct, contrast-enhance, and compile documents into multi-page PDF files.',
    problemStatement:
      'Users need zero-privacy-risk document scanning that processes pages locally on-device without cloud upload dependencies.',
    architecture:
      'React Native application utilizing Android native C++ OpenCV image processing bindings.',
    databaseDesign:
      'Local File System PDF cache with SQLite metadata index.',
    techStackDetailed: [
      'React Native',
      'TypeScript',
      'Android Native OpenCV',
      'PDF Compiler Engine',
    ],
    features: [
      'Edge Detection & Perspective Crop Correction',
      'Black & White Magic Color Filters',
      'Multi-Page PDF Generation & Direct Share',
    ],
    performanceMetrics: [
      { label: 'Processing Speed', value: '450ms / page' },
      { label: 'PDF Compression', value: '70% smaller' },
    ],
    challenges: 'Real-time document edge detection under poor lighting conditions.',
    solutions: 'Implemented adaptive Canny edge detection thresholds with automatic fallback heuristics.',
    api: 'Local processing engine without external cloud network dependencies.',
    security: '100% on-device processing guarantees privacy compliance.',
    scalability: 'Independent local Android native execution.',
    lessonsLearned: 'C++ native modules deliver 5x faster image processing than JavaScript threads.',
    futureRoadmap: 'Add OCR text extraction support.',
    deployment: 'Android APK build release.',
    businessImpact: 'Provides zero-privacy-risk local document scanning with instant PDF generation.',
    img: '/project/DigiScanner-app.png',
    iconLists: [
      '/icons/react.svg',
      '/icons/ts.svg',
      '/icons/git.svg',
      '/icons/github.svg',
    ],
    link: 'https://github.com/sameer2210/DigiScanner',
    github: 'https://github.com/sameer2210/DigiScanner',
    category: 'Mobile App',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Full Stack Developer | Optico Solutions Pvt. Ltd.',
    desc: 'Engineered scalable web and mobile applications utilizing the MERN stack and React Native. Architected secure authentication systems (JWT, OAuth 2.0, RBAC) and integrated resilient payment gateways (Razorpay). Managed end-to-end cloud infrastructure deployments across AWS, GCP, and Hostinger.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
  {
    id: 2,
    title: 'Software Developer Intern | Sheryians Pvt. Ltd.',
    desc: 'Spearheaded the backend optimization for HRECT, a SaaS recruitment CRM. Designed complex MongoDB aggregation pipelines and query indexing strategies, successfully reducing database query response times by 35% and streamlining automated interview workflows.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Software Engineer',
    desc: 'Delivered end-to-end web and Android mobile solutions for client projects, including a vehicle validation platform. Built responsive frontends in React and React Native, supported by robust Node.js REST APIs and customized admin dashboards.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/icons/github.svg',
    href: 'https://github.com/sameer2210',
    name: 'GitHub',
  },
  {
    id: 2,
    img: '/icons/twit.svg',
    href: 'https://x.com/Sameer2210_',
    name: 'Twitter (X)',
  },
  {
    id: 3,
    img: '/icons/link.svg',
    href: 'https://www.linkedin.com/in/sameer2210/',
    name: 'LinkedIn',
  },
  {
    id: 4,
    img: '/icons/insta.svg',
    href: 'https://www.instagram.com/isameer_22',
    name: 'Instagram',
  },
  {
    id: 5,
    img: '/icons/youtube.svg',
    href: 'https://www.youtube.com/channel/UCkJWIW5koQOLwPgdE25p6jg',
    name: 'YouTube',
  },
];

export const faqs = [
  {
    question: 'Who is Sameer Khan?',
    answer:
      'Sameer Khan is a Full Stack Developer & Software Engineer based in Bhopal, Madhya Pradesh, India. He specializes in building scalable web and mobile applications using React, Next.js, Node.js, NestJS, Java, MERN Stack, React Native, TypeScript, PostgreSQL, MongoDB, Redis, Docker, and AWS.',
  },
  {
    question: 'What core technologies does Sameer Khan specialize in?',
    answer:
      'Sameer Khan specializes in Frontend technologies (React, Next.js, React Native, Redux Toolkit, Tailwind CSS, TypeScript), Backend frameworks (Node.js, Express.js, NestJS, Java), Databases & Caching (MongoDB, PostgreSQL, Redis, Prisma), and Cloud/DevOps tools (AWS, Docker, GitHub Actions, Vercel).',
  },
  {
    question: 'Is Sameer Khan available for full-time or contract software engineering roles?',
    answer:
      'Yes, Sameer Khan is actively open to Full Stack Developer, Software Engineer, Frontend Engineer, and Backend Engineer opportunities globally (Remote or On-site). You can reach out directly via email at sameerkhanorigin@gmail.com.',
  },
  {
    question: 'What key projects has Sameer Khan engineered?',
    answer:
      'Key projects include SpandaVidya AI (AI-powered Ayurvedic Healthcare with PyTorch cataract detection), CodeX (Real-time collaborative IDE with WebRTC & Gemini AI), FileHive (AES-256 encrypted cloud storage with Redis caching & Docker), Aviyukt NGO (OAuth & Razorpay payment integration platform), and ÉLITE (Full-stack e-commerce application).',
  },
  {
    question: 'How does Sameer Khan approach System Architecture & Performance?',
    answer:
      'Sameer Khan prioritizes Clean Architecture, modular micro-services/REST APIs, aggressive dynamic caching (Redis), optimized bundle splitting, server-side dynamic rendering (Next.js App Router), WCAG AA accessibility, and sub-second Core Web Vitals performance.',
  },
];
