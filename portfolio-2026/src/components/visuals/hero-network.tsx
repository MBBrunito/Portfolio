export function HeroNetwork() {
  const nodes = [
    { x: 80, y: 170 },
    { x: 180, y: 80 },
    { x: 300, y: 130 },
    { x: 440, y: 65 },
    { x: 540, y: 175 },
    { x: 140, y: 320 },
    { x: 290, y: 270 },
    { x: 430, y: 340 },
    { x: 560, y: 440 },
    { x: 270, y: 470 },
    { x: 90, y: 490 },
  ];

  const connections = [
    [0, 1],
    [0, 5],
    [1, 2],
    [1, 6],
    [2, 3],
    [2, 6],
    [2, 4],
    [3, 4],
    [3, 7],
    [4, 7],
    [4, 8],
    [5, 6],
    [5, 10],
    [6, 7],
    [6, 9],
    [7, 8],
    [7, 9],
    [8, 9],
    [9, 10],
  ];

  const activeConnections = new Set([2, 5, 8, 13, 16]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent_32%,black_68%)]"
    >
      <div className="hero-network-glow absolute right-[-10%] top-[5%] h-[75%] w-[70%] rounded-full bg-[#338DCA]/10 blur-[100px]" />

      <svg
        viewBox="0 0 650 560"
        preserveAspectRatio="xMidYMid meet"
        className="hero-network-svg absolute right-[2%] top-1/2 w-[44%] max-w-[580px] opacity-90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-node-gradient">
            <stop offset="0%" stopColor="#E4F6FF" />
            <stop offset="45%" stopColor="#8AC9EB" />
            <stop offset="100%" stopColor="#338DCA" />
          </radialGradient>

          <filter
            id="hero-node-glow"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Conexiones */}
        {connections.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];

          return (
            <g key={index}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="#338DCA"
                strokeWidth="1.5"
                opacity="0.45"
              />

              {activeConnections.has(index) && (
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="#8AC9EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="100"
                  strokeDasharray="10 90"
                  className="hero-network-pulse"
                  style={{
                    animationDelay: `${index * -0.6}s`,
                  }}
                />
              )}
            </g>
          );
        })}

        {/* Nodos */}
        {nodes.map((node, index) => (
          <g key={index}>
            <circle
              cx={node.x}
              cy={node.y}
              r="13"
              fill="#338DCA"
              opacity="0.45"
              filter="url(#hero-node-glow)"
              className="hero-network-node-glow"
              style={{
                animationDelay: `${index * -0.35}s`,
              }}
            />

            <circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill="url(#hero-node-gradient)"
            />

            <circle
              cx={node.x}
              cy={node.y}
              r="9"
              fill="none"
              stroke="#8AC9EB"
              strokeWidth="1"
              opacity="0.4"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
