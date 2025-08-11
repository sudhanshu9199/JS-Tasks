class Track {
    constructor({id, title, artist = 'Unknown', src}){
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.src = src;
    }
}

class Playlist {
    constructor(tracks = []) {
        this.tracks = tracks.slice();
        this.index = 0;
        this.shuffleMode = false;
        this._shuffledOrder = [];
    }

    add(track) {
        this.tracks.push(track);
        this._resetShuffle();
    }

    removeById(id) {
        this.tracks = this.tracks.filter(t => t.id !== id);
        this._resetShuffle();
    }

    get current() {
        return this.tracks[this.index] || null;
    }

    next() {
        if (this.shuffleMode) {
            if (!this._shuffledOrder.length) this._buildShuffledOrder();
            const nextIndex = this._shuffledOrder.shift();
            this.index = nextIndex;
        }
        else {
            this.index = (this.index + 1) % Math.max(1, this.tracks.length);
        }
        return this.current;
    }

    prev() {
        if (this.shuffleMode) {
            this.index = Math.floor(Math.random() * this.tracks.length);
        }
        else {
            this.index = (this.index - 1 + this.tracks.length) % Math.max(1, this.tracks.length);
        }
        return this.current;
    }

    playAt(i) {
        if (i >= 0 && i < this.tracks.length) {
            this.index = i;
            return this.current;
        }
        return null;
    }

    toggleSuffle() {
        this.shuffleMode = !this.shuffleMode;
        if (this.shuffleMode) this._buildShuffledOrder();
        else this._resetShuffle();
        return this.shuffleMode;
    }

    _buildShuffledOrder() {
        this._shuffledOrder = this.tracks.map((_, i) => i).filter(i => i !== this.index);

        for (let i = this._shuffledOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._shuffledOrder[i], this._shuffledOrder[j]] = [this._shuffledOrder[j], this._shuffledOrder[i]];
        }
    }

    _resetShuffle() {
        this._shuffledOrder = [];
    }
}

class Player {
    constructor(playlist, audioElement) {
        this.playlist = playlist;
        this.audio = audioElement;
        this.repeat = false;

        // Forward audio events
        this.audio.addEventListener('ended', () => {
            if (this.repeat) {
                this.play();
            }
            else {
                this.playNext();
            }
        });
    }

    load(track) {
        if (!track) {
            this.audio.src = '';
            return;
        }
        this.audio.src = track.src;
        this.audio.load();
    }

    play() {
        if (!this.audio.src && this.playlist.current) this.load(this.playlist.current);
        return this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    togglePlay() {
        if (this.audio.paused) return this.play();
        this.pause();
    }

    playNext() {
        const track = this.playlist.next();
        if (track) {
            this.load(track);
            this.play();
        }
    }

    playPrev() {
        const track = this.playlist.prev();
        if (track) {
            this.load(track);
            this.play();
        }
    }

    playAtIndex(i) {
        const track = this.playlist.playAt(i);
        if (track) {
            this.load(track);
            this.play();
        }
    }

    setVolume(v) {this.audio.volume = v;}
    seekTo(percent) {
        if (!isNaN(this.audio.duration)) {
            this.audio.currentTime = this.audio.duration * percent;
        }
    }
    toggleRepeat() {this.repeat = !this.repeat; return this.repeat;}
    toggleSuffle() { return this.playlist.toggleSuffle(); }
}

class UI {
    constructor(player) {
        this.player = player;
        this.titleEl = document.getElementById('title');
        this.artistEl = document.querySelector('.artist');
        this.playBtn = document.getElementById('play');
        this.nextBtn = document.querySelector('.next');
        this.prevBtn = document.querySelector('.prev');
        this.shuffleBtn = document.querySelector('.shuffle');
        this.repeatBtn = document.querySelector('.repeat');
        this.progress = document.querySelector('.progress-bar');
        this.progressBar = document.querySelector('.progress-knob');
        this.currentTime = document.querySelector('.current');
        this.duration = document.querySelector('.duration');
        this.playlistEl = document.querySelector('.playlist');
        this.fileInput = document.getElementById('fileInput');
        this.addBtn = document.getElementById('addBtn');
        this.volume = document.getElementById('volume');

        this._bind();
        this.renderPlaylist();
        this._updateNowPlaying();
    }

