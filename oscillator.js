//create instance of the API
const context = new AudioContext()

//create four oscillators
const osc1 = context.createOscillator()
const osc2 = context.createOscillator()
const osc3 = context.createOscillator()
const osc4 = context.createOscillator()

//set frequency types
osc1.type = 'triangle'
osc2.type = 'triangle'
osc3.type = 'triangle'
osc4.type = 'triangle'

//library of notes in this octave
const semitonesObjectZero = {
    A: 440,
    Bb: 466.16,
    B: 493.88,
    C: 523.25,
    Db: 554.37,
    D: 587.33,
    Eb: 622.25,
    E: 659.25,
    F: 698.46,
    Gb: 739.99,
    G: 783.99,
    Ab: 830.61
}

//set osc notes
osc1.frequency.value = semitonesObjectZero.C
osc2.frequency.value = semitonesObjectZero.E
osc3.frequency.value = semitonesObjectZero.G
osc4.frequency.value = semitonesObjectZero.C

//create gain instance 
const volume = context.createGain()
volume.gain.value = 0.1

//connect gain to computer audio
volume.connect(context.destination)

//connect oscillators to gain instance
osc1.connect(volume)
osc2.connect(volume)
osc3.connect(volume)
osc4.connect(volume)

//set playtime
const duration = 5

//get current time from API
const startTime = context.currentTime


//start and stop playback
osc1.start(startTime)
osc2.start(startTime)
osc3.start(startTime)
osc4.start(startTime)
osc1.stop(startTime + duration)
osc2.stop(startTime + duration)
osc3.stop(startTime + duration)
osc4.stop(startTime + duration)