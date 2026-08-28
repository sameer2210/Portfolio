export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime: string;
  category: 'Backend Architecture' | 'Frontend Engineering' | 'DevOps & Cloud' | 'Database Optimization' | 'AI & Mobile';
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
    github: string;
  };
  seoKeywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mern-authentication-jwt-rbac-security',
    title: 'Building a High-Performance MERN Authentication System with JWT, Refresh Tokens & RBAC',
    excerpt: 'A comprehensive architectural guide to engineering secure, stateless authentication in Node.js and React using HTTP-only cookies, JWT rotation, and Role-Based Access Control.',
    publishedAt: '2026-07-20',
    readingTime: '12 min read',
    category: 'Backend Architecture',
    tags: ['Node.js', 'Express.js', 'JWT', 'React', 'Security', 'MongoDB'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'MERN Authentication',
      'JWT Refresh Token Rotation',
      'Role Based Access Control Node.js',
      'Express.js Security Best Practices',
      'HTTP-Only Cookie Authentication',
      'Sameer Khan Full Stack',
    ],
    content: `# Building a High-Performance MERN Authentication System with JWT, Refresh Tokens & RBAC

Stateless authentication is the backbone of modern web applications. In high-concurrency microservices and full-stack MERN (MongoDB, Express, React, Node.js) architectures, naive JWT implementations—such as storing access tokens in localStorage—expose applications to Cross-Site Scripting (XSS) vulnerabilities.

In this deep dive, we will walk through engineering a production-ready, enterprise-grade authentication system featuring HTTP-Only SameSite cookies, short-lived Access Tokens, sliding Refresh Token rotation, and declarative Role-Based Access Control (RBAC).

---

## 1. Security Threat Model & Token Architecture

Before writing code, let's understand the two primary attack vectors in modern web authentication:

1. **Cross-Site Scripting (XSS):** If an attacker injects a malicious script via an unsafe input, the script can access localStorage and exfiltrate authentication tokens instantly.
2. **Cross-Site Request Forgery (CSRF):** If credentials are stored in cookies, browsers automatically attach them to cross-origin requests unless strict cookie attributes (SameSite=Strict or SameSite=Lax with HttpOnly and Secure) are configured.

### The Dual-Token Security Model

To mitigate both vectors, we implement a dual-token strategy:

- **Access Token:** Short lifespan (15 minutes). Signed using HMAC SHA-256 (HS256) or RSA SHA-256 (RS256). Transmitted via Authorization header or memory state.
- **Refresh Token:** Longer lifespan (7 days). Stored in a cryptographically random, HTTP-Only, Secure, SameSite Cookie. Stored in Redis or MongoDB with hashed signatures to support instant revocation.

---

## 2. Express.js Authentication & Refresh Middleware Implementation

Let's inspect the core Node.js middleware for verifying short-lived JWT access tokens and handling sliding session refreshes.

\`\`\`typescript
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    roles: string[];
  };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired access token' });
    }
    req.user = user as AuthenticatedRequest['user'];
    next();
  });
};
\`\`\`

### Role-Based Access Control (RBAC) Guard

\`\`\`typescript
export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.roles) {
      return res.status(403).json({ error: 'Access denied: No role permissions attached' });
    }

    const hasPermission = req.user.roles.some((role) => allowedRoles.includes(role));

    if (!hasPermission) {
      return res.status(403).json({ error: 'Access denied: Insufficient privileges' });
    }

    next();
  };
};
\`\`\`

---

## 3. Database Schema & Token Revocation with MongoDB

When a user logs out or changes their password, we must invalidate all existing refresh tokens. Here is the Mongoose user schema with refresh token tracking:

\`\`\`typescript
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  roles: { type: [String], default: ['USER'] },
  refreshTokenHash: { type: String, default: null },
  tokenVersion: { type: Number, default: 0 },
}, { timestamps: true });

export const UserModel = mongoose.model('User', UserSchema);
\`\`\`

---

## 4. Performance & Key Takeaways

1. **Zero XSS Token Exposure:** Storing access tokens in memory and refresh tokens in HTTP-only cookies guarantees that malicious third-party scripts cannot extract credentials.
2. **Sub-10ms Token Refresh:** Using Redis or indexed MongoDB queries for token revocation checks ensures negligible authentication overhead.
3. **Seamless UX:** Axios silent token refreshing guarantees users stay logged in without unexpected modal prompts or page reloads.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '2',
    slug: 'nestjs-microservices-enterprise-architecture',
    title: 'NestJS Microservices Architecture: Building Resilient Enterprise Backends',
    excerpt: 'Learn how to design scalable, decoupled microservices using NestJS, Redis Pub/Sub, gRPC, and Clean Architecture for high-throughput enterprise backends.',
    publishedAt: '2026-07-18',
    readingTime: '15 min read',
    category: 'Backend Architecture',
    tags: ['NestJS', 'TypeScript', 'Microservices', 'Redis', 'Docker', 'Architecture'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'NestJS Microservices',
      'NestJS Clean Architecture',
      'TypeScript Microservices Architecture',
      'Redis Message Broker NestJS',
      'Sameer Khan NestJS Developer',
    ],
    content: `# NestJS Microservices Architecture: Building Resilient Enterprise Backends

