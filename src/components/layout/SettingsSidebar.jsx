"use client";

import { Settings } from "lucide-react";
import { ModeToggle } from "@/components/common/ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import LanguageSwitcher from "../common/LanguageSwitcher";

export function SettingsSidebar({ dict }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6 z-50"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-60">
        <SheetHeader>
          <SheetTitle>{dict.settings.title}</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-4 px-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{dict.settings.theme}</span>
            <ModeToggle dict={dict} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {dict.settings.language}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
