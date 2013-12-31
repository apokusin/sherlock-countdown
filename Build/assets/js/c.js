(function() {
  var activateItem, activateSettingsPanel, clearInputs, deactivateItem, form, formInputs, inputCode, parse, validCode, validateCode;

  form = $(".code_input");

  formInputs = $(form).children("input");

  validCode = "SHER";

  parse = function(type) {
    if (typeof type === "string") {
      return JSON.parse(type);
    } else {
      return type;
    }
  };

  this.checkLocalValue = function(item) {
    return parse(localStorage.getItem(item));
  };

  this.updateLocalItem = function(item, val) {
    if (val) {
      return localStorage.setItem(item, val);
    } else {
      return localStorage.removeItem(item);
    }
  };

  activateItem = function(m) {
    return $(m).addClass("active").removeClass("inactive");
  };

  deactivateItem = function(m) {
    return $(m).addClass("inactive").removeClass("active");
  };

  this.itemsArray = function(selector) {
    var items;
    items = [];
    return $(selector).each(function() {
      return items.push($(this));
    });
  };

  this.checkLocalSettings = function() {
    var index, itemData, items, value, _results;
    items = itemsArray($(".settings_list .toggle"));
    index = 0;
    _results = [];
    while (index < items.length) {
      itemData = $(items[index]).data("local");
      value = checkLocalValue(itemData);
      if (value) {
        activateItem($(items[index]));
      } else {
        deactivateItem($(items[index]));
      }
      _results.push(++index);
    }
    return _results;
  };

  $(".settings_list .toggle_trigger").click(function() {
    var item, value;
    item = $(this).children(".toggle").data("local");
    value = checkLocalValue(item);
    if (value) {
      return updateLocalItem(item, "false");
    } else {
      return updateLocalItem(item, "true");
    }
  });

  $(formInputs).autotab_magic();

  inputCode = function() {
    var code;
    code = [];
    $(formInputs).each(function() {
      return code.push($(this).val());
    });
    return code.join("");
  };

  validateCode = function() {
    var c;
    c = inputCode().toUpperCase();
    if (c === validCode) {
      $(form).removeClass("error").addClass("success");
      $(".hint").fadeOut();
      activateSettingsPanel();
      return false;
    } else {
      $(form).addClass("error").removeClass("success");
      return false;
    }
  };

  activateSettingsPanel = function() {
    updateLocalItem("settings", "true");
    checkLocalSettings();
    showModal($(".definitely_nothing_at_all"));
    return clearInputs();
  };

  clearInputs = function() {
    $(formInputs).first().focus();
    $(formInputs).val("");
    return $(form).removeClass();
  };

  $(formInputs).keyup(function() {
    if (event.keyCode === 8 || event.keyCode === 46) {
      clearInputs();
      return false;
    } else {
      validateCode();
      return console.log("test");
    }
  });

  $(formInputs).click(function() {
    return clearInputs();
  });

}).call(this);
