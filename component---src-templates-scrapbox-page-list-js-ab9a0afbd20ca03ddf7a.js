(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return b});var n=a(9),r=(a(0),a(150)),i=a(164),c=a(163),o=a.n(c),s=a(213),u=a.n(s),l=a(190),d={name:"1ruxp1v",styles:"padding:20px;"},p={name:"lvyu5j",styles:"margin-right:10px;"};t.default=function(e){var t=e.pageContext,a=t.previousPage,c=t.nextPage,s=e.data.allScrapboxPage.edges;return Object(n.a)(i.a,null,Object(n.a)(o.a,{container:!0,direction:"row",spacing:16,justifyContent:"center"},Object(n.a)(l.a,{pages:s})),Object(n.a)(o.a,{container:!0,direction:"row",justify:"center",spacing:16},Object(n.a)(o.a,{item:!0,css:d},a?Object(n.a)(r.a,{to:"/"+a,css:p},Object(n.a)(u.a,{variant:"contained",color:"primary"},"Prev.")):"",c?Object(n.a)(r.a,{to:"/"+c},Object(n.a)(u.a,{variant:"contained",color:"primary"},"Next")):"")))};var b="1038231665"},150:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(9),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(34),u=a.n(s);a.d(t,"a",function(){return u.a});a(155);var l=i.a.createContext({}),d=function(e){return Object(n.a)(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);a(57);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(58),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Scrapmedia"}}}}},164:function(e,t,a){"use strict";var n=a(9),r=a(162),i=a(0),c=a.n(i),o=a(4),s=a.n(o),u=a(150),l=function(e){var t=e.siteTitle;return Object(n.a)("header",{style:{background:"mediumseagreen",marginBottom:"1.45rem"}},Object(n.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},Object(n.a)("h1",{style:{margin:0}},Object(n.a)(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var d=l,p=(a(168),a(169)),b=Object(p.createMuiTheme)({palette:{primary:{main:"#53B371",contrastText:"#fff"}},typography:{useNextVariants:!0},root:{display:"flex",justifyContent:"center",flexWrap:"wrap"}}),m=function(e){var t=e.children;return Object(n.a)(u.b,{query:"755544856",render:function(e){return Object(n.a)(c.a.Fragment,null,Object(n.a)(p.MuiThemeProvider,{theme:b},Object(n.a)(d,{siteTitle:e.site.siteMetadata.title}),Object(n.a)("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},Object(n.a)("main",null,t),Object(n.a)("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",Object(n.a)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},data:r})};m.propTypes={children:s.a.node.isRequired};t.a=m},190:function(e,t,a){"use strict";var n=a(9),r=(a(0),a(150)),i=a(163),c=a.n(i),o=a(174),s=a.n(o),u=a(175),l=a.n(u),d={name:"54arve",styles:"height:13.5rem;position:relative;"},p={name:"1l87wo",styles:"display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;"};t.a=function(e){return e.pages.map(function(e){var t=e.node;return Object(n.a)(c.a,{item:!0,md:3,sm:6,alignItems:"stretch"},Object(n.a)(s.a,null,Object(n.a)(l.a,{css:d},Object(n.a)(r.a,{className:"stretched-link",to:"/"+t.title},Object(n.a)("div",{key:t.id},Object(n.a)("div",{css:p},t.title))),t.image&&Object(n.a)("img",{src:t.image,alt:t.title}))))})}}}]);
//# sourceMappingURL=component---src-templates-scrapbox-page-list-js-ab9a0afbd20ca03ddf7a.js.map