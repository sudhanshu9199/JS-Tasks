# 🎵 Music Player with OOP Concepts — Project Overview

## 📝 Overview
This project is a **mini music player** built using **JavaScript** and **Object-Oriented Programming (OOP)** principles.  
It features four main classes:

- **Track** — Holds song data  
- **Playlist** — Manages tracks, next/prev/shuffle logic  
- **Player** — Controls the HTML audio element  
- **UI** — Connects DOM controls to Player/Playlist, updates the UI  

---

## 1️⃣ Track — Song Data Holder
```js
class Track {
  constructor({id, title, artist = 'Unknown', src}) { ... }
}
```

**Purpose**: Holds info for a single song: `id`, `title`, `artist`, `src` (audio file URL).
**Logic**: None — just a **data container**.

## 2️⃣ Playlist — Track Management
**Key Properties:**
- `tracks` — array of Track objects
- `index` — current track index
- `shuffleMode` — boolean flag
- `_shuffledOrder` — queue of shuffled indexes (when shuffle is on)

**Important Methods:**
- `add(track)` / `removeById(id)` — add/remove tracks, reset shuffle
- `current` — getter for current track
- `next()` — gets next track (shuffled or sequential)
- `prev()` — gets previous track (random if shuffled)
- `playAt(i)` — jump to track at index `i`
- `toggleShuffle()` — toggles shuffle mode, prepares shuffled order

**Analogy:**
Playlist acts like a **jukebox queue** — decides “which song plays next”.

## 3️⃣ Player — Audio Controller

**Constructed with:**
A Playlist and an HTML <audio> element.

**Features:**

- Stores repeat flag
- Handles `audio.ended` event:
     - If repeat → replays same track
    - Else → plays next track

**Methods:**
- `load(track)` — sets audio source
- `play()` / `pause()` / `togglePlay()` — playback controls

- `playNext()` / `playPrev()` / `playAtIndex(i)` — delegates to playlist, loads & plays

- `setVolume(v)` / `seekTo(percent)` / `toggleRepeat()` / toggleShuffle()

**Note:**
`play()` ensures audio source is loaded before playing.

## 4️⃣ UI — DOM Wiring & Rendering
**Responsibilities:**
- Finds DOM elements (play, next, prev, shuffle, repeat, progress, file input, playlist, etc.)
- Binds events to Player/Playlist methods
- Renders playlist and updates “Now Playing” info

**Key Bindings:**
- Play button: toggles play/pause, updates icon
- Next/Prev: changes track, updates UI
- Shuffle/Repeat: toggles modes, changes button opacity
- Progress bar: click/drag to seek
- Audio `timeupdate`: updates progress bar & time labels
- File input: adds local files to playlist
- Drag & drop: adds files to playlist

**Rendering:**

## 5️⃣ File Handling & Demo Tracks
- **Local files:** Uses `URL.createObjectURL(file)` for playback
- **Unique IDs:** Generated via timestamp + random string
- **Demo tracks:** Preloaded from remote URLs for instant use

## 6️⃣ Typical User Flow
1. **Page loads:** Demo tracks added, player/UI created, first track loaded (not auto-playing)
2. **User clicks Play:** Player loads current track if needed, starts playback
3. **During playback:** UI updates progress bar & time labels via `timeupdate`
4. **Song ends:**
    - If repeat → replays same track
    - Else → plays next track
5. **User adds files:**
    - Via Add button or drag-drop
    - Files become Tracks, added to playlist, UI updates, auto-plays first added if nothing loaded

## 7️⃣ Gotchas & Improvements
- Shuffle skips current track on first shuffle — intentional
- Shuffle `prev()` picks random, not true history (could be improved)
- `Math.max(1, tracks.length)` avoids modulo by zero (quirky but safe)
- Should call `URL.revokeObjectURL(url)` when removing tracks to free memory
- `play()` returns a Promise — should handle errors (e.g., autoplay blocked)
- Random IDs could rarely collide — fine for this use
- If many files added, consider limits or show file sizes

## 8️⃣ UI Mapping
- **Click playlist item:**
    → `player.playAtIndex(i)` → UI updates

- **Seek progress bar:**
→ player.seekTo(percent) → audio jumps

- **Volume slider:**
→ p`layer.setVolume(value)`


### 📦 Files & Structure
index.html — main HTML structure

style.scss / style.css — styles

script.js — all logic (OOP classes, UI, event handling)

🚀 How It All Connects