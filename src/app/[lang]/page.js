import React from "react";
import { i18n } from "../../../i18n";
import { getDictionary } from "../../lib/dictionaries";
import HomePage from "@/components/HomePage";
import { Home } from "lucide-react";


export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function page ({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <HomePage dict={dict} />
    </div>
  )
}
