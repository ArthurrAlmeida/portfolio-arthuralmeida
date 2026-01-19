
import React from 'react';
import { Project, Skill, Certificacao, Certification, Experience, Academic } from './types';
import projeto1 from './img/projeto-1.png';
import projeto2 from './img/projeto-2.jpg';
import certificacaoDp900 from './img/certificacao.png';

export const SITE_CONFIG = {
  name: "Arthur Almeida",
  role: "Engenheiro de Dados Microsoft Azure & Databricks",
  email: "arthur@example.com",
  github: "https://github.com/ArthurrAlmeida",
  linkedin: "https://www.linkedin.com/in/arthurvalmeida/",
  medium: "https://medium.com/@devarthuralmeida",
  about: [
    "Seja bem-vindo ao meu portfólio. Aqui você encontrará projetos focados na construção de arquiteturas robustas e escaláveis.",
    "Mestrando em Inteligência Artificial, com MBA em Big Data Analytics e certificação Microsoft DP-900 (Azure Data Fundamentals), possuo uma formação sólida que une teoria avançada à prática de mercado.",
    "Expertise em governança de dados, otimização de performance e desenvolvimento de pipelines complexos para ambientes de nuvem.",
    "Atualmente atuo como Professor Universitário na área de tecnologia, conciliando a execução técnica de projetos com a docência."
  ],
};

