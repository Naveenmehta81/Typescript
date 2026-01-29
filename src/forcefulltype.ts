let response :any = "42" ; 

//let numbericLenght = response.  // isme koi suggestion nhi aarhe hai so we need to frocefully type assertion 

let numbericLenght  = (response as string ).length ; 




type Book = {
     name : string ;
}

let bookstring = '{"name" : " atmoic habit"}';

let bookobject = JSON.parse(bookstring ) as Book


console.log(bookobject.name) 


const inputElement = document.getElementById("uername") as HTMLInputElement 


let value:any 

value = "naveen"
value = [1,2,3,4,5]
value = 2.5
value.toUppecase()   // koi bhi error nhi hui now in production ho skti hia 




let newvalue :unknown
newvalue  = "naveen"
newvalue = [1,2,3,4,5]
newvalue  = 2.5
newvalue.toUppecase()   // you clear see in unknow we see error 


if(typeof newvalue === "string"){
    newvalue.toUpperCase();  // call,construct or acces property me unknow ko define krna pde ta hai 
}



// try catch 

 try {
    
 } catch (error : any) {
      console.log(error.message)
 }                                       // in production it not work like that 



 try {
    
 } catch (error) {
    if( error instanceof Error){
           console.log(error.message);
    }
    console.log("Error", error);
 }



 const data : unknown = "chai with naveen"
 //const  strdata : string = data  // give error 
 
 const strdata : string = data as string  // we need to tell maan lo string hai 


 

 // NEVER  type never 

 type role = "admin" | "user"  ;

 function redirectbasedonrole(role : role ):void {
         if(role === "admin"){
             console.log("redirectd to admin pannel")
             return 
         }
         if(role === "user"){
            console.log("redirected to user pannel")
            return
         }
         role ; // see if we hover then see type is never it means we cover all edge cases so it never here so if we forgot or not handle then 
 }





   type role1 = "admin" | "user" | "superpannel"  ;


 function redirectbasedonrole1(role1 : role1 ):void {
         if(role1 === "admin"){
             console.log("redirectd to admin pannel")
             return 
         }
         if(role1 === "user"){
            console.log("redirected to user pannel")
            return
         }
         role1 ; // see if we hover then see it assien to superpannel 
 }



