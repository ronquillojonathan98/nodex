'use strict';

fetch('/about')
    .then(response => response.json()
        .then(data => 
            {
                console.log(data)
            }))
