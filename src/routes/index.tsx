import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroImg from "@/assets/hero-skin.jpg";
import anaPaulaAsset from "@/assets/ana-paula.jpg.asset.json";

import { CtaWhatsapp, FloatingWhatsapp } from "@/components/CtaWhatsapp";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import { initMetaPixel } from "@/lib/pixel";

const DESCRIPTION =
  "Cuide da sua pele com atendimento personalizado na Estética Perin, em Santo André. Fale pelo WhatsApp e consulte horários e condições para limpeza de pele.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Limpeza de Pele em Santo André | Estética Perin" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Limpeza de Pele em Santo André | Estética Perin" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Limpeza de Pele em Santo André | Estética Perin" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Estética Perin",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Industrial, 1680 - Torre 1",
            addressLocality: "Santo André",
            addressRegion: "SP",
            postalCode: "09080-501",
            addressCountry: "BR",
          },
          areaServed: "Santo André - SP",
          telephone: "+5511976855329",
          makesOffer: {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Limpeza de pele" },
          },
        }),
      },
    ],
  }),
});

const problemas = [
  "Pele oleosa",
  "Cravos e impurezas",
  "Poros aparentes",
  "Pele sem viço",
  "Aspecto cansado",
  "Sensação de pele pesada",
];

const beneficios = [
  {
    icone: "🫧",
    titulo: "Remove impurezas",
    texto: "Ajuda a eliminar o excesso de resíduos acumulados na pele.",
  },
  {
    icone: "✨",
    titulo: "Pele mais revitalizada",
    texto: "Ajuda a devolver uma aparência mais viçosa e renovada.",
  },
  {
    icone: "💧",
    titulo: "Sensação de pele limpa",
    texto: "Uma experiência de cuidado que deixa a pele com sensação de frescor.",
  },
  {
    icone: "🌿",
    titulo: "Auxilia no controle da oleosidade",
    texto: "Contribui para uma aparência mais equilibrada da pele.",
  },
  {
    icone: "🔍",
    titulo: "Desobstrução dos poros",
    texto: "Ajuda no cuidado com cravos e impurezas.",
  },
  {
    icone: "💆‍♀️",
    titulo: "Momento de autocuidado",
    texto: "Reserve um momento para cuidar da sua pele e de você.",
  },
];

const tiposLimpeza = [
  {
    icone: "🫧",
    titulo: "Limpeza de Pele com Hidratação e Regeneração",
    texto:
      "Um cuidado que combina limpeza, hidratação e regeneração para proporcionar uma aparência mais viçosa, renovada e saudável.",
  },
  {
    icone: "✨",
    titulo: "Limpeza de Pele com Radiofrequência",
    texto:
      "Um protocolo que associa a limpeza de pele à radiofrequência, proporcionando uma experiência de cuidado e revitalização.",
  },
  {
    icone: "🌿",
    titulo: "Limpeza de Pele com Peeling Coreano",
    texto:
      "Um cuidado que combina limpeza de pele com peeling coreano, ajudando a melhorar a aparência e a textura da pele.",
  },
  {
    icone: "💎",
    titulo: "Limpeza de Pele com Microagulhamento",
    texto:
      "Um protocolo que associa a limpeza de pele ao microagulhamento, com foco no cuidado personalizado e na revitalização da pele.",
  },
  {
    icone: "🫧",
    titulo: "Limpeza de Pele Tradicional",
    texto:
      "Uma opção de cuidado para auxiliar na remoção de impurezas e proporcionar uma sensação de pele limpa e renovada.",
  },
];

const etapas = [
  {
    n: "01",
    titulo: "Avaliação",
    texto: "A profissional Ana Paula entende as necessidades da sua pele.",
  },
  {
    n: "02",
    titulo: "Cuidado",
    texto: "É realizado o procedimento de acordo com as características da sua pele.",
  },
  {
    n: "03",
    titulo: "Resultado",
    texto: "Você sai com aquela sensação de pele limpa, cuidada e renovada.",
  },
];

const faq = [
  {
    q: "Preciso saber qual limpeza de pele é indicada para mim?",
    a: "Não. Durante o atendimento, a profissional poderá avaliar as características e necessidades da sua pele.",
  },
  { q: "Quanto tempo dura o procedimento?", a: siteConfig.duracaoProcedimento },
  {
    q: "A limpeza de pele serve para qualquer tipo de pele?",
    a: "Cada pele possui características e necessidades diferentes. Por isso, o atendimento deve considerar a avaliação individual.",
  },
  { q: "Preciso agendar?", a: "Sim. Os atendimentos são realizados mediante agendamento." },
  {
    q: "Como faço para agendar?",
    a: "É simples. Clique no botão do WhatsApp e fale com a equipe da Estética Perin.",
  },
  {
    q: "Onde fica a Estética Perin?",
    a: "Santo André - SP. O endereço completo pode ser informado pelo WhatsApp após o contato.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
      {children}
    </h2>
  );
}

