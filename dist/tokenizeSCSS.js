tokenizeSCSS=function(){const t=45,e=t=>t>=48&&t<=57,c=e=>d(e)||e>=48&&e<=57||e===t,d=t=>95===t||t>=128||t>=65&&t<=90||t>=97&&t<=122,a=t=>9===t||10===t||12===t||13===t||32===t,o=(t,e)=>92===t&&!a(e),{fromCharCode:i}=String,r=i=>{switch(!0){case 47===i.codeAt0:if(42===i.codeAt1)return n(i);break;case a(i.codeAt0):return u(i);case 34===i.codeAt0:case 39===i.codeAt0:return s(i);case 35===i.codeAt0:if(c(i.codeAt1))return{tick:i.tick,type:7,code:-1,lead:A(i),data:A(i)+k(i),tail:""};if(o(i.codeAt1,i.codeAt2))return{tick:i.tick,type:7,code:-1,lead:A(i),data:A(i)+A(i)+k(i),tail:""};break;case 36===i.codeAt0:if(c(i.codeAt1))return{tick:i.tick,type:16,code:-1,lead:A(i),data:A(i)+k(i),tail:""};if(o(i.codeAt1,i.codeAt2))return{tick:i.tick,type:16,code:-1,lead:A(i),data:A(i)+A(i)+k(i),tail:""};break;case 92===i.codeAt0:if(o(i.codeAt0,i.codeAt1))return l(i,{tick:i.tick,type:4,code:-1,lead:"",data:A(i)+A(i)+A(i)+k(i),tail:""});break;case d(i.codeAt0):return l(i,{tick:i.tick,type:4,code:-1,lead:"",data:A(i)+k(i),tail:""});case i.codeAt0===t:if(i.codeAt1===t||d(i.codeAt1))return l(i,{tick:i.tick,type:4,code:-1,lead:"",data:A(i)+A(i)+k(i),tail:""});if(o(i.codeAt1,i.codeAt2))return l(i,{tick:i.tick,type:4,code:-1,lead:"",data:A(i)+A(i)+A(i)+k(i),tail:""});if(e(i.codeAt1))return{tick:i.tick,type:9,code:-1,lead:"",data:A(i)+A(i)+f(i),tail:b(i)};if(46===i.codeAt1&&e(i.codeAt2))return{tick:i.tick,type:9,code:-1,lead:"",data:A(i)+A(i)+A(i)+y(i),tail:b(i)};case 46===i.codeAt0:if(e(i.codeAt1))return{tick:i.tick,type:9,code:-1,lead:"",data:A(i)+A(i)+y(i),tail:b(i)};break;case 43===i.codeAt0:if(e(i.codeAt1))return{tick:i.tick,type:9,code:-1,lead:"",data:A(i)+A(i)+f(i),tail:b(i)};if(46===i.codeAt1&&e(i.codeAt2))return{tick:i.tick,type:9,code:-1,lead:"",data:A(i)+A(i)+A(i)+y(i),tail:b(i)};break;case e(i.codeAt0):return{tick:i.tick,type:9,code:-1,lead:"",data:A(i)+f(i),tail:b(i)};case 64===i.codeAt0:if(i.codeAt1===t){if(i.codeAt2===t)return{tick:i.tick,type:6,code:-1,lead:A(i),data:A(i)+A(i)+k(i),tail:""};if(d(i.codeAt2))return{tick:i.tick,type:6,code:-1,lead:A(i),data:A(i)+A(i)+k(i),tail:""};if(o(i.codeAt2,i.codeAt3))return{tick:i.tick,type:6,code:-1,lead:A(i),data:A(i)+A(i)+A(i)+k(i),tail:""}}if(d(i.codeAt1))return{tick:i.tick,type:6,code:-1,lead:A(i),data:A(i)+k(i),tail:""};if(o(i.codeAt1,i.codeAt2))return{tick:i.tick,type:6,code:-1,lead:A(i),data:A(i)+A(i)+k(i),tail:""}}return{tick:i.tick,type:1,code:i.codeAt0,lead:"",data:A(i),tail:""}},A=t=>{const e=i(t.codeAt0);return t.next(),e},k=t=>{let e="";for(;;){switch(!0){case o(t.codeAt0,t.codeAt1):e+=i(t.codeAt0),t.next();case c(t.codeAt0):e+=i(t.codeAt0),t.next();continue}break}return e},l=(t,e)=>(40===t.codeAt0&&(e.code=40,e.type=5,e.lead=e.data,e.data="(",t.next()),e),n=t=>{const e={tick:t.tick,type:2,code:-1,lead:"/*",data:"",tail:""};for(t.next(),t.next();t.tick<t.size;){if(42===t.codeAt0&&47===t.codeAt1){e.tail="*/",t.next(),t.next();break}e.data+=A(t)}return e},u=t=>{const e={tick:t.tick,type:3,code:-1,lead:"",data:A(t),tail:""};for(;t.tick<t.size&&a(t.codeAt0);)e.data+=A(t);return e},s=t=>{const{codeAt0:e}=t,c={tick:t.tick,type:8,code:-1,lead:"",data:A(t),tail:""};for(;t.tick<t.size;){switch(!0){case o(t.codeAt0,t.codeAt1):c.data+=A(t);default:c.data+=A(t);continue;case t.codeAt0===e:c.tail=A(t)}break}return c},f=t=>{let c="";return c+=p(t),46===t.codeAt0&&e(t.codeAt1)&&(c+=A(t)+A(t)+p(t)),c+y(t)},y=c=>{let d="";if(d+=p(c),69===c.codeAt0||101===c.codeAt0)switch(!0){case 43===c.codeAt1||c.codeAt1===t:if(!e(c.codeAt2))break;d+=A(c);case e(c.codeAt1):d+=A(c)+A(c)+p(c)}return d},p=t=>{let c="";for(;t.tick<t.size&&e(t.codeAt0);)c+=A(t);return c},b=e=>e.codeAt0===t?e.codeAt1===t||d(e.codeAt1)?A(e)+A(e)+k(e):o(e.codeAt1,e.codeAt2)?A(e)+A(e)+A(e)+k(e):"":d(e.codeAt0)?A(e)+k(e):o(e.codeAt0,e.codeAt1)?A(e)+A(e)+k(e):"";return t=>{let e=t.length,c=0,d={data:t,size:e,tick:c,codeAt0:c+0<e?t.charCodeAt(c+0):-1,codeAt1:c+1<e?t.charCodeAt(c+1):-1,codeAt2:c+2<e?t.charCodeAt(c+2):-1,codeAt3:c+3<e?t.charCodeAt(c+3):-1,next:()=>(d.tick=++c,d.codeAt0=d.codeAt1,d.codeAt1=d.codeAt2,d.codeAt2=d.codeAt3,d.codeAt3=c+3<e?t.charCodeAt(c+3):-1,c>=e)};const a=()=>d.tick>=d.size?{done:!0,value:{tick:d.tick,type:0,code:-2,lead:"",data:"",tail:""}}:{done:!1,value:r(d)};return a[Symbol.iterator]=()=>({next:a}),a}}()
