function getData(){
    const name = document.getElementById('nameTag').value;
    console.log(name);
    var url = "http://localhost:3001/show";
    fetch(url,{method:"GET"}).then((res)=>{
        res.json().then((data)=>{
            console.log(data);
            document.getElementById('output').innerText = data.name + data.surname;
        })
    })
}
function submit(){
    var data = {
        firstName:document.getElementById('fname').value,
        lastName:document.getElementById('lname').value,
        address:document.getElementById('address').value
    };
    var url = 'http://localhost:3001/data';
    fetch(url,{
        method:"POST",
        headers:{
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Credentials':'true'
        },
        body: JSON.stringify(data),
    }).then((res)=> res.json()).then((userPost)=> console.log(userPost));
    
}