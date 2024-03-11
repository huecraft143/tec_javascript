$(document).ready(function() {
    $('#submitButton').click(function(){
        var inputCity = $('#cityInput').val();
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity+'&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
            .then(response => response.json())
            .then(data => {
                var tempValue = data['main']['temp'];
                var nameValue = data['name'];
                var descValue = data['weather'][0]['description'];
                $('#name').text(nameValue);
                $('.desc').text("Description " + descValue);
                $('.temp').text("Temperatura: " + tempValue);
                $('#cityInput').val('');
            })
            .catch(err => alert("Città inesistente"));
    });
});