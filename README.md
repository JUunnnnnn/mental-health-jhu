
# Bluejay

- App name: BlueJay (or BlueJay Wellness) \
- Team members: Denis Motuzenko, Seojun Kwon, Josh Armedilla \
- Problem being addressed: Bluejay is a wellbeing check-in app designed for first-year students at Johns Hopkins University. It gives students a place to reflect on daily life, track their self-reported wellbeing over time, and find support resources. \

This is an independent student prototype, not an official Johns Hopkins service. It supports self-reflection; it does not provide diagnosis, treatment, or a validated clinical assessment.

## What the app does

- **Initial reflection:** 15 background questions about emotional health, academics, relationships, support, sleep, and other sources of stress, followed by the first check-in.
- **Repeat check-ins:** Five questions covering mood, classwork and extracurricular commitments, connection, rest, and nourishment. Students can check in as often as they like and add an optional note.
- **Monthly reviews:** A broader 12-question reflection with its own score, comparisons against the first and previous reviews, and up to three areas with the largest rating changes. Reviews are due after 28 days but can be repeated sooner.
- **Overview:** The latest wellness index, change since the previous check-in, total check-ins, and trends for the last 7 days, 30 days, or year.
- **Check-in history:** Dated entries with each area's rating, the overall index, and any saved notes.
- **Suggested next steps:** Simple suggestions based on the lowest-rated area. When all five ratings are high, the app encourages maintaining helpful routines. Selected background answers add context when completing the initial check-in.
- **Support resources:** Links to campus mental health services and crisis support, available through the Resources page and support buttons.
- **Weekly reminders:** An in-app reminder when no check-in exists or the latest is at least seven days old, plus a downloadable recurring calendar event (`.ics`). Calendar notifications depend on the calendar app's settings; Bluejay does not send push notifications or email.
- **Data controls:** Optional saving on the current browser, JSON export of check-in history, and deletion of app data.

## How the wellness index works

Each of the five check-in answers receives 0 to 4 points, with equal weighting:

```text
Wellness index = (sum of five answers / 20) * 100
```

For example, answers scored `0, 1, 2, 3, 4` produce an index of `50`. Higher values represent more self-reported wellbeing in those five areas. History displays individual answers as ratings from 1 to 5.

The monthly review separately scores 12 answers from 0 to 4: `round(sum / 48 * 100)`. It covers emotional wellbeing, academic impact, social connection, support, workload, academic pressure, sleep, nourishment, financial pressure, campus connection, comfort sharing, and coping.

Both indices are custom reflection aids, not validated mental health measures. They cannot diagnose a condition or determine suicide risk. Background answers, diagnoses, and safety responses never contribute to either index.

## Privacy and storage

By default, check-ins stay in memory and are lost when the page is refreshed or closed. Students can opt into saving check-ins on the device using browser `localStorage`.

- Saved data includes check-in dates, ratings, notes, monthly review dates and ratings, and app preferences. It is unencrypted and accessible to others using the same browser profile.
- Background answers and safety responses are not persisted or included in exports. The optional condition field is not saved or used to generate advice.
- There are no accounts, analytics, cloud sync, or server-side response storage. The Node.js server serves the app's static files.
- JSON exports contain check-in dates, ratings, notes, and monthly reviews. Exported files are sensitive and remain on disk after data is deleted in the app.

Avoid enabling browser saving on shared devices. Do not commit real student responses or exports to this repository.

## Safety flow and limitations

Reporting recent or current thoughts of suicide or self-harm during the background questionnaire opens a separate support flow containing questions from the NIMH ASQ toolkit and follow-up support options. Safety answers are neither stored nor scored.

This self-guided implementation is not clinically validated. The app is not monitored, does not notify a counselor, and cannot contact emergency services. Clinical review and an appropriate response protocol are needed before use as a student-facing health service.

## Run locally

Requires **Node.js 22 or newer**. There are no third-party runtime dependencies, and no dependency installation or API keys are needed.

From the repository root:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000). The server binds to `127.0.0.1` on port `3000`. Stop it with `Ctrl+C`.

## Run checks

```sh
npm test
```

Tests use Node.js's built-in test runner and cover index calculations and invalid inputs, weekly and monthly reminder boundaries, safety follow-up logic, and questionnaire lengths. These are model-level checks, not browser tests or clinical validation.

## Project structure

```text
web/
  index.html          App entry point
  app.js              Views, questionnaires, storage, exports, and support flow
  model.js            Questions, index calculation, and reminder/safety helpers
  style.css           App styling and responsive layout
  hopkins-theme.css   Additional visual theme
  fonts/              Bundled typefaces
server.mjs            Local static-file server
test/model.test.mjs   Model tests
package.json         Node.js requirements and commands
```

The app uses HTML, CSS, and browser JavaScript modules with a Node.js server. There is no build step or database.

## Contributing

Work on a named feature or fix branch, preserve existing contributors' changes, and run `npm test` before proposing a pull request. Changes to the default branch must go through a reviewed pull request. See [agents.md](agents.md) for repository guidance.
