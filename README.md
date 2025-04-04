# Turborepo starter with nextjs & shadcn/ui

![Static Badge](https://img.shields.io/badge/shadcn%2Fui-2.1.2-blue?link=https%3A%2F%2Fgithub.com%2Fshadcn%2Fui)
![NextJS Badge](https://img.shields.io/badge/nextjs-15-blue)

This is Turborepo starter with shadcn/ui pre-configured.

> [!NOTE]
> This example uses `pnpm` as package manager.

[npm version](https://github.com/dan5py/turborepo-shadcn-ui/tree/npm)
[bun version](https://github.com/dan5py/turborepo-shadcn-ui/tree/bun)

## Using this example

Clone the repository:

```sh
git clone https://github.com/vukhanhtruong/turborepo-nextjs-shadcn-landing-page.git
```

Install dependencies:

```sh
cd turborepo-nextjs-shadcn-landing-page
pnpm install
```

Start dev environment:

```sh
pnpm dev
```

### Add ui components

Use the pre-made script:

```sh
pnpm ui add <component-name>
```

> This works just like the `shadcn/ui` CLI.

### Add a new app

Turborepo offer a simple command to add a new app:

```sh
pnpm turbo gen workspace --name <app-name>
```

This will create a new empty app in the `apps` directory.

If you want, you can copy an existing app with:

```sh
pnpm turbo gen workspace --name <app-name> --copy
```

> [!NOTE]
> Remember to run `pnpm install` after copying an app.

### Start storybook

```sh
pnpm storybook
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `marketing`: a landing page [Next.js](https://nextjs.org/)
- `docs`: storybook document for `@repo/ui`
- `@repo/ui`: a stub React component library (🚀 powered by **shadcn/ui**)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd turborepo-nextjs-shadcn-landing-page
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd turborepo-nextjs-shadcn-landing-page
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd turborepo-nextjs-shadcn-landing-page
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Learn more about shadcn/ui:

- [Documentation](https://ui.shadcn.com/docs)

## Reference

- [Landing page template](https://github.com/leoMirandaa/shadcn-landing-page)
