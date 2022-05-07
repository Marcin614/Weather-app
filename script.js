const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
let number_icon

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_Key = '&appid=0f97846aae898d6e62e0c80e181548ec'
const API_UNITS_METRIC='&units=metric'

const APIIcon=(number_icon)=>{
     const URL_ICON='http:openweathermap.org/img/wn/'+`${number_icon}`+'d@2x.png'
     return URL_ICON
}

const Weather = ()=>{
    const city = input.value || 'Ciechanowiec'
    const URL = API_URL+city+API_Key+API_UNITS_METRIC
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            cityName.textContent=data.name
            weather.textContent=data.weather[0].main
            temperature.textContent=(data.main.temp).toFixed(1)+'℃'
            humidity.textContent = data.main.humidity+'%'
            warning.textContent=''
            input.value = ''

            const IDweather = data.weather[0].id
            
            if(IDweather >=200 & IDweather <=232){
                photo.setAttribute('src',APIIcon('11'))
            }
            else if(IDweather>=300 & IDweather <=321){
                photo.setAttribute('src',APIIcon('09'))
            }
            else if(IDweather>=500 & IDweather<=504){
                photo.setAttribute('src',APIIcon('10'))
            }
            else if(IDweather==511){
                photo.setAttribute('src',APIIcon('13'))
            }
            else if(IDweather>=520 & IDweather<=531){
                photo.setAttribute('src',APIIcon('09'))
            }
            else if(IDweather>=600 & IDweather <=622){
                photo.setAttribute('src',APIIcon('13'))
            }
            else if(IDweather>=700 & IDweather <=781){
                photo.setAttribute('src',APIIcon('50'))
            }
            else if(IDweather ==800){
                photo.setAttribute('src',APIIcon('01'))
            }
            else if(IDweather ==801){
                photo.setAttribute('src',APIIcon('02'))
            }
            else if(IDweather ==802){
                photo.setAttribute('src',APIIcon('03'))
            }
            else if(IDweather ==803 || IDweather ==804 ){
                photo.setAttribute('src',APIIcon('04'))
            }

        
    })
    .catch(error => {
        warning.textContent='Wpisz poprawną nazwę miasta!'
    })
}
const enterClick=(e)=>{
    if(e.key==='Enter'){
        Weather()
    }
}
input.addEventListener('keyup',enterClick)
button.addEventListener('click', Weather)

