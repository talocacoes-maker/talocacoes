// App configuration
export const APP_TITLE = "T.A. Serviços e Locações";
export const APP_DESCRIPTION =
  "Aluguel de Caçambas e Andaimes em Maricá RJ. Entrega rápida, preço justo e descarte licenciado.";
export const APP_TAGLINE = "Sua obra mais limpa, sua cidade mais verde";

// Company info
export const COMPANY = {
  name: "T.A. Serviços e Locações",
  phone: "(21) 99882-4612",
  whatsapp: "5521998824612",
  email: "talocacoes2020@gmail.com",
  location: "Maricá – RJ",
  instagram: "@t.alocacoesserviços",
  tagline: "Sua obra mais limpa, sua cidade mais verde",
  description:
    "Especializada em aluguel de caçambas estacionárias e andaimes em Maricá – RJ. Entrega rápida, preço justo e descarte licenciado.",
};

// Navigation
export const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Blog", href: "/blog" },
  { label: "Orçamento", href: "#quote" },
  { label: "Contato", href: "#contact" },
];

// Services
export const SERVICES = [
  {
    id: "dumpsters",
    title: "Aluguel de Caçambas Estacionárias",
    description:
      "Caçambas para entulho, madeira, gesso, barro e resíduos de obra. Diversos tamanhos disponíveis.",
    features: [
      "Entrega no mesmo dia",
      "Troca mediante solicitação",
      "Locação flexível",
      "Todos os tipos de resíduo",
    ],
    icon: "🚛",
  },
  {
    id: "scaffolding",
    title: "Aluguel de Andaimes",
    description:
      "Andaimes seguros e certificados para obras pequenas e grandes. Montagem e desmontagem inclusos.",
    features: [
      "Normas de segurança",
      "Montagem profissional",
      "Locação flexível",
      "Manutenção inclusa",
    ],
    icon: "🏗️",
  },
  {
    id: "disposal",
    title: "Descarte Ambientalmente Correto",
    description:
      "Destinação licenciada e sustentável para todos os resíduos coletados, seguindo normas ambientais.",
    features: [
      "100% licenciado",
      "Certificados ambientais",
      "Reciclagem responsável",
      "Relatórios de destinação",
    ],
    icon: "🌱",
  },
];

// Benefits
export const BENEFITS = [
  {
    title: "Entrega Rápida",
    subtitle: "No mesmo dia",
    icon: "⚡",
  },
  {
    title: "Locação Flexível",
    subtitle: "Diária, semanal, mensal",
    icon: "📅",
  },
  {
    title: "Eco-Sustentável",
    subtitle: "Descarte consciente",
    icon: "🌱",
  },
];

// Target audiences
export const AUDIENCES = [
  { label: "Construtoras", emoji: "🏗️" },
  { label: "Condomínios", emoji: "🏢" },
  { label: "Órgãos Públicos", emoji: "🏛️" },
  { label: "Residências", emoji: "🏠" },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Maria Silva",
    role: "Síndica do Condomínio Residencial Jardins",
    text: "Excelente serviço! A T.A. Locações entregou a caçamba no horário combinado e o descarte foi feito de forma completamente licenciada. Preço justo e atendimento impecável.",
  },
  {
    name: "Carlos Mendes",
    role: "Construtor - CM Construções",
    text: "Trabalho com a T.A. há mais de 2 anos. Sempre pontuais, caçambas em perfeito estado e o melhor custo-benefício da região. Recomendo para qualquer obra.",
  },
  {
    name: "Ana Costa",
    role: "Arquiteta",
    text: "Precisei de andaimes para uma reforma residencial e fiquei impressionada com a qualidade do equipamento e a rapidez na montagem. Equipe muito profissional!",
  },
];

// Cookie name for auth
export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';