    _bind() {
        this.playBtn.addEventListener('click', () => {
            if (this.player.audio.paused) {
                this.player.play();
                this._updatePlayIcon();
            }
            else {
                this.player.pause();
                this._updatePlayIcon();
            }
        });
        this.nextBtn.addEventListener('click', () => {this.player.playNext(); this._afterTrackChange(); });
        this.prevBtn.addEventListener('click', () => {this.player.playPrev(); this._afterTrackChange(); });
        this.shuffleBtn.addEventListener('click', () => {
            const on = this.player.toggleSuffle();
            this.shuffleBtn.computedStyleMap.opacity = on ? '1' : '0.6';
        });
        this.repeatBtn.addEventListener('click', () => {
            const on = this.player.toggleRepeat();
            this.repeatBtn.style.opacity = on ? '1' : '0.6';
        });
                // Shuffle button opacity fix
        this.shuffleBtn.addEventListener('click', () => {
            const on = this.player.toggleSuffle();
            this.shuffleBtn.style.opacity = on ? '1' : '0.6';
        });
         // Volume control
        this.volume.addEventListener('input', (e) => {
            this.player.setVolume(parseFloat(e.target.value) / 100);
        });

        // progress clicking/seeking
        this.progress.addEventListener('click', (e) => {
            const rect = this.progress.getBoundingClientRect();
            const pct = Math.min(Math.max(0, (e.clientX - rect.left) / rect.width), 1);
            this.player.seekTo(pct);
        });

                // Progress knob dragging
        let dragging = false;
        const onDrag = (e) => {
            if (!dragging) return;
            let clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const rect = this.progress.getBoundingClientRect();
            const pct = Math.min(Math.max(0, (clientX - rect.left) / rect.width), 1);
            this.player.seekTo(pct);
        };
        this.progressBar.addEventListener('mousedown', (e) => {
            dragging = true;
            document.addEventListener('mousemove', onDrag);
            document.addEventListener('mouseup', () => {
                dragging = false;
                document.removeEventListener('mousemove', onDrag);
            }, { once: true });
        });
        this.progressBar.addEventListener('touchstart', (e) => {
            dragging = true;
            document.addEventListener('touchmove', onDrag);
            document.addEventListener('touchend', () => {
                dragging = false;
                document.removeEventListener('touchmove', onDrag);
            }, { once: true });
        });

        // audio timeupdate
        this.player.audio.addEventListener('timeupdate', () => {
            const a = this.player.audio;
            if (!isNaN(a.duration) && a.duration > 0) {
                const pct = (a.currentTime / a.duration) * 100;
                this.progress.style.width = pct + '%';
                this.progressBar.style.left = pct + '%';
                this.currentTime.textContent = UI._formatTime(a.currentTime);
                this.duration.textContent = UI._formatTime(a.duration);
            }
            this._updatePlayIcon();
        });

        // End or loadedmetadata

        this.player.audio.addEventListener('loadedmetadata', () => {
            this.duration.textContent = UI._formatTime(this.player.audio.duration || 0);
        });

        // File add
        this.fileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files || []);
            this._addFiles(files);
            e.target.value = '';
        });

        this.addBtn.addEventListener('click', () => this.fileInput.click());
    }

    static _formatTime(seconds = 0) {
        seconds = Math.floor(seconds || 0);
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2,'0')}`;
    }

    _addFiles(files) {
        files.forEach((file, idx) => {
            if (!file.type.startsWith('audio')) return;
            const url = URL.createObjectURL(file);
            const track = new Track({
                id: Date.now() + '-' + Math.random().toString(36).slice(2, 8),
                title: file.name.replace(/\.[^/.]+$/,''),
                artist: 'Local file',
                src: url
            });
            this.player.playlist.add(track);
        });
        this.renderPlaylist();
        if (!this.player.audio.src && this.player.playlist.tracks.length) {
            this.player.playAtIndex(this.player.playlist.tracks.length - files.length);
            this._afterTrackChange();
        }
    }

    renderPlaylist() {
        const tracks = this.player.playlist.tracks;
        this.playlistEl.innerHTML = '';
        tracks.forEach((t, i) => {
            const div = document.createElement('div');
            div.innerHTML =  `<div>
                              <div style="font-weight:600">${t.title}</div>
                              <div class="meta">${t.artist}</div>
                           </div>
                           <div class="meta small">${UI._shortId(t.id)}</div>`;
        
            div.addEventListener('click', () => {
                this.player.playAtIndex(i);
                this._afterTrackChange();
            });
            this.playlistEl.appendChild(div);
        });
    }

    static _shortId(id) { return id ? id.slice(-6) : ''};

    _afterTrackChange() {
        this.renderPlaylist();
        this._updateNowPlaying();
        this._updatePlayIcon();
    }

    _updateNowPlaying() {
        const cur = this.player.playlist.current;
        if (cur) {
            this.titleEl.textContent = cur.title;
            this.artistEl.textContent = '—';
        }
    }

    _updatePlayIcon() {
        if (this.player.audio.paused) {
            this.playBtn.innerHTML = `
             <i class="ri-play-large-fill play"></i>`;
        }
        else {
            this.playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`
        }
    }
}

const demo = [
    {title: 'Nadaan Parindey', artist: 'Rohman Aktar', src: 'Songs/Nadaan Parindey.m4a'},
    {title: 'Tumhare Hi Rahenge', artist: 'Arijit', src: 'Songs/Tumhare Hi Rahenge Hum.m4a'},
];

const playlist = new Playlist();
demo.forEach(d => playlist.add(new Track({ id: Math.random().toString(36).slice(2,8), title:d.title, artist:d.artist, src: d.src})));

const audioEl = document.getElementById('audio');
const player = new Player(playlist, audioEl);
const ui = new UI(player);

// Optional: auto-load first demo
if (playlist.tracks.length) {
    player.playAtIndex(0);
    ui._updateNowPlaying();
}

// Allow drag & drop to add files
const app = document.getElementById('app');
['dragenter', 'dragover'].forEach(ev => {
    app.addEventListener(ev, (e) => {e.preventDefault(); e.stopPropagation(); app.style.boxShadow = '0 0 0 3px rgba(63, 183, 255, 0.08)';});
});
['dragleave', 'drop'].forEach(ev => {
    app.addEventListener(ev, (e) => { e.preventDefault(); e.stopPropagation(); app.style.boxShadow = '';});
});
app.addEventListener('drop', (e) => {
    const files = Array.from(e.dataTransfer.files || []);
    ui._addFiles(files);
});