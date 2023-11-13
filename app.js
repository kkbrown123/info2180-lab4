
document.addEventListener("DOMContentLoaded", function (){
    var button = document.querySelector('button');
    var url = "superheroes.php?name=";
    button.addEventListener("click",function(event){
        
        fetch(url)
        .then(res => res.text())
        .then(data =>{
            alert(data);
        }).catch(error => {
                alert('Error fetching data:', error);
            });
    });

});



