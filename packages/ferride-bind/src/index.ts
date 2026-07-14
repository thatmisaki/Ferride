import { Request, Response } from "./types";

export default class Server {
  protected worker: Worker;

  protected currentId: number = 0;

  protected pendingRequests: Map<number, { resolve: (value: string | PromiseLike<string>) => void, reject: (reason?: any) => void }> = new Map();

  public constructor() {
    this.worker = new Worker(new URL("worker.ts", import.meta.url), { type: "module" });

    this.worker.addEventListener("message", ({ data: { id, data } }: MessageEvent<Response>) => {
      const promise = this.pendingRequests.get(id);
      promise?.resolve(data);
      this.pendingRequests.delete(id);
    });
  }

  public dispose() {
    this.worker.terminate();
  }

  public async greet(name: string): Promise<string> {
    const messageId = this.currentId++;

    return new Promise((resolve, reject) => {
      this.pendingRequests.set(messageId, { resolve, reject });
      this.worker.postMessage({ id: messageId, data: name } satisfies Request);
    });
  }
}
