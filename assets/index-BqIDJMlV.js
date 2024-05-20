import{j as e,z as ne,D as A,T as f,F as C,d as c,h as g,G as y,H as L,I as ue,J as he,K as re,S as b,M as k,N as T,O as $,P as fe,U as ge,Q as be,V as P,X as F,Y as R,Z as W,$ as S,a0 as ie,a1 as G,a2 as H,a3 as oe,a4 as B,a5 as Z,a6 as ee,a7 as we,a8 as je,a9 as te,aa as ke,ab as V,ac as se,ad as Ne,ae as Ce,af as _,ag as ye,ah as ae,ai as le,aj as D,ak as ve,al as Se,am as Ie,an as He,ao as Ee,ap as Te}from"./index-DnmWLAUw.js";const Be="_btn_n0cmq_1",Ve={btn:Be},E=({backRoute:s,fullWidth:t,text:a,icon:n})=>e.jsxs(ne,{className:`${Ve.btn} ${t?"flex w-full justify-center":"inline-flex"} items-center self-start gap-[8px] py-[10px] px-[20px] border-[white] border-[1px] border-solid`,to:s,children:[n||e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M19.5 2.25H6.75C5.95435 2.25 5.19129 2.56607 4.62868 3.12868C4.06607 3.69129 3.75 4.45435 3.75 5.25V21C3.75 21.1989 3.82902 21.3897 3.96967 21.5303C4.11032 21.671 4.30109 21.75 4.5 21.75H18C18.1989 21.75 18.3897 21.671 18.5303 21.5303C18.671 21.3897 18.75 21.1989 18.75 21C18.75 20.8011 18.671 20.6103 18.5303 20.4697C18.3897 20.329 18.1989 20.25 18 20.25H5.25C5.25 19.8522 5.40804 19.4706 5.68934 19.1893C5.97064 18.908 6.35218 18.75 6.75 18.75H19.5C19.6989 18.75 19.8897 18.671 20.0303 18.5303C20.171 18.3897 20.25 18.1989 20.25 18V3C20.25 2.80109 20.171 2.61032 20.0303 2.46967C19.8897 2.32902 19.6989 2.25 19.5 2.25ZM18.75 17.25H6.75C6.22326 17.2493 5.70572 17.388 5.25 17.6522V5.25C5.25 4.85218 5.40804 4.47064 5.68934 4.18934C5.97064 3.90804 6.35218 3.75 6.75 3.75H18.75V17.25Z",fill:"white"})}),e.jsx("span",{className:"font-[500] text-[white]",children:a})]}),De=()=>{const s=A();return e.jsxs("div",{className:"flex flex-col items-baseline laptop:items-center justify-center mt-[32px] mb-[32px] laptop:mb-[42px]",children:[e.jsx("h1",{className:"text-white mb-[20px] font-[500] laptop:mb-[16px] text-[30px] laptop:text-[56px] text-left laptop:text-center",children:"SatoshiDEX Staking"}),e.jsxs("p",{className:"max-w-[800px] text-[#D6D6D6] font-[400] text-[16px] laptop:text-[18px] text-left laptop:text-center mb-[20px]",children:["Welcome to the Satoshi staking dashboard. Earn your rewards by staking your $",f,". Your staked $",f," will be available for claiming at TGE. Earned $",f," will be distributed gradually after TGE. Monitor your earnings effortlessly below, or buy and stake more tokens. Your journey to financial empowerment starts now."]}),e.jsxs("div",{className:"flex flex-col gap-[8px]",children:[s&&e.jsx(E,{text:"Transactions History",fullWidth:!0,backRoute:C.stakingHistory}),s&&e.jsx(E,{icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15.75 10.5C12.8558 10.5 10.5 12.855 10.5 15.75C10.5 18.645 12.8558 21 15.75 21C18.6442 21 21 18.645 21 15.75C21 12.855 18.6442 10.5 15.75 10.5ZM15.75 19.5C13.6823 19.5 12 17.8177 12 15.75C12 13.6823 13.6823 12 15.75 12C17.8177 12 19.5 13.6823 19.5 15.75C19.5 17.8177 17.8177 19.5 15.75 19.5ZM16.5 15.4395L17.7803 16.7197L16.7197 17.7803L15 16.0605V13.5H16.5V15.4395ZM21 6.75V11.5118C20.5732 10.9837 20.0648 10.5278 19.5 10.1483V6.75C19.5 6.33675 19.164 6 18.75 6H5.25C4.83675 6 4.5 6.33675 4.5 6.75V9H15.75C14.1435 9 12.6705 9.56325 11.5118 10.5H4.5V19.5H10.1385C10.518 20.067 10.9823 20.5718 11.5118 21H3V6.75C3 5.5095 4.0095 4.5 5.25 4.5H7.5V3H9V4.5H15V3H16.5V4.5H18.75C19.9905 4.5 21 5.5095 21 6.75Z",fill:"white"})}),text:"Transactions History",backRoute:C.history})]})]})},ce=({small:s,setValue:t,value:a})=>{const[n,r]=c.useState(!1),{wallet:o}=g(y),x=L(),l=ue(),m=c.useRef(null);he(m,()=>r(!1));const p=c.useMemo(()=>re.filter(i=>b.includes(i.networkId)),[]),h=c.useMemo(()=>p.map(i=>({label:i.shortName,value:i.networkId,icon:i.icon,shortName:i.shortName})),[p]),d=p.find(i=>i.networkId===a),I=c.useMemo(()=>({label:d==null?void 0:d.shortName,value:d==null?void 0:d.networkId,icon:d==null?void 0:d.icon,shortName:d==null?void 0:d.shortName}),[d]),u=(h==null?void 0:h.find(i=>i.value===(o==null?void 0:o.chainId)))||I;return e.jsxs("div",{ref:m,className:k("w-full border border-solid flex items-center relative",{"border-[#E78D24]":n,"border-[#57534E]":n,"h-[56px] laptop:h-[72px] mb-[20px]":!s,"h-[42px] max-w-[120px]":s}),onClick:()=>r(i=>!i),onBlur:()=>r(!1),children:[e.jsxs("div",{className:k("w-full border-solid border-[#57534E] flex items-center justify-between",{"px-[16px] laptop:p-[20px] laptop:p-[20px]":!s,"px-[12px] py-[10px]":s}),children:[e.jsxs("div",{className:"flex items-center gap-[8px]",children:[e.jsx("div",{className:k("flex relative",{"w-[24px] h-[24px]":l||s,"w-[32px] h-[32px]":!l&&!s}),children:e.jsx("img",{className:"absolute",width:l||s?"24px":"32px",height:l||s?"24px":"32px",src:u==null?void 0:u.icon,alt:u==null?void 0:u.label})}),e.jsx("p",{className:k("text-[#fff] font-[500]",{"text-[20px]":!s,"text-[16px]":s}),children:u==null?void 0:u.shortName})]}),e.jsx("div",{className:"w-[20px] h-[20px]",style:{transform:`rotate(${n?"180":"0"}deg)`},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",children:e.jsx("path",{d:"M17.4132 8.16354L11.1632 14.4135C11.0762 14.5009 10.9727 14.5703 10.8587 14.6176C10.7447 14.6649 10.6226 14.6893 10.4992 14.6893C10.3758 14.6893 10.2536 14.6649 10.1397 14.6176C10.0257 14.5703 9.92222 14.5009 9.83512 14.4135L3.58512 8.16354C3.409 7.98742 3.31006 7.74855 3.31006 7.49948C3.31006 7.25041 3.409 7.01154 3.58512 6.83542C3.76124 6.65929 4.00011 6.56035 4.24918 6.56035C4.49826 6.56035 4.73713 6.65929 4.91325 6.83542L10.5 12.4221L16.0867 6.83463C16.2628 6.65851 16.5017 6.55957 16.7507 6.55957C16.9998 6.55957 17.2387 6.65851 17.4148 6.83463C17.5909 7.01075 17.6899 7.24963 17.6899 7.4987C17.6899 7.74777 17.5909 7.98664 17.4148 8.16276L17.4132 8.16354Z",fill:"#79716B"})})})]}),n&&e.jsx("div",{className:"border-solid border-[#57534E] absolute top-[110%] z-[10] bg-[#44403C] w-full",style:{border:"1px solid rgba(255, 255, 255, 0.12)",borderBottom:"none",boxShadow:"10px 10px 0px 0px rgba(0, 0, 0, 0.42)"},children:h.map(i=>e.jsxs("button",{onClick:t?()=>{t(i.value)}:()=>x(i==null?void 0:i.value),style:{borderBottom:"1px solid rgba(255, 255, 255, 0.12)"},className:k("w-full flex items-center gap-[8px] hover:bg-[#57534E]",{active:(i==null?void 0:i.value)===(o==null?void 0:o.chainId),"h-[56px] laptop:h-[72px] p-[16px] laptop:p-[20px]":!s,"h-[42px] p-[10px]":s}),children:[e.jsx("div",{className:k("flex relative",{"w-[24px] h-[24px]":l||s,"w-[32px] h-[32px]":!l&&!s}),children:e.jsx("img",{className:"absolute",width:l||s?"24px":"32px",height:l||s?"24px":"32px",src:i==null?void 0:i.icon,alt:i==null?void 0:i.label})}),e.jsx("p",{className:"text-[#fff] text-[20px] font-[500]",children:i==null?void 0:i.shortName})]},`key_${i==null?void 0:i.value}`))})]})},Me=()=>{var n;const[s,t]=c.useState(1),{info:a}=g(T);return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[#E78D24] font-[500] text-[16px] laptop:text-[24px]",children:$((n=a==null?void 0:a.apys)==null?void 0:n[s])+"%"}),e.jsx(ce,{small:!0,value:s,setValue:t})]})},M=({title:s,value:t,chain:a,className:n,style:r,content:o,apyTip:x})=>e.jsxs("div",{className:k(n,"flex w-full staking-stats-card"),style:r,children:[s&&x?e.jsxs("div",{className:"flex items-center justify-between gap-[8px]",children:[e.jsx("p",{className:"text-white font-[500] text-[14px] laptop:text-[18px]",children:s}),e.jsx(be,{text:"Current APY is estimated based on the current rate of distribution per second divided by the total amount staked in the pool"})]}):e.jsx("p",{className:"text-white font-[500] text-[14px] laptop:text-[18px]",children:s}),o||e.jsxs("div",{className:"flex justify-between flex-wrap gap-[8px] items-center tablet:items-end",children:[t&&e.jsx("span",{className:"text-[#E78D24] font-[500] text-[16px] laptop:text-[24px]",children:t}),a&&e.jsx("span",{className:"text-[#E78D24] font-[500] text-[10px] tablet:text-[14px]",children:a})]})]}),Ae=()=>{var n,r,o,x;const{info:s}=g(T),{wallet:t}=g(y),a=(n=Object.values((s==null?void 0:s.globalTotalStaked)||{}))==null?void 0:n.reduce((l,m)=>l+=Number(m),0);return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap justify-center gap-[12px] tablet:gap-[20px] ml-auto mr-auto",children:[e.jsx(M,{className:"col-span-full tablet:col-span-1 max-w-[343px]",title:`Total $${f} Staked`,value:fe(a||0)+` $${f}`}),e.jsx(M,{apyTip:!0,className:"col-span-1 tablet:col-span-1 max-w-[343px] relative z-[10]",title:`$${f} APY`,chain:(o=(r=re)==null?void 0:r.find(l=>+l.networkId===(t==null?void 0:t.chainId)||0))==null?void 0:o.name,style:t?{}:{borderColor:"#E78D24"},value:t?$((x=s==null?void 0:s.apys)==null?void 0:x[(t==null?void 0:t.chainId)||0])+"%":void 0,content:t?null:e.jsx(Me,{})}),!t&&e.jsx(M,{className:"col-span-1 tablet:col-span-1 max-w-[343px]",title:"To start staking",value:"%",content:e.jsx(ge,{onlyBtn:!0})})]})})},O=async({to:s,data:t,value:a,chain:n,dispatch:r,provider:o,afterConfirm:x})=>{r(ee(!0));try{let l={chainId:o.networkId,from:o.address,to:s,data:t,value:a?"0x"+new S(a).toString(16):"0x0"};const[m,p]=await Promise.all([we(l,o.provider),je(o.provider)]);if(m===null){te("Gas Estimate Error. Transaction Mostly Will Fail");return}const h=ke[o.networkId],d=V(p.lt(h)?h:p);n===56?l={...l,gasLimit:m,gasPrice:V(p)}:l={...l,gasLimit:m,maxFeePerGas:d,maxPriorityFeePerGas:V(h)};const u=await o.provider.getSigner().sendTransaction(l);se("Transaction Initiated."),x&&x(u);const N=(await u.wait()).transactionHash;return se(e.jsx(Ne,{title:"Transaction Finished Successfully",descr:`Transaction hash: ${Ce(N)}`})),N}catch(l){(l==null?void 0:l.code)!==4001?(console.warn(l),te("Transaction Failed.")):x&&x()}finally{r(ee(!1))}},Le=P("tokenStaking/stake",async({amount:s},t)=>{const a=await F(!0);if(!a)return;const n=new R(W),r=new S(s).multipliedBy(new S(10).pow(ie)).toFixed(),o=n.encodeFunctionData("stakeUsingBalance",[r]);await O({to:G[a.networkId],data:o,dispatch:t.dispatch,provider:a,chain:a.networkId})&&(t.dispatch(H("")),t.dispatch(oe({networkId:a.networkId})),t.dispatch(B({wallet:a.address,networkId:a.networkId})),t.dispatch(Z({wallet:a.address,networkId:a.networkId})))});P("tokenStaking/unstake",async({amount:s},t)=>{const a=await F(!0);if(!a)return;const n=new R(W),r=new S(s).multipliedBy(new S(10).pow(ie)).toFixed(),o=n.encodeFunctionData("stakeUsingBalance",[r]);await O({to:G[a.networkId],data:o,dispatch:t.dispatch,provider:a,chain:a.networkId})&&(t.dispatch(H("")),t.dispatch(B({wallet:a.address,networkId:a.networkId})),t.dispatch(Z({wallet:a.address,networkId:a.networkId})))});const $e=P("tokenStaking/claimRewards",async(s,t)=>{const a=await F(!0);if(!a)return;const r=new R(W).encodeFunctionData("claim");await O({to:G[a.networkId],data:r,dispatch:t.dispatch,provider:a,chain:a.networkId})&&t.dispatch(B({wallet:a.address,networkId:a.networkId}))}),Pe=()=>{var U,z;const s=_(),t=A(),[a,n]=c.useState(!1),{wallet:r}=g(y),{stakingAmount:o,info:x,tokens:l,isStakingPaused:m,trxInProgress:p}=g(T),h=L(),d=ye(),[I,u]=c.useState(!1),i=p&&I,N=!r||!Number(o)||m||p,xe=!r||m||p,de=r?"Stake":`${d.stingType("page.paymentWidget.connectWallet")}`,w=((U=l==null?void 0:l.find(v=>+v.chainId===((r==null?void 0:r.chainId)||-1)))==null?void 0:U.balance)||"",pe=c.useCallback(({target:v})=>{var Q,q,J;const j=(Q=v.value)==null?void 0:Q.split("");j.length>1&&j[0]==="0"&&j[1]!=="."&&j.splice(0,1),j.length===1&&j[0]==="."&&j.splice(0,0,"0");const K=j.join(""),X=Number(ae(K))>Number(w)?w:ae(K);((J=(q=X.toString().split("."))==null?void 0:q[1])==null?void 0:J.length)>4||s(H(X.toString()))},[s,w]),Y=c.useCallback(v=>{s(H(v))},[s]),me=c.useCallback(()=>{if(!N){if(!b.includes(r==null?void 0:r.chainId)){h(b[0]);return}s(Le({amount:Number(o),poolId:0,referralAddress:""})),u(!0)}},[o,s,h,N,r==null?void 0:r.chainId]);return c.useEffect(()=>{p||u(!1)},[p]),e.jsxs("div",{className:"mt-[24px] laptop:mt-[32px] grid grid-cols-1 tablet:grid-cols-[1.1fr_0.9fr] gap-[24px]",children:[e.jsx("div",{className:"staking-info self-center",children:e.jsxs("div",{className:"relative",children:[e.jsxs("h3",{className:"mb-[24px] text-[16px] tablet:text-[22px]",children:["$",f," APY"]}),e.jsxs("span",{className:"text-[#E78D24] text-[22px] tablet:text-[32px] font-[500]",children:[$((z=x==null?void 0:x.apys)==null?void 0:z[(r==null?void 0:r.chainId)||0])||" - ","%"]}),e.jsxs("p",{className:"mt-[16px] text-[#D6D6D6] text-[14px] max-w-[424px]",children:["Stay tuned to our social media platforms for the latest updates regarding the $",f," release date. Our commitment is to deliver timely information, ensuring you stay informed."]})]})}),e.jsx("div",{className:k("staking-widget",{"order-[-1]":t}),children:e.jsxs("div",{className:"staking-widget-inner",children:[e.jsx("p",{className:"mb-[16px] text-[14px] laptop:text-[22px] font-[500]",children:"Select a Chain"}),e.jsx(ce,{}),e.jsxs("div",{className:"flex justify-between items-center mb-[12px]",children:[e.jsx("h3",{className:"font-[500] text-[14px] laptop:text-[22px]",children:"Amount To Stake"}),e.jsx("button",{disabled:!w,onClick:()=>Y(w.toString()),className:"w-[42px] h-[26px] text-center text-[14px] active:scale-[0.98]",style:{background:"rgba(68, 64, 60, 0.64)"},children:"Max"})]}),e.jsx("input",{type:"text",placeholder:"Amount to Stake",value:o,onChange:pe,onFocus:()=>n(!0),onBlur:()=>n(!1),disabled:xe,className:"w-full h-[52px] tablet:h-[80px] py-[12px] px-[16px] text-[16px] laptop:text-[24px] font-[400] outline-none mb-[12px]",style:{background:"rgba(17, 15, 22, 0.32)",border:"1px solid",borderColor:a?"#E78D24":"transparent"}}),e.jsxs("div",{className:"flex items-center flex-wrap gap-[4px] mb-[20px]",children:[e.jsx("span",{className:"text-[#79716B] text-[14px]",children:"Balance:"}),e.jsxs("span",{className:"text-[14px] underline cursor-pointer hover:no-underline",onClick:()=>{w&&Y(w.toString())},children:[w||"-"," $",f]})]}),e.jsx(le,{size:t?"44":"52",withWallet:!p,fullWidth:!0,onClick:me,disabled:N,loading:i,children:de}),e.jsx("div",{className:"flex justify-center mt-[12px] tablet:mt-[20px]",children:e.jsx(ne,{to:C.home,className:"text-center text-[#79716B] text-[12px] tablet:text-[14px] underline cursor-pointer hover:no-underline",children:"Got no $SATX Buy and stake now to earn rewards!"})})]})})]})},Fe=()=>{var h;const s=_(),{info:t,trxInProgress:a}=g(T),{wallet:n}=g(y),r=L(),[o,x]=c.useState(!1),l=a&&o,m=!n||!((h=t==null?void 0:t.apys)!=null&&h[(n==null?void 0:n.chainId)||0])||a,p=c.useCallback(()=>{if(!m){if(!b.includes(n==null?void 0:n.chainId)){r(b[0]);return}s($e()),x(!0)}},[s,r,n==null?void 0:n.chainId,m]);return c.useEffect(()=>{a||x(!1)},[a]),e.jsxs("div",{className:"grid mt-[24px] grid-cols-3 gap-[16px] tablet:gap-[24px]",children:[e.jsx("div",{className:"staking-info-card col-span-full tablet:col-span-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-[12px]",children:[e.jsxs("div",{className:"staking-info-card-inner",children:[e.jsx("p",{className:"mb-[12px] laptop:mb-[32px] text-[12px] tablet:text-[18px] text-white",children:"STAKED BALANCE"}),e.jsxs("span",{className:"text-[#E78D24] text-[16px] tablet:text-[24px]",children:[t!=null&&t.stakedBalance?D(t==null?void 0:t.stakedBalance):"-"," $",f]})]}),e.jsxs("div",{className:"staking-info-card-inner",children:[e.jsx("p",{className:"mb-[12px] laptop:mb-[32px] text-[12px] tablet:text-[18px] text-white",children:"YOUR STAKEABLE"}),e.jsxs("span",{className:"text-[#E78D24] text-[16px] tablet:text-[24px]",children:[t!=null&&t.stakeable?D(t==null?void 0:t.stakeable):"-"," $",f]})]})]})}),e.jsxs("div",{className:"staking-info-card col-span-full tablet:col-span-1",children:[e.jsx("p",{className:"mb-[12px] laptop:mb-[32px] text-[14px] tablet:text-[18px] text-white",children:"TOTAL REWARDS"}),e.jsxs("span",{className:"text-[#E78D24] text-[16px] tablet:text-[24px]",children:[t!=null&&t.totalRewards?D(t==null?void 0:t.totalRewards):"-"," $",f]}),e.jsx(le,{className:"mt-[24px] hidden",loading:l,disabled:m,onClick:p,children:"Claim"})]})]})},Re=c.memo(()=>{const s=_(),{wallet:t}=g(y),[a,n]=c.useState(!1),[r]=ve();return c.useEffect(()=>{t?b.includes(t.chainId)?b.includes(t.chainId)&&n(!1):n(!0):n(!1)},[t]),c.useEffect(()=>{for(const o of b)s(oe({networkId:o}));t&&(s(Z({wallet:t.address,networkId:t.chainId})),s(B({wallet:t.address,networkId:t.chainId})))},[s,t]),c.useEffect(()=>{r(void 0)},[r]),c.useEffect(()=>{s(Se(location))},[s,location==null?void 0:location.search]),c.useEffect(()=>{s(Ie())},[s]),e.jsxs("div",{className:"pb-[320px]",children:[e.jsx(De,{}),e.jsx(Ae,{}),t&&e.jsx(Pe,{}),e.jsx(He,{open:a,availableChains:b,onClose:()=>null}),t&&e.jsx(Fe,{})]})}),Oe=()=>e.jsx(We,{children:e.jsx(Re,{})}),We=({children:s})=>{const t=A(),{restricted:a,wallet:n}=g(y);return e.jsxs("main",{className:"min-h-screen relative bg-[#000]",children:[e.jsxs("div",{className:"absolute inset-[0] flex overflow-hidden",children:[e.jsx("img",{className:"h-full flex-[0_0_50%] opacity-[0.2] object-contain",src:"/images/referral/left-bg-referral.webp",alt:"[]"}),e.jsx("img",{className:"h-full flex-[0_0_50%] opacity-[0.2] object-contain hidden laptop:block",src:"/images/referral/right-bg-referral.webp",alt:"[]"})]}),e.jsx(Ee,{children:e.jsxs("div",{className:"pt-[96px] laptop:pt-[132px]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-[10px]",children:[!a&&e.jsx(Te,{backRoute:C.home}),e.jsxs("div",{className:"flex gap-[12px]",style:{marginLeft:"auto"},children:[!t&&n&&e.jsx(E,{icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M15.75 10.5C12.8558 10.5 10.5 12.855 10.5 15.75C10.5 18.645 12.8558 21 15.75 21C18.6442 21 21 18.645 21 15.75C21 12.855 18.6442 10.5 15.75 10.5ZM15.75 19.5C13.6823 19.5 12 17.8177 12 15.75C12 13.6823 13.6823 12 15.75 12C17.8177 12 19.5 13.6823 19.5 15.75C19.5 17.8177 17.8177 19.5 15.75 19.5ZM16.5 15.4395L17.7803 16.7197L16.7197 17.7803L15 16.0605V13.5H16.5V15.4395ZM21 6.75V11.5118C20.5732 10.9837 20.0648 10.5278 19.5 10.1483V6.75C19.5 6.33675 19.164 6 18.75 6H5.25C4.83675 6 4.5 6.33675 4.5 6.75V9H15.75C14.1435 9 12.6705 9.56325 11.5118 10.5H4.5V19.5H10.1385C10.518 20.067 10.9823 20.5718 11.5118 21H3V6.75C3 5.5095 4.0095 4.5 5.25 4.5H7.5V3H9V4.5H15V3H16.5V4.5H18.75C19.9905 4.5 21 5.5095 21 6.75Z",fill:"white"})}),text:"Transactions History",backRoute:C.history}),!t&&e.jsx(E,{text:"Staking history",backRoute:C.stakingHistory})]})]}),s]})})]})};export{Oe as default};
