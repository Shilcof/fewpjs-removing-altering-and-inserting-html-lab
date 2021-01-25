// Write your code here!

document.querySelector('main').remove();

const newHeader = document.createElement('h1')
newHeader.className = 'victory';
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';


// 1) no longer has DOM node 'main#main'
// 2) has a 'newHeader' variable that points to node 'h1#victory'
// 3) has a 'newHeader' variable that points to node 'h1#victory'
// 4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside