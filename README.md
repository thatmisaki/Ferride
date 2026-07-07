# Ferride

> [!WARNING]
>
> Ferride is currently an in-progress work.

Ferride is an IDE for GB(C) development, built for assembly developers and power users.

## Design Goals

Ferride intends to provide the following:

### Workflow

Ferride can be used for both game development and reverse engineering.

Ferride's conceit is to provide a workflow where all editor components interact
both statically and at runtime, allowing for developers to track variables in
and out of code, view memory from different perspectives during different gameplay
states, profile game code through PPU visualisations and flamegraphs,
utilise save states, input playback, and rewinding, and most significantly
apply modifications to code and data at runtime.

Since Ferride is designed to be highly compatible with standard tooling,
users should ideally be able to migrate RGBDS codebases without much effort.

### Components

- **Emulator:** A highly programmable, accuracy-oriented GB(C) emulator,
  built on reusable components and event-driven communication.
- **Debugger:** A fully-fledged built-in debugging suite with support for
  breakpoints, watchpoints, memory queries, and backtracking.
- **Assembly Editor:** A built-in assembly editor with language + debug server
  capabilities and live in-game diagnostics and hot reloading.
- **Graphics Editor:** A built-in sprite editor that compiles and gets tracked
  directly within assembly source code.

### Compatibility

- **RGBDS:** Full support for RGBASM-compliant assembly and RGBDS tooling.
  Ideally, RGBDS projects should have near drop-in support.

## Project Intent

Ferride is primarily built as a passion project. It is primarily a project
through which I can combine my own personal interests in compilers / assemblers,
emulation, hardware-level programming, and GB(C) game development; as well as
being a medium through which I can practice large-scale programming projects for
my own career.

Thus, while Ferride is open-source as a result of my own appreciation for FOSS
and belief in the value of the product I am making for others to use, it is not
currently open to contribution. However, developers who take an interest in my
work may freely fork the repository, and I would encourage anyone interested to
do so! There is a future where I open up Ferride to contribution, but for now,
I would like to treat this project as my own personal work.

Thank you for your understanding!
