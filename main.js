// фукція виклику блоку з текст ареа
document.querySelector('.edit').addEventListener('click', function () {
    let box1Inner = document.querySelector('.box1').innerHTML
    document.querySelector('.box2-a').style.display = 'block'
    document.querySelector('.textArea').textContent = box1Inner
    document.querySelector('.box2-b').style.display = 'none'
})
// функція зберігання текст ареа в основний блок
document.querySelector('.save').addEventListener('click', function () {
    document.querySelector('.box2-a').style.display = 'none'
    let textAreaValue = document.querySelector('.textArea').value
    document.querySelector('.box1').innerHTML = textAreaValue
})
// функція виклику блоку зі стилями
document.querySelector('.style').addEventListener('click', function () {
    document.querySelector('.box2-a').style.display = 'none'
    document.querySelector('.box2-b').style.display = 'block'
})
// функія зміни розміру шрифта
let radioBot = document.forms['radioBot']
radioBot.addEventListener('change', function () {
    document.querySelector('.box1').style.fontSize = `${event.target.value}`;
})
// функія зміни шрифта
let radioSelect = document.forms['radioSelect']
radioSelect.addEventListener('change', function () {
    document.querySelector('.box1').style.fontFamily = `${event.target.value}`;
})
// функія виклику квадрату з кольорами
let inputColors = document.forms['inputColors']
inputColors[0].addEventListener('click', function () {
    document.querySelector('.box-colors').style.display = `block`;
})
// функія виклику квадрату з кольорами
inputColors[1].addEventListener('click', function () {
    document.querySelector('.box-colors').style.display = `inline-block`;

})
// функція зміни кольру шрифта і заднього фону 
function bcColor() {
    let col = this.style.backgroundColor;
    if (document.querySelector('.box-colors').style.display == `block`) {
        document.querySelector('.box1').style.color = `${col}`;
        document.querySelector('.box-colors').style.display = `none`;
    }
    else if (document.querySelector('.box-colors').style.display == `inline-block`) {
        document.querySelector('.box1').style.backgroundColor = `${col}`;
        document.querySelector('.box-colors').style.display = `none`;
    }

}

document.querySelector('.cadetblue').addEventListener('click', bcColor);
document.querySelector('.darkred').addEventListener('click', bcColor);
document.querySelector('.darkseagreen').addEventListener('click', bcColor);
document.querySelector('.green').addEventListener('click', bcColor);
document.querySelector('.grey').addEventListener('click', bcColor);
document.querySelector('.indianred').addEventListener('click', bcColor);
document.querySelector('.blue').addEventListener('click', bcColor);
document.querySelector('.darkmagenta').addEventListener('click', bcColor);
document.querySelector('.darkolivegreen').addEventListener('click', bcColor);

let inputStyle = document.forms['inputStyle']
// функія зміни жирності шрифта
inputStyle[0].addEventListener('click', function () {
    if (inputStyle[0].checked) {
        document.querySelector('.box1').style.fontWeight = `bold`;
    }
    else if (inputStyle[0].checked == false) {
        document.querySelector('.box1').style.fontWeight = `normal`
    }
})
// функія зміни курсиву шрифта
inputStyle[1].addEventListener('click', function () {
    if (inputStyle[1].checked) {
        document.querySelector('.box1').style.fontStyle = `italic`;
    }
    else if (inputStyle[1].checked == false) {
        document.querySelector('.box1').style.fontStyle = `normal`
    }
})
// функція виклику блоку з таблицею і списком
document.querySelector('.add').addEventListener('click', function () {
    document.querySelector('.box1').style.display = 'none'
    document.querySelector('.box2').style.display = 'none'
    document.querySelector('.inputs').style.display = 'none'
    document.querySelector('.box3').style.display = 'block'
})

