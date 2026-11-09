/** Semantic corner checks for the browser observer; numbers are Air's role contract. */
const equal = (value) => Array(4).fill(`${value}px`);
export function expectedCorners(row) {
  const classes = new Set(String(row.class).split(/\s+/));
  const has = (...names) => names.some((name) => classes.has(name));
  if (has("resume-template-paper")) return ["0px", "0px", "17px", "17px"];
  if (has("editor-mobile-surface", "editor-mobile-sheet")) return equal(0);
  if (has("pdf-date-popover") && row.viewport[0] <= 360) return ["20px", "20px", "0px", "0px"];
  if (has("cloak-dialog", "pdf-dialog", "air-modal"))
    return row.viewport[0] <= 640 ? ["20px", "20px", "0px", "0px"] : equal(20);
  if (has("air-radius-chip", "air-segment", "air-menu-item", "editor-adjust-parameter"))
    return equal(8);
  if (row.tag === "button" && /(?:^|\s)air-segments(?:\s|$)/.test(row.parent)) return equal(8);
  if (
    has(
      "air-radius-control",
      "air-button",
      "air-icon-button",
      "air-field",
      "air-select",
      "air-select-trigger",
      "img-recent-colour",
      "pdf-precision-range",
      "air-artwork-replay",
      "air-field-group",
      "air-switch",
      "air-segments",
      "img-segments",
      "editor-topbar__brand",
      "editor-compact-tool",
      "img-layer-row",
      "img-layer-select",
      "editor-toolrail__button",
      "editor-page-card",
      "pdf-command-option",
      "pdf-tool-entry",
      "resume-section-link",
      "resume-editor-skip",
    )
  )
    return equal(10);
  if (
    has(
      "air-radius-panel",
      "air-panel",
      "air-update",
      "air-file-drop",
      "img-dropzone",
      "resume-template-card",
      "resume-template-choice",
      "editor-topbar__actions",
    )
  )
    return equal(18);
  if (has("air-popover", "air-menu", "air-tooltip")) return equal(12);
  if (has("img-colour-swatch", "resume-colour-swatch")) return Array(4).fill("50%");
  if (
    row.tag === "button" &&
    /^(Hide layer|Show layer|Delete layer|Open layer filters|Close layer filters)$/.test(row.name)
  )
    return equal(10);
  // Catch old unqualified utility defaults on actual controls, even before migration.
  if (row.tag === "button" && has("rounded")) return equal(10);
  return null;
}
export function auditCorners(rows) {
  const failures = [],
    coverage = new Map(),
    unclassified = new Map();
  for (const row of rows) {
    if (row.output || row.origin === "null") continue;
    const expected = expectedCorners(row);
    const key = JSON.stringify([row.origin, row.tag, row.class, row.name, row.radii]);
    if (!expected) {
      unclassified.set(key, row);
      continue;
    }
    coverage.set(key, row);
    if (row.radii.some((radius, i) => radius !== expected[i])) failures.push({ ...row, expected });
  }
  return {
    checked: coverage.size,
    observations: rows.length,
    failures,
    unclassified: [...unclassified.values()],
  };
}
