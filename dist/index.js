(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["schemaBuilder"] = factory();
	else
		root["schemaBuilder"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/grid.svg":
/*!********************************!*\
  !*** ./assets/images/grid.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "assets/images/5990e291135cfdb2819240efa9bf4e99.svg");

/***/ }),

/***/ "./assets/json/backgroundColorsForIcons.json":
/*!***************************************************!*\
  !*** ./assets/json/backgroundColorsForIcons.json ***!
  \***************************************************/
/*! exports provided: account, action_list_component, actions_and_buttons, activations, address, agent_session, all, announcement, answer_best, answer_private, answer_public, apex_plugin, apex, app, approval, apps_admin, apps, article, asset_action_source, asset_action, asset_downtime_period, asset_object, asset_relationship, asset_state_period, assigned_resource, assignment, avatar_loading, avatar, bot_training, bot, branch_merge, brand, business_hours, buyer_account, buyer_group, calibration, call_coaching, call_history, call, campaign_members, campaign, cancel_checkout, canvas, carousel, case_change_status, case_comment, case_email, case_log_a_call, case_milestone, case_transcript, case_wrap_up, case, catalog, category, channel_program_history, channel_program_levels, channel_program_members, channel_programs, charts, choice, client, cms, coaching, code_playground, collection_variable, connected_apps, constant, contact_list, contact_request, contact, contract_line_item, contract, currency_input, currency, custom_notification, custom, customer_360, customer_lifecycle_analytics, customer_portal_users, customers, dashboard_ea, dashboard, data_integration_hub, data_model, data_streams, datadotcom, dataset, date_input, date_time, decision, default, delegated_account, display_rich_text, display_text, document, drafts, dynamic_record_choice, education, einstein_replies, email_chatter, email, employee_asset, employee_contact, employee_job_position, employee_job, employee_organization, employee, empty, endorsement, entitlement_policy, entitlement_process, entitlement_template, entitlement, entity_milestone, entity, environment_hub, event, events, expense_report_entry, expense_report, expense, feed, feedback, file, filter, first_non_empty, flow, folder, forecasts, formula, fufillment_order, generic_loading, global_constant, goals, group_loading, groups, hierarchy, high_velocity_sales, home, household, individual, insights, instore_locations, investiment_account, invocable_action, iot_context, iot_orchestration, javascript_button, job_family, job_position, job_profile, kanban, knowledge, load_insights, lead_list, lead, letterhead, lightning_component, lightning_usage, link, list_email, live_chat_visitor, live_chat, location, log_a_call, logging, loop, macros, maintenance_asset, maintenance_plan, marketing_actions, merge, messaging_onversation, messaging_session, messaging_user, metrics, multi_picklist, multi_select_checkbox, news, note, number_input, omni_supervisor, operating_hours, opportunity_contact_role, opportunity_splits, opportunity, order_item, orders, autcome, output, partner_fund_allocation, partner_fund_claim, partner_fund_request, partner_marketing_budget, partners, password, past_chat, people, performance, person_account, photo, picklist_choice, picklist_type, planogram, poli, portal_roles_and_subordinates, portal_roles, portal, post, priebook, process, product_consumed, product_item_transaction, product_item, product_request_line_item, product_request, product_required, product_transfer, product, proposition, question_best, question_feed, queue, quick_text, quip_sheet, quip, quotes, radio_button, read_receapts, recent, record_create, record_delete, user */
/***/ (function(module) {

module.exports = JSON.parse("{\"account\":\"#7F8DE1\",\"action_list_component\":\"#5876A2\",\"actions_and_buttons\":\"#F2B85C\",\"activations\":\"#b773df\",\"address\":\"#00c07d\",\"agent_session\":\"#EE8961\",\"all\":\"#54698D\",\"announcement\":\"#62B7ED\",\"answer_best\":\"#F2CF5B\",\"answer_private\":\"#F2CF5B\",\"answer_public\":\"#F2CF5B\",\"apex_plugin\":\"#54698D\",\"apex\":\"#54698D\",\"app\":\"#F2B85C\",\"approval\":\"#5BCC7A\",\"apps_admin\":\"#9895EE\",\"apps\":\"#4B97DD\",\"article\":\"#F2CF5B\",\"asset_action_source\":\"#387A92\",\"asset_action\":\"#387A92\",\"asset_downtime_period\":\"#387A92\",\"asset_object\":\"#387A92\",\"asset_relationship\":\"#EF965C\",\"asset_state_period\":\"#387A92\",\"assigned_resource\":\"#55C173\",\"assignment\":\"#EF993D\",\"avatar_loading\":\"#B8C2CE\",\"avatar\":\"#61B7ED\",\"bot_training\":\"#5876A3\",\"bot\":\"#54698F\",\"branch_merge\":\"#E9696E\",\"brand\":\"#7E8AE4\",\"business_hours\":\"#7DC37D\",\"buyer_account\":\"#38844A\",\"buyer_group\":\"#38844A\",\"calibration\":\"#61CFD2\",\"call_coaching\":\"#4B97DD\",\"call_history\":\"#F2CF5B\",\"call\":\"#F2CF5B\",\"campaign_members\":\"#EF9656\",\"campaign\":\"#EF9656\",\"cancel_checkout\":\"#969492\",\"canvas\":\"#8099AF\",\"carousel\":\"#6BBD6E\",\"case_change_status\":\"#F2CF5B\",\"case_comment\":\"#F2CF5B\",\"case_email\":\"#F2CF5B\",\"case_log_a_call\":\"#F2CF5B\",\"case_milestone\":\"#F2CF5B\",\"case_transcript\":\"#F2CF5B\",\"case_wrap_up\":\"#F2CF5B\",\"case\":\"#F2CF5B\",\"catalog\":\"#357E45\",\"category\":\"#357E45\",\"channel_program_history\":\"#51B58A\",\"channel_program_levels\":\"#51B58A\",\"channel_program_members\":\"#51B58A\",\"channel_programs\":\"#51B58A\",\"charts\":\"#5BCAA0\",\"choice\":\"#54698D\",\"client\":\"#61D3BD\",\"cms\":\"#88C651\",\"coaching\":\"#ED7494\",\"code_playground\":\"#54698D\",\"collection_variable\":\"#54698D\",\"connected_apps\":\"#9895EE\",\"constant\":\"#54698D\",\"contact_list\":\"#A094ED\",\"contact_request\":\"#EE8855\",\"contact\":\"#A094ED\",\"contract_line_item\":\"#6EC06E\",\"contract\":\"#6EC06E\",\"currency_input\":\"#969492\",\"currency\":\"#969492\",\"custom_notification\":\"#6AB7E4\",\"custom\":\"#8099AF\",\"customer_360\":\"#152F61\",\"customer_lifecycle_analytics\":\"#9273DF\",\"customer_portal_users\":\"#4B97DB\",\"customers\":\"#51B58A\",\"dashboard_ea\":\"#7E8AE4\",\"dashboard\":\"#EC6E63\",\"data_integration_hub\":\"#36729D\",\"data_model\":\"#EB6F92\",\"data_streams\":\"#EC6E63\",\"datadotcom\":\"#4789EE\",\"dataset\":\"#B070E6\",\"date_input\":\"#969492\",\"date_time\":\"#969492\",\"decision\":\"#EF993D\",\"default\":\"#8099AF\",\"delegated_account\":\"#38844A\",\"display_rich_text\":\"#969492\",\"display_text\":\"#969492\",\"document\":\"#BAAC93\",\"drafts\":\"#6CA0E9\",\"dynamic_record_choice\":\"#54698D\",\"education\":\"#4B97DD\",\"einstein_replies\":\"#EE8865\",\"email_chatter\":\"#F2CF5B\",\"email\":\"#95AEC5\",\"employee_asset\":\"#4FA1E0\",\"employee_contact\":\"#4FA1E0\",\"employee_job_position\":\"#4FA1E0\",\"employee_job\":\"#4FA1E0\",\"employee_organization\":\"#4FA1E0\",\"employee\":\"#4FA1E0\",\"empty\":\"#8099AF\",\"endorsement\":\"#8B9AE3\",\"entitlement_policy\":\"#38844A\",\"entitlement_process\":\"#7E8AE4\",\"entitlement_template\":\"#7E8AE4\",\"entitlement\":\"#7E8AE4\",\"entity_milestone\":\"#EF9656\",\"entity\":\"#EE8862\",\"environment_hub\":\"#54698D\",\"event\":\"#EB6F92\",\"events\":\"#4B97DB\",\"expense_report_entry\":\"#3A3180\",\"expense_report\":\"#3A3180\",\"expense\":\"#3A3180\",\"feed\":\"#61B7ED\",\"feedback\":\"#6DA0E9\",\"file\":\"#6DA0E9\",\"filter\":\"#3039EE\",\"first_non_empty\":\"#E9696E\",\"flow\":\"#3C79BC\",\"folder\":\"#8B9AE3\",\"forecasts\":\"#6BBD6E\",\"formula\":\"#54698D\",\"fufillment_order\":\"#B9AC91\",\"generic_loading\":\"#B8C3CE\",\"global_constant\":\"#54698D\",\"goals\":\"#56AADE\",\"group_loading\":\"#B8C2CE\",\"groups\":\"#779EF2\",\"hierarchy\":\"#59BECD\",\"high_velocity_sales\":\"#60CFC8\",\"home\":\"#EE7EAD\",\"household\":\"#50B09F\",\"individual\":\"#4B97DD\",\"insights\":\"#EC94ED\",\"instore_locations\":\"#54698D\",\"investiment_account\":\"#55C076\",\"invocable_action\":\"#54698D\",\"iot_context\":\"#36729D\",\"iot_orchestration\":\"#36729D\",\"javascript_button\":\"#F2B85B\",\"job_family\":\"#4FA1E0\",\"job_position\":\"#4FA1E0\",\"job_profile\":\"#EB6F92\",\"kanban\":\"#4B97DD\",\"knowledge\":\"#EC94ED\",\"load_insights\":\"#55B0E6\",\"lead_list\":\"#EE8862\",\"lead\":\"#EE8862\",\"letterhead\":\"#4B97DD\",\"lightning_component\":\"#969492\",\"lightning_usage\":\"#7E8AE4\",\"link\":\"#7A9AE6\",\"list_email\":\"#8BAEB5\",\"live_chat_visitor\":\"#EE8961\",\"live_chat\":\"#EE8961\",\"location\":\"#55C076\",\"log_a_call\":\"#5BC3CC\",\"logging\":\"#4FA2DF\",\"loop\":\"#EF993D\",\"macros\":\"#61CFD2\",\"maintenance_asset\":\"#36729D\",\"maintenance_plan\":\"#36729D\",\"marketing_actions\":\"#6BBD6E\",\"merge\":\"#F2CF5B\",\"messaging_onversation\":\"#59BECD\",\"messaging_session\":\"#59BECD\",\"messaging_user\":\"#59BECD\",\"metrics\":\"#56AADE\",\"multi_picklist\":\"#969492\",\"multi_select_checkbox\":\"#969492\",\"news\":\"#7F8DE1\",\"note\":\"#E6D478\",\"number_input\":\"#969492\",\"omni_supervisor\":\"#8A76F0\",\"operating_hours\":\"#8A76F0\",\"opportunity_contact_role\":\"#8A76F0\",\"opportunity_splits\":\"#F2B85B\",\"opportunity\":\"#F2B85B\",\"order_item\":\"#759DD3\",\"orders\":\"#769ED9\",\"autcome\":\"#EF993D\",\"output\":\"#499CBA\",\"partner_fund_allocation\":\"#51B58A\",\"partner_fund_claim\":\"#51B58A\",\"partner_fund_request\":\"#51B58A\",\"partner_marketing_budget\":\"#51B58A\",\"partners\":\"#51B58A\",\"password\":\"#969492\",\"past_chat\":\"#EE8961\",\"people\":\"#59BECD\",\"performance\":\"#F2B156\",\"person_account\":\"#7F8DE1\",\"photo\":\"#D7D1D1\",\"picklist_choice\":\"#54698D\",\"picklist_type\":\"#969492\",\"planogram\":\"#4B97DD\",\"poli\":\"#699BE1\",\"portal_roles_and_subordinates\":\"#7A9AE6\",\"portal_roles\":\"#EE8851\",\"portal\":\"#AEC76F\",\"post\":\"#64CAE4\",\"priebook\":\"#B781D3\",\"process\":\"#3C79BC\",\"product_consumed\":\"#55BC9C\",\"product_item_transaction\":\"#EE8862\",\"product_item\":\"#769ED9\",\"product_request_line_item\":\"#88C651\",\"product_request\":\"#88C651\",\"product_required\":\"#EC6E63\",\"product_transfer\":\"#EE8862\",\"product\":\"#B781D3\",\"proposition\":\"#4B97DD\",\"question_best\":\"#F2CF5B\",\"question_feed\":\"#F2CF5B\",\"queue\":\"#54698D\",\"quick_text\":\"#62B7E5\",\"quip_sheet\":\"#58C859\",\"quip\":\"#D3451C\",\"quotes\":\"#88C651\",\"radio_button\":\"#969492\",\"read_receapts\":\"#55C076\",\"recent\":\"#6CA0E9\",\"record_create\":\"#EB6F92\",\"record_delete\":\"#EB6F92\",\"user\":\"#64CAE4\"}");

/***/ }),

