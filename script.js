let randomNumber1 = Math.floor(Math.random() * 7)
let randomNumber2 = Math.floor(Math.random() * 7)

document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)

document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)
