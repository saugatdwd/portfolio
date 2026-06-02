"use client";

import { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import EsignatureLogo from "@/public/esignature-logo.jpg"
import LogicabeansLogo from "@/public/logicabeans-logo.svg"
import ABCCorpsLogo from "@/public/abc-corps-logo.jpeg"

interface Experience {
  title: string;
  company: string;
  companyLogo?: StaticImageData | string;
  companyUrl?: string;
  companyLinkedin?: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Mid Level Frontend Developer",
    company: "E-Signature Pvt Ltd",
    companyLogo: EsignatureLogo,
    companyUrl: "https://esignature.com.np",
    companyLinkedin: "https://linkedin.com/company/e-signature-pvt-ltd",
    period: "Jan 2025 — Present",
    location: "Kathmandu, Nepal",
    description: [
      "Lead frontend development team, architecting scalable React applications and mentoring junior developers.",
      "Improved application performance by 40% through code splitting, lazy loading, and bundle optimization.",
      "Established component library and design system used across multiple projects.",
      "Collaborated with UX designers to create intuitive, accessible user interfaces.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Associate Software Engineer",
    company: "Logicabeans",
    companyLogo: LogicabeansLogo,
    companyUrl: "https://logicabeans.com",
    period: "June 2023 — Jan 2025",
    location: "Kathmandu, Nepal",
    description: [
      "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces.",
      "Implemented modern JavaScript frameworks and best practices across client projects.",
      "Built reusable component libraries reducing development time by 30%.",
      "Worked closely with backend team to integrate RESTful APIs and GraphQL endpoints.",
    ],
    technologies: ["React", "TypeScript", "CSS3", "Redux"],
  },
  {
    title: "Internship",
    company: "ABC Corps",
    companyLogo: ABCCorpsLogo,
    period: "Mar 2023 — Jul 2023",
    location: "Kathmandu, Nepal",
    description: [
      "Built interactive user interfaces and maintained existing web applications.",
      "Worked closely with backend team to integrate RESTful APIs.",
      "Participated in code reviews and agile development processes.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
];

const education = {
  school: "College of Applied Business and Technology",
  degree: "BSc in Computer Science and Information Technology",
  location: "Kathmandu, Nepal",
  period: "Aug 2019 — May 2024",
};

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 pb-4">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* ── Education Card ── */}
        <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
          <h2 className="text-[15px] font-semibold tracking-tight flex items-center gap-2">
            <GraduationCap
              className="h-4 w-4 text-primary"
              aria-hidden="true"
            />
            Education
          </h2>

          <div className="mt-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">
                  {education.school}
                </h3>
                <p className="mt-0.5 text-[13px] font-medium text-muted-foreground">
                  {education.degree}
                </p>
                <p className="text-[13px] font-medium text-muted-foreground">
                  {education.location}
                </p>
              </div>
              <span className="text-[12px] text-muted-foreground tabular-nums">
                {education.period}
              </span>
            </div>
          </div>
        </div>

        {/* ── Experience Card ── */}
        <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
          <h2 className="text-[15px] font-semibold tracking-tight flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
            Experience
          </h2>

          <div className="mt-5 space-y-3">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-background/40"
                >
                  {/* Accordion header */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(index)}
                    aria-expanded={isExpanded}
                    aria-controls={`exp-${index}`}
                    className="flex w-full items-start justify-between gap-3 p-3.5 text-left"
                  >
                    {/* Logo + name + title */}
                    <div className="flex items-start gap-3">
                      {exp.companyLogo ? (
                        <Image
                          src={exp.companyLogo}
                          width={40}
                          height={40}
                          alt={`${exp.company} logo`}
                          className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 shrink-0 rounded-full bg-muted flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-[14px] font-semibold tracking-tight">
                            {exp.company}
                          </h3>
                          {exp.companyUrl && (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${exp.company} website`}
                              className="text-muted-foreground transition-colors hover:text-foreground"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                          {exp.companyLinkedin && (
                            <a
                              href={exp.companyLinkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${exp.company} LinkedIn`}
                              className="text-muted-foreground transition-colors hover:text-foreground"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-[13px] text-muted-foreground">
                          {exp.title}
                        </p>
                      </div>
                    </div>

                    {/* Period + location + chevron */}
                    <div className="flex items-start gap-2 shrink-0">
                      <div className="text-right">
                        <p className="text-[12px] text-muted-foreground tabular-nums">
                          {exp.period}
                        </p>
                        <p className="text-[12px] text-muted-foreground">
                          {exp.location}
                        </p>
                      </div>
                      <ChevronDown
                        className={`mt-0.5 h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Expanded body */}
                  {isExpanded && (
                    <div
                      id={`exp-${index}`}
                      className="px-3.5 pb-3.5 border-t border-border"
                    >
                      {exp.technologies.length > 0 && (
                        <div className="pt-3 mb-3">
                          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs font-normal"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      <ul className="space-y-1.5">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-[13px] text-muted-foreground flex gap-2"
                          >
                            <span className="text-primary mt-0.75 shrink-0">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