As web applications scale beyond single monoliths, modular microservice architectures become essential for handling high traffic volumes, independent deployment cycles, and fault isolation.

NestJS provides a progressive, strongly-typed Node.js framework built with TypeScript that makes constructing enterprise microservices robust and maintainable. In this article, we will examine how to build a microservice architecture using NestJS, Redis Pub/Sub transport, and Clean Architecture principles.

---

## 1. Monolithic vs. Microservices Trade-offs

Monolithic architectures offer rapid initial velocity, but suffer from key drawbacks as engineering teams grow:
- **Tight Coupling:** A bug in a minor reporting module can crash the entire HTTP server.
- **Scaling Bottlenecks:** You must scale the entire monolith rather than target high-load endpoints.
- **Build Bottlenecks:** Re-compiling massive codebases slows CI/CD pipelines.

NestJS solves these challenges by providing native microservice abstractions out of the box.

---

## 2. Architecture Overview & Message Brokers

In our architecture, the **API Gateway** acts as the public reverse proxy and HTTP router. It validates incoming JWT credentials and dispatches async tasks to background workers via **Redis Transport**.

---

## 3. NestJS Microservice Implementation

### API Gateway Client Registration

\`\`\`typescript
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderController } from './order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST || 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [OrderController],
})
export class AppModule {}
\`\`\`

### Microservice Message Handler

\`\`\`typescript
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class OrderServiceController {
  @MessagePattern({ cmd: 'create_order' })
  async handleOrderCreation(@Payload() data: { userId: string; items: any[] }) {
    console.log("Processing order for user: " + data.userId);
    return { status: 'SUCCESS', orderId: 'ORD-' + Date.now() };
  }
}
\`\`\`

---

## 4. Key Engineering Takeaways

1. **Strict Type Safety:** Shared DTO interfaces ensure seamless contract enforcement across service boundaries.
2. **Fault Tolerance:** Circuit breaker patterns prevent localized network timeouts from cascading across microservices.
3. **Scalability:** Horizontal container scaling via AWS ECS / Docker Kubernetes handles massive request bursts effortlessly.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '3',
    slug: 'nextjs-14-performance-core-web-vitals-guide',
    title: 'Next.js 14 App Router Performance Optimization: Code Splitting & Core Web Vitals',
    excerpt: 'Master Next.js 14 App Router performance tuning: Server Components, dynamic dynamic imports, image optimization, font preloading, and achieving a 100/100 Lighthouse score.',
    publishedAt: '2026-07-15',
    readingTime: '10 min read',
    category: 'Frontend Engineering',
    tags: ['Next.js', 'React', 'Performance', 'Web Vitals', 'Tailwind CSS', 'TypeScript'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'Next.js 14 Performance Optimization',
      'App Router Core Web Vitals',
      'Next.js Code Splitting Dynamic Import',
      'Lighthouse 100 Next.js',
      'Sameer Khan React Developer',
    ],
    content: `# Next.js 14 App Router Performance Optimization: Code Splitting & Core Web Vitals

Web performance directly correlates with user retention, conversion rates, and Google search ranking. Google's **Core Web Vitals** (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) serve as explicit ranking signals.

In Next.js 14 App Router, achieving a **100/100 Lighthouse score** requires leveraging React Server Components (RSC), strategic code splitting, font optimization, and zero layout shift image strategies.

