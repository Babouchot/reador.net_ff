var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var { ToggleButton } = require('sdk/ui/button/toggle');

// Create a button
var button = ToggleButton ({
  id: "show-panel",
  label: "Reador.NET",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleClick
});


// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var popup = require("sdk/panel").Panel({
    contentURL: data.url("popup.html"),
    // contentURL: "https://app.reador.net/chromeapp/index",
    contentScriptFile: data.url("popup.js"),
    position: button,
    width: 250,
    height: 320
});


// Show the panel when the user clicks the button.
function handleClick(state) {
    popup.show();
}



// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
popup.on("show", function() {
    popup.port.emit("show");
});




