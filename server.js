const express =  require('express')
const app = express()

const PORT = 8000
//json object  for test

const rappers ={
        '21 savage' : {
            'age': 29,
            'birthName': 'Shéyaa Bin Abraham-Joseph',
            'birthLocation': 'London, England',
             },
        'chance the rapper': {
            'age':29,
            'birthName': 'chancelor johnathon bennet',
            'birthLocation':'Chicago, illinois'
        },
        'unknown': {
            'age' : 'unknown',
            'birthName':'unknown',
            'birthLocation': 'unknown',
        },
    }

app.get('/', (request,response)=>{
response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`server is nor running on port ${PORT} `)

}) 

// use localhost:8000/api to access rappers object
// app.get('/api',(request,response)=>{
//     response.json(rappers)
// })

//to get  query from url use request.params.name
app.get('/api/:name', (request,response)=>{
  let rapperName = request.params.name.toLowerCase()
  

  //if name in url is in rappers object, response will be that object
  //if rappers object doesnt include it, response with unknown
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else {response.json(rappers['unknown'])}

})