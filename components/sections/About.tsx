"use client";


import { Card, CardContent } from "@/components/ui/card";
import {

  Calendar,
  MapPin,
  Briefcase,
  Monitor,
  Code,
  Award,
  Database,
} from "lucide-react";
import Image from "next/image";
export default function About() {
  return (
    <div className="py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image
                src="/img/redo.webp"
                alt="About Me"
                className="w-full h-full object-cover grayscale"
                fill
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg border">
              <p className="font-bold text-2xl text-primary">Dual Role</p>
              <p className="text-sm text-muted-foreground">
                Programmer & IT Support
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                di PT. Citi Plumb
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              IT Support & Programmer dengan pengalaman dalam mengelola
              infrastruktur IT dan mengembangkan aplikasi internal
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Saat ini saya bekerja di PT. Citi Plumb dengan peran ganda sebagai
              IT Support dan Programmer sejak 17 Agustus 2024. Saya bertanggung
              jawab atas kelancaran infrastruktur IT perusahaan sekaligus
              mengembangkan berbagai aplikasi internal untuk meningkatkan
              efisiensi operasional. Kombinasi peran ini memungkinkan saya untuk
              memahami kebutuhan teknologi dari sisi infrastruktur hingga
              pengembangan software.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>
                  <strong>Pekerjaan Saat Ini:</strong> IT Support & Programmer
                  di PT. Citi Plumb
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span>
                  <strong>Bergabung:</strong> 17 Agustus 2024
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  <strong>Lokasi:</strong> Lamongan, Indonesia
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Code className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">Programmer</div>
                  <div className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Monitor className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-lg font-bold">IT Support</div>
                  <div className="text-sm text-muted-foreground">
                    Infrastructure & Helpdesk
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* <Button size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button> */}
          </div>
        </div>

        {/* Work Experience Detail */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Pengalaman Kerja di PT. Citi Plumb
          </h3>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">
                    IT Support & Programmer
                  </h4>
                  <p className="text-primary font-medium">PT. Citi Plumb</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    17 Agustus 2024 - Sekarang
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Monitor className="h-4 w-4 mr-2 text-primary" />
                        IT Support Responsibilities:
                      </h5>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Menangani troubleshooting hardware dan software
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Maintenance infrastruktur jaringan dan server
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Manajemen Active Directory dan user accounts
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Backup & recovery data perusahaan
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <Code className="h-4 w-4 mr-2 text-primary" />
                        Programmer Responsibilities:
                      </h5>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Mengembangkan aplikasi internal perusahaan
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Membangun API untuk integrasi sistem
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Database design dan optimization
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          Maintenance dan update aplikasi existing
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-6 pt-6 border-t flex flex-col">
                    <h5 className="font-semibold mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      Pencapaian di PT. Citi Plumb:
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/10 p-3 rounded-lg text-center">
                        <Database className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="text-sm font-medium">Membangun 3</div>
                        <div className="text-xs text-muted-foreground">
                          Aplikasi Internal
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
