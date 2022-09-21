"use strict";(self.webpackChunkshort_bear=self.webpackChunkshort_bear||[]).push([[423],{5054:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(3366),n=r(7294),c=r(5505),l=["children"],i=["as","decorate","className","children"];function s(e){return n.createElement("svg",Object.assign({viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e),n.createElement("path",{d:"M6.75 5.75 9.25 8l-2.5 2.25",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}function m(e){var t=e.as,r=void 0===t?"div":t,a=e.className,l=e.children;return n.createElement(r,{className:(0,c.Z)(a,"group relative flex flex-col items-start")},l)}m.Link=function(e){var t=e.children,r=(0,a.Z)(e,l);return n.createElement(n.Fragment,null,n.createElement("div",{className:"absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"}),n.createElement("a",r,n.createElement("span",{className:"absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"}),n.createElement("span",{className:"relative z-10"},t)))},m.Title=function(e){var t=e.as,r=void 0===t?"h2":t,a=e.href,c=e.children;return n.createElement(r,{className:"text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"},a?n.createElement(m.Link,{href:a},c):c)},m.Description=function(e){var t=e.children;return n.createElement("p",{className:"relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"},t)},m.Cta=function(e){var t=e.children;return n.createElement("div",{"aria-hidden":"true",className:"relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"},t,n.createElement(s,{className:"ml-1 h-4 w-4 stroke-current"}))},m.Eyebrow=function(e){var t=e.as,r=void 0===t?"p":t,l=e.decorate,s=void 0!==l&&l,m=e.className,o=e.children,d=(0,a.Z)(e,i);return n.createElement(r,Object.assign({className:(0,c.Z)(m,"relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",s&&"pl-3.5")},d),s&&n.createElement("span",{className:"absolute inset-y-0 left-0 flex items-center","aria-hidden":"true"},n.createElement("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"})),o)}},5929:function(e,t,r){r.d(t,{X:function(){return c}});var a=r(7294),n=r(5617);function c(e){var t=e.title,r=e.intro,c=e.children;return a.createElement(n.W,{className:"mt-16 sm:mt-32"},a.createElement("header",{className:"max-w-2xl"},a.createElement("h1",{className:"text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"},t),a.createElement("p",{className:"mt-6 text-base text-zinc-600 dark:text-zinc-400"},r)),a.createElement("div",{className:"mt-16 sm:mt-20"},c))}},4646:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(7294),n=r(8754),c=r(5054),l=r(5929),i=function(e){return new Date(e).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})};function s(e){var t=e.article;return a.createElement("article",{className:"md:grid md:grid-cols-4 md:items-baseline"},a.createElement(c.Z,{className:"md:col-span-3"},a.createElement(c.Z.Title,{href:t.fields.slug},t.frontmatter.title),a.createElement(c.Z.Eyebrow,{as:"time",dateTime:t.frontmatter.date,className:"md:hidden",decorate:!0},i(t.frontmatter.date)),a.createElement(c.Z.Description,null,t.frontmatter.excerpt),a.createElement(c.Z.Cta,null,"Read article")),a.createElement(c.Z.Eyebrow,{as:"time",dateTime:t.frontmatter.date,className:"mt-1 hidden md:block"},i(t.frontmatter.date)))}var m=function(e){var t=e.data,r=t.category,c=t.articles;return a.createElement(a.Fragment,null,a.createElement(n.Z,{title:r.frontmatter.title+" Tips, Tricks and Articles",description:r.frontmatter.excerpt}),a.createElement(l.X,{title:r.frontmatter.title,intro:r.frontmatter.excerpt},a.createElement("div",{className:"md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"},a.createElement("div",{className:"flex max-w-3xl flex-col space-y-16"},c.nodes.map((function(e){return a.createElement(s,{key:e.fields.slug,article:e})}))))))}}}]);
//# sourceMappingURL=component---src-templates-category-jsx-1b264fcae71bdaa9ea54.js.map