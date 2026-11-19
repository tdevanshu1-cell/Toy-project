const form =document.querySelector("form")
const input=document.querySelector("input")
const text=document.querySelector("p")


form.addEventListener('submit',(e)=>{
    e.preventDefault();let flag=true;
    const lower=/[a-z]/.test(input.value.trim())
    const upper=/[A-Z]/.test(input.value.trim())
    const special=/[~@#$%^&*()_=+|}{:'"><]/.test(input.value.trim())
    if(input.value.trim().length<8){flag=false;}

    if(flag && lower && upper && special){
        text.textContent=`Password Strength:Good`
    }
    else{text.textContent=`Password Strength:Bad`}

})



