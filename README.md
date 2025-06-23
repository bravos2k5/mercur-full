# Mercur CLI Guide

## Installation

Run docker compose:

```bash
docker compose up -d
```

Run db migration:

```bash
cd mercur/backend/apps/backend && yarn db:migrate
```

Install Mercur CLI globally using npm:

```bash
npm i -g mercur-cli
```

## Development

To start the development server, run:

```bash
mercur-cli dev
```

This will launch the development environment for your Mercur project.
