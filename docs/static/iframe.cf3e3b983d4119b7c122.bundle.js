(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),o=s(u),i=s(n(1)),l=s(n(453)),d=n(771);function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=e.fields,r=e.type,u=e.isValid,o=e.disabled,i=e.filterKeyCodes,l=e.forceUppercase,s=e.value;l&&(s=s.toUpperCase()),n.state={value:s,fields:a,type:r,input:[],isValid:u,disabled:o,filterKeyCodes:i,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",paddingRight:0,width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var c=0;c<Number(n.state.fields);c+=1)if(c<32){var p=n.state.value[c]||"";n.state.input.push(p)}return n.textInput=[],n.container=null,n.uuid=(0,d.uuidv4)(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({isValid:e.isValid,value:e.value,disabled:e.disabled})}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"handleTouch",value:function(e){var t=this.props,n=t.touch,a=t.untouch,r=t.name;"function"==typeof n&&"function"==typeof a&&(""===e?n(r):a(r))}},{key:"handleChange",value:function(e){var t=this,n=this.props,a=n.filterChars,r=n.filterCharsIsWhitelist,u=String(e.target.value);this.props.forceUppercase&&(u=u.toUpperCase()),"number"===this.state.type&&(u=u.replace(/[^\d]/g,""));var o=u=u.split("").filter(function(e){return r?a.includes(e):!a.includes(e)}).join("");if(""!==u){var i=this.state.input.slice();u.length>1?u.split("").map(function(n,a){return Number(e.target.dataset.id)+a<t.props.fields&&(i[Number(e.target.dataset.id)+a]=n),!1}):i[Number(e.target.dataset.id)]=u,i.map(function(e,n){return t.textInput[n]&&(t.textInput[n].value=e),!1});var l=this.textInput[e.target.dataset.id<i.length?Number(e.target.dataset.id)+1:e.target.dataset.id];l&&(l.focus(),l.select()),o=i.join(""),this.setState({value:i.join(""),input:i})}this.props.onChange&&o&&this.props.onChange(o),this.handleTouch(o)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),n=this.textInput[t+1],a=this.textInput[t-1],r=void 0,u=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map(function(t){if(t===e.keyCode)return e.preventDefault(),!0}),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(r=this.state.input.slice())[t]="",u=r.join(""),this.setState({value:u,input:r}),""===this.textInput[t].value&&a&&(a.focus(),a.select()),this.props.onChange&&this.props.onChange(u);break;case 37:e.preventDefault(),a&&(a.focus(),a.select());break;case 39:e.preventDefault(),n&&(n.focus(),n.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(u)}},{key:"handleOnClick",value:function(e){console.log("this.props.onClickContainer"),console.log(this.props.onClickContainer),this.props.onClickContainer&&this.props.onClickContainer(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,u=void 0===r?{}:r,i=t.inputStyle,d=void 0===i?{}:i,s=t.inputStyleInvalid,c=void 0===s?{}:s,p=t.type,f=t.autoFocus,m=t.pattern,h=t.inputMode,y=this.state,b=y.disabled,v=y.input,g=y.isValid,x=y.defaultInputStyle,C={container:a({display:"inline-block"},u),input:g?d:c};return n||0!==Object.keys(d).length||Object.assign(d,a({},x,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),n||0!==Object.keys(c).length||Object.assign(c,a({},x,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),b&&Object.assign(C.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),o.default.createElement("div",{className:(0,l.default)(n,"react-code-input"),style:C.container,onClick:function(t){console.log("wtf"),e.handleOnClick(t)},ref:function(t){e.container=t,e.props.setContainerRef&&e.props.setContainerRef(t)}},v.map(function(t,n){return o.default.createElement("input",{ref:function(t){e.textInput[n]=t,e.props.setInputRefs&&e.props.setInputRefs(e.textInput)},id:e.uuid+"-"+n,"data-id":n,autoFocus:f&&0===n?"autoFocus":"",value:t,key:"input_"+n,type:p,min:0,max:9,maxLength:v.length===n+1?1:v.length,style:C.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(t){return e.handleBlur(t)},onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},disabled:b,"data-valid":g,pattern:m,inputMode:h})}))}}]),t}();c.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."],filterCharsIsWhitelist:!1},c.propTypes={type:i.default.oneOf(["text","number","password","tel"]),fields:i.default.number,value:i.default.string,onChange:i.default.func,name:i.default.string,touch:i.default.func,untouch:i.default.func,className:i.default.string,isValid:i.default.bool,disabled:i.default.bool,style:i.default.object,inputStyle:i.default.object,inputStyleInvalid:i.default.object,autoFocus:i.default.bool,forceUppercase:i.default.bool,filterKeyCodes:i.default.array,filterChars:i.default.array,filterCharsIsWhitelist:i.default.bool,pattern:i.default.string,inputMode:i.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"]),onClickContainer:i.default.func,setContainerRef:i.default.func,setInputRefs:i.default.func},t.default=c,c.__docgenInfo={description:"",methods:[{name:"UNSAFE_componentWillReceiveProps",docblock:null,modifiers:[],params:[{name:"nextProps",type:null}],returns:null},{name:"handleBlur",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleTouch",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"handleChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleOnClick",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"ReactCodeInput",props:{autoFocus:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isValid:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},forceUppercase:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},fields:{defaultValue:{value:"4",computed:!1},type:{name:"number"},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'password'",computed:!1},{value:"'tel'",computed:!1}]},required:!1,description:""},filterKeyCodes:{defaultValue:{value:"[189, 190]",computed:!1},type:{name:"array"},required:!1,description:""},filterChars:{defaultValue:{value:"['-', '.']",computed:!1},type:{name:"array"},required:!1,description:""},filterCharsIsWhitelist:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},touch:{type:{name:"func"},required:!1,description:""},untouch:{type:{name:"func"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},inputStyle:{type:{name:"object"},required:!1,description:""},inputStyleInvalid:{type:{name:"object"},required:!1,description:""},pattern:{type:{name:"string"},required:!1,description:""},inputMode:{type:{name:"enum",value:[{value:"'verbatim'",computed:!1},{value:"'latin'",computed:!1},{value:"'latin-name'",computed:!1},{value:"'latin-prose'",computed:!1},{value:"'full-width-latin'",computed:!1},{value:"'kana'",computed:!1},{value:"'kana-name'",computed:!1},{value:"'katakana'",computed:!1},{value:"'numeric'",computed:!1},{value:"'tel'",computed:!1},{value:"'email'",computed:!1},{value:"'url'",computed:!1}]},required:!1,description:""},onClickContainer:{type:{name:"func"},required:!1,description:""},setContainerRef:{type:{name:"func"},required:!1,description:""},setInputRefs:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ReactCodeInput.js"]={name:"ReactCodeInput",docgenInfo:c.__docgenInfo,path:"src/ReactCodeInput.js"})},695:function(e,t,n){n(226),n(696),e.exports=n(697)},697:function(e,t,n){"use strict";(function(e){var t=n(484),a=n(490),r=n(763);(0,t.configure)(function(){r.keys().forEach(function(e){return r(e)})},e),(0,a.setDefaults)({header:!1})}).call(this,n(59)(e))},713:function(e,t,n){var a={"./nestedObjectAssign":491,"./nestedObjectAssign.js":491};function r(e){var t=u(e);return n(t)}function u(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=u,e.exports=r,r.id=713},763:function(e,t,n){var a={"./ReactCodeInput.stories.js":764};function r(e){var t=u(e);return n(t)}function u(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=u,e.exports=r,r.id=763},764:function(e,t,n){"use strict";(function(e){var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a=s(n(0)),r=n(484),u=n(209),o=n(765),i=n(490),l=s(n(500)),d=s(n(500));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.storiesOf)("ReactCodeInput",e),p=(0,r.storiesOf)("ReactCodeInput/Props",e),f=["text","number","password","tel"],m=["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"],h={fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box",color:"black",backgroundColor:"white",borderColor:"lightgrey"},y={fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"3px",border:"1px solid",margin:"4px",paddingLeft:"7px",width:"15px",height:"26px",fontSize:"14px",color:"lightskyblue",backgroundColor:"black",borderColor:"lightskyblue"};c.addDecorator(function(e,t){return(0,i.withInfo)("Details")(e)(t)}),c.addDecorator(o.withKnobs),c.add("Default",function(){return a.default.createElement(l.default,null)}).add("Dark Themed",function(){return a.default.createElement("div",{style:{background:"#222",padding:"10px",width:"140px"}},a.default.createElement(l.default,{inputStyle:y,type:"number"}))}).add("Force Uppercase",function(){return a.default.createElement(d.default,{fields:4,type:"text",forceUppercase:!0,value:"test",onChange:(0,u.action)("onChange")})}),p.addDecorator(function(e,t){return(0,i.withInfo)("Details")(e)(t)}),p.addDecorator(o.withKnobs),p.add("type",function(){return a.default.createElement(l.default,{type:(0,o.select)("Type",f,"text","Type")})}).add("fields",function(){return a.default.createElement(l.default,{fields:(0,o.number)("fields",6)})}).add("inputStyle",function(){return a.default.createElement(l.default,{inputStyle:(0,o.object)("inputStyle",h)})}).add("value",function(){return a.default.createElement(l.default,{value:(0,o.text)("value","1234")})}).add("isValid",function(){return a.default.createElement(l.default,{isValid:(0,o.boolean)("isValid",!1)})}).add("inputMode",function(){return a.default.createElement(l.default,{inputMode:(0,o.select)("inputMode",m)})}).add("onChange",function(){return a.default.createElement(l.default,{onChange:(0,u.action)("onChange")})}).add("pattern",function(){return a.default.createElement("form",null,a.default.createElement(l.default,{value:(0,o.text)("value","123"),pattern:(0,o.text)("pattern","[A-Z]")}),a.default.createElement("input",{style:t({},h,{width:"auto",backgroundColor:"lightgray"}),type:"submit",value:"Submit"}))}).add("touch",function(){return a.default.createElement(l.default,{touch:(0,u.action)("touch")})}).add("untouch",function(){return a.default.createElement(l.default,{untouch:(0,u.action)("untouch")})}).add("disabled",function(){return a.default.createElement(l.default,{disabled:(0,o.boolean)("disabled",!0)})})}).call(this,n(59)(e))},771:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}}},[[695,3,2]]]);
//# sourceMappingURL=iframe.cf3e3b983d4119b7c122.bundle.js.map