import { motion } from "framer-motion";
import { useState } from "react";
import { CONFIG } from "@/lib/siteConfig";

export default function PhotoFrame({
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
        boxShadow:
          hoverLayer && isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.12)"
            : undefined,
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
