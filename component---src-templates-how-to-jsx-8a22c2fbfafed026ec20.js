"use strict";(self.webpackChunkshort_bear=self.webpackChunkshort_bear||[]).push([[827],{2125:function(e,t,r){r.d(t,{M:function(){return o}});var n=r(7294),a=r(5505);function o(e){var t=e.children,r=e.className;return n.createElement("div",{className:(0,a.Z)(r,"prose dark:prose-invert")},t)}},3118:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.title,r=e.description,a=e.snippet;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("meta",{name:"description",content:r}),a?n.createElement("script",{type:"application/ld+json"},JSON.stringify(a)):null)}},5036:function(e,t,r){r.r(t),r.d(t,{Head:function(){return w},default:function(){return k}});var n=r(7294),a=r(1597),o=r(3118),i=r(5617),l=r(2125),c=function(e){return e.match(/^https:\/\/youtu.be\/(.+)$/)[1]},m=function(e){return"https://www.youtube.com/watch?v="+c(e)},s=function(e){return"https://www.youtube.com/embed/"+c(e)},u=function(e){var t=e.url;return/embed/.test(t)||(t=s(t)),n.createElement("iframe",{width:"560",height:"315",src:t+"?controls=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},d=r(3741),p=r(7437),f=r.n(p),h=function(e){return(new(f().Converter)).makeHtml(e)},g=function(e){return"PT"+(0,d.O)(e)+"M"},b=function(e){var t,r=e.frontmatter,n=r.date,a=r.excerpt,o=r.image,i=r.steps,l=r.title,c=r.video,u=e.fields.slug,d=(t=m(c.url),function(e,r){var n=e.clip,a=e.name,o=n.endOffset,i=n.startOffset;return{"@type":"Clip","@id":"step"+r,name:a,startOffset:i,endOffset:o,url:t+"&t="+i}}),p=function(e){return function(t,r){var n=t.name,a=t.text,o=t.image;return console.log({i:r}),{"@type":"HowToStep",url:"https://shortbear.com"+e+"#step"+r,name:n,text:a,image:o="https://shortbear.com/images/"+o,video:{"@id":"step"+r}}}}(u);return{"@context":"https://schema.org","@type":"HowTo",name:l,totalTime:g(c.duration),image:{"@type":"ImageObject",url:"https://shortbear.com/images/"+o},video:{"@type":"VideoObject",name:l,description:a,thumbnailUrl:"https://shortbear.com/images/"+c.thumbnailUrl,contentUrl:m(c.url),embedUrl:s(c.url),uploadDate:n,duration:g(c.duration),hasPart:i.map(d)},step:i.map(p)}};function v(e){return n.createElement("svg",Object.assign({viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e),n.createElement("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))}var w=function(e){var t=e.data.howTo;return n.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.excerpt,snippet:b(t)})},k=function(e){var t=e.data.howTo;return n.createElement(n.Fragment,null,n.createElement(i.W,{className:"mt-16 lg:mt-32"},n.createElement("div",{className:"xl:relative"},n.createElement("div",{className:"mx-auto max-w-2xl"},n.createElement(a.Link,{to:"/"+t.frontmatter.category,"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"},n.createElement(v,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})),n.createElement("article",null,n.createElement("header",{className:"flex flex-col"},n.createElement("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"},t.frontmatter.title),n.createElement("time",{dateTime:t.frontmatter.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"},n.createElement("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),n.createElement("span",{className:"ml-3"},(0,d.p)(t.frontmatter.date)))),n.createElement(l.M,{className:"mt-8"},n.createElement("h2",null,"TL;DR"),n.createElement("p",null,"Watch this ",(0,d.O)(t.frontmatter.video.duration)," minute clip. Scroll down to see each step with code samples."),n.createElement(u,{url:t.frontmatter.video.url}),t.frontmatter.steps.map((function(e,t){return n.createElement("div",{key:t,id:"step"+t},n.createElement("h2",null,"Step ",t+1,": ",e.name),n.createElement("p",null,e.text),n.createElement("div",{dangerouslySetInnerHTML:{__html:h(e.body)}}))}))))))))}},3741:function(e,t,r){r.d(t,{O:function(){return a},p:function(){return n}});var n=function(e){return new Date(e).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})},a=function(e){return Math.floor(e/60)+1}}}]);
//# sourceMappingURL=component---src-templates-how-to-jsx-8a22c2fbfafed026ec20.js.map