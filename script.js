function fetchAndInject(url, targetId) {
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
         if (xhr.readyState === XMLHttpRequest.DONE) {
             if (xhr.status === 200) {
                 document.getElementById(targetId).innerHTML += xhr.responseText;
             } else {
                 console.error('Error fetching page:', xhr.statusText);
             }
         }
     };
     xhr.open('GET', url, true);
     xhr.send();
 }

 function loadPages() {
    console.log('hiii')
     var pages = [
         { url: 'menu.html', targetId: 'navbar' },
         { url: 'footer.html', targetId: 'footer' }
     ];
     pages.forEach(function(page) {
         fetchAndInject(page.url, page.targetId);
     });
 }

 window.onload = loadPages;