let inputsTableList = document.forms['inputsTableList']
// функція виклику блоку з таблицями 
inputsTableList[0].addEventListener('click', function () {
    document.querySelector('.box3-b').style.display = 'none'
    document.querySelector('.box3-a').style.display = 'block'
    document.querySelector('.box3').style.height = '390px'
})
// функція виклику блоку з списком
inputsTableList[1].addEventListener('click', function () {
    document.querySelector('.box3-a').style.display = 'none'
    document.querySelector('.box3-b').style.display = 'block'
    document.querySelector('.box3').style.height = '210px'
})
let count = document.forms['count']
let widthCount = document.forms['widthCount']
// функія створення таблиці
document.querySelector('.inputCreateTable').addEventListener('click', function () {
    let table = document.createElement('table')
    document.querySelector('.table').append(table);
    let countTR = count[0].value
    let countTD = count[1].value
    let widthOfTd = widthCount[0].value
    let heightOfTd = widthCount[1].value
    let widthOfBorder = widthCount[2].value

    for (let i = 0; i < countTR; i++) {
        let tr = document.createElement('tr');
        document.querySelector('.table').lastChild.append(tr);

        for (let j = 0; j < countTD; j++) {
            let td = document.createElement('td')
            document.querySelector('.table').lastChild.children[i].append(td);
            document.querySelector('.table').lastChild.children[i].children[j].style.width = `${widthOfTd}px`;
            document.querySelector('.table').lastChild.children[i].children[j].style.height = `${heightOfTd}px`;
            document.querySelector('.table').lastChild.children[i].children[j].style.borderWidth = `${widthOfBorder}px`;
            document.querySelector('.table').lastChild.children[i].children[j].style.borderStyle = `${borderStyle}`;
            document.querySelector('.table').lastChild.children[i].children[j].style.borderColor = `${borderColor}`;

        }
    }

    let tableInner = document.querySelector('.table').innerHTML
    document.querySelector('.textArea').value += tableInner
    document.querySelector('.table').innerHTML = ''
    document.querySelector('.box1').style.display = 'block'
    document.querySelector('.box2').style.display = 'block'
    document.querySelector('.inputs').style.display = 'block'
    document.querySelector('.box3').style.display = 'none'
    document.querySelector('.table').style.display = 'none'


})

let borderStyle = ''
borderStyle = document.querySelector('.borderStyle').value
// функція створення рамки для таблиці
document.querySelector('.borderStyle').addEventListener('change', function () {
    borderStyle = event.target.value
})

let borderColor = ''
borderColor = document.querySelector('.borderColor').value
// функція створення кольору для таблиці
document.querySelector('.borderColor').addEventListener('change', function () {
    borderColor = event.target.value
})

let countList = document.forms['countList']
// функція для створення списку
document.querySelector('.inputCreateList').addEventListener('click', function () {
    let ul = document.createElement('ul')
    document.querySelector('.list').append(ul);

    let countLI = countList[0].value
    let typeOfMarks = countList[1].value
    let counter = 0
    for (let i = 0; i < countLI; i++) {
        let li = document.createElement('li')
        document.querySelector('.list').lastChild.append(li);
        counter++;
        document.querySelector('.list').lastChild.children[i].type = `${typeOfMarks}`
        document.querySelector('.list').lastChild.children[i].innerHTML = `item ${counter}`
    }

    let listInner = document.querySelector('.list').innerHTML
    document.querySelector('.textArea').value += listInner
    document.querySelector('.list').innerHTML = ''
    document.querySelector('.box1').style.display = 'block'
    document.querySelector('.box2').style.display = 'block'
    document.querySelector('.inputs').style.display = 'block'
    document.querySelector('.box3').style.display = 'none'
    document.querySelector('.list').style.display = 'none'

})

let typeOfMarks = ''
typeOfMarks = document.querySelector('.typeOfMarks').value
// функція для визначення типу списку
document.querySelector('.typeOfMarks').addEventListener('change', function () {
    typeOfMarks = event.target.value
})
