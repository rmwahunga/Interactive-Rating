document.querySelector("rate").getElementById('id').addListiner('click',  'value');

document.querySelector('#submit').addListiner(click, ()=>{
    const ratinglength=localStorage.lenth()
    if (ratinglength>0){
        window.Location.href='./thankyou.html'
    }
    else{

        alert('please rate us')
    }
});

