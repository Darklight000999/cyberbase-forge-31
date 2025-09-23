import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Terminal, Lock, Download, Play } from 'lucide-react';
import cyberHero from '@/assets/cyber-hero.jpg';
import InteractiveTerminal from './InteractiveTerminal';
import CyberParticles from './CyberParticles';
import LiveThreatMap from './LiveThreatMap';
import GlitchText from './GlitchText';
import CyberScanEffect from './CyberScanEffect';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showThreatMap, setShowThreatMap] = useState(false);
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
      {/* Background with Particles */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cyberHero})` }}
        >
          <div className="absolute inset-0 bg-cyber-black/85"></div>
        </div>
        
        {/* 3D Particle Background */}
        <div className="absolute inset-0 opacity-20">
          <CyberParticles />
        </div>
      </div>

      {/* Enhanced Matrix Rain */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary text-xs font-mono animate-data-stream"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 20 }, () => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo/Brand with Scan Effect */}
        <CyberScanEffect className="mb-8">
          <h1 className="text-6xl md:text-8xl font-cyber font-black text-primary mb-4 animate-float-3d">
            <GlitchText 
              text="CYBER" 
              continuous={true}
              className="text-primary"
            />
            <GlitchText 
              text="BASE" 
              continuous={true}
              className="text-destructive ml-2"
            />
          </h1>
          <div className="w-32 h-1 bg-gradient-green mx-auto mb-6 animate-hologram-shimmer"></div>
        </CyberScanEffect>

        {/* Enhanced Terminal */}
        <div className="bg-cyber-gray/90 border border-primary/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto shadow-cyber backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-hologram-shimmer animate-hologram-shimmer opacity-10"></div>
          <div className="font-mono text-left relative z-10">
            <div className="flex items-center mb-2">
              <Terminal className="w-4 h-4 text-primary mr-2 animate-neon-flicker" />
              <span className="text-primary">root@cyberbase:~$</span>
            </div>
            <div className="text-foreground">
              <GlitchText 
                text={text}
                glitchOnHover={true}
                className="text-primary"
              />
              {showCursor && <span className="text-primary animate-terminal-cursor">|</span>}
            </div>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Elite cybersecurity services and ethical hacking solutions. 
          We protect your digital assets with cutting-edge security testing and vulnerability assessments.
        </p>

        {/* Advanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="cyber" size="cyber" className="group relative overflow-hidden">
            <Shield className="w-5 h-5 mr-2 group-hover:animate-cyber-pulse" />
            Start Security Audit
            <div className="absolute inset-0 bg-hologram-shimmer animate-hologram-shimmer opacity-0 group-hover:opacity-30"></div>
          </Button>
          
          <Button variant="hologram" size="cyber" className="group">
            <Lock className="w-5 h-5 mr-2" />
            View Services
          </Button>
          
          <Button 
            variant="matrix" 
            size="cyber" 
            onClick={() => setShowTerminal(!showTerminal)}
            className="group"
          >
            <Terminal className="w-5 h-5 mr-2" />
            {showTerminal ? 'Hide Terminal' : 'Open Terminal'}
          </Button>
          
          <Button 
            variant="neon" 
            size="cyber" 
            onClick={() => setShowThreatMap(!showThreatMap)}
            className="group"
          >
            <Play className="w-5 h-5 mr-2" />
            Live Monitor
          </Button>
        </div>

        {/* Interactive Components */}
        {showTerminal && (
          <div className="mb-8 animate-fade-in">
            <InteractiveTerminal />
          </div>
        )}

        {showThreatMap && (
          <div className="mb-8 animate-fade-in">
            <LiveThreatMap />
          </div>
        )}

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Systems Secured' },
            { number: '99.9%', label: 'Success Rate' },
            { number: '24/7', label: 'Monitoring' }
          ].map((stat, i) => (
            <CyberScanEffect 
              key={i} 
              className="text-center border border-primary/20 rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-all duration-300 hover:shadow-cyber cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-cyber font-bold text-primary mb-2 animate-neon-flicker">
                <GlitchText 
                  text={stat.number}
                  glitchOnHover={true}
                />
              </div>
              <div className="text-muted-foreground font-mono">
                {stat.label}
              </div>
            </CyberScanEffect>
          ))}
        </div>

        {/* Floating Action Elements */}
        <div className="absolute top-4 right-4 space-y-2">
          <Button variant="ghost" size="icon" className="animate-float-3d">
            <Download className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;