
// Get search input
let filterInput = document.querySelector('#search');

// attach listener to search input

filterInput.addEventListener('keyup', filterNames);

function filterNames(e) {
    // get input value
    let filterValue = e.target.value.toUpperCase();
    // get names <ul>
    let ul = document.querySelector('#js-names');
    // get <li>'s from <ul>
    let li = ul.querySelectorAll('li.js-names-item');
    // loop through collection items <li>'s
    for (let i = 0; i < li.length; i++) {
        // get <a> tag inside current <li>
        let a = li[i].getElementsByTagName('a')[0];
        // if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';            
        }
    }


}
