game.splash("Lets calculate the area of a Trapezoid (cm)")
let base_1 = game.askForNumber("What is the length of base_1? (cm)")
let base_2 = game.askForNumber("What is the length of base_2? (cm)")
let height = game.askForNumber("What is the Height? (cm)")
let area = (base_1 + base_2) / 2 * height
game.splash("The Area of the Trapezoid is " + area)
