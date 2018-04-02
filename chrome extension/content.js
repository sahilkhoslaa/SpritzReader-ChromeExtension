function getText(){
    return document.body.innerText
}
function getHTML(){
    return document.body.outerHTML
}
console.log(getText());

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
        }
    }
);