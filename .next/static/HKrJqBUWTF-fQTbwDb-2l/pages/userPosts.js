(window.webpackJsonp=window.webpackJsonp||[]).push([["2e04"],{"3Uee":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userPosts",function(){var e=a("j1SQ");return{page:e.default||e}}])},"Jo+v":function(e,t,a){e.exports=a("KgSv")},KgSv:function(e,t,a){a("STjA");var n=a("p9MR").Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},STjA:function(e,t,a){var n=a("aput"),r=a("Ym6j").f;a("wWUK")("getOwnPropertyDescriptor",function(){return function(e,t){return r(n(e),t)}})},j1SQ:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),s=a("O40h"),o=a("kOwS"),u=a("0iUn"),c=a("sLSF"),l=a("MI3g"),i=a("a7VT"),f=a("AT/M"),d=a("Tit0"),p=a("vYYK"),m=a("q1tI"),h=a.n(m),g=a("ZfN1"),b=a("G1oq"),v=a("1Yj4"),O=a("sOKU"),j=a("ok1R"),w=a("rhny"),y=a("X68C"),E=a("kvuc"),P=a("wx14"),x=a("17x9"),k=a.n(x),N=a("oI+J"),T={children:k.a.node},S=function(e){return h.a.createElement(N.a,Object(P.a)({group:!0},e))};S.propTypes=T;var M=S,I=a("Z7gm"),Y=function(e){function t(e){var a;return Object(u.default)(this,t),(a=Object(l.default)(this,Object(i.default)(t).call(this,e))).toggle=a.toggle.bind(Object(f.default)(a)),a.state={dropdownOpen:!1},a}return Object(d.default)(t,e),Object(c.default)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"renderMenu",value:function(e){return h.a.createElement(y.a,null,e.map(function(e,t){return h.a.createElement(E.a,Object(o.a)({key:t},e.handlers),e.text)}))}},{key:"render",value:function(){var e=this.props.items;return h.a.createElement(M,{className:"port-dropdown",isOpen:this.state.dropdownOpen,toggle:this.toggle},h.a.createElement(I.a,{caret:!0,size:"sm"}),this.renderMenu(e))}}]),t}(h.a.Component),_=a("lxPV"),L=a("8cHP"),q=a("dpnd"),z=function(e){function t(){var e,a;Object(u.default)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=Object(l.default)(this,(e=Object(i.default)(t)).call.apply(e,[this].concat(r))),Object(p.a)(Object(f.default)(a),"dropdownOptions",function(e){var t=a.createStatus(e.status);return[{text:t.view,handlers:{onClick:function(){return a.changePostStatus(t.value,e._id)}}},{text:"Delete",handlers:{onClick:function(){return a.deletePostWarning(e._id)}}}]}),a}return Object(d.default)(t,e),Object(c.default)(t,[{key:"changePostStatus",value:function(e,t){Object(q.h)({status:e},t).then(function(){L.Router.pushRoute("/userPosts")}).catch(function(e){console.error(e.message)})}},{key:"deletePostWarning",value:function(e){confirm("Are you sure you want to delete this blog post?")&&this.deletePost(e)}},{key:"deletePost",value:function(e){Object(q.b)(e).then(function(e){L.Router.pushRoute("/userPosts")}).catch(function(e){return console.error(e.message)})}},{key:"separatePosts",value:function(e){var t=[],a=[];return e.forEach(function(e){"draft"===e.status?a.push(e):t.push(e)}),{published:t,drafts:a}}},{key:"createStatus",value:function(e){return"draft"===e?{view:"Publish Story",value:"published"}:{view:"Make a Draft",value:"draft"}}},{key:"renderPosts",value:function(e){var t=this;return console.log(e),h.a.createElement("ul",{className:"user-blogs-list"},e.map(function(e,a){return h.a.createElement("li",{key:a},h.a.createElement(L.Link,{route:"/blog/".concat(e._id,"/edit")},h.a.createElement("a",null,e.title)),h.a.createElement(Y,{items:t.dropdownOptions(e)}))}))}},{key:"render",value:function(){var e=this.props.posts;console.log(e);var t=this.separatePosts(e),a=t.published,n=t.drafts;return h.a.createElement(g.a,Object(o.a)({},this.props.auth,{headerType:"landing"}),h.a.createElement("div",{className:"masthead",style:{backgroundImage:"url('/static/images/home-bg.jpg')"}},h.a.createElement("div",{className:"overlay"}),h.a.createElement(v.a,null,h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-lg-8 col-md-10 mx-auto"},h.a.createElement("div",{className:"site-heading"},h.a.createElement("h1",null,"Posts Dashboard"),h.a.createElement("span",{className:"subheading"},"Let's write something nice today!"," ",h.a.createElement(L.Link,{route:"/blog/new"},h.a.createElement(O.a,{color:"primary mybutton"},"Create a new Post")))))))),h.a.createElement(b.a,{className:"blog-user-page"},h.a.createElement("normaltext",null,h.a.createElement(j.a,null,h.a.createElement(w.a,{md:"6",className:"mx-auto text-center"},h.a.createElement("h2",{className:"blog-status-title"}," Published Posts "),this.renderPosts(a)),h.a.createElement(w.a,{md:"6",className:"mx-auto text-center"},h.a.createElement("h2",{className:"blog-status-title"}," Draft Posts "),this.renderPosts(n))))))}}],[{key:"getInitialProps",value:function(){var e=Object(s.default)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.req,n=[],e.prev=2,e.next=5,Object(q.g)(a);case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:return e.abrupt("return",{posts:n});case 12:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}()}]),t}(h.a.Component);t.default=Object(_.a)(z)},lxPV:function(e,t,a){"use strict";var n=a("ln6h"),r=a.n(n),s=a("Jo+v"),o=a.n(s),u=a("4mXO"),c=a.n(u),l=a("pLtp"),i=a.n(l),f=a("vYYK");function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=i()(a);"function"==typeof c.a&&(n=n.concat(c()(a).filter(function(e){return o()(a,e).enumerable}))),n.forEach(function(t){Object(f.a)(e,t,a[t])})}return e}var p=a("O40h"),m=a("0iUn"),h=a("sLSF"),g=a("MI3g"),b=a("a7VT"),v=a("Tit0"),O=a("q1tI"),j=a.n(O),w=a("ZfN1"),y=a("G1oq");a("33yf"),t.a=function(e){return function(t){function a(){return Object(m.default)(this,a),Object(g.default)(this,Object(b.default)(a).apply(this,arguments))}return Object(v.default)(a,t),Object(h.default)(a,[{key:"renderProtectedPage",value:function(){return this.props.auth.isAuthenticated?j.a.createElement(e,this.props):j.a.createElement(w.a,this.props.auth,j.a.createElement(y.a,null,j.a.createElement("normaltext",null,j.a.createElement("h1",null,"You must log in to view this page."))))}},{key:"render",value:function(){return this.renderProtectedPage()}}],[{key:"getInitialProps",value:function(){var t=Object(p.default)(r.a.mark(function t(a){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getInitialProps;case 2:if(t.t0=t.sent,!t.t0){t.next=7;break}return t.next=6,e.getInitialProps(a);case 6:t.t0=t.sent;case 7:return n=t.t0,t.abrupt("return",d({},n));case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),a}(j.a.Component)}},ok1R:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),u=a("17x9"),c=a.n(u),l=a("TSYQ"),i=a.n(l),f=a("33Jr"),d={tag:f.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},p=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,u=e.tag,c=e.form,l=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.e)(i()(t,s?"no-gutters":null,c?"form-row":"row"),a);return o.a.createElement(u,Object(n.a)({},l,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},rhny:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("xQ8M"),o=a.n(s),u=a("q1tI"),c=a.n(u),l=a("17x9"),i=a.n(l),f=a("TSYQ"),d=a.n(f),p=a("33Jr"),m=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:m,offset:m})]),g={tag:p.h,xs:h,sm:h,md:h,lg:h,xl:h,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,s=e.widths,u=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach(function(t,n){var r=e[t];if(delete l[t],r||""===r){var s=!n;if(o()(r)){var u,c=s?"-":"-"+t+"-",f=v(s,t,r.size);i.push(Object(p.e)(d()(((u={})[f]=r.size||""===r.size,u["order"+c+r.order]=r.order||0===r.order,u["offset"+c+r.offset]=r.offset||0===r.offset,u)),a))}else{var m=v(s,t,r);i.push(m)}}}),i.length||i.push("col");var f=Object(p.e)(d()(t,i),a);return c.a.createElement(u,Object(n.a)({},l,{className:f}))};O.propTypes=g,O.defaultProps=b,t.a=O},xQ8M:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}}},[["3Uee","5d41","9da1"]]]);