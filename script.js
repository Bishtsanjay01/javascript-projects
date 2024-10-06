const minus=document.querySelector('#minus')
const plus=document.querySelector('#plus')
const count=document.querySelector('#count')
const input=document.querySelector('input')
const reset=document.querySelector('#reset-btn')



plus.addEventListener('click',()=>{
    
    const countValue=parseInt(count.innerText)
    const inputVAlue=parseInt(input.value)
    count.innerText=countValue+inputVAlue
})
minus.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText)
    const inputVAlue=parseInt(input.value)
    count.innerText=countValue-inputVAlue

})
reset.addEventListener('click',()=>{
    count.innerText=0;
})