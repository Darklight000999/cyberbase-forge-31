import { Shield, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { icon: Shield, value: '500+', label: 'Systems Secured', color: 'primary' },
    { icon: Users, value: '50+', label: 'Happy Clients', color: 'destructive' },
    { icon: Award, value: '15+', label: 'Certifications', color: 'primary' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'destructive' }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Lead Penetration Tester',
      certs: ['OSCP', 'CEH', 'CISSP'],
      specialty: 'Web Application Security'
    },
    {
      name: 'Sarah Chen',
      role: 'Security Researcher',
      certs: ['GPEN', 'GCIH', 'GSEC'],
      specialty: 'Malware Analysis'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Network Security Expert',
      certs: ['CCIE Security', 'CISSP'],
      specialty: 'Infrastructure Hardening'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-6">
            About <span className="text-destructive">CyberBase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Elite cybersecurity professionals dedicated to protecting your digital infrastructure
          </p>
          <div className="w-24 h-1 bg-gradient-green mx-auto mt-6"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`inline-flex p-4 rounded-full mb-4 ${
                  stat.color === 'destructive' 
                    ? 'bg-destructive/20 text-destructive' 
                    : 'bg-primary/20 text-primary'
                } group-hover:animate-cyber-pulse`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className={`text-4xl font-cyber font-bold mb-2 ${
                  stat.color === 'destructive' ? 'text-destructive' : 'text-primary'
                }`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-mono text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-cyber font-bold text-foreground mb-6">
              Defending the Digital Frontier
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At CyberBase, we are more than just cybersecurity experts – we are digital guardians 
                committed to protecting your most valuable assets. Founded by ethical hackers and 
                security researchers, we bring real-world experience from both offensive and defensive perspectives.
              </p>
              <p>
                Our team has collectively secured hundreds of systems, identified thousands of 
                vulnerabilities, and helped organizations across industries build robust security frameworks. 
                We don't just find problems; we provide actionable solutions.
              </p>
              <p>
                From Fortune 500 companies to emerging startups, we've earned the trust of clients 
                worldwide through our commitment to excellence, transparency, and continuous innovation 
                in cybersecurity practices.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-cyber-pulse"></div>
                <span className="font-mono text-muted-foreground">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full animate-cyber-pulse"></div>
                <span className="font-mono text-muted-foreground">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-cyber-pulse"></div>
                <span className="font-mono text-muted-foreground">SOC 2 Type II</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mission Statement */}
          <div className="bg-card border border-primary/20 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-matrix"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h4 className="text-2xl font-cyber font-bold text-primary">Our Mission</h4>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed mb-6 font-mono">
                "To democratize cybersecurity by making enterprise-grade protection accessible 
                to organizations of all sizes. We believe that robust security shouldn't be 
                a luxury – it's a fundamental right in the digital age."
              </blockquote>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-foreground font-semibold">— CyberBase Security Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-cyber font-bold text-primary mb-8">
            Meet Our <span className="text-destructive">Elite Team</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-cyber group"
            >
              <div className="w-24 h-24 bg-gradient-matrix rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary group-hover:animate-cyber-pulse" />
              </div>
              <h4 className="text-xl font-cyber font-bold text-foreground mb-2">{member.name}</h4>
              <p className="text-primary font-mono mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.specialty}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.certs.map((cert, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary/20 text-primary text-xs font-mono rounded border border-primary/30"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cyber" size="cyber">
            <Shield className="w-5 h-5 mr-2" />
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;