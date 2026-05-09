import { useEffect, useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({ children, speed = 0.5, className = "" }: ParallaxProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={parallaxRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
};

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  height?: string;
  overlay?: boolean;
  speed?: number;
}

export const ParallaxSection = ({
  backgroundImage,
  children,
  height = "h-screen",
  overlay = true,
  speed = 0.5
}: ParallaxSectionProps) => {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      <Parallax speed={speed}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </Parallax>

      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};