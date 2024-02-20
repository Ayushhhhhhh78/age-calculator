let birthTextY = "Enter Your Birth year : ";
let birthTextM = "Enter Your Birth Month : ";
let birthTextD = 'Enter Your Birth Date : ';
let it_birthTextY = '';
let it_birthTextM = '';
let it_birthTextD = '';
let x = 0;
let y = 999;
let z = 999;
let abc;

let age_year; let age_month; let age_date; 
let day_age; let hour_age; let minute_age; let seconds_age;
// console.log(birthText.length);
setInterval(() => {
    if(x<birthTextY.length){
        it_birthTextY += birthTextY[x];
        document.querySelector('.year span').innerHTML = it_birthTextY;
        x++;
    }else if(x==birthTextY.length){
        document.getElementById('year-in').setAttribute('style', 'display:block');
        y = 0;
        x = 999;
    }

    if(y<birthTextM.length){
        it_birthTextM += birthTextM[y];
        document.querySelector('.month span').innerHTML = it_birthTextM;
        y++;
    }else if(y==birthTextM.length){
        document.querySelector('select').setAttribute('style', 'display:block');
        z = 0;
        y = 999;
    }

    if(z<birthTextD.length){
        it_birthTextD += birthTextD[z]
        document.querySelector('.date span').innerHTML = it_birthTextD;
        z++;
    }else if(z==birthTextD.length){
        document.getElementById('date').setAttribute('style', 'display:block');
        abc = true;
    }

    if(abc){document.querySelector('button').setAttribute('style', 'display:block')}
},15)

let d = new Date();
//setting defaults *start*
document.querySelector(`option[value="${d.getMonth()+1}"]`).setAttribute('selected','selected');
document.getElementById('year-in').setAttribute('value', d.getFullYear());
document.getElementById('year-in').setAttribute('max', d.getFullYear());
document.getElementById('date').setAttribute('value', d.getDate());
//setting defaults *end*

let year = document.querySelector('#year-in');
let month = document.querySelector('select');
let date = document.querySelector('#date');

//save birth date - 
const saveBirth = e => {
    sessionStorage.setItem('year', year.value);
    sessionStorage.setItem('month', month.value);
    sessionStorage.setItem('date', date.value);

    let yr = sessionStorage.getItem('year');
    let mn = sessionStorage.getItem('month');
    let dt = sessionStorage.getItem('date');

    age_year = d.getFullYear() - yr;
    if(mn>d.getMonth()+1){
        age_year--;
    }else if(mn == d.getMonth()+1){
        if(dt>d.getDate()){
            age_year--;
        }
    }

    if(mn<d.getMonth()+1){
        age_month = (d.getMonth()+1) - mn;
    }else if(mn == d.getMonth()+1){
        age_month = 0;
    }else if(mn>d.getMonth()+1){
        age_month = (12-mn) + d.getMonth()+1;
    }

    document.getElementsByClassName('result')[1].innerHTML = "Calculating";
    document.getElementsByClassName('result')[0].innerHTML = "Your Age : ";

    setTimeout(() => {
        document.getElementsByClassName('result')[1].innerHTML = "Calculating.";
        setTimeout(() => {
            document.getElementsByClassName('result')[1].innerHTML = "Calculating..";
            setTimeout(() => {
                document.getElementsByClassName('result')[1].innerHTML = "Calculating...";
                setTimeout(() => {
                    document.getElementsByClassName('result')[1].innerHTML = `${age_year} years, ${age_month} months`;

                    day_age = age_year*365 + age_month*30;
                    hour_age = day_age*24;
                    minute_age = hour_age*60;
                    seconds_age = minute_age*60;
                    document.getElementById("deep-age").setAttribute('style', 'display:block;color:#FFF');
                    document.querySelector('#deep-age span').innerHTML = `Days : ${day_age}, Hours : ${hour_age}, Minutes : ${minute_age}, Seconds : ${seconds_age}`;
                },200)
            },200)
        },200)
    },200)
}
document.querySelector('button').addEventListener('click', saveBirth);