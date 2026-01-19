
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Academic {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Certificacao {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: any; // ou string
  link: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}