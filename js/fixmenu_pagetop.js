/*
 * ページトップへ戻るボタン制御
 */
window.addEventListener("load", function () {
  var threshold = 350;
  window.addEventListener("scroll", function () {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > threshold) {
      document.body.classList.add("is-fixed-pagetop");
    } else if (scrollTop < threshold - 50) {
      document.body.classList.remove("is-fixed-pagetop");
    }
  });
});
