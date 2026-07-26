---
lang: de
slug: ai-start-map
order: 1
title: AI Start Map
tagline: Den stärksten AI-Startpunkt in realen Arbeitsabläufen finden.
summary: Eine webbasierte AI-Diagnostik für Solo-Selbstständige und kleine Unternehmen, die konkrete Prozesse erfasst, den tatsächlichen Engpass herausarbeitet und passende Automatisierungschancen priorisiert.
status: building
statusLabel: Im Aufbau
repository: https://github.com/deryasarikaya/AI-Start-Map
stack: [Python, FastAPI, PostgreSQL, SQLAlchemy, OpenAI API, Structured Outputs, RAG, FAISS]
verifiedAt: '2026-07-17'
visual: workflow
alt: Prozessdarstellung von der Workflow-Beschreibung über Rückfragen und RAG bis zu priorisierten Automatisierungschancen.
---

## Das Problem

Viele kleine Unternehmen wissen, dass AI Prozesse verbessern kann – aber nicht, wo sie sinnvoll anfangen sollen. Allgemeine Ideensammlungen helfen wenig, wenn der tatsächliche Ablauf, der Engpass und die vorhandenen Informationen nicht verstanden werden.

## Die Produktidee

AI Start Map führt durch ein strukturiertes Interview. Zwei Einstiegsfragen grenzen den Kontext ein, anschließend werden Prozessvorschläge erzeugt. Nach der Auswahl folgen sieben Prozessfragen und bis zu drei gezielte Rückfragen. Daraus entstehen ein Ist-Prozess, ein Kernengpass, drei priorisierte Automatisierungschancen und ein Blueprint für die erste Chance.

## So funktioniert die Diagnose

1. Kontext und Ziel des Unternehmens erfassen.
2. Einen konkreten Prozess auswählen und abgrenzen.
3. Aktuelle Schritte, Übergaben, Werkzeuge und Reibungspunkte strukturieren.
4. Fehlende Informationen mit gezielten Rückfragen ergänzen.
5. Automatisierungschancen nach Nutzen und Aufwand priorisieren.

## Architektur

FastAPI rendert den Interviewablauf serverseitig. SQLAlchemy speichert Sitzungen, Fragen, Prozessoptionen, Analysen und Chancen in PostgreSQL. Alembic verwaltet das Schema. Der Wissensindex wird ausschließlich aus kuratierten Markdown-Dateien aufgebaut.

## AI- und RAG-Pipeline

Die Anwendung kombiniert Structured Outputs mit einer mehrstufigen Analyse. FAISS liefert ausgewählte kuratierte Wissensbausteine. Interne Metadaten und IDs werden nicht an das Modell weitergegeben; der Kontext wird vor der Anfrage auf öffentlich nutzbare Inhalte reduziert.

## Zuverlässigkeit und Guardrails

Pydantic validiert strukturierte Ergebnisse. Serverseitige Prüfungen blockieren interne Referenzen und nicht belegte Aussagen. Fehlgeschlagene Analysen hinterlassen keine Teilergebnisse, abgeschlossene Analysen sind gegen unbeabsichtigte Änderungen geschützt. Im aktuellen Repository sind 35 automatisierte Tests vorhanden, deren Modell- und Embedding-Aufrufe gemockt werden.

## Aktueller Stand

Das Projekt ist aktiv im Aufbau. Der vollständige Interview- und Analysefluss ist implementiert; für den Betrieb werden PostgreSQL und konfigurierte OpenAI-Zugangsdaten benötigt. Eine öffentliche Live-Demo ist derzeit nicht dokumentiert.

## Was ich gelernt habe

Gute AI-Diagnostik beginnt nicht mit einer Liste möglicher Tools, sondern mit sauberer Prozessabgrenzung. Je klarer Fakten, Muster, Schlussfolgerungen und Empfehlungen getrennt werden, desto nützlicher und überprüfbarer wird das Ergebnis.
