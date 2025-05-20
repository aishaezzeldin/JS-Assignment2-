

var quotes = [

    {quoteContent:"“So many books, so little time.”",autherName:"― Frank Zappa"},
    {quoteContent:"A room without books is like a body without a soul.”",autherName:" ― Marcus Tullius Cicero"},
    {quoteContent:"““Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",autherName:" ― Bernard M. Baruch"},
    {quoteContent:"“You only live once, but if you do it right, once is enough.”",autherName: " ― Mae West"},
    {quoteContent:"“If you tell the truth, you don't have to remember anything.”",autherName:" ― Mark Twain"},
    {quoteContent:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",autherName:" ― Maya Angelou"},
    {quoteContent:"“To live is the rarest thing in the world. Most people exist, that is all.”",autherName:" ― Oscar Wilde"},
    {quoteContent:"“A friend is someone who knows all about you and still loves you.”",autherName:"―Elbert Hubbard"},
    {quoteContent:"“Always forgive your enemies; nothing annoys them so much.”",autherName:"― Oscar Wilde"},
]
function generatequote(){
    var quotes_index = Math.floor(Math.random() * quotes.length)  
    var fullQuote = quotes[quotes_index];
    document.getElementById("quoteContent").textContent= fullQuote.quoteContent;
    document.getElementById("autherName").textContent= fullQuote.autherName;
}







