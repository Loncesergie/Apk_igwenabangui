import Image from "next/image";
import {
  Download,
  Smartphone,
  ShieldAlert,
  CheckCircle2,
  CalendarDays,
  HardDrive,
  UserRound,
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

          {/* Logo IGWENABANGUI */}
          <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-[24px] shadow-lg">
            <Image
              src="/icon.png"
              alt="Logo IGWENABANGUI"
              width={96}
              height={96}
              priority
              className="h-24 w-24 object-cover"
            />
          </div>

          <h1 className="text-3xl font-black text-slate-900">
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

        {/* Présentation et téléchargement */}
        <section className="rounded-[28px] border border-pink-100 bg-white p-6 shadow-xl shadow-pink-100/50">

          <h2 className="text-xl font-bold text-slate-900">
            Testez IGWENABANGUI
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Je suis{" "}
            <strong className="font-semibold text-slate-700">
              Lonce Sergie BETTO
            </strong>
            , éditeur et développeur d&apos;IGWENABANGUI. Je mets cette
            version Android à votre disposition afin de tester
            l&apos;application avant sa publication officielle.
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Après votre test, partagez-moi les bugs rencontrés et vos
            suggestions d&apos;amélioration.
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

          {/* Bouton de téléchargement */}
          <a
            href={app.apk}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#d81b60] px-6 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:bg-[#bd1553] active:scale-[0.98]"
          >
            <Download size={21} />
            Télécharger l&apos;APK
          </a>

          <p className="mt-3 text-center text-xs text-slate-400">
            Android uniquement • {app.size} • Version bêta privée
          </p>

        </section>

        {/* Instructions d'installation */}
        <section className="mt-5 rounded-[28px] bg-white p-6 shadow-sm">

          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
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
              Android peut afficher un avertissement de sécurité car cette
              version bêta n&apos;est pas encore distribuée via Google Play.
            </p>

          </div>

        </section>

        {/* Informations éditeur */}
        <section className="mt-5 rounded-[28px] border border-pink-100 bg-white p-6 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fce7f1] text-[#d81b60]">
              <UserRound size={21} />
            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-wide text-[#d81b60]">
                Éditeur de l&apos;application
              </p>

              <h2 className="mt-1 text-lg font-bold text-slate-900">
                Lonce Sergie BETTO
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Éditeur et développeur d&apos;IGWENABANGUI, une application
                consacrée à Bangui pour faciliter l&apos;accès aux lieux,
                établissements, services, événements et informations utiles
                de la ville.
              </p>

            </div>

          </div>

        </section>

        {/* Remerciement */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
          <CheckCircle2 size={16} />
          Merci de participer au test
        </div>

        {/* Pied de page */}
        <footer className="mt-8 pb-4 text-center text-xs leading-5 text-slate-400">

          <p>
            © 2026 IGWENABANGUI
          </p>

          <p>
            Édité et développé par Lonce Sergie BETTO
          </p>

          <p>
            Bangui à portée de main
          </p>

        </footer>

      </div>
    </main>
  );
}

/* Carte d'information */
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

      <p className="mt-1 text-xs font-bold text-slate-800">
        {value}
      </p>

    </div>
  );
}