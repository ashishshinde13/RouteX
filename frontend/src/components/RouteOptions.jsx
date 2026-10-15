export default function RouteOptions({ value, onChange }) {
  function update(key, nextValue) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <section className="space-y-3 border-t border-slate-200 pt-4">
      <h2 className="font-semibold">Route preferences</h2>
      <label className="block text-sm">
        Optimize for
        <select
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          value={value.optimize_for}
          onChange={(event) => update("optimize_for", event.target.value)}
        >
          <option value="time">Shortest travel time</option>
          <option value="distance">Shortest distance</option>
          <option value="traffic">Less traffic</option>
        </select>
      </label>
      {[
        ["avoid_tolls", "Avoid toll roads"],
        ["avoid_highways", "Avoid highways"],
      ].map(([key, label]) => (
        <label className="flex items-center gap-2 text-sm" key={key}>
          <input
            checked={value[key]}
            onChange={(event) => update(key, event.target.checked)}
            type="checkbox"
          />
          {label}
        </label>
      ))}
    </section>
  );
}
