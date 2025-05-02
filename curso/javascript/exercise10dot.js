/**
 * Navigation dot highlighter - Marks the current exercise in the navigation menu
 * This script automatically highlights the dot corresponding to the current exercise page
 */
document.addEventListener('DOMContentLoaded', () => {
  // Wait for the menu to be loaded and injected
  const checkMenuLoaded = setInterval(() => {
    if (document.querySelector('.exercise-dots-list')) {
      clearInterval(checkMenuLoaded);
      highlightCurrentDot();
    }
  }, 100);

  /**
   * Highlights the dot corresponding to the current page
   */
  function highlightCurrentDot() {
    try {
      // Clear any existing highlights first
      document.querySelectorAll('.exercise-dot.current').forEach(dot => {
        dot.classList.remove('current');
      });

      // Get current filename from the URL
      const path = window.location.pathname;
      const file = path.substring(path.lastIndexOf('/') + 1);
      
      // Map filenames to their corresponding dot IDs
      const exerciseMap = {
        'qrj010_ex1.html': 'dot-ex1',
        'qrj010_ex2.html': 'dot-ex2',
        'qrj010_ex2_5.html': 'dot-ex2_5',
        'qrj010_ex3.html': 'dot-ex3',
        'qrj010_ex3_5a.html': 'dot-ex3_5a',
        'qrj010_ex3_5b.html': 'dot-ex3_5b',
        'qrj010_ex4.html': 'dot-ex4',
        'qrj010_ex4_5.html': 'dot-ex4_5',
        'qrj010_ex5.html': 'dot-ex5',
        'qrj010_ex5_5.html': 'dot-ex5_5',
        'qrj010_ex6.html': 'dot-ex6',
        'qrj010_ex7.html': 'dot-ex7',
        'qrj010_ex8.html': 'dot-ex8',
        'qrj010_ex9.html': 'dot-ex9',
        'qrj010_ex10.html': 'dot-ex10'
      };

      const dotId = exerciseMap[file];
      
      // Apply the 'current' class to the matching dot
      if (dotId) {
        const dot = document.getElementById(dotId);
        if (dot) {
          dot.classList.add('current');
        }
      }
    } catch (error) {
      console.error('Error highlighting current dot:', error);
    }
  }
});
