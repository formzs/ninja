"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{93683:function(e,n,a){function r(e){var n=e.isOpen,a=e.onClose,r=(0,x.hz)(),o=(0,s._)((0,d.useState)(!1),2),j=o[0],N=o[1],k=(0,u.useRouter)(),_=(0,d.useCallback)(function(){m.o.logEvent(f.a.closeAccountPaymentModal),a()},[a]),C=(0,d.useCallback)((0,t._)(function(){var e;return(0,i.__generator)(this,function(n){switch(n.label){case 0:N(!0),m.o.logEvent(f.a.clickAccountPaymentCheckout),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,h.ZP.getCheckoutLink()];case 2:return e=n.sent(),k.push(e.url),[3,5];case 3:return n.sent(),b.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return N(!1),[7];case 5:return[2]}})}),[k,N]),P=(0,d.useCallback)((0,t._)(function(){var e;return(0,i.__generator)(this,function(n){switch(n.label){case 0:N(!0),m.o.logEvent(f.a.clickAccountCustomerPortal),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,h.ZP.fetchCustomerPortalUrl()];case 2:return e=n.sent(),k.push(e.url),[3,5];case 3:return n.sent(),b.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return N(!1),[7];case 5:return[2]}})}),[k,N]),A=(0,d.useCallback)(function(){m.o.logEvent(f.a.clickAccountPaymentGetHelp)},[]),S=(0,x.YD)(),T=r.has("disable_upgrade_ui");return(0,l.jsxs)(v.x,{isOpen:n,onClose:a,children:[(0,l.jsxs)("div",{className:"flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",children:[(0,l.jsx)("span",{className:"text-base font-semibold sm:text-base",children:"Your plan"}),(0,l.jsx)("button",{className:"text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",onClick:_,children:(0,l.jsx)(p.q5L,{className:"h-6 w-6"})})]}),(0,l.jsxs)("div",{className:"grid sm:grid-cols-2",children:[(0,l.jsx)("div",{className:"relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",children:(0,l.jsx)(y.Oi,{rowElements:[(0,l.jsx)(y.Cu,{text:"Free plan"},"row-free-plan-name"),(0,l.jsx)(y.hi,{variant:"disabled",disabled:!0,text:w.S.free.callToAction.active},"row-free-plan-button"),(0,l.jsx)(y.G,{variant:"secondary",text:w.S.free.demandAccess},"row-free-plan-demand"),(0,l.jsx)(y.G,{variant:"secondary",text:w.S.free.responseSpeed},"row-free-plan-speed"),(0,l.jsx)(y.G,{className:"sm:pb-2",variant:"secondary",text:w.S.free.modelFeatures},"row-free-plan-updates")]})}),(0,l.jsx)("div",{className:"relative order-1 col-span-1 sm:order-2",children:(0,l.jsx)(y.Oi,{rowElements:[(0,l.jsx)(y.Cu,{text:w.S.plus.name,children:(0,l.jsx)("span",{className:"font-semibold text-gray-500",children:w.S.plus.costInDollars})},"row-plus-plan-title"),(0,l.jsx)(y.hi,{variant:"primary",disabledText:T?"Due to high demand, we've temporarily paused upgrades.":"",disabled:j,isLoading:j,onClick:C,text:w.S.plus.callToAction.inactivePayment},"row-plus-plan-button"),(0,l.jsx)(y.G,{variant:"primary",text:w.S.plus.demandAccess},"row-plus-plan-demand"),(0,l.jsx)(y.G,{variant:"primary",text:w.S.plus.responseSpeed},"row-plus-plan-speed"),(0,l.jsx)(y.G,{className:"sm:pb-2",variant:"primary",text:w.S.plus.modelFeatures},"row-plus-plan-updates"),S&&(0,l.jsx)(y.nR,{className:"sm:pb-1",isLoading:j,text:w.S.manageSubscriptionWeb.callToAction,onClick:P},"row-plus-plan-manage"),(0,l.jsx)(c(),{target:"_blank",href:g.ti,passHref:!0,children:(0,l.jsx)(y.nR,{className:"sm:pb-1",isLoading:!1,text:w.S.getHelp.callToAction,onClick:A},"row-plus-plan-help")},"row-plus-plan-help-link")]})})]})]})}a.d(n,{Z:function(){return r}});var t=a(21722),s=a(22830),i=a(39889),l=a(35250),o=a(9181),c=a.n(o),u=a(60554),d=a(70079),p=a(1454),m=a(50795),f=a(82081),h=a(99486),x=a(78931),b=a(88798),g=a(56817),v=a(96175),y=a(19350),w=a(51061)},96175:function(e,n,a){function r(){var e=(0,t._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);return r=function(){return e},e}a.d(n,{x:function(){return o}});var t=a(4337),s=a(35250),i=a(21389),l=a(89368),o=function(e){var n=e.children,a=e.isOpen,r=e.onClose;return(0,s.jsx)(l.Z,{size:"fullscreen",isOpen:a,onClose:r,type:"success",className:"!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",children:(0,s.jsx)("div",{className:"flex h-full flex-col items-center justify-start",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(c,{children:n})})})})},c=i.Z.div(r())},19350:function(e,n,a){function r(){var e=(0,i._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);return r=function(){return e},e}function t(){var e=(0,i._)(["gap-2 flex flex-row justify-start items-center text-sm"]);return t=function(){return e},e}function s(){var e=(0,i._)(["text-xl font-semibold justify-between items-center flex"]);return s=function(){return e},e}a.d(n,{Cu:function(){return x},G:function(){return v},Oi:function(){return h},hi:function(){return g},nR:function(){return y}});var i=a(4337),l=a(35250),o=a(19841),c=a(70079),u=a(1454),d=a(21389),p=a(67273),m=a(45635),f=a(88327),h=function(e){var n=e.rowElements;return(0,l.jsx)(w,{children:n.map(function(e){return e})})},x=function(e){var n=e.className,a=e.text,r=e.children;return(0,l.jsxs)(N,{className:n,children:[(0,l.jsx)("span",{children:a}),r]})},b={"primary-disabled":"border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",primary:"border-none py-3 font-semibold",disabled:"dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"},g=(0,c.forwardRef)(function(e,n){var a=e.isLoading,r=void 0!==a&&a,t=e.disabled,s=e.onClick,i=e.variant,c=void 0===i?"primary":i,d=e.text,h=e.disabledText;return h?(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)(m.u,{side:"bottom",sideOffset:20,label:h,usePortal:!1,children:(0,l.jsxs)(p.z,{ref:n,as:"button",color:"disabled",className:(0,o.Z)("w-full",b[c]),children:[d,r&&(0,l.jsx)(f.ZP,{className:"animate-spin",icon:u.dAq})]})})}):(0,l.jsxs)(p.z,{disabled:void 0!==t&&t,onClick:s,ref:n,as:"button",className:(0,o.Z)(b[c]),children:[(0,l.jsx)("span",{className:(0,o.Z)("inline-block",{"text-gray-700":"primary-disabled"===c,"text-white":"primary"===c}),children:d}),r&&(0,l.jsx)(f.ZP,{className:"animate-spin",icon:u.dAq})]})});g.displayName="PricingPlanButton";var v=function(e){var n=e.variant,a=void 0===n?"primary":n,r=e.className,t=e.text;return(0,l.jsxs)(j,{className:r,children:[(0,l.jsx)(f.ZP,{icon:u._rq,className:(0,o.Z)("h-5 w-5",{"text-green-700":"primary"==a,"text-gray-400":"secondary"==a})}),(0,l.jsx)("span",{children:t})]})},y=function(e){var n=e.className,a=e.text,r=e.isLoading,t=e.onClick;return(0,l.jsx)(j,{className:n,children:(0,l.jsxs)("button",{onClick:t,className:"flex flex-row items-center space-x-1 underline",children:[(0,l.jsx)("span",{children:a}),r&&(0,l.jsx)(f.ZP,{className:"animate-spin",icon:u.dAq})]})})},w=d.Z.div(r()),j=d.Z.div(t()),N=d.Z.div(s())},56817:function(e,n,a){a.d(n,{_4:function(){return s},m1:function(){return t},ti:function(){return r}});var r="https://help.openai.com/en/collections/3943089-billing",t="https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",s={WEBAPP:"chatgpt_web",MOBILE_IOS:"chatgpt_mobile_ios",GRANTED:"chatgpt_gratis_recepient",NOT_PURCHASED:"chatgpt_not_purchased"}},51061:function(e,n,a){a.d(n,{S:function(){return r}});var r={free:{name:"Free plan",callToAction:{active:"Your current plan",inactive:"Your current plan"},costInDollars:"",demandAccess:"Available when demand is low",responseSpeed:"Standard response speed",modelFeatures:"Regular model updates"},plus:{name:"ChatGPT Plus",callToAction:{active:"Your current plan",inactive:"I'm interested",inactivePayment:"Upgrade plan"},costInDollars:"USD $20/mo",demandAccess:"Available even when demand is high",responseSpeed:"Faster response speed",modelFeatures:"Priority access to new features"},manageSubscriptionWeb:{callToAction:"Manage my subscription"},manageSubscriptionIos:{callToAction:"Manage my subscription in the ChatGPT iOS app"},getHelp:{callToAction:"I need help with a billing issue"},business:{callToAction:"Buy for my team"}}},21739:function(e,n,a){a.d(n,{g:function(){return o}});var r=a(96237),t=a(39324),s=a(71209),i=a(78103),l={flags:{isUserInCanPayGroup:!1,failwhaleBypassEnabled:!1,sharingEnabled:!1,messageRedesign:!1}},o=(0,i.ZP)()(function(e,n){return(0,s._)((0,t._)({},l),{updateFlagValue:function(a,i){var l=n().flags;e({flags:(0,s._)((0,t._)({},l),(0,r._)({},a,i))})}})})}}]);