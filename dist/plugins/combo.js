fmd("combo","cache lang event config module assets plugin when loader preload".split(" "),function(t,g,l,d,u,v,m,w,x,y){var z=t.combo={},A=/\.css(?:\?|$)/i,B=/(^\w+\:\/\/[\w\-\.:]+\/)(.+)/i,k=["??",","],n=1500,p=function(a){var b=k[0],c=k[1];return b&&0<a.indexOf(b)||c&&0<a.indexOf(c)},q=function(a,b){1<a.included.length||"_combo_non"===a.plugin?(l.emit("stamp",a),z[a.url]=a,b.push(a)):delete a.included[0].requested},r=function(a){if(!(2>a.length)){d.get("comboSyntax")&&(k=d.get("comboSyntax"));d.get("comboMaxLength")&&
(n=d.get("comboMaxLength"));for(var b,c,e=[],f=0;f<a.length;f++)b=a[f],"async"!==b.plugin&&"non"!==b.plugin||(b.comboed||b.state||b.preState)||(A.test(b.url)&&!p(b.url)?e.push(b):b.url===b.id?(c=u.get(b.id))&&!c.compiled&&g.forEach(c.deps,function(b){a.push(v.make(b,c))}):p(b.url)||e.push(b));e.length&&C(e,a)}},C=function(a,b){var c,e,f,d,h={};g.forEach(a,function(a){var d=a.url.split("?fmd.stamp")[0],g=d.substring(d.lastIndexOf(".")),d=d.match(B);a._host=d[1];a._path=d[2];c=[g,a._host].join("_");
e=h[c]||(h[c]={url:a._host,plugin:"_combo",included:[]});f=e.url+k[e.url===a._host?0:1]+a._path;f.length>n&&(q(e,b),delete h[c],e=h[c]={url:a._host,plugin:"_combo",included:[]},f=e.url+k[e.url===a._host?0:1]+a._path);e.url=f;e.included.push(a);"non"===a.plugin&&(e.plugin="_combo_non",a.plugin="async");a.comboed=!0;a.requested=!0});for(d in h)q(h[d],b)},s=function(a){g.forEach(a.included,function(a){l.emit("requestComplete",a)})},D=function(a){w.apply(null,g.map(this.group,function(a){return function(c){x(a,
function(){s(a);c.resolve()})}})).then(a)},E=function(a){var b=this.group;y(b,function(){g.forEach(b,function(a){s(a)});a()})};d.register({keys:"combo",rule:function(a,b,c){c=!!c;a!==c&&(this.combo=c,!0===c?(l.on("fetch",r),m.register("_combo",D),m.register("_combo_non",E)):(l.off("fetch",r),m.register("_combo",null),m.register("_combo_non",null)))}}).set({combo:!0})});
