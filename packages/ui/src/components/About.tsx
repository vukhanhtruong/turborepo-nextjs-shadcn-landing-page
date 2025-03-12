import { Statistics } from "./Statistics";

export interface AboutInterface {
  title: string;
  description: string;
}

export const About = (data: AboutInterface) => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="py-12 rounded-lg border bg-muted/50">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img
            src="/pilot.png"
            alt=""
            className="object-contain rounded-lg w-[300px]"
          />
          <div className="flex flex-col justify-between bg-green-0">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary/60 to-primary">
                  {data.title}
                </span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                {data.description}
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
