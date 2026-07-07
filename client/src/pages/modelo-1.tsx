/**
 * ============================================================================
 * Vanessa Mafra · Especialista no Alongamento de Unhas em Gel
 * ============================================================================
 * VERSÃO MOBILE-RESPONSIVE
 * Projeto que adapta layout entre desktop e mobile.
 */
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { AlignCenter } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

// =============================================================================
// ✏️ CONFIGURAÇÃO
// =============================================================================
const CONFIG = {
  nome: "Vanessa Mafra",
  titulo: "Especialista no Alongamento de Unhas em Gel",
  slogan: "Sofisticação com Naturalidade",
  descricaoHero: "Espaço especializado de unhas em gel naturalista em Duque de Caxias. Um espaço onde técnica e capricho se encontram.",
  endereco: "Edifício Palácio Manom\nAv. Dr. Manuel Teles, 31 — sala 1203 — Centro — Duque de Caxias/RJ",
  enderecoMaps: "https://www.google.com/maps/search/?api=1&query=Vanessa+Mafra+Especialista+Nails",
  whatsapp: "5521999277505?text=Ol%C3%A1%20Vanessa%20Mafra!%20O%20Espa%C3%A7o%20%C3%A9%20maravilhoso%2C%20como%20fa%C3%A7o%20pra%20marcar%20um%20hor%C3%A1rio%20com%20voc%C3%AA%3F",
  instagram: "@vanessamafra_especialistanails",
  horario: "Segunda - Sexta: 9h às 19h.\nSábado: 9h às 14h.\nSomente com horário marcado!",
  anoFundacao: "2023",
  cores: {
    fundo: "#F7F2EC",
    fundoSecundario: "#796047",
    acento: "#000000",
    acentoClaro: "#d8c7b6",
    texto: "#4e3724",
    salvia: "#A8B59E",
  },
  servicos: [
    {
      numero: "01",
      nome: "Aplicação em Gel",
      descricao:
        "Alongamento e sobreposta em gel com acabamento naturalista — Força e elegância que duram semanas. Perfeitas, do primeiro ao último dia.",
      duracao: "1h45",
      src: "/fotos/UnhasGel.jpeg",
      aspectRatio: "4/3",
    },
    {
      numero: "02",
      nome: "Banho de Gel",
      descricao:
        "O brilho que transforma qualquer esmalte. Cor intensa, acabamento impecável, durabilidade real",
      duracao: "1h30",
      src: "/fotos/BanhoGel.jpeg",
      aspectRatio: "4/3",
    },
    {
      numero: "03",
      nome: "Blindagem",
      descricao:
        "Proteção invisível, unhas inabaláveis. Para quem não abre mão de unhas perfeitas — nem no dia a dia mais intenso.",
      duracao: "1h00",
      src: "/fotos/Blindagem.jpeg",
      aspectRatio: "4/3",
    },
    {
      numero: "04",
      nome: "Mão e Pé Tradicional",
      descricao:
        "O clássico que nunca sai de moda. Cuidado completo, acabamento bonito e aquela sensação gostosa de mãos e pés em dia.",
      duracao: "01h30",
      src: "/fotos/MPTradicional.jpeg",
      aspectRatio: "4/3",
    },
    {
      numero: "05",
      nome: "SPA dos Pés",
      descricao:
        "Uma pausa de luxo para os seus pés. Esfoliação, hidratação profunda e muito relaxamento — porque seus pés merecem esse mimo.",
      duracao: "1h30",
      src: "/fotos/SPA.jpeg",
      aspectRatio: "4/3",
    },
    {
      numero: "06",
      nome: "Plástica dos Pés",
      descricao:
        "Tratamento estético avançado que transforma a aparência dos pés. Combate calosidades, rachaduras e promove uma renovação completa — para pés que parecem renascidos.",
      duracao: "1h30",
      src: "/fotos/Plastica.jpeg",
      aspectRatio: "4/3",
    },
  ],
  depoimentos: [
    {
      nome: "Suely Santos",
      texto:
        "Atendimento impecável, nail muito simpática, profissional, atenciosa. Espaço confortável, música boa, climatizado, com direito a massagem nos pés!",
    },
    {
      nome: "Denise Boschiglia",
      texto:
        "Profissional competente e muito detalhista, coisa que mais amo nela",
    },
    {
      nome: "Safira Canuto",
      texto:
        "Vanessa como sempre muito agradável de uma simpatia ímpar, ótimo atendimento e um serviço de excelência.",
    },
  ],
};

