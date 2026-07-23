import { useState } from "react";
import Footer from "./Footer";

/// The root application viewport widget.
export default function ViewportRoot() {
  const [tabRef, setTabRef] = useState<HTMLDivElement | null>(null);

  return (
    <main className="flex flex-1">
      {/* Column Split */}
      <div className="flex flex-1 flex-col gap-1">
        {/* Game Viewport */}
        <div
          ref={setTabRef}
          className="flex-1 rounded-sm dark:bg-editor-850"
        ></div>
        {/* Footer Viewport */}
        <Footer tabRef={tabRef} />
      </div>
    </main>
  );
}
