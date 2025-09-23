import { Code, Server, Wifi, Database, Globe, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Scripting',
      icon: Code,
      skills: ['Python', 'Bash/Shell', 'PowerShell', 'JavaScript', 'Go', 'C/C++', 'Assembly'],
      color: 'primary'
    },
    {
      title: 'Network Security',
      icon: Wifi,
      skills: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP', 'Aircrack-ng', 'Nessus'],
      color: 'destructive'
    },
    {
      title: 'Operating Systems',
      icon: Server,
      skills: ['Kali Linux', 'Parrot OS', 'Windows', 'macOS', 'Ubuntu', 'CentOS', 'FreeBSD'],
      color: 'primary'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML/CSS', 'React', 'Node.js', 'PHP', 'SQL Injection', 'XSS', 'CSRF'],
      color: 'destructive'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'MSSQL'],
      color: 'primary'
    },
    {
      title: 'Tools & Frameworks',
      icon: Terminal,
      skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Ansible'],
      color: 'destructive'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-matrix">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-primary mb-6">
            Technical <span className="text-destructive">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Our expertise spans across multiple domains of cybersecurity and technology
          </p>
          <div className="w-24 h-1 bg-gradient-green mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-cyber relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`w-full h-full bg-gradient-${category.color === 'destructive' ? 'danger' : 'green'}`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg mr-4 ${
                      category.color === 'destructive' 
                        ? 'bg-destructive/20 text-destructive' 
                        : 'bg-primary/20 text-primary'
                    } group-hover:animate-cyber-pulse`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-cyber font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-cyber-gray/50 rounded border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="font-mono text-muted-foreground">{skill}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          category.color === 'destructive' ? 'bg-destructive' : 'bg-primary'
                        } animate-cyber-pulse`}></div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-mono text-primary">Expert</span>
                    </div>
                    <div className="w-full bg-cyber-gray rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          category.color === 'destructive' ? 'bg-gradient-danger' : 'bg-gradient-green'
                        } animate-cyber-pulse`}
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-cyber font-bold text-primary mb-8">
            Certifications & <span className="text-destructive">Credentials</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['CEH', 'CISSP', 'OSCP', 'GCIH', 'GPEN', 'CISSP', 'CISM', 'CISA'].map((cert, i) => (
              <div
                key={i}
                className="bg-card/50 border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-cyber"
              >
                <div className="font-cyber font-bold text-primary text-lg">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;