// =============================================================================
// Variantes de animação
// =============================================================================
const vFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeIn" as const },
  },
};

const vStagger: Variants = {
  visible: { transition: { staggerChildren: 0.13 } },
};

// =============================================================================
// Scroll Reveal
// =============================================================================
function ScrollReveal({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={vFadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay, duration: 0.75, ease: "easeIn" }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// Selo circular giratório
// =============================================================================
function RotatingSeal({
  size = 140,
  color = CONFIG.cores.acento,
}: {
  size?: number;
  color?: string;
}) {
  const radius = size / 2 - 16;
  const text = `SOFISTICAÇÃO COM NATURALIDADE · ELEVANDO SUA AUTOESTIMA ·`;
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ width: size, height: size, display: "inline-block" }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <path
            id={`circlePath-${size}`}
            d={`M ${size / 2} ${size / 2} m -${radius} 0 a ${radius} ${radius} 0 1 1 ${radius * 2} 0 a ${radius} ${radius} 0 1 1 -${radius * 2} 0`}
          />
        </defs>
        <text
          fill={color}
          fontSize="8"
          fontFamily="Inter, sans-serif"
          letterSpacing="2.2"
          fontWeight="500"
        >
          <textPath href={`#circlePath-${size}`}>{text}</textPath>
        </text>
        <circle cx={size / 2} cy={size / 2} r={4} fill={color} opacity={0.8} />
      </svg>
    </motion.div>
  );
}

// =============================================================================
// Divisor filete
// =============================================================================
function Filete({ color = CONFIG.cores.acento }: { color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ height: 1, backgroundColor: color, opacity: 0.35 }} />
      <div style={{ height: 1, backgroundColor: color, opacity: 0.15 }} />
    </div>
  );
}

// =============================================================================
// Label de seção
// =============================================================================
function SectionLabel({
  numero,
  label,
  color = CONFIG.cores.acento,
  numeroColor,
  labelColor,
}: {
  numero: string;
  label: string;
  color?: string;
  numeroColor?: string;
  labelColor?: string;
}) {
  const numberColor = numeroColor ?? color;
  const titleColor = labelColor ?? color;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 28,
      }}
    >
      <span
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: 10,
          opacity: 0.9,
          letterSpacing: "0.08em",
          color: numberColor,
        }}
      >
        {numero}
      </span>
      <div style={{
        height: 1,
        width: 40,
        backgroundColor: color,
        opacity: 0.3,
      }} />
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          opacity: 0.8,
          whiteSpace: "pre-line",
          color: titleColor,
        }}
      >
        {label}
      </span>
    </div>
  );
}

