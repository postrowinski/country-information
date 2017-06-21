$(document).ready(function () {
    'use strict';
    
    var url = 'https://restcountries.eu/rest/v2/name/',
        countriesList = $('#countries');
    
    function showCountriesList(resp) {  
        countriesList.empty();
        resp.forEach(function (item) {
            var $countryImg = '<img src="' + item.flag + '" width="120px">';
            
            $('<li>').addClass('country').append($countryImg + item.name).appendTo(countriesList);  
            $('<li>').addClass('separator').text('Country information').appendTo(countriesList);  
            $('<li>').append('<span>Capital</span>' + item.capital).appendTo(countriesList);
            $('<li>').append('<span>Area</span>' + item.area).appendTo(countriesList);
            $('<li>').append('<span>Pupulation</span>' + item.population).appendTo(countriesList);
            $('<li>').append('<span>Currencies</span>' + item.currencies[0].name).appendTo(countriesList);
            $('<li>').append('<span>Time zone</span>' + item.timezones[0]).appendTo(countriesList);
            $('<li>').append('<span>Region</span>' + item.region).appendTo(countriesList);
            $('<li>').addClass('last-element-list').append('<span>To border on</span>' + item.borders).appendTo(countriesList);
        });
    }
    
    function searchCountries() {
        var countryName = $('#country-name').val();
        
        if (!countryName.length) {
            countryName = 'Poland';
        }
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    }
    
    $('#search').click(searchCountries);
});