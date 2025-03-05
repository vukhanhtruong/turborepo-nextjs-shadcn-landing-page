"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <hr className="mx-auto w-11/12" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-4xl font-bold text-center md:text-5xl">
          Join Our Daily{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary/60 to-primary">
            Newsletter
          </span>
        </h3>
        <p className="mt-4 mb-8 text-xl text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <form
          className="flex flex-col gap-4 mx-auto w-full md:flex-row md:gap-2 md:w-6/12 lg:w-4/12"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="vukhanhtruong@gmail.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>

      <hr className="mx-auto w-11/12" />
    </section>
  );
};
