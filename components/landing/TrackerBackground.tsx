import { useMemo } from 'react';

export function TrackerBackground() {
    const grid = useMemo(() => {
        const cols = 100;
        const rows = 40;
        const cells = [];

        // Simple deterministic random function based on coordinates
        const pseudoRand = (x: number, y: number) => {
            const dot = x * 12.9898 + y * 78.233;
            const sin = Math.sin(dot) * 43758.5453;
            return sin - Math.floor(sin);
        };

        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                // Determine if cell should be painted (creates clusters and empty spaces)
                const isPainted = pseudoRand(c, r) > 0.4;
                
                if (isPainted) {
                    // Randomize intensity into 3 discrete levels
                    const intensityRand = pseudoRand(c * 1.5, r * 1.5);
                    let opacityClass = "opacity-20"; // light
                    
                    if (intensityRand > 0.8) {
                        opacityClass = "opacity-10"; // high
                    } else if (intensityRand > 0.5) {
                        opacityClass = "opacity-40"; // medium
                    }

                    cells.push(
                        <rect
                            key={`${c}-${r}`}
                            x={c * 10}
                            y={r * 10}
                            width={6}
                            height={6}
                            rx={1.5}
                            className={`fill-primary ${opacityClass}`}
                        />
                    );
                } else {
                    // Empty background cell (very subtle)
                    cells.push(
                        <rect
                            key={`${c}-${r}`}
                            x={c * 10}
                            y={r * 10}
                            width={6}
                            height={6}
                            rx={1.5}
                            className="fill-zinc-200 dark:fill-zinc-800 opacity-20"
                        />
                    );
                }
            }
        }
        return cells;
    }, []);

    return (
        <div className="absolute inset-0 border-y border-foreground/10 bg-background/40 backdrop-blur-md overflow-hidden pointer-events-none -z-10">
            <svg
                className="w-full h-full opacity-40 dark:opacity-30"
                viewBox="0 0 1000 400"
                preserveAspectRatio="xMidYMid slice"
            >
                {grid}
            </svg>
        </div>
    );
}
