# Tyler Hwang — Portfolio

Personal portfolio site. React + TypeScript + Vite, styled with Tailwind CSS v4. Static, no backend, no animation libraries.

## Local development

Requires Node 20+.

```bash
npm install
npm run dev       # http://localhost:5173 with hot reload
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build at http://localhost:4173
npm run lint      # ESLint
```

## Editing content

**All content lives in [`src/data/content.ts`](src/data/content.ts).** You should never need to touch a component to update the site.

- `profile`: name, tagline, email, GitHub, LinkedIn, resume path
- `projects`: rendered in array order
- `experience`: rendered in array order (put the newest first)
- `skills`: each group becomes a labeled row of tags
- `education`: school, degree, graduation date, coursework, activities

The shape of each entry is defined in [`src/types.ts`](src/types.ts), so TypeScript will flag typos or missing fields when you run `npm run build`.

**Empty links are hidden automatically.** Set `github: ''`, `demo: ''`, or `linkedin: ''` and the matching button disappears. Search `content.ts` for `TODO` to find the links that still need filling in.

**Hackathon badge:** set `hackathon: 'Event Name 2026'` on a project to show the badge and a "Built at …" line. Remove the field to hide both.

**Resume:** put your PDF at `public/resume.pdf`. It's served at `/resume.pdf`. To hide the Resume buttons, set `resume: ''`.

## Adding project screenshots

1. Save the image in `public/screenshots/`, e.g. `public/screenshots/rankup.png`.
   - A 16:9 image works best; 1280×720 is plenty.
   - Compress it first (e.g. [squoosh.app](https://squoosh.app), export as WebP) to keep the page fast.
2. In `content.ts`, set the path (without `public/`) and describe the image:
   ```ts
   image: '/screenshots/rankup.webp',
   imageAlt: 'Rankup dashboard showing a round-by-round mistake timeline',
   ```

Projects without an `image` show a clean placeholder tile with the project's initials.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. At [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects Vite automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Click **Deploy**. Every push to `main` redeploys, and pull requests get preview URLs.

**After the first deploy, update the site URL.** The social preview tags need an absolute URL. They currently use the placeholder `https://tylerhwang.vercel.app`; replace it with your real domain in:

- `index.html` (`og:url`, `og:image`, `twitter:image`, `canonical`)
- `public/robots.txt`
- `public/sitemap.xml`

You can check the preview card afterwards at [opengraph.xyz](https://www.opengraph.xyz).

## Project structure

```
public/            static files served as-is (favicon, og-image, resume, screenshots, robots.txt)
src/data/content.ts   all site content
src/types.ts          content types
src/components/       Header, Hero, Projects/ProjectCard, Experience, Skills, Footer, shared bits
src/hooks/useTheme.ts light/dark theme (saved choice → system preference → dark)
src/index.css         color tokens for both themes + Tailwind setup
```

**Changing the accent color:** edit `--accent` in `src/index.css`. There are separate values for light and dark mode, so check that both still have good contrast.
