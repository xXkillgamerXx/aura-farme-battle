(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ou(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Tt={},Qs=[],li=()=>{},_d=()=>!1,Uo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),No=n=>n.startsWith("onUpdate:"),on=Object.assign,lu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wm=Object.prototype.hasOwnProperty,mt=(n,e)=>Wm.call(n,e),et=Array.isArray,er=n=>ua(n)==="[object Map]",vd=n=>ua(n)==="[object Set]",uf=n=>ua(n)==="[object Date]",st=n=>typeof n=="function",Ft=n=>typeof n=="string",fi=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",xd=n=>(xt(n)||st(n))&&st(n.then)&&st(n.catch),yd=Object.prototype.toString,ua=n=>yd.call(n),Xm=n=>ua(n).slice(8,-1),Md=n=>ua(n)==="[object Object]",cu=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},$m=/-\w/g,kn=Fo(n=>n.replace($m,e=>e.slice(1).toUpperCase())),qm=/\B([A-Z])/g,ws=Fo(n=>n.replace(qm,"-$1").toLowerCase()),Sd=Fo(n=>n.charAt(0).toUpperCase()+n.slice(1)),el=Fo(n=>n?`on${Sd(n)}`:""),si=(n,e)=>!Object.is(n,e),tl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},bd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ym=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ff;const Oo=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vt(n){if(et(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?jm(i):Vt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||xt(n))return n}const Km=/;(?![^(]*\))/g,Zm=/:([^]+)/,Jm=/\/\*[^]*?\*\//g;function jm(n){const e={};return n.replace(Jm,"").split(Km).forEach(t=>{if(t){const i=t.split(Zm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pn(n){let e="";if(Ft(n))e=n;else if(et(n))for(let t=0;t<n.length;t++){const i=pn(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eg=ou(Qm);function Ed(n){return!!n||n===""}function tg(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=uu(n[i],e[i]);return t}function uu(n,e){if(n===e)return!0;let t=uf(n),i=uf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=fi(n),i=fi(e),t||i)return n===e;if(t=et(n),i=et(e),t||i)return t&&i?tg(n,e):!1;if(t=xt(n),i=xt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!uu(n[a],e[a]))return!1}}return String(n)===String(e)}const Td=n=>!!(n&&n.__v_isRef===!0),Le=n=>Ft(n)?n:n==null?"":et(n)||xt(n)&&(n.toString===yd||!st(n.toString))?Td(n)?Le(n.value):JSON.stringify(n,Ad,2):String(n),Ad=(n,e)=>Td(e)?Ad(n,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[nl(i,r)+" =>"]=s,t),{})}:vd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>nl(t))}:fi(e)?nl(e):xt(e)&&!et(e)&&!Md(e)?String(e):e,nl=(n,e="")=>{var t;return fi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class ng{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Zt&&(Zt.active?(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){if(this._on>0&&--this._on===0){if(Zt===this)Zt=this.prevScope;else{let e=Zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ig(){return Zt}let Et;const il=new WeakSet;class wd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&(Zt.active?Zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,il.has(this)&&(il.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hf(this),Pd(this);const e=Et,t=zn;Et=this,zn=!0;try{return this.fn()}finally{Id(this),Et=e,zn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)du(e);this.deps=this.depsTail=void 0,hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?il.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ql(this)&&this.run()}get dirty(){return Ql(this)}}let Rd=0,Fr,Or;function Cd(n,e=!1){if(n.flags|=8,e){n.next=Or,Or=n;return}n.next=Fr,Fr=n}function fu(){Rd++}function hu(){if(--Rd>0)return;if(Or){let e=Or;for(Or=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Fr;){let e=Fr;for(Fr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Pd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Id(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),du(i),sg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Ql(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===$r)||(n.globalVersion=$r,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ql(n))))return;n.flags|=2;const e=n.dep,t=Et,i=zn;Et=n,zn=!0;try{Pd(n);const s=n.fn(n._value);(e.version===0||si(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,zn=i,Id(n),n.flags&=-3}}function du(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)du(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let zn=!0;const Dd=[];function wi(){Dd.push(zn),zn=!1}function Ri(){const n=Dd.pop();zn=n===void 0?!0:n}function hf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let $r=0;class rg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!zn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new rg(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Ud(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,$r++,this.notify(e)}notify(e){fu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hu()}}}function Ud(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ud(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ec=new WeakMap,ys=Symbol(""),tc=Symbol(""),qr=Symbol("");function sn(n,e,t){if(zn&&Et){let i=ec.get(n);i||ec.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new pu),s.map=i,s.key=t),s.track()}}function bi(n,e,t,i,s,r){const a=ec.get(n);if(!a){$r++;return}const o=l=>{l&&l.trigger()};if(fu(),e==="clear")a.forEach(o);else{const l=et(n),c=l&&cu(t);if(l&&t==="length"){const f=Number(i);a.forEach((u,h)=>{(h==="length"||h===qr||!fi(h)&&h>=f)&&o(u)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(qr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(ys)),er(n)&&o(a.get(tc)));break;case"delete":l||(o(a.get(ys)),er(n)&&o(a.get(tc)));break;case"set":er(n)&&o(a.get(ys));break}}hu()}function Is(n){const e=pt(n);return e===n?e:(sn(e,"iterate",qr),Rn(n)?e:e.map(Hn))}function Bo(n){return sn(n=pt(n),"iterate",qr),n}function ti(n,e){return Ci(n)?or(Ms(n)?Hn(e):e):Hn(e)}const ag={__proto__:null,[Symbol.iterator](){return sl(this,Symbol.iterator,n=>ti(this,n))},concat(...n){return Is(this).concat(...n.map(e=>et(e)?Is(e):e))},entries(){return sl(this,"entries",n=>(n[1]=ti(this,n[1]),n))},every(n,e){return pi(this,"every",n,e,void 0,arguments)},filter(n,e){return pi(this,"filter",n,e,t=>t.map(i=>ti(this,i)),arguments)},find(n,e){return pi(this,"find",n,e,t=>ti(this,t),arguments)},findIndex(n,e){return pi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pi(this,"findLast",n,e,t=>ti(this,t),arguments)},findLastIndex(n,e){return pi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pi(this,"forEach",n,e,void 0,arguments)},includes(...n){return rl(this,"includes",n)},indexOf(...n){return rl(this,"indexOf",n)},join(n){return Is(this).join(n)},lastIndexOf(...n){return rl(this,"lastIndexOf",n)},map(n,e){return pi(this,"map",n,e,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...e){return df(this,"reduce",n,e)},reduceRight(n,...e){return df(this,"reduceRight",n,e)},shift(){return vr(this,"shift")},some(n,e){return pi(this,"some",n,e,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return Is(this).toReversed()},toSorted(n){return Is(this).toSorted(n)},toSpliced(...n){return Is(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return sl(this,"values",n=>ti(this,n))}};function sl(n,e,t){const i=Bo(n),s=i[e]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const og=Array.prototype;function pi(n,e,t,i,s,r){const a=Bo(n),o=a!==n&&!Rn(n),l=a[e];if(l!==og[e]){const u=l.apply(n,r);return o?Hn(u):u}let c=t;a!==n&&(o?c=function(u,h){return t.call(this,ti(n,u),h,n)}:t.length>2&&(c=function(u,h){return t.call(this,u,h,n)}));const f=l.call(a,c,i);return o&&s?s(f):f}function df(n,e,t,i){const s=Bo(n),r=s!==n&&!Rn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,f,u){return o&&(o=!1,c=ti(n,c)),t.call(this,c,ti(n,f),u,n)}):t.length>3&&(a=function(c,f,u){return t.call(this,c,f,u,n)}));const l=s[e](a,...i);return o?ti(n,l):l}function rl(n,e,t){const i=pt(n);sn(i,"iterate",qr);const s=i[e](...t);return(s===-1||s===!1)&&_u(t[0])?(t[0]=pt(t[0]),i[e](...t)):s}function vr(n,e,t=[]){wi(),fu();const i=pt(n)[e].apply(n,t);return hu(),Ri(),i}const lg=ou("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fi));function cg(n){fi(n)||(n=String(n));const e=pt(this);return sn(e,"has",n),e.hasOwnProperty(n)}class Fd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?xg:zd:r?kd:Bd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=et(e);if(!s){let l;if(a&&(l=ag[t]))return l;if(t==="hasOwnProperty")return cg}const o=Reflect.get(e,t,an(e)?e:i);if((fi(t)?Nd.has(t):lg(t))||(s||sn(e,"get",t),r))return o;if(an(o)){const l=a&&cu(t)?o:o.value;return s&&xt(l)?ic(l):l}return xt(o)?s?ic(o):Yr(o):o}}class Od extends Fd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=et(e)&&cu(t);if(!this._isShallow){const c=Ci(r);if(!Rn(i)&&!Ci(i)&&(r=pt(r),i=pt(i)),!a&&an(r)&&!an(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:mt(e,t),l=Reflect.set(e,t,i,an(e)?e:s);return e===pt(s)&&l&&(o?si(i,r)&&bi(e,"set",t,i):bi(e,"add",t,i)),l}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&bi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!fi(t)||!Nd.has(t))&&sn(e,"has",t),i}ownKeys(e){return sn(e,"iterate",et(e)?"length":ys),Reflect.ownKeys(e)}}class ug extends Fd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fg=new Od,hg=new ug,dg=new Od(!0);const nc=n=>n,ya=n=>Reflect.getPrototypeOf(n);function pg(n,e,t){return function(...i){const s=this.__v_raw,r=pt(s),a=er(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),f=t?nc:e?or:Hn;return!e&&sn(r,"iterate",l?tc:ys),on(Object.create(c),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:o?[f(u[0]),f(u[1])]:f(u),done:h}}})}}function Ma(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function mg(n,e){const t={get(s){const r=this.__v_raw,a=pt(r),o=pt(s);n||(si(s,o)&&sn(a,"get",s),sn(a,"get",o));const{has:l}=ya(a),c=e?nc:n?or:Hn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&sn(pt(s),"iterate",ys),s.size},has(s){const r=this.__v_raw,a=pt(r),o=pt(s);return n||(si(s,o)&&sn(a,"has",s),sn(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=pt(o),c=e?nc:n?or:Hn;return!n&&sn(l,"iterate",ys),o.forEach((f,u)=>s.call(r,c(f),c(u),a))}};return on(t,n?{add:Ma("add"),set:Ma("set"),delete:Ma("delete"),clear:Ma("clear")}:{add(s){const r=pt(this),a=ya(r),o=pt(s),l=!e&&!Rn(s)&&!Ci(s)?o:s;return a.has.call(r,l)||si(s,l)&&a.has.call(r,s)||si(o,l)&&a.has.call(r,o)||(r.add(l),bi(r,"add",l,l)),this},set(s,r){!e&&!Rn(r)&&!Ci(r)&&(r=pt(r));const a=pt(this),{has:o,get:l}=ya(a);let c=o.call(a,s);c||(s=pt(s),c=o.call(a,s));const f=l.call(a,s);return a.set(s,r),c?si(r,f)&&bi(a,"set",s,r):bi(a,"add",s,r),this},delete(s){const r=pt(this),{has:a,get:o}=ya(r);let l=a.call(r,s);l||(s=pt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&bi(r,"delete",s,void 0),c},clear(){const s=pt(this),r=s.size!==0,a=s.clear();return r&&bi(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pg(s,n,e)}),t}function mu(n,e){const t=mg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const gg={get:mu(!1,!1)},_g={get:mu(!1,!0)},vg={get:mu(!0,!1)};const Bd=new WeakMap,kd=new WeakMap,zd=new WeakMap,xg=new WeakMap;function yg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yr(n){return Ci(n)?n:gu(n,!1,fg,gg,Bd)}function Mg(n){return gu(n,!1,dg,_g,kd)}function ic(n){return gu(n,!0,hg,vg,zd)}function gu(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=yg(Xm(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Ms(n){return Ci(n)?Ms(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function _u(n){return n?!!n.__v_raw:!1}function pt(n){const e=n&&n.__v_raw;return e?pt(e):n}function Sg(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&bd(n,"__v_skip",!0),n}const Hn=n=>xt(n)?Yr(n):n,or=n=>xt(n)?ic(n):n;function an(n){return n?n.__v_isRef===!0:!1}function dt(n){return bg(n,!1)}function bg(n,e){return an(n)?n:new Eg(n,e)}class Eg{constructor(e,t){this.dep=new pu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:pt(e),this._value=t?e:Hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Rn(e)||Ci(e);e=i?e:pt(e),si(e,t)&&(this._rawValue=e,this._value=i?e:Hn(e),this.dep.trigger())}}function Br(n){return an(n)?n.value:n}const Tg={get:(n,e,t)=>e==="__v_raw"?n:Br(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return an(s)&&!an(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Vd(n){return Ms(n)?n:new Proxy(n,Tg)}class Ag{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new pu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Cd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wg(n,e,t=!1){let i,s;return st(n)?i=n:(i=n.get,s=n.set),new Ag(i,s,t)}const Sa={},go=new WeakMap;let ds;function Rg(n,e=!1,t=ds){if(t){let i=go.get(t);i||go.set(t,i=[]),i.push(n)}}function Cg(n,e,t=Tt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=x=>s?x:Rn(x)||s===!1||s===0?Yi(x,1):Yi(x);let f,u,h,d,m=!1,v=!1;if(an(n)?(u=()=>n.value,m=Rn(n)):Ms(n)?(u=()=>c(n),m=!0):et(n)?(v=!0,m=n.some(x=>Ms(x)||Rn(x)),u=()=>n.map(x=>{if(an(x))return x.value;if(Ms(x))return c(x);if(st(x))return l?l(x,2):x()})):st(n)?e?u=l?()=>l(n,2):n:u=()=>{if(h){wi();try{h()}finally{Ri()}}const x=ds;ds=f;try{return l?l(n,3,[d]):n(d)}finally{ds=x}}:u=li,e&&s){const x=u,w=s===!0?1/0:s;u=()=>Yi(x(),w)}const g=ig(),p=()=>{f.stop(),g&&g.active&&lu(g.effects,f)};if(r&&e){const x=e;e=(...w)=>{const A=x(...w);return p(),A}}let S=v?new Array(n.length).fill(Sa):Sa;const M=x=>{if(!(!(f.flags&1)||!f.dirty&&!x))if(e){const w=f.run();if(x||s||m||(v?w.some((A,C)=>si(A,S[C])):si(w,S))){h&&h();const A=ds;ds=f;try{const C=[w,S===Sa?void 0:v&&S[0]===Sa?[]:S,d];S=w,l?l(e,3,C):e(...C)}finally{ds=A}}}else f.run()};return o&&o(M),f=new wd(u),f.scheduler=a?()=>a(M,!1):M,d=x=>Rg(x,!1,f),h=f.onStop=()=>{const x=go.get(f);if(x){if(l)l(x,4);else for(const w of x)w();go.delete(f)}},e?i?M(!0):S=f.run():a?a(M.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function Yi(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,an(n))Yi(n.value,e,t);else if(et(n))for(let i=0;i<n.length;i++)Yi(n[i],e,t);else if(vd(n)||er(n))n.forEach(i=>{Yi(i,e,t)});else if(Md(n)){for(const i in n)Yi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Yi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(n,e,t,i){try{return i?n(...i):n()}catch(s){ko(s,e,t)}}function Wn(n,e,t,i){if(st(n)){const s=fa(n,e,t,i);return s&&xd(s)&&s.catch(r=>{ko(r,e,t)}),s}if(et(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Wn(n[r],e,t,i));return s}}function ko(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const f=o.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](n,l,c)===!1)return}o=o.parent}if(r){wi(),fa(r,null,10,[n,l,c]),Ri();return}}Pg(n,t,s,i,a)}function Pg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const fn=[];let Qn=-1;const tr=[];let qi=null,Ys=0;const Gd=Promise.resolve();let _o=null;function so(n){const e=_o||Gd;return n?e.then(this?n.bind(this):n):e}function Ig(n){let e=Qn+1,t=fn.length;for(;e<t;){const i=e+t>>>1,s=fn[i],r=Kr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function vu(n){if(!(n.flags&1)){const e=Kr(n),t=fn[fn.length-1];!t||!(n.flags&2)&&e>=Kr(t)?fn.push(n):fn.splice(Ig(e),0,n),n.flags|=1,Hd()}}function Hd(){_o||(_o=Gd.then(Xd))}function Lg(n){if(!et(n))qi&&n.id===-1?qi.splice(Ys+1,0,n):n.flags&1||(tr.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)tr.push(n[e]);Hd()}function pf(n,e,t=Qn+1){for(;t<fn.length;t++){const i=fn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wd(n){if(tr.length){const e=[...new Set(tr)].sort((t,i)=>Kr(t)-Kr(i));if(tr.length=0,qi){for(let t=0;t<e.length;t++)qi.push(e[t]);return}for(qi=e,Ys=0;Ys<qi.length;Ys++){const t=qi[Ys];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}qi=null,Ys=0}}const Kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xd(n){try{for(Qn=0;Qn<fn.length;Qn++){const e=fn[Qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qn<fn.length;Qn++){const e=fn[Qn];e&&(e.flags&=-2)}Qn=-1,fn.length=0,Wd(),_o=null,(fn.length||tr.length)&&Xd()}}let ri=null,$d=null;function vo(n){const e=ri;return ri=n,$d=n&&n.type.__scopeId||null,e}function Dg(n,e=ri,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Tf(-1);const r=vo(e),a=Ss.length;let o;try{o=n(...s)}finally{for(let l=Ss.length;l>a;l--)gp();vo(r),i._d&&Tf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function rs(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(wi(),Wn(l,t,8,[n.el,o,n,e]),Ri())}}function Ug(n,e){if(dn){let t=dn.provides;const i=dn.parent&&dn.parent.provides;i===t&&(t=dn.provides=Object.create(i)),t[n]=e}}function ro(n,e,t=!1){const i=C0();if(i||nr){let s=nr?nr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&st(e)?e.call(i&&i.proxy):e}}const Ng=Symbol.for("v-scx"),Fg=()=>ro(Ng);function Sn(n,e,t){return qd(n,e,t)}function qd(n,e,t=Tt){const{immediate:i,deep:s,flush:r,once:a}=t,o=on({},t),l=e&&i||!e&&r!=="post";let c;if(jr){if(r==="sync"){const d=Fg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=li,d.resume=li,d.pause=li,d}}const f=dn;o.call=(d,m,v)=>Wn(d,f,m,v);let u=!1;r==="post"?o.scheduler=d=>{mn(d,f&&f.suspense)}:r!=="sync"&&(u=!0,o.scheduler=(d,m)=>{m?d():vu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,f&&(d.id=f.uid,d.i=f))};const h=Cg(n,e,o);return jr&&(c?c.push(h):l&&h()),h}function Og(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?Yd(i,n):()=>i[n]:n.bind(i,i);let r;st(e)?r=e:(r=e.handler,t=e);const a=ha(this),o=qd(s,r.bind(i),t);return a(),o}function Yd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Bg=Symbol("_vte"),zo=n=>n.__isTeleport,al=Symbol("_leaveCb");function kg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ii){e=t;break}}return e}function Kd(n){if(!yu(n))return zo(n.type)&&n.children?kg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&st(t.default))return t.default()}}function xu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;xu(zo(t.type)&&Kd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Zd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function mf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const xo=new WeakMap;function kr(n,e,t,i,s=!1){if(et(n)){n.forEach((v,g)=>kr(v,e&&(et(e)?e[g]:e),t,i,s));return}if(zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?bu(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,f=o.refs===Tt?o.refs={}:o.refs,u=o.setupState,h=pt(u),d=u===Tt?_d:v=>mf(f,v)?!1:mt(h,v),m=(v,g)=>!(g&&mf(f,g));if(c!=null&&c!==l){if(gf(e),Ft(c))f[c]=null,d(c)&&(u[c]=null);else if(an(c)){const v=e;m(c,v.k)&&(c.value=null),v.k&&(f[v.k]=null)}}if(st(l))fa(l,o,12,[a,f]);else{const v=Ft(l),g=an(l);if(v||g){const p=()=>{if(n.f){const S=v?d(l)?u[l]:f[l]:m()||!n.k?l.value:f[n.k];if(s)et(S)&&lu(S,r);else if(et(S))S.includes(r)||S.push(r);else if(v)f[l]=[r],d(l)&&(u[l]=f[l]);else{const M=[r];m(l,n.k)&&(l.value=M),n.k&&(f[n.k]=M)}}else v?(f[l]=a,d(l)&&(u[l]=a)):g&&(m(l,n.k)&&(l.value=a),n.k&&(f[n.k]=a))};if(a){const S=()=>{p(),xo.delete(n)};S.id=-1,xo.set(n,S),mn(S,t)}else gf(n),p()}}}function gf(n){const e=xo.get(n);e&&(e.flags|=8,xo.delete(n))}Oo().requestIdleCallback;Oo().cancelIdleCallback;const zr=n=>!!n.type.__asyncLoader,yu=n=>n.type.__isKeepAlive;function zg(n,e){Jd(n,"a",e)}function Vg(n,e){Jd(n,"da",e)}function Jd(n,e,t=dn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Vo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)yu(s.parent.vnode)&&Gg(i,e,t,s),s=s.parent}}function Gg(n,e,t,i){const s=Vo(e,n,i,!0);jd(()=>{lu(i[e],s)},t)}function Vo(n,e,t=dn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{wi();const o=ha(t),l=Wn(e,t,n,a);return o(),Ri(),l});return i?s.unshift(r):s.push(r),r}}const Ui=n=>(e,t=dn)=>{(!jr||n==="sp")&&Vo(n,(...i)=>e(...i),t)},Hg=Ui("bm"),es=Ui("m"),Wg=Ui("bu"),Xg=Ui("u"),ts=Ui("bum"),jd=Ui("um"),$g=Ui("sp"),qg=Ui("rtg"),Yg=Ui("rtc");function Kg(n,e=dn){Vo("ec",n,e)}const Zg=Symbol.for("v-ndc");function Pi(n,e,t,i){let s;const r=t,a=et(n);if(a||Ft(n)){const o=a&&Ms(n);let l=!1,c=!1;o&&(l=!Rn(n),c=Ci(n),n=Bo(n)),s=new Array(n.length);for(let f=0,u=n.length;f<u;f++)s[f]=e(l?c?or(Hn(n[f])):Hn(n[f]):n[f],f,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const f=o[l];s[l]=e(n[f],f,l,r)}}else s=[];return s}const sc=n=>n?yp(n)?bu(n):sc(n.parent):null,Vr=on(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>sc(n.parent),$root:n=>sc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ep(n),$forceUpdate:n=>n.f||(n.f=()=>{vu(n.update)}),$nextTick:n=>n.n||(n.n=so.bind(n.proxy)),$watch:n=>Og.bind(n)}),ol=(n,e)=>n!==Tt&&!n.__isScriptSetup&&mt(n,e),Jg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ol(i,e))return a[e]=1,i[e];if(s!==Tt&&mt(s,e))return a[e]=2,s[e];if(mt(r,e))return a[e]=3,r[e];if(t!==Tt&&mt(t,e))return a[e]=4,t[e];rc&&(a[e]=0)}}const c=Vr[e];let f,u;if(c)return e==="$attrs"&&sn(n.attrs,"get",""),c(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Tt&&mt(t,e))return a[e]=4,t[e];if(u=l.config.globalProperties,mt(u,e))return u[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ol(s,e)?(s[e]=t,!0):i!==Tt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==Tt&&o[0]!=="$"&&mt(n,o)||ol(e,o)||mt(r,o)||mt(i,o)||mt(Vr,o)||mt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _f(n){return et(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rc=!0;function jg(n){const e=ep(n),t=n.proxy,i=n.ctx;rc=!1,e.beforeCreate&&vf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:m,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:S,destroyed:M,unmounted:x,render:w,renderTracked:A,renderTriggered:C,errorCaptured:y,serverPrefetch:R,expose:U,inheritAttrs:I,components:z,directives:Z,filters:re}=e;if(c&&Qg(c,i,null),a)for(const G in a){const Q=a[G];st(Q)&&(i[G]=Q.bind(t))}if(s){const G=s.call(t,t);xt(G)&&(n.data=Yr(G))}if(rc=!0,r)for(const G in r){const Q=r[G],ce=st(Q)?Q.bind(t,t):st(Q.get)?Q.get.bind(t,t):li,Me=!st(Q)&&st(Q.set)?Q.set.bind(t):li,ve=It({get:ce,set:Me});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>ve.value,set:xe=>ve.value=xe})}if(o)for(const G in o)Qd(o[G],i,t,G);if(l){const G=st(l)?l.call(t):l;Reflect.ownKeys(G).forEach(Q=>{Ug(Q,G[Q])})}f&&vf(f,n,"c");function q(G,Q){et(Q)?Q.forEach(ce=>G(ce.bind(t))):Q&&G(Q.bind(t))}if(q(Hg,u),q(es,h),q(Wg,d),q(Xg,m),q(zg,v),q(Vg,g),q(Kg,y),q(Yg,A),q(qg,C),q(ts,S),q(jd,x),q($g,R),et(U))if(U.length){const G=n.exposed||(n.exposed={});U.forEach(Q=>{Object.defineProperty(G,Q,{get:()=>t[Q],set:ce=>t[Q]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===li&&(n.render=w),I!=null&&(n.inheritAttrs=I),z&&(n.components=z),Z&&(n.directives=Z),R&&Zd(n)}function Qg(n,e,t=li){et(n)&&(n=ac(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=ro(s.from||i,s.default,!0):r=ro(s.from||i):r=ro(s),an(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function vf(n,e,t){Wn(et(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qd(n,e,t,i){let s=i.includes(".")?Yd(t,i):()=>t[i];if(Ft(n)){const r=e[n];st(r)&&Sn(s,r)}else if(st(n))Sn(s,n.bind(t));else if(xt(n))if(et(n))n.forEach(r=>Qd(r,e,t,i));else{const r=st(n.handler)?n.handler.bind(t):e[n.handler];st(r)&&Sn(s,r,n)}}function ep(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>yo(l,c,a,!0)),yo(l,e,a)),xt(e)&&r.set(e,l),l}function yo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&yo(n,r,t,!0),s&&s.forEach(a=>yo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=e0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const e0={data:xf,props:yf,emits:yf,methods:Pr,computed:Pr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Pr,directives:Pr,watch:n0,provide:xf,inject:t0};function xf(n,e){return e?n?function(){return on(st(n)?n.call(this,this):n,st(e)?e.call(this,this):e)}:e:n}function t0(n,e){return Pr(ac(n),ac(e))}function ac(n){if(et(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ln(n,e){return n?[...new Set([].concat(n,e))]:e}function Pr(n,e){return n?on(Object.create(null),n,e):e}function yf(n,e){return n?et(n)&&et(e)?[...new Set([...n,...e])]:on(Object.create(null),_f(n),_f(e??{})):e}function n0(n,e){if(!n)return e;if(!e)return n;const t=on(Object.create(null),n);for(const i in e)t[i]=ln(n[i],e[i]);return t}function tp(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function s0(n,e){return function(i,s=null){st(i)||(i=on({},i)),s!=null&&!xt(s)&&(s=null);const r=tp(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:i0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:N0,get config(){return r.config},set config(f){},use(f,...u){return a.has(f)||(f&&st(f.install)?(a.add(f),f.install(c,...u)):st(f)&&(a.add(f),f(c,...u))),c},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),c},component(f,u){return u?(r.components[f]=u,c):r.components[f]},directive(f,u){return u?(r.directives[f]=u,c):r.directives[f]},mount(f,u,h){if(!l){const d=c._ceVNode||Vn(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,f,h),l=!0,c._container=f,f.__vue_app__=c,bu(d.component)}},onUnmount(f){o.push(f)},unmount(){l&&(Wn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(f,u){return r.provides[f]=u,c},runWithContext(f){const u=nr;nr=c;try{return f()}finally{nr=u}}};return c}}let nr=null;const r0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${kn(e)}Modifiers`]||n[`${ws(e)}Modifiers`];function a0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Tt;let s=t;const r=e.startsWith("update:"),a=r&&r0(i,e.slice(7));a&&(a.trim&&(s=t.map(f=>Ft(f)?f.trim():f)),a.number&&(s=t.map(Ym)));let o,l=i[o=el(e)]||i[o=el(kn(e))];!l&&r&&(l=i[o=el(ws(e))]),l&&Wn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Wn(c,n,6,s)}}const o0=new WeakMap;function np(n,e,t=!1){const i=t?o0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!st(n)){const l=c=>{const f=np(c,e,!0);f&&(o=!0,on(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(xt(n)&&i.set(n,null),null):(et(r)?r.forEach(l=>a[l]=null):on(a,r),xt(n)&&i.set(n,a),a)}function Go(n,e){return!n||!Uo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,ws(e))||mt(n,e))}function Mf(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:f,props:u,data:h,setupState:d,ctx:m,inheritAttrs:v}=n,g=vo(n);let p,S;try{if(t.shapeFlag&4){const x=s||i,w=x;p=ni(c.call(w,x,f,u,d,h,m)),S=o}else{const x=e;p=ni(x.length>1?x(u,{attrs:o,slots:a,emit:l}):x(u,null)),S=e.props?o:l0(o)}}catch(x){Ss.length=0,ko(x,n,1),p=Vn(Ii)}let M=p;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:w}=M;x.length&&w&7&&(r&&x.some(No)&&(S=c0(S,r)),M=lr(M,S,!1,!0))}if(t.dirs&&(M=lr(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition){const x=zo(M.type)&&Kd(M)||M;xu(x,t.transition)}return p=M,vo(g),p}const l0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Uo(t))&&((e||(e={}))[t]=n[t]);return e},c0=(n,e)=>{const t={};for(const i in n)(!No(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function u0(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Sf(i,a,c):!!a;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(ip(a,i,h)&&!Go(c,h))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Sf(i,a,c):!0:!!a;return!1}function Sf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(ip(e,n,r)&&!Go(t,r))return!0}return!1}function ip(n,e,t){const i=n[t],s=e[t];return t==="style"&&xt(i)&&xt(s)?!uu(i,s):i!==s}function f0({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const sp={},rp=()=>Object.create(sp),ap=n=>Object.getPrototypeOf(n)===sp;function h0(n,e,t,i=!1){const s={},r=rp();n.propsDefaults=Object.create(null),op(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Mg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function d0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=pt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Go(n.emitsOptions,h))continue;const d=e[h];if(l)if(mt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const m=kn(h);s[m]=oc(l,o,m,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{op(n,e,s,r)&&(c=!0);let f;for(const u in o)(!e||!mt(e,u)&&((f=ws(u))===u||!mt(e,f)))&&(l?t&&(t[u]!==void 0||t[f]!==void 0)&&(s[u]=oc(l,o,u,void 0,n,!0)):delete s[u]);if(r!==o)for(const u in r)(!e||!mt(e,u))&&(delete r[u],c=!0)}c&&bi(n.attrs,"set","")}function op(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Nr(l))continue;const c=e[l];let f;s&&mt(s,f=kn(l))?!r||!r.includes(f)?t[f]=c:(o||(o={}))[f]=c:Go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=pt(t),c=o||Tt;for(let f=0;f<r.length;f++){const u=r[f];t[u]=oc(s,l,u,c[u],n,!mt(c,u))}}return a}function oc(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=mt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&st(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const f=ha(s);i=c[t]=l.call(null,e),f()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ws(t))&&(i=!0))}return i}const p0=new WeakMap;function lp(n,e,t=!1){const i=t?p0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!st(n)){const f=u=>{l=!0;const[h,d]=lp(u,e,!0);on(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!r&&!l)return xt(n)&&i.set(n,Qs),Qs;if(et(r))for(let f=0;f<r.length;f++){const u=kn(r[f]);bf(u)&&(a[u]=Tt)}else if(r)for(const f in r){const u=kn(f);if(bf(u)){const h=r[f],d=a[u]=et(h)||st(h)?{type:h}:on({},h),m=d.type;let v=!1,g=!0;if(et(m))for(let p=0;p<m.length;++p){const S=m[p],M=st(S)&&S.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(g=!1)}else v=st(m)&&m.name==="Boolean";d[0]=v,d[1]=g,(v||mt(d,"default"))&&o.push(u)}}const c=[a,o];return xt(n)&&i.set(n,c),c}function bf(n){return n[0]!=="$"&&!Nr(n)}const Mu=n=>n==="_"||n==="_ctx"||n==="$stable",Su=n=>et(n)?n.map(ni):[ni(n)],m0=(n,e,t)=>{if(e._n)return e;const i=Dg((...s)=>Su(e(...s)),t);return i._c=!1,i},cp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Mu(s))continue;const r=n[s];if(st(r))e[s]=m0(s,r,i);else if(r!=null){const a=Su(r);e[s]=()=>a}}},up=(n,e)=>{const t=Su(e);n.slots.default=()=>t},fp=(n,e,t)=>{for(const i in e)(t||!Mu(i))&&(n[i]=e[i])},g0=(n,e,t)=>{const i=n.slots=rp();if(n.vnode.shapeFlag&32){const s=e._;s?(fp(i,e,t),t&&bd(i,"_",s,!0)):cp(e,i)}else e&&up(n,e)},_0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=Tt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:fp(s,e,t):(r=!e.$stable,cp(e,s)),a=e}else e&&(up(n,e),a={default:1});if(r)for(const o in s)!Mu(o)&&a[o]==null&&delete s[o]},mn=S0;function v0(n){return x0(n)}function x0(n,e){const t=Oo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=li,insertStaticContent:m}=n,v=(P,D,$,ie=null,L=null,F=null,se=void 0,le=null,ue=!!D.dynamicChildren)=>{if(P===D)return;P&&!xr(P,D)&&(ie=ge(P),xe(P,L,F,!0),P=null),D.patchFlag===-2&&(ue=!1,D.dynamicChildren=null);const{type:te,ref:be,shapeFlag:T}=D;switch(te){case Ho:g(P,D,$,ie);break;case Ii:p(P,D,$,ie);break;case cl:P==null&&S(D,$,ie,se);break;case Gt:z(P,D,$,ie,L,F,se,le,ue);break;default:T&1?w(P,D,$,ie,L,F,se,le,ue):T&6?Z(P,D,$,ie,L,F,se,le,ue):(T&64||T&128)&&te.process(P,D,$,ie,L,F,se,le,ue,$e)}be!=null&&L?kr(be,P&&P.ref,F,D||P,!D):be==null&&P&&P.ref!=null&&kr(P.ref,null,F,P,!0)},g=(P,D,$,ie)=>{if(P==null)i(D.el=o(D.children),$,ie);else{const L=D.el=P.el;D.children!==P.children&&c(L,D.children)}},p=(P,D,$,ie)=>{P==null?i(D.el=l(D.children||""),$,ie):D.el=P.el},S=(P,D,$,ie)=>{[P.el,P.anchor]=m(P.children,D,$,ie,P.el,P.anchor)},M=({el:P,anchor:D},$,ie)=>{let L;for(;P&&P!==D;)L=h(P),i(P,$,ie),P=L;i(D,$,ie)},x=({el:P,anchor:D})=>{let $;for(;P&&P!==D;)$=h(P),s(P),P=$;s(D)},w=(P,D,$,ie,L,F,se,le,ue)=>{if(D.type==="svg"?se="svg":D.type==="math"&&(se="mathml"),P==null)A(D,$,ie,L,F,se,le,ue);else{const te=P.el&&P.el._isVueCE?P.el:null;try{te&&te._beginPatch(),R(P,D,L,F,se,le,ue)}finally{te&&te._endPatch()}}},A=(P,D,$,ie,L,F,se,le)=>{let ue,te;const{props:be,shapeFlag:T,transition:de,dirs:me}=P;if(ue=P.el=a(P.type,F,be&&be.is,be),T&8?f(ue,P.children):T&16&&y(P.children,ue,null,ie,L,ll(P,F),se,le),me&&rs(P,null,ie,"created"),C(ue,P,P.scopeId,se,ie),be){for(const _ in be)_!=="value"&&!Nr(_)&&r(ue,_,null,be[_],F,ie);"value"in be&&r(ue,"value",null,be.value,F),(te=be.onVnodeBeforeMount)&&Kn(te,ie,P)}me&&rs(P,null,ie,"beforeMount");const E=y0(L,de);E&&de.beforeEnter(ue),i(ue,D,$),((te=be&&be.onVnodeMounted)||E||me)&&mn(()=>{try{te&&Kn(te,ie,P),E&&de.enter(ue),me&&rs(P,null,ie,"mounted")}finally{}},L)},C=(P,D,$,ie,L)=>{if($&&d(P,$),ie)for(let F=0;F<ie.length;F++)d(P,ie[F]);if(L){let F=L.subTree;if(D===F||mp(F.type)&&(F.ssContent===D||F.ssFallback===D)){const se=L.vnode;C(P,se,se.scopeId,se.slotScopeIds,L.parent)}}},y=(P,D,$,ie,L,F,se,le,ue=0)=>{for(let te=ue;te<P.length;te++){const be=P[te]=le?Si(P[te]):ni(P[te]);v(null,be,D,$,ie,L,F,se,le)}},R=(P,D,$,ie,L,F,se)=>{const le=D.el=P.el;let{patchFlag:ue,dynamicChildren:te,dirs:be}=D;ue|=P.patchFlag&16;const T=P.props||Tt,de=D.props||Tt;let me;if($&&as($,!1),(me=de.onVnodeBeforeUpdate)&&Kn(me,$,D,P),be&&rs(D,P,$,"beforeUpdate"),$&&as($,!0),te&&(!P.dynamicChildren||P.dynamicChildren.length!==te.length)&&(ue=0,se=!1,te=null),(T.innerHTML&&de.innerHTML==null||T.textContent&&de.textContent==null)&&f(le,""),te?U(P.dynamicChildren,te,le,$,ie,ll(D,L),F):se||Q(P,D,le,null,$,ie,ll(D,L),F,!1),ue>0){if(ue&16)I(le,T,de,$,L);else if(ue&2&&T.class!==de.class&&r(le,"class",null,de.class,L),ue&4&&r(le,"style",T.style,de.style,L),ue&8){const E=D.dynamicProps;for(let _=0;_<E.length;_++){const N=E[_],V=T[N],J=de[N];(J!==V||N==="value")&&r(le,N,V,J,L,$)}}ue&1&&P.children!==D.children&&f(le,D.children)}else!se&&te==null&&I(le,T,de,$,L);((me=de.onVnodeUpdated)||be)&&mn(()=>{me&&Kn(me,$,D,P),be&&rs(D,P,$,"updated")},ie)},U=(P,D,$,ie,L,F,se)=>{for(let le=0;le<D.length;le++){const ue=P[le],te=D[le],be=ue.el&&(ue.type===Gt||!xr(ue,te)||ue.shapeFlag&198)?u(ue.el):$;v(ue,te,be,null,ie,L,F,se,!0)}},I=(P,D,$,ie,L)=>{if(D!==$){if(D!==Tt)for(const F in D)!Nr(F)&&!(F in $)&&r(P,F,D[F],null,L,ie);for(const F in $){if(Nr(F))continue;const se=$[F],le=D[F];se!==le&&F!=="value"&&r(P,F,le,se,L,ie)}"value"in $&&r(P,"value",D.value,$.value,L)}},z=(P,D,$,ie,L,F,se,le,ue)=>{const te=D.el=P?P.el:o(""),be=D.anchor=P?P.anchor:o("");let{patchFlag:T,dynamicChildren:de,slotScopeIds:me}=D;me&&(le=le?le.concat(me):me),P==null?(i(te,$,ie),i(be,$,ie),y(D.children||[],$,be,L,F,se,le,ue)):T>0&&T&64&&de&&P.dynamicChildren&&P.dynamicChildren.length===de.length?(U(P.dynamicChildren,de,$,L,F,se,le),(D.key!=null||L&&D===L.subTree)&&hp(P,D,!0)):Q(P,D,$,be,L,F,se,le,ue)},Z=(P,D,$,ie,L,F,se,le,ue)=>{D.slotScopeIds=le,P==null?D.shapeFlag&512?L.ctx.activate(D,$,ie,se,ue):re(D,$,ie,L,F,se,ue):W(P,D,ue)},re=(P,D,$,ie,L,F,se)=>{const le=P.component=R0(P,ie,L);if(yu(P)&&(le.ctx.renderer=$e),P0(le,!1,se),le.asyncDep){if(L&&L.registerDep(le,q,se),!P.el){const ue=le.subTree=Vn(Ii);p(null,ue,D,$),P.placeholder=ue.el}}else q(le,P,D,$,L,F,se)},W=(P,D,$)=>{const ie=D.component=P.component;if(u0(P,D,$))if(ie.asyncDep&&!ie.asyncResolved){G(ie,D,$);return}else ie.next=D,ie.update();else D.el=P.el,ie.vnode=D},q=(P,D,$,ie,L,F,se)=>{const le=()=>{if(P.isMounted){let{next:T,bu:de,u:me,parent:E,vnode:_}=P;{const _e=dp(P);if(_e){T&&(T.el=_.el,G(P,T,se)),_e.asyncDep.then(()=>{mn(()=>{P.isUnmounted||te()},L)});return}}let N=T,V;as(P,!1),T?(T.el=_.el,G(P,T,se)):T=_,de&&tl(de),(V=T.props&&T.props.onVnodeBeforeUpdate)&&Kn(V,E,T,_),as(P,!0);const J=Mf(P),pe=P.subTree;P.subTree=J,v(pe,J,u(pe.el),ge(pe),P,L,F),T.el=J.el,N===null&&f0(P,J.el),me&&mn(me,L),(V=T.props&&T.props.onVnodeUpdated)&&mn(()=>Kn(V,E,T,_),L)}else{let T;const{el:de,props:me}=D,{bm:E,m:_,parent:N,root:V,type:J}=P,pe=zr(D);as(P,!1),E&&tl(E),!pe&&(T=me&&me.onVnodeBeforeMount)&&Kn(T,N,D),as(P,!0);{V.ce&&V.ce._hasShadowRoot()&&V.ce._injectChildStyle(J,P.parent?P.parent.type:void 0);const _e=P.subTree=Mf(P);v(null,_e,$,ie,P,L,F),D.el=_e.el}if(_&&mn(_,L),!pe&&(T=me&&me.onVnodeMounted)){const _e=D;mn(()=>Kn(T,N,_e),L)}(D.shapeFlag&256||N&&zr(N.vnode)&&N.vnode.shapeFlag&256)&&P.a&&mn(P.a,L),P.isMounted=!0,D=$=ie=null}};P.scope.on();const ue=P.effect=new wd(le);P.scope.off();const te=P.update=ue.run.bind(ue),be=P.job=ue.runIfDirty.bind(ue);be.i=P,be.id=P.uid,ue.scheduler=()=>vu(be),as(P,!0),te()},G=(P,D,$)=>{D.component=P;const ie=P.vnode.props;P.vnode=D,P.next=null,d0(P,D.props,ie,$),_0(P,D.children,$),wi(),pf(P),Ri()},Q=(P,D,$,ie,L,F,se,le,ue=!1)=>{const te=P&&P.children,be=P?P.shapeFlag:0,T=D.children,{patchFlag:de,shapeFlag:me}=D;if(de>0){if(de&128){Me(te,T,$,ie,L,F,se,le,ue);return}else if(de&256){ce(te,T,$,ie,L,F,se,le,ue);return}}me&8?(be&16&&ne(te,L,F),T!==te&&f($,T)):be&16?me&16?Me(te,T,$,ie,L,F,se,le,ue):ne(te,L,F,!0):(be&8&&f($,""),me&16&&y(T,$,ie,L,F,se,le,ue))},ce=(P,D,$,ie,L,F,se,le,ue)=>{P=P||Qs,D=D||Qs;const te=P.length,be=D.length,T=Math.min(te,be);let de;for(de=0;de<T;de++){const me=D[de]=ue?Si(D[de]):ni(D[de]);v(P[de],me,$,null,L,F,se,le,ue)}te>be?ne(P,L,F,!0,!1,T):y(D,$,ie,L,F,se,le,ue,T)},Me=(P,D,$,ie,L,F,se,le,ue)=>{let te=0;const be=D.length;let T=P.length-1,de=be-1;for(;te<=T&&te<=de;){const me=P[te],E=D[te]=ue?Si(D[te]):ni(D[te]);if(xr(me,E))v(me,E,$,null,L,F,se,le,ue);else break;te++}for(;te<=T&&te<=de;){const me=P[T],E=D[de]=ue?Si(D[de]):ni(D[de]);if(xr(me,E))v(me,E,$,null,L,F,se,le,ue);else break;T--,de--}if(te>T){if(te<=de){const me=de+1,E=me<be?D[me].el:ie;for(;te<=de;)v(null,D[te]=ue?Si(D[te]):ni(D[te]),$,E,L,F,se,le,ue),te++}}else if(te>de)for(;te<=T;)xe(P[te],L,F,!0),te++;else{const me=te,E=te,_=new Map;for(te=E;te<=de;te++){const oe=D[te]=ue?Si(D[te]):ni(D[te]);oe.key!=null&&_.set(oe.key,te)}let N,V=0;const J=de-E+1;let pe=!1,_e=0;const ee=new Array(J);for(te=0;te<J;te++)ee[te]=0;for(te=me;te<=T;te++){const oe=P[te];if(V>=J){xe(oe,L,F,!0);continue}let Ie;if(oe.key!=null)Ie=_.get(oe.key);else for(N=E;N<=de;N++)if(ee[N-E]===0&&xr(oe,D[N])){Ie=N;break}Ie===void 0?xe(oe,L,F,!0):(ee[Ie-E]=te+1,Ie>=_e?_e=Ie:pe=!0,v(oe,D[Ie],$,null,L,F,se,le,ue),V++)}const X=pe?M0(ee):Qs;for(N=X.length-1,te=J-1;te>=0;te--){const oe=E+te,Ie=D[oe],Ee=D[oe+1],Se=oe+1<be?Ee.el||pp(Ee):ie;ee[te]===0?v(null,Ie,$,Se,L,F,se,le,ue):pe&&(N<0||te!==X[N]?ve(Ie,$,Se,2):N--)}}},ve=(P,D,$,ie,L=null)=>{const{el:F,type:se,transition:le,children:ue,shapeFlag:te}=P;if(te&6){ve(P.component.subTree,D,$,ie);return}if(te&128){P.suspense.move(D,$,ie);return}if(te&64){se.move(P,D,$,$e);return}if(se===Gt){i(F,D,$);for(let T=0;T<ue.length;T++)ve(ue[T],D,$,ie);i(P.anchor,D,$);return}if(se===cl){M(P,D,$);return}if(ie!==2&&te&1&&le)if(ie===0)le.persisted&&!F[al]?i(F,D,$):(le.beforeEnter(F),i(F,D,$),mn(()=>le.enter(F),L));else{const{leave:T,delayLeave:de,afterLeave:me}=le,E=()=>{P.ctx.isUnmounted?s(F):i(F,D,$)},_=()=>{const N=F._isLeaving||!!F[al];F._isLeaving&&F[al](!0),le.persisted&&!N?E():T(F,()=>{E(),me&&me()})};de?de(F,E,_):_()}else i(F,D,$)},xe=(P,D,$,ie=!1,L=!1)=>{const{type:F,props:se,ref:le,children:ue,dynamicChildren:te,shapeFlag:be,patchFlag:T,dirs:de,cacheIndex:me,memo:E}=P;if(T===-2&&(L=!1),le!=null&&(wi(),kr(le,null,$,P,!0),Ri()),me!=null&&(D.renderCache[me]=void 0),be&256){D.ctx.deactivate(P);return}const _=be&1&&de,N=!zr(P);let V;if(N&&(V=se&&se.onVnodeBeforeUnmount)&&Kn(V,D,P),be&6)Je(P.component,$,ie);else{if(be&128){P.suspense.unmount($,ie);return}_&&rs(P,null,D,"beforeUnmount"),be&64?P.type.remove(P,D,$,$e,ie):te&&!te.hasOnce&&(F!==Gt||T>0&&T&64)?ne(te,D,$,!1,!0):(F===Gt&&T&384||!L&&be&16)&&ne(ue,D,$),ie&&Ze(P)}const J=E!=null&&me==null;(N&&(V=se&&se.onVnodeUnmounted)||_||J)&&mn(()=>{V&&Kn(V,D,P),_&&rs(P,null,D,"unmounted"),J&&(P.el=null)},$)},Ze=P=>{const{type:D,el:$,anchor:ie,transition:L}=P;if(D===Gt){ct($,ie);return}if(D===cl){x(P);return}const F=()=>{s($),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(P.shapeFlag&1&&L&&!L.persisted){const{leave:se,delayLeave:le}=L,ue=()=>se($,F);le?le(P.el,F,ue):ue()}else F()},ct=(P,D)=>{let $;for(;P!==D;)$=h(P),s(P),P=$;s(D)},Je=(P,D,$)=>{const{bum:ie,scope:L,job:F,subTree:se,um:le,m:ue,a:te}=P;Ef(ue),Ef(te),ie&&tl(ie),L.stop(),F&&(F.flags|=8,xe(se,P,D,$)),le&&mn(le,D),mn(()=>{P.isUnmounted=!0},D)},ne=(P,D,$,ie=!1,L=!1,F=0)=>{for(let se=F;se<P.length;se++)xe(P[se],D,$,ie,L)},ge=P=>{if(P.shapeFlag&6)return ge(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=h(P.anchor||P.el),$=D&&D[Bg];return $?h($):D};let he=!1;const He=(P,D,$)=>{let ie;P==null?D._vnode&&(xe(D._vnode,null,null,!0),ie=D._vnode.component):v(D._vnode||null,P,D,null,null,null,$),D._vnode=P,he||(he=!0,pf(ie),Wd(),he=!1)},$e={p:v,um:xe,m:ve,r:Ze,mt:re,mc:y,pc:Q,pbc:U,n:ge,o:n};return{render:He,hydrate:void 0,createApp:s0(He)}}function ll({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function as({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function y0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hp(n,e,t=!1){const i=n.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Si(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&hp(a,o)),o.type===Ho&&(o.patchFlag===-1&&(o=s[r]=Si(o)),o.el=a.el),o.type===Ii&&!o.el&&(o.el=a.el)}}function M0(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function dp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:dp(e)}function Ef(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function pp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?pp(e.subTree):null}const mp=n=>n.__isSuspense;function S0(n,e){e&&e.pendingBranch?et(n)?e.effects.push(...n):e.effects.push(n):Lg(n)}const Gt=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),Ii=Symbol.for("v-cmt"),cl=Symbol.for("v-stc"),Ss=[];let bn=null;function Pe(n=!1){Ss.push(bn=n?null:[])}function gp(){Ss.pop(),bn=Ss[Ss.length-1]||null}let Zr=1;function Tf(n,e=!1){Zr+=n,n<0&&bn&&e&&(bn.hasOnce=!0)}function _p(n){return n.dynamicChildren=Zr>0?bn||Qs:null,gp(),Zr>0&&bn&&bn.push(n),n}function Ne(n,e,t,i,s,r){return _p(k(n,e,t,i,s,r,!0))}function jn(n,e,t,i,s){return _p(Vn(n,e,t,i,s,!0))}function vp(n){return n?n.__v_isVNode===!0:!1}function xr(n,e){return n.type===e.type&&n.key===e.key}const xp=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||an(n)||st(n)?{i:ri,r:n,k:e,f:!!t}:n:null);function k(n,e=null,t=null,i=0,s=null,r=n===Gt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xp(e),ref:e&&ao(e),scopeId:$d,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ri};return o?(Mo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Zr>0&&!a&&bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&bn.push(l),l}const Vn=b0;function b0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Zg)&&(n=Ii),vp(n)){const o=lr(n,e,!0);return t&&Mo(o,t),Zr>0&&!r&&bn&&(o.shapeFlag&6?bn[bn.indexOf(n)]=o:bn.push(o)),o.patchFlag=-2,o}if(U0(n)&&(n=n.__vccOpts),e){e=E0(e);let{class:o,style:l}=e;o&&!Ft(o)&&(e.class=pn(o)),xt(l)&&(_u(l)&&!et(l)&&(l=on({},l)),e.style=Vt(l))}const a=Ft(n)?1:mp(n)?128:zo(n)?64:xt(n)?4:st(n)?2:0;return k(n,e,t,i,s,a,r,!0)}function E0(n){return n?_u(n)||ap(n)?on({},n):n:null}function lr(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?T0(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&xp(c),ref:e&&e.ref?t&&r?et(r)?r.concat(ao(e)):[r,ao(e)]:ao(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Gt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&lr(n.ssContent),ssFallback:n.ssFallback&&lr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&xu(f,l.clone(f)),f}function Nt(n=" ",e=0){return Vn(Ho,null,n,e)}function gt(n="",e=!1){return e?(Pe(),jn(Ii,null,n)):Vn(Ii,null,n)}function ni(n){return n==null||typeof n=="boolean"?Vn(Ii):et(n)?Vn(Gt,null,n.slice()):vp(n)?Si(n):Vn(Ho,null,String(n))}function Si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:lr(n)}function Mo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(et(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Mo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ap(e)?e._ctx=ri:s===3&&ri&&(ri.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(st(e)){if(i&65){Mo(n,{default:e});return}e={default:e,_ctx:ri},t=32}else e=String(e),i&64?(t=16,e=[Nt(e)]):t=8;n.children=e,n.shapeFlag|=t}function T0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=pn([e.class,i.class]));else if(s==="style")e.style=Vt([e.style,i.style]);else if(Uo(s)){const r=e[s],a=i[s];a&&r!==a&&!(et(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!No(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function Kn(n,e,t,i=null){Wn(n,e,7,[t,i])}const A0=tp();let w0=0;function R0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||A0,r={uid:w0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ng(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(i,s),emitsOptions:np(i,s),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=a0.bind(null,r),n.ce&&n.ce(r),r}let dn=null;const C0=()=>dn||ri;let So,Jr;{const n=Oo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};So=e("__VUE_INSTANCE_SETTERS__",t=>dn=t),Jr=e("__VUE_SSR_SETTERS__",t=>jr=t)}const ha=n=>{const e=dn;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},Af=()=>{dn&&dn.scope.off(),So(null)};function yp(n){return n.vnode.shapeFlag&4}let jr=!1;function P0(n,e=!1,t=!1){e&&Jr(e);const{props:i,children:s}=n.vnode,r=yp(n);h0(n,i,r,e),g0(n,s,t||e);const a=r?I0(n,e):void 0;return e&&Jr(!1),a}function I0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Jg);const{setup:i}=t;if(i){wi();const s=n.setupContext=i.length>1?D0(n):null,r=ha(n),a=fa(i,n,0,[n.props,s]),o=xd(a);if(Ri(),r(),(o||n.sp)&&!zr(n)&&Zd(n),o){if(a.then(Af,Af),e)return a.then(l=>{Jr(!0);try{wf(n,l,e)}finally{Jr(!1)}}).catch(l=>{ko(l,n,0)});n.asyncDep=a}else wf(n,a)}else Mp(n)}function wf(n,e,t){st(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Vd(e)),Mp(n)}function Mp(n,e,t){const i=n.type;n.render||(n.render=i.render||li);{const s=ha(n);wi();try{jg(n)}finally{Ri(),s()}}}const L0={get(n,e){return sn(n,"get",""),n[e]}};function D0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,L0),slots:n.slots,emit:n.emit,expose:e}}function bu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Vd(Sg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vr)return Vr[t](n)},has(e,t){return t in e||t in Vr}})):n.proxy}function U0(n){return st(n)&&"__vccOpts"in n}const It=(n,e)=>wg(n,e,jr),N0="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lc;const Rf=typeof window<"u"&&window.trustedTypes;if(Rf)try{lc=Rf.createPolicy("vue",{createHTML:n=>n})}catch{}const Sp=lc?n=>lc.createHTML(n):n=>n,F0="http://www.w3.org/2000/svg",O0="http://www.w3.org/1998/Math/MathML",Mi=typeof document<"u"?document:null,Cf=Mi&&Mi.createElement("template"),B0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Mi.createElementNS(F0,n):e==="mathml"?Mi.createElementNS(O0,n):t?Mi.createElement(n,{is:t}):Mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Mi.createTextNode(n),createComment:n=>Mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Cf.innerHTML=Sp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Cf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},k0=Symbol("_vtc");function z0(n,e,t){const i=n[k0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Pf=Symbol("_vod"),V0=Symbol("_vsh"),G0=Symbol(""),H0=/(?:^|;)\s*display\s*:/;function W0(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ir(i,o,"")}else for(const a in e)t[a]==null&&Ir(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?$0(n,a,!Ft(e)&&e?e[a]:void 0,o)||Ir(i,a,o):Ir(i,a,"")}}else if(s){if(e!==t){const a=i[G0];a&&(t+=";"+a),i.cssText=t,r=H0.test(t)}}else e&&n.removeAttribute("style");Pf in n&&(n[Pf]=r?i.display:"",n[V0]&&(i.display="none"))}const If=/\s*!important$/;function Ir(n,e,t){if(et(t))t.forEach(i=>Ir(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=X0(n,e);If.test(t)?n.setProperty(ws(i),t.replace(If,""),"important"):n[i]=t}}const Lf=["Webkit","Moz","ms"],ul={};function X0(n,e){const t=ul[e];if(t)return t;let i=kn(e);if(i!=="filter"&&i in n)return ul[e]=i;i=Sd(i);for(let s=0;s<Lf.length;s++){const r=Lf[s]+i;if(r in n)return ul[e]=r}return e}function $0(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ft(i)&&t===i}const Df="http://www.w3.org/1999/xlink";function Uf(n,e,t,i,s,r=eg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Df,e.slice(6,e.length)):n.setAttributeNS(Df,e,t):t==null||r&&!Ed(t)?n.removeAttribute(e):n.setAttribute(e,r?"":fi(t)?String(t):t)}function Nf(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Sp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Ed(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function q0(n,e,t,i){n.addEventListener(e,t,i)}function Y0(n,e,t,i){n.removeEventListener(e,t,i)}const Ff=Symbol("_vei");function K0(n,e,t,i,s=null){const r=n[Ff]||(n[Ff]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=j0(e);if(i){const c=r[e]=t_(i,s);q0(n,o,c,l)}else a&&(Y0(n,o,a,l),r[e]=void 0)}}const Z0=/(Once|Passive|Capture)$/,J0=/^on:?(?:Once|Passive|Capture)$/;function j0(n){let e,t;for(;(t=n.match(Z0))&&!J0.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ws(n.slice(2)),e]}let fl=0;const Q0=Promise.resolve(),e_=()=>fl||(Q0.then(()=>fl=0),fl=Date.now());function t_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(et(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Wn(c,e,5,o)}}else Wn(s,e,5,[i])};return t.value=n,t.attached=e_(),t}const Of=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,n_=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?z0(n,i,a):e==="style"?W0(n,t,i):Uo(e)?No(e)||K0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i_(n,e,i,a))?(Nf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uf(n,e,i,a,r,e!=="value")):n._isVueCE&&(s_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ft(i)))?Nf(n,kn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Uf(n,e,i,a))};function i_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Of(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Of(e)&&Ft(t)?!1:e in n}function s_(n,e){const t=n._def.props;if(!t)return!1;const i=kn(e);return Array.isArray(t)?t.some(s=>kn(s)===i):Object.keys(t).some(s=>kn(s)===i)}const r_=["ctrl","shift","alt","meta"],a_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>r_.some(t=>n[`${t}Key`]&&!e.includes(t))},Bf=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=a_[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},o_=on({patchProp:n_},B0);let kf;function l_(){return kf||(kf=v0(o_))}const c_=((...n)=>{const e=l_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=f_(i);if(!s)return;const r=e._component;!st(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,u_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function u_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function f_(n){return Ft(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="185",h_=0,zf=1,d_=2,oo=1,p_=2,Lr=3,ji=0,_n=1,Nn=2,Ti=0,ir=1,Vf=2,Gf=3,Hf=4,m_=5,gs=100,g_=101,__=102,v_=103,x_=104,y_=200,M_=201,S_=202,b_=203,cc=204,uc=205,E_=206,T_=207,A_=208,w_=209,R_=210,C_=211,P_=212,I_=213,L_=214,fc=0,hc=1,dc=2,cr=3,pc=4,mc=5,gc=6,_c=7,Wo=0,D_=1,U_=2,ci=0,bp=1,Ep=2,Tp=3,Ap=4,wp=5,Rp=6,Cp=7,Wf="attached",N_="detached",Pp=300,bs=301,ur=302,lo=303,hl=304,Xo=306,Qr=1e3,On=1001,vc=1002,jt=1003,F_=1004,ba=1005,rn=1006,dl=1007,vs=1008,Mn=1009,Ip=1010,Lp=1011,ea=1012,Tu=1013,hi=1014,Bn=1015,Li=1016,Au=1017,wu=1018,ta=1020,Dp=35902,Up=35899,Np=1021,Fp=1022,wn=1023,Di=1026,xs=1027,Op=1028,Ru=1029,Es=1030,Cu=1031,Pu=1033,co=33776,uo=33777,fo=33778,ho=33779,xc=35840,yc=35841,Mc=35842,Sc=35843,bc=36196,Ec=37492,Tc=37496,Ac=37488,wc=37489,bo=37490,Rc=37491,Cc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Uc=37813,Nc=37814,Fc=37815,Oc=37816,Bc=37817,kc=37818,zc=37819,Vc=37820,Gc=37821,Hc=36492,Wc=36494,Xc=36495,$c=36283,qc=36284,Eo=36285,Yc=36286,O_=2200,$o=2201,B_=2202,To=2300,Kc=2301,pl=2302,Xf=2303,Zs=2400,Js=2401,Ao=2402,Iu=2500,k_=2501,z_=3200,na=0,V_=1,Ki="",wt="srgb",wo="srgb-linear",Ro="linear",_t="srgb",Ls=7680,$f=519,G_=512,H_=513,W_=514,Lu=515,X_=516,$_=517,Du=518,q_=519,qf=35044,Yf="300 es",ai=2e3,ia=2001;function Y_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function K_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Z_(){const n=sa("canvas");return n.style.display="block",n}const Kf={};function Zf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Bp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=Bp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=Bp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function sr(...n){const e=n.join(" ");e in Kf||(Kf[e]=!0,Ge(...n))}function J_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const j_={[fc]:hc,[dc]:gc,[pc]:_c,[cr]:mc,[hc]:fc,[gc]:dc,[_c]:pc,[mc]:cr};class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jf=1234567;const Gr=Math.PI/180,fr=180/Math.PI;function is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function lt(n,e,t){return Math.max(e,Math.min(t,n))}function Uu(n,e){return(n%e+e)%e}function Q_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ev(n,e,t){return n!==e?(t-n)/(e-n):0}function Hr(n,e,t){return(1-t)*n+t*e}function tv(n,e,t,i){return Hr(n,e,1-Math.exp(-t*i))}function nv(n,e=1){return e-Math.abs(Uu(n,e*2)-e)}function iv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function sv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function av(n,e){return n+Math.random()*(e-n)}function ov(n){return n*(.5-Math.random())}function lv(n){n!==void 0&&(Jf=n);let e=Jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cv(n){return n*Gr}function uv(n){return n*fr}function fv(n){return(n&n-1)===0&&n!==0}function hv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pv(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),f=a((e+i)/2),u=r((e-i)/2),h=a((e-i)/2),d=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*f,l*u,l*h,o*c);break;case"YZY":n.set(l*h,o*f,l*u,o*c);break;case"ZXZ":n.set(l*u,l*h,o*f,o*c);break;case"XZX":n.set(o*f,l*m,l*d,o*c);break;case"YXY":n.set(l*d,o*f,l*m,o*c);break;case"ZYZ":n.set(l*m,l*d,o*f,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pt={DEG2RAD:Gr,RAD2DEG:fr,generateUUID:is,clamp:lt,euclideanModulo:Uu,mapLinear:Q_,inverseLerp:ev,lerp:Hr,damp:tv,pingpong:nv,smoothstep:iv,smootherstep:sv,randInt:rv,randFloat:av,randFloatSpread:ov,seededRandom:lv,degToRad:cv,radToDeg:uv,isPowerOfTwo:fv,ceilPowerOfTwo:hv,floorPowerOfTwo:dv,setQuaternionFromProperEuler:pv,normalize:cn,denormalize:Ks},Ku=class Ku{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ku.prototype.isVector2=!0;let at=Ku;class qt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3],h=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||l!==h||c!==d||f!==m){let g=l*h+c*d+f*m+u*v;g<0&&(h=-h,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const S=Math.acos(g),M=Math.sin(S);p=Math.sin(p*S)/M,o=Math.sin(o*S)/M,l=l*p+h*o,c=c*p+d*o,f=f*p+m*o,u=u*p+v*o}else{l=l*p+h*o,c=c*p+d*o,f=f*p+m*o,u=u*p+v*o;const S=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=S,c*=S,f*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+f*u+l*d-c*h,e[t+1]=l*m+f*h+c*u-o*d,e[t+2]=c*m+f*d+o*h-l*u,e[t+3]=f*m-o*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),u=o(r/2),h=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*f*u+c*d*m,this._y=c*d*u-h*f*m,this._z=c*f*m+h*d*u,this._w=c*f*u-h*d*m;break;case"YXZ":this._x=h*f*u+c*d*m,this._y=c*d*u-h*f*m,this._z=c*f*m-h*d*u,this._w=c*f*u+h*d*m;break;case"ZXY":this._x=h*f*u-c*d*m,this._y=c*d*u+h*f*m,this._z=c*f*m+h*d*u,this._w=c*f*u-h*d*m;break;case"ZYX":this._x=h*f*u-c*d*m,this._y=c*d*u+h*f*m,this._z=c*f*m-h*d*u,this._w=c*f*u+h*d*m;break;case"YZX":this._x=h*f*u+c*d*m,this._y=c*d*u+h*f*m,this._z=c*f*m-h*d*u,this._w=c*f*u-h*d*m;break;case"XZY":this._x=h*f*u-c*d*m,this._y=c*d*u-h*f*m,this._z=c*f*m+h*d*u,this._w=c*f*u+h*d*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=i+o+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-i*c,this._z=r*f+a*c+i*l-s*o,this._w=a*f-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zu=class Zu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),f=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*f,this.y=i+l*f+o*c-r*u,this.z=s+l*u+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zu.prototype.isVector3=!0;let B=Zu;const ml=new B,jf=new qt,Ju=class Ju{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],d=i[5],m=i[8],v=s[0],g=s[3],p=s[6],S=s[1],M=s[4],x=s[7],w=s[2],A=s[5],C=s[8];return r[0]=a*v+o*S+l*w,r[3]=a*g+o*M+l*A,r[6]=a*p+o*x+l*C,r[1]=c*v+f*S+u*w,r[4]=c*g+f*M+u*A,r[7]=c*p+f*x+u*C,r[2]=h*v+d*S+m*w,r[5]=h*g+d*M+m*A,r[8]=h*p+d*x+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*r*f+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*r,d=c*r-a*l,m=t*u+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(s*c-f*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(f*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gl.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ju.prototype.isMatrix3=!0;let Qe=Ju;const gl=new Qe,Qf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mv(){const n={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Ro:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wo]:{primaries:e,whitePoint:i,transfer:Ro,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Qf,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),n}const tt=mv();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ds;class gv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=sa("canvas")),Ds.width=e.width,Ds.height=e.height;const s=Ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_l(s[a].image)):r.push(_l(s[a]))}else r=_l(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let vv=0;const vl=new B;class Qt extends ns{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=On,s=On,r=rn,a=vs,o=wn,l=Mn,c=Qt.DEFAULT_ANISOTROPY,f=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=is(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Pp;Qt.DEFAULT_ANISOTROPY=1;const ju=class ju{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,w=(p+1)/2,A=(f+h)/4,C=(u+v)/4,y=(m+g)/4;return M>x&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=C/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=y/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=y/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(h-f)*(h-f));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-v)/S,this.z=(h-f)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ju.prototype.isVector4=!0;let ht=ju;class xv extends ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Qt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kp extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yv extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Do=class Do{constructor(e,t,i,s,r,a,o,l,c,f,u,h,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,f,u,h,d,m,v,g)}set(e,t,i,s,r,a,o,l,c,f,u,h,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Do().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*f,d=a*u,m=o*f,v=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,m=c*f,v=c*u;t[0]=h+v*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=d*o-m,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,m=c*f,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*f,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,d=a*u,m=o*f,v=o*u;t[0]=l*f,t[4]=m*c-d,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*f,t[4]=v-h*u,t[8]=m*u+d,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*u+m,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+v,t[5]=a*f,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*f,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mv,e,Sv)}lookAt(e,t,i){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(i,xn),ki.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(i,xn)),ki.normalize(),Ea.crossVectors(xn,ki),s[0]=ki.x,s[4]=Ea.x,s[8]=xn.x,s[1]=ki.y,s[5]=Ea.y,s[9]=xn.y,s[2]=ki.z,s[6]=Ea.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],S=i[3],M=i[7],x=i[11],w=i[15],A=s[0],C=s[4],y=s[8],R=s[12],U=s[1],I=s[5],z=s[9],Z=s[13],re=s[2],W=s[6],q=s[10],G=s[14],Q=s[3],ce=s[7],Me=s[11],ve=s[15];return r[0]=a*A+o*U+l*re+c*Q,r[4]=a*C+o*I+l*W+c*ce,r[8]=a*y+o*z+l*q+c*Me,r[12]=a*R+o*Z+l*G+c*ve,r[1]=f*A+u*U+h*re+d*Q,r[5]=f*C+u*I+h*W+d*ce,r[9]=f*y+u*z+h*q+d*Me,r[13]=f*R+u*Z+h*G+d*ve,r[2]=m*A+v*U+g*re+p*Q,r[6]=m*C+v*I+g*W+p*ce,r[10]=m*y+v*z+g*q+p*Me,r[14]=m*R+v*Z+g*G+p*ve,r[3]=S*A+M*U+x*re+w*Q,r[7]=S*C+M*I+x*W+w*ce,r[11]=S*y+M*z+x*q+w*Me,r[15]=S*R+M*Z+x*G+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15],S=l*d-c*h,M=o*d-c*u,x=o*h-l*u,w=a*d-c*f,A=a*h-l*f,C=a*u-o*f;return t*(v*S-g*M+p*x)-i*(m*S-g*w+p*A)+s*(m*M-v*w+p*C)-r*(m*x-v*A+g*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-i*(r*f-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],S=t*o-i*a,M=t*l-s*a,x=t*c-r*a,w=i*l-s*o,A=i*c-r*o,C=s*c-r*l,y=f*v-u*m,R=f*g-h*m,U=f*p-d*m,I=u*g-h*v,z=u*p-d*v,Z=h*p-d*g,re=S*Z-M*z+x*I+w*U-A*R+C*y;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/re;return e[0]=(o*Z-l*z+c*I)*W,e[1]=(s*z-i*Z-r*I)*W,e[2]=(v*C-g*A+p*w)*W,e[3]=(h*A-u*C-d*w)*W,e[4]=(l*U-a*Z-c*R)*W,e[5]=(t*Z-s*U+r*R)*W,e[6]=(g*x-m*C-p*M)*W,e[7]=(f*C-h*x+d*M)*W,e[8]=(a*z-o*U+c*y)*W,e[9]=(i*U-t*z-r*y)*W,e[10]=(m*A-v*x+p*S)*W,e[11]=(u*x-f*A-d*S)*W,e[12]=(o*R-a*I-l*y)*W,e[13]=(t*I-i*R+s*y)*W,e[14]=(v*M-m*w-g*S)*W,e[15]=(f*w-u*M+h*S)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,u=o+o,h=r*c,d=r*f,m=r*u,v=a*f,g=a*u,p=o*u,S=l*c,M=l*f,x=l*u,w=i.x,A=i.y,C=i.z;return s[0]=(1-(v+p))*w,s[1]=(d+x)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(h+p))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(m+M)*C,s[9]=(g-S)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Us.set(s[0],s[1],s[2]).length();const o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);const c=1/a,f=1/o,u=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ai,l=!1){const c=this.elements,f=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===ai)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ia)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ai,l=!1){const c=this.elements,f=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===ai)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===ia)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Do.prototype.isMatrix4=!0;let Ve=Do;const Us=new B,Pn=new Ve,Mv=new B(0,0,0),Sv=new B(1,1,1),ki=new B,Ea=new B,xn=new B,th=new Ve,nh=new qt;class Jt{constructor(e=0,t=0,i=0,s=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bv=0;const ih=new B,Ns=new qt,mi=new Ve,Ta=new B,yr=new B,Ev=new B,Tv=new qt,sh=new B(1,0,0),rh=new B(0,1,0),ah=new B(0,0,1),oh={type:"added"},Av={type:"removed"},Fs={type:"childadded",child:null},xl={type:"childremoved",child:null};class At extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,t=new Jt,i=new qt,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(yr,Ta,this.up):mi.lookAt(Ta,yr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(mi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Av),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wv={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Ml(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=Uu(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ml(a,r,e+1/3),this.g=Ml(a,r,e),this.b=Ml(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=Vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return tt.workingToColorSpace(nn.copy(this),e),Math.round(lt(nn.r*255,0,255))*65536+Math.round(lt(nn.g*255,0,255))*256+Math.round(lt(nn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=wt){tt.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Aa);const i=Hr(zi.h,Aa.h,t),s=Hr(zi.s,Aa.s,t),r=Hr(zi.l,Aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ye;Ye.NAMES=Vp;class Fu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=i}clone(){return new Fu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rv extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const In=new B,gi=new B,Sl=new B,_i=new B,Os=new B,Bs=new B,lh=new B,bl=new B,El=new B,Tl=new B,Al=new ht,wl=new ht,Rl=new ht;class Fn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),gi.subVectors(i,t),Sl.subVectors(e,t);const a=In.dot(In),o=In.dot(gi),l=In.dot(Sl),c=gi.dot(gi),f=gi.dot(Sl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,d=(c*l-o*f)*h,m=(a*f-o*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Al.setScalar(0),wl.setScalar(0),Rl.setScalar(0),Al.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Al,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),gi.subVectors(e,t),In.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),In.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Os.subVectors(s,i),Bs.subVectors(r,i),bl.subVectors(e,i);const l=Os.dot(bl),c=Bs.dot(bl);if(l<=0&&c<=0)return t.copy(i);El.subVectors(e,s);const f=Os.dot(El),u=Bs.dot(El);if(f>=0&&u<=f)return t.copy(s);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Os,a);Tl.subVectors(e,r);const d=Os.dot(Tl),m=Bs.dot(Tl);if(m>=0&&d<=m)return t.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Bs,o);const g=f*m-d*u;if(g<=0&&u-f>=0&&d-m>=0)return lh.subVectors(r,s),o=(u-f)/(u-f+(d-m)),t.copy(s).addScaledVector(lh,o);const p=1/(g+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(Os,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Ra.subVectors(this.max,Mr),ks.subVectors(e.a,Mr),zs.subVectors(e.b,Mr),Vs.subVectors(e.c,Mr),Vi.subVectors(zs,ks),Gi.subVectors(Vs,zs),os.subVectors(ks,Vs);let t=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-os.z,os.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,os.z,0,-os.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-os.y,os.x,0];return!Cl(t,ks,zs,Vs,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,ks,zs,Vs,Ra))?!1:(Ca.crossVectors(Vi,Gi),t=[Ca.x,Ca.y,Ca.z],Cl(t,ks,zs,Vs,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,wa=new Qi,ks=new B,zs=new B,Vs=new B,Vi=new B,Gi=new B,os=new B,Mr=new B,Ra=new B,Ca=new B,ls=new B;function Cl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ls.fromArray(n,r);const o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),f=i.dot(ls);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const zt=new B,Pa=new at;let Cv=0;class Gn extends ns{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qf,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ou extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gp extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Pv=new Qi,Sr=new B,Pl=new B;class Rs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Pl)),this.expandByPoint(Sr.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Iv=0;const Tn=new Ve,Il=new At,Gs=new B,yn=new Qi,br=new Qi,$t=new B;class Yt extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y_(e)?Gp:Ou)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];br.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(yn.min,br.min),yn.expandByPoint($t),$t.addVectors(yn.max,br.max),yn.expandByPoint($t)):(yn.expandByPoint(br.min),yn.expandByPoint(br.max))}yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)$t.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),$t.add(Gs)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new B,l[y]=new B;const c=new B,f=new B,u=new B,h=new at,d=new at,m=new at,v=new B,g=new B;function p(y,R,U){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,U),f.sub(c),u.sub(c),d.sub(h),m.sub(h);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(I),o[y].add(v),o[R].add(v),o[U].add(v),l[y].add(g),l[R].add(g),l[U].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,R=S.length;y<R;++y){const U=S[y],I=U.start,z=U.count;for(let Z=I,re=I+z;Z<re;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const M=new B,x=new B,w=new B,A=new B;function C(y){w.fromBufferAttribute(s,y),A.copy(w);const R=o[y];M.copy(R),M.sub(w.multiplyScalar(w.dot(R))).normalize(),x.crossVectors(A,R);const I=x.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,R=S.length;y<R;++y){const U=S[y],I=U.start,z=U.count;for(let Z=I,re=I+z;Z<re;Z+=3)C(e.getX(Z+0)),C(e.getX(Z+1)),C(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,f=new B,u=new B;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*f;for(let p=0;p<f;p++)h[m++]=c[d++]}return new Gn(h,f,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],u=r[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Lv=0;class Ni extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=is(),this.name="",this.type="Material",this.blending=ir,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==uc&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$f&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new B,Ll=new B,Ia=new B,Hi=new B,Dl=new B,La=new B,Ul=new B;class qo{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ll.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Ll);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=Hi.dot(this.direction),l=-Hi.dot(Ia),c=Hi.lengthSq(),f=Math.abs(1-a*a);let u,h,d,m;if(f>0)if(u=a*l-o,h=a*o-l,m=r*f,u>=0)if(h>=-m)if(h<=m){const v=1/f;u*=v,h*=v,d=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ll).addScaledVector(Ia,h),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){Dl.subVectors(t,e),La.subVectors(i,e),Ul.crossVectors(Dl,La);let a=this.direction.dot(Ul),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(La.crossVectors(Hi,La));if(l<0)return null;const c=o*this.direction.dot(Dl.cross(Hi));if(c<0||l+c>a)return null;const f=-o*Hi.dot(Ul);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zi extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ch=new Ve,cs=new qo,Da=new Rs,uh=new B,Ua=new B,Na=new B,Fa=new B,Nl=new B,Oa=new B,fh=new B,Ba=new B;class Ht extends At{constructor(e=new Yt,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=o[l],u=r[l];f!==0&&(Nl.fromBufferAttribute(u,e),a?Oa.addScaledVector(Nl,f):Oa.addScaledVector(Nl.sub(t),f))}t.add(Oa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Da.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Da,uh)===null||cs.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(ch.copy(r).invert(),cs.copy(e.ray).applyMatrix4(ch),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,w=M;x<w;x+=3){const A=o.getX(x),C=o.getX(x+1),y=o.getX(x+2);s=ka(this,p,e,i,c,f,u,A,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const S=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);s=ka(this,a,e,i,c,f,u,S,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=a[g.materialIndex],S=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=S,w=M;x<w;x+=3){const A=x,C=x+1,y=x+2;s=ka(this,p,e,i,c,f,u,A,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const S=g,M=g+1,x=g+2;s=ka(this,a,e,i,c,f,u,S,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Dv(n,e,t,i,s,r,a,o){let l;if(e.side===_n?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ji,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:n}}function ka(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ua),n.getVertexPosition(l,Na),n.getVertexPosition(c,Fa);const f=Dv(n,e,t,i,Ua,Na,Fa,fh);if(f){const u=new B;Fn.getBarycoord(fh,Ua,Na,Fa,u),s&&(f.uv=Fn.getInterpolatedAttribute(s,o,l,c,u,new at)),r&&(f.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new at)),a&&(f.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};Fn.getNormal(Ua,Na,Fa,h.normal),f.face=h,f.barycoord=u}return f}const Er=new ht,hh=new ht,dh=new ht,Uv=new ht,ph=new Ve,za=new B,Fl=new Rs,mh=new Ve,Ol=new qo;class Nv extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wf,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)!==!1&&(mh.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(mh),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===N_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ge("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;hh.fromBufferAttribute(s.attributes.skinIndex,e),dh.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Er.copy(t),t.set(0,0,0,0)):(Er.set(...t,1),t.set(0,0,0)),Er.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=dh.getComponent(r);if(a!==0){const o=hh.getComponent(r);ph.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Uv.copy(Er).applyMatrix4(ph),a)}}return t.isVector4&&(t.w=Er.w),t.applyMatrix4(this.bindMatrixInverse)}}class Zc extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hp extends Qt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=jt,f=jt,u,h){super(null,a,o,l,c,f,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gh=new Ve,Fv=new Ve;class Bu{constructor(e=[],t=[]){this.uuid=is(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ge("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Fv;gh.multiplyMatrices(o,t[r]),gh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Bu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Hp(t,e,e,wn,Bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(Ge("Skeleton: No bone found with UUID:",r),a=new Zc),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}const Bl=new B,Ov=new B,Bv=new Qe;class ps{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Bl.subVectors(i,t).cross(Ov.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bv.getNormalMatrix(e),s=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Rs,kv=new at(.5,.5),Va=new B;class ku{constructor(e=new ps,t=new ps,i=new ps,s=new ps,r=new ps,a=new ps){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ai,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],u=r[5],h=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],S=r[12],M=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-a,d-f,p-m,w-S).normalize(),s[1].setComponents(c+a,d+f,p+m,w+S).normalize(),s[2].setComponents(c+o,d+u,p+v,w+M).normalize(),s[3].setComponents(c-o,d-u,p-v,w-M).normalize(),i)s[4].setComponents(l,h,g,x).normalize(),s[5].setComponents(c-l,d-h,p-g,w-x).normalize();else if(s[4].setComponents(c-l,d-h,p-g,w-x).normalize(),t===ai)s[5].setComponents(c+l,d+h,p+g,w+x).normalize();else if(t===ia)s[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=kv.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wp extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Co=new B,Po=new B,_h=new Ve,Tr=new qo,Ga=new Rs,kl=new B,vh=new B;class zv extends At{constructor(e=new Yt,t=new Wp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Po.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Co.distanceTo(Po);e.setAttribute("lineDistance",new Rt(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;_h.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(_h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){const p=f.getX(v),S=f.getX(v+1),M=Ha(this,e,Tr,l,p,S,v);M&&t.push(M)}if(this.isLineLoop){const v=f.getX(m-1),g=f.getX(d),p=Ha(this,e,Tr,l,v,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){const p=Ha(this,e,Tr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Ha(this,e,Tr,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ha(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Co.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),t.distanceSqToSegment(Co,Po,kl,vh)>i)return;kl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(kl);if(!(c<e.near||c>e.far))return{distance:c,point:vh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Xp extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xh=new Ve,Jc=new qo,Wa=new Rs,Xa=new B;class Vv extends At{constructor(e=new Yt,t=new Xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;xh.copy(s).invert(),Jc.copy(e.ray).applyMatrix4(xh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=h,v=d;m<v;m++){const g=c.getX(m);Xa.fromBufferAttribute(u,g),yh(Xa,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=h,v=d;m<v;m++)Xa.fromBufferAttribute(u,m),yh(Xa,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yh(n,e,t,i,s,r,a){const o=Jc.distanceSqToPoint(n);if(o<t){const l=new B;Jc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $p extends Qt{constructor(e=[],t=bs,i,s,r,a,o,l,c,f){super(e,t,i,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hr extends Qt{constructor(e,t,i=hi,s,r,a,o=jt,l=jt,c,f=Di,u=1){if(f!==Di&&f!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gv extends hr{constructor(e,t=hi,i=bs,s,r,a=jt,o=jt,l,c=Di){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qp extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class da extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],f=[],u=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(u,2));function m(v,g,p,S,M,x,w,A,C,y,R){const U=x/C,I=w/y,z=x/2,Z=w/2,re=A/2,W=C+1,q=y+1;let G=0,Q=0;const ce=new B;for(let Me=0;Me<q;Me++){const ve=Me*I-Z;for(let xe=0;xe<W;xe++){const Ze=xe*U-z;ce[v]=Ze*S,ce[g]=ve*M,ce[p]=re,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[g]=0,ce[p]=A>0?1:-1,f.push(ce.x,ce.y,ce.z),u.push(xe/C),u.push(1-Me/y),G+=1}}for(let Me=0;Me<y;Me++)for(let ve=0;ve<C;ve++){const xe=h+ve+W*Me,Ze=h+ve+W*(Me+1),ct=h+(ve+1)+W*(Me+1),Je=h+(ve+1)+W*Me;l.push(xe,Ze,Je),l.push(Ze,ct,Je),Q+=6}o.addGroup(d,Q,R),d+=Q,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Io extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new B,f=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[h]/e+1)/2,f.y=(a[h+1]/e+1)/2,l.push(f.x,f.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hv{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const f=i[s],h=i[s+1]-f,d=(a-f)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new at:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new B,s=[],r=[],a=[],o=new B,l=new Ve;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Wv(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Yp(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Kv(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let f=o,u=l;for(let h=t;h<s;h+=t){const d=n[h],m=n[h+1];d<o&&(o=d),m<l&&(l=m),d>f&&(f=d),m>u&&(u=m)}c=Math.max(f-o,u-l),c=c!==0?32767/c:0}return ra(r,a,t,o,l,c,0),a}function Yp(n,e,t,i,s){let r;if(s===ax(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Mh(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Mh(a/i|0,n[a],n[a+1],r);return r&&dr(r,r.next)&&(oa(r),r=r.next),r}function Ts(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(dr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ra(n,e,t,i,s,r,a){if(!n)return;!a&&r&&ex(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?$v(n,i,s,r):Xv(n)){e.push(l.i,n.i,c.i),oa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=qv(Ts(n),e),ra(n,e,t,i,s,r,2)):a===2&&Yv(n,e,t,i,s,r):ra(Ts(n),e,t,i,s,r,1);break}}}function Xv(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,f=Math.min(s,r,a),u=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let m=i.next;for(;m!==e;){if(m.x>=f&&m.x<=h&&m.y>=u&&m.y<=d&&Dr(s,o,r,l,a,c,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $v(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Lt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,f=s.y,u=r.y,h=a.y,d=Math.min(o,l,c),m=Math.min(f,u,h),v=Math.max(o,l,c),g=Math.max(f,u,h),p=jc(d,m,e,t,i),S=jc(v,g,e,t,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=p&&x&&x.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Dr(o,f,l,u,c,h,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Dr(o,f,l,u,c,h,x.x,x.y)&&Lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&Dr(o,f,l,u,c,h,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&Dr(o,f,l,u,c,h,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function qv(n,e){let t=n;do{const i=t.prev,s=t.next.next;!dr(i,s)&&Zp(i,t,t.next,s)&&aa(i,s)&&aa(s,i)&&(e.push(i.i,t.i,s.i),oa(t),oa(t.next),t=n=s),t=t.next}while(t!==n);return Ts(t)}function Yv(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ix(a,o)){let l=Jp(a,o);a=Ts(a,a.next),l=Ts(l,l.next),ra(a,e,t,i,s,r,0),ra(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Kv(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Yp(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(nx(c))}s.sort(Zv);for(let r=0;r<s.length;r++)t=Jv(s[r],t);return t}function Zv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Jv(n,e){const t=jv(n,e);if(!t)return e;const i=Jp(t,n);return Ts(i,i.next),Ts(t,t.next)}function jv(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(dr(n,t))return t;do{if(dr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let f=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Kp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);aa(t,n)&&(u<f||u===f&&(t.x>a.x||t.x===a.x&&Qv(a,t)))&&(a=t,f=u)}t=t.next}while(t!==o);return a}function Qv(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function ex(n,e,t,i){let s=n;do s.z===0&&(s.z=jc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tx(s)}function tx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function jc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Kp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Dr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Kp(n,e,t,i,s,r,a,o)}function ix(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sx(n,e)&&(aa(n,e)&&aa(e,n)&&rx(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||dr(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function dr(n,e){return n.x===e.x&&n.y===e.y}function Zp(n,e,t,i){const s=qa(Lt(n,e,t)),r=qa(Lt(n,e,i)),a=qa(Lt(t,i,n)),o=qa(Lt(t,i,e));return!!(s!==r&&a!==o||s===0&&$a(n,t,e)||r===0&&$a(n,i,e)||a===0&&$a(t,n,i)||o===0&&$a(t,e,i))}function $a(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qa(n){return n>0?1:n<0?-1:0}function sx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Zp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function aa(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function rx(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Jp(n,e){const t=Qc(n.i,n.x,n.y),i=Qc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Mh(n,e,t,i){const s=Qc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function oa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ax(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class ox{static triangulate(e,t,i=2){return Wv(e,t,i)}}class zu{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return zu.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Sh(e),bh(i,e);let a=e.length;t.forEach(Sh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,bh(i,t[l]);const o=ox.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Sh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function bh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class pa extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,u=e/o,h=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<f;p++){const S=p*h-a;for(let M=0;M<c;M++){const x=M*u-r;m.push(x,-S,0),v.push(0,0,1),g.push(M/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const M=S+c*p,x=S+c*(p+1),w=S+1+c*(p+1),A=S+1+c*p;d.push(M,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class ar extends Yt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],f=[];let u=e;const h=(t-e)/s,d=new B,m=new at;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const p=r+g/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,f.push(m.x,m.y)}u+=h}for(let v=0;v<s;v++){const g=v*(i+1);for(let p=0;p<i;p++){const S=p+g,M=S,x=S+i+1,w=S+i+2,A=S+1;o.push(M,x,A),o.push(x,w,A)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vu extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],u=new B,h=new B,d=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const S=[],M=p/i,x=a+M*o,w=e*Math.cos(x),A=Math.sqrt(e*e-w*w);let C=0;p===0&&a===0?C=.5/t:p===i&&l===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){const R=y/t,U=s+R*r;u.x=-A*Math.cos(U),u.y=w,u.z=A*Math.sin(U),m.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),g.push(R+C,1-M),S.push(c++)}f.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const M=f[p][S+1],x=f[p][S],w=f[p+1][S],A=f[p+1][S+1];(p!==0||a>0)&&d.push(M,x,A),(p!==i-1||l<Math.PI)&&d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Eh(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const s in i)e[s]=i[s]}return e}function Eh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const cx={clone:pr,merge:un};var ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ux,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new at().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ht().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class hx extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dx extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ya extends Ni{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eu extends Ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class px extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mx extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ka(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function gx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Th(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function _x(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class ma{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class vx extends ma{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zs,endingEnd:Zs}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Js:r=e,o=2*t-i;break;case Ao:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Js:a=e,l=2*i-t;break;case Ao:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),v=m*m,g=v*m,p=-h*g+2*h*v-h*m,S=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*m+1,M=(-1-d)*g+(1.5+d)*v+.5*m,x=d*g-d*v;for(let w=0;w!==o;++w)r[w]=p*a[f+w]+S*a[c+w]+M*a[l+w]+x*a[u+w];return r}}class Qp extends ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(i-t)/(s-t),u=1-f;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*f;return r}}class xx extends ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class yx extends ma{interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,u=this.outTangents;if(!f||!u){const m=(i-t)/(s-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}const h=o*2,d=e-1;for(let m=0;m!==o;++m){const v=a[c+m],g=a[l+m],p=d*h+m*2,S=u[p],M=u[p+1],x=e*h+m*2,w=f[x],A=f[x+1];let C=(i-t)/(s-t),y,R,U,I,z;for(let Z=0;Z<8;Z++){y=C*C,R=y*C,U=1-C,I=U*U,z=I*U;const W=z*t+3*I*C*S+3*U*y*w+R*s-i;if(Math.abs(W)<1e-10)break;const q=3*I*(S-t)+6*U*C*(w-S)+3*y*(s-w);if(Math.abs(q)<1e-10)break;C=C-W/q,C=Math.max(0,Math.min(1,C))}r[m]=z*v+3*I*C*M+3*U*y*A+R*g}return r}}class Xn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new yx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case To:t=this.InterpolantFactoryMethodDiscrete;break;case Kc:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break;case Xf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return pl;case this.InterpolantFactoryMethodBezier:return Xf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&K_(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*i,h=u-i,d=u+i;for(let m=0;m!==i;++m){const v=t[u+m];if(v!==t[h+m]||v!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Kc;class mr extends Xn{constructor(e,t,i){super(e,t,i)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=To;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class em extends Xn{constructor(e,t,i,s){super(e,t,i,s)}}em.prototype.ValueTypeName="color";class Yo extends Xn{constructor(e,t,i,s){super(e,t,i,s)}}Yo.prototype.ValueTypeName="number";class Mx extends ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let f=c+o;c!==f;c+=4)qt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ko extends Xn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Mx(this.times,this.values,this.getValueSize(),e)}}Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends Xn{constructor(e,t,i){super(e,t,i)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=To;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gu extends Xn{constructor(e,t,i,s){super(e,t,i,s)}}Gu.prototype.ValueTypeName="vector";class tu{constructor(e="",t=-1,i=[],s=Iu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=is(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(bx(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Xn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const f=gx(l);l=Th(l,1,f),c=Th(c,1,f),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Yo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],f=c.name.match(r);if(f&&f.length>1){const u=f[1];let h=s[u];h||(s[u]=h=[]),h.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Sx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yo;case"vector":case"vector2":case"vector3":case"vector4":return Gu;case"color":return em;case"quaternion":return Ko;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function bx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sx(n.type);if(n.times===void 0){const t=[],i=[];_x(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Wr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ah(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ah(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ah(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ex{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Tx=new Ex;class As{constructor(e){this.manager=e!==void 0?e:Tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class Ax extends Error{constructor(e,t){super(e),this.response=t}}class wx extends As{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wr.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:i,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ge("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=yi[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let v=0;const g=new ReadableStream({start(p){S();function S(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{v+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let A=0,C=f.length;A<C;A++){const y=f[A];y.onProgress&&y.onProgress(w)}p.enqueue(x),S()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Ax(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Wr.add(`file:${e}`,c);const f=yi[e];delete yi[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=yi[e];if(f===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hs=new WeakMap;class Rx extends As{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Hs.get(a);u===void 0&&(u=[],Hs.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=sa("img");function l(){f(),t&&t(this);const u=Hs.get(this)||[];for(let h=0;h<u.length;h++){const d=u[h];d.onLoad&&d.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(u){f(),s&&s(u),Wr.remove(`image:${e}`);const h=Hs.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(u)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Cx extends As{constructor(e){super(e)}load(e,t,i,s){const r=new Qt,a=new Rx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ga extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Px extends ga{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const zl=new Ve,wh=new B,Rh=new B;class Hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ku,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ia||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Za=new B,Ja=new qt,Zn=new B;class tm extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ja,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Za,Ja,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new B,Ch=new at,Ph=new at;class hn extends tm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Ph),t.subVectors(Ph,Ch)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ix extends Hu{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nm extends ga{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ix}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Lx extends Hu{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ih extends ga{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Wu extends tm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dx extends Hu{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class po extends ga{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Dx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ux extends ga{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nx{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ws=-90,Xs=1;class Fx extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Ws,Xs,e,t);s.layers=this.layers,this.add(s);const r=new hn(Ws,Xs,e,t);r.layers=this.layers,this.add(r);const a=new hn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const o=new hn(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new hn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const c=new hn(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ox extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bx{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){qt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;qt.multiplyQuaternionsFlat(e,a,e,t,e,i),qt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const Xu="\\[\\]\\.:\\/",kx=new RegExp("["+Xu+"]","g"),$u="[^"+Xu+"]",zx="[^"+Xu.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",$u),Gx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),Xx=new RegExp("^"+Vx+Gx+Hx+Wx+"$"),$x=["material","materials","bones","map"];class qx{constructor(e,t,i){const s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){const t=Xx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);$x.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=qx;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yx{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Zs,endingEnd:Zs};for(let c=0;c!==a;++c){const f=r[c].createInterpolant(null);o[c]=f,f.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=$o,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case k_:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(a),c[f].accumulateAdditive(o);break;case Iu:default:for(let f=0,u=l.length;f!==u;++f)l[f].evaluate(a),c[f].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===B_;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===O_){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Js,s.endingEnd=Js):(e?s.endingStart=this.zeroSlopeAtStart?Js:Zs:s.endingStart=Ao,t?s.endingEnd=this.zeroSlopeAtEnd?Js:Zs:s.endingEnd=Ao)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Kx=new Float32Array(1);class im extends ns{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let f=c[l];f===void 0&&(f={},c[l]=f);for(let u=0;u!==r;++u){const h=s[u],d=h.name;let m=f[d];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new Bx(ft.create(i,d,v),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],f=e._byClipCacheIndex;c._byClipCacheIndex=f,l[f]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Qp(new Float32Array(2),new Float32Array(2),1,Kx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?tu.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Iu),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const f=new Yx(this,a,t,i);return this._bindAction(f,c),this._addInactiveAction(f,o,r),f}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?tu.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const f=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=f,t[f]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Zx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Qu=class Qu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Qu.prototype.isMatrix2=!0;let Lh=Qu;function Dh(n,e,t,i){const s=Jx(i);switch(t){case Np:return n*e;case Op:return n*e/s.components*s.byteLength;case Ru:return n*e/s.components*s.byteLength;case Es:return n*e*2/s.components*s.byteLength;case Cu:return n*e*2/s.components*s.byteLength;case Fp:return n*e*3/s.components*s.byteLength;case wn:return n*e*4/s.components*s.byteLength;case Pu:return n*e*4/s.components*s.byteLength;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:case Sc:return Math.max(n,16)*Math.max(e,8)/4;case xc:case Mc:return Math.max(n,8)*Math.max(e,8)/2;case bc:case Ec:case Ac:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bo:case Rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Wc:case Xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $c:case qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Eo:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jx(n){switch(n){case Mn:case Ip:return{byteLength:1,components:1};case ea:case Lp:case Li:return{byteLength:2,components:1};case Au:case wu:return{byteLength:2,components:4};case hi:case Tu:case Bn:return{byteLength:4,components:1};case Dp:case Up:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jx(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,f);else{u.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<u.length;d++){const m=u[h],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,u[h]=v)}u.length=h+1;for(let d=0,m=u.length;d<m;d++){const v=u[d];n.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ey=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Xy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$M=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ES=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Qx,alphahash_pars_fragment:ey,alphamap_fragment:ty,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:sy,aomap_fragment:ry,aomap_pars_fragment:ay,batching_pars_vertex:oy,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:uy,bsdfs:fy,iridescence_fragment:hy,bumpmap_pars_fragment:dy,clipping_planes_fragment:py,clipping_planes_pars_fragment:my,clipping_planes_pars_vertex:gy,clipping_planes_vertex:_y,color_fragment:vy,color_pars_fragment:xy,color_pars_vertex:yy,color_vertex:My,common:Sy,cube_uv_reflection_fragment:by,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Ty,displacementmap_vertex:Ay,emissivemap_fragment:wy,emissivemap_pars_fragment:Ry,colorspace_fragment:Cy,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Dy,envmap_pars_vertex:Uy,envmap_physical_pars_fragment:Xy,envmap_vertex:Ny,fog_vertex:Fy,fog_pars_vertex:Oy,fog_fragment:By,fog_pars_fragment:ky,gradientmap_pars_fragment:zy,lightmap_pars_fragment:Vy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Hy,lights_pars_begin:Wy,lights_toon_fragment:$y,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:jy,lights_fragment_maps:Qy,lights_fragment_end:eM,lightprobes_pars_fragment:tM,logdepthbuf_fragment:nM,logdepthbuf_pars_fragment:iM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:rM,map_fragment:aM,map_pars_fragment:oM,map_particle_fragment:lM,map_particle_pars_fragment:cM,metalnessmap_fragment:uM,metalnessmap_pars_fragment:fM,morphinstance_vertex:hM,morphcolor_vertex:dM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:gM,normal_fragment_begin:_M,normal_fragment_maps:vM,normal_pars_fragment:xM,normal_pars_vertex:yM,normal_vertex:MM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:bM,clearcoat_normal_fragment_maps:EM,clearcoat_pars_fragment:TM,iridescence_pars_fragment:AM,opaque_fragment:wM,packing:RM,premultiplied_alpha_fragment:CM,project_vertex:PM,dithering_fragment:IM,dithering_pars_fragment:LM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:NM,shadowmap_pars_vertex:FM,shadowmap_vertex:OM,shadowmask_pars_fragment:BM,skinbase_vertex:kM,skinning_pars_vertex:zM,skinning_vertex:VM,skinnormal_vertex:GM,specularmap_fragment:HM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:$M,transmission_fragment:qM,transmission_pars_fragment:YM,uv_pars_fragment:KM,uv_pars_vertex:ZM,uv_vertex:JM,worldpos_vertex:jM,background_vert:QM,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:sS,depth_vert:rS,depth_frag:aS,distance_vert:oS,distance_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:hS,meshbasic_vert:dS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:_S,meshmatcap_frag:vS,meshnormal_vert:xS,meshnormal_frag:yS,meshphong_vert:MS,meshphong_frag:SS,meshphysical_vert:bS,meshphysical_frag:ES,meshtoon_vert:TS,meshtoon_frag:AS,points_vert:wS,points_frag:RS,shadow_vert:CS,shadow_frag:PS,sprite_vert:IS,sprite_frag:LS},Ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ii={basic:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:un([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:un([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:un([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:un([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:un([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:un([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:un([Ae.common,Ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:un([Ae.lights,Ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ii.physical={uniforms:un([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ja={r:0,b:0,g:0},DS=new Ve,rm=new Qe;rm.set(-1,0,0,0,1,0,0,0,1);function US(n,e,t,i,s,r){const a=new Ye(0);let o=s===!0?0:1,l,c,f=null,u=0,h=null;function d(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){const x=S.backgroundBlurriness>0;M=e.get(M,x)}return M}function m(S){let M=!1;const x=d(S);x===null?g(a,o):x&&x.isColor&&(g(x,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===Xo)?(c===void 0&&(c=new Ht(new da(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:pr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(DS.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rm),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==_t,(f!==x||u!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ht(new pa(2,2),new di({name:"BackgroundMaterial",uniforms:pr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=x,u=x.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,M){S.getRGB(ja,jp(n)),t.buffers.color.setClear(ja.r,ja.g,ja.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:v,dispose:p}}function NS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(I,z,Z,re,W){let q=!1;const G=u(I,re,Z,z);r!==G&&(r=G,c(r.object)),q=d(I,re,Z,W),q&&m(I,re,Z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(I,z,Z,re),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function f(I){return n.deleteVertexArray(I)}function u(I,z,Z,re){const W=re.wireframe===!0;let q=i[z.id];q===void 0&&(q={},i[z.id]=q);const G=I.isInstancedMesh===!0?I.id:0;let Q=q[G];Q===void 0&&(Q={},q[G]=Q);let ce=Q[Z.id];ce===void 0&&(ce={},Q[Z.id]=ce);let Me=ce[W];return Me===void 0&&(Me=h(l()),ce[W]=Me),Me}function h(I){const z=[],Z=[],re=[];for(let W=0;W<t;W++)z[W]=0,Z[W]=0,re[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:re,object:I,attributes:{},index:null}}function d(I,z,Z,re){const W=r.attributes,q=z.attributes;let G=0;const Q=Z.getAttributes();for(const ce in Q)if(Q[ce].location>=0){const ve=W[ce];let xe=q[ce];if(xe===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(xe=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(xe=I.instanceColor)),ve===void 0||ve.attribute!==xe||xe&&ve.data!==xe.data)return!0;G++}return r.attributesNum!==G||r.index!==re}function m(I,z,Z,re){const W={},q=z.attributes;let G=0;const Q=Z.getAttributes();for(const ce in Q)if(Q[ce].location>=0){let ve=q[ce];ve===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(ve=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(ve=I.instanceColor));const xe={};xe.attribute=ve,ve&&ve.data&&(xe.data=ve.data),W[ce]=xe,G++}r.attributes=W,r.attributesNum=G,r.index=re}function v(){const I=r.newAttributes;for(let z=0,Z=I.length;z<Z;z++)I[z]=0}function g(I){p(I,0)}function p(I,z){const Z=r.newAttributes,re=r.enabledAttributes,W=r.attributeDivisors;Z[I]=1,re[I]===0&&(n.enableVertexAttribArray(I),re[I]=1),W[I]!==z&&(n.vertexAttribDivisor(I,z),W[I]=z)}function S(){const I=r.newAttributes,z=r.enabledAttributes;for(let Z=0,re=z.length;Z<re;Z++)z[Z]!==I[Z]&&(n.disableVertexAttribArray(Z),z[Z]=0)}function M(I,z,Z,re,W,q,G){G===!0?n.vertexAttribIPointer(I,z,Z,W,q):n.vertexAttribPointer(I,z,Z,re,W,q)}function x(I,z,Z,re){v();const W=re.attributes,q=Z.getAttributes(),G=z.defaultAttributeValues;for(const Q in q){const ce=q[Q];if(ce.location>=0){let Me=W[Q];if(Me===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),Me!==void 0){const ve=Me.normalized,xe=Me.itemSize,Ze=e.get(Me);if(Ze===void 0)continue;const ct=Ze.buffer,Je=Ze.type,ne=Ze.bytesPerElement,ge=Je===n.INT||Je===n.UNSIGNED_INT||Me.gpuType===Tu;if(Me.isInterleavedBufferAttribute){const he=Me.data,He=he.stride,$e=Me.offset;if(he.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ce.locationSize;Fe++)p(ce.location+Fe,he.meshPerAttribute);I.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Fe=0;Fe<ce.locationSize;Fe++)g(ce.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let Fe=0;Fe<ce.locationSize;Fe++)M(ce.location+Fe,xe/ce.locationSize,Je,ve,He*ne,($e+xe/ce.locationSize*Fe)*ne,ge)}else{if(Me.isInstancedBufferAttribute){for(let he=0;he<ce.locationSize;he++)p(ce.location+he,Me.meshPerAttribute);I.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let he=0;he<ce.locationSize;he++)g(ce.location+he);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let he=0;he<ce.locationSize;he++)M(ce.location+he,xe/ce.locationSize,Je,ve,xe*ne,xe/ce.locationSize*he*ne,ge)}}else if(G!==void 0){const ve=G[Q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(ce.location,ve);break;case 3:n.vertexAttrib3fv(ce.location,ve);break;case 4:n.vertexAttrib4fv(ce.location,ve);break;default:n.vertexAttrib1fv(ce.location,ve)}}}}S()}function w(){R();for(const I in i){const z=i[I];for(const Z in z){const re=z[Z];for(const W in re){const q=re[W];for(const G in q)f(q[G].object),delete q[G];delete re[W]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const z=i[I.id];for(const Z in z){const re=z[Z];for(const W in re){const q=re[W];for(const G in q)f(q[G].object),delete q[G];delete re[W]}}delete i[I.id]}function C(I){for(const z in i){const Z=i[z];for(const re in Z){const W=Z[re];if(W[I.id]===void 0)continue;const q=W[I.id];for(const G in q)f(q[G].object),delete q[G];delete W[I.id]}}}function y(I){for(const z in i){const Z=i[z],re=I.isInstancedMesh===!0?I.id:0,W=Z[re];if(W!==void 0){for(const q in W){const G=W[q];for(const Q in G)f(G[Q].object),delete G[Q];delete W[q]}delete Z[re],Object.keys(Z).length===0&&delete i[z]}}}function R(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function FS(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function OS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Bn&&!y)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Ge("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,maxSamples:w,samples:A}}function BS(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ps,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?f(null):c();else{const S=r?0:i,M=S*4;let x=p.clippingState||null;l.value=x,x=f(m,h,M,d);for(let w=0;w!==M;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,d,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=d;M!==v;++M,x+=4)a.copy(u[M]).applyMatrix4(S,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Ji=4,Uh=[.125,.215,.35,.446,.526,.582],_s=20,kS=256,Ar=new Wu,Nh=new Ye;let Vl=null,Gl=0,Hl=0,Wl=!1;const zS=new B;class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=zS}=r;Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl,Gl,Hl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Li,format:wn,colorSpace:wo,depthBuffer:!1},s=Oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VS(r)),this._blurMaterial=HS(r,e,t),this._ggxMaterial=GS(r,e,t)}return s}_compileMaterial(e){const t=new Ht(new Yt,e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,i,s,r){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Nh),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new da,new Zi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(Nh),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[M]));const w=this._cubeSize;$s(s,x*w,M>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=d,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===bs||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=0+c*1.25,d=u*h,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Ji?i-m+Ji:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,$s(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,$s(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Ar)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[s];u.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_s-1),v=r/m,g=isFinite(r)?1+Math.floor(f*v):_s;g>_s&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_s}`);const p=[];let S=0;for(let C=0;C<_s;++C){const y=C/v,R=Math.exp(-y*y/2);p.push(R),C===0?S+=R:C<g&&(S+=2*R)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=m,h.mipInt.value=M-i;const x=this._sizeLods[s],w=3*x*(s>M-Ji?s-M+Ji:0),A=4*(this._cubeSize-x);$s(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Ar)}}function VS(n){const e=[],t=[],i=[];let s=n;const r=n-Ji+1+Uh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Ji?l=Uh[a-n+Ji-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,m=6,v=3,g=2,p=1,S=new Float32Array(v*m*d),M=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,y=A>2?0:-1,R=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];S.set(R,v*m*A),M.set(h,g*m*A);const U=[A,A,A,A,A,A];x.set(U,p*m*A)}const w=new Yt;w.setAttribute("position",new Gn(S,v)),w.setAttribute("uv",new Gn(M,g)),w.setAttribute("faceIndex",new Gn(x,p)),i.push(new Ht(w,null)),s>Ji&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Oh(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function GS(n,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function HS(n,e,t){const i=new Float32Array(_s),s=new B(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Bh(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function kh(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class am extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $p(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new da(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ti});r.uniforms.tEquirect.value=t;const a=new Ht(s,r),o=t.minFilter;return t.minFilter===vs&&(t.minFilter=rn),new Fx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function WS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===lo||d===hl)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new am(m.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,m=d===lo||d===hl,v=d===bs||d===ur;if(m||v){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Fh(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return m&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Fh(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function o(h,d){return d===lo?h.mapping=bs:d===hl&&(h.mapping=ur),h}function l(h){let d=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(h){const d=h.target;d.removeEventListener("dispose",f);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function XS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&sr("WebGLRenderer: "+i+" extension not supported."),s}}}function $S(n,e,t,i){const s={},r=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(u){const h=[],d=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const S=d.array;v=d.version;for(let M=0,x=S.length;M<x;M+=3){const w=S[M+0],A=S[M+1],C=S[M+2];h.push(w,A,A,C,C,w)}}else{const S=m.array;v=m.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const w=M+0,A=M+1,C=M+2;h.push(w,A,A,C,C,w)}}const g=new(m.count>=65535?Gp:Ou)(h,1);g.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function f(u){const h=r.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function qS(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){n.drawElements(i,h,r,u*a),t.update(h,i,1)}function c(u,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,u*a,d),t.update(h,i,d))}function f(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function YS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function KS(n,e,t){const i=new WeakMap,s=new ht;function r(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let U=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var d=U;h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let w=o.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*u),y=new kp(C,w,A,u);y.type=Bn,y.needsUpdate=!0;const R=x*4;for(let I=0;I<u;I++){const z=p[I],Z=S[I],re=M[I],W=w*A*4*I;for(let q=0;q<z.count;q++){const G=q*R;m===!0&&(s.fromBufferAttribute(z,q),C[W+G+0]=s.x,C[W+G+1]=s.y,C[W+G+2]=s.z,C[W+G+3]=0),v===!0&&(s.fromBufferAttribute(Z,q),C[W+G+4]=s.x,C[W+G+5]=s.y,C[W+G+6]=s.z,C[W+G+7]=0),g===!0&&(s.fromBufferAttribute(re,q),C[W+G+8]=s.x,C[W+G+9]=s.y,C[W+G+10]=s.z,C[W+G+11]=re.itemSize===4?s.w:1)}}h={count:u,texture:y,size:new at(w,A)},i.set(o,h),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ZS(n,e,t,i,s){let r=new WeakMap;function a(c){const f=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function o(){r=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const JS={[bp]:"LINEAR_TONE_MAPPING",[Ep]:"REINHARD_TONE_MAPPING",[Tp]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[Rp]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[wp]:"CUSTOM_TONE_MAPPING"};function jS(n,e,t,i,s,r){const a=new ui(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new hr(e,t):void 0}),o=new ui(e,t,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new Yt;l.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const c=new hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ht(l,c),u=new Wu(-1,1,1,-1,0,1);let h=null,d=null,m=!1,v,g=null,p=[],S=!1;this.setSize=function(M,x){a.setSize(M,x),o.setSize(M,x);for(let w=0;w<p.length;w++){const A=p[w];A.setSize&&A.setSize(M,x)}},this.setEffects=function(M){p=M,S=p.length>0&&p[0].isRenderPass===!0;const x=a.width,w=a.height;for(let A=0;A<p.length;A++){const C=p[A];C.setSize&&C.setSize(x,w)}},this.begin=function(M,x){if(m||M.toneMapping===ci&&p.length===0)return!1;if(g=x,x!==null){const w=x.width,A=x.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return S===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=ci,!0},this.hasRenderPass=function(){return S},this.end=function(M,x){M.toneMapping=v,m=!0;let w=a,A=o;for(let C=0;C<p.length;C++){const y=p[C];if(y.enabled!==!1&&(y.render(M,A,w,x),y.needsSwap!==!1)){const R=w;w=A,A=R}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,c.defines={},tt.getTransfer(h)===_t&&(c.defines.SRGB_TRANSFER="");const C=JS[d];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(g),M.render(f,u),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const om=new Qt,nu=new hr(1,1),lm=new kp,cm=new yv,um=new $p,zh=[],Vh=[],Gh=new Float32Array(16),Hh=new Float32Array(9),Wh=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function ib(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Wh.set(i),n.uniformMatrix2fv(this.addr,!1,Wh),Xt(t,i)}}function sb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Hh.set(i),n.uniformMatrix3fv(this.addr,!1,Hh),Xt(t,i)}}function rb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Gh.set(i),n.uniformMatrix4fv(this.addr,!1,Gh),Xt(t,i)}}function ab(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function pb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nu.compareFunction=t.isReversedDepthBuffer()?Du:Lu,r=nu):r=om,t.setTexture2D(e||r,s)}function mb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cm,s)}function gb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||um,s)}function _b(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lm,s)}function vb(n){switch(n){case 5126:return QS;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ab;case 35667:case 35671:return ob;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return fb;case 36295:return hb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return _b}}function xb(n,e){n.uniform1fv(this.addr,e)}function yb(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function Mb(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function Sb(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function bb(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Eb(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Tb(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ab(n,e){n.uniform1iv(this.addr,e)}function wb(n,e){n.uniform2iv(this.addr,e)}function Rb(n,e){n.uniform3iv(this.addr,e)}function Cb(n,e){n.uniform4iv(this.addr,e)}function Pb(n,e){n.uniform1uiv(this.addr,e)}function Ib(n,e){n.uniform2uiv(this.addr,e)}function Lb(n,e){n.uniform3uiv(this.addr,e)}function Db(n,e){n.uniform4uiv(this.addr,e)}function Ub(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=nu:a=om;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Nb(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cm,r[a])}function Fb(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||um,r[a])}function Ob(n,e,t){const i=this.cache,s=e.length,r=Jo(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lm,r[a])}function Bb(n){switch(n){case 5126:return xb;case 35664:return yb;case 35665:return Mb;case 35666:return Sb;case 35674:return bb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return Ab;case 35667:case 35671:return wb;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return Pb;case 36294:return Ib;case 36295:return Lb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ob}}class kb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vb(t.type)}}class zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bb(t.type)}}class Vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function Xh(n,e){n.seq.push(e),n.map[e.id]=e}function Gb(n,e,t){const i=n.name,s=i.length;for(Xl.lastIndex=0;;){const r=Xl.exec(i),a=Xl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xh(t,c===void 0?new kb(o,n,e):new zb(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Vb(o),Xh(t,u)),t=u}}}class mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Gb(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function $h(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hb=37297;let Wb=0;function Xb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qh=new Qe;function $b(n){tt._getMatrix(qh,tt.workingColorSpace,n);const e=`mat3( ${qh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Ro:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xb(n.getShaderSource(e),o)}else return r}function qb(n,e){const t=$b(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yb={[bp]:"Linear",[Ep]:"Reinhard",[Tp]:"Cineon",[Ap]:"ACESFilmic",[Rp]:"AgX",[Cp]:"Neutral",[wp]:"Custom"};function Kb(n,e){const t=Yb[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qa=new B;function Zb(){tt.getLuminanceCoefficients(Qa);const n=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function jb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ur(n){return n!==""}function Kh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eE=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace(eE,nE)}const tE=new Map;function nE(n,e){let t=rt[e];if(t===void 0){const i=tE.get(e);if(i!==void 0)t=rt[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return iu(t)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace(iE,sE)}function sE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rE={[oo]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function aE(n){return rE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oE={[bs]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE_UV"};function lE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":oE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const cE={[ur]:"ENVMAP_MODE_REFRACTION"};function uE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fE={[Wo]:"ENVMAP_BLENDING_MULTIPLY",[D_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function hE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fE[n.combine]||"ENVMAP_BLENDING_NONE"}function dE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pE(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=aE(t),c=lE(t),f=uE(t),u=hE(t),h=dE(t),d=Jb(t),m=jb(r),v=s.createProgram();let g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ur).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(g=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?rt.tonemapping_pars_fragment:"",t.toneMapping!==ci?Kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,qb("linearToOutputTexel",t.outputColorSpace),Zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=iu(a),a=Kh(a,t),a=Zh(a,t),o=iu(o),o=Kh(o,t),o=Zh(o,t),a=Jh(a),o=Jh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+g+a,x=S+p+o,w=$h(s,s.VERTEX_SHADER,M),A=$h(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(v)||"",Z=s.getShaderInfoLog(w)||"",re=s.getShaderInfoLog(A)||"",W=z.trim(),q=Z.trim(),G=re.trim();let Q=!0,ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,A);else{const Me=Yh(s,w,"vertex"),ve=Yh(s,A,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+Me+`
`+ve)}else W!==""?Ge("WebGLProgram: Program Info Log:",W):(q===""||G==="")&&(ce=!1);ce&&(I.diagnostics={runnable:Q,programLog:W,vertexShader:{log:q,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(w),s.deleteShader(A),y=new mo(s,v),R=Qb(s,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,Hb)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let mE=0;class gE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _E(e),t.set(e,i)),i}}class _E{constructor(e){this.id=mE++,this.code=e,this.usedTimes=0}}function vE(n){return n===Es||n===bo||n===Eo}function xE(n,e,t,i,s,r){const a=new zp,o=new gE,l=new Set,c=[],f=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,R,U,I,z,Z){const re=I.fog,W=z.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Q=e.get(y.envMap||q,G),ce=Q&&Q.mapping===Xo?Q.image.height:null,Me=d[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=ve!==void 0?ve.length:0;let Ze=0;W.morphAttributes.position!==void 0&&(Ze=1),W.morphAttributes.normal!==void 0&&(Ze=2),W.morphAttributes.color!==void 0&&(Ze=3);let ct,Je,ne,ge;if(Me){const Oe=ii[Me];ct=Oe.vertexShader,Je=Oe.fragmentShader}else{ct=y.vertexShader,Je=y.fragmentShader;const Oe=o.getVertexShaderStage(y),Dt=o.getFragmentShaderStage(y);o.update(y,Oe,Dt),ne=Oe.id,ge=Dt.id}const he=n.getRenderTarget(),He=n.state.buffers.depth.getReversed(),$e=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,P=!!y.map,D=!!y.matcap,$=!!Q,ie=!!y.aoMap,L=!!y.lightMap,F=!!y.bumpMap&&y.wireframe===!1,se=!!y.normalMap,le=!!y.displacementMap,ue=!!y.emissiveMap,te=!!y.metalnessMap,be=!!y.roughnessMap,T=y.anisotropy>0,de=y.clearcoat>0,me=y.dispersion>0,E=y.iridescence>0,_=y.sheen>0,N=y.transmission>0,V=T&&!!y.anisotropyMap,J=de&&!!y.clearcoatMap,pe=de&&!!y.clearcoatNormalMap,_e=de&&!!y.clearcoatRoughnessMap,ee=E&&!!y.iridescenceMap,X=E&&!!y.iridescenceThicknessMap,oe=_&&!!y.sheenColorMap,Ie=_&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,Se=!!y.specularColorMap,We=!!y.specularIntensityMap,qe=N&&!!y.transmissionMap,je=N&&!!y.thicknessMap,O=!!y.gradientMap,ye=!!y.alphaMap,ae=y.alphaTest>0,Te=!!y.alphaHash,we=!!y.extensions;let fe=ci;y.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(fe=n.toneMapping);const Be={shaderID:Me,shaderType:y.type,shaderName:y.name,vertexShader:ct,fragmentShader:Je,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&z._colorsTexture!==null,instancing:$e,instancingColor:$e&&z.instanceColor!==null,instancingMorph:$e&&z.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:P,matcap:D,envMap:$,envMapMode:$&&Q.mapping,envMapCubeUVHeight:ce,aoMap:ie,lightMap:L,bumpMap:F,normalMap:se,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:se&&y.normalMapType===V_,normalMapTangentSpace:se&&y.normalMapType===na,packedNormalMap:se&&y.normalMapType===na&&vE(y.normalMap.format),metalnessMap:te,roughnessMap:be,anisotropy:T,anisotropyMap:V,clearcoat:de,clearcoatMap:J,clearcoatNormalMap:pe,clearcoatRoughnessMap:_e,dispersion:me,iridescence:E,iridescenceMap:ee,iridescenceThicknessMap:X,sheen:_,sheenColorMap:oe,sheenRoughnessMap:Ie,specularMap:Ee,specularColorMap:Se,specularIntensityMap:We,transmission:N,transmissionMap:qe,thicknessMap:je,gradientMap:O,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:ae,alphaHash:Te,combine:y.combine,mapUv:P&&m(y.map.channel),aoMapUv:ie&&m(y.aoMap.channel),lightMapUv:L&&m(y.lightMap.channel),bumpMapUv:F&&m(y.bumpMap.channel),normalMapUv:se&&m(y.normalMap.channel),displacementMapUv:le&&m(y.displacementMap.channel),emissiveMapUv:ue&&m(y.emissiveMap.channel),metalnessMapUv:te&&m(y.metalnessMap.channel),roughnessMapUv:be&&m(y.roughnessMap.channel),anisotropyMapUv:V&&m(y.anisotropyMap.channel),clearcoatMapUv:J&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:X&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&m(y.sheenRoughnessMap.channel),specularMapUv:Ee&&m(y.specularMap.channel),specularColorMapUv:Se&&m(y.specularColorMap.channel),specularIntensityMapUv:We&&m(y.specularIntensityMap.channel),transmissionMapUv:qe&&m(y.transmissionMap.channel),thicknessMapUv:je&&m(y.thicknessMap.channel),alphaMapUv:ye&&m(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(se||T),vertexNormals:!!W.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(P||ye),fog:!!re,useFog:y.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:He,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ze,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:P&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nn,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)R.push(U),R.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(p(R,y),S(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function p(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function S(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){const R=d[y.type];let U;if(R){const I=ii[R];U=cx.clone(I.uniforms)}else U=y.uniforms;return U}function x(y,R){let U=f.get(R);return U!==void 0?++U.usedTimes:(U=new pE(n,R,y,s),c.push(U),f.set(R,U)),U}function w(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:C}}function yE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ME(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Qh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,v,g,p){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},n[e]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=m,S.materialVariant=a(h),S.groupOrder=v,S.renderOrder=h.renderOrder,S.z=g,S.group=p),e++,S}function l(h,d,m,v,g,p){const S=o(h,d,m,v,g,p);m.transmission>0?i.push(S):m.transparent===!0?s.push(S):t.push(S)}function c(h,d,m,v,g,p){const S=o(h,d,m,v,g,p);m.transmission>0?i.unshift(S):m.transparent===!0?s.unshift(S):t.unshift(S)}function f(h,d,m){t.length>1&&t.sort(h||ME),i.length>1&&i.sort(d||Qh),s.length>1&&s.sort(d||Qh),m&&(t.reverse(),i.reverse(),s.reverse())}function u(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:f}}function SE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new ed,n.set(i,[a])):s>=r.length?(a=new ed,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ye};break;case"SpotLight":t={position:new B,direction:new B,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function EE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let TE=0;function AE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wE(n){const e=new bE,t=EE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new Ve,a=new Ve;function o(c){let f=0,u=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,S=0,M=0,x=0,w=0,A=0,C=0;c.sort(AE);for(let R=0,U=c.length;R<U;R++){const I=c[R],z=I.color,Z=I.intensity,re=I.distance;let W=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Es?W=I.shadow.map.texture:W=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=z.r*Z,u+=z.g*Z,h+=z.b*Z;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],Z);C++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,Q=t.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=q,d++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(z).multiplyScalar(Z),q.distance=re,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;const G=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,G.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=G.matrix,I.castShadow){const Q=t.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=W,x++}v++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(z).multiplyScalar(Z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const G=I.shadow,Q=t.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=q,m++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(Z),q.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==d||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==S||y.numPointShadows!==M||y.numSpotShadows!==x||y.numSpotMaps!==w||y.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,y.directionalLength=d,y.pointLength=m,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=S,y.numPointShadows=M,y.numSpotShadows=x,y.numSpotMaps=w,y.numLightProbes=C,i.version=TE++)}function l(c,f){let u=0,h=0,d=0,m=0,v=0;const g=f.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(M.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function td(n){const e=new wE(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function f(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function RE(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new td(n),e.set(s,[o])):r>=a.length?(o=new td(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IE=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],LE=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],nd=new Ve,wr=new B,$l=new B;function DE(n,e,t){let i=new ku;const s=new at,r=new at,a=new ht,o=new px,l=new mx,c={},f=t.maxTextureSize,u={[ji]:_n,[_n]:ji,[Nn]:Nn},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:CE,fragmentShader:PE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Yt;m.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let p=this.type;this.render=function(A,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===p_&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oo);const R=n.getRenderTarget(),U=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ti),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=p!==this.type;Z&&C.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(W=>W.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,W=A.length;re<W;re++){const q=A[re],G=q.shadow;if(G===void 0){Ge("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();s.multiply(Q),r.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y));const ce=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ce,G.map===null||Z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Lr){if(q.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ui(s.x,s.y,{format:Es,type:Li,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new hr(s.x,s.y,Bn),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Di,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt}else q.isPointLight?(G.map=new am(s.x),G.map.depthTexture=new Gv(s.x,hi)):(G.map=new ui(s.x,s.y),G.map.depthTexture=new hr(s.x,s.y,hi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Di,this.type===oo?(G.map.depthTexture.compareFunction=ce?Du:Lu,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=jt,G.map.depthTexture.magFilter=jt);G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<Me;ve++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(G.map),n.clear());const xe=G.getViewport(ve);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),z.viewport(a)}if(q.isPointLight){const xe=G.camera,Ze=G.matrix,ct=q.distance||xe.far;ct!==xe.far&&(xe.far=ct,xe.updateProjectionMatrix()),wr.setFromMatrixPosition(q.matrixWorld),xe.position.copy(wr),$l.copy(xe.position),$l.add(IE[ve]),xe.up.copy(LE[ve]),xe.lookAt($l),xe.updateMatrixWorld(),Ze.makeTranslation(-wr.x,-wr.y,-wr.z),nd.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(nd,xe.coordinateSystem,xe.reversedDepth)}else G.updateMatrices(q);i=G.getFrustum(),x(C,y,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Lr&&S(G,y),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(R,U,I)};function S(A,C){const y=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(s.x,s.y,{format:Es,type:Li})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,y,h,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,y,d,v,null)}function M(A,C,y,R){let U=null;const I=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)U=I;else if(U=y.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=U.uuid,Z=C.uuid;let re=c[z];re===void 0&&(re={},c[z]=re);let W=re[Z];W===void 0&&(W=U.clone(),re[Z]=W,C.addEventListener("dispose",w)),U=W}if(U.visible=C.visible,U.wireframe=C.wireframe,R===Lr?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:u[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const z=n.properties.get(U);z.light=y}return U}function x(A,C,y,R,U){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===Lr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),re=A.material;if(Array.isArray(re)){const W=Z.groups;for(let q=0,G=W.length;q<G;q++){const Q=W[q],ce=re[Q.materialIndex];if(ce&&ce.visible){const Me=M(A,ce,R,U);A.onBeforeShadow(n,A,C,y,Z,Me,Q),n.renderBufferDirect(y,null,Z,Me,A,Q),A.onAfterShadow(n,A,C,y,Z,Me,Q)}}}else if(re.visible){const W=M(A,re,R,U);A.onBeforeShadow(n,A,C,y,Z,W,null),n.renderBufferDirect(y,null,Z,W,A,null),A.onAfterShadow(n,A,C,y,Z,W,null)}}const z=A.children;for(let Z=0,re=z.length;Z<re;Z++)x(z[Z],C,y,R,U)}function w(A){A.target.removeEventListener("dispose",w);for(const y in c){const R=c[y],U=A.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function UE(n,e){function t(){let O=!1;const ye=new ht;let ae=null;const Te=new ht(0,0,0,0);return{setMask:function(we){ae!==we&&!O&&(n.colorMask(we,we,we,we),ae=we)},setLocked:function(we){O=we},setClear:function(we,fe,Be,Oe,Dt){Dt===!0&&(we*=Oe,fe*=Oe,Be*=Oe),ye.set(we,fe,Be,Oe),Te.equals(ye)===!1&&(n.clearColor(we,fe,Be,Oe),Te.copy(ye))},reset:function(){O=!1,ae=null,Te.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,ae=null,Te=null,we=null;return{setReversed:function(fe){if(ye!==fe){const Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ye=fe;const Oe=we;we=null,this.setClear(Oe)}},getReversed:function(){return ye},setTest:function(fe){fe?he(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(fe){ae!==fe&&!O&&(n.depthMask(fe),ae=fe)},setFunc:function(fe){if(ye&&(fe=j_[fe]),Te!==fe){switch(fe){case fc:n.depthFunc(n.NEVER);break;case hc:n.depthFunc(n.ALWAYS);break;case dc:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case pc:n.depthFunc(n.EQUAL);break;case mc:n.depthFunc(n.GEQUAL);break;case gc:n.depthFunc(n.GREATER);break;case _c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=fe}},setLocked:function(fe){O=fe},setClear:function(fe){we!==fe&&(we=fe,ye&&(fe=1-fe),n.clearDepth(fe))},reset:function(){O=!1,ae=null,Te=null,we=null,ye=!1}}}function s(){let O=!1,ye=null,ae=null,Te=null,we=null,fe=null,Be=null,Oe=null,Dt=null;return{setTest:function(St){O||(St?he(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(St){ye!==St&&!O&&(n.stencilMask(St),ye=St)},setFunc:function(St,$n,qn){(ae!==St||Te!==$n||we!==qn)&&(n.stencilFunc(St,$n,qn),ae=St,Te=$n,we=qn)},setOp:function(St,$n,qn){(fe!==St||Be!==$n||Oe!==qn)&&(n.stencilOp(St,$n,qn),fe=St,Be=$n,Oe=qn)},setLocked:function(St){O=St},setClear:function(St){Dt!==St&&(n.clearStencil(St),Dt=St)},reset:function(){O=!1,ye=null,ae=null,Te=null,we=null,fe=null,Be=null,Oe=null,Dt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let f={},u={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,S=null,M=null,x=null,w=null,A=null,C=null,y=new Ye(0,0,0),R=0,U=!1,I=null,z=null,Z=null,re=null,W=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ce)[1]),G=Q>=1):ce.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),G=Q>=2);let Me=null,ve={};const xe=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),ct=new ht().fromArray(xe),Je=new ht().fromArray(Ze);function ne(O,ye,ae,Te){const we=new Uint8Array(4),fe=n.createTexture();n.bindTexture(O,fe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<ae;Be++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ye+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return fe}const ge={};ge[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(cr),F(!1),se(zf),he(n.CULL_FACE),ie(Ti);function he(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function He(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function $e(O,ye){return h[O]!==ye?(n.bindFramebuffer(O,ye),h[O]=ye,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Fe(O,ye){let ae=m,Te=!1;if(O){ae=d.get(ye),ae===void 0&&(ae=[],d.set(ye,ae));const we=O.textures;if(ae.length!==we.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Be=we.length;fe<Be;fe++)ae[fe]=n.COLOR_ATTACHMENT0+fe;ae.length=we.length,Te=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Te=!0);Te&&n.drawBuffers(ae)}function P(O){return v!==O?(n.useProgram(O),v=O,!0):!1}const D={[gs]:n.FUNC_ADD,[g_]:n.FUNC_SUBTRACT,[__]:n.FUNC_REVERSE_SUBTRACT};D[v_]=n.MIN,D[x_]=n.MAX;const $={[y_]:n.ZERO,[M_]:n.ONE,[S_]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[R_]:n.SRC_ALPHA_SATURATE,[A_]:n.DST_COLOR,[E_]:n.DST_ALPHA,[b_]:n.ONE_MINUS_SRC_COLOR,[uc]:n.ONE_MINUS_SRC_ALPHA,[w_]:n.ONE_MINUS_DST_COLOR,[T_]:n.ONE_MINUS_DST_ALPHA,[C_]:n.CONSTANT_COLOR,[P_]:n.ONE_MINUS_CONSTANT_COLOR,[I_]:n.CONSTANT_ALPHA,[L_]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(O,ye,ae,Te,we,fe,Be,Oe,Dt,St){if(O===Ti){g===!0&&(He(n.BLEND),g=!1);return}if(g===!1&&(he(n.BLEND),g=!0),O!==m_){if(O!==p||St!==U){if((S!==gs||w!==gs)&&(n.blendEquation(n.FUNC_ADD),S=gs,w=gs),St)switch(O){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.ONE,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",O);break}else switch(O){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gf:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hf:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",O);break}M=null,x=null,A=null,C=null,y.set(0,0,0),R=0,p=O,U=St}return}we=we||ye,fe=fe||ae,Be=Be||Te,(ye!==S||we!==w)&&(n.blendEquationSeparate(D[ye],D[we]),S=ye,w=we),(ae!==M||Te!==x||fe!==A||Be!==C)&&(n.blendFuncSeparate($[ae],$[Te],$[fe],$[Be]),M=ae,x=Te,A=fe,C=Be),(Oe.equals(y)===!1||Dt!==R)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Dt),y.copy(Oe),R=Dt),p=O,U=!1}function L(O,ye){O.side===Nn?He(n.CULL_FACE):he(n.CULL_FACE);let ae=O.side===_n;ye&&(ae=!ae),F(ae),O.blending===ir&&O.transparent===!1?ie(Ti):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Te=O.stencilWrite;o.setTest(Te),Te&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(O){I!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),I=O)}function se(O){O!==h_?(he(n.CULL_FACE),O!==z&&(O===zf?n.cullFace(n.BACK):O===d_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),z=O}function le(O){O!==Z&&(G&&n.lineWidth(O),Z=O)}function ue(O,ye,ae){O?(he(n.POLYGON_OFFSET_FILL),(re!==ye||W!==ae)&&(re=ye,W=ae,a.getReversed()&&(ye=-ye),n.polygonOffset(ye,ae))):He(n.POLYGON_OFFSET_FILL)}function te(O){O?he(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function be(O){O===void 0&&(O=n.TEXTURE0+q-1),Me!==O&&(n.activeTexture(O),Me=O)}function T(O,ye,ae){ae===void 0&&(Me===null?ae=n.TEXTURE0+q-1:ae=Me);let Te=ve[ae];Te===void 0&&(Te={type:void 0,texture:void 0},ve[ae]=Te),(Te.type!==O||Te.texture!==ye)&&(Me!==ae&&(n.activeTexture(ae),Me=ae),n.bindTexture(O,ye||ge[O]),Te.type=O,Te.texture=ye)}function de(){const O=ve[Me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(O){Ke("WebGLState:",O)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(O){Ke("WebGLState:",O)}}function _(){try{n.texSubImage2D(...arguments)}catch(O){Ke("WebGLState:",O)}}function N(){try{n.texSubImage3D(...arguments)}catch(O){Ke("WebGLState:",O)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Ke("WebGLState:",O)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Ke("WebGLState:",O)}}function pe(){try{n.texStorage2D(...arguments)}catch(O){Ke("WebGLState:",O)}}function _e(){try{n.texStorage3D(...arguments)}catch(O){Ke("WebGLState:",O)}}function ee(){try{n.texImage2D(...arguments)}catch(O){Ke("WebGLState:",O)}}function X(){try{n.texImage3D(...arguments)}catch(O){Ke("WebGLState:",O)}}function oe(O){return u[O]!==void 0?u[O]:n.getParameter(O)}function Ie(O,ye){u[O]!==ye&&(n.pixelStorei(O,ye),u[O]=ye)}function Ee(O){ct.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ct.copy(O))}function Se(O){Je.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Je.copy(O))}function We(O,ye){let ae=c.get(ye);ae===void 0&&(ae=new WeakMap,c.set(ye,ae));let Te=ae.get(O);Te===void 0&&(Te=n.getUniformBlockIndex(ye,O.name),ae.set(O,Te))}function qe(O,ye){const Te=c.get(ye).get(O);l.get(ye)!==Te&&(n.uniformBlockBinding(ye,Te,O.__bindingPointIndex),l.set(ye,Te))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},Me=null,ve={},h={},d=new WeakMap,m=[],v=null,g=!1,p=null,S=null,M=null,x=null,w=null,A=null,C=null,y=new Ye(0,0,0),R=0,U=!1,I=null,z=null,Z=null,re=null,W=null,ct.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:He,bindFramebuffer:$e,drawBuffers:Fe,useProgram:P,setBlending:ie,setMaterial:L,setFlipSided:F,setCullFace:se,setLineWidth:le,setPolygonOffset:ue,setScissorTest:te,activeTexture:be,bindTexture:T,unbindTexture:de,compressedTexImage2D:me,compressedTexImage3D:E,texImage2D:ee,texImage3D:X,pixelStorei:Ie,getParameter:oe,updateUBOMapping:We,uniformBlockBinding:qe,texStorage2D:pe,texStorage3D:_e,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:Ee,viewport:Se,reset:je}}function NE(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,f=new WeakMap,u=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return m?new OffscreenCanvas(E,_):sa("canvas")}function g(E,_,N){let V=1;const J=me(E);if((J.width>N||J.height>N)&&(V=N/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const pe=Math.floor(V*J.width),_e=Math.floor(V*J.height);h===void 0&&(h=v(pe,_e));const ee=_?v(pe,_e):h;return ee.width=pe,ee.height=_e,ee.getContext("2d").drawImage(E,0,0,pe,_e),Ge("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+pe+"x"+_e+")."),ee}else return"data"in E&&Ge("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){n.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,_,N,V,J,pe=!1){if(E!==null){if(n[E]!==void 0)return n[E];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let _e;V&&(_e=e.get("EXT_texture_norm16"),_e||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===n.RED&&(N===n.FLOAT&&(ee=n.R32F),N===n.HALF_FLOAT&&(ee=n.R16F),N===n.UNSIGNED_BYTE&&(ee=n.R8),N===n.UNSIGNED_SHORT&&_e&&(ee=_e.R16_EXT),N===n.SHORT&&_e&&(ee=_e.R16_SNORM_EXT)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(ee=n.R8UI),N===n.UNSIGNED_SHORT&&(ee=n.R16UI),N===n.UNSIGNED_INT&&(ee=n.R32UI),N===n.BYTE&&(ee=n.R8I),N===n.SHORT&&(ee=n.R16I),N===n.INT&&(ee=n.R32I)),_===n.RG&&(N===n.FLOAT&&(ee=n.RG32F),N===n.HALF_FLOAT&&(ee=n.RG16F),N===n.UNSIGNED_BYTE&&(ee=n.RG8),N===n.UNSIGNED_SHORT&&_e&&(ee=_e.RG16_EXT),N===n.SHORT&&_e&&(ee=_e.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(ee=n.RG8UI),N===n.UNSIGNED_SHORT&&(ee=n.RG16UI),N===n.UNSIGNED_INT&&(ee=n.RG32UI),N===n.BYTE&&(ee=n.RG8I),N===n.SHORT&&(ee=n.RG16I),N===n.INT&&(ee=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),N===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),N===n.UNSIGNED_INT&&(ee=n.RGB32UI),N===n.BYTE&&(ee=n.RGB8I),N===n.SHORT&&(ee=n.RGB16I),N===n.INT&&(ee=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),N===n.UNSIGNED_INT&&(ee=n.RGBA32UI),N===n.BYTE&&(ee=n.RGBA8I),N===n.SHORT&&(ee=n.RGBA16I),N===n.INT&&(ee=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_SHORT&&_e&&(ee=_e.RGB16_EXT),N===n.SHORT&&_e&&(ee=_e.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),_===n.RGBA){const X=pe?Ro:tt.getTransfer(J);N===n.FLOAT&&(ee=n.RGBA32F),N===n.HALF_FLOAT&&(ee=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ee=X===_t?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&_e&&(ee=_e.RGBA16_EXT),N===n.SHORT&&_e&&(ee=_e.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(E,_){let N;return E?_===null||_===hi||_===ta?N=n.DEPTH24_STENCIL8:_===Bn?N=n.DEPTH32F_STENCIL8:_===ea&&(N=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===ta?N=n.DEPTH_COMPONENT24:_===Bn?N=n.DEPTH_COMPONENT32F:_===ea&&(N=n.DEPTH_COMPONENT16),N}function A(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==jt&&E.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){const _=E.target;_.removeEventListener("dispose",C),R(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&u.delete(_)}function y(E){const _=E.target;_.removeEventListener("dispose",y),I(_)}function R(E){const _=i.get(E);if(_.__webglInit===void 0)return;const N=E.source,V=d.get(N);if(V){const J=V[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&U(E),Object.keys(V).length===0&&d.delete(N)}i.remove(E)}function U(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const N=E.source,V=d.get(N);delete V[_.__cacheKey],a.memory.textures--}function I(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let J=0;J<_.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[V][J]);else n.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)n.deleteFramebuffer(_.__webglFramebuffer[V]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let V=0,J=N.length;V<J;V++){const pe=i.get(N[V]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(N[V])}i.remove(E)}let z=0;function Z(){z=0}function re(){return z}function W(E){z=E}function q(){const E=z;return E>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Q(E,_){const N=i.get(E);if(E.isVideoTexture&&T(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const V=E.image;if(V===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{He(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function ce(E,_){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){He(N,E,_);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function Me(E,_){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){He(N,E,_);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function ve(E,_){const N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){$e(N,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const xe={[Qr]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},Ze={[jt]:n.NEAREST,[F_]:n.NEAREST_MIPMAP_NEAREST,[ba]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},ct={[G_]:n.NEVER,[q_]:n.ALWAYS,[H_]:n.LESS,[Lu]:n.LEQUAL,[W_]:n.EQUAL,[Du]:n.GEQUAL,[X_]:n.GREATER,[$_]:n.NOTEQUAL};function Je(E,_){if(_.type===Bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===dl||_.magFilter===ba||_.magFilter===vs||_.minFilter===rn||_.minFilter===dl||_.minFilter===ba||_.minFilter===vs)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,xe[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,xe[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,xe[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ze[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ze[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ct[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==ba&&_.minFilter!==vs||_.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ne(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));const V=_.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const pe=G(_);if(pe!==E.__cacheKey){J[pe]===void 0&&(J[pe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[pe].usedTimes++;const _e=J[E.__cacheKey];_e!==void 0&&(J[E.__cacheKey].usedTimes--,_e.usedTimes===0&&U(_)),E.__cacheKey=pe,E.__webglTexture=J[pe].texture}return N}function ge(E,_,N){return Math.floor(Math.floor(E/N)/_)}function he(E,_,N,V){const pe=E.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,V,_.data);else{pe.sort((Ie,Ee)=>Ie.start-Ee.start);let _e=0;for(let Ie=1;Ie<pe.length;Ie++){const Ee=pe[_e],Se=pe[Ie],We=Ee.start+Ee.count,qe=ge(Se.start,_.width,4),je=ge(Ee.start,_.width,4);Se.start<=We+1&&qe===je&&ge(Se.start+Se.count-1,_.width,4)===qe?Ee.count=Math.max(Ee.count,Se.start+Se.count-Ee.start):(++_e,pe[_e]=Se)}pe.length=_e+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),X=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ie=0,Ee=pe.length;Ie<Ee;Ie++){const Se=pe[Ie],We=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),je=We%_.width,O=Math.floor(We/_.width),ye=qe,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,je,O,ye,ae,N,V,_.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,X),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function He(E,_,N){let V=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=n.TEXTURE_3D);const J=ne(E,_),pe=_.source;t.bindTexture(V,E.__webglTexture,n.TEXTURE0+N);const _e=i.get(pe);if(pe.version!==_e.__version||J===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ae=tt.getPrimaries(tt.workingColorSpace),Te=_.colorSpace===Ki?null:tt.getPrimaries(_.colorSpace),we=_.colorSpace===Ki||ae===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let X=g(_.image,!1,s.maxTextureSize);X=de(_,X);const oe=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Ee=x(_.internalFormat,oe,Ie,_.normalized,_.colorSpace,_.isVideoTexture);Je(V,_);let Se;const We=_.mipmaps,qe=_.isVideoTexture!==!0,je=_e.__version===void 0||J===!0,O=pe.dataReady,ye=A(_,X);if(_.isDepthTexture)Ee=w(_.format===xs,_.type),je&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Ee,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,Ee,X.width,X.height,0,oe,Ie,null));else if(_.isDataTexture)if(We.length>0){qe&&je&&t.texStorage2D(n.TEXTURE_2D,ye,Ee,We[0].width,We[0].height);for(let ae=0,Te=We.length;ae<Te;ae++)Se=We[ae],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,oe,Ie,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Ee,Se.width,Se.height,0,oe,Ie,Se.data);_.generateMipmaps=!1}else qe?(je&&t.texStorage2D(n.TEXTURE_2D,ye,Ee,X.width,X.height),O&&he(_,X,oe,Ie)):t.texImage2D(n.TEXTURE_2D,0,Ee,X.width,X.height,0,oe,Ie,X.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ee,We[0].width,We[0].height,X.depth);for(let ae=0,Te=We.length;ae<Te;ae++)if(Se=We[ae],_.format!==wn)if(oe!==null)if(qe){if(O)if(_.layerUpdates.size>0){const we=Dh(Se.width,Se.height,_.format,_.type);for(const fe of _.layerUpdates){const Be=Se.data.subarray(fe*we/Se.data.BYTES_PER_ELEMENT,(fe+1)*we/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,fe,Se.width,Se.height,1,oe,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,X.depth,oe,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ee,Se.width,Se.height,X.depth,0,Se.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,X.depth,oe,Ie,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ee,Se.width,Se.height,X.depth,0,oe,Ie,Se.data)}else{qe&&je&&t.texStorage2D(n.TEXTURE_2D,ye,Ee,We[0].width,We[0].height);for(let ae=0,Te=We.length;ae<Te;ae++)Se=We[ae],_.format!==wn?oe!==null?qe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,oe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ee,Se.width,Se.height,0,Se.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,oe,Ie,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Ee,Se.width,Se.height,0,oe,Ie,Se.data)}else if(_.isDataArrayTexture)if(qe){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ee,X.width,X.height,X.depth),O)if(_.layerUpdates.size>0){const ae=Dh(X.width,X.height,_.format,_.type);for(const Te of _.layerUpdates){const we=X.data.subarray(Te*ae/X.data.BYTES_PER_ELEMENT,(Te+1)*ae/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Te,X.width,X.height,1,oe,Ie,we)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,oe,Ie,X.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,X.width,X.height,X.depth,0,oe,Ie,X.data);else if(_.isData3DTexture)qe?(je&&t.texStorage3D(n.TEXTURE_3D,ye,Ee,X.width,X.height,X.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,oe,Ie,X.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,X.width,X.height,X.depth,0,oe,Ie,X.data);else if(_.isFramebufferTexture){if(je)if(qe)t.texStorage2D(n.TEXTURE_2D,ye,Ee,X.width,X.height);else{let ae=X.width,Te=X.height;for(let we=0;we<ye;we++)t.texImage2D(n.TEXTURE_2D,we,Ee,ae,Te,0,oe,Ie,null),ae>>=1,Te>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),X.parentNode!==ae){ae.appendChild(X),u.add(_),ae.onpaint=Te=>{const we=Te.changedElements;for(const fe of u)we.includes(fe.image)&&(fe.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,X);else{const we=n.RGBA,fe=n.RGBA,Be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,fe,Be,X)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(qe&&je){const ae=me(We[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ee,ae.width,ae.height)}for(let ae=0,Te=We.length;ae<Te;ae++)Se=We[ae],qe?O&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,oe,Ie,Se):t.texImage2D(n.TEXTURE_2D,ae,Ee,oe,Ie,Se);_.generateMipmaps=!1}else if(qe){if(je){const ae=me(X);t.texStorage2D(n.TEXTURE_2D,ye,Ee,ae.width,ae.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ie,X)}else t.texImage2D(n.TEXTURE_2D,0,Ee,oe,Ie,X);p(_)&&S(V),_e.__version=pe.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function $e(E,_,N){if(_.image.length!==6)return;const V=ne(E,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const pe=i.get(J);if(J.version!==pe.__version||V===!0){t.activeTexture(n.TEXTURE0+N);const _e=tt.getPrimaries(tt.workingColorSpace),ee=_.colorSpace===Ki?null:tt.getPrimaries(_.colorSpace),X=_.colorSpace===Ki||_e===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ie=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!oe&&!Ie?Ee[fe]=g(_.image[fe],!0,s.maxCubemapSize):Ee[fe]=Ie?_.image[fe].image:_.image[fe],Ee[fe]=de(_,Ee[fe]);const Se=Ee[0],We=r.convert(_.format,_.colorSpace),qe=r.convert(_.type),je=x(_.internalFormat,We,qe,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,ye=pe.__version===void 0||V===!0,ae=J.dataReady;let Te=A(_,Se);Je(n.TEXTURE_CUBE_MAP,_);let we;if(oe){O&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,je,Se.width,Se.height);for(let fe=0;fe<6;fe++){we=Ee[fe].mipmaps;for(let Be=0;Be<we.length;Be++){const Oe=we[Be];_.format!==wn?We!==null?O?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,0,0,Oe.width,Oe.height,We,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,je,Oe.width,Oe.height,0,Oe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,0,0,Oe.width,Oe.height,We,qe,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,je,Oe.width,Oe.height,0,We,qe,Oe.data)}}}else{if(we=_.mipmaps,O&&ye){we.length>0&&Te++;const fe=me(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ie){O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,We,qe,Ee[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,Ee[fe].width,Ee[fe].height,0,We,qe,Ee[fe].data);for(let Be=0;Be<we.length;Be++){const Dt=we[Be].image[fe].image;O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,0,0,Dt.width,Dt.height,We,qe,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,je,Dt.width,Dt.height,0,We,qe,Dt.data)}}else{O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,We,qe,Ee[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,We,qe,Ee[fe]);for(let Be=0;Be<we.length;Be++){const Oe=we[Be];O?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,0,0,We,qe,Oe.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,je,We,qe,Oe.image[fe])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),pe.__version=J.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Fe(E,_,N,V,J,pe){const _e=r.convert(N.format,N.colorSpace),ee=r.convert(N.type),X=x(N.internalFormat,_e,ee,N.normalized,N.colorSpace),oe=i.get(_),Ie=i.get(N);if(Ie.__renderTarget=_,!oe.__hasExternalTextures){const Ee=Math.max(1,_.width>>pe),Se=Math.max(1,_.height>>pe);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,pe,X,Ee,Se,_.depth,0,_e,ee,null):t.texImage2D(J,pe,X,Ee,Se,0,_e,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,Ie.__webglTexture,0,te(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,Ie.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(E,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const V=_.depthTexture,J=V&&V.isDepthTexture?V.type:null,pe=w(_.stencilBuffer,J),_e=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te(_),pe,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,te(_),pe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,E)}else{const V=_.textures;for(let J=0;J<V.length;J++){const pe=V[J],_e=r.convert(pe.format,pe.colorSpace),ee=r.convert(pe.type),X=x(pe.internalFormat,_e,ee,pe.normalized,pe.colorSpace);be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te(_),X,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,te(_),X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function D(E,_,N){const V=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Je(n.TEXTURE_CUBE_MAP,_.depthTexture);const oe=r.convert(_.depthTexture.format),Ie=r.convert(_.depthTexture.type);let Ee;_.depthTexture.format===Di?Ee=n.DEPTH_COMPONENT24:_.depthTexture.format===xs&&(Ee=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,_.width,_.height,0,oe,Ie,null)}}else Q(_.depthTexture,0);const pe=J.__webglTexture,_e=te(_),ee=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,X=_.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Di)be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ee,pe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,X,ee,pe,0);else if(_.depthTexture.format===xs)be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ee,pe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,X,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(E){const _=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let V=0;V<6;V++)D(_.__webglFramebuffer[V],E,V);else{const V=E.texture.mipmaps;V&&V.length>0?D(_.__webglFramebuffer[0],E,0):D(_.__webglFramebuffer,E,0)}else if(N){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=n.createRenderbuffer(),P(_.__webglDepthbuffer[V],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,pe)}}else{const V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),P(_.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(E,_,N){const V=i.get(E);_!==void 0&&Fe(V.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&$(E)}function L(E){const _=E.texture,N=i.get(E),V=i.get(_);E.addEventListener("dispose",y);const J=E.textures,pe=E.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=_.version,a.memory.textures++),pe){N.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ee]=[];for(let X=0;X<_.mipmaps.length;X++)N.__webglFramebuffer[ee][X]=n.createFramebuffer()}else N.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)N.__webglFramebuffer[ee]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ee=0,X=J.length;ee<X;ee++){const oe=i.get(J[ee]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&be(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const X=J[ee];N.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ee]);const oe=r.convert(X.format,X.colorSpace),Ie=r.convert(X.type),Ee=x(X.internalFormat,oe,Ie,X.normalized,X.colorSpace,E.isXRRenderTarget===!0),Se=te(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,Ee,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,N.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),P(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Je(n.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let X=0;X<_.mipmaps.length;X++)Fe(N.__webglFramebuffer[ee][X],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,X);else Fe(N.__webglFramebuffer[ee],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(_)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ee=0,X=J.length;ee<X;ee++){const oe=J[ee],Ie=i.get(oe);let Ee=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ee=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,Ie.__webglTexture),Je(Ee,oe),Fe(N.__webglFramebuffer,E,oe,n.COLOR_ATTACHMENT0+ee,Ee,0),p(oe)&&S(Ee)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,V.__webglTexture),Je(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let X=0;X<_.mipmaps.length;X++)Fe(N.__webglFramebuffer[X],E,_,n.COLOR_ATTACHMENT0,ee,X);else Fe(N.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ee,0);p(_)&&S(ee),t.unbindTexture()}E.depthBuffer&&$(E)}function F(E){const _=E.textures;for(let N=0,V=_.length;N<V;N++){const J=_[N];if(p(J)){const pe=M(E),_e=i.get(J).__webglTexture;t.bindTexture(pe,_e),S(pe),t.unbindTexture()}}}const se=[],le=[];function ue(E){if(E.samples>0){if(be(E)===!1){const _=E.textures,N=E.width,V=E.height;let J=n.COLOR_BUFFER_BIT;const pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(E),ee=_.length>1;if(ee)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const X=E.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[oe]);const Ie=i.get(_[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,N,V,0,0,N,V,J,n.NEAREST),l===!0&&(se.length=0,le.length=0,se.push(n.COLOR_ATTACHMENT0+oe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(pe),le.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[oe]);const Ie=i.get(_[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function te(E){return Math.min(s.maxSamples,E.samples)}function be(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function T(E){const _=a.render.frame;f.get(E)!==_&&(f.set(E,_),E.update())}function de(E,_){const N=E.colorSpace,V=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==wo&&N!==Ki&&(tt.getTransfer(N)===_t?(V!==wn||J!==Mn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",N)),_}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.getTextureUnits=re,this.setTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=ce,this.setTexture3D=Me,this.setTextureCube=ve,this.rebindTextures=ie,this.setupRenderTarget=L,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FE(n,e){function t(i,s=Ki){let r;const a=tt.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Up)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ip)return n.BYTE;if(i===Lp)return n.SHORT;if(i===ea)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===hi)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Li)return n.HALF_FLOAT;if(i===Np)return n.ALPHA;if(i===Fp)return n.RGB;if(i===wn)return n.RGBA;if(i===Di)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Op)return n.RED;if(i===Ru)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===Cu)return n.RG_INTEGER;if(i===Pu)return n.RGBA_INTEGER;if(i===co||i===uo||i===fo||i===ho)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xc||i===yc||i===Mc||i===Sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===Ec||i===Tc||i===Ac||i===wc||i===bo||i===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bc||i===Ec)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ac)return r.COMPRESSED_R11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===Rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cc||i===Pc||i===Ic||i===Lc||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Vc||i===Gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hc||i===Wc||i===Xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Hc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$c||i===qc||i===Eo||i===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const OE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new qp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:OE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zE extends ns{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new kE,p={},S=t.getContextAttributes();let M=null,x=null;const w=[],A=[],C=new at;let y=null;const R=new hn;R.viewport=new ht;const U=new hn;U.viewport=new ht;const I=[R,U],z=new Ox;let Z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=w[ne];return ge===void 0&&(ge=new yl,w[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=w[ne];return ge===void 0&&(ge=new yl,w[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=w[ne];return ge===void 0&&(ge=new yl,w[ne]=ge),ge.getHandSpace()};function W(ne){const ge=A.indexOf(ne.inputSource);if(ge===-1)return;const he=w[ge];he!==void 0&&(he.update(ne.inputSource,ne.frame,c||a),he.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",G);for(let ne=0;ne<w.length;ne++){const ge=A[ne];ge!==null&&(A[ne]=null,w[ne].disconnect(ge))}Z=null,re=null,g.reset();for(const ne in p)delete p[ne];e.setRenderTarget(M),d=null,h=null,u=null,s=null,x=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,He=null,$e=null;S.depth&&($e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?xs:Di,He=S.stencil?ta:hi);const Fe={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new ui(h.textureWidth,h.textureHeight,{format:wn,type:Mn,depthTexture:new hr(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ui(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(ne){for(let ge=0;ge<ne.removed.length;ge++){const he=ne.removed[ge],He=A.indexOf(he);He>=0&&(A[He]=null,w[He].disconnect(he))}for(let ge=0;ge<ne.added.length;ge++){const he=ne.added[ge];let He=A.indexOf(he);if(He===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=A.length){A.push(he),He=Fe;break}else if(A[Fe]===null){A[Fe]=he,He=Fe;break}if(He===-1)break}const $e=w[He];$e&&$e.connect(he)}}const Q=new B,ce=new B;function Me(ne,ge,he){Q.setFromMatrixPosition(ge.matrixWorld),ce.setFromMatrixPosition(he.matrixWorld);const He=Q.distanceTo(ce),$e=ge.projectionMatrix.elements,Fe=he.projectionMatrix.elements,P=$e[14]/($e[10]-1),D=$e[14]/($e[10]+1),$=($e[9]+1)/$e[5],ie=($e[9]-1)/$e[5],L=($e[8]-1)/$e[0],F=(Fe[8]+1)/Fe[0],se=P*L,le=P*F,ue=He/(-L+F),te=ue*-L;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(te),ne.translateZ(ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),$e[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const be=P+ue,T=D+ue,de=se-te,me=le+(He-te),E=$*D/T*be,_=ie*D/T*be;ne.projectionMatrix.makePerspective(de,me,E,_,be,T),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ve(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,he=ne.far;g.texture!==null&&(g.depthNear>0&&(ge=g.depthNear),g.depthFar>0&&(he=g.depthFar)),z.near=U.near=R.near=ge,z.far=U.far=R.far=he,(Z!==z.near||re!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),Z=z.near,re=z.far),z.layers.mask=ne.layers.mask|6,R.layers.mask=z.layers.mask&-5,U.layers.mask=z.layers.mask&-3;const He=ne.parent,$e=z.cameras;ve(z,He);for(let Fe=0;Fe<$e.length;Fe++)ve($e[Fe],He);$e.length===2?Me(z,R,U):z.projectionMatrix.copy(R.projectionMatrix),xe(ne,z,He)};function xe(ne,ge,he){he===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(he.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=fr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(ne){return p[ne]};let Ze=null;function ct(ne,ge){if(f=ge.getViewerPose(c||a),m=ge,f!==null){const he=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let He=!1;he.length!==z.cameras.length&&(z.cameras.length=0,He=!0);for(let D=0;D<he.length;D++){const $=he[D];let ie=null;if(d!==null)ie=d.getViewport($);else{const F=u.getViewSubImage(h,$);ie=F.viewport,D===0&&(e.setRenderTargetTextures(x,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(x))}let L=I[D];L===void 0&&(L=new hn,L.layers.enable(D),L.viewport=new ht,I[D]=L),L.matrix.fromArray($.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray($.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ie.x,ie.y,ie.width,ie.height),D===0&&(z.matrix.copy(L.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),He===!0&&z.cameras.push(L)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const D=u.getDepthInformation(he[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if($e&&$e.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<he.length;D++){const $=he[D].camera;if($){let ie=p[$];ie||(ie=new qp,p[$]=ie);const L=u.getCameraImage($);ie.sourceTexture=L}}}}for(let he=0;he<w.length;he++){const He=A[he],$e=w[he];He!==null&&$e!==void 0&&$e.update(He,ge,c||a)}Ze&&Ze(ne,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),m=null}const Je=new sm;Je.setAnimationLoop(ct),this.setAnimationLoop=function(ne){Ze=ne},this.dispose=function(){}}}const VE=new Ve,fm=new Qe;fm.set(-1,0,0,0,1,0,0,0,1);function GE(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,jp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,x=S.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(VE.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(fm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function HE(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,w){const A=w.program;i.uniformBlockBinding(x,A)}function c(x,w){let A=s[x.id];A===void 0&&(g(x),A=f(x),s[x.id]=A,x.addEventListener("dispose",S));const C=w.program;i.updateUBOMapping(x,C);const y=e.render.frame;r[x.id]!==y&&(h(x),r[x.id]=y)}function f(x){const w=u();x.__bindingPointIndex=w;const A=n.createBuffer(),C=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,A),A}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=s[x.id],A=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let y=0,R=A.length;y<R;y++){const U=A[y];if(Array.isArray(U))for(let I=0,z=U.length;I<z;I++)d(U[I],y,I,C);else d(U,y,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,w,A,C){if(v(x,w,A,C)===!0){const y=x.__offset,R=x.value;if(Array.isArray(R)){let U=0;for(let I=0;I<R.length;I++){const z=R[I],Z=p(z);m(z,x.__data,U),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function m(x,w,A){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,A)}function v(x,w,A,C){const y=x.value,R=w+"_"+A;if(C[R]===void 0)return typeof y=="number"||typeof y=="boolean"?C[R]=y:ArrayBuffer.isView(y)?C[R]=y.slice():C[R]=y.clone(),!0;{const U=C[R];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return C[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function g(x){const w=x.uniforms;let A=0;const C=16;for(let R=0,U=w.length;R<U;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let z=0,Z=I.length;z<Z;z++){const re=I[z],W=Array.isArray(re.value)?re.value:[re.value];for(let q=0,G=W.length;q<G;q++){const Q=W[q],ce=p(Q),Me=A%C,ve=Me%ce.boundary,xe=Me+ve;A+=ve,xe!==0&&C-xe<ce.storage&&(A+=C-xe),re.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=A,A+=ce.storage}}}const y=A%C;return y>0&&(A+=C-y),x.__size=A,x.__cache={},this}function p(x){const w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),w}function S(x){const w=x.target;w.removeEventListener("dispose",S);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}const WE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function XE(){return Jn===null&&(Jn=new Hp(WE,16,16,Es,Li),Jn.name="DFG_LUT",Jn.minFilter=rn,Jn.magFilter=rn,Jn.wrapS=On,Jn.wrapT=On,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class $E{constructor(e={}){const{canvas:t=Z_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Mn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=d,g=new Set([Pu,Cu,Ru]),p=new Set([Mn,hi,ea,ta,Au,wu]),S=new Uint32Array(4),M=new Int32Array(4),x=new B;let w=null,A=null;const C=[],y=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1,z=null,Z=null,re=null,W=null;this._outputColorSpace=wt;let q=0,G=0,Q=null,ce=-1,Me=null;const ve=new ht,xe=new ht;let Ze=null;const ct=new Ye(0);let Je=0,ne=t.width,ge=t.height,he=1,He=null,$e=null;const Fe=new ht(0,0,ne,ge),P=new ht(0,0,ne,ge);let D=!1;const $=new ku;let ie=!1,L=!1;const F=new Ve,se=new B,le=new ht,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function be(){return Q===null?he:1}let T=i;function de(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",$n,!1),T===null){const H="webgl2";if(T=de(H,b),T===null)throw de(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ke("WebGLRenderer: "+b.message),b}let me,E,_,N,V,J,pe,_e,ee,X,oe,Ie,Ee,Se,We,qe,je,O,ye,ae,Te,we,fe;function Be(){me=new XS(T),me.init(),Te=new FE(T,me),E=new OS(T,me,e,Te),_=new UE(T,me),E.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),Z=T.createFramebuffer(),re=T.createFramebuffer(),W=T.createFramebuffer(),N=new YS(T),V=new yE,J=new NE(T,me,_,V,E,Te,N),pe=new WS(U),_e=new jx(T),we=new NS(T,_e),ee=new $S(T,_e,N,we),X=new ZS(T,ee,_e,we,N),O=new KS(T,E,J),We=new BS(V),oe=new xE(U,pe,me,E,we,We),Ie=new GE(U,V),Ee=new SE,Se=new RE(me),je=new US(U,pe,_,X,m,l),qe=new DE(U,X,E),fe=new HE(T,N,E,_),ye=new FS(T,me,N),ae=new qS(T,me,N),N.programs=oe.programs,U.capabilities=E,U.extensions=me,U.properties=V,U.renderLists=Ee,U.shadowMap=qe,U.state=_,U.info=N}Be(),v!==Mn&&(R=new jS(v,t.width,t.height,o,s,r));const Oe=new zE(U,T);this.xr=Oe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(b){b!==void 0&&(he=b,this.setSize(ne,ge,!1))},this.getSize=function(b){return b.set(ne,ge)},this.setSize=function(b,H,j=!0){if(Oe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,ge=H,t.width=Math.floor(b*he),t.height=Math.floor(H*he),j===!0&&(t.style.width=b+"px",t.style.height=H+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ne*he,ge*he).floor()},this.setDrawingBufferSize=function(b,H,j){ne=b,ge=H,he=j,t.width=Math.floor(b*j),t.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(v===Mn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ve)},this.getViewport=function(b){return b.copy(Fe)},this.setViewport=function(b,H,j,Y){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,H,j,Y),_.viewport(ve.copy(Fe).multiplyScalar(he).round())},this.getScissor=function(b){return b.copy(P)},this.setScissor=function(b,H,j,Y){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,H,j,Y),_.scissor(xe.copy(P).multiplyScalar(he).round())},this.getScissorTest=function(){return D},this.setScissorTest=function(b){_.setScissorTest(D=b)},this.setOpaqueSort=function(b){He=b},this.setTransparentSort=function(b){$e=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,j=!0){let Y=0;if(b){let K=!1;if(Q!==null){const Ce=Q.texture.format;K=g.has(Ce)}if(K){const Ce=Q.texture.type,Ue=p.has(Ce),Re=je.getClearColor(),ke=je.getClearAlpha(),ze=Re.r,nt=Re.g,ot=Re.b;Ue?(S[0]=ze,S[1]=nt,S[2]=ot,S[3]=ke,T.clearBufferuiv(T.COLOR,0,S)):(M[0]=ze,M[1]=nt,M[2]=ot,M[3]=ke,T.clearBufferiv(T.COLOR,0,M))}else Y|=T.COLOR_BUFFER_BIT}H&&(Y|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&T.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",$n,!1),je.dispose(),Ee.dispose(),Se.dispose(),V.dispose(),pe.dispose(),X.dispose(),we.dispose(),fe.dispose(),oe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",tf),Oe.removeEventListener("sessionend",nf),ss.stop()};function Dt(b){b.preventDefault(),Zf("WebGLRenderer: Context Lost."),I=!0}function St(){Zf("WebGLRenderer: Context Restored."),I=!1;const b=N.autoReset,H=qe.enabled,j=qe.autoUpdate,Y=qe.needsUpdate,K=qe.type;Be(),N.autoReset=b,qe.enabled=H,qe.autoUpdate=j,qe.needsUpdate=Y,qe.type=K}function $n(b){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qn(b){const H=b.target;H.removeEventListener("dispose",qn),Om(H)}function Om(b){Bm(b),V.remove(b)}function Bm(b){const H=V.get(b).programs;H!==void 0&&(H.forEach(function(j){oe.releaseProgram(j)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,Y,K,Ce){H===null&&(H=ue);const Ue=K.isMesh&&K.matrixWorld.determinantAffine()<0,Re=Vm(b,H,j,Y,K);_.setMaterial(Y,Ue);let ke=j.index,ze=1;if(Y.wireframe===!0){if(ke=ee.getWireframeAttribute(j),ke===void 0)return;ze=2}const nt=j.drawRange,ot=j.attributes.position;let Xe=nt.start*ze,vt=(nt.start+nt.count)*ze;Ce!==null&&(Xe=Math.max(Xe,Ce.start*ze),vt=Math.min(vt,(Ce.start+Ce.count)*ze)),ke!==null?(Xe=Math.max(Xe,0),vt=Math.min(vt,ke.count)):ot!=null&&(Xe=Math.max(Xe,0),vt=Math.min(vt,ot.count));const Ot=vt-Xe;if(Ot<0||Ot===1/0)return;we.setup(K,Y,Re,j,ke);let Ut,yt=ye;if(ke!==null&&(Ut=_e.get(ke),yt=ae,yt.setIndex(Ut)),K.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*be()),yt.setMode(T.LINES)):yt.setMode(T.TRIANGLES);else if(K.isLine){let en=Y.linewidth;en===void 0&&(en=1),_.setLineWidth(en*be()),K.isLineSegments?yt.setMode(T.LINES):K.isLineLoop?yt.setMode(T.LINE_LOOP):yt.setMode(T.LINE_STRIP)}else K.isPoints?yt.setMode(T.POINTS):K.isSprite&&yt.setMode(T.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const en=K._multiDrawStarts,De=K._multiDrawCounts,vn=K._multiDrawCount,ut=ke?_e.get(ke).bytesPerElement:1,En=V.get(Y).currentProgram.getUniforms();for(let Yn=0;Yn<vn;Yn++)En.setValue(T,"_gl_DrawID",Yn),yt.render(en[Yn]/ut,De[Yn])}else if(K.isInstancedMesh)yt.renderInstances(Xe,Ot,K.count);else if(j.isInstancedBufferGeometry){const en=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,en);yt.renderInstances(Xe,Ot,De)}else yt.render(Xe,Ot)};function ef(b,H,j){b.transparent===!0&&b.side===Nn&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,xa(b,H,j),b.side=ji,b.needsUpdate=!0,xa(b,H,j),b.side=Nn):xa(b,H,j)}this.compile=function(b,H,j=null){j===null&&(j=b),A=Se.get(j),A.init(H),y.push(A),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),b!==j&&b.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights();const Y=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Re=Ce[Ue];ef(Re,j,K),Y.add(Re)}else ef(Ce,j,K),Y.add(Ce)}),A=y.pop(),Y},this.compileAsync=function(b,H,j=null){const Y=this.compile(b,H,j);return new Promise(K=>{function Ce(){if(Y.forEach(function(Ue){V.get(Ue).currentProgram.isReady()&&Y.delete(Ue)}),Y.size===0){K(b);return}setTimeout(Ce,10)}me.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let jo=null;function km(b){jo&&jo(b)}function tf(){ss.stop()}function nf(){ss.start()}const ss=new sm;ss.setAnimationLoop(km),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(b){jo=b,Oe.setAnimationLoop(b),b===null?ss.stop():ss.start()},Oe.addEventListener("sessionstart",tf),Oe.addEventListener("sessionend",nf),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(b,H);const j=Oe.enabled===!0&&Oe.isPresenting===!0,Y=R!==null&&(Q===null||j)&&R.begin(U,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(H),H=Oe.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,H,Q),A=Se.get(b,y.length),A.init(H),A.state.textureUnits=J.getTextureUnits(),y.push(A),F.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$.setFromProjectionMatrix(F,ai,H.reversedDepth),L=this.localClippingEnabled,ie=We.init(this.clippingPlanes,L),w=Ee.get(b,C.length),w.init(),C.push(w),Oe.enabled===!0&&Oe.isPresenting===!0){const Ue=U.xr.getDepthSensingMesh();Ue!==null&&Qo(Ue,H,-1/0,U.sortObjects)}Qo(b,H,0,U.sortObjects),w.finish(),U.sortObjects===!0&&w.sort(He,$e,H.reversedDepth),te=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,te&&je.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&We.beginShadows();const K=A.state.shadowsArray;if(qe.render(K,b,H),ie===!0&&We.endShadows(),(Y&&R.hasRenderPass())===!1){const Ue=w.opaque,Re=w.transmissive;if(A.setupLights(),H.isArrayCamera){const ke=H.cameras;if(Re.length>0)for(let ze=0,nt=ke.length;ze<nt;ze++){const ot=ke[ze];rf(Ue,Re,b,ot)}te&&je.render(b);for(let ze=0,nt=ke.length;ze<nt;ze++){const ot=ke[ze];sf(w,b,ot,ot.viewport)}}else Re.length>0&&rf(Ue,Re,b,H),te&&je.render(b),sf(w,b,H)}Q!==null&&G===0&&(J.updateMultisampleRenderTarget(Q),J.updateRenderTargetMipmap(Q)),Y&&R.end(U),b.isScene===!0&&b.onAfterRender(U,b,H),we.resetDefaultState(),ce=-1,Me=null,y.pop(),y.length>0?(A=y[y.length-1],J.setTextureUnits(A.state.textureUnits),ie===!0&&We.setGlobalState(U.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,z!==null&&z.renderEnd()};function Qo(b,H,j,Y){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){Y&&le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(F);const Ue=X.update(b),Re=b.material;Re.visible&&w.push(b,Ue,Re,j,le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Ue=X.update(b),Re=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),le.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),le.copy(Ue.boundingSphere.center)),le.applyMatrix4(b.matrixWorld).applyMatrix4(F)),Array.isArray(Re)){const ke=Ue.groups;for(let ze=0,nt=ke.length;ze<nt;ze++){const ot=ke[ze],Xe=Re[ot.materialIndex];Xe&&Xe.visible&&w.push(b,Ue,Xe,j,le.z,ot)}}else Re.visible&&w.push(b,Ue,Re,j,le.z,null)}}const Ce=b.children;for(let Ue=0,Re=Ce.length;Ue<Re;Ue++)Qo(Ce[Ue],H,j,Y)}function sf(b,H,j,Y){const{opaque:K,transmissive:Ce,transparent:Ue}=b;A.setupLightsView(j),ie===!0&&We.setGlobalState(U.clippingPlanes,j),Y&&_.viewport(ve.copy(Y)),K.length>0&&va(K,H,j),Ce.length>0&&va(Ce,H,j),Ue.length>0&&va(Ue,H,j),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function rf(b,H,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){const Xe=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new ui(1,1,{generateMipmaps:!0,type:Xe?Li:Mn,minFilter:vs,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Ce=A.state.transmissionRenderTarget[Y.id],Ue=Y.viewport||ve;Ce.setSize(Ue.z*U.transmissionResolutionScale,Ue.w*U.transmissionResolutionScale);const Re=U.getRenderTarget(),ke=U.getActiveCubeFace(),ze=U.getActiveMipmapLevel();U.setRenderTarget(Ce),U.getClearColor(ct),Je=U.getClearAlpha(),Je<1&&U.setClearColor(16777215,.5),U.clear(),te&&je.render(j);const nt=U.toneMapping;U.toneMapping=ci;const ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),ie===!0&&We.setGlobalState(U.clippingPlanes,Y),va(b,j,Y),J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce),me.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let vt=0,Ot=H.length;vt<Ot;vt++){const Ut=H[vt],{object:yt,geometry:en,material:De,group:vn}=Ut;if(De.side===Nn&&yt.layers.test(Y.layers)){const ut=De.side;De.side=_n,De.needsUpdate=!0,af(yt,j,Y,en,De,vn),De.side=ut,De.needsUpdate=!0,Xe=!0}}Xe===!0&&(J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce))}U.setRenderTarget(Re,ke,ze),U.setClearColor(ct,Je),ot!==void 0&&(Y.viewport=ot),U.toneMapping=nt}function va(b,H,j){const Y=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ce=b.length;K<Ce;K++){const Ue=b[K],{object:Re,geometry:ke,group:ze}=Ue;let nt=Ue.material;nt.allowOverride===!0&&Y!==null&&(nt=Y),Re.layers.test(j.layers)&&af(Re,H,j,ke,nt,ze)}}function af(b,H,j,Y,K,Ce){b.onBeforeRender(U,H,j,Y,K,Ce),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(U,H,j,Y,b,Ce),K.transparent===!0&&K.side===Nn&&K.forceSinglePass===!1?(K.side=_n,K.needsUpdate=!0,U.renderBufferDirect(j,H,Y,K,b,Ce),K.side=ji,K.needsUpdate=!0,U.renderBufferDirect(j,H,Y,K,b,Ce),K.side=Nn):U.renderBufferDirect(j,H,Y,K,b,Ce),b.onAfterRender(U,H,j,Y,K,Ce)}function xa(b,H,j){H.isScene!==!0&&(H=ue);const Y=V.get(b),K=A.state.lights,Ce=A.state.shadowsArray,Ue=K.state.version,Re=oe.getParameters(b,K.state,Ce,H,j,A.state.lightProbeGridArray),ke=oe.getProgramCacheKey(Re);let ze=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const nt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=pe.get(b.envMap||Y.environment,nt),Y.envMapRotation=Y.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",qn),ze=new Map,Y.programs=ze);let ot=ze.get(ke);if(ot!==void 0){if(Y.currentProgram===ot&&Y.lightsStateVersion===Ue)return lf(b,Re),ot}else Re.uniforms=oe.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,j,Re),b.onBeforeCompile(Re,U),ot=oe.acquireProgram(Re,ke),ze.set(ke,ot),Y.uniforms=Re.uniforms;const Xe=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=We.uniform),lf(b,Re),Y.needsLights=Hm(b),Y.lightsStateVersion=Ue,Y.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.lightProbeGrid=A.state.lightProbeGridArray.length>0,Y.currentProgram=ot,Y.uniformsList=null,ot}function of(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=mo.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function lf(b,H){const j=V.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function zm(b,H){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(H.matrixWorld);for(let j=0,Y=b.length;j<Y;j++){const K=b[j];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function Vm(b,H,j,Y,K){H.isScene!==!0&&(H=ue),J.resetTextureUnits();const Ce=H.fog,Ue=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Re=Q===null?U.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:tt.workingColorSpace,ke=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ze=pe.get(Y.envMap||Ue,ke),nt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ot=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xe=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,Ot=!!j.morphAttributes.color;let Ut=ci;Y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=U.toneMapping);const yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,en=yt!==void 0?yt.length:0,De=V.get(Y),vn=A.state.lights;if(ie===!0&&(L===!0||b!==Me)){const bt=b===Me&&Y.id===ce;We.setState(Y,b,bt)}let ut=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==vn.state.version||De.outputColorSpace!==Re||K.isBatchedMesh&&De.batching===!1||!K.isBatchedMesh&&De.batching===!0||K.isBatchedMesh&&De.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&De.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&De.instancing===!1||!K.isInstancedMesh&&De.instancing===!0||K.isSkinnedMesh&&De.skinning===!1||!K.isSkinnedMesh&&De.skinning===!0||K.isInstancedMesh&&De.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&De.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&De.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&De.instancingMorph===!1&&K.morphTexture!==null||De.envMap!==ze||Y.fog===!0&&De.fog!==Ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==We.numPlanes||De.numIntersection!==We.numIntersection)||De.vertexAlphas!==nt||De.vertexTangents!==ot||De.morphTargets!==Xe||De.morphNormals!==vt||De.morphColors!==Ot||De.toneMapping!==Ut||De.morphTargetsCount!==en||!!De.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,De.__version=Y.version);let En=De.currentProgram;ut===!0&&(En=xa(Y,H,K),z&&Y.isNodeMaterial&&z.onUpdateProgram(Y,En,De));let Yn=!1,Fi=!1,Cs=!1;const Mt=En.getUniforms(),Bt=De.uniforms;if(_.useProgram(En.program)&&(Yn=!0,Fi=!0,Cs=!0),Y.id!==ce&&(ce=Y.id,Fi=!0),De.needsLights){const bt=zm(A.state.lightProbeGridArray,K);De.lightProbeGrid!==bt&&(De.lightProbeGrid=bt,Fi=!0)}if(Yn||Me!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Mt.setValue(T,"projectionMatrix",b.projectionMatrix),Mt.setValue(T,"viewMatrix",b.matrixWorldInverse);const Bi=Mt.map.cameraPosition;Bi!==void 0&&Bi.setValue(T,se.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&Mt.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Mt.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),Me!==b&&(Me=b,Fi=!0,Cs=!0)}if(De.needsLights&&(vn.state.directionalShadowMap.length>0&&Mt.setValue(T,"directionalShadowMap",vn.state.directionalShadowMap,J),vn.state.spotShadowMap.length>0&&Mt.setValue(T,"spotShadowMap",vn.state.spotShadowMap,J),vn.state.pointShadowMap.length>0&&Mt.setValue(T,"pointShadowMap",vn.state.pointShadowMap,J)),K.isSkinnedMesh){Mt.setOptional(T,K,"bindMatrix"),Mt.setOptional(T,K,"bindMatrixInverse");const bt=K.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),Mt.setValue(T,"boneTexture",bt.boneTexture,J))}K.isBatchedMesh&&(Mt.setOptional(T,K,"batchingTexture"),Mt.setValue(T,"batchingTexture",K._matricesTexture,J),Mt.setOptional(T,K,"batchingIdTexture"),Mt.setValue(T,"batchingIdTexture",K._indirectTexture,J),Mt.setOptional(T,K,"batchingColorTexture"),K._colorsTexture!==null&&Mt.setValue(T,"batchingColorTexture",K._colorsTexture,J));const Oi=j.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&O.update(K,j,En),(Fi||De.receiveShadow!==K.receiveShadow)&&(De.receiveShadow=K.receiveShadow,Mt.setValue(T,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Bt.envMapIntensity.value=H.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=XE()),Fi){if(Mt.setValue(T,"toneMappingExposure",U.toneMappingExposure),De.needsLights&&Gm(Bt,Cs),Ce&&Y.fog===!0&&Ie.refreshFogUniforms(Bt,Ce),Ie.refreshMaterialUniforms(Bt,Y,he,ge,A.state.transmissionRenderTarget[b.id]),De.needsLights&&De.lightProbeGrid){const bt=De.lightProbeGrid;Bt.probesSH.value=bt.texture,Bt.probesMin.value.copy(bt.boundingBox.min),Bt.probesMax.value.copy(bt.boundingBox.max),Bt.probesResolution.value.copy(bt.resolution)}mo.upload(T,of(De),Bt,J)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(mo.upload(T,of(De),Bt,J),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Mt.setValue(T,"center",K.center),Mt.setValue(T,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(T,"normalMatrix",K.normalMatrix),Mt.setValue(T,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const bt=Y.uniformsGroups;for(let Bi=0,Ps=bt.length;Bi<Ps;Bi++){const cf=bt[Bi];fe.update(cf,En),fe.bind(cf,En)}}return En}function Gm(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Hm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,H,j){const Y=V.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=H,V.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const j=V.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,j=0){Q=b,q=H,G=j;let Y=null,K=!1,Ce=!1;if(b){const Re=V.get(b);if(Re.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(T.FRAMEBUFFER,Re.__webglFramebuffer),ve.copy(b.viewport),xe.copy(b.scissor),Ze=b.scissorTest,_.viewport(ve),_.scissor(xe),_.setScissorTest(Ze),ce=-1;return}else if(Re.__webglFramebuffer===void 0)J.setupRenderTarget(b);else if(Re.__hasExternalTextures)J.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const nt=b.depthTexture;if(Re.__boundDepthTexture!==nt){if(nt!==null&&V.has(nt)&&(b.width!==nt.image.width||b.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ce=!0);const ze=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?Y=ze[H][j]:Y=ze[H],K=!0):b.samples>0&&J.useMultisampledRTT(b)===!1?Y=V.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?Y=ze[j]:Y=ze,ve.copy(b.viewport),xe.copy(b.scissor),Ze=b.scissorTest}else ve.copy(Fe).multiplyScalar(he).floor(),xe.copy(P).multiplyScalar(he).floor(),Ze=D;if(j!==0&&(Y=Z),_.bindFramebuffer(T.FRAMEBUFFER,Y)&&_.drawBuffers(b,Y),_.viewport(ve),_.scissor(xe),_.setScissorTest(Ze),K){const Re=V.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,j)}else if(Ce){const Re=H;for(let ke=0;ke<b.textures.length;ke++){const ze=V.get(b.textures[ke]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+ke,ze.__webglTexture,j,Re)}}else if(b!==null&&j!==0){const Re=V.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Re.__webglTexture,j)}ce=-1},this.readRenderTargetPixels=function(b,H,j,Y,K,Ce,Ue,Re=0){if(!(b&&b.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){_.bindFramebuffer(T.FRAMEBUFFER,ke);try{const ze=b.textures[Re],nt=ze.format,ot=ze.type;if(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),!E.textureFormatReadable(nt)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(ot)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Y&&j>=0&&j<=b.height-K&&T.readPixels(H,j,Y,K,Te.convert(nt),Te.convert(ot),Ce)}finally{const ze=Q!==null?V.get(Q).__webglFramebuffer:null;_.bindFramebuffer(T.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,Y,K,Ce,Ue,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(H>=0&&H<=b.width-Y&&j>=0&&j<=b.height-K){_.bindFramebuffer(T.FRAMEBUFFER,ke);const ze=b.textures[Re],nt=ze.format,ot=ze.type;if(b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),!E.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Xe),T.bufferData(T.PIXEL_PACK_BUFFER,Ce.byteLength,T.STREAM_READ),T.readPixels(H,j,Y,K,Te.convert(nt),Te.convert(ot),0);const vt=Q!==null?V.get(Q).__webglFramebuffer:null;_.bindFramebuffer(T.FRAMEBUFFER,vt);const Ot=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await J_(T,Ot,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Xe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ce),T.deleteBuffer(Xe),T.deleteSync(Ot),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,j=0){const Y=Math.pow(2,-j),K=Math.floor(b.image.width*Y),Ce=Math.floor(b.image.height*Y),Ue=H!==null?H.x:0,Re=H!==null?H.y:0;J.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,j,0,0,Ue,Re,K,Ce),_.unbindTexture()},this.copyTextureToTexture=function(b,H,j=null,Y=null,K=0,Ce=0){let Ue,Re,ke,ze,nt,ot,Xe,vt,Ot;const Ut=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if(j!==null)Ue=j.max.x-j.min.x,Re=j.max.y-j.min.y,ke=j.isBox3?j.max.z-j.min.z:1,ze=j.min.x,nt=j.min.y,ot=j.isBox3?j.min.z:0;else{const Bt=Math.pow(2,-K);Ue=Math.floor(Ut.width*Bt),Re=Math.floor(Ut.height*Bt),b.isDataArrayTexture?ke=Ut.depth:b.isData3DTexture?ke=Math.floor(Ut.depth*Bt):ke=1,ze=0,nt=0,ot=0}Y!==null?(Xe=Y.x,vt=Y.y,Ot=Y.z):(Xe=0,vt=0,Ot=0);const yt=Te.convert(H.format),en=Te.convert(H.type);let De;H.isData3DTexture?(J.setTexture3D(H,0),De=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(J.setTexture2DArray(H,0),De=T.TEXTURE_2D_ARRAY):(J.setTexture2D(H,0),De=T.TEXTURE_2D),_.activeTexture(T.TEXTURE0),_.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),_.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const vn=_.getParameter(T.UNPACK_ROW_LENGTH),ut=_.getParameter(T.UNPACK_IMAGE_HEIGHT),En=_.getParameter(T.UNPACK_SKIP_PIXELS),Yn=_.getParameter(T.UNPACK_SKIP_ROWS),Fi=_.getParameter(T.UNPACK_SKIP_IMAGES);_.pixelStorei(T.UNPACK_ROW_LENGTH,Ut.width),_.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ut.height),_.pixelStorei(T.UNPACK_SKIP_PIXELS,ze),_.pixelStorei(T.UNPACK_SKIP_ROWS,nt),_.pixelStorei(T.UNPACK_SKIP_IMAGES,ot);const Cs=b.isDataArrayTexture||b.isData3DTexture,Mt=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Bt=V.get(b),Oi=V.get(H),bt=V.get(Bt.__renderTarget),Bi=V.get(Oi.__renderTarget);_.bindFramebuffer(T.READ_FRAMEBUFFER,bt.__webglFramebuffer),_.bindFramebuffer(T.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Ps=0;Ps<ke;Ps++)Cs&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.get(b).__webglTexture,K,ot+Ps),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,V.get(H).__webglTexture,Ce,Ot+Ps)),T.blitFramebuffer(ze,nt,Ue,Re,Xe,vt,Ue,Re,T.DEPTH_BUFFER_BIT,T.NEAREST);_.bindFramebuffer(T.READ_FRAMEBUFFER,null),_.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||V.has(b)){const Bt=V.get(b),Oi=V.get(H);_.bindFramebuffer(T.READ_FRAMEBUFFER,re),_.bindFramebuffer(T.DRAW_FRAMEBUFFER,W);for(let bt=0;bt<ke;bt++)Cs?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Bt.__webglTexture,K,ot+bt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Bt.__webglTexture,K),Mt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Oi.__webglTexture,Ce,Ot+bt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Oi.__webglTexture,Ce),K!==0?T.blitFramebuffer(ze,nt,Ue,Re,Xe,vt,Ue,Re,T.COLOR_BUFFER_BIT,T.NEAREST):Mt?T.copyTexSubImage3D(De,Ce,Xe,vt,Ot+bt,ze,nt,Ue,Re):T.copyTexSubImage2D(De,Ce,Xe,vt,ze,nt,Ue,Re);_.bindFramebuffer(T.READ_FRAMEBUFFER,null),_.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Mt?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(De,Ce,Xe,vt,Ot,Ue,Re,ke,yt,en,Ut.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(De,Ce,Xe,vt,Ot,Ue,Re,ke,yt,Ut.data):T.texSubImage3D(De,Ce,Xe,vt,Ot,Ue,Re,ke,yt,en,Ut):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ce,Xe,vt,Ue,Re,yt,en,Ut.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ce,Xe,vt,Ut.width,Ut.height,yt,Ut.data):T.texSubImage2D(T.TEXTURE_2D,Ce,Xe,vt,Ue,Re,yt,en,Ut);_.pixelStorei(T.UNPACK_ROW_LENGTH,vn),_.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut),_.pixelStorei(T.UNPACK_SKIP_PIXELS,En),_.pixelStorei(T.UNPACK_SKIP_ROWS,Yn),_.pixelStorei(T.UNPACK_SKIP_IMAGES,Fi),Ce===0&&H.generateMipmaps&&T.generateMipmap(De),_.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&J.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){q=0,G=0,Q=null,_.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var An=Uint8Array,js=Uint16Array,qE=Int32Array,hm=new An([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dm=new An([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),YE=new An([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pm=function(n,e){for(var t=new js(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new qE(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},mm=pm(hm,2),gm=mm.b,KE=mm.r;gm[28]=258,KE[258]=28;var ZE=pm(dm,0),JE=ZE.b,su=new js(32768);for(var Ct=0;Ct<32768;++Ct){var Xi=(Ct&43690)>>1|(Ct&21845)<<1;Xi=(Xi&52428)>>2|(Xi&13107)<<2,Xi=(Xi&61680)>>4|(Xi&3855)<<4,su[Ct]=((Xi&65280)>>8|(Xi&255)<<8)>>1}var Xr=(function(n,e,t){for(var i=n.length,s=0,r=new js(e);s<i;++s)n[s]&&++r[n[s]-1];var a=new js(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new js(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],f=e-n[s],u=a[n[s]-1]++<<f,h=u|(1<<f)-1;u<=h;++u)o[su[u]>>l]=c}else for(o=new js(i),s=0;s<i;++s)n[s]&&(o[s]=su[a[n[s]-1]++]>>15-n[s]);return o}),_a=new An(288);for(var Ct=0;Ct<144;++Ct)_a[Ct]=8;for(var Ct=144;Ct<256;++Ct)_a[Ct]=9;for(var Ct=256;Ct<280;++Ct)_a[Ct]=7;for(var Ct=280;Ct<288;++Ct)_a[Ct]=8;var _m=new An(32);for(var Ct=0;Ct<32;++Ct)_m[Ct]=5;var jE=Xr(_a,9,1),QE=Xr(_m,5,1),ql=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Dn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Yl=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},eT=function(n){return(n+7)/8|0},tT=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new An(n.subarray(e,t))},nT=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Un=function(n,e,t){var i=new Error(e||nT[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Un),!t)throw i;return i},iT=function(n,e,t,i){var s=n.length,r=0;if(!s||e.f&&!e.l)return t||new An(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new An(s*3));var c=function(Fe){var P=t.length;if(Fe>P){var D=new An(Math.max(P*2,Fe));D.set(t),t=D}},f=e.f||0,u=e.p||0,h=e.b||0,d=e.l,m=e.d,v=e.m,g=e.n,p=s*8;do{if(!d){f=Dn(n,u,1);var S=Dn(n,u+1,3);if(u+=3,S)if(S==1)d=jE,m=QE,v=9,g=5;else if(S==2){var A=Dn(n,u,31)+257,C=Dn(n,u+10,15)+4,y=A+Dn(n,u+5,31)+1;u+=14;for(var R=new An(y),U=new An(19),I=0;I<C;++I)U[YE[I]]=Dn(n,u+I*3,7);u+=C*3;for(var z=ql(U),Z=(1<<z)-1,re=Xr(U,z,1),I=0;I<y;){var W=re[Dn(n,u,Z)];u+=W&15;var M=W>>4;if(M<16)R[I++]=M;else{var q=0,G=0;for(M==16?(G=3+Dn(n,u,3),u+=2,q=R[I-1]):M==17?(G=3+Dn(n,u,7),u+=3):M==18&&(G=11+Dn(n,u,127),u+=7);G--;)R[I++]=q}}var Q=R.subarray(0,A),ce=R.subarray(A);v=ql(Q),g=ql(ce),d=Xr(Q,v,1),m=Xr(ce,g,1)}else Un(1);else{var M=eT(u)+4,x=n[M-4]|n[M-3]<<8,w=M+x;if(w>s){l&&Un(0);break}o&&c(h+x),t.set(n.subarray(M,w),h),e.b=h+=x,e.p=u=w*8,e.f=f;continue}if(u>p){l&&Un(0);break}}o&&c(h+131072);for(var Me=(1<<v)-1,ve=(1<<g)-1,xe=u;;xe=u){var q=d[Yl(n,u)&Me],Ze=q>>4;if(u+=q&15,u>p){l&&Un(0);break}if(q||Un(2),Ze<256)t[h++]=Ze;else if(Ze==256){xe=u,d=null;break}else{var ct=Ze-254;if(Ze>264){var I=Ze-257,Je=hm[I];ct=Dn(n,u,(1<<Je)-1)+gm[I],u+=Je}var ne=m[Yl(n,u)&ve],ge=ne>>4;ne||Un(3),u+=ne&15;var ce=JE[ge];if(ge>3){var Je=dm[ge];ce+=Yl(n,u)&(1<<Je)-1,u+=Je}if(u>p){l&&Un(0);break}o&&c(h+131072);var he=h+ct;if(h<ce){var He=r-ce,$e=Math.min(ce,he);for(He+h<0&&Un(3);h<$e;++h)t[h]=i[He+h]}for(;h<he;++h)t[h]=t[h-ce]}}e.l=d,e.p=xe,e.b=h,e.f=f,d&&(f=1,e.m=v,e.d=m,e.n=g)}while(!f);return h!=t.length&&a?tT(t,0,h):t.subarray(0,h)},sT=new An(0),rT=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Un(6,"invalid zlib data"),(n[1]>>5&1)==1&&Un(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function aT(n,e){return iT(n.subarray(rT(n),-4),{i:2},e,e)}var oT=typeof TextDecoder<"u"&&new TextDecoder,lT=0;try{oT.decode(sT,{stream:!0}),lT=1}catch{}function vm(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let s=n,r=i,a=Math.floor((s+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:s=a,a=Math.floor((s+r)/2);return a}function cT(n,e,t,i){const s=[],r=[],a=[];s[0]=1;for(let o=1;o<=t;++o){r[o]=e-i[n+1-o],a[o]=i[n+o]-e;let l=0;for(let c=0;c<o;++c){const f=a[c+1],u=r[o-c],h=s[c]/(f+u);s[c]=l+f*h,l=u*h}s[o]=l}return s}function uT(n,e,t,i){const s=vm(n,i,e),r=cT(s,i,n,e),a=new ht(0,0,0,0);for(let o=0;o<=n;++o){const l=t[s-n+o],c=r[o],f=l.w*c;a.x+=l.x*f,a.y+=l.y*f,a.z+=l.z*f,a.w+=l.w*c}return a}function fT(n,e,t,i,s){const r=[];for(let u=0;u<=t;++u)r[u]=0;const a=[];for(let u=0;u<=i;++u)a[u]=r.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=r.slice(0);o[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-s[n+1-u],c[u]=s[n+u]-e;let h=0;for(let d=0;d<u;++d){const m=c[d+1],v=l[u-d];o[u][d]=m+v;const g=o[d][u-1]/o[u][d];o[d][u]=h+m*g,h=v*g}o[u][u]=h}for(let u=0;u<=t;++u)a[0][u]=o[u][t];for(let u=0;u<=t;++u){let h=0,d=1;const m=[];for(let v=0;v<=t;++v)m[v]=r.slice(0);m[0][0]=1;for(let v=1;v<=i;++v){let g=0;const p=u-v,S=t-v;u>=v&&(m[d][0]=m[h][0]/o[S+1][p],g=m[d][0]*o[p][S]);const M=p>=-1?1:-p,x=u-1<=S?v-1:t-u;for(let A=M;A<=x;++A)m[d][A]=(m[h][A]-m[h][A-1])/o[S+1][p+A],g+=m[d][A]*o[p+A][S];u<=S&&(m[d][v]=-m[h][v-1]/o[S+1][u],g+=m[d][v]*o[u][S]),a[v][u]=g;const w=h;h=d,d=w}}let f=t;for(let u=1;u<=i;++u){for(let h=0;h<=t;++h)a[u][h]*=f;f*=t-u}return a}function hT(n,e,t,i,s){const r=s<n?s:n,a=[],o=vm(n,i,e),l=fT(o,i,n,r,e),c=[];for(let f=0;f<t.length;++f){const u=t[f].clone(),h=u.w;u.x*=h,u.y*=h,u.z*=h,c[f]=u}for(let f=0;f<=r;++f){const u=c[o-n].clone().multiplyScalar(l[f][0]);for(let h=1;h<=n;++h)u.add(c[o-n+h].clone().multiplyScalar(l[f][h]));a[f]=u}for(let f=r+1;f<=s+1;++f)a[f]=new ht(0,0,0);return a}function dT(n,e){let t=1;for(let s=2;s<=n;++s)t*=s;let i=1;for(let s=2;s<=e;++s)i*=s;for(let s=2;s<=n-e;++s)i*=s;return t/i}function pT(n){const e=n.length,t=[],i=[];for(let r=0;r<e;++r){const a=n[r];t[r]=new B(a.x,a.y,a.z),i[r]=a.w}const s=[];for(let r=0;r<e;++r){const a=t[r].clone();for(let o=1;o<=r;++o)a.sub(s[r-o].clone().multiplyScalar(dT(r,o)*i[o]));s[r]=a.divideScalar(i[0])}return s}function mT(n,e,t,i,s){const r=hT(n,e,t,i,s);return pT(r)}class gT extends Hv{constructor(e,t,i,s,r){super();const a=t?t.length-1:0,o=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||a;for(let l=0;l<o;++l){const c=i[l];this.controlPoints[l]=new ht(c.x,c.y,c.z,c.w)}}getPoint(e,t=new B){const i=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=uT(this.degree,this.knots,this.controlPoints,s);return r.w!==1&&r.divideScalar(r.w),i.set(r.x,r.y,r.z)}getTangent(e,t=new B){const i=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=mT(this.degree,this.knots,this.controlPoints,s,1);return i.copy(r[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new ht(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let it,kt,Kt;class _T extends As{constructor(e){super(e)}load(e,t,i,s){const r=this,a=r.path===""?Nx.extractUrlBase(e):r.path,o=new wx(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){if(bT(e))it=new ST().parse(e);else{const s=Mm(e);if(!ET(s))throw new Error("THREE.FBXLoader: Unknown format.");if(sd(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+sd(s));it=new MT().parse(s)}const i=new Cx(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new vT(i,this.manager).parse(it)}}class vT{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){kt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),s=this.parseDeformers(),r=new xT().parse(s);return this.parseScene(s,r,i),Kt}parseConnections(){const e=new Map;return"Connections"in it&&it.Connections.connections.forEach(function(i){const s=i[0],r=i[1],a=i[2];e.has(s)||e.set(s,{parents:[],children:[]});const o={ID:r,relationship:a};e.get(s).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:s,relationship:a};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in it.Objects){const i=it.Objects.Video;for(const s in i){const r=i[s],a=parseInt(s);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){const o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){const c=this.parseImage(i[s]);t[r.RelativeFilename||r.Filename]=c}}}}for(const i in e){const s=e[i];t[s]!==void 0?e[i]=t[s]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,s=i.slice(i.lastIndexOf(".")+1).toLowerCase();let r;switch(s){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in it.Objects){const i=it.Objects.Texture;for(const s in i){const r=this.parseTexture(i[s],e);t.set(parseInt(s),r)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const s=e.WrapModeU,r=e.WrapModeV,a=s!==void 0?s.value:0,o=r!==void 0?r.value:0;if(i.wrapS=a===0?Qr:On,i.wrapT=o===0?Qr:On,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=e.FileName.split(".").pop().toLowerCase();let s=this.manager.getHandler(`.${i}`);s===null&&(s=this.textureLoader);const r=s.path;r||s.setPath(this.textureLoader.path);const a=kt.get(e.id).children;let o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&s.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Qt;const l=s.load(o);return s.setPath(r),l}parseMaterials(e){const t=new Map;if("Material"in it.Objects){const i=it.Objects.Material;for(const s in i){const r=this.parseMaterial(i[s],e);r!==null&&t.set(parseInt(s),r)}}return t}parseMaterial(e,t){const i=e.id,s=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!kt.has(i))return null;const a=this.parseParameters(e,t,i);let o;switch(r.toLowerCase()){case"phong":o=new Ya;break;case"lambert":o=new eu;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new Ya;break}return o.setValues(a),o.name=s,o}parseParameters(e,t,i){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=tt.colorSpaceToWorking(new Ye().fromArray(e.Diffuse.value),wt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=tt.colorSpaceToWorking(new Ye().fromArray(e.DiffuseColor.value),wt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=tt.colorSpaceToWorking(new Ye().fromArray(e.Emissive.value),wt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=tt.colorSpaceToWorking(new Ye().fromArray(e.EmissiveColor.value),wt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=tt.colorSpaceToWorking(new Ye().fromArray(e.Specular.value),wt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=tt.colorSpaceToWorking(new Ye().fromArray(e.SpecularColor.value),wt));const r=this;return kt.get(i).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":s.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":s.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=r.getTexture(t,a.ID),s.map!==void 0&&(s.map.colorSpace=wt);break;case"DisplacementColor":s.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":s.emissiveMap=r.getTexture(t,a.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=wt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":s.envMap=r.getTexture(t,a.ID),s.envMap!==void 0&&(s.envMap.mapping=lo,s.envMap.colorSpace=wt);break;case"SpecularColor":s.specularMap=r.getTexture(t,a.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=wt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=r.getTexture(t,a.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),s}getTexture(e,t){return"LayeredTexture"in it.Objects&&t in it.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=kt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in it.Objects){const i=it.Objects.Deformer;for(const s in i){const r=i[s],a=kt.get(parseInt(s));if(r.attrType==="Skin"){const o=this.parseSkeleton(a,i);o.ID=s,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[s]=o}else if(r.attrType==="BlendShape"){const o={id:s};o.rawTargets=this.parseMorphTargets(a,i),o.id=s,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(s){const r=t[s.ID];if(r.attrType!=="Cluster")return;const a={ID:s.ID,indices:[],weights:[],transformLink:new Ve().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),i.push(a)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let s=0;s<e.children.length;s++){const r=e.children[s],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=kt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){Kt=new oi;const s=this.parseModels(e.skeletons,t,i),r=it.Objects.Model,a=this;s.forEach(function(u){const h=r[u.ID];a.setLookAtProperties(u,h),kt.get(u.ID).parents.forEach(function(m){const v=s.get(m.ID);v!==void 0&&v.add(u)}),u.parent===null&&Kt.add(u)}),this.addGlobalSceneSettings(),Kt.traverse(function(u){if(u.userData.transformData){u.parent&&(u.userData.transformData.parentMatrix=u.parent.matrix,u.userData.transformData.parentMatrixWorld=u.parent.matrixWorld);const h=ym(u.userData.transformData);u.applyMatrix4(h),u.updateWorldMatrix()}});const o=this.parsePoseNodes(),l=new Set;for(const u in e.skeletons)e.skeletons[u].rawBones.forEach(function(h,d){const m=e.skeletons[u].bones[d];m&&l.add(m.ID)});const c=new Ve;Kt.traverse(function(u){if(u.isBone&&u.ID!==void 0&&!l.has(u.ID)){const h=o[u.ID];h!==void 0&&(u.parent?(c.copy(u.parent.matrixWorld).invert(),c.multiply(h)):c.copy(h),c.decompose(u.position,u.quaternion,u.scale),u.updateMatrix(),u.matrixWorld.copy(h))}}),this.bindSkeleton(e.skeletons,t,s);const f=new yT().parse();Kt.children.length===1&&Kt.children[0].isGroup&&(Kt.children[0].animations=f,Kt=Kt.children[0]),Kt.animations=f,"GlobalSettings"in it&&"UpAxis"in it.GlobalSettings&&it.GlobalSettings.UpAxis.value===2&&(console.warn("THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted."),Kt.rotation.set(-Math.PI/2,0,0))}parseModels(e,t,i){const s=new Map,r=it.Objects.Model;for(const a in r){const o=parseInt(a),l=r[a],c=kt.get(o);let f=this.buildSkeleton(c,e,o,l.attrName);if(!f){switch(l.attrType){case"Camera":f=this.createCamera(c);break;case"Light":f=this.createLight(c);break;case"Mesh":f=this.createMesh(c,t,i);break;case"NurbsCurve":f=this.createCurve(c,t);break;case"LimbNode":case"Root":f=new Zc;break;case"Null":default:f=new oi;break}f.name=l.attrName?ft.sanitizeNodeName(l.attrName):"",f.userData.originalName=l.attrName,f.ID=o}this.getTransformData(f,l),s.set(o,f)}return s}buildSkeleton(e,t,i,s){let r=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,f){if(c.ID===a.ID){const u=r;r=new Zc,r.matrixWorld.copy(c.transformLink),r.name=s?ft.sanitizeNodeName(s):"",r.userData.originalName=s,r.ID=i,l.bones[f]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,i;if(e.children.forEach(function(s){const r=it.Objects.NodeAttribute[s.ID];r!==void 0&&(i=r)}),i===void 0)t=new At;else{let s=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(s=1);let r=1;i.NearPlane!==void 0&&(r=i.NearPlane.value/1e3);let a=1e3;i.FarPlane!==void 0&&(a=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let f=45;i.FieldOfView!==void 0&&(f=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(s){case 0:t=new hn(f,c,r,a),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new At;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new At;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(s){const r=it.Objects.NodeAttribute[s.ID];r!==void 0&&(i=r)}),i===void 0)t=new At;else{let s;i.LightType===void 0?s=0:s=i.LightType.value;let r=16777215;i.Color!==void 0&&(r=tt.colorSpaceToWorking(new Ye().fromArray(i.Color.value),wt));let a=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(a=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(s){case 0:t=new Ih(r,a,o,l);break;case 1:t=new po(r,a);break;case 2:let c=Math.PI/3,f=0;i.OuterAngle!==void 0?(c=Pt.degToRad(i.OuterAngle.value),i.InnerAngle!==void 0&&(f=1-i.InnerAngle.value/i.OuterAngle.value,f=Math.max(0,f))):i.InnerAngle!==void 0&&(c=Pt.degToRad(i.InnerAngle.value)),t=new nm(r,a,o,c,f,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Ih(r,a);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let s,r=null,a=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new Ya({name:As.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,f=r.groups.length;c<f;c++){const u=r.groups[c];(u.materialIndex<0||u.materialIndex>=o.length)&&(u.materialIndex=o.length,l=!0)}if(l){const c=new Ya;o.push(c)}}return r.FBX_Deformer?(s=new Nv(r,a),s.normalizeSkinWeights()):s=new Ht(r,a),s}createCurve(e,t){const i=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),s=new Wp({name:As.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new zv(i,s)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=la(t.RotationOrder.value):i.eulerOrder=la(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&kt.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const r=it.Objects.Model[s.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Kt.add(e.target)):e.lookAt(new B().fromArray(a))}}})}bindSkeleton(e,t,i){for(const s in e){const r=e[s],a=[];for(let l=0,c=r.bones.length;l<c;l++){const f=new Ve;r.bones[l]&&r.rawBones[l]&&f.copy(r.rawBones[l].transformLink).invert(),a.push(f)}kt.get(parseInt(r.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;kt.get(c).parents.forEach(function(u){if(i.has(u.ID)){const h=i.get(u.ID);h.updateMatrixWorld(!0),h.bind(new Bu(r.bones,a),h.matrixWorld)}})}})}}parsePoseNodes(){const e={};if("Pose"in it.Objects){const t=it.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const s=t[i].PoseNode;Array.isArray(s)?s.forEach(function(r){e[r.Node]=new Ve().fromArray(r.Matrix.a)}):e[s.Node]=new Ve().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in it){if("AmbientColor"in it.GlobalSettings){const e=it.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],s=e[2];if(t!==0||i!==0||s!==0){const r=new Ye().setRGB(t,i,s,wt);Kt.add(new Ux(r,1))}}"UnitScaleFactor"in it.GlobalSettings&&(Kt.userData.unitScaleFactor=it.GlobalSettings.UnitScaleFactor.value)}}}class xT{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in it.Objects){const i=it.Objects.Geometry;for(const s in i){const r=kt.get(parseInt(s)),a=this.parseGeometry(r,i[s],e);t.set(parseInt(s),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const s=i.skeletons,r=[],a=e.parents.map(function(u){return it.Objects.Model[u.ID]});if(a.length===0)return;const o=e.children.reduce(function(u,h){return s[h.ID]!==void 0&&(u=s[h.ID]),u},null);e.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&r.push(i.morphTargets[u.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=la(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const f=ym(c);return this.genGeometry(t,o,r,f)}genGeometry(e,t,i,s){const r=new Yt;e.attrName&&(r.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new Rt(o.vertex,3);if(l.applyMatrix4(s),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new Rt(o.colors,3)),t&&(r.setAttribute("skinIndex",new Ou(o.weightsIndices,4)),r.setAttribute("skinWeight",new Rt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){const c=new Qe().getNormalMatrix(s),f=new Rt(o.normal,3);f.applyNormalMatrix(c),r.setAttribute("normal",f)}if(o.uvs.forEach(function(c,f){const u=f===0?"uv":`uv${f}`;r.setAttribute(u,new Rt(o.uvs[f],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],f=0;if(o.materialIndex.forEach(function(u,h){u!==c&&(r.addGroup(f,h-f,c),c=u,f=h)}),r.groups.length>0){const u=r.groups[r.groups.length-1],h=u.start+u.count;h!==o.materialIndex.length&&r.addGroup(h,o.materialIndex.length-h,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,i,s),r}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(s,r){s.indices.forEach(function(a,o){i.weightTable[a]===void 0&&(i.weightTable[a]=[]),i.weightTable[a].push({id:r,weight:s.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,s=0,r=!1,a=[],o=[],l=[],c=[],f=[],u=[];const h=this;return e.vertexIndices.forEach(function(d,m){let v,g=!1;d<0&&(d=d^-1,g=!0);let p=[],S=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const M=eo(m,i,d,e.color);l.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(M){S.push(M.weight),p.push(M.id)}),S.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],x=[0,0,0,0];S.forEach(function(w,A){let C=w,y=p[A];x.forEach(function(R,U,I){if(C>R){I[U]=C,C=R;const z=M[U];M[U]=y,y=z}})}),p=M,S=x}for(;S.length<4;)S.push(0),p.push(0);for(let M=0;M<4;++M)f.push(S[M]),u.push(p[M])}if(e.normal){const M=eo(m,i,d,e.normal);o.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=eo(m,i,d,e.material)[0],v<0&&(h.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(M,x){const w=eo(m,i,d,M);c[x]===void 0&&(c[x]=[]),c[x].push(w[0]),c[x].push(w[1])}),s++,g&&(h.genFace(t,e,a,v,o,l,c,f,u,s),i++,s=0,a=[],o=[],l=[],c=[],f=[],u=[])}),t}getNormalNewell(e){const t=new B(0,0,0);for(let i=0;i<e.length;i++){const s=e[i],r=e[(i+1)%e.length];t.x+=(s.y-r.y)*(s.z+r.z),t.y+=(s.z-r.z)*(s.x+r.x),t.z+=(s.x-r.x)*(s.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new B(0,1,0):new B(0,0,1)).cross(t).normalize(),r=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:r}}flattenVertex(e,t,i){return new at(e.dot(t),e.dot(i))}genFace(e,t,i,s,r,a,o,l,c,f){let u;if(f>3){const h=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<i.length;p+=3)h.push(new B(d[i[p]],d[i[p+1]],d[i[p+2]]));const{tangent:m,bitangent:v}=this.getNormalTangentAndBitangent(h),g=[];for(const p of h)g.push(this.flattenVertex(p,m,v));u=zu.triangulateShape(g,[])}else u=[[0,1,2]];for(const[h,d,m]of u)e.vertex.push(t.vertexPositions[i[h*3]]),e.vertex.push(t.vertexPositions[i[h*3+1]]),e.vertex.push(t.vertexPositions[i[h*3+2]]),e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[m*3]]),e.vertex.push(t.vertexPositions[i[m*3+1]]),e.vertex.push(t.vertexPositions[i[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(a[h*3]),e.colors.push(a[h*3+1]),e.colors.push(a[h*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[m*3]),e.colors.push(a[m*3+1]),e.colors.push(a[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[m*3]),e.normal.push(r[m*3+1]),e.normal.push(r[m*3+2])),t.uv&&t.uv.forEach(function(v,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(o[g][h*2]),e.uvs[g].push(o[g][h*2+1]),e.uvs[g].push(o[g][d*2]),e.uvs[g].push(o[g][d*2+1]),e.uvs[g].push(o[g][m*2]),e.uvs[g].push(o[g][m*2+1])})}addMorphTargets(e,t,i,s){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=s.clone().setPosition(0,0,0),a=this;i.forEach(function(o){o.rawTargets.forEach(function(l){const c=it.Objects.Geometry[l.geoID];c!==void 0&&a.genMorphGeometry(e,t,c,r,l.name)})})}genMorphGeometry(e,t,i,s,r){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],f=e.attributes.position.count*3,u=new Float32Array(f);for(let v=0;v<c.length;v++){const g=c[v]*3;u[g]=l[v*3],u[g+1]=l[v*3+1],u[g+2]=l[v*3+2]}const h={vertexIndices:o,vertexPositions:u,baseVertexPositions:a},d=this.genBuffers(h),m=new Rt(d.vertex,3);m.name=r||i.attrName,m.applyMatrix4(s),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.Normals.a;let r=[];return i==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:r,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.UV.a;let r=[];return i==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:s,indices:r,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,s=e.Colors.a;let r=[];i==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new Ye;a<s.length;a+=4)o.fromArray(s,a),tt.colorSpaceToWorking(o,wt),o.toArray(s,a);return{dataSize:4,buffer:s,indices:r,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const s=e.Materials.a,r=[];for(let a=0;a<s.length;++a)r.push(a);return{dataSize:1,buffer:s,indices:r,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Yt;const i=t-1,s=e.KnotVector.a,r=[],a=e.Points.a;for(let u=0,h=a.length;u<h;u+=4)r.push(new ht().fromArray(a,u));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=i,l=s.length-1-o;for(let u=0;u<i;++u)r.push(r[u])}const f=new gT(i,s,r,o,l).getPoints(r.length*12);return new Yt().setFromPoints(f)}}class yT{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const s=t[i],r=this.addClip(s);e.push(r)}return e}parseClips(){if(it.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=it.Objects.AnimationCurveNode,t=new Map;for(const i in e){const s=e[i];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:s.id,attr:s.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=it.Objects.AnimationCurve;for(const i in t){const s={id:t[i].id,times:t[i].KeyTime.a.map(TT),values:t[i].KeyValueFloat.a},r=kt.get(s.id);if(r!==void 0){const a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=s:o.match(/Y/)?e.get(a).curves.y=s:o.match(/Z/)?e.get(a).curves.z=s:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=s)}}}parseAnimationLayers(e){const t=it.Objects.AnimationLayer,i=new Map;for(const s in t){const r=[],a=kt.get(parseInt(s));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const f=e.get(l.ID);if(f.curves.x!==void 0||f.curves.y!==void 0||f.curves.z!==void 0){if(r[c]===void 0){const u=kt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0});if(u.length===0)return;const h=u[0].ID;if(h!==void 0){const d=it.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const m={modelName:d.attrName?ft.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Kt.traverse(function(v){v.ID===d.id&&(m.transform=v.matrix,v.userData.transformData&&(m.eulerOrder=v.userData.transformData.eulerOrder,v.userData.transformData.rotation&&(m.initialRotation=v.userData.transformData.rotation)))}),m.transform||(m.transform=new Ve),"PreRotation"in d&&(m.preRotation=d.PreRotation.value),"PostRotation"in d&&(m.postRotation=d.PostRotation.value),r[c]=m}}r[c]&&(r[c][f.attr]=f)}else if(f.curves.morph!==void 0){if(r[c]===void 0){const u=kt.get(l.ID).parents.filter(function(S){return S.relationship!==void 0});if(u.length===0)return;const h=u[0].ID,d=kt.get(h).parents[0].ID,m=kt.get(d).parents[0].ID,v=kt.get(m).parents[0].ID,g=it.Objects.Model[v],p={modelName:g.attrName?ft.sanitizeNodeName(g.attrName):"",morphName:it.Objects.Deformer[h].attrName};r[c]=p}r[c][f.attr]=f}}}),i.set(parseInt(s),r))}return i}parseAnimStacks(e){const t=it.Objects.AnimationStack,i={};for(const s in t){const r=kt.get(parseInt(s)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(r[0].ID);i[s]={name:t[s].attrName,layer:a}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(s){t=t.concat(i.generateTracks(s))}),new tu(e.name,-1,t)}generateTracks(e){const t=[];let i=new B,s=new B;if(e.transform&&e.transform.decompose(i,new qt,s),i=i.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder,e.initialRotation);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,i,s){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,i);return new Gu(e+"."+s,r,a)}generateRotationTrack(e,t,i,s,r,a){let o,l;if(t.x!==void 0||t.y!==void 0||t.z!==void 0){const d=this.getTimesForAllAxes(t);if(d.length>0){const m=a||[0,0,0],v=this.synchronizeCurve(t.x,d,m[0]),g=this.synchronizeCurve(t.y,d,m[1]),p=this.synchronizeCurve(t.z,d,m[2]),S=this.interpolateRotations(v,g,p,r);o=S[0],l=S[1]}}const c=la(0);i!==void 0&&(i=i.map(Pt.degToRad),i.push(c),i=new Jt().fromArray(i),i=new qt().setFromEuler(i)),s!==void 0&&(s=s.map(Pt.degToRad),s.push(c),s=new Jt().fromArray(s),s=new qt().setFromEuler(s).invert());const f=new qt,u=new Jt,h=[];if(!(!l||!o)){for(let d=0;d<l.length;d+=3)u.set(l[d],l[d+1],l[d+2],r),f.setFromEuler(u),i!==void 0&&f.premultiply(i),s!==void 0&&f.multiply(s),d>2&&new qt().fromArray(h,(d-3)/3*4).dot(f)<0&&f.set(-f.x,-f.y,-f.z,-f.w),f.toArray(h,d/3*4);return new Ko(e+".quaternion",o,h)}}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(r){return r/100}),s=Kt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Yo(e.modelName+".morphTargetInfluences["+s+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,s){return i-s}),t.length>1){let i=1,s=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==s&&(t[i]=a,s=a,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const s=i,r=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const f=t.x.values[a];r.push(f),s[0]=f}else r.push(s[0]);if(o!==-1){const f=t.y.values[o];r.push(f),s[1]=f}else r.push(s[1]);if(l!==-1){const f=t.z.values[l];r.push(f),s[2]=f}else r.push(s[2])}),r}synchronizeCurve(e,t,i){if(e===void 0)return{times:t,values:t.map(()=>i)};if(e.times.length===t.length)return e;const s=[];for(let r=0;r<t.length;r++)s.push(this.sampleCurveValue(e,t[r],i));return{times:t,values:s}}sampleCurveValue(e,t,i){const s=e.times,r=e.values;if(t<=s[0])return r[0];if(t>=s[s.length-1])return r[r.length-1];for(let a=0;a<s.length-1;a++)if(t>=s[a]&&t<=s[a+1]){if(s[a]===t)return r[a];const o=(t-s[a])/(s[a+1]-s[a]);return r[a]*(1-o)+r[a+1]*o}return i}interpolateRotations(e,t,i,s){const r=[],a=[];r.push(e.times[0]),a.push(Pt.degToRad(e.values[0])),a.push(Pt.degToRad(t.values[0])),a.push(Pt.degToRad(i.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],i.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Pt.degToRad),f=[e.values[o],t.values[o],i.values[o]];if(isNaN(f[0])||isNaN(f[1])||isNaN(f[2]))continue;const u=f.map(Pt.degToRad),h=[f[0]-l[0],f[1]-l[1],f[2]-l[2]],d=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const v=Math.max(...d)/180,g=new Jt(...c,s),p=new Jt(...u,s),S=new qt().setFromEuler(g),M=new qt().setFromEuler(p);S.dot(M)<0&&M.set(-M.x,-M.y,-M.z,-M.w);const x=e.times[o-1],w=e.times[o]-x,A=new qt,C=new Jt;for(let y=0;y<1;y+=1/v)A.copy(S.clone().slerp(M.clone(),y)),r.push(x+y*w),C.setFromQuaternion(A,s),a.push(C.x),a.push(C.y),a.push(C.z)}else r.push(e.times[o]),a.push(Pt.degToRad(e.values[o])),a.push(Pt.degToRad(t.values[o])),a.push(Pt.degToRad(i.values[o]))}return[r,a]}}class MT{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new xm,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(s,r){const a=s.match(/^[\s\t]*;/),o=s.match(/^[\s\t]*$/);if(a||o)return;const l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),f=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,i[++r]):f?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:i},a=this.parseNodeAttr(s),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,r):i in o?(i==="PoseNode"?o.PoseNode.push(r):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),a.id!==""&&(o[i][a.id]=r)):typeof a.id=="number"?(o[i]={},o[i][a.id]=r):i!=="Properties70"&&(i==="PoseNode"?o[i]=[r]:o[i]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",s="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:i,type:s}}parseNodeProperty(e,t,i){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&r===","&&(r=i.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,s,r);return}if(s==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),f=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(h){return h.trim().replace(/^"/,"")}),s="connections",r=[c,f],wT(r,u),a[s]===void 0&&(a[s]=[])}s==="Node"&&(a.id=r),s in a&&Array.isArray(a[s])?a[s].push(r):s!=="a"?a[s]=r:a.a=r,this.setCurrentProp(a,s),s==="a"&&r.slice(-1)!==","&&(a.a=Zl(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Zl(t.a))}parseNodeSpecialProperty(e,t,i){const s=i.split('",').map(function(f){return f.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=s[0],a=s[1],o=s[2],l=s[3];let c=s[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Zl(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class ST{parse(e){const t=new id(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const s=new xm;for(;!this.endOfContent(t);){const r=this.parseNode(t,i);r!==null&&s.add(r.name,r)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},s=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(s===0)return null;const l=[];for(let h=0;h<r;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",f=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=r===1&&e.getOffset()===s;s>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(o,i,h)}return i.propertyList=l,typeof c=="number"&&(i.id=c),f!==""&&(i.attrName=f),u!==""&&(i.attrType=u),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const s=i.propertyList[0];Array.isArray(s)?(t[i.name]=i,i.a=s):t[i.name]=s}else if(e==="Connections"&&i.name==="C"){const s=[];i.propertyList.forEach(function(r,a){a!==0&&s.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(i.name==="Properties70")Object.keys(i).forEach(function(r){t[r]=i[r]});else if(e==="Properties70"&&i.name==="P"){let s=i.propertyList[0],r=i.propertyList[1];const a=i.propertyList[2],o=i.propertyList[3];let l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[s]={type:r,type2:a,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const o=aT(new Uint8Array(e.getArrayBuffer(a))),l=new id(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class id{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const s=i.indexOf(0);return s>=0&&(i=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(i)}}class xm{add(e,t){this[e]=t}}function bT(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===Mm(n,0,e.length)}function ET(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(s){const r=n[s-1];return n=n.slice(t+s),t++,r}for(let s=0;s<e.length;++s)if(i(1)===e[s])return!1;return!0}function sd(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function TT(n){return n/46186158e3}const AT=[];function eo(n,e,t,i){let s;switch(i.mappingType){case"ByPolygonVertex":s=n;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(s=i.indices[s]);const r=s*i.dataSize,a=r+i.dataSize;return RT(AT,i.buffer,r,a)}const Kl=new Jt,qs=new B;function ym(n){const e=new Ve,t=new Ve,i=new Ve,s=new Ve,r=new Ve,a=new Ve,o=new Ve,l=new Ve,c=new Ve,f=new Ve,u=new Ve,h=new Ve,d=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(qs.fromArray(n.translation));const m=la(0);if(n.preRotation){const I=n.preRotation.map(Pt.degToRad);I.push(m),t.makeRotationFromEuler(Kl.fromArray(I))}if(n.rotation){const I=n.rotation.map(Pt.degToRad);I.push(n.eulerOrder||m),i.makeRotationFromEuler(Kl.fromArray(I))}if(n.postRotation){const I=n.postRotation.map(Pt.degToRad);I.push(m),s.makeRotationFromEuler(Kl.fromArray(I)),s.invert()}n.scale&&r.scale(qs.fromArray(n.scale)),n.scalingOffset&&o.setPosition(qs.fromArray(n.scalingOffset)),n.scalingPivot&&a.setPosition(qs.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(qs.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(qs.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(u.copy(n.parentMatrix),f.copy(n.parentMatrixWorld));const v=t.clone().multiply(i).multiply(s),g=new Ve;g.extractRotation(f);const p=new Ve;p.copyPosition(f);const S=p.clone().invert().multiply(f),M=g.clone().invert().multiply(S),x=r,w=new Ve;if(d===0)w.copy(g).multiply(v).multiply(M).multiply(x);else if(d===1)w.copy(g).multiply(M).multiply(v).multiply(x);else{const z=new Ve().scale(new B().setFromMatrixScale(u)).clone().invert(),Z=M.clone().multiply(z);w.copy(g).multiply(v).multiply(Z).multiply(x)}const A=c.clone().invert(),C=a.clone().invert();let y=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(s).multiply(A).multiply(o).multiply(a).multiply(r).multiply(C);const R=new Ve().copyPosition(y),U=f.clone().multiply(R);return h.copyPosition(U),y=h.clone().multiply(w),y.premultiply(f.invert()),y}function la(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function Zl(n){return n.split(",").map(function(t){return parseFloat(t)})}function Mm(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function wT(n,e){for(let t=0,i=n.length,s=e.length;t<s;t++,i++)n[i]=e[t]}function RT(n,e,t,i){for(let s=t,r=0;s<i;s++,r++)n[r]=e[s];return n}function Sm(n){const e=new Map,t=new Map,i=n.clone();return bm(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function bm(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)bm(n.children[i],e.children[i],t)}const $i="./",rd={idle:`${$i}models/idle.fbx`,step:`${$i}models/step-hiphop.fbx`,wave:`${$i}models/wave-hiphop.fbx`,chicken:`${$i}models/chicken-dance.fbx`,clapping:`${$i}models/clapping.fbx`,cheering:`${$i}models/cheering.fbx`,rallying:`${$i}models/rallying.fbx`,arguing:`${$i}models/arguing.fbx`},ad={idle:{clip:"idle",timeScale:1},"aura-walk":{clip:"step",timeScale:1.05},mewing:{clip:"wave",timeScale:.5},"six-seven":{clip:"wave",timeScale:1.3},"sigma-stare":{clip:"wave",timeScale:.35},"boat-kid":{clip:"chicken",timeScale:1.15},"no-look":{clip:"wave",timeScale:.95},cringe:{clip:"chicken",timeScale:1.7},"aura-guard":{clip:"wave",timeScale:.55},"tank-pose":{clip:"wave",timeScale:.45}},CT=["idle","step","wave","chicken"];let to=null,Rr=null;function PT(n){const t=((n==null?void 0:n.animations)||[]).find(i=>i.tracks&&i.tracks.length>0);return t?t.clone():null}function IT(n){if(!n)return null;const e=n.clone();return e.tracks=e.tracks.filter(t=>!t.name.includes(".scale")),e}const od={idle:"Pose idle",step:"Step Hip Hop",wave:"Wave Hip Hop",chicken:"Chicken Dance",clapping:"Público · aplausos",cheering:"Público · ovación",rallying:"Público · ánimo",arguing:"Público · abucheo"};async function Em(n){if(to)return n==null||n(1,"Listo"),to;if(Rr){const e=await Rr;return n==null||n(1,"Listo"),e}Rr=(async()=>{const e=new _T,t=Object.entries(rd),i={};let s=0;const r=t.length;n==null||n(0,"Preparando assets…");for(const[l,c]of t){n==null||n(s/r,od[l]||l);try{i[l]=await e.loadAsync(c)}catch(f){console.error("[aura] FBX fail",c,f),i[l]=null}s+=1,n==null||n(s/r,od[l]||l)}const a=i.idle;if(!a)throw new Error("No se pudo cargar idle.fbx");const o={};for(const l of Object.keys(rd)){const c=PT(i[l]);if(!c){o[l]=null;continue}c.name=l,o[l]=IT(c)}return console.info("[aura] clips",Object.fromEntries(Object.entries(o).map(([l,c])=>[l,c?c.duration:null]))),to={base:a,clips:o},n==null||n(1,"Listo"),to})();try{return await Rr}catch(e){throw Rr=null,e}}async function Tm(){return Em()}function Am(n,e,{cheap:t=!1}={}){const i=new Ye(e),s=[];return n.traverse(r=>{if(!r.isMesh)return;if(/joint/i.test(r.name)){r.visible=!1;return}r.castShadow=!t,r.receiveShadow=!1,r.frustumCulled=!0;const a=new dx({color:i.clone(),roughness:t?.85:.55,metalness:.08});if(t)a.color.multiplyScalar(.85);else{const o=Array.isArray(r.material)?r.material[0]:r.material;o!=null&&o.color&&a.color.copy(o.color).lerp(i,.5),o!=null&&o.map&&(a.map=o.map)}r.material=a,s.push(a)}),s}function wm(n,e=2.05,{male:t=!1}={}){n.updateMatrixWorld(!0);const s=new Qi().setFromObject(n).getSize(new B);if(s.y<.001){n.scale.setScalar(.012);return}const r=e/s.y;t?n.scale.set(r*1.1,r*1.04,r*1.1):n.scale.setScalar(r),n.updateMatrixWorld(!0);const a=new Qi().setFromObject(n);n.position.y=-a.min.y}async function ld({color:n=5032432,name:e="player",gender:t="male"}={}){const{base:i,clips:s}=await Tm(),r=t==="male",a=new oi;a.name=e;const o=Sm(i);o.animations=[];const l=Am(o,n);wm(o,r?2.15:2,{male:r}),a.add(o);let c=null;o.traverse(v=>{if(c)return;const g=v.name||"";(g==="mixamorigHips"||g==="Hips"||g.endsWith("Hips"))&&(c=v)});const f=c?{x:c.position.x,y:c.position.y,z:c.position.z}:null,u=new Ht(new Vu(1.15,16,12),new Zi({color:n,transparent:!0,opacity:.12,depthWrite:!1}));u.position.y=1.1,u.name="aura",a.add(u);const h=new Ht(new ar(.55,.72,24),new Zi({color:n,transparent:!0,opacity:.55,side:Nn}));h.rotation.x=-Math.PI/2,h.position.y=.02,h.name="ring",a.add(h);const d=new im(o),m={};for(const v of CT){const g=s[v];if(!g)continue;const p=d.clipAction(g);p.enabled=!0,p.setLoop($o,1/0),m[v]=p}return a.userData={model:o,mixer:d,actions:m,mats:l,currentAction:null,hips:c,hipsHome:f,aura:u,ring:h,baseColor:n,pose:"idle",poseT:0,intensity:1,gender:t,facing:e==="player"?Math.PI/2:-Math.PI/2},ms(a,"idle",1),a}function ms(n,e,t=1){var l;const i=n.userData;i.pose=e,i.poseT=0,i.intensity=t;const s=ad[e]||ad.idle,r=(l=i.actions)==null?void 0:l[s.clip];if(!r){console.warn("[aura] sin clip para pose",e,s.clip);return}if(e==="idle"){const c=i.actions.idle;if(!c||!i.mixer)return;i.mixer.stopAllAction(),c.reset(),c.setLoop($o,1/0),c.setEffectiveTimeScale(1),c.setEffectiveWeight(1),c.enabled=!0,c.play(),i.currentAction=c;return}const o=s.timeScale*(.75+t*.45);if(r.setEffectiveTimeScale(o),i.currentAction===r){r.setEffectiveWeight(1),r.isRunning()||r.play();return}i.currentAction&&i.currentAction.fadeOut(.22),r.reset(),r.setEffectiveWeight(1),r.fadeIn(.22),r.play(),i.currentAction=r}function cd(n,e,t){var s;const i=n.userData;i.poseT+=e,(s=i.mixer)==null||s.update(e),i.hips&&i.hipsHome&&(i.hips.position.x=i.hipsHome.x,i.hips.position.z=i.hipsHome.z),i.pose==="idle"?(n.position.y=Math.sin(t*2.1)*.018,i.aura.material.opacity=.1+Math.sin(t*1.5)*.04):(n.position.y=0,(i.pose==="mewing"||i.pose==="sigma-stare")&&(i.aura.material.opacity=.1+Math.sin(t*1.5)*.03)),i.ring.rotation.z=t*.6,n.rotation.y=i.facing??0}async function LT({color:n=8952234,height:e=1.7,timeScale:t=1,homeClip:i="idle",gender:s="female"}={}){var S;const{base:r,clips:a}=await Tm(),o=s==="male",l=new oi;l.name="spectator";const c=Sm(r);c.animations=[];const f=Am(c,n,{cheap:!0});wm(c,e,{male:o}),l.add(c);let u=null;c.traverse(M=>{if(u)return;const x=M.name||"";(x==="mixamorigHips"||x==="Hips"||x.endsWith("Hips"))&&(u=M)});const h=u?{x:u.position.x,y:u.position.y,z:u.position.z}:null,d=new im(c),m={},v=M=>{if(m[M])return m[M];const x=a[M];if(!x)return null;const w=d.clipAction(x);return w.enabled=!0,w.setLoop($o,1/0),m[M]=w,w},g=a[i]?i:"idle",p=v(g)||v("idle");return p&&(p.setEffectiveTimeScale(t),p.setEffectiveWeight(1),p.play(),p.time=Math.random()*(((S=p.getClip())==null?void 0:S.duration)||1)),l.userData={model:c,mixer:d,hips:u,hipsHome:h,actions:m,ensureAction:v,clips:a,currentAction:p||null,idleScale:t,homeClip:g,mats:f,opacity:1,animAcc:Math.random()},l}function DT(n,e){const t=e<.45;n.userData.blocking!==t&&(n.userData.blocking=t,n.visible=!t)}const fs=new B,Cr=new B,Jl=new B,ud=new B;function UT(n,e,t){var s;if(!((s=n==null?void 0:n.children)!=null&&s.length))return;e.getWorldPosition(fs),Cr.set(t.x-fs.x,t.y-fs.y,t.z-fs.z);const i=Cr.length();if(!(i<.2)){Cr.multiplyScalar(1/i);for(const r of n.children){Jl.set(r.position.x-fs.x,1.05-fs.y,r.position.z-fs.z);const a=Jl.dot(Cr);ud.copy(Jl).addScaledVector(Cr,-a);const o=ud.length();let l=1;a>.6&&a<i+.6&&o<2.1&&(l=1-(1-o/2.1)*.95),DT(r,l)}}}function Rm(n,e,t=1){var r,a;const i=n.userData,s=((r=i.ensureAction)==null?void 0:r.call(i,e))||((a=i.actions)==null?void 0:a[e]);if(s){if(i.currentAction===s){s.setEffectiveTimeScale(t),s.setEffectiveWeight(1),s.isRunning()||s.play();return}i.currentAction&&i.currentAction.fadeOut(.18),s.reset(),s.setEffectiveTimeScale(t),s.setEffectiveWeight(1),s.fadeIn(.18),s.play(),i.currentAction=s}}function NT(n,e){var s;if(!n.visible)return;const t=n.userData;if(t.animAcc=(t.animAcc||0)+e,t.animAcc<1/28)return;const i=t.animAcc;t.animAcc=0,(s=t.mixer)==null||s.update(i),t.hips&&t.hipsHome&&(t.hips.position.x=t.hipsHome.x,t.hips.position.z=t.hipsHome.z),n.position.y=0}function FT(n,e="cheer"){let t;e==="cheer"?t=["cheering","clapping","rallying"]:e==="boo"?t=["arguing","arguing"]:t=["arguing","clapping"],n.children.forEach((i,s)=>{const r=t[s%t.length],a=1.15+Math.random()*.25;Rm(i,r,a),i.userData.currentAction&&(i.userData.currentAction.time=s%4*.08)})}function OT(n){n.children.forEach(e=>{const t=e.userData.homeClip||"clapping";Rm(e,t,e.userData.idleScale||1)})}async function BT(n=10){const e=new oi;e.name="crowd";const t=[4871528,2963272,7438486,5917290,4020827,7032655,4545124,5596791],i=["clapping","arguing","cheering","idle","clapping","rallying","arguing","cheering"],s=[{radius:4.4,n:Math.ceil(n*.55)},{radius:5.35,n:Math.floor(n*.45)}],r=[];for(const o of s)for(let l=0;l<o.n;l++){const c=l/o.n*Math.PI*2+o.radius*.05+(Math.random()-.5)*.08;r.push({a:c,r:o.radius+(Math.random()-.5)*.25})}return(await Promise.all(r.map(async({a:o,r:l},c)=>{const f=c%2===0,u=await LT({color:t[c%t.length],height:(f?1.72:1.58)+Math.random()*.28,timeScale:.9+Math.random()*.35,homeClip:i[c%i.length],gender:f?"male":"female"});return u.position.set(Math.cos(o)*l,0,Math.sin(o)*l),u.lookAt(0,1,0),u.userData.bobPhase=Math.random()*Math.PI*2,u}))).forEach(o=>e.add(o)),e}async function kT(n){const e=window.matchMedia("(max-width: 900px), (pointer: coarse)").matches,t=new $E({canvas:n,antialias:!e,alpha:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.25:1.5)),t.setSize(n.clientWidth,n.clientHeight,!1),t.shadowMap.enabled=!e;const i=new Rv;i.fog=new Fu(725536,14,32),i.background=new Ye(725536);const s=new hn(38,n.clientWidth/n.clientHeight,.1,100);s.position.set(0,3.85,10.2),s.lookAt(0,.95,-.4),i.add(new Px(12109823,1709344,1.15));const r=new po(16777215,1.35);r.position.set(4,8,5),r.castShadow=!e,e||(r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=1,r.shadow.camera.far=24),i.add(r);const a=new po(5032432,.55);a.position.set(-6,3,-4),i.add(a);const o=new po(16196997,.45);o.position.set(6,3,-4),i.add(o);const l=new Ht(new Io(11,e?24:32),new eu({color:1844280}));l.rotation.x=-Math.PI/2,l.receiveShadow=!e,i.add(l);const c=new Ht(new Io(2.35,e?32:48),new eu({color:2371652}));c.rotation.x=-Math.PI/2,c.position.y=.005,c.receiveShadow=!e,i.add(c);const f=new Ht(new ar(2.25,2.55,e?32:48),new Zi({color:16765286,transparent:!0,opacity:.75}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);const u=new Ht(new ar(.9,1,32),new Zi({color:5032432,transparent:!0,opacity:.35}));u.rotation.x=-Math.PI/2,u.position.y=.013,i.add(u);const h=new Ht(new pa(.06,4.5),new Zi({color:16777215,transparent:!0,opacity:.2}));h.rotation.x=-Math.PI/2,h.position.y=.014,i.add(h);const d=new Ht(new ar(.55,.78,24),new Zi({color:5032432,transparent:!0,opacity:0,side:Nn}));d.rotation.x=-Math.PI/2,d.position.y=.03,i.add(d);let m=null,v=0;const g=new nm(16777215,42,20,.45,.4,1);g.position.set(0,9,2),i.add(g),i.add(g.target);let p=null,S=null,M=new oi;i.add(M);const x=40,w=new Yt,A=new Float32Array(x*3),C=[];for(let T=0;T<x;T++)A[T*3+1]=-10,C.push(new B);w.setAttribute("position",new Gn(A,3));const y=new Xp({color:8449433,size:.11,transparent:!0,opacity:0,depthWrite:!1}),R=new Vv(w,y);i.add(R);let U=0,I=0,z=0,Z=null,re="idle",W=0,q=99;const G=new B(0,1.1,0),Q=2.6,ce=3.4,Me=1.25,ve=1.35;let xe=null,Ze=!1;const ct=new Zx;let Je=!0;const ne=-1.85,ge=1.85;function he(){const T=n.clientWidth,de=n.clientHeight;!T||!de||(s.aspect=T/de,s.updateProjectionMatrix(),t.setSize(T,de,!1))}he(),window.addEventListener("resize",he);try{const T=await Promise.all([ld({color:5032432,name:"player",gender:"male"}),ld({color:16196997,name:"rival",gender:"female"}),BT(e?8:10)]);p=T[0],S=T[1],i.remove(M),M=T[2],p.position.set(ne,0,.35),S.position.set(ge,0,.35),i.add(p),i.add(S),i.add(M),Ze=!0}catch(T){throw console.error("[aura] models",T),T}function He(T){}function $e(T="cheer"){Ze&&(FT(M,T),xe&&clearTimeout(xe),xe=setTimeout(()=>{Je&&(OT(M),xe=null)},2500))}function Fe(T=null){if(m=T,!T||!p||!S){d.material.opacity=0;return}const de=T==="player"?p:S;d.position.x=de.position.x,d.position.z=de.position.z,d.material.color.setHex(T==="player"?5032432:16196997),d.material.opacity=.9,v=0}function P(T="idle"){const de=T||"idle";de!==re&&(re=de,W=0,q=0)}function D(T,de,me){const E=Math.max(0,Math.min(1,(me-T)/(de-T)));return E*E*(3-2*E)}function $(){$e("boo")}function ie(T,de,me=1,E=1,_="side"){if(!p||!S)return;const N=T==="player"?p:S,V=T==="player"?S:p;ms(V,"idle",1),V.position.x=T==="player"?ge:ne,V.position.y=0,Fe(T),ms(N,de,me),I=1,z=.1,P(_);const J=T==="player"?ne:ge;Z={who:T,t:0,dur:E>1?2.4:2.2,hits:E,homeX:J,moveId:de,intensity:me,dance:!0}}function L(T,de){if(!p||!S)return;const me=T==="player"?p:S,E=de<0;y.color.setHex(E?16739179:8449433),y.opacity=.95,U=.65;const _=me.position.clone();_.y=1.45;const N=R.geometry.attributes.position;for(let V=0;V<x;V++)N.setXYZ(V,_.x,_.y,_.z),C[V].set((Math.random()-.5)*2,Math.random()*1.5+.2,(Math.random()-.5)*2).normalize().multiplyScalar(2.2+Math.random()*3);N.needsUpdate=!0,me.userData.aura.material.opacity=E?.08:.4,me.userData.aura.scale.setScalar(E?.75:1.4),z=E?.22:.1,I=1}function F(T,de){L(T,de?10:-10)}function se(){!p||!S||(ms(p,"idle",1),ms(S,"idle",1),Z=null,p.position.x=ne,S.position.x=ge,p.position.y=0,S.position.y=0,P("idle"),Fe(null))}function le(){!p||!S||(p.position.set(ne,0,.35),S.position.set(ge,0,.35),p.userData.facing=Math.PI/2,S.userData.facing=-Math.PI/2,se())}function ue(T){const de=T==="player"?p:S,me=new B(de.position.x,2.25,de.position.z);me.project(s);const E=n.getBoundingClientRect();return{x:(me.x+1)/2*E.width,y:(-me.y+1)/2*E.height}}let te=0;function be(){if(!Je)return;const T=Math.min(ct.getDelta(),.05),de=ct.elapsedTime;if(W+=T,Ze&&p&&S){if(Z){Z.t+=T;const X=Z.who==="player"?p:S,oe=Math.min(1,Z.t/Z.dur);Z.hopX=Z.homeX+Math.sin(oe*Math.PI*2)*.08*(Z.who==="player"?1:-1),oe>=.45&&Z.hits>1&&!Z.secondPose&&(Z.secondPose=!0,ms(X,Z.moveId,Z.intensity*1.2),I=1),oe>=1&&(X.position.x=Z.homeX,X.position.y=0,ms(X,"idle",1),Fe(null),Z=null)}if([p,S].forEach(X=>{const oe=X.userData.aura.scale.x;X.userData.aura.scale.setScalar(Pt.lerp(oe,1,.08))}),cd(p,T,de),cd(S,T,de),Z){const X=Z.who==="player"?p:S;X.position.x=Z.hopX,X.position.y=0,d.position.x=X.position.x,d.position.z=X.position.z}if(m){v+=T;const X=.72+Math.sin(v*8)*.22;d.material.opacity=X;const oe=1+Math.sin(v*6)*.08;d.scale.set(oe,oe,oe)}else d.material.opacity>0&&(d.material.opacity=Math.max(0,d.material.opacity-T*2));M.children.forEach(X=>{NT(X,T)})}if(U>0){U-=T,y.opacity=Math.max(0,U*1.3);const X=R.geometry.attributes.position;for(let oe=0;oe<x;oe++)X.setX(oe,X.getX(oe)+C[oe].x*T),X.setY(oe,X.getY(oe)+C[oe].y*T),X.setZ(oe,X.getZ(oe)+C[oe].z*T),C[oe].y-=4*T;X.needsUpdate=!0}I>0&&(I=Math.max(0,I-T*2),g.intensity=40+I*45),z>0&&(z=Math.max(0,z-T*1.8));const me=new B,E=new B(0,1.1,0),_=m==="player"&&p?p.position:m==="rival"&&S?S.position:null;if(re==="close"){const X=W*.35,oe=_?_.x*.45:0;me.set(oe+Math.sin(X)*1.4,2.35,5.6+Math.cos(X)*.5),E.set(oe,1.4,0)}else if(re==="side"){const X=W*.28,oe=_&&_.x>0?1:-1;me.set(oe*(-3.4+Math.sin(X)*.4),2.85,7),E.set(_?_.x*.3:.1,1.2,-.1)}else if(re==="low"){const X=W*.3;me.set(Math.sin(X)*1.2,1.55,6.8),E.set(_?_.x*.35:0,1.45,0)}else if(re==="spin"){const X=W*.7;me.set(Math.sin(X)*5.5,3,Math.cos(X)*5.5),E.set(0,1.15,0)}else{const X=[{x:0,y:3.4,z:9.2,lx:0,ly:1.05,lz:-.2},{x:-4.2,y:2.9,z:7.4,lx:.3,ly:1.15,lz:0},{x:4,y:3.1,z:7.6,lx:-.3,ly:1.1,lz:0},{x:.2,y:2.2,z:7,lx:0,ly:1.35,lz:-.15},{x:-2.2,y:4,z:8.4,lx:0,ly:.9,lz:-.3},{x:2.6,y:2.6,z:8.8,lx:-.2,ly:1.2,lz:-.1}],oe=5.8,Ie=2,Ee=de/oe,Se=Math.floor(Ee)%X.length,We=(Se+1)%X.length,qe=Ee-Math.floor(Ee),je=1-Ie/oe,O=qe>je?D(0,1,(qe-je)/(1-je)):0,ye=X[Se],ae=X[We],Te=de*.22,we=Math.sin(Te)*.35,fe=Math.sin(Te*.7)*.12,Be=Math.cos(Te)*.25;me.set(Pt.lerp(ye.x,ae.x,O)+we,Pt.lerp(ye.y,ae.y,O)+fe,Pt.lerp(ye.z,ae.z,O)+Be),E.set(Pt.lerp(ye.lx,ae.lx,O),Pt.lerp(ye.ly,ae.ly,O),Pt.lerp(ye.lz,ae.lz,O))}q+=T;const V=q<ve?1-q/ve:0,J=Pt.lerp(Q,Me,V),pe=Pt.lerp(ce,ce*.55,V),_e=1-Math.exp(-J*T),ee=1-Math.exp(-pe*T);s.position.lerp(me,_e),G.lerp(E,ee),s.position.x+=(Math.random()-.5)*z,s.position.y+=(Math.random()-.5)*z*.5,s.lookAt(G),++te%3===0&&UT(M,s,G),t.render(i,s),requestAnimationFrame(be)}return he(),requestAnimationFrame(be),{setCrowd:He,reactCrowd:$e,setAttacker:Fe,setInput(){},setCanMove(){},setAttacking(){},dashTowardRival(){},centerOnFight(){},releaseFocus(){},triggerMove:ie,reactFighter:$,setCameraMode:P,showAuraBurst:L,pulse:F,resetPoses:se,resetPositions:le,getDistance:()=>3.7,projectToScreen:ue,resize:he,dispose(){Je=!1,xe&&clearTimeout(xe),window.removeEventListener("resize",he),t.dispose()}}}const Cn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},zT={class:"wrap"},VT={key:0,class:"err"},GT={__name:"AuraScene",props:{crowd:{type:Number,default:50},fx:{type:Object,default:null},canMove:{type:Boolean,default:!1},input:{type:Object,default:()=>({x:0,z:0})}},setup(n,{expose:e}){const t=n,i=dt(null),s=dt("");let r=null;return es(async()=>{try{r=await kT(i.value),r.setCrowd(t.crowd/100),r.setCanMove(t.canMove)}catch(a){console.error("[aura] scene failed",a),s.value=(a==null?void 0:a.message)||"Error cargando modelos 3D"}}),ts(()=>{r==null||r.dispose(),r=null}),Sn(()=>t.crowd,a=>r==null?void 0:r.setCrowd(a/100)),Sn(()=>t.canMove,a=>r==null?void 0:r.setCanMove(a)),Sn(()=>t.input,a=>r==null?void 0:r.setInput(a),{deep:!0}),Sn(()=>t.fx,a=>{var o,l,c,f,u;!r||!a||(a.type==="prepare"&&(r.setAttacking(!0),r.dashTowardRival(),r.centerOnFight(!0)),a.type==="move"&&(r.setAttacking(!0),(o=r.setAttacker)==null||o.call(r,a.who),r.triggerMove(a.who,a.moveId,a.intensity??1,a.hits??1,a.camera||"side")),a.type==="attacker"&&((l=r.setAttacker)==null||l.call(r,a.who||null)),a.type==="camera"&&((c=r.setCameraMode)==null||c.call(r,a.mode||"idle")),a.type==="react"&&((f=r.reactFighter)==null||f.call(r,a.who)),a.type==="crowd"&&((u=r.reactCrowd)==null||u.call(r,a.kind||"cheer")),a.type==="shame"&&r.showAuraBurst(a.who,-10),a.type==="aura"&&r.showAuraBurst(a.who,a.amount),a.type==="pulse"&&r.pulse(a.who,a.good),a.type==="reset"&&(r.resetPoses(),r.setAttacking(!1)),a.type==="resetAll"&&(r.resetPoses(),r.resetPositions(),r.setAttacking(!1)))}),e({getDistance:()=>{var a;return((a=r==null?void 0:r.getDistance)==null?void 0:a.call(r))??3},projectToScreen:a=>{var o;return((o=r==null?void 0:r.projectToScreen)==null?void 0:o.call(r,a))??{x:0,y:0}}}),(a,o)=>(Pe(),Ne("div",zT,[k("canvas",{ref_key:"canvasRef",ref:i,class:"scene"},null,512),s.value?(Pe(),Ne("p",VT,Le(s.value),1)):gt("",!0)]))}},HT=Cn(GT,[["__scopeId","data-v-d647e9ef"]]),WT={aura:{short:"AURA",tip:"Farmea aura"},drain:{short:"ROBO",tip:"Roba aura al rival"},shame:{short:"VERGÜENZA",tip:"Sube cringe rival"},safe:{short:"SAFE",tip:"Fallo menos doloroso"},gamble:{short:"RIESGO",tip:"Alto riesgo / recompensa"},guard:{short:"BLOQUEO",tip:"Gana armadura"},armor:{short:"TANQUE",tip:"Defensa + aura"}},qu=6,XT=["aura-walk","mewing","aura-guard"],gn=[{id:"aura-walk",name:"Step Hip Hop",tag:"baile",effect:"aura",power:32,risk:.12,desc:"Flow estable. Farmeo fuerte de AURA.",color:"#4cc9f0",bar:{zone:.5,width:.15,speed:1},camera:"side",anim:"step"},{id:"mewing",name:"Mewing",tag:"pose",effect:"safe",power:26,risk:.06,desc:"Pose fría. Si fallas, casi no te da cringe.",color:"#80ed99",bar:{zone:.55,width:.2,speed:.8},camera:"close",anim:"wave",animSpeed:.5},{id:"six-seven",name:"Wave Hip Hop",tag:"baile",effect:"shame",power:30,risk:.16,desc:"Ritmo viral. Mete mucho CRINGE al rival si aciertas.",color:"#ffd166",bar:{zone:.42,width:.13,speed:1.2},camera:"low",anim:"wave",animSpeed:1.25},{id:"sigma-stare",name:"Sigma Stare",tag:"pose",effect:"shame",power:28,risk:.1,desc:"Mirada asesina. Empuja CRINGE al rival.",color:"#c77dff",bar:{zone:.6,width:.14,speed:.9},camera:"close",anim:"wave",animSpeed:.4},{id:"boat-kid",name:"Chicken Dance",tag:"baile",effect:"drain",power:34,risk:.18,desc:"Clásico tóxico: te sube AURA y le baja al rival.",color:"#f72585",bar:{zone:.48,width:.12,speed:1.15},camera:"spin",anim:"chicken",animSpeed:1.1},{id:"no-look",name:"No Look Flex",tag:"flex",effect:"gamble",power:38,risk:.32,desc:"All-in. ICÓNICO = jackpot. Fallo = cringe brutal.",color:"#ff9f1c",bar:{zone:.68,width:.09,speed:1.5},camera:"side",anim:"wave",animSpeed:1.05},{id:"aura-guard",name:"Aura Guard",tag:"defensa",effect:"guard",power:22,risk:.08,desc:"Bloqueo de aura. Ganas armadura para el siguiente hit.",color:"#56cfe1",bar:{zone:.52,width:.18,speed:.85},camera:"close",anim:"wave",animSpeed:.55},{id:"tank-pose",name:"Tank Pose",tag:"defensa",effect:"armor",power:24,risk:.1,desc:"Pose tanque. Farmea y reduces el daño del rival.",color:"#48bfe3",bar:{zone:.58,width:.16,speed:.9},camera:"side",anim:"wave",animSpeed:.45}],ei=[{name:"El Plaza Kid",style:"meme",color:16196997,difficulty:.28,hp:90,prefers:["boat-kid","six-seven"],zone:"Plaza",theme:"#4cc9f0"},{name:"Sigma del Parque",style:"pose",color:13073919,difficulty:.4,hp:100,prefers:["sigma-stare","mewing"],zone:"Parque",theme:"#80ed99"},{name:"Streamer Local",style:"flex",color:16752412,difficulty:.52,hp:110,prefers:["no-look","aura-walk"],zone:"Studio",theme:"#ff9f1c"},{name:"TikTok Boss",style:"dance",color:5032432,difficulty:.64,hp:120,prefers:["six-seven","boat-kid","aura-walk"],zone:"Trend Tower",theme:"#c77dff"},{name:"Rey del Fame",style:"flex",color:16765286,difficulty:.78,hp:140,prefers:["no-look","boat-kid","sigma-stare"],zone:"Fame Peak",theme:"#ffd166"}],ca=[{id:"pwr-all",name:"Más Perrón",desc:"+4 poder a todos los bailes",kind:"offense",apply:n=>{Object.keys(n.moveBonus).forEach(e=>{n.moveBonus[e]+=4})}},{id:"pwr-best",name:"Main Baile",desc:"+8 poder a tu baile más fuerte",kind:"offense",apply:n=>{let e=gn[0].id,t=0;gn.forEach(i=>{const s=i.power+(n.moveBonus[i.id]||0);s>t&&(t=s,e=i.id)}),n.moveBonus[e]=(n.moveBonus[e]||0)+8}},{id:"hp",name:"Aura Headstart",desc:"Empiezas la pelea con +12 AURA",kind:"offense",apply:n=>{n.startAura=(n.startAura||0)+12,n.healAfter=!0}},{id:"crit",name:"Iconic Boost",desc:"Timing ICÓNICO llena +20% AURA",kind:"offense",apply:n=>{n.iconicBonus+=.2}},{id:"shield",name:"No Cringe",desc:"Los misses llenan mucho menos CRINGE",kind:"defense",apply:n=>{n.noSelfCringe=!0}},{id:"drain-up",name:"Ladrón de Aura",desc:"Habilidades ROBO quitan +25% aura rival",kind:"offense",apply:n=>{n.drainBonus=(n.drainBonus||0)+.25}},{id:"rhythm-up",name:"Rhythm Up",desc:"ICÓNICO da +10% AURA extra",kind:"offense",apply:n=>{n.iconicBonus=(n.iconicBonus||0)+.1}},{id:"armor-passive",name:"Aura Armor",desc:"Pasiva: −15% daño de aura del rival",kind:"defense",apply:n=>{n.armor=Math.min(.45,(n.armor||0)+.15)}},{id:"thorns",name:"Cringe Thorns",desc:"Pasiva: si te golpean bien, el rival gana CRINGE",kind:"defense",apply:n=>{n.thorns=(n.thorns||0)+6}},{id:"aura-shield",name:"Bubble Shield",desc:"Pasiva: escudo que absorbe 12 de daño de aura",kind:"defense",apply:n=>{n.auraShield=(n.auraShield||0)+12}},{id:"cringe-resist",name:"Thick Skin",desc:"Pasiva: −25% CRINGE que te ganas tú",kind:"defense",apply:n=>{n.cringeResist=Math.min(.55,(n.cringeResist||0)+.25)}},{id:"guard-master",name:"Guard Master",desc:"Pasiva: BLOQUEO / TANQUE dan +35% armadura",kind:"defense",apply:n=>{n.guardBoost=(n.guardBoost||0)+.35}},{id:"second-wind",name:"Second Wind",desc:"Pasiva: la 1ª vez que bajes de 30 AURA, recuperas 15",kind:"defense",apply:n=>{n.secondWind=!0}}],$T={class:"hud"},qT={class:"top-block"},YT={class:"top"},KT={class:"brand"},ZT={class:"eyebrow"},JT={class:"score"},jT={key:0},QT={key:1},eA={key:2},tA={key:3},nA={key:4},iA={class:"fighters"},sA={class:"meter aura"},rA={class:"meta"},aA={class:"bar"},oA={class:"meter cringe"},lA={class:"meta"},cA={class:"bar"},uA={class:"name"},fA={class:"meter aura"},hA={class:"meta"},dA={class:"bar"},pA={class:"meter cringe"},mA={class:"meta"},gA={class:"bar"},_A={class:"legend"},vA={class:"message"},xA={key:1,class:"result"},yA={key:0},MA={key:1,class:"up"},SA={key:2,class:"dmg"},bA={key:3,class:"dmg"},EA={key:4,class:"up"},TA={key:0,class:"attack-dock"},AA={class:"moves"},wA=["disabled","onClick"],RA={class:"move-top"},CA={class:"eff"},PA={key:1,class:"empty-label"},IA={class:"dock-footer"},LA={class:"hint"},DA={__name:"BattleHud",props:{phase:String,turn:Number,playerAura:Number,playerCringe:Number,rivalAura:Number,rivalCringe:Number,auraMax:{type:Number,default:100},cringeMax:{type:Number,default:100},message:String,rivalName:String,lastResult:Object,moveIndex:{type:Number,default:0},moveSlots:{type:Array,default:()=>[]},ownedCount:{type:Number,default:3},maxSlots:{type:Number,default:6},outcome:String,floor:Number,maxFloors:Number},emits:["select-move","attack","continue","restart"],setup(n,{emit:e}){const t=n,i=e,s=It(()=>t.playerAura/t.auraMax*100),r=It(()=>t.playerCringe/t.cringeMax*100),a=It(()=>t.rivalAura/t.auraMax*100),o=It(()=>t.rivalCringe/t.cringeMax*100);function l(f){t.moveSlots[f]&&(t.moveIndex===f?i("attack"):i("select-move",f))}const c=It(()=>t.phase==="pick"||t.phase==="timing"?{text:"TU TURNO",side:"you"}:t.phase==="playerShow"?{text:"TÚ BAILAS",side:"you"}:t.phase==="rivalShow"?{text:"TURNO RIVAL",side:"rival"}:t.outcome==="win"?{text:"VICTORIA",side:"you"}:t.outcome==="lose"?{text:"DERROTA",side:"rival"}:null);return(f,u)=>{var h,d,m,v,g;return Pe(),Ne("div",$T,[k("div",qT,[k("header",YT,[k("div",KT,[k("p",ZT,"Pelea "+Le(n.floor)+"/"+Le(n.maxFloors)+" · Turno "+Le(n.turn),1),u[1]||(u[1]=k("h1",null,"Aura Battle",-1))]),k("div",JT,[n.phase==="pick"?(Pe(),Ne("span",jT,"Bailes "+Le(n.ownedCount)+"/"+Le(n.maxSlots),1)):n.phase==="timing"?(Pe(),Ne("span",QT,"Ritmo")):n.outcome==="win"?(Pe(),Ne("span",eA,"Victoria")):n.outcome==="lose"?(Pe(),Ne("span",tA,"Derrota")):(Pe(),Ne("span",nA,"Combate"))])]),c.value?(Pe(),Ne("div",{key:0,class:pn(["turn-banner",c.value.side])},Le(c.value.text),3)):gt("",!0),k("div",iA,[k("div",{class:pn(["fighter you",{active:((h=c.value)==null?void 0:h.side)==="you"}])},[u[4]||(u[4]=k("p",{class:"name"},"Tú",-1)),k("div",sA,[k("div",rA,[u[2]||(u[2]=k("strong",null,"AURA",-1)),k("span",null,Le(Math.round(n.playerAura)),1)]),k("div",aA,[k("i",{style:Vt({width:s.value+"%"})},null,4)])]),k("div",oA,[k("div",lA,[u[3]||(u[3]=k("strong",null,"CRINGE",-1)),k("span",null,Le(Math.round(n.playerCringe)),1)]),k("div",cA,[k("i",{style:Vt({width:r.value+"%"})},null,4)])])],2),u[7]||(u[7]=k("div",{class:"vs"},"VS",-1)),k("div",{class:pn(["fighter rival",{active:((d=c.value)==null?void 0:d.side)==="rival"}])},[k("p",uA,Le(n.rivalName),1),k("div",fA,[k("div",hA,[u[5]||(u[5]=k("strong",null,"AURA",-1)),k("span",null,Le(Math.round(n.rivalAura)),1)]),k("div",dA,[k("i",{style:Vt({width:a.value+"%"})},null,4)])]),k("div",pA,[k("div",mA,[u[6]||(u[6]=k("strong",null,"CRINGE",-1)),k("span",null,Le(Math.round(n.rivalCringe)),1)]),k("div",gA,[k("i",{style:Vt({width:o.value+"%"})},null,4)])])],2)]),k("p",_A,[u[8]||(u[8]=Nt(" El círculo dorado es la ",-1)),u[9]||(u[9]=k("strong",null,"plaza",-1)),Nt(". Gana bailes tras cada pelea (máx "+Le(n.maxSlots)+"). ",1)]),k("p",vA,Le(n.message),1),n.lastResult&&(n.phase==="playerShow"||n.phase==="rivalShow")?(Pe(),Ne("div",xA,[k("span",{style:Vt({color:(m=n.lastResult.tier)==null?void 0:m.color})},Le((v=n.lastResult.tier)==null?void 0:v.label),5),(g=n.lastResult.move)!=null&&g.name?(Pe(),Ne("span",yA,Le(n.lastResult.move.name),1)):gt("",!0),n.lastResult.auraGain>0?(Pe(),Ne("span",MA,"+"+Le(n.lastResult.auraGain)+" aura",1)):gt("",!0),n.lastResult.auraLoss>0?(Pe(),Ne("span",SA,"-"+Le(n.lastResult.auraLoss)+" aura",1)):gt("",!0),n.lastResult.cringeGain>0?(Pe(),Ne("span",bA,"+"+Le(n.lastResult.cringeGain)+" cringe",1)):gt("",!0),n.lastResult.rivalCringeGain>0?(Pe(),Ne("span",EA,"+"+Le(n.lastResult.rivalCringeGain)+" cringe rival",1)):gt("",!0)])):gt("",!0)]),n.phase==="pick"?(Pe(),Ne("div",TA,[k("div",AA,[(Pe(!0),Ne(Gt,null,Pi(n.moveSlots,(p,S)=>{var M;return Pe(),Ne("button",{key:(p==null?void 0:p.id)||`empty-${S}`,type:"button",class:pn(["move",{on:!!p&&S===n.moveIndex,empty:!p}]),style:Vt(p?{"--c":p.color}:void 0),disabled:!p,onClick:x=>l(S)},[p?(Pe(),Ne(Gt,{key:0},[k("div",RA,[k("strong",null,Le(p.name),1),k("kbd",null,Le(S+1),1)]),k("small",null,[k("span",CA,Le(((M=Br(WT)[p.effect])==null?void 0:M.short)||p.tag),1),Nt(" · poder "+Le(p.power),1)])],64)):(Pe(),Ne("div",PA,[u[10]||(u[10]=k("span",null,"Vacío",-1)),k("small",null,"slot "+Le(S+1),1)]))],14,wA)}),128))]),k("div",IA,[k("p",LA,Le(n.ownedCount)+"/"+Le(n.maxSlots)+" · clic elige · doble clic usa",1),k("button",{type:"button",class:"attack-btn",onClick:u[0]||(u[0]=p=>f.$emit("attack"))},[...u[11]||(u[11]=[Nt(" USAR BAILE ",-1),k("kbd",null,"SPACE",-1)])])])])):gt("",!0)])}}},UA=Cn(DA,[["__scopeId","data-v-30c41ca4"]]),jl={fight:{label:"Pelea",icon:"⚔️",color:"#4cc9f0"},elite:{label:"Elite",icon:"💀",color:"#f72585"},boss:{label:"BOSS",icon:"👑",color:"#ffd166"},shop:{label:"Tienda",icon:"🛒",color:"#80ed99"},reward:{label:"Cofre",icon:"🎁",color:"#c77dff"},rest:{label:"Lobby",icon:"🏠",color:"#56cfe1"}};function NA(n){return n[Math.floor(Math.random()*n.length)]}function no(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function FA(){const n=[["fight"],no(["fight","shop","reward"]).slice(0,2),no(["fight","elite","rest","shop"]).slice(0,3),no(["reward","fight","shop","rest"]).slice(0,3),no(["elite","fight","reward"]).slice(0,2),["boss"]],e={},t=[];n.forEach((s,r)=>{const a=[];s.forEach((o,l)=>{const c=`${r}-${l}`,f=Math.min(r,ei.length-1),u=o==="boss"?ei[ei.length-1]:o==="elite"?ei[Math.min(f+1,ei.length-1)]:o==="fight"?ei[f]:null,h=10+r/Math.max(1,n.length-1)*80,d=s.length===1?50:22+l*(56/Math.max(1,s.length-1)),m=s.length===1?50:d;e[c]={id:c,layer:r,row:l,type:o,next:[],rivalName:(u==null?void 0:u.name)||null,rivalIndex:u?ei.indexOf(u):-1,zone:(u==null?void 0:u.zone)||jl[o].label,theme:(u==null?void 0:u.theme)||jl[o].color,x:h,y:m,...jl[o]},a.push(c)}),t.push(a)});for(let s=0;s<t.length-1;s++){const r=t[s],a=t[s+1];r.forEach((o,l)=>{const c=new Set;c.add(a[Math.min(l,a.length-1)]),c.add(a[Math.floor(l/Math.max(1,r.length-1)*(a.length-1))]),a.length>1&&Math.random()>.35&&c.add(NA(a)),e[o].next=[...c]}),a.forEach(o=>{r.some(c=>e[c].next.includes(o))||e[r[Math.floor(Math.random()*r.length)]].next.push(o)})}const i=t[0][0];return{nodes:e,layers:t,startId:i,currentId:i,visited:[],available:[i]}}function fd(){const n={};gn.forEach(t=>{n[t.id]=0});const e=FA();return{floor:0,maxFloors:e.layers.length,fame:0,coins:50,maxHp:100,startAura:8,ownedMoves:[...XT],moveBonus:n,iconicBonus:0,noSelfCringe:!1,drainBonus:0,armor:0,thorns:0,auraShield:0,cringeResist:0,guardBoost:0,secondWind:!1,healAfter:!1,upgradesTaken:[],wonRun:!1,map:e}}function hs(n){var e,t;return((t=(e=n.map)==null?void 0:e.nodes)==null?void 0:t[n.map.currentId])||null}function hd(n){return!n||n.rivalIndex<0?ei[0]:ei[Math.min(n.rivalIndex,ei.length-1)]}function OA(n,e){return e.power+(n.moveBonus[e.id]||0)}function Cm(n){return(n.ownedMoves||[]).map(e=>gn.find(t=>t.id===e)).filter(Boolean)}function BA(n){const e=Cm(n),t=[];for(let i=0;i<qu;i++)t.push(e[i]||null);return t}function Pm(n){var e;return(((e=n.ownedMoves)==null?void 0:e.length)||0)<qu}function Im(n){const e=new Set(n.ownedMoves||[]);return gn.filter(t=>!e.has(t.id))}function Lm(n,e){return!Pm(n)||(n.ownedMoves||[]).includes(e)||!gn.some(t=>t.id===e)?n:{...n,ownedMoves:[...n.ownedMoves||[],e],moveBonus:{...n.moveBonus}}}function kA(n,e=3){var a;const t=[];if(Pm(n)){const o=[...Im(n)],l=Math.min(2,o.length,e);for(let c=0;c<l;c++){const f=Math.floor(Math.random()*o.length),u=o.splice(f,1)[0];if(!u)break;t.push({id:`move:${u.id}`,kind:"move",moveId:u.id,name:`Nuevo baile: ${u.name}`,desc:`${u.desc} · slot ${(((a=n.ownedMoves)==null?void 0:a.length)||0)+1}/${qu}`,color:u.color,price:0})}}const i=ca.filter(o=>o.kind==="defense"),s=ca.filter(o=>o.kind!=="defense");if(i.length&&t.length<e){const o=Math.floor(Math.random()*i.length),l=i.splice(o,1)[0];t.push({id:l.id,kind:"upgrade",name:l.name,desc:l.desc,color:"#56cfe1",price:0})}const r=[...i,...s];for(;t.length<e&&r.length;){const o=Math.floor(Math.random()*r.length),l=r.splice(o,1)[0];t.some(c=>c.id===l.id)||t.push({id:l.id,kind:"upgrade",name:l.name,desc:l.desc,color:l.kind==="defense"?"#56cfe1":"#ffd166",price:0})}return t}function zA(n){const e=[];return Im(n).forEach(t=>{e.push({id:`move:${t.id}`,kind:"move",moveId:t.id,name:t.name,desc:t.desc,color:t.color,price:Dm(t)})}),ca.filter(t=>!(n.upgradesTaken||[]).includes(t.id)).forEach(t=>{e.push({id:t.id,kind:"upgrade",name:t.name,desc:t.desc,color:t.kind==="defense"?"#56cfe1":"#ffd166",price:Um(t)})}),e.push({id:"coin-heal",kind:"heal",name:"Aura Snack",desc:"+12 AURA al empezar la próxima pelea",color:"#80ed99",price:12}),e}function VA(n){const e=[...n];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function GA(n,e=3){return VA(zA(n)).slice(0,e)}function HA(n){return{...n,shopStock:GA(n,3)}}function dd(n){return n.shopStock||[]}function Dm(n){return 20+Math.round(n.power*.35)}function Um(n){return n.kind==="defense"?18:22}function WA(n,e){const t=(n.shopStock||[]).find(s=>s.id===e);if(t)return t;if(e==="coin-heal")return{id:"coin-heal",kind:"heal",name:"Aura Snack",price:12};if(String(e).startsWith("move:")){const s=String(e).slice(5),r=gn.find(a=>a.id===s);return!r||(n.ownedMoves||[]).includes(s)?null:{id:e,kind:"move",moveId:s,name:r.name,price:Dm(r)}}const i=ca.find(s=>s.id===e);return!i||(n.upgradesTaken||[]).includes(i.id)?null:{id:i.id,kind:"upgrade",name:i.name,price:Um(i)}}function XA(n,e){const t=WA(n,e);if(!t||(n.coins||0)<t.price)return n;let i={...n,coins:n.coins-t.price,ownedMoves:[...n.ownedMoves||[]],moveBonus:{...n.moveBonus},upgradesTaken:[...n.upgradesTaken||[]],map:n.map};return t.kind==="heal"?(i.startAura=(i.startAura||0)+12,i.healAfter=!0,i.shopStock=(i.shopStock||[]).filter(s=>s.id!==e),i):(t.kind==="move"?i=Lm(i,t.moveId):t.kind==="upgrade"&&(i=Nm(i,e)),i.shopStock=(i.shopStock||[]).filter(s=>s.id!==e),i)}function $A(n){return{...n,coins:(n.coins||0)+8,startAura:Math.min(35,(n.startAura||0)+12),healAfter:!0,armor:Math.min(.45,(n.armor||0)+.04)}}function pd(n){if(!n)return 20;const e=n.layer||0;return n.type==="boss"?55+e*5:n.type==="elite"?22+e*6:n.type==="fight"?14+e*5:6+e*2}function qA(n,e){if(String(e).startsWith("move:")){const t=String(e).slice(5);return Lm(n,t)}return Nm(n,e)}function Nm(n,e){const t=ca.find(s=>s.id===e);if(!t)return n;const i={...n,ownedMoves:[...n.ownedMoves||[]],moveBonus:{...n.moveBonus},upgradesTaken:[...n.upgradesTaken||[],t.id]};return t.apply(i),i}function io(n,{coinsGain:e=0}={}){const t=n.map;if(!t)return n;const i=t.currentId,s=t.nodes[i],r=t.visited.includes(i)?t.visited:[...t.visited,i],a=(s==null?void 0:s.next)||[],o=a.length?[...a]:[];return{...n,coins:(n.coins||0)+e,fame:n.fame+((s==null?void 0:s.type)==="fight"||(s==null?void 0:s.type)==="elite"||(s==null?void 0:s.type)==="boss"?1:0),floor:Math.min(n.maxFloors-1,((s==null?void 0:s.layer)||0)+(a.length,0)),map:{...t,visited:r,available:o,currentId:i}}}function YA(n,e){var i;const t=n.map;return(i=t==null?void 0:t.available)!=null&&i.includes(e)?{...n,map:{...t,currentId:e}}:n}function KA(n){const e=n.map;return e!=null&&e.nodes?Object.values(e.nodes).map(t=>{let i="locked";return e.visited.includes(t.id)?i="done":(e.available.includes(t.id)||t.id===e.currentId&&!e.visited.includes(t.id))&&(i="current"),{...t,state:i,boss:t.type==="boss",index:t.id}}):[]}function ZA(n){const e=n.map;if(!(e!=null&&e.nodes))return[];const t=[];return Object.values(e.nodes).forEach(i=>{(i.next||[]).forEach(s=>{t.push({from:i.id,to:s})})}),t}const Lo="SOY EL MÁS PERRÓN",ru="PERDISTE";function Yu(n){return n>=.9?{id:"perfect",label:"ICÓNICO",mult:1.55,color:"#ffd166",crowd:"cheer"}:n>=.72?{id:"great",label:"ÉPICO",mult:1.2,color:"#80ed99",crowd:"cheer"}:n>=.48?{id:"ok",label:"OK",mult:.9,color:"#4cc9f0",crowd:"meh"}:n>=.28?{id:"weak",label:"DÉBIL",mult:.5,color:"#c77dff",crowd:"boo"}:{id:"miss",label:"CRINGE",mult:.15,color:"#ff6b6b",crowd:"boo"}}function JA(n,e,t,i){const s=e/38,r=(i==null?void 0:i.effect)||"aura";let a=0,o=0,l=0,c=0,f=0;switch(n){case"perfect":{a=Math.round(14*s),t.iconicBonus&&(a=Math.round(a*(1+t.iconicBonus))),l=Math.round(6*s);break}case"great":a=Math.round(10*s),l=Math.round(4*s);break;case"ok":a=Math.round(6*s),o=Math.round(3*s),l=1;break;case"weak":a=Math.round(2*s),o=Math.round(8*s);break;default:a=0,o=t.noSelfCringe?Math.round(4*s):Math.round(12*s)}if(a=Math.min(18,a),r==="safe"&&o>0&&(o=Math.max(1,Math.round(o*.35))),r==="shame"&&l>0&&(l=Math.round(l*1.55)),r==="shame"&&n==="perfect"&&(l+=Math.round(8*s)),r==="drain"&&a>0){const u=.4+(t.drainBonus||0);c=Math.round(a*u)}return r==="gamble"&&(n==="perfect"||n==="great"?(a=Math.round(a*1.35),l=Math.round(l*1.15)):(n==="miss"||n==="weak")&&(o=Math.round(o*1.45))),r==="guard"&&n!=="miss"&&(f=(n==="perfect"?.38:n==="great"?.28:.18)*(1+(t.guardBoost||0)),a=Math.round(a*.8)),r==="armor"&&n!=="miss"&&(f=(n==="perfect"?.26:n==="great"?.18:.12)*(1+(t.guardBoost||0))),t.cringeResist&&o>0&&(o=Math.max(0,Math.round(o*(1-t.cringeResist)))),{auraGain:a,cringeGain:o,rivalCringe:l,rivalAuraDrain:c,armorGain:f}}function jA(n,e){const t=.55+e*.85;switch(n){case"perfect":return{playerAuraLoss:Math.round(14*t),rivalAuraGain:Math.round(16*t),rivalCringeGain:0};case"great":return{playerAuraLoss:Math.round(10*t),rivalAuraGain:Math.round(12*t),rivalCringeGain:0};case"ok":return{playerAuraLoss:Math.round(5*t),rivalAuraGain:Math.round(7*t),rivalCringeGain:Math.round(3*t)};case"weak":return{playerAuraLoss:1,rivalAuraGain:2,rivalCringeGain:Math.round(10*t)};default:return{playerAuraLoss:0,rivalAuraGain:0,rivalCringeGain:Math.round(16*t)}}}function QA(n){const e=n.log||[];let t=0,i=0,s=0,r="weak";const a={miss:0,weak:1,ok:2,great:3,perfect:4},o=new Set,l=[];for(const c of e)c.side==="player"?(t+=c.auraGain||0,i+=c.cringeGain||0,s+=c.rivalAuraDrain||0,c.move&&o.add(c.move),(a[c.tier]??0)>(a[r]??0)&&(r=c.tier),c.auraGain>0&&l.push(`T${c.turn}: ${c.move} +${c.auraGain} AURA`)):c.side==="rival"&&c.auraLoss>0&&l.push(`T${c.turn}: rival −${c.auraLoss} AURA`);return{turns:n.turn||1,auraGained:t,cringeTaken:i,rivalDrain:s,bestTier:r,movesUsed:o.size,highlights:l.slice(-5)}}function md(n,e){const t=e.maxHp||100;return{phase:"pick",turn:1,playerAura:Math.min(e.startAura||0,t),playerCringe:0,rivalAura:0,rivalCringe:0,auraMax:t,cringeMax:100,selectedMove:null,moveIndex:0,lastResult:null,outcome:null,pendingOutcome:null,pendingMessage:null,tempArmor:0,shieldLeft:e.auraShield||0,secondWindUsed:!1,message:`${n.name}: llena tu AURA a 100. CRINGE a 100 = pierdes.`,rival:n,log:[]}}function ew(n,e){const t=gn.find(i=>i.id===e);return!t||n.phase!=="pick"?n:{...n,phase:"timing",selectedMove:t,message:`Baila ${t.name} [${t.effect||"aura"}] — ${t.desc}`}}function tw(n){return n.playerCringe>=n.cringeMax?{outcome:"lose",message:ru}:n.rivalCringe>=n.cringeMax?{outcome:"win",message:Lo}:n.playerAura>=n.auraMax?{outcome:"win",message:Lo}:n.rivalAura>=n.auraMax?{outcome:"lose",message:ru}:null}function au(n){return n.pendingOutcome?{...n,phase:"matchEnd",outcome:n.pendingOutcome,message:n.pendingMessage||(n.pendingOutcome==="win"?Lo:ru),pendingOutcome:null,pendingMessage:null}:n}function Fm(n,e){const t=tw(n);return t?{...n,phase:e,outcome:null,pendingOutcome:t.outcome,pendingMessage:t.message}:{...n,phase:e,outcome:null}}function nw(n,e,t){if(n.phase!=="timing"||!n.selectedMove)return n;const i=n.selectedMove,s=Yu(e),r=OA(t,i),a=JA(s.id,r,t,i),o=a.auraGain,l=a.cringeGain,c=a.rivalCringe,f=a.rivalAuraDrain,u=a.armorGain||0,h=Math.min(.55,(n.tempArmor||0)+u),d=Ei(n.playerAura+o,0,n.auraMax),m=Ei(n.playerCringe+l,0,n.cringeMax),v=Ei(n.rivalCringe+c,0,n.cringeMax),g=Ei((n.rivalAura||0)-f,0,n.auraMax);let p;o>0?p=`${i.name}: +${o} AURA (${s.label})`:p=`${i.name}: +${l} CRINGE (${s.label})`,f>0&&(p+=` · −${f} aura rival`),u>0&&(p+=` · +${Math.round(u*100)}% armadura`);let S={...n,playerAura:d,playerCringe:m,rivalCringe:v,rivalAura:g,tempArmor:h,timingScore:e,lastResult:{side:"player",move:i,accuracy:e,tier:s,auraGain:o,cringeGain:l,rivalCringeGain:c,auraLoss:0,rivalAuraDrain:f,armorGain:u,hits:1,crowd:s.crowd},message:p,log:[...n.log,{turn:n.turn,side:"player",move:i.name,auraGain:o,cringeGain:l,rivalAuraDrain:f,armorGain:u,tier:s.id}]};return Fm(S,"playerShow")}function iw(n,e={}){if(n.pendingOutcome)return n;const t=n.rival.prefers||[];let i;if(t.length&&Math.random()<.65){const w=t[Math.floor(Math.random()*t.length)];i=gn.find(A=>A.id===w)||gn[Math.floor(Math.random()*gn.length)]}else i=gn[Math.floor(Math.random()*gn.length)];const s=.28+n.rival.difficulty*.48+Math.random()*.22,r=Ei(s,.12,.95),a=Yu(r);let o=jA(a.id,n.rival.difficulty),l=1;a.id==="perfect"&&Math.random()<.3&&(l=2,o={...o,playerAuraLoss:Math.round(o.playerAuraLoss*1.25),rivalAuraGain:Math.round(o.rivalAuraGain*1.25)});let c=o.playerAuraLoss;const f=Math.min(.55,(e.armor||0)+(n.tempArmor||0));c>0&&f>0&&(c=Math.round(c*(1-f)));let u=n.shieldLeft||0,h=0;c>0&&u>0&&(h=Math.min(u,c),c-=h,u-=h);let d=0;o.playerAuraLoss>0&&(e.thorns||0)>0&&(d=e.thorns);let m=Ei(n.playerAura-c,0,n.auraMax),v=n.secondWindUsed||!1,g=0;e.secondWind&&!v&&m<30&&n.playerAura>=30&&(g=15,m=Ei(m+g,0,n.auraMax),v=!0);const p=Ei(n.rivalAura+o.rivalAuraGain,0,n.auraMax),S=Ei(n.rivalCringe+o.rivalCringeGain+d,0,n.cringeMax);let M;o.playerAuraLoss>0?(M=`${n.rival.name} bien: -${c} AURA tuya`,h>0&&(M+=` (${h} bloqueado)`),f>0&&(M+=" · armadura"),d>0&&(M+=` · +${d} cringe rival`),g>0&&(M+=` · Second Wind +${g}`)):o.rivalCringeGain>0?M=`${n.rival.name} falló: +${o.rivalCringeGain} CRINGE rival`:M=`${n.rival.name} bailó ${i.name}`;let x={...n,playerAura:m,rivalAura:p,rivalCringe:S,tempArmor:0,shieldLeft:u,secondWindUsed:v,lastResult:{side:"rival",move:i,accuracy:r,tier:a,auraGain:o.rivalAuraGain,cringeGain:0,rivalCringeGain:o.rivalCringeGain+d,auraLoss:c,hits:l,crowd:a.crowd},message:M,log:[...n.log,{turn:n.turn,side:"rival",move:i.name,auraLoss:c,rivalAuraGain:o.rivalAuraGain,tier:a.id}]};return Fm(x,"rivalShow")}function sw(n){return n.pendingOutcome?au(n):{...n,phase:"pick",turn:n.turn+1,selectedMove:null,lastResult:null,message:`Turno ${n.turn+1}. Llena AURA a 100 · CRINGE lleno = pierdes`}}function Ei(n,e,t){return Math.max(e,Math.min(t,n))}const rw={class:"label"},aw={__name:"TimingBar",props:{active:Boolean,move:{type:Object,default:null}},emits:["hit"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=dt(0),a=dt(1),o=dt(!1);let l=0,c=0;const f=It(()=>{var w,A;return((A=(w=i.move)==null?void 0:w.bar)==null?void 0:A.zone)??.5}),u=It(()=>{var w,A;return((A=(w=i.move)==null?void 0:w.bar)==null?void 0:A.width)??.14}),h=It(()=>{var w,A;return((A=(w=i.move)==null?void 0:w.bar)==null?void 0:A.speed)??1.05}),d=It(()=>{var w;return((w=i.move)==null?void 0:w.color)??"#ffd166"}),m=It(()=>Math.max(.05,f.value-u.value/2)),v=It(()=>Math.min(.95,f.value+u.value/2)),g=It(()=>{const w=(m.value+v.value)/2,A=Math.max(.2,(v.value-m.value)/2+.25),C=Math.abs(r.value-w),y=Math.max(0,1-C/A);return Yu(y)});function p(w){if(!o.value)return;c||(c=w);const A=Math.min((w-c)/1e3,.05);c=w,r.value+=a.value*h.value*A,r.value>=1?(r.value=1,a.value=-1):r.value<=0&&(r.value=0,a.value=1),l=requestAnimationFrame(p)}function S(){r.value=.02,a.value=1,o.value=!0,c=0,cancelAnimationFrame(l),l=requestAnimationFrame(p)}function M(){o.value=!1,cancelAnimationFrame(l)}function x(){if(!o.value)return;M();const w=(m.value+v.value)/2,A=Math.max(.2,(v.value-m.value)/2+.25),C=Math.abs(r.value-w),y=Math.max(0,1-C/A);s("hit",y)}return Sn(()=>{var w;return(w=i.move)==null?void 0:w.id},()=>{o.value&&(r.value=.05,a.value=1)}),es(()=>{i.active&&S()}),ts(M),e({start:S,stop:M,lock:x}),(w,A)=>{var C;return Pe(),Ne("div",{class:"timing",style:Vt({"--accent":d.value})},[k("div",rw,[A[0]||(A[0]=Nt(" Ritmo de ",-1)),k("strong",null,Le(((C=n.move)==null?void 0:C.name)||"baile"),1),A[1]||(A[1]=k("span",{class:"spc"}," — SPACE",-1))]),A[3]||(A[3]=k("div",{class:"tiers"},[k("span",null,"CRINGE"),k("span",null,"DÉBIL"),k("span",null,"OK"),k("span",{class:"gold"},"ICÓNICO"),k("span",null,"OK"),k("span",null,"DÉBIL")],-1)),k("div",{class:"track",onClick:x},[k("div",{class:"sweet",style:Vt({left:m.value*100+"%",width:(v.value-m.value)*100+"%",background:`linear-gradient(180deg, ${d.value}, #fff3)`})},null,4),k("div",{class:"needle",style:Vt({left:r.value*100+"%"})},null,4)]),k("div",{class:"live",style:Vt({color:g.value.color})},Le(g.value.label)+" · bien = AURA · mal = CRINGE ",5),k("button",{class:"lock",type:"button",onClick:x},[...A[2]||(A[2]=[Nt("¡AHORA! ",-1),k("kbd",null,"SPACE",-1)])])],4)}}},ow=Cn(aw,[["__scopeId","data-v-497f067d"]]),lw={class:"menu"},cw={class:"card"},uw={class:"nav"},fw=["onMouseenter","onClick"],hw={key:0,class:"howto"},dw={__name:"MainMenu",emits:["start","howto"],setup(n,{emit:e}){const t=e,i=[{id:"start",label:"Entrar a Aura Place",hint:"Mapa con varios caminos"},{id:"howto",label:"Cómo se juega",hint:"Peleas, tienda y cofres"}],s=dt(0),r=dt(!1);function a(){if(i[s.value].id==="howto"){r.value=!r.value;return}t("start")}function o(c){s.value===c?a():s.value=c}function l(c){c.key==="ArrowUp"||c.key==="w"||c.key==="W"?(c.preventDefault(),s.value=(s.value-1+i.length)%i.length):c.key==="ArrowDown"||c.key==="s"||c.key==="S"?(c.preventDefault(),s.value=(s.value+1)%i.length):c.key===" "||c.key==="Enter"?(c.preventDefault(),a()):c.key==="Escape"&&r.value&&(r.value=!1)}return es(()=>window.addEventListener("keydown",l)),ts(()=>window.removeEventListener("keydown",l)),(c,f)=>(Pe(),Ne("div",lw,[f[6]||(f[6]=k("div",{class:"glow"},null,-1)),k("div",cw,[f[2]||(f[2]=k("p",{class:"eyebrow"},"Roblox Aura Place",-1)),f[3]||(f[3]=k("h1",{class:"display"},[Nt("AURA"),k("br"),Nt("BATTLE")],-1)),f[4]||(f[4]=k("p",{class:"tagline"},"Elige tu camino. Compra. Mejora. Domina la plaza.",-1)),k("nav",uw,[(Pe(),Ne(Gt,null,Pi(i,(u,h)=>k("button",{key:u.id,type:"button",class:pn(["nav-item",{on:s.value===h}]),onMouseenter:d=>s.value=h,onClick:d=>o(h)},[f[0]||(f[0]=k("span",{class:"cursor"},"▶",-1)),k("span",null,[k("strong",null,Le(u.label),1),k("small",null,Le(u.hint),1)])],42,fw)),64))]),f[5]||(f[5]=k("div",{class:"keys"},[k("div",{class:"desk"},[k("kbd",null,"clic"),Nt(" elegir · "),k("kbd",null,"doble clic"),Nt(" / "),k("kbd",null,"SPACE"),Nt(" entrar")]),k("div",{class:"mob"},"Toca para elegir · toca otra vez para entrar"),k("div",null,"Mapa multi-path · tienda · cofres · boss")],-1)),r.value?(Pe(),Ne("div",hw,[...f[1]||(f[1]=[k("h2",null,"Cómo se juega",-1),k("ol",null,[k("li",null,"Mapa Roblox: varios caminos (pelea, tienda, cofre, lobby)."),k("li",null,"Ganas 🪙 en peleas y compras mejoras/bailes en la tienda."),k("li",null,"Cofres dan recompensas gratis; el lobby te cura un poco."),k("li",null,"En pelea: clic elige baile · doble clic / SPACE lo usa."),k("li",null,"AURA llena = ganas. CRINGE lleno = pierdes. Llega al BOSS.")],-1),k("p",{class:"close-hint"},"ESC o SPACE para cerrar",-1)])])):gt("",!0)])]))}},pw=Cn(dw,[["__scopeId","data-v-ec291d82"]]),mw={class:"fx-layer"},gw={__name:"AuraFloats",props:{event:{type:Object,default:null}},setup(n){const e=n,t=dt([]);let i=0;return Sn(()=>e.event,s=>{if(!s)return;const r=++i;t.value.push({id:r,text:s.text,who:s.who,kind:s.kind,x:s.x,y:s.y}),setTimeout(()=>{t.value=t.value.filter(a=>a.id!==r)},1400)}),(s,r)=>(Pe(),Ne("div",mw,[(Pe(!0),Ne(Gt,null,Pi(t.value,a=>(Pe(),Ne("div",{key:a.id,class:pn(["float",[a.kind,a.who]]),style:Vt({left:a.x+"px",top:a.y+"px"})},Le(a.text),7))),128))]))}},_w=Cn(gw,[["__scopeId","data-v-706dbf0c"]]),vw={class:"crowd"},xw={__name:"CrowdReact",props:{event:{type:Object,default:null}},setup(n){const e=n,t=dt([]);let i=0;const s=["HOOO!!","HIOOO!","¡WUUU!","HOOO HIOOO!!"],r=["¡ABUUU!","BUUU!","¡ABUCHEO!","CRINGE…"],a=["ehh…","mmm","…"];return Sn(()=>e.event,o=>{if(!o)return;const l=o.kind||"cheer",c=l==="boo"?r:l==="meh"?a:s,f=o.text||c[Math.floor(Math.random()*c.length)],u=++i;if(t.value.push({id:u,text:f,kind:l,x:18+Math.random()*64,y:25+Math.random()*40,rot:(Math.random()-.5)*18}),l==="cheer"||l==="boo")for(let h=0;h<2;h++){const d=++i;t.value.push({id:d,text:c[Math.floor(Math.random()*c.length)],kind:l,x:10+Math.random()*80,y:20+Math.random()*50,rot:(Math.random()-.5)*22}),setTimeout(()=>{t.value=t.value.filter(m=>m.id!==d)},1600+h*200)}setTimeout(()=>{t.value=t.value.filter(h=>h.id!==u)},1700)}),(o,l)=>(Pe(),Ne("div",vw,[(Pe(!0),Ne(Gt,null,Pi(t.value,c=>(Pe(),Ne("div",{key:c.id,class:pn(["bubble",c.kind]),style:Vt({left:c.x+"%",top:c.y+"%",transform:`rotate(${c.rot}deg)`})},Le(c.text),7))),128))]))}},yw=Cn(xw,[["__scopeId","data-v-ae2ca8ad"]]),Mw={class:"map"},Sw={class:"top"},bw={class:"stats"},Ew={class:"world"},Tw={class:"routes",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},Aw=["d"],ww=["disabled","onClick"],Rw={class:"pad-face"},Cw={class:"zone"},Pw={key:0},Iw={key:1},Lw={key:2},Dw={key:0,class:"pulse"},Uw={class:"dock"},Nw={__name:"RunMap",props:{run:{type:Object,required:!0}},emits:["enter","menu"],setup(n,{emit:e}){var d,m,v;const t=n,i=e,s=It(()=>KA(t.run)),r=It(()=>ZA(t.run)),a=dt(((m=(d=t.run.map)==null?void 0:d.available)==null?void 0:m[0])||((v=t.run.map)==null?void 0:v.currentId));Sn(()=>{var g;return(g=t.run.map)==null?void 0:g.available},g=>{g!=null&&g.length&&!g.includes(a.value)&&(a.value=g[0])},{deep:!0});const o=It(()=>{const g={};return s.value.forEach(p=>{g[p.id]=p}),g});function l(g){return{left:g.x+"%",top:g.y+"%","--theme":g.theme||g.color||"#4cc9f0"}}function c(g){const p=o.value[g.from],S=o.value[g.to];if(!p||!S)return"";const M=(p.x+S.x)/2,x=(p.y+S.y)/2-4;return`M ${p.x} ${p.y} Q ${M} ${x} ${S.x} ${S.y}`}function f(){const g=a.value,p=o.value[g];!p||p.state!=="current"||i("enter",g)}function u(g){g.state==="current"&&(a.value===g.id?f():a.value=g.id)}function h(g){g.repeat||(g.key===" "||g.key==="Enter"?(g.preventDefault(),f()):g.key==="Escape"&&i("menu"))}return es(()=>window.addEventListener("keydown",h)),ts(()=>window.removeEventListener("keydown",h)),(g,p)=>{var S;return Pe(),Ne("div",Mw,[p[5]||(p[5]=k("div",{class:"sky"},null,-1)),p[6]||(p[6]=k("div",{class:"clouds"},null,-1)),k("header",Sw,[p[1]||(p[1]=k("div",null,[k("p",{class:"eyebrow"},"Aura Place · Multi-path World"),k("h1",{class:"display"},"MAPA")],-1)),k("div",bw,[k("span",null,"🪙 "+Le(n.run.coins||0),1),k("span",null,"⭐ "+Le(n.run.fame),1),k("span",null," Bailes "+Le(((S=n.run.ownedMoves)==null?void 0:S.length)||0)+"/6",1),k("span",null,"🛡️ "+Le(Math.round((n.run.armor||0)*100))+"%",1)])]),p[7]||(p[7]=k("p",{class:"hint"},"Elige un camino: pelea, tienda, cofre o lobby. Varias rutas = distintas recompensas.",-1)),k("div",Ew,[(Pe(),Ne("svg",Tw,[(Pe(!0),Ne(Gt,null,Pi(r.value,(M,x)=>{var w,A;return Pe(),Ne("path",{key:x,class:pn(["edge",{hot:((w=o.value[M.from])==null?void 0:w.state)==="done"||((A=o.value[M.from])==null?void 0:A.state)==="current"}]),d:c(M)},null,10,Aw)}),128))])),(Pe(!0),Ne(Gt,null,Pi(s.value,M=>(Pe(),Ne("button",{key:M.id,type:"button",class:pn(["pad",[M.state,M.type,{on:a.value===M.id&&M.state==="current"}]]),style:Vt(l(M)),disabled:M.state==="locked",onClick:x=>u(M)},[p[2]||(p[2]=k("span",{class:"pad-top"},null,-1)),p[3]||(p[3]=k("span",{class:"pad-side"},null,-1)),k("span",Rw,[k("strong",Cw,Le(M.icon)+" "+Le(M.label),1),k("em",null,Le(M.rivalName||M.zone),1),M.state==="current"?(Pe(),Ne("small",Pw,"entrar · SPACE")):M.state==="done"?(Pe(),Ne("small",Iw,"✓ listo")):(Pe(),Ne("small",Lw,"🔒"))]),M.state==="current"?(Pe(),Ne("span",Dw)):gt("",!0)],14,ww))),128))]),k("footer",Uw,[k("button",{type:"button",class:"go",onClick:f},[...p[4]||(p[4]=[Nt("¡ENTRAR AL PAD! ",-1),k("kbd",null,"SPACE",-1)])]),k("button",{type:"button",class:"back",onClick:p[0]||(p[0]=M=>g.$emit("menu"))},"Menú")])])}}},Fw=Cn(Nw,[["__scopeId","data-v-d2ff12af"]]),Ow={class:"up"},Bw={class:"card"},kw={class:"display"},zw={class:"choices"},Vw=["onMouseenter","onClick"],Gw={key:0},Hw={key:1},Ww={__name:"UpgradePick",props:{choices:{type:Array,required:!0},title:{type:String,default:"SOY EL MÁS PERRÓN"}},emits:["pick"],setup(n,{emit:e}){const t=n,i=e,s=dt(0);function r(){const l=t.choices[s.value];l&&i("pick",l.id)}function a(l){s.value===l?r():s.value=l}function o(l){l.repeat||(l.key==="ArrowLeft"||l.key==="ArrowUp"?(l.preventDefault(),s.value=(s.value-1+t.choices.length)%t.choices.length):l.key==="ArrowRight"||l.key==="ArrowDown"?(l.preventDefault(),s.value=(s.value+1)%t.choices.length):(l.key===" "||l.key==="Enter")&&(l.preventDefault(),r()))}return es(()=>window.addEventListener("keydown",o)),ts(()=>window.removeEventListener("keydown",o)),(l,c)=>(Pe(),Ne("div",Ow,[k("div",Bw,[k("h1",kw,Le(n.title),1),c[0]||(c[0]=k("p",{class:"sub"},"Clic elige · doble clic / SPACE confirma",-1)),k("div",zw,[(Pe(!0),Ne(Gt,null,Pi(n.choices,(f,u)=>(Pe(),Ne("button",{key:f.id,type:"button",class:pn(["choice",{on:s.value===u,move:f.kind==="move"}]),style:Vt(f.color?{"--c":f.color}:void 0),onMouseenter:h=>s.value=u,onClick:h=>a(u)},[k("strong",null,Le(f.name),1),k("span",null,Le(f.desc),1),f.kind==="move"?(Pe(),Ne("em",Gw,"BAILE NUEVO")):f.kind==="upgrade"?(Pe(),Ne("em",Hw,"MEJORA")):gt("",!0)],46,Vw))),128))])])]))}},Xw=Cn(Ww,[["__scopeId","data-v-218b3cb5"]]),$w={class:"boot"},qw={class:"panel"},Yw={class:"tag"},Kw=["aria-valuenow"],Zw={class:"pct"},Jw={__name:"LoadingScreen",props:{progress:{type:Number,default:0},label:{type:String,default:"Cargando…"},error:{type:String,default:""}},emits:["retry"],setup(n,{emit:e}){const t=e;return(i,s)=>(Pe(),Ne("div",$w,[s[3]||(s[3]=k("div",{class:"glow"},null,-1)),k("div",qw,[s[1]||(s[1]=k("p",{class:"eyebrow"},"Farmeo de Aura",-1)),s[2]||(s[2]=k("h1",{class:"display"},[Nt("AURA"),k("br"),Nt("BATTLE")],-1)),k("p",Yw,Le(n.error||n.label),1),k("div",{class:"bar",role:"progressbar","aria-valuenow":Math.round(n.progress*100),"aria-valuemin":"0","aria-valuemax":"100"},[k("i",{style:Vt({width:Math.min(100,Math.round(n.progress*100))+"%"})},null,4)],8,Kw),k("p",Zw,Le(Math.min(100,Math.round(n.progress*100)))+"%",1),n.error?(Pe(),Ne("button",{key:0,type:"button",class:"retry",onClick:s[0]||(s[0]=r=>t("retry"))},"Reintentar")):gt("",!0)])]))}},jw=Cn(Jw,[["__scopeId","data-v-6bd3217f"]]),Qw={class:"shop"},e1={class:"card"},t1={class:"head"},n1={class:"display"},i1={class:"coins"},s1={class:"list",role:"listbox"},r1=["aria-selected","onClick"],a1={class:"meta"},o1={class:"price"},l1={key:0,class:"empty"},c1={class:"dock"},u1={key:1,class:"pick"},f1=["disabled"],h1={key:0},d1={__name:"ShopScreen",props:{items:{type:Array,required:!0},coins:{type:Number,default:0},title:{type:String,default:"TIENDA ROBLOX"}},emits:["buy","leave"],setup(n,{emit:e}){const t=n,i=e,s=dt(0),r=dt(""),a=It(()=>t.items[s.value]||null),o=It(()=>{const u=a.value;return!!(u&&t.coins>=u.price)});Sn(()=>t.items.length,u=>{s.value>=u&&(s.value=Math.max(0,u-1))});function l(u){s.value=u,r.value=""}function c(){const u=a.value;if(u){if(t.coins<u.price){r.value="No te alcanzan las monedas";return}i("buy",u.id),r.value=`Comprado: ${u.name}`}}function f(u){if(!u.repeat){if(u.key==="Escape"){u.preventDefault(),i("leave");return}t.items.length&&(u.key==="ArrowUp"||u.key==="ArrowLeft"?(u.preventDefault(),s.value=(s.value-1+t.items.length)%t.items.length,r.value=""):u.key==="ArrowDown"||u.key==="ArrowRight"?(u.preventDefault(),s.value=(s.value+1)%t.items.length,r.value=""):(u.key===" "||u.key==="Enter")&&(u.preventDefault(),c()))}}return es(()=>window.addEventListener("keydown",f)),ts(()=>window.removeEventListener("keydown",f)),(u,h)=>(Pe(),Ne("div",Qw,[k("div",e1,[k("header",t1,[k("div",null,[h[1]||(h[1]=k("p",{class:"eyebrow"},"Game Pass · Catalog",-1)),k("h1",n1,Le(n.title),1)]),k("div",i1,"🪙 "+Le(n.coins),1)]),h[4]||(h[4]=k("p",{class:"sub"},"Toca un ítem para elegirlo. Compra con el botón de abajo.",-1)),k("div",s1,[(Pe(!0),Ne(Gt,null,Pi(n.items,(d,m)=>(Pe(),Ne("button",{key:d.id,type:"button",role:"option",class:pn(["item",{on:s.value===m,locked:n.coins<d.price}]),style:Vt({"--c":d.color||"#ffd166"}),"aria-selected":s.value===m,onClick:v=>l(m)},[k("div",a1,[k("strong",null,Le(d.name),1),k("span",null,Le(d.desc),1),k("em",null,Le(d.kind==="move"?"BAILE":d.kind==="heal"?"BUFF":"MEJORA"),1)]),k("div",o1,Le(d.price)+" 🪙",1)],14,r1))),128)),n.items.length?gt("",!0):(Pe(),Ne("p",l1,"Catálogo vacío · sal y vuelve luego"))]),k("footer",c1,[r.value?(Pe(),Ne("p",{key:0,class:pn(["flash",{bad:r.value.startsWith("No")}])},Le(r.value),3)):a.value?(Pe(),Ne("p",u1,[h[2]||(h[2]=Nt(" Elegido: ",-1)),k("strong",null,Le(a.value.name),1),Nt(" · "+Le(a.value.price)+" 🪙 ",1)])):gt("",!0),k("button",{type:"button",class:"buy",disabled:!o.value,onClick:Bf(c,["stop"])},[Nt(Le(o.value?"COMPRAR":a.value?"SIN MONEDAS":"ELIGE UN ÍTEM")+" ",1),o.value?(Pe(),Ne("kbd",h1,"SPACE")):gt("",!0)],8,f1),k("button",{type:"button",class:"leave",onClick:h[0]||(h[0]=Bf(d=>u.$emit("leave"),["stop"]))},[...h[3]||(h[3]=[Nt(" Salir al mapa ",-1),k("kbd",null,"ESC",-1)])])])])]))}},p1=Cn(d1,[["__scopeId","data-v-ba49fe21"]]),m1={class:"result"},g1={class:"card"},_1={class:"display"},v1={class:"sub"},x1={class:"stats"},y1={class:"stat"},M1={class:"n"},S1={class:"stat"},b1={class:"n"},E1={class:"stat"},T1={class:"n"},A1={class:"stat"},w1={class:"n"},R1={class:"stat"},C1={class:"n"},P1={class:"stat gold"},I1={class:"n"},L1={key:0,class:"log"},D1={__name:"BattleResult",props:{rivalName:{type:String,default:"Rival"},stats:{type:Object,required:!0},coinsEarned:{type:Number,default:0},isBoss:{type:Boolean,default:!1}},emits:["next"],setup(n,{emit:e}){const t=n,i=It(()=>{const s=t.stats.bestTier;return s==="perfect"?"ICÓNICO":s==="great"?"ÉPICO":s==="ok"?"OK":"—"});return(s,r)=>{var a;return Pe(),Ne("div",m1,[k("div",g1,[r[8]||(r[8]=k("p",{class:"eyebrow"},"Victoria",-1)),k("h1",_1,Le(n.isBoss?"¡BOSS DERROTADO!":"¡GANASTE!"),1),k("p",v1,"vs "+Le(n.rivalName),1),k("div",x1,[k("div",y1,[k("span",M1,Le(n.stats.turns),1),r[1]||(r[1]=k("span",{class:"l"},"Turnos",-1))]),k("div",S1,[k("span",b1,"+"+Le(n.stats.auraGained),1),r[2]||(r[2]=k("span",{class:"l"},"AURA farmeada",-1))]),k("div",E1,[k("span",T1,Le(n.stats.cringeTaken),1),r[3]||(r[3]=k("span",{class:"l"},"CRINGE recibido",-1))]),k("div",A1,[k("span",w1,Le(i.value),1),r[4]||(r[4]=k("span",{class:"l"},"Mejor ritmo",-1))]),k("div",R1,[k("span",C1,Le(n.stats.movesUsed),1),r[5]||(r[5]=k("span",{class:"l"},"Bailes usados",-1))]),k("div",P1,[k("span",I1,"+"+Le(n.coinsEarned)+" 🪙",1),r[6]||(r[6]=k("span",{class:"l"},"Monedas",-1))])]),(a=n.stats.highlights)!=null&&a.length?(Pe(),Ne("ul",L1,[(Pe(!0),Ne(Gt,null,Pi(n.stats.highlights,(o,l)=>(Pe(),Ne("li",{key:l},Le(o),1))),128))])):gt("",!0),k("button",{type:"button",class:"next",onClick:r[0]||(r[0]=o=>s.$emit("next"))},[...r[7]||(r[7]=[Nt(" Siguiente al mapa ",-1),k("kbd",null,"SPACE",-1)])])])])}}},U1=Cn(D1,[["__scopeId","data-v-8945c60c"]]),N1={class:"app"},F1={key:8,class:"banner win"},O1={key:9,class:"banner lose"},B1={key:10,class:"overlay"},k1={key:0,class:"timing-wrap"},gd=2600,z1=3400,V1=4200,G1=700,H1={__name:"App",setup(n){const e=dt("loading"),t=dt(0),i=dt("Preparando…"),s=dt(""),r=dt(!1),a=Yr(fd()),o=Yr(md(hd(hs(a)),a)),l=dt(null),c=dt(null),f=dt(null),u=dt(null),h=dt(0),d=dt([]),m=dt([]),v=dt(null),g=dt(0),p=dt(!1),S=dt(null),M=dt(!1);let x=null;async function w(){s.value="",t.value=0,i.value="Preparando…",e.value="loading",r.value=!1;try{await Em((L,F)=>{t.value=L,i.value=F||"Cargando…"}),r.value=!0,t.value=1,i.value="Listo",e.value="menu"}catch(L){console.error("[aura] boot",L),s.value=(L==null?void 0:L.message)||"No se pudieron cargar los assets"}}function A(){x!=null&&(clearTimeout(x),x=null)}const C=It(()=>e.value==="battle"),y=It(()=>Cm(a)),R=It(()=>BA(a)),U=It(()=>y.value[h.value]||y.value[0]||gn[0]);function I(L){l.value={...L,t:Date.now()}}function z(L){c.value={...L,t:Date.now()}}function Z(L){S.value={kind:L,t:Date.now()},I({type:"crowd",kind:L})}function re(){Object.assign(a,fd()),h.value=0}function W(){e.value="menu",o.phase="menu"}function q(){e.value="map"}function G(L){v.value=null,p.value=!1;const F=hd(L);Object.assign(o,md(F,a)),a.healAfter=!1,h.value=0,e.value="battle",I({type:"resetAll"})}function Q(L){Object.assign(a,YA(a,L));const F=hs(a);if(F){if(F.type==="fight"||F.type==="elite"||F.type==="boss"){G(F);return}if(F.type==="shop"){Object.assign(a,HA(a)),m.value=dd(a),e.value="shop";return}if(F.type==="reward"){d.value=kA(a,3),e.value="upgrade";return}F.type==="rest"&&(Object.assign(a,$A(a)),Object.assign(a,io(a,{coinsGain:0})),q())}}function ce(L){const F=a.coins;Object.assign(a,XA(a,L)),m.value=dd(a),a.coins}function Me(){Object.assign(a,io(a,{coinsGain:0})),a.shopStock=null,q()}function ve(){v.value=null,xe()}function xe(){var se,le;const L=hs(a),F=pd(L);if(Object.assign(a,io(a,{coinsGain:F})),(L==null?void 0:L.type)==="boss"||(((le=(se=a.map)==null?void 0:se.available)==null?void 0:le.length)||0)===0){a.wonRun=!0,e.value="runWin";return}q()}function Ze(L){var F;Object.assign(a,qA(a,L)),Object.assign(a,io(a,{coinsGain:4+(((F=hs(a))==null?void 0:F.layer)||0)*2})),h.value=Math.min(h.value,Math.max(0,y.value.length-1)),q()}function ct(L){if(o.phase!=="pick")return;const F=y.value;if(!F.length)return;const se=(L%F.length+F.length)%F.length;h.value=se,o.moveIndex=se,o.message=`${F[se].name} · doble clic / SPACE para bailar`}function Je(L){if(!L)return;const F=520;L.side==="player"?((L.rivalAuraDrain>0||L.rivalCringeGain>0)&&setTimeout(()=>I({type:"react",who:"rival"}),F),L.cringeGain>0&&setTimeout(()=>I({type:"react",who:"player"}),F)):L.side==="rival"&&L.auraLoss>0&&setTimeout(()=>I({type:"react",who:"player"}),F)}function ne(){if(o.pendingOutcome)return V1;const L=o.lastResult;return L&&(L.auraLoss>0||L.rivalAuraDrain>0||L.rivalCringeGain>=3||L.cringeGain>=3)?z1:gd}function ge(){p.value=!0,o.outcome==="win"&&P()}function he(){if(o.phase!=="pick")return;const L=y.value[h.value];L&&(Object.assign(o,ew(o,L.id)),I({type:"camera",mode:L.camera||"side"}),so(()=>{var F;return(F=f.value)==null?void 0:F.start()}))}function He(L){const F=nw(o,L,a);Object.assign(o,F);const se=F.lastResult;se&&(so(()=>{I({type:"move",who:"player",moveId:se.move.id,intensity:Math.max(.55,se.accuracy),hits:1,camera:se.move.camera||"side"})}),setTimeout(()=>Z(se.crowd||se.tier.crowd||"meh"),280),setTimeout(()=>{var te,be,T,de;const le=((be=(te=u.value)==null?void 0:te.projectToScreen)==null?void 0:be.call(te,"player"))??{x:140,y:220},ue=((de=(T=u.value)==null?void 0:T.projectToScreen)==null?void 0:de.call(T,"rival"))??{x:window.innerWidth*.7,y:220};se.auraGain>0&&(I({type:"aura",who:"player",amount:se.auraGain}),z({who:"player",kind:"up",text:`+${se.auraGain} AURA`,x:le.x,y:le.y})),se.cringeGain>0&&z({who:"player",kind:"down",text:`+${se.cringeGain} CRINGE`,x:le.x,y:le.y+36}),se.rivalCringeGain>0&&z({who:"rival",kind:"down",text:`+${se.rivalCringeGain} CRINGE`,x:ue.x,y:ue.y}),se.rivalAuraDrain>0&&z({who:"rival",kind:"down",text:`−${se.rivalAuraDrain} AURA`,x:ue.x,y:ue.y+40})},650),Je(se))}function $e(){I({type:"reset"}),o.message=`${o.rival.name} ataca…`;const L=iw(o,a);Object.assign(o,L);const F=L.lastResult;!F||F.side!=="rival"||setTimeout(()=>{o.phase==="rivalShow"&&F!=null&&F.move&&(I({type:"move",who:"rival",moveId:F.move.id,intensity:.9,hits:F.hits||1,camera:F.move.camera||"side"}),setTimeout(()=>Z(F.crowd||F.tier.crowd||"meh"),280),setTimeout(()=>{var ue,te,be,T;const se=((te=(ue=u.value)==null?void 0:ue.projectToScreen)==null?void 0:te.call(ue,"player"))??{x:140,y:220},le=((T=(be=u.value)==null?void 0:be.projectToScreen)==null?void 0:T.call(be,"rival"))??{x:window.innerWidth*.7,y:220};F.auraLoss>0&&z({who:"player",kind:"down",text:`-${F.auraLoss} AURA`,x:se.x,y:se.y}),F.auraGain>0&&(I({type:"aura",who:"rival",amount:F.auraGain}),z({who:"rival",kind:"up",text:`+${F.auraGain} AURA`,x:le.x,y:le.y})),F.rivalCringeGain>0&&z({who:"rival",kind:"down",text:`+${F.rivalCringeGain} CRINGE`,x:le.x,y:le.y+36})},650),Je(F))},450)}function Fe(){if(A(),o.phase==="playerShow"){if(o.pendingOutcome){Object.assign(o,au(o));return}$e();return}if(o.phase==="rivalShow"){if(o.pendingOutcome){Object.assign(o,au(o));return}Object.assign(o,sw(o)),I({type:"reset"}),I({type:"camera",mode:"idle"})}}function P(){const L=hs(a);v.value=QA(o),g.value=pd(L)}function D(){var L;if(e.value!=="loading"&&!(e.value==="menu"||e.value==="map"||e.value==="upgrade"||e.value==="shop")){if(e.value==="runWin"){re(),q();return}if(C.value){if(v.value){ve();return}o.phase==="pick"?he():o.phase==="timing"?(L=f.value)==null||L.lock():o.phase==="matchEnd"&&p.value&&(o.outcome==="lose"?(re(),W()):o.outcome==="win"&&ve())}}}function $(L){if(!L.repeat){if(L.key===" "||L.key==="Enter"){if(M.value){L.preventDefault();return}M.value=!0,L.preventDefault(),D();return}if(!(e.value!=="battle"||o.phase!=="pick")){if(L.key==="ArrowLeft"||L.key==="a"||L.key==="A"||L.key==="q"||L.key==="Q")L.preventDefault(),ct(h.value-1);else if(L.key==="ArrowRight"||L.key==="d"||L.key==="D"||L.key==="e"||L.key==="E")L.preventDefault(),ct(h.value+1);else if(L.key==="ArrowUp"||L.key==="w"||L.key==="W")L.preventDefault(),ct(h.value-3);else if(L.key==="ArrowDown"||L.key==="s"||L.key==="S")L.preventDefault(),ct(h.value+3);else if(/^[1-6]$/.test(L.key)){L.preventDefault();const F=Number(L.key)-1;y.value[F]&&ct(F)}}}}function ie(L){(L.key===" "||L.key==="Enter")&&(M.value=!1)}return es(()=>{w(),window.addEventListener("keydown",$),window.addEventListener("keyup",ie)}),ts(()=>{A(),window.removeEventListener("keydown",$),window.removeEventListener("keyup",ie)}),Sn(()=>o.phase,L=>{L==="timing"&&so(()=>{var F;return(F=f.value)==null?void 0:F.start()}),L==="matchEnd"&&(p.value=!1,I({type:"reset"}),I({type:"camera",mode:"idle"}),A(),x=setTimeout(()=>{x=null,ge()},G1)),L==="playerShow"||L==="rivalShow"?(A(),x=setTimeout(()=>{x=null,Fe()},ne())):L!=="matchEnd"&&A(),L==="pick"||L==="timing"?I({type:"attacker",who:"player"}):(L==="matchEnd"||L==="menu")&&I({type:"attacker",who:null})}),(L,F)=>{var se,le;return Pe(),Ne("div",N1,[e.value==="loading"||s.value?(Pe(),jn(jw,{key:0,progress:t.value,label:i.value,error:s.value,onRetry:w},null,8,["progress","label","error"])):gt("",!0),r.value?(Pe(),jn(HT,{key:1,ref_key:"sceneRef",ref:u,class:"canvas-wrap",crowd:55,fx:l.value,"can-move":!1,input:{x:0,z:0}},null,8,["fx"])):gt("",!0),r.value?(Pe(),jn(_w,{key:2,event:c.value},null,8,["event"])):gt("",!0),r.value?(Pe(),jn(yw,{key:3,event:S.value},null,8,["event"])):gt("",!0),e.value==="menu"?(Pe(),jn(pw,{key:4,onStart:F[0]||(F[0]=()=>{re(),q()})})):gt("",!0),e.value==="map"?(Pe(),jn(Fw,{key:5,run:a,onEnter:Q,onMenu:W},null,8,["run"])):gt("",!0),e.value==="upgrade"?(Pe(),jn(Xw,{key:6,choices:d.value,title:"COFRE · Elige recompensa",onPick:Ze},null,8,["choices"])):gt("",!0),e.value==="shop"?(Pe(),jn(p1,{key:7,items:m.value,coins:a.coins||0,onBuy:ce,onLeave:Me},null,8,["items","coins"])):gt("",!0),e.value==="runWin"?(Pe(),Ne("div",F1,[k("h1",null,Le(Br(Lo)),1),k("p",null,"Completaste Aura Place. Fame "+Le(a.fame)+" · 🪙 "+Le(a.coins),1),k("button",{type:"button",onClick:F[1]||(F[1]=()=>{re(),q()})},[...F[4]||(F[4]=[Nt("Nueva ruta ",-1),k("kbd",null,"SPACE",-1)])])])):gt("",!0),e.value==="battle"&&o.phase==="matchEnd"&&o.outcome==="lose"&&p.value?(Pe(),Ne("div",O1,[F[6]||(F[6]=k("h1",null,"PERDISTE",-1)),F[7]||(F[7]=k("p",null,"Tu CRINGE llegó a 100 primero (o el rival llenó su AURA). Punto.",-1)),k("button",{type:"button",onClick:F[2]||(F[2]=()=>{re(),W()})},[...F[5]||(F[5]=[Nt("Menú ",-1),k("kbd",null,"SPACE",-1)])])])):gt("",!0),e.value==="battle"?(Pe(),Ne("div",B1,[Vn(UA,{phase:o.phase,turn:o.turn,"player-aura":o.playerAura,"player-cringe":o.playerCringe,"rival-aura":o.rivalAura,"rival-cringe":o.rivalCringe,"aura-max":o.auraMax,"cringe-max":o.cringeMax,message:o.message,"rival-name":o.rival.name,"last-result":o.lastResult,"move-index":h.value,"move-slots":R.value,"owned-count":y.value.length,"max-slots":6,outcome:o.outcome,floor:(((se=Br(hs)(a))==null?void 0:se.layer)??0)+1,"max-floors":a.maxFloors,onSelectMove:ct,onAttack:he,onContinue:Fe,onRestart:F[3]||(F[3]=()=>{re(),W()})},null,8,["phase","turn","player-aura","player-cringe","rival-aura","rival-cringe","aura-max","cringe-max","message","rival-name","last-result","move-index","move-slots","owned-count","outcome","floor","max-floors"]),o.phase==="timing"?(Pe(),Ne("div",k1,[Vn(ow,{ref_key:"timingRef",ref:f,active:!0,move:o.selectedMove||U.value,onHit:He},null,8,["move"])])):gt("",!0),p.value&&v.value?(Pe(),jn(U1,{key:1,"rival-name":o.rival.name,stats:v.value,"coins-earned":g.value,"is-boss":((le=Br(hs)(a))==null?void 0:le.type)==="boss",onNext:ve},null,8,["rival-name","stats","coins-earned","is-boss"])):gt("",!0)])):gt("",!0)])}}},W1=Cn(H1,[["__scopeId","data-v-8ffa0e6c"]]);c_(W1).mount("#app");
