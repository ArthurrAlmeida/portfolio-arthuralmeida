import React from 'react';
import { Project, Skill, Certificacao, Certification, Experience, Academic } from './types';
import projeto1 from './img/projeto-1.png';
import projeto2 from './img/projeto-2.jpg';
import projeto3 from './img/projeto-3.jpg';
import projeto4 from './img/projeto-4.jpg';
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
    "location": "João Pessoa, PB (Presencial)",
    "period": "Ago 2025 – Presente",
    "description": [
      "Estruturação de laboratórios simulando ambientes corporativos de dados em Microsoft Azure.",
      "Provisionamento de workspaces Azure Databricks, configuração de clusters e execução de processamento distribuído com Spark.",
      "Implementação de arquiteturas Data Lake e Delta Lake para workloads analíticos.",
      "Introdução a conceitos de governança, controle de acesso (RBAC) e segurança em ambientes de nuvem.",
      "Elaboração de documentação técnica e padronização de projetos acadêmicos com foco em boas práticas de engenharia de dados."
    ],
    "technologies": ["Microsoft Azure", "Azure Databricks", "Spark", "Data Lake", "Delta Lake", "RBAC"]
  },
  {
    "id": "exp2",
    "company": "Liga Digital",
    "role": "Engenheiro de Dados para IA",
    "location": "João Pessoa, PB (Presencial)",
    "period": "Abr 2024 – Jul 2024",
    "description": [
      "Desenvolvimento de pipelines do zero para ingestão e transformação de dados em ambiente Azure.",
      "Integração de APIs, bases relacionais e arquivos estruturados para consolidação em Data Lake.",
      "Tratamento de dados faltantes, inconsistentes e padronização de estruturas para consumo analítico.",
      "Implementação de logs estruturados para rastreabilidade e monitoramento de execuções.",
      "Modelagem de dados para integração com ferramentas de BI.",
      "Implementação de CI/CD para versionamento e automação de deploy de pipelines."
    ],
    "technologies": ["Python", "n8n", "Django", "Azure Data Factory", "SQL", "CI/CD"]
  },
  {
    "id": "exp3",
    "company": "Grupo Energisa",
    "role": "Engenheiro de Dados",
    "location": "João Pessoa, PB (Híbrido)",
    "period": "Ago 2022 – Ago 2023",
    "description": [
      "Construção e manutenção de mais de 15 pipelines ETL/ELT em Azure Data Factory e Oracle Integrator Data, atendendo múltiplas áreas corporativas.",
      "Desenvolvimento e manutenção de fluxos de integração com Oracle Data Integrator (ODI) em ambiente on-premise.",
      "Versionamento e organização de pacotes ODI, garantindo controle e rastreabilidade das integrações.",
      "Criação de views e procedures em SQL e PL/SQL para suporte direto a times de BI e Analytics.",
      "Otimização de cargas e transformações, reduzindo o tempo médio de processamento em aproximadamente 20%.",
      "Correção de incidentes de falha em cargas e atuação preventiva para manter SLA de dados.",
      "Validação de qualidade de dados antes da disponibilização para dashboards analíticos.",
      "Participação na definição e evolução da arquitetura híbrida (on-premise + Azure).",
      "Elaboração de documentação técnica e funcional para usuários e áreas de negócio."
    ],
    "technologies": ["Python", "Oracle Integrator Data", "Azure Data Factory", "SQL", "PL/SQL", "Power BI"]
  },
  {
    "id": "exp4",
    "company": "Job Space Creative",
    "role": "Desenvolvedor FullStack",
    "location": "Remoto",
    "period": "Fev 2022 – Jul 2022",
    "description": [
      "Desenvolvimento e manutenção de plataformas VTEX para e-commerces de alto tráfego.",
      "Implementação de melhorias de performance e responsividade utilizando JavaScript, HTML e CSS.",
      "Automação de deploy com pipelines CI/CD e versionamento via Git/GitHub.",
      "Colaboração em times ágeis para entrega contínua de funcionalidades."
    ],
    "technologies": ["JavaScript", "HTML/CSS", "VTEX", "CI/CD", "Git/GitHub"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Cripto Data Lakehouse - ELT & Near Real-Time Analytics",
    description: "Pipeline ELT moderno utilizando Arquitetura Medalhão para processar dados da API CoinGecko com Databricks, Delta Lake e Power BI.",
    image: projeto3, 
    tags: ["Azure Databricks", "Delta Lake", "Azure Data Lake Gen2", "PySpark", "Power BI"],
    link: "https://github.com/ArthurrAlmeida/Azure-data-warehouse-adventureworks",
    github: "https://github.com/ArthurrAlmeida/Azure-data-warehouse-adventureworks"
  },
  {
    id: "2",
    title: "Data Warehouse Moderno & Pipeline ETL no Azure",
    description: "Pipeline ETL completo (Bronze/Silver/Gold) usando ADF, Data Lake e SQL Database. Veja o código e a documentação.",
    image: projeto1,
    tags: ["Azure Data Factory", "Azure SQL Database", "Azure Data Lake Gen2", "SQL"],
    link: "https://github.com/ArthurrAlmeida/Azure-data-warehouse-adventureworks",
    github: "https://github.com/ArthurrAlmeida/Azure-data-warehouse-adventureworks"
  },
  {
    id: "3",
    title: "API de Futebol em Tempo Real com NestJS",
    description: "Coleta de dados esportivos em tempo real com NestJS e TypeScript. Integração via API externa, persistência em PostgreSQL e documentação automática.",
    image: projeto2,
    tags: ["NestJS", "Stream Analytics", "Power BI", "PostgreSQL"],
    link: "https://github.com/ArthurrAlmeida/SistemaColetaDeDadosAPIFootball",
    github: "https://github.com/ArthurrAlmeida/SistemaColetaDeDadosAPIFootball"
  },
  {
    id: "4",
    title: "Bootcamp AWS - Migração de Dados para SnowFlake",
    description: "Pipeline End-to-End orquestrado no AWS EC2 com Airflow. Ingestão de banco local para Snowflake e modelagem dimensional (Star Schema) via dbt",
    image: projeto4,
    tags: ["Apache Airflow", "Snowflake", "dbt", "AWS"],
    link: "https://github.com/ArthurrAlmeida/Migracao-Dados-Local-para-AWS",
    github: "https://github.com/ArthurrAlmeida/Migracao-Dados-Local-para-AWS"
  }
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
