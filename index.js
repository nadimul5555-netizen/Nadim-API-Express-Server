import express from 'express';

const app = express();
const PORT = 5000;

const User =[
{
"id": "1",
"name": "Rahim Ahmed",
"email": "[rahim@example.com](mailto:rahim@example.com)"
},
{
"id": "2",
"name": "Karim Hasan",
"email": "[karim@example.com](mailto:karim@example.com)"
},
{
"id": "3",
"name": "Sadia Islam",
"email": "[sadia@example.com](mailto:sadia@example.com)"
},
{
"id": "4",
"name": "Nusrat Jahan",
"email": "[nusrat@example.com](mailto:nusrat@example.com)"
},
{
"id": "5",
"name": "Tanvir Hossain",
"email": "[tanvir@example.com](mailto:tanvir@example.com)"
},
{
"id": "6",
"name": "Fahim Chowdhury",
"email": "[fahim@example.com](mailto:fahim@example.com)"
}
]


app.get('/',(req,res)=>{
   res.send("This is From Nadim API")
})

app.get('/User' ,(req,res)=>{
  res.send(User)
})


app.listen( PORT , ()=>{
  console.log(` This app is running from prot ${PORT}`)
})