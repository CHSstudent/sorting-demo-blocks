controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    list = [
    8,
    5,
    3,
    1,
    4,
    7,
    9
    ]
    mySprite.say(list, 1000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    selectionSort()
    mySprite.say(list, 1000)
})
function swap (num: number, num2: number) {
    temp = list[num]
    list[num] = list[num2]
    list[num2] = temp
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubbleSort()
    mySprite.say(list, 1000)
})
function compare (a: number, b: number) {
    return a < b
}
function bubbleSort () {
    for (let index = 0; index <= list.length; index++) {
        for (let index2 = 0; index2 <= index; index2++) {
            if (compare(list[index], list[index2])) {
                swap(index, index2)
            }
        }
    }
}
function selectionSort () {
    for (let index = 0; index <= list.length; index++) {
        min = 0
        for (let index2 = 0; index2 <= list.length; index2++) {
            index2 = index + 1
            if (compare(list[index2], min)) {
                min = index2
            }
        }
        if (index != min) {
            swap(index, min)
        }
    }
}
let min = 0
let temp = 0
let mySprite: Sprite = null
let list: number[] = []
scene.setBackgroundColor(6)
list = [
8,
5,
3,
1,
4,
7,
9
]
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.say(list, 1000)
