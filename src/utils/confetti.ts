import confetti from 'canvas-confetti';

export function triggerConfetti() {
  try {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'],
    });
  } catch {
    // Ignore if canvas confetti fails in background
  }
}

export function triggerCelebration() {
  try {
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#10B981', '#F59E0B', '#6366F1', '#EC4899'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // Ignore fallback
  }
}
