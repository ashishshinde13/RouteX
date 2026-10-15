import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector.jsx";
import RouteDetails from "./components/RouteDetails.jsx";
import RouteOptions from "./components/RouteOptions.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MapView from "./map/MapView.jsx";

export default function App() {
  const [route, setRoute] = useState(null);
  const [preferences, setPreferences] = useState({
    optimize_for: "time",
    avoid_tolls: false,
    avoid_highways: false,
  });

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <header className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
        <div>
          <h1 className="text-2xl font-bold">RouteX</h1>
          <p className="text-sm text-slate-300">Intelligent route optimization</p>
        </div>
        <LanguageSelector />
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 p-6 lg:grid-cols-[22rem_1fr]">
        <aside className="space-y-5 rounded-xl bg-white p-5 shadow-sm">
          <SearchBar preferences={preferences} onRoute={setRoute} />
          <RouteOptions value={preferences} onChange={setPreferences} />
          <RouteDetails route={route} />
        </aside>
        <MapView route={route} />
      </div>
    </main>
  );
}
