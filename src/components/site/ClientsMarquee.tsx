const clients = [
  "Volkswagen", "Embraer", "Petrobras", "Natura", "Itaú", "Bradesco",
  "Albert Einstein", "Sírio-Libanês", "Iguatemi", "JHSF", "Ambev", "BRF",
  "Suzano", "Klabin", "Vale", "Gerdau", "Whirlpool", "Bayer",
];

export function ClientsMarquee({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div className={`relative overflow-hidden marquee-mask ${isDark ? "" : ""}`}>
      <div className="flex w-max animate-marquee py-2">
        {[...clients, ...clients].map((c, i) => (
          <div
            key={`${c}-${i}`}
            className={`shrink-0 px-10 lg:px-14 flex items-center ${
              isDark ? "text-white/55" : "text-foreground/45"
            }`}
          >
            <span className="font-serif italic text-2xl lg:text-3xl whitespace-nowrap">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
