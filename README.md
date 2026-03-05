# Skill Studio

Skill Studio is a lightweight, single-page assessment app built with plain HTML, CSS, and JavaScript. It runs fully in the browser with no backend and auto-saves active session progress in local browser storage.

## Live Demo

GitHub Pages: https://golamkibria.github.io/skill-studio/

## Features

- Multiple assessment support via `window.assessments`
- One-question-at-a-time assessment flow
- Optional per-assessment setting to shuffle question options
- Instant answer checking with `Show Answer`
- Mark-for-review and jump-to-review navigation
- Question grid navigation (jump to any question)
- Session timers (total elapsed and per-question)
- Summary modal with answered/correct/wrong/review counts
- Average time per answered question
- Wrong-answer review mode
- Auto-resume active session after refresh (same browser)
- Keyboard shortcuts for desktop use
- Mobile-friendly layout

## Project Structure

- `index.html` - UI structure and modal markup
- `styles.css` - styling and responsive layout
- `app.js` - app state, rendering, navigation, timers, event handling
- `scoring-utils.js` - scoring helpers and reusable utility logic
- `assessments.data.js` - question banks and assessment definitions

## Quick Start

1. Clone or download the project.
2. Open `index.html` directly in a browser.
3. Select an assessment and click `Start Assessment`.

No build step or dependency install is required.

## Assessment Data Format

Assessments are loaded from `window.assessments` in `assessments.data.js`.

```js
const assessments = [
  {
    id: "ict-core",
    name: "ICT Core Assessment",
    description: "Core ICT assessment...",
    tags: ["ict", "core", "mixed"],
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
- App validates assessment/question structure at startup.

## Usage Flow

1. Start a session.
2. Select an option for the current question.
3. Click `Show Answer` to reveal correctness.
4. Move with `Prev`, `Next`, `First`, `Last`, or question grid.
5. Mark items for later using `Mark for Review`.
6. Click `End Assessment` to finalize unanswered checks and view summary.

## Keyboard Shortcuts

- `Right Arrow` - Next question
- `Left Arrow` - Previous question
- `S` - Show answer
- `R` - Toggle review mark
- `C` - Clear selection
- `G` - Open summary

## Behavior Details

- Active session progress is auto-saved in browser `localStorage`.
- Correct/Wrong counts update after reveal during assessment.
- On end session, selected but unrevealed answers are evaluated in the final report.

## Customization Ideas

- Add exam mode (disable back navigation)
- Shuffle questions and/or options
- Add time limit with auto-end
- Filter by topic/difficulty
- Export session result JSON

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Security

If you find a security issue, please open a private report via GitHub security advisories or contact the maintainer before public disclosure.

## Maintainer

- GitHub: https://github.com/golamkibria
