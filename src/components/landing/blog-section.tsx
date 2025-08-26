import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Inside Drachen 5K: Building a 1:4 Combat UAV",
    excerpt:
      "A deep dive into the design, engineering, and assembly of our flagship prototype.",
    image: "/blog1.png",
    imageHint: "drone blueprint schematics",
    slug: "#",
  },
  {
    title: "How We Got UAVs Carrying 250 kg and Still Flying",
    excerpt:
      "The challenges and breakthroughs in achieving heavy payload capacity on our UAVs.",
    image: "/blog2.png",
    imageHint: "heavy cargo drone",
    slug: "#",
  },
  {
    title: "Medium-Altitude, Long-Endurance: The MALE UAV Revolution",
    excerpt:
      "Exploring the strategic advantages and technical innovations of MALE UAVs in modern aerospace.",
    image: "/blog3.png",
    imageHint: "drone flying high",
    slug: "#",
  },
  {
    title: "Navigating the Regulatory Landscape for Drones",
    excerpt:
      "A breakdown of the current regulations and what they mean for commercial drone operators.",
    image: "/blog4.png",
    imageHint: "gavel justice",
    slug: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Aerospace Insights
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tune in for prank-free insights (mostly) on MALE UAV tech, payload
              wizardry, and what it takes to build combat-capable drones without
              falling off the runway.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
              className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  data-ai-hint={post.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <CardTitle className="text-xl font-bold">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={post.slug}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Have a topic you’re itching to explore? Let us know—your
            suggestions might spark our next post!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
