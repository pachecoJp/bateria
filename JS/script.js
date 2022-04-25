const som1 = document.getElementById('a1')
const som2 = document.getElementById('a2')
const som3 = document.getElementById('a3')
const som4 = document.getElementById('a4')
const som5 = document.getElementById('a5')
const som6 = document.getElementById('a6')
const som7 = document.getElementById('a7')

const img1 = document.getElementById('im1')
const img2 = document.getElementById('im2')
const img3 = document.getElementById('im3')
const img4 = document.getElementById('im4')
const img5 = document.getElementById('im5')
const img6 = document.getElementById('im6')
const img7 = document.getElementById('im7')

img1.addEventListener('click', ()=>{
    som1.src = "./som/caixaS.wav"
    a1.play();
})

img2.addEventListener('click', ()=>{
    som2.src = "./som/bumboS.wav"
    a2.play();
})

img3.addEventListener('click', ()=>{
    som3.src = "./som/chimbalS.wav"
    a3.play();
})

img4.addEventListener('click', ()=>{
    som4.src = "./som/conducaoS.wav"
    a4.play();
})

img5.addEventListener('click', ()=>{
    som5.src = "./som/pratoAtaqueS.wav"
    a5.play();
})

img6.addEventListener('click', ()=>{
    som6.src = "./som/surdoS.wav"
    a6.play();
})

img7.addEventListener('click', ()=>{
    som7.src = "./som/tom1S.wav"
    a7.play();
})