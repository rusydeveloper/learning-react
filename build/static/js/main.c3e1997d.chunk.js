(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/open-box.3981d62d.png"},61:function(e,t,a){e.exports=a.p+"static/media/logo-bandung-dinas.0b383329.png"},62:function(e,t,a){e.exports=a.p+"static/media/logo-sejuk.90efd7e5.png"},63:function(e,t,a){e.exports=a.p+"static/media/logo-powered-nectico.dd164326.png"},69:function(e,t,a){e.exports=a(98)},74:function(e,t,a){},75:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(74),a(75),a(11)),o=a(101),u=a(22),s=a.n(u),m=a(20),d=a.n(m),p=a(7),g=a(23),E=a.n(g),h=function(e){return E()("Berhasil!","Anda berhasil masuk","success"),{type:"LOGIN_SUCCESS",payload:e}},b=function(e){return E()("Gagal!","Email atau password yang anda masukan salah","error"),{type:"LOGIN_FAILED",payload:e}},f=function(){return function(e){return d.a.get("https://store-validation-api.nectico.com/api/product").then((function(t){e({type:"LOAD_PRODUCT",payload:t})}),(function(t){return e(y(t))}))}},v=function(e){return function(t){return d.a.get(e).then((function(e){t({type:"LOAD_PRODUCT",payload:e})}),(function(e){return t(y(e))}))}},y=function(){return E()("Gagal!","Maaf, Terjadi Kesalahan pada aplikasi","error"),{type:"LOAD_PRODUCT_FAILED"}},O=function(e,t,a,n){return E()("Berhasil Memesan!","Tunggu tim kami menghubungi Anda","success"),{type:"CHECKOUT_SUCCESS",payload:e,totalItem:t,totalAmount:a,buyer:n}},_=function(){return E()("Gagal!","Maaf, Pemesanan Anda Gagal","error"),{type:"CHECKOUT_FAILED"}},C=a(3);var j=function(e){var t=Object(C.d)(),a=Object(n.useState)(0),l=Object(i.a)(a,2),c=l[0],u=l[1];return r.a.createElement("div",{class:"card card-product"},e.product.image?r.a.createElement("div",null," ",r.a.createElement("img",{class:"card-img-top product-icon image-fit ",src:"https://store-validation-api.nectico.com/"+e.product.image,alt:"image",onError:function(e){e.target.src=s.a,e.target.alt="broken"}})):r.a.createElement("img",{class:"card-img-top product-icon",src:s.a,alt:"no link"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("p",{class:"card-text"},r.a.createElement("div",{className:"product-title"},e.product.name),r.a.createElement("div",{className:"product-price"},"Rp"," ",e.product.buying_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,{size:"sm",variant:"warning",block:!0,onClick:function(){t(function(e){var t={id:e.id,user_id:e.user_id,business_id:e.business_id,barcode:e.barcode,name:e.name,type:e.type,price:e.price,buying_price:e.buying_price,stock:e.stock,status:e.status,unique_id:e.unique_id,totalSubitem:1,totalSubamount:e.buying_price,image:e.image};return function(e){e({type:"ADD",payload:t})}}(e.product)),u(c+1)}},"pesan")))))};var k=function(e){var t=Object(C.e)((function(e){return e.cart}));return r.a.createElement("div",null,r.a.createElement("div",{class:"flex-container"},e.products.map((function(e){return r.a.createElement("div",null,r.a.createElement(j,{product:e,cart:t}))}))))},w=a(106),S=a(102),A=a(103),N=a(104),T=a(108),I=a(107);var L=function(){var e=Object(C.e)((function(e){return e.cart})),t=Object(C.d)();return r.a.createElement("div",null,e.totalItem>0?r.a.createElement(I.a,{className:"cart-container"}," ",e.totalItem," Barang | Rp"," ",e.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),r.a.createElement(o.a,{size:"sm",block:!0,variant:"warning",onClick:function(){return t(Object(p.d)("/order"))}},"selesai")):"")};var x=function(){var e=Object(C.d)();Object(n.useEffect)((function(){e(f()),e((function(e){return d.a.get("https://store-validation-api.nectico.com/api/category").then((function(t){e({type:"LOAD_CATEGORY",payload:t})}),(function(t){return e(y(t))}))}))}),[e]);var t=Object(C.e)((function(e){return e.product.items})),a=Object(C.e)((function(e){return e.product.categories})),l=Object(C.e)((function(e){return e.product.next_page_url})),c=Object(C.e)((function(e){return e.product.prev_page_url})),i=Object(C.e)((function(e){return e.product.first_page_url})),o=Object(C.e)((function(e){return e.product.last_page_url})),u=Object(C.e)((function(e){return e.product.current_page})),s=Object(C.e)((function(e){return e.product.last_page})),m=Object(C.e)((function(e){return e.product.total}));return r.a.createElement("div",null,r.a.createElement(w.a,{sticky:"top"},r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"search-box",onChange:function(t){return e(function(e){return function(t){if(e)return d.a.get("https://store-validation-api.nectico.com/api/product/search/"+e).then((function(e){t({type:"LOAD_PRODUCT",payload:e})}),(function(e){return t(y(e))}));t(f())}}(t.target.value))},placeholder:"Cari nama barang"}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"horizontal-scroll"},r.a.createElement(S.a,{variant:"warning",className:"horizontal-menu ",onClick:function(){return e(f())}},"Semua"),a.map((function(t){return r.a.createElement(S.a,{variant:"warning",className:"horizontal-menu ",onClick:function(){return e((a=t.id,function(e){return d.a.get("https://store-validation-api.nectico.com/api/product/category/"+a).then((function(t){e({type:"LOAD_PRODUCT",payload:t})}),(function(t){return e(y(t))}))}));var a}},t.name)}))," "),r.a.createElement("hr",null),r.a.createElement("small",{className:"small-header"},"total: ",m.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")," produk, halaman ",u," dari ",s),r.a.createElement(k,{products:t})," ",r.a.createElement(A.a,null,r.a.createElement(N.a,null),r.a.createElement(N.a,null,r.a.createElement(T.a,null,r.a.createElement(T.a.First,{onClick:function(){return e(v(i))}}),r.a.createElement(T.a.Prev,{onClick:function(){return e(v(c))}}),r.a.createElement(T.a.Item,{active:!0},u),r.a.createElement(T.a.Next,{onClick:function(){return e(v(l))}}),r.a.createElement(T.a.Last,{onClick:function(){return e(v(o))}}))),r.a.createElement(N.a,null)),r.a.createElement(L,null))},D=a(37);var P=function(){return r.a.createElement("div",null,r.a.createElement(D.a,{width:"100%",chartType:"BarChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Status","Nilai Transaksi (Juta)"],["Pemesanan",8175e3],["Sudah Dibayar",3792e3],["Selesai",2695e3]],options:{title:"Akumulasi Nilai Transaksi (dalam Juta)",chartArea:{width:"50%"},hAxis:{title:"Nilai Transaksi",minValue:0},vAxis:{title:"Status"},legend:{position:"none"},colors:["#f7d637"]},rootProps:{"data-testid":"1"}}),r.a.createElement("hr",null),r.a.createElement(D.a,{width:"100%",chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Bulan","Nilai Transaksi (dalam juta)"],[3,170],[4,291],[5,311],[6,470],[7,889],[8,979],[9,1010],[10,1011],[11,1210],[12,1710]],options:{hAxis:{title:"Bulan Ke",gridlines:{count:20}},vAxis:{title:"Nilai Transaksi",gridlines:{count:10}},legend:{position:"bottom"},colors:["#F04140"]},rootProps:{"data-testid":"1"}}),r.a.createElement("hr",null),r.a.createElement(D.a,{width:"100%",chartType:"PieChart",loader:r.a.createElement("div",null,"Loading Chart"),data:[["Kategori Barang Terjual","Nilai Transaksi"],["Sembako",23],["Peralatan Rumah Tangga",11],["Kosmetik",7],["Alat Tulis Kantor",2],["Makanan Ringan",2]],options:{title:"Proporsi Kategori Barang Terjual",legend:{position:"bottom"},colors:["#e0440e","#0857ce","#017c07","#b703b4","#b7b7b7"]},rootProps:{"data-testid":"1"}}))};var U=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(i.a)(c,2),s=u[0],m=u[1],g=Object(C.d)();return r.a.createElement("div",null,r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,"Masuk"),r.a.createElement(I.a.Text,null,r.a.createElement("label",null,"email: "),r.a.createElement("br",null),r.a.createElement("input",{type:"email",onChange:function(e){return l(e.target.value)},placeholder:"email",required:!0}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:function(e){return m(e.target.value)},placeholder:"password",required:!0}),r.a.createElement("br",null)),r.a.createElement(o.a,{type:"submit",value:"Submit",onClick:function(){return g(function(e,t){var a={email:e,password:t};return function(e){e({type:"LOGIN"});return d.a.post("https://store-validation-api.nectico.com/api/auth/login",a).then((function(t){e(h(t)),e(Object(p.d)("/"))}),(function(t){return e(b(t))}))}}(a,s))}},"Kirim")),r.a.createElement("h4",null," ")))},R=a(61),B=a.n(R),K=a(62),G=a.n(K),q=a(63),M=a.n(q);var z=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-container-brand"},r.a.createElement("div",null,r.a.createElement("img",{src:B.a,className:"dinas-logo",alt:"logo"})),r.a.createElement("div",null,r.a.createElement("img",{src:G.a,className:"sejuk-logo",alt:"logo"})),r.a.createElement("div",null,r.a.createElement("img",{src:M.a,className:"powered-nectico-logo",alt:"logo"}))),r.a.createElement("small",null,"Beli barang supplier untuk koperasi"))},F=a(31),W=a(32),V=a(36),H=a(33),J=a(35),Y=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(V.a)(this,Object(H.a)(t).call(this,e))).url_api="https://fkbk-api.nectico.com",a.state={},a}return Object(J.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"})}}]),t}(n.Component),X=a(34),$=(a(55),a(105)),Q=a(19),Z=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(V.a)(this,Object(H.a)(t).call(this,e))).url_api="https://fkbk-api.nectico.com",a.state={user:[],token:"",email:"",phone:"",password:"",repassword:""},a.signup=a.signup.bind(Object(Q.a)(a)),a.emailChange=a.emailChange.bind(Object(Q.a)(a)),a.phoneChange=a.phoneChange.bind(Object(Q.a)(a)),a.passwordChange=a.passwordChange.bind(Object(Q.a)(a)),a.repasswordChange=a.repasswordChange.bind(Object(Q.a)(a)),a}return Object(J.a)(t,e),Object(W.a)(t,[{key:"signup",value:function(e){this.setState({name:this.state.name,email:this.state.email,phone:this.state.phone,password:this.state.password,repassword:this.state.repassword}),alert("A name was submitted: "+this.state.name+this.state.email+this.state.password+this.state.phone+this.state.repassword),e.preventDefault()}},{key:"nameChange",value:function(e){this.setState({name:e.target.value})}},{key:"emailChange",value:function(e){this.setState({email:e.target.value})}},{key:"phoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"passwordChange",value:function(e){this.setState({password:e.target.value})}},{key:"repasswordChange",value:function(e){this.setState({repassword:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.signup},r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,"Daftar"),r.a.createElement(I.a.Text,null,r.a.createElement("label",null,"Nama:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.nameChange,placeholder:"Nama"}),r.a.createElement("br",null),r.a.createElement("label",null,"Email:"),r.a.createElement("br",null),r.a.createElement("input",{type:"email",value:this.state.email,onChange:this.emailChange,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("label",null,"Phone:"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.phone,onChange:this.phoneChange,placeholder:"Nomor Handphone"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:this.state.password,onChange:this.passwordChange,placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("label",null,"Ulangi Password:"),r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:this.state.repassword,onChange:this.repasswordChange,placeholder:"Ulangi password"}),r.a.createElement("br",null)),r.a.createElement(o.a,{type:"submit",value:"Submit"},"Kirim")),r.a.createElement("h4",null," "))))}}]),t}(n.Component),ee=a(66);var te=function(e){var t=Object(C.d)();return r.a.createElement("div",null,r.a.createElement(I.a,{className:"product-card"},r.a.createElement(I.a.Body,null,r.a.createElement(A.a,null,r.a.createElement(N.a,{xs:6,s:6,md:6,lg:6,style:{textAlign:"right"}},e.cart.image?r.a.createElement("div",null," ",r.a.createElement("img",{class:"card-img-top product-icon image-fit ",src:"https://store-validation-api.nectico.com/"+e.cart.image,alt:"",onError:function(e){e.target.src=s.a}})):r.a.createElement("img",{class:"card-img-top product-icon",src:s.a,alt:""})),r.a.createElement(N.a,null," ",r.a.createElement("small",{className:"product-title"},e.cart.name),r.a.createElement("br",null),r.a.createElement("small",{className:"product-price"},e.cart.totalSubitem," x Rp"," ",e.cart.buying_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("br",null),r.a.createElement("small",{className:"product-price"},"Subtotal:",r.a.createElement("br",null),e.cart.totalSubamount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("br",null))),r.a.createElement(A.a,null,r.a.createElement(N.a,{size:"3"},r.a.createElement(o.a,{size:"sm",variant:"outline-dark",onClick:function(){return t((a=e.cart,n=e.index,function(e){e({type:"REMOVE",payload:a,position:n})}));var a,n}},r.a.createElement(ee.a,null))),r.a.createElement(N.a,{size:"9"},r.a.createElement("div",null,r.a.createElement(o.a,{size:"sm",variant:"light",onClick:function(){t(function(e){var t={id:e.id,user_id:e.user_id,business_id:e.business_id,barcode:e.barcode,name:e.name,type:e.type,price:e.price,buying_price:e.buying_price,stock:e.stock,status:e.status,unique_id:e.unique_id,image:e.image};return function(e){e({type:"MINUS",payload:t})}}(e.cart))}},"-"," "),r.a.createElement("span",{class:"count-product-order"},e.cart.totalSubitem),r.a.createElement(o.a,{size:"sm",variant:"warning",onClick:function(){t(function(e){var t={id:e.id,user_id:e.user_id,business_id:e.business_id,barcode:e.barcode,name:e.name,type:e.type,price:e.price,buying_price:e.buying_price,stock:e.stock,status:e.status,unique_id:e.unique_id,image:e.image};return function(e){e({type:"PLUS",payload:t})}}(e.cart))}},"+"," ")))))))};var ae=function(e){return Object(C.d)(),r.a.createElement("div",null,r.a.createElement("h4",null,"Konfirmasi Pesanan"),e.carts.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(te,{cart:e,index:t}))})))};var ne=function(){var e=Object(C.e)((function(e){return e.cart})),t=Object(C.d)();return r.a.createElement("div",null,r.a.createElement(ae,{carts:e.items})," ",r.a.createElement("div",{className:"checkout-container"},r.a.createElement("div",{className:"checkout-title"},r.a.createElement("span",{className:"darkgrey-text"},"TOTAL: "),r.a.createElement("br",null),"Rp ",e.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")),r.a.createElement("small",null,"harga belum termasuk biaya kirim"),r.a.createElement(o.a,{size:"sm",variant:"warning",block:!0,onClick:function(){return t(Object(p.d)("/checkout"))}},"Selesai")))};var re=function(){var e=Object(C.e)((function(e){return e.cart})),t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(""),s=Object(i.a)(u,2),m=s[0],g=s[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),b=h[0],f=h[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),j=y[0],k=y[1],w=Object(n.useState)("Potong Gaji"),S=Object(i.a)(w,2),A=S[0],N=S[1],T=Object(C.d)();return r.a.createElement("div",null,r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,"Keterangan Pembeli"),r.a.createElement(I.a.Text,null,r.a.createElement("input",{type:"text",onChange:function(e){return c(e.target.value)},placeholder:"Nama Lengkap",required:!0}),r.a.createElement("hr",null),r.a.createElement("input",{type:"text",onChange:function(e){return g(e.target.value)},placeholder:"Nama Koperasi",required:!0}),r.a.createElement("hr",null),r.a.createElement("input",{type:"text",onChange:function(e){return k(e.target.value)},placeholder:"Nomor handphone",required:!0}),r.a.createElement("hr",null),r.a.createElement("label",null,"Alamat Lengkap:"),r.a.createElement("br",null),r.a.createElement("textarea",{onChange:function(e){return f(e.target.value)},placeholder:"Alamat",required:!0}),r.a.createElement("hr",null),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Pilih metode bayar:"),r.a.createElement("select",{class:"form-control",onChange:function(e){return N(e.target.value)}},r.a.createElement("option",{value:"Transfer"},"Transfer"),r.a.createElement("option",{value:"Cash"},"Tunai")))),r.a.createElement(o.a,{type:"submit",value:"Submit",onClick:function(){return T(function(e,t,a,n,r,l,c,i){var o={name:n,phone:r,address:l,paymentMethod:c,cooperative:i},u={item:e,totalItem:t,totalAmount:a,checkoutInput:o};return function(n){return d.a.post("https://store-validation-api.nectico.com/api/order/submit",u).then((function(r){n(O(e,t,a,o)),n((function(e){e({type:"CLEAR"})})),n(Object(p.d)("/"))}),(function(e){return n(_(e))}))}}(e.items,e.totalItem,e.totalAmount,l,j,b,A,m))}},"Kirim")),r.a.createElement("h4",null," ")))};var le=function(){return r.a.createElement($.a,null,r.a.createElement(z,null),r.a.createElement(A.a,null,r.a.createElement(N.a,null,r.a.createElement(X.c,null,r.a.createElement(X.a,{exact:!0,path:"/",component:x}),r.a.createElement(X.a,{path:"/dashboard",component:P}),r.a.createElement(X.a,{path:"/login",component:U}),r.a.createElement(X.a,{path:"/signup",component:Z}),r.a.createElement(X.a,{path:"/order",component:ne}),r.a.createElement(X.a,{path:"/checkout",component:re})))),r.a.createElement(Y,null))},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var oe=a(16),ue=a(14),se=a(17),me=a(56),de=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return!0;case"LOGIN_FAILED":case"LOGOUT":return!1;default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVING":return t.payload;case"REMOVE":return[];default:return e}},ge=a(24),Ee=a(10),he={items:[],totalItem:0,totalAmount:0},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(Ee.a)({},e,{items:[].concat(Object(ge.a)(e.items),[t.payload]),totalItem:e.totalItem+1,totalAmount:e.totalAmount+t.payload.buying_price});case"PLUS":var a;for(a=0;a<e.items.length;a++)t.payload.id===e.items[a].id&&(e.items[a].totalSubitem+=1,e.items[a].totalSubamount+=e.items[a].buying_price);return Object(Ee.a)({},e,{items:e.items,totalItem:e.totalItem+1,totalAmount:e.totalAmount+t.payload.buying_price});case"MINUS":var n;for(n=0;n<e.items.length;n++)if(t.payload.id===e.items[n].id)return e.items[n].totalSubitem>1?(e.items[n].totalSubitem-=1,e.items[n].totalSubamount-=e.items[n].buying_price,Object(Ee.a)({},e,{items:e.items,totalItem:e.totalItem-1,totalAmount:e.totalAmount-t.payload.buying_price})):(e.items[n].totalSubitem-=1,e.items[n].totalSubamount-=e.items[n].buying_price,Object(Ee.a)({},e,{items:[].concat(Object(ge.a)(e.items.slice(0,n)),Object(ge.a)(e.items.slice(n+1))),totalItem:e.totalItem-1,totalAmount:e.totalAmount-t.payload.buying_price}));break;case"REMOVE":return Object(Ee.a)({},e,{items:[].concat(Object(ge.a)(e.items.slice(0,t.position)),Object(ge.a)(e.items.slice(t.position+1))),totalItem:e.totalItem-t.payload.totalSubitem,totalAmount:e.totalAmount-t.payload.totalSubamount});case"CLEAR":return Object(Ee.a)({},e,{items:[],totalItem:0,totalAmount:0});default:return e}},fe={items:[],totalItem:0,totalAmount:0,buyer:{}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECKOUT_SUCCESS":return Object(Ee.a)({},e,{items:t.payload,totalItem:t.totalItem,totalAmount:t.totalAmount,buyer:t.buyer});case"CHECKOUT_FAILED":return"FAILED";default:return e}},ye={items:[],next_page_url:"",prev_page_url:"",first_page_url:"",last_page_url:"",categories:[],current_page:0,last_page:0,total:0},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PRODUCT":return Object(Ee.a)({},e,{items:t.payload.data.data,next_page_url:t.payload.data.next_page_url,prev_page_url:t.payload.data.prev_page_url,first_page_url:t.payload.data.first_page_url,last_page_url:t.payload.data.last_page_url,current_page:t.payload.data.current_page,last_page:t.payload.data.last_page,total:t.payload.data.total});case"LOAD_CATEGORY":return Object(Ee.a)({},e,{categories:t.payload.data});case"LOAD_PRODUCT_FAILED":case"LOAD_CATEGORY_FAILED":return"FAILED";default:return e}},_e=function(e){return Object(se.c)({router:Object(oe.b)(e),isLogged:de,user:pe,product:Oe,cart:be,order:ve})},Ce=a(65),je=Object(ue.a)();var ke=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d;return Object(se.e)(_e(je),e,t(Object(se.a)(Ce.a,Object(me.a)(je))))}();c.a.render(r.a.createElement(C.a,{store:ke},r.a.createElement(oe.a,{history:je},r.a.createElement(le,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(t,e)}))}}()}},[[69,1,2]]]);
//# sourceMappingURL=main.c3e1997d.chunk.js.map