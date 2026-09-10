import { useState } from "react";
import { CONFIG } from "@/lib/siteConfig";

/**
 * Box com o mapa do Google Maps, exibido logo abaixo do endereço como
 * referência/complemento visual. Usa o padrão "click-to-load": em vez de
 * carregar o iframe do Google (pesado) direto no primeiro paint, mostra um
 * placeholder leve e só monta o iframe quando o visitante clica — evita
 * baixar scripts do Google numa seção abaixo da dobra.
 */
interface MapaLocalizacaoProps {
  embedUrl: string;
  titulo?: string;
  aspectRatio?: string;
}

export default function MapaLocalizacao({
  embedUrl,
  titulo = `Localização – ${CONFIG.nome}`,
  aspectRatio = "16/9",
}: MapaLocalizacaoProps) {
  const c = CONFIG.cores;
  const [carregado, setCarregado] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        borderRadius: 6,
        overflow: "hidden",
        border: `1px solid ${c.acentoClaro}33`,
      }}
    >
      {carregado ? (
        <iframe
          src={embedUrl}
          title={titulo}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setCarregado(true)}
          aria-label="Carregar mapa com a localização no Google Maps"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            border: "none",
            cursor: "pointer",
            backgroundColor: `${c.acentoClaro}22`,
            transition: "background-color 250ms",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.backgroundColor = `${c.acentoClaro}3a`)
          }
          onMouseLeave={e =>
            (e.currentTarget.style.backgroundColor = `${c.acentoClaro}22`)
          }
        >
          <span style={{ fontSize: 22 }}>📍</span>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: c.fundo,
              opacity: 0.85,
            }}
          >
            Ver mapa da localização
          </span>
        </button>
      )}
    </div>
  );
}
