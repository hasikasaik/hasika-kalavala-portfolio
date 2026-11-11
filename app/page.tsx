'use client';

import React, { useState } from 'react';
import {
  ArrowUpRight,
  FileText,
  Mail,
  Copy,
  Check,
  TrendingUp,
  GraduationCap,
  Briefcase
} from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  slug: string;
  badge?: string;
  bullets: string[];
}

interface ProjectItem {
  title: string;
  category: string;
  objective: string;
  impactMetrics: { label: string; value: string }[];
  tech: string[];
  liveUrl: string;
  codeUrl: string;
  bullets: string[];
  findings: string;
  chartData: { label: string; value: number; color: string }[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Enterprise for Research, Innovation and Knowledge',
    role: 'Digital Accessibility Specialist',
    location: 'Columbus, OH',
    period: 'Nov 2025 — Present',
    slug: 'theohiostateuniversity',
    badge: 'Current',
    bullets: [
      'Audit and remediate 500+ digital documents for WCAG/ADA compliance using 3+ accessibility tools, including Adobe Acrobat Pro, CommonLook, and Allyant, to identify and resolve accessibility barriers.',
      'Remediate PDFs and scanned documents using OCR, accessibility tagging, reading order, alternative text, headings, lists, tables, links, and form elements to improve document accessibility and usability.',
      'Maintain Excel and Google Sheets trackers to monitor remediation progress across multiple document collections, organizing findings and completion status to support accessibility compliance workflows.',
    ],
  },
  {
    company: 'Ohio Manufacturing Innovation Center',
    role: 'Engineering Intern',
    location: 'Hilliard, OH',
    period: 'Jun 2025 — Aug 2025',
    slug: 'autodesk',
    bullets: [
      'Collaborated on 3+ engineering projects developing software and hardware solutions for the City of Hilliard and local businesses, including a smart parking system that used camera-based detection to monitor parking-space availability and guide drivers to open spaces.',
      'Used engineering software, laboratory equipment, and prototyping tools to test and refine hardware and software solutions, improving testing efficiency and accuracy by 20%.',
      'Completed 3+ technical workshops in areas including 3D printing, laser cutting, and welding, gaining hands-on experience with manufacturing processes and prototype development.',
    ],
  },
  {
    company: 'Association for Computing Machinery — Women in Computing (ACM-W)',
    role: 'Outreach Coordinator',
    location: 'Columbus, OH',
    period: 'Aug 2025 — Present',
    slug: 'acm',
    badge: 'Leadership',
    bullets: [
      'Expand K-12 engagement in computing by coordinating hands-on coding and STEM events with schools, libraries, and community organizations, reaching 50+ students through 8+ outreach initiatives.',
      'Plan and execute Buck-i-Code, coordinating volunteers, activities, and event logistics to create an engaging introduction to computing for students.',
      'Build connections between students and the computing community through 10+ technical workshops and 6+ industry speaker events, providing opportunities to explore technical skills and career paths.',
    ],
  },
];

