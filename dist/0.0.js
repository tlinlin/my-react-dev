webpackJsonp([0],{412:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(6),s=a(c),f=n(108);a(f);n(159);var m=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={date:new Date,age:0,startDate:"",endDate:"",weekNum:""},n.itemChange=n.itemChange.bind(n),n}return l(t,e),u(t,[{key:"componentDidMount",value:function(){console.log("页面渲染完成"),this.activeTime()}},{key:"componentWillUnmount",value:function(){console.log("页面将要释放"),clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"activeTime",value:function(){var e=this;this.timerId||(this.timerId=setInterval(function(){e.tick()},1e3))}},{key:"activateLasers",value:function(){console.log(this),clearInterval(this.timerId),this.timerId=""}},{key:"itemChange",value:function(e){var t=e.target.name;this.setState(o({},t,e.target.value)),console.log(this.state.name),this.weekRange(2017,4,1)}},{key:"weekRange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2018,t=arguments[1],n=arguments[2],a=new Date(e+"/1/"+t),o=a.getDay(),i=a.getTime()-24*(o-1)*60*60*1e3,r=7*(n-1)*24*60*60*1e3+i,l=24*(7*n-1)*60*60*1e3+i;return console.log(this.formatdate(i),"第一周开始时间"),console.log(this.formatdate(r),"开始时间星期一"),console.log(this.formatdate(l),"结束时间星期天"),{startDate:r,endDate:l}}},{key:"formatdate",value:function(e){return""+new Date(e).getFullYear()+(new Date(e).getMonth()-1)+"-"+new Date(e).getDate()}},{key:"render",value:function(){var e=this;return s.default.createElement("div",null,s.default.createElement("h1",{className:"title"},this.state.date.toLocaleTimeString()," Hello World ",this.props.name,"！"),s.default.createElement("span",{className:"icon-zhongguoyidong"}),s.default.createElement("button",{onClick:this.activateLasers.bind(this)},"点击暂停时间"),s.default.createElement("button",{onClick:this.activeTime.bind(this)},"点击开始时间"),s.default.createElement("button",{onClick:function(t){e.activeTime(t)}},"点击开始时间"),s.default.createElement("label",null,"your name:",s.default.createElement("input",{type:"text",name:"weekNum",value:this.state.weekNum,onChange:this.itemChange})),s.default.createElement("p",null,this.state.weekNum))}}]),t}(s.default.Component);t.default=m}});