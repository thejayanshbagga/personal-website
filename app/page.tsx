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
  const carloItems = [
  "Built Python and SQL data pipelines to automate user experience and feedback validation across cross-regional operations.",
  "Engineered NLP workflows (NLTK, Pandas) to analyze 20,000+ customer records, enabling scalable sentiment analysis.",
  "Collaborated across India & Italy in agile workflows, participating in standups and sprint planning to deliver data-driven insights."
];

  const flynnItems = [
  "Scheduled for a 16-week software engineering internship at Flynn, working on internal enterprise applications using Angular, .NET Core, and SQL.",
  "Contributing to backend services and API development, focusing on scalable systems and performance.",
  "Working with AWS and Azure DevOps pipelines to deploy and maintain production applications."
  ];

  const outlierItems = [
  "Engineered and optimized LLM-based systems using OpenAI APIs and Python, improving output accuracy by ~10–15% across production use cases.",
  "Built evaluation pipelines with Python and Pandas, benchmarking performance across 1K–5K+ model outputs.",
  "Scaled NLP workflows on 10K+ text records, supporting enterprise AI deployments and supervised learning tasks."
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
                    <span>Moving to Toronto to start my SWE internship at Flynn, working on enterprise systems and scaling real-world applications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Scaling The Savify app with a team of five; refining features, optimizing backend performance, and preparing for the next funding phase.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Designing systems that learn, solving problems that hurt, and building toward what’s next under Project Kalson.</span>
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
                      <Badge variant="secondary">University of Toronto Hackathon 13 (Top 5)</Badge>
                      <Badge variant="secondary">RBC Overhaul Case Competition (Top 5)</Badge>
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
                      company: 'Flynn Group of Companies',
                      role: 'Software Engineering Intern',
                      period: 'May 2026 - Sept 2026',
                      logo: '/logos/flynn.jpg',
                      skills: ['Angular', '.NET Core', 'SQL', 'AWS', 'Azure DevOps']
                    },
                    {
                      company: 'Outlier AI',
                      role: 'AI Engineer',
                      period: 'Sept 2024 - May 2025',
                      logo: '/logos/outlier.jpeg',
                      skills: ['AI', 'Prompt Engineering','LLM', 'Mathematical Reasoning', 'Fine-tuning']
                    },
                    {
                      company: 'Carlo Romano',
                      role: 'Data Analyst Intern',
                      period: 'June 2024 - Sept 2024',
                      logo: '/logos/carloromano.png',
                      skills: ['Python', 'SQL', 'NLP','Big Data', 'Matplotlib', 'Pandas']
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Experiences</h3>
              <div className="space-y-12">
                <ExperienceSection
                  title="Software Engineering Intern"
                  subtitle="Flynn Group of Companies • May 2026 - Sept 2026"
                  items={flynnItems}
                />

                <ExperienceSection
                  title="AI Engineer (LLM Systems)"
                  subtitle="Outlier AI • Sept 2024 - May 2025"
                  items={outlierItems}
                />

                <ExperienceSection
                  title="Data Analyst Intern"
                  subtitle="Carlo Romano • June 2024 - Sept 2024"
                  items={carloItems}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