function Micro({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function LandingPage() {
  useEffect(() => {
    initMetaPixel();
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* 1 — HERO ---------------------------------------------------- */}
      <section className="relative bg-nude-gradient">
        <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-10 px-5 py-5 md:min-h-0 md:grid-cols-2 md:gap-14 md:px-8 md:py-16">
          <div>
            <Reveal>
              <p className="eyebrow text-gold-gradient">{siteConfig.marca}</p>
              <h1 className="mt-2 text-balance text-[2.35rem] font-medium leading-[1.02] sm:text-5xl md:mt-4 md:text-6xl">
                Limpeza de Pele em Santo André
              </h1>
              <p className="mt-2 max-w-lg text-base font-medium leading-snug text-foreground sm:text-lg md:mt-4">
                Atendimento personalizado com Biomédica Esteta
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-3 font-display text-3xl font-medium text-gold-gradient sm:text-4xl md:mt-6">
                A partir de R$ 190
              </p>
              <p className="mt-2 max-w-lg text-sm leading-snug text-muted-foreground md:mt-3 md:leading-relaxed">
                Procedimento indicado conforme as necessidades da sua pele, com atendimento mediante
                agendamento.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-3 md:mt-5">
                <p className="mb-3 text-sm font-medium text-foreground">📍 Santo André - SP</p>
                <CtaWhatsapp origem="hero" pulse>
                  AGENDAR LIMPEZA DE PELE NO WHATSAPP
                </CtaWhatsapp>
                <p className="mt-2 text-center text-xs text-muted-foreground sm:text-left">
                  Consulte horários disponíveis pelo WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="hidden md:block">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={heroImg}
                width={1200}
                height={1504}
                alt="Mulher com pele limpa e iluminada após limpeza de pele na Estética Perin em Santo André"
                className="h-[340px] w-full object-cover object-top sm:h-[440px] md:h-[560px]"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Diferenciais do atendimento" className="border-y border-border bg-card">
        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-px bg-border sm:grid-cols-3">
          {["Atendimento em Santo André", "Procedimento personalizado", "Agendamento pelo WhatsApp"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-2 bg-card px-5 py-4 text-center text-sm font-medium"
              >
                <span className="text-gold" aria-hidden>✓</span>
                {item}
              </li>
            ),
          )}
        </ul>
      </section>

      {/* 2 — PROBLEMA ------------------------------------------------ */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <SectionTitle>
            Você sente que sua pele está precisando de um cuidado especial?
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Com a rotina, poluição, oleosidade e acúmulo de impurezas, a pele pode perder o viço e
            ficar com uma aparência cansada.
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 70}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-nude text-sm text-accent-foreground">
                  ✓
                </span>
                <span className="text-sm font-medium sm:text-base">{p}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 text-center">
          <p className="font-display text-xl text-foreground sm:text-2xl">
            Talvez esteja na hora de dar à sua pele a atenção que ela merece.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaWhatsapp origem="secao-problema" size="md">
              💬 QUERO CUIDAR DA MINHA PELE
            </CtaWhatsapp>
          </div>
        </Reveal>
      </section>

      {/* 3 — BENEFÍCIOS ---------------------------------------------- */}
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionTitle>✨ Mais do que uma limpeza. Um momento para cuidar de você.</SectionTitle>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A limpeza de pele é um procedimento pensado para auxiliar na remoção de impurezas e
              proporcionar uma aparência mais limpa, revitalizada e saudável.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 70}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className="text-2xl" aria-hidden>
                    {b.icone}
                  </span>
                  <h3 className="mt-3 text-xl font-medium">{b.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <CtaWhatsapp origem="secao-beneficios">QUERO AGENDAR MINHA LIMPEZA</CtaWhatsapp>
          </Reveal>
        </div>
      </section>

      {/* 4 — COMO FUNCIONA ------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <SectionTitle>Como funciona o seu atendimento?</SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {etapas.map((e, i) => (
            <Reveal key={e.n} delay={i * 90}>
              <div className="h-full rounded-3xl border border-gold-soft bg-card p-7 shadow-soft">
                <span className="font-display text-4xl text-gold-gradient">{e.n}</span>
                <h3 className="eyebrow mt-4 text-foreground">{e.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Cada pele possui necessidades diferentes. O atendimento é personalizado de acordo com a
            avaliação profissional.
          </p>
        </Reveal>
      </section>

      {/* 5 — ANA PAULA ------------------------------------------------ */}
      <section className="bg-nude-gradient py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:items-center md:gap-14 md:px-8">
          <Reveal>
            <img
              src={anaPaulaAsset.url}
              width={900}
              height={1043}
              loading="lazy"
              alt="Ana Paula, Biomédica Esteta e profissional responsável pelos atendimentos da Estética Perin"
              className="aspect-[900/1043] w-full rounded-[2rem] object-cover object-top shadow-lift"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow text-gold-gradient">A profissional</p>
            <SectionTitle>Conheça Ana Paula</SectionTitle>
            <p className="mt-4 text-muted-foreground">
              Seu atendimento será realizado por Ana Paula, profissional responsável pelos
              atendimentos da Estética Perin em Santo André.
            </p>

            <ul className="mt-6 grid gap-2 text-sm">
              {[
                ["Formação", siteConfig.profissionalInfo.formacao],
                ["Especialização", siteConfig.profissionalInfo.especializacoes],
                ["Foco", siteConfig.profissionalInfo.cursos],
                ["Experiência", siteConfig.profissionalInfo.experiencia],
                ["Atendimento", siteConfig.profissionalInfo.protocolos],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex flex-wrap gap-x-2 rounded-2xl border border-border bg-card px-4 py-3"
                >
                  <span className="font-medium">{label}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-display text-xl">
              Seu cuidado começa com um atendimento personalizado e atenção aos detalhes.
            </p>

            <div className="mt-6">
              <CtaWhatsapp origem="secao-ana-paula" size="md">
                💬 FALAR COM A ANA PAULA
              </CtaWhatsapp>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 — OFERTA --------------------------------------------------- */}
      <section className="bg-nude py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <SectionTitle>🔥 Condição especial para você cuidar da sua pele</SectionTitle>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 rounded-[2rem] border border-gold-soft bg-card p-7 shadow-lift sm:p-10">
              <p className="eyebrow text-muted-foreground">Limpeza de pele</p>

              <p className="mt-4 font-display text-4xl text-gold-gradient sm:text-5xl">
                ✨ A partir de R$ 190
              </p>

              <p className="mt-4 text-sm font-medium">📍 {siteConfig.cidade}</p>

              <div className="mt-7 flex justify-center">
                <CtaWhatsapp origem="secao-oferta" pulse>
                  💬 QUERO GARANTIR MEU HORÁRIO
                </CtaWhatsapp>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">Atendimento mediante agendamento.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7.5 — PROTOCOLOS SECUNDÁRIOS -------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="text-center">
          <SectionTitle>Outros protocolos disponíveis após avaliação</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            Se fizer sentido para as necessidades da sua pele, Ana Paula poderá orientar sobre
            cuidados complementares durante a avaliação.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tiposLimpeza.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-card p-5">
                <h3 className="text-base font-medium leading-snug">
                  <span className="mr-1.5" aria-hidden>{t.icone}</span>
                  {t.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8 — DEPOIMENTOS ---------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <SectionTitle>💖 O que nossas clientes dizem</SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.depoimentos.map((d, i) => (
            <Reveal key={i} delay={i * 80}>
              <blockquote className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                <p className="text-gold-gradient" aria-hidden>
                  ★★★★★
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{d.texto}"</p>
                <footer className="mt-4 text-sm font-medium">— {d.nome}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 9 — FAQ ------------------------------------------------------ */}
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal className="text-center">
            <SectionTitle>Dúvidas frequentes</SectionTitle>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <FaqItem question={item.q} answer={item.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — CTA FINAL ----------------------------------------------- */}
      <section className="bg-nude-gradient py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <Reveal>
            <SectionTitle>✨ Está na hora de cuidar da sua pele.</SectionTitle>
            <p className="mt-4 text-muted-foreground">
              Reserve um momento para você e descubra a condição especial disponível para a sua
              limpeza de pele.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaWhatsapp origem="cta-final" pulse className="py-6 text-lg">
                💬 QUERO AGENDAR PELO WHATSAPP
              </CtaWhatsapp>
            </div>
            <p className="mt-4 text-sm font-medium">📍 {siteConfig.cidade}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Micro>💬 Atendimento pelo WhatsApp</Micro>
              <Micro>🔒 Seus dados serão utilizados apenas para atendimento</Micro>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8 text-center text-xs text-muted-foreground">
        <p className="font-display text-base text-foreground">Estética Perin</p>
        <p className="mt-1">Limpeza de pele • Atendimento com Ana Paula</p>
        <p className="mt-1">📍 Av. Industrial, 1680 - Torre 1 - Torre 1, Santo André - SP, 09080-501</p>
      </footer>

      <div className="h-16" aria-hidden />
      <FloatingWhatsapp />
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium transition-colors hover:bg-secondary/60 sm:text-base"
      >
        {question}
        <span
          aria-hidden
          className={`shrink-0 text-lg transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}
