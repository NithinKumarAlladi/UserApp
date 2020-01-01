function getData(){
    var url = "http://localhost:3001/show";
    fetch(url,{method:"GET"}).then((res)=>{
        res.json().then((data)=>{
            console.log(data);
            document.getElementById('output').innerText = data.name + data.surname;
        })
    })
}