let qrcode_button =document.querySelector('#qrcode');
let image =document.querySelector('#img');
let loader =document.querySelector('#loading');

qrcode_button.addEventListener('click',function(){
    loader.style.display='block';

    image.onload=function(){
        loader.style.display='none';
    }

    let txt=document.querySelector("#inp").value;
    let api=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`; 
    console.log(txt);
    // image.setAttribute("src","api");
    if(!txt)
    {
        alert('Pls enter some value');
    }
    else {
        image.src=api;
    }
    
})

let ent=document.querySelector("#inp");
ent.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) { 
      event.preventDefault();
     console.log('Hello');
     loader.style.display='block';

    image.onload=function(){
        loader.style.display='none';
    }

    let txt=document.querySelector("#inp").value;
    let api=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`; 
    console.log(txt);
    // image.setAttribute("src","api");
    if(!txt)
    {
        alert('Pls enter some value');
    }
    else {
        image.src=api;
    }
    }
  });

