/**
 * ============================================================================
 * MODELO 1 — "Quiet Luxury Botânico" (Editorial Naturalista)
 * Vanessa Mafra · Especialista em Unhas
 * ============================================================================
 *
 * Dependências necessárias (já presentes no package.json do projeto):
 * - react
 * - framer-motion
 *
 * Como usar no projeto:
 * 1. Copie este arquivo para client/src/pages/modelo-1.tsx
 * 2. No seu roteador (ex: App.tsx com wouter):
 *    import Modelo1 from "./pages/modelo-1";
 *    <Route path="/modelo-1" component={Modelo1} />
 *
 * Para substituir as fotos placeholder:
 * Procure por "👆 Substitua" nos comentários inline.
 */
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

// =============================================================================
// ✏️ CONFIGURAÇÃO — edite apenas este bloco para personalizar tudo
// =============================================================================
const CONFIG = {
  nome: "Vanessa Mafra",
  titulo: "Especialista em Unhas",
  slogan: "Sofisticação com Naturalidade",
  descricaoHero:
    "Estúdio especializado em unhas de gel naturalistas em Duque de Caxias. Um espaço onde técnica e delicadeza se encontram.",
  endereco: "Av. Dr. Manuel Teles, 31 — sala 1203 — Centro — Duque de Caxias/RJ",
  whatsapp: "5521999277505", // formato internacional sem +
  instagram: "@vanessamafra_especialistanails",
  horario: "Segunda a Sábado, 9h às 19h",
  anoFundacao: "2024",
  cores: {
    fundo: "#F7F2EC",         // off-white cremoso
    fundoSecundario: "#EFE6DC", // areia clara
    acento: "#9B7B5B",        // taupe quente / mocha
    acentoClaro: "#C9A98A",   // champanhe rosado
    texto: "#3A2E25",         // chocolate suave
    salvia: "#A8B59E",        // verde-sálvia sutil
  },
  servicos: [
    {
      numero: "01",
      nome: "Manicure SPA",
      descricao:
        "Ritual completo de cuidado para as mãos, com esfoliação, hidratação profunda e esmaltação de longa duração.",
      duracao: "1h30",
    },
    {
      numero: "02",
      nome: "Pedicure SPA",
      descricao:
        "Tratamento terapêutico para os pés, aliando técnica e conforto em cada etapa do processo.",
      duracao: "1h30",
    },
    {
      numero: "03",
      nome: "Unhas de Gel",
      descricao:
        "Alongamento e sobreposta em gel com acabamento naturalista — durabilidade sem abrir mão da elegância discreta.",
      duracao: "2h30",
    },
    {
      numero: "04",
      nome: "Plástica dos Pés",
      descricao:
        "Tratamento estético avançado que transforma a aparência dos pés com resultado imediato e duradouro.",
      duracao: "2h",
    },
  ],
  depoimentos: [
    {
      nome: "Ana Carolina",
      texto:
        "A Vanessa tem uma habilidade incrível de entender o que você quer sem precisar explicar muito. Saí com as mãos perfeitas.",
    },
    {
      nome: "Juliana R.",
      texto:
        "O estúdio é um refúgio. A atenção aos detalhes, o cuidado com cada etapa — é uma experiência completa, não apenas um serviço.",
    },
    {
      nome: "Mariana L.",
      texto:
        "Fiz as unhas de gel pela primeira vez aqui. O resultado é tão natural que as pessoas perguntam se são minhas próprias unhas.",
    },
  ],
  // Fotos da galeria — substitua as strings por caminhos reais: "/fotos/trabalho-01.jpg"
  galeria: [
    { label: "Gel Naturalista", src: "/fotos/trabalho-01.jpg" },
    { label: "Manicure SPA", src: "/fotos/trabalho-02.jpg" },
    { label: "Pedicure SPA", src: "/fotos/trabalho-03.jpg" },
    { label: "Plástica dos Pés", src: "/fotos/trabalho-04.jpg" },
    { label: "Gel Curto", src: "/fotos/trabalho-05.jpg" },
    { label: "French Naturalista", src: "/fotos/trabalho-06.jpg" },
  ],
};

