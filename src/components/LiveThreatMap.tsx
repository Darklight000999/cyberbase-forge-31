import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Zap, Globe, Activity } from 'lucide-react';

interface ThreatData {
  id: string;
  source: string;
  target: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  blocked: boolean;
}

const LiveThreatMap = () => {
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [stats, setStats] = useState({
    totalThreats: 15623,
    blockedToday: 847,
    activeConnections: 1247,
    systemLoad: 67
  });

  // Simulate real-time threat data
  useEffect(() => {
    const generateThreat = (): ThreatData => {
      const threatTypes = ['SQL Injection', 'XSS Attack', 'Brute Force', 'DDoS', 'Malware', 'Phishing'];
      const countries = ['China', 'Russia', 'North Korea', 'Brazil', 'India', 'USA', 'Germany'];
      const severities: ('low' | 'medium' | 'high' | 'critical')[] = ['low', 'medium', 'high', 'critical'];
      
      return {
        id: Math.random().toString(36).substr(2, 9),
        source: countries[Math.floor(Math.random() * countries.length)],
        target: 'CyberBase Network',
        type: threatTypes[Math.floor(Math.random() * threatTypes.length)],
        severity: severities[Math.floor(Math.random() * severities.length)],
        timestamp: new Date(),
        blocked: Math.random() > 0.2 // 80% blocked
      };
    };

    // Add initial threats
    const initialThreats = Array.from({ length: 5 }, generateThreat);
    setThreats(initialThreats);

    // Add new threats periodically
    const interval = setInterval(() => {
      const newThreat = generateThreat();
      setThreats(prev => [newThreat, ...prev.slice(0, 9)]); // Keep last 10
      
      // Update stats
      setStats(prev => ({
        ...prev,
        totalThreats: prev.totalThreats + 1,
        blockedToday: newThreat.blocked ? prev.blockedToday + 1 : prev.blockedToday,
        activeConnections: prev.activeConnections + Math.floor(Math.random() * 20 - 10),
        systemLoad: Math.max(20, Math.min(95, prev.systemLoad + Math.floor(Math.random() * 10 - 5)))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-500/20';
      case 'high': return 'text-orange-500 bg-orange-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/20';
      case 'low': return 'text-blue-500 bg-blue-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  return (
    <div className="w-full bg-cyber-black/90 border border-primary/30 rounded-lg p-6 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Globe className="w-6 h-6 text-primary animate-cyber-pulse" />
          <h3 className="text-xl font-cyber font-bold text-primary">Live Threat Monitor</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-neon-flicker"></div>
          <span className="text-xs text-muted-foreground">LIVE</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-cyber-gray/30 border border-primary/20 rounded p-4 text-center">
          <Shield className="w-5 h-5 text-primary mx-auto mb-2" />
          <div className="text-lg font-bold text-primary">{stats.totalThreats.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Total Threats</div>
        </div>
        
        <div className="bg-cyber-gray/30 border border-primary/20 rounded p-4 text-center">
          <AlertTriangle className="w-5 h-5 text-destructive mx-auto mb-2" />
          <div className="text-lg font-bold text-destructive">{stats.blockedToday}</div>
          <div className="text-xs text-muted-foreground">Blocked Today</div>
        </div>
        
        <div className="bg-cyber-gray/30 border border-primary/20 rounded p-4 text-center">
          <Activity className="w-5 h-5 text-accent mx-auto mb-2" />
          <div className="text-lg font-bold text-accent">{stats.activeConnections}</div>
          <div className="text-xs text-muted-foreground">Active Connections</div>
        </div>
        
        <div className="bg-cyber-gray/30 border border-primary/20 rounded p-4 text-center">
          <Zap className="w-5 h-5 text-primary mx-auto mb-2" />
          <div className="text-lg font-bold text-primary">{stats.systemLoad}%</div>
          <div className="text-xs text-muted-foreground">System Load</div>
        </div>
      </div>

      {/* Threat Feed */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-primary mb-3">Real-Time Threat Feed</h4>
        
        <div className="max-h-64 overflow-y-auto space-y-2">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className={`p-3 rounded border transition-all duration-300 ${
                threat.blocked 
                  ? 'border-primary/30 bg-primary/5' 
                  : 'border-destructive/30 bg-destructive/5 animate-neon-flicker'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${getSeverityColor(threat.severity)}`}>
                    {threat.severity.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    threat.blocked 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-destructive/20 text-destructive'
                  }`}>
                    {threat.blocked ? 'BLOCKED' : 'ACTIVE'}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {threat.timestamp.toLocaleTimeString()}
                </span>
              </div>
              
              <div className="text-sm">
                <div className="text-foreground font-medium">{threat.type}</div>
                <div className="text-muted-foreground text-xs">
                  From: {threat.source} → To: {threat.target}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Status Bar */}
      <div className="mt-6 pt-4 border-t border-primary/20">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">System Status: </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-cyber-pulse"></div>
            <span className="text-primary font-bold">OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveThreatMap;