(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/open-box.3981d62d.png"},61:function(e,t,a){e.exports=a.p+"static/media/logo-nectico.c7014222.png"},62:function(e,t,a){e.exports=a.p+"static/media/logo-dinas.010dfa5b.png"},69:function(e,t,a){e.exports=a(99)},74:function(e,t,a){},75:function(e,t,a){},97:function(e,t,a){e.exports=a.p+"static/media/logo-fkbk.9a8a795e.png"},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),o=(a(74),a(75),a(108)),i=a(101),u=a(102),s=a(103),m=a(104),p=a(27),d=a.n(p),h=a(20),g=a.n(h),E=a(7),b=a(22),f=a.n(b),v=function(e){return f()("Berhasil!","Anda berhasil masuk","success"),{type:"LOGIN_SUCCESS",payload:e}},O=function(e){return f()("Gagal!","Email atau password yang anda masukan salah","error"),{type:"LOGIN_FAILED",payload:e}},y=function(){return function(e){return g.a.get("https://store-validation-api.nectico.com/api/product").then((function(t){e({type:"LOAD_PRODUCT",payload:t})}),(function(t){return e(k(t))}))}},C=function(e){return function(t){return g.a.get(e).then((function(e){t({type:"LOAD_PRODUCT",payload:e})}),(function(e){return t(k(e))}))}},j=function(e){return function(t){t({type:"ADD",payload:e})}},k=function(){return f()("Gagal!","Maaf, Terjadi Kesalahan pada aplikasi","error"),{type:"LOAD_PRODUCT_FAILED"}},w=function(e,t,a,n){return f()("Berhasil Memesan!","Tunggu tim kami menghubungi Anda","success"),{type:"CHECKOUT_SUCCESS",payload:e,totalItem:t,totalAmount:a,buyer:n}},_=function(){return f()("Gagal!","Maaf, Pemesanan Anda Gagal","error"),{type:"CHECKOUT_FAILED"}},A=a(4);var S=function(e){var t=Object(A.d)();return r.a.createElement("div",null,e.products.map((function(e){return r.a.createElement(o.a,{className:"product-card"},r.a.createElement(o.a.Body,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{xs:3,s:3,md:3,lg:3,style:{textAlign:"right"}},e.image?r.a.createElement(s.a,{className:"product-icon",src:"https://store-validation-api.nectico.com/"+e.image,rounded:!0}):r.a.createElement(s.a,{className:"product-icon",src:d.a,rounded:!0})),r.a.createElement(u.a,null," ",r.a.createElement("small",{className:"product-title"},e.name),r.a.createElement("br",null),r.a.createElement("small",{className:"product-price"},"Rp"," ",e.buying_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("br",null),r.a.createElement(m.a,{size:"sm",variant:"warning",block:!0,onClick:function(){return t(j(e))}},"pesan")))))})))},N=a(105),T=a(109);var L=function(){var e=Object(A.e)((function(e){return e.cart})),t=Object(A.d)();return r.a.createElement("div",null,r.a.createElement(o.a,{className:"cart-container"}," ",e.totalItem," Barang | Rp"," ",e.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),r.a.createElement(m.a,{size:"sm",block:!0,variant:"danger",onClick:function(){return t(Object(E.d)("/order"))}},"selesai")))};var I=function(){var e=Object(A.d)();Object(n.useEffect)((function(){e(y()),e((function(e){return g.a.get("https://store-validation-api.nectico.com/api/category").then((function(t){e({type:"LOAD_CATEGORY",payload:t})}),(function(t){return e(k(t))}))}))}),[]);var t=Object(A.e)((function(e){return e.product.items})),a=Object(A.e)((function(e){return e.product.categories})),l=Object(A.e)((function(e){return e.product.next_page_url})),c=Object(A.e)((function(e){return e.product.prev_page_url})),o=Object(A.e)((function(e){return e.product.first_page_url})),s=Object(A.e)((function(e){return e.product.last_page_url})),m=Object(A.e)((function(e){return e.product.current_page})),p=Object(A.e)((function(e){return e.product.last_page})),d=Object(A.e)((function(e){return e.product.total}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"search-box",onChange:function(t){return e(function(e){return function(t){if(e)return g.a.get("https://store-validation-api.nectico.com/api/product/search/"+e).then((function(e){t({type:"LOAD_PRODUCT",payload:e})}),(function(e){return t(k(e))}));t(y())}}(t.target.value))},placeholder:"Cari nama barang"})),r.a.createElement("hr",null)),r.a.createElement("div",{className:"horizontal-scroll"},r.a.createElement(N.a,{variant:"warning",className:"horizontal-menu ",onClick:function(){return e(y())}},"Semua"),a.map((function(t){return r.a.createElement(N.a,{variant:"warning",className:"horizontal-menu ",onClick:function(){return e((a=t.id,function(e){return g.a.get("https://store-validation-api.nectico.com/api/product/category/"+a).then((function(t){e({type:"LOAD_PRODUCT",payload:t})}),(function(t){return e(k(t))}))}));var a}},t.name)}))," "),r.a.createElement("hr",null),r.a.createElement("small",{className:"small-header"},"total: ",d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")," produk, halaman ",m," dari ",p),r.a.createElement(S,{products:t})," ",r.a.createElement(i.a,null,r.a.createElement(u.a,null),r.a.createElement(u.a,null,r.a.createElement(T.a,null,r.a.createElement(T.a.First,{onClick:function(){return e(C(o))}}),r.a.createElement(T.a.Prev,{onClick:function(){return e(C(c))}}),r.a.createElement(T.a.Item,{active:!0},m),r.a.createElement(T.a.Next,{onClick:function(){return e(C(l))}}),r.a.createElement(T.a.Last,{onClick:function(){return e(C(s))}}))),r.a.createElement(u.a,null)),r.a.createElement(L,null))},D=a(10),x=a(36);var P=function(){var e=Object(n.useState)(sessionStorage.getItem("isLoggedIn")),t=Object(D.a)(e,2),a=(t[0],t[1],Object(n.useState)(sessionStorage.getItem("userName"))),l=Object(D.a)(a,2),c=(l[0],l[1],Object(n.useState)(sessionStorage.getItem("userToken"))),o=Object(D.a)(c,2),i=(o[0],o[1],Object(n.useState)(sessionStorage.getItem("userId"))),u=Object(D.a)(i,2);return u[0],u[1],r.a.createElement("div",null,r.a.createElement(x.a,{width:"100%",chartType:"BarChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Status","Nilai Transaksi (Juta)"],["Pemesanan",8175e3],["Sudah Dibayar",3792e3],["Selesai",2695e3]],options:{title:"Akumulasi Nilai Transaksi (dalam Juta)",chartArea:{width:"50%"},hAxis:{title:"Nilai Transaksi",minValue:0},vAxis:{title:"Status"},legend:{position:"none"},colors:["#f7d637"]},rootProps:{"data-testid":"1"}}),r.a.createElement("hr",null),r.a.createElement(x.a,{width:"100%",chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Bulan","Nilai Transaksi (dalam juta)"],[3,170],[4,291],[5,311],[6,470],[7,889],[8,979],[9,1010],[10,1011],[11,1210],[12,1710]],options:{hAxis:{title:"Bulan Ke",gridlines:{count:20}},vAxis:{title:"Nilai Transaksi",gridlines:{count:10}},legend:{position:"bottom"},colors:["#F04140"]},rootProps:{"data-testid":"1"}}),r.a.createElement("hr",null),r.a.createElement(x.a,{width:"100%",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Kategori Barang Terjual","Nilai Transaksi"],["Sembako",23],["Peralatan Rumah Tangga",11],["Kosmetik",7],["Alat Tulis Kantor",2],["Makanan Ringan",2]],options:{title:"Proporsi Kategori Barang Terjual",legend:{position:"bottom"},colors:["#e0440e","#0857ce","#017c07","#b703b4","#b7b7b7"]},rootProps:{"data-testid":"1"}}))};var B=function(){var e=Object(n.useState)(""),t=Object(D.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(D.a)(c,2),u=i[0],s=i[1],p=Object(A.d)();return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"Masuk"),r.a.createElement(o.a.Text,null,r.a.createElement("label",null,"email: "),r.a.createElement("br",null),r.a.createElement("input",{type:"email",onChange:function(e){return l(e.target.value)},placeholder:"email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(e){return s(e.target.value)},placeholder:"password",required:!0}),r.a.createElement("br",null)),r.a.createElement(m.a,{type:"submit",value:"Submit",onClick:function(){return p(function(e,t){var a={email:e,password:t};return function(e){e({type:"LOGIN"});return g.a.post("https://store-validation-api.nectico.com/api/auth/login",a).then((function(t){e(v(t)),e(Object(E.d)("/"))}),(function(t){return e(O(t))}))}}(a,u))}},"Kirim")),r.a.createElement("h4",null," ")))},R=a(107);a(97);var U=function(){return Object(A.e)((function(e){return e.isLogged})),Object(A.d)(),r.a.createElement("div",null,r.a.createElement(R.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(R.a.Brand,{href:"/"},"SEJUK Bandung")),r.a.createElement("small",null,"Beli barang supplier untuk koperasi"))},K=a(30),G=a(31),M=a(33),F=a(32),z=a(34),W=a(61),V=a.n(W),q=a(62),H=a.n(q),J=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(M.a)(this,Object(F.a)(t).call(this,e))).url_api="https://fkbk-api.nectico.com",a.state={},a}return Object(z.a)(t,e),Object(G.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("small",{className:"grey"},"didukung oleh"),r.a.createElement("br",null),r.a.createElement("img",{src:H.a,className:"dinas-logo",alt:"logo"}),r.a.createElement("br",null),r.a.createElement("small",{className:"grey"},"Dinas Koperasi dan UMKM Kota Bandung"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("small",{className:"grey"},"dibuat oleh"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.nectico.com"},r.a.createElement("img",{src:V.a,className:"nectico-logo",alt:"logo"})),r.a.createElement("br",null))}}]),t}(n.Component),Y=a(35),X=(a(55),a(106)),$=a(19),Q=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(M.a)(this,Object(F.a)(t).call(this,e))).url_api="https://fkbk-api.nectico.com",a.state={user:[],token:"",email:"",phone:"",password:"",repassword:""},a.signup=a.signup.bind(Object($.a)(a)),a.emailChange=a.emailChange.bind(Object($.a)(a)),a.phoneChange=a.phoneChange.bind(Object($.a)(a)),a.passwordChange=a.passwordChange.bind(Object($.a)(a)),a.repasswordChange=a.repasswordChange.bind(Object($.a)(a)),a}return Object(z.a)(t,e),Object(G.a)(t,[{key:"signup",value:function(e){this.setState({name:this.state.name,email:this.state.email,phone:this.state.phone,password:this.state.password,repassword:this.state.repassword}),alert("A name was submitted: "+this.state.name+this.state.email+this.state.password+this.state.phone+this.state.repassword),e.preventDefault()}},{key:"nameChange",value:function(e){this.setState({name:e.target.value})}},{key:"emailChange",value:function(e){this.setState({email:e.target.value})}},{key:"phoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"passwordChange",value:function(e){this.setState({password:e.target.value})}},{key:"repasswordChange",value:function(e){this.setState({repassword:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.signup},r.a.createElement(o.a,null,r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"Daftar"),r.a.createElement(o.a.Text,null,r.a.createElement("label",null,"Nama:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.nameChange,placeholder:"Nama"}),r.a.createElement("br",null),r.a.createElement("label",null,"Email:"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",value:this.state.email,onChange:this.emailChange,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("label",null,"Phone:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.phone,onChange:this.phoneChange,placeholder:"Nomor Handphone"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:this.state.password,onChange:this.passwordChange,placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("label",null,"Ulangi Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:this.state.repassword,onChange:this.repasswordChange,placeholder:"Ulangi password"}),r.a.createElement("br",null)),r.a.createElement(m.a,{type:"submit",value:"Submit"},"Kirim")),r.a.createElement("h4",null," "))))}}]),t}(n.Component),Z=a(65);var ee=function(e){var t=Object(A.d)();return r.a.createElement("div",null,r.a.createElement("h4",null,"Konfirmasi Pesanan"),e.products.map((function(e,a){return r.a.createElement(o.a,{className:"product-card"},r.a.createElement(o.a.Body,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{xs:3,s:3,md:3,lg:3,style:{textAlign:"right"}},r.a.createElement(s.a,{className:"product-icon",src:d.a,rounded:!0})),r.a.createElement(u.a,null," ",r.a.createElement("small",{className:"product-title"},e.name.toLowerCase()),r.a.createElement("br",null),r.a.createElement("small",{className:"product-price"},"Rp"," ",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("br",null),r.a.createElement(i.a,null,r.a.createElement(u.a,{size:"3"},r.a.createElement(m.a,{size:"sm",variant:"outline-dark",onClick:function(){return t(function(e,t){return function(a){a({type:"REMOVE",payload:e,position:t})}}(e,a))}},r.a.createElement(Z.a,null))),r.a.createElement(u.a,{size:"9"},r.a.createElement(m.a,{size:"sm",variant:"outline-danger",block:!0,onClick:function(){return t(j(e))}},"tambah")))))))})))};var te=function(){var e=Object(A.e)((function(e){return e.cart})),t=Object(A.d)();return r.a.createElement("div",null,r.a.createElement(ee,{products:e.items})," ",r.a.createElement("div",{className:"checkout-container"},r.a.createElement("div",{className:"checkout-title"},r.a.createElement("span",{className:"darkgrey-text"},"SUBTOTAL: "),r.a.createElement("br",null),"Rp ",e.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("small",null,"harga belum termasuk biaya kirim"),r.a.createElement(m.a,{size:"sm",variant:"danger",block:!0,onClick:function(){return t(Object(E.d)("/checkout"))}},"Selesai")))};var ae=function(){var e=Object(A.e)((function(e){return e.cart})),t=Object(n.useState)(""),a=Object(D.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(D.a)(i,2),s=u[0],p=u[1],d=Object(n.useState)(""),h=Object(D.a)(d,2),b=h[0],f=h[1],v=Object(n.useState)("Potong Gaji"),O=Object(D.a)(v,2),y=O[0],C=O[1],j=Object(A.d)();return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"Keterangan Pembeli"),r.a.createElement(o.a.Text,null,r.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},placeholder:"Nama Lengkap",required:!0}),r.a.createElement("hr",null),r.a.createElement("input",{type:"text",onChange:function(e){return f(e.target.value)},placeholder:"Nomor handphone",required:!0}),r.a.createElement("hr",null),r.a.createElement("label",null,"Alamat Lengkap:"),r.a.createElement("br",null),r.a.createElement("textarea",{onChange:function(e){return p(e.target.value)},placeholder:"Alamat",required:!0}),r.a.createElement("hr",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih metode bayar:"),r.a.createElement("select",{class:"form-control",onChange:function(e){return C(e.target.value)}},r.a.createElement("option",{value:"Potong Gaji",selected:!0},"Potong Gaji"),r.a.createElement("option",{value:"Transfer"},"Transfer"),r.a.createElement("option",{value:"Cash"},"Tunai")))),r.a.createElement(m.a,{type:"submit",value:"Submit",onClick:function(){return j(function(e,t,a,n,r,l,c){var o={name:n,phone:r,address:l,paymentMethod:c},i={item:e,totalItem:t,totalAmount:a,checkoutInput:o};return function(n){return g.a.post("https://store-validation-api.nectico.com/api/order/submit",i).then((function(r){n(w(e,t,a,o)),n((function(e){e({type:"CLEAR"})})),n(Object(E.d)("/"))}),(function(e){return n(_(e))}))}}(e.items,e.totalItem,e.totalAmount,l,b,s,y))}},"Kirim")),r.a.createElement("h4",null," ")))};var ne=function(){return r.a.createElement(X.a,null,r.a.createElement(U,null),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(Y.c,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:I}),r.a.createElement(Y.a,{path:"/dashboard",component:P}),r.a.createElement(Y.a,{path:"/login",component:B}),r.a.createElement(Y.a,{path:"/signup",component:Q}),r.a.createElement(Y.a,{path:"/order",component:te}),r.a.createElement(Y.a,{path:"/checkout",component:ae})))),r.a.createElement(J,null))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=a(15),oe=a(13),ie=a(17),ue=a(56),se=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return!0;case"LOGIN_FAILED":case"LOGOUT":return!1;default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVING":return t.payload;case"REMOVE":return[];default:return e}},pe=a(37),de=a(16),he={items:[],totalItem:0,totalAmount:0},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(de.a)({},e,{items:[].concat(Object(pe.a)(e.items),[t.payload]),totalItem:e.totalItem+1,totalAmount:e.totalAmount+t.payload.buying_price});case"REMOVE":return Object(de.a)({},e,{items:[].concat(Object(pe.a)(e.items.slice(0,t.position)),Object(pe.a)(e.items.slice(t.position+1))),totalItem:e.totalItem-1,totalAmount:e.totalAmount-t.payload.buying_price});case"CLEAR":return Object(de.a)({},e,{items:[],totalItem:0,totalAmount:0});default:return e}},Ee={items:[],totalItem:0,totalAmount:0,buyer:{}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECKOUT_SUCCESS":return Object(de.a)({},e,{items:t.payload,totalItem:t.totalItem,totalAmount:t.totalAmount,buyer:t.buyer});case"CHECKOUT_FAILED":return"FAILED";default:return e}},fe={items:[],next_page_url:"",prev_page_url:"",first_page_url:"",last_page_url:"",categories:[],current_page:0,last_page:0,total:0},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PRODUCT":return Object(de.a)({},e,{items:t.payload.data.data,next_page_url:t.payload.data.next_page_url,prev_page_url:t.payload.data.prev_page_url,first_page_url:t.payload.data.first_page_url,last_page_url:t.payload.data.last_page_url,current_page:t.payload.data.current_page,last_page:t.payload.data.last_page,total:t.payload.data.total});case"LOAD_CATEGORY":return Object(de.a)({},e,{categories:t.payload.data});case"LOAD_PRODUCT_FAILED":case"LOAD_CATEGORY_FAILED":return"FAILED";default:return e}},Oe=function(e){return Object(ie.c)({router:Object(ce.b)(e),isLogged:se,user:me,product:ve,cart:ge,order:be})},ye=a(64),Ce=Object(oe.a)();var je=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d;return Object(ie.e)(Oe(Ce),e,t(Object(ie.a)(ye.a,Object(ue.a)(Ce))))}();c.a.render(r.a.createElement(A.a,{store:je},r.a.createElement(ce.a,{history:Ce},r.a.createElement(ne,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):le(t,e)}))}}()}},[[69,1,2]]]);
//# sourceMappingURL=main.8a39aaff.chunk.js.map