export const ACADEMIC_INFO: Academic[] = [
  {
    id: "acad1",
    institution: "Universidade Federal da Paraíba (UFPB)",
    degree: "Mestrando em Inteligência Artificial",
    period: "Em andamento",
    description: "Pesquisa avançada em modelos generativos e otimização de fluxos de processamento de dados com IA."
  },
  {
    id: "acad2",
    institution: "Faculdade Metropolitana",
    degree: "MBA em Big Data Analytics",
    period: "Concluído",
    description: "Especialização em arquitetura de dados, análise estatística e ferramentas de processamento em larga escala."
  },
  {
    id: "acad3",
    institution: "Faculdade Internacional da Paraíba",
    degree: "Bacharel em Ciência da Computação",
    period: "Concluído",
    description: "Base sólida em algoritmos, engineering de software e fundamentos de computação em nuvem."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    "id": "exp1",
    "company": "Faculdade Internacional da Paraíba (FPB)",
    "role": "Professor de Computação em Nuvem & Dados",
    "period": "Ago 2025 – Presente",
    "description": [
      "Ministro disciplinas focadas em Modern Data Stack (Azure, Databricks, SQL), preparando alunos para demandas reais de arquitetura escalável.",
      "Desenvolvi metodologia de ensino própria com material didático personalizado, traduzindo conceitos complexos de Big Data para acelerar o aprendizado técnico.",
      "Lidero projetos acadêmicos que simulam ambientes reais de Data Lakehouse, aplicando metodologias ágeis (Scrum/Kanban).",
      "Capacito turmas no uso prático de tecnologias de nuvem e Modelagem de Dados (Star Schema/Snowflake), conectando a teoria acadêmica às exigências do mercado."
    ],
    "technologies": ["Azure", "Databricks", "SQL", "Spark", "Scrum", "Modern Data Stack"]
  },
  {
    "id": "exp2",
    "company": "Liga Digital",
    "role": "Engenheiro de Dados (Foco em IA)",
    "location": "João Pessoa, PB",
    "period": "Abr 2024 – Jul 2024",
    "description": [
      "Desenvolvi e automatizei fluxos de ETL/ELT em Python (Pandas) para alimentação de modelos de Inteligência Artificial.",
      "Implementei REST APIs para integração e orquestração de dados, garantindo alta disponibilidade e reduzindo a latência na comunicação entre sistemas.",
      "Otimizei pipelines de dados brutos, aumentando a eficiência do processamento e a confiabilidade das entregas para clientes internacionais.",
      "Atuei na manutenção contínua de pipelines de IA e Data Quality, garantindo a estabilidade e a performance dos modelos em produção."
    ],
    "technologies": ["Python", "Pandas", "Azure Data Factory", "REST APIs", "Data Quality", "Git"]
  },
  {
    "id": "exp3",
    "company": "Grupo Energisa",
    "role": "Engenheiro de Dados",
    "location": "João Pessoa, PB (Híbrido)",
    "period": "Ago 2022 – Ago 2023",
    "description": [
      "Atuei na engenharia de dados do Ciclo de Faturamento, integrando fontes críticas financeiras e de mercado para suportar análises de receita.",
      "Arquitetei soluções End-to-End utilizando Azure Data Factory (ADF) e Oracle Integrator Data, reduzindo o tempo de disponibilidade da informação de dias para horas.",
      "Otimizei consultas complexas em Oracle PL/SQL, obtendo ganho de 98% de performance e redução de 40% nos custos de processamento em nuvem (FinOps).",
      "Implementei lógicas de deduplicação e tratamento de dados para o Data Warehouse, assegurando a confiabilidade dos dashboards financeiros."
    ],
    "technologies": ["Azure Data Factory", "Oracle PL/SQL", "Azure Cosmos DB", "Power BI", "FinOps", "Data Warehouse"]
  },
  {
    "id": "exp4",
    "company": "Job Space Creative",
    "role": "Desenvolvedor FullStack",
    "location": "Curitiba, PR (Remoto)",
    "period": "Fev 2022 – Jul 2022",
    "description": [
      "Atuei no desenvolvimento e manutenção de plataformas de e-commerce VTEX de alto tráfego para grandes marcas como Britânia e Philco.",
      "Implementei melhorias de front-end utilizando JavaScript, HTML e CSS, focando em responsividade e otimização da experiência do usuário (UX).",
      "Utilizei pipelines de CI/CD e versionamento com Git/GitHub para automatizar deploys e garantir a integridade do código em produção.",
      "Colaborei em equipe utilizando metodologias ágeis para entrega contínua de funcionalidades e correções de bugs."
    ],
    "technologies": ["VTEX", "JavaScript", "CI/CD", "Git", "HTML5/CSS3"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Data Warehouse Moderno & Pipeline ETL no Azure",
    description: "Pipeline ETL completo (Bronze/Silver/Gold) usando ADF, Data Lake e SQL Database. Veja o código e a documentação.",
    image: projeto1,
    tags: ["Azure Data Factory", "Azure SQL Database", "Azure Data Lake Gen2", "SQL"],
    link: "https://github.com/ArthurrAlmeida/Azure-data-warehouse-adventureworks",
    github: "https://github.com/ArthurrAlmeida/Azure-data-warehouse-adventureworks"
  },
  {
    id: "2",
    title: "API de Futebol em Tempo Real com NestJS",
    description: "Coleta de dados esportivos em tempo real com NestJS e TypeScript. Integração via API externa, persistência em PostgreSQL e documentação automática.",
    image: projeto2,
    tags: ["NestJS", "Stream Analytics", "Power BI", "PostgreSQL"],
    link: "https://github.com/ArthurrAlmeida/SistemaColetaDeDadosAPIFootball",
    github: "https://github.com/ArthurrAlmeida/SistemaColetaDeDadosAPIFootball"
  },
  /*{
    id: "3",
    title: "Framework de Governança de Dados",
    description: "Criação de automações para catálogo de dados e controle de acesso (RBAC) em ambientes multi-tenant de nuvem.",
    image: "./imagens/projeto3.jpg",
    tags: ["Unity Catalog", "Python", "Azure DevOps"],
    link: "#",
    github: "#"
  }*/
];

export const SKILLS: Skill[] = [
  // Core Stack
  { name: "Azure", icon: "☁️", category: "Core Stack" },
  { name: "Data Factory", icon: "🏭", category: "Core Stack" },
  { name: "Databricks", icon: "🧱", category: "Core Stack" },
  { name: "Python", icon: "🐍", category: "Core Stack" },
  { name: "SQL", icon: "📊", category: "Core Stack" },
  
  // Big Data & Cloud
  { name: "Spark", icon: "🔥", category: "Big Data & Cloud" },
  { name: "Synapse", icon: "🏛️", category: "Big Data & Cloud" },
  { name: "Snowflake", icon: "❄️", category: "Big Data & Cloud" },
  { name: "ADLS Gen2", icon: "📂", category: "Big Data & Cloud" },
  { name: "Delta Lake", icon: "🌊", category: "Big Data & Cloud" },
  
  // Ops & Tools
  { name: "Git", icon: "🌿", category: "Ops & Tools" },
  { name: "CI/CD", icon: "🔄", category: "Ops & Tools" },
  { name: "Docker", icon: "🐳", category: "Ops & Tools" },
  { name: "Airflow", icon: "🌬️", category: "Ops & Tools" },
  { name: "Power BI", icon: "📈", category: "Ops & Tools" },
];

export const CERTIFICACOES: Certificacao[] = [
  {
    id: "dp-900",
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    image: certificacaoDp900, 
    link: "https://learn.microsoft.com/api/credentials/share/pt-br/ArthurAlmeida-9156/1D79FC0E01717B89?sharingId=A85CEBB003C9B809", 
    tags: ["Azure", "Data", "Cloud"]
  },

];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "c3",
    title: "Docker",
    issuer: "Infinity BigData",
    date: "2026",
    icon: "🐳",
    link: "#"
  },
  {
    id: "c4",
    title: "CI/CD & DevOps",
    issuer: "DuZeru",
    date: "2025",
    icon: "🔄",
    link: "#"
  },
  {
    id: "c5",
    title: "Databricks",
    issuer: "Infinity BigData",
    date: "2025",
    icon: "🧱",
    link: "#"
  },
  {
    id: "c6",
    title: "Databricks Data Enginner Associate",
    issuer: "Ramesh Retnasamy",
    date: "2025",
    icon: "📜",
    link: "#"
  },
  {
    id: "c7",
    title: "Azure Data Factory",
    issuer: "Ramesh Retnasamy",
    date: "2025",
    icon: "🏭",
    link: "#"
  },
  {
    id: "c8",
    title: "AWS Academy",
    issuer: "AWS",
    date: "2024",
    icon: "☁️",
    link: "#"
  },
  {
    id: "c9",
    title: "Apache Spark & PySpark",
    issuer: "Fernando Amaral",
    date: "2023",
    icon: "🔥",
    link: "#"
  },
  {
    id: "c2",
    title: "Banco de Dados",
    issuer: "Alura",
    date: "2022",
    icon: "📊",
    link: "#"
  }
];
