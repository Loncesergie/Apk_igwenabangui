import {
  Download,
  Smartphone,
  ShieldAlert,
  CheckCircle2,
  CalendarDays,
  HardDrive,
} from "lucide-react";

const app = {
  version: "1.9.0",
  size: "156 Mo",
  updatedAt: "27/09/26",
  apk: "https://github.com/Loncesergie/Apk_igwenabangui/releases/download/v1.9.0/igwenabangui.apk",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff8fb] px-4 py-8 sm:py-14">
      <div className="mx-auto max-w-lg">

        {/* En-tête */}
        <header className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-[24px] bg-[#d81b60] shadow-lg">
            <span className="text-4xl font-black text-white">I</span>
          </div>

          <h1 className="text-3xl font-black">
            IGWENABANGUI
          </h1>

          <p className="mt-1 text-slate-500">
            Bangui à portée de main
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fce7f1] px-4 py-2 text-sm font-semibold text-[#c2185b]">
            <Smartphone size={16} />
            Version de test Android
          </div>
        </header>

        {/* Carte principale */}
        <section className="rounded-[28px] border border-pink-100 bg-white p-6 shadow-xl">

          <h2 className="text-xl font-bold">
            Testez IGWENABANGUI
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Cette version est destinée aux testeurs. Merci de nous
            signaler les bugs rencontrés.
          </p>

          {/* Informations de l'application */}
          <div className="mt-6 grid grid-cols-3 gap-2">

            <Info
              icon={<Smartphone size={20} />}
              label="Version"
              value={app.version}
            />

            <Info
              icon={<HardDrive size={20} />}
              label="Taille"
              value={app.size}
            />

            <Info
              icon={<CalendarDays size={20} />}
              label="Mise à jour"
              value={app.updatedAt}
            />

          </div>

          {/* Téléchargement */}
          <a
            href={app.apk}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#d81b60] px-6 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:bg-[#bd1553] active:scale-[0.98]"
          >
            <Download size={21} />
            Télécharger l&apos;APK
          </a>

          <p className="mt-3 text-center text-xs text-slate-400">
            Android uniquement • 156 Mo
          </p>

        </section>

        {/* Instructions */}
        <section className="mt-5 rounded-[28px] bg-white p-6 shadow-sm">

          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Smartphone
              size={20}
              className="text-[#d81b60]"
            />
            Comment installer ?
          </h2>

          <div className="mt-5 space-y-4">

            {[
              "Téléchargez l’APK.",
              "Ouvrez le fichier téléchargé.",
              "Autorisez l’installation depuis cette source si Android le demande.",
              "Installez IGWENABANGUI.",
            ].map((step, index) => (

              <div
                key={step}
                className="flex gap-3"
              >

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fce7f1] text-xs font-bold text-[#d81b60]">
                  {index + 1}
                </div>

                <p className="pt-1 text-sm text-slate-600">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Avertissement Android */}
        <section className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">

          <ShieldAlert
            size={22}
            className="mt-0.5 shrink-0 text-amber-600"
          />

          <div>

            <p className="text-sm font-bold text-amber-900">
              Message de sécurité Android
            </p>

            <p className="mt-1 text-xs leading-5 text-amber-800">
              Android peut afficher un avertissement car cette version
              de test n&apos;est pas encore distribuée via Google Play.
            </p>

          </div>

        </section>

        {/* Remerciement */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
          <CheckCircle2 size={16} />
          Merci de participer au test
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-xs text-slate-400">
          © 2026 IGWENABANGUI
        </footer>

      </div>
    </main>
  );
}

/* Composant informations */
function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3 text-center">

      <div className="mb-2 flex justify-center text-[#d81b60]">
        {icon}
      </div>

      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xs font-bold">
        {value}
      </p>

    </div>
  );
}