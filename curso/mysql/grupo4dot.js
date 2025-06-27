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
        'qrsql008_ex1.html': 'dot-ex1',
        'qrsql008_ex2.html': 'dot-ex2',
        'qrsql008_ex3.html': 'dot-ex3',
        'qrsql008_ex4.html': 'dot-ex4',
        'qrsql008_ex5.html': 'dot-ex5',
        'qrsql008_ex6.html': 'dot-ex6',
        'qrsql008_ex7.html': 'dot-ex7',
        'qrsql008_ex8.html': 'dot-ex8',
        'qrsql008_ex9.html': 'dot-ex9',
        'qrsql008_ex10.html': 'dot-ex10'
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
