(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35cc2a2e"],{"6f0e":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),s={class:"container py-6 py-lg-7"},o=Object(n["h"])("h2",{class:"text-center"},"後台登入",-1),a={class:"row"},c={class:"login col-lg-6 offset-lg-3 p-6 mt-3 d-flex align-items-center"},i={class:"border border-primary p-s w-100"},l={class:"form-floating"},d=Object(n["h"])("label",{for:"account"},"email address",-1),u={class:"form-floating mt-2"},p=Object(n["h"])("label",{for:"password"},"password",-1),b={class:"mt-9 float-end"},f=Object(n["j"])("返回前台"),h=Object(n["h"])("button",{type:"submit",class:"btn btn-secondary"},"登入",-1);function m(e,t,r,m,j,w){var O=Object(n["J"])("RouterLink");return Object(n["B"])(),Object(n["g"])("div",s,[o,Object(n["h"])("div",a,[Object(n["h"])("div",c,[Object(n["h"])("div",i,[Object(n["h"])("form",{onSubmit:t[2]||(t[2]=Object(n["Y"])((function(){return w.logIn&&w.logIn.apply(w,arguments)}),["prevent"])),class:"bg-light p-5 clearfix"},[Object(n["h"])("div",l,[Object(n["X"])(Object(n["h"])("input",{type:"email",id:"account",class:"form-control",placeholder:"email address","onUpdate:modelValue":t[0]||(t[0]=function(e){return j.user.username=e})},null,512),[[n["R"],j.user.username]]),d]),Object(n["h"])("div",u,[Object(n["X"])(Object(n["h"])("input",{type:"password",id:"password",class:"form-control",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.user.password=e})},null,512),[[n["R"],j.user.password]]),p]),Object(n["h"])("div",b,[Object(n["k"])(O,{class:"btn btn-outline-secondary d-inline-block me-1",to:"/"},{default:Object(n["W"])((function(){return[f]})),_:1}),h])],32)])])])])}r("99af");var j={data:function(){return{user:{username:"",password:""}}},methods:{logIn:function(){var e=this;if(""!==this.user.username&&""!==this.user.password){var t="".concat("https://vue3-course-api.hexschool.io/v2","/admin/signin/");this.$http.post(t,this.user).then((function(t){var r=t.data,n=r.token,s=r.expired;document.cookie="hexToken=".concat(n,"; expires=").concat(new Date(s)),e.$httpMessageState(t,"登入"),e.$router.push("/admin/products")})).catch((function(t){e.$httpMessageState(t.response,"錯誤訊息"),e.user.password=""}))}else alert("請輸入正確的帳號密碼！")}}},w=r("6b0d"),O=r.n(w);const v=O()(j,[["render",m]]);t["default"]=v},"99af":function(e,t,r){"use strict";var n=r("23e7"),s=r("da84"),o=r("d039"),a=r("e8b5"),c=r("861d"),i=r("7b0b"),l=r("07fa"),d=r("8418"),u=r("65f0"),p=r("1dde"),b=r("b622"),f=r("2d00"),h=b("isConcatSpreadable"),m=9007199254740991,j="Maximum allowed index exceeded",w=s.TypeError,O=f>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),v=p("concat"),g=function(e){if(!c(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)},y=!O||!v;n({target:"Array",proto:!0,forced:y},{concat:function(e){var t,r,n,s,o,a=i(this),c=u(a,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?a:arguments[t],g(o)){if(s=l(o),p+s>m)throw w(j);for(r=0;r<s;r++,p++)r in o&&d(c,p,o[r])}else{if(p>=m)throw w(j);d(c,p++,o)}return c.length=p,c}})}}]);
//# sourceMappingURL=chunk-35cc2a2e.ca30669f.js.map