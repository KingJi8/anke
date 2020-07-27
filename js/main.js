
//이름 리스트
fetch('data/list').then(function(response){
    response.text().then(function(text){
        textLower = text.toLowerCase();
        const names = text.split('\n');
        const buttons = textLower.split('\n');
        let tags ="";
        for(i=0; i<buttons.length; i++){
            let button = buttons[i];
            let name = names[i];
            let tag = "<li><a class='btn-info' onclick=charinfo('"+button+"')>"+name+"</a></li>";
            tags = tags + tag;
        }
        document.querySelector('.btnbox').innerHTML = tags;
    })
})

//이름 버튼 슬라이드
function nameslide(direction) {
    console.log(direction);
    const btnbox = document.querySelector('.btnbox');
    let btnLength = btnbox.childElementCount;
    for(i=0;i<btnLength;i++){
        let btnW = btnbox.indexO
        console.log(btnW);
    }
}

//이름 누르면 info 박스 내용 변환
function charinfo(name){
    fetch('data/'+name).then(function(response){
        response.text().then(function(text){
            const charinfos = text.split('\n');
            let tags ="";
            tags += '<li class="info-words">'+charinfos[0]+'</li>';
            tags += '<li class="info-name">'+charinfos[1]+'</li>';
            tags += '<li class="info-default">'+charinfos[2]+' / '+charinfos[3]+' / '+charinfos[4]+'</li>';
            tags += '<li class="info-desc"><ul class="info-descbox">';
            fetch('../data/'+name+'-desc').then(function(response){
                response.text().then(function(text){
                    const chardescs = text.split('\n');
                    let desctags="";
                    for(i=0; i<chardescs.length; i++){
                        let chardesc = chardescs[i];
                        let desctag = '<li class="desc-txt">'+chardesc+'</li>';
                        desctags = desctags + desctag;
                    }
                    document.querySelector('.info-descbox').innerHTML = desctags;
                })
            })
            tags += '</ul></li>'
            tags += '<li class="info-owner">'+charinfos[5]+'</li>';
            document.querySelector('.infobox').innerHTML = tags;
        })
    });
}

//공부

var a;
function b(){
    a=200;
}
b();
console.log(a);