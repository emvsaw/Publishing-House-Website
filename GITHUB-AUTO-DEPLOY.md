# 🅰️ Path A: GitHub Auto-Deploy

### The fully automated workflow — your site updates itself on the internet every time you make a change.

This path uses three friendly desktop apps — **no command-line, no terminal, no tech-speak**. Once set up, whenever you tell Claude Desktop to make a change, you click two buttons in GitHub Desktop and your live site auto-updates within ~90 seconds.

You'll customize everything for your pen names, books, and brand — the Kate Thomas, Madison Lane, and Briar Morgan examples in the template are just starting points.

---

## 🎯 What You'll End Up With

A real, live author website at a URL like `your-name.pages.dev`, with:
- A homepage showing all your books
- A beautiful dedicated page for each pen name
- Newsletter opt-in forms that connect to your MailerLite account
- Mobile-friendly, automatic updates whenever you make changes

---

## 📋 What You Need (All Free)

You'll install these three apps. Each one takes 2-5 minutes to set up. **Don't skip any** — each one does a specific job:

| App | What It Does |
|-----|--------------|
| **Claude Desktop** | This is where you'll *chat* to customize your site |
| **GitHub Desktop** | Saves your changes and uploads them to the internet (one click) |
| **Cloudflare Pages** | Hosts your website (free, auto-updates) |

