"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Calendar,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hitung bulan bekerja (dari Agustus 2024 sampai sekarang)
  const startDate = new Date(2024, 7, 17); // 17 Agustus 2024 (bulan ke-7 karena Januari = 0)
  const currentDate = new Date();

  const yearsWorked = currentDate.getFullYear() - startDate.getFullYear();
  const monthsWorked = currentDate.getMonth() - startDate.getMonth();
  const totalMonths = yearsWorked * 12 + monthsWorked;

  const workDuration =
    totalMonths < 12
      ? `${totalMonths} bulan`
      : `${Math.floor(totalMonths / 12)} tahun ${totalMonths % 12} bulan`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 relative">
          <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20 shadow-xl">
            <AvatarImage
              src="https://github.com/redoamain.png"
              alt="Profile"
              className=""
            />
            <AvatarFallback className="bg-primary/10 text-4xl">
              R
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-background rounded-full"></div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Halo, Saya{" "}
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Redo
          </span>
        </h1>

        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <Badge variant="secondary" className="text-sm py-1 px-3">
            <Code2 className="w-3 h-3 mr-1" />
            Programmer di PT. Citi Plumb
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">
            <Briefcase className="w-3 h-3 mr-1" />
            IT Support di PT. Citi Plumb
          </Badge>
          <Badge variant="outline" className="text-sm py-1 px-3">
            <Calendar className="w-3 h-3 mr-1" />
            {workDuration} pengalaman
          </Badge>
        </div>

        <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6">
          Programmer & IT Support di PT. Citi Plumb
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Baru bergabung sebagai IT Support dan Programmer di PT. Citi Plumb
          sejak 17 Agustus 2024. Fokus pada manajemen server Windows & Linux,
          perbaikan jaringan dan hardware, serta pengembangan aplikasi inventory
          internal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="text-lg group"
            onClick={() => scrollToSection("portfolio")}
          >
            Lihat Portfolio
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Hubungi Saya
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors border"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors border"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:email@example.com"
            className="p-3 bg-card rounded-full hover:bg-primary/10 transition-colors border"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        {/* Stats - Realistis sesuai masa kerja */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border hover:border-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">{totalMonths}</div>
            <div className="text-sm text-muted-foreground">
              Bulan Pengalaman
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              di PT. Citi Plumb
            </div>
          </div>
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border hover:border-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Server Dikelola</div>
            <div className="text-xs text-muted-foreground mt-1">
              Windows & Linux
            </div>
          </div>
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border hover:border-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">
              Ticket IT Support
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Jaringan & Hardware
            </div>
          </div>
          <div className="p-4 bg-card/50 backdrop-blur-sm rounded-lg border hover:border-primary/20 transition-colors">
            <div className="text-2xl font-bold text-primary">2</div>
            <div className="text-sm text-muted-foreground">
              Aplikasi Inventory
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Dalam pengembangan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
