updateGIFImage = (value) ->
  if value
    d = new Date()
    $(".gif").css "background-image", "url('assets/bg_gifs/" + value + ".gif')"

updateURLHash = (value) ->
  window.location.hash = value

updateActiveNav = (item) ->
  $(".nav_selector a").removeClass()
  $(".nav_selector a[data-href='" + item + "']").addClass "active"

nextNavItem = ->
  $(".nav_selector a.active").next("a").click()

prevNavItem = ->
  $(".nav_selector a.active").prev("a").click()

@showModal = (m) ->
  unless m.is(":visible")
    hideModals()
    m.show()
    centerTopMargin m.children(".modal")

centerTopMargin = (e) ->
  top = e.height() / 2
  e.css "margin-top", -top

hideModal = (m) ->
  m.hide()

hideModals = (m) ->
  $(".modal_wrap").hide()

doNothing = ->
  showModal $(".go_away")

airDate = new Date(Date.UTC(2014, 0, 1, 20, 30, 0))
$("#countdown").countdown
  until: airDate
  layout: $("#countdown").html()

$(".nav_selector a").click ->
  value = $(this).data("href")
  updateGIFImage value
  updateURLHash value
  updateActiveNav value
  false

$(".main_nav.left").click ->
  prevNavItem()
  false

$(".main_nav.right").click ->
  nextNavItem()
  false

KeyboardJS.on "left", ->
  prevNavItem()
  false

KeyboardJS.on "right", ->
  nextNavItem()
  false

KeyboardJS.on "questionmark", ->
  showModal $(".help_modal")
  false

KeyboardJS.on "esc", ->
  hideModals()

$(".icon-help").click ->
  showModal $(".help_modal")

urlHash = window.location.hash.substring(1)
if urlHash
  updateGIFImage urlHash
  updateActiveNav urlHash

$(".overlay").click ->
  hideModals()
  false

$("*[data-noff]").remove()  unless $.browser.webkit

$(".nothing").click ->
  doNothing()
  false