/***/ "./node_modules/@allanoricil/canvasjs/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@allanoricil/canvasjs/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(window,(function(){return function(t){var i={};function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(s,r,function(i){return t[i]}.bind(null,r));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i),e.d(i,"Canvas",(function(){return l})),e.d(i,"Entity",(function(){return u})),e.d(i,"Circle",(function(){return v})),e.d(i,"Diamond",(function(){return w})),e.d(i,"Polygon",(function(){return x})),e.d(i,"Rectangle",(function(){return L})),e.d(i,"Shape",(function(){return y})),e.d(i,"Triangle",(function(){return A})),e.d(i,"Background",(function(){return E})),e.d(i,"Border",(function(){return f})),e.d(i,"Color",(function(){return p})),e.d(i,"Font",(function(){return I})),e.d(i,"Line",(function(){return R})),e.d(i,"Padding",(function(){return c})),e.d(i,"Shadow",(function(){return b})),e.d(i,"Dimension",(function(){return r})),e.d(i,"Position",(function(){return s})),e.d(i,"Rotation",(function(){return o})),e.d(i,"Scale",(function(){return n})),e.d(i,"Transform",(function(){return h})),e.d(i,"getTextHeight",(function(){return T})),e.d(i,"syntaxHighlight",(function(){return d})),e.d(i,"isMobile",(function(){return O})),e.d(i,"removeWhiteSpaces",(function(){return _})),e.d(i,"getBezierPoints",(function(){return N})),e.d(i,"getPathPointsGivenPath",(function(){return S}));class s{constructor({x:t,y:i}){this._x=t,this._y=i}get x(){return parseInt(this._x?this._x.toFixed(0):0)}get y(){return parseInt(this._y?this._y.toFixed(0):0)}set x(t){this._x=t}set y(t){this._y=t}}class r{constructor({width:t,height:i}){this._width=t,this._height=i}get width(){return this._width}get height(){return this._height}set width(t){this._width=t}set height(t){this._height=t}}class o{constructor({angle:t,referential:i}){this._angle=t,this._referential=new s(i||{x:0,y:0})}get angle(){return this._angle}set angle(t){this._angle=t}get referential(){return this._referential}}class n{constructor({horizontal:t,vertical:i}){this._horizontal=t,this._vertical=i}get horizontal(){return this._horizontal}get vertical(){return this._vertical}set horizontal(t){this._horizontal=t}set vertical(t){this._vertical=t}}class h{static get POSITION(){return new s({x:0,y:0})}static get DIMENSION(){return new r({width:0,height:0})}static get ROTATION(){return new o({angle:0})}static get SCALE(){return new n({horizontal:1,vertical:1})}constructor({position:t,dimension:i,rotation:e,scale:s}){this._position=t||h.POSITION,this._dimension=i?new r(i):h.DIMENSION,this._rotation=e?new o(e):h.ROTATION,this._scale=s?new n(s):h.SCALE}get position(){return this._position}get dimension(){return this._dimension}get rotation(){return this._rotation}get scale(){return this._scale}set position(t){this._position=t}set dimension(t){this._dimension=t}set rotation(t){this._rotation=t}set scale(t){this._scale=t}}class a{constructor(){this._entitiesMap=new Map,[...Array(100).keys()].forEach(t=>{this._entitiesMap.set(t,new Map)}),this._entitiesLayerMap=new Map}getLayer(t){return this._entitiesMap.get(t)}getEntityLayerByName(t){return this.getLayer(this._entitiesLayerMap.get(t))}getEntityByName(t){return this.getEntityLayerByName(t).get(t)}addEntity(t,i){t._canvas=i,this.getLayer(t._z||0).set(t._name,t),this._entitiesLayerMap.set(t._name,t._z)}removeEntityByName(t){return this.getEntityLayerByName(t).delete(t)}clearLayer(t){const i=this.getLayer(t);i&&i.clear()}getEntitiesInLayer(t){return this.getLayer(t).values()}get entities(){let t=[];for(let[i,e]of this._entitiesMap.entries())e.forEach(i=>{t.push(i)});return t}}class l{static get SCALE(){return{horizontal:1,vertical:1}}static get SCALELIMITS(){return{max:2,min:.2,speed:.01}}static get FPS(){return 60}static get CANMOVEENTITIES(){return!0}static get CANDRAGCANVAS(){return!0}constructor({options:t,canvas:i}){this._entityManager=new a,this._dpi=window.devicePixelRatio,this._el=i||document.getElementById("canvas"),this._el.style.maxHeight="none",this._el.focus(),this._imagesSource=t.imagesSource,this._el.style.backgroundImage=t.backgroundImage,this._el.style.backgroundColor=t.background&&t.background.color?t.background.color:null,this._fps=t.fps?t.fps:l.FPS,this._canMoveEntities=!1!==t.canMoveEntities,this._canDragCanvas=t.canDragCanvas?t.canDragCanvas:l.CANDRAGCANVAS,this._mouse=new s({x:0,y:0}),this._scaleLimits=t.zoom?{max:t.zoom.max||l.SCALELIMITS.max,min:t.zoom.min||l.SCALELIMITS.min,speed:t.zoom.speed||l.SCALELIMITS.speed}:l.SCALELIMITS,this._transform=new h({position:{x:0,y:0},dimension:{width:this._el.parentElement.clientWidth,height:this._el.parentElement.clientHeight},scale:{horizontal:t.zoom.level,vertical:t.zoom.level}}),this._el.width=this._el.parentElement.clientWidth,this._el.height=this._el.parentElement.clientHeight,this._el.setAttribute("width",this._el.parentElement.clientWidth),this._el.setAttribute("height",this._el.parentElement.clientHeight),"undefined"!=typeof OffscreenCanvas?("OffscreenCanvas"in window?this._offscreenCanvas=this._el.transferControlToOffscreen():this._offscreenCanvas=new OffscreenCanvas(this._transform.dimension.width,this._transform.dimension.height),this._ctx=this._offscreenCanvas.getContext("2d")):this._ctx=this._el.getContext("2d"),this._isScrolling=!1,this._tickTime=0,this._updateTime=0,this._drawTime=0;let e={x:0,y:0},r=void 0,o=!1,n=[],d=null,c=!1,g=null;this._el.addEventListener("mousedown",t=>{if(g)return g._selected=!0,void(this._canMoveEntities&&!d&&g._isDraggable&&(d=g));e=this.getTransformedPoint(t.offsetX,t.offsetY),o=!0}),this._el.addEventListener("mousemove",t=>{if(this._mouse.x=t.offsetX,this._mouse.y=t.offsetY,r=this.getTransformedPoint(t.offsetX,t.offsetY),o)return this._el.style.cursor="grabbing",void this._ctx.translate(r.x-e.x,r.y-e.y);if(d)return c=!0,void(d.position={x:r.x-d.dimension.width/2,y:r.y-d.dimension.height/2});for(let i=this._entityManager.entities.length-1;i>=0;i--){let e=this._entityManager.entities[i];if(e.contains(this._mouse))return e.emit("mousemove",t),g=e,this._el.style.cursor="grabbing",void(e._hover||(e._hover=!0,this._el.dispatchEvent(new CustomEvent("mouseenterentity",{detail:e})),e.emit("mousehover",t),e.emit("hover",t)));e._hover&&(e._hover=!1,this._el.dispatchEvent(new CustomEvent("mouseleaveentity",{detail:e})),e.emit("mouseleave",t))}g=null,this._el.style.cursor="default",this._el.style.cursor="default"}),this._el.addEventListener("mouseup",t=>{o=!1,d&&(d._selected=!1,d=null)},{passive:!0}),this._el.addEventListener("click",t=>{if(c)c=!1;else if(g){if(g.emit("click"),g._selected=!0,this._el.dispatchEvent(g.createEvent("clickentity")),0===n.length?n.push(g):n.forEach(t=>{t._id!==g._id&&n.push(g)}),2==n.length){let t=n.pop(),i=n.pop(),e=!1;for(let s=0;s<i.connections.length;s++){if(i.connections[s].to._id===t._id){e=!0;break}}for(let s=0;s<t.connections.length;s++){if(t.connections[s].to._id===i._id){e=!0;break}}n=[]}return}},{passive:!0}),this._el.addEventListener("mouseout",t=>{o=!1,n=[],d=null,c=!1},{passive:!0}),this._el.addEventListener("wheel",t=>{r=this.getTransformedPoint(t.offsetX,t.offsetY);const i=t.wheelDelta>0||t.deltaY<0?1+this._scaleLimits.speed:1-this._scaleLimits.speed,e=this._ctx.getTransform().a*i;g?g.emit("wheel",t):e>this._scaleLimits.min&&e<this._scaleLimits.max&&(this._ctx.translate(r.x,r.y),this._ctx.scale(i,i),this._ctx.translate(-r.x,-r.y))},{passive:!0});let u=null;this._el.addEventListener("touchstart",t=>{if(1===t.touches.length){this._mouse.x=t.touches[0].clientX,this._mouse.y=t.touches[0].clientY;for(let t=this._entityManager.entities.length-1;t>=0;t--){let i=this._entityManager.entities[t];if(i.contains(this._mouse))return g=i,d||(d=i),void this._el.dispatchEvent(i.createEvent("touchstartentity"))}o=!0,u&&(t.timeStamp,u.timeStamp,t.timeStamp-u.timeStamp<=200&&this._el.dispatchEvent(new CustomEvent("dbtouch",t))),u=t}},{passive:!0});let _=null;this._el.addEventListener("touchmove",t=>{if(1===t.touches.length){if(this._mouse.x=t.touches[0].clientX,this._mouse.y=t.touches[0].clientY,r=this.getTransformedPoint(this._mouse.x,this._mouse.y),o&&_){let t=this.getTransformedPoint(_.touches[0].clientX,_.touches[0].clientY);this._ctx.translate(r.x-t.x,r.y-t.y)}else d&&(c=!0,d.position={x:r.x-d.dimension.width/2,y:r.y-d.dimension.height/2});_=t}},{passive:!0}),this._el.addEventListener("touchend",t=>{d&&(d=null),o=!1,_=null},{passive:!0}),this._evCache=[],this.prevDiff=-1;const p=t=>{f(t),this._evCache.length<2&&(this.prevDiff=-1)},f=t=>{for(var i=0;i<this._evCache.length;i++)if(this._evCache[i].pointerId==t.pointerId){this._evCache.splice(i,1);break}};this._el.onpointerdown=t=>{this._evCache.push(t)},this._el.onpointermove=t=>{for(var i=0;i<this._evCache.length;i++)if(t.pointerId==this._evCache[i].pointerId){this._evCache[i]=t;break}if(2==this._evCache.length){var e=Math.abs(this._evCache[0].clientX-this._evCache[1].clientX);const t=(this._evCache[0].clientX+this._evCache[1].clientX)/2,i=(this._evCache[0].clientY+this._evCache[1].clientY)/2,s=this.getTransformedPoint(t,i);if(this.prevDiff>0){const t=e>this.prevDiff<0?1+this._scaleLimits.speed:1-this._scaleLimits.speed,i=this._ctx.getTransform().a*t;i>this._scaleLimits.min&&i<this._scaleLimits.max&&(this._ctx.translate(s.x,s.y),this._ctx.scale(t,t),this._ctx.translate(-s.x,-s.y))}this.prevDiff=e}},this._el.onpointerup=p,this._el.onpointercancel=p,this._el.onpointerout=p,this._el.onpointerleave=p;window.onresize=t=>{this._transform.dimension.width=this._el.parentElement.clientWidth,this._transform.dimension.height=this._el.parentElement.clientHeight,this._offscreenCanvas?(this._offscreenCanvas.width=this._transform.dimension.width,this._offscreenCanvas.height=this._transform.dimension.height):(this._el.width=this._transform.dimension.width,this._el.height=this._transform.dimension.height)},this.start()}clearFrame(){this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._el.width,this._el.height),this._ctx.restore()}start(){setInterval(()=>{this.draw()},1e3/this._fps)}draw(){this.clearFrame(),this._entityManager.entities.forEach(t=>{t.draw(this._ctx)})}getTransformedPoint(t,i){const e=this._ctx.getTransform(),s=1/e.a;return{x:s*t-s*e.e,y:s*i-s*e.f}}saveAsImage(t){var i=document.createElement("a");i.download=t+".png",i.href=this._el.toDataURL("image/png").replace("image/png","image/octet-stream"),i.click()}get ctx(){return this._ctx}get mouse(){return this._mouse}get entityManager(){return this._entityManager}}const d=function(t){return"string"!=typeof t&&(t=JSON.stringify(t,void 0,2)),(t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(t){var i="number";return/^"/.test(t)?i=/:$/.test(t)?"key":"string":/true|false/.test(t)?i="boolean":/null/.test(t)&&(i="null"),'<span class="'+i+'">'+t+"</span>"}))};class c{constructor({top:t,right:i,bottom:e,left:s}){this._top=t,this._right=i,this._bottom=e,this._left=s}get top(){return this._top}get right(){return this._right}get bottom(){return this._bottom}get left(){return this._left}set top(t){this._top=t}set right(t){this._right=t}set bottom(t){this._bottom=t}set left(t){this._left=t}}class g{constructor(){this.callbacks={}}on(t,i){this.callbacks[t]||(this.callbacks[t]=[]),this.callbacks[t].push(i)}emit(t,i){let e=this.callbacks[t];e&&e.forEach(t=>t(i))}}class u{static get MAX_WIDTH(){return 350}static get PADDING(){return new c({top:0,right:0,bottom:0,left:0})}constructor({name:t,padding:i,dimension:e,position:r,rotation:o,parent:n},a){this._eventEmitter=new g,this._id=+new Date+1e5*Math.random(),this._name=t,this._selected=!1,this._hover=!1,this._transform=new h({position:r||null,dimension:e||null,rotation:o||null}),this._oldPosition=r?new s(r):null,this._padding=i?new c(i):u.PADDING,this._parent=n,this._children=[],this._canvas=a||void 0}createEvent(t){return new CustomEvent(t,{detail:this})}contains(t){return!!this._shape&&this._canvas.ctx.isPointInPath(this._shape.path,t.x,t.y,"nonzero")}toString(){return{id:this._id,name:this._name}}prettier(){return d(this.toString())}on(t,i){this._eventEmitter.on(t,i)}emit(t,i){this._eventEmitter.emit(t,i)}set state(t){this.states.includes(t)&&this.emit(t,{detail:this})}get shape(){return this._shape}get padding(){return this._padding}get dimension(){return this._transform.dimension}get position(){return this._transform.position}get children(){return this._children}get parent(){return this._parent}set position(t){this._oldPosition=new s(this._transform.position),this._transform.position.x=t.x,this._transform.position.y=t.y}get oldPosition(){return this._oldPosition}}const _=t=>t.replace(/\s/g,"");class p{static get htmlColors(){return{INDIANRED:"rgb(205, 92, 92)",LIGHTCORAL:"rgb(240, 128, 128)",SALMON:"rgb(250, 128, 114)",DARKSALMON:"rgb(233, 150, 122)",LIGHTSALMON:"rgb(255, 160, 122)",CRIMSON:"rgb(220, 20, 60)",RED:"rgb(255, 0, 0)",FIREBRICK:"rgb(178, 34, 34)",DARKRED:"rgb(139, 0, 0)",PINK:"rgb(255, 192, 203)",LIGHTPINK:"rgb(255, 182, 193)",HOTPINK:"rgb(255, 105, 180)",DEEPPINK:"rgb(255, 20, 147)",MEDIUMVIOLETRED:"rgb(199, 21, 133)",PALEVIOLETRED:"rgb(219, 112, 147)",LIGHTSALMON:"rgb(255, 160, 122)",CORAL:"rgb(255, 127, 80)",TOMATO:"rgb(255, 99, 71)",ORANGERED:"rgb(255, 69, 0)",DARKORANGE:"rgb(255, 140, 0)",ORANGE:"rgb(255, 165, 0)",GOLD:"rgb(255, 215, 0)",YELLOW:"rgb(255, 255, 0)",LIGHTYELLOW:"rgb(255, 255, 224)",LEMONCHIFFON:"rgb(255, 250, 205)",LIGHTGOLDENRODYELLOW:"rgb(250, 250, 210)",PAPAYAWHIP:"rgb(255, 239, 213)",MOCCASIN:"rgb(255, 228, 181)",PEACHPUFF:"rgb(255, 218, 185)",PALEGOLDENROD:"rgb(238, 232, 170)",KHAKI:"rgb(240, 230, 140)",DARKKHAKI:"rgb(189, 183, 107)",LAVENDER:"rgb(230, 230, 250)",THISTLE:"rgb(216, 191, 216)",PLUM:"rgb(221, 160, 221)",VIOLET:"rgb(238, 130, 238)",ORCHID:"rgb(218, 112, 214)",FUCHSIA:"rgb(255, 0, 255)",MAGENTA:"rgb(255, 0, 255)",MEDIUMORCHID:"rgb(186, 85, 211)",MEDIUMPURPLE:"rgb(147, 112, 219)",REBECCAPURPLE:"rgb(102, 51, 153)",BLUEVIOLET:"rgb(138, 43, 226)",DARKVIOLET:"rgb(148, 0, 211)",DARKORCHID:"rgb(153, 50, 204)",DARKMAGENTA:"rgb(139, 0, 139)",PURPLE:"rgb(128, 0, 128)",INDIGO:"rgb(75, 0, 130)",SLATEBLUE:"rgb(106, 90, 205)",DARKSLATEBLUE:"rgb(72, 61, 139)",MEDIUMSLATEBLUE:"rgb(123, 104, 238)",GREENYELLOW:"rgb(173, 255, 47)",CHARTREUSE:"rgb(127, 255, 0)",LAWNGREEN:"rgb(124, 252, 0)",LIME:"rgb(0, 255, 0)",LIMEGREEN:"rgb(50, 205, 50)",PALEGREEN:"rgb(152, 251, 152)",LIGHTGREEN:"rgb(144, 238, 144)",MEDIUMSPRINGGREEN:"rgb(0, 250, 154)",SPRINGGREEN:"rgb(0, 255, 127)",MEDIUMSEAGREEN:"rgb(60, 179, 113)",SEAGREEN:"rgb(46, 139, 87)",FORESTGREEN:"rgb(34, 139, 34)",GREEN:"rgb(0, 128, 0)",DARKGREEN:"rgb(0, 100, 0)",YELLOWGREEN:"rgb(154, 205, 50)",OLIVEDRAB:"rgb(107, 142, 35)",OLIVE:"rgb(128, 128, 0)",DARKOLIVEGREEN:"rgb(85, 107, 47)",MEDIUMAQUAMARINE:"rgb(102, 205, 170)",DARKSEAGREEN:"rgb(143, 188, 139)",LIGHTSEAGREEN:"rgb(32, 178, 170)",DARKCYAN:"rgb(0, 139, 139)",TEAL:"rgb(0, 128, 128)",AQUA:"rgb(0, 255, 255)",CYAN:"rgb(0, 255, 255)",LIGHTCYAN:"rgb(224, 255, 255)",PALETURQUOISE:"rgb(175, 238, 238)",AQUAMARINE:"rgb(127, 255, 212)",TURQUOISE:"rgb(64, 224, 208)",MEDIUMTURQUOISE:"rgb(72, 209, 204)",DARKTURQUOISE:"rgb(0, 206, 209)",CADETBLUE:"rgb(95, 158, 160)",STEELBLUE:"rgb(70, 130, 180)",LIGHTSTEELBLUE:"rgb(176, 196, 222)",POWDERBLUE:"rgb(176, 224, 230)",LIGHTBLUE:"rgb(173, 216, 230)",SKYBLUE:"rgb(135, 206, 235)",LIGHTSKYBLUE:"rgb(135, 206, 250)",DEEPSKYBLUE:"rgb(0, 191, 255)",DODGERBLUE:"rgb(30, 144, 255)",CORNFLOWERBLUE:"rgb(100, 149, 237)",MEDIUMSLATEBLUE:"rgb(123, 104, 238)",ROYALBLUE:"rgb(65, 105, 225)",BLUE:"rgb(0, 0, 255)",MEDIUMBLUE:"rgb(0, 0, 205)",DARKBLUE:"rgb(0, 0, 139)",NAVY:"rgb(0, 0, 128)",MIDNIGHTBLUE:"rgb(25, 25, 112)",CORNSILK:"rgb(255, 248, 220)",BLANCHEDALMOND:"rgb(255, 235, 205)",BISQUE:"rgb(255, 228, 196)",NAVAJOWHITE:"rgb(255, 222, 173)",WHEAT:"rgb(245, 222, 179)",BURLYWOOD:"rgb(222, 184, 135)",TAN:"rgb(210, 180, 140)",ROSYBROWN:"rgb(188, 143, 143)",SANDYBROWN:"rgb(244, 164, 96)",GOLDENROD:"rgb(218, 165, 32)",DARKGOLDENROD:"rgb(184, 134, 11)",PERU:"rgb(205, 133, 63)",CHOCOLATE:"rgb(210, 105, 30)",SADDLEBROWN:"rgb(139, 69, 19)",SIENNA:"rgb(160, 82, 45)",BROWN:"rgb(165, 42, 42)",MAROON:"rgb(128, 0, 0)",WHITE:"rgb(255, 255, 255)",SNOW:"rgb(255, 250, 250)",HONEYDEW:"rgb(240, 255, 240)",MINTCREAM:"rgb(245, 255, 250)",AZURE:"rgb(240, 255, 255)",ALICEBLUE:"rgb(240, 248, 255)",GHOSTWHITE:"rgb(248, 248, 255)",WHITESMOKE:"rgb(245, 245, 245)",SEASHELL:"rgb(255, 245, 238)",BEIGE:"rgb(245, 245, 220)",OLDLACE:"rgb(253, 245, 230)",FLORALWHITE:"rgb(255, 250, 240)",IVORY:"rgb(255, 255, 240)",ANTIQUEWHITE:"rgb(250, 235, 215)",LINEN:"rgb(250, 240, 230)",LAVENDERBLUSH:"rgb(255, 240, 245)",MISTYROSE:"rgb(255, 228, 225)",GAINSBORO:"rgb(220, 220, 220)",LIGHTGRAY:"rgb(211, 211, 211)",SILVER:"rgb(192, 192, 192)",DARKGRAY:"rgb(169, 169, 169)",GRAY:"rgb(128, 128, 128)",DIMGRAY:"rgb(105, 105, 105)",LIGHTSLATEGRAY:"rgb(119, 136, 153)",SLATEGRAY:"rgb(112, 128, 144)",DARKSLATEGRAY:"rgb(47, 79, 79)",BLACK:"rgb(0, 0, 0)"}}static isRGB(t){return null!==t.match(/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/gi)}static isRGBA(t){return null!==t.match(/^rgba\((\d+),(\d+),(\d+),(\d+\.\d+)\)$/gi)}static isHEX(t){return null!==t.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gi)}static string2Color(t){const i=p.htmlColors[t.toUpperCase()];if(i&&(t=i),t=_(t),p.isRGB(t)||p.isRGBA(t)){let i=t.replace("rgb(","").replace("rgba(","").replace(")","").split(",");return{red:i[0],green:i[1],blue:i[2],alpha:i[3]||1}}if(p.isHEX(t)){const i=(t=t.replace("#","")).length/3;return{red:parseInt(t.substring(0,i),16),green:parseInt(t.substring(i,2*i),16),blue:parseInt(t.substring(2*i,3*i),16),alpha:1}}return{red:0,green:0,blue:0,alpha:0}}static rgbToHex(t){const i=(t=t.replace(/\s/g,"")).replace("rgb(","").replace("rgba(","").replace(")","").split(",");let e="#";return i.forEach((t,i)=>{if(3!=i){const i=Number(t).toString(16);e+=2===i.length?i:"0"+i}}),e}constructor(t){"string"==typeof t&&(t=p.string2Color(t)),this._red=t.red,this._green=t.green,this._blue=t.blue,this._alpha=t.alpha||1}get rgb(){return`rgb(${this._red},${this._green},${this._blue})`}get rgba(){return`rgba(${this._red},${this._green},${this._blue},${this._alpha})`}get hex(){return p.rgbToHex(this.rgb)}}class f{constructor({radius:t,color:i,lineWidth:e,selected:s,hover:r}){this._radius=t||0,this._lineWidth=e||0,this._color=i?new p(i):null,this._selected=s?new f({lineWidth:s.lineWidth,color:s.color}):null,this._hover=r?new f({lineWidth:r.lineWidth,color:r.color}):null}get radius(){return this._radius}set radius(t){this._radius=t}get color(){return this._color}set color(t){this._color=new p(t)}get selected(){return this._selected}get hover(){return this._hover}get lineWidth(){return this._lineWidth}set lineWidth(t){this._lineWidth=t}}class b{constructor({offsetX:t,offsetY:i,color:e,blur:s}){this._offsetX=t,this._offsetY=i,this._color=new p(e),this._blur=s}get offsetX(){return this._offsetX}get offsetY(){return this._offsetY}get color(){return this._color}set color(t){this._color=new p(t)}get blur(){return this._blur}}class m{constructor({src:t,position:i,dimension:e,rotation:s,scale:r}){this._transform=new h({position:i,dimension:e,rotation:s,scale:r}),this._image=e?new Image(this._transform.dimension.width,this._transform.dimension.height):new Image,this._src=t,this._image.src=this._src,this._image.addEventListener("load",()=>{this._loaded=!0}),this._loaded=!1}set src(t){this._src=t,this._loaded=!1}get transform(){return this._transform}draw(t){this._transform.dimension?t.drawImage(this._image,this._transform.position.x,this._transform.position.y,this._transform.dimension.width,this._transform.dimension.height):t.drawImage(this._image,this._transform.position.x,this._transform.position.y)}}class E{constructor({color:t,image:i}){this._color=t?new p(t):null,this._image=i?new m({image:i}):null}get color(){return this._color}set color(t){this._color=new p(t)}get image(){return this._image}set Image(t){this._image=new m(t)}}class y{static get ROTATION(){return new Rotation({angle:0})}static get BACKGROUND(){return new E({color:"rgb(255,255,255)"})}static get SHADOW(){return new b({offsetX:0,offsetY:0,color:"rgb(0,0,0)",blur:0})}static get BORDER(){return new f({radius:0,lineWidth:1})}constructor({position:t,dimension:i,rotation:e,scale:s,background:r,border:o,shadow:n}){this._transform=new h({position:t,dimension:i,rotation:e,scale:s}),this._border=o?new f(o):y.BORDER,this._background=r?new E(r):y.BACKGROUND,this._shadow=n?new b(n):null,this._path=null}draw(t){this._shadow&&(t.shadowColor=this._shadow.color.rgba,t.shadowBlur=this._shadow.blur,t.shadowOffsetX=this._shadow.offsetX,t.shadowOffsetY=this._shadow.offsetY),this._border&&this._border.color&&(t.strokeStyle=this._border.color.rgba),this._border&&this._border.lineWidth&&(t.lineWidth=this._border.lineWidth),this._background&&this._background.color&&(t.fillStyle=this._background.color.rgba)}get sides(){const t=this._transform.dimension.width/2,i=this._transform.dimension.height/2;return{top:{x:this._transform.position.x+t,y:this._transform.position.y},right:{x:this._transform.position.x+this._transform.dimension.width,y:this._transform.position.y+i},bottom:{x:this._transform.position.x+t,y:this._transform.position.y+this._transform.dimension.height},left:{x:this._transform.position.x,y:this._transform.position.y+i}}}get path(){return this._path}set path(t){this._path=t}get border(){return this._border}get background(){return this._background}get rotation(){return this._transform.rotation}get rotate(){return this._transform.rotation&&this._transform.rotation.angle>0}get shadow(){return this._shadow}set rotation(t){this._transform.rotation.angle=t}get position(){return this._transform.position}set position(t){this._transform.position.x=t.x,this._transform.position.y=t.y}get dimension(){return this._transform.dimension}}class v extends y{constructor({position:t,rotation:i,border:e,background:s,diameter:r,shadow:o}){super({position:t,rotation:i,border:e,background:s,shadow:o}),this._diameter=r}draw(t){t.save(),super.draw(t),this.rotate&&(t.translate(this.position.x,this.position.y),t.rotate(this.rotation.angle),t.translate(-this.position.x,-this.position.y)),t.beginPath(),this._path=new Path2D,this._path.arc(this.position.x,this.position.y,this._diameter,0,2*Math.PI),this._path.closePath(),t.stroke(this._path),t.fill(this._path),t.shadowColor=0,t.shadowOffsetX=0,t.shadowOffsetY=0,t.stroke(this._path),t.restore()}}class w extends y{constructor({position:t,dimension:i,rotation:e,border:s,background:r,shadow:o}){super({position:t,dimension:i,rotation:e,border:s,background:r,shadow:o})}draw(t){if(t.save(),super.draw(t),this.rotate){const i=this.position.x+this.dimension.width/2,e=this.position.y+this.dimension.height/2;t.translate(i,e),t.rotate(this.rotation.angle),t.translate(-i,-e)}this._path=new Path2D,t.beginPath(),this._path.moveTo(this.sides.top.x-this.border.radius,this.sides.top.y+this.border.radius),this._path.quadraticCurveTo(this.sides.top.x,this.sides.top.y+.5*this.border.radius,this.sides.top.x+this.border.radius,this.sides.top.y+this.border.radius),this._path.lineTo(this.sides.right.x-this.border.radius,this.sides.right.y-this.border.radius),this._path.quadraticCurveTo(this.sides.right.x,this.sides.right.y,this.sides.right.x-this.border.radius,this.sides.right.y+this.border.radius),this._path.lineTo(this.sides.bottom.x+this.border.radius,this.sides.bottom.y-this.border.radius),this._path.quadraticCurveTo(this.sides.bottom.x,this.sides.bottom.y-.5*this.border.radius,this.sides.bottom.x-this.border.radius,this.sides.bottom.y-this.border.radius),this._path.lineTo(this.sides.left.x+this.border.radius,this.sides.left.y+this.border.radius),this._path.quadraticCurveTo(this.sides.left.x,this.sides.left.y,this.sides.left.x+this.border.radius,this.sides.left.y-this.border.radius),this._path.lineTo(this.sides.top.x-this.border.radius,this.sides.top.y+this.border.radius),this._path.closePath(),t.stroke(this._path),t.fill(this._path),t.shadowColor=0,t.shadowOffsetX=0,t.shadowOffsetY=0,t.stroke(this._path),t.restore()}}class x extends y{constructor({points:t,position:i,dimension:e,rotation:s,border:r,background:o,shadow:n}){super({position:i,dimension:e,rotation:s,border:r,background:o,shadow:n}),this._points=t}draw(t){if(t.save(),super.draw(t),this.rotate){const i=this._position.x+this._dimension.width/2,e=this._position.y+this._dimension.height/2;t.translate(i,e),t.rotate(this.rotation.angle),t.translate(-i,-e)}this._path=new Path2D,t.beginPath(),this._path.moveTo(points[0].x,points[0].y),points.forEach(t=>{this._path.lineTo(t.x,t.y)}),this._path.closePath(),t.stroke(this._path),t.fill(this._path),t.shadowColor=0,t.shadowOffsetX=0,t.shadowOffsetY=0,t.stroke(this._path),t.restore()}}class L extends y{constructor({position:t,dimension:i,rotation:e,border:s,background:r,shadow:o}){super({position:t,dimension:i,rotation:e,border:s,background:r,shadow:o})}draw(t){if(t.save(),super.draw(t),this.rotate){const i=this.position.x+this.dimension.width/2,e=this.position.y+this.dimension.height/2;t.translate(i,e),t.rotate(this.rotation.angle),t.translate(-i,-e)}this._path=new Path2D;var i=this.position.x+this.dimension.width,e=this.position.y+this.dimension.height;t.beginPath(),"object"==typeof this.border.radius?(this._path.moveTo(this.position.x+this.border.radius.topLeft,this.position.y),this._path.lineTo(i-this.border.radius.topRight,this.position.y),this._path.quadraticCurveTo(i,this.position.y,i,this.position.y+this.border.radius.topRight),this._path.lineTo(i,this.position.y+this.dimension.height-this.border.radius.bottomRight),this._path.quadraticCurveTo(i,e,i-this.border.radius.bottomRight,e),this._path.lineTo(this.position.x+this.border.radius.bottomLeft,e),this._path.quadraticCurveTo(this.position.x,e,this.position.x,e-this.border.radius.bottomLeft),this._path.lineTo(this.position.x,this.position.y+this.border.radius.topLeft),this._path.quadraticCurveTo(this.position.x,this.position.y,this.position.x+this.border.radius.topLeft,this.position.y)):(this._path.moveTo(this.position.x+this.border.radius,this.position.y),this._path.lineTo(i-this.border.radius,this.position.y),this._path.quadraticCurveTo(i,this.position.y,i,this.position.y+this.border.radius),this._path.lineTo(i,this.position.y+this.dimension.height-this.border.radius),this._path.quadraticCurveTo(i,e,i-this.border.radius,e),this._path.lineTo(this.position.x+this.border.radius,e),this._path.quadraticCurveTo(this.position.x,e,this.position.x,e-this.border.radius),this._path.lineTo(this.position.x,this.position.y+this.border.radius),this._path.quadraticCurveTo(this.position.x,this.position.y,this.position.x+this.border.radius,this.position.y)),this._path.closePath(),this.border&&this.border.color&&t.stroke(this._path),this._background&&this._background.color&&t.fill(this._path),t.shadowColor=0,t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=0,this.border&&this.border.color&&t.stroke(this._path),t.restore()}get area(){return this.dimension.width*this.dimension.height}get center(){return{x:this.position.x+this.dimension.width/2,y:this.position.y+this.dimension.height/2}}}class A extends y{constructor({position:t,dimension:i,rotation:e,border:s,background:r,shadow:o}){super({position:t,dimension:i,rotation:e,border:s,background:r,shadow:o})}draw(t){t.save(),super.draw(t),this.rotate&&(t.translate(this.position.x,this.position.y),t.rotate(this.rotation.angle),t.translate(-this.position.x,-this.position.y)),this._path=new Path2D,t.beginPath(),this._path.moveTo(this.position.x,this.position.y),this._path.lineTo(this.position.x-this.dimension.width,this.position.y-this.dimension.height/2),this._path.lineTo(this.position.x-this.dimension.width,this.position.y+this.dimension.height/2),this._path.closePath(),t.stroke(this._path),t.fill(this._path),t.shadowColor=0,t.shadowOffsetX=0,t.shadowOffsetY=0,t.stroke(this._path),t.restore()}}const T=function({fontFamily:t,fontSize:i,fontWeight:e,element:s}){const r=s||document.body;var o=document.createElement("span");o.innerHTML="Hg",o.setAttribute("style",`font-family: ${t} !important; font-size: ${i}px !important; font-weight:${e} !important;`);var n=document.createElement("div");n.style.display="inline-block",n.style.width="1px",n.style.height="0px";var h=document.createElement("div");h.appendChild(o),h.appendChild(n),r.appendChild(h);try{var a={};n.style.verticalAlign="baseline",a.ascent=n.offsetTop-o.offsetTop,n.style.verticalAlign="bottom",a.height=n.offsetTop-o.offsetTop,a.descent=a.height-a.ascent}finally{h.remove()}return a};class I{static get FONT(){return{family:"Arial",style:"normal",variant:"normal",color:"rgb(212,212,212)",size:50,weight:"bold"}}constructor({family:t,style:i,variant:e,color:s,size:r,weight:o}){this._family=t,this._style=i,this._variant=e,this._color=new p(s),this._size=r,this._weight=o,this._setFontDimensions()}set family(t){this._family=t,this._setFontDimensions()}set fontSize(t){this._fontSize=t,this._setFontDimensions()}set fontWeight(t){this._fontSize=t,this._setFontDimensions()}get font2Canvas(){return`${this._style||""} ${this._variant||""} ${this._weight||""} ${this._size?this._size+"px":""} ${this._family||""}`}get family(){return this._family}get style(){return this._style}get variant(){return this._variant}get color(){return this._color}set color(t){this._color=new p(t)}get size(){return this._size}get weight(){return this._weight}get dimensions(){return this._dimensions}_setFontDimensions(){this._dimensions=T({fontFamily:this._family,fontSize:this._size,fontWeight:this._weight})}}class R{constructor({weight:t,color:i,enableBezierCurves:e,dashed:s,lineCap:r}){this._weight=t,this._color=new p(i),this._enableBezierCurves=e,this._dashed=s,this._lineCap=r||"round"}get weight(){return this._weight}get color(){return this._color}get enableBezierCurves(){return this._enableBezierCurves}get dashed(){return this._dashed}get lineCap(){return this._lineCap}}const O=()=>/Mobi|Android/i.test(navigator.userAgent),C=function(t,i,e,s,r,o,n,h,a){return{x:Math.pow(1-t,3)*i+3*t*Math.pow(1-t,2)*s+3*t*t*(1-t)*o+t*t*t*h,y:Math.pow(1-t,3)*e+3*t*Math.pow(1-t,2)*r+3*t*t*(1-t)*n+t*t*t*a}},D=function(t,i,e,s,r,o,n){return{x:(1-t)*(1-t)*i+2*(1-t)*t*s+t*t*o,y:(1-t)*(1-t)*e+2*(1-t)*t*r+t*t*n}},N=({startPoint:t,controlPoint1:i,controlPoint2:e,endPoint:s,numberOfPointsToGenerate:r})=>{let o=[],n=r||50;for(let r=0;r<=n;r++){let h=null;h=e?C(r/n,t.x,t.y,i.x,i.y,e.x,e.y,s.x,s.y):D(r/n,t.x,t.y,i.x,i.y,s.x,s.y),o.push(h)}return o},S=t=>{let i=[];for(let e=1;e<t.length;e++){const s=t[e];if(s.x===t[e-1].x){const r=(s.y-t[e-1].y)/50;for(let o=0;o<50;o++)i.push({x:s.x,y:t[e-1].y+r*o})}else if(s.y===t[e-1].y){const r=(s.x-t[e-1].x)/50;for(let o=0;o<50;o++)i.push({x:t[e-1].x+r*o,y:s.y})}}return i.push({x:t[t.length-1].x,y:t[t.length-1].y}),i}}])}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Schema, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./src/schema/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__["isMobile"]; });






