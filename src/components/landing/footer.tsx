import { Twitter, Linkedin, Rocket } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 md:px-6">
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Arctus Aerospace</h4>
          <p className="text-muted-foreground text-sm">
            Headquartered in Bengaluru, inspired globally.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Contact</h4>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              123, Research & Development Centre, Bengaluru, Karnataka, India
            </p>
            <p>
              <a
                href="mailto:contact@arctusaerospace.com"
                className="text-muted-foreground hover:text-primary"
              >
                contact@arctusaerospace.com
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/arctusaerospace" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/arctusaerospace/posts/?feedView=all"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Our Location</h4>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865403882!2d77.4661247190132!3d12.95396101344445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe4!2sBengaluru%2C%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678886979782!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bengaluru Location"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-4 px-4 md:px-6 flex flex-col items-center gap-2">
          <div className="flex flex-col md:flex-row gap-x-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Founded by{" "}
              <a
                href="https://www.linkedin.com/in/shreepoornasrao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline"
              >
                Shreepoorna S Rao
              </a>
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Website by{" "}
              <Link
                href="/hire-me"
                className="hover:text-primary hover:underline"
              >
                Vinamra Hetawal
              </Link>
              <Rocket className="h-4 w-4" />
            </p>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Arctus Aerospace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
