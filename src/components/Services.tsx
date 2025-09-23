import { Shield, Search, Bug, Lock, Eye, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
      features: ['Network Penetration', 'Web App Testing', 'Mobile App Security', 'Social Engineering'],
      color: 'primary'
    },
    {
      icon: Bug,
      title: 'Vulnerability Assessment',
      description: 'Systematic evaluation of security weaknesses in your infrastructure.',
      features: ['Automated Scanning', 'Manual Testing', 'Risk Analysis', 'Remediation Plans'],
      color: 'primary'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 continuous monitoring and threat detection for your systems.',
      features: ['Real-time Alerts', 'Threat Intelligence', 'Incident Response', 'Compliance Reporting'],
      color: 'destructive'
    },
    {
      icon: Lock,
      title: 'Security Consulting',
      description: 'Expert guidance to build robust security frameworks and policies.',
      features: ['Security Architecture', 'Policy Development', 'Training Programs', 'Compliance Audit'],
      color: 'primary'
    },
    {
      icon: Search,
      title: 'Digital Forensics',
      description: 'Investigate security incidents and recover digital evidence.',
      features: ['Incident Analysis', 'Evidence Recovery', 'Malware Analysis', 'Court Testimony'],
      color: 'destructive'
    },
    {
      icon: AlertTriangle,
      title: 'Red Team Operations',
      description: 'Advanced adversarial simulations to test your defense capabilities.',
      features: ['Full-Scale Attacks', 'Advanced Persistence', 'Lateral Movement', 'Exfiltration Testing'],
      color: 'primary'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-6">
            Our <span className="text-destructive">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Comprehensive cybersecurity solutions tailored to protect your digital infrastructure
          </p>
          <div className="w-24 h-1 bg-gradient-green mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-cyber hover:shadow-glow-green relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-matrix"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-lg mb-6 ${
                    service.color === 'destructive' 
                      ? 'bg-destructive/20 text-destructive' 
                      : 'bg-primary/20 text-primary'
                  } group-hover:animate-cyber-pulse`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-cyber font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm font-mono">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.color === 'destructive' ? 'bg-destructive' : 'bg-primary'
                        }`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant={service.color === 'destructive' ? 'danger' : 'terminal'} 
                    className="w-full group-hover:shadow-glow-green"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="cyber" size="cyber">
            <Shield className="w-5 h-5 mr-2" />
            Get Security Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;