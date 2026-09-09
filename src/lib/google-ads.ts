/**
 * ID global da Google Tag (Google Ads) instalada no projeto.
 */
export const GOOGLE_ADS_TAG_ID = "AW-10996614308";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Dispara um evento de conversão do Google Ads.
 * Útil para ligar a uma conversão específica (ex.: clique no WhatsApp)
 * após criar a ação de conversão no Google Ads.
 *
 * @param sendTo Identificador da conversão (ex.: "AW-10996614308/xxxxxxxxxx")
 * @param value Valor da transação (opcional)
 * @param currency Código da moeda (ex.: "BRL")
 */
export function trackGoogleAdsConversion(
  sendTo: string,
  value?: number,
  currency = "BRL",
) {
  if (typeof window === "undefined" || !window.gtag) return;

  const payload: Record<string, unknown> = { send_to: sendTo };
  if (typeof value === "number") {
    payload.value = value;
    payload.currency = currency;
  }

  window.gtag("event", "conversion", payload);
}
