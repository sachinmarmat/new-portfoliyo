import Container from './components/Container'
import { ButtonLink } from './components/Button'
import Badge from './components/Badge'
import SectionHeader from './components/SectionHeader'
import ContactForm from './components/ContactForm'
import { ABOUT, EDUCATION, PROFILE, PROJECTS, SKILLS } from './content'
import type { ReactNode } from 'react'
import profilePng from './assets/profile.png'

function NavLink(props: { href: string; label: string }) {
  return (
    <a
      className="text-sm text-zinc-300 hover:text-white transition"
      href={props.href}
      aria-label={props.label}
    >
      {props.label}
    </a>
  )
}

function Card(props: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-sm shadow-black/30">
      {props.children}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-48 right-0 h-72 w-[40rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#top" className="font-semibold tracking-tight text-white">
              {PROFILE.name}
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <NavLink href="#about" label="About" />
              <NavLink href="#skills" label="Skills" />
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#education" label="Education" />
              <NavLink href="#contact" label="Contact" />
            </nav>
            <div className="flex items-center gap-2">
              {/* <ButtonLink
                href={PROFILE.resumeUrl}
                download
                variant="secondary"
                className="hidden sm:inline-flex"
              >
                Download CV
              </ButtonLink> */}
              <ButtonLink href="#contact" variant="primary">
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </Container>
      </header>

      <main id="top">
        <section className="pt-12 pb-10 sm:pt-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={profilePng}
                    alt={`${PROFILE.name} avatar`}
                    className="size-14 rounded-full ring-1 ring-white/15 bg-white/5"
                  />
                  <div>
                    <p className="text-sm text-zinc-300">Hi, I’m</p>
                    <p className="text-base font-semibold text-white">{PROFILE.name}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{PROFILE.role}</Badge>
                  <Badge>{PROFILE.location}</Badge>
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Building modern web experiences that look premium and work flawlessly.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-zinc-300">{ABOUT.headline}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <ButtonLink href="#projects" variant="primary">
                    See projects
                  </ButtonLink>
                  <ButtonLink href={PROFILE.linkedin} target="_blank" rel="noreferrer" variant="secondary">
                    LinkedIn
                  </ButtonLink>
                  <ButtonLink href={PROFILE.github} target="_blank" rel="noreferrer" variant="ghost">
                    GitHub
                  </ButtonLink>
                </div>
                <div className="mt-6 text-sm text-zinc-400">
                  <span className="text-zinc-300">Email:</span> {PROFILE.email} ·{' '}
                  <span className="text-zinc-300">Phone:</span> {PROFILE.phone}
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white">Quick profile</p>
                      <span className="text-xs text-zinc-400">Available for work</span>
                    </div>
                    <div className="mt-6 grid gap-3">
                      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                        <p className="text-sm text-zinc-300">Primary stack</p>
                        <p className="mt-1 text-sm font-medium text-white">React · TypeScript · Next.js · Tailwind · Node.js · Express · MongoDB · Git</p>
                      </div>
                      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                        <p className="text-sm text-zinc-300">What I deliver</p>
                        <p className="mt-1 text-sm font-medium text-white">
                          Modern Responsive Website
                          • High-Performance Web Applications
                          • Secure Backend & API Development
                          • SEO-Optimized Websites for Better Visibility
                          • Scalable and Future-Ready Web Architecture
                          • Fast, Clean, and Maintainable Code
                          • Custom Web Solutions for Businesses & more
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section id="about" className="py-12 sm:py-16">
          <Container>
            <SectionHeader title="About" subtitle="A short intro and what I focus on." />
            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Card>
                  <div className="p-6 sm:p-8">
                    <div className="space-y-4 text-sm leading-7 text-zinc-300">
                      {ABOUT.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="lg:col-span-5">
                <Card>
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-medium text-white">Links</p>
                    <div className="mt-4 grid gap-3 text-sm">
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                      >
                        <div className="text-white">LinkedIn</div>
                        <div className="mt-1 text-zinc-400 break-all">{PROFILE.linkedin}</div>
                      </a>
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                      >
                        <div className="text-white">GitHub</div>
                        <div className="mt-1 text-zinc-400 break-all">{PROFILE.github}</div>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section id="skills" className="py-8 sm:py-16">
          <Container>
            <SectionHeader title="Skills" subtitle="Technologies I use to build real products." />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {SKILLS.map((g) => (
                <Card key={g.group}>
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold text-white">{g.group}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="projects" className="py-12 sm:py-16">
          <Container>
            <SectionHeader title="Projects" subtitle="Selected work with required details and links." />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {PROJECTS.map((p) => (
                <Card key={p.title}>
                  {p.imageSrc ? (
                    <div className="relative">
                      <img
                        src={p.imageSrc}
                        alt={p.imageAlt ?? `${p.title} preview`}
                        className="h-44 w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                    </div>
                  ) : null}

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{p.title}</p>
                        {p.period ? <p className="mt-1 text-xs text-zinc-400">{p.period}</p> : null}
                      </div>
                      <div className="flex gap-2">
                        {p.links?.live ? (
                          <ButtonLink
                            href={p.links.live}
                            target="_blank"
                            rel="noreferrer"
                            variant="secondary"
                            className="px-3 py-1.5 text-xs"
                          >
                            Live
                          </ButtonLink>
                        ) : null}
                        {p.links?.github ? (
                          <ButtonLink
                            href={p.links.github}
                            target="_blank"
                            rel="noreferrer"
                            variant="ghost"
                            className="px-3 py-1.5 text-xs"
                          >
                            Code
                          </ButtonLink>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-zinc-300">{p.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="education" className="py-10 sm:py-16">
          <Container>
            <SectionHeader title="Education" subtitle="My education background." />
            <div className="mt-8 grid gap-6">
              {EDUCATION.map((e) => (
                <Card key={`${e.program}-${e.institute}`}>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-base font-semibold text-white">{e.program}</p>
                        <p className="mt-1 text-sm text-zinc-300">
                          {e.institute}
                          {e.location ? ` · ${e.location}` : ''}
                        </p>
                      </div>
                      <p className="text-sm text-zinc-400">
                        {e.start} — {e.end}
                      </p>
                    </div>
                    {e.details?.length ? (
                      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                        {e.details.map((d) => (
                          <li key={d} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white/60" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-12 pb-20 sm:py-16">
          <Container>
            <SectionHeader
              title="Contact"
              subtitle="Send me a message. I’ll reply as soon as possible."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Card>
                  <div className="p-6 sm:p-8">
                    <ContactForm />
                  </div>
                </Card>
              </div>
              <div className="lg:col-span-5">
                <Card>
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-medium text-white">Direct Contact</p>
                    
                    <div className="mt-4 grid gap-3 text-sm">
                      <a
                        className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                        href={`mailto:${PROFILE.email}`}
                      >
                        <div className="text-white">Email</div>
                        <div className="mt-1 text-zinc-400 break-all">{PROFILE.email}</div>
                      </a>
                      <a
                        className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition"
                        href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                      >
                        <div className="text-white">Phone</div>
                        <div className="mt-1 text-zinc-400">{PROFILE.phone}</div>
                      </a>
                      <a
        className="group  items-center gap-4 rounded-xl bg-green-500/10 p-4 ring-1 ring-green-500/30 hover:bg-green-500/20 transition"
        href={`https://wa.me/${PROFILE.whatsapp.replace(/[^\d]/g, "")}?text=Hello%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="text-white mb-2">WhatsApp</div>
                        <div className="mt-1 text-zinc-400">{PROFILE.whatsapp}</div>
                      </a>
                    </div>
                    {/* <div className="mt-6">
                      <ButtonLink href={PROFILE.resumeUrl} download variant="secondary" className="w-full">
                        Download CV
                      </ButtonLink>
                    </div> */}
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a className="text-zinc-400 hover:text-white transition" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="text-zinc-400 hover:text-white transition" href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

