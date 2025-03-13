import { unstable_cache } from "next/cache";
import { Hero } from "@repo/ui/components/Hero";
import { client } from "../utils/strapi";

const getHeroData = unstable_cache(
  async () => {
    try {
      const heroQuery = client.single("hero");

      const hero = await heroQuery.find();
      return hero.data;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  },
  ["homepage"],
  { revalidate: 300, tags: ["about"] },
);
export async function HeroComponent() {
  const hero = await getHeroData();

  return (
    <>
      <Hero
        headline={hero.headline}
        excerpt={hero.excerpt}
        links={hero.links}
      />
    </>
  );
}
