fmd("combo","cache lang event config module assets plugin when loader preload".split(" "),function(t,g,h,e,u,v,m,w,x,y){var z=t.combo={},A=/\.css(?:\?|$)/i,B=/(^\w+\:\/\/[\w\-\.:]+\/)(.+)/i,k=["??",","],n=1500,p=function(a){var b=k[0],c=k[1];return b&&0<a.indexOf(b)||c&&0<a.indexOf(c)},q=function(a,b){1<a.included.length||"_combo_non"===a.plugin?(h.emit("stamp",a),z[a.url]=a,b.push(a)):delete a.included[0].requested},r=function(a){if(!(2>a.length)){e.get("comboSyntax")&&(k=e.get("comboSyntax"));e.get("comboMaxLength")&&
(n=e.get("comboMaxLength"));for(var b,c,d=[],f=0;f<a.length;f++)b=a[f],"async"!==b.plugin&&"non"!==b.plugin||(b.comboed||b.state||b.preState)||(A.test(b.url)&&!p(b.url)?d.push(b):b.url===b.id?(c=u.get(b.id))&&!c.compiled&&g.forEach(c.deps,function(b){a.push(v.make(b,c))}):p(b.url)||d.push(b));d.length&&C(d,a)}},C=function(a,b){var c,d,f,e,l={},h=function(b,a){return l[b]={id:"",url:a._host,plugin:"_combo",included:[]}};g.forEach(a,function(a){var e=a.url.split("?fmd.stamp")[0],g=e.substring(e.lastIndexOf(".")),
e=e.match(B);a._host=e[1];a._path=e[2];c=[g,a._host].join("_");d=l[c]||h(c,a);f=d.url+k[d.url===a._host?0:1]+a._path;f.length>n&&(q(d,b),delete l[c],d=h(c,a),f=d.url+k[d.url===a._host?0:1]+a._path);d.id+=a.id+" ";d.url=f;d.included.push(a);"non"===a.plugin&&(d.plugin="_combo_non",a.plugin="async");a.comboed=!0;a.requested=!0});for(e in l)q(l[e],b)},s=function(a){g.forEach(a.included,function(a){h.emit("requestComplete",a)})},D=function(a){w.apply(null,g.map(this.group,function(a){return function(c){x(a,
function(){s(a);c.resolve()})}})).then(a)},E=function(a){var b=this.group;y(b,function(){g.forEach(b,function(a){s(a)});a()})};e.register({keys:"combo",rule:function(a,b,c){c=!!c;a!==c&&(this.combo=c,!0===c?(h.on("fetch",r),m.register("_combo",D),m.register("_combo_non",E)):(h.off("fetch",r),m.register("_combo",null),m.register("_combo_non",null)))}}).set({combo:!0})});
