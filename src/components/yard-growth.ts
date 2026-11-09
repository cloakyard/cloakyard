/** Stable expanding shells: existing cells keep their place as the registry grows. */
export function yardGrowth(count: number) {
  const cells: { x: number; y: number; z: number }[] = [];
  for (let shell = 0; cells.length < count + 1; shell++) {
    for (let z = 0; z <= shell; z++) {
      for (let depth = 0; depth <= shell * 2; depth++) {
        for (let x = 0; x <= shell; x++) {
          const y = depth - x;
          if (y >= 0 && y <= shell && Math.max(x, y, z) === shell) cells.push({ x, y, z });
        }
      }
    }
  }
  const points = cells.slice(0, count + 1).map(({ x, y, z }, order) => ({
    x: (x - y) * 50,
    y: (x + y) * 25 - z * 58,
    depth: x + y + z * 100,
    order,
  }));
  const left = Math.min(...points.map((p) => p.x)) - 48;
  const right = Math.max(...points.map((p) => p.x)) + 48;
  const top = Math.min(...points.map((p) => p.y));
  const bottom = Math.max(...points.map((p) => p.y)) + 104;
  const scale = Math.min(312 / (right - left), 192 / (bottom - top));
  const step = Math.min(620, 3900 / Math.max(1, count));
  return {
    cells: points.map((p) => ({
      ...p,
      left: (180 + (p.x - 48 - (left + right) / 2) * scale) / 3.6,
      top: (120 + (p.y - (top + bottom) / 2) * scale) / 2.4,
      width: (96 * scale) / 3.6,
      height: (104 * scale) / 2.4,
    })),
    duration: Math.min(600, step),
    step,
    nextDelay: 160 + count * step,
  };
}
