import { useLayoutEffect, useReducer, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Menu } from "@base-ui/react/menu";
import { Select } from "@base-ui/react/select";
import { Dialog } from "@base-ui/react/dialog";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import {
  collectionReducer,
  createCollection,
  type CollectionAction,
  type Layer,
} from "./collection-model";

const position = { sideOffset: 8, collisionPadding: 16, positionMethod: "fixed" as const };
const kinds = ["All layers", "Text", "Image", "Shape"];
const kindItems = kinds.map((value) => ({ value, label: value }));

function Mark({ type }: { type: "more" | "down" | "right" | "check" | "eye" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "more" ? (
        <>
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </>
      ) : type === "eye" ? (
        <>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <path
          d={
            type === "down" ? "m6 9 6 6 6-6" : type === "right" ? "m9 6 6 6-6 6" : "m5 12 4 4L19 6"
          }
        />
      )}
    </svg>
  );
}

function CollectionStudy({ focusOnMount }: { focusOnMount: boolean }) {
  const [state, dispatch] = useReducer(collectionReducer, undefined, () => createCollection());
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("All layers");
  const [status, setStatus] = useState("Local layer study. No files are changed.");
  const [editing, setEditing] = useState<Layer | null>(null);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState(false);
  const [discard, setDiscard] = useState(false);
  const [pointerMotion, setPointerMotion] = useState(false);
  const allCheck = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const popup = useRef<HTMLDivElement>(null);
  const keep = useRef<HTMLButtonElement>(null);
  const undo = useRef<HTMLButtonElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const origin = useRef<HTMLElement | null>(null);
  const dialogPending = useRef(false);
  const discarding = useRef(false);
  const focusUndo = useRef(false);
  const rows = state.history[state.cursor].rows;
  const visible = rows.filter(
    (row) =>
      (kind === "All layers" || row.kind === kind) &&
      row.name.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
  );
  const visibleSelected = visible.filter((row) => state.selected.includes(row.id)).length;
  const filtered = Boolean(query.trim()) || kind !== "All layers";
  useLayoutEffect(() => {
    if (allCheck.current)
      allCheck.current.indeterminate = visibleSelected > 0 && visibleSelected < visible.length;
  }, [visibleSelected, visible.length]);
  useLayoutEffect(() => {
    if (focusUndo.current) {
      undo.current?.focus();
      focusUndo.current = false;
    }
  }, [state.cursor]);

  function apply(action: CollectionAction) {
    const next = collectionReducer(state, action);
    if (action.type === "remove" && next !== state) focusUndo.current = true;
    dispatch(action);
    if (next !== state)
      setStatus(
        action.type === "jump"
          ? `Viewing: ${next.history[next.cursor].label}.`
          : `${next.history[next.cursor].label}. Undo is available.`,
      );
  }

  function reset(count: number) {
    dispatch({ type: "reset", count });
    setQuery("");
    setKind("All layers");
    setStatus(`${count} sample layers loaded. The local study history was reset.`);
  }

  return (
    <>
      <div className="air-collection-layout">
        <section aria-labelledby="air-layers-title">
          <div className="air-collection-heading">
            <div>
              <h2 id="air-layers-title">Layers</h2>
              <p className="air-help">Topmost first. Every move can be undone.</p>
            </div>
            <span className="air-collection-count">{rows.length} total</span>
          </div>
          <div className="air-collection-filters">
            <label className="air-label">
              Find a layer
              <input
                className="air-field"
                type="search"
                name="layer-search"
                ref={search}
                autoFocus={focusOnMount}
                placeholder="Search by name…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <div>
              <label className="air-label" id="air-kind-label">
                Show
              </label>
              <Select.Root
                value={kind}
                onValueChange={(value) => {
                  if (value) setKind(value);
                }}
                items={kindItems}
              >
                <Select.Trigger
                  className="air-field air-select-trigger"
                  aria-labelledby="air-kind-label"
                  id="air-kind"
                >
                  <Select.Value />
                  <Select.Icon className="air-select-icon">
                    <Mark type="down" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Positioner
                    {...position}
                    className="air-floating-positioner"
                    align="start"
                    alignItemWithTrigger={false}
                  >
                    <Select.Popup className="air-menu air-select-popup">
                      <Select.List>
                        {kinds.map((value) => (
                          <Select.Item className="air-menu-item" key={value} value={value}>
                            <Select.ItemText>{value}</Select.ItemText>
                            <Select.ItemIndicator className="air-menu-check">
                              <Mark type="check" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.List>
                    </Select.Popup>
                  </Select.Positioner>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
          <div className="air-collection-selection">
            <label className="air-check-label">
              <input
                ref={allCheck}
                className="air-check"
                type="checkbox"
                checked={visible.length > 0 && visibleSelected === visible.length}
                disabled={!visible.length}
                onChange={(event) =>
                  dispatch({
                    type: "select",
                    ids: visible.map((row) => row.id),
                    checked: event.target.checked,
                  })
                }
              />
              Select visible
            </label>
            <p className="air-help" role="status">
              {state.selected.length} selected
              {state.selected.length > visibleSelected
                ? ` · ${state.selected.length - visibleSelected} outside this view`
                : ""}
            </p>
          </div>
          <div className="air-collection-actions">
            <button
              className="air-button"
              disabled={!state.selected.length}
              onClick={() => {
                dispatch({ type: "select", ids: state.selected, checked: false });
                if (visible.length) allCheck.current?.focus();
                else search.current?.focus();
              }}
            >
              Clear selection
            </button>
            <button
              className="air-button"
              disabled={!state.selected.length}
              onClick={() => {
                apply({ type: "remove", ids: state.selected });
              }}
            >
              Remove selected ({state.selected.length})
            </button>
            {filtered && (
              <button
                className="air-button air-button--quiet"
                onClick={() => {
                  setQuery("");
                  setKind("All layers");
                  search.current?.focus();
                }}
              >
                Clear filters
              </button>
            )}
          </div>
          {filtered && (
            <p className="air-help">
              {visible.length} matching layers. Clear filters to change the stacking order.
            </p>
          )}
          <ul className="air-collection-list" aria-label="Layer stack" data-long={rows.length > 50}>
            {visible.map((row) => {
              const index = rows.findIndex((item) => item.id === row.id);
              return (
                <li
                  className="air-collection-row"
                  key={row.id}
                  data-selected={state.selected.includes(row.id)}
                >
                  <label className="air-collection-choice">
                    <input
                      className="air-check"
                      type="checkbox"
                      checked={state.selected.includes(row.id)}
                      onChange={(event) =>
                        dispatch({ type: "select", ids: [row.id], checked: event.target.checked })
                      }
                    />
                    <span className="air-layer-mark" data-kind={row.kind} aria-hidden="true">
                      {row.kind === "Text" ? (
                        "Aa"
                      ) : row.kind === "Image" ? (
                        <Mark type="eye" />
                      ) : (
                        "◯"
                      )}
                    </span>
                    <span className="air-collection-name">
                      <span>{row.name}</span>
                      <span className="air-help">
                        {row.kind} · {row.visible ? "Visible" : "Hidden"}
                      </span>
                    </span>
                  </label>
                  <div className="air-collection-row-actions">
                    <button
                      className="air-icon-button air-button--quiet"
                      aria-label={`${row.visible ? "Hide" : "Show"} ${row.name}`}
                      onClick={() => apply({ type: "visibility", id: row.id })}
                    >
                      <Mark type="eye" />
                    </button>
                    <Menu.Root>
                      <Menu.Trigger
                        className="air-icon-button air-button--quiet"
                        aria-label={`Actions for ${row.name}`}
                        id={`actions-${row.id}`}
                      >
                        <Mark type="more" />
                      </Menu.Trigger>
                      <Menu.Portal>
                        <Menu.Positioner
                          {...position}
                          className="air-floating-positioner"
                          align="end"
                        >
                          <Menu.Popup
                            className="air-menu"
                            finalFocus={() =>
                              dialogPending.current
                                ? false
                                : (document.getElementById(`actions-${row.id}`) ?? undo.current)
                            }
                          >
                            <Menu.Group>
                              <Menu.GroupLabel className="air-menu-label">
                                Layer actions
                              </Menu.GroupLabel>
                              <Menu.Item
                                className="air-menu-item"
                                onClick={(event) => {
                                  origin.current = document.getElementById(`actions-${row.id}`);
                                  dialogPending.current = true;
                                  discarding.current = false;
                                  setDraft(row.name);
                                  setError(false);
                                  setPointerMotion(event.detail > 0);
                                  setEditing(row);
                                }}
                              >
                                Rename…
                              </Menu.Item>
                              <Menu.SubmenuRoot>
                                <Menu.SubmenuTrigger
                                  className="air-menu-item"
                                  disabled={filtered}
                                  openOnHover={false}
                                >
                                  Arrange
                                  <Mark type="right" />
                                </Menu.SubmenuTrigger>
                                <Menu.Portal>
                                  <Menu.Positioner
                                    {...position}
                                    className="air-floating-positioner"
                                  >
                                    <Menu.Popup className="air-menu">
                                      {(
                                        [
                                          ["up", "Move up"],
                                          ["down", "Move down"],
                                          ["top", "Move to top"],
                                          ["bottom", "Move to bottom"],
                                        ] as const
                                      ).map(([edge, label]) => (
                                        <Menu.Item
                                          className="air-menu-item"
                                          key={edge}
                                          disabled={
                                            edge === "up" || edge === "top"
                                              ? index === 0
                                              : index === rows.length - 1
                                          }
                                          onClick={() => apply({ type: "move", id: row.id, edge })}
                                        >
                                          {label}
                                        </Menu.Item>
                                      ))}
                                    </Menu.Popup>
                                  </Menu.Positioner>
                                </Menu.Portal>
                              </Menu.SubmenuRoot>
                              <Menu.Separator className="air-menu-separator" />
                              <Menu.Item
                                className="air-menu-item"
                                onClick={() => apply({ type: "remove", ids: [row.id] })}
                              >
                                Remove layer
                              </Menu.Item>
                            </Menu.Group>
                          </Menu.Popup>
                        </Menu.Positioner>
                      </Menu.Portal>
                    </Menu.Root>
                  </div>
                </li>
              );
            })}
          </ul>
          {!visible.length && (
            <div className="air-collection-empty">
              <h3>{rows.length ? "Nothing matches yet." : "A little room to begin again."}</h3>
              <p className="air-help">
                {rows.length
                  ? "Try another name or clear the filters. Your layers are still here."
                  : "Undo brings your layers back, including their names and stacking order."}
              </p>
              {!rows.length && (
                <button
                  className="air-button"
                  onClick={() => apply({ type: "jump", cursor: state.cursor - 1 })}
                  disabled={!state.cursor}
                >
                  Undo removal
                </button>
              )}
            </div>
          )}
        </section>
        <aside className="air-collection-history" aria-labelledby="air-history-title">
          <h2 id="air-history-title">Your way back.</h2>
          <p className="air-help">Return to any step. A new edit replaces the steps ahead of it.</p>
          <div className="air-collection-actions">
            <button
              className="air-button"
              ref={undo}
              aria-disabled={!state.cursor}
              onClick={() => apply({ type: "jump", cursor: state.cursor - 1 })}
            >
              Undo
            </button>
            <button
              className="air-button"
              aria-disabled={state.cursor === state.history.length - 1}
              onClick={() => apply({ type: "jump", cursor: state.cursor + 1 })}
            >
              Redo
            </button>
          </div>
          <ol className="air-history-list" aria-label="Edit history">
            {state.history.map((step, index) => (
              <li key={index}>
                <button
                  className="air-history-step"
                  aria-current={state.cursor === index ? "step" : undefined}
                  onClick={() => apply({ type: "jump", cursor: index })}
                >
                  <span className="air-history-dot" aria-hidden="true" />
                  <span>
                    {step.label}
                    <span className="air-help">
                      {index === state.cursor
                        ? "Current step"
                        : index > state.cursor
                          ? "Ahead of current step"
                          : `Step ${index + 1}`}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <p className="air-collection-status air-help" role="status">
        {status}
      </p>
      <details className="air-contents air-collection-scenarios">
        <summary>Try a longer list</summary>
        <p className="air-help">Replace this local sample and reset its history.</p>
        <div className="air-collection-actions">
          <button className="air-button" onClick={() => reset(100)}>
            Load 100 layers
          </button>
          <button className="air-button" onClick={() => reset(5)}>
            Reset sample
          </button>
        </div>
      </details>
      <Dialog.Root
        open={Boolean(editing)}
        onOpenChange={(open, event) => {
          setPointerMotion("detail" in event.event && Number(event.event.detail) > 0);
          if (!open) {
            if (editing && draft !== editing.name) {
              event.cancel();
              setDiscard(true);
            } else setEditing(null);
          }
        }}
        onOpenChangeComplete={(open) => {
          if (!open) dialogPending.current = false;
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="air-modal-backdrop" />
          <Dialog.Viewport className="air-modal-viewport">
            <Dialog.Popup
              className="air-modal"
              id="air-layer-rename"
              ref={popup}
              data-air-motion={pointerMotion ? "pointer" : "immediate"}
              initialFocus={(type) =>
                type === "touch" || matchMedia("(pointer: coarse)").matches
                  ? popup.current
                  : nameInput.current
              }
              finalFocus={() => (origin.current?.isConnected ? origin.current : undo.current)}
            >
              <Dialog.Title className="air-floating-title">A name that feels right.</Dialog.Title>
              <Dialog.Description className="air-help">
                Rename this layer. The rest of your work stays in place.
              </Dialog.Description>
              <form
                className="air-modal-form"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!draft.trim()) {
                    setError(true);
                    nameInput.current?.focus();
                    return;
                  }
                  if (editing) apply({ type: "rename", id: editing.id, name: draft });
                  setEditing(null);
                }}
              >
                <label className="air-label" htmlFor="air-layer-name">
                  Layer name · required
                </label>
                <input
                  className="air-field"
                  id="air-layer-name"
                  name="layer-name"
                  autoComplete="off"
                  value={draft}
                  ref={nameInput}
                  maxLength={160}
                  required
                  aria-invalid={error}
                  aria-describedby="air-layer-error"
                  onChange={(event) => {
                    setDraft(event.target.value);
                    setError(false);
                  }}
                />
                <p className="air-help air-help--error" id="air-layer-error" role="status">
                  {error ? "Enter a name before saving." : ""}
                </p>
                <div className="air-floating-actions">
                  <Dialog.Close className="air-button" type="button">
                    Cancel
                  </Dialog.Close>
                  <button
                    className="air-button air-button--primary"
                    type="submit"
                    onClick={(event) => setPointerMotion(event.detail > 0)}
                  >
                    Save name
                  </button>
                </div>
              </form>
              <AlertDialog.Root open={discard} onOpenChange={setDiscard}>
                <AlertDialog.Portal>
                  <AlertDialog.Backdrop
                    className="air-modal-backdrop"
                    data-air-layer="nested"
                    forceRender
                  />
                  <AlertDialog.Viewport className="air-modal-viewport" data-air-layer="nested">
                    <AlertDialog.Popup
                      className="air-modal"
                      id="air-layer-discard"
                      initialFocus={keep}
                      finalFocus={() => (discarding.current ? false : nameInput.current)}
                    >
                      <AlertDialog.Title className="air-floating-title">
                        Leave this name behind?
                      </AlertDialog.Title>
                      <AlertDialog.Description className="air-help">
                        Your draft will be discarded. The layer keeps its current name.
                      </AlertDialog.Description>
                      <div className="air-floating-actions">
                        <AlertDialog.Close className="air-button" ref={keep}>
                          Keep editing
                        </AlertDialog.Close>
                        <button
                          className="air-button air-button--danger"
                          onClick={() => {
                            discarding.current = true;
                            setDiscard(false);
                            setEditing(null);
                          }}
                        >
                          Discard name
                        </button>
                      </div>
                    </AlertDialog.Popup>
                  </AlertDialog.Viewport>
                </AlertDialog.Portal>
              </AlertDialog.Root>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function mountCollectionStudy(element: HTMLElement, focusOnMount = false) {
  const root = createRoot(element);
  root.render(<CollectionStudy focusOnMount={focusOnMount} />);
  return () => root.unmount();
}
