// Procedural Web Audio API Synthesizer for ZIP LABAN
// 100% dependency-free, zero external audio asset breakage, instant load.

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientPlaying = false;
    this.ambientInterval = null;
    this.ambientNodes = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted && this.ambientPlaying) {
      this.stopAmbient();
    }
  }

  // Creamy liquid pour sound (swept resonant bandpass white noise)
  playPour() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const duration = 0.8;
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink/Brownish noise for liquid viscosity
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        lastOut = (lastOut + 0.02 * white) / 1.02;
        data[i] = lastOut * 3.5;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + duration * 0.5);
      filter.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + duration);
      filter.Q.setValueAtTime(5, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
      noise.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Graceful fallback
    }
  }

  // Toasted Kunafa crisp crunch sound (granular short clicks)
  playCrunch() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      for (let i = 0; i < 6; i++) {
        const delay = i * 0.025 + Math.random() * 0.015;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = Math.random() > 0.5 ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(1400 + Math.random() * 800, now + delay);
        osc.frequency.exponentialRampToValueAtTime(120, now + delay + 0.04);

        filter.type = 'highpass';
        filter.frequency.setValueAtTime(800, now + delay);

        gain.gain.setValueAtTime(0.12 / (i + 1), now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.045);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.05);
      }
    } catch (e) {}
  }

  // Soft cream bubble pop
  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.08);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  // Melodic order chime
  playChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.001, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.14, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.65);
      });
    } catch (e) {}
  }

  // Ambient gentle lounge notes
  startAmbient() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || this.ambientPlaying) return;

    this.ambientPlaying = true;
    const chords = [
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 261.63, 329.63, 392.0],  // Am7
      [174.61, 220.0, 261.63, 329.63], // Fmaj7
      [196.0, 246.94, 293.66, 349.23], // G7
    ];
    let chordIndex = 0;

    const playNextChord = () => {
      if (!this.ambientPlaying || this.isMuted || !this.ctx) return;
      const notes = chords[chordIndex];
      chordIndex = (chordIndex + 1) % chords.length;

      const now = this.ctx.currentTime;
      notes.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.015, now + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 3.3);
      });
    };

    playNextChord();
    this.ambientInterval = setInterval(playNextChord, 3500);
  }

  stopAmbient() {
    this.ambientPlaying = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
  }

  toggleAmbient() {
    if (this.ambientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }
}

export const sound = new SoundEngine();
