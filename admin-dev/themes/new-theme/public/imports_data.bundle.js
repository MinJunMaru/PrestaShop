/******/!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}// webpackBootstrap
/******/
var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=430)}({198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(257);(0,window.$)(function(){new o.a})},255:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=window.$,a=function(){function e(){o(this,e)}return r(e,null,[{key:"validate",value:function(){return i(".js-validation-error").addClass("d-none"),this._checkDuplicateSelectedValues()&&this._checkRequiredFields()}},{key:"_checkDuplicateSelectedValues",value:function(){var e=[],t=!0;return i(".js-entity-field select").each(function(){var n=i(this).val();if("no"!==n)return-1!==i.inArray(n,e)?(t=!1,void i(".js-duplicate-columns-warning").removeClass("d-none")):void e.push(n)}),t}},{key:"_checkRequiredFields",value:function(){var e=i(".js-import-data-table").data("required-fields");for(var t in e)if(0===i('option[value="'+e[t]+'"]:selected').length)return i(".js-missing-column-warning").removeClass("d-none"),i(".js-missing-column").text(i('option[value="'+e[t]+'"]:first').text()),!1;return!0}}]),e}();t.a=a},256:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e),this._targetExecutionTime=5e3,this._maxAcceleration=4,this._minBatchSize=5,this._maxBatchSize=100}return r(e,[{key:"markImportStart",value:function(){this._importStartTime=(new Date).getTime()}},{key:"markImportEnd",value:function(){this._actualExecutionTime=(new Date).getTime()-this._importStartTime}},{key:"_calculateAcceleration",value:function(){return Math.min(this._maxAcceleration,this._targetExecutionTime/this._actualExecutionTime)}},{key:"calculateBatchSize",value:function(e){if(!this._importStartTime)throw"Import start is not marked.";if(!this._actualExecutionTime)throw"Import end is not marked.";return Math.min(this._maxBatchSize,Math.max(this._minBatchSize,Math.floor(e*this._calculateAcceleration())))}}]),e}();t.a=i},257:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(259),i=n(258),a=n(255),s=n(261),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=function(){function e(){var t=this;o(this,e),new r.a,new i.a,this.importer=new s.a,$(document).on("click",".js-process-import",function(e){return t.importHandler(e)}),$(document).on("click",".js-abort-import",function(){return t.importer.requestCancelImport()}),$(document).on("click",".js-close-modal",function(){return t.importer.progressModal.hide()}),$(document).on("click",".js-continue-import",function(){return t.importer.continueImport()})}return u(e,[{key:"importHandler",value:function(e){if(e.preventDefault(),a.a.validate()){var t={};$(".import-data-configuration-form").find("#skip, select[name^=type_value], #csv, #iso_lang, #entity,#truncate, #match_ref, #regenerate, #forceIDs, #sendemail,#separator, #multiple_value_separator").each(function(e,n){t[$(n).attr("name")]=$(n).val()}),this.importer.import(t)}}}]),e}();t.a=l},258:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=window.$,a=i(".js-import-data-table"),s=function(){function e(){var t=this;o(this,e),this.numberOfColumnsPerPage=this._getNumberOfVisibleColumns(),this.totalNumberOfColumns=this._getTotalNumberOfColumns(),i(".js-import-next-page").on("click",function(){return t.importNextPageHandler()}),i(".js-import-previous-page").on("click",function(){return t.importPreviousPageHandler()})}return r(e,[{key:"importNextPageHandler",value:function(){this._importPaginationHandler("forward")}},{key:"importPreviousPageHandler",value:function(){this._importPaginationHandler("backward")}},{key:"_importPaginationHandler",value:function(e){var t=a.find("th:visible,td:visible"),n=i("forward"===e?".js-import-next-page":".js-import-previous-page"),o=!1,r=0,s=a.find("th");"backward"===e&&(s=i(s.toArray().reverse()));for(var u in s){if(isNaN(u)){this._hide(n);break}if(i(s[u]).is(":visible"))o=!0;else if(o){var l="backward"===e?this.totalNumberOfColumns-1-u:u;if(this._showTableColumnByIndex(l),++r>=this.numberOfColumnsPerPage){this._hide(n);break}}}this._hide(t),a.find("th:first").is(":visible")||this._show(i(".js-import-previous-page")),a.find("th:last").is(":visible")||this._show(i(".js-import-next-page"))}},{key:"_getNumberOfVisibleColumns",value:function(){return a.find("th:visible").length}},{key:"_getTotalNumberOfColumns",value:function(){return a.find("th").length}},{key:"_hide",value:function(e){e.addClass("d-none")}},{key:"_show",value:function(e){e.removeClass("d-none")}},{key:"_showTableColumnByIndex",value:function(e){e++,this._show(a.find("th:nth-child("+e+")")),this._show(a.find("tbody > tr").find("td:nth-child("+e+")"))}}]),e}();t.a=s},259:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=window.$,a=function(){function e(){o(this,e),this.loadEvents()}return r(e,[{key:"loadEvents",value:function(){var e=this;i(document).on("click",".js-save-import-match",function(t){return e.save(t)}),i(document).on("click",".js-load-import-match",function(t){return e.load(t)}),i(document).on("click",".js-delete-import-match",function(t){return e.delete(t)})}},{key:"save",value:function(e){var t=this;e.preventDefault();var n=i(".js-save-import-match").attr("data-url"),o=i(".import-data-configuration-form").serialize();i.ajax({type:"POST",url:n,data:o}).then(function(e){if(void 0!==e.errors&&e.errors.length)t._showErrorPopUp(e.errors);else if(e.matches.length>0){var n=t.matchesDropdown;for(var o in e.matches){var r=n.find("option[value="+e.matches[o].id_import_match+"]");r.length>0||t._appendOptionToDropdown(n,e.matches[o].name,e.matches[o].id_import_match)}}})}},{key:"load",value:function(e){var t=this;e.preventDefault();var n=i(".js-load-import-match").attr("data-url");i.ajax({type:"GET",url:n,data:{import_match_id:this.matchesDropdown.val()}}).then(function(e){if(e){t.rowsSkipInput.val(e.skip);var n=e.match.split("|");for(var o in n)i("#type_value_"+o).val(n[o])}})}},{key:"delete",value:function(e){e.preventDefault();var t=i(".js-delete-import-match").attr("data-url"),n=this.matchesDropdown,o=n.val();i.ajax({type:"DELETE",url:t,data:{import_match_id:o}}).then(function(){n.find("option[value="+o+"]").remove()})}},{key:"_appendOptionToDropdown",value:function(e,t,n){var o=i("<option>");o.attr("value",n),o.text(t),e.append(o)}},{key:"_showErrorPopUp",value:function(e){alert(e)}},{key:"matchesDropdown",get:function(){return i("#matches")}},{key:"rowsSkipInput",get:function(){return i("#skip")}}]),e}();t.a=a},260:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e)}return r(e,[{key:"show",value:function(){this.progressModal.modal("show")}},{key:"hide",value:function(){this.progressModal.modal("hide")}},{key:"updateProgress",value:function(e,t){e=parseInt(e),t=parseInt(t);var n=this.progressBar,o=e/t*100;n.css("width",o+"%"),n.find("> span").text(e+"/"+t)}},{key:"updateProgressLabel",value:function(e){this.progressLabel.text(e)}},{key:"setImportingProgressLabel",value:function(){this.updateProgressLabel(this.progressModal.find(".modal-body").data("importing-label"))}},{key:"setImportedProgressLabel",value:function(){this.updateProgressLabel(this.progressModal.find(".modal-body").data("imported-label"))}},{key:"showInfoMessages",value:function(e){this._showMessages(this.infoMessageBlock,e)}},{key:"showWarningMessages",value:function(e){this._showMessages(this.warningMessageBlock,e)}},{key:"showErrorMessages",value:function(e){this._showMessages(this.errorMessageBlock,e)}},{key:"showSuccessMessage",value:function(){this.successMessageBlock.removeClass("d-none")}},{key:"showPostLimitMessage",value:function(e){this.postLimitMessage.find("#post_limit_value").text(e),this.postLimitMessage.removeClass("d-none")}},{key:"_showMessages",value:function(e,t){var n=!1;for(var o in t){n=!0;var r=$("<div>");r.text(t[o]),r.addClass("message"),e.append(r)}n&&e.removeClass("d-none")}},{key:"showContinueImportButton",value:function(){this.continueImportButton.removeClass("d-none")}},{key:"hideContinueImportButton",value:function(){this.continueImportButton.addClass("d-none")}},{key:"showAbortImportButton",value:function(){this.abortImportButton.removeClass("d-none")}},{key:"hideAbortImportButton",value:function(){this.abortImportButton.addClass("d-none")}},{key:"showCloseModalButton",value:function(){this.closeModalButton.removeClass("d-none")}},{key:"hideCloseModalButton",value:function(){this.closeModalButton.addClass("d-none")}},{key:"clearWarningMessages",value:function(){this.warningMessageBlock.addClass("d-none").find(".message").remove()}},{key:"reset",value:function(){this.updateProgress(0,0),this.updateProgressLabel(this.progressLabel.attr("default-value")),this.continueImportButton.addClass("d-none"),this.abortImportButton.addClass("d-none"),this.closeModalButton.addClass("d-none"),this.successMessageBlock.addClass("d-none"),this.infoMessageBlock.addClass("d-none").find(".message").remove(),this.errorMessageBlock.addClass("d-none").find(".message").remove(),this.postLimitMessage.addClass("d-none"),this.clearWarningMessages()}},{key:"progressModal",get:function(){return $("#import_progress_modal")}},{key:"progressBar",get:function(){return this.progressModal.find(".progress-bar")}},{key:"infoMessageBlock",get:function(){return $(".js-import-info")}},{key:"errorMessageBlock",get:function(){return $(".js-import-errors")}},{key:"warningMessageBlock",get:function(){return $(".js-import-warnings")}},{key:"successMessageBlock",get:function(){return $(".js-import-success")}},{key:"postLimitMessage",get:function(){return $(".js-post-limit-warning")}},{key:"continueImportButton",get:function(){return $(".js-continue-import")}},{key:"abortImportButton",get:function(){return $(".js-abort-import")}},{key:"closeModalButton",get:function(){return $(".js-close-modal")}},{key:"progressLabel",get:function(){return $("#import_progress_bar").find(".progress-details-text")}}]),e}();t.a=i},261:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(260),i=n(256),a=n(262),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(){o(this,e),this.progressModal=new r.a,this.batchSizeCalculator=new i.a,this.postSizeChecker=new a.a,this.defaultBatchSize=5}return s(e,[{key:"import",value:function(e){this.configuration={ajax:1,action:"import",tab:"AdminImport",token:token},this._mergeConfiguration(e),this.totalRowsCount=0,this.hasWarnings=!1,this.hasErrors=!1,this.progressModal.reset(),this.progressModal.show(),this._ajaxImport(0,this.defaultBatchSize)}},{key:"_ajaxImport",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mergeConfiguration({offset:e,limit:t,validateOnly:n?1:0,moreStep:r,crossStepsVars:JSON.stringify(i)}),this._onImportStart(),$.post({url:"index.php",dataType:"json",data:this.configuration,success:function(i){if(o._importCancelRequested)return o._cancelImport(),!1;var a=void 0!==i.oneMoreStep?i.oneMoreStep:r;if(void 0!==i.totalCount&&(o.totalRowsCount=i.totalCount),o.progressModal.updateProgress(i.doneCount,o.totalRowsCount),n||o.progressModal.setImportingProgressLabel(),!n&&i.informations&&o.progressModal.showInfoMessages(i.informations),i.errors){if(o.hasErrors=!0,o.progressModal.showErrorMessages(i.errors),!n)return o._onImportStop(),!1}else i.warnings&&(o.hasWarnings=!0,o.progressModal.showWarningMessages(i.warnings));if(!i.isFinished){o.batchSizeCalculator.markImportEnd();var s=o.batchSizeCalculator.calculateBatchSize(t),u=e+t;return o.postSizeChecker.isReachingPostSizeLimit(i.postSizeLimit,i.nextPostSize)&&o.progressModal.showPostLimitMessage(o.postSizeChecker.getRequiredPostSizeInMegabytes(i.nextPostSize)),o._ajaxImport(u,s,n,a,i.crossStepsVariables)}return n?o.hasErrors?(o._onImportStop(),!1):o.hasWarnings?(o.progressModal.showContinueImportButton(),o._onImportStop(),!1):(o.progressModal.updateProgress(o.totalRowsCount,o.totalRowsCount),o._ajaxImport(0,o.defaultBatchSize,!1)):r<a?o._ajaxImport(0,o.defaultBatchSize,!1,a,i.crossStepsVariables):void o._onImportFinish()},error:function(e,t,n){"parsererror"===t&&(t="Technical error: Unexpected response returned by server. Import stopped."),o._onImportStop(),o.progressModal.showErrorMessages([t])}})}},{key:"continueImport",value:function(){if(!this.configuration)throw"Missing import configuration. Make sure the import had started before continuing.";this.progressModal.hideContinueImportButton(),this.progressModal.hideCloseModalButton(),this.progressModal.clearWarningMessages(),this._ajaxImport(0,this.defaultBatchSize,!1)}},{key:"requestCancelImport",value:function(){this._importCancelRequested=!0}},{key:"_mergeConfiguration",value:function(e){for(var t in e)this._importConfiguration[t]=e[t]}},{key:"_cancelImport",value:function(){this.progressModal.hide(),this._importCancelRequested=!1}},{key:"_onImportStop",value:function(){this.progressModal.showCloseModalButton(),this.progressModal.hideAbortImportButton()}},{key:"_onImportFinish",value:function(){this._onImportStop(),this.progressModal.showSuccessMessage(),this.progressModal.setImportedProgressLabel(),this.progressModal.updateProgress(this.totalRowsCount,this.totalRowsCount)}},{key:"_onImportStart",value:function(){this.batchSizeCalculator.markImportStart(),this.progressModal.showAbortImportButton()}},{key:"configuration",set:function(e){this._importConfiguration=e},get:function(){return this._importConfiguration}},{key:"progressModal",set:function(e){this._modal=e},get:function(){return this._modal}}]),e}();t.a=u},262:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e),this.postSizeLimitThreshold=.9}return r(e,[{key:"isReachingPostSizeLimit",value:function(e,t){return t>=e*this.postSizeLimitThreshold}},{key:"getRequiredPostSizeInMegabytes",value:function(e){return parseInt(e/1048576)}}]),e}();t.a=i},430:function(e,t,n){e.exports=n(198)}});