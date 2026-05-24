import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  GitBranch,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import CustomCursor from './CustomCursor.jsx'

const focusAreas = [
  {
    icon: ChartNoAxesCombined,
    title: 'Analytics storytelling',
    text: 'Turning raw data into decision-ready dashboards, narratives, and measurable recommendations.',
  },
  {
    icon: Bot,
    title: 'AI agent workflows',
    text: 'Designing assistants that research, summarize, classify, and support repetitive analytics work.',
  },
  {
    icon: Code2,
    title: 'Full-stack delivery',
    text: 'Building useful web interfaces, APIs, and automations that move analysis into real products.',
  },
  {
    icon: Workflow,
    title: 'Process automation',
    text: 'Reducing manual reporting effort with repeatable pipelines, scripts, and documented systems.',
  },
]

const projects = [
  {
    name: 'Revenue Intelligence Cockpit',
    type: 'Data Product',
    summary:
      'A KPI command center for revenue, margin, pipeline, and customer behavior with executive drill-down views.',
    stack: ['Power BI', 'SQL', 'Python', 'Forecasting'],
  },
  {
    name: 'Research Analyst Agent',
    type: 'AI Automation',
    summary:
      'An AI assistant concept that gathers sources, extracts insights, and drafts analyst-ready summaries.',
    stack: ['OpenAI API', 'RAG', 'React', 'Node'],
  },
  {
    name: 'Ops Workflow Tracker',
    type: 'Web App',
    summary:
      'A lightweight React dashboard for tracking recurring operations tasks, blockers, owners, and cycle time.',
    stack: ['React', 'Vite', 'Tailwind', 'Netlify'],
  },
]

const toolbelt = [
  'React',
  'Tailwind CSS',
  'SQL',
  'Python',
  'Power BI',
  'Excel',
  'Automation',
  'Prompt design',
  'APIs',
  'Data modeling',
  'Dashboards',
  'Netlify',
]

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-lg leading-8 text-slate-600">{children}</p> : null}
    </div>
  )
}

function App() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen">
      <section className="relative overflow-hidden px-5 py-6 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between rounded-md border border-white/10 bg-white/8 px-4 py-3 backdrop-blur">
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <span className="grid size-9 place-items-center rounded-md bg-teal-400 text-slate-950">
                <BrainCircuit size={20} aria-hidden="true" />
              </span>
              Agent Lab Portfolio
            </a>
            <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
              <a className="transition hover:text-white" href="#work">
                Work
              </a>
              <a className="transition hover:text-white" href="#systems">
                Systems
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </nav>

          <div
            id="top"
            className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24"
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-md border border-teal-300/30 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-100">
                <Sparkles size={16} aria-hidden="true" />
                Data analyst building AI-assisted systems
              </p>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                A futuristic lab for analytics, automation, and useful web tools.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                I connect data analysis, product thinking, and AI agent workflows
                to solve messy business problems with clear, practical systems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
                >
                  View project systems
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Start a conversation
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-950/55 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <div className="rounded-md border border-teal-300/20 bg-slate-900 p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-teal-200">
                      Mission Control
                    </p>
                    <p className="mt-1 text-lg font-semibold">Portfolio OS</p>
                  </div>
                  <ShieldCheck className="text-teal-300" aria-hidden="true" />
                </div>
                <div className="grid gap-3">
                  {['Discover', 'Analyze', 'Automate', 'Ship'].map((item, index) => (
                    <div
                      className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.04] p-4"
                      key={item}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-md bg-teal-300/15 text-teal-200">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item}</span>
                      </div>
                      <div className="h-2 w-24 rounded-full bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-teal-300"
                          style={{ width: `${52 + index * 12}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Operating model"
            title="Jack of all trades, organized as a system."
          >
            The goal is not to look like four different careers. It is to show one
            adaptable builder who can move from business question to working solution.
          </SectionHeading>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <article
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                  key={area.title}
                >
                  <Icon className="text-teal-700" size={28} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Selected work" title="Project concepts to customize next.">
              These are placeholders with the right portfolio shape. Next we will replace
              them with your real analytics, AI, and automation examples.
            </SectionHeading>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-300 px-4 py-3 font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800"
            >
              <GitBranch size={18} aria-hidden="true" />
              GitHub placeholder
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                className="cursor-preview flex min-h-[22rem] flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10"
                data-cursor-label={project.name}
                key={project.name}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-md bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-800">
                    {project.type}
                  </span>
                  <Layers3 className="text-slate-400" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-slate-950">
                  {project.name}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
              Toolbelt
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Skills presented as a flexible lab, not a random list.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              This section makes the multi-disciplinary theme concrete. It gives
              recruiters and collaborators scanning hooks without forcing one job label.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {toolbelt.map((skill) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 font-medium text-slate-100"
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
                Next signal
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                Let us turn this shell into your real portfolio.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                The next phase is content strategy: your name, role positioning,
                real project inventory, resume links, and which case studies deserve
                full pages later.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                <Mail size={18} aria-hidden="true" />
                your.email@example.com
              </a>
              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800"
              >
                <Rocket size={18} aria-hidden="true" />
                Back to lab
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}

export default App
