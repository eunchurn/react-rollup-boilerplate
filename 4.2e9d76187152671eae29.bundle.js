(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{635:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_cache=__webpack_require__(109),styled_components_browser_esm=__webpack_require__(2),api=__webpack_require__(252),item=Object(styled_components_browser_esm.a)(["display:grid;grid-gap:0.5rem;padding:1rem;background-color:var(--color-buttonBg);border:1px solid var(--color-buttonBorder);border-radius:1rem;"]),Item=styled_components_browser_esm.b.li.withConfig({displayName:"Repositorycomponent__Item",componentId:"sc-1ncebr1-0"})(["",""],item),Repository_component=function(_ref){var description=_ref.description,name=_ref.name,url=_ref.url;return react.createElement(Item,null,react.createElement("strong",null,react.createElement("a",{href:url},name)),react.createElement("div",null,description))},list=Object(styled_components_browser_esm.a)(["display:grid;grid-gap:1rem;padding:0;margin:0;"]);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var UserRepositoriesResource=Object(react_cache.unstable_createResource)(api.b),List=styled_components_browser_esm.b.ul.withConfig({displayName:"Repositoriescomponent__List",componentId:"ahxdd3-0"})(["",""],list),Repositories_component=function(_ref){var id=_ref.id,repos=UserRepositoriesResource.read(id);return react.createElement(List,null,repos.map(function(repo){return react.createElement(Repository_component,_extends({key:repo.name},repo))}))};__webpack_require__.d(__webpack_exports__,"default",function(){return Repositories_component})}}]);
//# sourceMappingURL=4.2e9d76187152671eae29.bundle.js.map