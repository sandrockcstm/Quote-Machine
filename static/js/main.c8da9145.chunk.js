(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(34)},16:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(10),c=a.n(r),l=(a(16),a(1)),s=a(4),i=a(5),u=a(8),m=a(6),d=a(7),h=(a(17),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(b,{quotes:["\"Don't cry because it's over, smile because it happened.\"",'"Be yourself; everyone else is already taken."','"You only live once, but if you do it right, once is enough."','"If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals."','"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."'],author:["Dr. Suess","Oscar Wilde","Mae West","J.K. Rowling","Maya Angelou"]})}}]),t}(o.Component)),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={quotes:e.quotes,author:e.author,randomQuote:Math.floor(Math.random()*e.quotes.length)},a.buttonHandler=a.buttonHandler.bind(Object(l.a)(Object(l.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"buttonHandler",value:function(){this.setState({randomQuote:Math.floor(Math.random()*this.props.quotes.length)})}},{key:"render",value:function(){return document.body.style="background: beige;",n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark",id:"title-box"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Quote Machine")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"}),n.a.createElement("div",{className:"card text-center col-md-6",id:"quote-box"},n.a.createElement("blockquote",{id:"text",className:"blockquote mb-2"},this.state.quotes[this.state.randomQuote]),n.a.createElement("footer",{id:"author",className:"blockquote-footer mb-2"},this.state.author[this.state.randomQuote]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("a",{href:"twitter.com/intent/tweet",id:"tweet-quote"},n.a.createElement("i",{className:"fab fa-twitter col-3"}))),n.a.createElement("div",{className:"col-4"}),n.a.createElement("div",{className:"col-5 mb-3"},n.a.createElement("button",{id:"new-quote",className:"btn btn-primary",onClick:this.buttonHandler},"Random Quote"))))),n.a.createElement("div",{className:"col-3"}))))}}]),t}(o.Component),w=h;a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31),a(32),a(33);c.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.c8da9145.chunk.js.map