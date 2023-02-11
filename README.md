# Nuxt 3 + Quasar 2.x - Minimal Starter (⚠️WIP⚠️)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/piscis/nuxt-quasar-boilerplate)

Hello there and thank you for the interrest in this boilerplate repo. I have to mention that this is still a **⚠️work in progress⚠️.** Integrating Quasar 2.x + Nuxt3 in an SSR environment takes a lot of effort esspecially because Quasar ships their own SSR version and is not compatible with nuxt3 out of the box.

Also have a look at this [ticket](https://github.com/quasarframework/quasar/issues/11165) about the potention native support of nuxt3 with quasar.

**Demo:** https://nuxt3-quasar.piscis.io/

Any way since I switched over the fake-dom plugin to `happy-dom` instead of `JSDOM` all rehydration errors caused through the missing intersection observer api's in jsdom are gone. So test this carefully but SSR for complicated layouts should be possible now!!!!

I recommend to look at the [documentation](https://v3.nuxtjs.org).

## Prerequisits

- PNPM >= 7.x
- NodeJS 18.x

## Setup

Make sure to install the dependencies

```bash
pnpm install
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

## Run test

```bash
pnpm test:watch
```

## Fix markup

```bash
pnpm lint:fix
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).
