function getData(){
    const name = document.getElementById(nameTag).innerText;
    console.log(name);
    var url = "http://localhost:3001/show";
    Request()
    fetch(url,{method:"GET"}).then((res)=>{
        res.json().then((data)=>{
            console.log(data);
            document.getElementById('output').innerText = data.name + data.surname;
        })
    })
}
function submit(){
    var data = {
        firstName:document.getElementById('fname').innerText,
        lastName:document.getElementById('lname').innerText,
        address:document.getElementById('address').innerText
    };
    var url = 'http://localhost:3001/data'
    // data.firstName = document.getElementById('fname').innerText;
    // data.lastName = document.getElementById('lname').innerText;
    // data.address = document.getElementById('address').innerText;
    fetch(url,{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */* ',
            'Content-type': "application/json"
        },
        body: JSON.stringify(data),
    }).then((res)=> res.json()).then((userPost)=> console.log(userPost));
    
}