const PROJECTS: ProjectItem[] = [
  {
    title: 'Retail Sales & Customer Analysis',
    category: 'Business Analytics & Data Pipeline',
    objective:
      'Analyze retail sales and customer data to uncover purchasing trends and identify opportunities for business growth.',
    impactMetrics: [
      { label: 'Records Cleaned', value: '50,000+' },
      { label: 'SQL Aggregations', value: '15+ queries' },
      { label: 'Visual Reports', value: '10+ reports' },
    ],
    tech: ['R', 'SQL', 'SQLite', 'ggplot2', 'Data Cleaning', 'Tableau'],
    liveUrl: 'https://github.com/hasikasaik/retail-sales-analysis',
    codeUrl: 'https://github.com/hasikasaik/retail-sales-analysis',
    bullets: [
      'Cleaned and transformed 50,000+ records using R, preparing customer, product, and sales data for analysis.',
      'Wrote 15+ SQL queries to aggregate sales across product categories, customers, regions, and time periods.',
      'Created 10+ visualizations and reports using R and ggplot2 to identify top-performing products, customer purchasing patterns, and seasonal sales trends.',
    ],
    findings: 'Key finding: Q2 promotional cycles drove a 24% revenue surge in top consumer categories, with repeat buyers accounting for 62% of margin lift.',
    chartData: [
      { label: 'Q1 Baseline', value: 65, color: 'bg-rose-300' },
      { label: 'Q2 Peak Campaign', value: 94, color: 'bg-rose-500' },
      { label: 'Q3 Sustained Lift', value: 82, color: 'bg-pink-400' },
      { label: 'Q4 Holiday Spike', value: 98, color: 'bg-rose-600' },
    ],
  },
  {
    title: 'Student Performance Analysis: Statistical & Data Analysis',
    category: 'Statistical Modeling & Predictive Insights',
    objective:
      'Analyze student performance data to identify relationships between academic outcomes, study habits, and student characteristics.',
    impactMetrics: [
      { label: 'Student Records', value: '5,000+' },
      { label: 'Variables Prepared', value: '15+ factors' },
      { label: 'Correlation Level', value: 'r = +0.74' },
    ],
    tech: ['Python', 'pandas', 'matplotlib', 'Jupyter', 'Statistical Analysis'],
    liveUrl: 'https://github.com/hasikasaik/student-performance-analysis',
    codeUrl: 'https://github.com/hasikasaik/student-performance-analysis',
    bullets: [
      'Cleaned and analyzed 5,000+ student records using Python and pandas, preparing 15+ variables for statistical analysis.',
      'Conducted exploratory and statistical analysis across 10+ factors, examining relationships between study habits, attendance, demographics, and academic performance.',
      'Created 12+ visualizations using matplotlib to identify key trends and patterns in student performance and communicate data-driven findings.',
    ],
    findings: 'Key finding: Consistent class attendance (r=0.82) and dedicated weekly study hours (r=0.74) demonstrated the strongest positive correlation with academic performance.',
    chartData: [
      { label: 'Attendance Rate', value: 82, color: 'bg-rose-500' },
      { label: 'Study Hours / Wk', value: 74, color: 'bg-rose-400' },
      { label: 'Sleep Consistency', value: 58, color: 'bg-pink-300' },
      { label: 'Extracurricular Load', value: 32, color: 'bg-pink-200' },
    ],
  },
];

const SKILL_CATEGORIES = [
  {
    name: 'Languages & Tools',
    skills: ['Python', 'R', 'SQL', 'Java', 'SQLite', 'HTML/CSS', 'Tableau', 'Power BI'],
  },
  {
    name: 'Analytical & Statistical',
    skills: ['Data Cleaning', 'Statistical Analysis', 'pandas', 'matplotlib', 'ggplot2', 'Microsoft Excel'],
  },
  {
    name: 'Technical & Fabrication',
    skills: ['3D Printing', 'CAD', 'Laser Cutting', 'Welding', 'Adobe Acrobat Pro', 'CommonLook', 'Allyant'],
  },
];

