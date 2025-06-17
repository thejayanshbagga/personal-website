// Home.jsx or index.js

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
  "Completed a 16-week data internship with Carlo Romano, an Italian leather and shoe manufacturer, collaborating closely with the Italy-based team.",
  "Built Python and SQL pipelines to automate user experience validation and sentiment analysis for Indian online shoppers.",
  "Developed NLP workflows to uncover key customer trends, delivering insights to marketing and senior management."
];

const outlierItems = [
  "Contributed as a Generalist Prompt Engineer at Outlier AI, a California-based AI startup.",
  "Refined large language model outputs through advanced prompt engineering, boosting accuracy and efficiency.",
  "Worked remotely on diverse AI projects exploring innovative applications of NLP and generative models."
];

const booksItems = [
  "Interned as a social media and content developer for Books En Beyond, a community-focused non-profit.",
  "Produced and promoted multimedia campaigns for 'The Kashmir Files', collaborating with Anupam Kher, a leading Bollywood actor.",
  "Increased social engagement by 20% and generated over 15,000 combined views across YouTube and Instagram."
];

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <section className="py-20 md:py-32 flex flex-col">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="block text-primary">Hey, I'm Jayansh Bagga.</span>
              <span className="block mt-2">Computer Science Student turned FinTech Founder.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
             I study Computer Science at Western University & prefer building products over doing research like Co-Founding Savify, an AI-driven savings app. I also believe that computer science students can take a cue from the finance world, sharp code deserves a sharp suit.
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
               I’m a Computer Science major at Western University with a passion for using AI, NLP, and cloud technologies to solve practical problems. I enjoy building robust backend systems, training machine learning models, and deploying applications with tools like Python, Java, SQL, and AWS. 
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
                    <span>Developing The Savify app with my team of five — we’re growing steadily and have 500+ active users so far.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Tinkering with AI/ML projects, dying a little inside with every LeetCode question, and still trying to land an internship.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="rounded-full h-2 w-2 mt-2.5 bg-primary"></span>
                    <span>Balancing academics, freelancing, and the startup grind.</span>
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
                <CardTitle>Savify</CardTitle>
                <CardDescription>AI-powered FinTech App</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Savify is an AI-powered savings and investing platform with built-in gamification. We have 500+ users, an active team, and a live site at savify.ca — with a full mobile app in the works and fundraising in progress to scale the product.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Plaid</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto pt-6">
                <Link href="https://savify.ca" target="_blank">
                  <Button variant="outline" size="sm">
                    Live Site
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* WDS Hackathon */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>InkLink</CardTitle>
                <CardDescription>RBC Hackathon Case Competition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Debugged HTML & UI/UX to boost site functionality; presented business and technical strategy.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">OAuth</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto pt-6">
                <Link href="https://wds-overhaul-group-hakurei.vercel.app/" target="_blank">
                  <Button variant="outline" size="sm">
                    Live Site
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* EcoVille */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle>EcoVille</CardTitle>
                <CardDescription>SDG 13 Climate App (in collaboration with the University of Sydney)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Environmental nuisance reporting app with geotagging and neighborhood watch integration.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Mobile App</Badge>
                  <Badge variant="secondary">AR/VR</Badge>
                  <Badge variant="secondary">Geolocation</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto pt-6">
                <Link href="https://www.youtube.com/watch?v=KbLU1I4Y-rY&t=41s" target="_blank">
                  <Button variant="outline" size="sm">
                    Demo Video
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
                    <h4 className="font-medium">B.Sc in Computer Science (Minor in Spanish)</h4>
                    <p className="text-sm text-muted-foreground">
                      University of Western Ontario • 2023 - 2027
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Java</Badge>
                  <Badge>SQL</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Prompt Engineering</Badge>
                  <Badge>NLP</Badge>
                  <Badge>Machine Learning</Badge>
                  <Badge>Data Analysis</Badge>
                  <Badge>API Development</Badge>
                </div>
              </div>

              <div className="mt-8">
                <ExperienceTimeline
                  items={[
                    {
                      company: 'Outlier AI',
                      role: 'Prompt Engineer',
                      period: 'Sept 2024 - Present',
                      logo: '/logos/outlier.jpeg',
                      skills: ['AI', 'Prompt Engineering','LLM', 'Mathermatical Reasoning', 'Fine-tuning']
                    },
                    {
                      company: 'Carlo Romano',
                      role: 'Data Analyst Intern',
                      period: 'June 2024 - Sept 2024',
                      logo: '/logos/carloromano.png',
                      skills: ['Python', 'SQL', 'NLP','Big Data', 'Matplotlib', 'Pandas']
                    },
                    {
                      company: 'Books En Beyond',
                      role: 'Social Media Intern',
                      period: 'April - June 2022',
                      logo: '/logos/booksenbeyond.png',
                      skills: ['Social Media', 'Content Creation', 'SEO Research','Audience Analytics'],
                    },
                  ]}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Experiences</h3>
              <div className="space-y-6">
                <div className="space-y-12">
                  <ExperienceSection
                    title="Prompt Engineer"
                    subtitle="Outlier AI • Sept 2024 - Present"
                    items={outlierItems}
                  />
                  <ExperienceSection
                    title="Data Analyst Intern"
                    subtitle="Carlo Romano • June 2024 - Sept 2024"
                    items={carloItems}
                  />
                  <ExperienceSection
                    title="Social Media Intern"
                    subtitle="Books En Beyond • April - June 2022"
                    items={booksItems}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
