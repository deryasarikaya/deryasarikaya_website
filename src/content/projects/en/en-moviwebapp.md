---
lang: en
slug: moviwebapp
order: 3
title: MoviWebApp
tagline: A complete backend workflow, from external data to persistent user state.
summary: A Flask-based personal movie collection application with OMDb integration, relational data models, ratings and complete CRUD workflows.
status: live
statusLabel: Live
repository: https://github.com/deryasarikaya/MoviWebApp
demo: https://moviwebapp-1lej.onrender.com
demoNote: The demo is hosted on Render and may take a moment to start.
stack: [Python, Flask, SQLAlchemy, SQLite, OMDb API, Gunicorn, Render]
verifiedAt: '2026-06-12'
visual: screenshot
alt: MoviWebApp homepage showing personal movie collections and movie posters.
---

## Project objective

MoviWebApp turns an earlier command-line idea into a complete web application. Users can create multiple movie collections, find films through an external source and keep their personal state over time.

## External API integration

The OMDb API supplies film titles, posters, directors, release years, genres and IMDb ratings. Its API key is loaded exclusively through an environment variable.

## Data model

Flask-SQLAlchemy models users, collections and films as relational data. A SQLite database persists the information and is initialised with demo content on first start when empty.

## CRUD workflow

The application covers the complete flow: create collections, search and import films, add personal ratings, edit titles and delete records.

## Deployment

Gunicorn runs the Flask application on Render. That infrastructure belongs only to MoviWebApp; the new portfolio itself is a static Astro site prepared for Vercel.

## What I learned

The project connects external data, relational models and user actions into one coherent backend workflow, including error pages, demo data and a responsive interface.
