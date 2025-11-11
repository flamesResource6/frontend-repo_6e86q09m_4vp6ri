import { useMemo } from 'react'
import { BarChart3, Search, Megaphone, LineChart, Users, Globe, FileDown, ArrowRight, Linkedin, Mail, Phone } from 'lucide-react'

function GlassBadge({ icon: Icon, label }) {
  return (
    <div className="group relative flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-xl border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-shadow">
      <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-white/70 to-white/20 border border-white/50 shadow-inner overflow-hidden">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 to-transparent" />
        <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-white/70 blur-md" />
        <Icon className="absolute inset-0 m-auto text-slate-700 opacity-80" size={20} />
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-800">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export default function App() {
  const gradientBg = useMemo(
    () => (
      {
        backgroundImage:
          'radial-gradient(1200px 600px at -10% -10%, rgba(186,230,253,0.5), transparent 60%), ' +
          'radial-gradient(900px 500px at 110% 0%, rgba(199,210,254,0.5), transparent 60%), ' +
          'radial-gradient(800px 400px at 50% 120%, rgba(221,214,254,0.5), transparent 60%)',
      }
    ),
    []
  )

  return (
    <div className="min-h-screen bg-white text-slate-800" style={gradientBg}>
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-200 via-teal-200 to-purple-200 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]" />
            <div className="leading-tight">
              <p className="font-semibold">Riya Ubriani</p>
              <p className="text-xs text-slate-500">Digital Marketing Strategist</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="mailto:" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm px-4 py-2 hover:bg-slate-800 transition-colors">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur px-3 py-1 border border-white shadow-sm text-slate-600 mb-6">
              <div className="h-2 w-2 rounded-full bg-teal-400" />
              <span className="text-xs">Performance Marketing & Strategy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
              I scale brand growth with data-driven marketing.
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-xl">
              Performance ads, SEO, content strategy, and brand identity development.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="https://drive.google.com/file/d/155W7nTDFhfXXsq_6r6eMICSFRP_7Lwjw/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium border border-white text-slate-700 hover:bg-white"
              >
                <FileDown size={16} /> Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <GlassBadge icon={Megaphone} label="Meta & Google Ads" />
              <GlassBadge icon={Search} label="SEO Strategy" />
              <GlassBadge icon={BarChart3} label="Analytics" />
              <GlassBadge icon={LineChart} label="Growth" />
            </div>
          </div>

          {/* Visuals */}
          <div className="relative h-[420px] sm:h-[500px]">
            {/* Big glass sphere */}
            <div className="absolute right-6 top-6 h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-white/60 bg-gradient-to-b from-white/70 to-white/10 backdrop-blur-2xl shadow-[inset_0_20px_60px_rgba(255,255,255,0.6),0_30px_100px_rgba(79,70,229,0.15)]">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
              <div className="absolute top-6 left-10 h-20 w-20 rounded-full bg-white/40 blur-xl" />
              <div className="absolute bottom-8 right-10 h-28 w-28 rounded-full bg-gradient-to-br from-purple-200/60 to-teal-200/60 blur-xl" />
            </div>

            {/* Floating pastel spheres */}
            <div className="absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-gradient-to-br from-teal-200 to-indigo-200 shadow-[0_20px_60px_rgba(13,148,136,0.25)]" />
            <div className="absolute right-40 -top-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 shadow-[0_20px_60px_rgba(147,51,234,0.25)] rotate-12" />
            <div className="absolute left-6 bottom-6 h-14 w-14 rounded-full bg-gradient-to-br from-sky-200 to-teal-200 shadow-[0_20px_60px_rgba(2,132,199,0.25)]" />

            {/* Icon badges */}
            <div className="absolute -left-2 top-12">
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
                  <Megaphone size={18} className="text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">Google Ads</span>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
                  <Users size={18} className="text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">Meta Ads</span>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
                  <Search size={18} className="text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">SEO</span>
                </div>
                <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
                  <BarChart3 size={18} className="text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="About Me"
            subtitle="I am a Digital Marketing Strategist experienced in running performance marketing campaigns, improving SEO visibility, managing social media presence, and developing meaningful content strategies. I build digital identities that drive measurable results and sustainable brand growth."
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Core Skills" subtitle="A stack focused on growth, performance, and brand clarity." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Megaphone, label: 'Meta Ads & Google Ads' },
              { icon: Search, label: 'SEO (On-page & Keyword Strategy)' },
              { icon: Globe, label: 'Social Media Management & Branding' },
              { icon: PenIcon, label: 'Content Writing & Messaging' },
              { icon: BarChart3, label: 'Campaign Analytics & Reporting' },
              { icon: LineChart, label: 'Landing Page Planning' },
            ].map((item) => (
              <div key={item.label} className="relative rounded-2xl p-5 bg-white/70 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-gradient-to-br from-teal-200/70 to-indigo-200/70 blur-xl" />
                <div className="relative flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-white to-white/40 border border-white/70 flex items-center justify-center shadow-inner">
                    <item.icon className="text-slate-700" size={18} />
                  </div>
                  <p className="font-medium text-slate-800">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Experience" subtitle="Clean, focused snapshots of recent roles." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6">
              <p className="text-sm text-slate-500 mb-1">Digital Marketing Executive</p>
              <h3 className="text-lg font-semibold">Algora Intelligence</h3>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm leading-relaxed list-disc pl-5">
                <li>Executed Meta advertising campaigns with Conversion API for accurate data tracking and improved performance.</li>
                <li>Managed LinkedIn brand presence to grow engagement and visibility.</li>
                <li>Developed brochures, blog content, and video script messaging for consistent brand storytelling.</li>
                <li>Improved website SEO rankings through strategic keyword implementation and content optimization.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6">
              <p className="text-sm text-slate-500 mb-1">Digital Marketing Intern</p>
              <h3 className="text-lg font-semibold">ReportPrime</h3>
              <ul className="mt-4 space-y-2 text-slate-700 text-sm leading-relaxed list-disc pl-5">
                <li>Managed brand presence across LinkedIn, Tumblr, Medium, Pinterest, Whatech, and Quora.</li>
                <li>Wrote SEO blogs, whitepapers, and case studies to increase engagement and organic traffic.</li>
                <li>Performed SEO keyword research using SEMrush to improve search ranking strategy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Projects" subtitle="A selection of campaigns and initiatives." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6">
              <h3 className="text-lg font-semibold">Web Development (2023)</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Created and managed a WordPress blog on healthy and quick recipes.</li>
                <li>Wrote and published 2 SEO-friendly blogs.</li>
                <li>
                  Website: <a className="text-slate-900 underline decoration-slate-300 underline-offset-4" href="http://riya-u.dmlearning.in/" target="_blank" rel="noreferrer">riya-u.dmlearning.in</a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6">
              <h3 className="text-lg font-semibold">Google Search + Display Ads (2023)</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Ran 4-day campaigns to increase quality website traffic.</li>
                <li>Display Ad → 110 clicks, 3.4k impressions, 3.32% CTR.</li>
                <li>Search Ad → 110 clicks, 11.9k impressions, 0.92% CTR.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6">
              <h3 className="text-lg font-semibold">Meta Ads — Gym Lead Generation (2024)</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Designed and launched a static lead-gen ad for a local gym.</li>
                <li>Result: 20 leads + 10 phone call inquiries in one day.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-6">
              <h3 className="text-lg font-semibold">Meta Ads — Awareness + Engagement (2025)</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc pl-5">
                <li>Awareness Campaign: 73k reach, CPR ₹2 (5 hours duration)</li>
                <li>Engagement Carousel Campaign: 94k reach, CPR ₹2.2 (5 hours duration)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Let’s Work Together</h2>
          <p className="mt-3 text-slate-600">Open to full-time roles, freelance projects, or collaborations.</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800">
              <Mail size={18} /> Book a Call
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-3 text-sm font-medium border border-white text-slate-700 hover:bg-white">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-3 text-sm font-medium border border-white text-slate-700 hover:bg-white">
              <Phone size={18} /> WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Riya Ubriani — Digital Marketing Strategist & Performance Marketer</p>
        </div>
      </section>
    </div>
  )
}

// Local icon for content writing if lucide Pen isn't imported above
function PenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
      <path d="M12.5 6l5.5 5.5m-2-7l3 3c.7.7.7 1.8 0 2.5l-9.6 9.6c-.3.3-.7.5-1.1.6l-4.3 1.1 1.1-4.3c.1-.4.3-.8.6-1.1l9.6-9.6c.7-.7 1.8-.7 2.5 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
