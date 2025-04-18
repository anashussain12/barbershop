# Adding Images to Royal Barber Website

This guide explains how to add the required images to the Royal Barber website.

## Option 1: Download Sample Images

We've provided a script that will download sample images from Unsplash for you to use as placeholders:

```bash
# Navigate to the project directory
cd /Users/mac/Desktop/alpha/barber-app

# Run the download script
node scripts/download-sample-images.js
```

This will download sample images to the `/public` directory.

## Option 2: Add Your Own Images

For a more personalized look, you can add your own images:

1. Prepare the following images:
   - `hero-barber.jpg` - Main hero image (1920x1080px recommended)
   - `dubai-barber.jpg` - Dubai location image (800x1200px recommended)
   - `sharjah-barber.jpg` - Sharjah location image (800x1200px recommended)
   - `ajman-barber.jpg` - Ajman location image (800x1200px recommended)
   - `testimonial-avatar.jpg` - Client avatar (400x400px recommended)
   - `texture-bg.jpg` - Subtle background texture (500x500px recommended)

2. Place all images in the `/public` directory of the project.

## Image Guidelines

- Use high-quality, professional images that match the premium feel of the website
- Ensure consistent lighting and style across all location images
- Consider the teal/blue color scheme when selecting or editing images
- Optimize images for web to ensure fast loading times

## Fallback Behavior

The website includes fallback gradients that will display if any images fail to load, ensuring the site always looks good even without all images in place.