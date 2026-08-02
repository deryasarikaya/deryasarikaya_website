---
lang: en
slug: kompass
order: 2
title: Kompass
tagline: Turning voice notes into patterns that become visible over time.
summary: A personal voice-first system that turns WhatsApp voice notes into structured longitudinal information and reveals explainable relationships across everyday domains.
status: building
statusLabel: Building
repository: https://github.com/deryasarikaya/Kompass
stack: [Python, Flask, PostgreSQL, Twilio, WhatsApp API, ffmpeg, Whisper, OpenAI API]
verifiedAt: '2026-07-15'
visual: pipeline
alt: Data pipeline from a WhatsApp voice note through transcription and structured extraction to longitudinal patterns.
---

## The problem

Mood, sleep, energy, stress and everyday events influence one another. Conventional trackers often demand rigid forms and show isolated values instead of understandable relationships.

## Why voice first

Kompass accepts free-form voice notes of around 30 to 90 seconds. This reduces the effort of regular check-ins and lets people describe what matters in their own language. A missed day is treated as information, not failure.

## Data pipeline

Twilio receives a WhatsApp message. Audio is downloaded, converted with ffmpeg and transcribed through Whisper. An LLM extracts structured data that is stored in PostgreSQL and combined with existing context.

## Structured extraction

The current implementation models areas including mood, energy, sleep, stress, movement, social contact, events and habits. A Streamlit web application uses the same database and pipeline as a second interface.

## Longitudinal pattern recognition

Deterministic analyses compare relationships such as movement and energy, short sleep and next-day mood, or conflict and sleep. Minimum-data thresholds keep the system silent when there is not enough evidence for a pattern.

## Guardrails

Kompass is not a medical product. It does not diagnose or recommend treatment. Medication-related functions only mirror historical information and remain retrospective. Immutable rules are appended in code after the selectable persona and are covered by tests.

## Current status

The single-user portfolio project is being built. Its repository documents 38 tests for critical extraction, pattern and guardrail behaviour. There is no public demo.

## What I learned

With personal data, trust comes from clear boundaries, explainable calculations and an honest ability to stay silent when evidence is still too thin.
