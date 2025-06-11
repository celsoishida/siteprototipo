document.addEventListener('DOMContentLoaded', () => {
  // Wait for the menu to be loaded and injected
  const checkMenuLoaded = setInterval(() => {
    if (document.querySelector('.exercise-dots-list')) {
      clearInterval(checkMenuLoaded);
      highlightCurrentDot();
    }
  }, 100);

  function highlightCurrentDot() {
    try {
      document.querySelectorAll('.exercise-dot.current').forEach(dot => {
        dot.classList.remove('current');
      });
      const path = window.location.pathname;
      const file = path.substring(path.lastIndexOf('/') + 1);
      
      // Map filenames to their corresponding dot IDs
      const exerciseMap = {
        'qrrjs008_ex1.html': 'dot-ex1',
        'qrrjs008_ex2.html': 'dot-ex2',
        'qrrjs008_ex3.html': 'dot-ex3',
        'qrrjs008_ex4.html': 'dot-ex4',
        'qrrjs008_ex5.html': 'dot-ex5',
        'qrrjs008_ex6.html': 'dot-ex6',
        'qrrjs008_ex7.html': 'dot-ex7',
        'qrrjs008_ex8.html': 'dot-ex8',
        'qrrjs008_ex9.html': 'dot-ex9',
        'qrrjs008_ex10.html': 'dot-ex10'
      };
      const dotId = exerciseMap[file];
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
