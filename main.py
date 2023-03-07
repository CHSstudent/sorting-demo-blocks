def on_up_pressed():
    global list2
    list2 = [8, 5, 3, 1, 4, 7, 9]
    mySprite.say(list2, 1000)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    selectionSort()
    mySprite.say(list2, 1000)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def swap(num: number, num2: number):
    global temp
    temp = list2[num]
    list2[num] = list2[num2]
    list2[num2] = temp

def on_a_pressed():
    bubbleSort()
    mySprite.say(list2, 1000)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def compare(a: number, b: number):
    return a < b
def bubbleSort():
    global index
    while index <= len(list2):
        index2 = 0
        while index2 <= index:
            if compare(list2[index], list2[index2]):
                swap(index, index2)
            index2 += 1
        index += 1
def selectionSort():
    global min2, index3
    while index3 <= len(list2):
        min2 = 0
        index22 = 0
        while index22 <= len(list2):
            index22 = index3 + 1
            if compare(list2[index22], min2):
                min2 = index22
            index22 += 1
        if index3 != min2:
            swap(index3, min2)
        index3 += 1
min2 = 0
index3 = 0
index = 0
temp = 0
mySprite: Sprite = None
list2: List[number] = []
scene.set_background_color(6)
list2 = [8, 5, 3, 1, 4, 7, 9]
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite.say(list2, 1000)