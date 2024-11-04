function onePage(x, y){
    let indice = x;
    let target = y;
    let url = `./../pages/${indice}.html`
    
    let xml = new XMLHttpRequest()

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url);

    xml.send()
}