// app/[lang]/layout.jsx
import { LocaleProvider } from "../../../context/LocaleContext";
import { getDictionary } from "@/lib/dictionaries";
import { i18n } from "../../../i18n";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <LocaleProvider dict={dict} lang={lang}>
      {children}
    </LocaleProvider>
  );
}
