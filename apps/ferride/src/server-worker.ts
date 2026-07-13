// Emulation server asynchronous response stub.
self.onmessage = (event: MessageEvent<string>) => {
  self.postMessage(
    `Hello, ${event.data}! You've been greeted from a Web Worker!`,
  );
};
