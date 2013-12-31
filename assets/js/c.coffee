
#   JQuery
#   JQuery AutoTab Magic

# Form Parent
form = $(".code_input")

# Form Inputs
formInputs = $(form).children "input"

# Valid Code
validCode = "SHER"

parse = (type) ->
  (if typeof type is "string" then JSON.parse(type) else type)

@checkLocalValue = (item) ->
  parse(localStorage.getItem(item))

@updateLocalItem = (item, val) ->
  if val
    localStorage.setItem(item, val)
  else
    localStorage.removeItem(item)

activateItem = (m) ->
  $(m).addClass("active").removeClass("inactive")

deactivateItem = (m) ->
  $(m).addClass("inactive").removeClass("active")

@itemsArray = (selector) ->
  items = []
  $(selector).each ->
    items.push $(this)

@checkLocalSettings = ->
  items = itemsArray $(".settings_list .toggle")
  index = 0
  while index < items.length
    itemData = $(items[index]).data("local")
    value = checkLocalValue(itemData)
    if value
      activateItem $(items[index])
    else
      deactivateItem $(items[index])
    ++index

@flightCheck = ->
  settingsValue = checkLocalValue("settings")
  otherBG = checkLocalValue("otherBG")
  largeNumbers = checkLocalValue("largeNumbers")
  if settingsValue
    $(".nothing").addClass("something").text("Settings")
  else
    $(".nothing").removeClass("something").text("221B")



$(".settings_list .toggle_trigger").click ->
  item = $(this).children(".toggle").data("local")
  value = checkLocalValue(item)
  if value
    updateLocalItem item, "false"
  else
    updateLocalItem item, "true"

$(".reset_local").click ->
  $(".clear_confirm").fadeIn(200)

$(".clear_confirm .yes").click ->
  localStorage.clear()
  $(".clear_confirm").fadeOut(200)
  checkLocalSettings()
  flightCheck()

$(".clear_confirm .no").click ->
  $(".clear_confirm").fadeOut(200)


#JQuery AutoTab to automatically move forward when maximum length of input is reached.
$(formInputs).autotab_magic()

# Returns the code which is inputted into each of the form inputs
inputCode = ->
  code = [] # Blank array (probably a better way to do this
  $(formInputs).each -> # Selects each form input object
    code.push $(this).val() # Pushes each form input value to the [code] array
  code.join "" # Returns the code array in string form (joined)

# Checks the code which is returned from inputCode()
validateCode = ->
  c = inputCode().toUpperCase() # Runs inputCode() to have a code string to validate
  if c is validCode # Checks code against validCode variable
    $(form).removeClass("error").addClass "success" # Adds success class and removes error class from form
    $(".hint").fadeOut() # Hides the hint
    activateSettingsPanel()
    false # End of successful code input
  # else if c.length is 4 # Checks if code is 4 digits long
  #   $(".hint").fadeIn() # Shows the hint
  else
    $(form).addClass("error").removeClass "success" # Adds error class, removes success class from form
    false # End of unsuccessful input

@activateSettingsPanel = ->
  updateLocalItem("settings", "true")
  checkLocalSettings()
  showModal $(".definitely_nothing_at_all")
  clearInputs()

# Clears out all the inputs and sets the focus to the first one
clearInputs = ->
  $(formInputs).first().focus() # Set focus to first input
  $(formInputs).val "" # Sets input values to null
  $(form).removeClass() # Remove classes from form

# Initiates code validation if the key pressed isn't backspace or delete
$(formInputs).keyup -> # On keyup in any of the form inputs
  if event.keyCode is 8 or event.keyCode is 46 # Maps to the backspace and delete key
    clearInputs() # Clears the form
    false # End of backspace fevent
  else
    validateCode() # Run validation function
    console.log "test"

# Clears form when clicking any of the form inputs
$(formInputs).click ->
  clearInputs() # Clears form

