---
lang: de
slug: kompass
order: 2
title: Kompass
tagline: Sprachnachrichten in Muster verwandeln, die mit der Zeit sichtbar werden.
summary: Ein persönliches Voice-first-System, das WhatsApp-Sprachnachrichten in strukturierte Langzeitinformationen übersetzt und nachvollziehbare Zusammenhänge über verschiedene Lebensbereiche sichtbar macht.
status: building
statusLabel: Im Aufbau
repository: https://github.com/deryasarikaya/Kompass
stack: [Python, Flask, PostgreSQL, Twilio, WhatsApp API, ffmpeg, Whisper, OpenAI API]
verifiedAt: '2026-07-15'
visual: pipeline
alt: Datenpipeline von einer WhatsApp-Sprachnachricht über Transkription und strukturierte Extraktion bis zu Langzeitmustern.
---

## Das Problem

Stimmung, Schlaf, Energie, Stress und Alltag beeinflussen sich gegenseitig. Klassische Tracker verlangen jedoch feste Formulare und zeigen oft einzelne Werte statt nachvollziehbarer Zusammenhänge.

## Warum Voice first

Kompass nutzt freie Sprachnachrichten von 30 bis 90 Sekunden. Das senkt die Hürde für regelmäßige Check-ins und lässt Menschen in ihrer eigenen Sprache beschreiben, was gerade relevant ist. Fehlende Tage werden nicht als Versagen behandelt.

## Datenpipeline

Twilio nimmt eine WhatsApp-Nachricht entgegen. Audiodateien werden geladen, mit ffmpeg konvertiert und durch Whisper transkribiert. Ein LLM extrahiert strukturierte Daten, die in PostgreSQL gespeichert und mit vorhandenen Kontextinformationen verbunden werden.

## Strukturierte Extraktion

Die aktuelle Implementierung modelliert unter anderem Stimmung, Energie, Schlaf, Stress, Bewegung, soziale Kontakte, Ereignisse und Gewohnheiten. Eine Weboberfläche auf Basis von Streamlit nutzt dieselbe Datenbank und Pipeline als zweite Zugriffsmöglichkeit.

## Langfristige Muster

Deterministische Analysen vergleichen zum Beispiel Bewegung und Energie, kurzen Schlaf und Stimmung am Folgetag oder Konflikte und Schlaf. Mindestdatenmengen verhindern, dass das System aus wenigen Beobachtungen vermeintliche Muster ableitet.

## Guardrails

Kompass ist kein Medizinprodukt. Es stellt keine Diagnosen und gibt keine Behandlungsempfehlungen. Medikamentenbezogene Funktionen spiegeln ausschließlich historische Daten und bleiben retrospektiv. Unveränderliche Regeln werden im Code nach der wählbaren Persona ergänzt und durch Tests abgesichert.

## Aktueller Stand

Das Single-User-Portfolio-Projekt ist im Aufbau. Das Repository dokumentiert 38 Tests für zentrale Extraktions-, Muster- und Guardrail-Funktionen. Eine öffentliche Demo ist nicht vorhanden.

## Was ich gelernt habe

Bei persönlichen Daten entsteht Vertrauen nicht durch möglichst viele AI-Antworten, sondern durch klare Grenzen, nachvollziehbare Berechnungen und ehrliches Schweigen, wenn noch nicht genug Daten vorhanden sind.