// =============================================================================
// Variantes de animação (framer-motion)
// ✅ FIX: tipadas explicitamente como Variants para evitar erros de tipo
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
// Componente utilitário: scroll reveal
// ✅ FIX: removido "as any" do transition
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
// Componente: Selo circular giratório
// =============================================================================
function RotatingSeal({
  size = 140,
  color = CONFIG.cores.acento,
}: {
  size?: number;
  color?: string;
}) {
  const radius = size / 2 - 14;
  const text = `SOFISTICAÇÃO COM NATURALIDADE · ESTÚDIO DE UNHAS · ${CONFIG.anoFundacao} · `;
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
// Componente: Divisor de filete duplo
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
// Componente: Label de seção com numeração romana
// =============================================================================
function SectionLabel({
  numero,
  label,
  color = CONFIG.cores.acento,
}: {
  numero: string;
  label: string;
  color?: string;
}) {
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
          fontSize: 13,
          color,
          opacity: 0.5,
          letterSpacing: "0.08em",
        }}
      >
        {numero}
      </span>
      <div
        style={{
          height: 1,
          width: 40,
          backgroundColor: color,
          opacity: 0.3,
        }}
      />
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color,
          opacity: 0.65,
        }}
      >
        {label}
      </span>
    </div>
  );
}

// =============================================================================
// Componente: Frame de foto (placeholder ou imagem real)
// ✅ FIX: ease tipado com array de números (bezier curve válido)
// =============================================================================
function PhotoFrame({
  src = "",
  alt = "",
  arch = false,
  aspectRatio = "4/5",
  gradientFallback,
  label,
}: {
  src?: string;
  alt?: string;
  arch?: boolean;
  aspectRatio?: string;
  gradientFallback?: string;
  label?: string;
}) {
  const c = CONFIG.cores;
  const borderRadius = arch ? "50% 50% 0 0 / 42% 42% 0 0" : "6px";
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        aspectRatio,
        borderRadius,
        overflow: "hidden",
        position: "relative",
        background:
          gradientFallback ||
          `linear-gradient(145deg, ${c.fundoSecundario}, ${c.acentoClaro}55)`,
        cursor: "default",
      }}
    >
      {src ? (
        /* 👆 Substitua: com imagem real */
        <img
          src={src}
          alt={alt || label || ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        /* Placeholder — remova quando tiver a foto */
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
// SEÇÃO: Navegação
// =============================================================================
function Nav() {
  const c = CONFIG.cores;
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 64px",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        backgroundColor: `${c.fundo}D0`,
        borderBottom: `1px solid ${c.acento}15`,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: 14,
          fontStyle: "italic",
          fontWeight: 400,
          color: c.texto,
          letterSpacing: "0.05em",
          userSelect: "none",
          width: '60px', height: '60px',
        }}
      >
        <img src="src/fotos/LogoPrinc.png" alt="Logo" />
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
        {[
          { label: "Serviços", href: "#servicos" },
          { label: "Sobre", href: "#sobre" },
          { label: "Galeria", href: "#galeria" },
          { label: "Contato", href: "#contato" },
        ].map(({ label, href }) => (
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
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
          >
            {label}
          </a>
        ))}

        {/* CTA */}
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
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = c.acento)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = c.texto)
          }
        >
          Agendar
        </a>
      </div>
    </nav>
  );
}

