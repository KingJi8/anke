// world 리스트
fetch('data/sexi-world').then(function(response){
    response.text().then(function(text){
        const worlds = text.split('\n');
        let worldtags ="";
        for(i=0; i<worlds.length; i++){
            let worldBtn = worlds[i].toLowerCase();
            let world = worlds[i];
            let worldtag = "<li class='worldBtn "+worldBtn+"'>"+world+"</li>";
            worldtags += worldtag;
        }
        document.querySelector('.world-slidebox').innerHTML = worldtags;
    })
})


// 이름 리스트
document.querySelector('.world-slidebox').addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    var world = target.textContent || target.innerText;
    //클릭한 world에서 텍스트 가져오기;

    //world 클릭 시, info-box 속 내용 변동
    document.querySelector('.info-box').innerHTML = world;

    //world 반영하여 이름 리스트 (함수 변수값 다르게 반응하도록)
    fetch('data/sexi-name').then(function(response){
        response.text().then(function(text){
            const names = text.split('\n');
            let nametags ="";
            for(k=0; k<names.length; k++){
                let nameBtn = names[k].toLowerCase();
                let name = names[k];
                let nametag = "<li><a class='char-info' onclick=charinfo('"+world+"-"+nameBtn+"')>"+name+"</a></li>";
                nametags += nametag;
            }
            document.querySelector('.charbox').innerHTML = nametags;
        })
    })
}, false);


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
            document.querySelector('.info-box').innerHTML = tags;
        })
    });
}



//world 버튼 슬라이드
function nameslide(direction) {
    const slidebox = document.querySelector('.world-slidebox');
    let btnLength = slidebox.childElementCount;
    
    for(i=0;i<btnLength;i++){
        let btnIndex = btnbox.children[i];
        let btnW = Math.ceil(btnIndex.scrollWidth);
        console.log(btnW);
    }
}

