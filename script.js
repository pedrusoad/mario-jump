const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds1 = document.querySelector('.clouds1')
const clouds2 = document.querySelector('.clouds2')

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
    
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const clouds1Position = clouds1.offsetLeft
    const clouds2Position = clouds2.offsetLeft
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        mario.style.animation = 'death 1s'
        setTimeout(() => {
            mario.style.top = '100%'
        }, 1000) 
        clouds1.style.animation = 'none'
        clouds2.style.animation = 'none'
        clouds1.style.left = `${clouds1Position}px`
        clouds2.style.left = `${clouds2Position}px`
        clouds2.style.top = '50px'
        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)