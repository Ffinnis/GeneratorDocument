
let random_surnames = ['Сафронов', "Беликов", "Чивапчин"];
let random_fathers = ['Кириллович', 'Максимович', 'Алексеевич'];
let random_maleNames = ['Кирилл', 'Максим', 'Алексей'];
let random_femaleNames = ['Юлиана', 'Анна', 'Таисия'];

function check_gender() {
    input_name = document.querySelector('#input-userName').value
    input_surname = document.querySelector('#input-userSurname').value
    input_father = document.querySelector('#input-userFather').value
    surname_label = document.querySelector('#document-surname');
    name_label = document.querySelector('#document-user');
    father_label = document.querySelector('#patronymic');
    var random_maleName = random_maleNames[getRandomInt(0, random_maleNames.length)]
    var random_femaleName = random_femaleNames[getRandomInt(0, random_femaleNames.length)]
    var random_surname = random_surnames[getRandomInt(0, random_surnames.length)]
    var random_father = random_fathers[getRandomInt(0, random_fathers.length)]
    gender = document.getElementsByName('gender');
    sex = document.querySelector('#sex');   

    for(let i = 0;i<gender.length;i++){
        if(gender[i].checked) {
            if(gender[i].value === 'male') {
                sex.innerHTML = 'M'
                if(!input_name) {
                    name_label.innerHTML = random_maleName
                } else{
                    name_label.innerHTML = input_name
                }
            } else{
                sex.innerHTML = 'F'
                if(!input_name) {
                    name_label.innerHTML = random_femaleName
                } else{
                    name_label.innerHTML = input_name
                }
            }
        } 
    }
    if(!gender[0].checked & !gender[1].checked) {
        random_gender = getRandomInt(0,2);
        if(random_gender === 0) {
            sex.innerHTML = 'M'
            if(!input_name) {
                name_label.innerHTML = random_maleName
            } else{
                name_label.innerHTML = input_name
            }
        } else{
            sex.innerHTML = 'F'
            if(!input_name) {
                name_label.innerHTML = random_femaleName
            } else{
                name_label.innerHTML = input_name
            }
        }
    }

    
}

function check_scale() {
    let scale_toggle = document.getElementsByName('scale__toggle');
    let person_face = document.querySelector('.person-face__image')

    if(scale_toggle[0].checked) {
        person_face.style.transform = "scaleX(-1)"
    }
    if(scale_toggle[1].checked) {
        person_face.style.transform = ""
    }
    if(scale_toggle[2].checked) {
        random_scale = getRandomInt(0,2);
        if(random_scale === 0){
            person_face.style.transform = "scaleX(-1)"
        } else{
            person_face.style.transform = ""
        }
    }
}



function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}


function randomDate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
}

function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString('ru', options)
}

function random_document() {
    let recordNumber = document.querySelector('#record_data');
    let documentNumber = document.querySelector('#document_data');
    console.log()

    recordNumber.innerHTML = `${getRandomInt(0,999999999999)}`
    documentNumber.innerHTML = `${getRandomInt(0,999999999999)}`
}

function check_date() {
    date = document.querySelector('#date').value;
    date_label = document.querySelector('#date_label')
    if(!date){
        let year = randomDate(1991, 1999);
        let month = randomDate(01,12);
        let day = randomDate(01, 31);
        date_label.innerHTML = `${day} ${month} ${year}`
    } else{
        date_label.innerHTML = `${getDate(date)}`
    }
    expiry = document.querySelector('#expired_data');
    let cur_year = new Date().getFullYear() 
    let exp_year = randomDate(cur_year+1, 2027);
    let exp_month = randomDate(1,12);
    let exp_day = randomDate(1,31);
    expiry.innerHTML = `${exp_day} ${exp_month} ${exp_year}`
}

function getInput() {



    
    
    

    check_gender()
    check_date()
    random_document()
    check_scale()
}

form = document.querySelector('.main-form');
document_main = document.querySelector('.document')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document_main.classList.add('active')

    getInput()
})