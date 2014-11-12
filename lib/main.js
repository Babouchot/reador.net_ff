var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var { ToggleButton } = require('sdk/ui/button/toggle');

// var $ = require("./jquery-1.11.0.min.js");
// var background = require("./background.js");

// Create a button
var button = ToggleButton ({
    id: "show-panel",
    label: "Reador.NET",
    icon: {
	"16": "./icon-16.png",
	"32": "./icon-32.png",
	"64": "./icon-64.png"
    },
    onChange: handleClick,
    badge: 1
});


// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var popup = require("sdk/panel").Panel({
    contentURL: data.url("popup.html"),
    contentScriptFile: data.url("popup.js"),
    position: button,
    width: 250,
    height: 320,
    onHide: handleHide
});


// Show the panel when the user clicks the button.
function handleClick(state) {
    if (state.checked) {
	getCount();
	popup.show();
    }
}


function handleHide(state) {
    button.state('window', {checked: false});
}

// When the panel is displayed it generated an event called
// "show": we will listen for that event and when it happens,
// send our own "show" event to the panel's script, so the
// script can prepare the panel for display.
popup.on("show", function() {
    popup.port.emit("show");
});




// background.js
var timer = require('timer');
var jq = require("./jquery-1.11.0.min.js");

timer.setInterval(function() {
    getCount();
}, 60000);

function getCount(){
    // $.getJSON( "https://app.reador.net/chromeapp/index.json")
    //     .done(function( data ) {
    //         var count = 0;
    //         $.each( data, function( i, search ) {
    //             count += search.count;
    //         });
    //         setCount(count);
    //         console.log(count);
    //         console.log(data);
    //     })
    //     .error(function( data ) {
    //         removeCount();
    //     });
}


function setCount(value) {
    var stringVal = value.toString();
    if(value > 999){
        stringVal = "999+";
    }
    // working in firefox 36
    button.badge = stringVal;

}

function removeCount() {
    // working in firefox 36
    button.badge = "";
}


// get the count on startup
getCount();