// =============================================================================
// SEÇÃO: Hero
// =============================================================================
function Hero() {
  const c = CONFIG.cores;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax suave de 8% na imagem
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

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
      {/* ── Coluna esquerda: texto ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 72px 100px 80px",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}
        >
          <div
            style={{ height: 1, width: 32, backgroundColor: c.acento, opacity: 0.4 }}
          />
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

        {/* Título */}
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

        {/* Slogan em itálico */}
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

        {/* Descrição */}
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

        {/* CTAs */}
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = c.acento)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = c.texto)
            }
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

      {/* ── Coluna direita: imagem com parallax ── */}
      <motion.div
        style={{ y: imgY, position: "relative", overflow: "hidden" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: "100%", minHeight: "100vh", position: "relative" }}
          >
                    
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(160deg, ${c.fundoSecundario} 0%, ${c.acentoClaro}70 45%, ${c.salvia}50 100%)`,
              borderRadius: "48% 0 0 48% / 32% 0 0 32%",
            }}
          />
          {/* Placeholder text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="src/fotos/imagem_01.jpg" />

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: c.texto,
                opacity: 0.25,
              }}
            >
              // Foto principal aqui //
            </span>
          </div>

          {/* Selo giratório flutuando */}
          <div
            style={{
              position: "absolute",
              bottom: 100,
              left: -50,
            }}
          >
            <RotatingSeal size={138} color={c.acento} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// =============================================================================
// SEÇÃO: Sobre
// =============================================================================
function SobreSection() {
  const c = CONFIG.cores;
  return (
    <section
      id="sobre"
      style={{ backgroundColor: c.fundo, padding: "120px 80px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <Filete />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginTop: 88,
            alignItems: "center",
          }}
        >
          {/* Foto em arco */}
          <ScrollReveal>
            <PhotoFrame
              arch
              aspectRatio="3/4"
              label="O Estúdio"
              gradientFallback={`linear-gradient(145deg, ${c.fundoSecundario}, ${c.salvia}60)`}
            />
          </ScrollReveal>

          {/* Texto */}
          <div>
            <ScrollReveal>
              <SectionLabel numero="I" label="Sobre o Estúdio" />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(34px, 3.8vw, 54px)",
                  fontWeight: 400,
                  color: c.texto,
                  lineHeight: 1.15,
                  marginBottom: 32,
                  textAlign: "center",  
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
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: c.texto,
                  opacity: 0.68,
                  marginBottom: 22,
                }}
              >
                O espaço de Vanessa Mafra nasceu da crença de que beleza
                verdadeira é aquela que parece natural — como se sempre tivesse
                estado ali. Especialista em unhas de gel naturalistas, cada
                atendimento é pensado nos mínimos detalhes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p
                style={{
                  fontFamily: "DM Sans, Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: c.texto,
                  opacity: 0.68,
                  marginBottom: 40,
                }}
              >
                Localizado no Centro de Duque de Caxias, o espaço foi desenhado
                para ser um refúgio — um momento só seu, do início ao fim.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginTop: 16,
                }}
              >
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
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: c.acento,
                    opacity: 0.65,
                    textAlign: "center",
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
// SEÇÃO: Serviços
// ✅ FIX: removido whileHover com "as any", hover agora via CSS transition
// =============================================================================
function ServicosSection() {
  const c = CONFIG.cores;
  return (
    <section
      id="servicos"
      style={{ backgroundColor: c.fundoSecundario, padding: "120px 80px" }}
    >
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        <ScrollReveal>
          <SectionLabel numero="II" label="Serviços" />
          <Filete />
        </ScrollReveal>

        <motion.div
          variants={vStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            marginTop: 64,
          }}
        >
          {CONFIG.servicos.map((s) => (
            <motion.div
              key={s.numero}
              variants={vFadeUp}
              style={{
                padding: "52px 48px",
                backgroundColor: c.fundo,
                border: `1px solid ${c.acento}18`,
                cursor: "default",
                transition: "background-color 400ms",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = `${c.acentoClaro}18`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = c.fundo)
              }
            >
              <span
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 13,
                  color: c.acento,
                  opacity: 0.45,
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 18,
                }}
              >
                {s.numero}
              </span>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 30,
                  fontWeight: 500,
                  color: c.texto,
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}
              >
                {s.nome}
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, Inter, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: c.texto,
                  opacity: 0.62,
                  marginBottom: 28,
                }}
              >
                {s.descricao}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    height: 1,
                    width: 24,
                    backgroundColor: c.acento,
                    opacity: 0.3,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: c.acento,
                    opacity: 0.55,
                  }}
                >
                  {s.duracao}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: c.texto,
                opacity: 0.45,
                textDecoration: "none",
                borderBottom: `1px solid ${c.texto}60`,
                paddingBottom: 3,
                transition: "opacity 300ms",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
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
// SEÇÃO: Depoimentos
// =============================================================================
function DepoimentosSection() {
  const c = CONFIG.cores;
  return (
    <section style={{ backgroundColor: c.fundo, padding: "120px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <SectionLabel numero="III" label="Depoimentos" />
          <Filete />
        </ScrollReveal>

        <motion.div
          variants={vStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            marginTop: 64,
          }}
        >
          {CONFIG.depoimentos.map((d, i) => (
            <motion.div
              key={i}
              variants={vFadeUp}
              style={{
                padding: "40px 36px",
                border: `1px solid ${c.acento}20`,
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 48,
                  color: c.acento,
                  opacity: 0.2,
                  lineHeight: 1,
                  marginBottom: 18,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: 19,
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  color: c.texto,
                  opacity: 0.8,
                  marginBottom: 28,
                }}
              >
                {d.texto}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    height: 1,
                    width: 24,
                    backgroundColor: c.acento,
                    opacity: 0.3,
                  }}
                />
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
// SEÇÃO: Galeria
// =============================================================================
function GaleriaSection() {
  const c = CONFIG.cores;
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
      id="galeria"
      style={{ backgroundColor: c.fundoSecundario, padding: "120px 80px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <SectionLabel numero="IV" label="Galeria" />
          <Filete />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginTop: 64,
          }}
        >
          {CONFIG.galeria.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <PhotoFrame
                src={item.src}
                label={item.label}
                arch={i === 0 || i === 4}
                aspectRatio={i % 3 === 1 ? "3/4" : "1/1"}
                gradientFallback={gradients[i]}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a
              href={`https://instagram.com/${CONFIG.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: c.texto,
                opacity: 0.4,
                textDecoration: "none",
                transition: "opacity 300ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
            >
              Ver mais no Instagram {CONFIG.instagram} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// =============================================================================
