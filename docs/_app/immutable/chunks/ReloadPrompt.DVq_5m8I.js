import{s as j,Y as J,Z as Q,b as k,f as m,m as d,i as w,h as b,n as O,y as se,e as A,c as R,_ as P,x as X,z as le,A as ae,B as ne,I as ce,$ as re,t as q,a as F,d as K,g as S,j as ue,K as me,q as M,k as x}from"./scheduler.CvqrY79o.js";import{S as Y,i as Z,t as $,b as g,c as W,a as y,m as z,f as pe,d as B,g as oe,e as fe}from"./index.D2mYl4Nr.js";import{t as V}from"./Link.svelte_svelte_type_style_lang.ITA7T62x.js";import{C as _e,f as de}from"./0.BT4i3Ef5.js";const $e=()=>({needRefresh:!1,updateServiceWorker:!1,offlineReady:!1});function he(n){let t,l;return{c(){t=J("svg"),l=J("path"),this.h()},l(e){t=Q(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var s=k(t);l=Q(s,"path",{fill:!0,d:!0}),k(l).forEach(m),s.forEach(m),this.h()},h(){d(l,"fill","currentColor"),d(l,"d","M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4l4-4v8zm0-12V0l4 4l-4 4z"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"width","1em"),d(t,"height","1em"),d(t,"viewBox","0 0 20 20")},m(e,s){w(e,t,s),b(t,l)},p:O,i:O,o:O,d(e){e&&m(t)}}}class ge extends Y{constructor(t){super(),Z(this,t,null,he,j,{})}}function ve(n){let t,l,e,s;const a=n[3].default,f=se(a,n,n[2],null);return{c(){t=A("div"),f&&f.c(),this.h()},l(r){t=R(r,"DIV",{role:!0,class:!0,tabindex:!0});var i=k(t);f&&f.l(i),i.forEach(m),this.h()},h(){d(t,"role","button"),d(t,"class","btn svelte-1btitu1"),d(t,"tabindex","0"),P(t,"primary",!n[0]),P(t,"flat",n[0])},m(r,i){w(r,t,i),f&&f.m(t,null),l=!0,e||(s=[X(t,"click",n[1]),X(t,"keyup",n[1])],e=!0)},p(r,[i]){f&&f.p&&(!l||i&4)&&le(f,a,r,r[2],l?ne(a,r[2],i,null):ae(r[2]),null),(!l||i&1)&&P(t,"primary",!r[0]),(!l||i&1)&&P(t,"flat",r[0])},i(r){l||($(f,r),l=!0)},o(r){g(f,r),l=!1},d(r){r&&m(t),f&&f.d(r),e=!1,ce(s)}}}function be(n,t,l){let{$$slots:e={},$$scope:s}=t,{flat:a=!1}=t;const f=re();function r(){f("click")}return n.$$set=i=>{"flat"in i&&l(0,a=i.flat),"$$scope"in i&&l(2,s=i.$$scope)},[a,r,s,e]}class ie extends Y{constructor(t){super(),Z(this,t,be,ve,j,{flat:0})}}function we(n){var f,r,i;let t=(((i=(r=(f=V)==null?void 0:f.i18n)==null?void 0:r.pwa)==null?void 0:i.close)||Ae)+"",l,e,s,a;return s=new _e({}),{c(){l=q(t),e=F(),W(s.$$.fragment)},l(o){l=K(o,t),e=S(o),y(s.$$.fragment,o)},m(o,u){w(o,l,u),w(o,e,u),z(s,o,u),a=!0},p:O,i(o){a||($(s.$$.fragment,o),a=!0)},o(o){g(s.$$.fragment,o),a=!1},d(o){o&&(m(l),m(e)),B(s,o)}}}function ke(n){var T,L,I;let t,l,e=(((I=(L=(T=V)==null?void 0:T.i18n)==null?void 0:L.pwa)==null?void 0:I.tip)||Ee)+"",s,a,f,r,i,o,u,D,h,C,v;const E=n[2].default,p=se(E,n,n[3],null);return h=new ie({props:{flat:!0,$$slots:{default:[we]},$$scope:{ctx:n}}}),h.$on("click",n[1]),{c(){t=A("div"),l=A("div"),s=q(e),a=F(),f=A("div"),r=A("span"),i=q(n[0]),o=F(),u=A("div"),p&&p.c(),D=F(),W(h.$$.fragment),this.h()},l(c){t=R(c,"DIV",{class:!0,role:!0});var _=k(t);l=R(_,"DIV",{class:!0});var N=k(l);s=K(N,e),N.forEach(m),a=S(_),f=R(_,"DIV",{class:!0});var G=k(f);r=R(G,"SPAN",{});var H=k(r);i=K(H,n[0]),H.forEach(m),G.forEach(m),o=S(_),u=R(_,"DIV",{class:!0});var U=k(u);p&&p.l(U),D=S(U),y(h.$$.fragment,U),U.forEach(m),_.forEach(m),this.h()},h(){d(l,"class","pwa-title svelte-d5pmgn"),d(f,"class","message svelte-d5pmgn"),d(u,"class","actions svelte-d5pmgn"),d(t,"class","pwa-toast svelte-d5pmgn"),d(t,"role","alert")},m(c,_){w(c,t,_),b(t,l),b(l,s),b(t,a),b(t,f),b(f,r),b(r,i),b(t,o),b(t,u),p&&p.m(u,null),b(u,D),z(h,u,null),v=!0},p(c,[_]){(!v||_&1)&&ue(i,c[0]),p&&p.p&&(!v||_&8)&&le(p,E,c,c[3],v?ne(E,c[3],_,null):ae(c[3]),null);const N={};_&8&&(N.$$scope={dirty:_,ctx:c}),h.$set(N)},i(c){v||($(p,c),$(h.$$.fragment,c),c&&(C||me(()=>{C=pe(t,de,{}),C.start()})),v=!0)},o(c){g(p,c),g(h.$$.fragment,c),v=!1},d(c){c&&m(t),p&&p.d(c),B(h)}}}const Ee="Tip",Ae="Close";function Re(n,t,l){let{$$slots:e={},$$scope:s}=t,{message:a}=t;const f=re();function r(){f("close")}return n.$$set=i=>{"message"in i&&l(0,a=i.message),"$$scope"in i&&l(3,s=i.$$scope)},[a,r,e,s]}class De extends Y{constructor(t){super(),Z(this,t,Re,ke,j,{message:0})}}function ee(n){let t,l;return t=new De({props:{message:n[1],$$slots:{default:[Te]},$$scope:{ctx:n}}}),t.$on("close",n[6]),{c(){W(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const a={};s&2&&(a.message=e[1]),s&2049&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function te(n){let t,l;return t=new ie({props:{$$slots:{default:[Ce]},$$scope:{ctx:n}}}),t.$on("click",n[8]),{c(){W(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){z(t,e,s),l=!0},p(e,s){const a={};s&2048&&(a.$$scope={dirty:s,ctx:e}),t.$set(a)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){B(t,e)}}}function Ce(n){var f,r,i;let t=(((i=(r=(f=V)==null?void 0:f.i18n)==null?void 0:r.pwa)==null?void 0:i.reload)||Oe)+"",l,e,s,a;return s=new ge({}),{c(){l=q(t),e=F(),W(s.$$.fragment)},l(o){l=K(o,t),e=S(o),y(s.$$.fragment,o)},m(o,u){w(o,l,u),w(o,e,u),z(s,o,u),a=!0},p:O,i(o){a||($(s.$$.fragment,o),a=!0)},o(o){g(s.$$.fragment,o),a=!1},d(o){o&&(m(l),m(e)),B(s,o)}}}function Te(n){let t,l,e=n[0]&&te(n);return{c(){e&&e.c(),t=M()},l(s){e&&e.l(s),t=M()},m(s,a){e&&e.m(s,a),w(s,t,a),l=!0},p(s,a){s[0]?e?(e.p(s,a),a&1&&$(e,1)):(e=te(s),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(oe(),g(e,1,1,()=>{e=null}),fe())},i(s){l||($(e),l=!0)},o(s){g(e),l=!1},d(s){s&&m(t),e&&e.d(s)}}}function Le(n){let t,l,e=n[2]&&ee(n);return{c(){e&&e.c(),t=M()},l(s){e&&e.l(s),t=M()},m(s,a){e&&e.m(s,a),w(s,t,a),l=!0},p(s,[a]){s[2]?e?(e.p(s,a),a&4&&$(e,1)):(e=ee(s),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(oe(),g(e,1,1,()=>{e=null}),fe())},i(s){l||($(e),l=!0)},o(s){g(e),l=!1},d(s){s&&m(t),e&&e.d(s)}}}const Ie="App ready to work offline",Ne="New content available, click on reload button to update",Oe="Reload";function Fe(n,t,l){var v,E,p,T,L,I;let e,s,a,f;const{needRefresh:r,updateServiceWorker:i,offlineReady:o}=$e();x(n,r,c=>l(0,f=c)),x(n,o,c=>l(7,a=c));function u(){o.set(!1),r.set(!1)}const D=((p=(E=(v=V)==null?void 0:v.i18n)==null?void 0:E.pwa)==null?void 0:p.appReadyToWorkOffline)||Ie,h=((I=(L=(T=V)==null?void 0:T.i18n)==null?void 0:L.pwa)==null?void 0:I.newContentAvailable)||Ne,C=()=>i(!0);return n.$$.update=()=>{n.$$.dirty&129&&l(2,e=a||f),n.$$.dirty&128&&l(1,s=a?D:h)},[f,s,e,r,i,o,u,a,C]}class ze extends Y{constructor(t){super(),Z(this,t,Fe,Le,j,{})}}export{ze as default};
