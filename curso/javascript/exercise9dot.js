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
        'qrj009_ex1.html': 'dot-ex1',
        'qrj009_ex2.html': 'dot-ex2',
        'qrj009_ex3.html': 'dot-ex3',
        'qrj009_ex4.html': 'dot-ex4',
        'qrj009_ex5.html': 'dot-ex5',
        'qrj009_ex6.html': 'dot-ex6',
        'qrj009_ex7.html': 'dot-ex7',
        'qrj009_ex8.html': 'dot-ex8',
        'qrj009_ex9.html': 'dot-ex9',
        'qrj009_ex10.html': 'dot-ex10'
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
