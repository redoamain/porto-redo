"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="text-sm font-medium px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Saya", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Layanan", href: "#services" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/redoamain.png" alt="Logo" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <span className="font-bold text-xl">R E D O</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {menuItems.map((item) => (
                  <MenuItem key={item.name} href={item.href}>
                    {item.name}
                  </MenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant="default" size="sm">
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium px-4 py-3 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" size="sm" className="w-full mt-2" disabled>
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
