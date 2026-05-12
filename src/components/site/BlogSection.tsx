import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { Reveal } from "./Reveal";

const posts = [
  {
    img: blog1,
    tag: "Data Centers",
    date: "Maio 2026",
    read: "6 min",
    title: "Por que data centers exigem supressão por agente limpo",
    excerpt: "Como sistemas FM-200 e Novec 1230 protegem servidores sem causar danos a equipamentos eletrônicos sensíveis.",
  },
  {
    img: blog2,
    tag: "Manutenção",
    date: "Abril 2026",
    read: "4 min",
    title: "Inspeção de sprinklers: o que a NBR 17240 exige",
    excerpt: "Periodicidade, testes hidrostáticos e os principais pontos de atenção para manter seu sistema em conformidade.",
  },
  {
    img: blog3,
    tag: "Projetos",
    date: "Abril 2026",
    read: "8 min",
    title: "Aprovação de PSCIP no Corpo de Bombeiros, passo a passo",
    excerpt: "Como organizar o projeto técnico legal e evitar os erros mais comuns que atrasam a aprovação.",
  },
];

export function BlogSection() {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="eyebrow">Notas técnicas</div>
              <h2 className="mt-5 text-4xl lg:text-5xl font-light leading-[1.05]">
                Conhecimento que <span className="font-serif italic">protege.</span>
              </h2>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium link-underline self-start lg:self-end">
              Todos os artigos
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={960}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em]">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{p.date}</span>
                    <span className="h-px w-4 bg-border" />
                    <span>{p.read}</span>
                  </div>
                  <h3 className="mt-4 text-xl lg:text-2xl font-light leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium">
                    Ler artigo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
