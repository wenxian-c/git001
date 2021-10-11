var btns = document.querySelectorAll('button');
for (var i = 0; i < btns.length; i++) {

    (function(index){
        var btns = btns[index];
        btns.onclick = function (){
            console.log(index);
        }
    })(i);

}
