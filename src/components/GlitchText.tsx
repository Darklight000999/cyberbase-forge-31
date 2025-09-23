import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchOnHover?: boolean;
  continuous?: boolean;
}

const GlitchText = ({ 
  text, 
  className = '', 
  glitchOnHover = false, 
  continuous = false 
}: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  const glitchText = () => {
    const textArray = text.split('');
    const glitched = textArray.map(char => {
      if (char === ' ') return char;
      if (Math.random() > 0.7) {
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      return char;
    });
    return glitched.join('');
  };

  const performGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 8;

    const interval = setInterval(() => {
      if (iterations < maxIterations - 1) {
        setGlitchedText(glitchText());
      } else {
        setGlitchedText(text);
        setIsGlitching(false);
        clearInterval(interval);
      }
      iterations++;
    }, 50);
  };

  useEffect(() => {
    if (continuous) {
      const interval = setInterval(performGlitch, 3000 + Math.random() * 2000);
      return () => clearInterval(interval);
    }
  }, [continuous, text]);

  const handleHover = () => {
    if (glitchOnHover && !isGlitching) {
      performGlitch();
    }
  };

  return (
    <span
      className={`font-mono relative inline-block transition-all duration-100 ${
        isGlitching ? 'animate-glitch' : ''
      } ${className}`}
      onMouseEnter={handleHover}
      style={{
        textShadow: isGlitching 
          ? '0.05em 0 0 #ff0000, -0.05em -0.025em 0 #00ff00, 0.025em 0.05em 0 #0000ff'
          : 'none'
      }}
    >
      {glitchedText}
      
      {/* Data corruption overlay */}
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 opacity-80 text-destructive animate-glitch"
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              transform: 'translateX(-2px)'
            }}
          >
            {glitchedText}
          </span>
          <span 
            className="absolute top-0 left-0 opacity-80 text-accent animate-glitch"
            style={{ 
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
              transform: 'translateX(2px)'
            }}
          >
            {glitchedText}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;