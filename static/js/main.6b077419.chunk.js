(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(4),o=n.n(c),a=(n(3),n(5)),i=n(6),u=n(8),l=n(7),h=(n(13),n(14),n(0)),d=function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},j=(n(16),function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monsters.id,"?set=set2&size=180x180")}),Object(h.jsx)("h2",{children:e.monsters.name}),Object(h.jsx)("p",{children:e.monsters.email})]})}),m=(n(17),function(e){return console.log(e),Object(h.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(h.jsx)(j,{monsters:e},e.id)}))})}),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Monster Rolodex"}),Object(h.jsx)(d,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(h.jsx)(m,{monsters:r})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.6b077419.chunk.js.map