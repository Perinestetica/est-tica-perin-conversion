import { whatsappUrl } from "@/lib/site-config";
import { trackWhatsappClick } from "@/lib/pixel";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  origem: string;
  className?: string;
  size?: "md" | "lg";
  pulse?: boolean;
};

export function CtaWhatsapp({ children, origem, className, size = "lg", pulse }: Props) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(origem)}
      className={cn(
        "inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-whatsapp text-center font-semibold tracking-wide text-whatsapp-foreground shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.99]",
        size === "lg" ? "px-7 py-5 text-base sm:text-lg" : "px-6 py-4 text-sm sm:text-base",
        pulse && "pulse-cta",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick("botao-flutuante")}
      aria-label="Falar no WhatsApp com a Estética Perin"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-whatsapp py-3 pl-4 pr-5 text-sm font-semibold text-whatsapp-foreground shadow-cta transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <span aria-hidden className="text-xl leading-none">
        💬
      </span>
      Fale conosco
    </a>
  );
}
