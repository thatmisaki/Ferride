import init, { greet } from "@ferride/ferride-wasm";
import { Request } from "./types";

const initialised = init();

self.addEventListener("message", ({ data: { id, data: name } }: MessageEvent<Request>) =>
  initialised.then(() => self.postMessage({ id, data: greet(name) })));
