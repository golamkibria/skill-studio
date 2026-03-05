# Skill Studio

Skill Studio is a lightweight, single-page assessment app built with plain HTML, CSS, and JavaScript. It runs fully in the browser with no backend and auto-saves active session progress in local browser storage.

## Live Demo

GitHub Pages: https://golamkibria.github.io/skill-studio/

## Features

- Multiple assessment support via `window.assessments`
- One-question-at-a-time assessment flow
- Start settings: `Enable Show Answer during assessment`, `Use time limit`, `Time limit (minutes)`, `Shuffle answer choices`
- Timed mode with countdown (`Time Left`) and auto-end at timeout
- Pause/Resume support (button + `P` shortcut), including persisted paused state on refresh
- Instant answer checking with `Show Answer` (when enabled)
- Mark-for-review and jump-to-review navigation
- Question filter drawer: `Unanswered`, `Marked`, `Wrong`, `Topic`
- Question grid navigation (jump to any question)
- Session timers (total elapsed and per-question)
- Summary modal with answered/correct/wrong/review counts
- Average time per answered question
- Wrong-answer review mode
- Auto-resume active session after refresh (same browser)
- Back-to-assessment-selection action for clearing active session
- Keyboard shortcuts for desktop use
- Mobile-friendly layout

## Project Structure

- `index.html` - UI structure and modal markup
- `styles.css` - styling and responsive layout
- `app.js` - app state, rendering, navigation, timers, event handling
- `scoring-utils.js` - scoring helpers and reusable utility logic
- `assessments.data.js` - question banks and assessment definitions
- `SESSION_NOTES.md` - local running history of Codex sessions and decisions

## Quick Start

1. Clone or download the project.
2. Open `index.html` directly in a browser.
3. Select an assessment, choose settings, and click `Start Assessment`.

No build step or dependency install is required.

## Local Session History Workflow

If VS Code extension history is limited, track sessions in `SESSION_NOTES.md`:

1. Copy the session template in that file.
2. Record goal, key prompts, changes, decisions, and next prompt.
3. Commit notes with related code changes for traceability.

### One-Command Session Block

From project root, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\new-session-note.ps1
```

This appends a fresh timestamped session block to `SESSION_NOTES.md`.

## Assessment Data Format

Assessments are loaded from `window.assessments` in `assessments.data.js`.

```js
const assessments = [
  {
    id: "ict-core",
    name: "ICT Core Assessment",
    description: "Core ICT assessment...",
    tags: ["ict", "core", "mixed"],
    timedMinutes: 90,
    questions: [
      {
        id: 1,
        topic: "Hardware",
        difficulty: "Mixed",
        text: "Hardware refers to:",
        options: {
          A: "Computer programs",
          B: "Physical parts of a computer",
          C: "Internet services",
          D: "Files"
        },
        answer: "B"
      }
    ]
  }
];

window.assessments = assessments;
```

### Notes

- `options` can be an object (`{ A: "...", B: "..." }`) or an array (`[{ key, text }]`).
- `answer` must match one of the option keys.
- `timedMinutes` is optional; if set, it pre-fills the timed assessment input.
- App validates assessment/question structure at startup.
- Option keys are preserved internally for scoring, even when answer choices are shuffled.

## Usage Flow

1. Start a session.
2. Select an option for the current question.
3. Click `Show Answer` to reveal correctness (if enabled in settings).
4. Move with `Prev`, `Next`, `First`, `Last`, or question grid.
5. Mark items for later using `Mark for Review`.
6. Optionally `Pause`/`Resume` during session.
7. Click `End Assessment` to finalize unanswered checks and view summary.

## Keyboard Shortcuts

- `Right Arrow` - Next question
- `Left Arrow` - Previous question
- `S` - Show answer (only when show-answer mode is enabled)
- `R` - Toggle review mark
- `C` - Clear selection
- `G` - Open summary
- `P` - Pause/Resume assessment
- `F` - Open question filters

## Behavior Details

- Active session progress is auto-saved in browser `localStorage`.
- Correct/Wrong counts update after reveal during assessment (or at end if show-answer mode is disabled).
- On end session, selected but unrevealed answers are evaluated in the final report.
- If timed mode is enabled, assessment auto-ends when time reaches zero.
- Refresh/tab close during active session shows a browser confirmation prompt.

## Customization Ideas

- Add exam mode (disable back navigation)
- Shuffle questions
- Filter by topic/difficulty
- Export session result JSON

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Security

See `SECURITY.md` for the vulnerability reporting process.

## Maintainer

- GitHub: https://github.com/golamkibria
