(this.webpackJsonpgamerzstatz=this.webpackJsonpgamerzstatz||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var r=a(3),c=a.n(r),n=a(74),s=a.n(n),i=(a(86),a(16)),l=a(9),o=a(0),j=c.a.createContext(),d=function(e){var t=e.children,a=Object(r.useState)({name:"InitialName",gamertag:"InitialTag",xuid:"12345",email:"",password:""}),c=Object(l.a)(a,2),n=c[0];c[1];return Object(o.jsx)(j.Provider,{value:{currentUser:n},children:t})},h=a(22),m=a(7),b=a(79),u=a(125),g=a(127),O=a(124),p=a(77),x=a(34),f=(a(88),a.p+"static/media/dmc5se-square.4cf2fd40.jpeg"),v=(a.p,a.p+"static/media/cod.259beb29.jpg"),w=a.p+"static/media/pvz.5e8c1f14.jpg",N=a.p+"static/media/Minecraft_cover.c3ecdd3b.png",y=a.p+"static/media/Batman_Arkham_Knight_Cover_Art.eff2b381.jpg",S=function(){var e={width:"18rem",border:"solid grey 5px",padding:"15px",resizeMode:"contain"};return Object(o.jsxs)("div",{className:"wrapper",style:{textAlign:"center",justifyContent:"center",alignItems:"center"},children:[Object(o.jsx)("h2",{id:"basic-example-heading",children:"Popular Games"}),Object(o.jsxs)(x.a,{options:{perPage:1,rewind:!0},"aria-labelledby":"basic-example-heading",onMoved:function(e,t){},children:[Object(o.jsxs)(x.b,{children:[Object(o.jsxs)("h4",{children:["Aidan's Pick: ",Object(o.jsx)("span",{children:"Devil May Cry 5 Special Edition"})]}),Object(o.jsx)("img",{src:f,alt:"Cover art for Devil May Cry 5 Special Edition",style:e}),Object(o.jsxs)("p",{children:["Read the review on"," ",Object(o.jsx)("a",{href:"https://www.ign.com/articles/2019/03/06/devil-may-cry-5-review",target:"_blank",children:"IGN"})]}),Object(o.jsxs)("p",{children:["See who is streaming it on"," ",Object(o.jsx)("a",{href:"https://www.twitch.tv/search?term=devil%20may%20cry%205",target:"_blank",children:"Twitch"})]})]}),Object(o.jsxs)(x.b,{children:[Object(o.jsxs)("h4",{children:["Thomas' Pick: ",Object(o.jsx)("span",{children:"Call of Duty: Black Ops 4"})]}),Object(o.jsx)("img",{src:v,alt:"Cover art for Call of Duty: Black Ops 4",style:e}),Object(o.jsxs)("p",{children:["Read the review on"," ",Object(o.jsx)("a",{href:"https://www.ign.com/articles/2018/10/20/call-of-duty-black-ops-4-review",target:"_blank",children:"IGN"})]}),Object(o.jsxs)("p",{children:["See who is streaming it on"," ",Object(o.jsx)("a",{href:"https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Black%20Ops%204",target:"_blank",children:"Twitch"})]})]}),Object(o.jsxs)(x.b,{children:[Object(o.jsxs)("h4",{children:["Brett's Pick: ",Object(o.jsx)("span",{children:"Plants vs. Zombies"})]}),Object(o.jsx)("img",{src:w,alt:"Cover art for Plants vs. Zombies",style:e}),Object(o.jsxs)("p",{children:["Read the review on"," ",Object(o.jsx)("a",{href:"https://www.ign.com/articles/2009/05/05/plants-vs-zombies-review-4",target:"_blank",children:"IGN"})]}),Object(o.jsxs)("p",{children:["See who is streaming it on"," ",Object(o.jsx)("a",{href:"https://www.twitch.tv/directory/game/Plants%20vs.%20Zombies",target:"_blank",children:"Twitch"})]})]}),Object(o.jsxs)(x.b,{children:[Object(o.jsxs)("h4",{children:["Maya's Pick: ",Object(o.jsx)("span",{children:"Minecraft"})]}),Object(o.jsx)("img",{src:N,alt:"Cover art for Minecraft",style:e}),Object(o.jsxs)("p",{children:["Read the review on"," ",Object(o.jsx)("a",{href:"https://www.ign.com/articles/2011/11/24/minecraft-review",target:"_blank",children:"IGN"})]}),Object(o.jsxs)("p",{children:["See who is streaming it on"," ",Object(o.jsx)("a",{href:"https://www.twitch.tv/directory/game/Minecraft",target:"_blank",children:"Twitch"})]})]}),Object(o.jsxs)(x.b,{children:[Object(o.jsxs)("h4",{children:["Joe's Pick: ",Object(o.jsx)("span",{children:"Batman Arkham Knight"})]}),Object(o.jsx)("img",{src:y,alt:"Cover art for Minecraft",style:e}),Object(o.jsxs)("p",{children:["Read the review on"," ",Object(o.jsx)("a",{href:"https://www.ign.com/articles/2015/06/19/batman-arkham-knight-review",target:"_blank",children:"IGN"})]}),Object(o.jsxs)("p",{children:["See who is streaming it on"," ",Object(o.jsx)("a",{href:"https://www.twitch.tv/directory/game/Batman:%20Arkham%20Knight",target:"_blank",children:"Twitch"})]})]})]})]})},k=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(S,{})})};var I,_,C,A=function(e){var t=e.children;return Object(o.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},G=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(A,{children:[Object(o.jsx)("h1",{children:"404 Page Not Found"}),Object(o.jsx)("h1",{children:Object(o.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},P=a(17),F=a(31),J=a(23),z=a.n(J),T=a(128),$=a(51),U=a(126),E=Object(U.a)(I||(I=Object($.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                _id\n                firstName\n                lastName\n                gamertag\n                email\n            }\n        }\n    }\n"]))),M=(Object(U.a)(_||(_=Object($.a)(["\n    mutation addOrder($products: [ID]!) {\n        addOrder(products: $products) {\n            purchaseDate\n            products {\n                _id\n                name\n                description\n                price\n                quantity\n                category {\n                    name\n                }\n            }\n        }\n    }\n"]))),Object(U.a)(C||(C=Object($.a)(["\n    mutation addUser($firstName: String!, $lastName: String!, $gamertag: String!, $email: String!, $password: String!) {\n        addUser(firstName: $firstName, lastName: $lastName, gamertag: $gamertag, email: $email, password: $password) {\n            token\n            user {\n                firstName\n                lastName\n                gamertag\n                email\n            }\n        }\n    }\n"])))),B=a(5),D=a(6),L=a(55),R=a.n(L),q=new(function(){function e(){Object(B.a)(this,e)}return Object(D.a)(e,[{key:"getProfile",value:function(){return R()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return R()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/profile")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),K=a(46);var W=function(e){var t=Object(r.useState)({email:"",password:""}),a=Object(l.a)(t,2),c=a[0],n=a[1],s=Object(T.a)(E),j=Object(l.a)(s,2),d=j[0],m=j[1].error,b=function(){var e=Object(F.a)(z.a.mark((function e(t){var a,r,n,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:c.email,password:c.password}});case 4:return a=e.sent,r=a.data.login.token,e.next=8,K.get("/api/account/".concat(a.data.login.user.gamertag));case 8:return n=e.sent,s={name:"".concat(a.data.login.user.firstName," ").concat(a.data.login.user.lastName),gamertag:a.data.login.user.gamertag,email:a.data.login.user.email,xuid:n.data.profileUsers[0].id,avatar:n.data.profileUsers[0].settings[0].value,gamerscore:n.data.profileUsers[0].settings[1].value},localStorage.setItem("user",JSON.stringify(s)),e.next=13,K.get("/api/achieve/".concat(s.xuid));case 13:i=e.sent,localStorage.setItem("allAchievements",JSON.stringify(i.data)),q.login(r),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,a=t.name,r=t.value;n(Object(i.a)(Object(i.a)({},c),{},Object(P.a)({},a,r)))};return Object(o.jsxs)("div",{className:"container my-1",children:[Object(o.jsx)(h.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(o.jsx)("h2",{children:"Login"}),Object(o.jsxs)("form",{onSubmit:b,children:[Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(o.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),m?Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(o.jsx)("div",{className:"flex-row flex-end",children:Object(o.jsx)("button",{type:"submit",children:"Submit"})})]})]})},Z=a(46);var H=function(e){var t=Object(r.useState)({email:"",password:"",firstName:"",lastName:"",gamertag:""}),a=Object(l.a)(t,2),c=a[0],n=a[1],s=Object(T.a)(M),j=Object(l.a)(s,1)[0],d=function(){var e=Object(F.a)(z.a.mark((function e(t){var a,r,n,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName,gamertag:c.gamertag}});case 3:return a=e.sent,r=a.data.addUser.token,e.next=7,Z.get("/api/account/".concat(a.data.addUser.user.gamertag));case 7:return n=e.sent,s={name:"".concat(a.data.addUser.user.firstName," ").concat(a.data.addUser.user.lastName),gamertag:a.data.addUser.user.gamertag,email:a.data.addUser.user.email,xuid:n.data.profileUsers[0].id,avatar:n.data.profileUsers[0].settings[0].value,gamerscore:n.data.profileUsers[0].settings[1].value},localStorage.setItem("user",JSON.stringify(s)),e.next=12,Z.get("/api/achieve/".concat(s.xuid));case 12:i=e.sent,localStorage.setItem("allAchievements",JSON.stringify(i.data)),console.log(a),q.login(r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target,a=t.name,r=t.value;n(Object(i.a)(Object(i.a)({},c),{},Object(P.a)({},a,r)))};return Object(o.jsxs)("div",{className:"container my-1",children:[Object(o.jsx)(h.b,{to:"/login",children:"\u2190 Go to Login"}),Object(o.jsx)("h2",{children:"Signup"}),Object(o.jsxs)("form",{onSubmit:d,children:[Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(o.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:m})]}),Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(o.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:m})]}),Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"gamertag",children:"Gamertag:"}),Object(o.jsx)("input",{placeholder:"tag",name:"gamertag",type:"gamertag",id:"gamertag",onChange:m})]}),Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(o.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:m})]}),Object(o.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(o.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(o.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:m})]}),Object(o.jsx)("div",{className:"flex-row flex-end",children:Object(o.jsx)("button",{type:"submit",children:"Submit"})})]})]})};function Q(e){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"card",style:{width:"18rem",border:"solid grey 5px",padding:"20px",margin:"30px"},children:[Object(o.jsx)("h5",{className:"card-title",children:e.title}),Object(o.jsx)("img",{className:"card-img-top",src:e.coverArt,alt:"Card cap"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("p",{children:["Completed Achievements: ",e.currentAchievements]}),Object(o.jsxs)("p",{children:["Gamerscore: ",e.currentGamerScore," / ",e.totalGamerScore]}),Object(o.jsxs)("p",{children:["Percent Complete: ",e.percentAchieve,"%"]}),Object(o.jsx)(h.b,{to:"/compare/".concat(e.titleId),children:"Check My Stats"})]})]})})}var V=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)({}),s=Object(l.a)(n,2),i=s[0],j=s[1];return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));c(e);var t=JSON.parse(localStorage.getItem("allAchievements"));j(t)}),[]),void 0!==i.titles&&i.titles.length>0?Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:a.avatar,alt:"this user's profile avatar"}),Object(o.jsx)("h2",{children:a.gamertag}),Object(o.jsxs)("h4",{children:["Gamerscore: ",a.gamerscore]})]}),Object(o.jsx)("div",{className:"df fwrap",children:i.titles.map((function(e,t){if(t<=9&&e.achievement.progressPercentage>0)return Object(o.jsx)(Q,{titleId:e.titleId,coverArt:e.displayImage,currentAchievements:e.achievement.currentAchievements,currentGamerScore:e.achievement.currentGamerscore,percentAchieve:e.achievement.progressPercentage,title:e.name,totalGamerScore:e.achievement.totalGamerscore},t)}))})]}):Object(o.jsx)(o.Fragment,{})};var X=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("nav",{children:q.loggedIn()?Object(o.jsxs)("section",{className:"top-nav",children:[Object(o.jsx)("h1",{children:Object(o.jsxs)(h.b,{to:"/",children:[Object(o.jsx)("span",{role:"img","aria-label":"controller ",children:"\ud83c\udfae"}),"Gamerz Statz"]})}),Object(o.jsx)("input",{id:"menu-toggle",type:"checkbox"}),Object(o.jsx)("label",{className:"menu-button-container",htmlFor:"menu-toggle",children:Object(o.jsx)("div",{className:"menu-button"})}),Object(o.jsxs)("ul",{className:"menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/profile",children:"Profile"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"/",onClick:function(){return q.logout()},children:"Logout"})})]})]}):Object(o.jsxs)("section",{className:"top-nav",children:[Object(o.jsx)("h1",{children:Object(o.jsxs)(h.b,{to:"/",children:[Object(o.jsx)("span",{role:"img","aria-label":"controller ",children:"\ud83c\udfae"}),"Gamerz Statz"]})}),Object(o.jsx)("input",{id:"menu-toggle",type:"checkbox"}),Object(o.jsx)("label",{className:"menu-button-container",htmlFor:"menu-toggle",children:Object(o.jsx)("div",{className:"menu-button"})}),Object(o.jsxs)("ul",{className:"menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(h.b,{to:"/signup",children:"Signup"})}),Object(o.jsx)("li",{children:Object(o.jsx)(h.b,{to:"/login",children:"Login"})})]})]})})})},Y=a(18),ee=a(76),te=a(46);function ae(e){var t;Y.e.register(Y.d,Y.i,Y.b,Y.n,Y.o,Y.g);var a=Object(r.useState)({}),c=Object(l.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)({}),j=Object(l.a)(i,2),d=j[0],h=j[1],m=Object(r.useState)({}),b=Object(l.a)(m,2),u=b[0],g=b[1],O=Object(r.useState)({}),p=Object(l.a)(O,2),x=p[0],f=p[1],v=Object(r.useState)(),w=Object(l.a)(v,2),N=w[0],y=w[1];Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));s(t);var a=JSON.parse(localStorage.getItem("allAchievements")).titles.filter((function(t){return t.titleId===e.titleId}));console.log(a),h(a[0].achievement);var r=JSON.parse(localStorage.getItem("chosenFriend"));y(r);var c=function(){var t=Object(F.a)(z.a.mark((function t(){var a,c,n,s,i;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(localStorage.getItem("friendsList")),n=c.filter((function(e){return e.gamertag===r})),console.log("fList",n[0].xuid),t.next=5,te.get("/api/achieve/".concat(n[0].xuid));case 5:s=t.sent,console.log("fetch",s),i=s.data.titles.filter((function(t){return t.titleId===e.titleId})),console.log("friend",i),g(null===(a=i[0])||void 0===a?void 0:a.achievement);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c();var n=function(){var a=Object(F.a)(z.a.mark((function a(){var r;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,te.get("/api/game/".concat(t.xuid,"/").concat(e.titleId));case 2:return r=a.sent,f(r),console.log(r),a.abrupt("return",r);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();n()}),[]);var S=(null===(t=x.data)||void 0===t?void 0:t.achievements[0].titleAssociations[0].name)||"Loading...",k={maintainAspectRatio:!1,scales:{x:{grid:{color:"white",lineWidth:.5},ticks:{color:"white",font:{weight:"normal",size:"15rem"}}},y:{grid:{color:"white",lineWidth:.5},ticks:{color:"white",font:{weight:"normal",size:"15rem"}}}},layout:{padding:{right:15,left:15}},plugins:{legend:{position:"top",labels:{color:"white",font:{weight:"normal",size:"15rem"}}},title:{display:!0,text:["".concat(n.gamertag," vs ").concat(N),"".concat(S)],color:"white",font:{weight:"normal",size:"20rem"}}}},I={labels:["Achievements","Progress","Gamerscore"],datasets:[{label:n.gamertag,data:[null===d||void 0===d?void 0:d.currentAchievements,null===d||void 0===d?void 0:d.progressPercentage,null===d||void 0===d?void 0:d.currentGamerscore],backgroundColor:"#aab1ae"},{label:N,data:[null===u||void 0===u?void 0:u.currentAchievements,null===u||void 0===u?void 0:u.progressPercentage,null===u||void 0===u?void 0:u.currentGamerscore],backgroundColor:"#DB1A20"}]};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(ee.a,{options:k,data:I})})}var re=a(46);function ce(){var e=Object(m.g)().titleId,t=Object(r.useState)(),a=Object(l.a)(t,2),c=(a[0],a[1],Object(r.useState)()),n=Object(l.a)(c,2),s=(n[0],n[1]),i=Object(r.useState)(["Loading Gamertags..."]),j=Object(l.a)(i,2),d=j[0],h=j[1];return Object(r.useEffect)((function(){localStorage.setItem("chosenFriend",JSON.stringify(document.querySelector("#friendSelect").value));var e=JSON.parse(localStorage.getItem("chosenFriend"));s(e)})),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user")),t=function(){var t=Object(F.a)(z.a.mark((function t(){var a,r,c,n,s;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re.get("/api/friend/".concat(e.xuid));case 2:return a=t.sent,localStorage.setItem("friendsList",JSON.stringify(a.data.people)),r=[],a&&(null===a||void 0===a||null===(c=a.data)||void 0===c||null===(n=c.people)||void 0===n||n.map((function(e){r.push(e.gamertag)})),s=r.sort(),h(s)),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Compare to: "}),Object(o.jsx)("select",{id:"friendSelect",onChange:function(){localStorage.setItem("chosenFriend",JSON.stringify(document.querySelector("#friendSelect").value)),window.location.reload(!1)},children:d&&d.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})]}),Object(o.jsx)("div",{className:"chart-container",children:Object(o.jsx)(ae,{titleId:e})})]})}function ne(){return Object(o.jsx)("div",{children:Object(o.jsxs)("footer",{className:"df footer",children:[Object(o.jsxs)("div",{className:"footer-card lg",children:[Object(o.jsx)("h6",{children:"Joe Palmisano"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/joseph-palmisano-jnp/",className:"",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-linkedin px-1"})}),Object(o.jsx)("a",{href:"https://github.com/joepamedia",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-github px-1"})})]}),Object(o.jsxs)("div",{className:"footer-card lg",children:[Object(o.jsx)("h6",{children:"Aidan Chamberlain"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/aidan-chamberlain-776b8b90/",className:"",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-linkedin px-1"})}),Object(o.jsx)("a",{href:"https://github.com/RedComet6",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-github px-1"})})]}),Object(o.jsxs)("div",{className:"footer-card lg",children:[Object(o.jsx)("h6",{children:"Brett Gould"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/brettdgould//",className:"",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-linkedin px-1"})}),Object(o.jsx)("a",{href:"https://github.com/bgould86",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-github px-1"})})]}),Object(o.jsxs)("div",{className:"footer-card lg",children:[Object(o.jsx)("h6",{children:"Maya Tillman"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/maya-tillman-430084227/",className:"",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-linkedin px-1"})}),Object(o.jsx)("a",{href:"https://github.com/mayaatil",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-github px-1"})})]}),Object(o.jsxs)("div",{className:"footer-card lg",children:[Object(o.jsx)("h6",{children:"Thomas Frohm"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/thomas-f-767203232/",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-linkedin px-1"})}),Object(o.jsx)("a",{href:"https://github.com/tfrohm11",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-github px-1"})})]}),Object(o.jsxs)("div",{className:"footer-card sm",children:[Object(o.jsx)("h6",{children:"Its The S"}),Object(o.jsx)("a",{href:"https://github.com/Its-The-S/gamerzstatz",target:"_blank",children:Object(o.jsx)("i",{className:"fa fa-github px-1"})})]})]})})}var se=Object(b.a)({uri:"/graphql"}),ie=Object(p.a)((function(e,t){var a=t.headers,r=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},a),{},{authorization:r?"Bearer ".concat(r):""})}})),le=new u.a({link:ie.concat(se),cache:new g.a});var oe=function(){return Object(o.jsx)(O.a,{client:le,children:Object(o.jsx)(d,{children:Object(o.jsx)(h.a,{children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(X,{}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/",element:Object(o.jsx)(k,{})}),Object(o.jsx)(m.a,{path:"/login",element:Object(o.jsx)(W,{})}),Object(o.jsx)(m.a,{path:"/signup",element:Object(o.jsx)(H,{})}),Object(o.jsx)(m.a,{path:"/profile",element:Object(o.jsx)(V,{})}),Object(o.jsx)(m.a,{path:"/compare/:titleId",element:Object(o.jsx)(ce,{})}),Object(o.jsx)(m.a,{path:"*",element:Object(o.jsx)(G,{})})]}),Object(o.jsx)(ne,{})]})})})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(oe,{})}),document.getElementById("root"))},86:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.4c786907.chunk.js.map