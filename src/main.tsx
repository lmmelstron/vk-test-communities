import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";

async function enableMocking() {
  const { worker } = await import("./app/providers/mocks/browser");

  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />)
);
