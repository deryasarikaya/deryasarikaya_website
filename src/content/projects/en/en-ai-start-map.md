---
lang: en
slug: ai-start-map
order: 1
title: AI Start Map
tagline: Finding the strongest AI starting point inside real work.
summary: A web-based AI diagnostic for solo professionals and small businesses that captures a concrete workflow, identifies the real bottleneck and prioritises suitable automation opportunities.
status: building
statusLabel: Building
repository: https://github.com/deryasarikaya/AI-Start-Map
stack: [Python, FastAPI, PostgreSQL, SQLAlchemy, OpenAI API, Structured Outputs, RAG, FAISS]
verifiedAt: '2026-07-17'
visual: workflow
alt: Process diagram from workflow description through follow-up questions and RAG to prioritised automation opportunities.
---

## The problem

Many small businesses know that AI could improve their work but do not know where to begin. Generic idea lists are rarely useful when the real workflow, bottleneck and available information have not been understood.

## The product idea

AI Start Map runs a structured interview. Two opening questions establish context before the system proposes concrete processes. Once a process is selected, seven process questions and up to three targeted follow-ups lead to an as-is workflow, a core bottleneck, three ranked automation opportunities and a blueprint for the first opportunity.

## How the diagnostic works

1. Capture the business context and objective.
2. Select and bound one concrete process.
3. Structure current steps, hand-offs, tools and friction points.
4. Fill important gaps with targeted follow-up questions.
5. Prioritise opportunities by benefit and implementation effort.

## Architecture

FastAPI renders the interview flow on the server. SQLAlchemy stores sessions, questions, process options, analyses and opportunities in PostgreSQL. Alembic manages the schema. The knowledge index is built exclusively from curated Markdown sources.

## AI and RAG pipeline

The application combines Structured Outputs with a multi-stage analysis. FAISS retrieves selected curated knowledge. Internal metadata and identifiers are not passed to the model; context is reduced to information that is safe to use in user-facing results.

## Reliability and guardrails

Pydantic validates structured results. Server-side checks reject internal references and unsupported statements. Failed analyses leave no partial result, while completed analyses are protected from unintended edits. The current repository contains 35 automated tests with mocked model and embedding calls.

## Current status

The project is actively being built. The complete interview and analysis flow is implemented; operation requires PostgreSQL and configured OpenAI credentials. No public live demo is currently documented.

## What I learned

Useful AI diagnostics do not begin with a catalogue of tools. They begin with careful process boundaries. Separating facts, patterns, inferences and recommendations makes every result more useful and easier to verify.
