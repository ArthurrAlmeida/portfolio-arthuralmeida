import React from 'react';
import { Project, Skill, Certificacao, Certification, Experience, Academic } from './types';
import projeto1 from './img/projeto-1.png';
import projeto2 from './img/projeto-2.jpg';
import projeto3 from './img/projeto-3.png';
import projeto4 from './img/projeto-4.png';
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
    "Engenheiro de Dados com mais de 1 ano de experiência na área de Business Intelligence de uma grande empresa, com pipelines ETL/ELT em Oracle Data Integrator, SQL Server e PL/SQL abastecendo um Data Warehouse corporativo. Microsoft Certified (DP-900). ",
    "Expertise em governança de dados, otimização de performance e desenvolvimento de pipelines complexos para ambientes de nuvem.",
    "Atualmente atuo como Professor Universitário na área de tecnologia, conciliando a execução técnica de projetos com a docência."
  ],
};

export const ACADEMIC_INFO: Academic[] = [

  {
    id: "acad1",
    institution: "Faculdade Metropolitana",
    degree: "MBA em Big Data Analytics",
    period: "Concluído",
    description: "Especialização em arquitetura de dados, análise estatística e ferramentas de processamento em larga escala."
  },
  {
    id: "acad2",
    institution: "Faculdade Internacional da Paraíba",
    degree: "Bacharel em Ciência da Computação",
    period: "Concluído",
    description: "Base sólida em algoritmos, engineering de software e fundamentos de computação em nuvem."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    "id": "exp1",
    "company": "Professor de Ensino Superior",
    "role": "Professor de Computação em Nuvem & Dados",
    "location": "João Pessoa, PB (Presencial)",
    "period": "Ago 2025 – Presente",
    "description": [
      "Leciono para os cursos de Ciência da Computação e ADS, nas disciplinas de Algoritmos e Programação e Garantia da Qualidade de Software, com cerca de 120 alunos em 8 turmas ao longo do período.",
      "Já lecionei também Estruturas de Dados e Análise de Algoritmos, Governança e Serviços de TI, Sistemas Distribuídos e Mobile, Projetos e Processos de TI, e Teoria da Computação e Compiladores.
",
      "Orientei projetos práticos end-to-end e documentação técnica, incluindo dinâmicas em que outras turmas atuaram como clientes simulados.",
      "Apresentei as principais plataformas de computação em nuvem (Azure, AWS e GCP) e ferramentas de CI/CD aplicadas a projetos de software."
    ],
    "technologies": ["Ciência da computação e Pesquisa e desenvolvimento"]
  },
  {
    "id": "exp2",
    "company": "Liga Digital",
    "role": "Analista de Automação e IA",
    "location": "João Pessoa, PB (Presencial)",
    "period": "Abr 2024 – Jul 2024",
    "description": [
      "Desenvolvi fluxos de automação com n8n e Make para chatbots e agentes de IA em diversos canais, integrando modelos da OpenAI (receber mensagens, processar com IA e retornar respostas).",
      "Estruturei em documentos as informações coletadas em reuniões com clientes, usadas como base de conhecimento dos agentes.",
      "Participei da entrega de diversos chatbots e agentes de IA, em equipe."
    ],
    "technologies": ["Python", "Otimização fluxos dados", "Testes modelos IA", "Personalização soluções IA", "Análise dados IA"]
  },
  {
    "id": "exp3",
    "company": "Grupo Energisa",
    "role": "Estagiário de Business Intelligence",
    "location": "João Pessoa, PB (Híbrido)",
    "period": "Ago 2022 – Ago 2023",
    "description": [
      "Atuação na Gerência de Business Intelligence (equipe de 6 pessoas), com foco em integração e preparação de dados para o Data Warehouse corporativo.",
      "Construí e mantive pipelines ETL/ELT com Oracle Data Integrator (ODI), carregando um Data Warehouse a partir de bancos Oracle e SQL Server, arquivos e outras fontes, com cargas de diferentes frequências.",
      "Desenvolvi views, procedures e transformações em SQL Server e PL/SQL para dar suporte aos times de BI e Analytics.",
      "Otimizei queries e cargas SQL para melhorar o tempo de processamento.",
      "Implementei validações de Data Quality (contagem de linhas, nulos, duplicidades e comparação com a origem) para dar confiabilidade aos dados consumidos em dashboards e relatórios.",
      "Realizei a sustentação das cargas: monitoramento, análise e correção de incidentes.",
      "Documentei integrações e fluxos técnicos."
    ],
    "technologies": ["Python", "Oracle Integrator Data", "Azure Data Factory", "SQL", "PL/SQL", "Power BI"]
  },
  {
    "id": "exp4",
    "company": "Desenvolvedor Web VTEX",
    "role": "Desenvolvedor FullStack",
    "location": "Remoto",
    "period": "Fev 2022 – Jul 2022",
    "description": [
      "Desenvolvi e mantive lojas virtuais, landing pages e e-mails marketing na plataforma VTEX (templates do CMS) para marcas como Britânia e Philco, usando HTML, CSS e JavaScript.",
      "Implementei melhorias de performance e responsividade no front-end.",
      "Atuei em equipe ágil (Scrum), com demandas de alteração organizadas em quadro Kanban, entregando ajustes e correções de bugs de forma contínua.",
      "Utilizei Git/GitHub para versionamento do código."
    ],
    "technologies": ["JavaScript", "HTML/CSS", "VTEX", "CI/CD", "Git/GitHub"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Cripto Data Lakehouse - ELT & Real-Time Analytics",
    description: "Pipeline ELT moderno utilizando Arquitetura Medalhão para processar dados da API CoinGecko com Databricks, Delta Lake e Power BI.",
    image: projeto3, 
    tags: ["Azure Databricks", "Delta Lake", "Azure Data Lake Gen2", "PySpark", "Power BI"],
    link: "https://github.com/ArthurrAlmeida/Crypto-Lakehouse-ELT",
    github: "https://github.com/ArthurrAlmeida/Crypto-Lakehouse-ELT"
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
    title: "Databricks",
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