// SEÇÃO: Contato
// =============================================================================
function ContatoSection() {
  const c = CONFIG.cores;
  return (
    <section
      id="contato"
      style={{
        backgroundColor: c.texto,
        padding: "120px 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Coluna de texto */}
          <div>
            <ScrollReveal>
              <SectionLabel
                numero="V"
                label="Localização & Contato"
                color={c.acentoClaro}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(34px, 3.8vw, 54px)",
                  fontWeight: 400,
                  color: c.fundo,
                  lineHeight: 1.15,
                  marginBottom: 44,
                }}
              >
                Venha nos 
                <em style={{ color: c.acentoClaro }}> visitar!</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                  marginBottom: 52,
                }}
              >
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
                        marginBottom: 7,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "DM Sans, Inter, sans-serif",
                        fontSize: 16,
                        color: c.fundo,
                        opacity: 0.7,
                        lineHeight: 1.5,
                      }}
                    >
                      {valor}
                    </span>
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
                  padding: "16px 40px",
                  borderRadius: 2,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 350ms",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = c.fundo)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = c.acentoClaro)
                }
              >
                Agendar pelo WhatsApp
              </a>
            </ScrollReveal>
          </div>

          {/* Coluna do selo */}
          <ScrollReveal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RotatingSeal size={220} color={c.acentoClaro} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SEÇÃO: Rodapé
// =============================================================================
function Footer() {
  const c = CONFIG.cores;
  return (
    <footer
      style={{
        backgroundColor: c.texto,
        borderTop: `1px solid ${c.fundo}18`,
        padding: "28px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: 17,
          fontStyle: "italic",
          color: c.fundo,
          opacity: 0.35,
        }}
      >
        <div
        style={{
          width: '60px', height: '60px',
        }}
      >
        <img src="src/fotos/LogoPrinc.png" alt="Logo" />  
      </div>
      {CONFIG.nome}
      </span>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <a
          href={`https://instagram.com/${CONFIG.instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: c.fundo,
            opacity: 0.25,
            textDecoration: "none",
            transition: "opacity 300ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.25")}
        >
          Instagram
        </a>
        <a
          href={`https://wa.me/${CONFIG.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: c.fundo,
            opacity: 0.25,
            textDecoration: "none",
            transition: "opacity 300ms",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.25")}
        >
          WhatsApp
        </a>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 10,
            letterSpacing: "0.1em",
            color: c.fundo,
            opacity: 0.18,
          }}
        >
          © {CONFIG.anoFundacao} · Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}

// =============================================================================
// Componente raiz da página
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
      <GaleriaSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}