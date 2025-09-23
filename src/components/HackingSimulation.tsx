import { useState, useEffect } from 'react';
import { Play, Square, SkipForward, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

interface HackStep {
  id: number;
  title: string;
  command: string;
  output: string[];
  duration: number;
  status: 'pending' | 'running' | 'completed' | 'failed';
  type: 'info' | 'success' | 'warning' | 'error';
}

const HackingSimulation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<HackStep[]>([
    {
      id: 1,
      title: 'Target Reconnaissance',
      command: 'nmap -sS -O 192.168.1.100',
      output: [
        'Starting Nmap 7.94 ( https://nmap.org )',
        'Nmap scan report for target.cyberbase.local (192.168.1.100)',
        'Host is up (0.0023s latency).',
        'PORT     STATE SERVICE',
        '22/tcp   open  ssh',
        '80/tcp   open  http',
        '443/tcp  open  https',
        '3389/tcp open  ms-wbt-server',
        'OS: Windows Server 2019',
      ],
      duration: 3000,
      status: 'pending',
      type: 'info'
    },
    {
      id: 2,
      title: 'Vulnerability Scanning',
      command: 'python3 exploit_scanner.py --target 192.168.1.100',
      output: [
        'CyberBase Vulnerability Scanner v3.1',
        '[+] Scanning for known vulnerabilities...',
        '[!] CVE-2024-1234 detected on port 22 (SSH)',
        '[!] CVE-2024-5678 detected on port 80 (HTTP)',
        '[+] Weak SSL configuration detected',
        '[+] Directory traversal possible',
        'Scan completed: 4 vulnerabilities found',
      ],
      duration: 4000,
      status: 'pending',
      type: 'warning'
    },
    {
      id: 3,
      title: 'Exploit Development',
      command: 'msfconsole -q -x "use exploit/ssh/ssh_login_bruteforce"',
      output: [
        'Metasploit Framework Console',
        'Loading exploit module...',
        'Setting RHOSTS => 192.168.1.100',
        'Setting RPORT => 22',
        'Generating payload...',
        'Payload generated: 847 bytes',
        'Exploit ready for execution',
      ],
      duration: 2500,
      status: 'pending',
      type: 'info'
    },
    {
      id: 4,
      title: 'Privilege Escalation',
      command: 'python3 privesc.py --method kernel_exploit',
      output: [
        'Privilege Escalation Tool v2.0',
        '[+] Checking for privilege escalation vectors...',
        '[+] Found: Unquoted service path vulnerability',
        '[+] Found: Writable service binary',
        '[!] Exploiting kernel vulnerability CVE-2024-9999',
        '[+] Privilege escalation successful!',
        'Current user: NT AUTHORITY\\SYSTEM',
      ],
      duration: 3500,
      status: 'pending',
      type: 'success'
    },
    {
      id: 5,
      title: 'Data Exfiltration',
      command: 'python3 exfiltrate.py --method encrypted_channel',
      output: [
        'Data Exfiltration Module',
        '[+] Establishing encrypted communication channel...',
        '[+] Searching for sensitive files...',
        '[+] Found: database_backup.sql (15.2 MB)',
        '[+] Found: user_credentials.txt (0.8 MB)',
        '[+] Found: financial_reports.xlsx (3.4 MB)',
        '[+] Data successfully exfiltrated: 19.4 MB',
        'Mission accomplished!',
      ],
      duration: 4500,
      status: 'pending',
      type: 'success'
    }
  ]);

  const runSimulation = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setCurrentStep(0);
    
    // Reset all steps
    setSteps(prev => prev.map(step => ({ ...step, status: 'pending' })));

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      
      // Set step as running
      setSteps(prev => prev.map((step, idx) => 
        idx === i ? { ...step, status: 'running' } : step
      ));
      
      // Wait for step duration
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));
      
      // Set step as completed
      setSteps(prev => prev.map((step, idx) => 
        idx === i ? { 
          ...step, 
          status: Math.random() > 0.1 ? 'completed' : 'failed' 
        } : step
      ));
    }
    
    setIsRunning(false);
    setCurrentStep(-1);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    setCurrentStep(-1);
    setSteps(prev => prev.map(step => ({ 
      ...step, 
      status: step.status === 'running' ? 'failed' : step.status 
    })));
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStep(-1);
    setSteps(prev => prev.map(step => ({ ...step, status: 'pending' })));
  };

  const getStepIcon = (step: HackStep) => {
    switch (step.status) {
      case 'running':
        return <Zap className="w-5 h-5 text-yellow-500 animate-neon-flicker" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-primary" />;
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <div className="w-5 h-5 border-2 border-muted-foreground rounded-full"></div>;
    }
  };

  const getStepColor = (step: HackStep) => {
    switch (step.type) {
      case 'success': return 'border-primary/30 bg-primary/5';
      case 'warning': return 'border-yellow-500/30 bg-yellow-500/5';
      case 'error': return 'border-destructive/30 bg-destructive/5';
      default: return 'border-muted-foreground/30 bg-muted/20';
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-cyber-black/90 border border-primary/30 rounded-lg overflow-hidden shadow-cyber backdrop-blur-sm">
      {/* Header */}
      <div className="bg-cyber-gray/50 border-b border-primary/20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-destructive/20 rounded">
              <Zap className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-xl font-cyber font-bold text-primary">
                Advanced Penetration Testing Simulation
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Ethical Hacking Demo - Authorized Testing Only
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="cyber"
              size="sm"
              onClick={runSimulation}
              disabled={isRunning}
            >
              <Play className="w-4 h-4 mr-2" />
              {isRunning ? 'Running...' : 'Start Hack'}
            </Button>
            
            {isRunning && (
              <Button
                variant="danger"
                size="sm"
                onClick={stopSimulation}
              >
                <Square className="w-4 h-4 mr-2" />
                Stop
              </Button>
            )}
            
            <Button
              variant="terminal"
              size="sm"
              onClick={resetSimulation}
              disabled={isRunning}
            >
              <SkipForward className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Simulation Steps */}
      <div className="p-6">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`border rounded-lg p-4 transition-all duration-300 ${getStepColor(step)} ${
                currentStep === index ? 'ring-2 ring-primary/50 animate-cyber-pulse' : ''
              }`}
            >
              {/* Step Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  {getStepIcon(step)}
                  <div>
                    <h4 className="font-mono font-bold text-foreground">
                      {step.id}. {step.title}
                    </h4>
                    <code className="text-xs text-muted-foreground bg-cyber-gray/30 px-2 py-1 rounded">
                      {step.command}
                    </code>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded text-xs font-bold ${
                  step.status === 'completed' ? 'bg-primary/20 text-primary' :
                  step.status === 'running' ? 'bg-yellow-500/20 text-yellow-500' :
                  step.status === 'failed' ? 'bg-destructive/20 text-destructive' :
                  'bg-muted-foreground/20 text-muted-foreground'
                }`}>
                  {step.status.toUpperCase()}
                </div>
              </div>

              {/* Step Output */}
              {(step.status === 'running' || step.status === 'completed' || step.status === 'failed') && (
                <div className="bg-cyber-black/50 border border-primary/20 rounded p-4 font-mono text-sm">
                  {step.output.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className={`${
                        line.startsWith('[+]') ? 'text-primary' :
                        line.startsWith('[!]') ? 'text-yellow-500' :
                        line.startsWith('[x]') ? 'text-destructive' :
                        'text-muted-foreground'
                      } ${
                        step.status === 'running' && lineIndex === step.output.length - 1 
                          ? 'animate-neon-flicker' 
                          : ''
                      }`}
                    >
                      {line}
                      {step.status === 'running' && lineIndex === step.output.length - 1 && (
                        <span className="text-primary animate-terminal-cursor ml-1">|</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {isRunning && (
          <div className="mt-6 p-4 bg-cyber-gray/30 border border-primary/20 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-mono text-primary">
                Hack Progress: Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm font-mono text-muted-foreground">
                {Math.round(((currentStep + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-cyber-gray rounded-full h-2">
              <div 
                className="h-2 bg-gradient-green rounded-full transition-all duration-500 animate-hologram-shimmer"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5 animate-neon-flicker" />
            <div className="text-sm">
              <p className="text-destructive font-bold mb-1">⚠️ EDUCATIONAL PURPOSE ONLY</p>
              <p className="text-muted-foreground font-mono text-xs">
                This simulation demonstrates cybersecurity testing methodologies for educational purposes. 
                All activities should only be performed on authorized systems with proper permission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackingSimulation;