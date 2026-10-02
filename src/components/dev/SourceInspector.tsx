"use client";

import { useEffect, useState } from "react";

/**
 * Dev-only "click to source" helper. Hold ⌥ Option (Alt) to highlight the
 * element under the cursor; ⌥-click opens the line that rendered it in VS Code.
 * Relies on the data-src attributes added by dev/source-loader.cjs.
 */

type Target = { rect: DOMRect; src: string };

function findSource(el: EventTarget | null): HTMLElement | null {
  return el instanceof Element ? el.closest<HTMLElement>("[data-src]") : null;
}

function shortPath(src: string) {
  const i = src.indexOf("/src/");
  return i === -1 ? src : src.slice(i + 1);
}

export default function SourceInspector() {
  const [target, setTarget] = useState<Target | null>(null);

  useEffect(() => {
    let altDown = false;
    let last: { x: number; y: number } | null = null;

    function update() {
      if (!altDown || !last) return setTarget(null);
      const el = findSource(document.elementFromPoint(last.x, last.y));
      setTarget(el ? { rect: el.getBoundingClientRect(), src: el.dataset.src! } : null);
    }

    function onMove(e: MouseEvent) {
      last = { x: e.clientX, y: e.clientY };
      altDown = e.altKey;
      update();
    }
    function onKey(e: KeyboardEvent) {
      altDown = e.altKey;
      update();
    }
    function onBlur() {
      altDown = false;
      update();
    }
    function onClick(e: MouseEvent) {
      if (!e.altKey) return;
      const el = findSource(e.target);
      if (!el) return;
      // Capture phase: stop links/buttons from also handling the click.
      e.preventDefault();
      e.stopPropagation();
      window.location.href = `vscode://file${el.dataset.src}`;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);
    window.addEventListener("scroll", update, true);
    window.addEventListener("blur", onBlur);
    window.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("click", onClick, true);
    };
  }, []);

  if (!target) return null;
  const { rect, src } = target;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className="absolute border-2 border-sky-500 bg-sky-500/10"
        style={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
      />
      <div
        className="absolute bg-sky-600 px-1.5 py-0.5 font-mono text-[11px] text-white"
        style={{ top: Math.max(rect.top - 20, 0), left: rect.left }}
      >
        {shortPath(src)}
      </div>
    </div>
  );
}
