export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string[];
    technologies: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string; // lucide icon name
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SavedMessage extends ContactFormData {
  id: string;
  timestamp: string;
}
