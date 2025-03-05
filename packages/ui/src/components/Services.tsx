import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

const cubeLeg = "/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 place-items-center lg:grid-cols-[1fr,1fr]">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary/60 to-primary">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="mt-4 mb-8 text-xl text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex gap-4 justify-start items-start space-y-1 md:flex-row">
                  <div className="p-1 mt-1 rounded-2xl bg-primary/20">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="mt-2 text-md">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="object-contain w-[300px] md:w-[500px] lg:w-[600px]"
          alt="About services"
        />
      </div>
    </section>
  );
};
