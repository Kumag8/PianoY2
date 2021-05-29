basic.forever(function () {
    if (true) {
        music.ringTone(262)
    } else if (false) {
        music.ringTone(294)
    } else if (false) {
        music.ringTone(330)
    } else if (false) {
        music.ringTone(349)
    } else if (false) {
        music.ringTone(392)
    } else if (false) {
        music.ringTone(440)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P9) == 0 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        music.ringTone(494)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P9) == 0 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        music.ringTone(523)
    } else {
        music.stopAllSounds()
    }
})
