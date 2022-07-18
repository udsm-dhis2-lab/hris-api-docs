"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[804],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return I}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(n),I=i,d=p["".concat(s,".").concat(I)]||p[I]||u[I]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function I(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var h=2;h<a;h++)o[h]=n[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2872:function(e,t,n){n.r(t),n.d(t,{default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"users/introduction",id:"users/introduction",isDocsHomePage:!1,title:"Introduction",description:"HRHIS is an open-source software for HRH information management developed by the Department of Computer Science, University of Dar es Salaam for the Ministry of Health and Social Welfare (Tanzania) to support the capture of data linked to any level in the organizational hierarchy and is customizable at both the input and output sides.",source:"@site/docs/users/introduction.md",sourceDirName:"users",slug:"/users/introduction",permalink:"/hris-api-docs/docs/users/introduction",editUrl:"https://github.com/udsm-dhis2-lab/hris-api-docs/blob/main/docs/users/introduction.md",version:"current",sidebar_label:"Introduction",frontMatter:{title:"Introduction",sidebar_label:"Introduction"},sidebar:"docs",next:{title:"User Module",permalink:"/hris-api-docs/docs/users/user/user"}},h=[{value:"Objective",id:"objective",children:[]},{value:"HRHIS Modules",id:"hrhis-modules",children:[]},{value:"<strong>Accessing HRHIS</strong>",id:"accessing-hrhis",children:[]},{value:"Apps Menu",id:"apps-menu",children:[]}],l={toc:h};function u(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"HRHIS is an open-source software for HRH information management developed by the Department of Computer Science, University of Dar es Salaam for the Ministry of Health and Social Welfare (Tanzania) to support the capture of data linked to any level in the organizational hierarchy and is customizable at both the input and output sides."),(0,a.kt)("p",null,"The HRHIS was implemented as an effort to improve human resources for health (HRH) management.A situation analysis indicated the existence of several databases within and outside the ministry dealing with HRH, often with similar information fields. It was agreed these sources should be harmonized, and housed under Health Management Information System (HMIS) for consistency. The HRHIS software thus became part of the HMIS and was fully developed using the District Health Information System (DHIS) software."),(0,a.kt)("p",null,"The HRHIS has gone through a long process of improvements in all aspects such as technologically, performance. Currently, we have an improved HRHIS system with more features and better performance. "),(0,a.kt)("p",null,"The HRHIS provides input/output mechanisms for data at different levels, such as national,\nregional, district or facility level. It is designed to provide flexibility to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Capture and store health personnel's data and history by organizational unit, cadre, and other\ncriteria;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add any number of datasets or elements required by any sector (such as the central health\nministry, local governments, civil services or private providers);")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update organizational unit details according to users' requirements (e.g. allowing additional\nregions, districts and health facilities to be added dynamically without entering into system\ncodes);")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Generate web-enabled reports in different formats (general and aggregated), including\ngraphical reporting."))),(0,a.kt)("h3",{id:"objective"},"Objective"),(0,a.kt)("p",null,"This document aims at instructing and guiding  users on how to use the HRHIS to achieve their goals in the System."),(0,a.kt)("h3",{id:"hrhis-modules"},"HRHIS Modules"),(0,a.kt)("p",null,"Functions in HRHIS are groped into different modules/apps for easier organization of data and maintenance of the system. Currently HRHIS has 10 apps/modules as listed below;"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Health worker data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import/export")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Data quality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Data administration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Maintenance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reports")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Training")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Worker portal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dashboard"))),(0,a.kt)("h3",{id:"accessing-hrhis"},(0,a.kt)("strong",{parentName:"h3"},"Accessing HRHIS")),(0,a.kt)("p",null,"HRHIS system is available via the ",(0,a.kt)("a",{parentName:"p",href:"https://hrhis.moh.go.tz/"},"Web"),". Type ",(0,a.kt)("inlineCode",{parentName:"p"},"hrhis.moh.go.tz")," in the address bar/search bar of a web browser(such as Internet Explorer, Mozilla Firefox, Google Chrome, Opera, etc.) to access HRHIS login screen provided that you are connected to the Internet. "),(0,a.kt)("p",null,"It is recommended to use Mozilla Firefox or Google Chrome. Internet Explorer is not advised to be used for accessing HRHIS, but if it is found necessary to use then, the latest version of the browser can be used). The HRHIS login page appears as seen below,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(7873).Z})),(0,a.kt)("h2",{id:"apps-menu"},"Apps Menu"),(0,a.kt)("p",null,"After successfully logging in HRHIS, you can access different applications in the system via the apps menu located at the left hand side of the HRHIS window as seen in figure below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img alt",src:n(394).Z})),(0,a.kt)("p",null,"Each application corresponds to a specific module in the system. The steps to follow working with each module to achieve different user interests have been highlighted in the following sections."))}u.isMDXComponent=!0},394:function(e,t){t.Z="data:image/png;base64,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"},7873:function(e,t,n){t.Z=n.p+"assets/images/login-1c181aa4148b7824a519d03110ec5552.png"}}]);