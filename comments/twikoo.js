(() => {
  const loadComments = async () => {
    if (typeof twikoo === "undefined") {
      setTimeout(loadComments, 100);
    } else {
      const container = document.getElementById('tcomment');
      if (!container) {
        return;
      }
      twikoo.init({
        envId: 'http://154.9.252.89:40063',
        el: '#tcomment',
      });
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
