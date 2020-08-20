let apiKey = "93b75b830f3da96083a3b6252ba8705b"; //API KEY FOR WEATHER DATA
let nasaAPI = "irUwmwRn4hX38ufW6j4F6Vln3GgkMqD9ZfWGlXBg"; //API KEY FOR NASA "EARTH" API
let apiCall = "http://api.openweathermap.org/data/2.5/forecast?q="; //API CALL BASED ON CITY NAME
let date = moment().format('YYYY' + '-' + 'MM' + '-' + 'DD')
console.log(date)


$("#searchBtn").on("click", function() {
    event.preventDefault();
    let cityString = $("#city").val();
    getLatLon(cityString);
});

function getLatLon(burrito) {
    console.log(city)
    let queryURL = apiCall + burrito + "&appid=" + apiKey
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        let latitude = response.city.coord.lat;
        let longitude = response.city.coord.lon;
        let population = response.city.population;
        console.log(population);
        console.log(latitude);
        console.log(longitude);
        performNasaCall(latitude, longitude, population);
    })
};

// getLatLon();

function performNasaCall(enchilada1, enchilada2, enchilada3) {
    let nasaURL = "https://api.nasa.gov/planetary/earth/assets?lon=" + enchilada2 + "&lat=" + enchilada1 + "&date=" + date + "&&dim=0.50&api_key=" + nasaAPI; //date format - YYYY/MM/DD
    $.ajax({
        url: nasaURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        let lanSatURL = response.url;
        let lanSatDateTime = response.date.slice(0, 10) + " at " +
            response.date.slice(11, 19);
        let pop = enchilada3;
        console.log(lanSatURL);
        buildLanSatImg(lanSatURL, lanSatDateTime, pop);
        console.log(enchilada3);
        console.log(pop);
    })

}

function buildLanSatImg(quesadilla1, quesadilla2, quesadilla3) {
    $("#lanSatImgHolder").append("<img id=satImg src=" + quesadilla1 + ">");
    $("#lanSatImgHolder").append("<p>" + "Image taken : " + quesadilla2 + "</p>");
    $("#stats").append("<p>" + "Population : " + quesadilla3 + "</p>");

}

// function buildStats(empanada1, empanada2, empanada3) {


// }





// let nasaAPIkey = "irUwmwRn4hX38ufW6j4F6Vln3GgkMqD9ZfWGlXBg"
// let index2 = "https://api.nasa.gov/planetary/earth/assets?lon=-73.935242&lat=40.730610&date=2020-02-01&&dim=0.50&api_key=irUwmwRn4hX38ufW6j4F6Vln3GgkMqD9ZfWGlXBg"
// let index1 = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=gilbert&refine.country=us&refine.region=AZ"


// function NASA() {
//     latlon();
//     let nasaURL = "https://api.nasa.gov/planetary/earth/assets?lon=" + longitude + "&lat=" + latitude + "&date=" + 2017 - 05 - 01 + "&&dim=0.50&api_key=" + apiKey
//     console.log(nasaURL)

// }

// let index = "https://api.nasa.gov/planetary/earth/assets?lon=-73.935242&lat=40.730610&date=2017-05-01&&dim=0.50&api_key=irUwmwRn4hX38ufW6j4F6Vln3GgkMqD9ZfWGlXBg"
// let index2 = "https://api.nasa.gov/planetary/earth/assets?lon=-73.935242&lat=40.730610&date=2020-02-01&&dim=0.50&api_key=irUwmwRn4hX38ufW6j4F6Vln3GgkMqD9ZfWGlXBg"
// let index1 = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=gilbert&refine.country=us&refine.region=AZ"

// $(document).ready(function() {
//     $('img')
//         .attr('src', 'https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/180bef2f1f0f3cb52efb6dda2a4a91c1-46ea6a4e71792b50e2d8d4fde917226b:getPixels')
//         .width('500px')
//         .height('400x');


// });


// $.ajax({

//     url: index,
//     method: "GET",
// }).then(function(response) {
//     console.log(response);
//     console.log(response.url)
//     let imgB = (response.url)
//     $(".img1").attr("width", "500").attr("height", "600").append("<img src=" + imgB + ">");
//     $(".img1").append("<img src=" + imgB + ">")


// })

// $.ajax({

//     url: index2,
//     method: "GET",
// }).then(function(response) {
//     console.log(response);
//     console.log(response.url)
//     let imgA = (response.url)
//     $(".img1").append("<img src=" + imgA + ">")

// })


// let apiCall = "http://api.openweathermap.org/data/2.5/weather?q="
// let apiKeyDef = "93b75b830f3da96083a3b6252ba8705b"
// let city = "Seattle"

// let queryURL = apiCall + city + "&appid=" + apiKeyDef


// $.ajax({

//     url: queryURL,
//     method: "GET",
// }).then(function(response) {
//     console.log(response);
//     console.log(response.coord.lat);
//     console.log(response.coord.lon);

// })