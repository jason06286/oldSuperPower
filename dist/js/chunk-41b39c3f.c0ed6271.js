(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41b39c3f"],{"36fa":function(t,e,c){"use strict";var n=c("7a23"),i=Object(n["U"])("data-v-4425fc36");Object(n["z"])("data-v-4425fc36");var a=Object(n["i"])("div",{class:"loadingio-spinner"},[Object(n["i"])("div",{class:"loadingio-inner"},[Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div"),Object(n["i"])("div")])],-1);Object(n["x"])();var r=i((function(t,e,c,r,o,s){var l=Object(n["F"])("Loading");return Object(n["w"])(),Object(n["e"])(l,{active:r.attrs.isLoading},{default:i((function(){return[a]})),_:1},8,["active"])})),o={setup:function(t,e){var c=e.attrs;return{attrs:c}}};c("f7fc");o.render=r,o.__scopeId="data-v-4425fc36";e["a"]=o},"466d":function(t,e,c){"use strict";var n=c("d784"),i=c("825a"),a=c("50c4"),r=c("1d80"),o=c("8aa5"),s=c("14c3");n("match",(function(t,e,c){return[function(e){var c=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,c):new RegExp(e)[t](String(c))},function(t){var n=c(e,this,t);if(n.done)return n.value;var r=i(this),l=String(t);if(!r.global)return s(r,l);var d=r.unicode;r.lastIndex=0;var b,u=[],j=0;while(null!==(b=s(r,l))){var O=String(b[0]);u[j]=O,""===O&&(r.lastIndex=o(l,a(r.lastIndex),d)),j++}return 0===j?null:u}]}))},"5fbc":function(t,e,c){"use strict";c("7a87")},"653c":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var n=c("7a23"),i=Object(n["U"])("data-v-1a6534b2");Object(n["z"])("data-v-1a6534b2");var a={class:"bg-universe"},r=Object(n["i"])("p",{class:"fs-3"},"想要更多優惠嗎?",-1),o={class:"fs-1"},s=Object(n["h"])(" 玩小遊戲領取 "),l=Object(n["h"])("優惠券"),d={class:"py-5"},b={class:"container",style:{"min-height":"calc(100vh - 412px)"}},u=Object(n["i"])("h4",{class:"pb-2 mb-3 border-bottom border-orange"},"能量石分類",-1),j={class:"row"},O={class:"mb-5 col-lg-3 col-12"},p={class:"row"},f={key:0,class:"col-lg-9 col-12"},g={class:"row"},v={class:"card-body"},h={class:"text-center card-title"},w={class:"card-text"},m={class:"mb-3 d-flex justify-content-center align-items-center"},y={class:"line-through text-secondary me-3"},k={class:"text-danger fs-4"},x={class:"d-flex justify-content-center"},C={key:0,class:"spinner-border spinner-border-sm",role:"status"},P=Object(n["i"])("span",{class:"visually-hidden"},"Loading...",-1),_=Object(n["h"])(" 加入購物車 "),I={class:"d-flex justify-content-center"},L={key:1,class:"col-lg-9 col-12"},A={class:"row"},B={class:"card-body"},E={class:"text-center card-title"},F={class:"card-text"},N={class:"mb-3 d-flex justify-content-center align-items-center"},T={class:"line-through text-secondary me-3"},D={class:"text-danger fs-4"},U={class:"d-flex justify-content-center"},$={key:0,class:"spinner-border spinner-border-sm",role:"status"},z=Object(n["i"])("span",{class:"visually-hidden"},"Loading...",-1),S=Object(n["h"])(" 加入購物車 ");Object(n["x"])();var G=i((function(t,e,c,G,J,q){var R=Object(n["F"])("BaseFrontendLoading"),H=Object(n["F"])("router-link"),K=Object(n["F"])("BasePagination");return Object(n["w"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(R,{isLoading:G.showLoadinng},null,8,["isLoading"]),Object(n["i"])("header",null,[Object(n["i"])("div",a,[r,Object(n["i"])("p",o,[s,Object(n["i"])(H,{to:"/frontDesk/coupon",class:"text-orange d-inline-block animate-bounce"},{default:i((function(){return[l]})),_:1})])])]),Object(n["i"])("section",null,[Object(n["i"])("div",d,[Object(n["i"])("div",b,[u,Object(n["i"])("div",j,[Object(n["i"])("div",O,[Object(n["i"])("div",p,[Object(n["i"])("div",{class:["py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list",{active:"全部"===t.tempCategory}],onClick:e[1]||(e[1]=function(){return t.showAll&&t.showAll.apply(t,arguments)})}," 全部 ",2),Object(n["i"])("div",{class:["py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list",{active:"精礦"===t.tempCategory}],onClick:e[2]||(e[2]=function(e){return t.filterProduct("精礦")})}," 精礦 ",2),Object(n["i"])("div",{class:["py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list",{active:"精鋼"===t.tempCategory}],onClick:e[3]||(e[3]=function(e){return t.filterProduct("精鋼")})}," 精鋼 ",2),Object(n["i"])("div",{class:["py-2 text-center border mb-lg-3 col-lg-12 col-6 fw-bold list",{active:"精石"===t.tempCategory}],onClick:e[4]||(e[4]=function(e){return t.filterProduct("精石")})}," 精石 ",2)])]),G.showAllProducts?(Object(n["w"])(),Object(n["e"])("div",f,[Object(n["i"])("div",g,[(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["D"])(G.products.arr,(function(e){return Object(n["w"])(),Object(n["e"])("div",{class:"mb-3 col-12 col-md-6 col-lg-4",key:e.id},[Object(n["i"])("div",{class:"border-2 card w-100",onClick:function(c){return t.forwardingProduct(e.id)}},[Object(n["i"])("img",{src:e.imagesUrl[0],class:"card-img-top",alt:e.description},null,8,["src","alt"]),Object(n["i"])("div",v,[Object(n["i"])("h5",h,Object(n["I"])(e.title),1),Object(n["i"])("p",w,Object(n["I"])(e.description),1),Object(n["i"])("div",m,[Object(n["i"])("span",y,"$"+Object(n["I"])(G.currency(e.origin_price)),1),Object(n["i"])("span",k,"$"+Object(n["I"])(G.currency(e.price)),1)]),Object(n["i"])("div",x,[Object(n["i"])("button",{type:"button",class:"btn btn-outline-secondary me-3",onClick:Object(n["T"])((function(c){return t.forwardingProduct(e.id)}),["stop"])}," 查看更多 ",8,["onClick"]),Object(n["i"])("button",{type:"button",class:["btn btn-outline-primary",{disabled:G.isLoading===e.id}],onClick:Object(n["T"])((function(c){return t.addCart(e)}),["stop"])},[G.isLoading===e.id?(Object(n["w"])(),Object(n["e"])("div",C,[P])):Object(n["f"])("",!0),_],10,["onClick"])])])],8,["onClick"])])})),128)),Object(n["i"])("div",I,[Object(n["i"])(K,{pagination:G.pagination,onGetNowpage:t.getProducts},null,8,["pagination","onGetNowpage"])])])])):Object(n["f"])("",!0),G.showAllProducts?Object(n["f"])("",!0):(Object(n["w"])(),Object(n["e"])("div",L,[Object(n["i"])("div",A,[(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["D"])(G.filterProducts.obj,(function(e){return Object(n["w"])(),Object(n["e"])("div",{class:"mb-3 col-12 col-md-6 col-lg-4",key:e.id},[Object(n["i"])("div",{class:"border-2 card w-100",onClick:function(c){return t.forwardingProduct(e.id)}},[Object(n["i"])("img",{src:e.imagesUrl[0],class:"card-img-top",alt:e.description},null,8,["src","alt"]),Object(n["i"])("div",B,[Object(n["i"])("h5",E,Object(n["I"])(e.title),1),Object(n["i"])("p",F,Object(n["I"])(e.description),1),Object(n["i"])("div",N,[Object(n["i"])("span",T,"$"+Object(n["I"])(G.currency(e.origin_price)),1),Object(n["i"])("span",D,"$"+Object(n["I"])(G.currency(e.price)),1)]),Object(n["i"])("div",U,[Object(n["i"])("button",{type:"button",class:"btn btn-outline-secondary me-3",onClick:Object(n["T"])((function(c){return t.forwardingProduct(e.id)}),["stop"])}," 查看更多 ",8,["onClick"]),Object(n["i"])("button",{type:"button",class:["btn btn-outline-primary",{disabled:G.isLoading===e.id}],onClick:Object(n["T"])((function(c){return t.addCart(e)}),["stop"])},[G.isLoading===e.id?(Object(n["w"])(),Object(n["e"])("div",$,[z])):Object(n["f"])("",!0),S],10,["onClick"])])])],8,["onClick"])])})),128))])]))])])])])],64)})),J=c("5530"),q=(c("99af"),c("4de4"),c("ac1f"),c("466d"),c("dd87")),R=c("36fa"),H=c("bc3a"),K=c.n(H),M=c("1336"),Q=c("cfb9"),V=c("98e4"),W=c("6c02"),X={components:{BasePagination:q["a"],BaseFrontendLoading:R["a"]},setup:function(){var t=Object(W["d"])(),e=Object(n["A"])({arr:[]}),c=Object(n["A"])({arr:[]}),i=Object(n["A"])({obj:{}}),a=Object(n["A"])({obj:{}}),r=Object(n["B"])(!0),o=Object(n["B"])(""),s=Object(n["B"])(!1);function l(){var a=function(){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/products/all");K.a.get(t).then((function(t){t.data.success?e.arr=t.data.products:console.error=function(){throw new Error(t.data.message)}})).catch((function(t){console.error=function(){throw new Error(t)}}))},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;s.value=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/products?page=").concat(t);K.a.get(e).then((function(t){t.data.success?(c.arr=t.data.products,i.obj=t.data.pagination,s.value=!1):console.error=function(){throw new Error(t.data.message)}})).catch((function(t){console.error=function(){throw new Error(t)}}))},l=function(t){o.value=t.id;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/cart");K.a.post(e,{data:{product_id:t.id,qty:1}}).then((function(t){t.data.success?(Q["a"].emit("update-cart"),o.value=""):console.error=function(){throw new Error(t.data.message)},Object(V["a"])(t,"購物車新增")})).catch((function(t){console.error=function(){throw new Error(t)}}))},d=function(e){t.push("/frontDesk/product/".concat(e))};return Object(n["t"])((function(){r(),a()})),{getAllProducts:a,getProducts:r,addCart:l,forwardingProduct:d}}function d(){var t=Object(n["B"])("全部"),c=function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r.value=!1,t.value=c,a.obj=e.arr.filter((function(t){return t.category.match(c)}))},i=function(){t.value="全部",r.value=!0};return{tempCategory:t,filterProduct:c,showAll:i}}return Object(J["a"])(Object(J["a"])({products:c,pagination:i,filterProducts:a,isLoading:o,showLoadinng:s,currency:M["a"],showAllProducts:r},l()),d())}};c("d882");X.render=G,X.__scopeId="data-v-1a6534b2";e["default"]=X},"7a87":function(t,e,c){},"7b07":function(t,e,c){},d882:function(t,e,c){"use strict";c("fd2b")},dd87:function(t,e,c){"use strict";var n=c("7a23"),i=Object(n["U"])("data-v-79cc22fc");Object(n["z"])("data-v-79cc22fc");var a={"aria-label":"Page navigation example"},r={class:"pagination"},o=Object(n["i"])("span",{"aria-hidden":"true"},"«",-1),s=Object(n["i"])("span",{"aria-hidden":"true"},"»",-1);Object(n["x"])();var l=i((function(t,e,c,i,l,d){return Object(n["w"])(),Object(n["e"])("nav",a,[Object(n["i"])("ul",r,[Object(n["i"])("li",{class:["page-item",{disabled:!i.props.pagination.obj.has_pre}]},[Object(n["i"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=Object(n["T"])((function(t){return i.emit("getNowpage",i.props.pagination.obj.current_page-1)}),["prevent"]))},[o])],2),(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["D"])(i.props.pagination.obj.total_pages,(function(t){return Object(n["w"])(),Object(n["e"])("li",{class:["page-item",{active:t===i.props.pagination.obj.current_page}],key:t},[Object(n["i"])("a",{class:"page-link",href:"#",onClick:Object(n["T"])((function(e){return i.emit("getNowpage",t)}),["prevent"])},Object(n["I"])(t),9,["onClick"])],2)})),128)),Object(n["i"])("li",{class:["page-item",{disabled:!i.props.pagination.obj.has_next}]},[Object(n["i"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=Object(n["T"])((function(t){return i.emit("getNowpage",i.props.pagination.obj.current_page+1)}),["prevent"]))},[s])],2)])])})),d={props:{pagination:{type:Object,default:function(){return{}}},getProducts:{type:Function,default:function(){}}},emits:["getNowpage"],setup:function(t,e){var c=e.emit;return{props:t,emit:c}}};c("5fbc");d.render=l,d.__scopeId="data-v-79cc22fc";e["a"]=d},f7fc:function(t,e,c){"use strict";c("7b07")},fd2b:function(t,e,c){}}]);
//# sourceMappingURL=chunk-41b39c3f.c0ed6271.js.map