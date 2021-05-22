'use strict';

fetch('http://localhost:2021/about')
    .then(response => response.json()
        .then(data => 
            {
                console.log(data)
            }))
