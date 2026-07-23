import HeaderMenu from "./HeaderMenu";

/// The root application header widget.
export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center p-1">
      {/* Menu Navigation Container */}
      <HeaderMenu />
    </header>
  );
}
