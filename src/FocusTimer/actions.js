import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as events from './events.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    if(state.minutes == 0 && state.seconds == 0 ) {
        alert('É preciso definir um tempo para iniciar o timer')
        state.isRunning = false
        return
    }

    if(Number(el.minutes.textContent == 0 && Number(el.seconds.textContent == 0))) {
        alert('É preciso definir um tempo para iniciar o timer')
        state.isRunning = false
        return   
    }

    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()

    sounds.buttonPress.play()
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running')

    state.seconds = 0

    timer.updateDisplay()

    sounds.buttonPress.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

    sounds.buttonPress.play()
}

export function addTime() {
    let minutes = Number(el.minutes.textContent) + 5
    let seconds = el.seconds.textContent

    minutes = minutes > 60 ? 60 : minutes

    state.minutes = minutes
    state.seconds = seconds
    
    timer.updateDisplay(minutes, seconds)

    sounds.buttonPress.play()
}

export function removeTime() {
    let minutes = Number(el.minutes.textContent) - 5
    let seconds = el.seconds.textContent

    minutes = minutes < 0 ? 0 : minutes

    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(minutes, seconds)

    sounds.buttonPress.play()
}

// Sounds

export function tree() {
    el.tree.classList.toggle('chosen')
    sounds.tree.play()

    if(!el.tree.classList.contains('chosen')) {
        sounds.tree.pause()
    }
}

export function cloudRain() {
    el.cloudRain.classList.toggle('chosen')
    sounds.cloudRain.play()

    if(!el.cloudRain.classList.contains('chosen')) {
        sounds.cloudRain.pause()
    }
}

export function storefront() {
    el.storefront.classList.toggle('chosen')
    sounds.storefront.play()

    if(!el.storefront.classList.contains('chosen')) {
        sounds.storefront.pause()
    }
}

export function campfire () {
    el.campfire.classList.toggle('chosen')
    sounds.campfire.play()

    if(!el.campfire.classList.contains('chosen')) {
        sounds.campfire.pause()
    }
}
