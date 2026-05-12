import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Gamafire" },
      { name: "description", content: "Fale com a Gamafire. Atendimento técnico 24/7." },
      { property: "og:title", content: "Contato — Gamafire" },
      { property: "og:description", content: "Solicite orçamento ou converse com nossa equipe." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Contato</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.98] max-w-5xl">
              Vamos proteger<br />
              <span className="font-serif italic">o seu projeto.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 space-y-12">
            <Reveal>
              <div>
                <div className="eyebrow">Telefone</div>
                <a href="tel:+551138681000" className="mt-4 block text-3xl font-light tabular-nums hover:text-primary transition-colors">
                  (11) 3868-1000
                </a>
                <div className="text-xs text-muted-foreground mt-2">Atendimento 24/7 para emergências</div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <div className="eyebrow">E-mail</div>
                <a href="mailto:contato@gamafire.com.br" className="mt-4 block text-xl font-light hover:text-primary transition-colors break-all">
                  contato@gamafire.com.br
                </a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <div className="eyebrow">Endereço</div>
                <div className="mt-4 text-base font-light leading-relaxed">
                  São Paulo · SP<br />Brasil
                </div>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div>
                <div className="eyebrow">Horário</div>
                <div className="mt-4 text-base font-light leading-relaxed">
                  Seg–Sex · 8h às 18h<br />
                  <span className="text-primary font-serif italic">Emergências 24/7</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={120}>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-10"
              >
                {sent ? (
                  <div className="py-20 text-center border-t border-b border-border">
                    <div className="inline-grid h-14 w-14 place-items-center rounded-full border border-primary text-primary">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mt-8 font-serif italic text-3xl">Mensagem recebida.</h3>
                    <p className="mt-4 text-muted-foreground max-w-md mx-auto">Nossa equipe técnica entrará em contato em breve. Obrigado pelo interesse na Gamafire.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                      <Field label="Nome completo" name="nome" required />
                      <Field label="Empresa" name="empresa" />
                      <Field label="E-mail" name="email" type="email" required />
                      <Field label="Telefone" name="tel" type="tel" />
                    </div>

                    <div>
                      <Label>Tipo de serviço</Label>
                      <select className="mt-3 w-full bg-transparent border-b border-border py-3 text-base font-light focus:outline-none focus:border-foreground transition-colors">
                        <option>Detecção e alarme</option>
                        <option>Sistemas hidráulicos</option>
                        <option>Supressão por gases</option>
                        <option>Firetrace</option>
                        <option>Projetos</option>
                        <option>Inspeção e manutenção</option>
                        <option>Outro</option>
                      </select>
                    </div>

                    <div>
                      <Label>Mensagem</Label>
                      <textarea
                        rows={4}
                        placeholder="Conte um pouco sobre o seu projeto…"
                        className="mt-3 w-full bg-transparent border-b border-border py-3 text-base font-light focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                      />
                    </div>

                    <div className="pt-6">
                      <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background hover:bg-primary transition-colors duration-500">
                        Enviar mensagem
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </button>
                    </div>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">{children}</label>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-primary"> *</span>}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-border py-3 text-base font-light focus:outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}
