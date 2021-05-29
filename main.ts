basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        music.ringTone(262)
    } else if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        music.ringTone(294)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        music.ringTone(330)
    } else if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        music.ringTone(349)
    } else if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        music.ringTone(392)
    } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.ringTone(440)
    } else if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        music.ringTone(494)
    } else if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        music.ringTone(523)
    } else {
        music.stopAllSounds()
    }
})
