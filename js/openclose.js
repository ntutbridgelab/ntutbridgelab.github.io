/*
 * メニュー開閉処理
 */
function do_onoff(hdr, item) {
  var hdr_el = document.getElementById(hdr);
  var item_el = document.getElementById(item);
  if (item_el.style.display === "none") {
    item_el.style.display = "";
    hdr_el.classList.remove("close");
    hdr_el.classList.add("open");
  } else {
    item_el.style.display = "none";
    hdr_el.classList.remove("open");
    hdr_el.classList.add("close");
  }
}

function open_close(hdr, item) {
  var hdr_el = document.getElementById(hdr);
  var item_el = document.getElementById(item);
  hdr_el.addEventListener("click", function () {
    do_onoff(hdr, item);
  });
  hdr_el.classList.add("close");
  item_el.style.display = "none";
}

function OCwindowWidth() {
  return Math.min(window.screen.width, window.innerWidth);
}
