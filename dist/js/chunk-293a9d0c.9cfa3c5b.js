(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-293a9d0c"],{"16c2":function(e,t,a){"use strict";a("7719")},"2d24":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("7a23");function n(){return Object(c["m"])("$swal")}},"5d10":function(e,t,a){"use strict";var c=a("7a23"),n=Object(c["U"])("data-v-e7dc2c3c");Object(c["z"])("data-v-e7dc2c3c");var i=Object(c["i"])("div",{class:"loadingio-spinner"},[Object(c["i"])("div",{class:"loadingio-inner"},[Object(c["i"])("div",{style:{left:"21px",top:"21px","animation-delay":"0s"}}),Object(c["i"])("div",{style:{left:"75px",top:"21px","animation-delay":"0.125s"}}),Object(c["i"])("div",{style:{left:"129px",top:"21px","animation-delay":"0.25s"}}),Object(c["i"])("div",{style:{left:"21px",top:"75px","animation-delay":"0.875s"}}),Object(c["i"])("div",{style:{left:"129px",top:"75px","animation-delay":"0.375s"}}),Object(c["i"])("div",{style:{left:"21px",top:"129px","animation-delay":"0.75s"}}),Object(c["i"])("div",{style:{left:"75px",top:"129px","animation-delay":"0.625s"}}),Object(c["i"])("div",{style:{left:"129px",top:"129px","animation-delay":"0.5s"}})])],-1);Object(c["x"])();var r=n((function(e,t,a,r,o,s){var l=Object(c["F"])("Loading");return Object(c["w"])(),Object(c["e"])(l,{active:r.attrs.isLoading},{default:n((function(){return[i]})),_:1},8,["active"])})),o={setup:function(e,t){var a=t.attrs;return{attrs:a}}};a("16c2");o.render=r,o.__scopeId="data-v-e7dc2c3c";t["a"]=o},"5fbc":function(e,t,a){"use strict";a("7a87")},7719:function(e,t,a){},"7a87":function(e,t,a){},"7dd8":function(e,t,a){"use strict";a.r(t);a("b64b"),a("b0c0");var c=a("7a23"),n=Object(c["U"])("data-v-a0a2f476");Object(c["z"])("data-v-a0a2f476");var i={class:"my-2"},r=Object(c["i"])("h2",{class:"pb-3 mb-3 fw-bold border-bottom border-3 border-orange"}," 訂單列表 ",-1),o={class:"accordion",id:"accordionExample"},s={key:0,class:"accordion-body"},l={class:"d-flex justify-content-between"},d={class:"fw-bold"},b=Object(c["h"])(" 訂單時間: "),u={class:"mx-1"},p={key:0,class:"text-success"},j={key:1,class:"text-secondary"},O={class:"row"},m={class:"col-lg-6 col-12"},f={class:"p-4"},v=Object(c["i"])("h5",{class:"pb-2 border-2 border-bottom border-orange"}," 訂單內容 ",-1),g={class:"text-end"},h=Object(c["h"])(" 總金額:"),y={class:"m-2"},x=Object(c["h"])("元 "),w={class:"col-lg-6 col-12"},k={class:"mb-3 form-group"},_=Object(c["i"])("label",{for:"name",class:"mb-2"},"Name *",-1),V={class:"mb-3 form-group"},F=Object(c["i"])("label",{for:"email",class:"mb-2"},"Email *",-1),I={class:"mb-3 form-group"},N=Object(c["i"])("label",{for:"tel",class:"mb-2"},"Phone *",-1),C={class:"mb-3 form-group"},E=Object(c["i"])("label",{for:"address",class:"mb-2"},"Address *",-1),L={class:"d-flex justify-content-end w-100"},P={class:"mt-5 d-flex justify-content-center"};Object(c["x"])();var U=n((function(e,t,a,U,B,D){var q=Object(c["F"])("BaseLoading"),A=Object(c["F"])("Field"),J=Object(c["F"])("ErrorMessage"),z=Object(c["F"])("Form"),S=Object(c["F"])("BasePagination");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(q,{isLoading:e.isLoading},null,8,["isLoading"]),Object(c["i"])("div",i,[r,Object(c["i"])("div",o,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(U.orders.arr,(function(a){return Object(c["w"])(),Object(c["e"])("div",{class:"accordion-item",key:a.id},[Object(c["i"])("h2",{class:"accordion-header",id:"".concat(a.id,"6")},[Object(c["i"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#".concat(a.id),"aria-expanded":"false","aria-controls":a.id,onClick:function(t){return e.tempOrder.obj=JSON.parse(JSON.stringify(a))}}," 訂單編號:"+Object(c["I"])(a.id),9,["data-bs-target","aria-controls","onClick"])],8,["id"]),Object(c["i"])("div",{id:a.id,class:"accordion-collapse collapse","aria-labelledby":"".concat(a.id,"6"),"data-bs-parent":"#accordionExample"},[0!=Object.keys(e.tempOrder.obj).length&&e.tempOrder.obj.id===a.id?(Object(c["w"])(),Object(c["e"])("div",s,[Object(c["i"])("div",l,[Object(c["i"])("h4",d,[b,Object(c["i"])("span",u,Object(c["I"])(U.formatDate(e.tempOrder.obj.create_at)),1)]),e.tempOrder.obj.is_paid?(Object(c["w"])(),Object(c["e"])("h4",p,"已付款")):(Object(c["w"])(),Object(c["e"])("h4",j,"未付款"))]),Object(c["i"])("div",O,[Object(c["i"])("div",m,[Object(c["i"])("div",f,[v,(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(e.tempOrder.obj.products,(function(e){return Object(c["w"])(),Object(c["e"])("p",{class:"pb-2 mb-2 border-bottom border-gray",key:e.id},Object(c["I"])(e.product.title)+"/"+Object(c["I"])(e.qty)+Object(c["I"])(e.product.unit),1)})),128)),Object(c["i"])("h5",g,[h,Object(c["i"])("span",y,Object(c["I"])(U.currency(e.tempOrder.obj.total)),1),x])])]),Object(c["i"])("div",w,[Object(c["i"])(z,null,{default:n((function(n){var i=n.errors;return[Object(c["i"])("div",k,[_,Object(c["i"])(A,{id:"name",name:"name",type:"text",class:["form-control",{"is-invalid":i["name"]}],placeholder:"請輸入 name",rules:"required",modelValue:e.tempOrder.obj.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.tempOrder.obj.user.name=t})},null,8,["class","modelValue"]),Object(c["i"])(J,{name:"name",class:"invalid-feedback"})]),Object(c["i"])("div",V,[F,Object(c["i"])(A,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":i["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:e.tempOrder.obj.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.tempOrder.obj.user.email=t})},null,8,["class","modelValue"]),Object(c["i"])(J,{name:"email",class:"invalid-feedback"})]),Object(c["i"])("div",I,[N,Object(c["i"])(A,{id:"tel",name:"tel",type:"tel",class:["form-control",{"is-invalid":i["tel"]}],placeholder:"請輸入 tel",rules:U.isPhone,modelValue:e.tempOrder.obj.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.tempOrder.obj.user.tel=t})},null,8,["class","rules","modelValue"]),Object(c["i"])(J,{name:"tel",class:"invalid-feedback"})]),Object(c["i"])("div",C,[E,Object(c["i"])(A,{id:"address",name:"address",type:"text",class:["form-control",{"is-invalid":i["address"]}],placeholder:"請輸入 address",rules:"required",modelValue:e.tempOrder.obj.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.tempOrder.obj.user.address=t})},null,8,["class","modelValue"]),Object(c["i"])(J,{name:"address",class:"invalid-feedback"})]),Object(c["i"])("div",L,[Object(c["i"])("button",{class:"btn btn-primary me-3",type:"button",onClick:t[5]||(t[5]=function(){return e.editOrder&&e.editOrder.apply(e,arguments)})}," 修改客戶資料 "),Object(c["i"])("button",{class:"btn btn-danger",type:"button",onClick:function(t){return e.delOrder(a.id)}}," 刪除訂單 ",8,["onClick"])])]})),_:2},1024)])])])):Object(c["f"])("",!0)],8,["id","aria-labelledby"])])})),128))]),Object(c["i"])("div",P,[Object(c["i"])(S,{pagination:U.pagination,onGetNowpage:e.getOrders},null,8,["pagination","onGetNowpage"])])])],64)})),B=a("5530"),D=(a("99af"),a("dd87")),q=a("5d10"),A=a("bc3a"),J=a.n(A),z=a("2d24"),S=a("1336"),T={components:{BasePagination:D["a"],BaseLoading:q["a"]},setup:function(){var e=Object(c["A"])({arr:[]}),t=Object(c["A"])({obj:{}}),a=Object(z["a"])();function n(e,t){a.fire({icon:"success",title:e,text:t})}function i(e,t){a.fire({icon:"error",title:e,text:t})}function r(){var a=Object(c["A"])({obj:{}}),r=Object(c["B"])(!1),o=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;r.value=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/orders?page=").concat(a);J.a.get(c).then((function(a){a.data.success?(e.arr=a.data.orders,t.obj=a.data.pagination,r.value=!1):console.error=function(){throw new Error(a.data.message)}})).catch((function(e){console.error=function(){throw new Error(e)}}))},s=function(e){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/order/").concat(e);J.a.delete(t).then((function(e){e.data.success?(o(),n("刪除訂單","刪除訂單成功!")):i("Oops...",e.data.message)})).catch((function(e){console.error=function(){throw new Error(e)}}))},l=function(){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("supergems","/admin/order/").concat(a.obj.id);J.a.put(e,{data:Object(B["a"])({},a.obj)}).then((function(e){e.data.success?(o(),n("修改訂單","修改訂單成功!")):i("Oops...",e.data.message)})).catch((function(e){console.error=function(){throw new Error(e)}}))};return Object(c["t"])((function(){o()})),{tempOrder:a,isLoading:r,getOrders:o,delOrder:s,editOrder:l}}function o(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"}return Object(B["a"])({orders:e,pagination:t,currency:S["a"],formatDate:S["b"],isPhone:o},r())}};T.render=U,T.__scopeId="data-v-a0a2f476";t["default"]=T},b0c0:function(e,t,a){var c=a("83ab"),n=a("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,s="name";c&&!(s in i)&&n(i,s,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(e){return""}}})},dd87:function(e,t,a){"use strict";var c=a("7a23"),n=Object(c["U"])("data-v-79cc22fc");Object(c["z"])("data-v-79cc22fc");var i={"aria-label":"Page navigation example"},r={class:"pagination"},o=Object(c["i"])("span",{"aria-hidden":"true"},"«",-1),s=Object(c["i"])("span",{"aria-hidden":"true"},"»",-1);Object(c["x"])();var l=n((function(e,t,a,n,l,d){return Object(c["w"])(),Object(c["e"])("nav",i,[Object(c["i"])("ul",r,[Object(c["i"])("li",{class:["page-item",{disabled:!n.props.pagination.obj.has_pre}]},[Object(c["i"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(c["T"])((function(e){return n.emit("getNowpage",n.props.pagination.obj.current_page-1)}),["prevent"]))},[o])],2),(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(n.props.pagination.obj.total_pages,(function(e){return Object(c["w"])(),Object(c["e"])("li",{class:["page-item",{active:e===n.props.pagination.obj.current_page}],key:e},[Object(c["i"])("a",{class:"page-link",href:"#",onClick:Object(c["T"])((function(t){return n.emit("getNowpage",e)}),["prevent"])},Object(c["I"])(e),9,["onClick"])],2)})),128)),Object(c["i"])("li",{class:["page-item",{disabled:!n.props.pagination.obj.has_next}]},[Object(c["i"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(c["T"])((function(e){return n.emit("getNowpage",n.props.pagination.obj.current_page+1)}),["prevent"]))},[s])],2)])])})),d={props:{pagination:{type:Object,default:function(){return{}}},getProducts:{type:Function,default:function(){}}},emits:["getNowpage"],setup:function(e,t){var a=t.emit;return{props:e,emit:a}}};a("5fbc");d.render=l,d.__scopeId="data-v-79cc22fc";t["a"]=d}}]);
//# sourceMappingURL=chunk-293a9d0c.9cfa3c5b.js.map