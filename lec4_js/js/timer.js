let btn =document.getElementById('btn')
let num =document.getElementById('num')
let progress =document.getElementById('progress')

btn.addEventListener('click',function(){
    let i = num.innerText;
    let size = 100 /i ;
    counter = 0;
    let t = setInterval(function(){
        let val = i
    i --;
        if(i <= 0 ){
            clearInterval(t)
        }
        num.innerText -- ;
        
        counter += size 
        progress.style.width = counter + '%'
    },500)
})