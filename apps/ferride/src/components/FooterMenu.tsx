import { Portal, Tabs } from "radix-ui";

/// The root header menu bar navigation widget.
export default function FooterMenu({
  tabRef,
}: {
  tabRef: HTMLDivElement | null;
}) {
  const items = ["Output", "Debugger"];

  return (
    <div className="flex flex-1 flex-row items-center justify-between">
      <Tabs.Root defaultValue="Output">
        <Tabs.List asChild>
          <nav className="flex flex-row items-center justify-start gap-1">
            {/* Menu Items */}
            {items.map((item) => (
              <Tabs.Trigger key={item} value={item} asChild>
                <button
                  type="button"
                  className="group cursor-pointer rounded-sm px-2 py-1
                    leading-none transition-colors outline-none
                    dark:hover:bg-editor-750
                    dark:data-[state=active]:bg-editor-700"
                >
                  <span
                    className="font-editor text-base font-normal
                      transition-colors dark:text-text-200
                      dark:group-hover:text-text-100
                      dark:group-data-[state=active]:text-text-100"
                  >
                    {item}
                  </span>
                </button>
              </Tabs.Trigger>
            ))}
          </nav>
        </Tabs.List>
        {items.map((item) => (
          <Tabs.Content key={item} value={item} asChild>
            <Portal.Root container={tabRef} asChild>
              <div
                className="flex h-full flex-1 items-center justify-center
                  font-editor text-base font-normal transition-colors
                  dark:text-text-300"
              >
                {item}
              </div>
            </Portal.Root>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
