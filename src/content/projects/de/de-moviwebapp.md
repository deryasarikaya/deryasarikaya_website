---
lang: de
slug: moviwebapp
order: 3
title: MoviWebApp
tagline: Ein vollständiger Backend-Workflow – von externen Daten bis zu dauerhaftem Nutzerstatus.
summary: Eine Flask-basierte Anwendung für persönliche Filmsammlungen mit OMDb-Integration, relationalen Datenmodellen, Bewertungen und vollständigen CRUD-Abläufen.
status: live
statusLabel: Live
repository: https://github.com/deryasarikaya/MoviWebApp
demo: https://moviwebapp-1lej.onrender.com
demoNote: Die Demo wird auf Render gehostet und benötigt beim ersten Start möglicherweise einen Moment.
stack: [Python, Flask, SQLAlchemy, SQLite, OMDb API, Gunicorn, Render]
verifiedAt: '2026-06-12'
visual: screenshot
alt: Startseite der MoviWebApp mit persönlichen Filmsammlungen und Filmplakaten.
---

## Projektziel

MoviWebApp überführt eine frühere Kommandozeilenidee in eine vollständige Webanwendung. Nutzer können mehrere Filmsammlungen anlegen, Filme über eine externe Quelle finden und ihren persönlichen Status dauerhaft speichern.

## Externe API-Integration

Die OMDb API liefert Filmtitel, Poster, Regie, Erscheinungsjahr, Genres und IMDb-Bewertungen. Der API-Schlüssel wird ausschließlich über eine Umgebungsvariable geladen.

## Datenmodell

Flask-SQLAlchemy modelliert Nutzer, Sammlungen und Filme als relationale Daten. Eine SQLite-Datenbank hält die Informationen dauerhaft vor und wird beim ersten Start mit Demo-Inhalten initialisiert, wenn sie leer ist.

## CRUD-Workflow

Die Anwendung deckt den vollständigen Ablauf ab: Sammlungen erstellen, Filme suchen und importieren, persönliche Bewertungen hinzufügen, Titel bearbeiten und Einträge löschen.

## Deployment

Gunicorn startet die Flask-Anwendung auf Render. Diese Infrastruktur gehört ausschließlich zum MoviWebApp-Projekt; das neue Portfolio selbst ist als statische Astro-Site für Vercel vorbereitet.

## Was ich gelernt habe

Das Projekt verbindet externe Daten, relationale Modelle und Benutzeraktionen zu einem konsistenten Backend-Workflow – einschließlich Fehlerseiten, Demo-Daten und responsivem Interface.
