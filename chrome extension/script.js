
document.addEventListener('DOMContentLoaded', function () {
     main();      
});

function main() {
  
   // var web_scrape = scrapingText();
    
    var wordsPerMinute = 100;

    var text = document.getElementsByTagName('text')[0].innerHTML;  
    var h1 = document.body.appendChild(document.createElement('h1'));
    var button1 = document.createElement('BUTTON')
    var w = (window.innerWidth-button1.style.width)/2;
    var selectbox = document.createElement('SELECT')
    var def = 100;
    for(var i = 1; i<=12 ; i++){
        var option = document.createElement('OPTION')
        option.text = def.toString()+" wpm";
        if(def==600){
            def += 100;
        }
        else{
            def += 50;  
        }
        selectbox.options.add(option, i);
    }

    h1.setAttribute("style", "margin-left: 170px; width : 250px; height : 25px; background-color : #EDF2F3;")
    button1.setAttribute("style","margin-left : 200.5px;")
    button1.innerHTML = "Play/Pause"
    var button2 = document.createElement('BUTTON')
    button2.innerHTML = "Start Over"
    document.body.appendChild(button1)
    document.body.appendChild(button2)
    document.body.appendChild(selectbox)
    var output = new FastReader(h1);

    selectbox.addEventListener("change", function(){
        var wpm = selectbox.options [selectbox.selectedIndex] .value;
        var res = wpm.split(" ");
        setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
        console.log(""+wpm);
    });
    
    window.onkeyup = function(e){
        var key = e.keyCode

        if(key == 32){
            if (output.playing){
                output.pause()
            }
            else{
                output.play()
            }
        }
        else if(key == 13){
            output.currentWord = 0;
            output.playing = true;
            clearTimeout(output.currentTimer)
            output.play()
        }
        else if(key == 48 || key == 45){
            selectbox.value = "100 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 49 || key == 35){
            selectbox.value = "150 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 50 || key == 40){
            selectbox.value = "200 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 51 || key == 34){
            selectbox.value = "250 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 52 || key == 37){
            selectbox.value = "300 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 53 || key == 12){
            selectbox.value = "350 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 54 || key == 39){
            selectbox.value = "400 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 55 || key == 36){
            selectbox.value = "450 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 56 || key == 38){
            selectbox.value = "500 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 57 || key == 33){
            selectbox.value = "550 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 189 || key == 109){
            selectbox.value = "600 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
        else if(key == 187 || key == 107){
            selectbox.value = "700 wpm";
            var wpm = selectbox.options [selectbox.selectedIndex] .value;
            var res = wpm.split(" ");
            setTimeout(function() { output.render(text, parseInt(res[0])); }, 500);
            console.log(""+wpm);
        }
    }
    button1.addEventListener("click",function(){
            if (output.playing){
                output.pause()
            }
            else{
                output.play()
            }
            
    });
    button2.addEventListener("click", function(){
            output.currentWord = 0;
            output.playing = true;
            clearTimeout(output.currentTimer)
            output.play()   
    });
    setTimeout(function() { output.render(text, wordsPerMinute); }, 500);
    
}

function scrapingText(){
    var query = { active: true, currentWindow: true };

    var url = "";
    function callback(tabs) {
    var currentTab = tabs[0]; // there will be only one in this array
    url  = currentTab.url;
    console.log(currentTab); // also has properties like currentTab.id
    }   
    var url_object = chrome.tabs.query(query, callback);
    console.log(url);
    
    return "yay";
}

var FastReader = function (el) {

    el.classList.add('fastreader')
    el.style.padding = (parseInt(window.getComputedStyle(el)['font-size']) / 1.3) + 'px'

    //creating a div element where a particular word is going to be displayed
	div = document.createElement("div")
	el.appendChild(div)


    this.playing = true

    this.currentTimer = null

    /*this function is used to process words , finds the orp and set the highlight to 
     *the orp
     */
    function processWord(word) {
        var optimalRecognitionposition = Math.floor(word.length / 3),
            letters = word.split('')
        return letters.map(function(letter, idx) {
            if (idx === optimalRecognitionposition)
                return '<span class="highlight">' + letter + '</span>'
            return letter;
        }).join('')
    }

    /*this function sets the positon of the word in
     *the div container.
     */
    function positionWord() {
        var wordEl = el.firstElementChild,
            highlight = wordEl.firstElementChild
        
        var centerOffsetX = (highlight.offsetWidth / 2) + highlight.offsetLeft,
            centerOffsetY = (highlight.offsetHeight / 2) + highlight.offsetTop
        
        wordEl.style.left = ((el.clientWidth / 2) - centerOffsetX) + 'px'
        wordEl.style.top = ((el.clientHeight / 2) - centerOffsetY) + 'px'
    }

     this.currentWord = 0
     var delay
    
    /*this function helps in displaying the next word
     *currentWord counter gets incremented
     */
    var displayNextWord = function() {
        var word = this.words[this.currentWord++]
        if (typeof word == 'undefined') return
        // WTB> nlp.js...
        var hasPause = /^\(|[,\.\!:)]$/.test(word)
        
        // XSS?! :(
       	window.el = el
        el.firstElementChild.innerHTML = word
        positionWord()


        if (this.currentWord !== this.words.length)
        var calwpm = 60000 / delay;
            if(this.currentWord === 0){
                this.currentTimer = setTimeout(displayNextWord, (hasPause ? delay + 400: delay + (1000 - delay)/3))
            }
            else if(this.currentWord === 1){
                this.currentTimer = setTimeout(displayNextWord, (hasPause ? delay + 400: delay + (1000 - delay)/6))
            }
            else if(this.currentWord === 2){
                this.currentTimer = setTimeout(displayNextWord, (hasPause ? delay + 400: delay + (1000 - delay)/12))
            }
            else{
                this.currentTimer = setTimeout(displayNextWord, (hasPause ? delay + 400: delay))    
            }
             
    }.bind(this)

    this.render = function(text, wpm) {
        this.words = text.replace(/^\s+|\s+|\n$/,' ').split(/\s+/).map(processWord)
        delay = 60000 / wpm

        this.playing = true
        clearTimeout(this.currentTimer)
        displayNextWord()
    }

    this.play = function() {
        this.playing = true
        displayNextWord()
    }

    this.pause = function() {
        this.playing = false
        clearTimeout(this.currentTimer)
    }

    function toggle(){
        console.log("yay\n");
        if (this.playing)
            this.pause()
        else
            this.play()
    }
}