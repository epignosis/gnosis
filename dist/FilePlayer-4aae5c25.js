
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

var FilePlayer$2 = {};

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var HAS_NAVIGATOR = typeof navigator !== 'undefined';
var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
var HLS_GLOBAL = 'Hls';
var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
var DASH_GLOBAL = 'dashjs';
var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
var FLV_GLOBAL = 'flvjs';
var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

var FilePlayer = /*#__PURE__*/function (_Component) {
  _inherits(FilePlayer, _Component);

  var _super = _createSuper(FilePlayer);

  function FilePlayer() {
    var _this;

    _classCallCheck(this, FilePlayer);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
      var _this$props;

      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
      var _this$props2;

      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
      var _this$props3;

      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
      var _this$props4;

      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
      var _this$props5;

      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
      var _this$props6;

      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      var _this$props7;

      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
      var _this$props8;

      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
      var _this$props9 = _this.props,
          onDisablePIP = _this$props9.onDisablePIP,
          playing = _this$props9.playing;
      onDisablePIP(e);

      if (playing) {
        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
        var webkitPresentationMode = _this.player.webkitPresentationMode;

        if (webkitPresentationMode === 'picture-in-picture') {
          _this.onEnablePIP(e);
        } else if (webkitPresentationMode === 'inline') {
          _this.onDisablePIP(e);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
      _this.props.onSeek(e.target.currentTime);
    });

    _defineProperty(_assertThisInitialized(_this), "mute", function () {
      _this.player.muted = true;
    });

    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
      _this.player.muted = false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
      if (typeof source === 'string') {
        return /*#__PURE__*/_react["default"].createElement("source", {
          key: index,
          src: source
        });
      }

      return /*#__PURE__*/_react["default"].createElement("source", _extends({
        key: index
      }, source));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
      return /*#__PURE__*/_react["default"].createElement("track", _extends({
        key: index
      }, track));
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
      if (_this.player) {
        // Store previous player to be used by removeListeners()
        _this.prevPlayer = _this.player;
      }

      _this.player = player;
    });

    return _this;
  }

  _createClass(FilePlayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onMount && this.props.onMount(this);
      this.addListeners(this.player);

      if (IS_IOS) {
        this.player.load();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
        this.removeListeners(this.prevPlayer, prevProps.url);
        this.addListeners(this.player);
      }

      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
        this.player.srcObject = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListeners(this.player);

      if (this.hls) {
        this.hls.destroy();
      }
    }
  }, {
    key: "addListeners",
    value: function addListeners(player) {
      var _this$props10 = this.props,
          url = _this$props10.url,
          playsinline = _this$props10.playsinline;
      player.addEventListener('play', this.onPlay);
      player.addEventListener('waiting', this.onBuffer);
      player.addEventListener('playing', this.onBufferEnd);
      player.addEventListener('pause', this.onPause);
      player.addEventListener('seeked', this.onSeek);
      player.addEventListener('ended', this.onEnded);
      player.addEventListener('error', this.onError);
      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.addEventListener('canplay', this.onReady);
      }

      if (playsinline) {
        player.setAttribute('playsinline', '');
        player.setAttribute('webkit-playsinline', '');
        player.setAttribute('x5-playsinline', '');
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(player, url) {
      player.removeEventListener('canplay', this.onReady);
      player.removeEventListener('play', this.onPlay);
      player.removeEventListener('waiting', this.onBuffer);
      player.removeEventListener('playing', this.onBufferEnd);
      player.removeEventListener('pause', this.onPause);
      player.removeEventListener('seeked', this.onSeek);
      player.removeEventListener('ended', this.onEnded);
      player.removeEventListener('error', this.onError);
      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

      if (!this.shouldUseHLS(url)) {
        // onReady is handled by hls.js
        player.removeEventListener('canplay', this.onReady);
      }
    } // Proxy methods to prevent listener leaks

  }, {
    key: "shouldUseAudio",
    value: function shouldUseAudio(props) {
      if (props.config.forceVideo) {
        return false;
      }

      if (props.config.attributes.poster) {
        return false; // Use <video> so that poster is shown
      }

      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
    }
  }, {
    key: "shouldUseHLS",
    value: function shouldUseHLS(url) {
      if (this.props.config.forceHLS) {
        return true;
      }

      if (IS_IOS) {
        return false;
      }

      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
    }
  }, {
    key: "shouldUseDASH",
    value: function shouldUseDASH(url) {
      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
    }
  }, {
    key: "shouldUseFLV",
    value: function shouldUseFLV(url) {
      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      var _this$props$config = this.props.config,
          hlsVersion = _this$props$config.hlsVersion,
          hlsOptions = _this$props$config.hlsOptions,
          dashVersion = _this$props$config.dashVersion,
          flvVersion = _this$props$config.flvVersion;

      if (this.hls) {
        this.hls.destroy();
      }

      if (this.dash) {
        this.dash.reset();
      }

      if (this.shouldUseHLS(url)) {
        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
          _this2.hls = new Hls(hlsOptions);

          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
            _this2.props.onReady();
          });

          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
            _this2.props.onError(e, data, _this2.hls, Hls);
          });

          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
          } else {
            _this2.hls.loadSource(url);
          }

          _this2.hls.attachMedia(_this2.player);

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseDASH(url)) {
        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
          _this2.dash = dashjs.MediaPlayer().create();

          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

          _this2.dash.on('error', _this2.props.onError);

          if (parseInt(dashVersion) < 3) {
            _this2.dash.getDebug().setLogToBrowserConsole(false);
          } else {
            _this2.dash.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              }
            });
          }

          _this2.props.onLoaded();
        });
      }

      if (this.shouldUseFLV(url)) {
        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
          _this2.flv = flvjs.createPlayer({
            type: 'flv',
            url: url
          });

          _this2.flv.attachMediaElement(_this2.player);

          _this2.flv.load();

          _this2.props.onLoaded();
        });
      }

      if (url instanceof Array) {
        // When setting new urls (<source>) on an already loaded video,
        // HTMLMediaElement.load() is needed to reset the media element
        // and restart the media resource. Just replacing children source
        // dom nodes is not enough
        this.player.load();
      } else if ((0, _utils.isMediaStream)(url)) {
        try {
          this.player.srcObject = url;
        } catch (e) {
          this.player.src = window.URL.createObjectURL(url);
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      var promise = this.player.play();

      if (promise) {
        promise["catch"](this.props.onError);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.player.pause();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.player.removeAttribute('src');

      if (this.dash) {
        this.dash.reset();
      }
    }
  }, {
    key: "seekTo",
    value: function seekTo(seconds) {
      this.player.currentTime = seconds;
    }
  }, {
    key: "setVolume",
    value: function setVolume(fraction) {
      this.player.volume = fraction;
    }
  }, {
    key: "enablePIP",
    value: function enablePIP() {
      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
        this.player.requestPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
        this.player.webkitSetPresentationMode('picture-in-picture');
      }
    }
  }, {
    key: "disablePIP",
    value: function disablePIP() {
      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
        document.exitPictureInPicture();
      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
        this.player.webkitSetPresentationMode('inline');
      }
    }
  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(rate) {
      this.player.playbackRate = rate;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      if (!this.player) return null;
      var _this$player = this.player,
          duration = _this$player.duration,
          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
      // so instead we use the end of the seekable timerange

      if (duration === Infinity && seekable.length > 0) {
        return seekable.end(seekable.length - 1);
      }

      return duration;
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      if (!this.player) return null;
      return this.player.currentTime;
    }
  }, {
    key: "getSecondsLoaded",
    value: function getSecondsLoaded() {
      if (!this.player) return null;
      var buffered = this.player.buffered;

      if (buffered.length === 0) {
        return 0;
      }

      var end = buffered.end(buffered.length - 1);
      var duration = this.getDuration();

      if (end > duration) {
        return duration;
      }

      return end;
    }
  }, {
    key: "getSource",
    value: function getSource(url) {
      var useHLS = this.shouldUseHLS(url);
      var useDASH = this.shouldUseDASH(url);
      var useFLV = this.shouldUseFLV(url);

      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
        return undefined;
      }

      if (MATCH_DROPBOX_URL.test(url)) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
      }

      return url;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          url = _this$props11.url,
          playing = _this$props11.playing,
          loop = _this$props11.loop,
          controls = _this$props11.controls,
          muted = _this$props11.muted,
          config = _this$props11.config,
          width = _this$props11.width,
          height = _this$props11.height;
      var useAudio = this.shouldUseAudio(this.props);
      var Element = useAudio ? 'audio' : 'video';
      var style = {
        width: width === 'auto' ? width : '100%',
        height: height === 'auto' ? height : '100%'
      };
      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
        ref: this.ref,
        src: this.getSource(url),
        style: style,
        preload: "auto",
        autoPlay: playing || undefined,
        controls: controls,
        muted: muted,
        loop: loop
      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
    }
  }]);

  return FilePlayer;
}(_react.Component);

