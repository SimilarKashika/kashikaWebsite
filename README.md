# Advocate Kashika — Website

A single-page React site: profile, practice areas, chamber address, and
contact details (phone + email — no forms). Built with React + Vite.

## Run it locally

You'll need [Node.js](https://nodejs.org) (v18 or later) installed.

```bash
npm install
npm run dev
```

Then open the local address it prints (usually `http://localhost:5173`).

## Put it online (free options)

The easiest way is **Netlify** or **Vercel** — both have a free tier and
take about five minutes:

1. Create a free account at [netlify.com](https://netlify.com) or
   [vercel.com](https://vercel.com).
2. Run `npm run build` — this creates a `dist` folder.
3. Drag and drop the `dist` folder onto Netlify's "Deploy" page (or connect
   your GitHub repo for automatic deploys on Vercel/Netlify).
4. You'll get a live link like `advocate-kashika.netlify.app`, and can
   later connect your own domain name from their dashboard.

## Adding your photograph

Open `src/App.jsx` and find this block (inside the `hero-figure` section):

```jsx
<div className="id-card-photo">
  <span className="id-initials">AK</span>
  <span className="id-caption">Affix Photograph</span>
</div>
```

Replace it with an `<img>` tag pointing at your photo (place the image
file in the `src/assets` folder first):

```jsx
<div className="id-card-photo">
  <img src="/src/assets/your-photo.jpg" alt="Advocate Kashika" />
</div>
```

Then in `src/App.css`, add this so the photo fills the frame:

```css
.id-card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Editing text

All copy (name, practice areas, chamber address, phone, email) lives in
`src/App.jsx` — search for the text you want to change and edit it
directly.

## Files

```
index.html          Page shell + Google Fonts
src/main.jsx         React entry point
src/App.jsx           Page content and structure
src/App.css           All styling
src/index.css          Base reset
```
"# kashikaWebsite" 
"# kashikaWebsite" 
