console.log('script speaks');

function greeting() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Happy Sunday!";
    weekday[1] = "Happy Monday!";
    weekday[2] = "Happy Tuesday!";
    weekday[3] = "Happy Wednesday!";
    weekday[4] = "Happy Thursday!";
    weekday[5] = "Happy Friday!";
    weekday[6] = "Happy Saturday!";

    var n = weekday[d.getDay()];
    document.getElementById("day").innerHTML = n;
}

greeting();

$(document).ready(function() {
  $.simpleWeather({
    location: 'Seattle, WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
      html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
      html += '<li class="currently">' + weather.currently + '</li>';
      html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});