// function makechai(order : { type : string ; sugar : number ; strong : boolean}){
//         console.log(order)
// }

// function serveChai(order : { type : string ; sugar : number ; strong : boolean}){
//      console.log(order)
// }

// it signaure are same and we use this data type any where 


type chaiorder = {
    type : string ; 
    sugar : number ;
     strong : boolean       
    };


function makechai(order :  chaiorder){
        console.log(order)
}

function serveChai(order : chaiorder){
     console.log(order)
}


// come in picture interface 

type teaRecipe = {
    water : number ;
    milk : number 
}


class masalachai implements teaRecipe {
    water = 100;
    milk  = 20 ;  
}


// type cupsize = "small" | "large " ;   // why  bcz it not data type its custome type so in we use interface 

// class chai implements cupsize {

// }           // give erro now i implimentin interface 




interface cupsize {
    size :   "small" | "large "    // implement interface 
} ; 

class chai implements cupsize {
          size: "small" | "large " = "large " 
}


