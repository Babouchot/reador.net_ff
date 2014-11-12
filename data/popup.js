
// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
self.port.on("show", function onshow() {
    // document.location.reload(true);
});


self.port.on("update",  update)

function update () {
    document.location.reload(true);
}


// function refresh() {
//     document.location.reload(true);
//     setTimeout(refresh, 60000);
// }
// setTimeout(refresh, 60000);

