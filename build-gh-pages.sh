#!/bin/bash

# Build the project
NODE_ENV=production bun run build

# Copy 404.html to dist for GitHub Pages SPA support
cp public/404.html dist/404.html

echo "Build completed successfully for GitHub Pages deployment!"
