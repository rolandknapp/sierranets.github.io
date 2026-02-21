# Sierra Nets — Static Site

Static site for [sierranets.com](https://sierranets.com), hosted on GitHub Pages.

## Repository Structure

```
/
├── index.html
├── style.css
├── main.js
├── images/
│   ├── hero-bg.jpg                  ← hero background (see below)
│   ├── mesa_panorama_evening6.jpg   ← About section photo
│   ├── 10319_pano.jpg               ← Our Nets section photo
│   └── 70571_pano.jpg               ← Purchase section photo
└── docs/
    └── Gillnet_Specifications_15Feb2019.pdf
```

## Required Media Files (see below)

You need to supply the following files before the site is complete:

| File | Source |
|------|--------|
| `images/hero-bg.jpg` | Any suitable Sierra Nevada/lake photo for the full-screen hero |
| `images/mesa_panorama_evening6.jpg` | From `sierranets.com/wp-content/uploads/2019/02/mesa_panaroma_evening6.jpg` |
| `images/10319_pano.jpg` | From `sierranets.com/wp-content/uploads/2019/02/10319_pano.jpg` |
| `images/70571_pano.jpg` | From `sierranets.com/wp-content/uploads/2019/02/70571_pano.jpg` |
| `docs/Gillnet_Specifications_15Feb2019.pdf` | From `sierranets.com/wp-content/uploads/2019/05/Gillnet_Specifications_15Feb2019.pdf` |

## GitHub Pages Setup

1. Create a new **public** GitHub repository (e.g., `sierranets`).

2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial static site"
   git remote add origin https://github.com/YOUR_USERNAME/sierranets.git
   git push -u origin main
   ```

3. In the repository on GitHub, go to **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
   - Click **Save**.

4. GitHub will publish the site at `https://YOUR_USERNAME.github.io/sierranets/`.

## Custom Domain (sierranets.com)

To keep the `sierranets.com` domain:

1. Create a file named `CNAME` in the repo root containing just:
   ```
   sierranets.com
   ```
   (This repo already includes it.)

2. At your DNS registrar, update the DNS records for `sierranets.com`:
   - Add four **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME record** for `www` pointing to `YOUR_USERNAME.github.io`.

3. Back in GitHub **Settings → Pages**, enter `sierranets.com` as the custom domain and enable **Enforce HTTPS** once the certificate provisions (usually within minutes).

DNS propagation can take up to 48 hours, but is usually much faster.
