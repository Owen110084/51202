input.onButtonPressed(Button.A, function () {
    basic.showString("I'm Owen, and my hobbies are playing badminton and video games.")
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    music.setVolume(255)
    music.ringTone(587)
    basic.pause(100)
    music.ringTone(587)
    basic.pause(100)
    music.ringTone(262)
    basic.pause(100)
    music.ringTone(262)
    basic.pause(100)
})
