import { Separator } from "radix-ui";
import FooterMenu from "./FooterMenu";

/// The root application footer widget.
export default function Footer({ tabRef }: { tabRef: HTMLDivElement | null }) {
  return (
    <footer
      className="flex flex-row items-center justify-start gap-4 rounded-sm p-2
        dark:bg-editor-800"
    >
      {/* Menu Navigation Container */}
      <FooterMenu tabRef={tabRef} />

      <Separator.Root
        className="h-full w-0.5 rounded-sm dark:bg-editor-900"
        decorative
        orientation="vertical"
      />

      {/* GitHub Repository Anchor */}
      <a
        href="https://github.com/thatmisaki/Ferride"
        target="_blank"
        className="mr-2 font-editor transition-colors hover:underline
          dark:text-text-300"
      >
        ferride-v0.1.0.alpha
      </a>
    </footer>
  );
}
