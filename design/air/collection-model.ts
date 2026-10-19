/** Local reference data only. Product adapters retain their own document histories. */
export type Layer = {
  id: string;
  name: string;
  kind: "Text" | "Image" | "Shape";
  visible: boolean;
};
type Snapshot = { label: string; rows: Layer[] };
export type CollectionState = { history: Snapshot[]; cursor: number; selected: string[] };
export type CollectionAction =
  | { type: "select"; ids: string[]; checked: boolean }
  | { type: "rename"; id: string; name: string }
  | { type: "visibility"; id: string }
  | { type: "move"; id: string; edge: "up" | "down" | "top" | "bottom" }
  | { type: "remove"; ids: string[] }
  | { type: "jump"; cursor: number }
  | { type: "reset"; count: number };

export function createCollection(count = 5): CollectionState {
  const names = [
    "A little more room.",
    "Morning light",
    "Quiet blue",
    "Notes for a slower Sunday — the complete, unabridged title",
    "Paper",
  ];
  const kinds: Layer["kind"][] = ["Text", "Image", "Shape", "Text", "Shape"];
  return {
    history: [
      {
        label: "Original layers",
        rows: Array.from({ length: count }, (_, i) => ({
          id: `layer-${i + 1}`,
          name: names[i] ?? `Study layer ${i + 1}`,
          kind: kinds[i % 5],
          visible: true,
        })),
      },
    ],
    cursor: 0,
    selected: [],
  };
}

export function collectionReducer(
  state: CollectionState,
  action: CollectionAction,
): CollectionState {
  if (action.type === "reset") return createCollection(action.count);
  const rows = state.history[state.cursor].rows;
  if (action.type === "select") {
    const ids = new Set(rows.map((row) => row.id));
    const selected = new Set(state.selected);
    for (const id of action.ids) {
      if (action.checked && ids.has(id)) selected.add(id);
      else selected.delete(id);
    }
    return { ...state, selected: [...selected] };
  }
  if (action.type === "jump") {
    if (action.cursor < 0 || action.cursor >= state.history.length) return state;
    const ids = new Set(state.history[action.cursor].rows.map((row) => row.id));
    return {
      ...state,
      cursor: action.cursor,
      selected: state.selected.filter((id) => ids.has(id)),
    };
  }
  let next = rows;
  let label = "";
  if (action.type === "remove") {
    const ids = new Set(action.ids);
    next = rows.filter((row) => !ids.has(row.id));
    if (next.length === rows.length) return state;
    label = `Removed ${rows.length - next.length} ${rows.length - next.length === 1 ? "layer" : "layers"}`;
  } else {
    const index = rows.findIndex((row) => row.id === action.id);
    if (index < 0) return state;
    const row = rows[index];
    if (action.type === "rename") {
      const name = action.name.trim();
      if (!name || name.length > 160 || name === row.name) return state;
      next = rows.map((item) => (item.id === row.id ? { ...item, name } : item));
      label = `Renamed ${name}`;
    } else if (action.type === "visibility") {
      next = rows.map((item) => (item.id === row.id ? { ...item, visible: !item.visible } : item));
      label = `${row.visible ? "Hid" : "Showed"} ${row.name}`;
    } else if (action.type === "move") {
      const target =
        action.edge === "top"
          ? 0
          : action.edge === "bottom"
            ? rows.length - 1
            : Math.max(0, Math.min(rows.length - 1, index + (action.edge === "up" ? -1 : 1)));
      if (target === index) return state;
      next = [...rows];
      next.splice(index, 1);
      next.splice(target, 0, row);
      label = `Moved ${row.name} to position ${target + 1}`;
    }
  }
  const history = [...state.history.slice(0, state.cursor + 1), { label, rows: next }];
  return {
    history,
    cursor: history.length - 1,
    selected: state.selected.filter((id) => next.some((row) => row.id === id)),
  };
}
