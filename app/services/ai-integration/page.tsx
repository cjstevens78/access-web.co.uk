import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Bot, Search, Sparkles, Brain, MessageSquare, FileCode } from "lucide-react"

export const metadata = {
  title: "AI Integration Services | Access Web Limited",
  description:
    "Integrate cutting-edge AI capabilities into your applications with chatbots, search assistants, and content generation using the latest language models.",
}

export default function AIIntegrationPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">AI Integration</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Enhance Your Applications with AI
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Integrate powerful AI capabilities into your applications using the latest language models and machine
              learning technologies.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
              width={600}
              height={400}
              alt="AI visualization showing neural networks and machine learning concepts"
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI Integration Services</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We offer a comprehensive suite of AI integration services to help businesses leverage the latest in
              artificial intelligence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Bot className="h-10 w-10 text-primary mb-2" />
                <CardTitle>AI Chatbots</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Custom chatbots powered by GPT-4 and other advanced language models for customer support and
                    engagement.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Search Assistants</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    AI-powered search functionality with natural language understanding and semantic search
                    capabilities.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Content Generation</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Automated content generation for marketing, documentation, and other business needs.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Custom AI Models</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Fine-tuned AI models trained on your specific business data and use cases.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Conversational AI</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Natural language processing for automated customer interactions and support.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileCode className="h-10 w-10 text-primary mb-2" />
                <CardTitle>API Integration</CardTitle>
                <CardContent className="px-0">
                  <p className="text-muted-foreground">
                    Seamless integration with leading AI platforms and APIs including OpenAI, Anthropic, and more.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest AI Technologies</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              We work with the most advanced AI models and platforms to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Language Models</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>GPT-4 and GPT-3.5 Turbo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Claude 2 and Claude Instant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>PaLM 2 and Gemini</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Fine-tuned custom models</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Capabilities</CardTitle>
                <CardContent className="px-0">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Semantic Search</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Content Generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Sentiment Analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Implementation Process</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Our structured approach ensures successful AI integration that delivers real business value.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">01</div>
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-muted-foreground">
                Evaluate your needs and identify the best AI solutions for your business.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">02</div>
              <h3 className="text-xl font-bold">Design</h3>
              <p className="text-muted-foreground">
                Create a custom implementation plan tailored to your requirements.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">03</div>
              <h3 className="text-xl font-bold">Integration</h3>
              <p className="text-muted-foreground">Implement and fine-tune AI capabilities in your applications.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">04</div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="text-muted-foreground">Monitor, maintain, and improve AI performance over time.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Benefits of AI Integration</h2>
            <p className="text-muted-foreground md:text-xl mx-auto max-w-[800px]">
              Transform your business with the power of artificial intelligence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Enhanced Efficiency</h3>
              <p className="text-muted-foreground">
                Automate routine tasks and streamline operations with AI-powered solutions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Improved Customer Experience</h3>
              <p className="text-muted-foreground">
                Provide 24/7 support and personalized interactions through AI chatbots.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Leverage AI to analyze data and generate actionable business insights.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-muted p-8 md:p-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started with AI?</h2>
              <p className="text-muted-foreground md:text-xl mx-auto max-w-[600px]">
                Let's discuss how AI can transform your business and create new opportunities for growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

