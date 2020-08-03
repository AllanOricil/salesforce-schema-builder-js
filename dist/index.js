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
        });

        Object.values(entityMap).forEach((table) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9hc3NldHMvaW1hZ2VzL2dyaWQuc3ZnIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvQGFsbGFub3JpY2lsL2NhbnZhc2pzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2NoZW1hQnVpbGRlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyLy4vc3JjL3NjaGVtYS9jb25uZWN0aW9uLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL2Nvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyLy4vc3JjL3NjaGVtYS9maWVsZC5qcyIsIndlYnBhY2s6Ly9zY2hlbWFCdWlsZGVyLy4vc3JjL3NjaGVtYS9pY29uLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL2luZGV4LmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL3RhYmxlLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL3RhYmxlRm9vdGVyLmpzIiwid2VicGFjazovL3NjaGVtYUJ1aWxkZXIvLi9zcmMvc2NoZW1hL3RhYmxlSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztR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bmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNjaGVtYUJ1aWxkZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic2NoZW1hQnVpbGRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy81OTkwZTI5MTEzNWNmZGIyODE5MjQwZWZhOWJmNGU5OS5zdmdcIjsiLCIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxpKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmNhbnZhc0pTPWkoKTp0LmNhbnZhc0pTPWkoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgaT17fTtmdW5jdGlvbiBlKHMpe2lmKGlbc10pcmV0dXJuIGlbc10uZXhwb3J0czt2YXIgcj1pW3NdPXtpOnMsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtzXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBlLm09dCxlLmM9aSxlLmQ9ZnVuY3Rpb24odCxpLHMpe2Uubyh0LGkpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHtlbnVtZXJhYmxlOiEwLGdldDpzfSl9LGUucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLnQ9ZnVuY3Rpb24odCxpKXtpZigxJmkmJih0PWUodCkpLDgmaSlyZXR1cm4gdDtpZig0JmkmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHM9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihlLnIocyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImaSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpZS5kKHMscixmdW5jdGlvbihpKXtyZXR1cm4gdFtpXX0uYmluZChudWxsLHIpKTtyZXR1cm4gc30sZS5uPWZ1bmN0aW9uKHQpe3ZhciBpPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQoaSxcImFcIixpKSxpfSxlLm89ZnVuY3Rpb24odCxpKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSl9LGUucD1cIlwiLGUoZS5zPTApfShbZnVuY3Rpb24odCxpLGUpe1widXNlIHN0cmljdFwiO2UucihpKSxlLmQoaSxcIkNhbnZhc1wiLChmdW5jdGlvbigpe3JldHVybiBsfSkpLGUuZChpLFwiRW50aXR5XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksZS5kKGksXCJDaXJjbGVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdn0pKSxlLmQoaSxcIkRpYW1vbmRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxlLmQoaSxcIlBvbHlnb25cIiwoZnVuY3Rpb24oKXtyZXR1cm4geH0pKSxlLmQoaSxcIlJlY3RhbmdsZVwiLChmdW5jdGlvbigpe3JldHVybiBMfSkpLGUuZChpLFwiU2hhcGVcIiwoZnVuY3Rpb24oKXtyZXR1cm4geX0pKSxlLmQoaSxcIlRyaWFuZ2xlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEF9KSksZS5kKGksXCJCYWNrZ3JvdW5kXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEV9KSksZS5kKGksXCJCb3JkZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKSxlLmQoaSxcIkNvbG9yXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHB9KSksZS5kKGksXCJGb250XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEl9KSksZS5kKGksXCJMaW5lXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFJ9KSksZS5kKGksXCJQYWRkaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksZS5kKGksXCJTaGFkb3dcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYn0pKSxlLmQoaSxcIkRpbWVuc2lvblwiLChmdW5jdGlvbigpe3JldHVybiByfSkpLGUuZChpLFwiUG9zaXRpb25cIiwoZnVuY3Rpb24oKXtyZXR1cm4gc30pKSxlLmQoaSxcIlJvdGF0aW9uXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG99KSksZS5kKGksXCJTY2FsZVwiLChmdW5jdGlvbigpe3JldHVybiBufSkpLGUuZChpLFwiVHJhbnNmb3JtXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGh9KSksZS5kKGksXCJnZXRUZXh0SGVpZ2h0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFR9KSksZS5kKGksXCJzeW50YXhIaWdobGlnaHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZH0pKSxlLmQoaSxcImlzTW9iaWxlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE99KSksZS5kKGksXCJyZW1vdmVXaGl0ZVNwYWNlc1wiLChmdW5jdGlvbigpe3JldHVybiBffSkpLGUuZChpLFwiZ2V0QmV6aWVyUG9pbnRzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE59KSksZS5kKGksXCJnZXRQYXRoUG9pbnRzR2l2ZW5QYXRoXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFN9KSk7Y2xhc3Mgc3tjb25zdHJ1Y3Rvcih7eDp0LHk6aX0pe3RoaXMuX3g9dCx0aGlzLl95PWl9Z2V0IHgoKXtyZXR1cm4gcGFyc2VJbnQodGhpcy5feD90aGlzLl94LnRvRml4ZWQoMCk6MCl9Z2V0IHkoKXtyZXR1cm4gcGFyc2VJbnQodGhpcy5feT90aGlzLl95LnRvRml4ZWQoMCk6MCl9c2V0IHgodCl7dGhpcy5feD10fXNldCB5KHQpe3RoaXMuX3k9dH19Y2xhc3Mgcntjb25zdHJ1Y3Rvcih7d2lkdGg6dCxoZWlnaHQ6aX0pe3RoaXMuX3dpZHRoPXQsdGhpcy5faGVpZ2h0PWl9Z2V0IHdpZHRoKCl7cmV0dXJuIHRoaXMuX3dpZHRofWdldCBoZWlnaHQoKXtyZXR1cm4gdGhpcy5faGVpZ2h0fXNldCB3aWR0aCh0KXt0aGlzLl93aWR0aD10fXNldCBoZWlnaHQodCl7dGhpcy5faGVpZ2h0PXR9fWNsYXNzIG97Y29uc3RydWN0b3Ioe2FuZ2xlOnQscmVmZXJlbnRpYWw6aX0pe3RoaXMuX2FuZ2xlPXQsdGhpcy5fcmVmZXJlbnRpYWw9bmV3IHMoaXx8e3g6MCx5OjB9KX1nZXQgYW5nbGUoKXtyZXR1cm4gdGhpcy5fYW5nbGV9c2V0IGFuZ2xlKHQpe3RoaXMuX2FuZ2xlPXR9Z2V0IHJlZmVyZW50aWFsKCl7cmV0dXJuIHRoaXMuX3JlZmVyZW50aWFsfX1jbGFzcyBue2NvbnN0cnVjdG9yKHtob3Jpem9udGFsOnQsdmVydGljYWw6aX0pe3RoaXMuX2hvcml6b250YWw9dCx0aGlzLl92ZXJ0aWNhbD1pfWdldCBob3Jpem9udGFsKCl7cmV0dXJuIHRoaXMuX2hvcml6b250YWx9Z2V0IHZlcnRpY2FsKCl7cmV0dXJuIHRoaXMuX3ZlcnRpY2FsfXNldCBob3Jpem9udGFsKHQpe3RoaXMuX2hvcml6b250YWw9dH1zZXQgdmVydGljYWwodCl7dGhpcy5fdmVydGljYWw9dH19Y2xhc3MgaHtzdGF0aWMgZ2V0IFBPU0lUSU9OKCl7cmV0dXJuIG5ldyBzKHt4OjAseTowfSl9c3RhdGljIGdldCBESU1FTlNJT04oKXtyZXR1cm4gbmV3IHIoe3dpZHRoOjAsaGVpZ2h0OjB9KX1zdGF0aWMgZ2V0IFJPVEFUSU9OKCl7cmV0dXJuIG5ldyBvKHthbmdsZTowfSl9c3RhdGljIGdldCBTQ0FMRSgpe3JldHVybiBuZXcgbih7aG9yaXpvbnRhbDoxLHZlcnRpY2FsOjF9KX1jb25zdHJ1Y3Rvcih7cG9zaXRpb246dCxkaW1lbnNpb246aSxyb3RhdGlvbjplLHNjYWxlOnN9KXt0aGlzLl9wb3NpdGlvbj10fHxoLlBPU0lUSU9OLHRoaXMuX2RpbWVuc2lvbj1pP25ldyByKGkpOmguRElNRU5TSU9OLHRoaXMuX3JvdGF0aW9uPWU/bmV3IG8oZSk6aC5ST1RBVElPTix0aGlzLl9zY2FsZT1zP25ldyBuKHMpOmguU0NBTEV9Z2V0IHBvc2l0aW9uKCl7cmV0dXJuIHRoaXMuX3Bvc2l0aW9ufWdldCBkaW1lbnNpb24oKXtyZXR1cm4gdGhpcy5fZGltZW5zaW9ufWdldCByb3RhdGlvbigpe3JldHVybiB0aGlzLl9yb3RhdGlvbn1nZXQgc2NhbGUoKXtyZXR1cm4gdGhpcy5fc2NhbGV9c2V0IHBvc2l0aW9uKHQpe3RoaXMuX3Bvc2l0aW9uPXR9c2V0IGRpbWVuc2lvbih0KXt0aGlzLl9kaW1lbnNpb249dH1zZXQgcm90YXRpb24odCl7dGhpcy5fcm90YXRpb249dH1zZXQgc2NhbGUodCl7dGhpcy5fc2NhbGU9dH19Y2xhc3MgYXtjb25zdHJ1Y3Rvcigpe3RoaXMuX2VudGl0aWVzTWFwPW5ldyBNYXAsWy4uLkFycmF5KDEwMCkua2V5cygpXS5mb3JFYWNoKHQ9Pnt0aGlzLl9lbnRpdGllc01hcC5zZXQodCxuZXcgTWFwKX0pLHRoaXMuX2VudGl0aWVzTGF5ZXJNYXA9bmV3IE1hcH1nZXRMYXllcih0KXtyZXR1cm4gdGhpcy5fZW50aXRpZXNNYXAuZ2V0KHQpfWdldEVudGl0eUxheWVyQnlOYW1lKHQpe3JldHVybiB0aGlzLmdldExheWVyKHRoaXMuX2VudGl0aWVzTGF5ZXJNYXAuZ2V0KHQpKX1nZXRFbnRpdHlCeU5hbWUodCl7cmV0dXJuIHRoaXMuZ2V0RW50aXR5TGF5ZXJCeU5hbWUodCkuZ2V0KHQpfWFkZEVudGl0eSh0LGkpe3QuX2NhbnZhcz1pLHRoaXMuZ2V0TGF5ZXIodC5fenx8MCkuc2V0KHQuX25hbWUsdCksdGhpcy5fZW50aXRpZXNMYXllck1hcC5zZXQodC5fbmFtZSx0Ll96KX1yZW1vdmVFbnRpdHlCeU5hbWUodCl7cmV0dXJuIHRoaXMuZ2V0RW50aXR5TGF5ZXJCeU5hbWUodCkuZGVsZXRlKHQpfWNsZWFyTGF5ZXIodCl7Y29uc3QgaT10aGlzLmdldExheWVyKHQpO2kmJmkuY2xlYXIoKX1nZXRFbnRpdGllc0luTGF5ZXIodCl7cmV0dXJuIHRoaXMuZ2V0TGF5ZXIodCkudmFsdWVzKCl9Z2V0IGVudGl0aWVzKCl7bGV0IHQ9W107Zm9yKGxldFtpLGVdb2YgdGhpcy5fZW50aXRpZXNNYXAuZW50cmllcygpKWUuZm9yRWFjaChpPT57dC5wdXNoKGkpfSk7cmV0dXJuIHR9fWNsYXNzIGx7c3RhdGljIGdldCBTQ0FMRSgpe3JldHVybntob3Jpem9udGFsOjEsdmVydGljYWw6MX19c3RhdGljIGdldCBTQ0FMRUxJTUlUUygpe3JldHVybnttYXg6MixtaW46LjIsc3BlZWQ6LjAxfX1zdGF0aWMgZ2V0IEZQUygpe3JldHVybiA2MH1zdGF0aWMgZ2V0IENBTk1PVkVFTlRJVElFUygpe3JldHVybiEwfXN0YXRpYyBnZXQgQ0FORFJBR0NBTlZBUygpe3JldHVybiEwfWNvbnN0cnVjdG9yKHtvcHRpb25zOnQsY2FudmFzOml9KXt0aGlzLl9lbnRpdHlNYW5hZ2VyPW5ldyBhLHRoaXMuX2RwaT13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyx0aGlzLl9lbD1pfHxkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSx0aGlzLl9lbC5zdHlsZS5tYXhIZWlnaHQ9XCJub25lXCIsdGhpcy5fZWwuZm9jdXMoKSx0aGlzLl9pbWFnZXNTb3VyY2U9dC5pbWFnZXNTb3VyY2UsdGhpcy5fZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlPXQuYmFja2dyb3VuZEltYWdlLHRoaXMuX2VsLnN0eWxlLmJhY2tncm91bmRDb2xvcj10LmJhY2tncm91bmQmJnQuYmFja2dyb3VuZC5jb2xvcj90LmJhY2tncm91bmQuY29sb3I6bnVsbCx0aGlzLl9mcHM9dC5mcHM/dC5mcHM6bC5GUFMsdGhpcy5fY2FuTW92ZUVudGl0aWVzPSExIT09dC5jYW5Nb3ZlRW50aXRpZXMsdGhpcy5fY2FuRHJhZ0NhbnZhcz10LmNhbkRyYWdDYW52YXM/dC5jYW5EcmFnQ2FudmFzOmwuQ0FORFJBR0NBTlZBUyx0aGlzLl9tb3VzZT1uZXcgcyh7eDowLHk6MH0pLHRoaXMuX3NjYWxlTGltaXRzPXQuem9vbT97bWF4OnQuem9vbS5tYXh8fGwuU0NBTEVMSU1JVFMubWF4LG1pbjp0Lnpvb20ubWlufHxsLlNDQUxFTElNSVRTLm1pbixzcGVlZDp0Lnpvb20uc3BlZWR8fGwuU0NBTEVMSU1JVFMuc3BlZWR9OmwuU0NBTEVMSU1JVFMsdGhpcy5fdHJhbnNmb3JtPW5ldyBoKHtwb3NpdGlvbjp7eDowLHk6MH0sZGltZW5zaW9uOnt3aWR0aDp0aGlzLl9lbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLGhlaWdodDp0aGlzLl9lbC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodH0sc2NhbGU6e2hvcml6b250YWw6dC56b29tLmxldmVsLHZlcnRpY2FsOnQuem9vbS5sZXZlbH19KSx0aGlzLl9lbC53aWR0aD10aGlzLl9lbC5wYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoLHRoaXMuX2VsLmhlaWdodD10aGlzLl9lbC5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCx0aGlzLl9lbC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgpLHRoaXMuX2VsLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLHRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSxcInVuZGVmaW5lZFwiIT10eXBlb2YgT2Zmc2NyZWVuQ2FudmFzPyhcIk9mZnNjcmVlbkNhbnZhc1wiaW4gd2luZG93P3RoaXMuX29mZnNjcmVlbkNhbnZhcz10aGlzLl9lbC50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpOnRoaXMuX29mZnNjcmVlbkNhbnZhcz1uZXcgT2Zmc2NyZWVuQ2FudmFzKHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24ud2lkdGgsdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQpLHRoaXMuX2N0eD10aGlzLl9vZmZzY3JlZW5DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpKTp0aGlzLl9jdHg9dGhpcy5fZWwuZ2V0Q29udGV4dChcIjJkXCIpLHRoaXMuX2lzU2Nyb2xsaW5nPSExLHRoaXMuX3RpY2tUaW1lPTAsdGhpcy5fdXBkYXRlVGltZT0wLHRoaXMuX2RyYXdUaW1lPTA7bGV0IGU9e3g6MCx5OjB9LHI9dm9pZCAwLG89ITEsbj1bXSxkPW51bGwsYz0hMSxnPW51bGw7dGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHQ9PntpZihnKXJldHVybiBnLl9zZWxlY3RlZD0hMCx2b2lkKHRoaXMuX2Nhbk1vdmVFbnRpdGllcyYmIWQmJmcuX2lzRHJhZ2dhYmxlJiYoZD1nKSk7ZT10aGlzLmdldFRyYW5zZm9ybWVkUG9pbnQodC5vZmZzZXRYLHQub2Zmc2V0WSksbz0hMH0pLHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0PT57aWYodGhpcy5fbW91c2UueD10Lm9mZnNldFgsdGhpcy5fbW91c2UueT10Lm9mZnNldFkscj10aGlzLmdldFRyYW5zZm9ybWVkUG9pbnQodC5vZmZzZXRYLHQub2Zmc2V0WSksbylyZXR1cm4gdGhpcy5fZWwuc3R5bGUuY3Vyc29yPVwiZ3JhYmJpbmdcIix2b2lkIHRoaXMuX2N0eC50cmFuc2xhdGUoci54LWUueCxyLnktZS55KTtpZihkKXJldHVybiBjPSEwLHZvaWQoZC5wb3NpdGlvbj17eDpyLngtZC5kaW1lbnNpb24ud2lkdGgvMix5OnIueS1kLmRpbWVuc2lvbi5oZWlnaHQvMn0pO2ZvcihsZXQgaT10aGlzLl9lbnRpdHlNYW5hZ2VyLmVudGl0aWVzLmxlbmd0aC0xO2k+PTA7aS0tKXtsZXQgZT10aGlzLl9lbnRpdHlNYW5hZ2VyLmVudGl0aWVzW2ldO2lmKGUuY29udGFpbnModGhpcy5fbW91c2UpKXJldHVybiBlLmVtaXQoXCJtb3VzZW1vdmVcIix0KSxnPWUsdGhpcy5fZWwuc3R5bGUuY3Vyc29yPVwiZ3JhYmJpbmdcIix2b2lkKGUuX2hvdmVyfHwoZS5faG92ZXI9ITAsdGhpcy5fZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJtb3VzZWVudGVyZW50aXR5XCIse2RldGFpbDplfSkpLGUuZW1pdChcIm1vdXNlaG92ZXJcIix0KSxlLmVtaXQoXCJob3ZlclwiLHQpKSk7ZS5faG92ZXImJihlLl9ob3Zlcj0hMSx0aGlzLl9lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm1vdXNlbGVhdmVlbnRpdHlcIix7ZGV0YWlsOmV9KSksZS5lbWl0KFwibW91c2VsZWF2ZVwiLHQpKX1nPW51bGwsdGhpcy5fZWwuc3R5bGUuY3Vyc29yPVwiZGVmYXVsdFwiLHRoaXMuX2VsLnN0eWxlLmN1cnNvcj1cImRlZmF1bHRcIn0pLHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdD0+e289ITEsZCYmKGQuX3NlbGVjdGVkPSExLGQ9bnVsbCl9LHtwYXNzaXZlOiEwfSksdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdD0+e2lmKGMpYz0hMTtlbHNlIGlmKGcpe2lmKGcuZW1pdChcImNsaWNrXCIpLGcuX3NlbGVjdGVkPSEwLHRoaXMuX2VsLmRpc3BhdGNoRXZlbnQoZy5jcmVhdGVFdmVudChcImNsaWNrZW50aXR5XCIpKSwwPT09bi5sZW5ndGg/bi5wdXNoKGcpOm4uZm9yRWFjaCh0PT57dC5faWQhPT1nLl9pZCYmbi5wdXNoKGcpfSksMj09bi5sZW5ndGgpe2xldCB0PW4ucG9wKCksaT1uLnBvcCgpLGU9ITE7Zm9yKGxldCBzPTA7czxpLmNvbm5lY3Rpb25zLmxlbmd0aDtzKyspe2lmKGkuY29ubmVjdGlvbnNbc10udG8uX2lkPT09dC5faWQpe2U9ITA7YnJlYWt9fWZvcihsZXQgcz0wO3M8dC5jb25uZWN0aW9ucy5sZW5ndGg7cysrKXtpZih0LmNvbm5lY3Rpb25zW3NdLnRvLl9pZD09PWkuX2lkKXtlPSEwO2JyZWFrfX1uPVtdfXJldHVybn19LHtwYXNzaXZlOiEwfSksdGhpcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsdD0+e289ITEsbj1bXSxkPW51bGwsYz0hMX0se3Bhc3NpdmU6ITB9KSx0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIix0PT57cj10aGlzLmdldFRyYW5zZm9ybWVkUG9pbnQodC5vZmZzZXRYLHQub2Zmc2V0WSk7Y29uc3QgaT10LndoZWVsRGVsdGE+MHx8dC5kZWx0YVk8MD8xK3RoaXMuX3NjYWxlTGltaXRzLnNwZWVkOjEtdGhpcy5fc2NhbGVMaW1pdHMuc3BlZWQsZT10aGlzLl9jdHguZ2V0VHJhbnNmb3JtKCkuYSppO2c/Zy5lbWl0KFwid2hlZWxcIix0KTplPnRoaXMuX3NjYWxlTGltaXRzLm1pbiYmZTx0aGlzLl9zY2FsZUxpbWl0cy5tYXgmJih0aGlzLl9jdHgudHJhbnNsYXRlKHIueCxyLnkpLHRoaXMuX2N0eC5zY2FsZShpLGkpLHRoaXMuX2N0eC50cmFuc2xhdGUoLXIueCwtci55KSl9LHtwYXNzaXZlOiEwfSk7bGV0IHU9bnVsbDt0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHQ9PntpZigxPT09dC50b3VjaGVzLmxlbmd0aCl7dGhpcy5fbW91c2UueD10LnRvdWNoZXNbMF0uY2xpZW50WCx0aGlzLl9tb3VzZS55PXQudG91Y2hlc1swXS5jbGllbnRZO2ZvcihsZXQgdD10aGlzLl9lbnRpdHlNYW5hZ2VyLmVudGl0aWVzLmxlbmd0aC0xO3Q+PTA7dC0tKXtsZXQgaT10aGlzLl9lbnRpdHlNYW5hZ2VyLmVudGl0aWVzW3RdO2lmKGkuY29udGFpbnModGhpcy5fbW91c2UpKXJldHVybiBnPWksZHx8KGQ9aSksdm9pZCB0aGlzLl9lbC5kaXNwYXRjaEV2ZW50KGkuY3JlYXRlRXZlbnQoXCJ0b3VjaHN0YXJ0ZW50aXR5XCIpKX1vPSEwLHUmJih0LnRpbWVTdGFtcCx1LnRpbWVTdGFtcCx0LnRpbWVTdGFtcC11LnRpbWVTdGFtcDw9MjAwJiZ0aGlzLl9lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImRidG91Y2hcIix0KSkpLHU9dH19LHtwYXNzaXZlOiEwfSk7bGV0IF89bnVsbDt0aGlzLl9lbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdD0+e2lmKDE9PT10LnRvdWNoZXMubGVuZ3RoKXtpZih0aGlzLl9tb3VzZS54PXQudG91Y2hlc1swXS5jbGllbnRYLHRoaXMuX21vdXNlLnk9dC50b3VjaGVzWzBdLmNsaWVudFkscj10aGlzLmdldFRyYW5zZm9ybWVkUG9pbnQodGhpcy5fbW91c2UueCx0aGlzLl9tb3VzZS55KSxvJiZfKXtsZXQgdD10aGlzLmdldFRyYW5zZm9ybWVkUG9pbnQoXy50b3VjaGVzWzBdLmNsaWVudFgsXy50b3VjaGVzWzBdLmNsaWVudFkpO3RoaXMuX2N0eC50cmFuc2xhdGUoci54LXQueCxyLnktdC55KX1lbHNlIGQmJihjPSEwLGQucG9zaXRpb249e3g6ci54LWQuZGltZW5zaW9uLndpZHRoLzIseTpyLnktZC5kaW1lbnNpb24uaGVpZ2h0LzJ9KTtfPXR9fSx7cGFzc2l2ZTohMH0pLHRoaXMuX2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLHQ9PntkJiYoZD1udWxsKSxvPSExLF89bnVsbH0se3Bhc3NpdmU6ITB9KSx0aGlzLl9ldkNhY2hlPVtdLHRoaXMucHJldkRpZmY9LTE7Y29uc3QgcD10PT57Zih0KSx0aGlzLl9ldkNhY2hlLmxlbmd0aDwyJiYodGhpcy5wcmV2RGlmZj0tMSl9LGY9dD0+e2Zvcih2YXIgaT0wO2k8dGhpcy5fZXZDYWNoZS5sZW5ndGg7aSsrKWlmKHRoaXMuX2V2Q2FjaGVbaV0ucG9pbnRlcklkPT10LnBvaW50ZXJJZCl7dGhpcy5fZXZDYWNoZS5zcGxpY2UoaSwxKTticmVha319O3RoaXMuX2VsLm9ucG9pbnRlcmRvd249dD0+e3RoaXMuX2V2Q2FjaGUucHVzaCh0KX0sdGhpcy5fZWwub25wb2ludGVybW92ZT10PT57Zm9yKHZhciBpPTA7aTx0aGlzLl9ldkNhY2hlLmxlbmd0aDtpKyspaWYodC5wb2ludGVySWQ9PXRoaXMuX2V2Q2FjaGVbaV0ucG9pbnRlcklkKXt0aGlzLl9ldkNhY2hlW2ldPXQ7YnJlYWt9aWYoMj09dGhpcy5fZXZDYWNoZS5sZW5ndGgpe3ZhciBlPU1hdGguYWJzKHRoaXMuX2V2Q2FjaGVbMF0uY2xpZW50WC10aGlzLl9ldkNhY2hlWzFdLmNsaWVudFgpO2NvbnN0IHQ9KHRoaXMuX2V2Q2FjaGVbMF0uY2xpZW50WCt0aGlzLl9ldkNhY2hlWzFdLmNsaWVudFgpLzIsaT0odGhpcy5fZXZDYWNoZVswXS5jbGllbnRZK3RoaXMuX2V2Q2FjaGVbMV0uY2xpZW50WSkvMixzPXRoaXMuZ2V0VHJhbnNmb3JtZWRQb2ludCh0LGkpO2lmKHRoaXMucHJldkRpZmY+MCl7Y29uc3QgdD1lPnRoaXMucHJldkRpZmY8MD8xK3RoaXMuX3NjYWxlTGltaXRzLnNwZWVkOjEtdGhpcy5fc2NhbGVMaW1pdHMuc3BlZWQsaT10aGlzLl9jdHguZ2V0VHJhbnNmb3JtKCkuYSp0O2k+dGhpcy5fc2NhbGVMaW1pdHMubWluJiZpPHRoaXMuX3NjYWxlTGltaXRzLm1heCYmKHRoaXMuX2N0eC50cmFuc2xhdGUocy54LHMueSksdGhpcy5fY3R4LnNjYWxlKHQsdCksdGhpcy5fY3R4LnRyYW5zbGF0ZSgtcy54LC1zLnkpKX10aGlzLnByZXZEaWZmPWV9fSx0aGlzLl9lbC5vbnBvaW50ZXJ1cD1wLHRoaXMuX2VsLm9ucG9pbnRlcmNhbmNlbD1wLHRoaXMuX2VsLm9ucG9pbnRlcm91dD1wLHRoaXMuX2VsLm9ucG9pbnRlcmxlYXZlPXA7d2luZG93Lm9ucmVzaXplPXQ9Pnt0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLndpZHRoPXRoaXMuX2VsLnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGgsdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQ9dGhpcy5fZWwucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQsdGhpcy5fb2Zmc2NyZWVuQ2FudmFzPyh0aGlzLl9vZmZzY3JlZW5DYW52YXMud2lkdGg9dGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCx0aGlzLl9vZmZzY3JlZW5DYW52YXMuaGVpZ2h0PXRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24uaGVpZ2h0KToodGhpcy5fZWwud2lkdGg9dGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCx0aGlzLl9lbC5oZWlnaHQ9dGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQpfSx0aGlzLnN0YXJ0KCl9Y2xlYXJGcmFtZSgpe3RoaXMuX2N0eC5zYXZlKCksdGhpcy5fY3R4LnNldFRyYW5zZm9ybSgxLDAsMCwxLDAsMCksdGhpcy5fY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5fZWwud2lkdGgsdGhpcy5fZWwuaGVpZ2h0KSx0aGlzLl9jdHgucmVzdG9yZSgpfXN0YXJ0KCl7c2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLmRyYXcoKX0sMWUzL3RoaXMuX2Zwcyl9ZHJhdygpe3RoaXMuY2xlYXJGcmFtZSgpLHRoaXMuX2VudGl0eU1hbmFnZXIuZW50aXRpZXMuZm9yRWFjaCh0PT57dC5kcmF3KHRoaXMuX2N0eCl9KX1nZXRUcmFuc2Zvcm1lZFBvaW50KHQsaSl7Y29uc3QgZT10aGlzLl9jdHguZ2V0VHJhbnNmb3JtKCkscz0xL2UuYTtyZXR1cm57eDpzKnQtcyplLmUseTpzKmktcyplLmZ9fXNhdmVBc0ltYWdlKHQpe3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuZG93bmxvYWQ9dCtcIi5wbmdcIixpLmhyZWY9dGhpcy5fZWwudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpLnJlcGxhY2UoXCJpbWFnZS9wbmdcIixcImltYWdlL29jdGV0LXN0cmVhbVwiKSxpLmNsaWNrKCl9Z2V0IGN0eCgpe3JldHVybiB0aGlzLl9jdHh9Z2V0IG1vdXNlKCl7cmV0dXJuIHRoaXMuX21vdXNlfWdldCBlbnRpdHlNYW5hZ2VyKCl7cmV0dXJuIHRoaXMuX2VudGl0eU1hbmFnZXJ9fWNvbnN0IGQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0PUpTT04uc3RyaW5naWZ5KHQsdm9pZCAwLDIpKSwodD10LnJlcGxhY2UoLyYvZyxcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvPi9nLFwiJmd0O1wiKSkucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cXFxcXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/KS9nLChmdW5jdGlvbih0KXt2YXIgaT1cIm51bWJlclwiO3JldHVybi9eXCIvLnRlc3QodCk/aT0vOiQvLnRlc3QodCk/XCJrZXlcIjpcInN0cmluZ1wiOi90cnVlfGZhbHNlLy50ZXN0KHQpP2k9XCJib29sZWFuXCI6L251bGwvLnRlc3QodCkmJihpPVwibnVsbFwiKSwnPHNwYW4gY2xhc3M9XCInK2krJ1wiPicrdCtcIjwvc3Bhbj5cIn0pKX07Y2xhc3MgY3tjb25zdHJ1Y3Rvcih7dG9wOnQscmlnaHQ6aSxib3R0b206ZSxsZWZ0OnN9KXt0aGlzLl90b3A9dCx0aGlzLl9yaWdodD1pLHRoaXMuX2JvdHRvbT1lLHRoaXMuX2xlZnQ9c31nZXQgdG9wKCl7cmV0dXJuIHRoaXMuX3RvcH1nZXQgcmlnaHQoKXtyZXR1cm4gdGhpcy5fcmlnaHR9Z2V0IGJvdHRvbSgpe3JldHVybiB0aGlzLl9ib3R0b219Z2V0IGxlZnQoKXtyZXR1cm4gdGhpcy5fbGVmdH1zZXQgdG9wKHQpe3RoaXMuX3RvcD10fXNldCByaWdodCh0KXt0aGlzLl9yaWdodD10fXNldCBib3R0b20odCl7dGhpcy5fYm90dG9tPXR9c2V0IGxlZnQodCl7dGhpcy5fbGVmdD10fX1jbGFzcyBne2NvbnN0cnVjdG9yKCl7dGhpcy5jYWxsYmFja3M9e319b24odCxpKXt0aGlzLmNhbGxiYWNrc1t0XXx8KHRoaXMuY2FsbGJhY2tzW3RdPVtdKSx0aGlzLmNhbGxiYWNrc1t0XS5wdXNoKGkpfWVtaXQodCxpKXtsZXQgZT10aGlzLmNhbGxiYWNrc1t0XTtlJiZlLmZvckVhY2godD0+dChpKSl9fWNsYXNzIHV7c3RhdGljIGdldCBNQVhfV0lEVEgoKXtyZXR1cm4gMzUwfXN0YXRpYyBnZXQgUEFERElORygpe3JldHVybiBuZXcgYyh7dG9wOjAscmlnaHQ6MCxib3R0b206MCxsZWZ0OjB9KX1jb25zdHJ1Y3Rvcih7bmFtZTp0LHBhZGRpbmc6aSxkaW1lbnNpb246ZSxwb3NpdGlvbjpyLHJvdGF0aW9uOm8scGFyZW50Om59LGEpe3RoaXMuX2V2ZW50RW1pdHRlcj1uZXcgZyx0aGlzLl9pZD0rbmV3IERhdGUrMWU1Kk1hdGgucmFuZG9tKCksdGhpcy5fbmFtZT10LHRoaXMuX3NlbGVjdGVkPSExLHRoaXMuX2hvdmVyPSExLHRoaXMuX3RyYW5zZm9ybT1uZXcgaCh7cG9zaXRpb246cnx8bnVsbCxkaW1lbnNpb246ZXx8bnVsbCxyb3RhdGlvbjpvfHxudWxsfSksdGhpcy5fb2xkUG9zaXRpb249cj9uZXcgcyhyKTpudWxsLHRoaXMuX3BhZGRpbmc9aT9uZXcgYyhpKTp1LlBBRERJTkcsdGhpcy5fcGFyZW50PW4sdGhpcy5fY2hpbGRyZW49W10sdGhpcy5fY2FudmFzPWF8fHZvaWQgMH1jcmVhdGVFdmVudCh0KXtyZXR1cm4gbmV3IEN1c3RvbUV2ZW50KHQse2RldGFpbDp0aGlzfSl9Y29udGFpbnModCl7cmV0dXJuISF0aGlzLl9zaGFwZSYmdGhpcy5fY2FudmFzLmN0eC5pc1BvaW50SW5QYXRoKHRoaXMuX3NoYXBlLnBhdGgsdC54LHQueSxcIm5vbnplcm9cIil9dG9TdHJpbmcoKXtyZXR1cm57aWQ6dGhpcy5faWQsbmFtZTp0aGlzLl9uYW1lfX1wcmV0dGllcigpe3JldHVybiBkKHRoaXMudG9TdHJpbmcoKSl9b24odCxpKXt0aGlzLl9ldmVudEVtaXR0ZXIub24odCxpKX1lbWl0KHQsaSl7dGhpcy5fZXZlbnRFbWl0dGVyLmVtaXQodCxpKX1zZXQgc3RhdGUodCl7dGhpcy5zdGF0ZXMuaW5jbHVkZXModCkmJnRoaXMuZW1pdCh0LHtkZXRhaWw6dGhpc30pfWdldCBzaGFwZSgpe3JldHVybiB0aGlzLl9zaGFwZX1nZXQgcGFkZGluZygpe3JldHVybiB0aGlzLl9wYWRkaW5nfWdldCBkaW1lbnNpb24oKXtyZXR1cm4gdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbn1nZXQgcG9zaXRpb24oKXtyZXR1cm4gdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9ufWdldCBjaGlsZHJlbigpe3JldHVybiB0aGlzLl9jaGlsZHJlbn1nZXQgcGFyZW50KCl7cmV0dXJuIHRoaXMuX3BhcmVudH1zZXQgcG9zaXRpb24odCl7dGhpcy5fb2xkUG9zaXRpb249bmV3IHModGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uKSx0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueD10LngsdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnk9dC55fWdldCBvbGRQb3NpdGlvbigpe3JldHVybiB0aGlzLl9vbGRQb3NpdGlvbn19Y29uc3QgXz10PT50LnJlcGxhY2UoL1xccy9nLFwiXCIpO2NsYXNzIHB7c3RhdGljIGdldCBodG1sQ29sb3JzKCl7cmV0dXJue0lORElBTlJFRDpcInJnYigyMDUsIDkyLCA5MilcIixMSUdIVENPUkFMOlwicmdiKDI0MCwgMTI4LCAxMjgpXCIsU0FMTU9OOlwicmdiKDI1MCwgMTI4LCAxMTQpXCIsREFSS1NBTE1PTjpcInJnYigyMzMsIDE1MCwgMTIyKVwiLExJR0hUU0FMTU9OOlwicmdiKDI1NSwgMTYwLCAxMjIpXCIsQ1JJTVNPTjpcInJnYigyMjAsIDIwLCA2MClcIixSRUQ6XCJyZ2IoMjU1LCAwLCAwKVwiLEZJUkVCUklDSzpcInJnYigxNzgsIDM0LCAzNClcIixEQVJLUkVEOlwicmdiKDEzOSwgMCwgMClcIixQSU5LOlwicmdiKDI1NSwgMTkyLCAyMDMpXCIsTElHSFRQSU5LOlwicmdiKDI1NSwgMTgyLCAxOTMpXCIsSE9UUElOSzpcInJnYigyNTUsIDEwNSwgMTgwKVwiLERFRVBQSU5LOlwicmdiKDI1NSwgMjAsIDE0NylcIixNRURJVU1WSU9MRVRSRUQ6XCJyZ2IoMTk5LCAyMSwgMTMzKVwiLFBBTEVWSU9MRVRSRUQ6XCJyZ2IoMjE5LCAxMTIsIDE0NylcIixMSUdIVFNBTE1PTjpcInJnYigyNTUsIDE2MCwgMTIyKVwiLENPUkFMOlwicmdiKDI1NSwgMTI3LCA4MClcIixUT01BVE86XCJyZ2IoMjU1LCA5OSwgNzEpXCIsT1JBTkdFUkVEOlwicmdiKDI1NSwgNjksIDApXCIsREFSS09SQU5HRTpcInJnYigyNTUsIDE0MCwgMClcIixPUkFOR0U6XCJyZ2IoMjU1LCAxNjUsIDApXCIsR09MRDpcInJnYigyNTUsIDIxNSwgMClcIixZRUxMT1c6XCJyZ2IoMjU1LCAyNTUsIDApXCIsTElHSFRZRUxMT1c6XCJyZ2IoMjU1LCAyNTUsIDIyNClcIixMRU1PTkNISUZGT046XCJyZ2IoMjU1LCAyNTAsIDIwNSlcIixMSUdIVEdPTERFTlJPRFlFTExPVzpcInJnYigyNTAsIDI1MCwgMjEwKVwiLFBBUEFZQVdISVA6XCJyZ2IoMjU1LCAyMzksIDIxMylcIixNT0NDQVNJTjpcInJnYigyNTUsIDIyOCwgMTgxKVwiLFBFQUNIUFVGRjpcInJnYigyNTUsIDIxOCwgMTg1KVwiLFBBTEVHT0xERU5ST0Q6XCJyZ2IoMjM4LCAyMzIsIDE3MClcIixLSEFLSTpcInJnYigyNDAsIDIzMCwgMTQwKVwiLERBUktLSEFLSTpcInJnYigxODksIDE4MywgMTA3KVwiLExBVkVOREVSOlwicmdiKDIzMCwgMjMwLCAyNTApXCIsVEhJU1RMRTpcInJnYigyMTYsIDE5MSwgMjE2KVwiLFBMVU06XCJyZ2IoMjIxLCAxNjAsIDIyMSlcIixWSU9MRVQ6XCJyZ2IoMjM4LCAxMzAsIDIzOClcIixPUkNISUQ6XCJyZ2IoMjE4LCAxMTIsIDIxNClcIixGVUNIU0lBOlwicmdiKDI1NSwgMCwgMjU1KVwiLE1BR0VOVEE6XCJyZ2IoMjU1LCAwLCAyNTUpXCIsTUVESVVNT1JDSElEOlwicmdiKDE4NiwgODUsIDIxMSlcIixNRURJVU1QVVJQTEU6XCJyZ2IoMTQ3LCAxMTIsIDIxOSlcIixSRUJFQ0NBUFVSUExFOlwicmdiKDEwMiwgNTEsIDE1MylcIixCTFVFVklPTEVUOlwicmdiKDEzOCwgNDMsIDIyNilcIixEQVJLVklPTEVUOlwicmdiKDE0OCwgMCwgMjExKVwiLERBUktPUkNISUQ6XCJyZ2IoMTUzLCA1MCwgMjA0KVwiLERBUktNQUdFTlRBOlwicmdiKDEzOSwgMCwgMTM5KVwiLFBVUlBMRTpcInJnYigxMjgsIDAsIDEyOClcIixJTkRJR086XCJyZ2IoNzUsIDAsIDEzMClcIixTTEFURUJMVUU6XCJyZ2IoMTA2LCA5MCwgMjA1KVwiLERBUktTTEFURUJMVUU6XCJyZ2IoNzIsIDYxLCAxMzkpXCIsTUVESVVNU0xBVEVCTFVFOlwicmdiKDEyMywgMTA0LCAyMzgpXCIsR1JFRU5ZRUxMT1c6XCJyZ2IoMTczLCAyNTUsIDQ3KVwiLENIQVJUUkVVU0U6XCJyZ2IoMTI3LCAyNTUsIDApXCIsTEFXTkdSRUVOOlwicmdiKDEyNCwgMjUyLCAwKVwiLExJTUU6XCJyZ2IoMCwgMjU1LCAwKVwiLExJTUVHUkVFTjpcInJnYig1MCwgMjA1LCA1MClcIixQQUxFR1JFRU46XCJyZ2IoMTUyLCAyNTEsIDE1MilcIixMSUdIVEdSRUVOOlwicmdiKDE0NCwgMjM4LCAxNDQpXCIsTUVESVVNU1BSSU5HR1JFRU46XCJyZ2IoMCwgMjUwLCAxNTQpXCIsU1BSSU5HR1JFRU46XCJyZ2IoMCwgMjU1LCAxMjcpXCIsTUVESVVNU0VBR1JFRU46XCJyZ2IoNjAsIDE3OSwgMTEzKVwiLFNFQUdSRUVOOlwicmdiKDQ2LCAxMzksIDg3KVwiLEZPUkVTVEdSRUVOOlwicmdiKDM0LCAxMzksIDM0KVwiLEdSRUVOOlwicmdiKDAsIDEyOCwgMClcIixEQVJLR1JFRU46XCJyZ2IoMCwgMTAwLCAwKVwiLFlFTExPV0dSRUVOOlwicmdiKDE1NCwgMjA1LCA1MClcIixPTElWRURSQUI6XCJyZ2IoMTA3LCAxNDIsIDM1KVwiLE9MSVZFOlwicmdiKDEyOCwgMTI4LCAwKVwiLERBUktPTElWRUdSRUVOOlwicmdiKDg1LCAxMDcsIDQ3KVwiLE1FRElVTUFRVUFNQVJJTkU6XCJyZ2IoMTAyLCAyMDUsIDE3MClcIixEQVJLU0VBR1JFRU46XCJyZ2IoMTQzLCAxODgsIDEzOSlcIixMSUdIVFNFQUdSRUVOOlwicmdiKDMyLCAxNzgsIDE3MClcIixEQVJLQ1lBTjpcInJnYigwLCAxMzksIDEzOSlcIixURUFMOlwicmdiKDAsIDEyOCwgMTI4KVwiLEFRVUE6XCJyZ2IoMCwgMjU1LCAyNTUpXCIsQ1lBTjpcInJnYigwLCAyNTUsIDI1NSlcIixMSUdIVENZQU46XCJyZ2IoMjI0LCAyNTUsIDI1NSlcIixQQUxFVFVSUVVPSVNFOlwicmdiKDE3NSwgMjM4LCAyMzgpXCIsQVFVQU1BUklORTpcInJnYigxMjcsIDI1NSwgMjEyKVwiLFRVUlFVT0lTRTpcInJnYig2NCwgMjI0LCAyMDgpXCIsTUVESVVNVFVSUVVPSVNFOlwicmdiKDcyLCAyMDksIDIwNClcIixEQVJLVFVSUVVPSVNFOlwicmdiKDAsIDIwNiwgMjA5KVwiLENBREVUQkxVRTpcInJnYig5NSwgMTU4LCAxNjApXCIsU1RFRUxCTFVFOlwicmdiKDcwLCAxMzAsIDE4MClcIixMSUdIVFNURUVMQkxVRTpcInJnYigxNzYsIDE5NiwgMjIyKVwiLFBPV0RFUkJMVUU6XCJyZ2IoMTc2LCAyMjQsIDIzMClcIixMSUdIVEJMVUU6XCJyZ2IoMTczLCAyMTYsIDIzMClcIixTS1lCTFVFOlwicmdiKDEzNSwgMjA2LCAyMzUpXCIsTElHSFRTS1lCTFVFOlwicmdiKDEzNSwgMjA2LCAyNTApXCIsREVFUFNLWUJMVUU6XCJyZ2IoMCwgMTkxLCAyNTUpXCIsRE9ER0VSQkxVRTpcInJnYigzMCwgMTQ0LCAyNTUpXCIsQ09STkZMT1dFUkJMVUU6XCJyZ2IoMTAwLCAxNDksIDIzNylcIixNRURJVU1TTEFURUJMVUU6XCJyZ2IoMTIzLCAxMDQsIDIzOClcIixST1lBTEJMVUU6XCJyZ2IoNjUsIDEwNSwgMjI1KVwiLEJMVUU6XCJyZ2IoMCwgMCwgMjU1KVwiLE1FRElVTUJMVUU6XCJyZ2IoMCwgMCwgMjA1KVwiLERBUktCTFVFOlwicmdiKDAsIDAsIDEzOSlcIixOQVZZOlwicmdiKDAsIDAsIDEyOClcIixNSUROSUdIVEJMVUU6XCJyZ2IoMjUsIDI1LCAxMTIpXCIsQ09STlNJTEs6XCJyZ2IoMjU1LCAyNDgsIDIyMClcIixCTEFOQ0hFREFMTU9ORDpcInJnYigyNTUsIDIzNSwgMjA1KVwiLEJJU1FVRTpcInJnYigyNTUsIDIyOCwgMTk2KVwiLE5BVkFKT1dISVRFOlwicmdiKDI1NSwgMjIyLCAxNzMpXCIsV0hFQVQ6XCJyZ2IoMjQ1LCAyMjIsIDE3OSlcIixCVVJMWVdPT0Q6XCJyZ2IoMjIyLCAxODQsIDEzNSlcIixUQU46XCJyZ2IoMjEwLCAxODAsIDE0MClcIixST1NZQlJPV046XCJyZ2IoMTg4LCAxNDMsIDE0MylcIixTQU5EWUJST1dOOlwicmdiKDI0NCwgMTY0LCA5NilcIixHT0xERU5ST0Q6XCJyZ2IoMjE4LCAxNjUsIDMyKVwiLERBUktHT0xERU5ST0Q6XCJyZ2IoMTg0LCAxMzQsIDExKVwiLFBFUlU6XCJyZ2IoMjA1LCAxMzMsIDYzKVwiLENIT0NPTEFURTpcInJnYigyMTAsIDEwNSwgMzApXCIsU0FERExFQlJPV046XCJyZ2IoMTM5LCA2OSwgMTkpXCIsU0lFTk5BOlwicmdiKDE2MCwgODIsIDQ1KVwiLEJST1dOOlwicmdiKDE2NSwgNDIsIDQyKVwiLE1BUk9PTjpcInJnYigxMjgsIDAsIDApXCIsV0hJVEU6XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixTTk9XOlwicmdiKDI1NSwgMjUwLCAyNTApXCIsSE9ORVlERVc6XCJyZ2IoMjQwLCAyNTUsIDI0MClcIixNSU5UQ1JFQU06XCJyZ2IoMjQ1LCAyNTUsIDI1MClcIixBWlVSRTpcInJnYigyNDAsIDI1NSwgMjU1KVwiLEFMSUNFQkxVRTpcInJnYigyNDAsIDI0OCwgMjU1KVwiLEdIT1NUV0hJVEU6XCJyZ2IoMjQ4LCAyNDgsIDI1NSlcIixXSElURVNNT0tFOlwicmdiKDI0NSwgMjQ1LCAyNDUpXCIsU0VBU0hFTEw6XCJyZ2IoMjU1LCAyNDUsIDIzOClcIixCRUlHRTpcInJnYigyNDUsIDI0NSwgMjIwKVwiLE9MRExBQ0U6XCJyZ2IoMjUzLCAyNDUsIDIzMClcIixGTE9SQUxXSElURTpcInJnYigyNTUsIDI1MCwgMjQwKVwiLElWT1JZOlwicmdiKDI1NSwgMjU1LCAyNDApXCIsQU5USVFVRVdISVRFOlwicmdiKDI1MCwgMjM1LCAyMTUpXCIsTElORU46XCJyZ2IoMjUwLCAyNDAsIDIzMClcIixMQVZFTkRFUkJMVVNIOlwicmdiKDI1NSwgMjQwLCAyNDUpXCIsTUlTVFlST1NFOlwicmdiKDI1NSwgMjI4LCAyMjUpXCIsR0FJTlNCT1JPOlwicmdiKDIyMCwgMjIwLCAyMjApXCIsTElHSFRHUkFZOlwicmdiKDIxMSwgMjExLCAyMTEpXCIsU0lMVkVSOlwicmdiKDE5MiwgMTkyLCAxOTIpXCIsREFSS0dSQVk6XCJyZ2IoMTY5LCAxNjksIDE2OSlcIixHUkFZOlwicmdiKDEyOCwgMTI4LCAxMjgpXCIsRElNR1JBWTpcInJnYigxMDUsIDEwNSwgMTA1KVwiLExJR0hUU0xBVEVHUkFZOlwicmdiKDExOSwgMTM2LCAxNTMpXCIsU0xBVEVHUkFZOlwicmdiKDExMiwgMTI4LCAxNDQpXCIsREFSS1NMQVRFR1JBWTpcInJnYig0NywgNzksIDc5KVwiLEJMQUNLOlwicmdiKDAsIDAsIDApXCJ9fXN0YXRpYyBpc1JHQih0KXtyZXR1cm4gbnVsbCE9PXQubWF0Y2goL15yZ2JcXChbMC05XXsxLDN9LFswLTldezEsM30sWzAtOV17MSwzfVxcKSQvZ2kpfXN0YXRpYyBpc1JHQkEodCl7cmV0dXJuIG51bGwhPT10Lm1hdGNoKC9ecmdiYVxcKChcXGQrKSwoXFxkKyksKFxcZCspLChcXGQrXFwuXFxkKylcXCkkL2dpKX1zdGF0aWMgaXNIRVgodCl7cmV0dXJuIG51bGwhPT10Lm1hdGNoKC9eIyhbQS1GYS1mMC05XXs2fXxbQS1GYS1mMC05XXszfSkkL2dpKX1zdGF0aWMgc3RyaW5nMkNvbG9yKHQpe2NvbnN0IGk9cC5odG1sQ29sb3JzW3QudG9VcHBlckNhc2UoKV07aWYoaSYmKHQ9aSksdD1fKHQpLHAuaXNSR0IodCl8fHAuaXNSR0JBKHQpKXtsZXQgaT10LnJlcGxhY2UoXCJyZ2IoXCIsXCJcIikucmVwbGFjZShcInJnYmEoXCIsXCJcIikucmVwbGFjZShcIilcIixcIlwiKS5zcGxpdChcIixcIik7cmV0dXJue3JlZDppWzBdLGdyZWVuOmlbMV0sYmx1ZTppWzJdLGFscGhhOmlbM118fDF9fWlmKHAuaXNIRVgodCkpe2NvbnN0IGk9KHQ9dC5yZXBsYWNlKFwiI1wiLFwiXCIpKS5sZW5ndGgvMztyZXR1cm57cmVkOnBhcnNlSW50KHQuc3Vic3RyaW5nKDAsaSksMTYpLGdyZWVuOnBhcnNlSW50KHQuc3Vic3RyaW5nKGksMippKSwxNiksYmx1ZTpwYXJzZUludCh0LnN1YnN0cmluZygyKmksMyppKSwxNiksYWxwaGE6MX19cmV0dXJue3JlZDowLGdyZWVuOjAsYmx1ZTowLGFscGhhOjB9fXN0YXRpYyByZ2JUb0hleCh0KXtjb25zdCBpPSh0PXQucmVwbGFjZSgvXFxzL2csXCJcIikpLnJlcGxhY2UoXCJyZ2IoXCIsXCJcIikucmVwbGFjZShcInJnYmEoXCIsXCJcIikucmVwbGFjZShcIilcIixcIlwiKS5zcGxpdChcIixcIik7bGV0IGU9XCIjXCI7cmV0dXJuIGkuZm9yRWFjaCgodCxpKT0+e2lmKDMhPWkpe2NvbnN0IGk9TnVtYmVyKHQpLnRvU3RyaW5nKDE2KTtlKz0yPT09aS5sZW5ndGg/aTpcIjBcIitpfX0pLGV9Y29uc3RydWN0b3IodCl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PXAuc3RyaW5nMkNvbG9yKHQpKSx0aGlzLl9yZWQ9dC5yZWQsdGhpcy5fZ3JlZW49dC5ncmVlbix0aGlzLl9ibHVlPXQuYmx1ZSx0aGlzLl9hbHBoYT10LmFscGhhfHwxfWdldCByZ2IoKXtyZXR1cm5gcmdiKCR7dGhpcy5fcmVkfSwke3RoaXMuX2dyZWVufSwke3RoaXMuX2JsdWV9KWB9Z2V0IHJnYmEoKXtyZXR1cm5gcmdiYSgke3RoaXMuX3JlZH0sJHt0aGlzLl9ncmVlbn0sJHt0aGlzLl9ibHVlfSwke3RoaXMuX2FscGhhfSlgfWdldCBoZXgoKXtyZXR1cm4gcC5yZ2JUb0hleCh0aGlzLnJnYil9fWNsYXNzIGZ7Y29uc3RydWN0b3Ioe3JhZGl1czp0LGNvbG9yOmksbGluZVdpZHRoOmUsc2VsZWN0ZWQ6cyxob3ZlcjpyfSl7dGhpcy5fcmFkaXVzPXR8fDAsdGhpcy5fbGluZVdpZHRoPWV8fDAsdGhpcy5fY29sb3I9aT9uZXcgcChpKTpudWxsLHRoaXMuX3NlbGVjdGVkPXM/bmV3IGYoe2xpbmVXaWR0aDpzLmxpbmVXaWR0aCxjb2xvcjpzLmNvbG9yfSk6bnVsbCx0aGlzLl9ob3Zlcj1yP25ldyBmKHtsaW5lV2lkdGg6ci5saW5lV2lkdGgsY29sb3I6ci5jb2xvcn0pOm51bGx9Z2V0IHJhZGl1cygpe3JldHVybiB0aGlzLl9yYWRpdXN9c2V0IHJhZGl1cyh0KXt0aGlzLl9yYWRpdXM9dH1nZXQgY29sb3IoKXtyZXR1cm4gdGhpcy5fY29sb3J9c2V0IGNvbG9yKHQpe3RoaXMuX2NvbG9yPW5ldyBwKHQpfWdldCBzZWxlY3RlZCgpe3JldHVybiB0aGlzLl9zZWxlY3RlZH1nZXQgaG92ZXIoKXtyZXR1cm4gdGhpcy5faG92ZXJ9Z2V0IGxpbmVXaWR0aCgpe3JldHVybiB0aGlzLl9saW5lV2lkdGh9c2V0IGxpbmVXaWR0aCh0KXt0aGlzLl9saW5lV2lkdGg9dH19Y2xhc3MgYntjb25zdHJ1Y3Rvcih7b2Zmc2V0WDp0LG9mZnNldFk6aSxjb2xvcjplLGJsdXI6c30pe3RoaXMuX29mZnNldFg9dCx0aGlzLl9vZmZzZXRZPWksdGhpcy5fY29sb3I9bmV3IHAoZSksdGhpcy5fYmx1cj1zfWdldCBvZmZzZXRYKCl7cmV0dXJuIHRoaXMuX29mZnNldFh9Z2V0IG9mZnNldFkoKXtyZXR1cm4gdGhpcy5fb2Zmc2V0WX1nZXQgY29sb3IoKXtyZXR1cm4gdGhpcy5fY29sb3J9c2V0IGNvbG9yKHQpe3RoaXMuX2NvbG9yPW5ldyBwKHQpfWdldCBibHVyKCl7cmV0dXJuIHRoaXMuX2JsdXJ9fWNsYXNzIG17Y29uc3RydWN0b3Ioe3NyYzp0LHBvc2l0aW9uOmksZGltZW5zaW9uOmUscm90YXRpb246cyxzY2FsZTpyfSl7dGhpcy5fdHJhbnNmb3JtPW5ldyBoKHtwb3NpdGlvbjppLGRpbWVuc2lvbjplLHJvdGF0aW9uOnMsc2NhbGU6cn0pLHRoaXMuX2ltYWdlPWU/bmV3IEltYWdlKHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24ud2lkdGgsdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQpOm5ldyBJbWFnZSx0aGlzLl9zcmM9dCx0aGlzLl9pbWFnZS5zcmM9dGhpcy5fc3JjLHRoaXMuX2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCk9Pnt0aGlzLl9sb2FkZWQ9ITB9KSx0aGlzLl9sb2FkZWQ9ITF9c2V0IHNyYyh0KXt0aGlzLl9zcmM9dCx0aGlzLl9sb2FkZWQ9ITF9Z2V0IHRyYW5zZm9ybSgpe3JldHVybiB0aGlzLl90cmFuc2Zvcm19ZHJhdyh0KXt0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uP3QuZHJhd0ltYWdlKHRoaXMuX2ltYWdlLHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54LHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55LHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24ud2lkdGgsdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQpOnQuZHJhd0ltYWdlKHRoaXMuX2ltYWdlLHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54LHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55KX19Y2xhc3MgRXtjb25zdHJ1Y3Rvcih7Y29sb3I6dCxpbWFnZTppfSl7dGhpcy5fY29sb3I9dD9uZXcgcCh0KTpudWxsLHRoaXMuX2ltYWdlPWk/bmV3IG0oe2ltYWdlOml9KTpudWxsfWdldCBjb2xvcigpe3JldHVybiB0aGlzLl9jb2xvcn1zZXQgY29sb3IodCl7dGhpcy5fY29sb3I9bmV3IHAodCl9Z2V0IGltYWdlKCl7cmV0dXJuIHRoaXMuX2ltYWdlfXNldCBJbWFnZSh0KXt0aGlzLl9pbWFnZT1uZXcgbSh0KX19Y2xhc3MgeXtzdGF0aWMgZ2V0IFJPVEFUSU9OKCl7cmV0dXJuIG5ldyBSb3RhdGlvbih7YW5nbGU6MH0pfXN0YXRpYyBnZXQgQkFDS0dST1VORCgpe3JldHVybiBuZXcgRSh7Y29sb3I6XCJyZ2IoMjU1LDI1NSwyNTUpXCJ9KX1zdGF0aWMgZ2V0IFNIQURPVygpe3JldHVybiBuZXcgYih7b2Zmc2V0WDowLG9mZnNldFk6MCxjb2xvcjpcInJnYigwLDAsMClcIixibHVyOjB9KX1zdGF0aWMgZ2V0IEJPUkRFUigpe3JldHVybiBuZXcgZih7cmFkaXVzOjAsbGluZVdpZHRoOjF9KX1jb25zdHJ1Y3Rvcih7cG9zaXRpb246dCxkaW1lbnNpb246aSxyb3RhdGlvbjplLHNjYWxlOnMsYmFja2dyb3VuZDpyLGJvcmRlcjpvLHNoYWRvdzpufSl7dGhpcy5fdHJhbnNmb3JtPW5ldyBoKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsc2NhbGU6c30pLHRoaXMuX2JvcmRlcj1vP25ldyBmKG8pOnkuQk9SREVSLHRoaXMuX2JhY2tncm91bmQ9cj9uZXcgRShyKTp5LkJBQ0tHUk9VTkQsdGhpcy5fc2hhZG93PW4/bmV3IGIobik6bnVsbCx0aGlzLl9wYXRoPW51bGx9ZHJhdyh0KXt0aGlzLl9zaGFkb3cmJih0LnNoYWRvd0NvbG9yPXRoaXMuX3NoYWRvdy5jb2xvci5yZ2JhLHQuc2hhZG93Qmx1cj10aGlzLl9zaGFkb3cuYmx1cix0LnNoYWRvd09mZnNldFg9dGhpcy5fc2hhZG93Lm9mZnNldFgsdC5zaGFkb3dPZmZzZXRZPXRoaXMuX3NoYWRvdy5vZmZzZXRZKSx0aGlzLl9ib3JkZXImJnRoaXMuX2JvcmRlci5jb2xvciYmKHQuc3Ryb2tlU3R5bGU9dGhpcy5fYm9yZGVyLmNvbG9yLnJnYmEpLHRoaXMuX2JvcmRlciYmdGhpcy5fYm9yZGVyLmxpbmVXaWR0aCYmKHQubGluZVdpZHRoPXRoaXMuX2JvcmRlci5saW5lV2lkdGgpLHRoaXMuX2JhY2tncm91bmQmJnRoaXMuX2JhY2tncm91bmQuY29sb3ImJih0LmZpbGxTdHlsZT10aGlzLl9iYWNrZ3JvdW5kLmNvbG9yLnJnYmEpfWdldCBzaWRlcygpe2NvbnN0IHQ9dGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aC8yLGk9dGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQvMjtyZXR1cm57dG9wOnt4OnRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54K3QseTp0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueX0scmlnaHQ6e3g6dGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngrdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCx5OnRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55K2l9LGJvdHRvbTp7eDp0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCt0LHk6dGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkrdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHR9LGxlZnQ6e3g6dGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLngseTp0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueStpfX19Z2V0IHBhdGgoKXtyZXR1cm4gdGhpcy5fcGF0aH1zZXQgcGF0aCh0KXt0aGlzLl9wYXRoPXR9Z2V0IGJvcmRlcigpe3JldHVybiB0aGlzLl9ib3JkZXJ9Z2V0IGJhY2tncm91bmQoKXtyZXR1cm4gdGhpcy5fYmFja2dyb3VuZH1nZXQgcm90YXRpb24oKXtyZXR1cm4gdGhpcy5fdHJhbnNmb3JtLnJvdGF0aW9ufWdldCByb3RhdGUoKXtyZXR1cm4gdGhpcy5fdHJhbnNmb3JtLnJvdGF0aW9uJiZ0aGlzLl90cmFuc2Zvcm0ucm90YXRpb24uYW5nbGU+MH1nZXQgc2hhZG93KCl7cmV0dXJuIHRoaXMuX3NoYWRvd31zZXQgcm90YXRpb24odCl7dGhpcy5fdHJhbnNmb3JtLnJvdGF0aW9uLmFuZ2xlPXR9Z2V0IHBvc2l0aW9uKCl7cmV0dXJuIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbn1zZXQgcG9zaXRpb24odCl7dGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLng9dC54LHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55PXQueX1nZXQgZGltZW5zaW9uKCl7cmV0dXJuIHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb259fWNsYXNzIHYgZXh0ZW5kcyB5e2NvbnN0cnVjdG9yKHtwb3NpdGlvbjp0LHJvdGF0aW9uOmksYm9yZGVyOmUsYmFja2dyb3VuZDpzLGRpYW1ldGVyOnIsc2hhZG93Om99KXtzdXBlcih7cG9zaXRpb246dCxyb3RhdGlvbjppLGJvcmRlcjplLGJhY2tncm91bmQ6cyxzaGFkb3c6b30pLHRoaXMuX2RpYW1ldGVyPXJ9ZHJhdyh0KXt0LnNhdmUoKSxzdXBlci5kcmF3KHQpLHRoaXMucm90YXRlJiYodC50cmFuc2xhdGUodGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSksdC5yb3RhdGUodGhpcy5yb3RhdGlvbi5hbmdsZSksdC50cmFuc2xhdGUoLXRoaXMucG9zaXRpb24ueCwtdGhpcy5wb3NpdGlvbi55KSksdC5iZWdpblBhdGgoKSx0aGlzLl9wYXRoPW5ldyBQYXRoMkQsdGhpcy5fcGF0aC5hcmModGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSx0aGlzLl9kaWFtZXRlciwwLDIqTWF0aC5QSSksdGhpcy5fcGF0aC5jbG9zZVBhdGgoKSx0LnN0cm9rZSh0aGlzLl9wYXRoKSx0LmZpbGwodGhpcy5fcGF0aCksdC5zaGFkb3dDb2xvcj0wLHQuc2hhZG93T2Zmc2V0WD0wLHQuc2hhZG93T2Zmc2V0WT0wLHQuc3Ryb2tlKHRoaXMuX3BhdGgpLHQucmVzdG9yZSgpfX1jbGFzcyB3IGV4dGVuZHMgeXtjb25zdHJ1Y3Rvcih7cG9zaXRpb246dCxkaW1lbnNpb246aSxyb3RhdGlvbjplLGJvcmRlcjpzLGJhY2tncm91bmQ6cixzaGFkb3c6b30pe3N1cGVyKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsYm9yZGVyOnMsYmFja2dyb3VuZDpyLHNoYWRvdzpvfSl9ZHJhdyh0KXtpZih0LnNhdmUoKSxzdXBlci5kcmF3KHQpLHRoaXMucm90YXRlKXtjb25zdCBpPXRoaXMucG9zaXRpb24ueCt0aGlzLmRpbWVuc2lvbi53aWR0aC8yLGU9dGhpcy5wb3NpdGlvbi55K3RoaXMuZGltZW5zaW9uLmhlaWdodC8yO3QudHJhbnNsYXRlKGksZSksdC5yb3RhdGUodGhpcy5yb3RhdGlvbi5hbmdsZSksdC50cmFuc2xhdGUoLWksLWUpfXRoaXMuX3BhdGg9bmV3IFBhdGgyRCx0LmJlZ2luUGF0aCgpLHRoaXMuX3BhdGgubW92ZVRvKHRoaXMuc2lkZXMudG9wLngtdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMudG9wLnkrdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8odGhpcy5zaWRlcy50b3AueCx0aGlzLnNpZGVzLnRvcC55Ky41KnRoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnNpZGVzLnRvcC54K3RoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnNpZGVzLnRvcC55K3RoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5zaWRlcy5yaWdodC54LXRoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnNpZGVzLnJpZ2h0LnktdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8odGhpcy5zaWRlcy5yaWdodC54LHRoaXMuc2lkZXMucmlnaHQueSx0aGlzLnNpZGVzLnJpZ2h0LngtdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMucmlnaHQueSt0aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgubGluZVRvKHRoaXMuc2lkZXMuYm90dG9tLngrdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMuYm90dG9tLnktdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8odGhpcy5zaWRlcy5ib3R0b20ueCx0aGlzLnNpZGVzLmJvdHRvbS55LS41KnRoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnNpZGVzLmJvdHRvbS54LXRoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnNpZGVzLmJvdHRvbS55LXRoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5zaWRlcy5sZWZ0LngrdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMubGVmdC55K3RoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMuc2lkZXMubGVmdC54LHRoaXMuc2lkZXMubGVmdC55LHRoaXMuc2lkZXMubGVmdC54K3RoaXMuYm9yZGVyLnJhZGl1cyx0aGlzLnNpZGVzLmxlZnQueS10aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgubGluZVRvKHRoaXMuc2lkZXMudG9wLngtdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMuc2lkZXMudG9wLnkrdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLmNsb3NlUGF0aCgpLHQuc3Ryb2tlKHRoaXMuX3BhdGgpLHQuZmlsbCh0aGlzLl9wYXRoKSx0LnNoYWRvd0NvbG9yPTAsdC5zaGFkb3dPZmZzZXRYPTAsdC5zaGFkb3dPZmZzZXRZPTAsdC5zdHJva2UodGhpcy5fcGF0aCksdC5yZXN0b3JlKCl9fWNsYXNzIHggZXh0ZW5kcyB5e2NvbnN0cnVjdG9yKHtwb2ludHM6dCxwb3NpdGlvbjppLGRpbWVuc2lvbjplLHJvdGF0aW9uOnMsYm9yZGVyOnIsYmFja2dyb3VuZDpvLHNoYWRvdzpufSl7c3VwZXIoe3Bvc2l0aW9uOmksZGltZW5zaW9uOmUscm90YXRpb246cyxib3JkZXI6cixiYWNrZ3JvdW5kOm8sc2hhZG93Om59KSx0aGlzLl9wb2ludHM9dH1kcmF3KHQpe2lmKHQuc2F2ZSgpLHN1cGVyLmRyYXcodCksdGhpcy5yb3RhdGUpe2NvbnN0IGk9dGhpcy5fcG9zaXRpb24ueCt0aGlzLl9kaW1lbnNpb24ud2lkdGgvMixlPXRoaXMuX3Bvc2l0aW9uLnkrdGhpcy5fZGltZW5zaW9uLmhlaWdodC8yO3QudHJhbnNsYXRlKGksZSksdC5yb3RhdGUodGhpcy5yb3RhdGlvbi5hbmdsZSksdC50cmFuc2xhdGUoLWksLWUpfXRoaXMuX3BhdGg9bmV3IFBhdGgyRCx0LmJlZ2luUGF0aCgpLHRoaXMuX3BhdGgubW92ZVRvKHBvaW50c1swXS54LHBvaW50c1swXS55KSxwb2ludHMuZm9yRWFjaCh0PT57dGhpcy5fcGF0aC5saW5lVG8odC54LHQueSl9KSx0aGlzLl9wYXRoLmNsb3NlUGF0aCgpLHQuc3Ryb2tlKHRoaXMuX3BhdGgpLHQuZmlsbCh0aGlzLl9wYXRoKSx0LnNoYWRvd0NvbG9yPTAsdC5zaGFkb3dPZmZzZXRYPTAsdC5zaGFkb3dPZmZzZXRZPTAsdC5zdHJva2UodGhpcy5fcGF0aCksdC5yZXN0b3JlKCl9fWNsYXNzIEwgZXh0ZW5kcyB5e2NvbnN0cnVjdG9yKHtwb3NpdGlvbjp0LGRpbWVuc2lvbjppLHJvdGF0aW9uOmUsYm9yZGVyOnMsYmFja2dyb3VuZDpyLHNoYWRvdzpvfSl7c3VwZXIoe3Bvc2l0aW9uOnQsZGltZW5zaW9uOmkscm90YXRpb246ZSxib3JkZXI6cyxiYWNrZ3JvdW5kOnIsc2hhZG93Om99KX1kcmF3KHQpe2lmKHQuc2F2ZSgpLHN1cGVyLmRyYXcodCksdGhpcy5yb3RhdGUpe2NvbnN0IGk9dGhpcy5wb3NpdGlvbi54K3RoaXMuZGltZW5zaW9uLndpZHRoLzIsZT10aGlzLnBvc2l0aW9uLnkrdGhpcy5kaW1lbnNpb24uaGVpZ2h0LzI7dC50cmFuc2xhdGUoaSxlKSx0LnJvdGF0ZSh0aGlzLnJvdGF0aW9uLmFuZ2xlKSx0LnRyYW5zbGF0ZSgtaSwtZSl9dGhpcy5fcGF0aD1uZXcgUGF0aDJEO3ZhciBpPXRoaXMucG9zaXRpb24ueCt0aGlzLmRpbWVuc2lvbi53aWR0aCxlPXRoaXMucG9zaXRpb24ueSt0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7dC5iZWdpblBhdGgoKSxcIm9iamVjdFwiPT10eXBlb2YgdGhpcy5ib3JkZXIucmFkaXVzPyh0aGlzLl9wYXRoLm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy5ib3JkZXIucmFkaXVzLnRvcExlZnQsdGhpcy5wb3NpdGlvbi55KSx0aGlzLl9wYXRoLmxpbmVUbyhpLXRoaXMuYm9yZGVyLnJhZGl1cy50b3BSaWdodCx0aGlzLnBvc2l0aW9uLnkpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyhpLHRoaXMucG9zaXRpb24ueSxpLHRoaXMucG9zaXRpb24ueSt0aGlzLmJvcmRlci5yYWRpdXMudG9wUmlnaHQpLHRoaXMuX3BhdGgubGluZVRvKGksdGhpcy5wb3NpdGlvbi55K3RoaXMuZGltZW5zaW9uLmhlaWdodC10aGlzLmJvcmRlci5yYWRpdXMuYm90dG9tUmlnaHQpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyhpLGUsaS10aGlzLmJvcmRlci5yYWRpdXMuYm90dG9tUmlnaHQsZSksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5wb3NpdGlvbi54K3RoaXMuYm9yZGVyLnJhZGl1cy5ib3R0b21MZWZ0LGUpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyh0aGlzLnBvc2l0aW9uLngsZSx0aGlzLnBvc2l0aW9uLngsZS10aGlzLmJvcmRlci5yYWRpdXMuYm90dG9tTGVmdCksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSt0aGlzLmJvcmRlci5yYWRpdXMudG9wTGVmdCksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMucG9zaXRpb24ueCx0aGlzLnBvc2l0aW9uLnksdGhpcy5wb3NpdGlvbi54K3RoaXMuYm9yZGVyLnJhZGl1cy50b3BMZWZ0LHRoaXMucG9zaXRpb24ueSkpOih0aGlzLl9wYXRoLm1vdmVUbyh0aGlzLnBvc2l0aW9uLngrdGhpcy5ib3JkZXIucmFkaXVzLHRoaXMucG9zaXRpb24ueSksdGhpcy5fcGF0aC5saW5lVG8oaS10aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5wb3NpdGlvbi55KSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8oaSx0aGlzLnBvc2l0aW9uLnksaSx0aGlzLnBvc2l0aW9uLnkrdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLmxpbmVUbyhpLHRoaXMucG9zaXRpb24ueSt0aGlzLmRpbWVuc2lvbi5oZWlnaHQtdGhpcy5ib3JkZXIucmFkaXVzKSx0aGlzLl9wYXRoLnF1YWRyYXRpY0N1cnZlVG8oaSxlLGktdGhpcy5ib3JkZXIucmFkaXVzLGUpLHRoaXMuX3BhdGgubGluZVRvKHRoaXMucG9zaXRpb24ueCt0aGlzLmJvcmRlci5yYWRpdXMsZSksdGhpcy5fcGF0aC5xdWFkcmF0aWNDdXJ2ZVRvKHRoaXMucG9zaXRpb24ueCxlLHRoaXMucG9zaXRpb24ueCxlLXRoaXMuYm9yZGVyLnJhZGl1cyksdGhpcy5fcGF0aC5saW5lVG8odGhpcy5wb3NpdGlvbi54LHRoaXMucG9zaXRpb24ueSt0aGlzLmJvcmRlci5yYWRpdXMpLHRoaXMuX3BhdGgucXVhZHJhdGljQ3VydmVUbyh0aGlzLnBvc2l0aW9uLngsdGhpcy5wb3NpdGlvbi55LHRoaXMucG9zaXRpb24ueCt0aGlzLmJvcmRlci5yYWRpdXMsdGhpcy5wb3NpdGlvbi55KSksdGhpcy5fcGF0aC5jbG9zZVBhdGgoKSx0aGlzLmJvcmRlciYmdGhpcy5ib3JkZXIuY29sb3ImJnQuc3Ryb2tlKHRoaXMuX3BhdGgpLHRoaXMuX2JhY2tncm91bmQmJnRoaXMuX2JhY2tncm91bmQuY29sb3ImJnQuZmlsbCh0aGlzLl9wYXRoKSx0LnNoYWRvd0NvbG9yPTAsdC5zaGFkb3dPZmZzZXRYPTAsdC5zaGFkb3dPZmZzZXRZPTAsdC5zaGFkb3dCbHVyPTAsdGhpcy5ib3JkZXImJnRoaXMuYm9yZGVyLmNvbG9yJiZ0LnN0cm9rZSh0aGlzLl9wYXRoKSx0LnJlc3RvcmUoKX1nZXQgYXJlYSgpe3JldHVybiB0aGlzLmRpbWVuc2lvbi53aWR0aCp0aGlzLmRpbWVuc2lvbi5oZWlnaHR9Z2V0IGNlbnRlcigpe3JldHVybnt4OnRoaXMucG9zaXRpb24ueCt0aGlzLmRpbWVuc2lvbi53aWR0aC8yLHk6dGhpcy5wb3NpdGlvbi55K3RoaXMuZGltZW5zaW9uLmhlaWdodC8yfX19Y2xhc3MgQSBleHRlbmRzIHl7Y29uc3RydWN0b3Ioe3Bvc2l0aW9uOnQsZGltZW5zaW9uOmkscm90YXRpb246ZSxib3JkZXI6cyxiYWNrZ3JvdW5kOnIsc2hhZG93Om99KXtzdXBlcih7cG9zaXRpb246dCxkaW1lbnNpb246aSxyb3RhdGlvbjplLGJvcmRlcjpzLGJhY2tncm91bmQ6cixzaGFkb3c6b30pfWRyYXcodCl7dC5zYXZlKCksc3VwZXIuZHJhdyh0KSx0aGlzLnJvdGF0ZSYmKHQudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCx0aGlzLnBvc2l0aW9uLnkpLHQucm90YXRlKHRoaXMucm90YXRpb24uYW5nbGUpLHQudHJhbnNsYXRlKC10aGlzLnBvc2l0aW9uLngsLXRoaXMucG9zaXRpb24ueSkpLHRoaXMuX3BhdGg9bmV3IFBhdGgyRCx0LmJlZ2luUGF0aCgpLHRoaXMuX3BhdGgubW92ZVRvKHRoaXMucG9zaXRpb24ueCx0aGlzLnBvc2l0aW9uLnkpLHRoaXMuX3BhdGgubGluZVRvKHRoaXMucG9zaXRpb24ueC10aGlzLmRpbWVuc2lvbi53aWR0aCx0aGlzLnBvc2l0aW9uLnktdGhpcy5kaW1lbnNpb24uaGVpZ2h0LzIpLHRoaXMuX3BhdGgubGluZVRvKHRoaXMucG9zaXRpb24ueC10aGlzLmRpbWVuc2lvbi53aWR0aCx0aGlzLnBvc2l0aW9uLnkrdGhpcy5kaW1lbnNpb24uaGVpZ2h0LzIpLHRoaXMuX3BhdGguY2xvc2VQYXRoKCksdC5zdHJva2UodGhpcy5fcGF0aCksdC5maWxsKHRoaXMuX3BhdGgpLHQuc2hhZG93Q29sb3I9MCx0LnNoYWRvd09mZnNldFg9MCx0LnNoYWRvd09mZnNldFk9MCx0LnN0cm9rZSh0aGlzLl9wYXRoKSx0LnJlc3RvcmUoKX19Y29uc3QgVD1mdW5jdGlvbih7Zm9udEZhbWlseTp0LGZvbnRTaXplOmksZm9udFdlaWdodDplLGVsZW1lbnQ6c30pe2NvbnN0IHI9c3x8ZG9jdW1lbnQuYm9keTt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtvLmlubmVySFRNTD1cIkhnXCIsby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGBmb250LWZhbWlseTogJHt0fSAhaW1wb3J0YW50OyBmb250LXNpemU6ICR7aX1weCAhaW1wb3J0YW50OyBmb250LXdlaWdodDoke2V9ICFpbXBvcnRhbnQ7YCk7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIixuLnN0eWxlLndpZHRoPVwiMXB4XCIsbi5zdHlsZS5oZWlnaHQ9XCIwcHhcIjt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2guYXBwZW5kQ2hpbGQobyksaC5hcHBlbmRDaGlsZChuKSxyLmFwcGVuZENoaWxkKGgpO3RyeXt2YXIgYT17fTtuLnN0eWxlLnZlcnRpY2FsQWxpZ249XCJiYXNlbGluZVwiLGEuYXNjZW50PW4ub2Zmc2V0VG9wLW8ub2Zmc2V0VG9wLG4uc3R5bGUudmVydGljYWxBbGlnbj1cImJvdHRvbVwiLGEuaGVpZ2h0PW4ub2Zmc2V0VG9wLW8ub2Zmc2V0VG9wLGEuZGVzY2VudD1hLmhlaWdodC1hLmFzY2VudH1maW5hbGx5e2gucmVtb3ZlKCl9cmV0dXJuIGF9O2NsYXNzIEl7c3RhdGljIGdldCBGT05UKCl7cmV0dXJue2ZhbWlseTpcIkFyaWFsXCIsc3R5bGU6XCJub3JtYWxcIix2YXJpYW50Olwibm9ybWFsXCIsY29sb3I6XCJyZ2IoMjEyLDIxMiwyMTIpXCIsc2l6ZTo1MCx3ZWlnaHQ6XCJib2xkXCJ9fWNvbnN0cnVjdG9yKHtmYW1pbHk6dCxzdHlsZTppLHZhcmlhbnQ6ZSxjb2xvcjpzLHNpemU6cix3ZWlnaHQ6b30pe3RoaXMuX2ZhbWlseT10LHRoaXMuX3N0eWxlPWksdGhpcy5fdmFyaWFudD1lLHRoaXMuX2NvbG9yPW5ldyBwKHMpLHRoaXMuX3NpemU9cix0aGlzLl93ZWlnaHQ9byx0aGlzLl9zZXRGb250RGltZW5zaW9ucygpfXNldCBmYW1pbHkodCl7dGhpcy5fZmFtaWx5PXQsdGhpcy5fc2V0Rm9udERpbWVuc2lvbnMoKX1zZXQgZm9udFNpemUodCl7dGhpcy5fZm9udFNpemU9dCx0aGlzLl9zZXRGb250RGltZW5zaW9ucygpfXNldCBmb250V2VpZ2h0KHQpe3RoaXMuX2ZvbnRTaXplPXQsdGhpcy5fc2V0Rm9udERpbWVuc2lvbnMoKX1nZXQgZm9udDJDYW52YXMoKXtyZXR1cm5gJHt0aGlzLl9zdHlsZXx8XCJcIn0gJHt0aGlzLl92YXJpYW50fHxcIlwifSAke3RoaXMuX3dlaWdodHx8XCJcIn0gJHt0aGlzLl9zaXplP3RoaXMuX3NpemUrXCJweFwiOlwiXCJ9ICR7dGhpcy5fZmFtaWx5fHxcIlwifWB9Z2V0IGZhbWlseSgpe3JldHVybiB0aGlzLl9mYW1pbHl9Z2V0IHN0eWxlKCl7cmV0dXJuIHRoaXMuX3N0eWxlfWdldCB2YXJpYW50KCl7cmV0dXJuIHRoaXMuX3ZhcmlhbnR9Z2V0IGNvbG9yKCl7cmV0dXJuIHRoaXMuX2NvbG9yfXNldCBjb2xvcih0KXt0aGlzLl9jb2xvcj1uZXcgcCh0KX1nZXQgc2l6ZSgpe3JldHVybiB0aGlzLl9zaXplfWdldCB3ZWlnaHQoKXtyZXR1cm4gdGhpcy5fd2VpZ2h0fWdldCBkaW1lbnNpb25zKCl7cmV0dXJuIHRoaXMuX2RpbWVuc2lvbnN9X3NldEZvbnREaW1lbnNpb25zKCl7dGhpcy5fZGltZW5zaW9ucz1UKHtmb250RmFtaWx5OnRoaXMuX2ZhbWlseSxmb250U2l6ZTp0aGlzLl9zaXplLGZvbnRXZWlnaHQ6dGhpcy5fd2VpZ2h0fSl9fWNsYXNzIFJ7Y29uc3RydWN0b3Ioe3dlaWdodDp0LGNvbG9yOmksZW5hYmxlQmV6aWVyQ3VydmVzOmUsZGFzaGVkOnMsbGluZUNhcDpyfSl7dGhpcy5fd2VpZ2h0PXQsdGhpcy5fY29sb3I9bmV3IHAoaSksdGhpcy5fZW5hYmxlQmV6aWVyQ3VydmVzPWUsdGhpcy5fZGFzaGVkPXMsdGhpcy5fbGluZUNhcD1yfHxcInJvdW5kXCJ9Z2V0IHdlaWdodCgpe3JldHVybiB0aGlzLl93ZWlnaHR9Z2V0IGNvbG9yKCl7cmV0dXJuIHRoaXMuX2NvbG9yfWdldCBlbmFibGVCZXppZXJDdXJ2ZXMoKXtyZXR1cm4gdGhpcy5fZW5hYmxlQmV6aWVyQ3VydmVzfWdldCBkYXNoZWQoKXtyZXR1cm4gdGhpcy5fZGFzaGVkfWdldCBsaW5lQ2FwKCl7cmV0dXJuIHRoaXMuX2xpbmVDYXB9fWNvbnN0IE89KCk9Pi9Nb2JpfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLEM9ZnVuY3Rpb24odCxpLGUscyxyLG8sbixoLGEpe3JldHVybnt4Ok1hdGgucG93KDEtdCwzKSppKzMqdCpNYXRoLnBvdygxLXQsMikqcyszKnQqdCooMS10KSpvK3QqdCp0KmgseTpNYXRoLnBvdygxLXQsMykqZSszKnQqTWF0aC5wb3coMS10LDIpKnIrMyp0KnQqKDEtdCkqbit0KnQqdCphfX0sRD1mdW5jdGlvbih0LGksZSxzLHIsbyxuKXtyZXR1cm57eDooMS10KSooMS10KSppKzIqKDEtdCkqdCpzK3QqdCpvLHk6KDEtdCkqKDEtdCkqZSsyKigxLXQpKnQqcit0KnQqbn19LE49KHtzdGFydFBvaW50OnQsY29udHJvbFBvaW50MTppLGNvbnRyb2xQb2ludDI6ZSxlbmRQb2ludDpzLG51bWJlck9mUG9pbnRzVG9HZW5lcmF0ZTpyfSk9PntsZXQgbz1bXSxuPXJ8fDUwO2ZvcihsZXQgcj0wO3I8PW47cisrKXtsZXQgaD1udWxsO2g9ZT9DKHIvbix0LngsdC55LGkueCxpLnksZS54LGUueSxzLngscy55KTpEKHIvbix0LngsdC55LGkueCxpLnkscy54LHMueSksby5wdXNoKGgpfXJldHVybiBvfSxTPXQ9PntsZXQgaT1bXTtmb3IobGV0IGU9MTtlPHQubGVuZ3RoO2UrKyl7Y29uc3Qgcz10W2VdO2lmKHMueD09PXRbZS0xXS54KXtjb25zdCByPShzLnktdFtlLTFdLnkpLzUwO2ZvcihsZXQgbz0wO288NTA7bysrKWkucHVzaCh7eDpzLngseTp0W2UtMV0ueStyKm99KX1lbHNlIGlmKHMueT09PXRbZS0xXS55KXtjb25zdCByPShzLngtdFtlLTFdLngpLzUwO2ZvcihsZXQgbz0wO288NTA7bysrKWkucHVzaCh7eDp0W2UtMV0ueCtyKm8seTpzLnl9KX19cmV0dXJuIGkucHVzaCh7eDp0W3QubGVuZ3RoLTFdLngseTp0W3QubGVuZ3RoLTFdLnl9KSxpfX1dKX0pKTsiLCJpbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFNjaGVtYSxcclxuICAgIGlzTW9iaWxlXHJcbn07IiwiaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRW50aXR5LFxyXG4gICAgTGluZVxyXG59IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uIGV4dGVuZHMgRW50aXR5e1xyXG4gICAgc3RhdGljIGdldCBQQURESU5HKCl7XHJcbiAgICAgICAgcmV0dXJuIDE1O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGZyb20sXHJcbiAgICAgICAgdG8sXHJcbiAgICAgICAgbGluZSxcclxuICAgICAgICBjb25uZWN0b3IsXHJcbiAgICAgICAgcGFkZGluZyxcclxuICAgICAgICBpc0VkaXRhYmxlLFxyXG4gICAgICAgIHNob3dQYXRoUG9pbnRzLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3ogPSAwO1xyXG4gICAgICAgIHRoaXMuX2Zyb20gPSBmcm9tO1xyXG4gICAgICAgIHRoaXMuX3RvID0gdG87XHJcbiAgICAgICAgdGhpcy5fbGluZSA9IG5ldyBMaW5lKGxpbmUpO1xyXG4gICAgICAgIGNvbm5lY3Rvci5wb3NpdGlvbiA9IHRvLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IoY29ubmVjdG9yKTtcclxuICAgICAgICB0aGlzLmlzRWRpdGFibGUgPSBpc0VkaXRhYmxlO1xyXG4gICAgICAgIHRoaXMuX3Nob3dQYXRoUG9pbnRzID0gc2hvd1BhdGhQb2ludHM7XHJcbiAgICAgICAgdGhpcy5fb2xkVG9EaW1lbnNpb25zID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fdG8uZGltZW5zaW9uLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX3RvLmRpbWVuc2lvbi5oZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9vbGRGcm9tRGltZW5zaW9ucyA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX2Zyb20uZGltZW5zaW9uLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2Zyb20uZGltZW5zaW9uLmhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3BhZGRpbmcgPSBwYWRkaW5nIHx8IENvbm5lY3Rpb24uUEFERElORztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuX2xpbmUud2VpZ2h0O1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9saW5lLmNvbG9yLmhleDtcclxuICAgICAgICAgICAgaWYodGhpcy5fbGluZS5kYXNoZWQpXHJcbiAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaCh0aGlzLl9saW5lLmRhc2hlZCk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLl9saW5lLndlaWdodDtcclxuICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSAnc3F1YXJlJztcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvaW50ID0gcGF0aFswXTtcclxuICAgICAgICAgICAgY3R4Lm1vdmVUbyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9saW5lICYmIHRoaXMuX2xpbmUuZW5hYmxlQmV6aWVyQ3VydmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sUG9pbnQxID0gcGF0aFsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xQb2ludDIgPSBwYXRoWzJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kUG9pbnQgPSBwYXRoWzNdO1xyXG4gICAgICAgICAgICAgICAgY3R4LmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50MS54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xQb2ludDEueSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sUG9pbnQyLngsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbFBvaW50Mi55LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvaW50LngsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQueVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gcGF0aFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9kcmF3IGNvbm5lY3RvclxyXG4gICAgICAgICAgICBjb25zdCBsYXN0UG9pbnQgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZExhc3RQb2ludCA9IHBhdGhbcGF0aC5sZW5ndGggLSAyXTtcclxuICAgICAgICAgICAgY29uc3QgZGVsdGFfeCA9IGxhc3RQb2ludC54IC0gc2Vjb25kTGFzdFBvaW50Lng7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhX3kgPSBsYXN0UG9pbnQueSAtIHNlY29uZExhc3RQb2ludC55O1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0b3IudHJhbnNmb3JtLnJvdGF0aW9uLmFuZ2xlID0gTWF0aC5hdGFuMihkZWx0YV95LCBkZWx0YV94KTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdG9yLnRyYW5zZm9ybS5wb3NpdGlvbiA9IGxhc3RQb2ludDtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdG9yLmRyYXcoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbm5lY3Rpb25Qb2ludHMoKSB7XHJcbiAgICAgICAgbGV0IHNtYWxsZXJEaXN0YW5jZSA9IEluZmluaXR5O1xyXG4gICAgICAgIGxldCBjbG9zZXN0UG9pbnRzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgW2Zyb21LZXksIGZyb21WYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fZnJvbS5zaGFwZS5zaWRlcykpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgW3RvS2V5LCB0b1ZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl90by5zaGFwZS5zaWRlcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IE1hdGguYWJzKGZyb21WYWx1ZS54IC0gdG9WYWx1ZS54KTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZVggPCBzbWFsbGVyRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbGVyRGlzdGFuY2UgPSBkaXN0YW5jZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlLm5hbWUgPSBmcm9tS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvVmFsdWUubmFtZSA9IHRvS2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RQb2ludHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogZnJvbVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogdG9WYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RQb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhdGgoKSB7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvblBvaW50cyA9IHRoaXMuY29ubmVjdGlvblBvaW50cztcclxuICAgICAgICBjb25zdCBvcmlnaW4gPSBjb25uZWN0aW9uUG9pbnRzLm9yaWdpbjtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGNvbm5lY3Rpb25Qb2ludHMuZGVzdGluYXRpb247XHJcblxyXG4gICAgICAgIGxldCBoZCA9IE1hdGguYWJzKGRlc3RpbmF0aW9uLnggLSBvcmlnaW4ueCk7XHJcbiAgICAgICAgbGV0IG1oZCA9IGhkIC8gMjtcclxuXHJcbiAgICAgICAgbGV0IHBhdGggPSBbXTtcclxuICAgICAgICBpZiAob3JpZ2luLm5hbWUgIT09IGRlc3RpbmF0aW9uLm5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgbXVsdEZhY3RvciA9IG9yaWdpbi54ID49IGRlc3RpbmF0aW9uLnggPyAxIDogLTE7XHJcbiAgICAgICAgICAgIGlmKGhkIDwgMjAwKXtcclxuICAgICAgICAgICAgICAgIHBhdGgucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogb3JpZ2luLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogb3JpZ2luLnksXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogb3JpZ2luLnggLSA1MCAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogb3JpZ2luLnksXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZGVzdGluYXRpb24ueCArIDUwICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB5OiBkZXN0aW5hdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGRlc3RpbmF0aW9uLnggKyB0aGlzLl9wYWRkaW5nICogbXVsdEZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICB5OiBkZXN0aW5hdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBvcmlnaW4ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcmlnaW4ueSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBvcmlnaW4ueCAtIG1oZCAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogb3JpZ2luLnksXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZGVzdGluYXRpb24ueCArIG1oZCAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogZGVzdGluYXRpb24ueSxcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBkZXN0aW5hdGlvbi54ICsgdGhpcy5fcGFkZGluZyAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogZGVzdGluYXRpb24ueSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IG11bHRGYWN0b3IgPSBvcmlnaW4ubmFtZSA9PT0gJ3JpZ2h0JyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgcGF0aC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHg6IG9yaWdpbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3JpZ2luLnksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IG9yaWdpbi54ICsgNTAgKiBtdWx0RmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgeTogb3JpZ2luLnksXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHg6IGRlc3RpbmF0aW9uLnggKyA1MCAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICB5OiBkZXN0aW5hdGlvbi55LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB4OiBkZXN0aW5hdGlvbi54ICsgdGhpcy5fcGFkZGluZyAqIG11bHRGYWN0b3IsXHJcbiAgICAgICAgICAgICAgICB5OiBkZXN0aW5hdGlvbi55LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90bztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZnJvbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZnJvbTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgVHJhbnNmb3JtLFxyXG4gICAgQ29sb3JcclxufSBmcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgZGltZW5zaW9uLFxyXG4gICAgICAgIGNvbG9yXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uOiBkaW1lbnNpb25cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IG5ldyBDb2xvcihjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggLCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY3R4LnJvdGF0ZSh0aGlzLl90cmFuc2Zvcm0ucm90YXRpb24uYW5nbGUpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54LCAtdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9jb2xvci5yZ2JhO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCAtIDUsIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55LCA1LCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG5cclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLl9jb2xvci5yZ2JhO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54ICsgMiwgdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyAxNCwgdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyAyLCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCArIDE0LCB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSArICA4KTtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54ICsgMiwgdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggKyAxNCwgdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgLSA4KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRyYW5zZm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNmb3JtO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHtcclxuICAgIEVudGl0eSxcclxuICAgIEZvbnQsXHJcbiAgICBSZWN0YW5nbGVcclxufSBmcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgZXh0ZW5kcyBFbnRpdHl7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgYm9yZGVyLFxyXG4gICAgICAgIGZvbnQsXHJcbiAgICAgICAgcmVmZXJlbmNlLFxyXG4gICAgICAgIHBhcmVudFxyXG4gICAgfSwgY2FudmFzKXtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgfSwgY2FudmFzKTtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuX2ZvbnQgPSBuZXcgRm9udChmb250KTtcclxuICAgICAgICB0aGlzLl9zaGFwZSA9IG5ldyBSZWN0YW5nbGUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uOiB0aGlzLmRpbWVuc2lvbixcclxuICAgICAgICAgICAgYm9yZGVyOiBib3JkZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLl9yZWZlcmVuY2UgPSByZWZlcmVuY2U7XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcy5fc2hhcGUsIFxyXG4gICAgICAgICAgICBcInNpZGVzXCIsIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRkbGVIZWlnaHQgPSB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54ICsgdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCArIDIxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgKyBtaWRkbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnggLSAxMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55ICsgbWlkZGxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KXtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NoYXBlLmRyYXcoY3R4KTtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuX2ZvbnQuZm9udDJDYW52YXM7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9mb250LmNvbG9yLmhleDtcclxuICAgICAgICBjb25zdCBmaWVsZFBvc2l0aW9uWSA9IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55ICsgdGhpcy5fZm9udC5kaW1lbnNpb25zLmhlaWdodC81O1xyXG5cclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLFxyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgZmllbGRQb3NpdGlvbllcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlV2lkdGggPSBjdHgubWVhc3VyZVRleHQodGhpcy5fdHlwZSkud2lkdGg7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLl90eXBlLFxyXG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQucG9zaXRpb24ueCArIHRoaXMuX3BhcmVudC5kaW1lbnNpb24ud2lkdGggLSB0aGlzLl9wYXJlbnQucGFkZGluZy5yaWdodCAtIHR5cGVXaWR0aCAtIDEwLFxyXG4gICAgICAgICAgICBmaWVsZFBvc2l0aW9uWVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBFbnRpdHksXHJcbiAgICBSZWN0YW5nbGVcclxufSBmcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzcmMsXHJcbiAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgcGFkZGluZyxcclxuICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgICBib3JkZXIsXHJcbiAgICAgICAgcGFyZW50XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICAgICAgcGFkZGluZyxcclxuICAgICAgICAgICAgZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBwYXJlbnRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYyA9IHNyYztcclxuICAgICAgICB0aGlzLl9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3NoYXBlID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICBib3JkZXI6IGJvcmRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBpZih0aGlzLl9zaGFwZS5iYWNrZ3JvdW5kKXtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBhZGRpbmcubGVmdCwgIHRoaXMucGFkZGluZy50b3ApO1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFwZS5kcmF3KGN0eCk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMucGFkZGluZy5sZWZ0LCAtdGhpcy5wYWRkaW5nLnRvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMucGFkZGluZy5sZWZ0LFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmcudG9wLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnQGFsbGFub3JpY2lsL2NhbnZhc2pzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUuanMnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24uanMnO1xyXG5pbXBvcnQgZ3JpZFNWRyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2dyaWQuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVtYSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgY2FudmFzLFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgZGF0YVxyXG4gICAgfSkge1xyXG4gICAgICAgIG9wdGlvbnMuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtncmlkU1ZHfScpYDtcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBuZXcgQ2FudmFzKHtcclxuICAgICAgICAgICAgY2FudmFzLFxyXG4gICAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYWJsZUJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmdldEVudGl0eUJ5TmFtZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYWJsZSh0YWJsZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1RhYmxlID0gbmV3IFRhYmxlKHRhYmxlLCB0aGlzLl9jYW52YXMpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmFkZEVudGl0eShuZXdUYWJsZSwgdGhpcy5fY2FudmFzKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFibGVzID0gdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuZ2V0RW50aXRpZXNJbkxheWVyKDEpO1xyXG4gICAgICAgIGZvcihsZXQgdGFibGUgb2YgdGFibGVzKXtcclxuICAgICAgICAgICAgdGFibGUuX2ZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZmllbGQuX3JlZmVyZW5jZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlVGFibGUgPSB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5nZXRFbnRpdHlCeU5hbWUoZmllbGQuX3JlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVmZXJlbmNlVGFibGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7dGFibGUuX25hbWV9LSR7ZmllbGQuX25hbWV9LSR7cmVmZXJlbmNlVGFibGUuX25hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6ICd0cmlhbmdsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTgwLDE4MCwxODApJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTgwLDE4MCwxODApJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCZXppZXJDdXJ2ZXM6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiByZWZlcmVuY2VUYWJsZS5faGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGFibGUuX25hbWUgPT09IGZpZWxkLl9yZWZlcmVuY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi50byA9IHJlZmVyZW5jZVRhYmxlLl9mb290ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmZyb20gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuX2Nvbm5lY3Rpb24gPSBuZXdDb25uZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5hZGRFbnRpdHkobmV3Q29ubmVjdGlvbiwgdGhpcy5fY2FudmFzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYWJsZUJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlZEVudGl0eSA9IHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmdldEVudGl0eUJ5TmFtZShuYW1lKTsgXHJcbiAgICAgICAgdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIucmVtb3ZlRW50aXR5QnlOYW1lKG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gdGhpcy5fY2FudmFzLmVudGl0eU1hbmFnZXIuZ2V0RW50aXRpZXNJbkxheWVyKDApO1xyXG5cclxuICAgICAgICBmb3IobGV0IGNvbm5lY3Rpb24gb2YgY29ubmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZihjb25uZWN0aW9uLl90by5fcGFyZW50Ll9uYW1lID09PSBkZWxldGVkRW50aXR5Ll9uYW1lIHx8IGNvbm5lY3Rpb24uX2Zyb20uX3BhcmVudC5fbmFtZSA9PSBkZWxldGVkRW50aXR5Ll9uYW1lKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLnJlbW92ZUVudGl0eUJ5TmFtZShjb25uZWN0aW9uLl9uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWVsZFRvVGFibGUoZmllbGQsIHRhYmxlTmFtZSl7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5nZXRFbnRpdHlCeU5hbWUodGFibGVOYW1lKTtcclxuICAgICAgICB0YWJsZS5hZGRGaWVsZChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRhdGEoZGF0YSkge1xyXG4gICAgICAgIGxldCBlbnRpdHlNYXAgPSB7fTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgW25hbWUsIHRhYmxlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYWJsZSA9IG5ldyBUYWJsZSh0YWJsZSwgdGhpcy5fY2FudmFzKTtcclxuICAgICAgICAgICAgZW50aXR5TWFwW25hbWVdID0gbmV3VGFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZW50aXR5TWFwKS5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5hZGRFbnRpdHkodGFibGUsIHRoaXMuX2NhbnZhcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZW50aXR5TWFwKS5mb3JFYWNoKCh0YWJsZSkgPT4ge1xyXG4gICAgICAgICAgICB0YWJsZS5fZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hZGRDb25uZWN0aW9uVG9GaWVsZChmaWVsZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9jYW52YXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYXRhKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICB0YWJsZXM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0YWJsZXMgPSB0aGlzLl9jYW52YXMuZW50aXR5TWFuYWdlci5nZXRFbnRpdGllc0luTGF5ZXIoMSk7XHJcbiAgICAgICAgZm9yKGxldCB0YWJsZSBvZiB0YWJsZXMpe1xyXG4gICAgICAgICAgICBsZXQgbmV3RGF0YVRhYmxlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGFibGUuX25hbWUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGFibGUuX2xhYmVsLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRhYmxlLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uOiB7IHdpZHRoOiB0YWJsZS5kaW1lbnNpb24ud2lkdGgsIGhlaWdodDogdGFibGUuZGltZW5zaW9uLmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgaWNvbjogdGFibGUuX2hlYWRlci5faWNvbi5fbmFtZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGFibGUuX2ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgIG5ld0RhdGFUYWJsZS5maWVsZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmllbGQuX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLl9sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6IGZpZWxkLl9yZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEudGFibGVzLnB1c2gobmV3RGF0YVRhYmxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZXZlbnQgPT09ICdvbmtleXByZXNzJyB8fFxyXG4gICAgICAgICAgICBldmVudCA9PT0gJ29ua2V5dXAnIHx8XHJcbiAgICAgICAgICAgIGV2ZW50ID09PSAnb25rZXlkb3duJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB3aW5kb3dbZXZlbnRdID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfSBlbHNlIHRoaXMuX2NhbnZhcy5fZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBc0ltYWdlKG5hbWUpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zYXZlQXNJbWFnZShuYW1lKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZC5qcyc7XHJcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL3RhYmxlSGVhZGVyLmpzJztcclxuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJy4vdGFibGVGb290ZXIuanMnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuL2Nvbm5lY3Rpb24uanMnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEVudGl0eSxcclxuICAgIFJlY3RhbmdsZSxcclxuICAgIEZvbnRcclxufSBmcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgaWNvbixcclxuICAgICAgICBmb250LFxyXG4gICAgICAgIGZpZWxkcyxcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgaXNEcmFnZ2FibGUsXHJcbiAgICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgICBzaGFkb3csXHJcbiAgICAgICAgYm9yZGVyLFxyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgcGFkZGluZ1xyXG4gICAgfSwgY2FudmFzKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBwYWRkaW5nXHJcbiAgICAgICAgfSwgY2FudmFzKTtcclxuICAgICAgICB0aGlzLl96ID0gMTtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuX2ZvbnQgPSBmb250ID8gbmV3IEZvbnQoZm9udCkgOiBGb250LkZPTlQ7XHJcbiAgICAgICAgdGhpcy5faXNEcmFnZ2FibGUgPSBpc0RyYWdnYWJsZSB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zaGFwZSA9IG5ldyBSZWN0YW5nbGUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uOiB0aGlzLmRpbWVuc2lvbixcclxuICAgICAgICAgICAgYm9yZGVyLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2hlYWRlciA9IG5ldyBUYWJsZUhlYWRlcih7XHJcbiAgICAgICAgICAgIHRpdGxlOiBsYWJlbCxcclxuICAgICAgICAgICAgZm9udDogZm9udCxcclxuICAgICAgICAgICAgaWNvbjogaWNvbixcclxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5kaW1lbnNpb24ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgICAgIGJvcmRlcjogaGVhZGVyICYmIGhlYWRlci5ib3JkZXIgPyBoZWFkZXIuYm9yZGVyIDogYm9yZGVyXHJcbiAgICAgICAgfSwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9vdGVyID0gbmV3IFRhYmxlRm9vdGVyKHtcclxuICAgICAgICAgICAgbmFtZTogbGFiZWwsXHJcbiAgICAgICAgICAgIGZvbnQ6IGZvbnQsXHJcbiAgICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSArIHRoaXMuZGltZW5zaW9uLmhlaWdodCAtIDM1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpbWVuc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuZGltZW5zaW9uLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgICAgICBib3JkZXI6IGZvb3RlciAmJiBmb290ZXIuYm9yZGVyID8gZm9vdGVyLmJvcmRlciA6IGJvcmRlcixcclxuICAgICAgICAgICAgc2hhZG93XHJcbiAgICAgICAgfSwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZmllbGRzID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRm9udCA9IG5ldyBGb250KGZpZWxkLmZvbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFRvSW5zZXJ0ID0gbmV3IEZpZWxkKHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6IGZpZWxkLnJlZmVyZW5jZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fc2hhcGUucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBmaWVsZEZvbnQuZGltZW5zaW9ucy5oZWlnaHQgKiBpbmRleFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9zaGFwZS5kaW1lbnNpb24ud2lkdGggLSAyICogdGhpcy5fcGFkZGluZy5yaWdodCAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogZmllbGRGb250LmRpbWVuc2lvbnMuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9udDogZmllbGRGb250LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBmaWVsZC5ib3JkZXIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBmaWVsZC50eXBlXHJcbiAgICAgICAgICAgIH0sIGNhbnZhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkVG9JbnNlcnQpO1xyXG5cclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2hvd1Njcm9sbEJhciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gMDtcclxuICAgICAgICB0aGlzLl9zY3JvbGxCYXJDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMiknO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbignd2hlZWwnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbW91c2VQb3NpdGlvbiA9IHRoaXMuX2NhbnZhcy5nZXRUcmFuc2Zvcm1lZFBvaW50KGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbi54ID49IHRoaXMuc2Nyb2xsYWJsZUFyZWFYMVBvc2l0aW9uICYmXHJcbiAgICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uLnggPD0gdGhpcy5zY3JvbGxhYmxlQXJlYVgyUG9zaXRpb24gJiZcclxuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24ueSA+PSB0aGlzLnNjcm9sbGFibGVBcmVhWTFQb3NpdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbi55IDw9IHRoaXMuc2Nyb2xsYWJsZUFyZWFZMlBvc2l0aW9uXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBNYXRoLnNpZ24oZS5kZWx0YVkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZDEgPSB0aGlzLmluaXRpYWxGaWVsZFlQb3NpdGlvbiArIHRoaXMuc2Nyb2xsYWJsZUFyZWFIZWlnaHQgPiB0aGlzLnNjcm9sbGFibGVBcmVhWTJQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmQyID0gdGhpcy5pbml0aWFsRmllbGRZUG9zaXRpb24gPCB0aGlzLnNjcm9sbGFibGVBcmVhWTFQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICgoY29uZDEgJiYgZGVsdGEgPiAwKSB8fCAoY29uZDIgJiYgZGVsdGEgPCAwKSkgdGhpcy5fc2Nyb2xsUG9zaXRpb24gLT0gZGVsdGEgKiA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtb3VzZVBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZS5vZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgeTogZS5vZmZzZXRZXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5jb250YWlucyhtb3VzZVBvc2l0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLl9zaGFwZS5iYWNrZ3JvdW5kLmNvbG9yID0gJyNmM2YyZjInO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5fc2hhcGUuYmFja2dyb3VuZC5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbnZhcy5jdHguaXNQb2ludEluUGF0aCh0aGlzLl9zY3JvbGxCYXIsIG1vdXNlUG9zaXRpb24ueCwgbW91c2VQb3NpdGlvbi55LCAnbm9uemVybycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxCYXJDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMyknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsQmFyQ29sb3IgPSAncmdiYSgwLDAsMCwwLjIpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uKCdtb3VzZWhvdmVyJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd1Njcm9sbEJhciA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub24oJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93U2Nyb2xsQmFyID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICAvL3NoYXBlXHJcbiAgICAgICAgdGhpcy5fc2hhcGUuZHJhdyhjdHgpO1xyXG5cclxuICAgICAgICAvL2hlYWRlclxyXG4gICAgICAgIHRoaXMuX2hlYWRlci5kcmF3KGN0eCk7XHJcblxyXG4gICAgICAgIC8vc2Nyb2xsYWJsZSBhcmVhXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYXBlLnBvc2l0aW9uLnggKyB0aGlzLl9wYWRkaW5nLmxlZnQsXHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uLFxyXG4gICAgICAgICAgICB0aGlzLl9zaGFwZS5kaW1lbnNpb24ud2lkdGggLSAyICogdGhpcy5fcGFkZGluZy5yaWdodCxcclxuICAgICAgICAgICAgdGhpcy5jbGlwQXJlYUhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LmNsaXAoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZmllbGRzLmZvckVhY2goKGZpZWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZFlQb3NpdGlvbiA9IHRoaXMuaW5pdGlhbEZpZWxkWVBvc2l0aW9uICsgZmllbGQuX2ZvbnQuZGltZW5zaW9ucy5oZWlnaHQgKiBpbmRleDtcclxuICAgICAgICAgICAgZmllbGQucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9zaGFwZS5wb3NpdGlvbi54ICsgdGhpcy5fcGFkZGluZy5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgeTogZmllbGRZUG9zaXRpb25cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmllbGRPdXRzaWRlT2ZTY3JvbGxhYmxlQXJlYSA9XHJcbiAgICAgICAgICAgICAgICBmaWVsZFlQb3NpdGlvbiA8IHRoaXMuc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uIC0gMTAgfHxcclxuICAgICAgICAgICAgICAgIGZpZWxkWVBvc2l0aW9uID4gdGhpcy5zY3JvbGxhYmxlQXJlYVkyUG9zaXRpb24gLSAxNTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5fY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLl9yZWZlcmVuY2UgIT09IHRoaXMuX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaWVsZE91dHNpZGVPZlNjcm9sbGFibGVBcmVhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLl9jb25uZWN0aW9uLl90byA9IHRoaXMuX2hlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5fY29ubmVjdGlvbi5fdG8gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpZWxkT3V0c2lkZU9mU2Nyb2xsYWJsZUFyZWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuX2Nvbm5lY3Rpb24uX2Zyb20gPSB0aGlzLl9oZWFkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuX2Nvbm5lY3Rpb24uX2Zyb20gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpZWxkLmRyYXcoY3R4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAvL3Njcm9sbGJhclxyXG4gICAgICAgIGlmICh0aGlzLmhhc1Njcm9vbEJhciAmJiB0aGlzLl9zaG93U2Nyb2xsQmFyKSB7XHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjEpJztcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgucmVjdChcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZUFyZWFYMlBvc2l0aW9uIC0gNSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpcEFyZWFIZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9zY3JvbGxCYXJDb2xvcjtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgUGF0aDJEKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbEJhci5yZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQXJlYVgyUG9zaXRpb24gLSA1LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxhYmxlQXJlYVkxUG9zaXRpb24gLSB0aGlzLl9zY3JvbGxQb3NpdGlvbiAqIHRoaXMucGVyY2VudE9mVmlzaWJsZUZpZWxkcyxcclxuICAgICAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGJhclNpemVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY3R4LmZpbGwodGhpcy5fc2Nyb2xsQmFyKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Zvb3Rlci5kcmF3KGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICBjb25zdCBmaWVsZEZvbnQgPSBuZXcgRm9udChmaWVsZC5mb250KTtcclxuICAgICAgICBjb25zdCBmaWVsZFRvSW5zZXJ0ID0gbmV3IEZpZWxkKHtcclxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxyXG4gICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXHJcbiAgICAgICAgICAgIHJlZmVyZW5jZTogZmllbGQucmVmZXJlbmNlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fc2hhcGUucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IGZpZWxkRm9udC5kaW1lbnNpb25zLmhlaWdodCAqIHRoaXMuX2ZpZWxkcy5sZW5ndGhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGltZW5zaW9uOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fc2hhcGUuZGltZW5zaW9uLndpZHRoIC0gMiAqIHRoaXMuX3BhZGRpbmcucmlnaHQgLSAxMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZmllbGRGb250LmRpbWVuc2lvbnMuaGVpZ2h0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvbnQ6IGZpZWxkRm9udCxcclxuICAgICAgICAgICAgYm9yZGVyOiBmaWVsZC5ib3JkZXIsXHJcbiAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGVcclxuICAgICAgICB9LCB0aGlzLl9jYW52YXMpO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkcy5wdXNoKGZpZWxkVG9JbnNlcnQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ29ubmVjdGlvblRvRmllbGQoZmllbGRUb0luc2VydCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ29ubmVjdGlvblRvRmllbGQoZmllbGQpIHtcclxuICAgICAgICBpZiAoZmllbGQuX3JlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VUYWJsZSA9IHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmdldEVudGl0eUJ5TmFtZShmaWVsZC5fcmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZVRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGAke3RoaXMuX25hbWV9LSR7ZmllbGQuX25hbWV9LSR7cmVmZXJlbmNlVGFibGUuX25hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU6ICd0cmlhbmdsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigxODAsMTgwLDE4MCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTgwLDE4MCwxODApJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmV6aWVyQ3VydmVzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogcmVmZXJlbmNlVGFibGUuX2hlYWRlclxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmFtZSA9PT0gZmllbGQuX3JlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24udG8gPSByZWZlcmVuY2VUYWJsZS5fZm9vdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uZnJvbSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkLl9jb25uZWN0aW9uID0gbmV3Q29ubmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5lbnRpdHlNYW5hZ2VyLmFkZEVudGl0eShuZXdDb25uZWN0aW9uLCB0aGlzLl9jYW52YXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEljb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbml0aWFsRmllbGRZUG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsYWJsZUFyZWFZMVBvc2l0aW9uICsgdGhpcy5fc2Nyb2xsUG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbGFibGVBcmVhWDFQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcGUucG9zaXRpb24ueCArIHRoaXMuX3BhZGRpbmcubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsYWJsZUFyZWFYMlBvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGFwZS5wb3NpdGlvbi54ICsgdGhpcy5fcGFkZGluZy5sZWZ0ICsgdGhpcy5fc2hhcGUuZGltZW5zaW9uLndpZHRoIC0gMiAqIHRoaXMuX3BhZGRpbmcucmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbGFibGVBcmVhWTFQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcGUucG9zaXRpb24ueSArIHRoaXMuX2hlYWRlci5kaW1lbnNpb24uaGVpZ2h0ICsgMTA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcm9sbGFibGVBcmVhWTJQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcGUucG9zaXRpb24ueSArIHRoaXMuX3NoYXBlLmRpbWVuc2lvbi5oZWlnaHQgLSB0aGlzLl9mb290ZXIuZGltZW5zaW9uLmhlaWdodCAtIDEwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGlwQXJlYUhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcGUuZGltZW5zaW9uLmhlaWdodCAtIHRoaXMuX2hlYWRlci5kaW1lbnNpb24uaGVpZ2h0IC0gdGhpcy5fZm9vdGVyLmRpbWVuc2lvbi5oZWlnaHQgLSAyMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Nyb2xsYWJsZUFyZWFIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcy5sZW5ndGggKiB0aGlzLl9maWVsZHNbMF0uX2ZvbnQuZGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc1Njcm9vbEJhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxhYmxlQXJlYUhlaWdodCA+IHRoaXMuY2xpcEFyZWFIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBlcmNlbnRPZlZpc2libGVGaWVsZHMoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZWaXNpYmxlRmllbGRzID0gKHRoaXMuY2xpcEFyZWFIZWlnaHQgLyB0aGlzLl9maWVsZHNbMF0uX2ZvbnQuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBudW1iZXJPZlZpc2libGVGaWVsZHMgLyB0aGlzLl9maWVsZHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxiYXJTaXplKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmNsaXBBcmVhSGVpZ2h0ICogdGhpcy5wZXJjZW50T2ZWaXNpYmxlRmllbGRzKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEVudGl0eSxcclxuICAgIFJlY3RhbmdsZVxyXG59IGZyb20gJ0BhbGxhbm9yaWNpbC9jYW52YXNqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUZvb3RlciBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgICBzaGFkb3csXHJcbiAgICAgICAgYm9yZGVyLFxyXG4gICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgcGFyZW50LFxyXG4gICAgfSwgY2FudmFzKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiBgZm9vdGVyXyR7bmFtZX1gLFxyXG4gICAgICAgICAgICBwb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgICAgICBwYXJlbnRcclxuICAgICAgICB9LCBjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9zaGFwZSA9IG5ldyBSZWN0YW5nbGUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcclxuICAgICAgICAgICAgZGltZW5zaW9uOiB0aGlzLmRpbWVuc2lvbixcclxuICAgICAgICAgICAgc2hhZG93LFxyXG4gICAgICAgICAgICBib3JkZXIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLl9zaGFwZSxcclxuICAgICAgICAgICAgXCJzaWRlc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaWRkbGVIZWlnaHQgPSB0aGlzLl90cmFuc2Zvcm0uZGltZW5zaW9uLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54ICsgdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55ICsgbWlkZGxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnkgKyBtaWRkbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24ueCA9IHRoaXMuX3BhcmVudC5wb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMuX3NoYXBlLnBvc2l0aW9uLnkgPSB0aGlzLl9wYXJlbnQucG9zaXRpb24ueSArIHRoaXMuX3BhcmVudC5kaW1lbnNpb24uaGVpZ2h0IC0gdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUuZHJhdyhjdHgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBFbnRpdHksXHJcbiAgICBSZWN0YW5nbGUsXHJcbiAgICBGb250XHJcbn1mcm9tICdAYWxsYW5vcmljaWwvY2FudmFzanMnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24uanMnO1xyXG5pbXBvcnQgSWNvbkNvbG9ycyBmcm9tICcuLi8uLi9hc3NldHMvanNvbi9iYWNrZ3JvdW5kQ29sb3JzRm9ySWNvbnMuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIEVudGl0eXtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBpY29uLFxyXG4gICAgICAgIGZvbnQsXHJcbiAgICAgICAgcG9zaXRpb24sXHJcbiAgICAgICAgZGltZW5zaW9uLFxyXG4gICAgICAgIGJhY2tncm91bmQsXHJcbiAgICAgICAgc2hhZG93LFxyXG4gICAgICAgIGJvcmRlcixcclxuICAgICAgICBwYWRkaW5nLFxyXG4gICAgICAgIHBhcmVudCxcclxuICAgIH0sIGNhbnZhcykge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgbmFtZTogYGhlYWRlcl8ke3RpdGxlfWAsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb24sXHJcbiAgICAgICAgICAgIHBhZGRpbmcsXHJcbiAgICAgICAgICAgIHBhcmVudFxyXG4gICAgICAgIH0sIGNhbnZhcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLl9mb250ID0gZm9udCA/IG5ldyBGb250KGZvbnQpIDogRm9udC5GT05UO1xyXG4gICAgICAgIHRoaXMuX3NoYXBlID0gbmV3IFJlY3RhbmdsZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBkaW1lbnNpb246IHRoaXMuZGltZW5zaW9uLFxyXG4gICAgICAgICAgICBzaGFkb3csXHJcbiAgICAgICAgICAgIGJvcmRlcixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYXBlLCBcclxuICAgICAgICAgICAgXCJzaWRlc1wiLCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlkZGxlSGVpZ2h0ID0gdGhpcy5fdHJhbnNmb3JtLmRpbWVuc2lvbi5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCArIHRoaXMuX3RyYW5zZm9ybS5kaW1lbnNpb24ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueSArIG1pZGRsZUhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi55ICsgbWlkZGxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZihpY29uKXtcclxuICAgICAgICAgICAgY29uc3QgaWNvblNyY1Rva2VucyAgPSBpY29uLm5hbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgaWNvbi5iYWNrZ3JvdW5kLmNvbG9yID0gSWNvbkNvbG9yc1tpY29uU3JjVG9rZW5zWzFdXTtcclxuICAgICAgICAgICAgdGhpcy5faWNvbiA9IG5ldyBJY29uKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGljb24ubmFtZSxcclxuICAgICAgICAgICAgICAgIHNyYzogYCR7dGhpcy5fY2FudmFzLl9pbWFnZXNTb3VyY2UgfHwgJy4nfS9zYWxlc2ZvcmNlLWljb25zLyR7aWNvblNyY1Rva2Vuc1swXX0vJHtpY29uU3JjVG9rZW5zWzFdfS5zdmdgLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb246IGljb24uZGltZW5zaW9uIHx8IHsgd2lkdGg6IDI1LCBoZWlnaHQ6IDI1fSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwfSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGljb24uYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGljb24ucGFkZGluZyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogaWNvbi5ib3JkZXIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCl7XHJcbiAgICAgICAgdGhpcy5fc2hhcGUuZHJhdyhjdHgpO1xyXG5cclxuICAgICAgICAvL3RpdGxlXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZm9udCA9IHRoaXMuX2ZvbnQuZm9udDJDYW52YXM7XHJcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9mb250LmNvbG9yLmhleDtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlLCBcclxuICAgICAgICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24ueCArIHRoaXMuX3BhZGRpbmcubGVmdCArIHRoaXMuX2ljb24uZGltZW5zaW9uLndpZHRoICsgdGhpcy5faWNvbi5wYWRkaW5nLnJpZ2h0LCBcclxuICAgICAgICAgICAgdGhpcy5fc2hhcGUucG9zaXRpb24ueSArIHRoaXMuX3BhZGRpbmcudG9wXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAvL2ljb25cclxuICAgICAgICBpZih0aGlzLl9pY29uKXtcclxuICAgICAgICAgICAgdGhpcy5faWNvbi5kcmF3KGN0eCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=