---

## 1. Core Web Vitals Target Breakdown

- **LCP (Largest Contentful Paint):** Target under 1.2 seconds. Speed at which the main hero content paints.
- **INP (Interaction to Next Paint):** Target under 50ms. Responsiveness to user clicks & interactions.
- **CLS (Cumulative Layout Shift):** Target 0.00. Visual stability of page elements during load.

---

## 2. React Server Components vs. Client Components

In Next.js 14 App Router, components default to **Server Components**. Server Components execute exclusively on the server, outputting pure HTML stream chunks to the browser with **zero client JavaScript bundle overhead**.

### Best Practices:
- Keep data fetching inside Server Components.
- Push "use client" directive down to the smallest interactive leaf nodes.

\`\`\`tsx
import { fetchProjects } from '@/lib/db';
import ClientCard from './ClientCard';

export default async function ProjectList() {
  const projects = await fetchProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ClientCard key={project.id} project={project} />
      ))}
    </div>
  );
}
\`\`\`

---

## 3. Below-the-Fold Code Splitting via Dynamic Imports

Heavy JavaScript libraries should never be bundled into the initial page load JS chunk. Use next/dynamic with skeleton fallbacks:

\`\`\`tsx
import dynamic from 'next/dynamic';
import { SkeletonLoader } from '@/components/Skeleton';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <SkeletonLoader className="h-64 w-full" />,
  ssr: false,
});

export default function AnalyticsDashboard() {
  return (
    <section>
      <h2>Analytics Summary</h2>
      <HeavyChart />
    </section>
  );
}
\`\`\`

---

## 4. Summary & Key Takeaways

1. Default to **Server Components** to keep JavaScript bundle size minimal.
2. Use **next/dynamic** for heavy below-the-fold components to reduce initial hydration block time.
3. Optimize font loading using **next/font** with display swap to eliminate FOUT.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '4',
    slug: 'docker-containerization-aws-ecs-deployment-guide',
    title: 'Containerizing MERN Stack Applications with Docker, Docker Compose & AWS ECS',
    excerpt: 'Step-by-step production deployment guide: Dockerizing Node.js microservices, multi-stage builds, Docker Compose local orchestration, and AWS ECS Fargate automation.',
    publishedAt: '2026-07-10',
    readingTime: '14 min read',
    category: 'DevOps & Cloud',
    tags: ['Docker', 'AWS', 'Node.js', 'DevOps', 'CI/CD', 'MongoDB'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'Docker MERN Stack Deployment',
      'AWS ECS Fargate Node.js',
      'Multi-Stage Dockerfile Node.js',
      'Docker Compose Production Guide',
      'Sameer Khan AWS Docker Engineer',
    ],
    content: `# Containerizing MERN Stack Applications with Docker, Docker Compose & AWS ECS

Environment inconsistency ("it works on my machine") is a leading cause of production deployment failures. **Docker containerization** ensures that code runs identically across local development, staging servers, and cloud production environments.

In this guide, we will walk through constructing lightweight multi-stage Docker images for Node.js backends, local orchestration with Docker Compose, and zero-downtime deployment to AWS ECS Fargate.

---

## 1. Multi-Stage Dockerfile Optimization

Using **Multi-Stage Builds**, we reduce final image footprint down to under **120MB**.

\`\`\`dockerfile
# Stage 1: Build Dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production Execution
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

USER node
EXPOSE 5000

CMD ["node", "dist/main.js"]
\`\`\`

---

## 2. Key Takeaways

1. Multi-stage builds shrink image sizes by **85%**, drastically speeding up deployment pull times.
2. Non-root user execution (USER node) guarantees container sandbox security.
3. Automated GitHub Actions CI/CD ensures reliable, zero-downtime rolling updates on AWS ECS Fargate.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '5',
    slug: 'sub-10ms-redis-caching-nodejs-guide',
    title: 'Sub-10ms Data Caching with Redis & Node.js for High-Concurrency Applications',
    excerpt: 'Drastically reduce MongoDB and PostgreSQL database query latency by implementing cache-aside strategies, cache invalidation, and Redis pipeline operations in Express and NestJS.',
    publishedAt: '2026-07-05',
    readingTime: '11 min read',
    category: 'Database Optimization',
    tags: ['Redis', 'Node.js', 'MongoDB', 'PostgreSQL', 'Performance', 'Backend Architecture'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'Redis Caching Node.js',
      'Sub 10ms Database Caching',
      'Cache Aside Pattern Express',
      'Redis Invalidation Strategy',
      'Sameer Khan Database Optimization',
    ],
    content: `# Sub-10ms Data Caching with Redis & Node.js for High-Concurrency Applications

