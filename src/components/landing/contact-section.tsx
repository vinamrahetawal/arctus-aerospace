import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Think drones, tech, collabs—or just want to geek out about
                UAVs? Drop us a line!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">
                    123, Research & Development Centre, Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">
                    contact@arctusaerospace.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <Image
            src="/arctusaerospace_cover.png"
            alt="Arctus Aerospace Drone Fleet"
            data-ai-hint="drone fleet"
            width={1200}
            height={600}
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
