
document.addEventListener("DOMContentLoaded", function (){
    const input = document.querySelector("input")
    const form = document.querySelector("form")
    const result = document.querySelector("#result")
    
    
    form.addEventListener("click",function(event){
        event.preventDefault()
        
        
        let userInput = input.value.trim();
        
        console.log(userInput)

        let url = `/superheroes.php?name=${userInput}`
        fetch(url)
        .then(res => {if (res.ok){return res.text()}
        else{return Promise.reject('Error occurred')}})
        .then(data =>{
            result.innerHTML = data
        }).catch(error => {
                alert('Error fetching data:', error);
            });
    });

});


