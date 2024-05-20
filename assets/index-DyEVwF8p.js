import{cl as C,cm as b,cn as y,cw as h,ck as d,cx as k,cy as P,cz as L,cA as N,cB as D,cC as H,cD as q,cE as B,cF as Q,ch as w,cr as G,cG as K,cH as J,cI as O,cJ as Y,cj as X,cs as W,cg as V}from"./index-DnmWLAUw.js";import{bp as Ue,cP as Pe,cL as De,cM as He,cQ as Be,cR as Qe,cX as Ge,cW as Ke,bq as Je,cY as Ye,cS as Xe,cO as Ze,cT as $e,cU as _e,cZ as et,c_ as tt,ci as at,c$ as nt,cK as rt,cN as it,d0 as st,cV as ut,d1 as ot,aH as ct,aG as ft,d2 as lt,d3 as mt,d4 as ht,d5 as dt}from"./index-DnmWLAUw.js";import{A as Z,a as $,c as _,n as ee}from"./zipWith-B7ObzpC_.js";import{d as pt,C as gt,e as bt,N as At,b as yt,S as wt,T as Ft,j as xt,k as It,l as Et,m as Tt,p as St,q as qt,s as kt,u as Ot,v as Wt,f as Mt,w as Ct,x as Lt,y as Nt,B as Vt,D as Rt,E as jt,F as zt,G as Ut,H as Pt,I as Dt,J as Ht,K as Bt,L as Qt,M as Gt,O as Kt,P as Jt,Q as Yt,R as Xt,U as Zt,V as $t,W as _t,X as ea,Y as ta,Z as aa,a4 as na,_ as ra,$ as ia,i as sa,a0 as ua,a1 as oa,a2 as ca,a3 as fa,a5 as la,a6 as ma,a7 as ha,a8 as da,a9 as va,o as pa,g as ga,aa as ba,ab as Aa,ac as ya,ad as wa,ae as Fa,af as xa,r as Ia,ag as Ea,ah as Ta,am as Sa,ai as qa,aj as ka,ak as Oa,al as Wa,an as Ma,ao as Ca,ap as La,aq as Na,ar as Va,as as Ra,at as ja,au as za,av as Ua,aw as Pa,ax as Da,ay as Ha,az as Ba,aA as Qa,aB as Ga,aC as Ka,t as Ja,aD as Ya,aE as Xa,aF as Za,aG as $a,h as _a,aH as en,aI as tn,aJ as an,aK as nn,aL as rn,aM as sn,aN as un,z as on,aO as cn,aP as fn}from"./zipWith-B7ObzpC_.js";import{A as x,a as I}from"./skip-1oTXlwJY.js";import{S as mn,b as hn,c as dn,d as vn,s as pn}from"./skip-1oTXlwJY.js";import{m as bn}from"./merge-Du2_3tn5.js";var R={now:function(){return(R.delegate||performance).now()},delegate:void 0},g={schedule:function(n){var a=requestAnimationFrame,e=cancelAnimationFrame,r=g.delegate;r&&(a=r.requestAnimationFrame,e=r.cancelAnimationFrame);var t=a(function(i){e=void 0,n(i)});return new C(function(){return e==null?void 0:e(t)})},requestAnimationFrame:function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return requestAnimationFrame.apply(void 0,b([],y(n)))},cancelAnimationFrame:function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var e=g.delegate;return((e==null?void 0:e.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,b([],y(n)))},delegate:void 0};function ye(n){return n?j(n):te}function j(n){return new h(function(a){var e=n||R,r=e.now(),t=0,i=function(){a.closed||(t=g.requestAnimationFrame(function(s){t=0;var u=e.now();a.next({timestamp:n?u:s,elapsed:u-r}),i()}))};return i(),function(){t&&g.cancelAnimationFrame(t)}})}var te=j(),ae=1,E,T={};function M(n){return n in T?(delete T[n],!0):!1}var z={setImmediate:function(n){var a=ae++;return T[a]=!0,E||(E=Promise.resolve()),E.then(function(){return M(a)&&n()}),a},clearImmediate:function(n){M(n)}},ne=z.setImmediate,re=z.clearImmediate,S={setImmediate:function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];return ne.apply(void 0,b([],y(n)))},clearImmediate:function(n){var a=S.delegate;return((a==null?void 0:a.clearImmediate)||re)(n)},delegate:void 0},ie=function(n){d(a,n);function a(e,r){var t=n.call(this,e,r)||this;return t.scheduler=e,t.work=r,t}return a.prototype.requestAsyncId=function(e,r,t){return t===void 0&&(t=0),t!==null&&t>0?n.prototype.requestAsyncId.call(this,e,r,t):(e.actions.push(this),e._scheduled||(e._scheduled=S.setImmediate(e.flush.bind(e,void 0))))},a.prototype.recycleAsyncId=function(e,r,t){var i;if(t===void 0&&(t=0),t!=null?t>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,t);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(S.clearImmediate(r),e._scheduled===r&&(e._scheduled=void 0))},a}(x),se=function(n){d(a,n);function a(){return n!==null&&n.apply(this,arguments)||this}return a.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var t=this.actions,i;e=e||t.shift();do if(i=e.execute(e.state,e.delay))break;while((e=t[0])&&e.id===r&&t.shift());if(this._active=!1,i){for(;(e=t[0])&&e.id===r&&t.shift();)e.unsubscribe();throw i}},a}(I),ue=new se(ie),we=ue,oe=function(n){d(a,n);function a(e,r){var t=n.call(this,e,r)||this;return t.scheduler=e,t.work=r,t}return a.prototype.schedule=function(e,r){return r===void 0&&(r=0),r>0?n.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},a.prototype.execute=function(e,r){return r>0||this.closed?n.prototype.execute.call(this,e,r):this._execute(e,r)},a.prototype.requestAsyncId=function(e,r,t){return t===void 0&&(t=0),t!=null&&t>0||t==null&&this.delay>0?n.prototype.requestAsyncId.call(this,e,r,t):(e.flush(this),0)},a}(x),ce=function(n){d(a,n);function a(){return n!==null&&n.apply(this,arguments)||this}return a}(I),fe=new ce(oe),Fe=fe,le=function(n){d(a,n);function a(e,r){var t=n.call(this,e,r)||this;return t.scheduler=e,t.work=r,t}return a.prototype.requestAsyncId=function(e,r,t){return t===void 0&&(t=0),t!==null&&t>0?n.prototype.requestAsyncId.call(this,e,r,t):(e.actions.push(this),e._scheduled||(e._scheduled=g.requestAnimationFrame(function(){return e.flush(void 0)})))},a.prototype.recycleAsyncId=function(e,r,t){var i;if(t===void 0&&(t=0),t!=null?t>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,t);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(g.cancelAnimationFrame(r),e._scheduled=void 0)},a}(x),me=function(n){d(a,n);function a(){return n!==null&&n.apply(this,arguments)||this}return a.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var t=this.actions,i;e=e||t.shift();do if(i=e.execute(e.state,e.delay))break;while((e=t[0])&&e.id===r&&t.shift());if(this._active=!1,i){for(;(e=t[0])&&e.id===r&&t.shift();)e.unsubscribe();throw i}},a}(I),he=new me(le),xe=he,Ie=function(n){d(a,n);function a(e,r){e===void 0&&(e=de),r===void 0&&(r=1/0);var t=n.call(this,e,function(){return t.frame})||this;return t.maxFrames=r,t.frame=0,t.index=-1,t}return a.prototype.flush=function(){for(var e=this,r=e.actions,t=e.maxFrames,i,s;(s=r[0])&&s.delay<=t&&(r.shift(),this.frame=s.delay,!(i=s.execute(s.state,s.delay))););if(i){for(;s=r.shift();)s.unsubscribe();throw i}},a.frameTimeFactor=10,a}(I),de=function(n){d(a,n);function a(e,r,t){t===void 0&&(t=e.index+=1);var i=n.call(this,e,r)||this;return i.scheduler=e,i.work=r,i.index=t,i.active=!0,i.index=e.index=t,i}return a.prototype.schedule=function(e,r){if(r===void 0&&(r=0),Number.isFinite(r)){if(!this.id)return n.prototype.schedule.call(this,e,r);this.active=!1;var t=new a(this.scheduler,this.work);return this.add(t),t.schedule(e,r)}else return C.EMPTY},a.prototype.requestAsyncId=function(e,r,t){t===void 0&&(t=0),this.delay=e.frame+t;var i=e.actions;return i.push(this),i.sort(a.sortActions),1},a.prototype.recycleAsyncId=function(e,r,t){},a.prototype._execute=function(e,r){if(this.active===!0)return n.prototype._execute.call(this,e,r)},a.sortActions=function(e,r){return e.delay===r.delay?e.index===r.index?0:e.index>r.index?1:-1:e.delay>r.delay?1:-1},a}(x);function Ee(n){return!!n&&(n instanceof h||k(n.lift)&&k(n.subscribe))}function Te(n,a){var e=typeof a=="object";return new Promise(function(r,t){var i=!1,s;n.subscribe({next:function(u){s=u,i=!0},error:t,complete:function(){i?r(s):e?r(a.defaultValue):t(new P)}})})}function F(n,a,e,r){if(e)if(L(e))r=e;else return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return F(n,a,r).apply(this,t).pipe(N(e))};return r?function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return F(n,a).apply(this,t).pipe(D(r),H(r))}:function(){for(var t=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var u=new Z,o=!0;return new h(function(m){var c=u.subscribe(m);if(o){o=!1;var f=!1,A=!1;a.apply(t,b(b([],y(i)),[function(){for(var l=[],v=0;v<arguments.length;v++)l[v]=arguments[v];if(n){var p=l.shift();if(p!=null){u.error(p);return}}u.next(1<l.length?l:l[0]),A=!0,f&&u.complete()}])),A&&u.complete(),f=!0}return c})}}function Se(n,a,e){return F(!1,n,a,e)}function qe(n,a,e){return F(!0,n,a,e)}var ve={connector:function(){return new B},resetOnDisconnect:!0};function ke(n,a){a===void 0&&(a=ve);var e=null,r=a.connector,t=a.resetOnDisconnect,i=t===void 0?!0:t,s=r(),u=new h(function(o){return s.subscribe(o)});return u.connect=function(){return(!e||e.closed)&&(e=q(function(){return n}).subscribe(s),i&&e.add(function(){return s=r()})),e},u}function Oe(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var e=Q(n),r=$(n),t=r.args,i=r.keys,s=new h(function(u){var o=t.length;if(!o){u.complete();return}for(var m=new Array(o),c=o,f=o,A=function(v){var p=!1;w(t[v]).subscribe(G(u,function(U){p||(p=!0,f--),m[v]=U},function(){return c--},void 0,function(){(!c||!p)&&(f||u.next(i?_(i,m):m),u.complete())}))},l=0;l<o;l++)A(l)});return e?s.pipe(N(e)):s}function We(n,a,e,r,t){var i,s,u,o;arguments.length===1?(i=n,o=i.initialState,a=i.condition,e=i.iterate,s=i.resultSelector,u=s===void 0?O:s,t=i.scheduler):(o=n,!r||L(r)?(u=O,t=r):u=r);function m(){var c;return J(this,function(f){switch(f.label){case 0:c=o,f.label=1;case 1:return!a||a(c)?[4,u(c)]:[3,4];case 2:f.sent(),f.label=3;case 3:return c=e(c),[3,1];case 4:return[2]}})}return q(t?function(){return K(m(),t)}:m)}function Me(n,a,e){return q(function(){return n()?a:e})}var pe=new h(Y);function Ce(){return pe}function Le(n,a){return X(Object.entries(n),a)}function Ne(n,a,e){return[W(a,e)(w(n)),W(ee(a,e))(w(n))]}function Ve(n,a,e){if(a==null&&(a=n,n=0),a<=0)return V;var r=a+n;return new h(e?function(t){var i=n;return e.schedule(function(){i<r?(t.next(i++),this.schedule()):t.complete()})}:function(t){for(var i=n;i<r&&!t.closed;)t.next(i++);t.complete()})}function Re(n,a){return new h(function(e){var r=n(),t=a(r),i=t?w(t):V;return i.subscribe(e),function(){r&&r.unsubscribe()}})}export{pt as ArgumentOutOfRangeError,Z as AsyncSubject,Ue as BehaviorSubject,gt as ConnectableObservable,V as EMPTY,P as EmptyError,pe as NEVER,bt as NotFoundError,At as Notification,yt as NotificationKind,Pe as ObjectUnsubscribedError,h as Observable,De as ReplaySubject,mn as Scheduler,wt as SequenceError,B as Subject,He as Subscriber,C as Subscription,Ft as TimeoutError,Be as UnsubscriptionError,de as VirtualAction,Ie as VirtualTimeScheduler,xe as animationFrame,he as animationFrameScheduler,ye as animationFrames,we as asap,ue as asapScheduler,hn as async,dn as asyncScheduler,xt as audit,It as auditTime,Se as bindCallback,qe as bindNodeCallback,Et as buffer,Tt as bufferCount,St as bufferTime,qt as bufferToggle,kt as bufferWhen,Ot as catchError,Wt as combineAll,Mt as combineLatest,Ct as combineLatestAll,Lt as combineLatestWith,Qe as concat,Ge as concatAll,Nt as concatMap,Vt as concatMapTo,Rt as concatWith,Ke as config,jt as connect,ke as connectable,zt as count,Ut as debounce,vn as debounceTime,Pt as defaultIfEmpty,q as defer,Dt as delay,Ht as delayWhen,Bt as dematerialize,Qt as distinct,Je as distinctUntilChanged,Ye as distinctUntilKeyChanged,Gt as elementAt,Xe as empty,Kt as endWith,Jt as every,Yt as exhaust,Xt as exhaustAll,Zt as exhaustMap,$t as expand,W as filter,_t as finalize,ea as find,ta as findIndex,aa as first,Ze as firstValueFrom,na as flatMap,Oe as forkJoin,X as from,$e as fromEvent,_e as fromEventPattern,We as generate,ra as groupBy,O as identity,ia as ignoreElements,Me as iif,sa as interval,ua as isEmpty,Ee as isObservable,oa as last,Te as lastValueFrom,et as map,tt as mapTo,ca as materialize,fa as max,bn as merge,at as mergeAll,nt as mergeMap,la as mergeMapTo,ma as mergeScan,ha as mergeWith,da as min,va as multicast,Ce as never,Y as noop,rt as observable,H as observeOn,pa as of,ga as onErrorResumeNext,ba as onErrorResumeNextWith,Le as pairs,Aa as pairwise,Ne as partition,it as pipe,st as pluck,ya as publish,wa as publishBehavior,Fa as publishLast,xa as publishReplay,Fe as queue,fe as queueScheduler,Ia as race,Ea as raceWith,Ve as range,Ta as reduce,Sa as refCount,qa as repeat,ka as repeatWhen,Oa as retry,Wa as retryWhen,Ma as sample,Ca as sampleTime,La as scan,ut as scheduled,Na as sequenceEqual,ot as share,ct as shareReplay,Va as single,pn as skip,Ra as skipLast,ja as skipUntil,za as skipWhile,ft as startWith,D as subscribeOn,Ua as switchAll,lt as switchMap,Pa as switchMapTo,Da as switchScan,mt as take,Ha as takeLast,ht as takeUntil,Ba as takeWhile,Qa as tap,Ga as throttle,Ka as throttleTime,Ja as throwError,Ya as throwIfEmpty,Xa as timeInterval,Za as timeout,$a as timeoutWith,_a as timer,en as timestamp,tn as toArray,Re as using,an as window,nn as windowCount,rn as windowTime,sn as windowToggle,un as windowWhen,dt as withLatestFrom,on as zip,cn as zipAll,fn as zipWith};