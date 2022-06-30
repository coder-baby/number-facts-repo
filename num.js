let fact=document.querySelector('.fact');
let factText=document.querySelector('.fact-text')
let numInput=document.getElementById('number')

numInput.addEventListener('input',getFetchFact)

// numInput.addEventListener('input',getFactAjax)

// function getFactAjax(){
//     let number=numInput.value;

//     let xhr=new XMLHttpRequest()

//     xhr.open('GET', `http://numbersapi.com/${number}`)

//     xhr.onload= function(){
//         if(this.status==200 & number !== ''){
//             fact.style.display='block' 
//             factText.innerHTML=this.responseText
//         }

//     }

//     xhr.send();
    
// }

function getFetchFact(){
    let number=numInput.value;
    let url=`http://numbersapi.com/${number}`;
    
    fetch(url)
    .then((response)=>{
        return response.text()
    })
    .then((data)=>{
        if(number != ''){
            fact.style.display='block'
            factText.textContent=data  
        }  
    })
    .catch((err)=>console.log(err))

}