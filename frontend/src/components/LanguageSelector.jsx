export default function LanguageSelector() {
  return (
    <label className="text-sm">
      <span className="sr-only">Language</span>
      <select className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-white" defaultValue="en">
        <option value="en">English</option>
      </select>
    </label>
  );
}
