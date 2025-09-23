import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'security@cyberbase.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Emergency Hotline',
      value: '+1 (555) CYBER-911',
      color: 'destructive'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'San Francisco, CA',
      color: 'primary'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '< 1 Hour',
      color: 'destructive'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-6">
            Contact <span className="text-destructive">CyberBase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Ready to secure your digital infrastructure? Let's discuss your cybersecurity needs.
          </p>
          <div className="w-24 h-1 bg-gradient-green mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-cyber font-bold text-foreground mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-cyber"
                  >
                    <div className={`p-3 rounded-lg ${
                      info.color === 'destructive' 
                        ? 'bg-destructive/20 text-destructive' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-muted-foreground">{info.label}</div>
                      <div className="text-lg font-semibold text-foreground">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency Notice */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-destructive/20 rounded-lg">
                  <Clock className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-cyber font-bold text-destructive mb-2">Security Emergency?</h4>
                  <p className="text-muted-foreground text-sm font-mono leading-relaxed">
                    If you're experiencing an active security incident, call our emergency 
                    hotline immediately. Our incident response team is available 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-cyber font-bold text-foreground mb-6">
              Request Consultation
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Name *
                  </label>
                  <Input 
                    className="bg-cyber-gray border-primary/30 focus:border-primary font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    className="bg-cyber-gray border-primary/30 focus:border-primary font-mono"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  className="bg-cyber-gray border-primary/30 focus:border-primary font-mono"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Service Interest
                </label>
                <select className="w-full p-3 bg-cyber-gray border border-primary/30 rounded-lg focus:border-primary text-foreground font-mono">
                  <option>Penetration Testing</option>
                  <option>Vulnerability Assessment</option>
                  <option>Security Monitoring</option>
                  <option>Security Consulting</option>
                  <option>Digital Forensics</option>
                  <option>Red Team Operations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  className="bg-cyber-gray border-primary/30 focus:border-primary font-mono h-32"
                  placeholder="Describe your cybersecurity needs..."
                />
              </div>

              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="urgent"
                  className="w-4 h-4 text-destructive bg-cyber-gray border-primary/30 rounded focus:ring-destructive"
                />
                <label htmlFor="urgent" className="text-sm font-mono text-muted-foreground">
                  This is an urgent security matter
                </label>
              </div>

              <Button variant="cyber" size="cyber" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-xs font-mono text-muted-foreground text-center">
                All communications are encrypted and confidential. 
                We typically respond within 1 hour during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;