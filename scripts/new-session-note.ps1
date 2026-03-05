param(
  [string]$NotesFile = "SESSION_NOTES.md"
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$notesPath = Join-Path $repoRoot $NotesFile

if (-not (Test-Path $notesPath)) {
  Write-Error "Notes file not found: $notesPath"
  exit 1
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

$block = @"

## $timestamp

### Goal
- 

### Prompts/Requests
- 

### Changes Made
- 

### Decisions
- 

### Open Items
- 

### Next Prompt
- 
"@

Add-Content -Path $notesPath -Value $block
Write-Output "Added new session block to $notesPath"
