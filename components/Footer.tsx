"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  Code,
  Briefcase,
  Calendar,
  Server,
  Network,
  Wifi,
  HardDrive,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    utama: [
      { name: "Beranda", href: "#home" },
      { name: "Tentang", href: "#about" },
      { name: "Keahlian", href: "#skills" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Kontak", href: "#contact" },
    ],
    keahlian: [
      { name: "Server Management", href: "#skills", icon: Server },
      { name: "Jaringan", href: "#skills", icon: Network },
      { name: "Hardware", href: "#skills", icon: HardDrive },
      { name: "Programming", href: "#skills", icon: Code },
    ],
    sosial: [
      {
        icon: Github,
        href: "https://github.com/redoamain",
        label: "GitHub",
        username: "@redoamain",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/redho-arifin-983372196/",
        label: "LinkedIn",
        username: "redho-arifin-983372196",
      },
      {
        icon: Mail,
        href: "mailto:redho.arn@gmail.com",
        label: "Email",
        username: "redho.arn@gmail.com",
      },
    ],
  };

  const contactInfo = [
    { icon: Briefcase, text: "IT Support & Programmer", subtext: "PT. Citi Plumb" },
    { icon: Calendar, text: "Bergabung", subtext: "17 Agustus 2024" },
    { icon: MapPin, text: "Lamongan, Indonesia", subtext: "Siap Remote" },
  
  ];

  return (
    <footer className="relative bg-linear-to-b from-background to-secondary/10 border-t mt-20">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Profile Summary - 4 columns */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-2xl">R E D O</h3>
                <Badge variant="secondary" className="mt-1">
                  IT Support & Programmer
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              IT Support dan Programmer di PT. Citi Plumb dengan spesialisasi
              manajemen server, perbaikan jaringan & hardware, serta
              pengembangan aplikasi inventory. Berpengalaman sejak 17 Agustus
              2024.
            </p>

            {/* Quick Contact */}
            <div className="space-y-2 pt-2">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <Icon className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{item.text}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Menu Utama</h4>
            <ul className="space-y-3">
              {footerLinks.utama.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise - 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-4">Bidang Keahlian</h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.keahlian.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center space-x-2 p-2 bg-secondary/10 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Tech Stack */}
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Tech Stack:</h5>
              <div className="flex flex-wrap gap-2">
                {["Windows Server", "Linux", "React", "Node.js", "MySQL"].map(
                  (tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Social & Newsletter - 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-lg mb-4">Terhubung</h4>

            {/* Social Media */}
            <div className="space-y-3 mb-6">
              {footerLinks.sosial.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{social.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </div>
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Newsletter */}
            {/* <div>
              <h5 className="text-sm font-medium mb-2">Newsletter</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Dapatkan update terbaru tentang teknologi dan tips IT
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  className="text-sm bg-background"
                />
                <Button size="sm" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div> */}
          </div>
        </div>

    

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center">
            <span>© {currentYear} R E D O</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with{" "}
              <Heart className="h-3 w-3 text-red-500 mx-1 fill-red-500" /> in
                Lamongan
            </span>
          </div>

          {/* Badges */}
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="text-xs">
              IT Support
            </Badge>
            <Badge variant="outline" className="text-xs">
              Programmer
            </Badge>
            <Badge variant="outline" className="text-xs bg-primary/5">
              PT. Citi Plumb
            </Badge>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
