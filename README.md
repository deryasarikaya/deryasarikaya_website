# deryasarikaya.ai — Portfolio Website

Eine einfache Flask-Portfolio-Website.

## Lokal starten

```bash
# 1. In den Projektordner
cd deryasarikaya

# 2. Virtual Environment erstellen
python -m venv venv

# 3. Aktivieren
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows

# 4. Dependencies installieren
pip install -r requirements.txt

# 5. Starten
python app.py
```

Dann im Browser: http://localhost:5000

## Auf Render deployen

1. Code auf GitHub pushen
2. render.com → New → Web Service
3. GitHub Repo verbinden
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `gunicorn app:app`
6. Deploy!

## Eigene Domain verbinden

In Render unter Settings → Custom Domain: `deryasarikaya.ai` eintragen.
Dann bei Namecheap die DNS-Records auf Render zeigen lassen.

## Struktur

```
deryasarikaya/
├── app.py              # Flask App
├── requirements.txt    # Dependencies
├── Procfile            # Für Render
└── templates/
    ├── base.html       # Navigation, Footer
    ├── index.html      # Homepage
    ├── projects.html   # Projekte
    └── contact.html    # Kontakt
```
