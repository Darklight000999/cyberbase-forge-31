import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Initialize smooth scrolling behavior
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cyber-black border-t border-primary/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <span className="font-cyber font-bold text-xl text-primary">
                  CYBER<span className="text-destructive">BASE</span>
                </span>
              </div>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Elite cybersecurity professionals protecting your digital infrastructure 
                with cutting-edge security solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-cyber font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Skills', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-cyber font-bold text-primary mb-4">Security Services</h4>
              <ul className="space-y-2">
                {['Penetration Testing', 'Vulnerability Assessment', 'Security Monitoring', 'Digital Forensics'].map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground font-mono text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              © 2024 CyberBase. All rights reserved. | 
              <span className="text-primary"> Securing the Digital Future</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;