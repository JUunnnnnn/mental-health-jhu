# Repository collaboration

- Never commit or push directly to `main` (or `master`).
- Make all changes on a named feature or fix branch.
- Merge changes into the default branch only through a reviewed pull request. Never bypass review or force-push a shared branch.
- Preserve other contributors' changes and existing project files.
- Before proposing a pull request, run relevant checks and describe changes and limitations.
- The web app lives in `web/`. Run `npm start` for localhost and `npm test` for checks. It uses Node.js with no third-party runtime dependencies.
- Treat wellness data as sensitive. Do not commit real student responses. Never present the custom wellness index as a diagnosis or validated clinical measure. Safety answers must never contribute to the index.

# Python Development

Use `uv` for all Python development tasks in this workspace.

## Required Workflow

- Install Python packages with `uv add <package>` for project dependencies.
- Install development-only packages with `uv add --dev <package>`.
- Run Python scripts with `uv run python <script.py>`.
- Run Python modules with `uv run python -m <module>`.
- Run project commands and tools through `uv run` so they use the project environment.
- Do not use `pip install`, `python -m pip install`, or a separate manually managed virtual environment unless explicitly requested.
- Prefer maintaining dependencies in `pyproject.toml` and the `uv.lock` lockfile.
