import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { createRoot } from "react-dom/client";
import { Popover } from "@base-ui/react/popover";
import { Tooltip } from "@base-ui/react/tooltip";
import { Menu } from "@base-ui/react/menu";
import { ContextMenu } from "@base-ui/react/context-menu";
import { Dialog } from "@base-ui/react/dialog";
import { AlertDialog } from "@base-ui/react/alert-dialog";

const originalName = "Field notes.pdf";
const position = { sideOffset: 8, collisionPadding: 16, positionMethod: "fixed" as const };

function Glyph({ kind }: { kind: "more" | "info" | "check" }) {
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
      {kind === "check" ? (
        <path d="m5 12 4 4L19 6" />
      ) : kind === "info" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v6m0-10v.01" />
        </>
      ) : (
        <>
          <circle cx="5" cy="12" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </>
      )}
    </svg>
  );
}

function OverlayStudy({ focusOnMount }: { focusOnMount: boolean }) {
  const [name, setName] = useState(originalName);
  const [draft, setDraft] = useState(originalName);
  const [error, setError] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [details, setDetails] = useState(true);
  const [hintOpen, setHintOpen] = useState(false);
  const [paper, setPaper] = useState("A4");
  const [removed, setRemoved] = useState(false);
  const [rename, setRename] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [contextOpen, setContextOpen] = useState(false);
  const [contextKeyboard, setContextKeyboard] = useState(false);
  const [pointerMotion, setPointerMotion] = useState(false);
  const [status, setStatus] = useState("Local interaction study. No files are changed.");
  const more = useRef<HTMLButtonElement>(null);
  const restore = useRef<HTMLButtonElement>(null);
  const cancel = useRef<HTMLButtonElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const renamePopup = useRef<HTMLDivElement>(null);
  const dialogPending = useRef(false);
  const contextTarget = useRef<HTMLDivElement>(null);
  const dialogReturn = useRef<HTMLElement | null>(null);
  const focusRestoredSample = useRef(false);
  useLayoutEffect(() => {
    if (!removed && focusRestoredSample.current) {
      more.current?.focus();
      focusRestoredSample.current = false;
    }
  }, [removed]);

  function openRename(event: MouseEvent) {
    dialogPending.current = true;
    setDraft(name);
    setError(false);
    setPointerMotion(event.detail > 0);
    setRename(true);
  }
  function openConfirmation(event: MouseEvent) {
    dialogPending.current = true;
    setPointerMotion(event.detail > 0);
    setConfirm(true);
  }
  function actionItems(origin: "menu" | "context") {
    const rememberOrigin = () => {
      dialogReturn.current = origin === "context" ? contextTarget.current : more.current;
    };
    return (
      <Menu.Group>
        <Menu.GroupLabel className="air-menu-label">Sample actions</Menu.GroupLabel>
        <Menu.Item
          className="air-menu-item"
          onClick={(event) => {
            rememberOrigin();
            openRename(event);
          }}
        >
          Rename sample…
        </Menu.Item>
        <Menu.CheckboxItem
          className="air-menu-item"
          checked={reviewed}
          onCheckedChange={(checked) => {
            setReviewed(checked);
            setStatus(checked ? "Sample marked as reviewed." : "Review mark removed.");
          }}
          closeOnClick={false}
        >
          <span>Reviewed</span>
          <Menu.CheckboxItemIndicator className="air-menu-check">
            <Glyph kind="check" />
          </Menu.CheckboxItemIndicator>
        </Menu.CheckboxItem>
        <Menu.Item className="air-menu-item" disabled>
          Download original · unavailable
        </Menu.Item>
        <Menu.Separator className="air-menu-separator" />
        <Menu.Item
          className="air-menu-item air-menu-item--danger"
          onClick={(event) => {
            rememberOrigin();
            openConfirmation(event);
          }}
        >
          Remove sample…
        </Menu.Item>
      </Menu.Group>
    );
  }
  // An opening dialog takes focus from the menu; do not restore the menu trigger over it.
  const menuFinalFocus = () => (dialogPending.current ? false : more.current);

  return (
    <Tooltip.Provider delay={400} closeDelay={0}>
      <div className="air-study-overlays">
        <div className="air-study-toolbar">
          <Popover.Root>
            <Popover.Trigger className="air-button" id="air-view-settings" autoFocus={focusOnMount}>
              View settings
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Positioner {...position} className="air-floating-positioner" align="start">
                <Popover.Popup className="air-popover" id="air-settings-popup">
                  <Popover.Title className="air-floating-title">A clearer view.</Popover.Title>
                  <Popover.Description className="air-help">
                    These settings update the sample below.
                  </Popover.Description>
                  <label className="air-check-label">
                    <input
                      className="air-check"
                      type="checkbox"
                      checked={details}
                      onChange={(e) => setDetails(e.target.checked)}
                    />
                    Show page details
                  </label>
                  <label className="air-label" htmlFor="air-sample-paper">
                    Paper size
                  </label>
                  <select
                    className="air-field"
                    id="air-sample-paper"
                    value={paper}
                    onChange={(e) => setPaper(e.target.value)}
                  >
                    <option>A4</option>
                    <option>Letter</option>
                  </select>
                  <div className="air-floating-actions">
                    <Popover.Close className="air-button">Done</Popover.Close>
                  </div>
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
          <Tooltip.Root open={hintOpen} onOpenChange={(open) => setHintOpen(open)}>
            <Tooltip.Trigger
              className="air-icon-button"
              id="air-details-hint"
              aria-label="Show page details"
              aria-describedby={hintOpen ? "air-details-tooltip" : undefined}
              aria-pressed={details}
              onClick={() => setDetails(!details)}
            >
              <Glyph kind="info" />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner {...position} className="air-floating-positioner" side="top">
                <Tooltip.Popup className="air-tooltip" id="air-details-tooltip" role="tooltip">
                  Show or hide page details
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
        {removed ? (
          <p className="air-study-empty">The sample has been removed from this study.</p>
        ) : (
          <ContextMenu.Root
            open={contextOpen}
            onOpenChange={(open) => {
              setContextOpen(open);
              if (!open) setContextKeyboard(false);
            }}
          >
            <ContextMenu.Trigger
              className="air-study-file"
              id="air-context-target"
              ref={contextTarget}
              role="group"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return;
                if (event.key === "ContextMenu" || (event.key === "F10" && event.shiftKey)) {
                  event.preventDefault();
                  setContextKeyboard(true);
                  setContextOpen(true);
                }
              }}
              aria-label={`${name}. Sample document actions`}
            >
              <div className="air-study-file-copy">
                <p className="air-study-filename">{name}</p>
                {details ? <p className="air-help">4 pages · {paper} · Local sample</p> : null}
                {reviewed ? <p className="air-help">Reviewed</p> : null}
              </div>
              <Menu.Root>
                <Menu.Trigger
                  className="air-icon-button"
                  id="air-more-actions"
                  aria-label="Sample actions"
                  ref={more}
                >
                  <Glyph kind="more" />
                </Menu.Trigger>
                <Menu.Portal>
                  <Menu.Positioner {...position} className="air-floating-positioner" align="end">
                    <Menu.Popup
                      className="air-menu"
                      id="air-action-menu"
                      finalFocus={menuFinalFocus}
                    >
                      {actionItems("menu")}
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
              <ContextMenu.Positioner
                {...position}
                className="air-floating-positioner"
                anchor={contextKeyboard ? contextTarget : undefined}
              >
                <ContextMenu.Popup
                  className="air-menu"
                  id="air-context-menu"
                  finalFocus={() => (dialogPending.current ? false : contextTarget.current)}
                >
                  {actionItems("context")}
                </ContextMenu.Popup>
              </ContextMenu.Positioner>
            </ContextMenu.Portal>
          </ContextMenu.Root>
        )}
        <p className="air-help">
          Use Sample actions, or right-click the document. The same actions are available by touch
          and keyboard.
        </p>
        <div className="air-study-toolbar">
          <button
            className="air-button air-button--quiet"
            id="air-restore-sample"
            ref={restore}
            disabled={!removed}
            onClick={() => {
              focusRestoredSample.current = true;
              setRemoved(false);
              setStatus("Sample restored with its name and review mark.");
            }}
          >
            Restore sample
          </button>
        </div>
        <p className="air-help" id="air-overlay-status" role="status" aria-atomic="true">
          {status}
        </p>
      </div>
      <Dialog.Root
        open={rename}
        onOpenChange={(open, event) => {
          setPointerMotion("detail" in event.event && Number(event.event.detail) > 0);
          setRename(open);
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
              id="air-rename-dialog"
              ref={renamePopup}
              initialFocus={(type) =>
                type === "touch" || matchMedia("(pointer: coarse)").matches
                  ? renamePopup.current
                  : nameInput.current
              }
              data-air-motion={pointerMotion ? "pointer" : "immediate"}
              finalFocus={() => dialogReturn.current}
            >
              <Dialog.Title className="air-floating-title">Rename the sample</Dialog.Title>
              <Dialog.Description className="air-help">
                Only this study changes. The file on your device keeps its name.
              </Dialog.Description>
              <form
                className="air-modal-form"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  const value = draft.trim();
                  if (!value) {
                    setError(true);
                    nameInput.current?.focus();
                    return;
                  }
                  setName(value);
                  setRename(false);
                  setStatus(`Sample renamed to ${value}.`);
                }}
              >
                <label className="air-label" htmlFor="air-rename-input">
                  File name · required
                </label>
                <input
                  className="air-field"
                  id="air-rename-input"
                  ref={nameInput}
                  name="sample-name"
                  autoComplete="off"
                  value={draft}
                  required
                  maxLength={160}
                  aria-invalid={error}
                  aria-describedby="air-rename-help air-rename-error"
                  onChange={(e) => setDraft(e.target.value)}
                  onBlur={() => setError(!draft.trim())}
                />
                <p className="air-help" id="air-rename-help">
                  Up to 160 characters. Keep a name you’ll recognise.
                </p>
                <p className="air-help air-help--error" id="air-rename-error" hidden={!error}>
                  Enter a name before saving.
                </p>
                <p className="air-help" role="status">
                  {error ? "The name is empty. Your previous name is unchanged." : ""}
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
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
      <AlertDialog.Root
        open={confirm}
        onOpenChange={(open, event) => {
          setPointerMotion("detail" in event.event && Number(event.event.detail) > 0);
          setConfirm(open);
        }}
        onOpenChangeComplete={(open) => {
          if (!open) dialogPending.current = false;
        }}
      >
        <AlertDialog.Portal>
          <AlertDialog.Backdrop className="air-modal-backdrop" />
          <AlertDialog.Viewport className="air-modal-viewport">
            <AlertDialog.Popup
              className="air-modal"
              id="air-remove-dialog"
              data-air-motion={pointerMotion ? "pointer" : "immediate"}
              initialFocus={cancel}
              finalFocus={() => (removed ? restore.current : dialogReturn.current)}
            >
              <AlertDialog.Title className="air-floating-title">
                Remove this sample?
              </AlertDialog.Title>
              <AlertDialog.Description className="air-help">
                “{name}” will leave this study. Your files stay untouched, and you can restore the
                sample afterward.
              </AlertDialog.Description>
              <div className="air-floating-actions">
                <AlertDialog.Close className="air-button" ref={cancel} id="air-remove-cancel">
                  Keep sample
                </AlertDialog.Close>
                <button
                  className="air-button air-button--danger"
                  id="air-remove-confirm"
                  onClick={(event) => {
                    setPointerMotion(event.detail > 0);
                    setRemoved(true);
                    setConfirm(false);
                    setStatus("Sample removed from the study. Restore it whenever you’re ready.");
                  }}
                >
                  Remove sample
                </button>
              </div>
            </AlertDialog.Popup>
          </AlertDialog.Viewport>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Tooltip.Provider>
  );
}

export function mountOverlayStudy(element: HTMLElement, focusOnMount = false) {
  const root = createRoot(element);
  root.render(<OverlayStudy focusOnMount={focusOnMount} />);
  return () => root.unmount();
}
