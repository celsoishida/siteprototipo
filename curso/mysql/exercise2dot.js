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
        'qrsql002_ex1.html': 'dot-ex1',
        'qrsql002_ex2.html': 'dot-ex2',
        'qrsql002_ex3.html': 'dot-ex3',
        'qrsql002_ex4.html': 'dot-ex4',
        'qrsql002_ex5.html': 'dot-ex5',
        'qrsql002_ex6.html': 'dot-ex6',
        'qrsql002_ex7.html': 'dot-ex7',
        'qrsql002_ex8.html': 'dot-ex8',
        'qrsql002_ex9.html': 'dot-ex9',
        'qrsql002_ex10.html': 'dot-ex10'
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