// =============================================================================
// Photo Frame
// =============================================================================
function PhotoFrame({
  src = "",
  alt = "",
  arch = false,
  aspectRatio = "4/5",
  gradientFallback,
  label,
  hoverLayer = false,
}: {
  src?: string;
  alt?: string;
  arch?: boolean;
  aspectRatio?: string;
  gradientFallback?: string;
  label?: string;
  hoverLayer?: boolean;
}) {
  const c = CONFIG.cores;
  const [isHovered, setIsHovered] = useState(false);
  const borderRadius = arch ? "50% 50% 0 0 / 42% 42% 0 0" : "6px";

  return (
    <motion.div
      initial={false}
      whileHover={hoverLayer ? { scale: 1.01 } : { scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        aspectRatio,
        borderRadius,
        overflow: "hidden",
        position: "relative",
        background:
          gradientFallback ||
          `linear-gradient(145deg, ${c.fundoSecundario}, ${c.acentoClaro}55)`,
        cursor: src && hoverLayer ? "pointer" : "default",
        boxShadow: hoverLayer && isHovered ? "0 20px 40px rgba(0, 0, 0, 0.12)" : undefined,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt || label || ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: hoverLayer && isHovered ? "contain" : "cover",
            objectPosition: "center",
            display: "block",
            transition: "object-fit 250ms ease, transform 250ms ease",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: c.texto,
              opacity: 0.3,
            }}
          >
            {label || "foto"}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// =============================================================================
// NAVEGAÇÃO — mobile com menu hambúrguer
// =============================================================================
function Nav() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <nav
        style={{
          position: "absolute", 
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "14px 20px" : "20px 64px",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          backgroundColor: `${c.fundo}D0`,
          borderBottom: `1px solid ${c.acento}15`,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 6 : 10 }}>
          <div style={{ width: isMobile ? 40 : 60, height: isMobile ? 40 : 60, flexShrink: 0 }}>
            <img
              src="/fotos/Logo.png"
              alt="Logo_Superior"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: 14,
              fontWeight: 550,
              fontStyle: "italic",
              color: c.texto,
              letterSpacing: "0.03em",
              lineHeight: 1.3, // ← era 4, causava altura excessiva
              opacity: 0.95,
            }}
          >
            Eleve sua autoestima <br /> cuidando-se como merece!
          </span>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: c.texto,
                  textDecoration: "none",
                  opacity: 0.55,
                  transition: "opacity 300ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
              >
                {label}
              </a>
            ))}
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: c.fundo,
                backgroundColor: c.texto,
                padding: "10px 24px",
                borderRadius: 2,
                textDecoration: "none",
                transition: "background-color 350ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = c.acento)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = c.texto)}
            >
              Agendar
            </a>
          </div>
        )}

        {/* Mobile: CTA + hambúrguer */}
        {isMobile && (
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: c.fundo,
                backgroundColor: c.texto,
                padding: "8px 16px",
                borderRadius: 2,
                textDecoration: "none",
              }}
            >
              Agendar
            </a>
            {/* Hambúrguer */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 4,
              }}
              aria-label="Menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 22,
                    height: 1.5,
                    backgroundColor: c.texto,
                    opacity: menuOpen && i === 1 ? 0 : 0.7,
                    transform:
                      menuOpen
                        ? i === 0
                          ? "rotate(45deg) translate(4.5px, 4.5px)"
                          : i === 2
                          ? "rotate(-45deg) translate(4.5px, -4.5px)"
                          : "none"
                        : "none",
                    transition: "all 300ms",
                  }}
                />
              ))}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 76,
            left: 0,
            right: 0,
            zIndex: 99,
            overflow: "hidden",
            backgroundColor: c.fundo,
            borderBottom: `1px solid ${c.acento}20`,
          }}
        >
          <div style={{ padding: "16px 20px 24px" }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: c.texto,
                  textDecoration: "none",
                  opacity: 0.6,
                  padding: "12px 0",
                  borderBottom: `1px solid ${c.acento}15`,
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

// =============================================================================
// HERO
// =============================================================================
function Hero() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  if (isMobile) {
    return (
      <section
        ref={ref}
        style={{
          minHeight: "100svh",
          backgroundColor: c.fundo,
          display: "flex",
          flexDirection: "column",
          paddingTop: 76,
          overflow: "hidden",
        }}
      >
        {/* Imagem no topo no mobile */}
        <div
          style={{
            position: "relative",
            height: "45vw",
            minHeight: 220,
            maxHeight: 320,
            overflow: "visible", // ← era "hidden", clipava o selo
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden", // ← agora só clipa a imagem
              background: `linear-gradient(160deg, ${c.fundoSecundario} 0%, ${c.acentoClaro}70 45%, ${c.salvia}50 100%)`,
            }}
          >
            <img
              src="/fotos/ImgVanessa.png"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Topo Mobile"
            />
          </div>

          {/* Selo fora do overflow hidden */}
          <div style={{ position: "absolute", bottom: -110, right: 16, zIndex: 10 }}>
            <RotatingSeal size={100} color={c.acento} />
          </div>
        </div>

        {/* Texto abaixo */}
        <div
          style={{
            padding: "48px 24px 60px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
          >
            <div style={{ height: 1, width: 28, backgroundColor: c.acento, opacity: 0.4 }} />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: c.acento,
              }}
            >
              Duque de Caxias · RJ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08 }}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(44px, 13vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.0,
              color: c.texto,
              marginBottom: 8,
              letterSpacing: "-0.01em",
            }}
          >
            {CONFIG.nome}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(17px, 5vw, 26px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: c.acento,
              marginBottom: 20,
              lineHeight: 1.3,
            }}
          >
            {CONFIG.slogan}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22 }}
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.8,
              color: c.texto,
              opacity: 0.7,
              marginBottom: 36,
            }}
          >
            {CONFIG.descricaoHero}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: c.fundo,
                backgroundColor: c.texto,
                padding: "16px 24px",
                borderRadius: 2,
                textDecoration: "none",
                textAlign: "center",
                display: "block",
              }}
            >
              Agendar Agora
            </a>
            <a
              href="#servicos"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: c.texto,
                textDecoration: "none",
                opacity: 0.45,
                textAlign: "center",
                paddingBottom: 2,
              }}
            >
              Ver Serviços →
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop hero
  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        backgroundColor: c.fundo,
        display: "grid",
        gridTemplateColumns: "60fr 40fr",
        alignItems: "stretch",
        paddingTop: 80,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 72px 100px 80px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}
        >
          <div style={{ height: 1, width: 32, backgroundColor: c.acento, opacity: 0.4 }} />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: c.acento,
            }}
          >
            Duque de Caxias · RJ
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(52px, 6.5vw, 92px)",
            fontWeight: 400,
            lineHeight: 1.0,
            color: c.texto,
            marginBottom: 10,
            letterSpacing: "-0.01em",
          }}
        >
          {CONFIG.nome}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(18px, 2.2vw, 30px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: c.acento,
            marginBottom: 36,
            lineHeight: 1.3,
          }}
        >
          {CONFIG.slogan}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "DM Sans, Inter, sans-serif",
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.85,
            color: c.texto,
            opacity: 0.7,
            maxWidth: 440,
            marginBottom: 52,
          }}
        >
          {CONFIG.descricaoHero}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", gap: 20, alignItems: "center" }}
        >
          <a
            href={`https://wa.me/${CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: c.fundo,
              backgroundColor: c.texto,
              padding: "15px 38px",
              borderRadius: 2,
              textDecoration: "none",
              transition: "background-color 400ms",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = c.acento)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = c.texto)}
          >
            Agendar Agora
          </a>
          <a
            href="#servicos"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: c.texto,
              textDecoration: "none",
              opacity: 0.45,
              borderBottom: `1px solid ${c.texto}80`,
              paddingBottom: 2,
              transition: "opacity 300ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
          >
            Ver Serviços →
          </a>
        </motion.div>
      </div>

      <motion.div style={{ y: imgY, position: "relative", overflow: "visible" }}> {/* ← visible */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "100%",
          minHeight: "100vh",
          position: "relative",
          borderRadius: "48% 0 0 48% / 32% 0 0 32%",
          overflow: "hidden", // ← clipa só a imagem
          background: `linear-gradient(160deg, ${c.fundoSecundario} 0%, ${c.acentoClaro}70 45%, ${c.salvia}50 100%)`,
        }}
      >
        <img
          src="/fotos/ImgVanessa.png"
          alt="Estúdio"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to right, ${c.fundo}50, transparent 40%)`,
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {/* Selo fora do overflow hidden */}
      <div style={{ position: "absolute", bottom: 100, left: -80, zIndex: 10 }}>
        <RotatingSeal size={160} color={c.acento} />
      </div>
    </motion.div>
    </section>
  );
}

