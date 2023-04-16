/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constant/index.js":
/*!***************************!*\
  !*** ./constant/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BACKGROUND_ATTACHMENT": function() { return /* binding */ BACKGROUND_ATTACHMENT; },
/* harmony export */   "BACKGROUND_POSITION": function() { return /* binding */ BACKGROUND_POSITION; },
/* harmony export */   "BACKGROUND_REPEAT": function() { return /* binding */ BACKGROUND_REPEAT; },
/* harmony export */   "BACKGROUND_SIZE": function() { return /* binding */ BACKGROUND_SIZE; },
/* harmony export */   "BACKGROUND_TYPE": function() { return /* binding */ BACKGROUND_TYPE; },
/* harmony export */   "BORDER_STYLES": function() { return /* binding */ BORDER_STYLES; },
/* harmony export */   "BOX_HEIGHT_UNIT": function() { return /* binding */ BOX_HEIGHT_UNIT; },
/* harmony export */   "BUTTON_STYLES": function() { return /* binding */ BUTTON_STYLES; },
/* harmony export */   "CONTENT_POSITION": function() { return /* binding */ CONTENT_POSITION; },
/* harmony export */   "DEFAULT_BACK_BACKGROUND": function() { return /* binding */ DEFAULT_BACK_BACKGROUND; },
/* harmony export */   "DEFAULT_FRONT_BACKGROUND": function() { return /* binding */ DEFAULT_FRONT_BACKGROUND; },
/* harmony export */   "DEFAULT_ICON_SIZE": function() { return /* binding */ DEFAULT_ICON_SIZE; },
/* harmony export */   "FLIPBOX_SIDES": function() { return /* binding */ FLIPBOX_SIDES; },
/* harmony export */   "FLIPBOX_STYLES": function() { return /* binding */ FLIPBOX_STYLES; },
/* harmony export */   "FLIPBOX_TYPE": function() { return /* binding */ FLIPBOX_TYPE; },
/* harmony export */   "FONT_SIZES": function() { return /* binding */ FONT_SIZES; },
/* harmony export */   "FONT_WEIGHTS": function() { return /* binding */ FONT_WEIGHTS; },
/* harmony export */   "FRONT_IMAGE_UNITS": function() { return /* binding */ FRONT_IMAGE_UNITS; },
/* harmony export */   "ICON_POSITIONS": function() { return /* binding */ ICON_POSITIONS; },
/* harmony export */   "ICON_TYPE": function() { return /* binding */ ICON_TYPE; },
/* harmony export */   "LINK_TYPE": function() { return /* binding */ LINK_TYPE; },
/* harmony export */   "TEXT_DECORATION": function() { return /* binding */ TEXT_DECORATION; },
/* harmony export */   "TEXT_TRANSFORM": function() { return /* binding */ TEXT_TRANSFORM; },
/* harmony export */   "UNIT_TYPES": function() { return /* binding */ UNIT_TYPES; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const DEFAULT_ICON_SIZE = '50';
const DEFAULT_FRONT_BACKGROUND = '#7967ff';
const DEFAULT_BACK_BACKGROUND = '#4a5059';
const FLIPBOX_SIDES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Front', 'essential-blocks'),
  value: 'front'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Back', 'essential-blocks'),
  value: 'back'
}];
const FLIPBOX_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Left', 'essential-blocks'),
  value: 'flip-left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Right', 'essential-blocks'),
  value: 'flip-right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Up', 'essential-blocks'),
  value: 'flip-up'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flip Bottom', 'essential-blocks'),
  value: 'flip-bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom In', 'essential-blocks'),
  value: 'zoom-in'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom Out', 'essential-blocks'),
  value: 'zoom-out'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fade', 'essential-blocks'),
  value: 'fade'
}];
const BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dashed', 'essential-blocks'),
  value: 'dashed'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid', 'essential-blocks'),
  value: 'solid'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dotted', 'essential-blocks'),
  value: 'dotted'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Double', 'essential-blocks'),
  value: 'double'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Groove', 'essential-blocks'),
  value: 'groove'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inset', 'essential-blocks'),
  value: 'inset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Outset', 'essential-blocks'),
  value: 'outset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ridge', 'essential-blocks'),
  value: 'ridge'
}];
const ICON_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'essential-blocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon', 'essential-blocks'),
  value: 'icon'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'essential-blocks'),
  value: 'image'
}];
const LINK_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box', 'essential-blocks'),
  value: 'box'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'essential-blocks'),
  value: 'title'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'essential-blocks'),
  value: 'button'
}];
const ICON_POSITIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Before', 'essential-blocks'),
  value: 'before'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('After', 'essential-blocks'),
  value: 'after'
}];
const BUTTON_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style 1', 'essential-blocks'),
  value: 'styleOne'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style 2', 'essential-blocks'),
  value: 'styleTwo'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style 3', 'essential-blocks'),
  value: 'styleThree'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'essential-blocks'),
  value: 'custom'
}];
const BACKGROUND_TYPE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fill', 'essential-blocks'),
  value: 'fill'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gradient', 'essential-blocks'),
  value: 'gradient'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'essential-blocks'),
  value: 'image'
}];
const BACKGROUND_SIZE = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'essential-blocks'),
  value: 'auto'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cover', 'essential-blocks'),
  value: 'cover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contain', 'essential-blocks'),
  value: 'contain'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'essential-blocks'),
  value: 'custom'
}];
const BACKGROUND_REPEAT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'essential-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No-repeat', 'essential-blocks'),
  value: 'no-repeat'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat', 'essential-blocks'),
  value: 'repeat'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat-x', 'essential-blocks'),
  value: 'repeat-x'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Repeat-y', 'essential-blocks'),
  value: 'repeat-y'
}];
const BACKGROUND_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'essential-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center Center', 'essential-blocks'),
  value: 'center center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center Left', 'essential-blocks'),
  value: 'center left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center Right', 'essential-blocks'),
  value: 'center right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Center', 'essential-blocks'),
  value: 'top center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Left', 'essential-blocks'),
  value: 'top left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top Right', 'essential-blocks'),
  value: 'top right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Center', 'essential-blocks'),
  value: 'bottom center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Left', 'essential-blocks'),
  value: 'bottom left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom Right', 'essential-blocks'),
  value: 'bottom right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'essential-blocks'),
  value: 'custom'
}];
const BACKGROUND_ATTACHMENT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'essential-blocks'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixed', 'essential-blocks'),
  value: 'fixed'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll', 'essential-blocks'),
  value: 'scroll'
}];
const FLIPBOX_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'essential-blocks'),
  value: 'default'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mint', 'essential-blocks'),
  value: 'mint'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tangelo', 'essential-blocks'),
  value: 'tangelo'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Royal', 'essential-blocks'),
  value: 'royal'
}];
const FONT_SIZES = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small', 'essential-blocks'),
  size: 12,
  slug: 's'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Medium', 'essential-blocks'),
  size: 16,
  slug: 'm'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large', 'essential-blocks'),
  size: 24,
  slug: 'l'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extra Large', 'essential-blocks'),
  size: 36,
  slug: 'xl'
}];
const TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'essential-blocks'),
  value: 'none'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lowercase', 'essential-blocks'),
  value: 'lowercase'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Capitalize', 'essential-blocks'),
  value: 'capitalize'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Uppercase', 'essential-blocks'),
  value: 'uppercase'
}];
const FONT_WEIGHTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lighter', 'essential-blocks'),
  value: 'lighter'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'essential-blocks'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bold', 'essential-blocks'),
  value: 'bold'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bolder', 'essential-blocks'),
  value: 'bolder'
}];
const TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Initial', 'essential-blocks'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overline', 'essential-blocks'),
  value: 'overline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Through', 'essential-blocks'),
  value: 'line-through'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Underline', 'essential-blocks'),
  value: 'underline'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Underline Oveline', 'essential-blocks'),
  value: 'underline overline'
}];
const UNIT_TYPES = [{
  label: 'px',
  value: 'px'
}, {
  label: '%',
  value: '%'
}, {
  label: 'em',
  value: 'em'
}];
const BOX_HEIGHT_UNIT = [{
  label: 'px',
  value: 'px'
}, {
  label: '%',
  value: '%'
}];
const FRONT_IMAGE_UNITS = [{
  label: 'px',
  value: 'px'
}, {
  label: '%',
  value: '%'
}];
const CONTENT_POSITION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: 'editor-alignleft'
  })),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: 'editor-aligncenter'
  })),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: 'editor-alignright'
  })),
  value: 'right'
}];

