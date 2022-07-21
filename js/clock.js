function showClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  $('#clock').html(`${hours}:${minutes}:${seconds}`);
}

function showDate(){
  const date=new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth()+1);
  const day = String(date.getDate());
  const week_day=String(date.getDay());
  const str_week_day=["일","월","화","수","목","금","토"];
  $('#date').html(`${year}년 ${month}월 ${day}일 ${str_week_day[week_day]}요일`);
}

showDate();
$(window).load(function(){
    showClock();
    setInterval(showClock,1000);
});