import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Terminal, Lock } from 'lucide-react';
import cyberHero from '@/assets/cyber-hero.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> Penetrating Systems... Access Granted';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberHero})` }}
      >
        <div className="absolute inset-0 bg-cyber-black/80"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8 animate-glitch">
          <h1 className="text-6xl md:text-8xl font-cyber font-black text-primary mb-4">
            CYBER<span className="text-destructive">BASE</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-green mx-auto mb-6"></div>
        </div>

        {/* Terminal Text */}
        <div className="bg-cyber-gray/90 border border-primary/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto shadow-cyber">
          <div className="font-mono text-left">
            <div className="flex items-center mb-2">
              <Terminal className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary">root@cyberbase:~$</span>
            </div>
            <div className="text-foreground">
              {text}
              {showCursor && <span className="text-primary animate-terminal-cursor">|</span>}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Elite cybersecurity services and ethical hacking solutions. 
          We protect your digital assets with cutting-edge security testing and vulnerability assessments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cyber" size="cyber" className="group">
            <Shield className="w-5 h-5 mr-2 group-hover:animate-cyber-pulse" />
            Start Security Audit
          </Button>
          <Button variant="terminal" size="cyber">
            <Lock className="w-5 h-5 mr-2" />
            View Services
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Systems Secured' },
            { number: '99.9%', label: 'Success Rate' },
            { number: '24/7', label: 'Monitoring' }
          ].map((stat, i) => (
            <div key={i} className="text-center border border-primary/20 rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-cyber">
              <div className="text-3xl md:text-4xl font-cyber font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;