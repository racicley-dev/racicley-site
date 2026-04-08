
// Objeto contendo todas as traduções
const translations = {
    'pt': {
        btn_text: 'English',
        btn_flag: '🇺🇸',
        role: 'Analista de Dados | AI | MLOps | AWS',
        about_title: 'Sobre Mim',
        about_desc: 'Profissional com cerca de 3 anos de experiência na área de dados, focado no desenvolvimento e deploy de modelos preditivos e engenharia de dados. Tenho forte interesse em pesquisa em Inteligência Artificial e aplicação de MLOps em ambientes de nuvem (AWS e GCP).',
        exp_title: 'Experiência Profissional',
        role_data_analyst: 'Analista de Dados',
        date_current: '12/2025 - Presente',
        ws_job1_li1: 'Criação e deploy de modelos preditivos utilizando <strong>Amazon SageMaker</strong>.',
        ws_job1_li2: 'Desenvolvimento de fluxos de dados (ETL) com <strong>AWS Lambda/Glue</strong> e <strong>GCP Cloud Functions</strong>.',
        ws_job1_li3: 'Gerenciamento e consulta de grandes volumes de dados no <strong>BigQuery</strong> e <strong>Redshift</strong>.',
        ws_job1_li4: 'Implementação de práticas de MLOps para monitoramento e versionamento de modelos.',
        ws_job1_li5: 'Criação de Agentes de IA na GCP com <strong>DialogFlowCX/Conversational Agents</strong> e na AWS com <strong>Bedrock Agents</strong>.',
        ws_job1_li6: "Criação de Fluxos de Automação com <strong>Make</strong>.",
        role_it_assist: 'Assistente de Automações em TI',
        ws_job2_desc: 'Atuação com análise exploratória de dados, automação de scripts em Python e criação de dashboards para suporte à tomada de decisão.',
        edu_title: 'Formação Acadêmica',
        edu_degree: 'Tecnologia em Sistemas de Computação',
        edu_date: 'Conclusão: 2025',
        skills_title: 'Habilidades em Computação',
        skill_lang: 'Linguagens & Backend',
        skill_cloud: 'Cloud & MLOps',
        skill_ai: 'Data Science & AI',
        tag_agents: 'Agentes de IA',
        footer_rights: 'Todos os direitos reservados.',
        contact_title: 'Contato',
        linkedin_text: 'Conectar no LinkedIn',
        nav_portfolio: 'Portfólio',
        nav_articles: 'Artigos',
        portfolio_title: 'Ideias de Projetos para Portfólio',
        portfolio_mlops: 'CI/CD automatizado para ML com versionamento de modelos, testes e deploy em produção usando DVC, GitHub Actions e SageMaker.',
        portfolio_forecast: 'Modelo de série temporal com LSTM/Prophet para prever demanda de vendas, integrado com API REST e dashboard real-time.',
        portfolio_agent: 'Chatbot/Agente com LLM que responde perguntas sobre dados estruturados, integrado com Bedrock/Vertex AI e RAG.',
        portfolio_anomaly: 'Detecção de fraudes ou anomalias em transações usando Isolation Forest ou Autoencoders, com alertas em tempo real.',
        portfolio_etl: 'Pipeline ETL com Spark/Airflow processando GB de dados, com qualidade de dados e governança implementada.',
        portfolio_dashboard: 'Dashboard interativo com Streamlit/Plotly mostrando métricas de negócio, A/B testing e insights preditivos.',
    },
    'en': {
        btn_text: 'Português',
        btn_flag: '🇧🇷',
        role: 'Data Analyst | AI | MLOps | AWS',
        about_title: 'About Me',
        about_desc: 'Professional with about 3 years of experience in data, focused on development and deployment of predictive models and data engineering. Strong interest in Artificial Intelligence research and MLOps application in cloud environments (AWS and GCP).',
        exp_title: 'Professional Experience',
        role_data_analyst: 'Data Analyst',
        date_current: '12/2025 - Present',
        ws_job1_li1: 'Creation and deployment of predictive models using <strong>Amazon SageMaker</strong>.',
        ws_job1_li2: 'Development of data workflows (ETL) with <strong>AWS Lambda/Glue</strong> and <strong>GCP Cloud Functions</strong>.',
        ws_job1_li3: 'Management and querying of large data volumes in <strong>BigQuery</strong> and <strong>Redshift</strong>.',
        ws_job1_li4: 'Implementation of MLOps practices for model monitoring and versioning.',
        ws_job1_li5: 'Creation of AI Agents on GCP with <strong>DialogFlowCX/Conversational Agents</strong> and on AWS with <strong>Bedrock Agents</strong>.',
        ws_job1_li6: "Building Automation Workflows with <strong>Make</strong>.",
        role_it_assist: 'IT Automation Assistant',
        ws_job2_desc: 'Worked with exploratory data analysis, Python script automation, and dashboard creation for decision-making support.',
        edu_title: 'Education',
        edu_degree: 'Technology in Computing Systems',
        edu_date: 'Conclusion: 2025',
        skills_title: 'Computing Skills',
        skill_lang: 'Languages & Backend',
        skill_cloud: 'Cloud & MLOps',
        skill_ai: 'Data Science & AI',
        tag_agents: 'AI Agents',
        footer_rights: 'All rights reserved.',
        contact_title: 'Contact',
        linkedin_text: 'Connect on LinkedIn',
        nav_portfolio: 'Portfolio',
        nav_articles: 'Articles',
        portfolio_title: 'Portfolio Project Ideas',
        portfolio_mlops: 'Automated CI/CD for ML with model versioning, testing and production deployment using DVC, GitHub Actions and SageMaker.',
        portfolio_forecast: 'Time series model with LSTM/Prophet to forecast sales demand, integrated with REST API and real-time dashboard.',
        portfolio_agent: 'Chatbot/Agent with LLM that answers questions about structured data, integrated with Bedrock/Vertex AI and RAG.',
        portfolio_anomaly: 'Fraud and anomaly detection in transactions using Isolation Forest or Autoencoders, with real-time alerts.',
        portfolio_etl: 'ETL pipeline with Spark/Airflow processing GB of data, with data quality and governance implemented.',
        portfolio_dashboard: 'Interactive dashboard with Streamlit/Plotly showing business metrics, A/B testing and predictive insights.',
    }
};

let currentLang = 'pt'; // Idioma padrão

function toggleLanguage() {
    // Alternar idioma
    currentLang = currentLang === 'pt' ? 'en' : 'pt';

    // Atualizar textos da página
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            // Se tiver HTML (tags strong, etc), usa innerHTML, senão innerText
            element.innerHTML = translations[currentLang][key];
        }
    });

    // Atualizar o botão
    document.getElementById('btn-text').innerText = translations[currentLang].btn_text;
    document.querySelector('.flag-icon').innerText = translations[currentLang].btn_flag;

    // Alterar o atributo lang do HTML (bom para SEO e acessibilidade)
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en-US';
}
