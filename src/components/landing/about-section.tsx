import { Eye, Goal } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-semibold mb-4">
                About Arctus Aerospace
              </div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
                Pioneering Defense and Space Manufacturing
              </h2>
            </div>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-4xl mx-auto">
              Arctus Aerospace is a{" "}
              <span className="text-primary font-semibold">
                defense and space manufacturing
              </span>{" "}
              startup specializing in the design and production of{" "}
              <span className="text-primary font-semibold">
                unmanned medium-altitude, long-endurance aerial vehicles
                (UAVs)
              </span>
              . The company's flagship product, the{" "}
              <span className="text-primary font-semibold">Drachen 5K</span>,
              is a 1:4 scale{" "}
              <span className="text-primary font-semibold">
                unmanned combat aerial vehicle prototype
              </span>{" "}
              capable of flying at{" "}
              <span className="text-primary font-semibold">200 km/h</span> at
              altitudes up to{" "}
              <span className="text-primary font-semibold">5,000 feet</span>,
              designed for{" "}
              <span className="text-primary font-semibold">
                integrated flight systems
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">
                combat-ready operations
              </span>
              . Arctus Aerospace's UAVs are engineered to carry{" "}
              <span className="text-primary font-semibold">
                payloads ranging from 100 to 250 kg
              </span>
              , supporting a variety of defense and surveillance missions.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-4xl mx-auto">
              Arctus Aerospace operates from its headquarters in{" "}
              <span className="text-primary font-semibold">Bengaluru</span> and
              maintains a strong connection with the{" "}
              <span className="text-primary font-semibold">
                IIT Madras innovation ecosystem
              </span>
              , leveraging research, mentorship, and incubation resources to
              accelerate product development.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block font-semibold">
                <Eye className="inline-block h-5 w-5 mr-2" />
                Our Vision
              </div>
              <h3 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl">
                To be the leading force in autonomous aerial solutions.
              </h3>
              <p className="text-muted-foreground">
                We envision a world where autonomous drones are an integral
                part of everyday life, enhancing safety, efficiency, and
                capabilities across all industries. We are committed to pushing
                the boundaries of what's possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block font-semibold">
                <Goal className="inline-block h-5 w-5 mr-2" />
                Our Mission
              </div>
              <h3 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl">
                To build intelligent, reliable, and accessible UAVs.
              </h3>
              <p className="text-muted-foreground">
                Our mission is to design, manufacture, and deploy the most
                advanced unmanned aerial vehicles, coupled with powerful AI, to
                solve complex real-world problems. We strive for excellence in
                engineering and a deep commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
