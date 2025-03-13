import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

interface LinkInterface {
  title: string;
  link: string;
}
export interface HeroInterface {
  headline: string;
  excerpt: string;
  links: LinkInterface[];
}

export const Hero = (data: HeroInterface) => {
  return (
    <section className="container grid gap-10 place-items-center py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">{data.headline}</main>

        <p className="mx-auto text-xl md:w-10/12 lg:mx-0 text-muted-foreground">
          {data.excerpt}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          {data?.links?.map(({ title, link }) => {
            return (
              <a
                key={link}
                rel="noreferrer noopener"
                href={link}
                target="_blank"
                className={`w-full md:w-1/3 ${buttonVariants({
                  variant: "outline",
                })}`}
              >
                {title}
              </a>
            );
          })}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
