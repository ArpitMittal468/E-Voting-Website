let voteData = [
    {
        question: "Aapp Kaise Hain",
        by: "BilluBhai",
        votes: "12",
        options: ['Ache Hain', 'Bure Hain'],
        userChoise: -1
    },
    {
        question: "Is india better team than pakistan",
        by: "Harshit",
        votes: "100",
        options: ['Yes', 'No'],
        userChoise: -1
    },
    {
        question: "Akhilesh Or Yogi",
        by: "Aman",
        votes: "90",
        options: ['yogi', 'Akilesh'],
        userChoise: -1
    },
    {
        question: "What kind of programmer you are",
        by: "Nikhil",
        votes: "0",
        options: ['Frontend', 'Backend', 'Game', 'System', 'I dont want to be programmer'],
        userChoise: -1
    },

]

for (let z in voteData) {
    voteData[z].randomVal = someRandomValue()
    voteData[z].cardColor = getColor();
}


function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
        (65 + 10 * Math.random()) + '%,' +
        (85 + 5 * Math.random()) + '%)'
}

function someRandomValue() {
    let CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let x = "";
    for (let i = 0; i < 15; i++) {
        x = x + CharSet[parseInt((Math.random() * 100)) % CharSet.length]
    }
    x = x + new Date().getTime();
    return x;
}

function createCard(data) {
    return `<div class="cardContainer" id="${data.randomVal}">
            <div class="cards" style="background: ${data.cardColor};">
                ${data.question}
            </div>
            <div class="discp">
                <span>${data.votes} votes</span> 
                <span>&nbsp;&nbsp;&nbsp;&nbsp;~${data.by}</span>
                <button style="background: ${data.cardColor};" onclick="handleVote('${data.randomVal}')">Vote</button>
            </div>
        </div>`
}

let tV = 0;
function toggleVisible() {
    tV = tV === 0 ? 1 : 0;
    state = tV === 0 ? 'hidden' : 'visible';
    document.getElementById('votePanel').style.visibility = state;
}

let res;
function handleVote(ele) {
    for (let x of voteData) {
        if (x.randomVal === ele) {
            res = x;
            break;
        }
    }
    document.getElementById('billu').style.backgroundColor = res.cardColor;
    document.getElementById('questionBig').innerText = res.question
    document.getElementById('votesBig').innerText = res.votes + ' Votes'
    document.getElementById('byBig').innerText = '~' + res.by

    let optionsH = ''
    for (let i in res.options) {
        optionsH += `<div class="clickAns" onclick="AnsThis(this)" id='Ans${i}'>${res.options[i]}</div>`
    }
    document.getElementById('voteAns').innerHTML = optionsH
    toggleVisible()
    // console.log(res)
}


function AnsThis(ele) {
    let selectid = ele.id
    let z = document.getElementsByClassName('clickAns')
    for (let x of z) {
        st = ""
        if (x.id == selectid) {
            st = 'background-color: ' + res.cardColor
        }
        else {
            st = 'color: grey; font-style: italic;'
        }
        x.style = st;
    }
}

function closed(e) {
    if (e.target.id === 'votePanel') toggleVisible()
}
let hahaha;
function newTosty() {
    let x = document.getElementById('rang').value;
    hahaha = x;
    let res = '';
    for (let i = 1; i <= x; i++) {
        res += `<input class="tosty" placeholder="${'Option ' + i}" required id="${'option' + i}">`
    }
    res += '<button onclick="AddNewItem()">Add</button>'
    document.getElementById('kuchToh').innerHTML = res;

}
newTosty();

function createCards() {
    let hh = ""
    let y = document.getElementById('contentDiv')
    for (let z of voteData) {
        hh += createCard(z)
    }
    y.innerHTML = hh
}
createCards();

function AddNewItem() {
    let lst = [];
    for (let i = 1; i <= hahaha; i++)
        lst.push(document.getElementById('option' + i).value);
    voteData.push(
        {
            question: document.getElementById('newQuestion').value,
            by: 'Some User',
            votes: "" + parseInt(Math.random() * 100),
            options: lst,
            userChoise: -1,
            randomVal: someRandomValue(),
            cardColor: getColor()
        },
    )
    createCards();
    document.getElementById('newVote').style.visibility = 'hidden';
}

function kuchBillu() {
    document.getElementById('newVote').style.visibility = 'visible'
}