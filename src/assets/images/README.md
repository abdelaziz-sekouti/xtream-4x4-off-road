# Parallax Component - Background Image Storage Guide

## Where to Store Background Images

### Option 1: `src/assets/images/` (Recommended)
- **Best for**: Parallax images, icons, and frequently used images
- **Benefits**: Images are bundled, optimized, and can be imported
- **Usage**: Import images and pass to parallax component

```typescript
// In your component:
import desertBg from "@/assets/images/desert-background.jpg";
import mountainBg from "@/assets/images/mountain-background.jpg";

<ParallaxSection backgroundImage={desertBg} />
```

### Option 2: `public/images/` (Alternative)
- **Best for**: Large background images, user-uploaded content
- **Benefits**: Direct access via URL, no bundling required
- **Usage**: Reference with absolute paths

```typescript
// Reference directly in component:
<ParallaxSection backgroundImage="/images/hero-background.jpg" />
```

## Image Recommendations for Parallax

### File Format
- **JPEG**: Best for photographs and complex scenes
- **WebP**: Modern format with better compression
- **PNG**: For images with transparency

### Image Size
- **Resolution**: 1920x1080px minimum for full-screen parallax
- **File Size**: Optimize to under 500KB for web performance
- **Aspect Ratio**: 16:9 works best for full-screen sections

### Naming Convention
```
desert-parallax.jpg
mountain-background.webp
sahara-dunes.png
atlas-mountains-hero.jpg
```

## Example Usage

```tsx
import { ParallaxSection } from "@/components/ui/Parallax";
import desertBg from "@/assets/images/desert-parallax.jpg";

export const HeroSection = () => (
  <ParallaxSection
    backgroundImage={desertBg}
    height="h-screen"
    overlay={true}
    speed={0.4}
  >
    <h1>Welcome to the Sahara</h1>
  </ParallaxSection>
);
```

## Performance Tips

1. **Compress images** before adding to project
2. **Use WebP format** when possible
3. **Lazy load** large parallax sections
4. **Test on mobile** - parallax can impact performance on slower devices