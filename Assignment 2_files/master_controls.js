var $dt,dtjQuery,DT_extended,dtVersion,klContentWrappersArray,klUrlsWithEdit,klUrlsWithNew,coursenum,i,availableToFormat,formatChecked,availableToAccount,accountChecked,kl_tippy,kl_spectrum,kl_minicolors,klactiveInput;function klError(e,t){"use strict";try{var o;t.toString();console.log(t),"1248890"===ENV.current_user_id&&"usu.instructure.com"===document.domain||"2"===ENV.current_user_id&&"cidilabs.instructure.com"===document.domain?0<$(".kl_error_details:contains("+e+")").length?$(".kl_error_details:contains("+e+") .kl_error_count").html(parseInt($(".kl_error_details:contains("+e+") .kl_error_count").text())+1):(o='  <div class="alert alert-error" style="text-align:right;"><strong><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> '+e+" Error:</strong> "+t+'<br><span class="kl_error_count">1</span> Times</div>',$("#application").append(o)):setTimeout(function(){},2e3)}catch(e){console.log(e)}}function klParseCourseNum(){"use strict";try{var e,t;coursenum=null,-1<location.pathname.indexOf("courses")&&(e=location.pathname.match(/\/courses\/(.*)/))&&0<=(t=(coursenum=e[1]).indexOf("/",0))&&(coursenum=coursenum.slice(0,t))}catch(e){klError("MC Get Course Num",e)}}function klAfterContentLoaded(){"use strict";console.log("klAfterContentLoaded()");try{0<$("[class^='kl_']").length||0<$("[id^='kl_']").length||0<$("#course_syllabus").length||0<$(".tablesorter").length||0<$(".kl_code_highlight").length||0<$("a[data-pin-do]").length||$("body").hasClass("people")?($("body").addClass("using_design_tools"),0<$(".kl_full_width_content").length?($("#kl_wrapper, #kl_wrapper_3, .kl_wrapper_parent").css("max-width","unset"),$(".kl_wrapper_parent").contents().unwrap()):$("#kl_wrapper, #kl_wrapper_3").closest(".user_content").addClass("kl_wrapper_parent"),$.getScript(DT_variables.path+"js/tools_liveView.js?ver="+dtVersion,function(){console.log("tools_liveView.js Loaded.")})):0<$("#kl_wrapper").length&&$.getScript(DT_variables.path+"js/tools_legacyliveView.js?ver="+dtVersion,function(){console.log("tools_legacyliveView.js Loaded.")}),(coursenum===DT_variables.templateCourse||void 0!==DT_variables.secondaryTemplateCourse&&coursenum===DT_variables.secondaryTemplateCourse||void 0!==DT_extended&&void 0!==DT_extended.secondaryTemplateCourse&&coursenum===DT_extended.secondaryTemplateCourse||0<$("#kl_customize_theme_colors").length||0<$(".kl_extend_js_download").length)&&$.getScript(DT_variables.path+"js/tools_customization.js?ver="+dtVersion,function(){console.log("tools_customization.js Loaded.")}),"cidilabs.instructure.com"!==document.domain||void 0===ENV.COURSE_ID||"3"!==ENV.COURSE_ID&&"288"!==ENV.COURSE_ID||$.getScript(DT_variables.path+"js/admin_guide.js?ver="+dtVersion,function(){console.log("Admin Guide code Loaded.")}),0<$("#kl_custom_css").length&&$("head").append($("<link/>",{rel:"stylesheet",type:"text/css",href:"/courses/"+coursenum+"/file_contents/course%20files/css/style.css"})),"function"==typeof klAdditionalAfterContentLoaded&&klAdditionalAfterContentLoaded(),$(document).ajaxComplete(function(){$('link[href*="_app.css"').each(function(e,t){$(this).remove()}),$('script[src*="tools_liveView_app.js"').each(function(e,t){$(this).remove()})}),0<$(".fa").length&&$.getScript(DT_variables.path+"js/util/fa5update.js",function(){console.log("Update FA5 icons")})}catch(e){klError("MC After Content Loaded Error",e)}}function klPageContentCheck(e,t){"use strict";try{var o=!1;0<$(".show-content").length&&0<$(".show-content").children().length?o=!0:-1!==document.location.href.indexOf("/discussion_topics/")&&-1===document.URL.indexOf("/edit")&&-1===document.URL.indexOf("/new")?o=0<$("#discussion_topic").length&&0<$(".user_content").text().length||0<$(".user_content").length&&(0<$("[class^='kl_']").length||0<$("[id^='kl_']").length||1<$(":header").length):-1!==document.location.href.indexOf("/assignments/")&&-1===document.URL.indexOf("/edit")&&-1===document.URL.indexOf("/new")?(0<$("#assignment_show .teacher-version").length||0<$("[class^='kl_']").length||0<$("[id^='kl_']").length||1<$(":header").length)&&(o=!0):(0<$(".a2-toggle-details-container").length||0<$(".tool_content_wrapper").length&&0<$(".user_content").text().length||0<$("#course_syllabus").length||0<$("iframe#tool_content").length||0<$(".user_content").text().length||$("body").hasClass("people")||0<$(".user_content").text().length)&&(o=!0),o?(klAfterContentLoaded(),0<$("#kl_show_accents").length&&$.getScript(DT_variables.path+"js/util/languageAccents.js?ver="+dtVersion,function(){klAccents.configureStudent()})):t<30&&(t++,setTimeout(function(){klPageContentCheck(e,t)},100))}catch(e){klError("MC Page Content Check Error",e)}}function klCheckCourse(){"use strict";try{var t;void 0!==DT_variables.limitByFormat&&DT_variables.limitByFormat||void 0!==DT_variables.specifiedAccounts?$.getJSON("https://"+location.host+"/api/v1/courses/"+coursenum,function(e){var o;DT_variables.limitByFormat&&(availableToFormat=!1,void 0!==e.course_format)&&(t=e.course_format,-1!==$.inArray(t,DT_variables.formatArray)&&(availableToFormat=!0),-1!==$.inArray("on-campus",DT_variables.formatArray))&&(availableToFormat=!0),void 0!==DT_variables.specifiedAccounts&&(availableToAccount=!1,o=e.account_id,$.each(DT_variables.specifiedAccounts,function(e,t){-1<$.inArray(o.toString(),t.accounts)&&("Primary"===t.customizationsType?DT_variables.templateCourse=t.customizationsCourseId:"Extended"===t.customizationsType&&(DT_extended={secondaryTemplateCourse:t.customizationsCourseId,secondaryIdentifier:t.identifier}),availableToAccount=!0)})),availableToFormat&&availableToAccount||($('#left-side a:contains("Multi"):contains("Tool")').remove(),$('#nav_form li:contains("Multi"):contains("Tool")').remove()),accountChecked=formatChecked=!0}):accountChecked=formatChecked=!0}catch(e){klError("MC Course Format Check Error",e)}}function klRetrieveSettings(){"use strict";try{var e;klLoadToolsCheck()?((e=$.post("https://multitool.ciditools.com/rce_settings.php",{task:"user_preferences",domain:String(document.domain),canvas_id:ENV.current_user_id})).success(function(e){null!==e?(sessionStorage.setItem("dtUserSettings","succeeded"),"0"!==e.shared_customizations&&sessionStorage.setItem("dtSharedCourse",e.shared_customizations),sessionStorage.setItem("dtShowLaunch",e.show_button),sessionStorage.setItem("dtAutolaunch",e.auto_launch),sessionStorage.setItem("klColorPalette",e.color_palette),sessionStorage.setItem("dtCustomColors",e.colors2_custom),sessionStorage.setItem("dtVisibleCurrent",e.current_tools_open),sessionStorage.setItem("dtTools",e.enabled_tools),sessionStorage.setItem("dtDefaultTheme",e.default_theme),sessionStorage.setItem("dtSavedBoxStyles",e.saved_box_styles),sessionStorage.setItem("dtVisibleColorPalettes",e.visible_palettes),localStorage.removeItem("dtShowLaunch"),localStorage.removeItem("dtSharedCourse"),localStorage.removeItem("dtDefaultTheme"),localStorage.removeItem("dtTools"),localStorage.removeItem("dtAutolaunch"),localStorage.removeItem("klColorPalette"),localStorage.removeItem("dtFavColors"),localStorage.removeItem("dtCustomColors"),localStorage.removeItem("dtVisibleCurrent"),localStorage.removeItem("klThemeFolderID"),localStorage.removeItem("klBannerImagesFolderID"),localStorage.removeItem("dtVisibleColorPalettes")):(sessionStorage.setItem("dtSharedCourse",""),sessionStorage.setItem("dtShowLaunch",""),sessionStorage.setItem("dtAutolaunch",""),sessionStorage.setItem("klColorPalette",""),sessionStorage.setItem("dtCustomColors",""),sessionStorage.setItem("dtVisibleCurrent",""),sessionStorage.setItem("dtTools",""),sessionStorage.setItem("dtDefaultTheme",""),sessionStorage.setItem("dtSavedBoxStyles",""),sessionStorage.setItem("dtVisibleColorPalettes",""))}),e.always(function(e){klLoadToolsDependencies()}),e.fail(function(){sessionStorage.setItem("dtUserSettings","failed")})):removeLtiTools()}catch(e){klError("Retrieve User Settings",e)}}function klImportPolicy(o,e,t){"use strict";try{var s,n=o.replace("kl_","").split("_"),i=n[0],a=n[1];$.getJSON("https://"+location.host+"/api/v1/courses/"+a+"/pages/"+i,function(e){var t=e.body;s=e.title.replace("[Policies]",""),t=0<=t.indexOf("kl_wrapper_3")?t.split("kl_wrapper_3").join(o):'<div id="'+o+'">'+t+"</div>",!(0===$(DT_variables.iframeID).contents().find("#kl_"+i).length&&0===$(DT_variables.iframeID).contents().find("#kl_"+i+"_"+a).length||0===$(DT_variables.iframeID).contents().find("#kl_"+i).length&&0===$(DT_variables.iframeID).contents().find("#kl_"+i+"_"+a).length)?$(DT_variables.iframeID).contents().find("#kl_"+i+"_"+a).replaceWith(t):$(DT_variables.iframeID).contents().find("#kl_wrapper_3").append(t),0===$(".kl_policy_update_message").length&&$(".form-actions").prepend('<div class="alert alert-success kl_policy_update_message" style="text-align:left;margin-bottom: 5px;"><ul class="fa-ul"></ul></div>'),$(".kl_policy_update_message ul").append('<li><i class="fas fa-check fa-li"></i> '+s+" policies updated</li>")}).done(function(){try{$(DT_variables.iframeID).contents().find("#"+o).addClass("kl_locked kl_policy").attr("contenteditable","false"),e===t&&setTimeout(function(){$(".kl_policy_update_message").slideUp()},6e3)}catch(e){klError("Import Policy Done",e)}})}catch(e){klError("Import Policy",e)}}function klSyllabusPolicies(){"use strict";try{$("#kl_syllabus_nav").remove(),setTimeout(function(){var o=$(DT_variables.iframeID).contents().find('div[id*="kl_policies"]').length;$(DT_variables.iframeID).contents().find('div[id*="kl_policies"]').each(function(e,t){klImportPolicy($(this).attr("id"),o,e+1)})},2e3),$(DT_variables.iframeID).contents().find(".kl_locked, .dp-locked").each(function(){$(this).attr("contenteditable","false")})}catch(e){klError("MC Identify Syllabus Policies",e)}}function klAutoUpdateModuleList(){setTimeout(function(){var e=$(DT_variables.iframeID).contents();0<e.find("#kl_modules.kl_auto_update").length&&e.find("#kl_modules.kl_auto_update a").each(function(e,t){$(this).addClass("kl_update");var o,s,n=this,i=($(this).attr("href"),$(this).attr("data-api-endpoint"));void 0!==i&&-1!==i.indexOf("/modules/")?(o="",0<$(this).find("i").length&&(o=$(this).find("i").clone().wrap("<p/>").parent().html()),s="",0<$(this).find(".kl_module_timeframe").length&&(s=$(this).find(".kl_module_timeframe").clone().wrap("<p/>").parent().html()),$.getJSON(i,function(e){$(n).removeClass("kl_update").html(o+e.name+s)}),setTimeout(function(){$(n).hasClass("kl_update")&&$(n).remove()},2e3)):$(n).remove()})},2e3)}function klLoadToolsDependencies(){"use strict";try{var e,t,o;$(DT_variables.iframeID).contents().find(".kl_locked, .dp-locked").each(function(){$(this).attr("contenteditable","false")}),klLoadToolsCheck()?(console.log("Design Tools: Load Dependencies"),"undefined"!=(e=typeof jQuery)&&(t=jQuery,o=$),$.getScript("https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",function(){$.getScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",function(){dtjQuery=jQuery,$dt=$,"undefined"!=e&&(window.jQuery=t,window.$=o),$dt.getScript(DT_variables.path+"js/util/languageAccents.js?ver="+dtVersion,function(){console.log("Design Tools: Language Accents")}),$dt.getScript(DT_variables.path+"lang/en_US.js?ver="+dtVersion,function(){void 0!==localStorage.dtBeta2||-1<document.domain.indexOf(".beta.")&&-1===DT_variables.path.indexOf("dev.cidilabs.com")?$dt.getScript(DT_variables.path+"js/tools_main_beta.js?ver="+dtVersion,function(){console.log("Design Tools: tools_main_beta loaded"),$("#application").append('<i class="fa fa-flask dtBetaFlag"></i>')}):$dt.getScript(DT_variables.path+"js/tools_main.js?ver="+dtVersion,function(){console.log("Design Tools: tools_main loaded")})})})}),$("head").append($("<link/>",{rel:"stylesheet",href:klBasePath+"/ext/spectrum-css.css"})),"function"==typeof klAfterToolDependenciesLoaded&&klAfterToolDependenciesLoaded()):removeLtiTools()}catch(e){klError("MC Load Tools Dependencies",e)}}function removeLtiTools(){0<$("#context_external_tools_select").length&&$.each(["Multi-Tool","Multi Tool","MultiTool","Upload/Embed Image","Upload / Embed Image"],function(e,t){0<$('#context_external_tools_select a:contains("'+t+'")').length&&$('#context_external_tools_select a:contains("'+t+'")').closest("li").remove()}),$(".tox-editor-header").length!==$(".kl_remove_uei").length&&($('.tox-editor-header button[title="Upload / Embed Image"]').remove(),$('.tox-editor-header button[title="Upload/Embed Image"]').remove(),$('.tox-editor-header button[title="Apps"]').addClass("kl_remove_uei"),$(".kl_remove_uei").unbind("click").on("click",function(){setTimeout(function(){$('div[title="Upload / Embed Image"]').remove(),$('div[title="Upload/Embed Image"]').remove(),$('div[title="View All"]').addClass("kl_remove_uei_popup"),$(".kl_remove_uei_popup").click(function(){setTimeout(function(){$('span[aria-label="Apps"]').find('span:contains("Upload / Embed Image")').closest("li").remove(),$('span[aria-label="Apps"]').find('span:contains("Upload/Embed Image")').closest("li").remove()},50)})},50)}))}function klLoadToolsCheck(){"use strict";var e=!1,t=ENV.current_user_id,o=DT_variables.limitByRole,s=DT_variables.limitByUser,n=DT_variables.limitByCourse,i=!0,a=!0,l=!0;return o&&(i=!1,$.each(DT_variables.roleArray,function(e,t){-1<$.inArray(t,ENV.current_user_roles)&&(i=!0)})),s&&(l=!1,-1!==$.inArray(t,DT_variables.userArray))&&(l=!0),n&&(a=!1,-1!==$.inArray(coursenum,DT_variables.courseArray))&&(a=!0),i&&l&&availableToFormat&&a&&availableToAccount&&(e=!0),i&&l&&availableToFormat&&a&&availableToAccount||($('#left-side a:contains("Multi"):contains("Tool")').remove(),$('#nav_form li:contains("Multi"):contains("Tool")').remove(),o=-1!==location.href.indexOf("/quizzes/"),s=-1!==location.href.indexOf("/assignments/"),t=-1!==location.href.indexOf("/discussion_topics/"),(o||s||t)&&setInterval(function(){removeLtiTools()},3e3)),e}function klFixConvertedIcons(e){0===$(DT_variables.iframeID).contents().find("body").text().length&&e<10?setTimeout(function(){klFixConvertedIcons(e+1)},100):((0<$(DT_variables.iframeID).contents().find('i[class*="fa"]').length||0<$(DT_variables.iframeID).contents().find('i[class*="icon-"]').length)&&$(DT_variables.iframeID).contents().find("i").each(function(e,t){$(this).html().length<=1&&$(this).html('<span class="dp-icon-content" style="display:none;">&nbsp;</span>')}),(0<$(DT_variables.iframeID).contents().find('em[class*="fa"]').length||0<$(DT_variables.iframeID).contents().find('em[class*="icon-"]').length)&&($(DT_variables.iframeID).contents().find('em[class*="fa"]').each(function(e,t){$(this).html('<span class="dp-icon-content" style="display:none;">&nbsp;</span>');var o={};$.each($(t)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue}),$(t).replaceWith(function(){return $("<i />",o).append($(this).contents())})}),$(DT_variables.iframeID).contents().find('em[class*="icon-"]').each(function(e,t){$(this).html('<span class="dp-icon-content" style="display:none;">&nbsp;</span>');var o={};$.each($(t)[0].attributes,function(e,t){o[t.nodeName]=t.nodeValue}),$(t).replaceWith(function(){return $("<i />",o).append($(this).contents())})})))}function klTriggerToolsCheck(e){"use strict";try{e<=50&&(0<$(".kl_add_tools").length?$(".kl_add_tools").show():0<$(".tox-tinymce iframe").contents().find("#tinymce").length&&formatChecked?(DT_variables.iframeID="#"+tinyMCE.activeEditor.id+"_ifr",$("body").addClass("canvas_rce_2020"),klFixConvertedIcons(0),klRetrieveSettings(),klSyllabusPolicies(),klAutoUpdateModuleList(),retrieveInstSettings()):0<$(".mce-container iframe").contents().find("#tinymce").length&&formatChecked?(DT_variables.iframeID="#"+tinyMCE.activeEditor.id+"_ifr",klFixConvertedIcons(0),klRetrieveSettings(),klSyllabusPolicies(),klAutoUpdateModuleList(),retrieveInstSettings()):0<$(".mce-container iframe").contents().find("#tinyrce").length&&formatChecked?(DT_variables.iframeID="#"+window.tinyrce.activeEditor.id+"_ifr",klFixConvertedIcons(0),klRetrieveSettings(),klSyllabusPolicies(),klAutoUpdateModuleList(),retrieveInstSettings()):setTimeout(function(){klTriggerToolsCheck(++e)},500))}catch(e){klError("MC Trigger Tools Check Error",e)}}function klNewPageCheck(){"use strict";var e=klGetCookie("dpUseLegacy"),t=klGetCookie("dpLegacyFallback");try{0<$(".new_page").length&&("false"!==e||"false"!==t)?0===$(".kl_tools_launch_new_page").length&&($(".new_page").addClass("kl_tools_launch_new_page"),$(".kl_tools_launch_new_page").click(function(){klTriggerToolsCheck(0),klLockContent()}),setTimeout(function(){klNewPageCheck()},1e3),setTimeout(function(){klNewPageCheck()},5e3)):setTimeout(function(){klNewPageCheck()},500)}catch(e){klError("MC New Page Check Error",e)}}function klGetURLParameter(e){"use strict";return decodeURI((new RegExp(e+"=(.+?)(&|$)").exec(location.search)||[null])[1])}function retrieveInstSettings(){try{sessionStorage.getItem("klInstSettings")||$.get("https://multitool.ciditools.com/dp/action.php",{task:"getInstSettings",lms_domain:"dt."+location.hostname},function(e){null!==e&&(console.log("inst settings",e),sessionStorage.setItem("klInstSettings",JSON.stringify(e)))},"json")}catch(e){klError("Retrieve Institutional Settings",e)}}function klLockContent(){window.setInterval(function(){$(DT_variables.iframeID).contents().find(".kl_locked, .dp-locked").each(function(){$(this).attr("contenteditable","false")})},5e3)}function klGetCookie(e){for(var t=e+"=",o=decodeURIComponent(document.cookie).split(";"),s=0;s<o.length;s++){for(var n=o[s];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""}$("body").hasClass("dp-legacy-js-loaded")||($dt={},dtjQuery={},void 0===DT_extended&&(DT_extended=""),-1<document.domain.indexOf(".beta.")&&-1===DT_variables.path.indexOf("dev.cidilabs.com")&&(DT_variables.path="https://stage.designtools.ciditools.com/"),$.ajaxSetup({cache:!0}),dtVersion="2024.7.24",klBasePath=function(){"use strict";for(var e=document.getElementsByTagName("script"),t=e.length,o=0;o<t;o++){var s=e[o].src,n=/^(.*)\/js\/master_controls\.js(\?.*)?$/.exec(s),s=/^(.*)\/js\/master_controls\.full\.js(\?.*)?$/.exec(s);if(null!==n)return n[1];if(null!==s)return s[1]}}(),klContentWrappersArray=["#course_home_content","#wiki_page_show",".discussions","#course_syllabus",".assignments","#wiki_page_revisions",".tool_content_wrapper","#quiz_show","#quiz-instructions","body.people",".user_content"],klUrlsWithEdit=["/pages/","/assignments/","/discussion_topics/","/quizzes/"],klUrlsWithNew=["/assignments/","/discussion_topics/"],coursenum=ENV.COURSE_ID,kl_minicolors=kl_spectrum=kl_tippy=accountChecked=!(availableToAccount=!(formatChecked=!(availableToFormat=!0)))),void 0===ENV.COURSE_ID&&void 0!==ENV.context_asset_string&&null!==ENV.context_asset_string?coursenum=ENV.context_asset_string.replace("course_",""):void 0===coursenum&&(coursenum=klParseCourseNum()),coursenum=void 0!==coursenum?coursenum.toString():"",$(document).ready(function(){"use strict";try{if(!$("body").hasClass("modules"))if($("body").hasClass("dp-legacy-js-loaded"))console.log("------ Account JS is duplicated in Canvas ------");else{var e,t;if($("body").addClass("dp-legacy-js-loaded"),klLoadToolsCheck(),klCheckCourse(),"/edit"!==document.URL.substring(document.URL.length-5))for(t=0;t<=klContentWrappersArray.length;t++)if(0<$(klContentWrappersArray[t]).length){klPageContentCheck(klContentWrappersArray[t],0);break}for(t=0;t<=klUrlsWithEdit.length;t++)if(-1<document.URL.indexOf(klUrlsWithEdit[t])&&-1<document.URL.indexOf("/edit")){klTriggerToolsCheck(0),klLockContent();break}for(t=0;t<=klUrlsWithNew.length;t++)if(-1<document.URL.indexOf(klUrlsWithNew[t])&&-1<document.URL.indexOf("/new")){klTriggerToolsCheck(0),klLockContent();break}var o,s,n=klGetCookie("dpUseLegacy"),i=klGetCookie("dpLegacyFallback"),a=("undefined"!=typeof DpConfig&&"true"!=n||(-1<document.URL.indexOf("/pages")&&-1===document.URL.indexOf("/pages/")&&klNewPageCheck(),0<$(".edit_syllabus_link").length&&("false"!==n||"false"!=i)&&($(".edit_syllabus_link").click(function(){0<$("#kl_tools_wrapper").length?$("#kl_tools_wrapper").show():0===$("#kl_launch_button").length&&(klTriggerToolsCheck(0),klLockContent())}),$("#edit_course_syllabus_form .btn-primary").click(function(){$(".kl_add_tools").hide()}))),void 0!==(e=klGetURLParameter("task"))&&"undefined"!==e&&$.getScript(DT_variables.path+"js/util/tasks.js?ver="+dtVersion,function(){console.log("Design Tools: Tasks")}),document.location.href);-1<a.indexOf("external_tools")&&(o=(o=a.split("external_tools/"))[1],0<(s=$('a[href*="external_tools/'+o+'"]').first()).length)&&(-1<s.text().indexOf("Multi-Tool")||-1<s.text().indexOf("Multi Tool"))&&$(".ic-Layout-wrapper").css("max-width","1700px"),(-1!==location.href.indexOf("/rubrics/")||0<$(".edit_rubric_link").length&&0===$(".kl_wrapper").length)&&void 0!==DT_variables.sortableRubrics&&DT_variables.sortableRubrics&&($("body").addClass("using_design_tools"),$.getScript(DT_variables.path+"js/tools_liveView.js?ver="+dtVersion,function(){console.log("tools_liveView.js Loaded.")})),$(".add_module_item_link, #assignment_external_tool_tag_attributes_url_find").on("click",function(){$("#add_module_item_select").on("change",function(){setTimeout(function(){removeLtiTools()},50),setTimeout(function(){removeLtiTools()},500)}),setTimeout(function(){removeLtiTools()},500),removeLtiTools()})}}catch(e){klError("MC Ready Error",e)}});