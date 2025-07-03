# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ee7d3192-a05e-45e6-a258-99cc4fc65aad

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ee7d3192-a05e-45e6-a258-99cc4fc65aad) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Here's how it works:

1. **Automatic Deployment**: Every push to the `main` branch triggers a GitHub Actions workflow that builds and deploys the site.

2. **Manual Deployment**: You can also manually trigger a deployment by going to the Actions tab in your GitHub repository and running the "Deploy to GitHub Pages" workflow.

3. **Local Build Test**: To test the build locally before pushing:
   ```sh
   npm install
   NODE_ENV=production npm run build
   ```

4. **Repository Settings**: Make sure GitHub Pages is enabled in your repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (this will be created automatically by the workflow)

5. **Access Your Site**: Once deployed, your site will be available at:
   `https://yourusername.github.io/casino-code-forge/`

### Alternative: Lovable Deployment

You can also deploy directly through [Lovable](https://lovable.dev/projects/ee7d3192-a05e-45e6-a258-99cc4fc65aad) by clicking on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
