# Agents

This document explains the project, its structure, and how to work on it. It also defines agent roles and skills for Claude and Codex.

## Project Overview

I Know My Own LLM is a Nuxt 3 site for a community manifesto on evaluating AI platforms. The site renders content from Markdown and CSV sources, and ships as a static site.

Core goals:
- Publish the manifesto, principles, and red flags.
- Make signing and sharing easy.
- Keep content community-editable through simple files.

## Structure

Top-level:
- pages/: Nuxt route pages (home, resources).
- layouts/: Shared layout (navigation/footer).
- public/: Static assets and signatures.csv.
- assets/: Global CSS and media.
- PRINCIPLES.md: Source for the principles list.
- RED_FLAGS.csv: Source for the red flags grid.
- SIGNATORIES.md: Signing instructions and list.
- README.md, CONTRIBUTING.md: Project documentation.

Content flow:
- Home page reads PRINCIPLES.md and RED_FLAGS.csv at build time.
- Signatures load from public/signatures.csv at runtime.

## How To Work Here

Common tasks:
- Update principles: edit PRINCIPLES.md.
- Update red flags: edit RED_FLAGS.csv.
- Update site copy or layout: edit pages/index.vue or layouts/default.vue.
- Update styles: edit assets/css/main.css or component-scoped styles.

Run locally:
- npm install
- npm run dev

Build and preview:
- npm run generate
- npm run preview

## Where To Change What

Homepage content:
- pages/index.vue

Principles list:
- PRINCIPLES.md

Red flags data:
- RED_FLAGS.csv

Signature list:
- public/signatures.csv

Navigation and footer:
- layouts/default.vue

Global styles:
- assets/css/main.css

## Agents

### Claude Agent

Role:
- Product and content editor.
- Documentation and copy updates.
- Information architecture and UX review.

Skills:
- Rewrite and tone alignment.
- Doc updates and cleanup.
- Structure proposals for content.
- Consistency checks across docs.

### Codex Agent

Role:
- Code and build changes.
- Nuxt/Vue updates.
- Styling and layout fixes.

Skills:
- Vue/Nuxt editing.
- CSS adjustments.
- Data parsing updates.
- Build and runtime debugging.

## Conventions

- Keep edits minimal and scoped.
- Prefer updating existing files over adding new ones.
- Keep data files simple and machine-readable.
- Validate that the site builds after structural changes.
