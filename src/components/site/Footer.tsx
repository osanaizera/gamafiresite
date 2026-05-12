import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-surface-darker text-white/70">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-baseline gap-2 text-white">
              <span className="font-serif italic text-3xl">Gama</span>
              <span className="font-sans text-3xl font-light">fire</span>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-primary translate-y-[-3px]" />
            </Link>
            <p className="mt-8 max-w-md font-serif text-2xl text-white/85 leading-snug">
              Trinta e cinco anos de engenharia silenciosa — para que o silêncio nunca seja interrompido.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">Páginas</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/empresa", "Empresa"],
                ["/servicos", "Serviços"],
                ["/clientes", "Clientes"],
                ["/contato", "Contato"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">Serviços</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Detecção e alarme</li>
              <li>Sistemas hidráulicos</li>
              <li>Supressão por gases</li>
              <li>Firetrace</li>
              <li>Manutenção</li>
              <li>Projetos</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">Contato</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="tel:+551138681000" className="hover:text-white transition-colors tabular-nums">(11) 3868-1000</a></li>
              <li><a href="mailto:contato@gamafire.com.br" className="hover:text-white transition-colors">contato@gamafire.com.br</a></li>
              <li className="text-white/50">São Paulo · Brasil</li>
              <li className="text-white/50">Atendimento 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 hairline-dark" />

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Gamafire Soluções contra Incêndio.</p>
          <p className="tabular-nums">CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
