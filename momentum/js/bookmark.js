$('#btn_slide').click(function(){
  $('#sider').slideToggle();
});

const bmForm=document.querySelector("#fav_form");
const bmInput=document.querySelector("#fav_form input");
const bmList=document.querySelector("#favor-list");

let isActive=true;
const BMS_KEY="bms";

let bms=[];

function paintBookmark(newBmObj){
  const li = document.createElement("li");
  li.id=newBmObj.id;
  const a = document.createElement("a");
  const button = document.createElement("button");
  const button2 = document.createElement("button");
  a.setAttribute('href',newBmObj.src);
  a.setAttribute('target','_blank');
  a.innerHTML=newBmObj.name;
  li.appendChild(a);
  li.appendChild(button);
  li.appendChild(button2);
  $(button).html("✏️");
  $(button2).html("❌");
  bmList.appendChild(li);
  $(button).click(renameBookmark);
  $(button2).click(deleteBookmark);
}

function handleBookmarkSubmit(event){
  event.preventDefault();
  const newBm=bmInput.value;
  bmInput.value="";
  const newBmObj={
    src:newBm,
    name:"우측 버튼으로 이름을 지정해주세요",
    id:Date.now()
  }
  bms.push(newBmObj);
  paintBookmark(newBmObj);
  saveBms();
}

function saveBms(){
  localStorage.setItem(BMS_KEY,JSON.stringify(bms));
}

function deleteBookmark(){
  $(this).parent().remove();
  bms=bms.filter((bms)=>bms.id !== parseInt($(this).parent().attr('id')));
  saveBms();
}

function renameBookmark(){
  if(isActive){
  const form_bmName=document.createElement('form');
  const input_bmName=document.createElement('input');
  $(this).parent().find('a').hide();
  $(form_bmName).attr('id','form_bmName');
  $(this).parent().prepend(form_bmName);
  $(input_bmName).attr('id','input_bmName');
  $(this).parent().find('form').append(input_bmName);
  $('#form_bmName').on('submit',handleRenameSubmit);
  isActive=!isActive;
  }
}

function handleRenameSubmit(event){
  event.preventDefault();
  const bmName=$('#input_bmName').val();
  let index=bms.findIndex(bms=>bms.id == $(this).parent().attr('id'));
  bms[index].name=bmName;
  $(this).parent().find('a').text(bmName);
  $(this).parent().find('a').show();
  $(this).parent().find('form').remove();
  saveBms();
  isActive=!isActive;
}

bmForm.addEventListener("submit",handleBookmarkSubmit);

const savedBms=localStorage.getItem(BMS_KEY);

//localStorage가 비어있지 않다면 localStorage에 있는 요소들을 화면에 뿌려줌
if(savedBms!==null){
  const parsedBms=JSON.parse(savedBms);
  bms=parsedBms;
  parsedBms.forEach(paintBookmark);
}

$('.fav_input').click(function(){
  this.value="http://";
});