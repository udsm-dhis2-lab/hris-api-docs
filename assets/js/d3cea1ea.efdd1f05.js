"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[699],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(b,s(s({ref:r},c),{},{components:t})):n.createElement(b,s({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},601:function(e,r,t){t.r(r),t.d(r,{default:function(){return p},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return l}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],d={title:"Dashboard",sidebar_label:"Dashboard"},i={unversionedId:"developers/data/dashboards",id:"developers/data/dashboards",isDocsHomePage:!1,title:"Dashboard",description:"Dashboard Module.",source:"@site/docs/developers/data/dashboards.md",sourceDirName:"developers/data",slug:"/developers/data/dashboards",permalink:"/hris-api-docs/docs/developers/data/dashboards",editUrl:"https://github.com/udsm-dhis2-lab/hris-api-docs/blob/main/docs/developers/data/dashboards.md",version:"current",sidebar_label:"Dashboard",frontMatter:{title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Analytics",permalink:"/hris-api-docs/docs/developers/data/analytics"},next:{title:"Reports",permalink:"/hris-api-docs/docs/developers/data/reports"}},l=[{value:"Dashboard Module.",id:"dashboard-module",children:[{value:"Dashboard",id:"dashboard",children:[]}]}],c={toc:l};function p(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dashboard-module"},"Dashboard Module."),(0,o.kt)("p",null,"This module allows visualizing the trend of data in the system. The dashboard includes graphs and charts for visualy displaying data. major functions in the dashboard are adding dashboards, viewing, adding dashboard elements, updating dashboards and deleting dashboards."),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Method:")," GET"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Payload")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n"id": "fbzalEYFM9a7O",\n"name": "Registration",\n"title": "Registration",\n"formSections": [],\n"formFieldMembers": [\n{\n"id": "vRLD9O4I91T6R",\n"created": "2021-09-06T22:46:35.215Z",\n"lastUpdated": "2021-09-06T22:46:35.215Z",\n"fieldid": "140",\n"formid": "40",\n"sort": 1,\n"isPinned": false,\n"showInList": true,\n"compulsory": false,\n"searchable": true,\n"field": {\n"id": "5289e934ab062",\n"created": "2013-11-18T07:17:24.000Z",\n"lastUpdated": "2013-11-18T07:17:24.000Z",\n"name": "firstname",\n"description": "Compulsory, Employee`s Firstname.",\n"caption": "First Name",\n"compulsory": true,\n"isUnique": false,\n"isCalculated": false,\n"hasHistory": false,\n"datatype": "String",\n"fieldOptions": []\n}\n}\n')))}p.isMDXComponent=!0}}]);