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
        'qrj005_ex1.html': 'dot-ex1',
        'qrj005_ex2.html': 'dot-ex2',
        'qrj005_ex3.html': 'dot-ex3',
        'qrj005_ex4.html': 'dot-ex4',
        'qrj005_ex5.html': 'dot-ex5',
        'qrj005_ex6.html': 'dot-ex6',
        'qrj005_ex7.html': 'dot-ex7',
        'qrj005_ex8.html': 'dot-ex8',
        'qrj005_ex9.html': 'dot-ex9',
        'qrj005_ex10.html': 'dot-ex10',
        'qrj005_ex11.html': 'dot-ex11',
        'qrj005_ex12.html': 'dot-ex12',
        'qrj005_ex13.html': 'dot-ex13',
        'qrj005_ex14.html': 'dot-ex14',
        'qrj005_ex15.html': 'dot-ex15'
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