When database traffic spikes during peak campaigns or high concurrency events, executing heavy SQL JOINs or complex MongoDB aggregation pipelines directly on primary databases leads to connection pool exhaustion and high query latency.

By introducing **Redis** as an in-memory caching layer, response times drop from **150ms+ down to sub-8ms**, preserving primary database health.

---

## 1. Cache-Aside Pattern Implementation

The **Cache-Aside** (or Read-Through Cache) pattern checks Redis first for requested key paths. If present (Cache Hit), data is returned instantly. If missing (Cache Miss), the database query executes, populates Redis with a Time-To-Live (TTL) expiration, and returns the payload.

\`\`\`typescript
import Redis from 'ioredis';
import { UserModel } from './models/User';

export const redisClient = new Redis(process.env.REDIS_URL!);

export async function getUserProfile(userId: string) {
  const cacheKey = "user:profile:" + userId;

  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const userProfile = await UserModel.findById(userId).lean();

  if (userProfile) {
    await redisClient.set(cacheKey, JSON.stringify(userProfile), 'EX', 3600);
  }

  return userProfile;
}
\`\`\`

---

## 2. Handling Cache Invalidation

Stale data is the most common bug in caching implementations. When a user updates their profile, the associated Redis cache keys must be explicitly invalidated.

\`\`\`typescript
export async function updateUserProfile(userId: string, updateData: any) {
  const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });

  const cacheKey = "user:profile:" + userId;
  await redisClient.del(cacheKey);

  return updatedUser;
}
\`\`\`

---

## 3. Results & Performance Benchmarks

- User Profile Lookup: **120ms reduced to 4ms (96.6% faster)**
- Product Catalog Search: **240ms reduced to 7ms (97.1% faster)**
- Config Metadata: **85ms reduced to 2ms (97.6% faster)**

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '6',
    slug: 'webrtc-socketio-collaborative-ide-engineering',
    title: 'Real-Time Peer-to-Peer Collaborative IDE Engineering with Socket.IO & WebRTC',
    excerpt: 'Architectural breakdown of building low-latency multi-user code editors: Operational Transformation algorithms, WebRTC Mesh audio/video calls, and Socket.IO signaling servers.',
    publishedAt: '2026-06-28',
    readingTime: '13 min read',
    category: 'Backend Architecture',
    tags: ['WebRTC', 'Socket.IO', 'Node.js', 'React', 'System Design', 'TypeScript'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'WebRTC Socket.IO Collaborative Editor',
      'Realtime Code Synchronization Architecture',
      'Operational Transformation Node.js',
      'Sameer Khan CodeX IDE',
    ],
    content: `# Real-Time Peer-to-Peer Collaborative IDE Engineering with Socket.IO & WebRTC

Building a browser-based collaborative IDE like **CodeX** requires solving two fundamental technical challenges:
1. **Low-Latency Operational Synchronization:** Ensuring multi-cursor code modifications from multiple users resolve deterministically without content divergence.
2. **Sub-100ms Peer-to-Peer Audio/Video:** Streaming high-quality media between developers directly without routing media frames through central HTTP servers.

In this technical breakdown, we look at the engineering patterns behind real-time collaborative code rooms.

---

## 1. Operational Transformation & Multi-Cursor Sync

When two developers edit line 14 simultaneously, simple timestamp replacement leads to lost code edits. We use Operational Transformation (OT) sequence clocking:

