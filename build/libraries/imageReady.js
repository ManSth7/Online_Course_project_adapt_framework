!function(l){function c(e){if(e===undefined)throw"Must specify a css attribute name";var t,r=this.getElementsByTagName("*"),a=[];if(l("body")[0].currentStyle)for(var n=function u(e){var t=function r(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}(e.replace(/-/g," ")).replace(/ /g,"");return t.substr(0,1).toLowerCase()+t.substr(1)}(e),i=0,o=r.length;i<o;i++){"none"==(t=r[i]).currentStyle[n]||a.push(t)}else if(window.getComputedStyle)for(i=0,o=r.length;i<o;i++){t=r[i],"none"==document.defaultView.getComputedStyle(t,null).getPropertyValue(e)||a.push(t)}return a}l.fn.imageready||(l.fn.imageready=function(r,t){(t=t||{}).allowTimeout===undefined&&(t.allowTimeout=l.fn.imageready.allowTimeout,t.timeoutDuration=l.fn.imageready.timeoutDuration);var a,n=function u(e){var n=e.find("img").add(e.filter("img"));if(e.each(function(){l(c.call(this,"background-image")).each(function(){var e=l(new Image),t=l(this).css("background-image"),r=/url\(([^)]*)\)/g.exec(t);if(null!==r){var a=r[1].replace(/[\"\']/g,"");e.attr("src",a),n=n.add(e)}})}),(n.loaded=0)!==n.length)return n}(this);if(!n)return r();function i(){clearTimeout(a);var t=[];return n.each(function(){if(!this._isImageReadyComplete){t.push(this);var e=l(this);console.error("image not loaded in time",e.attr("src"))}}),r(l(t))}function o(e){if(clearTimeout(a),e&&e.target&&(n.loaded++,e.currentTarget._isImageReadyComplete=!0),n.length<=n.loaded)return r();t.allowTimeout&&(a=setTimeout(i,t.timeoutDuration))}if(n.each(function(){var e=l(this);if(function u(e){var t=e[0],r=!e.attr("src"),a=t.complete,n=4===t.readyState,i=0<e.height(),o=t.naturalHeight===undefined||0<t.naturalHeight;return r||a||n||i&&o}(e))return n.loaded++;e.one("load",o),e.one("error",o),e.attr("src",e.attr("src"))}),n.length<=n.loaded)return o();t.allowTimeout&&(a=setTimeout(i,t.timeoutDuration))},l.fn.imageready.timeoutDuration=1,l.fn.imageready.allowTimeout=!1)}(jQuery);