const quotes = [
{
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ",
    author: "- 사무엘존슨 -",
},
{
    quote: "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
    author: "- 마이크 맥라렌 -",
},
{
    quote: "흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야한다",
    author: "- 안창호 -",
},
{
    quote: "일하는 시간과 노는 시간을 뚜렷이 구분하라 . 시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젊은 날은 유쾌함으로 가득찰것이고 늙어서도 후회할 일이 적어질것이며 비록 가난할 때라도 인생을 아름답게 살아갈수있다",
    author: "- 루이사 메이올콧 -",
},
{
    quote: "당신이 인생의 주인공이기 때문이다 . 그사실을 잊지마라 . 지금까지 당신이 만들어온 의식적 그리고 무의식적 선택으로 인해 지금의 당신이 있는것이다",
    author: "- 바바라 홀 -",
},
{
    quote: "지금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다 오늘 그것을 못하면 내일 그것을 할수있는가",
    author: "- 토마스 아켐피스 -",
},
{
    quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
    author: "- 데모스테네스 -",
},
{
    quote: "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라",
    author: "- 에픽토테스 -",
},
{
    quote: "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
    author: "- 조 지라드 -",
},

]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");


const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author; 