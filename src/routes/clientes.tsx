import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — Gamafire" },
      { name: "description", content: "Conheça as empresas que confiam na Gamafire." },
      { property: "og:title", content: "Clientes — Gamafire" },
      { property: "og:description", content: "Mais de 500 clientes ativos em indústria, data centers, hospitais e comércio." },
    ],
  }),
  component: ClientesPage,
});

const sectors = [
  { name: "Indústria", count: "180+" },
  { name: "Data Centers", count: "45+" },
  { name: "Hospitais", count: "60+" },
  { name: "Hotéis & Resorts", count: "35+" },
  { name: "Shoppings", count: "50+" },
  { name: "Corporativo", count: "130+" },
];

const testimonials = [
  { quote: "A Gamafire entregou nosso projeto de supressão por gases no data center com excelência técnica e dentro do prazo. Equipe altamente preparada.", author: "Diretor de Engenharia", role: "Multinacional de TI" },
  { quote: "Trabalhamos com a Gamafire há mais de 15 anos. Confiabilidade e qualidade técnica são marcas registradas da equipe.", author: "Gerente de Facilities", role: "Indústria Automotiva" },
  { quote: "O programa de manutenção preventiva nos deu total tranquilidade nas auditorias e inspeções do Corpo de Bombeiros.", author: "Coordenador de SSMA", role: "Rede Hospitalar" },
];

function ClientesPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Clientes</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] max-w-5xl">
              Quem confia<br />
              na nossa <span className="font-serif italic">engenharia.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-lg font-serif italic text-muted-foreground leading-relaxed">
              "Somos somente tão bons quanto dizem nossos clientes."
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border py-12">
        <ClientsMarquee />
      </section>

      <section className="border-b border-border">
        <div className="container-x py-24 lg:py-32">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-3"><div className="eyebrow">Setores atendidos</div></div>
              <h2 className="lg:col-span-9 text-4xl lg:text-5xl font-light leading-[1.05]">Atuação em <span className="font-serif italic">múltiplas indústrias.</span></h2>
            </div>
          </Reveal>
          <div className="border-t border-border">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="grid grid-cols-12 gap-4 py-8 border-b border-border items-baseline">
                  <div className="col-span-2 lg:col-span-1 text-xs tabular-nums text-muted-foreground">0{i + 1}</div>
                  <div className="col-span-7 lg:col-span-8 text-2xl lg:text-3xl font-light">{s.name}</div>
                  <div className="col-span-3 text-right font-serif italic text-3xl lg:text-4xl tabular-nums">{s.count}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x py-24 lg:py-32">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-3"><div className="eyebrow">Depoimentos</div></div>
              <h2 className="lg:col-span-9 text-4xl lg:text-5xl font-light leading-[1.05]">O que dizem <span className="font-serif italic">sobre nós.</span></h2>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 120}>
                <figure>
                  <blockquote className="font-serif italic text-2xl lg:text-3xl leading-snug text-foreground">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <div className="text-sm font-medium">{t.author}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-darker text-white">
        <div className="container-x py-28 lg:py-40 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            Faça parte <span className="font-serif italic">dessa lista.</span>
          </h2>
          <Link to="/contato" className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
            Falar com um especialista <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
