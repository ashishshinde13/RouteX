export default function RouteDetails({ route }) {
  return (
    <section className="border-t border-slate-200 pt-4">
      <h2 className="font-semibold">Route details</h2>
      {!route ? (
        <p className="mt-2 text-sm text-slate-600">Choose two locations to see a route.</p>
      ) : (
        <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
          <dt className="text-slate-600">Distance</dt>
          <dd>{route.distance_km} km</dd>
          <dt className="text-slate-600">Estimated time</dt>
          <dd>{route.duration_minutes} min</dd>
        </dl>
      )}
    </section>
  );
}
