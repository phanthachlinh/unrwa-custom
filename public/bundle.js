/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/pages/AbUi_HomePage.ts
/**
* Class renders changes to the Home Page
**/
var AbUi_HomePage = /** @class */ (function () {
    function AbUi_HomePage() {
    }
    /**
    * Changes background color and font color of the event item
    **/
    AbUi_HomePage.prototype.render = function () {
    };
    return AbUi_HomePage;
}());
/* harmony default export */ var pages_AbUi_HomePage = (AbUi_HomePage);

// CONCATENATED MODULE: ./src/pages/Ab_AllEventsPage.ts
/**
* renders changes to the All Projects page /events
**/
var AbUi_AllEventsPage = /** @class */ (function () {
    function AbUi_AllEventsPage(translations, language) {
        this.translations = translations;
        this.language = language;
        this.events = document.querySelectorAll('.event-item');
    }
    /**
        * change color of event item font and background
        **/
    AbUi_AllEventsPage.prototype._changeEventItemFontAndBackgroundColor = function () {
        if (this.events.length === 0) {
            console.error('No events found (.event-item)');
            return;
        }
        for (var i = 0; i < this.events.length; i++) {
            var backgroundColor = this.events[i].querySelector('.color-secondary');
            if (!backgroundColor) {
                console.error('Primary color not found on element no. ' + (i + 1));
                continue;
            }
            var fontColor = this.events[i].querySelector('.color-primary');
            if (!fontColor) {
                console.error('Secondary color not found on element no. ' + (i + 1));
                continue;
            }
            var eventDetail = this.events[i].querySelector('.event-details');
            if (eventDetail)
                eventDetail.style.backgroundColor = backgroundColor.innerText;
            if (eventDetail)
                eventDetail.style.backgroundColor = backgroundColor.innerText;
            var eventHeadline = this.events[i].querySelector('.event-description>h3>a');
            var eventButton = this.events[i].querySelector('.page-create');
            if (eventHeadline && eventButton) {
                eventHeadline.style.color = fontColor.innerText;
                eventButton.style.color = fontColor.innerText;
            }
        }
    };
    AbUi_AllEventsPage.prototype._renderBottomComponent = function () {
        var _a;
        var _b = this.translations[this.language].allEventsPage.custom.bottomComponent, headline = _b.headline, content = _b.content, buttonText = _b.buttonText;
        var BottomComponent = "\n\t\t\t<section class=\"bottom-component\">\n\t\t\t\t<h1>\n\t\t\t\t\t" + headline + "\n\t\t\t\t</h1>\n\t\t\t\t<div class=\"text-container\">\n\t\t\t\t\t" + content + "\n\t\t\t\t</div>\n\t\t\t\t<a>" + buttonText + "</a>\n\t\t\t</section>\n\t\t";
        (_a = document.querySelector('#events-index #wrapper .global-container')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', BottomComponent);
    };
    AbUi_AllEventsPage.prototype.render = function () {
        this._renderBottomComponent();
        this._changeEventItemFontAndBackgroundColor();
    };
    return AbUi_AllEventsPage;
}());
/* harmony default export */ var Ab_AllEventsPage = (AbUi_AllEventsPage);

// CONCATENATED MODULE: ./src/pages/general.ts
var General = /** @class */ (function () {
    function General() {
        this.eventListItems = Array.from(document.querySelectorAll('.event-item'));
        this.eventsThumbnailContainer = document.querySelector('.examples-wrapper-inner ul,.section-events ul');
    }
    General.prototype._changeEventItemColors = function () {
        if (document.getElementById('events-index'))
            return;
        if (this.eventListItems.length === 0) {
            console.error('No event items found');
            return;
        }
        for (var i = 0; i < this.eventListItems.length; i++) {
            var eventListItem = this.eventListItems[i];
            var backgroundColor = eventListItem.querySelector('.color-primary');
            var eventIcon = eventListItem.querySelector('.event-icon');
            if (!backgroundColor) {
                console.error('Background (Primary color) not defined in event item no ' + (this.eventListItems.indexOf(eventListItem) + 1));
                continue;
            }
            var eventDetails = eventListItem.querySelector('.event-details');
            if (!eventDetails) {
                console.error('.eventDetails not defined in event item no ' + (this.eventListItems.indexOf(eventListItem) + 1));
                continue;
            }
            else
                eventDetails.style.backgroundColor = backgroundColor.innerText;
            if (!eventIcon) {
                console.error('EventIcon not defined in event item no ' + (this.eventListItems.indexOf(eventListItem) + 1));
                continue;
            }
            else
                eventDetails.insertAdjacentHTML('afterbegin', '<img class="event-detail__icon" src="' + eventIcon.innerHTML + '" />');
        }
    };
    General.prototype._adaptEventItemHeight = function () {
        if (document.querySelector('#events-index'))
            return;
        if (!this.eventsThumbnailContainer) {
            console.warn('No event example list found');
            return;
        }
        var highestEventItem = 0;
        for (var i = 0; i < this.eventsThumbnailContainer.children.length; i++) {
            if (this.eventsThumbnailContainer.children[i].clientHeight > highestEventItem)
                highestEventItem = this.eventsThumbnailContainer.children[i].clientHeight;
        }
        for (var i = 0; i < this.eventsThumbnailContainer.children.length; i++) {
            this.eventsThumbnailContainer.children[i].style.minHeight = highestEventItem.toString() + 'px';
        }
        console.log(highestEventItem);
    };
    General.prototype._renderFundraisingTarget = function () {
        for (var i = 0; i < this.eventListItems.length; i++) {
            var fundraisingTargetElement = this.eventListItems[i].querySelector('.projets');
            if (!fundraisingTargetElement) {
                console.warn('Fundraising target container not found (.projets)');
                return;
            }
            var fundraisingTarget = fundraisingTargetElement.innerText;
            fundraisingTarget = fundraisingTarget.split(' ').filter(function (value) { return value !== "" && value !== "\n"; });
            var eventHeadline = this.eventListItems[i].querySelector('.event-description h3');
            if (!eventHeadline) {
                console.error('Event Headline not found on item no. ' + (i + 1));
                continue;
            }
            if (fundraisingTarget.length !== 0) {
                eventHeadline.insertAdjacentHTML('afterend', "\n\t\t\t\t<p class=\"fundraising-target\">\n\t\t\t\t\tUS$ " + fundraisingTarget[2] + " of fundraising target\n\t\t\t\t\t</p>\n\t\t\t\t\t");
            }
            else {
                eventHeadline.insertAdjacentHTML('afterend', "\n\t\t\t\t<p class=\"fundraising-target\">\n\t\t\t\t\tFree fundraising target\n\t\t\t\t\t</p>\n\t\t\t\t\t");
            }
        }
    };
    General.prototype.render = function () {
        this._renderFundraisingTarget();
        this._changeEventItemColors();
        this._adaptEventItemHeight();
    };
    return General;
}());
/* harmony default export */ var general = (General);

// CONCATENATED MODULE: ./src/style.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/app.ts




var PageTypes;
(function (PageTypes) {
    PageTypes["HomePage"] = "indexs-index";
    PageTypes["AllEventsPage"] = "events-index";
    PageTypes["EventPage"] = "events-show";
    PageTypes["ProjectPage"] = "projects-show";
})(PageTypes || (PageTypes = {}));
window.AbUnrwa = function () {
    var _a;
    var TRANSLATIONS = window.pageData.TRANSLATIONS;
    var currentLanguage = (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.lang;
    if (!currentLanguage)
        currentLanguage = 'en';
    var pageType = document.getElementsByTagName('body')[0].id;
    switch (pageType) {
        case PageTypes.HomePage:
            new pages_AbUi_HomePage().render();
            break;
        case PageTypes.AllEventsPage:
            new Ab_AllEventsPage(TRANSLATIONS, currentLanguage).render();
    }
    new general().render();
};


/***/ })
/******/ ]);