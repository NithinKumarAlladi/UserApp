function getData(){
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
        firstName:'',
        lastName:'',
        address:''
    }
    data.firstName = document.getElementById('fname').innerText;
    data.lastName = document.getElementById('lname').innerText;
    data.address = document.getElementById('address').innerText;
    
}