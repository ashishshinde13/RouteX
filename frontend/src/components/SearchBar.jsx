import { useState } from "react";
import { findRoute } from "../services/api.js";

export default function SearchBar({ preferences, onRoute }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      onRoute(await findRoute({ origin, destination, ...preferences }));
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <label className="block text-sm font-medium">
        Starting point
        <input
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          value={origin}
          onChange={(event) => setOrigin(event.target.value)}
          placeholder="e.g. Central Station"
          required
        />
      </label>
      <label className="block text-sm font-medium">
        Destination
        <input
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="e.g. City Hall"
          required
        />
      </label>
      <button
        className="w-full rounded-md bg-blue-700 px-4 py-2 font-semibold text-white disabled:opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading ? "Finding route..." : "Find route"}
      </button>
      {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
    </form>
  );
}
