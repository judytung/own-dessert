(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1354f0b0"],{2532:function(t,e,r){"use strict";var a=r("23e7"),n=r("e330"),c=r("5a34"),o=r("1d80"),i=r("577e"),s=r("ab13"),l=n("".indexOf);a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~l(i(o(this)),i(c(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var a=r("861d"),n=r("c6b6"),c=r("b622"),o=c("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},"4de4":function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").filter,c=r("1dde"),o=c("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"564a":function(t,e,r){"use strict";r.r(e);var a=r("7a23"),n={class:"mt-3 mt-lg-4 mb-8 bg-accent"},c={class:"nav nav-pills d-flex justify-content-md-evenly text-center flex-wrap",role:"tablist"},o={class:"nav-item px-0 w-50 w-md-16 hvr-underline-from-left",role:"presentation"},i=Object(a["h"])("span",{class:"productNav-icon-1 d-inline-block align-bottom"},null,-1),s=Object(a["j"])(" 全部 "),l={class:"nav-item px-0 w-50 w-md-16 hvr-underline-from-left cursor-pointer",role:"presentation"},u=Object(a["h"])("span",{class:"productNav-icon-2 d-inline-block align-bottom"},null,-1),d=Object(a["j"])(" 瑪德蓮 "),f=[u,d],h={class:"nav-item px-0 w-50 w-md-16 hvr-underline-from-left cursor-pointer",role:"presentation"},p=Object(a["h"])("span",{class:"productNav-icon-3 d-inline-block align-bottom"},null,-1),b=Object(a["j"])(" 磅蛋糕 "),v=[p,b],g={class:"nav-item px-0 w-50 w-md-16 hvr-underline-from-left cursor-pointer",role:"presentation"},m=Object(a["h"])("span",{class:"productNav-icon-4 d-inline-block align-bottom"},null,-1),j=Object(a["j"])(" 其他 "),O=[m,j],x={class:"container mt-1 pb-4 pb-md-8 overflow-hidden"},y={class:"row gx-lg-18 px-lg-7"};function w(t,e,r,u,d,p){var b=Object(a["J"])("RouterLink"),m=Object(a["J"])("RouterView"),j=Object(a["J"])("CardView");return Object(a["B"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",n,[Object(a["h"])("ul",c,[Object(a["h"])("li",o,[Object(a["k"])(b,{to:"/products",onClick:e[0]||(e[0]=function(t){return p.getProducts()}),class:"nav-link px-2 py-2 text-light active","data-bs-toggle":"pill","data-bs-target":"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},{default:Object(a["W"])((function(){return[i,s]})),_:1})]),Object(a["h"])("li",l,[Object(a["h"])("a",{class:"nav-link px-2 py-2 text-light rounded-0",onClick:e[1]||(e[1]=function(t){return p.getProducts("madeleine")}),"data-bs-toggle":"pill","data-bs-target":"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},f)]),Object(a["h"])("li",h,[Object(a["h"])("a",{class:"nav-link px-2 py-2 text-light rounded-0",onClick:e[2]||(e[2]=function(t){return p.getProducts("pound-cake")}),"data-bs-toggle":"pill","data-bs-target":"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},v)]),Object(a["h"])("li",g,[Object(a["h"])("a",{class:"nav-link px-2 py-2 text-light rounded-0",onClick:e[3]||(e[3]=function(t){return p.getProducts("others")}),"data-bs-toggle":"pill","data-bs-target":"#pills-home",role:"tab","aria-controls":"pills-home","aria-selected":"true"},O)])])]),Object(a["k"])(m),Object(a["h"])("div",x,[Object(a["h"])("ul",y,[(Object(a["B"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(d.products,(function(t){return Object(a["B"])(),Object(a["g"])("li",{class:"col-md-4",key:t.id},[Object(a["k"])(j,{product:t,isFavorite:d.favoriteData,onFavoriteItem:p.toggleFavorite,ref_for:!0,ref:"card"},null,8,["product","isFavorite","onFavoriteItem"])])})),128))])])],64)}r("99af"),r("c740"),r("a434"),r("e9c4"),r("caad"),r("2532");var k={class:"card mb-3"},D={class:"row g-0"},C={class:"col-4 col-md-12 pos-relative"},F={class:"card-img-text-hover card__img__hover__scale overflow-hidden"},I=["src","alt"],S={class:"col-8 col-md-12"},$={class:"card-body p-md-0 h-100 d-flex flex-column justify-content-between"},_={class:"d-lg-flex mt-md-1 align-items-center"},J={class:"card-title fs-4 fw-normal me-2 fw-light"},P={class:"w-33"},A={class:"button-group d-flex justify-content-between mt-md-1"},M=Object(a["h"])("i",{class:"bi bi-cart2 fs-3 hvr-bob d-flex align-items-end"},null,-1),N=[M],B={key:0,class:"bi bi-heart-fill fs-3 d-flex align-items-end"},q={key:1,class:"bi bi-heart fs-3 d-flex align-items-end"};function L(t,e,r,n,c,o){return Object(a["B"])(),Object(a["g"])("div",k,[Object(a["h"])("div",D,[Object(a["h"])("div",C,[Object(a["h"])("div",F,[Object(a["h"])("img",{src:r.product.imageUrl,class:"img-fluid h-lg-17 h-md-13 h-9 ratio ratio-1x1",alt:r.product.title},null,8,I),Object(a["h"])("a",{class:"stretched-link z-index-4",type:"button",onClick:e[0]||(e[0]=function(t){return o.getProduct(r.product.id)})})])]),Object(a["h"])("div",S,[Object(a["h"])("div",$,[Object(a["h"])("div",_,[Object(a["h"])("h3",J,Object(a["M"])(r.product.title),1),Object(a["h"])("p",P,Object(a["M"])(r.product.price)+" / "+Object(a["M"])(r.product.unit),1)]),Object(a["h"])("div",A,[Object(a["h"])("button",{type:"button",class:"btn border-0",onClick:e[1]||(e[1]=function(t){return o.addToCart(r.product.id)})},N),Object(a["h"])("button",{type:"button",class:"btn border-0",onClick:e[2]||(e[2]=function(e){return t.$emit("favoriteItem",r.product.id)})},[r.isFavorite.includes(r.product.id)?(Object(a["B"])(),Object(a["g"])("i",B)):(Object(a["B"])(),Object(a["g"])("i",q))]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-dark rounded-0 w-lg-30 py-s px-m",onClick:e[3]||(e[3]=function(t){return o.getProduct(r.product.id)})}," 查看更多 ")])])])])])}r("4de4"),r("d3b7");var T=r("6be2"),E={props:["product","isFavorite"],data:function(){return{cartData:{carts:[]},isLoadingItem:"",qty:1}},emits:["favoriteItem"],methods:{addToCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a={product_id:t,qty:r};this.isLoadingItem=t;var n=this.cartData.carts.filter((function(e){return e.product_id===t}));if(n.length>0&&n[0].qty>=30)return alert("最多只能購買 30 個喔！"),void(this.isLoadingItem="");var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("judyhexschoolforvue","/cart");this.$http.post(c,{data:a}).then((function(t){e.$httpMessageState(t,"加入購物車"),e.qty=1,e.getCart(),e.isLoadingItem=""})).catch((function(t){e.$httpMessageState(t.response,"錯誤訊息")}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("judyhexschoolforvue","/cart");this.$http.get(e).then((function(e){t.cartData=e.data.data,T["a"].emit("push-num",t.cartData.carts.length)})).catch((function(t){this.$httpMessageState(t.response,"錯誤訊息")}))},getProduct:function(t){this.$router.push("/product/".concat(t))}}},R=r("6b0d"),V=r.n(R);const z=V()(E,[["render",L]]);var H=z,U={components:{CardView:H},data:function(){return{products:[],favoriteData:JSON.parse(localStorage.getItem("favorite"))||[],isFavorite:""}},methods:{getProducts:function(t){var e=this;this.$emit("loadingStatus",!0);var r="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("judyhexschoolforvue","/products");(t||this.$route.query.category)&&(r="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("judyhexschoolforvue","/products?category=").concat(t||this.$route.query.category)),this.$http.get(r).then((function(t){e.$emit("loadingStatus",!1),e.products=t.data.products})).catch((function(t){e.$httpMessageState(t.response,"錯誤訊息")}))},toggleFavorite:function(t){var e=this.favoriteData.findIndex((function(e){return e===t}));-1===e?this.favoriteData.push(t):this.favoriteData.splice(e,1)}},watch:{favoriteData:{handler:function(){localStorage.setItem("favorite",JSON.stringify(this.favoriteData)),T["a"].emit("favoriteData",this.favoriteData)},deep:!0}},mounted:function(){this.getProducts()}};const W=V()(U,[["render",w]]);e["default"]=W},"5a34":function(t,e,r){var a=r("da84"),n=r("44e7"),c=a.TypeError;t.exports=function(t){if(n(t))throw c("The method doesn't accept regular expressions");return t}},"99af":function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),c=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),l=r("07fa"),u=r("8418"),d=r("65f0"),f=r("1dde"),h=r("b622"),p=r("2d00"),b=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=n.TypeError,j=p>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),O=f("concat"),x=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},y=!j||!O;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,r,a,n,c,o=s(this),i=d(o,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(c=-1===e?o:arguments[e],x(c)){if(n=l(c),f+n>v)throw m(g);for(r=0;r<n;r++,f++)r in c&&u(i,f,c[r])}else{if(f>=v)throw m(g);u(i,f++,c)}return i.length=f,i}})},ab13:function(t,e,r){var a=r("b622"),n=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(a){}}return!1}},b727:function(t,e,r){var a=r("0366"),n=r("e330"),c=r("44ad"),o=r("7b0b"),i=r("07fa"),s=r("65f0"),l=n([].push),u=function(t){var e=1==t,r=2==t,n=3==t,u=4==t,d=6==t,f=7==t,h=5==t||d;return function(p,b,v,g){for(var m,j,O=o(p),x=c(O),y=a(b,v),w=i(x),k=0,D=g||s,C=e?D(p,w):r||f?D(p,0):void 0;w>k;k++)if((h||k in x)&&(m=x[k],j=y(m,k,O),t))if(e)C[k]=j;else if(j)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:l(C,m)}else switch(t){case 4:return!1;case 7:l(C,m)}return d?-1:n||u?u:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},c740:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").findIndex,c=r("44d2"),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),a({target:"Array",proto:!0,forced:i},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},caad:function(t,e,r){"use strict";var a=r("23e7"),n=r("4d64").includes,c=r("44d2");a({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},e9c4:function(t,e,r){var a=r("23e7"),n=r("da84"),c=r("d066"),o=r("2ba4"),i=r("e330"),s=r("d039"),l=n.Array,u=c("JSON","stringify"),d=i(/./.exec),f=i("".charAt),h=i("".charCodeAt),p=i("".replace),b=i(1..toString),v=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,j=function(t,e,r){var a=f(r,e-1),n=f(r,e+1);return d(g,t)&&!d(m,n)||d(m,t)&&!d(g,a)?"\\u"+b(h(t,0),16):t},O=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&a({target:"JSON",stat:!0,forced:O},{stringify:function(t,e,r){for(var a=0,n=arguments.length,c=l(n);a<n;a++)c[a]=arguments[a];var i=o(u,null,c);return"string"==typeof i?p(i,v,j):i}})}}]);
//# sourceMappingURL=chunk-1354f0b0.a5c50e6b.js.map