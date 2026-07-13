import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  // Emulation server worker thread stub.
  const worker = useRef<Worker>(null);

  useEffect(() => {
    // Initialise the emulation server worker thread.
    worker.current = new Worker(new URL("server-worker.ts", import.meta.url));
    // Receive responses and update UI accordingly.
    worker.current.onmessage = (event: MessageEvent<string>) => {
      setGreetMsg(event.data);
    };
    // Clean up by terminating worker thread.
    return () => worker.current?.terminate();
  }, []);

  function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    // setGreetMsg(await invoke("greet", { name }));

    // Initialise asynchronous emulation server request.
    worker.current?.postMessage(name);
  }

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}
