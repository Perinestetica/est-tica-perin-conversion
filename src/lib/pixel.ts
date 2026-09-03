import { siteConfig } from "./site-config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Carrega o Meta Pixel somente se houver um ID configurado. */
export function initMetaPixel() {
  const id = siteConfig.metaPixelId;
  if (typeof window === "undefined" || !id || window.fbq) return;

  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    let n: any, t: any, s: any;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  const fbq = window.fbq as ((...args: unknown[]) => void) | undefined;
  fbq?.("init", id);
  fbq?.("track", "PageView");
  fbq?.("track", "ViewContent", { content_name: "Limpeza de Pele" });
}

/** Evento principal de conversão: clique no WhatsApp. */
export function trackWhatsappClick(origem: string) {
  window.fbq?.("track", "Contact", { origem });
  window.fbq?.("track", "Lead", { origem, content_name: "Limpeza de Pele" });
}
