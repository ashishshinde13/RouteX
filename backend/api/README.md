# RouteX API

FastAPI app entry point: `app.main:app`.

Run from this directory:

```powershell
pip install -r requirements.txt
uvicorn app.main:app --reload
```

`GET /health` provides a basic service check. `POST /routes` defines the request contract but currently returns HTTP 501 until the routing engine is integrated.
