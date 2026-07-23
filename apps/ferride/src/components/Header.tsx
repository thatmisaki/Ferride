import Menu from "./Menu";

/// The root application header widget.
export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center p-2">
      {/* Menu Navigation Container */}
      <Menu />
    </header>
  );
}
