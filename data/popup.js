
// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
self.port.on("show", function onshow() {
    document.location.reload(true);
});


self.port.on("update",  update)

self.port.on("click", function onclick() {
    console.log("click");
});

function update () {
    document.location.reload(true);
}
// setInterval(update, 10000);



// window.addEventListener('click', function(event) {
//     self.hide();
// });
