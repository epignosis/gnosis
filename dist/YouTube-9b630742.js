
  /**
   * @license
   * author: epignosis front-end team
   * @epignosis_llc/gnosis.js v0.1.0-beta.2
   * Released under the MIT license.
   */

import { g as getDefaultExportFromCjs, p as patterns, u as utils } from './index-70662575.js';
import React__default from 'react';

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

var YouTube$2 = {};

(function (exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(React__default);

var _utils = utils;

var _patterns = patterns;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SDK_URL = 'https://www.youtube.com/iframe_api';
var SDK_GLOBAL = 'YT';
var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
var NOCOOKIE_HOST = 'https://www.youtube-nocookie.com';

var YouTube = /*#__PURE__*/function (_Component) {
  _inherits(YouTube, _Component);

  var _super = _createSuper(YouTube);

  function YouTube() {
    var _this;

    _classCallCheck(this, YouTube);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

    _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function (url) {
      if (url instanceof Array) {
        return {
          listType: 'playlist',
          playlist: url.map(_this.getID).join(',')
        };
      }

      if (MATCH_PLAYLIST.test(url)) {
        var _url$match = url.match(MATCH_PLAYLIST),
            _url$match2 = _slicedToArray(_url$match, 2),
            playlistId = _url$match2[1];

        return {
          listType: 'playlist',
          list: playlistId.replace(/^UC/, 'UU')
        };
      }

      if (MATCH_USER_UPLOADS.test(url)) {
        var _url$match3 = url.match(MATCH_USER_UPLOADS),
            _url$match4 = _slicedToArray(_url$match3, 2),
            username = _url$match4[1];

        return {
          listType: 'user_uploads',
          list: username
        };
      }

      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "onStateChange", function (event) {
      var data = event.data;
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onBuffer = _this$props.onBuffer,
          onBufferEnd = _this$props.onBufferEnd,
          onEnded = _this$props.onEnded,
          onReady = _this$props.onReady,
          loop = _this$props.loop,
          _this$props$config = _this$props.config,
          playerVars = _this$props$config.playerVars,
          onUnstarted = _this$props$config.onUnstarted;
      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
          UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
          CUED = _window$SDK_GLOBAL$Pl.CUED;
      if (data === UNSTARTED) onUnstarted();

      if (data === PLAYING) {
        onPlay();
        onBufferEnd();
      }

      if (data === PAUSED) onPause();
      if (data === BUFFERING) onBuffer();

      if (data === ENDED) {
        var isPlaylist = !!_this.callPlayer('getPlaylist'); // Only loop manually if not playing a playlist

        if (loop && !isPlaylist) {
          if (playerVars.start) {
            _this.seekTo(playerVars.start);
          } else {
            _this.play();
          }
        }

        onEnded();
      }

      if (data === CUED) onReady();
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.callPlayer('mute');
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.callPlayer('unMute');
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
      _this.container = container;
    });

    return _this;
  }

  _createClass(YouTube, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
    }
  }, {
    key: "getID",
    value: function getID(url) {
      if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
        return null;
      }

      return url.match(_patterns.MATCH_URL_YOUTUBE)[1];
    }
  }, {
    key: "load",
    value: function load(url, isReady) {
      var _this2 = this;

      var _this$props2 = this.props,
          playing = _this$props2.playing,
          muted = _this$props2.muted,
          playsinline = _this$props2.playsinline,
          controls = _this$props2.controls,
          loop = _this$props2.loop,
          config = _this$props2.config,
          _onError = _this$props2.onError;
      var playerVars = config.playerVars,
          embedOptions = config.embedOptions;
      var id = this.getID(url);

      if (isReady) {
        if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
          this.player.loadPlaylist(this.parsePlaylist(url));
          return;
        }

        this.player.cueVideoById({
          videoId: id,
          startSeconds: (0, _utils.parseStartTime)(url) || playerVars.start,
          endSeconds: (0, _utils.parseEndTime)(url) || playerVars.end
        });
        return;
      }

      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
        return YT.loaded;
      }).then(function (YT) {
        if (!_this2.container) return;
        _this2.player = new YT.Player(_this2.container, _objectSpread({
          width: '100%',
          height: '100%',
          videoId: id,
          playerVars: _objectSpread(_objectSpread({
            autoplay: playing ? 1 : 0,
            mute: muted ? 1 : 0,
            controls: controls ? 1 : 0,
            start: (0, _utils.parseStartTime)(url),
            end: (0, _utils.parseEndTime)(url),
            origin: window.location.origin,
            playsinline: playsinline ? 1 : 0
          }, _this2.parsePlaylist(url)), playerVars),
          events: {
            onReady: function onReady() {
              if (loop) {
                _this2.player.setLoop(true); // Enable playlist looping

              }

              _this2.props.onReady();
            },
            onStateChange: _this2.onStateChange,
            onError: function onError(event) {
              return _onError(event.data);
            }
          },
          host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : undefined
        }, embedOptions));
      }, _onError);

      if (embedOptions.events) {
        console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause');
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.callPlayer('playVideo');
    }
  }, {
    key: "pause",
    value: function pause() {
      this.callPlayer('pauseVideo');
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!document.body.contains(this.callPlayer('getIframe'))) return;
      this.callPlayer('stopVideo');
    }
  }, {
    key: "seekTo",
    value: function seekTo(amount) {
      this.callPlayer('seekTo', amount);

      if (!this.props.playing) {
        this.pause();
      }
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.callPlayer('setVolume', fraction * 100);
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.callPlayer('setPlaybackRate', rate);
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.callPlayer('setLoop', loop);
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.callPlayer('getDuration');
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.callPlayer('getCurrentTime');
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
    }
  }, {
    key: "render",
    value: function render() {
      var display = this.props.display;
      var style = {
        width: '100%',
        height: '100%',
        display: display
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.ref
      }));
    }
  }]);

  return YouTube;
}(_react.Component);

