fmd("request",["global","config","event"],function(c,l,h){var g=c.document,n=c.setTimeout,r=/\.css(?:\?|$)/i,s=/loaded|complete/,t=/security|denied/i,u=/mobile/;c=c.navigator.userAgent.toLowerCase();var m=c.match(/.*webkit\/?(\d+)\..*/),v=(m?536>1*m[1]:!1)||!m&&u.test(c),w=g&&(g.head||g.getElementsByTagName("head")[0]||g.documentElement),p=function(a,d,e){var b=!1,k,f;try{if(k=a.sheet)b=(f=k.cssRules)?0<f.length:void 0!==f}catch(c){b=t.test(c.message)}n(function(){b?(d&&d(),h.emit("requested",e)):
p(a,d,e)},20)},q=function(a,d,e,b,c){function f(){a.onload=a.onreadystatechange=a.onerror=null;c||l.get("debug")||a.parentNode&&a.parentNode.removeChild(a);a=void 0;d&&d()}e?(a.onload=function(){f();h.emit("requested",b)},a.onerror=function(){f();h.emit("requestError",b)}):a.onreadystatechange=function(){s.test(a.readyState)&&(f(),h.emit("requested",b))}},x=function(a,d,c,b){!c||v?n(function(){p(a,d,b)},1):q(a,d,c,b,!0)};return function(a,c){var e=r.test(a.url),b;e?(b=g.createElement("link"),b.rel=
"stylesheet",b.href=a.url):(b=g.createElement("script"),b.async=!0,b.src=a.url);l.get("charset")&&(b.charset=l.get("charset"));h.emit("createNode",b,a);var k="onload"in b;e?x(b,c,k,a):q(b,c,k,a);w.appendChild(b)}});
