"use strict";(self.webpackChunkleseq_docs=self.webpackChunkleseq_docs||[]).push([[68],{876:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6561:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7896),a=r(1461),o=(r(2784),r(876)),l=["components"],i={id:"seq",title:"Seq<T> Object",sidebar_label:"Seq<T> Object",sidebar_position:.5,custom_edit_url:null,hide_title:!0},c=void 0,u={unversionedId:"seq",id:"seq",title:"Seq<T> Object",description:"Seq Object",source:"@site/docs/seq.md",sourceDirName:".",slug:"/seq",permalink:"/leseq/seq",editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"seq",title:"Seq<T> Object",sidebar_label:"Seq<T> Object",sidebar_position:.5,custom_edit_url:null,hide_title:!0},sidebar:"mainSidebar",previous:{title:"Equality Strategy",permalink:"/leseq/equality"},next:{title:"Create Original Functions",permalink:"/leseq/create"}},s=[{value:"Seq&lt;T&gt; Object",id:"seqt-object",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"seqt-object"},"Seq<T",">"," Object"),(0,o.kt)("p",null,"The Seq<T",">"," object is the core object; it is created by the ",(0,o.kt)("strong",{parentName:"p"},"Generator")," and is also the argument and return value of the ",(0,o.kt)("strong",{parentName:"p"},"Operator"),"."),(0,o.kt)("p",null,"The Seq<T",">"," object has the following methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"method"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pipe"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes an arbitrary number of ",(0,o.kt)("strong",{parentName:"td"},"Operators")," as arguments and converts the sequence.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes only one ",(0,o.kt)("strong",{parentName:"td"},"Value")," and converts the sequence to a value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"forEach"),(0,o.kt)("td",{parentName:"tr",align:null},"Performs iterative processing on elements of a sequence.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"toArray"),(0,o.kt)("td",{parentName:"tr",align:null},"Converts a sequence to an array.")))),(0,o.kt)("p",null,"Since lazy evaluation is employed, the process is not executed when ",(0,o.kt)("strong",{parentName:"p"},"pipe()")," is called, but only when ",(0,o.kt)("strong",{parentName:"p"},"value()"),", ",(0,o.kt)("strong",{parentName:"p"},"toArray()"),", or ",(0,o.kt)("strong",{parentName:"p"},"forEach()")," is called."))}d.isMDXComponent=!0}}]);