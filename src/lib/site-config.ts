/**
 * ===============================================
 * CONFIGURAÇÕES EDITÁVEIS DA LANDING PAGE
 * Altere apenas os valores abaixo.
 * ===============================================
 */

export const siteConfig = {
  marca: "Estética Perin",
  profissional: "Ana Paula",
  cidade: "Santo André - SP",

  /** Número do WhatsApp com DDI + DDD (somente números) */
  whatsapp: "5511976855329",
  mensagemWhatsapp:
    "Olá! 😊 Vim pelo anúncio da Estética Perin e tenho interesse em agendar uma limpeza de pele. Gostaria de saber mais sobre a condição especial e os horários disponíveis.",

  /** Preços — deixe vazio ("") para exibir apenas "CONSULTE A CONDIÇÃO ESPECIAL" */
  precoNormal: "",
  precoOferta: "",

  /** Frase da oferta no hero. Ex.: "Limpeza de Pele a partir de R$ 149" */
  ofertaHero: "Limpeza de Pele a partir de [VALOR DA OFERTA]",

  /** Aviso opcional de horários — só preencha se for verdadeiro */
  avisoHorarios: "",

  /** Duração real do procedimento (FAQ) */
  duracaoProcedimento: "[INSERIR DURAÇÃO REAL DO PROCEDIMENTO]",

  /** Dados da profissional — preencher somente com informações reais */
  profissionalInfo: {
    formacao: "[FORMAÇÃO]",
    especializacoes: "[ESPECIALIZAÇÕES]",
    cursos: "[CURSOS]",
    experiencia: "[ANOS DE EXPERIÊNCIA]",
  },

  /** Depoimentos reais — substitua os placeholders */
  depoimentos: [
    { texto: "[DEPOIMENTO REAL DA CLIENTE]", nome: "[NOME DA CLIENTE]" },
    { texto: "[DEPOIMENTO REAL DA CLIENTE]", nome: "[NOME DA CLIENTE]" },
    { texto: "[DEPOIMENTO REAL DA CLIENTE]", nome: "[NOME DA CLIENTE]" },
  ],

  /** Meta Pixel — insira o ID quando tiver. Vazio = pixel desativado. */
  metaPixelId: "",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.mensagemWhatsapp,
)}`;