exports["default"] = YouTube;

_defineProperty(YouTube, "displayName", 'YouTube');

_defineProperty(YouTube, "canPlay", _patterns.canPlay.youtube);
}(YouTube$2));

var YouTube = /*@__PURE__*/getDefaultExportFromCjs(YouTube$2);

var YouTube$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': YouTube
}, [YouTube$2]));

export { YouTube$1 as Y };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWW91VHViZS05YjYzMDc0Mi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvWW91VHViZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuXG52YXIgX3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFNES19VUkwgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG52YXIgU0RLX0dMT0JBTCA9ICdZVCc7XG52YXIgU0RLX0dMT0JBTF9SRUFEWSA9ICdvbllvdVR1YmVJZnJhbWVBUElSZWFkeSc7XG52YXIgTUFUQ0hfUExBWUxJU1QgPSAvWz8mXSg/Omxpc3R8Y2hhbm5lbCk9KFthLXpBLVowLTlfLV0rKS87XG52YXIgTUFUQ0hfVVNFUl9VUExPQURTID0gL3VzZXJcXC8oW2EtekEtWjAtOV8tXSspXFwvPy87XG52YXIgTUFUQ0hfTk9DT09LSUUgPSAveW91dHViZS1ub2Nvb2tpZVxcLmNvbS87XG52YXIgTk9DT09LSUVfSE9TVCA9ICdodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbSc7XG5cbnZhciBZb3VUdWJlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhZb3VUdWJlLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFlvdVR1YmUpO1xuXG4gIGZ1bmN0aW9uIFlvdVR1YmUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFlvdVR1YmUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjYWxsUGxheWVyXCIsIF91dGlscy5jYWxsUGxheWVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXJzZVBsYXlsaXN0XCIsIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpc3RUeXBlOiAncGxheWxpc3QnLFxuICAgICAgICAgIHBsYXlsaXN0OiB1cmwubWFwKF90aGlzLmdldElEKS5qb2luKCcsJylcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKE1BVENIX1BMQVlMSVNULnRlc3QodXJsKSkge1xuICAgICAgICB2YXIgX3VybCRtYXRjaCA9IHVybC5tYXRjaChNQVRDSF9QTEFZTElTVCksXG4gICAgICAgICAgICBfdXJsJG1hdGNoMiA9IF9zbGljZWRUb0FycmF5KF91cmwkbWF0Y2gsIDIpLFxuICAgICAgICAgICAgcGxheWxpc3RJZCA9IF91cmwkbWF0Y2gyWzFdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGlzdFR5cGU6ICdwbGF5bGlzdCcsXG4gICAgICAgICAgbGlzdDogcGxheWxpc3RJZC5yZXBsYWNlKC9eVUMvLCAnVVUnKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoTUFUQ0hfVVNFUl9VUExPQURTLnRlc3QodXJsKSkge1xuICAgICAgICB2YXIgX3VybCRtYXRjaDMgPSB1cmwubWF0Y2goTUFUQ0hfVVNFUl9VUExPQURTKSxcbiAgICAgICAgICAgIF91cmwkbWF0Y2g0ID0gX3NsaWNlZFRvQXJyYXkoX3VybCRtYXRjaDMsIDIpLFxuICAgICAgICAgICAgdXNlcm5hbWUgPSBfdXJsJG1hdGNoNFsxXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpc3RUeXBlOiAndXNlcl91cGxvYWRzJyxcbiAgICAgICAgICBsaXN0OiB1c2VybmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25TdGF0ZUNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uUGxheSA9IF90aGlzJHByb3BzLm9uUGxheSxcbiAgICAgICAgICBvblBhdXNlID0gX3RoaXMkcHJvcHMub25QYXVzZSxcbiAgICAgICAgICBvbkJ1ZmZlciA9IF90aGlzJHByb3BzLm9uQnVmZmVyLFxuICAgICAgICAgIG9uQnVmZmVyRW5kID0gX3RoaXMkcHJvcHMub25CdWZmZXJFbmQsXG4gICAgICAgICAgb25FbmRlZCA9IF90aGlzJHByb3BzLm9uRW5kZWQsXG4gICAgICAgICAgb25SZWFkeSA9IF90aGlzJHByb3BzLm9uUmVhZHksXG4gICAgICAgICAgbG9vcCA9IF90aGlzJHByb3BzLmxvb3AsXG4gICAgICAgICAgX3RoaXMkcHJvcHMkY29uZmlnID0gX3RoaXMkcHJvcHMuY29uZmlnLFxuICAgICAgICAgIHBsYXllclZhcnMgPSBfdGhpcyRwcm9wcyRjb25maWcucGxheWVyVmFycyxcbiAgICAgICAgICBvblVuc3RhcnRlZCA9IF90aGlzJHByb3BzJGNvbmZpZy5vblVuc3RhcnRlZDtcbiAgICAgIHZhciBfd2luZG93JFNES19HTE9CQUwkUGwgPSB3aW5kb3dbU0RLX0dMT0JBTF0uUGxheWVyU3RhdGUsXG4gICAgICAgICAgVU5TVEFSVEVEID0gX3dpbmRvdyRTREtfR0xPQkFMJFBsLlVOU1RBUlRFRCxcbiAgICAgICAgICBQTEFZSU5HID0gX3dpbmRvdyRTREtfR0xPQkFMJFBsLlBMQVlJTkcsXG4gICAgICAgICAgUEFVU0VEID0gX3dpbmRvdyRTREtfR0xPQkFMJFBsLlBBVVNFRCxcbiAgICAgICAgICBCVUZGRVJJTkcgPSBfd2luZG93JFNES19HTE9CQUwkUGwuQlVGRkVSSU5HLFxuICAgICAgICAgIEVOREVEID0gX3dpbmRvdyRTREtfR0xPQkFMJFBsLkVOREVELFxuICAgICAgICAgIENVRUQgPSBfd2luZG93JFNES19HTE9CQUwkUGwuQ1VFRDtcbiAgICAgIGlmIChkYXRhID09PSBVTlNUQVJURUQpIG9uVW5zdGFydGVkKCk7XG5cbiAgICAgIGlmIChkYXRhID09PSBQTEFZSU5HKSB7XG4gICAgICAgIG9uUGxheSgpO1xuICAgICAgICBvbkJ1ZmZlckVuZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSA9PT0gUEFVU0VEKSBvblBhdXNlKCk7XG4gICAgICBpZiAoZGF0YSA9PT0gQlVGRkVSSU5HKSBvbkJ1ZmZlcigpO1xuXG4gICAgICBpZiAoZGF0YSA9PT0gRU5ERUQpIHtcbiAgICAgICAgdmFyIGlzUGxheWxpc3QgPSAhIV90aGlzLmNhbGxQbGF5ZXIoJ2dldFBsYXlsaXN0Jyk7IC8vIE9ubHkgbG9vcCBtYW51YWxseSBpZiBub3QgcGxheWluZyBhIHBsYXlsaXN0XG5cbiAgICAgICAgaWYgKGxvb3AgJiYgIWlzUGxheWxpc3QpIHtcbiAgICAgICAgICBpZiAocGxheWVyVmFycy5zdGFydCkge1xuICAgICAgICAgICAgX3RoaXMuc2Vla1RvKHBsYXllclZhcnMuc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25FbmRlZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSA9PT0gQ1VFRCkgb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcignbXV0ZScpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInVubXV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jYWxsUGxheWVyKCd1bk11dGUnKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWZcIiwgZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgX3RoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFlvdVR1YmUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SURcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SUQodXJsKSB7XG4gICAgICBpZiAoIXVybCB8fCB1cmwgaW5zdGFuY2VvZiBBcnJheSB8fCBNQVRDSF9QTEFZTElTVC50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1cmwubWF0Y2goX3BhdHRlcm5zLk1BVENIX1VSTF9ZT1VUVUJFKVsxXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCwgaXNSZWFkeSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBsYXlpbmcgPSBfdGhpcyRwcm9wczIucGxheWluZyxcbiAgICAgICAgICBtdXRlZCA9IF90aGlzJHByb3BzMi5tdXRlZCxcbiAgICAgICAgICBwbGF5c2lubGluZSA9IF90aGlzJHByb3BzMi5wbGF5c2lubGluZSxcbiAgICAgICAgICBjb250cm9scyA9IF90aGlzJHByb3BzMi5jb250cm9scyxcbiAgICAgICAgICBsb29wID0gX3RoaXMkcHJvcHMyLmxvb3AsXG4gICAgICAgICAgY29uZmlnID0gX3RoaXMkcHJvcHMyLmNvbmZpZyxcbiAgICAgICAgICBfb25FcnJvciA9IF90aGlzJHByb3BzMi5vbkVycm9yO1xuICAgICAgdmFyIHBsYXllclZhcnMgPSBjb25maWcucGxheWVyVmFycyxcbiAgICAgICAgICBlbWJlZE9wdGlvbnMgPSBjb25maWcuZW1iZWRPcHRpb25zO1xuICAgICAgdmFyIGlkID0gdGhpcy5nZXRJRCh1cmwpO1xuXG4gICAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgICBpZiAoTUFUQ0hfUExBWUxJU1QudGVzdCh1cmwpIHx8IE1BVENIX1VTRVJfVVBMT0FEUy50ZXN0KHVybCkgfHwgdXJsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICB0aGlzLnBsYXllci5sb2FkUGxheWxpc3QodGhpcy5wYXJzZVBsYXlsaXN0KHVybCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheWVyLmN1ZVZpZGVvQnlJZCh7XG4gICAgICAgICAgdmlkZW9JZDogaWQsXG4gICAgICAgICAgc3RhcnRTZWNvbmRzOiAoMCwgX3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpIHx8IHBsYXllclZhcnMuc3RhcnQsXG4gICAgICAgICAgZW5kU2Vjb25kczogKDAsIF91dGlscy5wYXJzZUVuZFRpbWUpKHVybCkgfHwgcGxheWVyVmFycy5lbmRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKDAsIF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwsIFNES19HTE9CQUxfUkVBRFksIGZ1bmN0aW9uIChZVCkge1xuICAgICAgICByZXR1cm4gWVQubG9hZGVkO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoWVQpIHtcbiAgICAgICAgaWYgKCFfdGhpczIuY29udGFpbmVyKSByZXR1cm47XG4gICAgICAgIF90aGlzMi5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKF90aGlzMi5jb250YWluZXIsIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgdmlkZW9JZDogaWQsXG4gICAgICAgICAgcGxheWVyVmFyczogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIGF1dG9wbGF5OiBwbGF5aW5nID8gMSA6IDAsXG4gICAgICAgICAgICBtdXRlOiBtdXRlZCA/IDEgOiAwLFxuICAgICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzID8gMSA6IDAsXG4gICAgICAgICAgICBzdGFydDogKDAsIF91dGlscy5wYXJzZVN0YXJ0VGltZSkodXJsKSxcbiAgICAgICAgICAgIGVuZDogKDAsIF91dGlscy5wYXJzZUVuZFRpbWUpKHVybCksXG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICAgICBwbGF5c2lubGluZTogcGxheXNpbmxpbmUgPyAxIDogMFxuICAgICAgICAgIH0sIF90aGlzMi5wYXJzZVBsYXlsaXN0KHVybCkpLCBwbGF5ZXJWYXJzKSxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnBsYXllci5zZXRMb29wKHRydWUpOyAvLyBFbmFibGUgcGxheWxpc3QgbG9vcGluZ1xuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpczIucHJvcHMub25SZWFkeSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IF90aGlzMi5vblN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX29uRXJyb3IoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBob3N0OiBNQVRDSF9OT0NPT0tJRS50ZXN0KHVybCkgPyBOT0NPT0tJRV9IT1NUIDogdW5kZWZpbmVkXG4gICAgICAgIH0sIGVtYmVkT3B0aW9ucykpO1xuICAgICAgfSwgX29uRXJyb3IpO1xuXG4gICAgICBpZiAoZW1iZWRPcHRpb25zLmV2ZW50cykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1VzaW5nIGBlbWJlZE9wdGlvbnMuZXZlbnRzYCB3aWxsIGxpa2VseSBicmVhayB0aGluZ3MuIFVzZSBSZWFjdFBsYXllcuKAmXMgY2FsbGJhY2sgcHJvcHMgaW5zdGVhZCwgZWcgb25SZWFkeSwgb25QbGF5LCBvblBhdXNlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBsYXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheVZpZGVvJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwYXVzZVZpZGVvJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmNhbGxQbGF5ZXIoJ2dldElmcmFtZScpKSkgcmV0dXJuO1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzdG9wVmlkZW8nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2Vla1RvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWtUbyhhbW91bnQpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2Vla1RvJywgYW1vdW50KTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldFZvbHVtZScsIGZyYWN0aW9uICogMTAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UGxheWJhY2tSYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldFBsYXliYWNrUmF0ZScsIHJhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRMb29wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldExvb3AobG9vcCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZXRMb29wJywgbG9vcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcignZ2V0RHVyYXRpb24nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VycmVudFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKCdnZXRDdXJyZW50VGltZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZWNvbmRzTG9hZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKCdnZXRWaWRlb0xvYWRlZEZyYWN0aW9uJykgKiB0aGlzLmdldER1cmF0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgZGlzcGxheSA9IHRoaXMucHJvcHMuZGlzcGxheTtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGRpc3BsYXk6IGRpc3BsYXlcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogdGhpcy5yZWZcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gWW91VHViZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gWW91VHViZTtcblxuX2RlZmluZVByb3BlcnR5KFlvdVR1YmUsIFwiZGlzcGxheU5hbWVcIiwgJ1lvdVR1YmUnKTtcblxuX2RlZmluZVByb3BlcnR5KFlvdVR1YmUsIFwiY2FuUGxheVwiLCBfcGF0dGVybnMuY2FuUGxheS55b3V0dWJlKTsiXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMxWDtBQUNBLE1BQU0sQ0FBQyxjQUFjLFVBQVUsWUFBWSxFQUFFO0FBQzdDLEVBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM1QjtBQUNBLElBQUksTUFBTSxHQUFHLHVCQUF1QixDQUFDQSxjQUFnQixDQUFDLENBQUM7QUFDdkQ7QUFDQSxJQUFJLE1BQU0sR0FBR0MsS0FBbUIsQ0FBQztBQUNqQztBQUNBLElBQUksU0FBUyxHQUFHQyxRQUFzQixDQUFDO0FBQ3ZDO0FBQ0EsU0FBUyx3QkFBd0IsR0FBRyxFQUFFLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsd0JBQXdCLEdBQUcsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ2xOO0FBQ0EsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLHdCQUF3QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRTtBQUM5dUI7QUFDQSxTQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLEVBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsRUFBRSxPQUFPLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxN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QUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDdkw7QUFDQSxTQUFTLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFF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
