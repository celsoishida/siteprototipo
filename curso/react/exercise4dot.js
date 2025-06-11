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
        'qrrjs007_ex1.html': 'dot-ex1',
        'qrrjs007_ex2.html': 'dot-ex2',
        'qrrjs007_ex3.html': 'dot-ex3',
        'qrrjs007_ex4.html': 'dot-ex4',
        'qrrjs007_ex5.html': 'dot-ex5',
        'qrrjs007_ex6.html': 'dot-ex6',
        'qrrjs007_ex7.html': 'dot-ex7',
        'qrrjs007_ex8.html': 'dot-ex8',
        'qrrjs007_ex9.html': 'dot-ex9',
        'qrrjs007_ex10.html': 'dot-ex10'
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
