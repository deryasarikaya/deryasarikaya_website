# Project source audit

Repository content was inspected on 2026-07-26 and used as the factual basis for the case studies. Public pages deliberately omit secrets, fixtures, internal identifiers, private data, and unsupported claims.

| Project      | Default-branch commit inspected | Verified implementation facts                                                                                                                                                                                 | Published status                      |
| ------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| AI Start Map | `aafb74a` (2026-07-17)          | FastAPI, PostgreSQL, SQLAlchemy, Alembic, OpenAI Structured Outputs, staged LLM analysis, curated RAG/FAISS retrieval, workflow interview/follow-ups, server-side guardrails, 35 tests in the inspected suite | In development; repository link only  |
| Kompass      | `91adb12` (2026-07-15)          | Flask application, PostgreSQL, Twilio WhatsApp, ffmpeg, Whisper/OpenAI transcription and analysis, Streamlit secondary UI, longitudinal pattern logic, explicit non-medical boundaries, 38 documented tests   | In development; repository link only  |
| MoviWebApp   | `bd3b9b9` (2026-06-12)          | Flask, SQLAlchemy, SQLite, OMDb integration, relational movie/collection data, CRUD and ratings, Gunicorn/Render deployment, repository-owned interface screenshots                                           | Live demo linked with cold-start note |

The Kompass case study intentionally says Flask rather than FastAPI because that is what the inspected implementation uses. AI Start Map is the FastAPI-based project. MoviWebApp's interface image comes from its repository; the other two visuals are labelled architectural diagrams, not fabricated UI screenshots.
