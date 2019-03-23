
if(!document.getElementById('id1')) {
    var script = document.createElement('script');
    script.id = 'id1';
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    document.head.appendChild(script);
}
if(!document.getElementById('id2')) {
    var script = document.createElement('script');
    script.id = 'id2';
    script.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
    document.head.appendChild(script);
}
if(!document.getElementById('id3')) {
    var link = document.createElement('link');
    link.id = 'id3';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto:300';
    document.head.appendChild(link);
}
if(!document.getElementById('id4')) {
    var link = document.createElement('link');
    link.id = 'id4';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Old+Standard+TT|Yatra+One';
    document.head.appendChild(link);
}
if(!document.getElementById('id5')) {
    var link = document.createElement('link');
    link.id = 'id5';
    link.rel = 'stylesheet';
    link.href = 'styles/style.css';
    document.head.appendChild(link);
}
if(!document.getElementById('id6')) {
    var link = document.createElement('link');
    link.id = 'id6';
    link.rel = 'stylesheet';
    link.href = 'styles/footer.css';
    document.head.appendChild(link);
}

