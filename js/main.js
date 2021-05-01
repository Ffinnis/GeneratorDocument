var translite = {"Ё":"Yo","Й":"I","Ц":"Ts","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"Sh","Щ":"Sch","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"А","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"Zh","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"Ch","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"Yu","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

function transliterate(word){
    if(word.search(/[А-яЁё]/)) {
        var user_item1 = document.querySelector('.translate_info')
        var user_item2 = document.querySelector('#document-transleUser')
        user_item1.style.margin = '31px 0 0 0'
        user_item2.style.margin = '29px 0 0 0'
        return ''
    } else{
        var user_item1 = document.querySelector('.translate_info')
        var user_item2 = document.querySelector('#document-transleUser')
        user_item1.style.margin = '-16px 0 0 0'
        user_item2.style.margin = '-16px 0 0 0'
        return word.split('').map(function (char) { 
            return translite[char] || char; 
          }).join("");
    }
}





let random_surnames = ['Сафронов', "Беликов", "Чивапчин", 'Иванов', 'Алеексеев', 'Смирнов'];
let random_maleNames = ['Кирилл', 'Максим', 'Алексей', 'Андрей', 'Мефодий', 'Вячеслав', 'Саввелий', 'Анатолий'];
let random_femaleNames = ['Юлиана', 'Анна', 'Таисия', 'Анастасия', 'Лариса', 'Юлия'];


async function check_gender() {
    input_name = document.querySelector('#input-userName').value
    input_surname = document.querySelector('#input-userSurname').value
    input_father = document.querySelector('#input-userFather').value
    surname_label = document.querySelector('#document-surname');
    name_label = document.querySelector('#document-user');
    father_label = document.querySelector('#patronymic');
    var random_maleName = random_maleNames[getRandomInt(0, random_maleNames.length)]
    var random_femaleName = random_femaleNames[getRandomInt(0, random_femaleNames.length)]
    var random_surname = random_surnames[getRandomInt(0, random_surnames.length)]
    var trans_name = document.querySelector('#document-transleUser')
    var trans_surname = document.querySelector('#document-transleSurname')
    //var random_father = random_fathers[getRandomInt(0, random_fathers.length)]
    var random_father = random_maleNames[getRandomInt(0, random_maleNames.length)];
    fatherEnd = random_father.slice(random_father.length-2, random_father.length);
    fatherRoot = random_father.slice(0, random_father.length-2);
    const gender = document.getElementsByName('gender');
    const sex = document.querySelector('#sex');   

    for(let i = 0;i<gender.length;i++){
        if(gender[i].checked) {
            if(gender[i].value === 'male') {
                var genderEnd = "ич"
    switch (fatherEnd){
        case "ий": random_father = fatherRoot+"ьев"; break;
        case "ов": random_father = fatherRoot+"ов"; break;
        case "ль": random_father = fatherRoot+"льев"; break;
        case "ма": random_father = fatherRoot+"мов"; break;
        case "ей": random_father = fatherRoot+"еев"; break;
        case "ва": random_father = fatherRoot+"вов"; break;
        case "ья": random_father = fatherRoot+"ь"; break;
        case "ай": random_father = fatherRoot+"ев"; break;
        case "ел": random_father = fatherRoot+"ельев"; break;		
        default: random_father +="ов"; break;
    }
                sex.innerHTML = 'M'
                if(!input_name) {
                    name_label.innerHTML = random_maleName
                    trans_name.innerHTML = transliterate(random_maleName)
                } else{
                    name_label.innerHTML = input_name
                    trans_name.innerHTML = transliterate(input_name)
                }
                if(!input_surname) {
                    surname_label.innerHTML = random_surname
                    trans_surname.innerHTML = transliterate(random_surname)
                } else{
                    surname_label.innerHTML = input_surname
                    trans_surname.innerHTML = transliterate(input_surname)
                }
                if(!input_father) {
                    father_label.innerHTML = random_father+genderEnd
                } else{
                    father_label.innerHTML = input_father
                }
            } else{
                
                sex.innerHTML = 'F'
                var genderEnd = "на"

    switch (fatherEnd){
        case "ий": random_father = fatherRoot+"ьев"; break;
        case "ов": random_father = fatherRoot+"ов"; break;
        case "ль": random_father = fatherRoot+"льев"; break;
        case "ма": random_father = fatherRoot+"мов"; break;
        case "ей": random_father = fatherRoot+"еев"; break;
        case "ва": random_father = fatherRoot+"вов"; break;
        case "ья": random_father = fatherRoot+"ь"; break;
        case "ай": random_father = fatherRoot+"ев"; break;
        case "ел": random_father = fatherRoot+"ельев"; break;		
        default: random_father +="ов"; break;
    }

                if(!input_name) {
                    name_label.innerHTML = random_femaleName
                    trans_name.innerHTML = transliterate(random_femaleName)
                } else{
                    name_label.innerHTML = input_name
                    trans_name.innerHTML = transliterate(input_name)
                }
                if(!input_surname) {
                    surname_label.innerHTML = random_surname+'а'
                    trans_surname.innerHTML = transliterate(random_surname+'a')
                } else{
                    surname_label.innerHTML = input_surname
                    trans_surname.innerHTML = transliterate(input_surname)
                }
                if(!input_father) {
                    father_label.innerHTML = random_father+genderEnd
                } else{
                    father_label.innerHTML = input_father
                }
            }
        } 
    }
    if(!gender[0].checked & !gender[1].checked) {
        let random_gender = getRandomInt(0,2);
        if(random_gender === 0) {
            const Murl = "https://ffinnis.github.io/GeneratorDocument/Mphotos.json"
                    await fetch(Murl)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        let Mrandom_id = getRandomInt(0, data.length)
                        let photo_container = document.querySelector('.person-face__image')
                        let random_male_photo = data[Mrandom_id].url
                        photo_container.setAttribute('src', `${random_male_photo}`)     
                    })
            sex.innerHTML = 'M'
            var genderEnd = "ич"
    switch (fatherEnd){
        case "ий": random_father = fatherRoot+"ьев"; break;
        case "ов": random_father = fatherRoot+"ов"; break;
        case "ль": random_father = fatherRoot+"льев"; break;
        case "ма": random_father = fatherRoot+"мов"; break;
        case "ей": random_father = fatherRoot+"еев"; break;
        case "ва": random_father = fatherRoot+"вов"; break;
        case "ья": random_father = fatherRoot+"ь"; break;
        case "ай": random_father = fatherRoot+"ев"; break;
        case "ел": random_father = fatherRoot+"ельев"; break;		
        default: random_father +="ов"; break;
    }
            if(!input_name) {
                name_label.innerHTML = random_maleName
                trans_name.innerHTML = transliterate(random_maleName)
            } else{
                name_label.innerHTML = input_name
                trans_name.innerHTML = transliterate(input_name)
            }
            if(!input_surname) {
                surname_label.innerHTML = random_surname 
                trans_surname.innerHTML = transliterate(random_surname)
            } else{
                surname_label.innerHTML = input_surname
                trans_surname.innerHTML = transliterate(input_surname)
            }
            if(!input_father) {
                father_label.innerHTML = random_father+genderEnd
            } else{
                father_label.innerHTML = input_father
            }
        } else{
            const Furl = "https://ffinnis.github.io/GeneratorDocument/Fphotos.json"
                    await fetch(Furl)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        let random_id = getRandomInt(0, data.length)
                        let photo_container = document.querySelector('.person-face__image')
                        let random_female_photo = data[random_id].url
                        photo_container.setAttribute('src', `${random_female_photo}`)     
                    })
            sex.innerHTML = 'F'
            var genderEnd = "на"
    switch (fatherEnd){
        case "ий": random_father = fatherRoot+"ьев"; break;
        case "ов": random_father = fatherRoot+"ов"; break;
        case "ль": random_father = fatherRoot+"льев"; break;
        case "ма": random_father = fatherRoot+"мов"; break;
        case "ей": random_father = fatherRoot+"еев"; break;
        case "ва": random_father = fatherRoot+"вов"; break;
        case "ья": random_father = fatherRoot+"ь"; break;
        case "ай": random_father = fatherRoot+"ев"; break;
        case "ел": random_father = fatherRoot+"ельев"; break;		
        default: random_father +="ов"; break;
    }
            if(!input_name) {
                name_label.innerHTML = random_femaleName
                trans_name.innerHTML = transliterate(random_femaleName)
            } else{
                name_label.innerHTML = input_name
                trans_name.innerHTML = transliterate(input_name)
            }
            if(!input_surname) {
                surname_label.innerHTML = random_surname+'а'
                trans_surname.innerHTML = transliterate(random_surname+'a')
            } else{
                surname_label.innerHTML = input_surname
                trans_surname.innerHTML = transliterate(input_surname)
            }
            if(!input_father) {
                father_label.innerHTML = random_father+genderEnd
            } else{
                father_label.innerHTML = input_father
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

async function getInput() {
    async function signs() {   
        const url = "https://ffinnis.github.io/GeneratorDocument/signs.json"
        await fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let random_sign_id = getRandomInt(0, data.length)
            let user_sign = document.querySelector('#user_sign')
            let random_sign = data[random_sign_id].url
            user_sign.setAttribute('src', `${random_sign}`)
        })
        
    }

    async function backgrounds() {
        const url = "https://ffinnis.github.io/GeneratorDocument/backgrounds.json"
        await fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let random_background_id = getRandomInt(0, data.length)
            let user_background = document.querySelector('#person_background')
            let random_background = data[random_background_id].url
            user_background.setAttribute('src', `${random_background}`)
            
        })
        
    }

    async function check_face() {
        const gender = document.getElementsByName('gender');
        const sex = document.querySelector('#sex');
        for(let i = 0;i<gender.length;i++){
            if(gender[i].checked) {
                if(gender[i].value === 'female') {
                    const Furl = "https://ffinnis.github.io/GeneratorDocument/Fphotos.json"
                    await fetch(Furl)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        let random_id = getRandomInt(0, data.length)
                        let photo_container = document.querySelector('.person-face__image')
                        let random_female_photo = data[random_id].url
                        photo_container.setAttribute('src', `${random_female_photo}`)     
                    })
                } else{
                    const Murl = "https://ffinnis.github.io/GeneratorDocument/Mphotos.json"
                    await fetch(Murl)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        let Mrandom_id = getRandomInt(0, data.length)
                        let photo_container = document.querySelector('.person-face__image')
                        let random_male_photo = data[Mrandom_id].url
                        photo_container.setAttribute('src', `${random_male_photo}`)     
                    })
                }
            }
        }
        
    }
    
    
    await backgrounds()
    await check_face()
    await signs()
    check_gender()
    check_date()
    random_document()
    check_scale()
    canvasBtn = document.querySelector('#make_canvas')
    canvas_document = document.querySelector('.document')
    photo_container = document.querySelector('.complete-photo')
    canvasBtn.addEventListener('click', () => {
        html2canvas(canvas_document, {logging: true, letterRendering: 1, allowTaint: false, useCORS: true, scale: 1, width: 1270, height: 700 } ).then(canvas => { 
            saveAs(canvas.toDataURL(), 'doc.png');
        })
    })
}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}



form = document.querySelector('.main-form');
document_main = document.querySelector('.document')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document_main.classList.add('active')

    getInput()
})



