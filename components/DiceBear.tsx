import React, { useMemo } from "react";
import * as core from "@dicebear/core";
import { shapes } from "@dicebear/collection";

interface DicebearThumbnailProps {
  seed: string;
  size?: number;
}

export default function DicebearThumbnail({ seed, size = 500 }: DicebearThumbnailProps) {
  // Avoid regenerating unless seed or size changes
  const svgMarkup = useMemo(() => {
    // Your custom palette
    const palette = [
      "60a5fa",
      "2563eb",
      "3b82f6",
      "a855f7",
      "f472b6",
      "e5e7eb",
    ];

    // Create DiceBear avatar
    const avatar = core.createAvatar(shapes, {
      seed,
      size,
      shape1Color: palette,
      shape2Color: palette,
      shape3Color: palette,
      scale: 100,
      translateX: 0,
      translateY: 0,
      rotate: 0,
    });

    const svg = avatar.toString();

    // Wrap with your gradient background + radius + grouping
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="thumbGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="50%" stop-color="#a855f7" />
            <stop offset="100%" stop-color="#f472b6" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#thumbGradient)" rx="30" />

        <g>${svg}</g>
      </svg>
    `;
  }, [seed, size]);

  // Render SVG markup directly
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}