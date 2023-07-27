async function fetchData(){
    let response= await fetch('https://type.fit/api/quotes')
    let Quotes = await response.json()
    let len= Quotes.length
    let random= Math.floor(Math.random()*len)
    random_bg_color()
    let QuotesBody=document.querySelector(".quote")
        QuotesBody.innerHTML=`<h2>${Quotes[random].text}</h2>
        <p>-${Quotes[random].author.split(",").shift()}</p>`
}

function random_bg_color() {
    var x = Math. floor(Math. random() * 256);
    var y = Math. floor(Math. random() * 256);
    var z = Math. floor(Math. random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    let QuotesContainer=document.querySelector(".quote-container")
    QuotesContainer. style. background = bgColor;
}
let btn= document.querySelector('.quote-container');
btn.addEventListener('click',fetchData)