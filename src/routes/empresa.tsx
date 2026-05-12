import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import about from "@/assets/about.jpg";
import cta from "@/assets/cta.jpg";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "A Empresa — Gamafire" },
      { name: "description", content: "Conheça a história da Gamafire: 35 anos de engenharia em sistemas contra incêndio." },
      { property: "og:title", content: "A Empresa — Gamafire" },
      { property: "og:description", content: "35 anos protegendo vidas e patrimônios." },
    ],
  }),
  component: EmpresaPage,
});

const timeline = [
  { y: "1990", t: "Fundação", d: "Gamafire é fundada em São Paulo com foco em sistemas hidráulicos." },
  { y: "2002", t: "Expansão técnica", d: "Início das operações em supressão por gases e detecção endereçável." },
  { y: "2010", t: "Parceria Firetrace", d: "Distribuição oficial Firetrace para o mercado industrial brasileiro." },
  { y: "2018", t: "Departamento de projetos", d: "Estruturação do núcleo de engenharia para projetos PSCIP nacionais." },
  { y: "2025", t: "35 anos", d: "Mais de 2.500 projetos entregues e operação 24/7 em todo o país." },
];

function EmpresaPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">A Empresa</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] max-w-5xl">
              Trinta e cinco anos<br />
              de engenharia <span className="font-serif italic">silenciosa.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-lg font-light text-muted-foreground leading-relaxed">
              Desde 1990, somos referência em sistemas contra incêndio para os mais exigentes setores da economia brasileira.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={about} alt="Equipe Gamafire" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:pt-12">
            <Reveal>
              <div className="eyebrow">História</div>
              <h2 className="mt-5 text-3xl lg:text-4xl font-light leading-[1.1]">
                Um propósito simples e poderoso: <span className="font-serif italic">proteger pessoas.</span>
              </h2>
              <div className="mt-10 space-y-5 text-base font-light text-muted-foreground leading-relaxed">
                <p>Em mais de três décadas, transformamos esse propósito em mais de 2.500 projetos entregues em todo o Brasil. Atendemos indústrias de manufatura, data centers, hospitais, redes hoteleiras, shoppings, edifícios corporativos e infraestrutura crítica.</p>
                <p>Cada projeto é único — e cada um recebe o mesmo rigor técnico que construiu nossa reputação.</p>
                <p>Hoje, a Gamafire é parceira de fabricantes globais como Firetrace, Tyco, Notifier e Siemens, oferecendo soluções end-to-end com certificação internacional.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted">
        <div className="container-x py-24 lg:py-32">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-3"><div className="eyebrow">Linha do tempo</div></div>
              <h2 className="lg:col-span-9 text-4xl lg:text-5xl font-light leading-[1.05]">Marcos da nossa <span className="font-serif italic">trajetória.</span></h2>
            </div>
          </Reveal>
          <div className="border-t border-border">
            {timeline.map((t, i) => (
              <Reveal key={t.y} delay={i * 80}>
                <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 border-b border-border items-baseline">
                  <div className="col-span-3 lg:col-span-2 font-serif italic text-3xl lg:text-4xl tabular-nums">{t.y}</div>
                  <div className="col-span-9 lg:col-span-4 text-xl font-light">{t.t}</div>
                  <div className="col-span-12 lg:col-span-6 text-sm text-muted-foreground leading-relaxed">{t.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 lg:py-32">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { t: "Missão", d: "Proteger vidas e patrimônios com soluções de engenharia contra incêndio de excelência." },
              { t: "Visão", d: "Ser a referência em proteção contra incêndio no Brasil, reconhecida pela inovação e qualidade." },
              { t: "Valores", d: "Compromisso com a vida, integridade, excelência técnica e respeito às pessoas." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div>
                  <div className="eyebrow">{v.t}</div>
                  <p className="mt-6 text-2xl font-light leading-snug">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-darker text-white">
        <img src={cta} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative container-x py-28 lg:py-40 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            Vamos conversar sobre <span className="font-serif italic">o seu projeto.</span>
          </h2>
          <Link to="/contato" className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
            Falar com a Gamafire <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
