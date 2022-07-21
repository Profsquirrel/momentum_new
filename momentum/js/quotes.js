const quotes = [
  {
  quote: "삶엔 한계가 없다, 당신이 정한 것만 제외한다면.",
  author: "Les Brown",
  },
  {
  quote: "삶이란 살아가는 과정이다.",
  author: "Gen. Douglas MacArthur",
  },
  {
  quote: "인생이란 계획을 세우는 과정에서 일어나는 일들이다.",
  author: "John Lennon",
  },
  {
  quote: "모든 위대한 변화에는 혼돈이 따른다.",
  author: "Deepak Chopra",
  },
  {
  quote: "변화만이 끝이 없고 영원하며 불멸한다.",
  author: "Arthur Shopenhauer",
  },
  {
  quote: "아무것도 바꾸지 않으면 아무것도 바뀌지 않는다.",
  author: "Tony Robbins",
  },
  {
  quote: "성장하는 것은 너의 선택이지만, 변화는 불가피하다.",
  author: "John C. Maxwell",
  },
  {
  quote: "생각을 바꾸면, 삶 또한 바뀔 것이다.",
  author: "Ernest Holmes",
  },
  {
  quote: "실패는 치명적이지 않지만, 바뀌지 않는 것은 치명적이다.",
  author: "John Wooden",
  },
  {
  quote: "변화 외엔 영원한 것은 없다.",
  author: "Buddha",
  }
  ];

function replaceQuotes(){
  const toDaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
  $('#quote span').eq(0).html(`${toDaysQuote.quote}`);
  $('#quote span').eq(1).html(`${toDaysQuote.author}`);
};

replaceQuotes();

$('#quote span').click(function(){
  $('#quote span').fadeOut(function(){
    replaceQuotes();
    $('#quote span').fadeIn();
  });
});