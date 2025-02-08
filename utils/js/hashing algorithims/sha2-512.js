/*
 * [js-sha512]{@link https://github.com/emn178/js-sha512}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
!function(){"use strict";function h(h,t){t?(p[0]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=p[16]=p[17]=p[18]=p[19]=p[20]=p[21]=p[22]=p[23]=p[24]=p[25]=p[26]=p[27]=p[28]=p[29]=p[30]=p[31]=p[32]=0,this.blocks=p):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],384==h?(this.h0h=3418070365,this.h0l=3238371032,this.h1h=1654270250,this.h1l=914150663,this.h2h=2438529370,this.h2l=812702999,this.h3h=355462360,this.h3l=4144912697,this.h4h=1731405415,this.h4l=4290775857,this.h5h=2394180231,this.h5l=1750603025,this.h6h=3675008525,this.h6l=1694076839,this.h7h=1203062813,this.h7l=3204075428):256==h?(this.h0h=573645204,this.h0l=4230739756,this.h1h=2673172387,this.h1l=3360449730,this.h2h=596883563,this.h2l=1867755857,this.h3h=2520282905,this.h3l=1497426621,this.h4h=2519219938,this.h4l=2827943907,this.h5h=3193839141,this.h5l=1401305490,this.h6h=721525244,this.h6l=746961066,this.h7h=246885852,this.h7l=2177182882):224==h?(this.h0h=2352822216,this.h0l=424955298,this.h1h=1944164710,this.h1l=2312950998,this.h2h=502970286,this.h2l=855612546,this.h3h=1738396948,this.h3l=1479516111,this.h4h=258812777,this.h4l=2077511080,this.h5h=2011393907,this.h5l=79989058,this.h6h=1067287976,this.h6l=1780299464,this.h7h=286451373,this.h7l=2446758561):(this.h0h=1779033703,this.h0l=4089235720,this.h1h=3144134277,this.h1l=2227873595,this.h2h=1013904242,this.h2l=4271175723,this.h3h=2773480762,this.h3l=1595750129,this.h4h=1359893119,this.h4l=2917565137,this.h5h=2600822924,this.h5l=725511199,this.h6h=528734635,this.h6l=4215389547,this.h7h=1541459225,this.h7l=327033209),this.bits=h,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1}function t(t,i,s){var e=v(t);if(t=e[0],e[1]){for(var r,n=[],o=t.length,l=0,a=0;a<o;++a)(r=t.charCodeAt(a))<128?n[l++]=r:r<2048?(n[l++]=192|r>>>6,n[l++]=128|63&r):r<55296||r>=57344?(n[l++]=224|r>>>12,n[l++]=128|r>>>6&63,n[l++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++a)),n[l++]=240|r>>>18,n[l++]=128|r>>>12&63,n[l++]=128|r>>>6&63,n[l++]=128|63&r);t=n}t.length>128&&(t=new h(i,!0).update(t).array());var f=[],c=[];for(a=0;a<128;++a){var u=t[a]||0;f[a]=92^u,c[a]=54^u}h.call(this,i,s),this.update(c),this.oKeyPad=f,this.inner=!0,this.sharedMemory=s}var i="input is invalid type",s="object"==typeof window,e=s?window:{};e.JS_SHA512_NO_WINDOW&&(s=!1);var r=!s&&"object"==typeof self;!e.JS_SHA512_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?e=global:r&&(e=self);var n=!e.JS_SHA512_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof define&&define.amd,l=!e.JS_SHA512_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,a="0123456789abcdef".split(""),f=[-2147483648,8388608,32768,128],c=[24,16,8,0],u=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],y=["hex","array","digest","arrayBuffer"],p=[],d=Array.isArray;!e.JS_SHA512_NO_NODE_JS&&d||(d=function(h){return"[object Array]"===Object.prototype.toString.call(h)});var b=ArrayBuffer.isView;!l||!e.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW&&b||(b=function(h){return"object"==typeof h&&h.buffer&&h.buffer.constructor===ArrayBuffer});var v=function(h){var t=typeof h;if("string"===t)return[h,!0];if("object"!==t||null===h)throw new Error(i);if(l&&h.constructor===ArrayBuffer)return[new Uint8Array(h),!1];if(!d(h)&&!b(h))throw new Error(i);return[h,!1]},_=function(t,i){return function(s){return new h(i,!0).update(s)[t]()}},w=function(t){var i=_("hex",t);i.create=function(){return new h(t)},i.update=function(h){return i.create().update(h)};for(var s=0;s<y.length;++s){var e=y[s];i[e]=_(e,t)}return i},A=function(h,i){return function(s,e){return new t(s,i,!0).update(e)[h]()}},U=function(h){var i=A("hex",h);i.create=function(i){return new t(i,h)},i.update=function(h,t){return i.create(h).update(t)};for(var s=0;s<y.length;++s){var e=y[s];i[e]=A(e,h)}return i};h.prototype.update=function(h){if(this.finalized)throw new Error("finalize already called");var t=v(h);h=t[0];for(var i,s,e=t[1],r=0,n=h.length,o=this.blocks;r<n;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,this.block=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=o[16]=o[17]=o[18]=o[19]=o[20]=o[21]=o[22]=o[23]=o[24]=o[25]=o[26]=o[27]=o[28]=o[29]=o[30]=o[31]=o[32]=0),e)for(s=this.start;r<n&&s<128;++r)(i=h.charCodeAt(r))<128?o[s>>>2]|=i<<c[3&s++]:i<2048?(o[s>>>2]|=(192|i>>>6)<<c[3&s++],o[s>>>2]|=(128|63&i)<<c[3&s++]):i<55296||i>=57344?(o[s>>>2]|=(224|i>>>12)<<c[3&s++],o[s>>>2]|=(128|i>>>6&63)<<c[3&s++],o[s>>>2]|=(128|63&i)<<c[3&s++]):(i=65536+((1023&i)<<10|1023&h.charCodeAt(++r)),o[s>>>2]|=(240|i>>>18)<<c[3&s++],o[s>>>2]|=(128|i>>>12&63)<<c[3&s++],o[s>>>2]|=(128|i>>>6&63)<<c[3&s++],o[s>>>2]|=(128|63&i)<<c[3&s++]);else for(s=this.start;r<n&&s<128;++r)o[s>>>2]|=h[r]<<c[3&s++];this.lastByteIndex=s,this.bytes+=s-this.start,s>=128?(this.block=o[32],this.start=s-128,this.hash(),this.hashed=!0):this.start=s}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},h.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var h=this.blocks,t=this.lastByteIndex;h[32]=this.block,h[t>>>2]|=f[3&t],this.block=h[32],t>=112&&(this.hashed||this.hash(),h[0]=this.block,h[1]=h[2]=h[3]=h[4]=h[5]=h[6]=h[7]=h[8]=h[9]=h[10]=h[11]=h[12]=h[13]=h[14]=h[15]=h[16]=h[17]=h[18]=h[19]=h[20]=h[21]=h[22]=h[23]=h[24]=h[25]=h[26]=h[27]=h[28]=h[29]=h[30]=h[31]=h[32]=0),h[30]=this.hBytes<<3|this.bytes>>>29,h[31]=this.bytes<<3,this.hash()}},h.prototype.hash=function(){var h,t,i,s,e,r,n,o,l,a,f,c,y,p,d,b,v,_,w,A,U,S,B,g,k,z=this.h0h,O=this.h0l,m=this.h1h,x=this.h1l,N=this.h2h,J=this.h2l,j=this.h3h,E=this.h3l,H=this.h4h,I=this.h4l,R=this.h5h,C=this.h5l,K=this.h6h,P=this.h6l,D=this.h7h,F=this.h7l,M=this.blocks;for(h=32;h<160;h+=2)t=((A=M[h-30])>>>1|(U=M[h-29])<<31)^(A>>>8|U<<24)^A>>>7,i=(U>>>1|A<<31)^(U>>>8|A<<24)^(U>>>7|A<<25),s=((A=M[h-4])>>>19|(U=M[h-3])<<13)^(U>>>29|A<<3)^A>>>6,e=(U>>>19|A<<13)^(A>>>29|U<<3)^(U>>>6|A<<26),A=M[h-32],U=M[h-31],l=((S=M[h-14])>>>16)+(A>>>16)+(t>>>16)+(s>>>16)+((o=(65535&S)+(65535&A)+(65535&t)+(65535&s)+((n=((B=M[h-13])>>>16)+(U>>>16)+(i>>>16)+(e>>>16)+((r=(65535&B)+(65535&U)+(65535&i)+(65535&e))>>>16))>>>16))>>>16),M[h]=l<<16|65535&o,M[h+1]=n<<16|65535&r;var T=z,V=O,W=m,Y=x,q=N,G=J,L=j,Q=E,X=H,Z=I,$=R,hh=C,th=K,ih=P,sh=D,eh=F;for(b=W&q,v=Y&G,h=0;h<160;h+=8)t=(T>>>28|V<<4)^(V>>>2|T<<30)^(V>>>7|T<<25),i=(V>>>28|T<<4)^(T>>>2|V<<30)^(T>>>7|V<<25),s=(X>>>14|Z<<18)^(X>>>18|Z<<14)^(Z>>>9|X<<23),e=(Z>>>14|X<<18)^(Z>>>18|X<<14)^(X>>>9|Z<<23),_=(a=T&W)^T&q^b,w=(f=V&Y)^V&G^v,g=X&$^~X&th,k=Z&hh^~Z&ih,A=M[h],U=M[h+1],A=(l=((S=u[h])>>>16)+(A>>>16)+(g>>>16)+(s>>>16)+(sh>>>16)+((o=(65535&S)+(65535&A)+(65535&g)+(65535&s)+(65535&sh)+((n=((B=u[h+1])>>>16)+(U>>>16)+(k>>>16)+(e>>>16)+(eh>>>16)+((r=(65535&B)+(65535&U)+(65535&k)+(65535&e)+(65535&eh))>>>16))>>>16))>>>16))<<16|65535&o,U=n<<16|65535&r,S=(l=(_>>>16)+(t>>>16)+((o=(65535&_)+(65535&t)+((n=(w>>>16)+(i>>>16)+((r=(65535&w)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,sh=(l=(L>>>16)+(A>>>16)+((o=(65535&L)+(65535&A)+((n=(Q>>>16)+(U>>>16)+((r=(65535&Q)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o,eh=n<<16|65535&r,t=((L=(l=(S>>>16)+(A>>>16)+((o=(65535&S)+(65535&A)+((n=(B>>>16)+(U>>>16)+((r=(65535&B)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(Q=n<<16|65535&r)<<4)^(Q>>>2|L<<30)^(Q>>>7|L<<25),i=(Q>>>28|L<<4)^(L>>>2|Q<<30)^(L>>>7|Q<<25),s=(sh>>>14|eh<<18)^(sh>>>18|eh<<14)^(eh>>>9|sh<<23),e=(eh>>>14|sh<<18)^(eh>>>18|sh<<14)^(sh>>>9|eh<<23),_=(c=L&T)^L&W^a,w=(y=Q&V)^Q&Y^f,g=sh&X^~sh&$,k=eh&Z^~eh&hh,A=M[h+2],U=M[h+3],A=(l=((S=u[h+2])>>>16)+(A>>>16)+(g>>>16)+(s>>>16)+(th>>>16)+((o=(65535&S)+(65535&A)+(65535&g)+(65535&s)+(65535&th)+((n=((B=u[h+3])>>>16)+(U>>>16)+(k>>>16)+(e>>>16)+(ih>>>16)+((r=(65535&B)+(65535&U)+(65535&k)+(65535&e)+(65535&ih))>>>16))>>>16))>>>16))<<16|65535&o,U=n<<16|65535&r,S=(l=(_>>>16)+(t>>>16)+((o=(65535&_)+(65535&t)+((n=(w>>>16)+(i>>>16)+((r=(65535&w)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,th=(l=(q>>>16)+(A>>>16)+((o=(65535&q)+(65535&A)+((n=(G>>>16)+(U>>>16)+((r=(65535&G)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o,ih=n<<16|65535&r,t=((q=(l=(S>>>16)+(A>>>16)+((o=(65535&S)+(65535&A)+((n=(B>>>16)+(U>>>16)+((r=(65535&B)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(G=n<<16|65535&r)<<4)^(G>>>2|q<<30)^(G>>>7|q<<25),i=(G>>>28|q<<4)^(q>>>2|G<<30)^(q>>>7|G<<25),s=(th>>>14|ih<<18)^(th>>>18|ih<<14)^(ih>>>9|th<<23),e=(ih>>>14|th<<18)^(ih>>>18|th<<14)^(th>>>9|ih<<23),_=(p=q&L)^q&T^c,w=(d=G&Q)^G&V^y,g=th&sh^~th&X,k=ih&eh^~ih&Z,A=M[h+4],U=M[h+5],A=(l=((S=u[h+4])>>>16)+(A>>>16)+(g>>>16)+(s>>>16)+($>>>16)+((o=(65535&S)+(65535&A)+(65535&g)+(65535&s)+(65535&$)+((n=((B=u[h+5])>>>16)+(U>>>16)+(k>>>16)+(e>>>16)+(hh>>>16)+((r=(65535&B)+(65535&U)+(65535&k)+(65535&e)+(65535&hh))>>>16))>>>16))>>>16))<<16|65535&o,U=n<<16|65535&r,S=(l=(_>>>16)+(t>>>16)+((o=(65535&_)+(65535&t)+((n=(w>>>16)+(i>>>16)+((r=(65535&w)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,$=(l=(W>>>16)+(A>>>16)+((o=(65535&W)+(65535&A)+((n=(Y>>>16)+(U>>>16)+((r=(65535&Y)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o,hh=n<<16|65535&r,t=((W=(l=(S>>>16)+(A>>>16)+((o=(65535&S)+(65535&A)+((n=(B>>>16)+(U>>>16)+((r=(65535&B)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o)>>>28|(Y=n<<16|65535&r)<<4)^(Y>>>2|W<<30)^(Y>>>7|W<<25),i=(Y>>>28|W<<4)^(W>>>2|Y<<30)^(W>>>7|Y<<25),s=($>>>14|hh<<18)^($>>>18|hh<<14)^(hh>>>9|$<<23),e=(hh>>>14|$<<18)^(hh>>>18|$<<14)^($>>>9|hh<<23),_=(b=W&q)^W&L^p,w=(v=Y&G)^Y&Q^d,g=$&th^~$&sh,k=hh&ih^~hh&eh,A=M[h+6],U=M[h+7],A=(l=((S=u[h+6])>>>16)+(A>>>16)+(g>>>16)+(s>>>16)+(X>>>16)+((o=(65535&S)+(65535&A)+(65535&g)+(65535&s)+(65535&X)+((n=((B=u[h+7])>>>16)+(U>>>16)+(k>>>16)+(e>>>16)+(Z>>>16)+((r=(65535&B)+(65535&U)+(65535&k)+(65535&e)+(65535&Z))>>>16))>>>16))>>>16))<<16|65535&o,U=n<<16|65535&r,S=(l=(_>>>16)+(t>>>16)+((o=(65535&_)+(65535&t)+((n=(w>>>16)+(i>>>16)+((r=(65535&w)+(65535&i))>>>16))>>>16))>>>16))<<16|65535&o,B=n<<16|65535&r,X=(l=(T>>>16)+(A>>>16)+((o=(65535&T)+(65535&A)+((n=(V>>>16)+(U>>>16)+((r=(65535&V)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o,Z=n<<16|65535&r,T=(l=(S>>>16)+(A>>>16)+((o=(65535&S)+(65535&A)+((n=(B>>>16)+(U>>>16)+((r=(65535&B)+(65535&U))>>>16))>>>16))>>>16))<<16|65535&o,V=n<<16|65535&r;l=(z>>>16)+(T>>>16)+((o=(65535&z)+(65535&T)+((n=(O>>>16)+(V>>>16)+((r=(65535&O)+(65535&V))>>>16))>>>16))>>>16),this.h0h=l<<16|65535&o,this.h0l=n<<16|65535&r,l=(m>>>16)+(W>>>16)+((o=(65535&m)+(65535&W)+((n=(x>>>16)+(Y>>>16)+((r=(65535&x)+(65535&Y))>>>16))>>>16))>>>16),this.h1h=l<<16|65535&o,this.h1l=n<<16|65535&r,l=(N>>>16)+(q>>>16)+((o=(65535&N)+(65535&q)+((n=(J>>>16)+(G>>>16)+((r=(65535&J)+(65535&G))>>>16))>>>16))>>>16),this.h2h=l<<16|65535&o,this.h2l=n<<16|65535&r,l=(j>>>16)+(L>>>16)+((o=(65535&j)+(65535&L)+((n=(E>>>16)+(Q>>>16)+((r=(65535&E)+(65535&Q))>>>16))>>>16))>>>16),this.h3h=l<<16|65535&o,this.h3l=n<<16|65535&r,l=(H>>>16)+(X>>>16)+((o=(65535&H)+(65535&X)+((n=(I>>>16)+(Z>>>16)+((r=(65535&I)+(65535&Z))>>>16))>>>16))>>>16),this.h4h=l<<16|65535&o,this.h4l=n<<16|65535&r,l=(R>>>16)+($>>>16)+((o=(65535&R)+(65535&$)+((n=(C>>>16)+(hh>>>16)+((r=(65535&C)+(65535&hh))>>>16))>>>16))>>>16),this.h5h=l<<16|65535&o,this.h5l=n<<16|65535&r,l=(K>>>16)+(th>>>16)+((o=(65535&K)+(65535&th)+((n=(P>>>16)+(ih>>>16)+((r=(65535&P)+(65535&ih))>>>16))>>>16))>>>16),this.h6h=l<<16|65535&o,this.h6l=n<<16|65535&r,l=(D>>>16)+(sh>>>16)+((o=(65535&D)+(65535&sh)+((n=(F>>>16)+(eh>>>16)+((r=(65535&F)+(65535&eh))>>>16))>>>16))>>>16),this.h7h=l<<16|65535&o,this.h7l=n<<16|65535&r},h.prototype.hex=function(){this.finalize();var h=this.h0h,t=this.h0l,i=this.h1h,s=this.h1l,e=this.h2h,r=this.h2l,n=this.h3h,o=this.h3l,l=this.h4h,f=this.h4l,c=this.h5h,u=this.h5l,y=this.h6h,p=this.h6l,d=this.h7h,b=this.h7l,v=this.bits,_=a[h>>>28&15]+a[h>>>24&15]+a[h>>>20&15]+a[h>>>16&15]+a[h>>>12&15]+a[h>>>8&15]+a[h>>>4&15]+a[15&h]+a[t>>>28&15]+a[t>>>24&15]+a[t>>>20&15]+a[t>>>16&15]+a[t>>>12&15]+a[t>>>8&15]+a[t>>>4&15]+a[15&t]+a[i>>>28&15]+a[i>>>24&15]+a[i>>>20&15]+a[i>>>16&15]+a[i>>>12&15]+a[i>>>8&15]+a[i>>>4&15]+a[15&i]+a[s>>>28&15]+a[s>>>24&15]+a[s>>>20&15]+a[s>>>16&15]+a[s>>>12&15]+a[s>>>8&15]+a[s>>>4&15]+a[15&s]+a[e>>>28&15]+a[e>>>24&15]+a[e>>>20&15]+a[e>>>16&15]+a[e>>>12&15]+a[e>>>8&15]+a[e>>>4&15]+a[15&e]+a[r>>>28&15]+a[r>>>24&15]+a[r>>>20&15]+a[r>>>16&15]+a[r>>>12&15]+a[r>>>8&15]+a[r>>>4&15]+a[15&r]+a[n>>>28&15]+a[n>>>24&15]+a[n>>>20&15]+a[n>>>16&15]+a[n>>>12&15]+a[n>>>8&15]+a[n>>>4&15]+a[15&n];return v>=256&&(_+=a[o>>>28&15]+a[o>>>24&15]+a[o>>>20&15]+a[o>>>16&15]+a[o>>>12&15]+a[o>>>8&15]+a[o>>>4&15]+a[15&o]),v>=384&&(_+=a[l>>>28&15]+a[l>>>24&15]+a[l>>>20&15]+a[l>>>16&15]+a[l>>>12&15]+a[l>>>8&15]+a[l>>>4&15]+a[15&l]+a[f>>>28&15]+a[f>>>24&15]+a[f>>>20&15]+a[f>>>16&15]+a[f>>>12&15]+a[f>>>8&15]+a[f>>>4&15]+a[15&f]+a[c>>>28&15]+a[c>>>24&15]+a[c>>>20&15]+a[c>>>16&15]+a[c>>>12&15]+a[c>>>8&15]+a[c>>>4&15]+a[15&c]+a[u>>>28&15]+a[u>>>24&15]+a[u>>>20&15]+a[u>>>16&15]+a[u>>>12&15]+a[u>>>8&15]+a[u>>>4&15]+a[15&u]),512==v&&(_+=a[y>>>28&15]+a[y>>>24&15]+a[y>>>20&15]+a[y>>>16&15]+a[y>>>12&15]+a[y>>>8&15]+a[y>>>4&15]+a[15&y]+a[p>>>28&15]+a[p>>>24&15]+a[p>>>20&15]+a[p>>>16&15]+a[p>>>12&15]+a[p>>>8&15]+a[p>>>4&15]+a[15&p]+a[d>>>28&15]+a[d>>>24&15]+a[d>>>20&15]+a[d>>>16&15]+a[d>>>12&15]+a[d>>>8&15]+a[d>>>4&15]+a[15&d]+a[b>>>28&15]+a[b>>>24&15]+a[b>>>20&15]+a[b>>>16&15]+a[b>>>12&15]+a[b>>>8&15]+a[b>>>4&15]+a[15&b]),_},h.prototype.toString=h.prototype.hex,h.prototype.digest=function(){this.finalize();var h=this.h0h,t=this.h0l,i=this.h1h,s=this.h1l,e=this.h2h,r=this.h2l,n=this.h3h,o=this.h3l,l=this.h4h,a=this.h4l,f=this.h5h,c=this.h5l,u=this.h6h,y=this.h6l,p=this.h7h,d=this.h7l,b=this.bits,v=[h>>>24&255,h>>>16&255,h>>>8&255,255&h,t>>>24&255,t>>>16&255,t>>>8&255,255&t,i>>>24&255,i>>>16&255,i>>>8&255,255&i,s>>>24&255,s>>>16&255,s>>>8&255,255&s,e>>>24&255,e>>>16&255,e>>>8&255,255&e,r>>>24&255,r>>>16&255,r>>>8&255,255&r,n>>>24&255,n>>>16&255,n>>>8&255,255&n];return b>=256&&v.push(o>>>24&255,o>>>16&255,o>>>8&255,255&o),b>=384&&v.push(l>>>24&255,l>>>16&255,l>>>8&255,255&l,a>>>24&255,a>>>16&255,a>>>8&255,255&a,f>>>24&255,f>>>16&255,f>>>8&255,255&f,c>>>24&255,c>>>16&255,c>>>8&255,255&c),512==b&&v.push(u>>>24&255,u>>>16&255,u>>>8&255,255&u,y>>>24&255,y>>>16&255,y>>>8&255,255&y,p>>>24&255,p>>>16&255,p>>>8&255,255&p,d>>>24&255,d>>>16&255,d>>>8&255,255&d),v},h.prototype.array=h.prototype.digest,h.prototype.arrayBuffer=function(){this.finalize();var h=this.bits,t=new ArrayBuffer(h/8),i=new DataView(t);return i.setUint32(0,this.h0h),i.setUint32(4,this.h0l),i.setUint32(8,this.h1h),i.setUint32(12,this.h1l),i.setUint32(16,this.h2h),i.setUint32(20,this.h2l),i.setUint32(24,this.h3h),h>=256&&i.setUint32(28,this.h3l),h>=384&&(i.setUint32(32,this.h4h),i.setUint32(36,this.h4l),i.setUint32(40,this.h5h),i.setUint32(44,this.h5l)),512==h&&(i.setUint32(48,this.h6h),i.setUint32(52,this.h6l),i.setUint32(56,this.h7h),i.setUint32(60,this.h7l)),t},h.prototype.clone=function(){var t=new h(this.bits,!1);return this.copyTo(t),t},h.prototype.copyTo=function(h){var t=0,i=["h0h","h0l","h1h","h1l","h2h","h2l","h3h","h3l","h4h","h4l","h5h","h5l","h6h","h6l","h7h","h7l","start","bytes","hBytes","finalized","hashed","lastByteIndex"];for(t=0;t<i.length;++t)h[i[t]]=this[i[t]];for(t=0;t<this.blocks.length;++t)h.blocks[t]=this.blocks[t]},(t.prototype=new h).finalize=function(){if(h.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();h.call(this,this.bits,this.sharedMemory),this.update(this.oKeyPad),this.update(t),h.prototype.finalize.call(this)}},t.prototype.clone=function(){var h=new t([],this.bits,!1);this.copyTo(h),h.inner=this.inner;for(var i=0;i<this.oKeyPad.length;++i)h.oKeyPad[i]=this.oKeyPad[i];return h};var S=w(512);S.sha512=S,S.sha384=w(384),S.sha512_256=w(256),S.sha512_224=w(224),S.sha512.hmac=U(512),S.sha384.hmac=U(384),S.sha512_256.hmac=U(256),S.sha512_224.hmac=U(224),n?module.exports=S:(e.sha512=S.sha512,e.sha384=S.sha384,e.sha512_256=S.sha512_256,e.sha512_224=S.sha512_224,o&&define(function(){return S}))}();