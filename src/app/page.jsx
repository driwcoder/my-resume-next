import Home from "./home/page";
import Document from "./_documents";
import "./globals.css";
import "./page.module.css";

export default function App() {
  return (
    <main className='app'>
      <div className='app-content'>
        <Document />
        <Home />
      </div>
    </main>
  );
}
