/**
 * ===============================================
 * CONFIGURAÇÕES EDITÁVEIS DA LANDING PAGE
 * Altere apenas os valores abaixo.
 * ===============================================
 */

export const siteConfig = {
  marca: "Estética Perin",
  profissional: "Ana Paula",
  cidade: "Av. Industrial, 1680 - Torre 1 - Torre 1, Santo André - SP, 09080-501",

  /** Número do WhatsApp com DDI + DDD (somente números) */
  whatsapp: "5511976855329",
  mensagemWhatsapp:
    "Olá! 😊 Vim pelo anúncio da Estética Perin e tenho interesse em agendar uma limpeza de pele. Gostaria de saber mais sobre a condição especial e os horários disponíveis.",

  /** Frase da oferta no hero */
  ofertaHero: "Limpeza de Pele a partir de R$ 190",

  /** Duração real do procedimento (FAQ) */
  duracaoProcedimento: "[INSERIR DURAÇÃO REAL DO PROCEDIMENTO]",

  /** Dados da profissional */
  profissionalInfo: {
    formacao: "Biomédica Esteta",
    especializacoes: "Harmonização Facial",
    cursos: "Rejuvenescimento natural e sofisticado",
    experiencia: "15 anos de experiência",
    protocolos: "Protocolos personalizados",
  },

  /** Depoimentos de clientes */
  depoimentos: [
    {
      texto:
        "Fiz minha limpeza de pele com a Ana Paula e amei o atendimento. Minha pele ficou com uma sensação maravilhosa de limpeza e muito mais viçosa. Foi um momento de autocuidado que eu estava precisando.",
      nome: "Mariana Oliveira",
    },
    {
      texto:
        "Adorei a experiência na Estética Perin. A Ana Paula foi muito atenciosa, explicou tudo durante o procedimento e cuidou de cada detalhe. Minha pele ficou com um aspecto muito mais bonito e renovado.",
      nome: "Camila Santos",
    },
    {
      texto:
        "Foi minha primeira limpeza de pele e fiquei muito satisfeita. O atendimento foi personalizado, o ambiente é muito agradável e saí me sentindo muito bem. Com certeza vou voltar.",
      nome: "Juliana Almeida",
    },
  ],

  /** Meta Pixel — insira o ID quando tiver. Vazio = pixel desativado. */
  metaPixelId: "",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.mensagemWhatsapp,
)}`;
