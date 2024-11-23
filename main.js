var h1 = document.getElementById("par");
// var QouteList = []
// '"If you tell the truth, you don't have to remember anything."'
// ― Mark Twain
let quotesArray = [`"If you tell the truth, you don't have to remember anything." <br>― Mark Twain`, '“A friend is someone who knows all about you and still loves you.” <br>― Elbert Hubbard', '“A clever person solves a problem. A wise person avoids it.”<br>― Albert Einstein', '“You don’t forget the face of the person who was your last hope.” <br>― Suzanne Collins', '“The marks humans leave are too often scars.” <br>― John Green', '“An eye for an eye will only make the whole world blind.” <br>― Mahatma Gandhi', '“I would rather walk with a friend in the dark, than alone in the light.” <br>― Helen Keller', '“You cannot find peace by avoiding life.” <br>― Michael Cunningham', '“A good friend will always stab you in the front.” <br>― Oscar Wilde', '“Whatever you are, be a good one.” <br>― Abraham Lincoln', '“Be kind, for everyone you meet is fighting a harder battle.” <br>― Plato'];

function AddQoute(){
    var random = Math.floor(Math.random() * 11);
    if(h1.innerHTML !== quotesArray[random]){
        h1.innerHTML = quotesArray[random];
        console.log(random);
        

    }
    else{
        console.log(random);

        AddQoute()

    }
    
    
}

AddQoute()