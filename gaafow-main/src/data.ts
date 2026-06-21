import { Project, SkillCategory } from "./types";
import omarPortrait from "./assets/images/images/omar.jpeg";

export const developerProfile = {
  name: "omar-gaafow",
  title: "Full Stack Developer & UI Enthusiast",
  tagline: "Full Stack Developer & UI Enthusiast crafting clean, user-centric digital experiences with technical precision and creative flare.",
  profileImage: omarPortrait,
  email: "hello@omar-gaafow.com",
  location: "Remote / London, UK",
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "public" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "work" },
    { name: "Twitter", url: "https://twitter.com", icon: "share" }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building responsive and performant web interfaces with beautiful typography and clean state machines.",
    icon: "Terminal",
    tags: ["React", "Tailwind", "TypeScript", "Vite", "Motion"]
  },
  {
    title: "Backend",
    description: "Scaling robust server-side architectures, designing database schemas, and building fast JSON APIs.",
    icon: "Database",
    tags: ["Node.js", "PostgreSQL", "Express", "Drizzle ORM", "REST/GraphQL"]
  },
  {
    title: "Mobile",
    description: "Developing highly responsive, cross-platform native applications with seamless native module bridging.",
    icon: "Smartphone",
    tags: ["React Native", "iOS/Android", "Expo", "Fastlane", "Local Database"]
  },
  {
    title: "DevOps",
    description: "Streamlining continuous deployment pipelines, managing container orchestration, and cloud infrastructure.",
    icon: "Cloud",
    tags: ["Docker", "AWS", "GitHub Actions", "Nginx", "Linux Server"]
  }
];

export const projectsData: Project[] = [
  {
    id: "finstream",
    title: "FinStream Dashboard",
    description: "Real-time financial monitoring system with advanced data visualization and automated reporting.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAstrrR8zCE5ZFNMe8J0AmPPapTtx6nCZnNdz-qXgmRid76bfyXqeGYhqC6SroIkEWB6WR6D7ddZK30a43vw2CIHUgprxuVxqLJDJK8c1KRd8ZUk_PaWNfIAeyIErUp-px1QcJLzhwxkpYDu-TOq_q6FIwTxwmrGJBVSyW3npqydEdhfzAs38fvIn1t6qn-kSm2JECxpmh9l1M65UoGdjXrQJ3DG_k4hDvcRanBU3S49q34bn5XNOPC3jAgfttL12BiylEkM1UCyMI",
    tags: ["React", "Next.js", "D3.js", "ApexCharts", "Financial API"],
    caseStudy: {
      overview: "FinStream is a state-of-the-art visual telemetry console built for active asset traders. It processes thousands of concurrent tick-updates to visualize arbitrage spread anomalies.",
      challenge: "Handling heavy streaming stock metrics through WebSocket connections without overloading the React virtual DOM tree or triggering UI performance bottlenecks.",
      solution: "Implemented frame-buffered requestAnimationFrame visual rendering, and calculated off-thread analytics processing inside Dedicated Web Workers.",
      impact: [
        "Reduced rendering CPU workload by 65%.",
        "Ensured zero-lag canvas rendering at a locked 60 FPS under heavy simulated server loads.",
        "Increased telemetry viewport clarity resulting in 18% improvement in customer response speeds."
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "D3.js", "WebSockets", "Web Workers"]
    }
  },
  {
    id: "luxecommerce",
    title: "LuxeCommerce App",
    description: "A premium shopping experience featuring AR product previews and seamless checkout integration.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnzx6f-XLqXZRkcDwVqRcppM7LejElGWO3fmCDKY_E1ZL2DHYPy9TIEwPspYAjtV3R75ERtG0NE4291UNotb83nskBF-KTy_ldCFNHufo3ThGRM-6YNLxo2CLYC3ONDzS8crE56w-VhJtVjCo6ShJWVL_CQmJmI_cED72BUWA3kQCxA1tpC7Atp1iJHcaZWvehJoMq_Do5K7LooUsb6E_DI1TtFE_0jeLihd0PsCuKtNtvMMwbXRGJSwv8AKAhbFW5MBzMSR6f31w",
    tags: ["React Native", "Firebase", "Redux Toolkit", "Stripe SDK", "ARCore"],
    caseStudy: {
      overview: "LuxeCommerce is a luxury brand shopping app that elevates the traditional retail workflow. It introduces WebXR product spatial rendering directly within the user's camera view.",
      challenge: "Coordinating standard iOS/Android cross-platform native elements with demanding augmented reality (AR) matrices while maintaining a lightweight bundle size.",
      solution: "Created a customized React Native Bridge that loaded low-poly glTF assets and triggered rendering routines inside optimized native view components.",
      impact: [
        "Boosted user engagement duration by an average of 3.4x using virtual placement previewing.",
        "Created an ultra-smooth native checkout pipeline that reduced abandoned shopping carts by 24%.",
        "Achieved a 4.9-star rating on the App Store during launch week."
      ],
      technologies: ["React Native", "TypeScript", "ARCore / SceneKit", "Firebase Firestore & Auth", "Stripe API", "Redux Toolkit"]
    }
  },
  {
    id: "cloudpulse",
    title: "CloudPulse Monitor",
    description: "Automated infrastructure monitoring tool with predictive scaling and anomaly detection capabilities.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUSCQ_MjWP62szVQEoEf8E03XKe4BtgXS9E0Y98EcIKWJOGSoslD_vIdychavUf5oyGL4NTbIqCq0DcuCS_G1ujou4Ue568j-r1aQfLVPRnHOp6-ynR_5sutRNmIF0hGp0DRlN8Q3JWVXbcgMCftCqmv6saiYEZpsjdHt2NzkJYNPMZX8tpAq8lU7DsYVdv1PAWtvz_A91IlKbuwUAAWvkfos2uVWYbMmcWF5h7zidmIA50qimv8JiHNvX_CCui82JLZ1nLi7TbeY",
    tags: ["Docker", "AWS", "Prometheus", "Grafana", "Python AI"],
    caseStudy: {
      overview: "CloudPulse is a server-health alerting suite that analyzes inbound container log parameters, predicting cloud resource exhaustion hours before standard warning triggers occur.",
      challenge: "Consolidating millions of log strings in real-time while using minimal processor cycles, and detecting intricate patterns in clusters with thousands of host nodes.",
      solution: "Designed micro-agent logging pipelines written in Rust that fed pre-aggregated statistic samples directly to a cluster-managed timeseries engine.",
      impact: [
        "Enabled zero-downtime microservice operation for 12 enterprise clients.",
        "Guarded active cluster clusters against costly resource spike failures, slashing DevOps emergency workloads by 40%.",
        "Provided real-time visualization of container topology maps with low-latency responsiveness."
      ],
      technologies: ["Docker", "Kubernetes", "Rust Daemon", "Prometheus", "Grafana Panels", "AWS Cloudwatch", "Python Machine Learning"]
    }
  }
];