exports["default"] = FilePlayer;

_defineProperty(FilePlayer, "displayName", 'FilePlayer');

_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);
}(FilePlayer$2));

var FilePlayer = /*@__PURE__*/getDefaultExportFromCjs(FilePlayer$2);

var FilePlayer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': FilePlayer
}, [FilePlayer$2]));

export { FilePlayer$1 as F };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVBsYXllci00YWFlNWMyNS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvRmlsZVBsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuXG52YXIgX3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgSEFTX05BVklHQVRPUiA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnO1xudmFyIElTX0lQQURfUFJPID0gSEFTX05BVklHQVRPUiAmJiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcbnZhciBJU19JT1MgPSBIQVNfTkFWSUdBVE9SICYmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBJU19JUEFEX1BSTykgJiYgIXdpbmRvdy5NU1N0cmVhbTtcbnZhciBITFNfU0RLX1VSTCA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2hscy5qc0BWRVJTSU9OL2Rpc3QvaGxzLm1pbi5qcyc7XG52YXIgSExTX0dMT0JBTCA9ICdIbHMnO1xudmFyIERBU0hfU0RLX1VSTCA9ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kYXNoanMvVkVSU0lPTi9kYXNoLmFsbC5taW4uanMnO1xudmFyIERBU0hfR0xPQkFMID0gJ2Rhc2hqcyc7XG52YXIgRkxWX1NES19VUkwgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9mbHYuanNAVkVSU0lPTi9kaXN0L2Zsdi5taW4uanMnO1xudmFyIEZMVl9HTE9CQUwgPSAnZmx2anMnO1xudmFyIE1BVENIX0RST1BCT1hfVVJMID0gL3d3d1xcLmRyb3Bib3hcXC5jb21cXC8uKy87XG52YXIgTUFUQ0hfQ0xPVURGTEFSRV9TVFJFQU0gPSAvaHR0cHM6XFwvXFwvd2F0Y2hcXC5jbG91ZGZsYXJlc3RyZWFtXFwuY29tXFwvKFthLXowLTldKykvO1xudmFyIFJFUExBQ0VfQ0xPVURGTEFSRV9TVFJFQU0gPSAnaHR0cHM6Ly92aWRlb2RlbGl2ZXJ5Lm5ldC97aWR9L21hbmlmZXN0L3ZpZGVvLm0zdTgnO1xuXG52YXIgRmlsZVBsYXllciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmlsZVBsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihGaWxlUGxheWVyKTtcblxuICBmdW5jdGlvbiBGaWxlUGxheWVyKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWxlUGxheWVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIF9hcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KF9hcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25SZWFkeVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcykub25SZWFkeS5hcHBseShfdGhpcyRwcm9wcywgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblBsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcykub25QbGF5LmFwcGx5KF90aGlzJHByb3BzMiwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkJ1ZmZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzKS5vbkJ1ZmZlci5hcHBseShfdGhpcyRwcm9wczMsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25CdWZmZXJFbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcykub25CdWZmZXJFbmQuYXBwbHkoX3RoaXMkcHJvcHM0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUGF1c2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNTtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcykub25QYXVzZS5hcHBseShfdGhpcyRwcm9wczUsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25FbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2O1xuXG4gICAgICByZXR1cm4gKF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzKS5vbkVuZGVkLmFwcGx5KF90aGlzJHByb3BzNiwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczc7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM3ID0gX3RoaXMucHJvcHMpLm9uRXJyb3IuYXBwbHkoX3RoaXMkcHJvcHM3LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uRW5hYmxlUElQXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczg7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkcHJvcHM4ID0gX3RoaXMucHJvcHMpLm9uRW5hYmxlUElQLmFwcGx5KF90aGlzJHByb3BzOCwgYXJndW1lbnRzKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbkRpc2FibGVQSVBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkRpc2FibGVQSVAgPSBfdGhpcyRwcm9wczkub25EaXNhYmxlUElQLFxuICAgICAgICAgIHBsYXlpbmcgPSBfdGhpcyRwcm9wczkucGxheWluZztcbiAgICAgIG9uRGlzYWJsZVBJUChlKTtcblxuICAgICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgICAgX3RoaXMucGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uUHJlc2VudGF0aW9uTW9kZUNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnBsYXllciAmJiAoMCwgX3V0aWxzLnN1cHBvcnRzV2ViS2l0UHJlc2VudGF0aW9uTW9kZSkoX3RoaXMucGxheWVyKSkge1xuICAgICAgICB2YXIgd2Via2l0UHJlc2VudGF0aW9uTW9kZSA9IF90aGlzLnBsYXllci53ZWJraXRQcmVzZW50YXRpb25Nb2RlO1xuXG4gICAgICAgIGlmICh3ZWJraXRQcmVzZW50YXRpb25Nb2RlID09PSAncGljdHVyZS1pbi1waWN0dXJlJykge1xuICAgICAgICAgIF90aGlzLm9uRW5hYmxlUElQKGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHdlYmtpdFByZXNlbnRhdGlvbk1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgX3RoaXMub25EaXNhYmxlUElQKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25TZWVrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5wcm9wcy5vblNlZWsoZS50YXJnZXQuY3VycmVudFRpbWUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucGxheWVyLm11dGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1bm11dGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucGxheWVyLm11dGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyU291cmNlRWxlbWVudFwiLCBmdW5jdGlvbiAoc291cmNlLCBpbmRleCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic291cmNlXCIsIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIHNyYzogc291cmNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogaW5kZXhcbiAgICAgIH0sIHNvdXJjZSkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlbmRlclRyYWNrXCIsIGZ1bmN0aW9uICh0cmFjaywgaW5kZXgpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IGluZGV4XG4gICAgICB9LCB0cmFjaykpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInJlZlwiLCBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBpZiAoX3RoaXMucGxheWVyKSB7XG4gICAgICAgIC8vIFN0b3JlIHByZXZpb3VzIHBsYXllciB0byBiZSB1c2VkIGJ5IHJlbW92ZUxpc3RlbmVycygpXG4gICAgICAgIF90aGlzLnByZXZQbGF5ZXIgPSBfdGhpcy5wbGF5ZXI7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaWxlUGxheWVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG5cbiAgICAgIGlmIChJU19JT1MpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlQXVkaW8odGhpcy5wcm9wcykgIT09IHRoaXMuc2hvdWxkVXNlQXVkaW8ocHJldlByb3BzKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyh0aGlzLnByZXZQbGF5ZXIsIHByZXZQcm9wcy51cmwpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnVybCAhPT0gcHJldlByb3BzLnVybCAmJiAhKDAsIF91dGlscy5pc01lZGlhU3RyZWFtKSh0aGlzLnByb3BzLnVybCkpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyh0aGlzLnBsYXllcik7XG5cbiAgICAgIGlmICh0aGlzLmhscykge1xuICAgICAgICB0aGlzLmhscy5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZExpc3RlbmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdXJsID0gX3RoaXMkcHJvcHMxMC51cmwsXG4gICAgICAgICAgcGxheXNpbmxpbmUgPSBfdGhpcyRwcm9wczEwLnBsYXlzaW5saW5lO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLm9uUGxheSk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIHRoaXMub25CdWZmZXIpO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLm9uQnVmZmVyRW5kKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMub25QYXVzZSk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Vla2VkJywgdGhpcy5vblNlZWspO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5vbkVuZGVkKTtcbiAgICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25FcnJvcik7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkVuYWJsZVBJUCk7XG4gICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignbGVhdmVwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkRpc2FibGVQSVApO1xuICAgICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdHByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkJywgdGhpcy5vblByZXNlbnRhdGlvbk1vZGVDaGFuZ2UpO1xuXG4gICAgICBpZiAoIXRoaXMuc2hvdWxkVXNlSExTKHVybCkpIHtcbiAgICAgICAgLy8gb25SZWFkeSBpcyBoYW5kbGVkIGJ5IGhscy5qc1xuICAgICAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25SZWFkeSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5c2lubGluZSkge1xuICAgICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcbiAgICAgICAgcGxheWVyLnNldEF0dHJpYnV0ZSgnd2Via2l0LXBsYXlzaW5saW5lJywgJycpO1xuICAgICAgICBwbGF5ZXIuc2V0QXR0cmlidXRlKCd4NS1wbGF5c2lubGluZScsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlTGlzdGVuZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhwbGF5ZXIsIHVybCkge1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCB0aGlzLm9uUmVhZHkpO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXknLCB0aGlzLm9uUGxheSk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIHRoaXMub25CdWZmZXIpO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCB0aGlzLm9uQnVmZmVyRW5kKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXVzZScsIHRoaXMub25QYXVzZSk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Vla2VkJywgdGhpcy5vblNlZWspO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5vbkVuZGVkKTtcbiAgICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMub25FcnJvcik7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW50ZXJwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkVuYWJsZVBJUCk7XG4gICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbGVhdmVwaWN0dXJlaW5waWN0dXJlJywgdGhpcy5vbkRpc2FibGVQSVApO1xuICAgICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdHByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkJywgdGhpcy5vblByZXNlbnRhdGlvbk1vZGVDaGFuZ2UpO1xuXG4gICAgICBpZiAoIXRoaXMuc2hvdWxkVXNlSExTKHVybCkpIHtcbiAgICAgICAgLy8gb25SZWFkeSBpcyBoYW5kbGVkIGJ5IGhscy5qc1xuICAgICAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheScsIHRoaXMub25SZWFkeSk7XG4gICAgICB9XG4gICAgfSAvLyBQcm94eSBtZXRob2RzIHRvIHByZXZlbnQgbGlzdGVuZXIgbGVha3NcblxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZFVzZUF1ZGlvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUF1ZGlvKHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuY29uZmlnLmZvcmNlVmlkZW8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY29uZmlnLmF0dHJpYnV0ZXMucG9zdGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gVXNlIDx2aWRlbz4gc28gdGhhdCBwb3N0ZXIgaXMgc2hvd25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9wYXR0ZXJucy5BVURJT19FWFRFTlNJT05TLnRlc3QocHJvcHMudXJsKSB8fCBwcm9wcy5jb25maWcuZm9yY2VBdWRpbztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlSExTXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUhMUyh1cmwpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5mb3JjZUhMUykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKElTX0lPUykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcGF0dGVybnMuSExTX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IE1BVENIX0NMT1VERkxBUkVfU1RSRUFNLnRlc3QodXJsKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlREFTSFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRVc2VEQVNIKHVybCkge1xuICAgICAgcmV0dXJuIF9wYXR0ZXJucy5EQVNIX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IHRoaXMucHJvcHMuY29uZmlnLmZvcmNlREFTSDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hvdWxkVXNlRkxWXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUZMVih1cmwpIHtcbiAgICAgIHJldHVybiBfcGF0dGVybnMuRkxWX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IHRoaXMucHJvcHMuY29uZmlnLmZvcmNlRkxWO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzJGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLFxuICAgICAgICAgIGhsc1ZlcnNpb24gPSBfdGhpcyRwcm9wcyRjb25maWcuaGxzVmVyc2lvbixcbiAgICAgICAgICBobHNPcHRpb25zID0gX3RoaXMkcHJvcHMkY29uZmlnLmhsc09wdGlvbnMsXG4gICAgICAgICAgZGFzaFZlcnNpb24gPSBfdGhpcyRwcm9wcyRjb25maWcuZGFzaFZlcnNpb24sXG4gICAgICAgICAgZmx2VmVyc2lvbiA9IF90aGlzJHByb3BzJGNvbmZpZy5mbHZWZXJzaW9uO1xuXG4gICAgICBpZiAodGhpcy5obHMpIHtcbiAgICAgICAgdGhpcy5obHMuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kYXNoKSB7XG4gICAgICAgIHRoaXMuZGFzaC5yZXNldCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VITFModXJsKSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoSExTX1NES19VUkwucmVwbGFjZSgnVkVSU0lPTicsIGhsc1ZlcnNpb24pLCBITFNfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChIbHMpIHtcbiAgICAgICAgICBfdGhpczIuaGxzID0gbmV3IEhscyhobHNPcHRpb25zKTtcblxuICAgICAgICAgIF90aGlzMi5obHMub24oSGxzLkV2ZW50cy5NQU5JRkVTVF9QQVJTRUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpczIuaGxzLm9uKEhscy5FdmVudHMuRVJST1IsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICAgICAgICBfdGhpczIucHJvcHMub25FcnJvcihlLCBkYXRhLCBfdGhpczIuaGxzLCBIbHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKE1BVENIX0NMT1VERkxBUkVfU1RSRUFNLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgdmFyIGlkID0gdXJsLm1hdGNoKE1BVENIX0NMT1VERkxBUkVfU1RSRUFNKVsxXTtcblxuICAgICAgICAgICAgX3RoaXMyLmhscy5sb2FkU291cmNlKFJFUExBQ0VfQ0xPVURGTEFSRV9TVFJFQU0ucmVwbGFjZSgne2lkfScsIGlkKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMi5obHMubG9hZFNvdXJjZSh1cmwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5obHMuYXR0YWNoTWVkaWEoX3RoaXMyLnBsYXllcik7XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZURBU0godXJsKSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoREFTSF9TREtfVVJMLnJlcGxhY2UoJ1ZFUlNJT04nLCBkYXNoVmVyc2lvbiksIERBU0hfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChkYXNoanMpIHtcbiAgICAgICAgICBfdGhpczIuZGFzaCA9IGRhc2hqcy5NZWRpYVBsYXllcigpLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgX3RoaXMyLmRhc2guaW5pdGlhbGl6ZShfdGhpczIucGxheWVyLCB1cmwsIF90aGlzMi5wcm9wcy5wbGF5aW5nKTtcblxuICAgICAgICAgIF90aGlzMi5kYXNoLm9uKCdlcnJvcicsIF90aGlzMi5wcm9wcy5vbkVycm9yKTtcblxuICAgICAgICAgIGlmIChwYXJzZUludChkYXNoVmVyc2lvbikgPCAzKSB7XG4gICAgICAgICAgICBfdGhpczIuZGFzaC5nZXREZWJ1ZygpLnNldExvZ1RvQnJvd3NlckNvbnNvbGUoZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczIuZGFzaC51cGRhdGVTZXR0aW5ncyh7XG4gICAgICAgICAgICAgIGRlYnVnOiB7XG4gICAgICAgICAgICAgICAgbG9nTGV2ZWw6IGRhc2hqcy5EZWJ1Zy5MT0dfTEVWRUxfTk9ORVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMub25Mb2FkZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUZMVih1cmwpKSB7XG4gICAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShGTFZfU0RLX1VSTC5yZXBsYWNlKCdWRVJTSU9OJywgZmx2VmVyc2lvbiksIEZMVl9HTE9CQUwpLnRoZW4oZnVuY3Rpb24gKGZsdmpzKSB7XG4gICAgICAgICAgX3RoaXMyLmZsdiA9IGZsdmpzLmNyZWF0ZVBsYXllcih7XG4gICAgICAgICAgICB0eXBlOiAnZmx2JyxcbiAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpczIuZmx2LmF0dGFjaE1lZGlhRWxlbWVudChfdGhpczIucGxheWVyKTtcblxuICAgICAgICAgIF90aGlzMi5mbHYubG9hZCgpO1xuXG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uTG9hZGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodXJsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgLy8gV2hlbiBzZXR0aW5nIG5ldyB1cmxzICg8c291cmNlPikgb24gYW4gYWxyZWFkeSBsb2FkZWQgdmlkZW8sXG4gICAgICAgIC8vIEhUTUxNZWRpYUVsZW1lbnQubG9hZCgpIGlzIG5lZWRlZCB0byByZXNldCB0aGUgbWVkaWEgZWxlbWVudFxuICAgICAgICAvLyBhbmQgcmVzdGFydCB0aGUgbWVkaWEgcmVzb3VyY2UuIEp1c3QgcmVwbGFjaW5nIGNoaWxkcmVuIHNvdXJjZVxuICAgICAgICAvLyBkb20gbm9kZXMgaXMgbm90IGVub3VnaFxuICAgICAgICB0aGlzLnBsYXllci5sb2FkKCk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNNZWRpYVN0cmVhbSkodXJsKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucGxheWVyLnNyY09iamVjdCA9IHVybDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMucGxheWVyLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnBsYXllci5wbGF5KCk7XG5cbiAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2VbXCJjYXRjaFwiXSh0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMucGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG5cbiAgICAgIGlmICh0aGlzLmRhc2gpIHtcbiAgICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlZWtUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8oc2Vjb25kcykge1xuICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUgPSBzZWNvbmRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRWb2x1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLnBsYXllci52b2x1bWUgPSBmcmFjdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlUElQXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZVBJUCgpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllci5yZXF1ZXN0UGljdHVyZUluUGljdHVyZSAmJiBkb2N1bWVudC5waWN0dXJlSW5QaWN0dXJlRWxlbWVudCAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5zdXBwb3J0c1dlYktpdFByZXNlbnRhdGlvbk1vZGUpKHRoaXMucGxheWVyKSAmJiB0aGlzLnBsYXllci53ZWJraXRQcmVzZW50YXRpb25Nb2RlICE9PSAncGljdHVyZS1pbi1waWN0dXJlJykge1xuICAgICAgICB0aGlzLnBsYXllci53ZWJraXRTZXRQcmVzZW50YXRpb25Nb2RlKCdwaWN0dXJlLWluLXBpY3R1cmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzYWJsZVBJUFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlUElQKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmV4aXRQaWN0dXJlSW5QaWN0dXJlICYmIGRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbGVtZW50ID09PSB0aGlzLnBsYXllcikge1xuICAgICAgICBkb2N1bWVudC5leGl0UGljdHVyZUluUGljdHVyZSgpO1xuICAgICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLnN1cHBvcnRzV2ViS2l0UHJlc2VudGF0aW9uTW9kZSkodGhpcy5wbGF5ZXIpICYmIHRoaXMucGxheWVyLndlYmtpdFByZXNlbnRhdGlvbk1vZGUgIT09ICdpbmxpbmUnKSB7XG4gICAgICAgIHRoaXMucGxheWVyLndlYmtpdFNldFByZXNlbnRhdGlvbk1vZGUoJ2lubGluZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRQbGF5YmFja1JhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldER1cmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgX3RoaXMkcGxheWVyID0gdGhpcy5wbGF5ZXIsXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRwbGF5ZXIuZHVyYXRpb24sXG4gICAgICAgICAgc2Vla2FibGUgPSBfdGhpcyRwbGF5ZXIuc2Vla2FibGU7IC8vIG9uIGlPUywgbGl2ZSBzdHJlYW1zIHJldHVybiBJbmZpbml0eSBmb3IgdGhlIGR1cmF0aW9uXG4gICAgICAvLyBzbyBpbnN0ZWFkIHdlIHVzZSB0aGUgZW5kIG9mIHRoZSBzZWVrYWJsZSB0aW1lcmFuZ2VcblxuICAgICAgaWYgKGR1cmF0aW9uID09PSBJbmZpbml0eSAmJiBzZWVrYWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzZWVrYWJsZS5lbmQoc2Vla2FibGUubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q3VycmVudFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICBpZiAoIXRoaXMucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2Vjb25kc0xvYWRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgICAgaWYgKCF0aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgYnVmZmVyZWQgPSB0aGlzLnBsYXllci5idWZmZXJlZDtcblxuICAgICAgaWYgKGJ1ZmZlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGVuZCA9IGJ1ZmZlcmVkLmVuZChidWZmZXJlZC5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBkdXJhdGlvbiA9IHRoaXMuZ2V0RHVyYXRpb24oKTtcblxuICAgICAgaWYgKGVuZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvdXJjZSh1cmwpIHtcbiAgICAgIHZhciB1c2VITFMgPSB0aGlzLnNob3VsZFVzZUhMUyh1cmwpO1xuICAgICAgdmFyIHVzZURBU0ggPSB0aGlzLnNob3VsZFVzZURBU0godXJsKTtcbiAgICAgIHZhciB1c2VGTFYgPSB0aGlzLnNob3VsZFVzZUZMVih1cmwpO1xuXG4gICAgICBpZiAodXJsIGluc3RhbmNlb2YgQXJyYXkgfHwgKDAsIF91dGlscy5pc01lZGlhU3RyZWFtKSh1cmwpIHx8IHVzZUhMUyB8fCB1c2VEQVNIIHx8IHVzZUZMVikge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoTUFUQ0hfRFJPUEJPWF9VUkwudGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB1cmwucmVwbGFjZSgnd3d3LmRyb3Bib3guY29tJywgJ2RsLmRyb3Bib3h1c2VyY29udGVudC5jb20nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczExID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB1cmwgPSBfdGhpcyRwcm9wczExLnVybCxcbiAgICAgICAgICBwbGF5aW5nID0gX3RoaXMkcHJvcHMxMS5wbGF5aW5nLFxuICAgICAgICAgIGxvb3AgPSBfdGhpcyRwcm9wczExLmxvb3AsXG4gICAgICAgICAgY29udHJvbHMgPSBfdGhpcyRwcm9wczExLmNvbnRyb2xzLFxuICAgICAgICAgIG11dGVkID0gX3RoaXMkcHJvcHMxMS5tdXRlZCxcbiAgICAgICAgICBjb25maWcgPSBfdGhpcyRwcm9wczExLmNvbmZpZyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzMTEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMxMS5oZWlnaHQ7XG4gICAgICB2YXIgdXNlQXVkaW8gPSB0aGlzLnNob3VsZFVzZUF1ZGlvKHRoaXMucHJvcHMpO1xuICAgICAgdmFyIEVsZW1lbnQgPSB1c2VBdWRpbyA/ICdhdWRpbycgOiAndmlkZW8nO1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogd2lkdGggPT09ICdhdXRvJyA/IHdpZHRoIDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCA9PT0gJ2F1dG8nID8gaGVpZ2h0IDogJzEwMCUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRWxlbWVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzcmM6IHRoaXMuZ2V0U291cmNlKHVybCksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgcHJlbG9hZDogXCJhdXRvXCIsXG4gICAgICAgIGF1dG9QbGF5OiBwbGF5aW5nIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICBtdXRlZDogbXV0ZWQsXG4gICAgICAgIGxvb3A6IGxvb3BcbiAgICAgIH0sIGNvbmZpZy5hdHRyaWJ1dGVzKSwgdXJsIGluc3RhbmNlb2YgQXJyYXkgJiYgdXJsLm1hcCh0aGlzLnJlbmRlclNvdXJjZUVsZW1lbnQpLCBjb25maWcudHJhY2tzLm1hcCh0aGlzLnJlbmRlclRyYWNrKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpbGVQbGF5ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZpbGVQbGF5ZXI7XG5cbl9kZWZpbmVQcm9wZXJ0eShGaWxlUGxheWVyLCBcImRpc3BsYXlOYW1lXCIsICdGaWxlUGxheWVyJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShGaWxlUGxheWVyLCBcImNhblBsYXlcIiwgX3BhdHRlcm5zLmNhblBsYXkuZmlsZSk7Il0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLHlCQUF5QixDQUFDLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDMVg7QUFDQSxNQUFNLENBQUMsY0FBYyxVQUFVLFlBQVksRUFBRTtBQUM3QyxFQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDNUI7QUFDQSxJQUFJLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQ0EsY0FBZ0IsQ0FBQyxDQUFDO0FBQ3ZEO0FBQ0EsSUFBSSxNQUFNLEdBQUdDLEtBQW1CLENBQUM7QUFDakM7QUFDQSxJQUFJLFNBQVMsR0FBR0MsUUFBc0IsQ0FBQztBQUN2QztBQUNBLFNBQVMsd0JBQXdCLEdBQUcsRUFBRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLHdCQUF3QixHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtBQUNsTjtBQUNBLFNBQVMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcscUJBQXFCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUU7QUFDOXVCO0FBQ0EsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQzdUO0FBQ0EsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3pKO0FBQ0EsU0FBUyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFF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
