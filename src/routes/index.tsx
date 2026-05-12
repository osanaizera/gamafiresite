import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { BlogSection } from "@/components/site/BlogSection";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gamafire — Soluções contra incêndio há 35 anos" },
      { name: "description", content: "Engenharia, instalação e manutenção de sistemas contra incêndio: detecção e alarme, sistemas hidráulicos, supressão por gases, Firetrace, projetos e inspeção." },
      { property: "og:title", content: "Gamafire — Soluções contra incêndio" },
      { property: "og:description", content: "Há 35 anos protegendo vidas e patrimônios com excelência em engenharia." },
    ],
  }),
  component: HomePage,
});

const services = [
  { n: "01", title: "Detecção e alarme", desc: "Sistemas endereçáveis com detecção precoce de fumaça, calor e chama." },
  { n: "02", title: "Sistemas hidráulicos", desc: "Sprinklers, hidrantes e bombas conforme NBR e NFPA." },
  { n: "03", title: "Supressão por gases", desc: "FM-200, Novec 1230, CO₂ e Inergen para áreas críticas." },
  { n: "04", title: "Firetrace", desc: "Supressão automática para máquinas, painéis e dutos." },
  { n: "05", title: "Projetos", desc: "Projetos legais e executivos aprovados pelo Corpo de Bombeiros." },
  { n: "06", title: "Inspeção e manutenção", desc: "Programas preventivos e corretivos com atendimento 24/7." },
];

const stats = [
  { value: "35", suffix: "anos", label: "no mercado" },
  { value: "2.5k", suffix: "+", label: "projetos entregues" },
  { value: "500", suffix: "+", label: "clientes ativos" },
  { value: "24/7", suffix: "", label: "atendimento técnico" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO — editorial, calmo */}
      <section className="relative isolate overflow-hidden bg-surface-darker text-white -mt-20 pt-20 min-h-[100svh] flex flex-col">
        <img
          src={hero}
          alt="Sistema de proteção contra incêndio"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />

        <div className="relative flex-1 flex items-center">
          <div className="container-x w-full py-24 lg:py-32">
            <div className="max-w-4xl">
              <div className="overflow-hidden">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60 animate-rise">
                  <span className="h-px w-10 bg-white/40" />
                  Desde 1990
                </div>
              </div>

              <h1 className="mt-10 text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.95] tracking-tight animate-rise" style={{ animationDelay: "0.15s" }}>
                Vidas <span className="font-serif italic text-white/95">primeiro.</span>
                <br />
                Patrimônio <span className="font-serif italic text-white/95">sempre.</span>
              </h1>

              <p className="mt-12 max-w-xl text-base lg:text-lg font-light text-white/75 leading-relaxed animate-rise" style={{ animationDelay: "0.3s" }}>
                Engenharia em sistemas contra incêndio para indústrias, data centers, hospitais e edificações comerciais — do projeto à manutenção preventiva.
              </p>

              <div className="mt-14 flex flex-wrap items-center gap-6 animate-rise" style={{ animationDelay: "0.45s" }}>
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
                >
                  Solicitar diagnóstico
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link to="/servicos" className="text-sm font-medium text-white/85 link-underline">
                  Conheça os serviços
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="relative">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 lg:pb-14">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/50 max-w-xs">
                Engenharia silenciosa para que o silêncio nunca seja interrompido.
              </div>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/50">
                <span>Role para descobrir</span>
                <span className="h-px w-12 bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — minimalista */}
      <section className="border-y border-border">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="px-2 lg:px-8 py-10 lg:py-14">
                  <div className="flex items-baseline gap-1">
                    <div className="text-5xl lg:text-6xl font-light tracking-tight tabular-nums">{s.value}</div>
                    {s.suffix && <div className="text-xl font-light text-muted-foreground">{s.suffix}</div>}
                  </div>
                  <div className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-x">
          <div className="text-center mb-10">
            <div className="eyebrow">Confiados por</div>
          </div>
        </div>
        <ClientsMarquee />
      </section>

      {/* INTRO STATEMENT */}
      <section className="py-32 lg:py-44">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow">Manifesto</div>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-9">
            <p className="text-3xl lg:text-5xl font-light leading-[1.15] tracking-tight">
              Sistemas contra incêndio não devem ser percebidos. Devem,
              em silêncio, fazer com que <span className="font-serif italic">cada dia comum continue sendo um dia comum.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — table style */}
      <section className="border-t border-border">
        <div className="container-x py-24 lg:py-32">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
              <div>
                <div className="eyebrow">Disciplinas</div>
                <h2 className="mt-5 text-4xl lg:text-5xl font-light leading-[1.05] max-w-xl">
                  Seis disciplinas, <span className="font-serif italic">uma engenharia.</span>
                </h2>
              </div>
              <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-medium link-underline self-start lg:self-end">
                Todos os serviços <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="border-t border-border">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <Link
                  to="/servicos"
                  className="group grid grid-cols-12 gap-4 lg:gap-8 py-7 lg:py-8 border-b border-border items-baseline hover:bg-muted/40 transition-colors px-2 -mx-2"
                >
                  <div className="col-span-2 lg:col-span-1 text-xs tabular-nums text-muted-foreground font-medium">{s.n}</div>
                  <div className="col-span-10 lg:col-span-4 text-2xl lg:text-3xl font-light tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <div className="col-span-12 lg:col-span-6 text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
                  <div className="hidden lg:flex col-span-1 justify-end">
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 lg:py-40 bg-muted">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-background">
              <img src={about} alt="Inspeção técnica" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="eyebrow">A Empresa</div>
              <h2 className="mt-5 text-4xl lg:text-5xl font-light leading-[1.05]">
                Trinta e cinco anos<br />
                de <span className="font-serif italic">precisão.</span>
              </h2>
              <p className="mt-8 text-base lg:text-lg font-light text-muted-foreground leading-relaxed max-w-lg">
                Fundada em 1990, a Gamafire nasceu para levar engenharia de segurança de classe mundial ao mercado brasileiro. Atendemos indústrias, data centers, hospitais, redes hoteleiras e edificações comerciais com o mesmo rigor técnico em cada projeto.
              </p>

              <dl className="mt-12 grid grid-cols-2 gap-8 max-w-lg">
                {[
                  ["Engenheiros", "Certificados NFPA & CREA"],
                  ["Atuação", "Nacional, base em SP"],
                  ["Parcerias", "Fabricantes globais"],
                  ["Conformidade", "NBR & Bombeiros"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                    <dd className="mt-2 text-sm font-medium">{v}</dd>
                  </div>
                ))}
              </dl>

              <Link to="/empresa" className="mt-12 inline-flex items-center gap-2 text-sm font-medium link-underline">
                Conhecer a empresa <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <BlogSection />

      {/* CTA — minimal */}
      <section className="bg-surface-darker text-white">
        <div className="container-x py-28 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">Próximo passo</div>
                <h2 className="mt-6 text-5xl lg:text-7xl font-light leading-[1.02]">
                  Conversemos sobre <span className="font-serif italic text-white/90">o seu projeto.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120} className="lg:col-span-4">
              <div className="space-y-6 lg:text-right">
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
                >
                  Solicitar orçamento
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">ou ligue</div>
                  <a href="tel:+551138681000" className="mt-2 block text-2xl lg:text-3xl font-light tabular-nums hover:text-primary transition-colors">
                    (11) 3868-1000
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