/***/ }),

/***/ "./src/schema/connection.js":
/*!**********************************!*\
  !*** ./src/schema/connection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connection; });
/* harmony import */ var _connector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector.js */ "./src/schema/connector.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__);




class Connection extends _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__["Entity"]{
    static get PADDING(){
        return 15;
    }

    constructor({
        name,
        from,
        to,
        line,
        connector,
        padding,
        isEditable,
        showPathPoints,
    }) {
        super({
            name
        });
        this._z = 0;
        this._from = from;
        this._to = to;
        this._line = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_1__["Line"](line);
        connector.position = to.position;
        this._connector = new _connector_js__WEBPACK_IMPORTED_MODULE_0__["default"](connector);
        this.isEditable = isEditable;
        this._showPathPoints = showPathPoints;
        this._oldToDimensions = {
            width: this._to.dimension.width,
            height: this._to.dimension.height,
        };
        this._oldFromDimensions = {
            width: this._from.dimension.width,
            height: this._from.dimension.height,
        };
        this._padding = padding || Connection.PADDING;
    }

    draw(ctx) {
        let path = this.path;
        if (path.length > 0) {
            ctx.save();
            ctx.lineWidth = this._line.weight;
            ctx.strokeStyle = this._line.color.hex;
            if(this._line.dashed)
            ctx.setLineDash(this._line.dashed);
            ctx.lineWidth = this._line.weight;
            ctx.lineCap = 'square';
            ctx.beginPath();
            const startPoint = path[0];
            ctx.moveTo(startPoint.x, startPoint.y);
            if (this._line && this._line.enableBezierCurves) {
                const controlPoint1 = path[1];
                const controlPoint2 = path[2];
                const endPoint = path[3];
                ctx.bezierCurveTo(
                    controlPoint1.x,
                    controlPoint1.y,
                    controlPoint2.x,
                    controlPoint2.y,
                    endPoint.x,
                    endPoint.y
                );
            } else {
                for (let i = 1; i < path.length; i++) {
                    const point = path[i];
                    ctx.lineTo(point.x, point.y);
                }
            }
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            //draw connector
            const lastPoint = path[path.length - 1];
            const secondLastPoint = path[path.length - 2];
            const delta_x = lastPoint.x - secondLastPoint.x;
            const delta_y = lastPoint.y - secondLastPoint.y;
            this._connector.transform.rotation.angle = Math.atan2(delta_y, delta_x);
            this._connector.transform.position = lastPoint;
            this._connector.draw(ctx);
        }
    }

    get connectionPoints() {
        let smallerDistance = Infinity;
        let closestPoints = {};
        for (let [fromKey, fromValue] of Object.entries(this._from.shape.sides)) {
            for (let [toKey, toValue] of Object.entries(this._to.shape.sides)) {
                const distanceX = Math.abs(fromValue.x - toValue.x);
                if (distanceX < smallerDistance) {
                    smallerDistance = distanceX;
                    fromValue.name = fromKey;
                    toValue.name = toKey;
                    closestPoints = {
                        origin: fromValue,
                        destination: toValue
                    };
                }
            }
        }
        return closestPoints;
    }

    get path() {
        const connectionPoints = this.connectionPoints;
        const origin = connectionPoints.origin;
        const destination = connectionPoints.destination;

        let hd = Math.abs(destination.x - origin.x);
        let mhd = hd / 2;

        let path = [];
        if (origin.name !== destination.name){
            let multFactor = origin.x >= destination.x ? 1 : -1;
            if(hd < 200){
                path.push({
                    x: origin.x,
                    y: origin.y,
                }, {
                    x: origin.x - 50 * multFactor,
                    y: origin.y,
                }, {
                    x: destination.x + 50 * multFactor,
                    y: destination.y,
                }, {
                    x: destination.x + this._padding * multFactor,
                    y: destination.y,
                });
            }else{
                path.push({
                    x: origin.x,
                    y: origin.y,
                }, {
                    x: origin.x - mhd * multFactor,
                    y: origin.y,
                }, {
                    x: destination.x + mhd * multFactor,
                    y: destination.y,
                }, {
                    x: destination.x + this._padding * multFactor,
                    y: destination.y,
                });
            }
        }else{
            const multFactor = origin.name === 'right' ? 1 : -1;
            path.push({
                x: origin.x,
                y: origin.y,
            }, {
                x: origin.x + 50 * multFactor,
                y: origin.y,
            }, {
                x: destination.x + 50 * multFactor,
                y: destination.y,
            }, {
                x: destination.x + this._padding * multFactor,
                y: destination.y,
            });
        }
        return path;
    }

    get to() {
        return this._to;
    }

    get from() {
        return this._from;
    }

}

/***/ }),

/***/ "./src/schema/connector.js":
/*!*********************************!*\
  !*** ./src/schema/connector.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connector; });
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__);


class Connector {

    constructor({
        position,
        dimension,
        color
    }) {
        this._transform = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Transform"]({
            position: position,
            dimension: dimension
        });
        this._color = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Color"](color);
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this._transform.position.x , this._transform.position.y);
        ctx.rotate(this._transform.rotation.angle);
        ctx.translate(-this._transform.position.x, -this._transform.position.y);

        ctx.strokeStyle = this._color.rgba;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this._transform.position.x - 5, this._transform.position.y, 5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        ctx.strokeStyle = this._color.rgba;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this._transform.position.x + 2, this._transform.position.y);
        ctx.lineTo(this._transform.position.x + 14, this._transform.position.y);
        ctx.moveTo(this._transform.position.x + 2, this._transform.position.y);
        ctx.lineTo(this._transform.position.x + 14, this._transform.position.y +  8);
        ctx.moveTo(this._transform.position.x + 2, this._transform.position.y);
        ctx.lineTo(this._transform.position.x + 14, this._transform.position.y - 8);
        ctx.stroke();

        ctx.restore();
    }

    get transform() {
        return this._transform;
    }



}

/***/ }),

/***/ "./src/schema/field.js":
/*!*****************************!*\
  !*** ./src/schema/field.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Field; });
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__);


class Field extends _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Entity"]{

    constructor({
        label,
        name,
        type,
        position,
        dimension,
        border,
        font,
        reference,
        parent
    }, canvas){
        super({
            name,
            position,
            dimension,
        }, canvas);
        this._label = label;
        this._type = type || '';
        this._font = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Font"](font);
        this._shape = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
            position: this.position,
            dimension: this.dimension,
            border: border
        });
        this._connection;
        this._parent = parent;
        this._reference = reference;

        Object.defineProperty(
            this._shape, 
            "sides", 
            {
                get: function () {
                    const middleHeight = this._transform.dimension.height / 2;
                    return {
                        right: {
                            x: this._transform.position.x + this._transform.dimension.width + 21,
                            y: this._transform.position.y + middleHeight
                        },
                        left: {
                            x: this._transform.position.x - 11,
                            y: this._transform.position.y + middleHeight
                        },
                    };
                } 
            }
        );
    }

    draw(ctx){
        ctx.save();
        this._shape.draw(ctx);
        ctx.font = this._font.font2Canvas;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._font.color.hex;
        const fieldPositionY = this._transform.position.y + this._font.dimensions.height/5;

        ctx.fillText(
            this._label,
            this._transform.position.x,
            fieldPositionY
        );

        const typeWidth = ctx.measureText(this._type).width;
        ctx.fillText(
            this._type,
            this._parent.position.x + this._parent.dimension.width - this._parent.padding.right - typeWidth - 10,
            fieldPositionY
        );
        ctx.restore();
    }
}

/***/ }),

/***/ "./src/schema/icon.js":
/*!****************************!*\
  !*** ./src/schema/icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__);


class Icon extends _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor({
        name,
        src,
        position,
        padding,
        dimension,
        background,
        border,
        parent
    }) {
        super({
            position,
            padding,
            dimension,
            parent
        });
        this._loaded = false;
        this._image = new Image();
        this._name = name;
        this._image.src = src;
        this._image.addEventListener('load', () => {
            this._loaded = true;
        });
        this._shape = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
            position: this.position,
            dimension: this.dimension,
            background: background,
            border: border
        });
    }

    get image() {
        return this._image;
    }

    get loaded() {
        return this._loaded;
    }

    draw(ctx) {
        ctx.save();
        if(this._shape.background){
            ctx.translate(this.padding.left,  this.padding.top);
            this._shape.draw(ctx);
            ctx.translate(-this.padding.left, -this.padding.top);
        }
        ctx.drawImage(
            this.image,
            this.position.x + this.padding.left,
            this.position.y + this.padding.top,
            this.dimension.width,
            this.dimension.height
        );
        ctx.restore();
    }
}

/***/ }),

/***/ "./src/schema/index.js":
/*!*****************************!*\
  !*** ./src/schema/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Schema; });
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.js */ "./src/schema/table.js");
/* harmony import */ var _connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.js */ "./src/schema/connection.js");
/* harmony import */ var _assets_images_grid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/grid.svg */ "./assets/images/grid.svg");





class Schema {
    constructor({
        canvas,
        options,
        data
    }) {
        options.backgroundImage = `url('${_assets_images_grid_svg__WEBPACK_IMPORTED_MODULE_3__["default"]}')`;
        this._canvas = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Canvas"]({
            canvas,
            options
        });
        this.data = data;
    }

    getTableByName(name) {
        return this._canvas.entityManager.getEntityByName(name);
    }

    addTable(table) {
        const newTable = new _table_js__WEBPACK_IMPORTED_MODULE_1__["default"](table, this._canvas);
        this._canvas.entityManager.addEntity(newTable, this._canvas);

        const tables = this._canvas.entityManager.getEntitiesInLayer(1);
        for(let table of tables){
            table._fields.forEach((field) => {
                if(field._reference){
                    const referenceTable = this._canvas.entityManager.getEntityByName(field._reference);
                    if(referenceTable){
                        const connection = {
                            name: `${table._name}-${field._name}-${referenceTable._name}`,
                            isEditable: false,
                            connector: {
                                shape: 'triangle',
                                dimension: {
                                    width: 10,
                                    height: 10
                                },
                                color: 'rgb(180,180,180)'
                            },
                            line: {
                                weight: 3,
                                color: 'rgb(180,180,180)',
                                enableBezierCurves: true
                            },
                            to: field,
                            from: referenceTable._header
                        };
    
                        if(table._name === field._reference){
                            connection.to = referenceTable._footer;
                            connection.from = field;
                        }
    
                        const newConnection = new _connection_js__WEBPACK_IMPORTED_MODULE_2__["default"](connection);
                        field._connection = newConnection;
                        this._canvas.entityManager.addEntity(newConnection, this._canvas);
                    }
                }
            });
        }
    }

    removeTableByName(name) {
        const deletedEntity = this._canvas.entityManager.getEntityByName(name); 
        this._canvas.entityManager.removeEntityByName(name);
        const connections = this._canvas.entityManager.getEntitiesInLayer(0);

        for(let connection of connections){
            if(connection._to._parent._name === deletedEntity._name || connection._from._parent._name == deletedEntity._name){
                this._canvas.entityManager.removeEntityByName(connection._name);
            }
        }
    }

    addFieldToTable(field, tableName){
        const table = this._canvas.entityManager.getEntityByName(tableName);
        table.addField(field);
    }

    set data(data) {
        let entityMap = {};
        let i = 0;
        for (let [name, table] of Object.entries(data)) {
            const newTable = new _table_js__WEBPACK_IMPORTED_MODULE_1__["default"](table, this._canvas);
            entityMap[name] = newTable;
        }

        Object.values(entityMap).forEach((table) => {
            this._canvas.entityManager.addEntity(table, this._canvas);
            table._fields.forEach((field) => {
                table.addConnectionToField(field);
            });
        });

        this._canvas.draw();
    }

    get data() {
        let data = {
            tables: []
        };
        const tables = this._canvas.entityManager.getEntitiesInLayer(1);
        for(let table of tables){
            let newDataTable = {
                name: table._name,
                label: table._label,
                position: table.position,
                dimension: { width: table.dimension.width, height: table.dimension.height },
                icon: table._header._icon._name,
                fields: []
            };
            table._fields.forEach(field => {
                newDataTable.fields.push({
                    name: field._name,
                    label: field._label,
                    reference: field._reference
                });
            });

            data.tables.push(newDataTable);
        }

        return data;
    }

    on(event, callback) {
        if (
            event === 'onkeypress' ||
            event === 'onkeyup' ||
            event === 'onkeydown'
        ) {
            window[event] = callback;
        } else this._canvas._el.addEventListener(event, callback);
    }

    saveAsImage(name) {
        this.canvas.saveAsImage(name);
    }

}

/***/ }),

/***/ "./src/schema/table.js":
/*!*****************************!*\
  !*** ./src/schema/table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field.js */ "./src/schema/field.js");
/* harmony import */ var _tableHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableHeader.js */ "./src/schema/tableHeader.js");
/* harmony import */ var _tableFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableFooter.js */ "./src/schema/tableFooter.js");
/* harmony import */ var _connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection.js */ "./src/schema/connection.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__);







class Table extends _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__["Entity"] {
    constructor({
        name,
        label,
        icon,
        font,
        fields,
        position,
        dimension,
        isDraggable,
        background,
        shadow,
        border,
        header,
        footer,
        padding
    }, canvas) {
        super({
            name,
            position,
            dimension,
            padding
        }, canvas);
        this._z = 1;
        this._label = label;
        this._font = font ? new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__["Font"](font) : _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__["Font"].FONT;
        this._isDraggable = isDraggable || false;
        this._shape = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__["Rectangle"]({
            position: this.position,
            dimension: this.dimension,
            border,
            background
        });

        this._header = new _tableHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            title: label,
            font: font,
            icon: icon,
            parent: this,
            position: this.position,
            dimension: {
                width: this.dimension.width,
                height: 35
            },
            padding,
            border: header && header.border ? header.border : border
        }, canvas);

        this._footer = new _tableFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
            name: label,
            font: font,
            parent: this,
            position: {
                x: this.position.x,
                y: this.position.y + this.dimension.height - 35
            },
            dimension: {
                width: this.dimension.width,
                height: 35
            },
            padding,
            border: footer && footer.border ? footer.border : border,
            shadow
        }, canvas);

        this._fields = [];
        let index = 0;
        fields.forEach(field => {
            const fieldFont = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__["Font"](field.font);
            const fieldToInsert = new _field_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
                label: field.label,
                name: field.name,
                parent: this,
                reference: field.reference,
                position: {
                    x: this._shape.position.x,
                    y: fieldFont.dimensions.height * index
                },
                dimension: {
                    width: this._shape.dimension.width - 2 * this._padding.right - 10,
                    height: fieldFont.dimensions.height
                },
                font: fieldFont,
                border: field.border,
                type: field.type
            }, canvas);
            this._fields.push(fieldToInsert);

            index++;
        });

        this._showScrollBar = false;
        this._scrollPosition = 0;
        this._scrollBarColor = 'rgba(0,0,0,0.2)';
        this._scrollBar = new Path2D();

        this.on('wheel', (e) => {
            let mousePosition = this._canvas.getTransformedPoint(e.offsetX, e.offsetY);
            if (
                mousePosition.x >= this.scrollableAreaX1Position &&
                mousePosition.x <= this.scrollableAreaX2Position &&
                mousePosition.y >= this.scrollableAreaY1Position &&
                mousePosition.y <= this.scrollableAreaY2Position
            ) {
                const delta = Math.sign(e.deltaY);
                const cond1 = this.initialFieldYPosition + this.scrollableAreaHeight > this.scrollableAreaY2Position;
                const cond2 = this.initialFieldYPosition < this.scrollableAreaY1Position;
                if ((cond1 && delta > 0) || (cond2 && delta < 0)) this._scrollPosition -= delta * 5;
            }
        });

        this.on('mousemove', (e) => {
            let mousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
            this._fields.forEach(field => {
                if (field.contains(mousePosition)) {
                    field._shape.background.color = '#f3f2f2';
                } else {
                    field._shape.background.color = 'white';
                }
            });

            if (this._canvas.ctx.isPointInPath(this._scrollBar, mousePosition.x, mousePosition.y, 'nonzero')) {
                this._scrollBarColor = 'rgba(0,0,0,0.3)';
            } else {
                this._scrollBarColor = 'rgba(0,0,0,0.2)';
            }
        });

        this.on('mousehover', (e) => {
            this._showScrollBar = true;
        });

        this.on('mouseleave', (e) => {
            this._showScrollBar = false;
        });
    }

    draw(ctx) {
        //shape
        this._shape.draw(ctx);

        //header
        this._header.draw(ctx);

        //scrollable area
        ctx.save();
        ctx.beginPath();
        ctx.rect(
            this._shape.position.x + this._padding.left,
            this.scrollableAreaY1Position,
            this._shape.dimension.width - 2 * this._padding.right,
            this.clipAreaHeight
        );
        ctx.clip();

        this._fields.forEach((field, index) => {
            const fieldYPosition = this.initialFieldYPosition + field._font.dimensions.height * index;
            field.position = {
                x: this._shape.position.x + this._padding.left,
                y: fieldYPosition
            };

            const isFieldOutsideOfScrollableArea =
                fieldYPosition < this.scrollableAreaY1Position - 10 ||
                fieldYPosition > this.scrollableAreaY2Position - 15;

            if (field._connection) {
                if (field._reference !== this._name) {
                    if (isFieldOutsideOfScrollableArea) {
                        field._connection._to = this._header;
                    } else {
                        field._connection._to = field;
                    }
                } else {
                    if (isFieldOutsideOfScrollableArea) {
                        field._connection._from = this._header;
                    } else {
                        field._connection._from = field;
                    }
                }
            }

            field.draw(ctx);
        });
        ctx.restore();

        //scrollbar
        if (this.hasScroolBar && this._showScrollBar) {
            ctx.save();
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            ctx.beginPath();
            ctx.rect(
                this.scrollableAreaX2Position - 5,
                this.scrollableAreaY1Position,
                5,
                this.clipAreaHeight
            );
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.fillStyle = this._scrollBarColor;
            ctx.beginPath();
            this._scrollBar = new Path2D();
            this._scrollBar.rect(
                this.scrollableAreaX2Position - 5,
                this.scrollableAreaY1Position - this._scrollPosition * this.percentOfVisibleFields,
                5,
                this.scrollbarSize
            );
            ctx.fill(this._scrollBar);
            ctx.restore();
        }

        this._footer.draw(ctx);
    }

    addField(field) {
        const fieldFont = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_4__["Font"](field.font);
        const fieldToInsert = new _field_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            label: field.label,
            name: field.name,
            parent: this,
            reference: field.reference,
            position: {
                x: this._shape.position.x,
                y: fieldFont.dimensions.height * this._fields.length
            },
            dimension: {
                width: this._shape.dimension.width - 2 * this._padding.right - 10,
                height: fieldFont.dimensions.height
            },
            font: fieldFont,
            border: field.border,
            type: field.type
        }, this._canvas);
        this._fields.push(fieldToInsert);
        this.addConnectionToField(fieldToInsert);
    }

    addConnectionToField(field) {
        if (field._reference) {
            const referenceTable = this._canvas.entityManager.getEntityByName(field._reference);
            if (referenceTable) {
                const connection = {
                    name: `${this._name}-${field._name}-${referenceTable._name}`,
                    isEditable: false,
                    connector: {
                        shape: 'triangle',
                        dimension: {
                            width: 10,
                            height: 10
                        },
                        color: 'rgb(180,180,180)'
                    },
                    line: {
                        weight: 3,
                        color: 'rgb(180,180,180)',
                        enableBezierCurves: true
                    },
                    to: field,
                    from: referenceTable._header
                };

                if (this._name === field._reference) {
                    connection.to = referenceTable._footer;
                    connection.from = field;
                }

                const newConnection = new _connection_js__WEBPACK_IMPORTED_MODULE_3__["default"](connection);
                field._connection = newConnection;
                this._canvas.entityManager.addEntity(newConnection, this._canvas);
            }
        }
    }

    setIcon() {

    }

    get initialFieldYPosition() {
        return this.scrollableAreaY1Position + this._scrollPosition;
    }

    get scrollableAreaX1Position() {
        return this._shape.position.x + this._padding.left;
    }

    get scrollableAreaX2Position() {
        return this._shape.position.x + this._padding.left + this._shape.dimension.width - 2 * this._padding.right;
    }

    get scrollableAreaY1Position() {
        return this._shape.position.y + this._header.dimension.height + 10;
    }

    get scrollableAreaY2Position() {
        return this._shape.position.y + this._shape.dimension.height - this._footer.dimension.height - 10;
    }

    get clipAreaHeight() {
        return this._shape.dimension.height - this._header.dimension.height - this._footer.dimension.height - 20;
    }

    get scrollableAreaHeight() {
        return this._fields.length * this._fields[0]._font.dimensions.height;
    }

    get hasScroolBar() {
        return this.scrollableAreaHeight > this.clipAreaHeight;
    }

    get percentOfVisibleFields() {
        const numberOfVisibleFields = (this.clipAreaHeight / this._fields[0]._font.dimensions.height);
        return numberOfVisibleFields / this._fields.length;
    }

    get scrollbarSize() {
        return parseInt(this.clipAreaHeight * this.percentOfVisibleFields).toFixed(2);
    }
}

/***/ }),

/***/ "./src/schema/tableFooter.js":
/*!***********************************!*\
  !*** ./src/schema/tableFooter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableFooter; });
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__);


class TableFooter extends _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
    constructor({
        name,
        position,
        dimension,
        background,
        shadow,
        border,
        padding,
        parent,
    }, canvas) {
        super({
            name: `footer_${name}`,
            position,
            dimension,
            padding,
            parent
        }, canvas);

        this._shape = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
            position: this.position,
            dimension: this.dimension,
            shadow,
            border,
            background
        });

        Object.defineProperty(
            this._shape,
            "sides", {
                get: function () {
                    const middleHeight = this._transform.dimension.height / 2;
                    return {
                        right: {
                            x: this._transform.position.x + this._transform.dimension.width,
                            y: this._transform.position.y + middleHeight
                        },
                        left: {
                            x: this._transform.position.x,
                            y: this._transform.position.y + middleHeight
                        },
                    };
                }
            }
        );
    }

    draw(ctx) {
        ctx.save();
        this._shape.position.x = this._parent.position.x;
        this._shape.position.y = this._parent.position.y + this._parent.dimension.height - this._transform.dimension.height;
        this._shape.draw(ctx);
        ctx.restore();
    }

}

/***/ }),

