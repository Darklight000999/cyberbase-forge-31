import { useEffect, useState } from 'react';

const CyberScanEffect = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    // Start scanning animation periodically
    const interval = setInterval(() => {
      setScanning(true);
      setTimeout(() => setScanning(false), 2000);
    }, 8000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      
      {/* Scan Line Effect */}
      {scanning && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-80 shadow-glow-green"></div>
        </div>
      )}
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
      
      {/* Corner Markers */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60"></div>
      
      {/* Pulse Effect */}
      {scanning && (
        <div className="absolute inset-0 border-2 border-primary animate-cyber-pulse pointer-events-none"></div>
      )}
    </div>
  );
};

export default CyberScanEffect;