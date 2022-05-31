# piontapark.it

Website of the Pionta park, in Arezzo.
## Installation

This project requires Node.js 16.14 to be built.

All dependencies required for building and deploying this project can be installed with this command:

```sh
npm install
```

## Configuration

This project is a [Flareact](https://flareact.com/) Single Page Application hosted on [Cloudflare Workers](https://workers.cloudflare.com/).

In order to deploy the project to Cloudflare you will need [wrangler](https://www.npmjs.com/package/@cloudflare/wrangler) **version 1**, namely the Cloudflare Workers CLI. This CLI is already declared as a dev dependency, so you will not need to install it separately. However, you will need to configure wrangler to deploy the project to the correct Cloudflare account. Authorize the wrangler CLI to deploy the project to Cloudflare:

```sh
npx wrangler login
```

## Development

In order to develop locally you can run this command:

```sh
npm run dev
```

## Deploy

Build all production assets with this command:

```sh
npm run build
```

And deploy to Cloudflare both the frontend and the backend with this command:

```sh
npm run deploy
```
