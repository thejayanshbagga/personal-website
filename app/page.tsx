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
  const oliverWymanItems = [
    "Incoming Analyst, Data & Analytics (DNA) practice at Oliver Wyman, a Marsh McLennan business ($24B+ revenue), joining a global team of quantitative specialists to apply advanced analytics and modelling to client business problems across industries, from strategy through implementation.",
  ];

  const flynnItems = [
    "Tasked with modernizing a customer-facing platform tracking $100M+ in construction projects, built and shipped 25+ Angular/TypeScript features end-to-end from UI to backend integration, improving workflow efficiency and user experience for daily project-management users.",
    "Built REST API endpoints in .NET Core and SQL that automated multi-stage approval workflows across a platform managing 500+ commercial construction projects, cutting processing time 30% and removing manual data-entry errors.",
  ];

  const wealthManagementItems = [
    "Building an LLM-based AI assistant for client advisors serving ultra high net worth clients, using retrieval over meeting notes and portfolio data; cut advisor meeting-prep time by 60% across a pilot of 40 advisors.",
    "Optimizing a client churn classifier by engineering spending-trend features and tuning gradient boosting, raising precision at the top decile from 0.48 to 0.66 and cutting false-positive outreach by 27% and focusing high-value client retention efforts.",
  ];

  const personalBankingItems = [
    "Drove data-informed decision-making for RBC's Personal Banking division (16M+ customers) by building automated SQL/Python reporting pipelines within the Decision Management team, cutting manual reporting turnaround by ~35%",
    "Partnered with cross-functional teams across Risk, Marketing, and Product to translate business questions into data models and optimize ETL/SQL workflows, reducing data processing time by ~25% and supporting initiatives influencing $500M+ in managed portfolio value.",
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
              I’m a Computer Science student at Western University and Founder & Technical Lead at Savify, a privately backed fintech startup. Having worked with some of Canada’s largest banks in data analytics and AI engineering, I’ve built AI agents and transformed complex data into actionable insights. I’m now transitioning toward management consulting at leading firms like Oliver Wyman, working at the intersection of quantitative finance, data, and technology.
              <br /><br />
              I believe CS students can take a cue from finance: sharp code deserves a sharp suit.
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
                I’m a Computer Science student at Western University, working at the intersection of AI, consulting, and finance. I’ve worked on real-world systems, from data pipelines in banking to AI tools for client advisors, and I’m especially interested in using data and analysis to help businesses make better decisions.
              </p>
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
                    <span>Starting as an AI Engineer at RBC Wealth Management in Toronto in January 2027, building AI tools for client advisors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Joining Oliver Wyman’s Data &amp; Analytics practice as a summer analyst in June 2027, moving into consulting.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Exploring the next step after Savify, including deeper work on Project Kalson, designing systems that learn and solving problems that actually hurt.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Building my personal brand while pursuing bigger professional opportunities.</span>
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
            <Link href="/resume.pdf" target="_blank">
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
                <div className="space-y-4">
                  {[
                    {
                      category: 'Languages',
                      skills: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'Bash', 'Go', 'Rust', 'R', 'SAS'],
                    },
                    {
                      category: 'Frameworks',
                      skills: ['Angular', '.NET Core', 'Node.js', 'Express.js', 'FastAPI', 'React Native', 'Next.js', 'Tailwind CSS', 'Spring Boot', 'Django', 'Flask', 'NestJS', 'scikit-learn'],
                    },
                    {
                      category: 'Databases',
                      skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Redis', 'MySQL', 'SQLite', 'DynamoDB', 'Snowflake'],
                    },
                    {
                      category: 'Tools',
                      skills: ['AWS', 'Azure DevOps', 'Docker', 'Kubernetes', 'Git', 'Linux', 'REST APIs', 'GraphQL', 'Postman', 'CI/CD', 'Jenkins', 'Terraform', 'Nginx', 'Excel'],
                    },
                    {
                      category: 'Concepts',
                      skills: ['DSA', 'OOP', 'System Design', 'NLP', 'Pandas', 'NumPy', 'Time Series Analysis', 'Data Modelling', 'Algorithmic Trading', 'Risk Modeling', 'Logistic Regression'],
                    },
                  ].map(({ category, skills }) => (
                    <div key={category}>
                      <h4 className="mb-2 text-sm font-medium text-muted-foreground">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <ExperienceTimeline
                  items={[
                    {
                      company: 'Oliver Wyman',
                      role: 'Incoming Summer Analyst',
                      period: 'June - August 2027',
                      logo: '/logos/oliver.jpeg',
                      skills: ['Data & Analytics', 'Advanced Analytics', 'Data Modelling', 'Python', 'Machine Learning']
                    },
                    {
                      company: 'Royal Bank of Canada (Wealth Management)',
                      role: 'AI Engineer',
                      period: 'Jan 2027 - Apr 2027',
                      logo: '/logos/rbc.png',
                      skills: ['LLMs', 'Retrieval', 'Python', 'Machine Learning']
                    },
                    {
                      company: 'Royal Bank of Canada (Personal Banking)',
                      role: 'Data Analyst',
                      period: 'Sept 2026 - Dec 2026',
                      logo: '/logos/rbc.png',
                      skills: ['SQL', 'Python', 'ETL', 'Data Modelling']
                    },
                    {
                      company: 'Flynn Group of Companies',
                      role: 'Software Engineer',
                      period: 'May 2026 - Sept 2026',
                      logo: '/logos/flynn.jpg',
                      skills: ['Angular', 'TypeScript', '.NET Core', 'SQL', 'REST APIs']
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Experiences</h3>
              <div className="space-y-12">
                <ExperienceSection
                  title="Incoming Summer Analyst"
                  subtitle="Oliver Wyman • June - August 2027"
                  items={oliverWymanItems}
                />
                <ExperienceSection
                  title="AI Engineer"
                  subtitle="Royal Bank of Canada (Wealth Management) • Jan 2027 - Apr 2027"
                  items={wealthManagementItems}
                />
                <ExperienceSection
                  title="Data Analyst"
                  subtitle="Royal Bank of Canada (Personal Banking) • Sept 2026 - Dec 2026"
                  items={personalBankingItems}
                />
                <ExperienceSection
                  title="Software Engineer"
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
