console.log('Client side javascript is loaded')


// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }

//     })

// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    const location = search.value

    const url =  'http://localhost:3000/weather?address='+encodeURIComponent(location)

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                // console.log(data.error)
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                // console.log(data.location)
                // console.log(data.forecast)
                messageTwo.textContent = data.forecast
            }

        })

    })

    // console.log(location)
})