(function(){"use strict";var t={3731:function(t,e,n){var i=n(9242),l=n(837),s=(n(4415),n(3396));function r(t,e,n,i,l,r){const u=(0,s.up)("HelloWorld");return(0,s.wg)(),(0,s.j4)(u)}var u=n(7139);const o={class:"common-layout"},h=(0,s._)("h1",null,"内存管理项目",-1),a={class:"page_table"},f=(0,s._)("h2",null,"页表项区",-1),_={class:"info"},c={class:"info1"},m=(0,s._)("h2",null,"执行区",-1),b=(0,s.Uk)("逐步执行"),d=(0,s.Uk)("连续执行"),p=(0,s._)("b",null,"当前执行指令",-1),g=(0,s._)("p",null,[(0,s._)("b",null,"当前执行情况：")],-1),w={key:0},y={key:1},v={key:2},x={key:3},k=(0,s._)("b",null,"缺页率",-1),z={class:"info2"},U=(0,s._)("h2",null,"主存块",-1);function W(t,e,n,i,l,r){const W=(0,s.up)("el-header"),O=(0,s.up)("el-button"),H=(0,s.up)("el-main"),D=(0,s.up)("el-container");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{class:"header"},{default:(0,s.w5)((()=>[h])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(H,{class:"main",height:"500px"},{default:(0,s.w5)((()=>[(0,s._)("div",a,[f,((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(2,(t=>(0,s._)("div",{key:t},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.number_page/2,(e=>((0,s.wg)(),(0,s.iD)("label",{key:e,class:"page_table_label"},[(0,s.Uk)((0,u.zw)(this.page_table[e-1+(t-1)*this.number_page/2].logic)+" ",1),(0,s.Wm)(O,{type:"primary",disabled:"",class:"pagetable_button"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(this.page_table[e-1+(t-1)*this.number_page/2].physical),1)])),_:2},1024)])))),128))]))),64))]),(0,s._)("div",_,[(0,s._)("div",c,[m,(0,s.Wm)(O,{type:"success",onClick:r.next,disabled:null!=this.timer},{default:(0,s.w5)((()=>[b])),_:1},8,["onClick","disabled"]),(0,s.Wm)(O,{type:"success",onClick:r.autonext},{default:(0,s.w5)((()=>[d])),_:1},8,["onClick"]),(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[p,(0,s.Uk)("为"+(0,u.zw)(this.ins_count>0?this.cur_instru:"  null"),1)])]),(0,s._)("li",null,[g,this.cur_flag?((0,s.wg)(),(0,s.iD)("p",w,"指令所在页已在主存块中，位于主存块 "+(0,u.zw)(this.page_table[parseInt(this.cur_instru/10)].physical),1)):this.buffer_list.length()==this.memory_buffer.length&&-1!=this.buffer_move_out?((0,s.wg)(),(0,s.iD)("p",y," 指令所在页不在主存块中，调出主存块"+(0,u.zw)(this.ins_count>0?this.buffer_move_out:"NaN")+"中的页",1)):this.ins_count>0?((0,s.wg)(),(0,s.iD)("p",v,"指令所在页不在主存块中，直接顺序插入下一主存块")):((0,s.wg)(),(0,s.iD)("p",x," 待执行"))]),(0,s._)("li",null,[(0,s._)("p",null,[k,(0,s.Uk)("："+(0,u.zw)(Number(this.miss_count/this.ins_count*100).toFixed(1)+"%"),1)])])])]),(0,s._)("div",z,[U,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("label",null,[(0,s.Uk)((0,u.zw)(this.memory_buffer[0].id)+" ",1),(0,s.Wm)(O,{type:"warning",disabled:"",style:{width:"60px"}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(this.memory_buffer[0].content),1)])),_:1})])]),(0,s._)("li",null,[(0,s._)("label",null,[(0,s.Uk)((0,u.zw)(this.memory_buffer[1].id)+" ",1),(0,s.Wm)(O,{type:"warning",disabled:"",style:{width:"60px"}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(this.memory_buffer[1].content),1)])),_:1})])]),(0,s._)("li",null,[(0,s._)("label",null,[(0,s.Uk)((0,u.zw)(this.memory_buffer[2].id)+" ",1),(0,s.Wm)(O,{type:"warning",disabled:"",style:{width:"60px"}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(this.memory_buffer[2].content),1)])),_:1})])]),(0,s._)("li",null,[(0,s._)("label",null,[(0,s.Uk)((0,u.zw)(this.memory_buffer[3].id)+" ",1),(0,s.Wm)(O,{type:"warning",disabled:"",style:{width:"60px"}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,u.zw)(this.memory_buffer[3].content),1)])),_:1})])])])])])])),_:1})])),_:1})])),_:1})])),_:1})])}class O{constructor(){this.item=0,this.next=null}length(){return this.item}append(t){let e=this;while(null!=e.next)e=e.next;e.next=new O,e.next.item=t,this.item++}deleteLast(){if(0==this.length())return;let t=this;while(null!=t.next.next)t=t.next;let e=t.next.item;return t.next=null,this.item--,e}findIndex(t){let e=this.next;for(let n=1;null!=e;++n){if(e.item==t)return n;e=e.next}return-1}movetoHead(t){if(t>this.length()||0==t)return!1;let e=this;for(let i=0;i<t-1;i++)e=e.next;let n=e.next;return e.next=n.next,n.next=this.next,this.next=n,!0}insertHead(t){let e=this.next;this.next=new O,this.next.item=t,this.next.next=e,this.item++}}var H=O,D={data(){return{cur_instru:-1,cur_flag:!1,number_ins:320,number_page:32,number_buffer:4,ins_count:0,miss_count:0,memory_buffer:[],buffer_list:new H,instru_sequence:[],page_table:[],buffer_move_out:-1,page_move_in:-1,timer:null}},created(){this.init()},methods:{init(){let t=this.randomNums(this.number_buffer,1,10);t=t.map(this.f_big);for(let i=0;i<this.number_buffer;i++){let e={id:i,content:"null",start:t[i]};this.memory_buffer.push(e)}for(let i=0;i<this.number_page;i++){let t={logic:i,physical:"null"};this.page_table.push(t)}let e=this.number_ins-1,n=0;while(n<this.number_ins){let t=this.randomNums(1,0,e);this.instru_sequence.push(t),this.instru_sequence.push(t+1);let i=this.randomNums(1,t+2,this.number_ins-1);this.instru_sequence.push(i),this.instru_sequence.push(i+1),e=i+1,n+=4}},isStored(t){return"null"!=this.page_table[t].physical?this.page_table[t].physical:-1},next(){this.cur_instru=this.instru_sequence[this.ins_count];let t=parseInt(this.cur_instru/10);this.page_move_in=t;let e=this.isStored(t);if(this.ins_count++,console.log(1),console.log("id:",e),-1==e&&this.buffer_list.length()<this.memory_buffer.length){console.log(2),this.cur_flag=!1,this.miss_count++;let e=this.buffer_list.length();console.log(e),this.memory_buffer[e].content=t,this.buffer_list.insertHead(e),this.page_table[t].physical=e,console.log(4)}else if(-1==e&&this.buffer_list.length()==this.memory_buffer.length)this.cur_flag=!1,this.miss_count++,this.buffer_move_out=this.buffer_list.deleteLast(),this.buffer_list.insertHead(this.buffer_move_out),console.log(this.buffer_move_out),console.log(this.memory_buffer),this.memory_buffer[this.buffer_move_out].content=t,this.page_table[t].physical=this.buffer_move_out,console.log(3);else{this.cur_flag=!0;let t=this.buffer_list.findIndex(e);this.buffer_list.movetoHead(t)}},autonext(){if(null==this.timer)this.timer=setInterval(this.autonext,2e3);else{if(this.ins_count==this.number_ins)return clearInterval(this.timer),void(this.timer=null);this.next()}},randomNums(t,e,n){if(1==t)return Math.ceil(Math.random()*(n-e)+e);var i=[];for(let s=0;s<t;s++){var l=Math.ceil(Math.random()*(n-e)+e);while(this.isExist(i,l))l=Math.ceil(Math.random()*(n-e)+e);i[s]=l}return i},isExist(t,e){for(var n=0;n<t.length;n++)if(t[n]==e)return!0;return!1},f_big(t){return 10*t}}},j=n(89);const M=(0,j.Z)(D,[["render",W]]);var N=M,q={name:"App",components:{HelloWorld:N}};const C=(0,j.Z)(q,[["render",r]]);var I=C;const E=(0,i.ri)(I);E.use(l.Z),E.mount("#app")}},e={};function n(i){var l=e[i];if(void 0!==l)return l.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,l,s){if(!i){var r=1/0;for(a=0;a<t.length;a++){i=t[a][0],l=t[a][1],s=t[a][2];for(var u=!0,o=0;o<i.length;o++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[o])}))?i.splice(o--,1):(u=!1,s<r&&(r=s));if(u){t.splice(a--,1);var h=l();void 0!==h&&(e=h)}}return e}s=s||0;for(var a=t.length;a>0&&t[a-1][2]>s;a--)t[a]=t[a-1];t[a]=[i,l,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var l,s,r=i[0],u=i[1],o=i[2],h=0;if(r.some((function(e){return 0!==t[e]}))){for(l in u)n.o(u,l)&&(n.m[l]=u[l]);if(o)var a=o(n)}for(e&&e(i);h<r.length;h++)s=r[h],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(a)},i=self["webpackChunkmemory_manage"]=self["webpackChunkmemory_manage"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3731)}));i=n.O(i)})();
//# sourceMappingURL=app.469478fa.js.map