import { useState, useEffect, useRef } from 'react';
import { Terminal, ChevronRight, Zap } from 'lucide-react';

interface Command {
  command: string;
  output: string[];
  type: 'success' | 'error' | 'info';
}

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: {
      output: [
        'Available commands:',
        'scan [target]      - Start vulnerability scan',
        'status             - Show system status',
        'exploit [cve]      - Show exploit information',
        'crack [hash]       - Crack password hash',
        'intrusion          - Start intrusion detection',
        'clear              - Clear terminal',
        'matrix             - Enter the matrix',
        'hack               - Execute hack sequence',
      ],
      type: 'info' as const
    },
    scan: {
      output: [
        'Initializing vulnerability scanner...',
        'Target: 192.168.1.100',
        'Scanning ports... [████████████████████] 100%',
        'Open ports found: 22, 80, 443, 3389',
        'CVE-2023-0001 detected on port 22',
        'CVE-2023-0002 detected on port 80',
        'Scan complete. 2 vulnerabilities found.',
      ],
      type: 'success' as const
    },
    status: {
      output: [
        'CyberBase Security Status:',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'System Status:        [ONLINE]',
        'Firewall:            [ACTIVE]', 
        'IDS/IPS:             [MONITORING]',
        'Threat Level:        [MEDIUM]',
        'Active Connections:  [1,247]',
        'Blocked Attacks:     [15,623]',
        'Last Update:         [2024-01-15 14:30:22]',
      ],
      type: 'info' as const
    },
    exploit: {
      output: [
        'Exploit Database Search:',
        'CVE-2024-XXXX - Buffer Overflow in SSH',
        'Severity: CRITICAL (CVSS 9.8)',
        'Affected: OpenSSH < 8.9',
        'Payload available: Yes',
        'Metasploit module: exploit/linux/ssh/openssh_overflow',
        '[WARNING] Use only for authorized testing!',
      ],
      type: 'success' as const
    },
    crack: {
      output: [
        'Password Hash Cracking Tool v3.0',
        'Target: 5d41402abc4b2a76b9719d911017c592',
        'Dictionary: rockyou.txt',
        'Mode: MD5 brute force',
        'Cracking... [████████████░░░░░░░░] 60%',
        'FOUND: hello',
        'Time elapsed: 0.342 seconds',
      ],
      type: 'success' as const
    },
    intrusion: {
      output: [
        'Intrusion Detection System Active',
        'Monitoring 847 endpoints...',
        'Real-time threat analysis enabled',
        'Machine learning models loaded',
        '⚠️  ALERT: Suspicious activity detected',
        '   Source: 203.0.113.45',
        '   Type: SQL injection attempt',
        '   Action: Connection blocked',
      ],
      type: 'error' as const
    },
    matrix: {
      output: [
        'Entering the Matrix...',
        '01001000 01100101 01101100 01101100 01101111',
        '01010111 01101111 01110010 01101100 01100100',
        'Reality.exe has stopped working',
        'Wake up, Neo...',
        'The Matrix has you...',
        'Follow the white rabbit.',
      ],
      type: 'success' as const
    },
    hack: {
      output: [
        'Initiating hack sequence...',
        'Bypassing firewall... [SUCCESS]',
        'Escalating privileges... [SUCCESS]',
        'Accessing mainframe... [SUCCESS]',
        'Downloading classified files...',
        '[████████████████████] 100%',
        'Files downloaded to /tmp/classified',
        'Covering tracks... [SUCCESS]',
        'Hack complete. Welcome to the system.',
      ],
      type: 'success' as const
    },
    clear: {
      output: [],
      type: 'info' as const
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [mainCmd] = trimmedCmd.split(' ');
    
    if (mainCmd === 'clear') {
      setHistory([]);
      return;
    }
    
    const commandInfo = commands[mainCmd as keyof typeof commands];
    
    if (commandInfo) {
      const newCommand: Command = {
        command: cmd,
        output: commandInfo.output,
        type: commandInfo.type
      };
      
      setHistory(prev => [...prev, newCommand]);
    } else {
      const errorCommand: Command = {
        command: cmd,
        output: [`Command not found: ${cmd}`, 'Type "help" for available commands.'],
        type: 'error'
      };
      
      setHistory(prev => [...prev, errorCommand]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-run demo commands on mount
  useEffect(() => {
    const demoCommands = ['help', 'status'];
    let delay = 1000;
    
    demoCommands.forEach((cmd, index) => {
      setTimeout(() => {
        handleCommand(cmd);
      }, delay * (index + 1));
    });
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-cyber-black/90 border border-primary/30 rounded-lg overflow-hidden shadow-cyber backdrop-blur-sm">
      {/* Terminal Header */}
      <div className="bg-cyber-gray/50 border-b border-primary/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-mono text-primary font-bold">CyberBase Terminal v2.1</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-destructive animate-neon-flicker"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-cyber-pulse"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        onClick={focusInput}
        className="h-96 overflow-y-auto p-4 font-mono text-sm bg-cyber-black/50 cursor-text"
      >
        {/* Welcome Message */}
        <div className="text-primary mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-4 h-4 animate-neon-flicker" />
            <span>CyberBase Security Terminal</span>
          </div>
          <div className="text-muted-foreground text-xs">
            Type 'help' for available commands | Status: ONLINE
          </div>
        </div>

        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {/* Command Input */}
            <div className="flex items-center text-primary mb-1">
              <span className="text-destructive font-bold">root@cyberbase</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~$</span>
              <ChevronRight className="w-4 h-4 mx-1 text-primary" />
              <span className="text-foreground">{entry.command}</span>
            </div>
            
            {/* Command Output */}
            <div className={`ml-4 space-y-1 ${
              entry.type === 'error' 
                ? 'text-destructive' 
                : entry.type === 'success' 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
            }`}>
              {entry.output.map((line, lineIndex) => (
                <div 
                  key={lineIndex}
                  className={`${line.includes('ALERT') ? 'animate-neon-flicker text-destructive font-bold' : ''}`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-destructive font-bold">root@cyberbase</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-accent">~$</span>
          <ChevronRight className="w-4 h-4 mx-1 text-primary" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-foreground outline-none font-mono"
            placeholder="Enter command..."
            autoFocus
          />
          <span className="text-primary animate-terminal-cursor ml-1">|</span>
        </form>
      </div>

      {/* Quick Commands */}
      <div className="bg-cyber-gray/30 border-t border-primary/20 px-4 py-2">
        <div className="flex flex-wrap gap-2">
          {Object.keys(commands).filter(cmd => cmd !== 'clear').slice(0, 6).map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-1 text-xs font-mono text-primary hover:text-primary-glow hover:bg-primary/10 rounded transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;