// Reveal-on-scroll: fades and slides .reveal elements into view once they
// enter the viewport. Falls back to showing everything immediately if
// IntersectionObserver isn't available.
(function () {
  var items = document.querySelectorAll('.reveal');

  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(function (el) { observer.observe(el); });
})();
