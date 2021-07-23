var $inp = $('form[name=cal]');
var $input = $inp.find('input');
var $cls_btn = $('.cls_btn');
var $result_btn = $('.result_btn'); //결과 버튼 '='
var $result = $inp.find('input[name=result]'); //결과 창 type='text'

function clr(){
    //val() 메서드는 입력 요소의 value값을 읽거나 지정하는 메서드
    $result.val(0);
}
function calc(value){
    if($result.val()==0){
        $result.val('');
    }

    var val = $result.val() + value;
    $result.val(val);
}

function result(){
    var calc = eval($result.val());

    $result.val(calc);
}

$('input').click(function(){
    var $input_value = $(this).val();

    if($input_value != '=' && $input_value != 'clear'){
        calc($input_value);
    }
});

$('.cls_btn').click(function(){
    clr();
});

$('.result_btn').click(function(){
    try{
        result();
    }catch(err){
        $result.val('입력 오류');
    }
});