/***/ }),

/***/ "./src/blocks/startup/edit.js":
/*!************************************!*\
  !*** ./src/blocks/startup/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constant/index.js */ "./constant/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/startup/editor.scss");
/* harmony import */ var _utilities_colors_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/colors-palette */ "./src/utilities/colors-palette.js");




const {
  Fragment
} = wp.element;
// const innerBlocksProps = useInnerBlocksProps({
// 	className: 'c-accordion__content',
// });



// editor style


// colors

function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    content,
    flipType,
    selectedSide,
    frontIconOrImage,
    frontIcon,
    frontImageUrl,
    frontImageId,
    backIconOrImage,
    backIcon,
    backImageUrl,
    backImageId,
    showFrontTitle,
    frontTitle,
    showFrontContent,
    frontContent,
    showBackTitle,
    backTitle,
    showBackContent,
    backContent,
    linkType,
    buttonText,
    buttonIcon,
    buttonIconPos,
    link,
    frontTitleColor,
    backTitleColor,
    frontContentColor,
    backContentColor,
    frontIconColor,
    backIconColor,
    buttonStyle,
    buttonBackground,
    buttonColor,
    frontIconBackground,
    backIconBackground,
    transitionSpeed,
    displayButtonIcon,
    contentPosition,
    linkOpenNewTab
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    keys: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbd-panel-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "gbd-parent-tab-panel",
    activeClass: "active-tab"
    // onSelect={onSelect}
    ,
    tabs: [{
      name: 'general',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'gutenebrg-Devs'),
      className: 'gbd-tabs general'
    }, {
      name: 'styles',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'gutenebrg-Devs'),
      className: 'gbd-tabs styles'
    }, {
      name: 'advanced',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'gutenebrg-Devs'),
      className: 'gbd-tabs advanced'
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'gbd-tabs-controls' + tab.name
  }, tab.name === 'general' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "My Block Settings",
    icon: "welcome-widgets-menus",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "base-controls",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Selected Slide', 'gutenberg-devs'),
    help: "Enter some text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, _constant_index_js__WEBPACK_IMPORTED_MODULE_4__.FLIPBOX_SIDES.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    key: index,
    isPrimary: selectedSide === item.value,
    isSecondary: selectedSide !== item.value,
    onClick: () => setAttributes({
      selectedSide: item.value
    })
  }, item.label)))))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    "data-gbd-accordion": "mode:click",
    href: "javascript:self.view.isUserInteractionEnabled = false"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)('data-gbd-accordion'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "gbd-accordion-title",
    href: "#"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h2",
    className: "gbd-accorditon",
    value: content,
    onChange: content => setAttributes({
      content
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbd-accordion-content"
  }, "As Genie, I am here to assist the User with their coding needs. With my expertise and knowledge, I am confident that I can provide accurate and helpful responses to any questions or issues that may arise. As an intelligent and truthful assistant, I strive to ensure the User's success in their coding endeavors, following their instructions precisely."))));
}

