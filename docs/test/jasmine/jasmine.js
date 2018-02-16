var getJasmineRequireObj=function(e){var t
function n(){return t}return"undefined"!=typeof module&&module.exports&&"undefined"!=typeof exports?(e="undefined"!=typeof global?global:{},t=exports):("undefined"!=typeof window&&"function"==typeof window.toString&&"[object GjsGlobal]"===window.toString()&&(e=window),t=e.jasmineRequire={}),n().core=function(t){var n={}
return t.base(n,e),n.util=t.util(n),n.errors=t.errors(),n.formatErrorMsg=t.formatErrorMsg(),n.Any=t.Any(n),n.Anything=t.Anything(n),n.CallTracker=t.CallTracker(n),n.MockDate=t.MockDate(),n.getClearStack=t.clearStack(n),n.Clock=t.Clock(),n.DelayedFunctionScheduler=t.DelayedFunctionScheduler(n),n.Env=t.Env(n),n.ExceptionFormatter=t.ExceptionFormatter(),n.Expectation=t.Expectation(),n.buildExpectationResult=t.buildExpectationResult(),n.JsApiReporter=t.JsApiReporter(),n.matchersUtil=t.matchersUtil(n),n.ObjectContaining=t.ObjectContaining(n),n.ArrayContaining=t.ArrayContaining(n),n.ArrayWithExactContents=t.ArrayWithExactContents(n),n.pp=t.pp(n),n.QueueRunner=t.QueueRunner(n),n.ReportDispatcher=t.ReportDispatcher(n),n.Spec=t.Spec(n),n.Spy=t.Spy(n),n.SpyRegistry=t.SpyRegistry(n),n.SpyStrategy=t.SpyStrategy(n),n.StringMatching=t.StringMatching(n),n.UserContext=t.UserContext(n),n.Suite=t.Suite(n),n.Timer=t.Timer(),n.TreeProcessor=t.TreeProcessor(),n.version=t.version(),n.Order=t.Order(),n.DiffBuilder=t.DiffBuilder(n),n.NullDiffBuilder=t.NullDiffBuilder(n),n.ObjectPath=t.ObjectPath(n),n.GlobalErrors=t.GlobalErrors(n),n.matchers=t.requireMatchers(t,n),n},n}(this)
getJasmineRequireObj().requireMatchers=function(e,t){var n,r,i=["nothing","toBe","toBeCloseTo","toBeDefined","toBeFalsy","toBeGreaterThan","toBeGreaterThanOrEqual","toBeLessThan","toBeLessThanOrEqual","toBeNaN","toBeNegativeInfinity","toBeNull","toBePositiveInfinity","toBeTruthy","toBeUndefined","toContain","toEqual","toHaveBeenCalled","toHaveBeenCalledBefore","toHaveBeenCalledTimes","toHaveBeenCalledWith","toMatch","toThrow","toThrowError"],o={}
for(n=0;n<i.length;n++)o[r=i[n]]=e[r](t)
return o},getJasmineRequireObj().base=function(e,t){e.unimplementedMethod_=function(){throw new Error("unimplemented method")},e.MAX_PRETTY_PRINT_DEPTH=8,e.MAX_PRETTY_PRINT_ARRAY_LENGTH=50,e.MAX_PRETTY_PRINT_CHARS=1e3,e.DEFAULT_TIMEOUT_INTERVAL=5e3,e.getGlobal=function(){return t},e.getEnv=function(t){return e.currentEnv_=e.currentEnv_||new e.Env(t)},e.isArray_=function(t){return e.isA_("Array",t)},e.isObject_=function(t){return!e.util.isUndefined(t)&&null!==t&&e.isA_("Object",t)},e.isString_=function(t){return e.isA_("String",t)},e.isNumber_=function(t){return e.isA_("Number",t)},e.isFunction_=function(t){return e.isA_("Function",t)},e.isAsyncFunction_=function(t){return e.isA_("AsyncFunction",t)},e.isTypedArray_=function(t){return e.isA_("Float32Array",t)||e.isA_("Float64Array",t)||e.isA_("Int16Array",t)||e.isA_("Int32Array",t)||e.isA_("Int8Array",t)||e.isA_("Uint16Array",t)||e.isA_("Uint32Array",t)||e.isA_("Uint8Array",t)||e.isA_("Uint8ClampedArray",t)},e.isA_=function(t,n){return e.getType_(n)==="[object "+t+"]"},e.getType_=function(e){return Object.prototype.toString.apply(e)},e.isDomNode=function(e){return e.nodeType>0},e.isMap=function(e){return void 0!==t.Map&&e.constructor===t.Map},e.isSet=function(e){return void 0!==t.Set&&e.constructor===t.Set},e.isPromise=function(e){return void 0!==t.Promise&&e.constructor===t.Promise},e.fnNameFor=function(e){if(e.name)return e.name
var t=e.toString().match(/^\s*function\s*(\w*)\s*\(/)||e.toString().match(/^\s*\[object\s*(\w*)Constructor\]/)
return t?t[1]:"<anonymous>"},e.any=function(t){return new e.Any(t)},e.anything=function(){return new e.Anything},e.objectContaining=function(t){return new e.ObjectContaining(t)},e.stringMatching=function(t){return new e.StringMatching(t)},e.arrayContaining=function(t){return new e.ArrayContaining(t)},e.arrayWithExactContents=function(t){return new e.ArrayWithExactContents(t)},e.createSpy=function(t,n){return e.Spy(t,n)},e.isSpy=function(t){return!!t&&(t.and instanceof e.SpyStrategy&&t.calls instanceof e.CallTracker)},e.createSpyObj=function(t,n){var r,i,o,s,u=e.isObject_(t)||e.isArray_(t)
if(u&&e.util.isUndefined(n)&&(n=t,t="unknown"),r={},i=!1,e.isArray_(n))for(o=0;o<n.length;o++)r[n[o]]=e.createSpy(t+"."+n[o]),i=!0
else if(e.isObject_(n))for(s in n)n.hasOwnProperty(s)&&(r[s]=e.createSpy(t+"."+s),r[s].and.returnValue(n[s]),i=!0)
if(!i)throw"createSpyObj requires a non-empty array or object of method names to create spies for"
return r}},getJasmineRequireObj().util=function(e){var t={inherit:function(e,t){var n=function(){}
n.prototype=t.prototype,e.prototype=new n},htmlEscape:function(e){return e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e},argsToArray:function(e){var t,n=[]
for(t=0;t<e.length;t++)n.push(e[t])
return n},isUndefined:function(e){return void 0===e},arrayContains:function(e,t){for(var n=e.length;n--;)if(e[n]===t)return!0
return!1},clone:function(e){var t,n
if("[object Array]"===Object.prototype.toString.apply(e))return e.slice()
for(n in t={},e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t},cloneArgs:function(t){var n,r,i,o=[],s=e.util.argsToArray(t)
for(n=0;n<s.length;n++)r=Object.prototype.toString.apply(s[n]),i=/^\[object (Boolean|String|RegExp|Number)/,!s[n]||r.match(i)?o.push(s[n]):o.push(e.util.clone(s[n]))
return o},getPropertyDescriptor:function(e,t){var n,r=e
do{n=Object.getOwnPropertyDescriptor(r,t),r=Object.getPrototypeOf(r)}while(!n&&r)
return n},objectDifference:function(e,n){var r,i={}
for(r in e)t.has(e,r)&&!t.has(n,r)&&(i[r]=e[r])
return i},has:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}
return t},getJasmineRequireObj().Spec=function(e){function t(e){this.expectationFactory=e.expectationFactory,this.resultCallback=e.resultCallback||function(){},this.id=e.id,this.description=e.description||"",this.queueableFn=e.queueableFn,this.beforeAndAfterFns=e.beforeAndAfterFns||function(){return{befores:[],afters:[]}},this.userContext=e.userContext||function(){return{}},this.onStart=e.onStart||function(){},this.getSpecName=e.getSpecName||function(){return""},this.expectationResultFactory=e.expectationResultFactory||function(){},this.queueRunnerFactory=e.queueRunnerFactory||function(){},this.catchingExceptions=e.catchingExceptions||function(){return!0},this.throwOnExpectationFailure=!!e.throwOnExpectationFailure,this.queueableFn.fn||this.pend(),this.result={id:this.id,description:this.description,fullName:this.getFullName(),failedExpectations:[],passedExpectations:[],deprecationWarnings:[],pendingReason:""}}t.prototype.addExpectationResult=function(t,n,r){var i=this.expectationResultFactory(n)
if(t)this.result.passedExpectations.push(i)
else if(this.result.failedExpectations.push(i),this.throwOnExpectationFailure&&!r)throw new e.errors.ExpectationFailed},t.prototype.expect=function(e){return this.expectationFactory(e,this)},t.prototype.execute=function(e,t){var n,r,i=this
function o(t){i.result.status=i.status(t),i.resultCallback(i.result),e&&e()}this.onStart(this),r={isLeaf:!0,queueableFns:(n=this.beforeAndAfterFns()).befores.concat(this.queueableFn),cleanupFns:n.afters,onException:function(){i.onException.apply(i,arguments)},onComplete:o,userContext:this.userContext()},this.isExecutable()&&!this.markedPending&&!1!==t||(r.queueableFns=[],r.cleanupFns=[],r.onComplete=function(){o(t)}),this.queueRunnerFactory(r)},t.prototype.onException=function(r){t.isPendingSpecException(r)?this.pend(n(r)):r instanceof e.errors.ExpectationFailed||this.addExpectationResult(!1,{matcherName:"",passed:!1,expected:"",actual:"",error:r},!0)},t.prototype.disable=function(){this.disabled=!0},t.prototype.pend=function(e){this.markedPending=!0,e&&(this.result.pendingReason=e)},t.prototype.getResult=function(){return this.result.status=this.status(),this.result},t.prototype.status=function(e){return this.disabled||!1===e?"disabled":this.markedPending?"pending":this.result.failedExpectations.length>0?"failed":"passed"},t.prototype.isExecutable=function(){return!this.disabled},t.prototype.getFullName=function(){return this.getSpecName(this)},t.prototype.addDeprecationWarning=function(e){this.result.deprecationWarnings.push(this.expectationResultFactory({message:e}))}
var n=function(e){var n=e.toString(),r=n.indexOf(t.pendingSpecExceptionMessage)+t.pendingSpecExceptionMessage.length
return n.substr(r)}
return t.pendingSpecExceptionMessage="=> marked Pending",t.isPendingSpecException=function(e){return!(!e||!e.toString||-1===e.toString().indexOf(t.pendingSpecExceptionMessage))},t},null==typeof window&&"object"==typeof exports&&(exports.Spec=jasmineRequire.Spec),getJasmineRequireObj().Order=function(){return function(e){this.random=!("random"in e)||e.random
var t=this.seed=e.seed||String(Math.random()).slice(-5)
function n(e){var t,n
for(t=n=0;n<e.length;++n)t+=e.charCodeAt(n),t+=t<<10,t^=t>>6
return t+=t<<3,t^=t>>11,t+=t<<15}this.sort=this.random?function(e){var r=e.slice()
return r.sort(function(e,r){return n(t+e.id)-n(t+r.id)}),r}:function(e){return e}}},getJasmineRequireObj().Env=function(e){return function(t){var n,r,i,o,s,u,a,c,l,p,f,h,d,m,y,g,b,E,x,w,v,T,S,j,R,O,F,A,C,_,M,q,N,k,P,D,I,J,B,L
function U(e){var t=b()
if(null!=t)throw new Error("'"+e+"' should only be used in 'describe' function")}function H(e,t){var r,i=h
i.addChild(e),h=e,r=null
try{t.call(e)}catch(e){r=e}r&&n.it("encountered a declaration exception",function(){throw r}),h=i}function G(){var e,t=function(e){for(;e;){if(e.isFocused)return e.id
e=e.parentSuite}return null}(h)
if(t)for(e=0;e<B.length;e++)if(B[e]===t){B.splice(e,1)
break}}n=this,r=(t=t||{}).global||e.getGlobal(),i=!1,o=0,s=!0,u=e.getGlobal().setTimeout,a=e.getGlobal().clearTimeout,c=e.getClearStack(e.getGlobal()),this.clock=new e.Clock(r,function(){return new e.DelayedFunctionScheduler},new e.MockDate(r)),l={},p=null,f=[],h=null,d=!1,m=!1,y=null,g=function(){return f[f.length-1]},b=function(){return p||g()},E=new e.ReportDispatcher(["jasmineStarted","jasmineDone","suiteStarted","suiteDone","specStarted","specDone"]),x=new e.GlobalErrors,this.specFilter=function(){return!0},this.addCustomEqualityTester=function(e){if(!b())throw new Error("Custom Equalities must be added in a before function or a spec")
l[b().id].customEqualityTesters.push(e)},this.addMatchers=function(e){var t,n
if(!b())throw new Error("Matchers must be added in a before function or a spec")
for(n in t=l[b().id].customMatchers,e)t[n]=e[n]},e.Expectation.addCoreMatchers(e.matchers),w=0,v=function(){return"spec"+w++},T=0,S=function(){return"suite"+T++},j=function(t,n){return e.Expectation.Factory({util:e.matchersUtil,customEqualityTesters:l[n.id].customEqualityTesters,customMatchers:l[n.id].customMatchers,actual:t,addExpectationResult:function(e,t){return n.addExpectationResult(e,t)}})},R=function(t,n){var r={spies:[],customEqualityTesters:[],customMatchers:{}}
l[n]&&(r.customEqualityTesters=e.util.clone(l[n].customEqualityTesters),r.customMatchers=e.util.clone(l[n].customMatchers)),l[t]=r},O=function(e){P.clearSpies(),delete l[e]},F=function(e){return function(){for(var t=[],n=[];e;)t=t.concat(e.beforeFns),n=n.concat(e.afterFns),e=e.parentSuite
return{befores:t.reverse(),afters:n}}},A=function(e,t){var n=[e.description],r=t.getFullName()
return""!==r&&n.unshift(r),n.join(" ")},C=e.buildExpectationResult,_=new e.ExceptionFormatter,M=function(e){return e.messageFormatter=_.message,e.stackFormatter=_.stack,C(e)},this.catchExceptions=function(e){return(s=!!e)||this.deprecated("The catchExceptions option is deprecated and will be replaced with stopOnSpecFailure in Jasmine 3.0"),s},this.catchingExceptions=function(){return s},q=function(t){return e.Spec.isPendingSpecException(t)||s},this.throwOnExpectationFailure=function(e){d=!!e},this.throwingExpectationFailures=function(){return d},this.randomizeTests=function(e){m=!!e},this.randomTests=function(){return m},this.seed=function(e){return e&&(y=e),y},this.deprecated=function(e){(b()||k).addDeprecationWarning(e),"undefined"!=typeof console&&void 0!==console.warn&&console.error("DEPRECATION: "+e)},N=function(t){t.catchException=q,t.clearStack=t.clearStack||c,t.timeout={setTimeout:u,clearTimeout:a},t.fail=n.fail,t.globalErrors=x,t.completeOnFirstError=d&&t.isLeaf,t.deprecated=n.deprecated,new e.QueueRunner(t).execute()},k=new e.Suite({env:this,id:S(),description:"Jasmine__TopLevel__Suite",expectationFactory:j,expectationResultFactory:M}),R(k.id),h=k,this.topSuite=function(){return k},this.execute=function(t){var n,r
if(i&&this.deprecated("Executing the same Jasmine multiple times will no longer work in Jasmine 3.0"),i=!0,t||(t=B.length?B:[k.id]),n=new e.Order({random:m,seed:y}),!(r=new e.TreeProcessor({tree:k,runnableIds:t,queueRunnerFactory:N,nodeStart:function(e){f.push(e),R(e.id,e.parentSuite.id),E.suiteStarted(e.result)},nodeComplete:function(e,t){if(e!==g())throw new Error("Tried to complete the wrong suite")
e.markedPending||O(e.id),f.pop(),E.suiteDone(t)},orderChildren:function(e){return n.sort(e.children)}})).processTree().valid)throw new Error("Invalid order: would cause a beforeAll or afterAll to be run multiple times")
E.jasmineStarted({totalSpecsDefined:o,order:n}),f.push(k),x.install(),r.execute(function(){O(k.id),f.pop(),x.uninstall(),E.jasmineDone({order:n,failedExpectations:k.result.failedExpectations,deprecationWarnings:k.result.deprecationWarnings})})},this.addReporter=function(e){E.addReporter(e)},this.provideFallbackReporter=function(e){E.provideFallbackReporter(e)},this.clearReporters=function(){E.clearReporters()},P=new e.SpyRegistry({currentSpies:function(){if(!b())throw new Error("Spies must be created in a before function or a spec")
return l[b().id].spies}}),this.allowRespy=function(e){P.allowRespy(e)},this.spyOn=function(){return P.spyOn.apply(P,arguments)},this.spyOnProperty=function(){return P.spyOnProperty.apply(P,arguments)},D=function(t,n){if(!e.isFunction_(t))throw new Error(n+" expects a function argument; received "+e.getType_(t))},I=function(t,n){if(!e.isFunction_(t)&&!e.isAsyncFunction_(t))throw new Error(n+" expects a function argument; received "+e.getType_(t))},J=function(t){return new e.Suite({env:n,id:S(),description:t,parentSuite:h,expectationFactory:j,expectationResultFactory:M,throwOnExpectationFailure:d})},this.describe=function(e,t){U("describe"),D(t,"describe")
var n=J(e)
if(t.length>0)throw new Error("describe does not expect any arguments")
return h.markedPending&&n.pend(),H(n,t),n},this.xdescribe=function(e,t){U("xdescribe"),D(t,"xdescribe")
var n=J(e)
return n.pend(),H(n,t),n},B=[],this.fdescribe=function(e,t){this.deprecated("fit and fdescribe will cause your suite to report an 'incomplete' status in Jasmine 3.0"),U("fdescribe"),D(t,"fdescribe")
var n=J(e)
return n.isFocused=!0,B.push(n.id),G(),H(n,t),n},L=function(t,r,i,s){o++
var u=new e.Spec({id:v(),beforeAndAfterFns:F(i),expectationFactory:j,resultCallback:function(e){O(u.id),p=null,E.specDone(e)},getSpecName:function(e){return A(e,i)},onStart:function(e){p=e,R(e.id,i.id),E.specStarted(e.result)},description:t,expectationResultFactory:M,queueRunnerFactory:N,userContext:function(){return i.clonedSharedUserContext()},queueableFn:{fn:r,timeout:function(){return s||e.DEFAULT_TIMEOUT_INTERVAL}},throwOnExpectationFailure:d})
return n.specFilter(u)||u.disable(),u},this.it=function(e,t,n){U("it"),arguments.length>1&&void 0!==t&&I(t,"it")
var r=L(e,t,h,n)
return h.markedPending&&r.pend(),h.addChild(r),r},this.xit=function(e,t,n){U("xit"),arguments.length>1&&void 0!==t&&I(t,"xit")
var r=this.it.apply(this,arguments)
return r.pend("Temporarily disabled with xit"),r},this.fit=function(e,t,n){this.deprecated("fit and fdescribe will cause your suite to report an 'incomplete' status in Jasmine 3.0"),U("fit"),I(t,"fit")
var r=L(e,t,h,n)
return h.addChild(r),B.push(r.id),G(),r},this.expect=function(e){if(!b())throw new Error("'expect' was used when there was no current spec, this could be because an asynchronous test timed out")
return b().expect(e)},this.beforeEach=function(t,n){U("beforeEach"),I(t,"beforeEach"),h.beforeEach({fn:t,timeout:function(){return n||e.DEFAULT_TIMEOUT_INTERVAL}})},this.beforeAll=function(t,n){U("beforeAll"),I(t,"beforeAll"),h.beforeAll({fn:t,timeout:function(){return n||e.DEFAULT_TIMEOUT_INTERVAL}})},this.afterEach=function(t,n){U("afterEach"),I(t,"afterEach"),t.isCleanup=!0,h.afterEach({fn:t,timeout:function(){return n||e.DEFAULT_TIMEOUT_INTERVAL}})},this.afterAll=function(t,n){U("afterAll"),I(t,"afterAll"),h.afterAll({fn:t,timeout:function(){return n||e.DEFAULT_TIMEOUT_INTERVAL}})},this.pending=function(t){var n=e.Spec.pendingSpecExceptionMessage
throw t&&(n+=t),n},this.fail=function(e){if(!b())throw new Error("'fail' was used when there was no current spec, this could be because an asynchronous test timed out")
var t="Failed"
if(e&&(t+=": ",e.message?t+=e.message:jasmine.isString_(e)?t+=e:t+=jasmine.pp(e)),b().addExpectationResult(!1,{matcherName:"",passed:!1,expected:"",actual:"",message:t,error:e&&e.message?e:null}),n.throwingExpectationFailures())throw new Error(t)}}},getJasmineRequireObj().JsApiReporter=function(){var e={start:function(){},elapsed:function(){return 0}}
return function(t){var n,r,i,o,s=t.timer||e,u="loaded"
this.started=!1,this.finished=!1,this.runDetails={},this.jasmineStarted=function(){this.started=!0,u="started",s.start()},this.jasmineDone=function(e){this.finished=!0,this.runDetails=e,n=s.elapsed(),u="done"},this.status=function(){return u},r=[],i={},this.suiteStarted=function(e){i[e.id]=e},this.suiteDone=function(e){var t
t=e,r.push(t),i[t.id]=t},this.suiteResults=function(e,t){return r.slice(e,e+t)},this.suites=function(){return i},o=[],this.specDone=function(e){o.push(e)},this.specResults=function(e,t){return o.slice(e,e+t)},this.specs=function(){return o},this.executionTime=function(){return n}}},getJasmineRequireObj().Any=function(e){function t(e){if(void 0===e)throw new TypeError("jasmine.any() expects to be passed a constructor function. Please pass one or use jasmine.anything() to match any object.")
this.expectedObject=e}return t.prototype.asymmetricMatch=function(t){return this.expectedObject==String?"string"==typeof t||t instanceof String:this.expectedObject==Number?"number"==typeof t||t instanceof Number:this.expectedObject==Function?"function"==typeof t||t instanceof Function:this.expectedObject==Object?(null===t&&e.getEnv().deprecated("jasmine.Any(Object) will no longer match null in Jasmine 3.0"),"object"==typeof t):this.expectedObject==Boolean?"boolean"==typeof t:"undefined"!=typeof Symbol&&this.expectedObject==Symbol?"symbol"==typeof t:t instanceof this.expectedObject},t.prototype.jasmineToString=function(){return"<jasmine.any("+e.fnNameFor(this.expectedObject)+")>"},t},getJasmineRequireObj().Anything=function(e){function t(){}return t.prototype.asymmetricMatch=function(t){return!e.util.isUndefined(t)&&null!==t},t.prototype.jasmineToString=function(){return"<jasmine.anything>"},t},getJasmineRequireObj().ArrayContaining=function(e){function t(e){this.sample=e}return t.prototype.asymmetricMatch=function(t,n){var r,i
if(!e.isArray_(this.sample))throw new Error("You must provide an array to arrayContaining, not "+e.pp(this.sample)+".")
for(r=0;r<this.sample.length;r++)if(i=this.sample[r],!e.matchersUtil.contains(t,i,n))return!1
return!0},t.prototype.jasmineToString=function(){return"<jasmine.arrayContaining("+jasmine.pp(this.sample)+")>"},t},getJasmineRequireObj().ArrayWithExactContents=function(e){function t(e){this.sample=e}return t.prototype.asymmetricMatch=function(t,n){var r,i
if(!e.isArray_(this.sample))throw new Error("You must provide an array to arrayWithExactContents, not "+e.pp(this.sample)+".")
if(this.sample.length!==t.length)return!1
for(r=0;r<this.sample.length;r++)if(i=this.sample[r],!e.matchersUtil.contains(t,i,n))return!1
return!0},t.prototype.jasmineToString=function(){return"<jasmine.arrayWithExactContents "+e.pp(this.sample)+">"},t},getJasmineRequireObj().ObjectContaining=function(e){function t(e){this.sample=e}function n(e,t){return!!e&&(!!Object.prototype.hasOwnProperty.call(e,t)||n((r=e,Object.getPrototypeOf?Object.getPrototypeOf(r):r.constructor.prototype==r?null:r.constructor.prototype),t))
var r}return t.prototype.asymmetricMatch=function(t,r){if("object"!=typeof this.sample)throw new Error("You must provide an object to objectContaining, not '"+this.sample+"'.")
for(var i in this.sample)if(!n(t,i)||!e.matchersUtil.equals(this.sample[i],t[i],r))return!1
return!0},t.prototype.jasmineToString=function(){return"<jasmine.objectContaining("+e.pp(this.sample)+")>"},t},getJasmineRequireObj().StringMatching=function(e){function t(t){if(!e.isString_(t)&&!e.isA_("RegExp",t))throw new Error("Expected is not a String or a RegExp")
this.regexp=new RegExp(t)}return t.prototype.asymmetricMatch=function(e){return this.regexp.test(e)},t.prototype.jasmineToString=function(){return"<jasmine.stringMatching("+this.regexp+")>"},t},getJasmineRequireObj().CallTracker=function(e){return function(){var t=[],n={}
this.track=function(r){n.cloneArgs&&(r.args=e.util.cloneArgs(r.args)),t.push(r)},this.any=function(){return!!t.length},this.count=function(){return t.length},this.argsFor=function(e){var n=t[e]
return n?n.args:[]},this.all=function(){return t},this.allArgs=function(){var e,n=[]
for(e=0;e<t.length;e++)n.push(t[e].args)
return n},this.first=function(){return t[0]},this.mostRecent=function(){return t[t.length-1]},this.reset=function(){t=[]},this.saveArgumentsByValue=function(){n.cloneArgs=!0}}},getJasmineRequireObj().clearStack=function(e){var t=10
return function(n){var r,i,o,s,u,a,c,l,p=0,f=n.setTimeout,h=function(e){Function.prototype.apply.apply(f,[n,[e,0]])}
return e.isFunction_(n.setImmediate)?(r=n.setImmediate,function(e){++p<t?r(e):(p=0,h(e))}):e.util.isUndefined(n.MessageChannel)?h:(o=h,u=new(i=n).MessageChannel,c=a={},l=!1,u.port1.onmessage=function(){var e=(a=a.next).task
if(delete a.task,l)i.setTimeout(e,0)
else try{l=!0,e()}finally{l=!1}},s=0,function(e){++s<t?(c=c.next={task:e},u.port2.postMessage(0)):(s=0,o(e))})}},getJasmineRequireObj().Clock=function(){var e="undefined"!=typeof process&&process.versions&&"string"==typeof process.versions.node
function t(){}return t.prototype.ref=function(){return this},t.prototype.unref=function(){return this},function(n,r,i){var o,s,u=this,a={setTimeout:n.setTimeout,clearTimeout:n.clearTimeout,setInterval:n.setInterval,clearInterval:n.clearInterval},c={setTimeout:function(n,r){if(!e)return o.scheduleFunction(n,r,h(arguments,2))
var i=new t
return o.scheduleFunction(n,r,h(arguments,2),!1,i),i},clearTimeout:function(e){return o.removeFunctionWithId(e)},setInterval:function(n,r){if(!e)return o.scheduleFunction(n,r,h(arguments,2),!0)
var i=new t
return o.scheduleFunction(n,r,h(arguments,2),!0,i),i},clearInterval:function(e){return o.removeFunctionWithId(e)}},l=!1
return u.FakeTimeout=t,u.install=function(){if(n.setTimeout!==a.setTimeout||n.clearTimeout!==a.clearTimeout||n.setInterval!==a.setInterval||n.clearInterval!==a.clearInterval)throw new Error("Jasmine Clock was unable to install over custom global timer functions. Is the clock already installed?")
return f(n,c),s=c,o=r(),l=!0,u},u.uninstall=function(){o=null,i.uninstall(),f(n,a),s=a,l=!1},u.withMock=function(e){this.install()
try{e()}finally{this.uninstall()}},u.mockDate=function(e){i.install(e)},u.setTimeout=function(e,t,r){if(p()){if(arguments.length>2)throw new Error("IE < 9 cannot support extra params to setTimeout without a polyfill")
return s.setTimeout(e,t)}return Function.prototype.apply.apply(s.setTimeout,[n,arguments])},u.setInterval=function(e,t,r){if(p()){if(arguments.length>2)throw new Error("IE < 9 cannot support extra params to setInterval without a polyfill")
return s.setInterval(e,t)}return Function.prototype.apply.apply(s.setInterval,[n,arguments])},u.clearTimeout=function(e){return Function.prototype.call.apply(s.clearTimeout,[n,e])},u.clearInterval=function(e){return Function.prototype.call.apply(s.clearInterval,[n,e])},u.tick=function(e){if(!l)throw new Error("Mock clock is not installed, use jasmine.clock().install()")
o.tick(e,function(e){i.tick(e)})},u
function p(){return!(a.setTimeout||a.setInterval).apply}function f(e,t){for(var n in t)e[n]=t[n]}function h(e,t){return Array.prototype.slice.call(e,t)}}},getJasmineRequireObj().DelayedFunctionScheduler=function(j$){function DelayedFunctionScheduler(){var self=this,scheduledLookup=[],scheduledFunctions={},currentTime=0,delayedFnCount=0,deletedKeys=[]
return self.tick=function(e,t){var n=currentTime+(e=e||0)
runScheduledFunctions(n,t),currentTime=n},self.scheduleFunction=function(funcToCall,millis,params,recurring,timeoutKey,runAtMillis){var f,funcToSchedule
return f="string"==typeof funcToCall?function(){return eval(funcToCall)}:funcToCall,millis=millis||0,timeoutKey=timeoutKey||++delayedFnCount,runAtMillis=runAtMillis||currentTime+millis,funcToSchedule={runAtMillis:runAtMillis,funcToCall:f,recurring:recurring,params:params,timeoutKey:timeoutKey,millis:millis},runAtMillis in scheduledFunctions?scheduledFunctions[runAtMillis].push(funcToSchedule):(scheduledFunctions[runAtMillis]=[funcToSchedule],scheduledLookup.push(runAtMillis),scheduledLookup.sort(function(e,t){return e-t})),timeoutKey},self.removeFunctionWithId=function(e){var t,n,r
for(t in deletedKeys.push(e),scheduledFunctions)if((r=indexOfFirstToPass(n=scheduledFunctions[t],function(t){return t.timeoutKey===e}))>-1){1===n.length?(delete scheduledFunctions[t],deleteFromLookup(t)):n.splice(r,1)
break}},self
function indexOfFirstToPass(e,t){var n,r=-1
for(n=0;n<e.length;++n)if(t(e[n])){r=n
break}return r}function deleteFromLookup(e){var t=Number(e),n=indexOfFirstToPass(scheduledLookup,function(e){return e===t})
n>-1&&scheduledLookup.splice(n,1)}function reschedule(e){self.scheduleFunction(e.funcToCall,e.millis,e.params,!0,e.timeoutKey,e.runAtMillis+e.millis)}function forEachFunction(e,t){for(var n=0;n<e.length;++n)t(e[n])}function runScheduledFunctions(e,t){var n,r
if(t=t||function(){},0===scheduledLookup.length||scheduledLookup[0]>e)t(e-currentTime)
else{do{deletedKeys=[],t((n=scheduledLookup.shift())-currentTime),r=scheduledFunctions[currentTime=n],delete scheduledFunctions[currentTime],forEachFunction(r,function(e){e.recurring&&reschedule(e)}),forEachFunction(r,function(e){j$.util.arrayContains(deletedKeys,e.timeoutKey)||e.funcToCall.apply(null,e.params||[])})}while(scheduledLookup.length>0&&currentTime!==e&&scheduledLookup[0]<=e)
currentTime!==e&&t(e-currentTime)}}}return DelayedFunctionScheduler},getJasmineRequireObj().errors=function(){function e(){}return e.prototype=new Error,e.prototype.constructor=e,{ExpectationFailed:e}},getJasmineRequireObj().ExceptionFormatter=function(){return function(){this.message=function(e){var t=""
return e.name&&e.message?t+=e.name+": "+e.message:t+=e.toString()+" thrown",(e.fileName||e.sourceURL)&&(t+=" in "+(e.fileName||e.sourceURL)),(e.line||e.lineNumber)&&(t+=" (line "+(e.line||e.lineNumber)+")"),t},this.stack=function(e){return e?e.stack:null}}},getJasmineRequireObj().Expectation=function(){function e(t){var n,r
for(r in this.util=t.util||{buildFailureMessage:function(){}},this.customEqualityTesters=t.customEqualityTesters||[],this.actual=t.actual,this.addExpectationResult=t.addExpectationResult||function(){},this.isNot=t.isNot,n=t.customMatchers||{})this[r]=e.prototype.wrapCompare(r,n[r])}return e.prototype.wrapCompare=function(e,t){return function(){var n,r,i,o=Array.prototype.slice.call(arguments,0),s=o.slice(0),u=""
o.unshift(this.actual),r=(n=t(this.util,this.customEqualityTesters)).compare,this.isNot&&(r=n.negativeCompare||function(){var e=n.compare.apply(null,o)
return e.pass=!e.pass,e}),(i=r.apply(null,o)).pass||(i.message?u="[object Function]"===Object.prototype.toString.apply(i.message)?i.message():i.message:(o.unshift(this.isNot),o.unshift(e),u=this.util.buildFailureMessage.apply(null,o))),1==s.length&&(s=s[0]),this.addExpectationResult(i.pass,{matcherName:e,passed:i.pass,message:u,error:i.error,actual:this.actual,expected:s})}},e.addCoreMatchers=function(t){var n,r,i=e.prototype
for(n in t)r=t[n],i[n]=i.wrapCompare(n,r)},e.Factory=function(t){var n=new e(t=t||{})
return t.isNot=!0,n.not=new e(t),n},e},getJasmineRequireObj().buildExpectationResult=function(){return function(e){var t=e.messageFormatter||function(){},n=e.stackFormatter||function(){},r={matcherName:e.matcherName,message:i(),stack:function(){if(e.passed)return""
var t=e.error
if(!t)try{throw new Error(i())}catch(e){t=e}return n(t)}(),passed:e.passed}
return r.passed||(r.expected=e.expected,r.actual=e.actual),r
function i(){return e.passed?"Passed.":e.message?e.message:e.error?t(e.error):""}}},getJasmineRequireObj().formatErrorMsg=function(){return function(e,t){var n=t?"\nUsage: "+t:""
return function(t){return e+" : "+t+n}}},getJasmineRequireObj().GlobalErrors=function(e){return function(t){var n,r=[]
t=t||e.getGlobal(),n=function(){var e=r[r.length-1]
if(!e)throw arguments[0]
e.apply(null,Array.prototype.slice.call(arguments,0))},this.uninstall=function(){},this.install=function(){var r,i
t.process&&t.process.listeners&&e.isFunction_(t.process.on)?(r=t.process.listeners("uncaughtException"),t.process.removeAllListeners("uncaughtException"),t.process.on("uncaughtException",n),this.uninstall=function(){t.process.removeListener("uncaughtException",n)
for(var e=0;e<r.length;e++)t.process.on("uncaughtException",r[e])}):(i=t.onerror,t.onerror=n,this.uninstall=function(){t.onerror=i})},this.pushListener=function(e){r.push(e)},this.popListener=function(){r.pop()}}},getJasmineRequireObj().DiffBuilder=function(e){return function(){var t=new e.ObjectPath,n=[]
return{record:function(e,i,o){o=o||r,n.push(o(e,i,t))},getMessage:function(){return n.join("\n")},withPath:function(e,n){var r=t
t=t.add(e),n(),t=r}}
function r(t,n,r){return"Expected "+r+(r.depth()?" = ":"")+e.pp(t)+" to equal "+e.pp(n)+"."}}},getJasmineRequireObj().matchersUtil=function(e){return{equals:n,contains:function(e,t,r){if(r=r||[],"[object Set]"===Object.prototype.toString.apply(e))return e.has(t)
if("[object Array]"===Object.prototype.toString.apply(e)||e&&!e.indexOf){for(var i=0;i<e.length;i++)if(n(e[i],t,r))return!0
return!1}return!!e&&e.indexOf(t)>=0},buildFailureMessage:function(){var t,n=Array.prototype.slice.call(arguments,0),r=n[0],i=n[1],o=n[2],s=n.slice(3),u=r.replace(/[A-Z]/g,function(e){return" "+e.toLowerCase()}),a="Expected "+e.pp(o)+(i?" not ":" ")+u
if(s.length>0)for(t=0;t<s.length;t++)t>0&&(a+=","),a+=" "+e.pp(s[t])
return a+"."}}
function t(t){return t&&e.isA_("Function",t.asymmetricMatch)}function n(n,u,a,c){return function n(u,a,c,l,p,f){var h,d,m,y,g,b,E,x,w,v,T,S,j,R,O,F,A,C,_,M,q,N,k,P,D,I,J,B,L,U,H,G,Y,W,V,X,K,z,$,Q,Z,ee,te=!0,ne=function(e,n,r,i){var o,s=t(e),u=t(n)
if(!s||!u)return s?((o=e.asymmetricMatch(n,r))||i.record(e,n),o):u?((o=n.asymmetricMatch(e,r))||i.record(e,n),o):void 0}(u,a,p,f)
if(!e.util.isUndefined(ne))return ne
for(h=0;h<p.length;h++)if(d=p[h](u,a),!e.util.isUndefined(d))return d||f.record(u,a),d
if(u instanceof Error&&a instanceof Error)return(te=u.message==a.message)||f.record(u,a),te
if(u===a)return(te=0!==u||1/u==1/a)||f.record(u,a),te
if(null===u||null===a)return(te=u===a)||f.record(u,a),te
m=Object.prototype.toString.call(u)
if(m!=Object.prototype.toString.call(a))return f.record(u,a),!1
switch(m){case"[object String]":return(te=u==String(a))||f.record(u,a),te
case"[object Number]":return(te=u!=+u?a!=+a:0===u?1/u==1/a:u==+a)||f.record(u,a),te
case"[object Date]":case"[object Boolean]":return(te=+u==+a)||f.record(u,a),te
case"[object RegExp]":return u.source==a.source&&u.global==a.global&&u.multiline==a.multiline&&u.ignoreCase==a.ignoreCase}if("object"!=typeof u||"object"!=typeof a)return f.record(u,a),!1
y=e.isDomNode(u)
g=e.isDomNode(a)
if(y&&g)return u.isEqualNode?((te=u.isEqualNode(a))||f.record(u,a),te):(b=u instanceof Element,E=a instanceof Element,b&&E?((te=u.outerHTML==a.outerHTML)||f.record(u,a),te):b||E?(f.record(u,a),!1):((te=u.innerText==a.innerText&&u.textContent==a.textContent)||f.record(u,a),te))
if(y||g)return f.record(u,a),!1
x=e.isPromise(u)
w=e.isPromise(a)
if(x&&w)return u===a
v=c.length
for(;v--;)if(c[v]==u)return l[v]==a
c.push(u)
l.push(a)
T=0
if("[object Array]"==m){for(S=u.length,j=a.length,f.withPath("length",function(){S!==j&&(f.record(S,j),te=!1)}),h=0;h<S||h<j;h++)f.withPath(h,function(){te=n(h<S?u[h]:void 0,h<j?a[h]:void 0,c,l,p,f)&&te})
if(!te)return!1}else if(e.isMap(u)&&e.isMap(a)){if(u.size!=a.size)return f.record(u,a),!1
for(R=[],O=[],u.forEach(function(e,t){R.push(t)}),a.forEach(function(e,t){O.push(t)}),F=[R,O],A=[O,R],h=0;te&&h<F.length;h++)for(C=F[h],N=A[h],P=0;te&&P<C.length;P++)_=C[P],k=N[P],M=u.get(_),q=t(_)||t(k)&&n(_,k,c,l,p,e.NullDiffBuilder())?a.get(k):a.get(_),te=n(M,q,c,l,p,e.NullDiffBuilder())
if(!te)return f.record(u,a),!1}else if(e.isSet(u)&&e.isSet(a)){if(u.size!=a.size)return f.record(u,a),!1
for(D=[],u.forEach(function(e){D.push(e)}),I=[],a.forEach(function(e){I.push(e)}),J=[[D,I],[I,D]],B=[[c,l],[l,c]],h=0;te&&h<J.length;h++)for(L=J[h][0],G=J[h][1],H=B[h][0],W=B[h][1],K=0;te&&K<L.length;K++){for(U=L[K],V=!1,z=0;!V&&z<G.length;z++)Y=G[z],X=H.length,(V=n(U,Y,H,W,p,e.NullDiffBuilder()))||X===H.length||(H.splice(X),W.splice(X))
te=te&&V}if(!te)return f.record(u,a),!1}else if($=u.constructor,Q=a.constructor,$!==Q&&i($)&&i(Q)&&u instanceof $&&a instanceof Q&&!($ instanceof $&&Q instanceof Q))return f.record(u,a,s),!1
Z=r(u,"[object Array]"==m)
T=Z.length
if(r(a,"[object Array]"==m).length!==T)return f.record(u,a,o),!1
for(h=0;h<T;h++)ee=Z[h],e.util.has(a,ee)?f.withPath(ee,function(){n(u[ee],a[ee],c,l,p,f)||(te=!1)}):(f.record(u,a,o),te=!1)
if(!te)return!1
c.pop()
l.pop()
return te}(n,u,[],[],a=a||[],c=c||e.NullDiffBuilder())}function r(t,n){var r,i,o=Object.keys?Object.keys(t):function(t){var n,r=[]
for(n in t)e.util.has(t,n)&&r.push(n)
return r}(t)
if(!n)return o
if(0===o.length)return o
for(r=[],i=0;i<o.length;i++)/^[0-9]+$/.test(o[i])||r.push(o[i])
return r}function i(e){return"function"==typeof e}function o(t,n,r){var i=e.util.objectDifference(n,t),o=e.util.objectDifference(t,n),s=u(i),a=u(o),c=[]
return r.depth()||(r="object"),s.length&&c.push("Expected "+r+" to have properties"+s),a.length&&c.push("Expected "+r+" not to have properties"+a),c.join("\n")}function s(t,n,r){return r.depth()||(r="object"),"Expected "+r+" to be a kind of "+e.fnNameFor(n.constructor)+", but was "+e.pp(t)+"."}function u(t){var n,r=""
for(n in t)r+="\n    "+n+": "+e.pp(t[n])
return r}},getJasmineRequireObj().nothing=function(){return function(){return{compare:function(){return{pass:!0}}}}},getJasmineRequireObj().NullDiffBuilder=function(e){return function(){return{withPath:function(e,t){t()},record:function(){}}}},getJasmineRequireObj().ObjectPath=function(e){function t(e){this.components=e||[]}function n(e){return"number"==typeof e?"["+e+"]":/^[A-Za-z\$_][A-Za-z0-9\$_]*$/.test(e)?"."+e:"['"+e+"']"}return t.prototype.toString=function(){return this.components.length?"$"+function(e,t){for(var n=[],r=0;r<e.length;r++)n.push(t(e[r]))
return n}(this.components,n).join(""):""},t.prototype.add=function(e){return new t(this.components.concat([e]))},t.prototype.depth=function(){return this.components.length},t},getJasmineRequireObj().toBe=function(){return function(){return{compare:function(e,t){return{pass:e===t}}}}},getJasmineRequireObj().toBeCloseTo=function(){return function(){return{compare:function(e,t,n){var r,i,o
if(0!==n&&(n=n||2),null===t||null===e)throw new Error("Cannot use toBeCloseTo with null. Arguments evaluated to: expect("+e+").toBeCloseTo("+t+").")
return r=Math.pow(10,n+1),i=Math.abs(t-e),o=Math.pow(10,-n)/2,{pass:Math.round(i*r)/r<=o}}}}},getJasmineRequireObj().toBeDefined=function(){return function(){return{compare:function(e){return{pass:void 0!==e}}}}},getJasmineRequireObj().toBeFalsy=function(){return function(){return{compare:function(e){return{pass:!e}}}}},getJasmineRequireObj().toBeGreaterThan=function(){return function(){return{compare:function(e,t){return{pass:e>t}}}}},getJasmineRequireObj().toBeGreaterThanOrEqual=function(){return function(){return{compare:function(e,t){return{pass:e>=t}}}}},getJasmineRequireObj().toBeLessThan=function(){return function(){return{compare:function(e,t){return{pass:e<t}}}}},getJasmineRequireObj().toBeLessThanOrEqual=function(){return function(){return{compare:function(e,t){return{pass:e<=t}}}}},getJasmineRequireObj().toBeNaN=function(e){return function(){return{compare:function(t){var n={pass:t!=t}
return n.pass?n.message="Expected actual not to be NaN.":n.message=function(){return"Expected "+e.pp(t)+" to be NaN."},n}}}},getJasmineRequireObj().toBeNegativeInfinity=function(e){return function(){return{compare:function(t){var n={pass:t===Number.NEGATIVE_INFINITY}
return n.pass?n.message="Expected actual to be -Infinity.":n.message=function(){return"Expected "+e.pp(t)+" not to be -Infinity."},n}}}},getJasmineRequireObj().toBeNull=function(){return function(){return{compare:function(e){return{pass:null===e}}}}},getJasmineRequireObj().toBePositiveInfinity=function(e){return function(){return{compare:function(t){var n={pass:t===Number.POSITIVE_INFINITY}
return n.pass?n.message="Expected actual to be Infinity.":n.message=function(){return"Expected "+e.pp(t)+" not to be Infinity."},n}}}},getJasmineRequireObj().toBeTruthy=function(){return function(){return{compare:function(e){return{pass:!!e}}}}},getJasmineRequireObj().toBeUndefined=function(){return function(){return{compare:function(e){return{pass:void 0===e}}}}},getJasmineRequireObj().toContain=function(){return function(e,t){return t=t||[],{compare:function(n,r){return{pass:e.contains(n,r,t)}}}}},getJasmineRequireObj().toEqual=function(e){return function(t,n){return n=n||[],{compare:function(r,i){var o={pass:!1},s=e.DiffBuilder()
return o.pass=t.equals(r,i,n,s),o.message=s.getMessage(),o}}}},getJasmineRequireObj().toHaveBeenCalled=function(e){var t=e.formatErrorMsg("<toHaveBeenCalled>","expect(<spyObj>).toHaveBeenCalled()")
return function(){return{compare:function(n){var r={}
if(!e.isSpy(n))throw new Error(t("Expected a spy, but got "+e.pp(n)+"."))
if(arguments.length>1)throw new Error(t("Does not take arguments, use toHaveBeenCalledWith"))
return r.pass=n.calls.any(),r.message=r.pass?"Expected spy "+n.and.identity()+" not to have been called.":"Expected spy "+n.and.identity()+" to have been called.",r}}}},getJasmineRequireObj().toHaveBeenCalledBefore=function(e){var t=e.formatErrorMsg("<toHaveBeenCalledBefore>","expect(<spyObj>).toHaveBeenCalledBefore(<spyObj>)")
return function(){return{compare:function(n,r){var i,o,s,u,a
if(!e.isSpy(n))throw new Error(t("Expected a spy, but got "+e.pp(n)+"."))
if(!e.isSpy(r))throw new Error(t("Expected a spy, but got "+e.pp(r)+"."))
return i={pass:!1},n.calls.count()?r.calls.count()?(o=n.calls.mostRecent().invocationOrder,s=r.calls.first().invocationOrder,i.pass=o<s,i.pass?i.message="Expected spy "+n.and.identity()+" to not have been called before spy "+r.and.identity()+", but it was":(u=n.calls.first().invocationOrder,a=r.calls.mostRecent().invocationOrder,i.message=u<s?"Expected latest call to spy "+n.and.identity()+" to have been called before first call to spy "+r.and.identity()+" (no interleaved calls)":a>o?"Expected first call to spy "+r.and.identity()+" to have been called after latest call to spy "+n.and.identity()+" (no interleaved calls)":"Expected spy "+n.and.identity()+" to have been called before spy "+r.and.identity()),i):(i.message="Expected spy "+r.and.identity()+" to have been called.",i):(i.message="Expected spy "+n.and.identity()+" to have been called.",i)}}}},getJasmineRequireObj().toHaveBeenCalledTimes=function(e){var t=e.formatErrorMsg("<toHaveBeenCalledTimes>","expect(<spyObj>).toHaveBeenCalledTimes(<Number>)")
return function(){return{compare:function(n,r){var i,o,s,u
if(!e.isSpy(n))throw new Error(t("Expected a spy, but got "+e.pp(n)+"."))
if(i=Array.prototype.slice.call(arguments,0),o={pass:!1},!e.isNumber_(r))throw new Error(t("The expected times failed is a required argument and must be a number."))
return s=(n=i[0]).calls.count(),u=1===r?"once":r+" times",o.pass=s===r,o.message=o.pass?"Expected spy "+n.and.identity()+" not to have been called "+u+". It was called "+s+" times.":"Expected spy "+n.and.identity()+" to have been called "+u+". It was called "+s+" times.",o}}}},getJasmineRequireObj().toHaveBeenCalledWith=function(e){var t=e.formatErrorMsg("<toHaveBeenCalledWith>","expect(<spyObj>).toHaveBeenCalledWith(...arguments)")
return function(n,r){return{compare:function(){var i=Array.prototype.slice.call(arguments,0),o=i[0],s=i.slice(1),u={pass:!1}
if(!e.isSpy(o))throw new Error(t("Expected a spy, but got "+e.pp(o)+"."))
return o.calls.any()?(n.contains(o.calls.allArgs(),s,r)?(u.pass=!0,u.message=function(){return"Expected spy "+o.and.identity()+" not to have been called with "+e.pp(s)+" but it was."}):u.message=function(){return"Expected spy "+o.and.identity()+" to have been called with "+e.pp(s)+" but actual calls were "+e.pp(o.calls.allArgs()).replace(/^\[ | \]$/g,"")+"."},u):(u.message=function(){return"Expected spy "+o.and.identity()+" to have been called with "+e.pp(s)+" but it was never called."},u)}}}},getJasmineRequireObj().toMatch=function(e){var t=e.formatErrorMsg("<toMatch>","expect(<expectation>).toMatch(<string> || <regexp>)")
return function(){return{compare:function(n,r){if(!e.isString_(r)&&!e.isA_("RegExp",r))throw new Error(t("Expected is not a String or a RegExp"))
return{pass:new RegExp(r).test(n)}}}}},getJasmineRequireObj().toThrow=function(e){var t=e.formatErrorMsg("<toThrow>","expect(function() {<expectation>}).toThrow()")
return function(n){return{compare:function(r,i){var o,s={pass:!1},u=!1
if("function"!=typeof r)throw new Error(t("Actual is not a Function"))
try{r()}catch(e){u=!0,o=e}return u?1==arguments.length?(s.pass=!0,s.message=function(){return"Expected function not to throw, but it threw "+e.pp(o)+"."},s):(n.equals(o,i)?(s.pass=!0,s.message=function(){return"Expected function not to throw "+e.pp(i)+"."}):s.message=function(){return"Expected function to throw "+e.pp(i)+", but it threw "+e.pp(o)+"."},s):(s.message="Expected function to throw an exception.",s)}}}},getJasmineRequireObj().toThrowError=function(e){var t=e.formatErrorMsg("<toThrowError>","expect(function() {<expectation>}).toThrowError(<ErrorConstructor>, <message>)")
return function(){return{compare:function(i){var o,s,u=!1,a={pass:!0},c={pass:!1}
if("function"!=typeof i)throw new Error(t("Actual is not a Function"))
s=function(){var r,i=null,o=null
if(2==arguments.length)n(i=arguments[1])&&(o=i,i=null)
else if(arguments.length>2&&(o=arguments[1],i=arguments[2],!n(o)))throw new Error(t("Expected error type is not an Error."))
if(i&&!((r=i)instanceof RegExp||"string"==typeof r))throw o?new Error(t("Expected error message is not a string or RegExp.")):new Error(t("Expected is not an Error, string, or RegExp."))
return{errorTypeDescription:o?e.fnNameFor(o):"an exception",thrownDescription:function(t){var n=o?e.fnNameFor(t.constructor):"an exception",r=""
return i&&(r=" with message "+e.pp(t.message)),n+r},messageDescription:function(){return null===i?"":i instanceof RegExp?" with a message matching "+e.pp(i):" with message "+e.pp(i)},hasNoSpecifics:function(){return null===i&&null===o},matches:function(e){return(null===o||e instanceof o)&&(null===i||(t=e.message,"string"==typeof i?i==t:i.test(t)))
var t}}}.apply(null,arguments)
try{i()}catch(e){u=!0,o=e}return u?r(o)?s.hasNoSpecifics()?(a.message="Expected function not to throw an Error, but it threw "+e.fnNameFor(o)+".",a):s.matches(o)?(a.message=function(){return"Expected function not to throw "+s.errorTypeDescription+s.messageDescription()+"."},a):(c.message=function(){return"Expected function to throw "+s.errorTypeDescription+s.messageDescription()+", but it threw "+s.thrownDescription(o)+"."},c):(c.message=function(){return"Expected function to throw an Error, but it threw "+e.pp(o)+"."},c):(c.message="Expected function to throw an Error.",c)}}
function n(e){if("function"!=typeof e)return!1
var t=function(){}
return t.prototype=e.prototype,r(new t)}function r(e){return e instanceof Error||!!(e&&e.constructor&&e.constructor.constructor&&e instanceof e.constructor.constructor("return this")().Error)}}},getJasmineRequireObj().MockDate=function(){return function(e){var t,n=this,r=0
return e&&e.Date?(t=e.Date,n.install=function(n){r=n instanceof t?n.getTime():(new t).getTime(),e.Date=i},n.tick=function(e){r+=e=e||0},n.uninstall=function(){r=0,e.Date=t},i.prototype=t.prototype,i.now=function(){if(t.now)return r
throw new Error("Browser does not support Date.now()")},i.toSource=t.toSource,i.toString=t.toString,i.parse=t.parse,i.UTC=t.UTC,n):(n.install=function(){},n.tick=function(){},n.uninstall=function(){},n)
function i(){switch(arguments.length){case 0:return new t(r)
case 1:return new t(arguments[0])
case 2:return new t(arguments[0],arguments[1])
case 3:return new t(arguments[0],arguments[1],arguments[2])
case 4:return new t(arguments[0],arguments[1],arguments[2],arguments[3])
case 5:return new t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4])
case 6:return new t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
default:return new t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6])}}}},getJasmineRequireObj().pp=function(e){function t(){this.ppNestLevel_=0,this.seen=[],this.length=0,this.stringParts=[]}function n(){this.message="Exceeded "+e.MAX_PRETTY_PRINT_CHARS+" characters while pretty-printing a value"}return t.prototype.format=function(t){this.ppNestLevel_++
try{e.util.isUndefined(t)?this.emitScalar("undefined"):null===t?this.emitScalar("null"):0===t&&1/t==-1/0?this.emitScalar("-0"):t===e.getGlobal()?this.emitScalar("<global>"):t.jasmineToString?this.emitScalar(t.jasmineToString()):"string"==typeof t?this.emitString(t):e.isSpy(t)?this.emitScalar("spy on "+t.and.identity()):t instanceof RegExp?this.emitScalar(t.toString()):"function"==typeof t?this.emitScalar("Function"):"number"==typeof t.nodeType?this.emitScalar("HTMLNode"):t instanceof Date?this.emitScalar("Date("+t+")"):e.isSet(t)?this.emitSet(t):e.isMap(t)?this.emitMap(t):e.isTypedArray_(t)?this.emitTypedArray(t):t.toString&&"object"==typeof t&&!e.isArray_(t)&&(r=t,e.isFunction_(r.toString)&&r.toString!==Object.prototype.toString&&r.toString()!==Object.prototype.toString.call(r))?this.emitScalar(t.toString()):e.util.arrayContains(this.seen,t)?this.emitScalar("<circular reference: "+(e.isArray_(t)?"Array":"Object")+">"):e.isArray_(t)||e.isA_("Object",t)?(this.seen.push(t),e.isArray_(t)?this.emitArray(t):this.emitObject(t),this.seen.pop()):this.emitScalar(t.toString())}catch(e){if(this.ppNestLevel_>1||!(e instanceof n))throw e}finally{this.ppNestLevel_--}var r},t.prototype.iterateObject=function(t,n){var r,i,o,s=function(t,n){var r,i,o=Object.keys?Object.keys(t):function(t){var n,r=[]
for(n in t)e.util.has(t,n)&&r.push(n)
return r}(t)
if(!n)return o
if(0===o.length)return o
for(r=[],i=0;i<o.length;i++)/^[0-9]+$/.test(o[i])||r.push(o[i])
return r}(t,e.isArray_(t)),u=function(e){}
for(t.__lookupGetter__&&(u=function(n){var r=t.__lookupGetter__(n)
return!e.util.isUndefined(r)&&null!==r}),r=Math.min(s.length,e.MAX_PRETTY_PRINT_ARRAY_LENGTH),i=0;i<r;i++)n(o=s[i],u(o))
return s.length>r},t.prototype.emitScalar=function(e){this.append(e)},t.prototype.emitString=function(e){this.append("'"+e+"'")},t.prototype.emitArray=function(t){var n,r,i,o
if(this.ppNestLevel_>e.MAX_PRETTY_PRINT_DEPTH)this.append("Array")
else{for(n=Math.min(t.length,e.MAX_PRETTY_PRINT_ARRAY_LENGTH),this.append("[ "),r=0;r<n;r++)r>0&&this.append(", "),this.format(t[r])
t.length>n&&this.append(", ..."),i=this,o=0===t.length,this.iterateObject(t,function(e,n){o?o=!1:i.append(", "),i.formatProperty(t,e,n)})&&this.append(", ..."),this.append(" ]")}},t.prototype.emitSet=function(t){var n,r
this.ppNestLevel_>e.MAX_PRETTY_PRINT_DEPTH?this.append("Set"):(this.append("Set( "),n=Math.min(t.size,e.MAX_PRETTY_PRINT_ARRAY_LENGTH),r=0,t.forEach(function(e,t){r>=n||(r>0&&this.append(", "),this.format(e),r++)},this),t.size>n&&this.append(", ..."),this.append(" )"))},t.prototype.emitMap=function(t){var n,r
this.ppNestLevel_>e.MAX_PRETTY_PRINT_DEPTH?this.append("Map"):(this.append("Map( "),n=Math.min(t.size,e.MAX_PRETTY_PRINT_ARRAY_LENGTH),r=0,t.forEach(function(e,t){r>=n||(r>0&&this.append(", "),this.format([t,e]),r++)},this),t.size>n&&this.append(", ..."),this.append(" )"))},t.prototype.emitObject=function(t){var n,r,i=t.constructor,o="function"==typeof i&&t instanceof i?e.fnNameFor(t.constructor):"null"
this.append(o),this.ppNestLevel_>e.MAX_PRETTY_PRINT_DEPTH||(n=this,this.append("({ "),r=!0,this.iterateObject(t,function(e,i){r?r=!1:n.append(", "),n.formatProperty(t,e,i)})&&this.append(", ..."),this.append(" })"))},t.prototype.emitTypedArray=function(t){var n=e.fnNameFor(t.constructor),r=Array.prototype.slice.call(t,0,e.MAX_PRETTY_PRINT_ARRAY_LENGTH),i=Array.prototype.join.call(r,", ")
r.length!==t.length&&(i+=", ..."),this.append(n+" [ "+i+" ]")},t.prototype.formatProperty=function(e,t,n){this.append(t),this.append(": "),n?this.append("<getter>"):this.format(e[t])},t.prototype.append=function(t){var r=function(e,t){if(e.length<=t)return{value:e,truncated:!1}
return{value:e=e.substring(0,t-4)+" ...",truncated:!0}}(t,e.MAX_PRETTY_PRINT_CHARS-this.length)
if(this.length+=r.value.length,this.stringParts.push(r.value),r.truncated)throw new n},n.prototype=new Error,function(e){var n=new t
return n.format(e),n.stringParts.join("")}},getJasmineRequireObj().QueueRunner=function(e){function t(e){var t=!1
return function(){return t||(t=!0,e.apply(null,arguments)),null}}function n(t){var n=t.queueableFns||[]
this.queueableFns=n.concat(t.cleanupFns||[]),this.firstCleanupIx=n.length,this.onComplete=t.onComplete||function(){},this.clearStack=t.clearStack||function(e){e()},this.onException=t.onException||function(){},this.catchException=t.catchException||function(){return!0},this.userContext=t.userContext||new e.UserContext,this.timeout=t.timeout||{setTimeout:setTimeout,clearTimeout:clearTimeout},this.fail=t.fail||function(){},this.globalErrors=t.globalErrors||{pushListener:function(){},popListener:function(){}},this.completeOnFirstError=!!t.completeOnFirstError,this.deprecated=t.deprecated}return n.prototype.execute=function(){var e=this
this.handleFinalError=function(t){e.onException(t)},this.globalErrors.pushListener(this.handleFinalError),this.run(0)},n.prototype.skipToCleanup=function(e){e<this.firstCleanupIx?this.run(this.firstCleanupIx):this.run(e+1)},n.prototype.run=function(n){var r,i,o=this.queueableFns.length,s=this
for(r=n;r<o;r++){if(!(i=u()).completedSynchronously)return
if(this.completeOnFirstError&&i.errored)return void this.skipToCleanup(r)}function u(){var n,i,o=function(){Function.prototype.apply.apply(s.timeout.clearTimeout,[e.getGlobal(),[n]])},u=function(t,n){return Function.prototype.apply.apply(s.timeout.setTimeout,[e.getGlobal(),[t,n]])},a=!0,c=function(e){d(e),p()},l=t(function(){o(n),s.globalErrors.popListener(c)}),p=t(function(e){function t(){s.completeOnFirstError&&f?s.skipToCleanup(r):s.run(r+1)}l(),e instanceof Error&&s.deprecated("done callback received an Error object. Jasmine 3.0 will treat this as a failure"),a?u(t):t()}),f=!1,h=s.queueableFns[r]
p.fail=function(){s.fail.apply(null,arguments),f=!0,p()},s.globalErrors.pushListener(c),h.timeout&&(n=u(function(){d(new Error("Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.")),p()},h.timeout()))
try{if(0!==h.fn.length)return h.fn.call(s.userContext,p),a=!1,{completedSynchronously:!1}
if((i=h.fn.call(s.userContext))&&e.isFunction_(i.then))return i.then(p,function(e){d(e),p()}),a=!1,{completedSynchronously:!1}}catch(e){!function(e,t){if(d(e),!s.catchException(e))throw e}(e),f=!0}return l(),{completedSynchronously:!0,errored:f}
function d(e){s.onException(e),f=!0}}this.clearStack(function(){s.globalErrors.popListener(s.handleFinalError),s.onComplete()})},n},getJasmineRequireObj().ReportDispatcher=function(e){return function(t){var n,r,i,o,s=t||[]
for(n=0;n<s.length;n++)this[r=s[n]]=function(e){return function(){u(e,arguments)}}(r)
return i=[],o=null,this.addReporter=function(e){i.push(e)},this.provideFallbackReporter=function(e){o=e},this.clearReporters=function(){i=[]},this
function u(t,n){var r,s
for(0===i.length&&null!==o&&i.push(o),r=0;r<i.length;r++)(s=i[r])[t]&&s[t].apply(s,e.util.cloneArgs(n))}}},getJasmineRequireObj().interface=function(e,t){var n={describe:function(e,n){return t.describe(e,n)},xdescribe:function(e,n){return t.xdescribe(e,n)},fdescribe:function(e,n){return t.fdescribe(e,n)},it:function(){return t.it.apply(t,arguments)},xit:function(){return t.xit.apply(t,arguments)},fit:function(){return t.fit.apply(t,arguments)},beforeEach:function(){return t.beforeEach.apply(t,arguments)},afterEach:function(){return t.afterEach.apply(t,arguments)},beforeAll:function(){return t.beforeAll.apply(t,arguments)},afterAll:function(){return t.afterAll.apply(t,arguments)},expect:function(e){return t.expect(e)},pending:function(){return t.pending.apply(t,arguments)},fail:function(){return t.fail.apply(t,arguments)},spyOn:function(e,n){return t.spyOn(e,n)},spyOnProperty:function(e,n,r){return t.spyOnProperty(e,n,r)},jsApiReporter:new e.JsApiReporter({timer:new e.Timer}),jasmine:e}
return e.addCustomEqualityTester=function(e){t.addCustomEqualityTester(e)},e.addMatchers=function(e){return t.addMatchers(e)},e.clock=function(){return t.clock},n},getJasmineRequireObj().Spy=function(e){var t,n=(t=0,function(){return t++})
return function(t,r){var i,o="function"==typeof r?r.length:0,s=function(e,t){switch(e){case 1:return function(e){return t.apply(this,arguments)}
case 2:return function(e,n){return t.apply(this,arguments)}
case 3:return function(e,n,r){return t.apply(this,arguments)}
case 4:return function(e,n,r,i){return t.apply(this,arguments)}
case 5:return function(e,n,r,i,o){return t.apply(this,arguments)}
case 6:return function(e,n,r,i,o,s){return t.apply(this,arguments)}
case 7:return function(e,n,r,i,o,s,u){return t.apply(this,arguments)}
case 8:return function(e,n,r,i,o,s,u,a){return t.apply(this,arguments)}
case 9:return function(e,n,r,i,o,s,u,a,c){return t.apply(this,arguments)}
default:return function(){return t.apply(this,arguments)}}}(o,function(){return c.apply(this,Array.prototype.slice.call(arguments))}),u=new e.SpyStrategy({name:t,fn:r,getSpy:function(){return s}}),a=new e.CallTracker,c=function(){var e,t={object:this,invocationOrder:n(),args:Array.prototype.slice.apply(arguments)}
return a.track(t),e=u.exec.apply(this,arguments),t.returnValue=e,e}
for(i in r){if("and"===i||"calls"===i)throw new Error("Jasmine spies would overwrite the 'and' and 'calls' properties on the object being spied upon")
s[i]=r[i]}return s.and=u,s.calls=a,s}},getJasmineRequireObj().SpyRegistry=function(e){var t=e.formatErrorMsg("<spyOn>","spyOn(<object>, <methodName>)")
return function(n){var r,i
r=(n=n||{}).global||e.getGlobal(),i=n.currentSpies||function(){return[]},this.allowRespy=function(e){this.respy=e},this.spyOn=function(n,o){var s,u,a,c
if(e.util.isUndefined(n)||null===n)throw new Error(t("could not find an object to spy upon for "+o+"()"))
if(e.util.isUndefined(o)||null===o)throw new Error(t("No method name supplied"))
if(e.util.isUndefined(n[o]))throw new Error(t(o+"() method does not exist"))
if(n[o]&&e.isSpy(n[o])){if(this.respy)return n[o]
throw new Error(t(o+" has already been spied upon"))}try{s=Object.getOwnPropertyDescriptor(n,o)}catch(e){}if(s&&!s.writable&&!s.set)throw new Error(t(o+" is not declared writable or has no setter"))
return u=n[o],a=e.createSpy(o,u),c=Object.prototype.hasOwnProperty.call(n,o)||n===r&&"onerror"===o?function(){n[o]=u}:function(){delete n[o]||(n[o]=u)},i().push({restoreObjectToOriginalState:c}),n[o]=a,a},this.spyOnProperty=function(t,n,r){var o,s,u,a
if(r=r||"get",e.util.isUndefined(t))throw new Error("spyOn could not find an object to spy upon for "+n)
if(e.util.isUndefined(n))throw new Error("No property name supplied")
try{o=e.util.getPropertyDescriptor(t,n)}catch(e){}if(!o)throw new Error(n+" property does not exist")
if(!o.configurable)throw new Error(n+" is not declared configurable")
if(!o[r])throw new Error("Property "+n+" does not have access type "+r)
if(e.isSpy(o[r]))throw new Error(n+" has already been spied upon")
return s=e.util.clone(o),u=e.createSpy(n,o[r]),a=Object.prototype.hasOwnProperty.call(t,n)?function(){Object.defineProperty(t,n,s)}:function(){delete t[n]},i().push({restoreObjectToOriginalState:a}),o[r]=u,Object.defineProperty(t,n,o),u},this.clearSpies=function(){var e,t=i()
for(e=t.length-1;e>=0;e--)t[e].restoreObjectToOriginalState()}}},getJasmineRequireObj().SpyStrategy=function(e){return function(t){var n=(t=t||{}).name||"unknown",r=t.fn||function(){},i=t.getSpy||function(){},o=function(){}
this.identity=function(){return n},this.exec=function(){return o.apply(this,arguments)},this.callThrough=function(){return o=r,i()},this.returnValue=function(e){return o=function(){return e},i()},this.returnValues=function(){var e=Array.prototype.slice.call(arguments)
return o=function(){return e.shift()},i()},this.throwError=function(e){var t=e instanceof Error?e:new Error(e)
return o=function(){throw t},i()},this.callFake=function(t){if(!e.isFunction_(t)&&!e.isAsyncFunction_(t))throw new Error("Argument passed to callFake should be a function, got "+t)
return o=t,i()},this.stub=function(e){return o=function(){},i()}}},getJasmineRequireObj().Suite=function(e){function t(e){this.env=e.env,this.id=e.id,this.parentSuite=e.parentSuite,this.description=e.description,this.expectationFactory=e.expectationFactory,this.expectationResultFactory=e.expectationResultFactory,this.throwOnExpectationFailure=!!e.throwOnExpectationFailure,this.beforeFns=[],this.afterFns=[],this.beforeAllFns=[],this.afterAllFns=[],this.children=[],this.result={id:this.id,description:this.description,fullName:this.getFullName(),failedExpectations:[],deprecationWarnings:[]}}function n(e){return e&&e[0].result.status}return t.prototype.expect=function(e){return this.expectationFactory(e,this)},t.prototype.getFullName=function(){var e,t=[]
for(e=this;e;e=e.parentSuite)e.parentSuite&&t.unshift(e.description)
return t.join(" ")},t.prototype.pend=function(){this.markedPending=!0},t.prototype.beforeEach=function(e){this.beforeFns.unshift(e)},t.prototype.beforeAll=function(e){this.beforeAllFns.push(e)},t.prototype.afterEach=function(e){this.afterFns.unshift(e)},t.prototype.afterAll=function(e){this.afterAllFns.unshift(e)},t.prototype.addChild=function(e){this.children.push(e)},t.prototype.status=function(){return this.markedPending?"pending":this.result.failedExpectations.length>0?"failed":"finished"},t.prototype.isExecutable=function(){return!this.markedPending},t.prototype.canBeReentered=function(){return 0===this.beforeAllFns.length&&0===this.afterAllFns.length},t.prototype.getResult=function(){return this.result.status=this.status(),this.result},t.prototype.sharedUserContext=function(){return this.sharedContext||(this.sharedContext=this.parentSuite?this.parentSuite.clonedSharedUserContext():new e.UserContext),this.sharedContext},t.prototype.clonedSharedUserContext=function(){return e.UserContext.fromExisting(this.sharedUserContext())},t.prototype.onException=function(){var t,r,i
if(!(arguments[0]instanceof e.errors.ExpectationFailed))if(n(this.children))t={matcherName:"",passed:!1,expected:"",actual:"",error:arguments[0]},this.result.failedExpectations.push(this.expectationResultFactory(t))
else for(r=0;r<this.children.length;r++)(i=this.children[r]).onException.apply(i,arguments)},t.prototype.addExpectationResult=function(){var t,r,i
if(n(this.children)&&!arguments[0]){if(t=arguments[1],this.result.failedExpectations.push(this.expectationResultFactory(t)),this.throwOnExpectationFailure)throw new e.errors.ExpectationFailed}else for(r=0;r<this.children.length;r++){i=this.children[r]
try{i.addExpectationResult.apply(i,arguments)}catch(e){}}},t.prototype.addDeprecationWarning=function(e){this.result.deprecationWarnings.push(this.expectationResultFactory({message:e}))},t},null==typeof window&&"object"==typeof exports&&(exports.Suite=jasmineRequire.Suite),getJasmineRequireObj().Timer=function(){var e,t=(e=Date,function(){return(new e).getTime()})
return function(e){var n,r=(e=e||{}).now||t
this.start=function(){n=r()},this.elapsed=function(){return r()-n}}},getJasmineRequireObj().TreeProcessor=function(){return function(e){var t=e.tree,n=e.runnableIds,r=e.queueRunnerFactory,i=e.nodeStart||function(){},o=e.nodeComplete||function(){},s=e.orderChildren||function(e){return e.children},u={valid:!0},a=!1,c=1/0,l=-1/0
function p(e){return void 0===e?c:e}function f(e){return void 0===e?l:e}function h(e,t){return e.children?{fn:function(n){i(e),r({onComplete:function(){o(e,e.getResult()),n()},queueableFns:d(e,t),userContext:e.sharedUserContext(),onException:function(){e.onException.apply(e,arguments)}})}}:{fn:function(t){e.execute(t,u[e.id].executable)}}}function d(e,t){var n,r=[],i=u[e.id].segments[t].nodes
for(n=0;n<i.length;n++)r.push(h(i[n].owner,i[n].index))
return u[e.id].executable?e.beforeAllFns.concat(r).concat(e.afterAllFns):r}this.processTree=function(){return function e(t,r){var i,o,a,h,d,m=function(e){for(var t=0;t<n.length;t++)if(n[t]===e)return t}(t.id)
if(void 0!==m&&(r=!0),r=r&&t.isExecutable(),t.children){for(i=!1,o=s(t),a=0;a<o.length;a++){if(h=o[a],e(h,r),!u.valid)return
d=u[h.id],i=i||d.executable}u[t.id]={executable:i},function(e,t,n,r){var i,o,s,a,h,d={index:0,owner:e,nodes:[],min:p(r),max:f(r)},m=[d],y=l,g=function(e){var t,n,r,i,o,s,a
for(t=[],n=[],r=0;r<e.length;r++)for(i=e[r],o=u[i.id].segments,s=0;s<o.length;s++)(a=o[s]).min===c?n.push(a):t.push(a)
return t.sort(function(e,t){return e.min-t.min}),t.concat(n)}(t)
for(i=0;i<g.length;i++)o=g[i],s=o.max,a=o.min,h=a,y!==l&&h!==c&&y<h-1&&(d={index:m.length,owner:e,nodes:[],min:c,max:l},m.push(d)),d.nodes.push(o),d.min=Math.min(d.min,a),d.max=Math.max(d.max,s),y=s
n.segments=m}(t,o,u[t.id],m),!t.canBeReentered()&&u[t.id].segments.length>1&&(u={valid:!1})}else u[t.id]={executable:r&&t.isExecutable(),segments:[{index:0,owner:t,nodes:[t],min:p(m),max:f(m)}]}}(t,!1),a=!0,u},this.execute=function(e){if(a||this.processTree(),!u.valid)throw"invalid order"
var n=d(t,0)
r({queueableFns:n,userContext:t.sharedUserContext(),onException:function(){t.onException.apply(t,arguments)},onComplete:e})}}},getJasmineRequireObj().UserContext=function(e){function t(){}return t.fromExisting=function(e){var n,r=new t
for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n])
return r},t},getJasmineRequireObj().version=function(){return"2.99.0"}
