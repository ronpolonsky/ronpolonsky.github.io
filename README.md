# Ron Polonsky’s website

A dependency-free personal website for GitHub Pages with an original academic portfolio layout.

## Content

Edit `content.js` to add your biography, photo path, contact links, research, education, and experience. Put photos, research thumbnails, and your CV in `assets/`. The comments in that file describe each entry’s fields. Research filters are generated automatically from paper tags. Community Service and Teaching appear once populated. Text fields accept plain text, not HTML.

This initial draft uses clearly marked empty states. It does not contain invented credentials, publications, or contact information. Replace the initials with your portrait by setting `portrait`.

Research metadata and thumbnails come from the two supplied papers: https://arxiv.org/abs/2607.27203 and https://arxiv.org/abs/2604.05087. The figures remain attributed to their respective papers through the adjacent links.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and visit http://localhost:8000.

## Publish on GitHub Pages

Push the files to the repository’s `main` branch. Under the repository’s **Settings → Pages**, select **Deploy from a branch**, then **main** and **/ (root)**. The expected URL is https://ronpolonsky.github.io/ once GitHub finishes deployment. No build step or package installation is required.
