let lovemeter = 0
input.onPinPressed(TouchPin.P0, function () {
    lovemeter = randint(0, 100)
    basic.showNumber(lovemeter)
    basic.showString("LOVE METER")
    if (lovemeter < 50) {
        music.play(music.stringPlayable("A G F E D C - - ", 120), music.PlaybackMode.LoopingInBackground)
        images.iconImage(IconNames.Cow).showImage(0)
    } else {
        music.play(music.stringPlayable("E F G A A B B C5 ", 253), music.PlaybackMode.LoopingInBackground)
        images.iconImage(IconNames.Heart).showImage(0)
    }
})
