import Link from 'next/link';
import { FileText, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ExperienceSection from '@/components/ui/ExperienceSection';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';

export default function Home() {
  const rbcItems = [
  "Building automated SQL and Python reporting pipelines within the Decision Management team to support data-informed decision-making for RBC's Personal Banking division (16M+ customers).",
  "Partnering with cross-functional teams across Risk, Marketing, and Product to translate business questions into data models, optimizing ETL/SQL workflows and reducing data processing time by ~25%.",
  "Contributing to reporting and analytics initiatives influencing $500M+ in managed portfolio value, cutting manual reporting turnaround by ~35% across the Personal Banking analytics team."
];

  const flynnItems = [
  "Tasked with modernizing a customer-facing platform tracking $100M+ in construction projects, built and shipped 25+ Angular/TypeScript features end-to-end from UI to backend integration, improving workflow efficiency and user experience for daily project-management users.",
  "To eliminate slow, error-prone manual approvals across enterprise systems, designed and deployed REST API endpoints in .NET Core and SQL that automated multi-stage approval workflows, cutting processing time 30% and removing manual data-entry errors.",
  "Embedded in a cross-functional Agile team of PMs, engineers, and business stakeholders, drove features through the full SDLC across the project lifecycle, contributing to a platform managing 500+ commercial construction projects across North America."
  ];

  const wealthManagementItems = [
  "Built an LLM-based AI assistant for client advisors serving ultra-high-net-worth clients, using retrieval over meeting notes and portfolio data to cut meeting-preparation time by 60% in a 40-advisor pilot.",
  "Led a research sprint with advisors and data scientists on LLM summary accuracy, reviewing 300 meeting notes and creating a shared evaluation guide that cut advisor edit rates by 35%.",
  "Improved a client churn classifier by engineering spending-trend features and tuning gradient boosting, raising top-decile precision from 0.48 to 0.66 and reducing false-positive outreach by 27%."
  ];
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="py-20 md:py-32 flex flex-col">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block text-primary">Hey, I'm Jayansh Bagga.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              I’m a Computer Science student at Western and Founder & Technical Lead of Savify, a privately-backed fintech startup. I build scalable systems across software, AI, and finance from LLM infrastructure to backend applications. 
              I also believe that computer science students can take a cue from the finance world, sharp code deserves a sharp suit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button className="group">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#resume">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-t">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I’m a Computer Science student at Western University, building at the intersection of software, AI, and finance. I’ve been working on real-world systems—from LLM-based infrastructure to scalable backend applications. I’m especially interested in building products that are not just technically strong, but genuinely useful.    </p>
              <p className="text-lg text-muted-foreground">
                When I’m not coding, I’m usually expanding my vocabulary, picking up new languages, sampling colognes and cognac, or just touching grass to balance it all out.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Currently Working On</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Joining RBC Wealth Management in Toronto as an AI Engineer in January 2027, building AI tools for client advisors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Wrapping up Savify after running out of runway, and exploring what's next — including deeper work on Project Kalson, designing systems that learn and solving problems that actually hurt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Developing my personal brand and investment portfolio while pursuing bigger professional opportunities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Savify */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Savify (Privately-Backed)</CardTitle>
                <CardDescription>AI-powered FinTech App</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Savify is a privately-backed fintech platform focused on goal-based savings, combining machine learning insights, financial analytics, and gamified user engagement.
                  Currently at 150+ registered users with a live platform and mobile app in development, scaling toward 500+ users post-launch.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Google OAuth</Badge>
                  <Badge variant="secondary">JWT</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto pt-6">
                <Link href="https://savify.ca" target="_blank">
                  <Button variant="outline" size="sm">Live Site</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Semantic Cache Engine */}
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Semantic Cache Engine</CardTitle>
                  <CardDescription>AI-Powered Caching Infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mt-2">
                    Built a FastAPI semantic cache for Boardy ($8M AI startup) using vector embeddings and cosine similarity 
                    to reduce LLM calls by 60% and latency by 40%. Designed as a modular caching engine for AI applications.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Vector Embeddings</Badge>
                    <Badge variant="secondary">Cosine Similarity</Badge>
                    <Badge variant="secondary">LLMs</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">API Design</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto pt-6">
                  <Link href="https://github.com/thejayanshbagga/semantic-cache-engine" target="_blank">
                    <Button variant="outline" size="sm">
                      Project Link
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            {/* Reflecta */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>Reflecta</CardTitle>
                <CardDescription>
                  AI Reflection Engine • UofTHacks 13 (Top 5)
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reflecta is an AI-powered reflection system built during UofTHacks 13 that helps users analyze personal thoughts and writing using large language models. 
                  The project explores how AI can transform raw journaling into structured insights and pattern detection for self-awareness.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">LLMs</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Prompt Engineering</Badge>
                  <Badge variant="secondary">AI Systems</Badge>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between mt-auto pt-6">
                <Link 
                  href="https://devpost.com/software/reflecto?ref_content=my-projects-tab&ref_feature=my_projects" 
                  target="_blank"
                >
                  <Button variant="outline" size="sm">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="py-16 border-t">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
            <Link href="/resume-jayanshbagga.pdf" target="_blank">
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">B.Sc – Major in Computer Science</h4>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                      <Badge variant="secondary">Western International Scholarship ($25,000)</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>Java</Badge>
                  <Badge>C++</Badge>
                  <Badge>SQL</Badge>
                  <Badge>TypeScript</Badge>

                  <Badge>Angular</Badge>
                  <Badge>.NET Core</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>FastAPI</Badge>
                  <Badge>React Native</Badge>

                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Redis</Badge>

                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>

                  <Badge>REST APIs</Badge>
                  <Badge>System Design</Badge>
                  <Badge>Multithreading</Badge>

                  <Badge>LLMs</Badge>
                  <Badge>NLP</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>XGBoost</Badge>

                  <Badge>Algorithmic Trading</Badge>
                  <Badge>Time Series</Badge>
                  <Badge>Risk Modeling</Badge>
                </div>
              </div>

              <div className="mt-8">
                <ExperienceTimeline
                  items={[
                    {
                      company: 'Royal Bank of Canada (Wealth Management)',
                      role: 'AI Engineer',
                      period: 'Jan 2027 - Apr 2027',
                      logo: '/logos/rbc.png',
                      skills: ['Agentic AI', 'LLMs', 'Retrieval', 'Python', 'Machine Learning']
                    },
                    {
                      company: 'Royal Bank of Canada',
                      role: 'Data Analyst',
                      period: 'Sept 2026 - Dec 2026',
                      logo: '/logos/rbc.png',
                      skills: ['SQL', 'Python', 'Power BI', 'ETL', 'Data Modeling']
                    },
                    {
                      company: 'Flynn Group of Companies',
                      role: 'Software Engineering Intern',
                      period: 'May 2026 - Sept 2026',
                      logo: '/logos/flynn.jpg',
                      skills: ['Angular', '.NET Core', 'SQL', 'AWS', 'Azure DevOps']
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Experiences</h3>
              <div className="space-y-12">
                <ExperienceSection
                  title="AI Engineer"
                  subtitle="Royal Bank of Canada (Wealth Management) • Jan 2027 - Apr 2027"
                  items={wealthManagementItems}
                />
                <ExperienceSection
                  title="Data Analyst"
                  subtitle="Royal Bank of Canada • Sept 2026 - Dec 2026"
                  items={rbcItems}
                />
                <ExperienceSection
                  title="Software Engineering"
                  subtitle="Flynn Group of Companies • May 2026 - Sept 2026"
                  items={flynnItems}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
