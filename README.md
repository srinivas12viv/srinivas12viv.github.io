# Srinivas Vivek Bokkisa — Academic Website

A responsive, dependency-free academic website for the existing GitHub Pages repository at https://srinivas12viv.github.io/.

## Editing

- `index.html`: research, publications, software, teaching, background, and contact content.
- `styles.css`: responsive layout, typography, and colors.
- `script.js`: accessible mobile navigation, section highlighting, and footer year.
- `assets/profile.jpg`: profile photograph.
- `assets/favicon.svg`: browser icon.

Content is summarized from the supplied CV and LaTeX source, with a general research profile rather than application-specific wording. Update publication statuses when they change; the CPT article is labeled accepted, with its preprint linked.

## CV handling

The website has no CV links or downloads. `_config.yml` excludes `assets/Vivek_CV.pdf`, `assets/Vivek_CV.tex`, and `assets/text` from the standard GitHub Pages Jekyll build while retaining the local reference files.

Use the standard GitHub Pages **Deploy from a branch** build with this configuration. Do not add `.nojekyll` or deploy the repository root through a raw static-upload workflow: those approaches bypass the exclusions. For custom deployment, explicitly omit the reference files from the uploaded artifact.

These exclusions take effect after deployment. They do not remove copies from repository history, a public source repository, or earlier downloads. Keep institution-specific CV versions outside a public repository if they should remain private.

## Preview and publish

No installation or build is required. For local preview, serve a temporary directory containing only `index.html`, `styles.css`, `script.js`, `assets/profile.jpg`, and `assets/favicon.svg`. Run `python -m http.server 8000` from that directory and open http://localhost:8000.

Commit and push changes to the Pages branch to publish. The standard Pages build reads `_config.yml` and omits the reference documents. After deployment, verify the former `/assets/Vivek_CV.pdf` URL returns 404.
