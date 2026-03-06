"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  
  SiLinux,
  SiReact,
  SiNodedotjs,
  SiGit} from "react-icons/si";
import {
  Wifi,
  HardDrive,
  Server,
  Network,
  Code,
  Database,
  Globe,
  Shield,
  Users,
  Clock,
  Settings,
  Terminal,
  Cloud,
  DatabaseIcon,
} from "lucide-react";

export default function Skills() {
  const mainSkills = [
    {
      title: "Server Management",
      description:
        "Pengelolaan dan maintenance server Windows & Linux untuk kebutuhan perusahaan",
      icon: Server,
      color: "",
      skills: [
          {
            name: "Linux Server",
            level: 80,
            icon: SiLinux,
            detail: "Ubuntu, CentOS, Shell Scripting",
          },
        {
          name: "Windows Server",
          level: 80,
          icon: Server,
          detail: "Active Directory, DNS, DHCP, Group Policy",
        },
        {
          name: "Virtualization",
          level: 75,
          icon: Cloud,
          detail: "VMware, Hyper-V, VirtualBox",
        },
        {
          name: "Backup & Recovery",
          level: 85,
          icon: Database,
          detail: "Backup strategi, disaster recovery",
        },
      ],
    },
    {
      title: "Jaringan & Hardware",
      description:
        "Perbaikan dan maintenance jaringan komputer serta perangkat keras",
      icon: Network,
      color: "",
      skills: [
        {
          name: "Network Configuration",
          level: 85,
          icon: Globe,
          detail: "TCP/IP, VLAN, Routing, Switching",
        },
        {
          name: "Hardware Troubleshooting",
          level: 90,
          icon: HardDrive,
          detail: "PC, Laptop, Server, Printer",
        },
        {
          name: "Network Security",
          level: 75,
          icon: Shield,
          detail: "Firewall, VPN, Access Control",
        },
        {
          name: "Perangkat Jaringan",
          level: 80,
          icon: Wifi,
          detail: "Router, Switch, Access Point",
        },
      ],
    },
    {
      title: "Programming",
      description: "Pengembangan aplikasi web dan sistem internal perusahaan",
      icon: Code,
      color: "",
      skills: [
        {
          name: "Frontend",
          level: 80,
          icon: SiReact,
          detail: "React, Next.js, JavaScript/TypeScript",
        },
        {
          name: "Backend",
          level: 75,
          icon: SiNodedotjs,
          detail: "Node.js, REST API,Python ",
        },
        {
          name: "Database",
          level: 80,
          icon: DatabaseIcon,
          detail: "SQL Server",
        },
        {
          name: "Version Control",
          level: 85,
          icon: SiGit,
          detail: "Git, GitHub, GitLab",
        },
      ],
    },
  ];

  const toolsAndTechnologies = [
    {
      category: "Server OS",
      items: [
        "Windows Server 2016/2019/2022",
        "Ubuntu Server",
        "CentOS",
        "Debian",
      ],
    },
    {
      category: "Network",
      items: ["MikroTik", "Cisco IOS", "TP-Link", "Ubiquiti"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    },
    { category: "Development", items: ["VS Code", "Git", "Postman", "Docker"] },
    { category: "Monitoring", items: ["Nagios", "Zabbix", "PRTG", "Grafana"] },
    {
      category: "Office",
      items: ["Microsoft 365", "Google Workspace", "Ticketing System"],
    },
  ];

  const experienceStats = [
    { label: "Server Dikelola", value: "2", icon: Server },
    { label: "Perbaikan Jaringan", value: "30an", icon: Wifi },
    { label: "Hardware Ditangani", value: "30an", icon: HardDrive },
    { label: "Aplikasi Dibuat", value: "10an", icon: Code },
  ];

  return (
    <div className="py-20 bg-linear-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keahlian <span className="text-primary">Teknis</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Berpengalaman dalam manajemen server, perbaikan jaringan & hardware,
            serta pengembangan aplikasi untuk kebutuhan perusahaan
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {experienceStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card
                key={idx}
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors"></div>
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainSkills.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header dengan gradient */}
                <div
                  className={`bg-linear-to-r ${category.color} p-6 border-b`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-xl shadow-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <CardContent className="p-6 space-y-6">
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <SkillIcon className="h-4 w-4 text-primary" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress bar dengan animasi */}
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div className="w-full bg-secondary/20 rounded-full h-2.5">
                              <div
                                className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Detail skill */}
                        <p className="text-xs text-muted-foreground">
                          {skill.detail}
                        </p>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">
            Tools & <span className="text-primary">Teknologi</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsAndTechnologies.map((category, idx) => (
              <Card
                key={idx}
                className="hover:border-primary/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-primary">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIdx) => (
                      <Badge
                        key={itemIdx}
                        variant="secondary"
                        className="py-1.5 px-3 text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Expertise */}
        <div className="mt-16">
          <Card className="bg-linear-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Keahlian Pendukung
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Users, label: "IT Support" },
                  { icon: Clock, label: "24/7 Monitoring" },
                  { icon: Settings, label: "Maintenance" },
                  { icon: Terminal, label: "Scripting" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="text-center p-4 bg-background/50 rounded-lg"
                    >
                      <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <p className="font-medium">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
