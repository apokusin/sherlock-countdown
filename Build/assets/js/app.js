(function() {
  var centerTopMargin, hideModal, hideModals, nextNavItem, prevNavItem, showModal, updateActiveNav, updateGIFImage, updateURLHash;

  updateGIFImage = function(value) {
    var d;
    if (value) {
      d = new Date();
      return $(".gif").css("background-image", "url('assets/bg_gifs/" + value + ".gif')");
    }
  };

  updateURLHash = function(value) {
    return window.location.hash = value;
  };

  updateActiveNav = function(item) {
    $(".nav_selector a").removeClass();
    return $(".nav_selector a[data-href='" + item + "']").addClass("active");
  };

  nextNavItem = function() {
    return $(".nav_selector a.active").next("a").click();
  };

  prevNavItem = function() {
    return $(".nav_selector a.active").prev("a").click();
  };

  showModal = function(m) {
    hideModals();
    m.fadeIn(200);
    return centerTopMargin(m.children(".modal"));
  };

  centerTopMargin = function(e) {
    var top;
    top = e.height() / 2;
    return e.css("margin-top", -top);
  };

  hideModal = function(m) {
    return m.fadeOut(200);
  };

  hideModals = function(m) {
    return $(".modal_wrap").hide();
  };

  $(document).ready(function() {
    var airDate, urlHash;
    airDate = new Date(Date.UTC(2014, 0, 1, 20, 30, 0));
    $("#countdown").countdown({
      until: airDate,
      layout: $("#countdown").html()
    });
    $(".nav_selector a").click(function() {
      var value;
      value = $(this).data("href");
      updateGIFImage(value);
      updateURLHash(value);
      updateActiveNav(value);
      return false;
    });
    $(".main_nav.left").click(function() {
      prevNavItem();
      return false;
    });
    $(".main_nav.right").click(function() {
      nextNavItem();
      return false;
    });
    KeyboardJS.on("left", function() {
      prevNavItem();
      return false;
    });
    KeyboardJS.on("right", function() {
      nextNavItem();
      return false;
    });
    KeyboardJS.on("questionmark", function() {
      showModal($(".help_modal"));
      return false;
    });
    KeyboardJS.on("a", function() {
      showModal($(".c_2"));
      return false;
    });
    KeyboardJS.on("esc", function() {
      return hideModals();
    });
    $(".icon-help").click(function() {
      return showModal($(".help_modal"));
    });
    urlHash = window.location.hash.substring(1);
    if (urlHash) {
      updateGIFImage(urlHash);
      updateActiveNav(urlHash);
    }
    $(".overlay").click(function() {
      hideModals();
      return false;
    });
    if (!$.browser.webkit) {
      return $("*[data-noff]").remove();
    }
  });

}).call(this);
