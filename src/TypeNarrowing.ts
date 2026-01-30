
function getChai(kind: string | number){
     // here come type narrowing  pata lagai ki data hai kis type and return kro 

     if(typeof kind === "string"){

         return `making ${kind}` ; 
     } 
     return `number of ${kind}` 
 }

  

 //exsausitve check // i see diffrence thah in simple we show data type and in ex check its type like small large midium like that -
 function oderchai(size : "small" | "medium" | "large" | number){
         if(size === "small"){
            return `cutting chai `
         }
         if(size === 'large' || size === 'medium'){
             return `full dose`
         }
         return `chai order ${size}`
 }



 //class and methode  
 class Kuladechia{
    server(){
        return `serving chai kulade`
    }
 }

 class cutting{
    server(){
        return `serving cutting chai`
    }
 }

 function serve(chai : Kuladechia | cutting ){
    if(chai instanceof  Kuladechia ){
        return chai.server();
    }

 }


 // make self type help when api rendering 

  

type chaiorder = {
      type : string ,
      sugar : number
}
 

function ischaiOrder(obj : any):obj is chaiorder {
    return (
        typeof obj === "object"  && obj !== null && typeof obj.type === "string" && typeof obj.type === "number"
    )
}

function serveChai(item : chaiorder | string){
    if(ischaiOrder(item)){
        return `serving ${item.type} chia with ${item.sugar}`
    }
    return `servig custome chai ${item}`
}



//2

type masalachai = {type : "masala" ;  spicelevel : number} ; 
type gingerchai = {type : "ginger" ;  amount : number};
type elaichichai = {type : "elaichi" ;  aroma : number} ; 


type chai = masalachai | gingerchai | elaichichai 


function Makechai(order : chai){
        switch (order.type){
             case "masala":
              return `masala chai`
             break  ; 
              case "ginger":
              return `ginger chai`
             break  ; 
              case "elaichi":
              return `elaichi chai`
             break  ; 

             


            
        }
}



// unknow  and any(we use any up in obj )

function isstringArray(arr : unknown): arr is string[]{
       
}