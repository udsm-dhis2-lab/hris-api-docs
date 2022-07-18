"use strict";(self.webpackChunkhris_api_docs=self.webpackChunkhris_api_docs||[]).push([[845],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=a.createContext({}),d=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},s=function(n){var e=d(n.components);return a.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,p=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),g=d(t),m=i,c=g["".concat(p,".").concat(m)]||g[m]||u[m]||l;return t?a.createElement(c,r(r({ref:e},s),{},{components:t})):a.createElement(c,r({ref:e},s))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:i,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4767:function(n,e,t){t.r(e),t.d(e,{default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],o={id:"ou",title:"Organisation Units",sidebar_label:"Organisation Units"},p={unversionedId:"developers/metadata/ou",id:"developers/metadata/ou",isDocsHomePage:!1,title:"Organisation Units",description:"Organisationunit object includes the following keys.",source:"@site/docs/developers/metadata/organisationUnits.md",sourceDirName:"developers/metadata",slug:"/developers/metadata/ou",permalink:"/hris-api-docs/docs/developers/metadata/ou",editUrl:"https://github.com/udsm-dhis2-lab/hris-api-docs/blob/main/docs/developers/metadata/organisationUnits.md",version:"current",sidebar_label:"Organisation Units",frontMatter:{id:"ou",title:"Organisation Units",sidebar_label:"Organisation Units"},sidebar:"docs",previous:{title:"Forms",permalink:"/hris-api-docs/docs/developers/metadata/forms"},next:{title:"Indicators",permalink:"/hris-api-docs/docs/developers/metadata/indicators"}},d=[{value:"Adding OrganisationUnits",id:"adding-organisationunits",children:[{value:"Adding organisationUnit with specified ID",id:"adding-organisationunit-with-specified-id",children:[]},{value:"Adding child OrganisationUnits",id:"adding-child-organisationunits",children:[]}]},{value:"Get a list of OrganisationUnits",id:"get-a-list-of-organisationunits",children:[{value:"Get One OrganisationUnit By ID",id:"get-one-organisationunit-by-id",children:[]},{value:"Filter OrganisationUnits",id:"filter-organisationunits",children:[]},{value:"Get only desired fields",id:"get-only-desired-fields",children:[]}]},{value:"Updating OrganisationUnits",id:"updating-organisationunits",children:[{value:"Updating with ID.",id:"updating-with-id",children:[]},{value:"Updating with code",id:"updating-with-code",children:[]}]},{value:"Deleting organisationUnit",id:"deleting-organisationunit",children:[{value:"Deleting with organisationUnit id.",id:"deleting-with-organisationunit-id",children:[]},{value:"Deleting with organisationUnit code.",id:"deleting-with-organisationunit-code",children:[]}]}],s={toc:d};function u(n){var e=n.components,t=(0,i.Z)(n,r);return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"organisationunit-object-includes-the-following-keys"},"Organisationunit object includes the following keys."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier(Autogenerated)"),(0,l.kt)("td",{parentName:"tr",align:null},"Autogenerated"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},"13 varying characters ",(0,l.kt)("br",null)," used for CRUD operations"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"String(UID)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique value that can also ",(0,l.kt)("br",null)," be used for CRUD operations"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the name of a particular entity"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shortName"),(0,l.kt)("td",{parentName:"tr",align:null},"OrganisationUnits short name"),(0,l.kt)("td",{parentName:"tr",align:null},"YES"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"Overview of the entity ",(0,l.kt)("br",null)," and all related details"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"active"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit's current ",(0,l.kt)("br",null)," operation status"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit's parent of any"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit's date of creation"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastupdated"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit's date for when it was last updated"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publicAccess"),(0,l.kt)("td",{parentName:"tr",align:null},"If the Organisationunit has public access ",(0,l.kt)("br",null)," within the system"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalAccess"),(0,l.kt)("td",{parentName:"tr",align:null},"If the Organisationunit has external access ",(0,l.kt)("br",null)," outside the system"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closingDate"),(0,l.kt)("td",{parentName:"tr",align:null},"The closing date of the Organisationunit if it was closed"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"openingDate"),(0,l.kt)("td",{parentName:"tr",align:null},"opening date of the Organisationunit"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"geoCode"),(0,l.kt)("td",{parentName:"tr",align:null},"Geo location code of the Organisationunit"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"GeoJson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"coordinates"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit coordinates"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"featureType"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the Organisationunit's feature coordinate"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit's address"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contactPerson"),(0,l.kt)("td",{parentName:"tr",align:null},"Organisationunit's contact person if any."),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phoneNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact person's phone number"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"Number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact person's address"),(0,l.kt)("td",{parentName:"tr",align:null},"NO"),(0,l.kt)("td",{parentName:"tr",align:null},"String")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"adding-organisationunits"},"Adding OrganisationUnits"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"New Organisationunits in the system can be added to the list of organisationunits. ",(0,l.kt)("inlineCode",{parentName:"p"},"NOTE:")," All Organisationunits containt a unique ",(0,l.kt)("inlineCode",{parentName:"p"},"code"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Payload")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},' {\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response On Success")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "A4f2Ty8QDVkQY",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true,\n  "created": "2020-12-23T07:23:01.000Z",\n  "lastUpdated": "2020-12-23T07:23:01.000Z"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A unique identifiable can be explicitly defined as ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," if there is a need of keeping memory of it otherwise the system will create one automatically. Unique identifiers are varying characters with strictly 13 characters of length.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"IDs can be generated from the system as follows"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/system/id\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This generates one ID",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/system/id?limit=4\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This generates a list of 4 IDs.",(0,l.kt)("br",null),"> Limit can be defined for a desired number of IDS")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "codes": [\n    "R1LrM6EgpZFO4",\n    "zlubCRjvcGJ1b",\n    "DDAVHQaLekWBt",\n    "Xm7iba5dFpuZF"\n  ]\n}\n')),(0,l.kt)("h3",{id:"adding-organisationunit-with-specified-id"},"Adding organisationUnit with specified ID"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Payload")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'  {\n  "id": "R1LrM6EgpZFO4",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "R1LrM6EgpZFO4",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "code": "MOHCDGEC",\n  "active": true,\n  "created": "2020-12-23T07:23:54.000Z",\n  "lastUpdated": "2020-12-23T07:23:54.000Z"\n}\n')),(0,l.kt)("h3",{id:"adding-child-organisationunits"},"Adding child OrganisationUnits"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A child organisationUnit can be added to a list contain a parent to that child.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"These can be added by including the ",(0,l.kt)("inlineCode",{parentName:"li"},"parent ID")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"parent code"))),(0,l.kt)("h4",{id:"adding-with-parent-id"},"Adding with parent ID"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Payload")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "code": "REGION",\n    "name": "The Region",\n    "description": "The Region Details",\n    "shortName": "Region",\n    "active": true,\n    "parent": {\n        "id":"R1LrM6EgpZFO4"\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Reponse")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "Kehdpt5FnIb2N",\n  "created": "2020-12-23T09:06:21.000Z",\n  "lastUpdated": "2020-12-23T09:06:21.000Z",\n  "code": "REGION",\n  "name": "The Region",\n  "description": "The Region Details",\n  "shortName": "Region",\n  "active": true,\n  "parent": {\n    "id": "R1LrM6EgpZFO4",\n    "created": "2020-12-23T07:23:54.000Z",\n    "lastUpdated": "2020-12-23T07:23:54.000Z",\n    "code": "MOHCDGEC0",\n    "name": "Ministry Of Health",\n    "description": "Ministry of Health and Social welfare",\n    "shortName": "MOHCDGEC",\n    "active": true\n  }\n}\n')),(0,l.kt)("h4",{id:"adding-with-parent-code"},"Adding with parent CODE"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Payload")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "code": "REGION",\n    "name": "The Region",\n    "description": "The Region Details",\n    "shortName": "Region",\n    "active": true,\n    "parent": {\n        "id":"MOHCDGEC0"\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Reponse")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "Kehdpt5FnIb2N",\n  "created": "2020-12-23T09:06:21.000Z",\n  "lastUpdated": "2020-12-23T09:06:21.000Z",\n  "code": "REGION",\n  "name": "The Region",\n  "description": "The Region Details",\n  "shortName": "Region",\n  "active": true,\n  "parent": {\n    "id": "R1LrM6EgpZFO4",\n    "created": "2020-12-23T07:23:54.000Z",\n    "lastUpdated": "2020-12-23T07:23:54.000Z",\n    "code": "MOHCDGEC0",\n    "name": "Ministry Of Health",\n    "description": "Ministry of Health and Social welfare",\n    "shortName": "MOHCDGEC",\n    "active": true\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response On Failure")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When posting fails, responses will differ depending on what caused the failure as follows:- ",(0,l.kt)("br",null))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Failure due to duplicates on unique organisationUnit properties ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"li"},"Response"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'        {\n          "error": "duplicate key value violates unique constraint \\"<Constraint name/identifier>\\""\n        }\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Missing Required Properties ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"li"},"Response"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'        {\n          "error": "null value in column \\"<Required Property>\\" violates not-null constraint"\n        }\n')),(0,l.kt)("h2",{id:"get-a-list-of-organisationunits"},"Get a list of OrganisationUnits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A list of OrganisationUnits includes all levels of organisationunits in the system including, Regions, Districts, Facilities and all other levels.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 2,\n    "total": 10,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": [\n   {\n      "id": "zlubCRjvcGJ1b",\n      "created": "2013-11-17T22:01:53.000Z",\n      "lastUpdated": "2017-11-07T13:01:47.000Z",\n      "code": "MOHCDGEC",\n      "name": "Ministry Of Health",\n      "description": "Ministry of Health and Social welfare",\n      "shortName": "MOHCDGEC",\n      "active": true,\n      "level": 1,\n      "path": "/zlubCRjvcGJ1b"\n    },\n    {\n      "id": "Xm7iba5dFpuZF",\n      "created": "2013-11-17T22:01:53.000Z",\n      "lastUpdated": "2013-11-17T22:01:53.000Z",\n      "code": "referralhosps",\n      "name": "Referral Hospitals",\n      "description": "Referral Hospitals",\n      "shortName": "referralhosps",\n      "active": true,\n      "level": 2,\n      "path": "/zlubCRjvcGJ1b/Xm7iba5dFpuZF",\n      "parent": {\n        "id": "zlubCRjvcGJ1b",\n        "created": "2013-11-17T22:01:53.000Z",\n        "lastUpdated": "2017-11-07T13:01:47.000Z",\n        "code": "MOHCDGEC",\n        "name": "Ministry Of Health",\n        "description": "Ministry of Health and Social welfare",\n        "shortName": "MOHCDGEC",\n        "active": true,\n        "level": 1,\n        "path": "/zlubCRjvcGJ1b"\n      }\n    }]\n}\n')),(0,l.kt)("h3",{id:"get-one-organisationunit-by-id"},"Get One OrganisationUnit By ID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Details of one OrganisationUnit can retrieved by passing the ID of that OrganisationUnit if available in the system (/api/organisationUnits/ID)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits/zlubCRjvcGJ1b\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "id": "zlubCRjvcGJ1b",\n  "created": "2013-11-17T22:01:53.000Z",\n  "lastUpdated": "2017-11-07T13:01:47.000Z",\n  "code": "MOHCDGEC",\n  "name": "Ministry Of Health",\n  "description": "Ministry of Health and Social welfare",\n  "shortName": "MOHCDGEC",\n  "active": true,\n  "level": 1,\n  "path": "/zlubCRjvcGJ1b"\n}\n')),(0,l.kt)("h3",{id:"filter-organisationunits"},"Filter OrganisationUnits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Filtering of OrganisationUnits is performed by passing any property of the OrganisationUnits in the structure of the endpoint below.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits?filter=shortName:eq:MOHCDGEC\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response on Success")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "total": 1,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": [\n    {\n      "id": "zlubCRjvcGJ1b",\n      "created": "2013-11-17T22:01:53.000Z",\n      "lastUpdated": "2017-11-07T13:01:47.000Z",\n      "code": "MOHCDGEC",\n      "name": "Ministry Of Health",\n      "description": "Ministry of Health and Social welfare",\n      "shortName": "MOHCDGEC",\n      "active": true,\n      "level": 1,\n      "path": "/zlubCRjvcGJ1b"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response on No Data")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 0,\n    "total": 0,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": []\n}\n')),(0,l.kt)("h3",{id:"get-only-desired-fields"},"Get only desired fields"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Organisationunits endpoint can be filtered to only include fields you might want to use.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"/api/organisationUnits?fields=id,name,parent\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "pager": {\n    "page": 1,\n    "pageSize": 100,\n    "pageCount": 2,\n    "total": 2,\n    "nextPage": "/api/organisationUnits?page=2"\n  },\n  "organisationUnits": [\n    {\n      "id": "zlubCRjvcGJ1b",\n      "name": "Ministry Of Health"\n    },\n    {\n      "id": "Xm7iba5dFpuZF",\n      "name": "Referral Hospitals",\n      "parent": {\n        "id": "zlubCRjvcGJ1b",\n        "created": "2013-11-17T22:01:53.000Z",\n        "lastUpdated": "2017-11-07T13:01:47.000Z",\n        "code": "MOHCDGEC",\n        "name": "Ministry Of Health",\n        "description": "Ministry of Health and Social welfare",\n        "shortName": "MOHCDGEC",\n        "active": true,\n        "level": 1,\n        "path": "/zlubCRjvcGJ1b"\n      }\n    }]\n}\n\n')),(0,l.kt)("p",null," ",(0,l.kt)("strong",null,"NOTE"),": All filtering mechanisms, can be combined to produce a lobust search strategy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Available search and filter Operators")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Types"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eq"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," enum ","|"," collection (checks for size) ","|"," date"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Equality")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"like"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Case sensitive string, match anywhere")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ilike"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Case insensitive string, match anywhere")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"in"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," boolean ","|"," integer ","|"," float ","|"," date"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Find objects matching 1 or more values")))),(0,l.kt)("h2",{id:"updating-organisationunits"},"Updating OrganisationUnits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updating an organisationUnit can be performed in two ways")),(0,l.kt)("h3",{id:"updating-with-id"},"Updating with ID."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"    /api/organisationUnits/Xm7iba5dFpuZF\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Where Xm7iba5dFpuZF is the organisationUnit ID",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Sample Payload")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'    {\n      "name": "Referral Hospitals in Tanzania"\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'        {\n      "message": "Item with id Xm7iba5dFpuZF updated successfully.",\n      "payload": {\n        "id": "Xm7iba5dFpuZF",\n        "created": "2013-11-17T22:01:53.000Z",\n        "lastUpdated": "2020-12-24T11:37:08.000Z",\n        "code": "referralhosps",\n        "name": "Referral Hospitals in Tanzania",\n        "description": "Referral Hospitals",\n        "shortName": "referralhosps",\n        "active": true,\n        "level": 2,\n        "path": "/zlubCRjvcGJ1b/Xm7iba5dFpuZF"\n      }\n    }\n')),(0,l.kt)("h3",{id:"updating-with-code"},"Updating with code"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"    /api/organisationUnits/MOHCDGEC\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Where MOHCDGEC is the organisationUnit code.",(0,l.kt)("br",null),"`Sample Payload`")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'    {\n       "name": "Ministry Of Health (MOHCDGEC)""\n    }\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'       {\n          "message": "Item with code MOHCDGEC updated successfully.",\n          "payload": {\n          "id": "zlubCRjvcGJ1b",\n          "created": "2013-11-17T22:01:53.000Z",\n          "lastUpdated": "2020-12-24T13:05:09.000Z",\n          "code": "MOHCDGEC",\n          "name": "Ministry Of Health (MOHCDGEC)",\n          "description": "Ministry of Health and Social welfare",\n          "shortName": "MOHCDGEC",\n          "active": true,\n          "level": 1,\n          "path": "/zlubCRjvcGJ1b"\n      }\n     }\n')),(0,l.kt)("h2",{id:"deleting-organisationunit"},"Deleting organisationUnit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Deleting organisationUnit can be done in two ways like updating depending on what the user has access to. ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTE:")," To avoid orphans in deleting organisationUnits, deleting does not cascade so if you want to delete a parent, make sure it does not have any children.")),(0,l.kt)("h3",{id:"deleting-with-organisationunit-id"},"Deleting with organisationUnit id."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"    /api/organisationUnits/DDAVHQaLekWBt\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Where ",(0,l.kt)("inlineCode",{parentName:"li"},"DDAVHQaLekWBt")," is the organisationUnit ID",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'          {\n          "message": "Object with id DDAVHQaLekWBt deleted successfully",\n          "payload": {\n          "id": "DDAVHQaLekWBt",\n          "created": "2014-01-05T23:20:13.000Z",\n          "lastUpdated": "2020-05-18T11:32:06.000Z",\n          "code": "19D90-10",\n          "name": "Aga Khan Health Center",\n          "shortName": "Aga Khan Health Center",\n          "active": true,\n          "openingDate": "1899-12-31",\n          "coordinates": "[36.68944,-3.37077]",\n          "level": 5,\n          "path": "/zlubCRjvcGJ1b/52893cd1ba688/52c9be76ee331/52c9be77b8514/DDAVHQaLekWBt"\n        }\n      }\n')),(0,l.kt)("h3",{id:"deleting-with-organisationunit-code"},"Deleting with organisationUnit code."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Endpoint")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"     /api/organisationUnits/19D90-10\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Where 19D90-10 is the organisationUnit CODE",(0,l.kt)("br",null))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JSON"},'          {\n          "message": "Object with code 19D90-10 deleted successfully",\n          "payload": {\n          "id": "DDAVHQaLekWBt",\n          "created": "2014-01-05T23:20:13.000Z",\n          "lastUpdated": "2020-05-18T11:32:06.000Z",\n          "code": "19D90-10",\n          "name": "Aga Khan Health Center",\n          "shortName": "Aga Khan Health Center",\n          "active": true,\n          "openingDate": "1899-12-31",\n          "coordinates": "[36.68944,-3.37077]",\n          "level": 5,\n          "path": "/zlubCRjvcGJ1b/52893cd1ba688/52c9be76ee331/52c9be77b8514/DDAVHQaLekWBt"\n        }\n      }\n')))}u.isMDXComponent=!0}}]);