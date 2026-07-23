import { Menubar } from "radix-ui";

/// The root menu bar navigation widget.
export default function Menu() {
  return (
    <Menubar.Root asChild>
      <nav className="mr-auto flex flex-row items-center justify-start gap-1">
        {/* Menu Items */}
        {["File", "Edit", "Project", "Editor", "Help"].map((item) => (
          <Menubar.Menu key={item}>
            <Menubar.Trigger asChild>
              <button
                type="button"
                className="group cursor-pointer rounded-sm px-2 py-1
                  leading-none transition-colors outline-none
                  data-highlighted:bg-editor-800 dark:hover:bg-editor-800"
              >
                <span
                  className="font-editor text-base font-normal transition-colors
                    dark:text-text-200 dark:group-hover:text-text-100
                    dark:group-data-highlighted:text-text-100"
                >
                  {item}
                </span>
              </button>
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content></Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        ))}
      </nav>
    </Menubar.Root>
  );
}
