let screenValue=document.getElementById('screenValue')
let reduceBtn=document.getElementById('reduce')
let buttonTxt;
let buttons=document.querySelectorAll('#buttonGroup button')
for ( i of buttons) {
    i.addEventListener('click',(e)=>{
        buttonTxt= e.target.innerText

        
       if (buttonTxt =='C') {
    screenValue.innerText='0'
} 
else if(buttonTxt== '='){
try{
let evalVal=eval(screenValue.innerText)
screenValue.innerText=evalVal
}
catch{
let oldVal=screenValue.innerText
screenValue.innerText="Syntax Error"
setTimeout(()=>{
screenValue.innerText=oldVal
},500)
}
}
       else{
        
          if(buttonTxt=='X'){
          buttonTxt='*'
          }
          else if(buttonTxt=='÷'){
            buttonTxt='/';
          }
          else if(buttonTxt=='MOD'){
          buttonTxt='%'
          }

          else{
          buttonTxt= e.target.innerText
          }
                screenValue.innerText+=buttonTxt;

          
          }
          })
          
    }
          
reduce.addEventListener("click",()=>{
let valLength=screenValue.innerText.length
let newVal=screenValue.innerText.slice(0,valLength-1)
screenValue.innerText=newVal
if(valLength==0){
screenValue.innerText=0
}
else{
}
})