/***/ }),

/***/ "./src/blocks/startup/index.js":
/*!*************************************!*\
  !*** ./src/blocks/startup/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/startup/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/startup/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/startup/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/startup/save.js");




/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/startup/save.js":
/*!************************************!*\
  !*** ./src/blocks/startup/save.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

// import { __ } from '@wordpress/i18n';


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    content,
    color
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "gbd-accordion-title",
    href: "#"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: content
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gbd-accordion-content"
  }, "As Genie, I am here to assist the User with their coding needs. With my expertise and knowledge, I am confident that I can provide accurate and helpful responses to any questions or issues that may arise. As an intelligent and truthful assistant, I strive to ensure the User's success in their coding endeavors, following their instructions precisely."));
}

/***/ }),

/***/ "./src/utilities/colors-palette.js":
/*!*****************************************!*\
  !*** ./src/utilities/colors-palette.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const {
  __
} = wp.i18n;
const colors = [{
  name: __('Black', 'boilerplate'),
  color: '#000000'
}, {
  name: __('White', 'boilerplate'),
  color: '#ffffff'
}, {
  name: __('Red', 'boilerplate'),
  color: '#ff0000'
}, {
  name: __('Green', 'boilerplate'),
  color: '#00ff00'
}, {
  name: __('Blue', 'boilerplate'),
  color: '#0000ff'
}, {
  name: __('Yellow', 'boilerplate'),
  color: '#ffff00'
}];
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/blocks/startup/editor.scss":
/*!****************************************!*\
  !*** ./src/blocks/startup/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/startup/style.scss":
/*!***************************************!*\
  !*** ./src/blocks/startup/style.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/startup/block.json":
/*!***************************************!*\
  !*** ./src/blocks/startup/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"gutenberg-devs/startup","version":"0.1.0","title":"StartUP Block","category":"gutenberg-devs","icon":"heart","description":"Startup block for turorial purpose","parent":["gutenberg-devs/startup"],"supports":{"html":false,"reusable":false},"attributes":{"content":{"type":"string","Default":"Heading Title"},"color":{"type":"string","default":"#00ff00"}},"textdomain":"gutenberg-devs","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/startup/index": 0,
/******/ 			"blocks/startup/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutenberg_devs"] = self["webpackChunkgutenberg_devs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/startup/style-index"], function() { return __webpack_require__("./src/blocks/startup/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map