# Project Requirements Document: Static Knowledge Base

**Version:** 1.0
**Type:** Static Site (SSG)
**Status:** In Development

## 1. Project Overview

A lightweight, static documentation/content site containing 100–1,000 pages. The site relies on a "Zero-Backend" architecture, using static JSON files as the database and Client-Side JavaScript for interactivity.

## 2. Tech Stack

- **Generator:** Eleventy (11ty) v3.0+
- **Language:** Nunjucks (.njk), HTML, Vanilla JavaScript.
- **Styling/UI:** Graffiti (Scott Tolinski's Library).
- **Search Engine:** Fuse.js (Client-side fuzzy search).
- **Data Source:** Local JSON files located in `src/_data/`.
- **Hosting:** Netlify / Vercel (Static output).

## 3. Data Structure

All content is stored in JSON arrays.
**Required Fields per Page Object:**

- `slug` (String, Unique): URL identifier (e.g., "my-page").
- `title` (String): Page display title.
- `content` (HTML String): The body content.
- `tags` (Array of Strings): e.g., ["tutorial", "basics"].
- `category` (String): Broad grouping.
- `level` (String): e.g., "Beginner", "Advanced".

## 4. Key Features

- **Static Generation:** All content pages are pre-rendered at build time.
- **Search Index:** A `search-index.json` file is generated at build time containing metadata (no content body) for all pages.
- **Client-Side Search:** The landing page fetches the index and uses Fuse.js to filter results in real-time by Title, Tag, or Category.
