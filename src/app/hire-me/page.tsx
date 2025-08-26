import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Target,
  ArrowRight,
  FileText,
} from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6"; // FaTwitter for old logo, FaXTwitter for "X"
import Image from "next/image";
import { Timeline } from "@/components/timeline";

const HireMePage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-lg bg-muted mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/ccdbg2.png"
                    alt="Vinamra Hetawal"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full grayscale"
                  />
                </div>
                <CardTitle className="text-2xl">vinamra hetawal</CardTitle>
                <CardDescription>
                  perfect candidate for founder's office intern @arctusaerospace
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center gap-6 mt-2">
                  <a href="mailto:vinamraux@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/vinamra-hetawal-0573521b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a href="https://x.com/woahvinamra" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-foreground">
                    <FaXTwitter className="h-6 w-6" />
                  </a>
                  <a href="https://drive.google.com/file/d/1hekcWSugjCR-slOq3BgegPUtawGTIq8_/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="text-muted-foreground transition-colors hover:text-foreground">
                    <FileText className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
            <Timeline />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
             <Card>
            <CardHeader>
                <CardTitle>about me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                hey, i’m <span className="text-primary font-semibold">vinamra</span> — part curious researcher, part storyteller, and
                part operator-in-training. i get my kick from{" "}
                <span className="text-primary font-semibold">exploring complex markets</span>,{" "}
                <span className="text-primary font-semibold">finding patterns</span> in the chaos, and turning{" "}
                <span className="text-primary font-semibold">insights into action</span>. i believe the future belongs to those
                who can blend <span className="text-primary font-semibold">tech, data, and business</span> — and that’s exactly
                what excites me about <span className="text-primary font-semibold">arctus aerospace</span>.
                </p>
            </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>why hire me?</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                because i don’t just check boxes,{" "}
                <span className="text-primary font-semibold">i connect dots</span>. i’m{" "}
                <span className="text-primary font-semibold">
                    not afraid of ambiguity
                </span>
                ; in fact, i thrive on it. whether it’s digging into{" "}
                <span className="text-primary font-semibold">
                    market intelligence
                </span>
                ,{" "}
                <span className="text-primary font-semibold">
                    decoding regulations
                </span>
                , or{" "}
                <span className="text-primary font-semibold">
                    figuring out what keeps a client up at night
                </span>
                , i bring both{" "}
                <span className="text-primary font-semibold">curiosity</span> and{" "}
                <span className="text-primary font-semibold">execution</span>. i’m the
                kind of person who doesn’t wait for instructions—
                <span className="text-primary font-semibold">
                    i create opportunities
                </span>
                .
                </p>
            </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2" /> what i'll bring
                </CardTitle>
                <CardDescription>a bias for action — because in a high-altitude startup, speed is everything.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-semibold">insightful market deep dives</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    i'll surface insights that matter, going beyond surface-level searches to understand the competitive and regulatory landscape.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-semibold">a "what's next?" perspective</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    a fresh view on aerospace, drones, and geospatial intelligence, always looking for the next opportunity.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-semibold">compelling communication</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    strong research and communication skills to help shape decks, proposals, and outreach that don’t just inform, but inspire.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-semibold">adaptability to switch gears fast</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    whether it’s customer discovery, competitor tracking, or crafting fundraising narratives, i can flex where the team needs me most.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>let's fly high together</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  arctus aerospace isn’t just building unmanned aircraft; it’s building the future of earth observation. i want to be on that ride—learning, contributing, and scaling alongside the team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  so here’s my pitch: let’s take your vision to new altitudes, together.
                </p>
                <Button asChild variant="secondary" className="mt-4 group">
                  <a href="https://www.linkedin.com/in/vinamra-hetawal-0573521b7/" target="_blank" rel="noopener noreferrer">
                    let's connect <ArrowRight className="h-4 w-0 ml-2 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HireMePage;
