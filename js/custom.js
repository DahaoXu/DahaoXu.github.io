/* 老站的「点按揭示」彩蛋：正文里的 .blur 点一下揭开，再点一下盖回去。
   样式在 source/css/custom.css 里，这里只负责交互与键盘可达性。 */
(function () {
  var nodes = document.querySelectorAll('.article-body .blur');

  Array.prototype.forEach.call(nodes, function (node) {
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-label', '点按揭示隐藏内容');

    var toggle = function () {
      node.classList.toggle('is-revealed');
    };

    node.addEventListener('click', toggle);
    node.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });
})();