// =============================================================================
// SOBRE
// =============================================================================
function SobreSection() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();

  return (
    <section
      id="sobre"
      style={{
        backgroundColor: c.fundo,
        padding: isMobile ? "72px 24px" : "120px 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <Filete />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 80,
            marginTop: isMobile ? 56 : 88,
            alignItems: "center",
            justifyItems: isMobile ? "center" : "stretch",
          }}
        >
          {/* Foto em arco — também visível no mobile */}
          <ScrollReveal>
            <div style={{ width: "100%", maxWidth: isMobile ? 360 : undefined }}>
              <PhotoFrame
                src="/fotos/OEspaco.png"
                arch
                aspectRatio={isMobile ? "4/5" : "3/4"}
                label="O Espaço"
                gradientFallback={`linear-gradient(145deg, ${c.fundoSecundario}, ${c.salvia}60)`}
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionLabel numero="I" label="Sobre o Espaço" color={c.texto} />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: isMobile ? "clamp(32px, 10vw, 48px)" : "clamp(34px, 3.8vw, 54px)",
                  fontWeight: 400,
                  color: c.texto,
                  lineHeight: 1.15,
                  marginBottom: 28,
                }}
              >
                Naturalidade
                <br />
                <em>que fala por si só</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                style={{
                  fontFamily: "DM Sans, Inter, sans-serif",
                  fontSize: isMobile ? 15 : 16,
                  lineHeight: 1.9,
                  color: c.texto,
                  opacity: 0.68,
                  marginBottom: 22,
                }}
              >
                O espaço Vanessa Mafra nasceu da crença de que beleza
                verdadeira é aquela que parece natural — como se sempre tivesse
                estado ali. Especialista em unhas de gel naturalista, cada
                atendimento é pensado nos mínimos detalhes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                style={{
                  fontFamily: "DM Sans, Inter, sans-serif",
                  fontSize: isMobile ? 15 : 16,
                  lineHeight: 1.9,
                  color: c.texto,
                  opacity: 0.68,
                  marginBottom: 36,
                }}
              >
                Localizado no Centro de Duque de Caxias, o espaço foi desenhado
                para ser um refúgio — um momento só seu, do início ao fim.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: c.salvia,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: c.acento,
                    opacity: 0.65,
                  }}
                >
                  Especialista em Unhas de Gel
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SERVIÇOS
// =============================================================================
function ServicosSection() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();

  const gradients = [
    `linear-gradient(145deg, ${c.fundoSecundario}, ${c.acentoClaro}65)`,
    `linear-gradient(145deg, ${c.salvia}55, ${c.fundoSecundario})`,
    `linear-gradient(145deg, ${c.acentoClaro}45, ${c.salvia}35)`,
    `linear-gradient(145deg, ${c.fundoSecundario}, ${c.salvia}65)`,
    `linear-gradient(145deg, ${c.acentoClaro}55, ${c.fundoSecundario})`,
    `linear-gradient(145deg, ${c.salvia}35, ${c.acentoClaro}55)`,
  ];

  return (
    <section
      id="servicos"
      style={{
        backgroundColor: c.fundoSecundario,
        padding: isMobile ? "72px 24px" : "120px 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <ScrollReveal>
          <SectionLabel numero="II" label="Serviços" color={c.fundo} />
          <Filete />
        </ScrollReveal>

        <motion.div
          variants={vStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 2 : 2,
            marginTop: isMobile ? 40 : 64,
          }}
        >
          {CONFIG.servicos.map((s, index) => (
            <motion.div
              key={s.numero}
              variants={vFadeUp}
              style={{
                padding: isMobile ? "36px 24px" : "52px 48px",
                backgroundColor: c.fundo,
                border: `1px solid ${c.acento}18`,
                cursor: "default",
                transition: "background-color 400ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = c.acentoClaro)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = c.fundo)
              }
            >
              <span
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 16,
                  color: c.texto,
                  opacity: 0.7,
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 14,
                }}
              >
                {s.numero}
              </span>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: isMobile ? 26 : 30,
                  fontWeight: 500,
                  color: c.texto,
                  marginBottom: 14,
                  lineHeight: 1.2,
                }}
              >
                {s.nome}
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, Inter, sans-serif",
                  fontSize: isMobile ? 14 : 15,
                  lineHeight: 1.8,
                  color: c.texto,
                  opacity: 0.62,
                  marginBottom: 24,
                }}
              >
                {s.descricao}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    height: 1,
                    width: 24,
                    backgroundColor: c.texto,
                    opacity: 0.3,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: c.acento,
                    opacity: 0.65,
                  }}
                >
                  {s.duracao}
                </span>
              </div>
              {s.src && (
                <div
                  style={{
                    marginTop: 28,
                    maxHeight: isMobile ? undefined : 480,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="servico-bg"
                    role="img"
                    aria-label={s.nome}
                    style={{
                      aspectRatio: isMobile ? "1/1" : s.aspectRatio ?? "4/3",
                      backgroundImage: `url(${s.src})`,
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: c.fundo,
                opacity: 0.8,
                textDecoration: "negrito",
                borderBottom: `1px solid ${c.texto}60`,
                paddingBottom: 3,
                transition: "opacity 300ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
            >
              Consultar disponibilidade via WhatsApp →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// =============================================================================
// DEPOIMENTOS
// =============================================================================
function DepoimentosSection() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        backgroundColor: c.fundo,
        padding: isMobile ? "72px 24px" : "120px 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <SectionLabel numero="III" label={"Avaliações de clientes\nno Google Mapas"} />
          <Filete />
        </ScrollReveal>

        <motion.div
          variants={vStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 16 : 32,
            marginTop: isMobile ? 40 : 64,
          }}
        >
          {CONFIG.depoimentos.map((d, i) => (
            <motion.div
              key={i}
              variants={vFadeUp}
              style={{
                padding: isMobile ? "28px 24px" : "40px 36px",
                border: `1px solid ${c.acento}20`,
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 42,
                  color: c.acento,
                  opacity: 0.2,
                  lineHeight: 1,
                  marginBottom: 14,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: isMobile ? 17 : 19,
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: c.texto,
                  opacity: 0.8,
                  marginBottom: 24,
                }}
              >
                {d.texto}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ height: 1, width: 24, backgroundColor: c.acento, opacity: 0.3 }} />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: c.texto,
                    opacity: 0.4,
                  }}
                >
                  {d.nome}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// =============================================================================
// CONTATO
// =============================================================================
function ContatoSection() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();

  return (
    <section
      id="contato"
      style={{
        backgroundColor: c.texto,
        padding: isMobile ? "72px 24px" : "120px 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : 80,
            alignItems: "center",
          }}
        >
          <div>
            <ScrollReveal>
              <SectionLabel numero="IV" label="Localização & Contato" color={c.fundo} />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: isMobile ? "clamp(32px, 10vw, 48px)" : "clamp(34px, 3.8vw, 54px)",
                  fontWeight: 400,
                  color: c.fundo,
                  lineHeight: 1.15,
                  marginBottom: isMobile ? 32 : 44,
                }}
              >
                Venha nos{" "}
                <em style={{ color: c.acentoClaro }}>visitar!</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
                {[
                  { label: "Endereço", valor: CONFIG.endereco },
                  { label: "Horário", valor: CONFIG.horario },
                  { label: "Instagram", valor: CONFIG.instagram },
                ].map(({ label, valor }) => (
                  <div key={label}>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: c.acentoClaro,
                        opacity: 0.55,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {label}
                    </span>
                    {label === "Endereço" ? (
                      <a
                        href={CONFIG.enderecoMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "DM Sans, Inter, sans-serif",
                          fontSize: isMobile ? 15 : 16,
                          color: c.fundo,
                          opacity: 0.7,
                          lineHeight: 1.5,
                          display: "inline-block",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {valor}
                      </a>
                    ) : label === "Instagram" ? (
                      <a
                        href={`https://instagram.com/${CONFIG.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "DM Sans, Inter, sans-serif",
                          fontSize: isMobile ? 15 : 16,
                          color: c.fundo,
                          opacity: 0.7,
                          lineHeight: 1.5,
                          display: "inline-block",
                          textDecoration: "none",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {valor}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "DM Sans, Inter, sans-serif",
                          fontSize: isMobile ? 15 : 16,
                          color: c.fundo,
                          opacity: 0.7,
                          lineHeight: 1.5,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {valor}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <a
                href={`https://wa.me/${CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: c.texto,
                  backgroundColor: c.acentoClaro,
                  padding: isMobile ? "16px 24px" : "16px 40px",
                  borderRadius: 2,
                  textDecoration: "none",
                  display: isMobile ? "block" : "inline-block",
                  textAlign: isMobile ? "center" : "left",
                  transition: "background-color 350ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = c.fundo)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = c.acentoClaro)}
              >
                Agende agora pelo WhatsApp
              </a>
            </ScrollReveal>
          </div>

          {/* Selo — centralizado no mobile */}
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <RotatingSeal size={isMobile ? 160 : 220} color={c.acentoClaro} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// FOOTER
// =============================================================================
function Footer() {
  const c = CONFIG.cores;
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        backgroundColor: "black",
        borderTop: `1px solid ${c.fundo}18`,
        padding: isMobile ? "24px 20px" : "28px 80px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
        gap: isMobile ? 20 : 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // ← máscara branca
          borderRadius: 45,                               // ← bordas arredondadas
          padding: isMobile ? "6px 12px" : "8px 16px",  // ← espaço interno
        }}
      >
        <div style={{ width: isMobile ? 40 : 60, height: isMobile ? 40 : 60 }}>
          <img
            src="/fotos/Logo.png"
            alt="Logo Inferior"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <span
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 16,
            fontStyle: "bold",
            color: c.texto,  // ← trocado de c.fundo para ficar legível sobre fundo branco
            lineHeight: 3,
          }}
        >
          {CONFIG.nome}
        </span>
      </div>
        <br />
          © {CONFIG.anoFundacao} · Todos os direitos reservados<br />
          Construção do site por 
          <a href="https://wa.me/5521976822900?text=Ol%C3%A1%20FMarques%20TechSolu%C3%A7%C3%B5es!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa." 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "white", fontWeight: "bold" }}>
            FMarques TechSoluções
          </a>
        </span>
      </div>
    </footer>
  );
}
// =============================================================================
// Página principal
// =============================================================================
export default function Modelo1() {
  const c = CONFIG.cores;
  return (
    <div style={{ backgroundColor: c.fundo, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <SobreSection />
      <ServicosSection />
      <DepoimentosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}
