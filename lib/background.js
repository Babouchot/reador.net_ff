
window.setInterval(function() {
    getCount();
}, 60000);

function getCount(){
    $.getJSON( "https://app.reador.net/chromeapp/index.json")
        .done(function( data ) {
            var count = 0;
            $.each( data, function( i, search ) {
                count += search.count;
            });
            setCount(count);
            console.log(count);
            console.log(data);
        })
        .error(function( data ) {
            removeCount();
        });

}

function setCount(value) {
    var stringVal = value.toString();
    if(value > 999){
        stringVal = "999+";
    }

    chrome.browserAction.setBadgeText({text: stringVal});
}

function removeCount() {

    chrome.browserAction.setBadgeText({text: ""});
}
