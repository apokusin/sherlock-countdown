$(document).ready ->

  #   JQuery
  #   JQuery AutoTab Magic

  # Form Parent
  form = $(".code_input")

  # Form Inputs
  formInputs = $(form).children "input"

  # Valid Code
  validCode = "SHER"

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
      false # End of successful code input
    # else if c.length is 4 # Checks if code is 4 digits long
    #   $(".hint").fadeIn() # Shows the hint
    else
      $(form).addClass("error").removeClass "success" # Adds error class, removes success class from form
      false # End of unsuccessful input


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
      # validateCode() # Run validation function
      console.log "test"
    #   false

  # Clears form when clicking any of the form inputs
  $(formInputs).click ->
    clearInputs() # Clears form
