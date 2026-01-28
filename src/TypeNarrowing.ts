
function getChai(kind: string | number){
     // here come type narrowing  pata lagai ki data hai kis type and return kro 

     if(typeof kind === "string"){

         return `making ${kind}` ; 
     } 
     return `number of ${kind}` 
 }

  

 //exsausitve check 
 function oderchai(size : "small" | "medium" | "large" | number){
         if(size === "small"){
            return `cutting chai `
         }
         if(size === 'large' || size === 'medium'){
             return `full dose`
         }
         return `chai order ${size}`
 }


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


 