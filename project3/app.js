// d_length = 32 - new Date(new_year, new_month,32).getDate()
//월 별 총 일수 구하는 공식
// 32일은 실제로 다음 달 일수로 넘어가게 됨
// 2021, 6, 32로 매개변수를 넣게 되면 실제 7월에는 32일이 없으므로 2021년 8월 1일로 넘어가게 되며,
// 8월 1일이므로 getDate() 메소드를 사용하면 일수가 1로 반환됨

function calendar(new_year, new_month){
    var d = new Date(new_year, new_month-1,1),
    d_length = 32-new Date(new_year, new_month-1, 32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

    //caption 영역 날짜 표시 객체
    var caption_year = document.querySelector('.year'),
    caption_month = document.querySelector('.month');
    var start_day = document.querySelectorAll('tr td');

    //테이블 초기화
    for(var i = 0; i < start_day.length; i++){
        start_day[i].innerHTML = '&nbsp;';
    }

    // 날짜 표기
    for(var i = day; i < day+d_length; i++){
        start_day[i].innerHTML = date;
        date++;
    }

    //caption 날짜 표시
    caption_year.innerHTML = year;
    caption_month.innerHTML = month+1;
}

(function(){
    var prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1;

    calendar(year, month);

    prev.onclick = function(){
        calendar(year, --month);
    };

    next.onclick = function(){
        calendar(year, ++month);
    };
})();