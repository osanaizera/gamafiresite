import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Gamafire" },
      { name: "description", content: "Detecção e alarme, sistemas hidráulicos, supressão por gases, Firetrace, projetos e manutenção." },
      { property: "og:title", content: "Serviços — Gamafire" },
      { property: "og:description", content: "Soluções completas em engenharia contra incêndio." },
    ],
  }),
  component: ServicosPage,
});

const services = [
  { n: "01", title: "Detecção e alarme", desc: "Sistemas endereçáveis e convencionais com tecnologia de ponta para detecção precoce de fumaça, calor e chama. Integração com automação predial e centrais de monitoramento.", items: ["Centrais endereçáveis", "Detectores ópticos e térmicos", "Acionadores manuais", "Sirenes e avisadores"] },
  { n: "02", title: "Sistemas hidráulicos", desc: "Projeto, fornecimento e instalação de redes de sprinklers, hidrantes, mangotinhos e casas de bomba dimensionadas conforme NBR 17240, NBR 13714 e NFPA 13/14/20.", items: ["Sprinklers automáticos", "Hidrantes e mangotinhos", "Casa de bombas", "Reservatórios"] },
  { n: "03", title: "Supressão por gases", desc: "Soluções de agente limpo para áreas críticas: data centers, salas elétricas, arquivos, museus e laboratórios. Sem resíduos, sem danos.", items: ["FM-200 / HFC-227", "Novec 1230", "CO₂ alta pressão", "Inergen IG-541"] },
  { n: "04", title: "Firetrace", desc: "Sistema autônomo de detecção e supressão para riscos especiais: máquinas CNC, painéis elétricos, dutos de exaustão, veículos e equipamentos.", items: ["Tubo detector pressurizado", "Atuação automática", "Não requer energia elétrica", "Aplicação em micro-ambientes"] },
  { n: "05", title: "Projetos", desc: "Projetos executivos e legais aprovados pelo Corpo de Bombeiros, com memorial de cálculo, ART e acompanhamento técnico durante toda a execução.", items: ["Projeto legal (PSCIP)", "Projeto executivo", "ART e memorial", "Aprovação CB-PMESP"] },
  { n: "06", title: "Inspeção e manutenção", desc: "Programas de manutenção preventiva e corretiva com cronograma, relatórios técnicos e atendimento emergencial 24/7.", items: ["Manutenção preventiva", "Manutenção corretiva", "Testes hidrostáticos", "Atendimento 24/7"] },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Serviços</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] max-w-5xl">
              Engenharia completa<br />
              em <span className="font-serif italic">proteção contra incêndio.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 max-w-xl text-lg font-light text-muted-foreground leading-relaxed">
              Do projeto à manutenção, oferecemos a cadeia completa para proteger seu negócio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        {services.map((s, i) => (
          <Reveal key={s.n}>
            <div className={`border-b border-border ${i % 2 === 1 ? "bg-muted" : ""}`}>
              <div className="container-x py-20 lg:py-28 grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="font-serif italic text-4xl lg:text-5xl text-primary tabular-nums">{s.n}</div>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="text-3xl lg:text-4xl font-light leading-[1.1] tracking-tight">{s.title}</h2>
                  <p className="mt-6 text-base font-light text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border">
                  <div className="eyebrow">Inclui</div>
                  <ul className="mt-5 space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-3 text-sm border-b border-border pb-3">
                        <span className="font-serif italic text-xs text-primary tabular-nums w-6">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-surface-darker text-white">
        <div className="container-x py-28 lg:py-40 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            Precisa de um <span className="font-serif italic">diagnóstico técnico?</span>
          </h2>
          <Link to="/contato" className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
            Solicitar orçamento <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
