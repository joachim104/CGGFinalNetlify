if (!document.getElementById('id1')) {
    var link = document.createElement('link');
    link.id = 'id1';
    link.rel = 'stylesheet';
    link.integrity = 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm';
    link.crossOrigin = "anonymous"
    link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
    document.head.appendChild(link);
}
if (!document.getElementById('id2')) {
    var link = document.createElement('link');
    link.id = 'id2';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto:300';
    document.head.appendChild(link);
}
if (!document.getElementById('id3')) {
    var link = document.createElement('link');
    link.id = 'id3';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Old+Standard+TT|Yatra+One';
    document.head.appendChild(link);
}
if (!document.getElementById('id4')) {
    var link = document.createElement('link');
    link.id = 'id4';
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css';
    document.head.appendChild(link);
}
if (!document.getElementById('id5')) {
    var link = document.createElement('link');
    link.id = 'id5';
    link.rel = 'icon';
    link.href = 'assets/LogoGG_2018_2_actualized.png';
    document.head.appendChild(link);
}

