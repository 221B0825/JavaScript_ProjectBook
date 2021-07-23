var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var result_btn = document.getElementsByClassName('result_btn')[0];

function clr(){
    inp['result'].value = 0;
}

function calc(event){
    console.log('입력 키: '+event.target.value);
    //입력이 들어가면 0을 지움
    if(inp['result'].value == 0){
        inp['result'].value = ''; 
    }

    // 입력 값을 결과창에 출력
    inp['result'].value += event.target.value;
}

function result(){
    try{
        var result = document.forms['cal']['result'];
        var calc = eval(result.value);

        inp['result'].value = calc;
    }catch(err){
        var result = inp['result'];
        result.value = '입력 오류';
    }
}


//이벤트 핸들러
for( var i = 0; i< input.length; i++){
    if(input[i].value != '=' && input[i].value != 'clear'){
        input[i].addEventListener('click', calc);
        
        // input[i].onclick = function(){
        //     calc(this.value);
        // }
    }
}

// cls_btn.onclick = function(){
//     clr();
// }
cls_btn.addEventListener('click', clr);

// result_btn.onclick = function(){
//     try{
//         my_result();
//     } catch(err){
//         var result = inp['result'];
//         result.value = '입력 오류';
//     }   
// }
result_btn.addEventListener('click', result);

