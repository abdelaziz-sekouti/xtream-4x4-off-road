import { useEffect, useRef } from "react";

interface ParallaxProps {
  backgroundImage: string;
  children: React.ReactNode;
  speed?: number;
  height?: string;
  overlay?: boolean;
}

export const Parallax = ({
  backgroundImage,
  children,
  speed = 0.5,
  height = "h-screen",
  overlay = true
}: ParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  console.log('Parallax component rendered with:', { backgroundImage, speed, height, overlay });

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed; // Negative for upward movement
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
        console.log('Parallax scroll applied:', rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section className={`relative ${height} overflow-hidden bg-blue-500`}>
      {/* Debug: Make sure component renders */}
      <div className="absolute top-4 left-4 bg-white p-2 text-black text-sm z-50">
        Parallax Component Active
      </div>

      {/* Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};