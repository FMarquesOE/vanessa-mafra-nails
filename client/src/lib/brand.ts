/**
 * Brand & content constants for Vanessa Mafra Especialista Nails landing pages.
 * Shared across all three model variants.
 */

export const BRAND = {
  name: "Vanessa Mafra",
  tagline: "Especialista em Unhas",
  fullTitle: "Vanessa Mafra · Especialista em Unhas",
  positioning: "Sofisticação com naturalidade",
  city: "Duque de Caxias · RJ",
  address: "Av. Dr. Manoel Teles, 31 — sala 1203, Centro",
  whatsappLabel: "Agende pelo WhatsApp",
  instagram: "@vanessamafra_especialistanails",
  instagramUrl: "https://www.instagram.com/vanessamafra_especialistanails/",
  whatsappUrl: "https://wa.me/5521999277505",
  founded: "Estúdio · Duque de Caxias",
};

export const SERVICES = [
  {
    id: "manicure-spa",
    name: "Manicure SPA",
    short: "Cuidado completo das mãos",
    description:
      "Ritual completo que combina cutilagem precisa, hidratação profunda e finalização em gel naturalista. Suas mãos saem renovadas, com brilho saudável e durabilidade de até três semanas.",
    duration: "1h30",
    highlight: "Hidratação profunda",
  },
  {
    id: "pedicure-spa",
    name: "Pedicure SPA",
    short: "Bem-estar para os pés",
    description:
      "Imersão relaxante em água morna com sais aromáticos, esfoliação suave, cuidado das cutículas e esmaltação em gel. Um momento de pausa que cuida e descansa.",
    duration: "1h45",
    highlight: "Imersão aromática",
  },
  {
    id: "plastica-pes",
    name: "Plástica dos Pés",
    short: "Renove a pele dos pés",
    description:
      "Procedimento técnico que remove calosidades, suaviza rachaduras e devolve maciez à pele. Resultado visível desde a primeira sessão, com pés renovados e confortáveis.",
    duration: "1h",
    highlight: "Resultado imediato",
  },
  {
    id: "unhas-gel",
    name: "Unhas de Gel Naturalista",
    short: "Beleza natural duradoura",
    description:
      "Especialidade da casa: aplicação de gel com técnica naturalista que respeita o formato natural da unha, com acabamento delicado e brilho discreto. Sofisticação sem exageros.",
    duration: "2h",
    highlight: "Técnica autoral",
  },
];

export const TESTIMONIALS = [
  {
    name: "Beatriz M.",
    role: "Cliente desde 2023",
    text: "Encontrei na Vanessa a delicadeza que procurava há anos. As unhas duram, ficam discretas e elegantes — exatamente o que eu queria.",
  },
  {
    name: "Camila T.",
    role: "Cliente desde 2024",
    text: "O ambiente é um respiro no meio da semana. Saio renovada, com mãos lindas e uma sensação de cuidado que vai muito além do esmalte.",
  },
  {
    name: "Larissa A.",
    role: "Cliente desde 2022",
    text: "Profissionalismo absurdo. A higiene, a técnica, a atenção aos detalhes — tudo impecável. Não troco por ninguém.",
  },
];

export const HOURS = [
  { day: "Segunda a Sexta", time: "09h00 — 19h00" },
  { day: "Sábados", time: "09h00 — 17h00" },
  { day: "Domingos", time: "Fechado" },
];

// Asset URLs (CDN-hosted, persistent with project lifecycle)
export const IMG = {
  heroBotanical:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/hero-botanical-Tv7BK5BjCPp7Rx959DtMY8.webp",
  heroPearl:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/hero-pearl-7YJMDeahHL6HB5MQt9Taxx.webp",
  heroCouture:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/hero-couture-cRQR4nj5WD28Z87AtxHMdX.webp",
  servicesPedicure:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/services-pedicure-gxuu7PTFRLRfoQAVB5N5Qw.webp",
  servicesManicure:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/services-manicure-WHVp5da8jp9tiT3NSV8fpa.webp",
  atelierDetail:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/atelier-detail-Z92zS6ywfb54EzXZ6eR7CV.webp",
  galleryPearl:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/gallery-pearl-C56uNrwRFgGpUx5CMB4oXE.webp",
  galleryCouture:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/gallery-couture-7cp2rZqraoaxCkihTACgXD.webp",
  aboutPortrait:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/about-portrait-3TmkVKCcL9LkfR398aiF3m.webp",
  gallery1:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/gallery-1-aaJersXmCS5v59fK8ba25M.webp",
  gallery2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/gallery-2-BTWiAnydJqAZJ3wYAknwa8.webp",
  gallery3:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/gallery-3-7YBVXexLiKrPQguwQokxVZ.webp",
  gallery4:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663031222546/GbLwXc8HoA4Hw5VK7jxTRJ/gallery-4-gqnxooPDFJAbRaGqtyrBdt.webp",
};
