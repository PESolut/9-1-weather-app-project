console.log('main.js successfully linked')
const BASE_URL = 'https://wttr.in'
const JSON = '?format=j1'
const form = document.querySelector('form')
const artStor = document.querySelector('main aside')
const formInput = document.querySelector('input')
let count = 0
console.log(`form submissions: ${count}`)

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    count += 1
    console.log(`form submissions: ${count}`)
    const input = formInput.value
    const URL = `${BASE_URL}/${input}${JSON}`
    console.log(URL)
    console.log('form has been submitted successfully!')
    console.log(formInput.value)
    fetch(URL)
    .then((res) => res.json())
    .then((res) => { 
        const article = document.createElement('article')
        article.classList.add('CurrentCity')
        const header = document.createElement('h2')
        const area  = document.createElement('p')
        const region  = document.createElement('p')
        const country  = document.createElement('p')
        const currently  = document.createElement('p')
        // header.textContent = `${res.}`
        header.textContent = res.nearest_area[0].areaName[0].value
        area.textContent = `Area: ${res.nearest_area[0].areaName[0].value}`
        region.textContent = `Region: ${res.nearest_area[0].region[0].value}`
        country.textContent = `Country: ${res.nearest_area[0].country[0].value}`
        currently.textContent = `Feels Like: ${res.current_condition[0].FeelsLikeF}°F`

    article.append(header,area,region,country,currently)
    artStor.append(article)

        console.log(article)
        console.log(res.nearest_area[0].areaName[0].value)
        formInput.value = ""

    })
}) 

console.log(`${BASE_URL}${JSON}`)
console.log(form)
console.log(artStor)


// LOG
// 154 finished HTML exo earlier today, pushing: 'HTML skeleton completed'
// getting api base url | line 2,3
// printing to console, success !
// select the header form | line 4
// printing to console, success !
// select the article storage ( in main ) | line 5
// printing to console, success!
// added event listener to header form, preventing default | line 7-8
// printing input to console on form submission, no success :( could not find variable that stores data of form entry
// saving input to variable (Finished)
// looking for where event variable stores input (Finished)
// printing input to console log, success !
// setting up our fetching data from API 
// success
// now that we have successfully set