(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"124":function(A,e,t){"use strict";t.r(e);var r=t(6),n=t.n(r),o=t(1),i=t(19),a=t(117),s=t(123),c=t(0),l=void 0,u=void 0,f=function pageScrollTo(A){var e=A.scrollTop,t=A.duration,r=void 0===t?300:t,n=A.success,o=A.fail,i=A.complete;return new Promise(function(A,t){try{if(void 0===e)throw Error('"scrollTop" is required');var a=document.querySelector(".taro-tabbar__panel")||window;l||(l=a===window?function scrollFunc(A){if(void 0===A)return window.pageYOffset;window.scrollTo(0,A)}:function scrollFunc(A){if(void 0===A)return a.scrollTop;a.scrollTop=A});var s=l(),f=e-s,p=r/17,m=Object(c.f)(c.c,p);!function scroll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=s+f*m(e);if(l(t),e<p)u&&clearTimeout(u),u=setTimeout(function(){scroll(e+1)},17);else{var r={"errMsg":"pageScrollTo:ok"};n&&n(r),i&&i(),A(r)}}()}catch(A){var h={"errMsg":"pageScrollTo:fail "+A.message};o&&o(h),i&&i(),t(h)}})},p=t(20);var m=t(8),h=t(118),g=t(2),d=t(114),b=t(119),v=t(96),y=t(27),w=t(29),B=t(37);t(97);t.d(e,"default",function(){return P});var E=function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}(),O=function get(A,e,t){null===A&&(A=Function.prototype);var r=Object.getOwnPropertyDescriptor(A,e);if(void 0===r){var n=Object.getPrototypeOf(A);return null===n?void 0:get(n,e,t)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(t):void 0};function _asyncToGenerator(A){return function(){var e=A.apply(this,arguments);return new Promise(function(A,t){return function step(r,n){try{var o=e[r](n),i=o.value}catch(A){return void t(A)}if(!o.done)return Promise.resolve(i).then(function(A){step("next",A)},function(A){step("throw",A)});A(i)}("next")})}}var P=function(A){function List(A){var e=this;!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,List);var t=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(List.__proto__||Object.getPrototypeOf(List)).call(this,A));return t.config={"navigationBarTitleText":"开源表情包","enablePullDownRefresh":!0},t.fetchImages=_asyncToGenerator(n.a.mark(function _callee(){var A,r,o,s,c;return n.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return A=t.$router.params.name,(r=Object(i.c)(A))&&(t.images=Object(y.b)(r),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0)),o=Object(y.d)("加载中",!!r),e.next=6,Object(a.a)({"url":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/source/_posts/"+A+".md","dataType":"其他","responseType":"text"});case 6:s=e.sent,c=s.data,Object(i.d)({"key":A,"data":c}),t.images=Object(y.b)(c),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0),o();case 13:case"end":return e.stop()}},_callee,e)})),t.showMoreImages=function(A){var e=t.state,r=e.images,n=e.urls,o=t.images.splice(0,30),i=t.urls.splice(0,30);A?t.setState({"images":o,"urls":i,"isLoad":!t.images.length}):t.setState({"images":r.concat(o),"urls":n.concat(i)})},t.handlePreview=function(A){Object(s.a)({"urls":t.state.urls,"current":A})},t.randomImages=function(){var A=t.images.concat(t.state.images);t.images=A.sort(function(){return Math.random()>.5?-1:1}),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0),f({"scrollTop":0}),Object(p.d)({"title":"表情包已随机排序","icon":"none"})},t.updateSetting=function(){var A=Object(y.a)();t.setState(A)},t.state={"images":[],"urls":[],"perLineBQB":4,"showBQBTitle":!0,"isLoad":!1},t}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(List,g["a"].Component),E(List,[{"key":"componentDidMount","value":function componentDidMount(){var A=this.$router.params.title;A&&function setNavigationBarTitle(A){var e=Object(c.l)(A);if(!e.res){var t={"errMsg":"setNavigationBarTitle"+e.msg};return console.error(t.errMsg),Promise.reject(t)}var r=A.title,n=A.success,o=A.fail,i=A.complete,a={"errMsg":"setNavigationBarTitle:ok"};return r&&"string"==typeof r?(document.title!==r&&(document.title=r),"function"==typeof n&&n(a),"function"==typeof i&&i(a),Promise.resolve(a)):(a.errMsg=Object(c.e)({"name":"setNavigationBarTitle","para":"title","correct":"String","wrong":r}),console.error(a.errMsg),"function"==typeof o&&o(a),"function"==typeof i&&i(a),Promise.reject(a))}({"title":decodeURIComponent(A)}),this.fetchImages()}},{"key":"componentDidShow","value":function componentDidShow(){this.updateSetting(),this._offReachBottom=Object(m.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0}),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"onPullDownRefresh","value":function(){var A=_asyncToGenerator(n.a.mark(function _callee2(){return n.a.wrap(function _callee2$(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.fetchImages();case 2:Object(h.a)();case 3:case"end":return A.stop()}},_callee2,this)}));return function onPullDownRefresh(){return A.apply(this,arguments)}}()},{"key":"onReachBottom","value":function onReachBottom(){this.images.length&&this.showMoreImages()}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":this.$router.params.title}}},{"key":"render","value":function render(){var A=this,e=this.state,t=e.images,r=void 0===t?[]:t,n=e.isLoad,i=e.perLineBQB,a=e.showBQBTitle,s="bqb-item-"+i;if(!r.length){var c=n?o.l.createElement(B.a,null):o.l.createElement(d.a,null);return o.l.createElement(b.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},c)}var l=o.l.createElement(d.a,{"className":"list"},r.map(function(e){return o.l.createElement(w.a,{"key":e.src,"src":e.src,"name":e.name,"showTitle":a,"bqb-custom-class":s,"onClick":function onClick(){return A.handlePreview(e.src)}})}),o.l.createElement(v.a,{"className":"flat-btn random-btn","onClick":function onClick(){return A.randomImages()}},"≈"));return o.l.createElement(b.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},l)}},{"key":"componentDidHide","value":function componentDidHide(){O(List.prototype.__proto__||Object.getPrototypeOf(List.prototype),"componentDidHide",this)&&O(List.prototype.__proto__||Object.getPrototypeOf(List.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom(),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),List}()},"27":function(A,e,t){"use strict";t.d(e,"d",function(){return i}),t.d(e,"c",function(){return a}),t.d(e,"b",function(){return s}),t.d(e,"a",function(){return c});var r=t(20),n=t(19),o=function getImageSrc(A,e){return"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/"+A+"/"+e},i=function smartLoading(A,e){return Object(r.b)({"title":A}),r.a},a=function parseTypes(A){var e=A&&A.match(/\|.*已收录.*\|/g);if(!e)return[];var t=/.*master\/(.*?)\/(.*?) .*已收录(\d*)张/;return e.map(function(A){var e=A.match(t);if(!e)return{"name":"未命名","link":"","imgNum":0,"imgSrc":""};var r=e[1],n=r.replace(/^(\w)*/,"").replace(/BQB$/,""),i=e[2],a=Number(e[3]);return{"name":n,"link":"/pages/list/index?name="+r+"&title="+n,"imgSrc":o(r,i),"imgNum":a}}).filter(function(A){return!!A.imgNum}).sort(function(A,e){return e.imgNum-A.imgNum})},s=function parseImages(A){var e=A&&A.match(/\[.*?\]/g);if(!e)return[];var t=/.*master\/(.*)\/(.*)\]/;return e.map(function(A){var e=A.match(t);if(!e)return{"src":"","name":"未命名"};var r=e[1],n=e[2];return{"src":o(r,n),"name":n.replace(/\..*$/,"")}}).filter(function(A){return!!A.src})},c=function getSetting(){var A=Object(n.c)("setting")||{},e=A.perLineBQB,t=A.showBQBTitle;return{"perLineBQB":e||4,"showBQBTitle":void 0===t||t}}},"29":function(A,e,t){"use strict";t.d(e,"a",function(){return u});var r=t(1),n=t(2),o=t(114),i=t(115),a=t(116),s=t(30),c=t.n(s),l=(t(31),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var u=function(A){function BQBItem(){!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,BQBItem);var A=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(BQBItem.__proto__||Object.getPrototypeOf(BQBItem)).apply(this,arguments));return A.handleImageLoad=function(){A.setState({"isLoad":!0})},A.handleIamgeError=function(){A.setState({"isError":!0})},A}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(BQBItem,n["a"].Component),l(BQBItem,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(A){A.src!==this.props.src&&this.setState({"isLoad":!1,"isError":!1})}},{"key":"render","value":function render(){var A=this,e=this.props,t=e.num,n=e.src,s=e.name,l=e.showTitle,u=e.onClick,f=this.state,p=f.isLoad,m=f.isError;return r.l.createElement(o.a,{"className":"bqb-item bqb-custom-class","onClick":u},r.l.createElement(o.a,{"className":"bqb-image-wrap"},r.l.createElement(i.a,{"className":"bqb-image "+(p?"":"hide"),"mode":"aspectFill","lazyLoad":!0,"src":m?c.a:n,"onLoad":function onLoad(){return A.handleImageLoad()},"onError":function onError(){return A.handleIamgeError()}}),r.l.createElement(o.a,{"className":"at-icon at-icon-settings"}),t&&r.l.createElement(a.a,{"className":"bqb-num"},t,"张"),p?null:r.l.createElement(o.a,{"className":"bqb-image bqb-loading"})),l&&r.l.createElement(a.a,{"className":"bqb-name"},s))}}]),BQBItem}();u.defaultProps={"showTitle":!0,"onClick":function onClick(){}},u.externalClasses=["bqb-custom-class"]},"30":function(A,e){A.exports="data:image/jpeg;base64,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"},"31":function(A,e,t){},"37":function(A,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(1),n=t(2),o=t(116),i=(t(38),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(A,r.key,r)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var a=function(A){function ErrTips(){return function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ErrTips),function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(ErrTips.__proto__||Object.getPrototypeOf(ErrTips)).apply(this,arguments))}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(ErrTips,n["a"].Component),i(ErrTips,[{"key":"render","value":function render(){var A=this.props.text;return r.l.createElement(o.a,{"className":"err-tips"},A)}}]),ErrTips}();a.defaultProps={"text":"数据加载或解析失败，\n请稍后重试或等待版本更新"}},"38":function(A,e,t){},"97":function(A,e,t){}}]);