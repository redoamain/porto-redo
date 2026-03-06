"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  ArrowRight,
  Building2,
  Briefcase,
  Calendar,
  FolderOpen,
} from "lucide-react";
import Image from "next/image";

// Definisikan tipe untuk Project
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  company: string;
  year: string;
  demo: string;
  github?: string; // Properti opsional dengan tanda ?
};

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Sistem Monitoring IT Inventory",
      description:
        "Aplikasi monitoring inventaris IT asset untuk PT. Kaka, termasuk tracking hardware, software, dan maintenance schedule dengan fitur bot notifikasi",
      image: "/project1.jpg",
      category: "internal",
      technologies: ["React", "Node.js", "SQL Server", "Next.js"],
      company: "PT. Citi Plumb",
      year: "2024",
      demo: "https://kiw.citiplumb.id",
      // github tidak perlu disertakan karena opsional
    },
    {
      id: 2,
      title: "Inventory IT Beacukai",
      description:
        "Sistem inventory IT untuk kebutuhan internal kantor beacukai, memudahkan tracking aset, maintenance, dan reporting",
      image: "/project2.jpg",
      category: "internal",
      technologies: ["React", "Node.js", "SQL Server", "Next.js"],
      company: "PT. Citi Plumb",
      year: "2026",
      demo: "https://bc.citiplumb.id",
      // github tidak perlu disertakan karena opsional
    },
  ];

  // Hitung statistik berdasarkan data projects
  const totalProjects = projects.length;
  const internalProjects = projects.filter(
    (p) => p.category === "internal",
  ).length;
  const clientProjects = projects.filter((p) => p.category === "client").length;
  const latestYear =
    projects.length > 0
      ? Math.max(...projects.map((p) => parseInt(p.year)))
      : "-";

  const categories = [
    { value: "all", label: "Semua Proyek" },
    { value: "internal", label: "Internal PT. Citi Plumb" },
    { value: "client", label: "Project Client" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Fungsi untuk menangani image error
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageError = (e: any) => {
    e.target.src =
      "https://placehold.co/800x600/1e293b/ffffff?text=Project+Image";
  };

  return (
    <div className="py-20 bg-linear-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Portfolio <span className="text-primary">Proyek</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proyek internal di PT. Citi Plumb dan project untuk berbagai client
          </p>
        </div>

        {/* Stats Overview - Otomatis sesuai data */}
        {projects.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <FolderOpen className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {totalProjects}
              </div>
              <div className="text-sm text-muted-foreground">Total Proyek</div>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <Building2 className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {internalProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                Proyek Internal
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                PT. Citi Plumb
              </div>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {clientProjects}
              </div>
              <div className="text-sm text-muted-foreground">
                Project Client
              </div>
            </Card>

            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {latestYear}
              </div>
              <div className="text-sm text-muted-foreground">
                Proyek Terbaru
              </div>
            </Card>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              onClick={() => setFilter(cat.value)}
              className={`capitalize px-6 ${
                filter === cat.value ? "shadow-lg shadow-primary/25" : ""
              }`}
            >
              {cat.label}
              {cat.value !== "all" && (
                <span className="ml-2 text-xs bg-background/20 px-2 py-0.5 rounded-full">
                  {cat.value === "internal" ? internalProjects : clientProjects}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-secondary/10">
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                  {/* Image dengan scale pada container */}
                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                      unoptimized={true}
                    />
                  </div>

                  {/* Badge Category */}
                  {project.category === "internal" ? (
                    <Badge className="absolute top-3 right-3 z-20 bg-primary/90 hover:bg-primary">
                      <Building2 className="w-3 h-3 mr-1" />
                      Internal
                    </Badge>
                  ) : (
                    <Badge className="absolute top-3 right-3 z-20 bg-purple-500/90 hover:bg-purple-500">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Client
                    </Badge>
                  )}

                  {/* Year Badge */}
                  <Badge
                    variant="outline"
                    className="absolute top-3 left-3 z-20 bg-background/80 backdrop-blur-sm"
                  >
                    {project.year}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-2">
                  {/* Cek apakah project memiliki properti github */}
                  {"github" in project && project.github ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-primary hover:text-white transition-colors"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 cursor-default"
                      disabled
                    >
                      <Building2 className="mr-2 h-4 w-4" />
                      Internal
                    </Button>
                  )}

                  <Button
                    variant={project.demo ? "default" : "outline"}
                    size="sm"
                    className="flex-1"
                    asChild
                    disabled={!project.demo}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20 bg-secondary/10 rounded-lg">
            <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tidak Ada Proyek</h3>
            <p className="text-muted-foreground mb-4">
              Belum ada proyek dengan kategori{" "}
              {filter === "internal" ? "Internal" : "Client"}
            </p>
            <Button variant="outline" onClick={() => setFilter("all")}>
              Lihat Semua Proyek
            </Button>
          </div>
        )}

        {/* View All Button - Hanya muncul jika tidak di tab "all" dan ada proyek */}
        {filteredProjects.length > 0 && filter !== "all" && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group hover:border-primary hover:text-primary transition-all"
              onClick={() => setFilter("all")}
            >
              Lihat Semua Proyek
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
