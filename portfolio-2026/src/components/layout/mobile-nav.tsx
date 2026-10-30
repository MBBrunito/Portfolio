"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import type { Dictionary } from "@/i18n/get-dictionary";

type MobileNavProps = {
  dictionary: Dictionary;
};

export function MobileNav({ dictionary }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  const navigation = [
    { label: dictionary.navigation.home, href: "#inicio" },
    { label: dictionary.navigation.about, href: "#sobre-mi" },
    { label: dictionary.navigation.experience, href: "#experiencia" },
    { label: dictionary.navigation.projects, href: "#proyectos" },
    { label: dictionary.navigation.contact, href: "#contacto" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label={dictionary.mobileMenu.open}
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>{dictionary.mobileMenu.title}</SheetTitle>
        </SheetHeader>

        <nav
          aria-label={dictionary.mobileMenu.open}
          className="flex flex-col gap-2 px-4 py-6"
        >
          {navigation.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <Link
                  href={item.href}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                />
              }
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
