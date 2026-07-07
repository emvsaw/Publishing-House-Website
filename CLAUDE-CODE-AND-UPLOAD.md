# 🅱️ Path B: Claude Code + Upload to Your Host

### Customize your site locally, preview it in your browser, then upload the finished files to your web host.

This is the simpler of the two paths. No GitHub, no auto-deploy. You make changes, you upload files, you're live. Great for students who already have a web host.

---

## 🎯 What You'll End Up With

A real, live author website on your own domain (`yourdomain.com`), hosted wherever you already host (Bluehost, SiteGround, GoDaddy, HostGator, DreamHost, etc.).

---

## 📋 What You Need

| Item | Why |
|------|-----|
| Your web host login | You already have one — cPanel, FTP, or similar |
| Your **domain name** | Already pointed at your host |
| **Node.js** (free, one-time install) | Runs the build step |
| **Claude Code** (free) | Customizes your site |
| **MailerLite** account (free) | For your newsletter, set up later |

---

## ⏱️ Estimated Time

- **First-time setup:** 20 minutes
- **Each update later:** 5 minutes (edit, build, upload)

---

# 🚀 Setup Steps

## Step 1️⃣  Move This Folder to Your Desktop

1. Find the unzipped folder (probably in Downloads).
2. **Drag it to your Desktop.**
3. Rename it to something you'll remember — `my-author-site` works fine.

---

## Step 2️⃣  Install Node.js

Node.js is what builds the website files you'll upload. One-time install, then forget about it.

