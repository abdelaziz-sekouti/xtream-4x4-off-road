// Example usage of Parallax component with different image sources

import { Parallax, ParallaxSection } from "@/components/ui/Parallax";

// Method 1: Import from src/assets (recommended for parallax images)
import desertBackground from "@/assets/background.jpg";
import mountainBackground from "@/assets/images/mountains.jpg";

// Method 2: Use public folder images (for larger files or dynamic loading)
const publicImage = "/images/hero-background.jpg";

// Example usage in a component:
export const ExampleParallaxUsage = () => {
  return (
    <>
      {/* Full parallax section with imported image */}
      <ParallaxSection
        backgroundImage={desertBackground}
        height="h-screen"
        overlay={true}
        speed={0.3}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Desert Adventure</h1>
          <p className="text-xl mt-4">Experience the Sahara like never before</p>
        </div>
      </ParallaxSection>

      {/* Parallax section with public folder image */}
      <ParallaxSection
        backgroundImage={publicImage}
        height="h-screen"
        overlay={false}
        speed={0.5}
      >
        <h2>Custom Background</h2>
      </ParallaxSection>

      {/* Basic parallax wrapper */}
      <Parallax speed={0.2}>
        <img
          src={mountainBackground}
          alt="Mountain landscape"
          className="w-full h-screen object-cover"
        />
      </Parallax>
    </>
  );
};