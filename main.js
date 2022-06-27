//document.querySelector("rate").getElementById('id').addEventListener('click',  ()=>{
const rateBtn = document.querySelectorAll("button")
console.log(rateBtn)
rateBtn.forEach(Btn=>{
    Btn.addEventListener("click",()=>{
    localStorage.setItem("rate",Btn.value)    
    })
});


document.querySelector("input").addEventListener("submit",()=>{
    const ratinglength=localStorage.length()
    if (ratinglength>0){
        window.Location.href='./thankyou.html'
    }
    else{

        alert('please rate us')
    }
});

