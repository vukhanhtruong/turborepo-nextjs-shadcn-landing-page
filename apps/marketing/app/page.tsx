import { Cta } from "@repo/ui/components/Cta";
import { FAQ } from "@repo/ui/components/FAQ";
import { Features } from "@repo/ui/components/Features";
import { Footer } from "@repo/ui/components/Footer";
import { HowItWorks } from "@repo/ui/components/HowItWorks";
import { Navbar } from "@repo/ui/components/Navbar";
import { Newsletter } from "@repo/ui/components/Newsletter";
import { Pricing } from "@repo/ui/components/Pricing";
import { ScrollToTop } from "@repo/ui/components/ScrollToTop";
import { Services } from "@repo/ui/components/Services";
import { Sponsors } from "@repo/ui/components/Sponsors";
import { Team } from "@repo/ui/components/Team";
import { Testimonials } from "@repo/ui/components/Testimonials";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import { HeroComponent } from "./components/Hero";
import { client } from "./utils/strapi";
import { About } from "@repo/ui/components/About";
import "../index.css";

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reference
export const dynamic = "force-dynamic";

const baseURL = process.env.STRAPI_URL;
export default async function Page() {
  const homeQuery = client.single(
    // "homepage?populate=*",
    "homepage?populate[blocks][on][sections.about][populate]=*",
  );

  const home = await homeQuery.find();
  const [about] = home.data.blocks;

  return (
    <>
      <ThemeProvider>
        <Navbar />
        <HeroComponent />
        <Sponsors />
        <About
          title={about.title}
          excerpt={about.excerpt}
          picture={`${baseURL}${about.picture.formats.small.url}`}
        />
        <HowItWorks />
        <Features />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}
