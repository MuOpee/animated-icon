interface ImageProperties {
src: string;
alt: string;
width: number;
height: number;
}

function createAndAnimateImage(imageProps: ImageProperties): void {
  // Create the image element
  const img = document.createElement('img');
img.src = imageProps.src;
img.alt = imageProps.alt;
img.width = imageProps.width;
img.height = imageProps.height;
// Apply circular cropping and animation class
img.style.borderRadius = '50%';
img.classList.add('animate-border');

document.body.appendChild(img);
}

createAndAnimateImage({
src: 'https://cdn.hero.page/pfp/f6335fbf-f981-4977-819d-9acce79d748c-tokyo-ghoul's-kaneki-ken-ultra-hd-anime-pfp-1.png',
alt: 'A square image',
width: 200,
height: 200
});

const style = document.createElement('style');
style.textContent = `
  @keyframes pulse-border {
    0% { box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); }
    100% { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
  }

  .animate-border {
    animation: pulse-border 2s infinite;
  }
`;
document.head.appendChild(style);
