controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    list2 = [
    8,
    5,
    3,
    1,
    4,
    7,
    9
    ]
    mySprite.say(list2, 1000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    selectionSort()
    mySprite.say(list2, 1000)
})
function swap (num: number, num2: number) {
    temp = list2[num]
    list2[num] = list2[num2]
    list2[num2] = temp
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubbleSort()
    mySprite.say(list2, 1000)
})
function compare (a: number, b: number) {
    return a < b
}
function bubbleSort () {
    let index2: number;
while (index <= list2.length) {
        index2 = 0
        while (index2 <= index) {
            if (compare(list2[index], list2[index2])) {
                swap(index, index2)
            }
            index2 += 1
        }
        index += 1
    }
}
function selectionSort () {
    let index22: number;
while (index3 <= list2.length) {
        min2 = 0
        index22 = 0
        while (index22 <= list2.length) {
            index22 = index3 + 1
            if (compare(list2[index22], min2)) {
                min2 = index22
            }
            index22 += 1
        }
        if (index3 != min2) {
            swap(index3, min2)
        }
        index3 += 1
    }
}
let min2 = 0
let index3 = 0
let index = 0
let temp = 0
let mySprite: Sprite = null
let list2: number[] = []
scene.setBackgroundColor(6)
list2 = [
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
mySprite.say(list2, 1000)