You'll also need:
- A **GitHub account** (free — you'll create it in Step 2)
- A **Cloudflare account** (free — you'll create it in Step 5)
- A **MailerLite account** (free — for your newsletter, created later)

---

## ⏱️ Estimated Time: 30 minutes

---

# 🚀 Setup Steps

## Step 1️⃣  Move This Folder to Your Desktop

1. Find the folder you just unzipped (probably in Downloads).
2. **Drag it to your Desktop.**
3. Rename it if you want — something like `my-author-site` is fine.

---

## Step 2️⃣  Create a GitHub Account

GitHub is where your website's files will live. Think of it like Google Drive, but for websites.

1. Go to 👉 [**github.com**](https://github.com)
2. Click **Sign up**
3. Use your email, pick a username (e.g., `janesmith-writes`), and create a password
4. Verify your email when GitHub sends you a code

**That's it. You don't need to learn anything about GitHub.**

---

## Step 3️⃣  Install GitHub Desktop

GitHub Desktop is a friendly app that lets you save and upload changes with a click — no commands.

1. Go to 👉 [**desktop.github.com**](https://desktop.github.com)
2. Click the big download button for your computer (Mac or Windows)
3. Install it like any other app
4. When it opens, **sign in with the GitHub account you just created**

### Now add your project folder to GitHub Desktop:

1. In GitHub Desktop, click **File > Add Local Repository** (Mac) or **File > Add Local Repository** (Windows)
2. Click **Choose** and pick your folder on the Desktop
3. You'll see a message: "This directory does not appear to be a Git repository." — click **create a repository** in that message
4. A setup window appears. Fill in:
   - **Name:** whatever you want (e.g., `my-author-site`)
   - **Description:** "My author website" (optional)
   - Leave everything else at the defaults
5. Click **Create Repository**
6. Now click the big blue **Publish repository** button at the top
7. **Uncheck** "Keep this code private" if you want your site to build on Cloudflare's free plan (they need it public). Don't worry — people can see the files but it's a website template, not anything sensitive.
8. Click **Publish Repository**

✅ Your files are now saved to GitHub. You can close GitHub Desktop for now.

---

## Step 4️⃣  Install the Claude Desktop App

This is the magic part — where you'll tell Claude what to build and it'll edit files for you.

1. Go to 👉 [**claude.ai/download**](https://claude.ai/download)
2. Download the app for your computer (Mac or Windows)
3. Install it and sign in (or create a free Claude account)

### Now give Claude access to your project folder:

Claude needs permission to see and edit the files in your project. This is done with a "connector" (don't worry, it's a one-time setting).

1. In Claude Desktop, click your **profile picture** (top right) → **Settings**
2. In the sidebar, click **Connectors** (or **Developer** on some versions)
3. Find the **Filesystem** connector (or click "Add connector" and search for "Filesystem")
4. Click **Configure** or **Enable**
5. When asked for a folder path, select your project folder on the Desktop
6. Approve/allow access

✅ Now Claude can read and edit your project files.

> **Troubleshooting:** If you don't see a Filesystem connector, look for "**MCP Servers**" in settings. You can add one there called `filesystem` — Claude will guide you through it in chat if you ask: *"Help me enable the Filesystem connector for my project folder on the Desktop."*

---

## Step 5️⃣  Connect Cloudflare Pages (Free Hosting)

Cloudflare Pages will **automatically build and host your website** every time you save a change. You set this up once, then forget about it.

1. Go to 👉 [**cloudflare.com**](https://cloudflare.com) and click **Sign Up** (free)
2. After signing up, log in and click **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** tab → **Connect to Git**
4. Click **GitHub** and authorize Cloudflare to access your GitHub
5. Select your newly-created repository (the one you made in Step 3)
6. Click **Begin setup**
7. Fill in:
   - **Project name:** whatever you want (e.g., `my-author-site`) — this becomes your URL
   - **Production branch:** `main`
   - **Framework preset:** `Astro` (Cloudflare should auto-detect)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
8. Click **Save and Deploy**

Cloudflare will now install dependencies and build your site on their servers. Wait about 1–2 minutes.

When it finishes, you'll get a URL like:
👉 **`https://my-author-site.pages.dev`**

**Click it.** That's your live website. 🎉

---

## 🎨 Your First Edit

From now on, the whole workflow is:

### 1. Open Claude Desktop → Chat with Claude to make changes

Try this message:

```
I want to replace "Kate Thomas" in my author website with my
pen name. My pen name is [Your Pen Name], and I write [Your Genre].

Please update the author content file to use my info.
```

Claude will edit the files in your folder directly. **You don't need to save anything — Claude already did.**

### 2. Open GitHub Desktop → Click two buttons

1. You'll see a list of changed files on the left.
2. At the bottom, type a quick description like `"Updated author name"` and click **Commit to main**.
3. Click **Push origin** at the top.

✅ That's it. Two clicks, no typing commands.

### 3. Wait 1–2 minutes

Cloudflare automatically rebuilds your website and updates the live URL.

Refresh your site URL in the browser — **boom, your change is live**.

---

## 🔁 The Daily Workflow (memorize this)

Every time you want to change something on your site:

1. **Claude Desktop** → tell Claude what to change
2. **GitHub Desktop** → Commit + Push (two clicks)
3. **Wait ~90 seconds** → see it live at your URL

That's the whole thing. No terminal. No code. No stress.

---

## 🎨 Example Messages to Try

Paste any of these into Claude Desktop once you've got the setup above working:

### Replace an example pen name with your own

```
Replace the "Madison Lane" example in my author website with my own
pen name. Details:
- My pen name: [Your Pen Name]
- My slug (lowercase with hyphens): [your-pen-name]
- My genre: [Your Genre]
- My bio: "[Your bio — 2-3 sentences]"
- My Instagram: [URL]
- My Amazon author page: [URL]

Delete the Madison Lane content file and replace it with my info.
Rename the Madison Lane author page file to match my slug.
Update any references.
```

### Add your book covers

First, drag your cover image files into the folder at `public/images/covers/[your-pen-name]/`. You can do this in Finder/File Explorer like any other file.

Then in Claude Desktop:

```
I've added my book covers to public/images/covers/[your-pen-name]/.
The covers are:
- [Book-Title-1].png
- [Book-Title-2].png
- [Book-Title-3].png

Please create book content files for each one. Use these blurbs:
[paste each book title and its blurb]

All books are in the [Your Genre] genre and releaseDate should be today.
```

### Change the color scheme

```
Change the color scheme on [your-pen-name]'s page to match [Your Genre].
I want [describe the vibe, e.g., "soft pastels with rose gold accents"
or "dark and moody with silver accents"].
```

### Connect your newsletter

```
I have a MailerLite account. My account ID is [YOUR_NUMBER] and my
form action URL for [pen name] is:
[YOUR_MAILERLITE_FORM_URL]

Please update all the newsletter forms on [pen name]'s page to use this.
```

---

## 📖 Want More Detail?

Open **`Author-Website-Builder-Guide.docx`** in this folder. It's a full illustrated guide with:

- How to get your MailerLite account ID and form URL
- Detailed copy-paste prompts for **every** page type
- Color schemes by genre
- Full troubleshooting section
- Optional advanced setup (custom domain, etc.)

---

## 🆘 Help! Something Isn't Working

**For any issue**, just tell Claude Desktop what's wrong. Describe it in plain English:

- *"My site isn't updating after I pushed to GitHub. What should I check?"*
- *"The book cover isn't showing on the page. Here's the file path: [path]"*
- *"Cloudflare says the build failed. Can you look at the files and fix it?"*
- *"I want to undo the last change I made."*

Claude can look at your files, read error messages, and tell you what to do.

### Common issues

**"I don't see my changes on the live site"**
- Make sure you clicked **Commit** AND **Push** in GitHub Desktop (two separate clicks)
- Check Cloudflare Pages dashboard — is the build green/successful?
- Wait another minute and refresh the page (clear cache if needed)

**"Claude says it can't find the files"**
- The Filesystem connector may need to be reconfigured
- In Claude Desktop: Settings → Connectors → check Filesystem is pointing at the right folder

**"Cloudflare build failed"**
- Open the failed build in Cloudflare's dashboard, copy the error text
- Paste it to Claude Desktop: *"Cloudflare build failed. Here's the error: [paste]. Please fix it."*

---

## 📂 What's Inside This Folder

You don't need to understand any of this — **Claude edits the right files for you**. But if you're curious:

| Folder / File | What It Is |
|---|---|
| `START-HERE.md` | ← you're reading it |
| `Author-Website-Builder-Guide.docx` | Full detailed guide |
| `src/content/authors/` | Author profiles (one file per pen name) |
| `src/content/books/` | Book listings (one file per book) |
| `src/pages/` | The pages of your site |
| `public/images/` | Your author photos and book covers |

---

## ✨ One Last Tip

This template includes **three different author page styles** so you can pick what fits your brand:

1. **Kate Thomas** — Horizontal book carousel, orange theme (good for big backlists)
2. **Madison Lane** — Featured single-book hero, navy blue theme (good for highlighting one book)
3. **Briar Morgan** — Auto-sliding carousel, purple gradient (good for dramatic showcases)

Browse through the three sample pages on the live Cloudflare URL, pick your favorite, then ask Claude:

```
I like the [Kate Thomas / Madison Lane / Briar Morgan] page design.
Please use that same style for my pen name, [Your Pen Name].
```

---

# Ready? Go do Step 1 above. 🚀

*Every single problem has a Claude Desktop answer. If you're ever unsure, just ask Claude:*
*"How do I do [the thing]? I'm new to this."*

*Claude will walk you through it.*
