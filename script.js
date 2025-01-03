const net = new brain.NeuralNetwork()

const data =
    [{ "input": { "r": 0, "g": 0, "b": 0 }, "output": [1] }, { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0] }, { "input": { "r": 0.4987342599348549, "g": 0.08851038695621616, "b": 0.13794828627894318 }, "output": [0] }, { "input": { "r": 0.24178535596463946, "g": 0.007018933854225362, "b": 0.2078435711407728 }, "output": [0] }, { "input": { "r": 0.5996066779554391, "g": 0.15659918369491643, "b": 0.43820994013183234 }, "output": [0] }, { "input": { "r": 0.4907115002514524, "g": 0.6478263178632827, "b": 0.6964109476112184 }, "output": [0] }, { "input": { "r": 0.13839677395730188, "g": 0.9698718893824195, "b": 0.6161517571173146 }, "output": [1] }, { "input": { "r": 0.5959965204916329, "g": 0.5075551338274541, "b": 0.7456751282508061 }, "output": [1] }, { "input": { "r": 0.21779628522054162, "g": 0.7034395623040643, "b": 0.16636619092264882 }, "output": [1] }, { "input": { "r": 0.19972755994795766, "g": 0.813086545238593, "b": 0.7952965259516894 }, "output": [1] }, { "input": { "r": 0.24689557301536302, "g": 0.14568874586710134, "b": 0.9740264886994993 }, "output": [1] }, { "input": { "r": 0.11662626103897433, "g": 0.5388830016788967, "b": 0.4387972147181789 }, "output": [0] }, { "input": { "r": 0.7590860312468568, "g": 0.9685644562571959, "b": 0.11304196368516595 }, "output": [0] }, { "input": { "r": 0.6271887658174446, "g": 0.29898535484011146, "b": 0.3839603581491018 }, "output": [0] }, { "input": { "r": 0.904521992241218, "g": 0.6989397837797893, "b": 0.37654463735469623 }, "output": [1] }, { "input": { "r": 0.5654840886173356, "g": 0.8394274337698285, "b": 0.5589407837621119 }, "output": [1] }, { "input": { "r": 0.1548439003302241, "g": 0.7287263060097203, "b": 0.30500181617903455 }, "output": [1] }, { "input": { "r": 0.8274165238776803, "g": 0.06989077097551999, "b": 0.6312153289836949 }, "output": [1] }, { "input": { "r": 0.26600357275807196, "g": 0.6414936580608492, "b": 0.36270498525612893 }, "output": [0] }, { "input": { "r": 0.3887159092018603, "g": 0.8285574416594261, "b": 0.8253625441700617 }, "output": [0] }, { "input": { "r": 0.5699783796659644, "g": 0.06550805532146464, "b": 0.18216876589792197 }, "output": [0] }, { "input": { "r": 0.5993635518707532, "g": 0.8014098020995909, "b": 0.8292883821594842 }, "output": [0] }, { "input": { "r": 0.7687523748363232, "g": 0.28786965619786165, "b": 0.7057803838810155 }, "output": [1] }, { "input": { "r": 0.11337544563693902, "g": 0.4433555421096643, "b": 0.2772646476525463 }, "output": [1] }]



net.train(data)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')

let color
setRandomColor()


whiteButton.addEventListener('click', () => {
    chooseColor(1)
})
blackButton.addEventListener('click', () => {
    chooseColor(0)
})
printButton.addEventListener('click', print)
function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}

function print() {
    console.log(JSON.stringify(data))
}

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0]
    guessE1.style.color = guess > .5 ? '#FFF' : '#000'
    textColor=  guessE1.style.color;
    colorE1.style.backgroundColor =
        `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}`;

        console.log(`The color of the guess text is: ${textColor}`);
}


