export interface CoverLetterData {
  title: string;
  recipient: string;
  introduction: string;
  body: string[];
  closing: string;
  signature: string;
}

export const coverLetterData: Record<'pt' | 'en', CoverLetterData> = {
  pt: {
    title: "Carta de Apresentação",
    recipient: "À Equipe de Recrutamento,",
    introduction: "É com grande entusiasmo que apresento minha candidatura para colaborar com sua organização, unindo minha sólida experiência de 19 anos em Geologia de Recursos com minhas competências em desenvolvimento de software Full-stack e Inteligência Artificial.",
    body: [
      "Ao longo de minha carreira, especialmente durante meus 12 anos na Vale, especializei-me em modelagem geológica e estimativa de recursos em depósitos de classe mundial. Essa trajetória me permitiu desenvolver uma visão analítica profunda e a capacidade de lidar com dados complexos e críticos para o negócio.",
      "Atualmente, estou expandindo essas fronteiras através de um MBA em Business Transformation com IA Generativa e do desenvolvimento de soluções tecnológicas personalizadas. Minha capacidade de criar APIs robustas, interfaces responsivas e automações inteligentes permite que eu não apenas identifique desafios geocientíficos, mas também construa as ferramentas necessárias para resolvê-los de forma eficiente.",
      "Acredito que a convergência entre o domínio técnico da mineração e a vanguarda tecnológica é a chave para a próxima era da eficiência industrial. Estou pronto para aplicar essa mentalidade inovadora em sua equipe, trazendo agilidade, precisão e uma perspectiva multidisciplinar única."
    ],
    closing: "Agradeço pela atenção e coloco-me à disposição para uma entrevista, onde poderei detalhar como minha experiência híbrida pode agregar valor imediato aos seus projetos.",
    signature: "Anderson Miyashita"
  },
  en: {
    title: "Cover Letter",
    recipient: "To the Recruitment Team,",
    introduction: "It is with great enthusiasm that I submit my application to collaborate with your organization, bridging my solid 19-year experience in Resource Geology with my skills in Full-stack software development and Artificial Intelligence.",
    body: [
      "Throughout my career, particularly during my 12 years at Vale, I specialized in geological modeling and resource estimation in world-class deposits. This path has allowed me to develop deep analytical insight and the ability to handle complex, business-critical data.",
      "Currently, I am expanding these boundaries through an MBA in Business Transformation with Generative AI and by developing custom technological solutions. My ability to create robust APIs, responsive interfaces, and intelligent automations allows me to not only identify geoscientific challenges but also build the necessary tools to solve them efficiently.",
      "I believe the convergence of mining technical expertise and cutting-edge technology is key to the next era of industrial efficiency. I am ready to apply this innovative mindset to your team, bringing agility, precision, and a unique multidisciplinary perspective."
    ],
    closing: "Thank you for your consideration. I look forward to the opportunity for an interview, where I can detail how my hybrid experience can add immediate value to your projects.",
    signature: "Anderson Miyashita"
  }
};
