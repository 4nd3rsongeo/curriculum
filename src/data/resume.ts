export interface ResumeData {
  profile: {
    name: string;
    role: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    website?: string;
  };
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights?: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    description: string;
    techStack?: string[];
    link?: string;
  }[];
  geo_projects?: {
    name: string;
    description: string;
    geoStack?: string[];
    link?: string;
  }[];
  tech_projects?: {
    name: string;
    description: string;
    techStack?: string[];
    link?: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
}

export const resumeData: Record<'pt' | 'en', ResumeData> = {
  pt: {
    profile: {
      name: "Anderson Miyashita",
      role: "Geólogo de Recursos & Desenvolvedor Full-stack",
      summary: "Geólogo de Recursos com 19 anos de experiência, especializado em modelagem geológica e estimativa de recursos em depósitos de classe mundial. Atualmente unindo o domínio das geociências com o desenvolvimento de software Full-stack e Inteligência Artificial para otimizar processos de mineração e análise de dados complexos.",
      location: "Brasil",
      email: "andsht@gmail.com",
      phone: "+55 (31) 99973 0101",
      linkedin: "https://www.linkedin.com/in/anderson-miyashita-7467322b/",
      github: "https://github.com/4nd3rsongeo",
      website: "https://portfolio-inky-two-98.vercel.app/",
    },
    experience: [
      {
        title: "Proprietário e Consultor Independente",
        company: "Consultoria em Avaliação de Recursos",
        period: "2024 - Atual",
        description: "Consultoria especializada em avaliação de recursos minerais e desenvolvimento de soluções tecnológicas para mineração.",
        highlights: [   
          "Desenvolvimento de projetos de amostragem, mapeamento de mina, modelamento geológico e estimativa",       
          "Trabalhei com projetos de automação de fluxos de processos de pre processo, estimativa e pós-processamento em python e javascript.",
          "Desenvolvimento de APIs RESTful e interfaces responsivas para análise de dados complexos.",
          "Consultoria técnica em estimativa de recursos e modelagem geológica 3D."
        ]
      },
      {
        title: "Geólogo de Recursos Especialista",
        company: "Vale",
        period: "2012 - 2024",
        description: "Atuação em depósitos de classe mundial, com foco em estimativa de recursos, automação e melhorias de fluxos de processos.",
        highlights: [
          "Modelei e|ou estimei os seguintes depósitos ferrosos: Conta História, Fábrica Nova, Serra Norte N4, Serra Norte N5, Manganês do Azul, Capitão do Mato, Tamanduá, Capão Xavier, Baú e Alegria",
          "Desenvolvimento de scripts e ferramentas internas para automação de rotinas de modelagem e reconciliação, utilizando Python e integração de bancos de dados espaciais.",
          "Responsável técnico em auditorias de recursos e conformidade com códigos internacionais (JORC).",
          "Liderança técnica em projetos de desenvolvimento de recursos minerais."
        ]
      },
      {
        title: "Geólogo Consultor",
        company: "Datamine",
        period: "2011",
        description: "Treinamentos e consultorias na plataforma Datamine Studio",
        highlights: [
          "Desenvolvimento de scripts para diversos processos em clientes do Brasil. Estruturação de ferramentas via javascript;",
          "Mentoria para profissionais em nível júnior e pleno"
        ]
      },
      {
        title: "Geólogo Coordenador",
        company: "Ferrous Resources",
        period: "2008-2010",
        description: "Responsável por modelamento 3D e estimativas, dos depósitos de Viga, Esperança, Serrinha e Santanense;",
        highlights: [
          "Modelamento de dados de pesquisa mineral, experiência com campanhas de sondagem e serviços de galpão de testemunhos;",
        ]
      },
      {
        title: "Geólogo de Mina",
        company: "Kinross gold Corp",
        period: "2006-2008",
        description: "Responsável por geologia de  mine e plano de lavra de curto prazo, responsável por detalhamento 3D de curto prazo, controle de teores;",
        highlights: [
          "Experiência ímpar com plano de produção da unidade operacional e dependências diretas com a geologia exposta em superfície;"
        ]
      }
    ],
    education: [
      {
        degree: "MBA em Business Transformation com Generative AI",
        institution: "Faculdade Hub",
        period: "2024 - 2027 (Em andamento)",
        description: "Foco na aplicação de Inteligência Artificial generativa para transformação de negócios e processos industriais."
      },      
      {
        degree: "Bacharelado em Geologia",
        institution: "UNESP",
        period: "2000 - 2005",
      }
    ],
    skills: [
      {
        category: "Geologia",
        items: ["Mapeamento Litoestrutural", "Amostragem", "Análise de Dados", "Modelagem 3D", "Estimativa de Recursos", "JORC", "Geoestatística Avançada"]
      },
      {
        category: "Tecnologia & Dev",
        items: ["Python (Data Science/ML)", "JavaScript/TypeScript (React/Next.js)", "Node.js (Express)", "Vite", "Bootstrap", "C#", "SQL (PostGIS)", "REST API"]
      },
      {
        category: "Softwares",
        items: ["Leapfrog Geo|Edge", "Datamine Studio", "Isatis.neo", "Maptek Vulcan", "QGIS"]
      }
    ],
    projects: [
      {
        name: "PostGIS API",
        description: "Desenvolvimento de API para dados geolocalizados. Integração com frontend leaflet multipropósito para srrvir de base a serviços de consultoria envolvendo, estruturação de dados, consumo e dashboarding.",
        techStack: ["Node.js", "Express", "Prisma","Next.js", "Three.js", "PostgreSQL"]
      },
      {
        name: "OneBitFlix",
        description: "Aplicação full-stack inspirada em serviços de streaming, trabalho final de conclusão de curso na OneBitCode 2025.",
        techStack: ["Node.js", "Express", "Prisma","Next.js", "React",  "Bootstrap"]
      }
    ],
    geo_projects: [
      {
        name: "Desenvolvimento de Modelos Geológicos de Recursos, desde definições macro da mineralização, estimativa de parâmetros/teores e Classificação de Recursos.",
        description: "Avaliação de Recursos Minerais para bulk commodities e baseadas em conteúdo metálico também (sensíveis a volumes e teores).",
        geoStack: ["Mapeamento Geológico", "Modelamento 3D", "Análise de Dados", "Pré Processo", "Estimativa", "Pós processo", "Classificação de Recursos"]
      },
      {
        name: "Consultoria em amostragem",
        description: "Serviços de parametrização de amostragem (massas, espaçamento, desvios padrão esperados, densidade de dados e conexão com serviços de estimativa).",
        geoStack: ["Amostragem", "QAQC", "Preparação de amostras", "Geoestatística Básica"]
      },
      {
        name: "Consultoria em modelamento de dados e integração de sistemas",
        description: "Design de bases relacionais e não relacionais, mapeamentos de serviços no campo, otimização de redundância e segurança de informação. Minimização de paralelismos e garantias de qualidade de informação;",
        geoStack: ["Modelamento de dados", "Gestão de serviços de aquisição", "Mecanismos de validação e controle", "Identificação de silos"]
      },
      {
        name: "Consultoria em geoprocessamento",
        description: "Serviços de consultoria em elementos construtivos geolocalizados, qualidade de modelo digital de terreno e cálculo de sensibilidades.",
        geoStack: ["Geoprocessamento", "Validação Multiespectral", "Ciência dos Dados", "Inteligência Artificial"]
      }
    ],
    tech_projects: [
      {
        name: "PostGIS API",
        description: "Desenvolvimento de API para dados geolocalizados. Integração com frontend leaflet multipropósito para srrvir de base a serviços de consultoria envolvendo, estruturação de dados, consumo e dashboarding.",
        techStack: ["Node.js", "Express", "Prisma","Next.js", "Three.js", "PostgreSQL"]
      },
      {
        name: "OneBitFlix",
        description: "Aplicação full-stack inspirada em serviços de streaming, trabalho final de conclusão de curso na OneBitCode 2025.",
        techStack: ["Node.js", "Express", "Prisma","Next.js", "React",  "Bootstrap"]
      }
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário superior" },
      { name: "Espanhol", level: "Avançado com certificação Siele" }
    ]
  },
  en: {
    profile: {
      name: "Anderson Miyashita",
      role: "Resource Geologist & Full-stack Developer",
      summary: "Resource Geologist with 19 years of experience, specialized in geological modeling and resource estimation in world-class deposits. Currently bridging the gap between geosciences and Full-stack software development and Artificial Intelligence to optimize mining processes and complex data analysis.",
      location: "Brazil",
      email: "andsht@gmail.com",
      phone: "+55 (31) 99973 0101",
      linkedin: "https://www.linkedin.com/in/anderson-miyashita-7467322b/",
      github: "https://github.com/4nd3rsongeo",
      website: "https://portfolio-inky-two-98.vercel.app/",
    },
    experience: [
      {
        title: "Business Owner & Independent Consultant",
        company: "Resource Evaluation Consultancy",
        period: "2024 - Present",
        description: "Specialized consultancy in mineral resource evaluation and development of technological solutions for mining.",
        highlights: [
          "Development of sampling projects, mine mapping, geological modeling, and estimation.",
          "Worked on automation projects for pre-processing, estimation, and post-processing workflows using Python and JavaScript.",
          "Development of RESTful APIs and responsive interfaces for complex data analysis.",
          "Technical consultancy in resource estimation and 3D geological modeling."
        ]
      },
      {
        title: "Expert Resource Geologist",
        company: "Vale",
        period: "2012 - 2024",
        description: "Experience in world-class deposits, focusing on resource estimation, automation, and workflow improvements.",
        highlights: [
          "Modeled and/or estimated the following iron ore deposits: Conta História, Fábrica Nova, Serra Norte N4, Serra Norte N5, Manganês do Azul, Capitão do Mato, Tamanduá, Capão Xavier, Baú, and Alegria.",
          "Development of scripts and internal tools for automating modeling and reconciliation routines using Python and spatial database integration.",
          "Technical responsible for resource audits and compliance with international codes (JORC).",
          "Technical leadership in mineral resource development projects."
        ]
      },
      {
        title: "Consultant Geologist",
        company: "Datamine",
        period: "2011",
        description: "Training and consultancy on the Datamine Studio platform.",
        highlights: [
          "Development of scripts for various processes for clients in Brazil. Structuring tools via JavaScript.",
          "Mentoring for junior and mid-level professionals."
        ]
      },
      {
        title: "Coordinator Geologist",
        company: "Ferrous Resources",
        period: "2008 - 2010",
        description: "Responsible for 3D modeling and estimations of the Viga, Esperança, Serrinha, and Santanense deposits.",
        highlights: [
          "Mineral exploration data modeling, experience with drilling campaigns and core shed services."
        ]
      },
      {
        title: "Mine Geologist",
        company: "Kinross Gold Corp",
        period: "2006 - 2008",
        description: "Responsible for mine geology and short-term mining plans, responsible for short-term 3D detailing, grade control.",
        highlights: [
          "Unparalleled experience with operational unit production plans and direct dependencies on surface-exposed geology."
        ]
      }
    ],
    education: [
      {
        degree: "MBA in Business Transformation with Generative AI",
        institution: "Faculdade Hub",
        period: "2024 - 2027 (Ongoing)",
        description: "Focus on applying generative AI for business transformation and industrial processes."
      },
      {
        degree: "Bachelor's in Geology",
        institution: "UNESP",
        period: "2000 - 2005",
      }
    ],
    skills: [
      {
        category: "Geology",
        items: ["Lithostructural Mapping", "Sampling", "Data Analysis", "3D Modeling", "Resource Estimation", "JORC", "Advanced Geostatistics"]
      },
      {
        category: "Tech & Dev",
        items: ["Python (Data Science/ML)", "JavaScript/TypeScript (React/Next.js)", "Node.js (Express)", "Vite", "Bootstrap", "C#", "SQL (PostGIS)", "REST API"]
      },
      {
        category: "Software",
        items: ["Leapfrog Geo|Edge", "Datamine Studio", "Isatis.neo", "Maptek Vulcan", "QGIS"]
      }
    ],
    projects: [
      {
        name: "PostGIS API",
        description: "API development for geolocated data. Integration with a multi-purpose Leaflet frontend to serve as a base for consultancy services involving data structuring, consumption, and dashboarding.",
        techStack: ["Node.js", "Express", "Prisma", "Next.js", "Three.js", "PostgreSQL"]
      },
      {
        name: "OneBitFlix",
        description: "Full-stack application inspired by streaming services, final graduation project at OneBitCode 2025.",
        techStack: ["Node.js", "Express", "Prisma", "Next.js", "React", "Bootstrap"]
      }
    ],
    geo_projects: [
      {
        name: "Development of Resource Geological Models, from macro mineralization definitions to parameter/grade estimation and Resource Classification.",
        description: "Mineral Resource Evaluation for bulk commodities and metallic content-based deposits (sensitive to volumes and grades).",
        geoStack: ["Geological Mapping", "3D Modeling", "Data Analysis", "Pre-processing", "Estimation", "Post-processing", "Resource Classification"]
      },
      {
        name: "Sampling Consultancy",
        description: "Sampling parameterization services (masses, spacing, expected standard deviations, data density, and connection with estimation services).",
        geoStack: ["Sampling", "QAQC", "Sample Preparation", "Basic Geostatistics"]
      },
      {
        name: "Data Modeling and Systems Integration Consultancy",
        description: "Design of relational and non-relational databases, field service mappings, redundancy optimization, and information security. Minimization of parallelisms and information quality assurance;",
        geoStack: ["Data Modeling", "Acquisition Service Management", "Validation and Control Mechanisms", "Silo Identification"]
      },
      {
        name: "Geoprocessing Consultancy",
        description: "Consultancy services for geolocated constructive elements, digital terrain model quality, and sensitivity calculation.",
        geoStack: ["Geoprocessing", "Multispectral Validation", "Data Science", "Artificial Intelligence"]
      }
    ],
    tech_projects: [
      {
        name: "PostGIS API",
        description: "API development for geolocated data. Integration with a multi-purpose Leaflet frontend to serve as a base for consultancy services involving data structuring, consumption, and dashboarding.",
        techStack: ["Node.js", "Express", "Prisma", "Next.js", "Three.js", "PostgreSQL"]
      },
      {
        name: "OneBitFlix",
        description: "Full-stack application inspired by streaming services, final graduation project at OneBitCode 2025.",
        techStack: ["Node.js", "Express", "Prisma", "Next.js", "React", "Bootstrap"]
      }
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Upper Intermediate" },
      { name: "Spanish", level: "Advanced with Siele certification" }
    ]
  }
};
