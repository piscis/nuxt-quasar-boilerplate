# Nuxt 3 + Quasar 2.10 - Minimal Starter (⚠️WIP⚠️)

Hello there and thank you for the interrest in this boilerplate repo. I have to mention that this is still a **⚠️work in progress⚠️.** Integrating Quasar 2.x + Nuxt3 in an SSR environment takes a lot of effort esspecially because Quasar ships their own SSR version and is not compatible with nuxt3 out of the box.

Also have a look at this [ticket](https://github.com/quasarframework/quasar/issues/11165) about the potention native support of nuxt3 with quasar.

**Demo:** https://nuxt3-quasar.piscis.io/

We recommend to look at the [documentation](https://v3.nuxtjs.org).

## Prerequisits

- PNPM >= 7.x
- NodeJS 16.x

## Setup

Make sure to install the dependencies

```bash
pnpm install --shamefully-hoist
```

## Development

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
