(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{77:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(16),r=a.n(c),s=a(21),i=a(4),o=a(22),j=a.n(o),u=a(24),h=a(30),b=a(43),d=a(44),m=a(47),l=a(46),p=a(45),O=a.n(p),g=a(99),f=a(3),x=Object(n.memo)((function(e){var t=e.item;return Object(f.jsxs)("li",{children:[t?Object(f.jsx)("h1",{children:t.collection}):Object(f.jsx)(g.a,{animation:"wave"}),t?Object(f.jsx)("h3",{children:t.display_sitename}):Object(f.jsx)(g.a,{animation:"wave"}),Object(f.jsx)("div",{className:"img_wrap",children:t?Object(f.jsx)("img",{referrerPolicy:"no-referrer",src:t.thumbnail_url,alt:"kakao news"}):Object(f.jsx)(g.a,{animation:"wave",width:"100%",height:"100%"})})]})})),v=a(101),k=(a(77),"f9913d5c46f357735964eead8eedfd69"),w=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,images:[],page:1},e.handleChange=function(){var t=Object(h.a)(j.a.mark((function t(a,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(Object(u.a)(Object(u.a)({},e.state),{},{page:n}));case 2:return t.next=4,e.getImages();case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.getImages=Object(h.a)(j.a.mark((function t(){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O()({url:"/v2/search/image",method:"get",baseURL:"https://dapi.kakao.com",headers:{Authorization:"KakaoAK ".concat(k)},params:{query:"kakao",size:6,page:e.state.page}});case 2:a=t.sent,n=a.data.documents,e.setState(Object(u.a)(Object(u.a)({},e.state),{},{images:n,isLoading:!1}));case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.images,n=e.page;return Object(f.jsxs)("div",{className:"kakao_wrap",children:[" ",Object(f.jsxs)("ul",{className:"kakao_list",children:[" ",Array.from(t?new Array(6):a).map((function(e,t){return Object(f.jsx)(x,{item:e},t)}))," "]})," ",Object(f.jsx)(v.a,{count:10,page:n,onChange:this.handleChange})," "]})}}]),a}(n.Component),y=function(){return Object(f.jsx)("div",{className:"kakao_wrap",children:" NEWS DETAIL "})},A=(a(78),function(e){return Object(f.jsxs)("header",{children:[Object(f.jsx)(s.b,{to:"/",children:"\uc804\uccb4\ubcf4\uae30"}),Object(f.jsx)(s.b,{to:"/about",children:"\ub274\uc2a4 (\uc790\uc138\ud788\ubcf4\uae30)"})]})}),_=function(e){return Object(f.jsxs)(s.a,{children:[Object(f.jsx)(A,{}),Object(f.jsx)(i.a,{path:"/",exact:!0,component:w}),Object(f.jsx)(i.a,{path:"/about",component:y})]})};r.a.render(Object(f.jsx)(_,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.54673051.chunk.js.map