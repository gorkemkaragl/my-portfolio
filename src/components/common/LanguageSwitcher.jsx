import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "../../../context/LocaleContext";

const LanguageSwitcher = () => {
  const { lang } = useLocale();

  const pathname = usePathname();
  const router = useRouter();
  const switchLocalePath = (targetLocale) => {
    if (!pathname) return `/${targetLocale}`;

    const segments = pathname.split("/");
    if (segments.length > 1) segments[1] = targetLocale;

    return segments.join("/") || `/${targetLocale}`;
  };

  const handleLocaleChange = (value) => {
    if (!["tr", "en"].includes(value)) return;

    router.push(switchLocalePath(value));
  };

  return (
    <div>
      <Select defaultValue={lang} onValueChange={handleLocaleChange}>
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="tr">TR</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
