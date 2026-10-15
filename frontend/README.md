# RouteX frontend

React + Vite UI scaffold styled with Tailwind CSS. The map uses Leaflet with OpenStreetMap tiles.

## Run locally

```powershell
npm install
npm run dev
```

Set `VITE_API_BASE_URL` in a local `.env` file to point to the FastAPI service. The default is `http://127.0.0.1:8000`.

The OpenStreetMap tile layer is suitable for development. Review the tile usage policy before production use.
