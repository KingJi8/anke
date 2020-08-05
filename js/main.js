
// 리스트
fetch('data/ankelist').then(function(response){
    response.text().then(function(text){
        const names = text.split('\n');
        let tags ="";
        for(i=0; i<names.length; i+=2){
            let className = names[i+1];
            let name = names[i];
            let tag = "<li><a href='"+ className.toLowerCase() +'/'+ className.toLowerCase() +".html' class='linkBtn "+ className.toLowerCase() +"'>"+name+"</a></li>";
            tags = tags + tag;
        }
        document.querySelector('.ankelist').innerHTML = tags;
    })
})