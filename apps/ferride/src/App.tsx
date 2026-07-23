import Header from "./components/Header";
import ViewportRoot from "./components/ViewportRoot";

/// The root application window.
export default function App() {
  return (
    <div
      data-theme="dark"
      className="flex h-screen flex-col gap-1 p-1 dark:bg-editor-900"
    >
      {/* Header Container */}
      <Header />
      {/* Viewport Container */}
      <ViewportRoot />
    </div>
  );
}
