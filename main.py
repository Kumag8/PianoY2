def on_forever():
    led.enable(False)
    music.set_built_in_speaker_enabled(False)
    if pins.digital_read_pin(DigitalPin.P5) == 1:
        music.ring_tone(262)
    elif pins.digital_read_pin(DigitalPin.P8) == 1:
        music.ring_tone(294)
    elif pins.digital_read_pin(DigitalPin.P9) == 1:
        music.ring_tone(330)
    elif pins.digital_read_pin(DigitalPin.P11) == 1:
        music.ring_tone(349)
    elif pins.digital_read_pin(DigitalPin.P16) == 1:
        music.ring_tone(392)
    else:
        music.stop_all_sounds()
basic.forever(on_forever)
