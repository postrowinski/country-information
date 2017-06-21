$(document).ready(function () {
    'use strict';
    
    var url = 'https://restcountries.eu/rest/v2/name/',
        countriesList = $('#countries');
    
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function (item) {
            $('<li>').text(item.name).appendTo(countriesList);
            $('<li>').text(' graniczy z :' + item.borders).appendTo(countriesList);
            $('<li>').append('<img src="' + item.flag + '" width="200px">').appendTo(countriesList);
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