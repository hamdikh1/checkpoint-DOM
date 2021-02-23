let myliste = Array.from(document.getElementsByClassName('myListe'));
let plus = Array.from(document.getElementsByClassName('plus')) ;
let minus = Array.from(document.getElementsByClassName('minus')) ;
let price = Array.from(document.getElementsByClassName('price')) ;
let counter = Array.from(document.getElementsByClassName('counter')) ;
let heart = Array.from(document.getElementsByClassName('heart'));
let pricetotal = document.getElementById('pricetotal') ;
let remove = Array.from (document.getElementsByClassName('remove')) ;
let total = Array.from(document.getElementsByClassName('total')) ;

function changeColor (el) {
    if(el.target.style.color !== 'red'){
        el.target.style.color ="red"
    }
    else {
        el.target.style.color = "black"
    }
}



function calculsum (){
    let somme = 0 ;
    for(let i = 0 ; i < mylist.length ; i++){
       total[i].innerHTML = Number(price[i].innerHTML) * Number(counter[i].innerHTML) ;
      
       somme+= Number(price[i].innerHTML) * Number(counter[i].innerHTML) ;
    }
    pricetotal.innerHTML= somme 
    console.log('somme' , somme)
   
}



for (let i = 0 ; i < myliste.length ; i++)
{

   plus[i].addEventListener('click', function(){
      counter[i].innerHTML++


    }) 


    minus[i].addEventListener('click', function(){
         if(counter[i].innerHTML > 0){
        counter[i].innerHTML --
         }
     
    })
   
    
  
    heart[i].addEventListener('click' , changeColor)

  

  let buttonremove = remove[i] ;
  buttonremove.addEventListener('click' , function(event){
      let buttonclick = event.target 
      buttonclick.parentElement.remove() 
      

      price[i].innerHTML
 
 
 
  })



}
