"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Code,
  Wifi,
  Shield,
  Database,
  Smartphone,
  Server,
  GitBranch,
  Cloud,
  HardDrive,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      category: "IT Support",
      items: [
        {
          icon: Monitor,
          title: "IT Helpdesk",
          description:
            "Support teknis harian untuk karyawan, troubleshooting hardware & software",
        },
        {
          icon: Wifi,
          title: "Network Management",
          description:
            "Konfigurasi dan maintenance jaringan, termasuk router, switch, dan firewall",
        },
        {
          icon: Server,
          title: "Server Administration",
          description:
            "Manajemen server Windows/Linux, Active Directory, dan backup system",
        },
        {
          icon: HardDrive,
          title: "Hardware Maintenance",
          description:
            "Perawatan dan perbaikan hardware komputer, printer, dan perangkat IT lainnya",
        },
        {
          icon: Shield,
          title: "IT Security",
          description:
            "Implementasi keamanan sistem, antivirus, dan kebijakan IT security",
        },
        {
          icon: Cloud,
          title: "Cloud Services",
          description:
            "Manajemen cloud services seperti Office 365, Google Workspace",
        },
      ],
    },
    {
      category: "Programming",
      items: [
        {
          icon: Code,
          title: "Web Development",
          description:
            "Pengembangan website company profile, e-commerce, dan web aplikasi",
        },
        {
          icon: Smartphone,
          title: "Mobile Apps",
          description:
            "Pembuatan aplikasi mobile Android dan iOS dengan React Native",
        },
        {
          icon: Database,
          title: "Database Design",
          description:
            "Desain dan optimasi database untuk performa aplikasi yang lebih baik",
        },
        {
          icon: GitBranch,
          title: "API Development",
          description:
            "Pembangunan RESTful API dan integrasi dengan sistem existing",
        },
        {
          icon: Monitor,
          title: "Internal Tools",
          description:
            "Pengembangan aplikasi internal untuk efisiensi operasional perusahaan",
        },
        {
          icon: Cloud,
          title: "System Integration",
          description:
            "Integrasi berbagai sistem dan aplikasi dalam satu platform",
        },
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Layanan</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap IT Support dan Pengembangan Software untuk kebutuhan
            perusahaan Anda
          </p>
        </div>

        {services.map((serviceCategory, idx) => (
          <div key={idx} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              {serviceCategory.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategory.items.map((service, serviceIdx) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={serviceIdx}
                    className="hover:border-primary/20 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
