# Assessment Talentlytica

A lightweight React + TypeScript application built with Vite. This repository is intended as a technical test that showcases a simple student assessment UI where scores can be set per aspect and exported as structured JSON.

## Overview

- Purpose: Technical test to implement an assessment page for students with multiple scoring aspects.
- Key features:
  - Dynamic table with rows per student and columns per assessment aspect
  - Controlled inputs with memoized state updates to minimize re-renders
  - JSON output generation on save

## Technologies

- Vite (build tooling and dev server)
- React (UI library) + TypeScript
- Tailwind CSS (utility-first styling)

## Prerequisites

- Node.js 20.19+ or 22.12+ (Vite requirement)
- npm (or your preferred package manager)

If you are on Node 20.17 (or older), please upgrade to at least 20.19 to avoid warnings/errors.

## Getting Started (Development)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser (Vite will print the URL, commonly http://localhost:5173).

## Build for Production

1. Create an optimized production build:

   ```bash
   npm run build
   ```

   The output will be generated in the `dist/` directory.

2. Preview the production build locally (optional):

   ```bash
   npm run preview
   ```

## Project Scripts

- `npm run dev` – Start Vite dev server with HMR
- `npm run build` – Build the app for production into `dist/`
- `npm run preview` – Preview the production build locally

## Notes

- Tailwind utility classes are used throughout the UI. Ensure your editor has Tailwind IntelliSense for the best DX.
- The app state and components have been optimized to reduce unnecessary re-renders using `React.memo`, `useMemo`, and `useCallback` where appropriate.
