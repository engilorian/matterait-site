"use client";

import React from "react";
import { Element } from "@/config/types/atomic/element";


function getShellDistribution(atomicNumber: number): number[] {
  const shells: number[] = [];
  const shellCapacities = [2, 8, 18, 32, 50, 72];

  let remaining = atomicNumber;
  for (const cap of shellCapacities) {
    if (remaining <= 0) break;
    const electronsInThisShell = Math.min(cap, remaining);
    shells.push(electronsInThisShell);
    remaining -= electronsInThisShell;
  }

  return shells;
}

interface AtomicStructureProps {
  element: Element;
}

const AtomicStructure: React.FC<AtomicStructureProps> = ({ element }) => {
  const { atomic_number } = element;

  if (!atomic_number || atomic_number <= 0) {
    return <div className="text-center text-lg font-semibold text-gray-600">No atomic number provided.</div>;
  }

  const shells = getShellDistribution(atomic_number);
  const numberOfShells = shells.length;

  const viewBoxSize = 600;
  const center = { x: viewBoxSize / 2, y: viewBoxSize / 2 };
  const margin = 20;
  const maxRadius = (viewBoxSize / 2) - margin;

  const electronRadiusFactor = 0.15;
  const shellSpacing = numberOfShells > 0 ? maxRadius / (numberOfShells + electronRadiusFactor) : 0;

  const nucleusRadius = Math.max(10, shellSpacing * 0.5);
  const electronRadius = Math.max(5, shellSpacing * electronRadiusFactor);

  return (
    <div className="flex justify-center items-center">
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx={center.x}
          cy={center.y}
          r={nucleusRadius}
          className="fill-yellow-50 stroke-gray-300 stroke-[8px] drop-shadow-lg"
          aria-label="Nucleus"
        />

        {shells.map((electronCount, shellIndex) => {
          const radius = shellSpacing * (shellIndex + 1);

          return (
            <g key={shellIndex}>
              <circle
                cx={center.x}
                cy={center.y}
                r={radius}
                className="stroke-cyan-200 stroke-[8px] fill-transparent opacity-75"
                aria-label={`Shell ${shellIndex + 1}`}
              />

              {[...Array(electronCount)].map((_, eIndex) => {
                const angle = (2 * Math.PI * eIndex) / electronCount;
                const x = center.x + radius * Math.cos(angle);
                const y = center.y + radius * Math.sin(angle);

                return (
                  <circle
                    key={eIndex}
                    cx={x}
                    cy={y}
                    r={electronRadius}
                    className="fill-blue-500 stroke-blue-700 stroke-[4px] opacity-75 drop-shadow-md"
                    aria-label={`Electron ${eIndex + 1} in Shell ${shellIndex + 1}`}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default AtomicStructure;
