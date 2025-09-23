# vista landing

Landing page built with Astro, React, and Tailwind CSS.

## Requirements

- Node.js 18+
- npm

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
```

Creates production build in `dist/` directory.

## Production

```bash
npm start
```

Serves the built application on port 4321.

## Deployment

### Node.js Server

1. Build the project: `npm run build`
2. Copy `dist/` folder to server
3. Install production dependencies: `npm ci --production`
4. Start: `node ./dist/server/entry.mjs`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY dist/ ./dist/
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
```


## Stack

- **Framework**: Astro 5
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Font**: Geist Variable
- **Deployment**: SSR with Node.js adapter
