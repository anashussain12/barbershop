const fs = require('fs');
const path = require('path');
const https = require('https');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Sample image URLs (replace these with actual URLs when available)
const images = [
  // Hero Images
  {
    name: 'hero-barber.jpg',
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1920&auto=format&fit=crop',
    description: 'Hero image for the main page'
  },
  {
    name: 'dubai-location-hero.jpg',
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1920&auto=format&fit=crop',
    description: 'Hero image for Dubai location page'
  },
  
  // Location Images
  {
    name: 'dubai-barber.jpg',
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop',
    description: 'Dubai location image'
  },
  {
    name: 'sharjah-barber.jpg',
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
    description: 'Sharjah location image'
  },
  {
    name: 'ajman-barber.jpg',
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    description: 'Ajman location image'
  },
  
  // Barber Images
  {
    name: 'barber-ahmed.jpg',
    url: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=800&auto=format&fit=crop',
    description: 'Barber Ahmed'
  },
  {
    name: 'barber-malik.jpg',
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
    description: 'Barber Malik'
  },
  {
    name: 'barber-rashed.jpg',
    url: 'https://images.unsplash.com/photo-1618499454224-b6e8a0ebe07e?q=80&w=800&auto=format&fit=crop',
    description: 'Barber Rashed'
  },
  
  // Other Images
  {
    name: 'testimonial-avatar.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    description: 'Testimonial avatar image'
  },
  {
    name: 'texture-bg.jpg',
    url: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=500&auto=format&fit=crop',
    description: 'Background texture'
  },
  {
    name: 'dubai-map.jpg',
    url: 'https://images.unsplash.com/photo-1576182767835-9decba13d0a1?q=80&w=800&auto=format&fit=crop',
    description: 'Dubai location map'
  }
];

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(publicDir, filename));
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(publicDir, filename), () => {}); // Delete the file if there's an error
      console.error(`❌ Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('🔄 Starting download of sample images...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`Failed to download ${image.name}`);
    }
  }
  
  console.log('✨ All downloads completed!');
  console.log('📁 Images saved to: ' + publicDir);
}

downloadAllImages();