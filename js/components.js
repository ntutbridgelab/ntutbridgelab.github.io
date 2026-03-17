/*
 * 共通コンポーネント管理
 * ヘッダー、メニュー、サイドバー、フッターを一元管理します。
 */
var SiteComponents = {
  menuItems: [
    { href: "index.html", label: "HOME", sub: "トップページ" },
    { href: "members.html", label: "MEMBERs", sub: "メンバー" },
    { href: "projects.html", label: "PROJECTs", sub: "研究プロジェクト" },
    { href: "publications.html", label: "PUBLICATIONs", sub: "業績" },
    { href: "https://note.com/bridge_ntut", label: "BLOG", sub: "活動・記事" }
  ],

  getCurrentPage: function () {
    var path = window.location.pathname;
    var filename = path.substring(path.lastIndexOf("/") + 1) || "index.html";
    if (filename.indexOf("topics_") === 0) {
      return "index.html";
    }
    return filename;
  },

  renderHeader: function () {
    var el = document.querySelector(".site-header");
    if (!el) return;
    el.innerHTML =
      '<h1 class="logo"><a href="index.html"><img src="images/logo.png" alt="共創データ工学研究室" loading="lazy"></a></h1>';
  },

  renderMenubar: function () {
    var el = document.querySelector(".menubar");
    if (!el) return;
    var currentPage = this.getCurrentPage();
    var html = "<ul>";
    for (var i = 0; i < this.menuItems.length; i++) {
      var item = this.menuItems[i];
      var cls = item.href === currentPage ? ' class="current"' : "";
      html +=
        "<li" + cls + '><a href="' + item.href + '">' +
        item.label + "<span>" + item.sub + "</span></a></li>";
    }
    html += "</ul>";
    el.innerHTML = html;
  },

  renderMobileMenubar: function () {
    var el = document.getElementById("menubar-s");
    if (!el) return;
    var currentPage = this.getCurrentPage();
    var html = "<ul>";
    for (var i = 0; i < this.menuItems.length; i++) {
      var item = this.menuItems[i];
      var cls = item.href === currentPage ? ' class="current"' : "";
      html +=
        "<li" + cls + '><a href="' + item.href + '">' +
        item.label + "<span>" + item.sub + "</span></a></li>";
    }
    html += "</ul>";
    el.innerHTML = html;
  },

  renderSidebar: function () {
    var el = document.querySelector(".sub");
    if (!el) return;
    el.innerHTML =
      '<nav class="box">' +
      "<h2>Menu</h2>" +
      '<ul class="submenu">' +
      '<li><a href="projects.html">研究テーマ</a></li>' +
      '<li><a href="https://note.com/bridge_ntut">活動・記事</a></li>' +
      "</ul>" +
      "</nav>" +
      '<section class="box">' +
      "<h2>ACCESS</h2>" +
      '<p class="c"><strong>筑波技術大学　産業技術学部　産業情報学科　共創データ工学研究室</strong><br>' +
      '<span class="mini1">茨城県つくば市天久保4-3-15</span></p>' +
      "</section>";
  },

  renderFooter: function () {
    var el = document.querySelector(".site-footer");
    if (!el) return;
    el.innerHTML =
      '<small>Copyright&copy; <a href="index.html">NTUT BRIDGE LAB</a> All Rights Reserved.</small>' +
      '<span class="pr"><a href="http://template-party.com/" target="_blank">《Web Design:Template-Party》</a></span>';
  },

  init: function () {
    this.renderHeader();
    this.renderMenubar();
    this.renderSidebar();
    this.renderFooter();
    this.renderMobileMenubar();

    if (typeof OCwindowWidth === "function" && OCwindowWidth() <= 900) {
      open_close("menubar_hdr", "menubar-s");
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  SiteComponents.init();
});
