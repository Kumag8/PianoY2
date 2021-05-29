basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        music.ringTone(262)
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.ringTone(294)
    } else if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        music.ringTone(330)
    } else if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        music.ringTone(349)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        music.ringTone(392)
    } else {
        music.stopAllSounds()
    }
})