\`\`\`typescript
export interface CodeOperation {
  type: 'INSERT' | 'DELETE';
  position: number;
  text: string;
  authorId: string;
  version: number;
}

export function applyOperation(content: string, op: CodeOperation): string {
  if (op.type === 'INSERT') {
    return content.slice(0, op.position) + op.text + content.slice(op.position);
  }
  if (op.type === 'DELETE') {
    return content.slice(0, op.position) + content.slice(op.position + op.text.length);
  }
  return content;
}
\`\`\`

---

## 2. Key Accomplishments

- Achieved **sub-45ms cursor sync latency** across multi-regional users.
- Reduced server bandwidth consumption by 90% by offloading media streams to WebRTC peer channels.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '7',
    slug: 'pytorch-deep-learning-react-native-medical-app',
    title: 'AI Ocular Diagnostics: Integrating PyTorch Deep Learning Models into Mobile React Native Apps',
    excerpt: 'How we engineered SpandaVidya AI: Quantizing PyTorch computer vision models for low-latency serverless inference and building accessible React Native healthcare interfaces.',
    publishedAt: '2026-06-20',
    readingTime: '14 min read',
    category: 'AI & Mobile',
    tags: ['React Native', 'PyTorch', 'NestJS', 'TypeScript', 'AWS', 'Mobile App'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'PyTorch React Native Integration',
      'SpandaVidya AI Cataract Detection',
      'ONNX Mobile Vision Model',
      'Sameer Khan React Native AI',
    ],
    content: `# AI Ocular Diagnostics: Integrating PyTorch Deep Learning Models into Mobile React Native Apps

Artificial Intelligence is revolutionizing preliminary medical screenings in remote communities. **SpandaVidya AI** was designed to provide automated cataract risk assessments using deep learning computer vision alongside intelligent Ayurvedic consultations.

This article details how we integrated PyTorch convolutional neural networks with NestJS API backends and cross-platform React Native mobile applications.

---

## 1. Model Weight Quantization for Serverless Inference

Raw PyTorch model weights often exceed 250MB, causing cold-start connection penalties. By converting and quantizing weights to **ONNX INT8 format**, we reduced model size by **75%** while retaining **94.2% diagnostic accuracy**.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
  {
    id: '8',
    slug: 'postgresql-mongodb-indexing-strategies-optimization',
    title: 'PostgreSQL & MongoDB Database Indexing Strategies for 35% Faster Aggregation Pipelines',
    excerpt: 'A practical database performance tuning guide: B-Tree vs Hash vs Compound Indexes, MongoDB aggregation pipeline optimization, and query execution plan analysis with EXPLAIN ANALYZE.',
    publishedAt: '2026-06-12',
    readingTime: '12 min read',
    category: 'Database Optimization',
    tags: ['MongoDB', 'PostgreSQL', 'Database Indexing', 'Performance', 'Node.js'],
    author: {
      name: 'Sameer Khan',
      role: 'Full Stack Developer & Software Engineer',
      avatar: '/sameer-pic.jpg',
      github: 'https://github.com/sameer2210',
    },
    seoKeywords: [
      'MongoDB Indexing Strategies',
      'PostgreSQL EXPLAIN ANALYZE',
      'Compound Index MongoDB Optimization',
      'Sameer Khan Database Tuning',
    ],
    content: `# PostgreSQL & MongoDB Database Indexing Strategies for 35% Faster Aggregation Pipelines

Without strategic database indexing, query execution times scale linearly as table row counts grow into millions. By applying compound indexes tailored to query patterns, database engines perform logarithmic B-Tree lookups instead of expensive full collection scans.

During my engineering work at **Sheryians Pvt. Ltd.** on the HRECT recruitment SaaS platform, database optimization reduced query execution times by **35%**.

---

## 1. MongoDB Compound Index Rules (ESR Rule)

When creating MongoDB compound indexes, follow the **ESR Rule**:
1. **Equality:** Place exact match fields first (status: ACTIVE).
2. **Sort:** Place sort ordering fields second (createdAt: -1).
3. **Range:** Place range comparison fields last (age >= 18).

\`\`\`javascript
// MongoDB Index Definition enforcing ESR Rule
db.applications.createIndex(
  { status: 1, createdAt: -1, salaryExpectation: 1 },
  { background: true, name: 'idx_status_created_salary' }
);
\`\`\`

---

## 2. Results Summary

- Reduced MongoDB aggregation pipeline execution time from **420ms to 270ms (35.7% speedup)**.
- Reduced PostgreSQL query lock times under 500 active concurrent connections.

*Engineered by Sameer Khan — Full Stack Developer & Software Engineer.*`,
  },
];