/***/ "./src/schema/tableHeader.js":
/*!***********************************!*\
  !*** ./src/schema/tableHeader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableHeader; });
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @allanoricil/canvasjs */ "./node_modules/@allanoricil/canvasjs/dist/index.js");
/* harmony import */ var _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.js */ "./src/schema/icon.js");
/* harmony import */ var _assets_json_backgroundColorsForIcons_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/backgroundColorsForIcons.json */ "./assets/json/backgroundColorsForIcons.json");
var _assets_json_backgroundColorsForIcons_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/backgroundColorsForIcons.json */ "./assets/json/backgroundColorsForIcons.json", 1);




class TableHeader extends _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Entity"]{
    constructor({
        title,
        icon,
        font,
        position,
        dimension,
        background,
        shadow,
        border,
        padding,
        parent,
    }, canvas) {
        super({
            name: `header_${title}`,
            position,
            dimension,
            padding,
            parent
        }, canvas);
        
        this._title = title;
        this._font = font ? new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Font"](font) : _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Font"].FONT;
        this._shape = new _allanoricil_canvasjs__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]({
            position: this.position,
            dimension: this.dimension,
            shadow,
            border,
            background
        });

        Object.defineProperty(
            this._shape, 
            "sides", 
            {
                get: function () {
                    const middleHeight = this._transform.dimension.height / 2;
                    return {
                        right: {
                            x: this._transform.position.x + this._transform.dimension.width,
                            y: this._transform.position.y + middleHeight
                        },
                        left: {
                            x: this._transform.position.x,
                            y: this._transform.position.y + middleHeight
                        },
                    };
                } 
            }
        );

        if(icon){
            const iconSrcTokens  = icon.name.split(':');
            icon.background.color = _assets_json_backgroundColorsForIcons_json__WEBPACK_IMPORTED_MODULE_2__[iconSrcTokens[1]];
            this._icon = new _icon_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
                name: icon.name,
                src: `${this._canvas._imagesSource || '.'}/salesforce-icons/${iconSrcTokens[0]}/${iconSrcTokens[1]}.svg`,
                parent: this,
                position: this.position,
                dimension: icon.dimension || { width: 25, height: 25},
                padding: { left: 0, top: 0, right: 0, bottom: 0},
                background: icon.background,
                padding: icon.padding,
                border: icon.border,
            });
        }
    }

    draw(ctx){
        this._shape.draw(ctx);

        //title
        ctx.save();
        ctx.font = this._font.font2Canvas;
        ctx.textBaseline = 'top';
        ctx.fillStyle = this._font.color.hex;
        ctx.fillText(
            this._title, 
            this._shape.position.x + this._padding.left + this._icon.dimension.width + this._icon.padding.right, 
            this._shape.position.y + this._padding.top
        );
        ctx.restore();

        //icon
        if(this._icon){
            this._icon.draw(ctx);
        }
    }

}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9hc3NldHMvaW1hZ2VzL2dyaWQuc3ZnIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvQGFsbGFub3JpY2lsL2NhbnZhc2pzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2NoZW1hQnVpbGRlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyLy4vc3JjL3NjaGVtYS9jb25uZWN0aW9uLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL2Nvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyLy4vc3JjL3NjaGVtYS9maWVsZC5qcyIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyLy4vc3JjL3NjaGVtYS9pY29uLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL2luZGV4LmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL3RhYmxlLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL3RhYmxlRm9vdGVyLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL3RhYmxlSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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c0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2NoZW1hQnVpbGRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzY2hlbWFCdWlsZGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzLzU5OTBlMjkxMTM1Y2ZkYjI4MTkyNDBlZmE5YmY0ZTk5LnN2Z1wiOyIsIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGkpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuY2FudmFzSlM9aSgpOnQuY2FudmFzSlM9aSgpfSh3aW5kb3csKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBpPXt9O2Z1bmN0aW9uIGUocyl7aWYoaVtzXSlyZXR1cm4gaVtzXS5leHBvcnRzO3ZhciByPWlbc109e2k6cyxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3NdLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGUpLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIGUubT10LGUuYz1pLGUuZD1mdW5jdGlvbih0LGkscyl7ZS5vKHQsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse2VudW1lcmFibGU6ITAsZ2V0OnN9KX0sZS5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGUudD1mdW5jdGlvbih0LGkpe2lmKDEmaSYmKHQ9ZSh0KSksOCZpKXJldHVybiB0O2lmKDQmaSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGUucihzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZpJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHIgaW4gdCllLmQocyxyLGZ1bmN0aW9uKGkpe3JldHVybiB0W2ldfS5iaW5kKG51bGwscikpO3JldHVybiBzfSxlLm49ZnVuY3Rpb24odCl7dmFyIGk9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChpLFwiYVwiLGkpLGl9LGUubz1mdW5jdGlvbih0LGkpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKX0sZS5wPVwiXCIsZShlLnM9MCl9KFtmdW5jdGlvbih0LGksZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5yKGkpLGUuZChpLFwiQ2FudmFzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGx9KSksZS5kKGksXCJFbnRpdHlcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKSxlLmQoaSxcIkNpcmNsZVwiLChmdW5jdGlvbigpe3JldHVybiB2fSkpLGUuZChpLFwiRGlhbW9uZFwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpLGUuZChpLFwiUG9seWdvblwiLChmdW5jdGlvbigpe3JldHVybiB4fSkpLGUuZChpLFwiUmVjdGFuZ2xlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEx9KSksZS5kKGksXCJTaGFwZVwiLChmdW5jdGlvbigpe3JldHVybiB5fSkpLGUuZChpLFwiVHJpYW5nbGVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gQX0pKSxlLmQoaSxcIkJhY2tncm91bmRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gRX0pKSxlLmQoaSxcIkJvcmRlclwiLChmdW5jdGlvbigpe3JldHVybiBmfSkpLGUuZChpLFwiQ29sb3JcIiwoZnVuY3Rpb24oKXtyZXR1cm4gcH0pKSxlLmQoaSxcIkZvbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gSX0pKSxlLmQoaSxcIkxpbmVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gUn0pKSxlLmQoaSxcIlBhZGRpbmdcIiwoZnVuY3Rpb24oKXtyZXR1cm4gY30pKSxlLmQoaSxcIlNoYWRvd1wiLChmdW5jdGlvbigpe3JldHVybiBifSkpLGUuZChpLFwiRGltZW5zaW9uXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSksZS5kKGksXCJQb3NpdGlvblwiLChmdW5jdGlvbigpe3JldHVybiBzfSkpLGUuZChpLFwiUm90YXRpb25cIiwoZnVuY3Rpb24oKXtyZXR1cm4gb30pKSxlLmQoaSxcIlNjYWxlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG59KSksZS5kKGksXCJUcmFuc2Zvcm1cIiwoZnVuY3Rpb24oKXtyZXR1cm4gaH0pKSxlLmQoaSxcImdldFRleHRIZWlnaHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gVH0pKSxlLmQoaSxcInN5bnRheEhpZ2hsaWdodFwiLChmdW5jdGlvbigpe3JldHVybiBkfSkpLGUuZChpLFwiaXNNb2JpbGVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gT30pKSxlLmQoaSxcInJlbW92ZVdoaXRlU3BhY2VzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIF99KSksZS5kKGksXCJnZXRCZXppZXJQb2ludHNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gTn0pKSxlLmQoaSxcImdldFBhdGhQb2ludHNHaXZlblBhdGhcIiwoZnVuY3Rpb24oKXtyZXR1cm4gU30pKTtjbGFzcyBze2NvbnN0cnVjdG9yKHt4OnQseTppfSl7dGhpcy5feD10LHRoaXMuX3k9aX1nZXQgeCgpe3JldHVybiBwYXJzZUludCh0aGlzLl94P3RoaXMuX3gudG9GaXhlZCgwKTowKX1nZXQgeSgpe3JldHVybiBwYXJzZUludCh0aGlzLl95P3RoaXMuX3kudG9GaXhlZCgwKTowKX1zZXQgeCh0KXt0aGlzLl94PXR9c2V0IHkodCl7dGhpcy5feT10fX1jbGFzcyBye2NvbnN0cnVjdG9yKHt3aWR0aDp0LGhlaWdodDppfSl7dGhpcy5fd2lkdGg9dCx0aGlzLl9oZWlnaHQ9aX1nZXQgd2lkdGgoKXtyZXR1cm4gdGhpcy5fd2lkdGh9Z2V0IGhlaWdodCgpe3JldHVybiB0aGlzLl9oZWlnaHR9c2V0IHdpZHRoKHQpe3RoaXMuX3dpZHRoPXR9c2V0IGhlaWdodCh0KXt0aGlzLl9oZWlnaHQ9dH19Y2xhc3Mgb3tjb25zdHJ1Y3Rvcih7YW5nbGU6dCxyZWZlcmVudGlhbDppfSl7dGhpcy5fYW5nbGU9dCx0aGlzLl9yZWZlcmVudGlhbD1uZXcgcyhpfHx7eDowLHk6MH0pfWdldCBhbmdsZSgpe3JldHVybiB0aGlzLl9hbmdsZX1zZXQgYW5nbGUodCl7dGhpcy5fYW5nbGU9dH1nZXQgcmVmZXJlbnRpYWwoKXtyZXR1cm4gdGhpcy5fcmVmZXJlbnRpYWx9fWNsYXNzIG57Y29uc3RydWN0b3Ioe2hvcml6b250YWw6dCx2ZXJ0aWNhbDppfSl7dGhpcy5faG9yaXpvbnRhbD10LHRoaXMuX3ZlcnRpY2FsPWl9Z2V0IGhvcml6b250YWwoKXtyZXR1cm4gdGhpcy5faG9yaXpvbnRhbH1nZXQgdmVydGljYWwoKXtyZXR1cm4gdGhpcy5fdmVydGljYWx9c2V0IGhvcml6b250YWwodCl7dGhpcy5faG9yaXpvbnRhbD10fXNldCB2ZXJ0aWNhbCh0KXt0aGlzLl92ZXJ0aWNhbD10fX1jbGFzcyBoe3N0YXRpYyBnZXQgUE9TSVRJT04oKXtyZXR1cm4gbmV3IHMoe3g6MCx5OjB9KX1zdGF0aWMgZ2V0IERJTUVOU0lPTigpe3JldHVybiBuZXcgcih7d2lkdGg6MCxoZWlnaHQ6MH0pfXN0YXRpYyBnZXQgUk9UQVRJT04oKXtyZXR1cm4gbmV3IG8oe2FuZ2xlOjB9KX1zdGF0aWMgZ2V0IFNDQUxFKCl7cmV0dXJuIG5ldyBuKHtob3Jpem9udGFsOjEsdmVydGljYWw6MX0pfWNvbnN0cnVjdG9yKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsc2NhbGU6c30pe3RoaXMuX3Bvc2l0aW9uPXR8fGguUE9TSVRJT04sdGhpcy5fZGltZW5zaW9uPWk/bmV3IHIoaSk6aC5ESU1FTlNJT04sdGhpcy5fcm90YXRpb249ZT9uZXcgbyhlKTpoLlJPVEFUSU9OLHRoaXMuX3NjYWxlPXM/bmV3IG4ocyk6aC5TQ0FMRX1nZXQgcG9zaXRpb24oKXtyZXR1cm4gdGhpcy5fcG9zaXRpb259Z2V0IGRpbWVuc2lvbigpe3JldHVybiB0aGlzLl9kaW1lbnNpb259Z2V0IHJvdGF0aW9uKCl7cmV0dXJuIHRoaXMuX3JvdGF0aW9ufWdldCBzY2FsZSgpe3JldHVybiB0aGlzLl9zY2FsZX1zZXQgcG9zaXRpb24odCl7dGhpcy5fcG9zaXRpb249dH1zZXQgZGltZW5zaW9uKHQpe3RoaXMuX2RpbWVuc2lvbj10fXNldCByb3RhdGlvbih0KXt0aGlzLl9yb3RhdGlvbj10fXNldCBzY2FsZSh0KXt0aGlzLl9zY2FsZT10fX1jbGFzcyBhe2NvbnN0cnVjdG9yKCl7dGhpcy5fZW50aXRpZXNNYXA9bmV3IE1hcCxbLi4uQXJyYXkoMTAwKS5rZXlzKCldLmZvckVhY2godD0+e3RoaXMuX2VudGl0aWVzTWFwLnNldCh0LG5ldyBNYXApfSksdGhpcy5fZW50aXRpZXNMYXllck1hcD1uZXcgTWFwfWdldExheWVyKHQpe3JldHVybiB0aGlzLl9lbnRpdGllc01hcC5nZXQodCl9Z2V0RW50aXR5TGF5ZXJCeU5hbWUodCl7cmV0dXJuIHRoaXMuZ2V0TGF5ZXIodGhpcy5fZW50aXRpZXNMYXllck1hcC5nZXQodCkpfWdldEVudGl0eUJ5TmFtZSh0KXtyZXR1cm4gdGhpcy5nZXRFbnRpdHlMYXllckJ5TmFtZSh0KS5nZXQodCl9YWRkRW50aXR5KHQsaSl7dC5fY2FudmFzPWksdGhpcy5nZXRMYXllcih0Ll96fHwwKS5zZXQodC5fbmFtZSx0KSx0aGlzLl9lbnRpdGllc0xheWVyTWFwLnNldCh0Ll9uYW1lLHQuX3opfXJlbW92ZUVudGl0eUJ5TmFtZSh0KXtyZXR1cm4gdGhpcy5nZXRFbnRpdHlMYXllckJ5TmFtZSh0KS5kZWxldGUodCl9Y2xlYXJMYXllcih0KXtjb25zdCBpPXRoaXMuZ2V0TGF5ZXIodCk7aSYmaS5jbGVhcigpfWdldEVudGl0aWVzSW5MYXllcih0KXtyZXR1cm4gdGhpcy5nZXRMYXllcih0KS52YWx1ZXMoKX1nZXQgZW50aXRpZXMoKXtsZXQgdD1bXTtmb3IobGV0W2ksZV1vZiB0aGlzLl9lbnRpdGllc01hcC5lbnRyaWVzKCkpZS5mb3JFYWNoKGk9Pnt0LnB1c2goaSl9KTtyZXR1cm4gdH19Y2xhc3MgbHtzdGF0aWMgZ2V0IFNDQUxFKCl7cmV0dXJue2hvcml6b250YWw6MSx2ZXJ0aWNhbDoxfX1zdGF0aWMgZ2V0IFNDQUxFTElNSVRTKCl7cmV0dXJue21heDoyLG1pbjouMixzcGVlZDouMDF9fXN0YXRpYyBnZXQgRlBTKCl7cmV0dXJuIDYwfXN0YXRpYyBnZXQgQ0FOTU9WRUVOVElUSUVTKCl7cmV0dXJuITB9c3RhdGljIGdldCBDQU5EUkFHQ0FOVkFTKCl7cmV0dXJuITB9Y29uc3RydWN0b3Ioe29wdGlvbnM6dCxjYW52YXM6aX0pe3RoaXMuX2VudGl0eU1hbmFnZXI9bmV3IGEsdGhpcy5fZHBpPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLHRoaXMuX2VsPWl8fGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLHRoaXMuX2VsLnN0eWxlLm1heEhlaWdodD1cIm5vbmVcIix0aGlzLl9lbC5mb2N1cygpLHRoaXMuX2ltYWdlc1NvdXJjZT10LmltYWdlc1NvdXJjZSx0aGlzLl9lbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2UsdGhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yPXQuYmFja2dyb3VuZCYmdC5iYWNrZ3JvdW5kLmNvbG9yP3QuYmFja2dyb3VuZC5jb2xvcjpudWxsLHRoaXMuX2Zwcz10LmZwcz90LmZwczpsLkZQUyx0aGlzLl9jYW5Nb3ZlRW50aXRpZXM9ITEhPT10LmNhbk1vdmVFbnRpdGllcyx0aGlzLl9jYW5EcmFnQ2FudmFzPXQuY2FuRHJhZ0NhbnZhcz90LmNhbkRyYWdDYW52YXM6bC5DQU5EUkFHQ0FOVkFTLHRoaXMuX21vdXNlPW5ldyBzKHt4OjAseTowfSksdGhpcy5fc2NhbGVMaW1pdHM9dC56b29tP3ttYXg6dC56b29tLm1heHx8bC5TQ0FMRUxJTUlUUy5tYXgsbWluOnQuem9vbS5taW58fGwuU0NBTEVMSU1JVFMubWluLHNwZWVkOnQuem9vbS5zcGVlZHx8bC5TQ0FMRUxJTUlUUy5zcGVlZH06bC5TQ0FMRUxJTUlUUyx0aGlzLl90cmFuc2Zvcm09bmV3IGgoe3Bvc2l0aW9uOnt4OjAseTowfSxkaW1lbnNpb246e3dpZHRoOnRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgsaGVpZ2h0OnRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fSxzY2FsZTp7aG9yaXpvbnRhbDp0Lnpvb20ubGV2ZWwsdmVydGljYWw6dC56b29tLmxldmVsfX0pLHRoaXMuX2VsLndpZHRoPXRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgsdGhpcy5fZWwuaGVpZ2h0PXRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LHRoaXMuX2VsLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsdGhpcy5fZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCksdGhpcy5fZWwuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsdGhpcy5fZWwucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBPZmZzY3JlZW5DYW52YXM/KFwiT2Zmc2NyZWVuQ2FudmFzXCJpbiB3aW5kb3c/dGhpcy5fb2Zmc2NyZWVuQ2FudmFzPXRoaXMuX2VsLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKCk6dGhpcy5fb2Zmc2NyZWVuQ2FudmFzPW5ldyBPZmZzY3JlZW5DYW52YXModGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCx0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCksdGhpcy5fY3R4PXRoaXMuX29mZnNjcmVlbkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikpOnRoaXMuX2N0eD10aGlzLl9lbC5nZXRDb250ZXh0KFwiMmRcIiksdGhpcy5faXNTY3JvbGxpbmc9ITEsdGhpcy5fdGlja1RpbWU9MCx0aGlzLl91cGRhdGVUaW1lPTAsdGhpcy5fZHJhd1RpbWU9MDtsZXQgZT17eDowLHk6MH0scj12b2lkIDAsbz0hMSxuPVtdLGQ9bnVsbCxjPSExLGc9bnVsbDt0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdD0+e2lmKGcpcmV0dXJuIGcuX3NlbGVjdGVkPSEwLHZvaWQodGhpcy5fY2FuTW92ZUVudGl0aWVzJiYhZCYmZy5faXNEcmFnZ2FibGUmJihkPWcpKTtlPXRoaXMuZ2V0VHJhbnNmb3JtZWRQb2ludCh0Lm9mZnNldFgsdC5vZmZzZXRZKSxvPSEwfSksdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHQ9PntpZih0aGlzLl9tb3VzZS54PXQub2Zmc2V0WCx0aGlzLl9tb3VzZS55PXQub2Zmc2V0WSxyPXRoaXMuZ2V0VHJhbnNmb3JtZWRQb2ludCh0Lm9mZnNldFgsdC5vZmZzZXRZKSxvKXJldHVybiB0aGlzLl9lbC5zdHlsZS5jdXJzb3I9XCJncmFiYmluZ1wiLHZvaWQgdGhpcy5fY3R4LnRyYW5zbGF0ZShyLngtZS54LHIueS1lLnkpO2lmKGQpcmV0dXJuIGM9ITAsdm9pZChkLnBvc2l0aW9uPXt4OnIueC1kLmRpbWVuc2lvbi53aWR0aC8yLHk6ci55LWQuZGltZW5zaW9uLmhlaWdodC8yfSk7Zm9yKGxldCBpPXRoaXMuX2VudGl0eU1hbmFnZXIuZW50aXRpZXMubGVuZ3RoLTE7aT49MDtpLS0pe2xldCBlPXRoaXMuX2VudGl0eU1hbmFnZXIuZW50aXRpZXNbaV07aWYoZS5jb250YWlucyh0aGlzLl9tb3VzZSkpcmV0dXJuIGUuZW1pdChcIm1vdXNlbW92ZVwiLHQpLGc9ZSx0aGlzLl9lbC5zdHlsZS5jdXJzb3I9XCJncmFiYmluZ1wiLHZvaWQoZS5faG92ZXJ8fChlLl9ob3Zlcj0hMCx0aGlzLl9lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm1vdXNlZW50ZXJlbnRpdHlcIix7ZGV0YWlsOmV9KSksZS5lbWl0KFwibW91c2Vob3ZlclwiLHQpLGUuZW1pdChcImhvdmVyXCIsdCkpKTtlLl9ob3ZlciYmKGUuX2hvdmVyPSExLHRoaXMuX2VsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibW91c2VsZWF2ZWVudGl0eVwiLHtkZXRhaWw6ZX0pKSxlLmVtaXQoXCJtb3VzZWxlYXZlXCIsdCkpfWc9bnVsbCx0aGlzLl9lbC5zdHlsZS5jdXJzb3I9XCJkZWZhdWx0XCIsdGhpcy5fZWwuc3R5bGUuY3Vyc29yPVwiZGVmYXVsdFwifSksdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0PT57bz0hMSxkJiYoZC5fc2VsZWN0ZWQ9ITEsZD1udWxsKX0se3Bhc3NpdmU6ITB9KSx0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0PT57aWYoYyljPSExO2Vsc2UgaWYoZyl7aWYoZy5lbWl0KFwiY2xpY2tcIiksZy5fc2VsZWN0ZWQ9ITAsdGhpcy5fZWwuZGlzcGF0Y2hFdmVudChnLmNyZWF0ZUV2ZW50KFwiY2xpY2tlbnRpdHlcIikpLDA9PT1uLmxlbmd0aD9uLnB1c2goZyk6bi5mb3JFYWNoKHQ9Pnt0Ll9pZCE9PWcuX2lkJiZuLnB1c2goZyl9KSwyPT1uLmxlbmd0aCl7bGV0IHQ9bi5wb3AoKSxpPW4ucG9wKCksZT0hMTtmb3IobGV0IHM9MDtzPGkuY29ubmVjdGlvbnMubGVuZ3RoO3MrKyl7aWYoaS5jb25uZWN0aW9uc1tzXS50by5faWQ9PT10Ll9pZCl7ZT0hMDticmVha319Zm9yKGxldCBzPTA7czx0LmNvbm5lY3Rpb25zLmxlbmd0aDtzKyspe2lmKHQuY29ubmVjdGlvbnNbc10udG8uX2lkPT09aS5faWQpe2U9ITA7YnJlYWt9fW49W119cmV0dXJufX0se3Bhc3NpdmU6ITB9KSx0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIix0PT57bz0hMSxuPVtdLGQ9bnVsbCxjPSExfSx7cGFzc2l2ZTohMH0pLHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHQ9PntyPXRoaXMuZ2V0VHJhbnNmb3JtZWRQb2ludCh0Lm9mZnNldFgsdC5vZmZzZXRZKTtjb25zdCBpPXQud2hlZWxEZWx0YT4wfHx0LmRlbHRhWTwwPzErdGhpcy5fc2NhbGVMaW1pdHMuc3BlZWQ6MS10aGlzLl9zY2FsZUxpbWl0cy5zcGVlZCxlPXRoaXMuX2N0eC5nZXRUcmFuc2Zvcm0oKS5hKmk7Zz9nLmVtaXQoXCJ3aGVlbFwiLHQpOmU+dGhpcy5fc2NhbGVMaW1pdHMubWluJiZlPHRoaXMuX3NjYWxlTGltaXRzLm1heCYmKHRoaXMuX2N0eC50cmFuc2xhdGUoci54LHIueSksdGhpcy5fY3R4LnNjYWxlKGksaSksdGhpcy5fY3R4LnRyYW5zbGF0ZSgtci54LC1yLnkpKX0se3Bhc3NpdmU6ITB9KTtsZXQgdT1udWxsO3RoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdD0+e2lmKDE9PT10LnRvdWNoZXMubGVuZ3RoKXt0aGlzLl9tb3VzZS54PXQudG91Y2hlc1swXS5jbGllbnRYLHRoaXMuX21vdXNlLnk9dC50b3VjaGVzWzBdLmNsaWVudFk7Zm9yKGxldCB0PXRoaXMuX2VudGl0eU1hbmFnZXIuZW50aXRpZXMubGVuZ3RoLTE7dD49MDt0LS0pe2xldCBpPXRoaXMuX2VudGl0eU1hbmFnZXIuZW50aXRpZXNbdF07aWYoaS5jb250YWlucyh0aGlzLl9tb3VzZSkpcmV0dXJuIGc9aSxkfHwoZD1pKSx2b2lkIHRoaXMuX2VsLmRpc3BhdGNoRXZlbnQoaS5jcmVhdGVFdmVudChcInRvdWNoc3RhcnRlbnRpdHlcIikpfW89ITAsdSYmKHQudGltZVN0YW1wLHUudGltZVN0YW1wLHQudGltZVN0YW1wLXUudGltZVN0YW1wPD0yMDAmJnRoaXMuX2VsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZGJ0b3VjaFwiLHQpKSksdT10fX0se3Bhc3NpdmU6ITB9KTtsZXQgXz1udWxsO3RoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0PT57aWYoMT09PXQudG91Y2hlcy5sZW5ndGgpe2lmKHRoaXMuX21vdXNlLng9dC50b3VjaGVzWzBdLmNsaWVudFgsdGhpcy5fbW91c2UueT10LnRvdWNoZXNbMF0uY2xpZW50WSxyPXRoaXMuZ2V0VHJhbnNmb3JtZWRQb2ludCh0aGlzLl9tb3VzZS54LHRoaXMuX21vdXNlLnkpLG8mJl8pe2xldCB0PXRoaXMuZ2V0VHJhbnNmb3JtZWRQb2ludChfLnRvdWNoZXNbMF0uY2xpZW50WCxfLnRvdWNoZXNbMF0uY2xpZW50WSk7dGhpcy5fY3R4LnRyYW5zbGF0ZShyLngtdC54LHIueS10LnkpfWVsc2UgZCYmKGM9ITAsZC5wb3NpdGlvbj17eDpyLngtZC5kaW1lbnNpb24ud2lkdGgvMix5OnIueS1kLmRpbWVuc2lvbi5oZWlnaHQvMn0pO189dH19LHtwYXNzaXZlOiEwfSksdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdD0+e2QmJihkPW51bGwpLG89ITEsXz1udWxsfSx7cGFzc2l2ZTohMH0pLHRoaXMuX2V2Q2FjaGU9W10sdGhpcy5wcmV2RGlmZj0tMTtjb25zdCBwPXQ9PntmKHQpLHRoaXMuX2V2Q2FjaGUubGVuZ3RoPDImJih0aGlzLnByZXZEaWZmPS0xKX0sZj10PT57Zm9yKHZhciBpPTA7aTx0aGlzLl9ldkNhY2hlLmxlbmd0aDtpKyspaWYodGhpcy5fZXZDYWNoZVtpXS5wb2ludGVySWQ9PXQucG9pbnRlcklkKXt0aGlzLl9ldkNhY2hlLnNwbGljZShpLDEpO2JyZWFrfX07dGhpcy5fZWwub25wb2ludGVyZG93bj10PT57dGhpcy5fZXZDYWNoZS5wdXNoKHQpfSx0aGlzLl9lbC5vbnBvaW50ZXJtb3ZlPXQ9Pntmb3IodmFyIGk9MDtpPHRoaXMuX2V2Q2FjaGUubGVuZ3RoO2krKylpZih0LnBvaW50ZXJJZD09dGhpcy5fZXZDYWNoZVtpXS5wb2ludGVySWQpe3RoaXMuX2V2Q2FjaGVbaV09dDticmVha31pZigyPT10aGlzLl9ldkNhY2hlLmxlbmd0aCl7dmFyIGU9TWF0aC5hYnModGhpcy5fZXZDYWNoZVswXS5jbGllbnRYLXRoaXMuX2V2Q2FjaGVbMV0uY2xpZW50WCk7Y29uc3QgdD0odGhpcy5fZXZDYWNoZVswXS5jbGllbnRYK3RoaXMuX2V2Q2FjaGVbMV0uY2xpZW50WCkvMixpPSh0aGlzLl9ldkNhY2hlWzBdLmNsaWVudFkrdGhpcy5fZXZDYWNoZVsxXS5jbGllbnRZKS8yLHM9dGhpcy5nZXRUcmFuc2Zvcm1lZFBvaW50KHQsaSk7aWYodGhpcy5wcmV2RGlmZj4wKXtjb25zdCB0PWU+dGhpcy5wcmV2RGlmZjwwPzErdGhpcy5fc2NhbGVMaW1pdHMuc3BlZWQ6MS10aGlzLl9zY2FsZUxpbWl0cy5zcGVlZCxpPXRoaXMuX2N0eC5nZXRUcmFuc2Zvcm0oKS5hKnQ7aT50aGlzLl9zY2FsZUxpbWl0cy5taW4mJmk8dGhpcy5fc2NhbGVMaW1pdHMubWF4JiYodGhpcy5fY3R4LnRyYW5zbGF0ZShzLngscy55KSx0aGlzLl9jdHguc2NhbGUodCx0KSx0aGlzLl9jdHgudHJhbnNsYXRlKC1zLngsLXMueSkpfXRoaXMucHJldkRpZmY9ZX19LHRoaXMuX2VsLm9ucG9pbnRlcnVwPXAsdGhpcy5fZWwub25wb2ludGVyY2FuY2VsPXAsdGhpcy5fZWwub25wb2ludGVyb3V0PXAsdGhpcy5fZWwub25wb2ludGVybGVhdmU9cDt3aW5kb3cub25yZXNpemU9dD0+e3RoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24ud2lkdGg9dGhpcy5fZWwucGFyZW50RWxlbWVudC5jbGllbnRXaWR0aCx0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodD10aGlzLl9lbC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCx0aGlzLl9vZmZzY3JlZW5DYW52YXM/KHRoaXMuX29mZnNjcmVlbkNhbnZhcy53aWR0aD10aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoLHRoaXMuX29mZnNjcmVlbkNhbnZhcy5oZWlnaHQ9dGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQpOih0aGlzLl9lbC53aWR0aD10aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoLHRoaXMuX2VsLmhlaWdodD10aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCl9LHRoaXMuc3RhcnQoKX1jbGVhckZyYW1lKCl7dGhpcy5fY3R4LnNhdmUoKSx0aGlzLl9jdHguc2V0VHJhbnNmb3JtKDEsMCwwLDEsMCwwKSx0aGlzLl9jdHguY2xlYXJSZWN0KDAsMCx0aGlzLl9lbC53aWR0aCx0aGlzLl9lbC5oZWlnaHQpLHRoaXMuX2N0eC5yZXN0b3JlKCl9c3RhcnQoKXtzZXRJbnRlcnZhbCgoKT0+e3RoaXMuZHJhdygpfSwxZTMvdGhpcy5fZnBzKX1kcmF3KCl7dGhpcy5jbGVhckZyYW1lKCksdGhpcy5fZW50aXR5TWFuYWdlci5lbnRpdGllcy5mb3JFYWNoKHQ9Pnt0LmRyYXcodGhpcy5fY3R4KX0pfWdldFRyYW5zZm9ybWVkUG9pbnQodCxpKXtjb25zdCBlPXRoaXMuX2N0eC5nZXRUcmFuc2Zvcm0oKSxzPTEvZS5hO3JldHVybnt4OnMqdC1zKmUuZSx5OnMqaS1zKmUuZn19c2F2ZUFzSW1hZ2UodCl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5kb3dubG9hZD10K1wiLnBuZ1wiLGkuaHJlZj10aGlzLl9lbC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIikucmVwbGFjZShcImltYWdlL3BuZ1wiLFwiaW1hZ2Uvb2N0ZXQtc3RyZWFtXCIpLGkuY2xpY2soKX1nZXQgY3R4KCl7cmV0dXJuIHRoaXMuX2N0eH1nZXQgbW91c2UoKXtyZXR1cm4gdGhpcy5fbW91c2V9Z2V0IGVudGl0eU1hbmFnZXIoKXtyZXR1cm4gdGhpcy5fZW50aXR5TWFuYWdlcn19Y29uc3QgZD1mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKHQ9SlNPTi5zdHJpbmdpZnkodCx2b2lkIDAsMikpLCh0PXQucmVwbGFjZSgvJi9nLFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csXCImZ3Q7XCIpKS5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlxcXFxcIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8pL2csKGZ1bmN0aW9uKHQpe3ZhciBpPVwibnVtYmVyXCI7cmV0dXJuL15cIi8udGVzdCh0KT9pPS86JC8udGVzdCh0KT9cImtleVwiOlwic3RyaW5nXCI6L3RydWV8ZmFsc2UvLnRlc3QodCk/aT1cImJvb2xlYW5cIjovbnVsbC8udGVzdCh0KSYmKGk9XCJudWxsXCIpLCc8c3BhbiBjbGFzcz1cIicraSsnXCI+Jyt0K1wiPC9zcGFuPlwifSkpfTtjbGFzcyBje2NvbnN0cnVjdG9yKHt0b3A6dCxyaWdodDppLGJvdHRvbTplLGxlZnQ6c30pe3RoaXMuX3RvcD10LHRoaXMuX3JpZ2h0PWksdGhpcy5fYm90dG9tPWUsdGhpcy5fbGVmdD1zfWdldCB0b3AoKXtyZXR1cm4gdGhpcy5fdG9wfWdldCByaWdodCgpe3JldHVybiB0aGlzLl9yaWdodH1nZXQgYm90dG9tKCl7cmV0dXJuIHRoaXMuX2JvdHRvbX1nZXQgbGVmdCgpe3JldHVybiB0aGlzLl9sZWZ0fXNldCB0b3AodCl7dGhpcy5fdG9wPXR9c2V0IHJpZ2h0KHQpe3RoaXMuX3JpZ2h0PXR9c2V0IGJvdHRvbSh0KXt0aGlzLl9ib3R0b209dH1zZXQgbGVmdCh0KXt0aGlzLl9sZWZ0PXR9fWNsYXNzIGd7Y29uc3RydWN0b3IoKXt0aGlzLmNhbGxiYWNrcz17fX1vbih0LGkpe3RoaXMuY2FsbGJhY2tzW3RdfHwodGhpcy5jYWxsYmFja3NbdF09W10pLHRoaXMuY2FsbGJhY2tzW3RdLnB1c2goaSl9ZW1pdCh0LGkpe2xldCBlPXRoaXMuY2FsbGJhY2tzW3RdO2UmJmUuZm9yRWFjaCh0PT50KGkpKX19Y2xhc3MgdXtzdGF0aWMgZ2V0IE1BWF9XSURUSCgpe3JldHVybiAzNTB9c3RhdGljIGdldCBQQURESU5HKCl7cmV0dXJuIG5ldyBjKHt0b3A6MCxyaWdodDowLGJvdHRvbTowLGxlZnQ6MH0pfWNvbnN0cnVjdG9yKHtuYW1lOnQscGFkZGluZzppLGRpbWVuc2lvbjplLHBvc2l0aW9uOnIscm90YXRpb246byxwYXJlbnQ6bn0sYSl7dGhpcy5fZXZlbnRFbWl0dGVyPW5ldyBnLHRoaXMuX2lkPStuZXcgRGF0ZSsxZTUqTWF0aC5yYW5kb20oKSx0aGlzLl9uYW1lPXQsdGhpcy5fc2VsZWN0ZWQ9ITEsdGhpcy5faG92ZXI9ITEsdGhpcy5fdHJhbnNmb3JtPW5ldyBoKHtwb3NpdGlvbjpyfHxudWxsLGRpbWVuc2lvbjplfHxudWxsLHJvdGF0aW9uOm98fG51bGx9KSx0aGlzLl9vbGRQb3NpdGlvbj1yP25ldyBzKHIpOm51bGwsdGhpcy5fcGFkZGluZz1pP25ldyBjKGkpOnUuUEFERElORyx0aGlzLl9wYXJlbnQ9bix0aGlzLl9jaGlsZHJlbj1bXSx0aGlzLl9jYW52YXM9YXx8dm9pZCAwfWNyZWF0ZUV2ZW50KHQpe3JldHVybiBuZXcgQ3VzdG9tRXZlbnQodCx7ZGV0YWlsOnRoaXN9KX1jb250YWlucyh0KXtyZXR1cm4hIXRoaXMuX3NoYXBlJiZ0aGlzLl9jYW52YXMuY3R4LmlzUG9pbnRJblBhdGgodGhpcy5fc2hhcGUucGF0aCx0LngsdC55LFwibm9uemVyb1wiKX10b1N0cmluZygpe3JldHVybntpZDp0aGlzLl9pZCxuYW1lOnRoaXMuX25hbWV9fXByZXR0aWVyKCl7cmV0dXJuIGQodGhpcy50b1N0cmluZygpKX1vbih0LGkpe3RoaXMuX2V2ZW50RW1pdHRlci5vbih0LGkpfWVtaXQodCxpKXt0aGlzLl9ldmVudEVtaXR0ZXIuZW1pdCh0LGkpfXNldCBzdGF0ZSh0KXt0aGlzLnN0YXRlcy5pbmNsdWRlcyh0KSYmdGhpcy5lbWl0KHQse2RldGFpbDp0aGlzfSl9Z2V0IHNoYXBlKCl7cmV0dXJuIHRoaXMuX3NoYXBlfWdldCBwYWRkaW5nKCl7cmV0dXJuIHRoaXMuX3BhZGRpbmd9Z2V0IGRpbWVuc2lvbigpe3JldHVybiB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9ufWdldCBwb3NpdGlvbigpe3JldHVybiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb259Z2V0IGNoaWxkcmVuKCl7cmV0dXJuIHRoaXMuX2NoaWxkcmVufWdldCBwYXJlbnQoKXtyZXR1cm4gdGhpcy5fcGFyZW50fXNldCBwb3NpdGlvbih0KXt0aGlzLl9vbGRQb3NpdGlvbj1uZXcgcyh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24pLHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54PXQueCx0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueT10Lnl9Z2V0IG9sZFBvc2l0aW9uKCl7cmV0dXJuIHRoaXMuX29sZFBvc2l0aW9ufX1jb25zdCBfPXQ9PnQucmVwbGFjZSgvXFxzL2csXCJcIik7Y2xhc3MgcHtzdGF0aWMgZ2V0IGh0bWxDb2xvcnMoKXtyZXR1cm57SU5ESUFOUkVEOlwicmdiKDIwNSwgOTIsIDkyKVwiLExJR0hUQ09SQUw6XCJyZ2IoMjQwLCAxMjgsIDEyOClcIixTQUxNT046XCJyZ2IoMjUwLCAxMjgsIDExNClcIixEQVJLU0FMTU9OOlwicmdiKDIzMywgMTUwLCAxMjIpXCIsTElHSFRTQUxNT046XCJyZ2IoMjU1LCAxNjAsIDEyMilcIixDUklNU09OOlwicmdiKDIyMCwgMjAsIDYwKVwiLFJFRDpcInJnYigyNTUsIDAsIDApXCIsRklSRUJSSUNLOlwicmdiKDE3OCwgMzQsIDM0KVwiLERBUktSRUQ6XCJyZ2IoMTM5LCAwLCAwKVwiLFBJTks6XCJyZ2IoMjU1LCAxOTIsIDIwMylcIixMSUdIVFBJTks6XCJyZ2IoMjU1LCAxODIsIDE5MylcIixIT1RQSU5LOlwicmdiKDI1NSwgMTA1LCAxODApXCIsREVFUFBJTks6XCJyZ2IoMjU1LCAyMCwgMTQ3KVwiLE1FRElVTVZJT0xFVFJFRDpcInJnYigxOTksIDIxLCAxMzMpXCIsUEFMRVZJT0xFVFJFRDpcInJnYigyMTksIDExMiwgMTQ3KVwiLExJR0hUU0FMTU9OOlwicmdiKDI1NSwgMTYwLCAxMjIpXCIsQ09SQUw6XCJyZ2IoMjU1LCAxMjcsIDgwKVwiLFRPTUFUTzpcInJnYigyNTUsIDk5LCA3MSlcIixPUkFOR0VSRUQ6XCJyZ2IoMjU1LCA2OSwgMClcIixEQVJLT1JBTkdFOlwicmdiKDI1NSwgMTQwLCAwKVwiLE9SQU5HRTpcInJnYigyNTUsIDE2NSwgMClcIixHT0xEOlwicmdiKDI1NSwgMjE1LCAwKVwiLFlFTExPVzpcInJnYigyNTUsIDI1NSwgMClcIixMSUdIVFlFTExPVzpcInJnYigyNTUsIDI1NSwgMjI0KVwiLExFTU9OQ0hJRkZPTjpcInJnYigyNTUsIDI1MCwgMjA1KVwiLExJR0hUR09MREVOUk9EWUVMTE9XOlwicmdiKDI1MCwgMjUwLCAyMTApXCIsUEFQQVlBV0hJUDpcInJnYigyNTUsIDIzOSwgMjEzKVwiLE1PQ0NBU0lOOlwicmdiKDI1NSwgMjI4LCAxODEpXCIsUEVBQ0hQVUZGOlwicmdiKDI1NSwgMjE4LCAxODUpXCIsUEFMRUdPTERFTlJPRDpcInJnYigyMzgsIDIzMiwgMTcwKVwiLEtIQUtJOlwicmdiKDI0MCwgMjMwLCAxNDApXCIsREFSS0tIQUtJOlwicmdiKDE4OSwgMTgzLCAxMDcpXCIsTEFWRU5ERVI6XCJyZ2IoMjMwLCAyMzAsIDI1MClcIixUSElTVExFOlwicmdiKDIxNiwgMTkxLCAyMTYpXCIsUExVTTpcInJnYigyMjEsIDE2MCwgMjIxKVwiLFZJT0xFVDpcInJnYigyMzgsIDEzMCwgMjM4KVwiLE9SQ0hJRDpcInJnYigyMTgsIDExMiwgMjE0KVwiLEZVQ0hTSUE6XCJyZ2IoMjU1LCAwLCAyNTUpXCIsTUFHRU5UQTpcInJnYigyNTUsIDAsIDI1NSlcIixNRURJVU1PUkNISUQ6XCJyZ2IoMTg2LCA4NSwgMjExKVwiLE1FRElVTVBVUlBMRTpcInJnYigxNDcsIDExMiwgMjE5KVwiLFJFQkVDQ0FQVVJQTEU6XCJyZ2IoMTAyLCA1MSwgMTUzKVwiLEJMVUVWSU9MRVQ6XCJyZ2IoMTM4LCA0MywgMjI2KVwiLERBUktWSU9MRVQ6XCJyZ2IoMTQ4LCAwLCAyMTEpXCIsREFSS09SQ0hJRDpcInJnYigxNTMsIDUwLCAyMDQpXCIsREFSS01BR0VOVEE6XCJyZ2IoMTM5LCAwLCAxMzkpXCIsUFVSUExFOlwicmdiKDEyOCwgMCwgMTI4KVwiLElORElHTzpcInJnYig3NSwgMCwgMTMwKVwiLFNMQVRFQkxVRTpcInJnYigxMDYsIDkwLCAyMDUpXCIsREFSS1NMQVRFQkxVRTpcInJnYig3MiwgNjEsIDEzOSlcIixNRURJVU1TTEFURUJMVUU6XCJyZ2IoMTIzLCAxMDQsIDIzOClcIixHUkVFTllFTExPVzpcInJnYigxNzMsIDI1NSwgNDcpXCIsQ0hBUlRSRVVTRTpcInJnYigxMjcsIDI1NSwgMClcIixMQVdOR1JFRU46XCJyZ2IoMTI0LCAyNTIsIDApXCIsTElNRTpcInJnYigwLCAyNTUsIDApXCIsTElNRUdSRUVOOlwicmdiKDUwLCAyMDUsIDUwKVwiLFBBTEVHUkVFTjpcInJnYigxNTIsIDI1MSwgMTUyKVwiLExJR0hUR1JFRU46XCJyZ2IoMTQ0LCAyMzgsIDE0NClcIixNRURJVU1TUFJJTkdHUkVFTjpcInJnYigwLCAyNTAsIDE1NClcIixTUFJJTkdHUkVFTjpcInJnYigwLCAyNTUsIDEyNylcIixNRURJVU1TRUFHUkVFTjpcInJnYig2MCwgMTc5LCAxMTMpXCIsU0VBR1JFRU46XCJyZ2IoNDYsIDEzOSwgODcpXCIsRk9SRVNUR1JFRU46XCJyZ2IoMzQsIDEzOSwgMzQpXCIsR1JFRU46XCJyZ2IoMCwgMTI4LCAwKVwiLERBUktHUkVFTjpcInJnYigwLCAxMDAsIDApXCIsWUVMTE9XR1JFRU46XCJyZ2IoMTU0LCAyMDUsIDUwKVwiLE9MSVZFRFJBQjpcInJnYigxMDcsIDE0MiwgMzUpXCIsT0xJVkU6XCJyZ2IoMTI4LCAxMjgsIDApXCIsREFSS09MSVZFR1JFRU46XCJyZ2IoODUsIDEwNywgNDcpXCIsTUVESVVNQVFVQU1BUklORTpcInJnYigxMDIsIDIwNSwgMTcwKVwiLERBUktTRUFHUkVFTjpcInJnYigxNDMsIDE4OCwgMTM5KVwiLExJR0hUU0VBR1JFRU46XCJyZ2IoMzIsIDE3OCwgMTcwKVwiLERBUktDWUFOOlwicmdiKDAsIDEzOSwgMTM5KVwiLFRFQUw6XCJyZ2IoMCwgMTI4LCAxMjgpXCIsQVFVQTpcInJnYigwLCAyNTUsIDI1NSlcIixDWUFOOlwicmdiKDAsIDI1NSwgMjU1KVwiLExJR0hUQ1lBTjpcInJnYigyMjQsIDI1NSwgMjU1KVwiLFBBTEVUVVJRVU9JU0U6XCJyZ2IoMTc1LCAyMzgsIDIzOClcIixBUVVBTUFSSU5FOlwicmdiKDEyNywgMjU1LCAyMTIpXCIsVFVSUVVPSVNFOlwicmdiKDY0LCAyMjQsIDIwOClcIixNRURJVU1UVVJRVU9JU0U6XCJyZ2IoNzIsIDIwOSwgMjA0KVwiLERBUktUVVJRVU9JU0U6XCJyZ2IoMCwgMjA2LCAyMDkpXCIsQ0FERVRCTFVFOlwicmdiKDk1LCAxNTgsIDE2MClcIixTVEVFTEJMVUU6XCJyZ2IoNzAsIDEzMCwgMTgwKVwiLExJR0hUU1RFRUxCTFVFOlwicmdiKDE3NiwgMTk2LCAyMjIpXCIsUE9XREVSQkxVRTpcInJnYigxNzYsIDIyNCwgMjMwKVwiLExJR0hUQkxVRTpcInJnYigxNzMsIDIxNiwgMjMwKVwiLFNLWUJMVUU6XCJyZ2IoMTM1LCAyMDYsIDIzNSlcIixMSUdIVFNLWUJMVUU6XCJyZ2IoMTM1LCAyMDYsIDI1MClcIixERUVQU0tZQkxVRTpcInJnYigwLCAxOTEsIDI1NSlcIixET0RHRVJCTFVFOlwicmdiKDMwLCAxNDQsIDI1NSlcIixDT1JORkxPV0VSQkxVRTpcInJnYigxMDAsIDE0OSwgMjM3KVwiLE1FRElVTVNMQVRFQkxVRTpcInJnYigxMjMsIDEwNCwgMjM4KVwiLFJPWUFMQkxVRTpcInJnYig2NSwgMTA1LCAyMjUpXCIsQkxVRTpcInJnYigwLCAwLCAyNTUpXCIsTUVESVVNQkxVRTpcInJnYigwLCAwLCAyMDUpXCIsREFSS0JMVUU6XCJyZ2IoMCwgMCwgMTM5KVwiLE5BVlk6XCJyZ2IoMCwgMCwgMTI4KVwiLE1JRE5JR0hUQkxVRTpcInJnYigyNSwgMjUsIDExMilcIixDT1JOU0lMSzpcInJnYigyNTUsIDI0OCwgMjIwKVwiLEJMQU5DSEVEQUxNT05EOlwicmdiKDI1NSwgMjM1LCAyMDUpXCIsQklTUVVFOlwicmdiKDI1NSwgMjI4LCAxOTYpXCIsTkFWQUpPV0hJVEU6XCJyZ2IoMjU1LCAyMjIsIDE3MylcIixXSEVBVDpcInJnYigyNDUsIDIyMiwgMTc5KVwiLEJVUkxZV09PRDpcInJnYigyMjIsIDE4NCwgMTM1KVwiLFRBTjpcInJnYigyMTAsIDE4MCwgMTQwKVwiLFJPU1lCUk9XTjpcInJnYigxODgsIDE0MywgMTQzKVwiLFNBTkRZQlJPV046XCJyZ2IoMjQ0LCAxNjQsIDk2KVwiLEdPTERFTlJPRDpcInJnYigyMTgsIDE2NSwgMzIpXCIsREFSS0dPTERFTlJPRDpcInJnYigxODQsIDEzNCwgMTEpXCIsUEVSVTpcInJnYigyMDUsIDEzMywgNjMpXCIsQ0hPQ09MQVRFOlwicmdiKDIxMCwgMTA1LCAzMClcIixTQURETEVCUk9XTjpcInJnYigxMzksIDY5LCAxOSlcIixTSUVOTkE6XCJyZ2IoMTYwLCA4MiwgNDUpXCIsQlJPV046XCJyZ2IoMTY1LCA0MiwgNDIpXCIsTUFST09OOlwicmdiKDEyOCwgMCwgMClcIixXSElURTpcInJnYigyNTUsIDI1NSwgMjU1KVwiLFNOT1c6XCJyZ2IoMjU1LCAyNTAsIDI1MClcIixIT05FWURFVzpcInJnYigyNDAsIDI1NSwgMjQwKVwiLE1JTlRDUkVBTTpcInJnYigyNDUsIDI1NSwgMjUwKVwiLEFaVVJFOlwicmdiKDI0MCwgMjU1LCAyNTUpXCIsQUxJQ0VCTFVFOlwicmdiKDI0MCwgMjQ4LCAyNTUpXCIsR0hPU1RXSElURTpcInJnYigyNDgsIDI0OCwgMjU1KVwiLFdISVRFU01PS0U6XCJyZ2IoMjQ1LCAyNDUsIDI0NSlcIixTRUFTSEVMTDpcInJnYigyNTUsIDI0NSwgMjM4KVwiLEJFSUdFOlwicmdiKDI0NSwgMjQ1LCAyMjApXCIsT0xETEFDRTpcInJnYigyNTMsIDI0NSwgMjMwKVwiLEZMT1JBTFdISVRFOlwicmdiKDI1NSwgMjUwLCAyNDApXCIsSVZPUlk6XCJyZ2IoMjU1LCAyNTUsIDI0MClcIixBTlRJUVVFV0hJVEU6XCJyZ2IoMjUwLCAyMzUsIDIxNSlcIixMSU5FTjpcInJnYigyNTAsIDI0MCwgMjMwKVwiLExBVkVOREVSQkxVU0g6XCJyZ2IoMjU1LCAyNDAsIDI0NSlcIixNSVNUWVJPU0U6XCJyZ2IoMjU1LCAyMjgsIDIyNSlcIixHQUlOU0JPUk86XCJyZ2IoMjIwLCAyMjAsIDIyMClcIixMSUdIVEdSQVk6XCJyZ2IoMjExLCAyMTEsIDIxMSlcIixTSUxWRVI6XCJyZ2IoMTkyLCAxOTIsIDE5MilcIixEQVJLR1JBWTpcInJnYigxNjksIDE2OSwgMTY5KVwiLEdSQVk6XCJyZ2IoMTI4LCAxMjgsIDEyOClcIixESU1HUkFZOlwicmdiKDEwNSwgMTA1LCAxMDUpXCIsTElHSFRTTEFURUdSQVk6XCJyZ2IoMTE5LCAxMzYsIDE1MylcIixTTEFURUdSQVk6XCJyZ2IoMTEyLCAxMjgsIDE0NClcIixEQVJLU0xBVEVHUkFZOlwicmdiKDQ3LCA3OSwgNzkpXCIsQkxBQ0s6XCJyZ2IoMCwgMCwgMClcIn19c3RhdGljIGlzUkdCKHQpe3JldHVybiBudWxsIT09dC5tYXRjaCgvXnJnYlxcKFswLTldezEsM30sWzAtOV17MSwzfSxbMC05XXsxLDN9XFwpJC9naSl9c3RhdGljIGlzUkdCQSh0KXtyZXR1cm4gbnVsbCE9PXQubWF0Y2goL15yZ2JhXFwoKFxcZCspLChcXGQrKSwoXFxkKyksKFxcZCtcXC5cXGQrKVxcKSQvZ2kpfXN0YXRpYyBpc0hFWCh0KXtyZXR1cm4gbnVsbCE9PXQubWF0Y2goL14jKFtBLUZhLWYwLTldezZ9fFtBLUZhLWYwLTldezN9KSQvZ2kpfXN0YXRpYyBzdHJpbmcyQ29sb3IodCl7Y29uc3QgaT1wLmh0bWxDb2xvcnNbdC50b1VwcGVyQ2FzZSgpXTtpZihpJiYodD1pKSx0PV8odCkscC5pc1JHQih0KXx8cC5pc1JHQkEodCkpe2xldCBpPXQucmVwbGFjZShcInJnYihcIixcIlwiKS5yZXBsYWNlKFwicmdiYShcIixcIlwiKS5yZXBsYWNlKFwiKVwiLFwiXCIpLnNwbGl0KFwiLFwiKTtyZXR1cm57cmVkOmlbMF0sZ3JlZW46aVsxXSxibHVlOmlbMl0sYWxwaGE6aVszXXx8MX19aWYocC5pc0hFWCh0KSl7Y29uc3QgaT0odD10LnJlcGxhY2UoXCIjXCIsXCJcIikpLmxlbmd0aC8zO3JldHVybntyZWQ6cGFyc2VJbnQodC5zdWJzdHJpbmcoMCxpKSwxNiksZ3JlZW46cGFyc2VJbnQodC5zdWJzdHJpbmcoaSwyKmkpLDE2KSxibHVlOnBhcnNlSW50KHQuc3Vic3RyaW5nKDIqaSwzKmkpLDE2KSxhbHBoYToxfX1yZXR1cm57cmVkOjAsZ3JlZW46MCxibHVlOjAsYWxwaGE6MH19c3RhdGljIHJnYlRvSGV4KHQpe2NvbnN0IGk9KHQ9dC5yZXBsYWNlKC9cXHMvZyxcIlwiKSkucmVwbGFjZShcInJnYihcIixcIlwiKS5yZXBsYWNlKFwicmdiYShcIixcIlwiKS5yZXBsYWNlKFwiKVwiLFwiXCIpLnNwbGl0KFwiLFwiKTtsZXQgZT1cIiNcIjtyZXR1cm4gaS5mb3JFYWNoKCh0LGkpPT57aWYoMyE9aSl7Y29uc3QgaT1OdW1iZXIodCkudG9TdHJpbmcoMTYpO2UrPTI9PT1pLmxlbmd0aD9pOlwiMFwiK2l9fSksZX1jb25zdHJ1Y3Rvcih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9cC5zdHJpbmcyQ29sb3IodCkpLHRoaXMuX3JlZD10LnJlZCx0aGlzLl9ncmVlbj10LmdyZWVuLHRoaXMuX2JsdWU9dC5ibHVlLHRoaXMuX2FscGhhPXQuYWxwaGF8fDF9Z2V0IHJnYigpe3JldHVybmByZ2IoJHt0aGlzLl9yZWR9LCR7dGhpcy5fZ3JlZW59LCR7dGhpcy5fYmx1ZX0pYH1nZXQgcmdiYSgpe3JldHVybmByZ2JhKCR7dGhpcy5fcmVkfSwke3RoaXMuX2dyZWVufSwke3RoaXMuX2JsdWV9LCR7dGhpcy5fYWxwaGF9KWB9Z2V0IGhleCgpe3JldHVybiBwLnJnYlRvSGV4KHRoaXMucmdiKX19Y2xhc3MgZntjb25zdHJ1Y3Rvcih7cmFkaXVzOnQsY29sb3I6aSxsaW5lV2lkdGg6ZSxzZWxlY3RlZDpzLGhvdmVyOnJ9KXt0aGlzLl9yYWRpdXM9dHx8MCx0aGlzLl9saW5lV2lkdGg9ZXx8MCx0aGlzLl9jb2xvcj1pP25ldyBwKGkpOm51bGwsdGhpcy5fc2VsZWN0ZWQ9cz9uZXcgZih7bGluZVdpZHRoOnMubGluZVdpZHRoLGNvbG9yOnMuY29sb3J9KTpudWxsLHRoaXMuX2hvdmVyPXI/bmV3IGYoe2xpbmVXaWR0aDpyLmxpbmVXaWR0aCxjb2xvcjpyLmNvbG9yfSk6bnVsbH1nZXQgcmFkaXVzKCl7cmV0dXJuIHRoaXMuX3JhZGl1c31zZXQgcmFkaXVzKHQpe3RoaXMuX3JhZGl1cz10fWdldCBjb2xvcigpe3JldHVybiB0aGlzLl9jb2xvcn1zZXQgY29sb3IodCl7dGhpcy5fY29sb3I9bmV3IHAodCl9Z2V0IHNlbGVjdGVkKCl7cmV0dXJuIHRoaXMuX3NlbGVjdGVkfWdldCBob3Zlcigpe3JldHVybiB0aGlzLl9ob3Zlcn1nZXQgbGluZVdpZHRoKCl7cmV0dXJuIHRoaXMuX2xpbmVXaWR0aH1zZXQgbGluZVdpZHRoKHQpe3RoaXMuX2xpbmVXaWR0aD10fX1jbGFzcyBie2NvbnN0cnVjdG9yKHtvZmZzZXRYOnQsb2Zmc2V0WTppLGNvbG9yOmUsYmx1cjpzfSl7dGhpcy5fb2Zmc2V0WD10LHRoaXMuX29mZnNldFk9aSx0aGlzLl9jb2xvcj1uZXcgcChlKSx0aGlzLl9ibHVyPXN9Z2V0IG9mZnNldFgoKXtyZXR1cm4gdGhpcy5fb2Zmc2V0WH1nZXQgb2Zmc2V0WSgpe3JldHVybiB0aGlzLl9vZmZzZXRZfWdldCBjb2xvcigpe3JldHVybiB0aGlzLl9jb2xvcn1zZXQgY29sb3IodCl7dGhpcy5fY29sb3I9bmV3IHAodCl9Z2V0IGJsdXIoKXtyZXR1cm4gdGhpcy5fYmx1cn19Y2xhc3MgbXtjb25zdHJ1Y3Rvcih7c3JjOnQscG9zaXRpb246aSxkaW1lbnNpb246ZSxyb3RhdGlvbjpzLHNjYWxlOnJ9KXt0aGlzLl90cmFuc2Zvcm09bmV3IGgoe3Bvc2l0aW9uOmksZGltZW5zaW9uOmUscm90YXRpb246cyxzY2FsZTpyfSksdGhpcy5faW1hZ2U9ZT9uZXcgSW1hZ2UodGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCx0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCk6bmV3IEltYWdlLHRoaXMuX3NyYz10LHRoaXMuX2ltYWdlLnNyYz10aGlzLl9zcmMsdGhpcy5faW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e3RoaXMuX2xvYWRlZD0hMH0pLHRoaXMuX2xvYWRlZD0hMX1zZXQgc3JjKHQpe3RoaXMuX3NyYz10LHRoaXMuX2xvYWRlZD0hMX1nZXQgdHJhbnNmb3JtKCl7cmV0dXJuIHRoaXMuX3RyYW5zZm9ybX1kcmF3KHQpe3RoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24/dC5kcmF3SW1hZ2UodGhpcy5faW1hZ2UsdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngsdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnksdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCx0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCk6dC5kcmF3SW1hZ2UodGhpcy5faW1hZ2UsdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngsdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkpfX1jbGFzcyBFe2NvbnN0cnVjdG9yKHtjb2xvcjp0LGltYWdlOml9KXt0aGlzLl9jb2xvcj10P25ldyBwKHQpOm51bGwsdGhpcy5faW1hZ2U9aT9uZXcgbSh7aW1hZ2U6aX0pOm51bGx9Z2V0IGNvbG9yKCl7cmV0dXJuIHRoaXMuX2NvbG9yfXNldCBjb2xvcih0KXt0aGlzLl9jb2xvcj1uZXcgcCh0KX1nZXQgaW1hZ2UoKXtyZXR1cm4gdGhpcy5faW1hZ2V9c2V0IEltYWdlKHQpe3RoaXMuX2ltYWdlPW5ldyBtKHQpfX1jbGFzcyB5e3N0YXRpYyBnZXQgUk9UQVRJT04oKXtyZXR1cm4gbmV3IFJvdGF0aW9uKHthbmdsZTowfSl9c3RhdGljIGdldCBCQUNLR1JPVU5EKCl7cmV0dXJuIG5ldyBFKHtjb2xvcjpcInJnYigyNTUsMjU1LDI1NSlcIn0pfXN0YXRpYyBnZXQgU0hBRE9XKCl7cmV0dXJuIG5ldyBiKHtvZmZzZXRYOjAsb2Zmc2V0WTowLGNvbG9yOlwicmdiKDAsMCwwKVwiLGJsdXI6MH0pfXN0YXRpYyBnZXQgQk9SREVSKCl7cmV0dXJuIG5ldyBmKHtyYWRpdXM6MCxsaW5lV2lkdGg6MX0pfWNvbnN0cnVjdG9yKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsc2NhbGU6cyxiYWNrZ3JvdW5kOnIsYm9yZGVyOm8sc2hhZG93Om59KXt0aGlzLl90cmFuc2Zvcm09bmV3IGgoe3Bvc2l0aW9uOnQsZGltZW5zaW9uOmkscm90YXRpb246ZSxzY2FsZTpzfSksdGhpcy5fYm9yZGVyPW8/bmV3IGYobyk6eS5CT1JERVIsdGhpcy5fYmFja2dyb3VuZD1yP25ldyBFKHIpOnkuQkFDS0dST1VORCx0aGlzLl9zaGFkb3c9bj9uZXcgYihuKTpudWxsLHRoaXMuX3BhdGg9bnVsbH1kcmF3KHQpe3RoaXMuX3NoYWRvdyYmKHQuc2hhZG93Q29sb3I9dGhpcy5fc2hhZG93LmNvbG9yLnJnYmEsdC5zaGFkb3dCbHVyPXRoaXMuX3NoYWRvdy5ibHVyLHQuc2hhZG93T2Zmc2V0WD10aGlzLl9zaGFkb3cub2Zmc2V0WCx0LnNoYWRvd09mZnNldFk9dGhpcy5fc2hhZG93Lm9mZnNldFkpLHRoaXMuX2JvcmRlciYmdGhpcy5fYm9yZGVyLmNvbG9yJiYodC5zdHJva2VTdHlsZT10aGlzLl9ib3JkZXIuY29sb3IucmdiYSksdGhpcy5fYm9yZGVyJiZ0aGlzLl9ib3JkZXIubGluZVdpZHRoJiYodC5saW5lV2lkdGg9dGhpcy5fYm9yZGVyLmxpbmVXaWR0aCksdGhpcy5fYmFja2dyb3VuZCYmdGhpcy5fYmFja2dyb3VuZC5jb2xvciYmKHQuZmlsbFN0eWxlPXRoaXMuX2JhY2tncm91bmQuY29sb3IucmdiYSl9Z2V0IHNpZGVzKCl7Y29uc3QgdD10aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoLzIsaT10aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodC8yO3JldHVybnt0b3A6e3g6dGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngrdCx5OnRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55fSxyaWdodDp7eDp0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCt0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoLHk6dGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkraX0sYm90dG9tOnt4OnRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54K3QseTp0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSt0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodH0sbGVmdDp7eDp0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCx5OnRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55K2l9fX1nZXQgcGF0aCgpe3JldHVybiB0aGlzLl9wYXRofXNldCBwYXRoKHQpe3RoaXMuX3BhdGg9dH1nZXQgYm9yZGVyKCl7cmV0dXJuIHRoaXMuX2JvcmRlcn1nZXQgYmFja2dyb3VuZCgpe3JldHVybiB0aGlzLl9iYWNrZ3JvdW5kfWdldCByb3RhdGlvbigpe3JldHVybiB0aGlzLl90cmFuc2Zvcm0ucm90YXRpb259Z2V0IHJvdGF0ZSgpe3JldHVybiB0aGlzLl90cmFuc2Zvcm0ucm90YXRpb24mJnRoaXMuX3RyYW5zZm9ybS5yb3RhdGlvbi5hbmdsZT4wfWdldCBzaGFkb3coKXtyZXR1cm4gdGhpcy5fc2hhZG93fXNldCByb3RhdGlvbih0KXt0aGlzLl90cmFuc2Zvcm0ucm90YXRpb24uYW5nbGU9dH1nZXQgcG9zaXRpb24oKXtyZXR1cm4gdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9ufXNldCBwb3NpdGlvbih0KXt0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueD10LngsdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnk9dC55fWdldCBkaW1lbnNpb24oKXtyZXR1cm4gdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbn19Y2xhc3MgdiBleHRlbmRzIHl7Y29uc3RydWN0b3Ioe3Bvc2l0aW9uOnQscm90YXRpb246aSxib3JkZXI6ZSxiYWNrZ3JvdW5kOnMsZGlhbWV0ZXI6cixzaGFkb3c6b30pe3N1cGVyKHtwb3NpdGlvbjp0LHJvdGF0aW9uOmksYm9yZGVyOmUsYmFja2dyb3VuZDpzLHNoYWRvdzpvfSksdGhpcy5fZGlhbWV0ZXI9cn1kcmF3KHQpe3Quc2F2ZSgpLHN1cGVyLmRyYXcodCksdGhpcy5yb3RhdGUmJih0LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLngsdGhpcy5wb3NpdGlvbi55KSx0LnJvdGF0ZSh0aGlzLnJvdGF0aW9uLmFuZ2xlKSx0LnRyYW5zbGF0ZSgtdGhpcy5wb3NpdGlvbi54LC10aGlzLnBvc2l0aW9uLnkpKSx0LmJlZ2luUGF0aCgpLHRoaXMuX3BhdGg9bmV3IFBhdGgyRCx0aGlzLl9wYXRoLmFyYyh0aGlzLnBvc2l0aW9uLngsdGhpcy5wb3NpdGlvbi55LHRoaXMuX2RpYW1ldGVyLDAsMipNYXRoLlBJKSx0aGlzLl9wYXRoLmNsb3NlUGF0aCgpLHQuc3Ryb2tlKHRoaXMuX3BhdGgpLHQuZmlsbCh0aGlzLl9wYXRoKSx0LnNoYWRvd0NvbG9yPTAsdC5zaGFkb3dPZmZzZXRYPTAsdC5zaGFkb3dPZmZzZXRZPTAsdC5zdHJva2UodGhpcy5fcGF0aCksdC5yZXN0b3JlKCl9fWNsYXNzIHcgZXh0ZW5kcyB5e2NvbnN0cnVjdG9yKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsYm9yZGVyOnMsYmFja2dyb3VuZDpyLHNoYWRvdzpvfSl7c3VwZXIoe3Bvc2l0aW9uOnQsZGltZW5zaW9uOmkscm90YXRpb246ZSxib3JkZXI6cyxiYWNrZ3JvdW5kOnIsc2hhZG93Om99KX1kcmF3KHQpe2lmKHQuc2F2ZSgpLHN1cGVyLmRyYXcodCksdGhpcy5yb3RhdGUpe2NvbnN0IGk9dGhpcy5wb3NpdGlvbi54K3RoaXMuZGltZW5zaW9uLndpZHRoLzIsZT10aGlzLnBvc2l0aW9uLnkrdGhpcy5kaW1lbnNpb24uaGVpZ2h0LzI7dC50cmFuc2xhdGUoaSxlKSx0LnJvdGF0ZSh0aGlzLnJvdGF0aW9uLmFuZ2xlKSx0LnRyYW5zbGF0ZSgtaSwtZSl9dGhpcy5fcGF0aD1uZXcgUGF0aDJELHQuYmVnaW5QYXRoKCksdGhpcy5fcGF0aC5tb3ZlVG8odGhpcy5zaWRlcy50b3AueC10aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5zaWRlcy50b3AueSt0aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyh0aGlzLnNpZGVzLnRvcC54LHRoaXMuc2lkZXMudG9wLnkrLjUqdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMudG9wLngrdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMudG9wLnkrdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLmxpbmVUbyh0aGlzLnNpZGVzLnJpZ2h0LngtdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMucmlnaHQueS10aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyh0aGlzLnNpZGVzLnJpZ2h0LngsdGhpcy5zaWRlcy5yaWdodC55LHRoaXMuc2lkZXMucmlnaHQueC10aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5zaWRlcy5yaWdodC55K3RoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5zaWRlcy5ib3R0b20ueCt0aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5zaWRlcy5ib3R0b20ueS10aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyh0aGlzLnNpZGVzLmJvdHRvbS54LHRoaXMuc2lkZXMuYm90dG9tLnktLjUqdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMuYm90dG9tLngtdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMuYm90dG9tLnktdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLmxpbmVUbyh0aGlzLnNpZGVzLmxlZnQueCt0aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5zaWRlcy5sZWZ0LnkrdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8odGhpcy5zaWRlcy5sZWZ0LngsdGhpcy5zaWRlcy5sZWZ0LnksdGhpcy5zaWRlcy5sZWZ0LngrdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMubGVmdC55LXRoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5zaWRlcy50b3AueC10aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5zaWRlcy50b3AueSt0aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGguY2xvc2VQYXRoKCksdC5zdHJva2UodGhpcy5fcGF0aCksdC5maWxsKHRoaXMuX3BhdGgpLHQuc2hhZG93Q29sb3I9MCx0LnNoYWRvd09mZnNldFg9MCx0LnNoYWRvd09mZnNldFk9MCx0LnN0cm9rZSh0aGlzLl9wYXRoKSx0LnJlc3RvcmUoKX19Y2xhc3MgeCBleHRlbmRzIHl7Y29uc3RydWN0b3Ioe3BvaW50czp0LHBvc2l0aW9uOmksZGltZW5zaW9uOmUscm90YXRpb246cyxib3JkZXI6cixiYWNrZ3JvdW5kOm8sc2hhZG93Om59KXtzdXBlcih7cG9zaXRpb246aSxkaW1lbnNpb246ZSxyb3RhdGlvbjpzLGJvcmRlcjpyLGJhY2tncm91bmQ6byxzaGFkb3c6bn0pLHRoaXMuX3BvaW50cz10fWRyYXcodCl7aWYodC5zYXZlKCksc3VwZXIuZHJhdyh0KSx0aGlzLnJvdGF0ZSl7Y29uc3QgaT10aGlzLl9wb3NpdGlvbi54K3RoaXMuX2RpbWVuc2lvbi53aWR0aC8yLGU9dGhpcy5fcG9zaXRpb24ueSt0aGlzLl9kaW1lbnNpb24uaGVpZ2h0LzI7dC50cmFuc2xhdGUoaSxlKSx0LnJvdGF0ZSh0aGlzLnJvdGF0aW9uLmFuZ2xlKSx0LnRyYW5zbGF0ZSgtaSwtZSl9dGhpcy5fcGF0aD1uZXcgUGF0aDJELHQuYmVnaW5QYXRoKCksdGhpcy5fcGF0aC5tb3ZlVG8ocG9pbnRzWzBdLngscG9pbnRzWzBdLnkpLHBvaW50cy5mb3JFYWNoKHQ9Pnt0aGlzLl9wYXRoLmxpbmVUbyh0LngsdC55KX0pLHRoaXMuX3BhdGguY2xvc2VQYXRoKCksdC5zdHJva2UodGhpcy5fcGF0aCksdC5maWxsKHRoaXMuX3BhdGgpLHQuc2hhZG93Q29sb3I9MCx0LnNoYWRvd09mZnNldFg9MCx0LnNoYWRvd09mZnNldFk9MCx0LnN0cm9rZSh0aGlzLl9wYXRoKSx0LnJlc3RvcmUoKX19Y2xhc3MgTCBleHRlbmRzIHl7Y29uc3RydWN0b3Ioe3Bvc2l0aW9uOnQsZGltZW5zaW9uOmkscm90YXRpb246ZSxib3JkZXI6cyxiYWNrZ3JvdW5kOnIsc2hhZG93Om99KXtzdXBlcih7cG9zaXRpb246dCxkaW1lbnNpb246aSxyb3RhdGlvbjplLGJvcmRlcjpzLGJhY2tncm91bmQ6cixzaGFkb3c6b30pfWRyYXcodCl7aWYodC5zYXZlKCksc3VwZXIuZHJhdyh0KSx0aGlzLnJvdGF0ZSl7Y29uc3QgaT10aGlzLnBvc2l0aW9uLngrdGhpcy5kaW1lbnNpb24ud2lkdGgvMixlPXRoaXMucG9zaXRpb24ueSt0aGlzLmRpbWVuc2lvbi5oZWlnaHQvMjt0LnRyYW5zbGF0ZShpLGUpLHQucm90YXRlKHRoaXMucm90YXRpb24uYW5nbGUpLHQudHJhbnNsYXRlKC1pLC1lKX10aGlzLl9wYXRoPW5ldyBQYXRoMkQ7dmFyIGk9dGhpcy5wb3NpdGlvbi54K3RoaXMuZGltZW5zaW9uLndpZHRoLGU9dGhpcy5wb3NpdGlvbi55K3RoaXMuZGltZW5zaW9uLmhlaWdodDt0LmJlZ2luUGF0aCgpLFwib2JqZWN0XCI9PXR5cGVvZiB0aGlzLmJvcmRlci5yYWRpdXM/KHRoaXMuX3BhdGgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLmJvcmRlci5yYWRpdXMudG9wTGVmdCx0aGlzLnBvc2l0aW9uLnkpLHRoaXMuX3BhdGgubGluZVRvKGktdGhpcy5ib3JkZXIucmFkaXVzLnRvcFJpZ2h0LHRoaXMucG9zaXRpb24ueSksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKGksdGhpcy5wb3NpdGlvbi55LGksdGhpcy5wb3NpdGlvbi55K3RoaXMuYm9yZGVyLnJhZGl1cy50b3BSaWdodCksdGhpcy5fcGF0aC5saW5lVG8oaSx0aGlzLnBvc2l0aW9uLnkrdGhpcy5kaW1lbnNpb24uaGVpZ2h0LXRoaXMuYm9yZGVyLnJhZGl1cy5ib3R0b21SaWdodCksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKGksZSxpLXRoaXMuYm9yZGVyLnJhZGl1cy5ib3R0b21SaWdodCxlKSx0aGlzLl9wYXRoLmxpbmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy5ib3JkZXIucmFkaXVzLmJvdHRvbUxlZnQsZSksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMucG9zaXRpb24ueCxlLHRoaXMucG9zaXRpb24ueCxlLXRoaXMuYm9yZGVyLnJhZGl1cy5ib3R0b21MZWZ0KSx0aGlzLl9wYXRoLmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsdGhpcy5wb3NpdGlvbi55K3RoaXMuYm9yZGVyLnJhZGl1cy50b3BMZWZ0KSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8odGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSx0aGlzLnBvc2l0aW9uLngrdGhpcy5ib3JkZXIucmFkaXVzLnRvcExlZnQsdGhpcy5wb3NpdGlvbi55KSk6KHRoaXMuX3BhdGgubW92ZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5wb3NpdGlvbi55KSx0aGlzLl9wYXRoLmxpbmVUbyhpLXRoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnBvc2l0aW9uLnkpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyhpLHRoaXMucG9zaXRpb24ueSxpLHRoaXMucG9zaXRpb24ueSt0aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgubGluZVRvKGksdGhpcy5wb3NpdGlvbi55K3RoaXMuZGltZW5zaW9uLmhlaWdodC10aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyhpLGUsaS10aGlzLmJvcmRlci5yYWRpdXMsZSksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMuYm9yZGVyLnJhZGl1cyxlKSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8odGhpcy5wb3NpdGlvbi54LGUsdGhpcy5wb3NpdGlvbi54LGUtdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLmxpbmVUbyh0aGlzLnBvc2l0aW9uLngsdGhpcy5wb3NpdGlvbi55K3RoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMucG9zaXRpb24ueCx0aGlzLnBvc2l0aW9uLnksdGhpcy5wb3NpdGlvbi54K3RoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnBvc2l0aW9uLnkpKSx0aGlzLl9wYXRoLmNsb3NlUGF0aCgpLHRoaXMuYm9yZGVyJiZ0aGlzLmJvcmRlci5jb2xvciYmdC5zdHJva2UodGhpcy5fcGF0aCksdGhpcy5fYmFja2dyb3VuZCYmdGhpcy5fYmFja2dyb3VuZC5jb2xvciYmdC5maWxsKHRoaXMuX3BhdGgpLHQuc2hhZG93Q29sb3I9MCx0LnNoYWRvd09mZnNldFg9MCx0LnNoYWRvd09mZnNldFk9MCx0LnNoYWRvd0JsdXI9MCx0aGlzLmJvcmRlciYmdGhpcy5ib3JkZXIuY29sb3ImJnQuc3Ryb2tlKHRoaXMuX3BhdGgpLHQucmVzdG9yZSgpfWdldCBhcmVhKCl7cmV0dXJuIHRoaXMuZGltZW5zaW9uLndpZHRoKnRoaXMuZGltZW5zaW9uLmhlaWdodH1nZXQgY2VudGVyKCl7cmV0dXJue3g6dGhpcy5wb3NpdGlvbi54K3RoaXMuZGltZW5zaW9uLndpZHRoLzIseTp0aGlzLnBvc2l0aW9uLnkrdGhpcy5kaW1lbnNpb24uaGVpZ2h0LzJ9fX1jbGFzcyBBIGV4dGVuZHMgeXtjb25zdHJ1Y3Rvcih7cG9zaXRpb246dCxkaW1lbnNpb246aSxyb3RhdGlvbjplLGJvcmRlcjpzLGJhY2tncm91bmQ6cixzaGFkb3c6b30pe3N1cGVyKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsYm9yZGVyOnMsYmFja2dyb3VuZDpyLHNoYWRvdzpvfSl9ZHJhdyh0KXt0LnNhdmUoKSxzdXBlci5kcmF3KHQpLHRoaXMucm90YXRlJiYodC50cmFuc2xhdGUodGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSksdC5yb3RhdGUodGhpcy5yb3RhdGlvbi5hbmdsZSksdC50cmFuc2xhdGUoLXRoaXMucG9zaXRpb24ueCwtdGhpcy5wb3NpdGlvbi55KSksdGhpcy5fcGF0aD1uZXcgUGF0aDJELHQuYmVnaW5QYXRoKCksdGhpcy5fcGF0aC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5wb3NpdGlvbi54LXRoaXMuZGltZW5zaW9uLndpZHRoLHRoaXMucG9zaXRpb24ueS10aGlzLmRpbWVuc2lvbi5oZWlnaHQvMiksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5wb3NpdGlvbi54LXRoaXMuZGltZW5zaW9uLndpZHRoLHRoaXMucG9zaXRpb24ueSt0aGlzLmRpbWVuc2lvbi5oZWlnaHQvMiksdGhpcy5fcGF0aC5jbG9zZVBhdGgoKSx0LnN0cm9rZSh0aGlzLl9wYXRoKSx0LmZpbGwodGhpcy5fcGF0aCksdC5zaGFkb3dDb2xvcj0wLHQuc2hhZG93T2Zmc2V0WD0wLHQuc2hhZG93T2Zmc2V0WT0wLHQuc3Ryb2tlKHRoaXMuX3BhdGgpLHQucmVzdG9yZSgpfX1jb25zdCBUPWZ1bmN0aW9uKHtmb250RmFtaWx5OnQsZm9udFNpemU6aSxmb250V2VpZ2h0OmUsZWxlbWVudDpzfSl7Y29uc3Qgcj1zfHxkb2N1bWVudC5ib2R5O3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO28uaW5uZXJIVE1MPVwiSGdcIixvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsYGZvbnQtZmFtaWx5OiAke3R9ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogJHtpfXB4ICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiR7ZX0gIWltcG9ydGFudDtgKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO24uc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiLG4uc3R5bGUud2lkdGg9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjBweFwiO3ZhciBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aC5hcHBlbmRDaGlsZChvKSxoLmFwcGVuZENoaWxkKG4pLHIuYXBwZW5kQ2hpbGQoaCk7dHJ5e3ZhciBhPXt9O24uc3R5bGUudmVydGljYWxBbGlnbj1cImJhc2VsaW5lXCIsYS5hc2NlbnQ9bi5vZmZzZXRUb3Atby5vZmZzZXRUb3Asbi5zdHlsZS52ZXJ0aWNhbEFsaWduPVwiYm90dG9tXCIsYS5oZWlnaHQ9bi5vZmZzZXRUb3Atby5vZmZzZXRUb3AsYS5kZXNjZW50PWEuaGVpZ2h0LWEuYXNjZW50fWZpbmFsbHl7aC5yZW1vdmUoKX1yZXR1cm4gYX07Y2xhc3MgSXtzdGF0aWMgZ2V0IEZPTlQoKXtyZXR1cm57ZmFtaWx5OlwiQXJpYWxcIixzdHlsZTpcIm5vcm1hbFwiLHZhcmlhbnQ6XCJub3JtYWxcIixjb2xvcjpcInJnYigyMTIsMjEyLDIxMilcIixzaXplOjUwLHdlaWdodDpcImJvbGRcIn19Y29uc3RydWN0b3Ioe2ZhbWlseTp0LHN0eWxlOmksdmFyaWFudDplLGNvbG9yOnMsc2l6ZTpyLHdlaWdodDpvfSl7dGhpcy5fZmFtaWx5PXQsdGhpcy5fc3R5bGU9aSx0aGlzLl92YXJpYW50PWUsdGhpcy5fY29sb3I9bmV3IHAocyksdGhpcy5fc2l6ZT1yLHRoaXMuX3dlaWdodD1vLHRoaXMuX3NldEZvbnREaW1lbnNpb25zKCl9c2V0IGZhbWlseSh0KXt0aGlzLl9mYW1pbHk9dCx0aGlzLl9zZXRGb250RGltZW5zaW9ucygpfXNldCBmb250U2l6ZSh0KXt0aGlzLl9mb250U2l6ZT10LHRoaXMuX3NldEZvbnREaW1lbnNpb25zKCl9c2V0IGZvbnRXZWlnaHQodCl7dGhpcy5fZm9udFNpemU9dCx0aGlzLl9zZXRGb250RGltZW5zaW9ucygpfWdldCBmb250MkNhbnZhcygpe3JldHVybmAke3RoaXMuX3N0eWxlfHxcIlwifSAke3RoaXMuX3ZhcmlhbnR8fFwiXCJ9ICR7dGhpcy5fd2VpZ2h0fHxcIlwifSAke3RoaXMuX3NpemU/dGhpcy5fc2l6ZStcInB4XCI6XCJcIn0gJHt0aGlzLl9mYW1pbHl8fFwiXCJ9YH1nZXQgZmFtaWx5KCl7cmV0dXJuIHRoaXMuX2ZhbWlseX1nZXQgc3R5bGUoKXtyZXR1cm4gdGhpcy5fc3R5bGV9Z2V0IHZhcmlhbnQoKXtyZXR1cm4gdGhpcy5fdmFyaWFudH1nZXQgY29sb3IoKXtyZXR1cm4gdGhpcy5fY29sb3J9c2V0IGNvbG9yKHQpe3RoaXMuX2NvbG9yPW5ldyBwKHQpfWdldCBzaXplKCl7cmV0dXJuIHRoaXMuX3NpemV9Z2V0IHdlaWdodCgpe3JldHVybiB0aGlzLl93ZWlnaHR9Z2V0IGRpbWVuc2lvbnMoKXtyZXR1cm4gdGhpcy5fZGltZW5zaW9uc31fc2V0Rm9udERpbWVuc2lvbnMoKXt0aGlzLl9kaW1lbnNpb25zPVQoe2ZvbnRGYW1pbHk6dGhpcy5fZmFtaWx5LGZvbnRTaXplOnRoaXMuX3NpemUsZm9udFdlaWdodDp0aGlzLl93ZWlnaHR9KX19Y2xhc3MgUntjb25zdHJ1Y3Rvcih7d2VpZ2h0OnQsY29sb3I6aSxlbmFibGVCZXppZXJDdXJ2ZXM6ZSxkYXNoZWQ6cyxsaW5lQ2FwOnJ9KXt0aGlzLl93ZWlnaHQ9dCx0aGlzLl9jb2xvcj1uZXcgcChpKSx0aGlzLl9lbmFibGVCZXppZXJDdXJ2ZXM9ZSx0aGlzLl9kYXNoZWQ9cyx0aGlzLl9saW5lQ2FwPXJ8fFwicm91bmRcIn1nZXQgd2VpZ2h0KCl7cmV0dXJuIHRoaXMuX3dlaWdodH1nZXQgY29sb3IoKXtyZXR1cm4gdGhpcy5fY29sb3J9Z2V0IGVuYWJsZUJlemllckN1cnZlcygpe3JldHVybiB0aGlzLl9lbmFibGVCZXppZXJDdXJ2ZXN9Z2V0IGRhc2hlZCgpe3JldHVybiB0aGlzLl9kYXNoZWR9Z2V0IGxpbmVDYXAoKXtyZXR1cm4gdGhpcy5fbGluZUNhcH19Y29uc3QgTz0oKT0+L01vYml8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksQz1mdW5jdGlvbih0LGksZSxzLHIsbyxuLGgsYSl7cmV0dXJue3g6TWF0aC5wb3coMS10LDMpKmkrMyp0Kk1hdGgucG93KDEtdCwyKSpzKzMqdCp0KigxLXQpKm8rdCp0KnQqaCx5Ok1hdGgucG93KDEtdCwzKSplKzMqdCpNYXRoLnBvdygxLXQsMikqciszKnQqdCooMS10KSpuK3QqdCp0KmF9fSxEPWZ1bmN0aW9uKHQsaSxlLHMscixvLG4pe3JldHVybnt4OigxLXQpKigxLXQpKmkrMiooMS10KSp0KnMrdCp0Km8seTooMS10KSooMS10KSplKzIqKDEtdCkqdCpyK3QqdCpufX0sTj0oe3N0YXJ0UG9pbnQ6dCxjb250cm9sUG9pbnQxOmksY29udHJvbFBvaW50MjplLGVuZFBvaW50OnMsbnVtYmVyT2ZQb2ludHNUb0dlbmVyYXRlOnJ9KT0+e2xldCBvPVtdLG49cnx8NTA7Zm9yKGxldCByPTA7cjw9bjtyKyspe2xldCBoPW51bGw7aD1lP0Moci9uLHQueCx0LnksaS54LGkueSxlLngsZS55LHMueCxzLnkpOkQoci9uLHQueCx0LnksaS54LGkueSxzLngscy55KSxvLnB1c2goaCl9cmV0dXJuIG99LFM9dD0+e2xldCBpPVtdO2ZvcihsZXQgZT0xO2U8dC5sZW5ndGg7ZSsrKXtjb25zdCBzPXRbZV07aWYocy54PT09dFtlLTFdLngpe2NvbnN0IHI9KHMueS10W2UtMV0ueSkvNTA7Zm9yKGxldCBvPTA7bzw1MDtvKyspaS5wdXNoKHt4OnMueCx5OnRbZS0xXS55K3Iqb30pfWVsc2UgaWYocy55PT09dFtlLTFdLnkpe2NvbnN0IHI9KHMueC10W2UtMV0ueCkvNTA7Zm9yKGxldCBvPTA7bzw1MDtvKyspaS5wdXNoKHt4OnRbZS0xXS54K3Iqbyx5OnMueX0pfX1yZXR1cm4gaS5wdXNoKHt4OnRbdC5sZW5ndGgtMV0ueCx5OnRbdC5sZW5ndGgtMV0ueX0pLGl9fV0pfSkpOyIsImltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgU2NoZW1hLFxyXG4gICAgaXNNb2JpbGVcclxufTsiLCJpbXBvcnQgQ29ubmVjdG9yIGZyb20gJy4vY29ubmVjdG9yLmpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBFbnRpdHksXHJcbiAgICBMaW5lXHJcbn0gZnJvbSAnQGFsbGFub3JpY2lsL2NhbnZhc2pzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3Rpb24gZXh0ZW5kcyBFbnRpdHl7XHJcbiAgICBzdGF0aWMgZ2V0IFBBRERJTkcoKXtcclxuICAgICAgICByZXR1cm4gMTU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZnJvbSxcclxuICAgICAgICB0byxcclxuICAgICAgICBsaW5lLFxyXG4gICAgICAgIGNvbm5lY3RvcixcclxuICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgIGlzRWRpdGFibGUsXHJcbiAgICAgICAgc2hvd1BhdGhQb2ludHMsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5feiA9IDA7XHJcbiAgICAgICAgdGhpcy5fZnJvbSA9IGZyb207XHJcbiAgICAgICAgdGhpcy5fdG8gPSB0bztcclxuICAgICAgICB0aGlzLl9saW5lID0gbmV3IExpbmUobGluZSk7XHJcbiAgICAgICAgY29ubmVjdG9yLnBvc2l0aW9uID0gdG8ucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdG9yID0gbmV3IENvbm5lY3Rvcihjb25uZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0YWJsZSA9IGlzRWRpdGFibGU7XHJcbiAgICAgICAgdGhpcy5fc2hvd1BhdGhQb2ludHMgPSBzaG93UGF0aFBvaW50cztcclxuICAgICAgICB0aGlzLl9vbGRUb0RpbWVuc2lvbnMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLl90by5kaW1lbnNpb24ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fdG8uZGltZW5zaW9uLmhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX29sZEZyb21EaW1lbnNpb25zID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fZnJvbS5kaW1lbnNpb24ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZnJvbS5kaW1lbnNpb24uaGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fcGFkZGluZyA9IHBhZGRpbmcgfHwgQ29ubmVjdGlvbi5QQURESU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLnBhdGg7XHJcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5fbGluZS53ZWlnaHQ7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2xpbmUuY29sb3IuaGV4O1xyXG4gICAgICAgICAgICBpZih0aGlzLl9saW5lLmRhc2hlZClcclxuICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKHRoaXMuX2xpbmUuZGFzaGVkKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuX2xpbmUud2VpZ2h0O1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9ICdzcXVhcmUnO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSBwYXRoWzBdO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xpbmUgJiYgdGhpcy5fbGluZS5lbmFibGVCZXppZXJDdXJ2ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xQb2ludDEgPSBwYXRoWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbFBvaW50MiA9IHBhdGhbMl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRQb2ludCA9IHBhdGhbM107XHJcbiAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnQxLngsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50MS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xQb2ludDIueCxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnQyLnksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQueCxcclxuICAgICAgICAgICAgICAgICAgICBlbmRQb2ludC55XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBwYXRoW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvL2RyYXcgY29ubmVjdG9yXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQb2ludCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kTGFzdFBvaW50ID0gcGF0aFtwYXRoLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgICAgICBjb25zdCBkZWx0YV94ID0gbGFzdFBvaW50LnggLSBzZWNvbmRMYXN0UG9pbnQueDtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFfeSA9IGxhc3RQb2ludC55IC0gc2Vjb25kTGFzdFBvaW50Lnk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rvci50cmFuc2Zvcm0ucm90YXRpb24uYW5nbGUgPSBNYXRoLmF0YW4yKGRlbHRhX3ksIGRlbHRhX3gpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0b3IudHJhbnNmb3JtLnBvc2l0aW9uID0gbGFzdFBvaW50O1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0b3IuZHJhdyhjdHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY29ubmVjdGlvblBvaW50cygpIHtcclxuICAgICAgICBsZXQgc21hbGxlckRpc3RhbmNlID0gSW5maW5pdHk7XHJcbiAgICAgICAgbGV0IGNsb3Nlc3RQb2ludHMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBbZnJvbUtleSwgZnJvbVZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9mcm9tLnNoYXBlLnNpZGVzKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbdG9LZXksIHRvVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX3RvLnNoYXBlLnNpZGVzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VYID0gTWF0aC5hYnMoZnJvbVZhbHVlLnggLSB0b1ZhbHVlLngpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWCA8IHNtYWxsZXJEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsZXJEaXN0YW5jZSA9IGRpc3RhbmNlWDtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUubmFtZSA9IGZyb21LZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9WYWx1ZS5uYW1lID0gdG9LZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdFBvaW50cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBmcm9tVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiB0b1ZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xvc2VzdFBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGF0aCgpIHtcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uUG9pbnRzID0gdGhpcy5jb25uZWN0aW9uUG9pbnRzO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbiA9IGNvbm5lY3Rpb25Qb2ludHMub3JpZ2luO1xyXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gY29ubmVjdGlvblBvaW50cy5kZXN0aW5hdGlvbjtcclxuXHJcbiAgICAgICAgbGV0IGhkID0gTWF0aC5hYnMoZGVzdGluYXRpb24ueCAtIG9yaWdpbi54KTtcclxuICAgICAgICBsZXQgbWhkID0gaGQgLyAyO1xyXG5cclxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xyXG4gICAgICAgIGlmIChvcmlnaW4ubmFtZSAhPT0gZGVzdGluYXRpb24ubmFtZSl7XHJcbiAgICAgICAgICAgIGxldCBtdWx0RmFjdG9yID0gb3JpZ2luLnggPj0gZGVzdGluYXRpb24ueCA/IDEgOiAtMTtcclxuICAgICAgICAgICAgaWYoaGQgPCAyMDApe1xyXG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBvcmlnaW4ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcmlnaW4ueSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBvcmlnaW4ueCAtIDUwICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcmlnaW4ueSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBkZXN0aW5hdGlvbi54ICsgNTAgKiBtdWx0RmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGRlc3RpbmF0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZGVzdGluYXRpb24ueCArIHRoaXMuX3BhZGRpbmcgKiBtdWx0RmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGRlc3RpbmF0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IG9yaWdpbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG9yaWdpbi55LFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IG9yaWdpbi54IC0gbWhkICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcmlnaW4ueSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBkZXN0aW5hdGlvbi54ICsgbWhkICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB5OiBkZXN0aW5hdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGRlc3RpbmF0aW9uLnggKyB0aGlzLl9wYWRkaW5nICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB5OiBkZXN0aW5hdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgbXVsdEZhY3RvciA9IG9yaWdpbi5uYW1lID09PSAncmlnaHQnID8gMSA6IC0xO1xyXG4gICAgICAgICAgICBwYXRoLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgeDogb3JpZ2luLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcmlnaW4ueSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogb3JpZ2luLnggKyA1MCAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICB5OiBvcmlnaW4ueSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgeDogZGVzdGluYXRpb24ueCArIDUwICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgIHk6IGRlc3RpbmF0aW9uLnksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IGRlc3RpbmF0aW9uLnggKyB0aGlzLl9wYWRkaW5nICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgIHk6IGRlc3RpbmF0aW9uLnksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmcm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mcm9tO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7XHJcbiAgICBUcmFuc2Zvcm0sXHJcbiAgICBDb2xvclxyXG59IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgY29sb3JcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IGRpbWVuc2lvblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCAsIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgICAgICBjdHgucm90YXRlKHRoaXMuX3RyYW5zZm9ybS5yb3RhdGlvbi5hbmdsZSk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngsIC10aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2NvbG9yLnJnYmE7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54IC0gNSwgdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnksIDUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuX2NvbG9yLnJnYmE7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyAyLCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCArIDE0LCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCArIDIsIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54ICsgMTQsIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55ICsgIDgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyAyLCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCArIDE0LCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSAtIDgpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRW50aXR5LFxyXG4gICAgRm9udCxcclxuICAgIFJlY3RhbmdsZVxyXG59IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIEVudGl0eXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgIGRpbWVuc2lvbixcclxuICAgICAgICBib3JkZXIsXHJcbiAgICAgICAgZm9udCxcclxuICAgICAgICByZWZlcmVuY2UsXHJcbiAgICAgICAgcGFyZW50XHJcbiAgICB9LCBjYW52YXMpe1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIGRpbWVuc2lvbixcclxuICAgICAgICB9LCBjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGUgfHwgJyc7XHJcbiAgICAgICAgdGhpcy5fZm9udCA9IG5ldyBGb250KGZvbnQpO1xyXG4gICAgICAgIHRoaXMuX3NoYXBlID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBib3JkZXI6IGJvcmRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZSA9IHJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLl9zaGFwZSwgXHJcbiAgICAgICAgICAgIFwic2lkZXNcIiwgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pZGRsZUhlaWdodCA9IHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoICsgMjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSArIG1pZGRsZUhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCAtIDExLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgKyBtaWRkbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpe1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUuZHJhdyhjdHgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5fZm9udC5mb250MkNhbnZhcztcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2ZvbnQuY29sb3IuaGV4O1xyXG4gICAgICAgIGNvbnN0IGZpZWxkUG9zaXRpb25ZID0gdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgKyB0aGlzLl9mb250LmRpbWVuc2lvbnMuaGVpZ2h0LzU7XHJcblxyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy5fbGFiZWwsXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICBmaWVsZFBvc2l0aW9uWVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0aGlzLl90eXBlKS53aWR0aDtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMuX3R5cGUsXHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5wb3NpdGlvbi54ICsgdGhpcy5fcGFyZW50LmRpbWVuc2lvbi53aWR0aCAtIHRoaXMuX3BhcmVudC5wYWRkaW5nLnJpZ2h0IC0gdHlwZVdpZHRoIC0gMTAsXHJcbiAgICAgICAgICAgIGZpZWxkUG9zaXRpb25ZXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEVudGl0eSxcclxuICAgIFJlY3RhbmdsZVxyXG59IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHNyYyxcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgIGRpbWVuc2lvbixcclxuICAgICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICAgIGJvcmRlcixcclxuICAgICAgICBwYXJlbnRcclxuICAgIH0pIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgICAgIHBhcmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUgPSBuZXcgUmVjdGFuZ2xlKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIGRpbWVuc2lvbjogdGhpcy5kaW1lbnNpb24sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9hZGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuX3NoYXBlLmJhY2tncm91bmQpe1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMucGFkZGluZy5sZWZ0LCAgdGhpcy5wYWRkaW5nLnRvcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYXBlLmRyYXcoY3R4KTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5wYWRkaW5nLmxlZnQsIC10aGlzLnBhZGRpbmcudG9wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nLmxlZnQsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMucGFkZGluZy50b3AsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9uLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZS5qcyc7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbi5qcyc7XHJcbmltcG9ydCBncmlkU1ZHIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3JpZC5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZW1hIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICBkYXRhXHJcbiAgICB9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2dyaWRTVkd9JylgO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IG5ldyBDYW52YXMoe1xyXG4gICAgICAgICAgICBjYW52YXMsXHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhYmxlQnlOYW1lKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuZ2V0RW50aXR5QnlOYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhYmxlKHRhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFibGUgPSBuZXcgVGFibGUodGFibGUsIHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuYWRkRW50aXR5KG5ld1RhYmxlLCB0aGlzLl9jYW52YXMpO1xyXG5cclxuICAgICAgICBjb25zdCB0YWJsZXMgPSB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5nZXRFbnRpdGllc0luTGF5ZXIoMSk7XHJcbiAgICAgICAgZm9yKGxldCB0YWJsZSBvZiB0YWJsZXMpe1xyXG4gICAgICAgICAgICB0YWJsZS5fZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihmaWVsZC5fcmVmZXJlbmNlKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZlcmVuY2VUYWJsZSA9IHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmdldEVudGl0eUJ5TmFtZShmaWVsZC5fcmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZWZlcmVuY2VUYWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgJHt0YWJsZS5fbmFtZX0tJHtmaWVsZC5fbmFtZX0tJHtyZWZlcmVuY2VUYWJsZS5fbmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogJ3RyaWFuZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigxODAsMTgwLDE4MCknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigxODAsMTgwLDE4MCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJlemllckN1cnZlczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHJlZmVyZW5jZVRhYmxlLl9oZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0YWJsZS5fbmFtZSA9PT0gZmllbGQuX3JlZmVyZW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnRvID0gcmVmZXJlbmNlVGFibGUuX2Zvb3RlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uZnJvbSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fY29ubmVjdGlvbiA9IG5ld0Nvbm5lY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmFkZEVudGl0eShuZXdDb25uZWN0aW9uLCB0aGlzLl9jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhYmxlQnlOYW1lKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBkZWxldGVkRW50aXR5ID0gdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuZ2V0RW50aXR5QnlOYW1lKG5hbWUpOyBcclxuICAgICAgICB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5yZW1vdmVFbnRpdHlCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbnMgPSB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5nZXRFbnRpdGllc0luTGF5ZXIoMCk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgY29ubmVjdGlvbiBvZiBjb25uZWN0aW9ucyl7XHJcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rpb24uX3RvLl9wYXJlbnQuX25hbWUgPT09IGRlbGV0ZWRFbnRpdHkuX25hbWUgfHwgY29ubmVjdGlvbi5fZnJvbS5fcGFyZW50Ll9uYW1lID09IGRlbGV0ZWRFbnRpdHkuX25hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIucmVtb3ZlRW50aXR5QnlOYW1lKGNvbm5lY3Rpb24uX25hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpZWxkVG9UYWJsZShmaWVsZCwgdGFibGVOYW1lKXtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmdldEVudGl0eUJ5TmFtZSh0YWJsZU5hbWUpO1xyXG4gICAgICAgIHRhYmxlLmFkZEZpZWxkKGZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF0YShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGVudGl0eU1hcCA9IHt9O1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBmb3IgKGxldCBbbmFtZSwgdGFibGVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RhYmxlID0gbmV3IFRhYmxlKHRhYmxlLCB0aGlzLl9jYW52YXMpO1xyXG4gICAgICAgICAgICBlbnRpdHlNYXBbbmFtZV0gPSBuZXdUYWJsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZW50aXR5TWFwKS5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5hZGRFbnRpdHkodGFibGUsIHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgICAgIHRhYmxlLl9maWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFkZENvbm5lY3Rpb25Ub0ZpZWxkKGZpZWxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHRhYmxlczogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRhYmxlcyA9IHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmdldEVudGl0aWVzSW5MYXllcigxKTtcclxuICAgICAgICBmb3IobGV0IHRhYmxlIG9mIHRhYmxlcyl7XHJcbiAgICAgICAgICAgIGxldCBuZXdEYXRhVGFibGUgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0YWJsZS5fbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0YWJsZS5fbGFiZWwsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGFibGUucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb246IHsgd2lkdGg6IHRhYmxlLmRpbWVuc2lvbi53aWR0aCwgaGVpZ2h0OiB0YWJsZS5kaW1lbnNpb24uaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgICAgICBpY29uOiB0YWJsZS5faGVhZGVyLl9pY29uLl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0YWJsZS5fZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3RGF0YVRhYmxlLmZpZWxkcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5fbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQuX2xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogZmllbGQuX3JlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZGF0YS50YWJsZXMucHVzaChuZXdEYXRhVGFibGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudCA9PT0gJ29ua2V5cHJlc3MnIHx8XHJcbiAgICAgICAgICAgIGV2ZW50ID09PSAnb25rZXl1cCcgfHxcclxuICAgICAgICAgICAgZXZlbnQgPT09ICdvbmtleWRvd24nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tldmVudF0gPSBjYWxsYmFjaztcclxuICAgICAgICB9IGVsc2UgdGhpcy5fY2FudmFzLl9lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFzSW1hZ2UobmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnNhdmVBc0ltYWdlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkLmpzJztcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vdGFibGVIZWFkZXIuanMnO1xyXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi90YWJsZUZvb3Rlci5qcyc7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbi5qcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRW50aXR5LFxyXG4gICAgUmVjdGFuZ2xlLFxyXG4gICAgRm9udFxyXG59IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBpY29uLFxyXG4gICAgICAgIGZvbnQsXHJcbiAgICAgICAgZmllbGRzLFxyXG4gICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgIGRpbWVuc2lvbixcclxuICAgICAgICBpc0RyYWdnYWJsZSxcclxuICAgICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICAgIHNoYWRvdyxcclxuICAgICAgICBib3JkZXIsXHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIGZvb3RlcixcclxuICAgICAgICBwYWRkaW5nXHJcbiAgICB9LCBjYW52YXMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgICAgIHBhZGRpbmdcclxuICAgICAgICB9LCBjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuX3ogPSAxO1xyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5fZm9udCA9IGZvbnQgPyBuZXcgRm9udChmb250KSA6IEZvbnQuRk9OVDtcclxuICAgICAgICB0aGlzLl9pc0RyYWdnYWJsZSA9IGlzRHJhZ2dhYmxlIHx8IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NoYXBlID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBib3JkZXIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5faGVhZGVyID0gbmV3IFRhYmxlSGVhZGVyKHtcclxuICAgICAgICAgICAgdGl0bGU6IGxhYmVsLFxyXG4gICAgICAgICAgICBmb250OiBmb250LFxyXG4gICAgICAgICAgICBpY29uOiBpY29uLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRpbWVuc2lvbi53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFkZGluZyxcclxuICAgICAgICAgICAgYm9yZGVyOiBoZWFkZXIgJiYgaGVhZGVyLmJvcmRlciA/IGhlYWRlci5ib3JkZXIgOiBib3JkZXJcclxuICAgICAgICB9LCBjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9mb290ZXIgPSBuZXcgVGFibGVGb290ZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBsYWJlbCxcclxuICAgICAgICAgICAgZm9udDogZm9udCxcclxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5kaW1lbnNpb24uaGVpZ2h0IC0gMzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGltZW5zaW9uOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5kaW1lbnNpb24ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogZm9vdGVyICYmIGZvb3Rlci5ib3JkZXIgPyBmb290ZXIuYm9yZGVyIDogYm9yZGVyLFxyXG4gICAgICAgICAgICBzaGFkb3dcclxuICAgICAgICB9LCBjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9maWVsZHMgPSBbXTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRGb250ID0gbmV3IEZvbnQoZmllbGQuZm9udCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVG9JbnNlcnQgPSBuZXcgRmllbGQoe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogZmllbGQucmVmZXJlbmNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9zaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IGZpZWxkRm9udC5kaW1lbnNpb25zLmhlaWdodCAqIGluZGV4XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3NoYXBlLmRpbWVuc2lvbi53aWR0aCAtIDIgKiB0aGlzLl9wYWRkaW5nLnJpZ2h0IC0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaWVsZEZvbnQuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb250OiBmaWVsZEZvbnQsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IGZpZWxkLmJvcmRlcixcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGVcclxuICAgICAgICAgICAgfSwgY2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5fZmllbGRzLnB1c2goZmllbGRUb0luc2VydCk7XHJcblxyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9zaG93U2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbEJhckNvbG9yID0gJ3JnYmEoMCwwLDAsMC4yKSc7XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFBhdGgyRCgpO1xyXG5cclxuICAgICAgICB0aGlzLm9uKCd3aGVlbCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtb3VzZVBvc2l0aW9uID0gdGhpcy5fY2FudmFzLmdldFRyYW5zZm9ybWVkUG9pbnQoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uLnggPj0gdGhpcy5zY3JvbGxhYmxlQXJlYVgxUG9zaXRpb24gJiZcclxuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24ueCA8PSB0aGlzLnNjcm9sbGFibGVBcmVhWDJQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbi55ID49IHRoaXMuc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uICYmXHJcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uLnkgPD0gdGhpcy5zY3JvbGxhYmxlQXJlYVkyUG9zaXRpb25cclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGguc2lnbihlLmRlbHRhWSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kMSA9IHRoaXMuaW5pdGlhbEZpZWxkWVBvc2l0aW9uICsgdGhpcy5zY3JvbGxhYmxlQXJlYUhlaWdodCA+IHRoaXMuc2Nyb2xsYWJsZUFyZWFZMlBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZDIgPSB0aGlzLmluaXRpYWxGaWVsZFlQb3NpdGlvbiA8IHRoaXMuc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKChjb25kMSAmJiBkZWx0YSA+IDApIHx8IChjb25kMiAmJiBkZWx0YSA8IDApKSB0aGlzLl9zY3JvbGxQb3NpdGlvbiAtPSBkZWx0YSAqIDU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1vdXNlUG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBlLm9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICB5OiBlLm9mZnNldFlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNvbnRhaW5zKG1vdXNlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuX3NoYXBlLmJhY2tncm91bmQuY29sb3IgPSAnI2YzZjJmMic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLl9zaGFwZS5iYWNrZ3JvdW5kLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FudmFzLmN0eC5pc1BvaW50SW5QYXRoKHRoaXMuX3Njcm9sbEJhciwgbW91c2VQb3NpdGlvbi54LCBtb3VzZVBvc2l0aW9uLnksICdub256ZXJvJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbEJhckNvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxCYXJDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMiknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub24oJ21vdXNlaG92ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93U2Nyb2xsQmFyID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbignbW91c2VsZWF2ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTY3JvbGxCYXIgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIC8vc2hhcGVcclxuICAgICAgICB0aGlzLl9zaGFwZS5kcmF3KGN0eCk7XHJcblxyXG4gICAgICAgIC8vaGVhZGVyXHJcbiAgICAgICAgdGhpcy5faGVhZGVyLmRyYXcoY3R4KTtcclxuXHJcbiAgICAgICAgLy9zY3JvbGxhYmxlIGFyZWFcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgucmVjdChcclxuICAgICAgICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24ueCArIHRoaXMuX3BhZGRpbmcubGVmdCxcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQXJlYVkxUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYXBlLmRpbWVuc2lvbi53aWR0aCAtIDIgKiB0aGlzLl9wYWRkaW5nLnJpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLmNsaXBBcmVhSGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHguY2xpcCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9maWVsZHMuZm9yRWFjaCgoZmllbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkWVBvc2l0aW9uID0gdGhpcy5pbml0aWFsRmllbGRZUG9zaXRpb24gKyBmaWVsZC5fZm9udC5kaW1lbnNpb25zLmhlaWdodCAqIGluZGV4O1xyXG4gICAgICAgICAgICBmaWVsZC5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX3NoYXBlLnBvc2l0aW9uLnggKyB0aGlzLl9wYWRkaW5nLmxlZnQsXHJcbiAgICAgICAgICAgICAgICB5OiBmaWVsZFlQb3NpdGlvblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNGaWVsZE91dHNpZGVPZlNjcm9sbGFibGVBcmVhID1cclxuICAgICAgICAgICAgICAgIGZpZWxkWVBvc2l0aW9uIDwgdGhpcy5zY3JvbGxhYmxlQXJlYVkxUG9zaXRpb24gLSAxMCB8fFxyXG4gICAgICAgICAgICAgICAgZmllbGRZUG9zaXRpb24gPiB0aGlzLnNjcm9sbGFibGVBcmVhWTJQb3NpdGlvbiAtIDE1O1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpZWxkLl9jb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuX3JlZmVyZW5jZSAhPT0gdGhpcy5fbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkT3V0c2lkZU9mU2Nyb2xsYWJsZUFyZWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuX2Nvbm5lY3Rpb24uX3RvID0gdGhpcy5faGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLl9jb25uZWN0aW9uLl90byA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmllbGRPdXRzaWRlT2ZTY3JvbGxhYmxlQXJlYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fY29ubmVjdGlvbi5fZnJvbSA9IHRoaXMuX2hlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fY29ubmVjdGlvbi5fZnJvbSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmllbGQuZHJhdyhjdHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIC8vc2Nyb2xsYmFyXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzU2Nyb29sQmFyICYmIHRoaXMuX3Nob3dTY3JvbGxCYXIpIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuMSknO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5yZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQXJlYVgyUG9zaXRpb24gLSA1LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQXJlYVkxUG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwQXJlYUhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX3Njcm9sbEJhckNvbG9yO1xyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBQYXRoMkQoKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlY3QoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGFibGVBcmVhWDJQb3NpdGlvbiAtIDUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGFibGVBcmVhWTFQb3NpdGlvbiAtIHRoaXMuX3Njcm9sbFBvc2l0aW9uICogdGhpcy5wZXJjZW50T2ZWaXNpYmxlRmllbGRzLFxyXG4gICAgICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyU2l6ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjdHguZmlsbCh0aGlzLl9zY3JvbGxCYXIpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZm9vdGVyLmRyYXcoY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkRm9udCA9IG5ldyBGb250KGZpZWxkLmZvbnQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVG9JbnNlcnQgPSBuZXcgRmllbGQoe1xyXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXHJcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuICAgICAgICAgICAgcmVmZXJlbmNlOiBmaWVsZC5yZWZlcmVuY2UsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9zaGFwZS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogZmllbGRGb250LmRpbWVuc2lvbnMuaGVpZ2h0ICogdGhpcy5fZmllbGRzLmxlbmd0aFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9zaGFwZS5kaW1lbnNpb24ud2lkdGggLSAyICogdGhpcy5fcGFkZGluZy5yaWdodCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBmaWVsZEZvbnQuZGltZW5zaW9ucy5oZWlnaHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9udDogZmllbGRGb250LFxyXG4gICAgICAgICAgICBib3JkZXI6IGZpZWxkLmJvcmRlcixcclxuICAgICAgICAgICAgdHlwZTogZmllbGQudHlwZVxyXG4gICAgICAgIH0sIHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5fZmllbGRzLnB1c2goZmllbGRUb0luc2VydCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb25uZWN0aW9uVG9GaWVsZChmaWVsZFRvSW5zZXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDb25uZWN0aW9uVG9GaWVsZChmaWVsZCkge1xyXG4gICAgICAgIGlmIChmaWVsZC5fcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVRhYmxlID0gdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuZ2V0RW50aXR5QnlOYW1lKGZpZWxkLl9yZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlVGFibGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7dGhpcy5fbmFtZX0tJHtmaWVsZC5fbmFtZX0tJHtyZWZlcmVuY2VUYWJsZS5fbmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogJ3RyaWFuZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDE4MCwxODAsMTgwKSdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigxODAsMTgwLDE4MCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCZXppZXJDdXJ2ZXM6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiByZWZlcmVuY2VUYWJsZS5faGVhZGVyXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uYW1lID09PSBmaWVsZC5fcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi50byA9IHJlZmVyZW5jZVRhYmxlLl9mb290ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5mcm9tID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgZmllbGQuX2Nvbm5lY3Rpb24gPSBuZXdDb25uZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuYWRkRW50aXR5KG5ld0Nvbm5lY3Rpb24sIHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SWNvbigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGluaXRpYWxGaWVsZFlQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxhYmxlQXJlYVkxUG9zaXRpb24gKyB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsYWJsZUFyZWFYMVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGFwZS5wb3NpdGlvbi54ICsgdGhpcy5fcGFkZGluZy5sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxhYmxlQXJlYVgyUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlLnBvc2l0aW9uLnggKyB0aGlzLl9wYWRkaW5nLmxlZnQgKyB0aGlzLl9zaGFwZS5kaW1lbnNpb24ud2lkdGggLSAyICogdGhpcy5fcGFkZGluZy5yaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGFwZS5wb3NpdGlvbi55ICsgdGhpcy5faGVhZGVyLmRpbWVuc2lvbi5oZWlnaHQgKyAxMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsYWJsZUFyZWFZMlBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGFwZS5wb3NpdGlvbi55ICsgdGhpcy5fc2hhcGUuZGltZW5zaW9uLmhlaWdodCAtIHRoaXMuX2Zvb3Rlci5kaW1lbnNpb24uaGVpZ2h0IC0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsaXBBcmVhSGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGFwZS5kaW1lbnNpb24uaGVpZ2h0IC0gdGhpcy5faGVhZGVyLmRpbWVuc2lvbi5oZWlnaHQgLSB0aGlzLl9mb290ZXIuZGltZW5zaW9uLmhlaWdodCAtIDIwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxhYmxlQXJlYUhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzLmxlbmd0aCAqIHRoaXMuX2ZpZWxkc1swXS5fZm9udC5kaW1lbnNpb25zLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzU2Nyb29sQmFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbGFibGVBcmVhSGVpZ2h0ID4gdGhpcy5jbGlwQXJlYUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGVyY2VudE9mVmlzaWJsZUZpZWxkcygpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJPZlZpc2libGVGaWVsZHMgPSAodGhpcy5jbGlwQXJlYUhlaWdodCAvIHRoaXMuX2ZpZWxkc1swXS5fZm9udC5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlck9mVmlzaWJsZUZpZWxkcyAvIHRoaXMuX2ZpZWxkcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbGJhclNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuY2xpcEFyZWFIZWlnaHQgKiB0aGlzLnBlcmNlbnRPZlZpc2libGVGaWVsZHMpLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgRW50aXR5LFxyXG4gICAgUmVjdGFuZ2xlXHJcbn0gZnJvbSAnQGFsbGFub3JpY2lsL2NhbnZhc2pzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlRm9vdGVyIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgIGRpbWVuc2lvbixcclxuICAgICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICAgIHNoYWRvdyxcclxuICAgICAgICBib3JkZXIsXHJcbiAgICAgICAgcGFkZGluZyxcclxuICAgICAgICBwYXJlbnQsXHJcbiAgICB9LCBjYW52YXMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IGBmb290ZXJfJHtuYW1lfWAsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgICAgIHBhcmVudFxyXG4gICAgICAgIH0sIGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NoYXBlID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBzaGFkb3csXHJcbiAgICAgICAgICAgIGJvcmRlcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYXBlLFxyXG4gICAgICAgICAgICBcInNpZGVzXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pZGRsZUhlaWdodCA9IHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgKyBtaWRkbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSArIG1pZGRsZUhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi54ID0gdGhpcy5fcGFyZW50LnBvc2l0aW9uLng7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24ueSA9IHRoaXMuX3BhcmVudC5wb3NpdGlvbi55ICsgdGhpcy5fcGFyZW50LmRpbWVuc2lvbi5oZWlnaHQgLSB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9zaGFwZS5kcmF3KGN0eCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIEVudGl0eSxcclxuICAgIFJlY3RhbmdsZSxcclxuICAgIEZvbnRcclxufWZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5qcyc7XHJcbmltcG9ydCBJY29uQ29sb3JzIGZyb20gJy4uLy4uL2Fzc2V0cy9qc29uL2JhY2tncm91bmRDb2xvcnNGb3JJY29ucy5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgRW50aXR5e1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGljb24sXHJcbiAgICAgICAgZm9udCxcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgICBzaGFkb3csXHJcbiAgICAgICAgYm9yZGVyLFxyXG4gICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgcGFyZW50LFxyXG4gICAgfSwgY2FudmFzKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBgaGVhZGVyXyR7dGl0bGV9YCxcclxuICAgICAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIGRpbWVuc2lvbixcclxuICAgICAgICAgICAgcGFkZGluZyxcclxuICAgICAgICAgICAgcGFyZW50XHJcbiAgICAgICAgfSwgY2FudmFzKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuX2ZvbnQgPSBmb250ID8gbmV3IEZvbnQoZm9udCkgOiBGb250LkZPTlQ7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUgPSBuZXcgUmVjdGFuZ2xlKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgIGRpbWVuc2lvbjogdGhpcy5kaW1lbnNpb24sXHJcbiAgICAgICAgICAgIHNoYWRvdyxcclxuICAgICAgICAgICAgYm9yZGVyLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcy5fc2hhcGUsIFxyXG4gICAgICAgICAgICBcInNpZGVzXCIsIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRkbGVIZWlnaHQgPSB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54ICsgdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55ICsgbWlkZGxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgKyBtaWRkbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmKGljb24pe1xyXG4gICAgICAgICAgICBjb25zdCBpY29uU3JjVG9rZW5zICA9IGljb24ubmFtZS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBpY29uLmJhY2tncm91bmQuY29sb3IgPSBJY29uQ29sb3JzW2ljb25TcmNUb2tlbnNbMV1dO1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uID0gbmV3IEljb24oe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaWNvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBgJHt0aGlzLl9jYW52YXMuX2ltYWdlc1NvdXJjZSB8fCAnLid9L3NhbGVzZm9yY2UtaWNvbnMvJHtpY29uU3JjVG9rZW5zWzBdfS8ke2ljb25TcmNUb2tlbnNbMV19LnN2Z2AsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbjogaWNvbi5kaW1lbnNpb24gfHwgeyB3aWR0aDogMjUsIGhlaWdodDogMjV9LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDB9LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaWNvbi5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogaWNvbi5wYWRkaW5nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBpY29uLmJvcmRlcixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KXtcclxuICAgICAgICB0aGlzLl9zaGFwZS5kcmF3KGN0eCk7XHJcblxyXG4gICAgICAgIC8vdGl0bGVcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5mb250ID0gdGhpcy5fZm9udC5mb250MkNhbnZhcztcclxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2ZvbnQuY29sb3IuaGV4O1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy5fdGl0bGUsIFxyXG4gICAgICAgICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi54ICsgdGhpcy5fcGFkZGluZy5sZWZ0ICsgdGhpcy5faWNvbi5kaW1lbnNpb24ud2lkdGggKyB0aGlzLl9pY29uLnBhZGRpbmcucmlnaHQsIFxyXG4gICAgICAgICAgICB0aGlzLl9zaGFwZS5wb3NpdGlvbi55ICsgdGhpcy5fcGFkZGluZy50b3BcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIC8vaWNvblxyXG4gICAgICAgIGlmKHRoaXMuX2ljb24pe1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uLmRyYXcoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==