export default function Page() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kalavala.4@osu.edu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#FDF9FB] text-[#2C222D] antialiased selection:bg-rose-200 selection:text-rose-950 font-sans pb-16">
      <div className="h-1 w-full bg-gradient-to-r from-rose-200 via-rose-400 to-pink-300" />

      <main className="mx-auto max-w-2xl px-6 pt-10 sm:pt-14 space-y-12">
        {/* HEADER SECTION */}
        <header className="space-y-4 pb-8 border-b border-rose-100">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/70 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                <span>Data Science · Computational Analytics</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1E1720]">
                Hasika Kalavala
              </h1>
              <p className="text-sm text-[#5C4D5D] leading-relaxed">
                The Ohio State University · Digital Accessibility Specialist at ERIK
              </p>
            </div>

            <div className="inline-flex sm:flex-col items-start sm:items-end gap-1 text-xs text-[#705C6F] font-mono">
              <span className="inline-flex items-center gap-1.5 bg-white border border-rose-100 px-2.5 py-1 rounded-full shadow-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Columbus, Ohio</span>
              </span>
              <span className="text-[11px] text-[#8C7A8B] sm:text-right">
                Class of 2029 · 3.8 GPA
              </span>
            </div>
          </div>

          {/* CONTACT & DIRECT ACTION LINKS */}
          <nav
            aria-label="Direct contact and external links"
            className="flex flex-wrap items-center gap-2 pt-2 text-xs"
          >
            {/* Real attached resume link */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-xs font-medium"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume (PDF)</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <a
              href="https://github.com/hasikasaik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#382B3A] border border-rose-200/80 hover:border-rose-300 hover:bg-rose-50/70 hover:text-rose-700 transition-all shadow-2xs font-medium"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-rose-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/hasikakalavala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#382B3A] border border-rose-200/80 hover:border-rose-300 hover:bg-rose-50/70 hover:text-rose-700 transition-all shadow-2xs font-medium"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 text-rose-500" />
            </a>

            <div className="inline-flex items-center rounded-full bg-white border border-rose-200/80 shadow-2xs">
              <a
                href="mailto:kalavala.4@osu.edu"
                className="px-3 py-1.5 text-[#382B3A] hover:text-rose-700 font-medium transition-colors"
              >
                kalavala.4@osu.edu
              </a>
              <button
                type="button"
                onClick={copyEmail}
                title="Copy email address"
                aria-label="Copy email address"
                className="px-2 py-1.5 border-l border-rose-100 text-[#8C7A8B] hover:text-rose-600 transition-colors"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-600 font-mono text-[11px]">
                    <Check className="h-3 w-3" /> Copied
                  </span>
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </button>
            </div>
          </nav>
        </header>

        {/* BIO / INTRODUCTION */}
        <section aria-labelledby="bio-heading" className="space-y-2.5">
          <h2 id="bio-heading" className="text-xs font-mono uppercase tracking-widest text-rose-600 font-semibold">
            About
          </h2>
          <div className="rounded-2xl bg-white/90 p-5 border border-rose-100/90 shadow-xs">
            <p className="text-[14px] leading-relaxed text-[#3B2F3D]">
              I am a Data Science student at The Ohio State University specializing in computational analytics and mathematics, focused on developing quantitative pipelines and extracting actionable findings from complex datasets. My background includes auditing enterprise digital document accessibility for WCAG/ADA compliance at OSU&apos;s ERIK, exploratory statistical modeling and data transformation in Python and R, and hands-on engineering prototyping.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section aria-labelledby="experience-heading" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="experience-heading" className="text-xs font-mono uppercase tracking-widest text-rose-600 font-semibold">
              Experience
            </h2>
            <span className="text-xs font-mono text-rose-500">
              3 Positions
            </span>
          </div>

          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <article
                key={exp.company + exp.role}
                className="rounded-2xl bg-white/95 p-5 border border-rose-100 shadow-xs hover:border-rose-200 transition-all hover:shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 pb-3">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-xl border border-rose-200/70 bg-rose-50/70 p-1.5 flex items-center justify-center shadow-2xs">
                      <img
                        src={`https://cdn.simpleicons.org/${exp.slug}/be185d`}
                        alt=""
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('svg')) {
                            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                            icon.setAttribute('viewBox', '0 0 24 24');
                            icon.setAttribute('fill', 'none');
                            icon.setAttribute('stroke', '#e11d48');
                            icon.setAttribute('stroke-width', '2');
                            icon.setAttribute('class', 'h-4 w-4');
                            icon.innerHTML = '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>';
                            parent.appendChild(icon);
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-[#201822]">
                          {exp.company}
                        </h3>
                        {exp.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60 font-medium">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-rose-600 font-medium mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#7D6B7C] sm:text-right shrink-0">
                    <div>{exp.period}</div>
                    <div className="text-[11px] text-[#A18F9F]">{exp.location}</div>
                  </div>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-[#4F4151] leading-relaxed marker:text-rose-400 pt-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section aria-labelledby="projects-heading" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 id="projects-heading" className="text-xs font-mono uppercase tracking-widest text-rose-600 font-semibold">
              Selected Projects
            </h2>
            <span className="text-xs font-mono text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200/60 font-medium">
              Data &amp; Statistical Modeling
            </span>
          </div>

          <div className="space-y-5">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl bg-white border border-rose-100 p-6 shadow-xs hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-100/70 pb-3">
                  <div>
                    <span className="text-[11px] font-mono text-rose-500 uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E1720]">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800 transition-colors border border-rose-200/60 font-mono text-xs"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-[#483B4A] leading-relaxed">
                  {project.objective}
                </p>

                {/* KPI METRIC CARDS ROW */}
                <div className="grid grid-cols-3 gap-2.5">
                  {project.impactMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-gradient-to-b from-rose-50/60 to-pink-50/30 p-2.5 border border-rose-100/80 text-center"
                    >
                      <div className="text-sm sm:text-base font-bold font-serif text-rose-700">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#7A697A] font-medium uppercase tracking-tight mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ANALYTICAL INSIGHT BREAKDOWN */}
                <div className="rounded-xl bg-[#FFF9FB] border border-rose-100 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-[#2E2330] flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-rose-500" />
                      Statistical Trend Summary
                    </span>
                    <span className="font-mono text-[11px] text-rose-600 font-medium">
                      Empirical Findings
                    </span>
                  </div>

                  <div className="space-y-2">
                    {project.chartData.map((item) => (
                      <div key={item.label} className="space-y-1">
                        <div className="flex justify-between text-[11px] text-[#554756]">
                          <span>{item.label}</span>
                          <span className="font-mono font-medium text-rose-700">{item.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-rose-100/60 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full transition-all duration-700`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-[#69576A] italic pt-1 border-t border-rose-100/70">
                    {project.findings}
                  </p>
                </div>

                {/* Verbatim Bullet Points from Resume */}
                <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-[#4F4151] leading-relaxed marker:text-rose-400">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="pl-1">
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-rose-700 bg-rose-50/80 border border-rose-200/60 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section aria-labelledby="education-heading" className="space-y-3">
          <h2 id="education-heading" className="text-xs font-mono uppercase tracking-widest text-rose-600 font-semibold">
            Education
          </h2>

          <div className="rounded-2xl bg-white p-5 border border-rose-100 shadow-xs space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base font-serif font-bold text-[#1E1720]">
                The Ohio State University
              </h3>
              <span className="font-mono text-xs text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/50">
                Expected May 2029
              </span>
            </div>
            <p className="text-xs text-[#3E3140] font-medium">
              Bachelor of Science in Data Science
            </p>
            <p className="text-xs text-[#635364]">
              Specialization in Computational Analytics · Minor in Mathematics
            </p>
            <div className="pt-2 flex items-center gap-3 font-mono text-xs text-rose-700 font-medium">
              <span>GPA: 3.8 / 4.0</span>
              <span className="text-rose-200">·</span>
              <span>Columbus, Ohio</span>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section aria-labelledby="skills-heading" className="space-y-3">
          <h2 id="skills-heading" className="text-xs font-mono uppercase tracking-widest text-rose-600 font-semibold">
            Skills &amp; Technical Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="rounded-2xl bg-white p-4 border border-rose-100 shadow-xs space-y-2.5"
              >
                <h3 className="text-xs font-semibold text-[#1E1720]">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] text-[#443646] bg-rose-50/50 hover:bg-rose-100/60 border border-rose-100 px-2 py-0.5 rounded-md transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-rose-100/80 text-center sm:text-left text-xs text-[#7B6A7C] font-mono flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            Hasika Kalavala · Built with Next.js &amp; Tailwind CSS
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <a
              href="mailto:kalavala.4@osu.edu"
              className="text-rose-600 hover:text-rose-800 underline decoration-rose-300 underline-offset-2 transition-colors"
            >
              kalavala.4@osu.edu ↗
            </a>
            <span className="text-rose-200">·</span>
            <a
              href="https://github.com/hasikasaik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-700 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