1. Go to 👉 [**nodejs.org**](https://nodejs.org)
2. Click the big green **LTS** button to download
3. Install like any other app (accept all defaults)

---

## Step 3️⃣  Install Claude Code

1. Go to 👉 [**docs.claude.com/claude-code**](https://docs.claude.com/claude-code)
2. Follow the install instructions for your operating system (Mac or Windows).
3. You'll need to open **Terminal** (Mac) or **PowerShell** (Windows) **once** to run the install command.

> 💡 Don't let "terminal" scare you off. After Claude Code is installed, you only type **one word** (`claude`) to launch it. After that, you're just chatting — no more commands.

**How to open Terminal/PowerShell:**
- **Mac:** Press `⌘ + Space`, type `Terminal`, press Enter
- **Windows:** Press the Windows key, type `PowerShell`, press Enter

---

## Step 4️⃣  Launch Claude Code in Your Project Folder

Still in Terminal/PowerShell, type these two lines (press Enter after each):

**Mac:**
```
cd ~/Desktop/my-author-site
```
```
claude
```

**Windows:**
```
cd C:\Users\YOUR_USERNAME\Desktop\my-author-site
```
```
claude
```

You'll see Claude Code's welcome screen. **Leave this window open** — from here on, you just type messages.

---

## Step 5️⃣  Install the Site Dependencies

Paste this into Claude Code and press Enter:

```
I've just opened the Author Website Template. Please install the
dependencies so I can start working on my site.
```

Wait ~30 seconds while Claude runs `npm install`.

---

## Step 6️⃣  Preview the Site in Your Browser

Tell Claude:

```
Start the dev server so I can preview the site.
```

Claude will give you a local URL like `http://localhost:4321/`. **Click it** — your site opens in your browser with all three example pen names.

**This is your live preview.** Anytime you make a change, it auto-refreshes in the browser.

> 💡 Leave the preview open in one browser tab while you work with Claude in the Terminal window. You'll see every change immediately.

---

# 🎨 Customize Your Site

Now the fun part. Here are example messages to paste into Claude Code:

### Replace an example pen name with yours

```
Replace the "Kate Thomas" example with my own pen name:
- Pen name: [Your Pen Name]
- Slug (lowercase with hyphens): [your-pen-name]
- Genre: [Your Genre]
- Bio: "[Your bio — 2-3 sentences]"
- Instagram: [URL or "none"]
- Amazon author page: [URL or "none"]

Delete the Kate Thomas content file and replace it with mine.
Rename the Kate Thomas author page to match my slug.
Update all references.
```

### Add your book covers

1. Drag your cover images into `public/images/covers/[your-pen-name]/` using Finder (Mac) or File Explorer (Windows). Create the folder first if needed — right-click inside `covers` and pick "New Folder".
2. Tell Claude:

```
I've added my covers to public/images/covers/[your-pen-name]/.
The files are:
- [Book-Title-1].png  — Blurb: "[blurb]" — Released [date]
- [Book-Title-2].png  — Blurb: "[blurb]" — Released [date]
- [Book-Title-3].png  — Blurb: "[blurb]" — Released [date]

All [Your Genre]. Create book content files for each.
```

### Change the color scheme

```
Change the color scheme on [your-pen-name]'s page to match [genre].
I want [describe — e.g., "soft pinks with rose gold accents"
or "dark and moody with silver"].
```

### Connect your newsletter (MailerLite)

```
I have a MailerLite account. My account ID is [YOUR_NUMBER]
and my form action URL is:
[YOUR_MAILERLITE_FORM_URL]

Please update all the newsletter forms on [pen name]'s page to use this.
```

> Need more examples? Open **`Author-Website-Builder-Guide.docx`** — it has copy-paste prompts for every page type, plus color schemes by genre.

---

# 📦 Build Your Site for Upload

Once your site looks exactly how you want it (check your preview at `http://localhost:4321`), tell Claude:

```
Please build my site for production and zip the dist folder
so I can upload it to my web host.
```

Claude will:
1. Run `npm run build` — creates a `dist/` folder with all your final static HTML/CSS/images
2. Zip it up
3. Tell you where to find the zip file (it'll be in your project folder on the Desktop)

✅ That zip file is what you upload to your host.

---

# 🌐 Upload to Your Host

### Option 1: cPanel File Manager (most common)

Most web hosts (Bluehost, SiteGround, HostGator, GoDaddy, DreamHost) give you cPanel:

1. Log into your host's **cPanel**.
2. Click **File Manager**.
3. Navigate to **`public_html`** (sometimes called `www` or `htdocs`).
4. **Back up** anything already there if you care about it.
5. Delete the old `index.html` and any existing site files (optional — only if you want a clean slate).
6. Click **Upload** at the top of the File Manager.
7. Upload the **zip file** Claude created.
8. After it uploads, right-click the zip file → pick **Extract**.
9. If the extracted files are inside a `dist/` subfolder, move them up one level into `public_html` directly. (Your `index.html` should be at the top level of `public_html`, not inside another folder.)
10. Visit your domain — **your site is live!** 🎉

### Option 2: FTP (works with any host)

1. Download **FileZilla** (free) from 👉 [filezilla-project.org](https://filezilla-project.org)
2. Install and open it.
3. Enter your FTP details (your host provides these — host name, username, password, port).
4. On the left side, navigate to your `dist` folder on your computer.
5. On the right side, navigate to the `public_html` folder on your host.
6. **Select everything inside `dist/`** (not the folder itself — the files inside) and drag them to the right side.
7. Wait for uploads to finish.
8. Visit your domain — live! 🎉

---

# 🔁 Making Updates Later

Every time you want to change something on your site:

1. **Launch Claude Code** — open Terminal, type `cd ~/Desktop/my-author-site` then `claude`
   *(or use the desktop shortcut below to skip this)*
2. **Tell Claude** what to change — you'll see it update in your browser preview live
3. **Rebuild + zip** when you're happy with it:
   ```
   Rebuild my site and create a fresh zip of the dist folder.
   ```
4. **Re-upload** the new files to your host (Option 1 or Option 2 above)

Total time: usually under 5 minutes per update.

---

# 💡 Pro Tip: Desktop Shortcut

To launch Claude Code in your project with a single double-click instead of typing commands:

### Mac — create `open-my-site.command` on your Desktop:

1. Open **TextEdit**, paste this (replace with your actual folder path):
   ```
   cd ~/Desktop/my-author-site
   claude
   ```
2. Save it on your Desktop as `open-my-site.command` (make sure the `.command` extension is included, not `.txt`).
3. Open Terminal one time and run:
   ```
   chmod +x ~/Desktop/open-my-site.command
   ```
4. From now on, double-click the file to open Claude Code. Done.

### Windows — create `open-my-site.bat` on your Desktop:

1. Open **Notepad**, paste (replace with your username and path):
   ```
   cd C:\Users\YOUR_USERNAME\Desktop\my-author-site
   claude
   ```
2. Save As → set "Save as type" to **All Files** → name it `open-my-site.bat`.
3. From now on, double-click to open Claude Code.

---

# 🆘 Troubleshooting

### "npm install failed"
Tell Claude: *"Please try running npm install again."* Usually works on retry.

### "I uploaded the zip but my domain shows 'index of /' or a file list"
You forgot to **extract** the zip on the server, OR the extracted files ended up inside a `dist/` subfolder. Your `index.html` needs to be at the top level of `public_html`.

### "My site loads but clicking links shows 404 errors"
Some hosts need an `.htaccess` file to handle clean URLs. Tell Claude: *"My host needs an `.htaccess` file for the Astro site to handle subpages. Please create one and add it to the dist folder before rebuilding."*

### "The build failed"
Paste the error into Claude: *"The build failed. Here's the error: [paste it]. Please fix it."*

### "I want to undo a change"
Tell Claude: *"Undo the last change you made."*

---

# 📂 Where Everything Lives

| Folder / File | What It Is |
|---|---|
| `src/content/authors/` | Your author profiles (one file per pen name) |
| `src/content/books/` | Your book listings (one file per book) |
| `public/images/authors/` | Your author photos |
| `public/images/covers/` | Your book covers |
| `dist/` | ⬅ **The folder you upload** (created when you build) |
| `Author-Website-Builder-Guide.docx` | Full detailed guide with all prompts |

---

# Ready? Start with Step 1 above. 🚀

*Whenever you're stuck, just ask Claude Code what to do. Describe the situation in plain English.*
