(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$6() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$6()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function noop() {}

  var identity = function identity(x) {
    return x;
  };

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function compute_slots(slots) {
    var result = {};

    for (var key in slots) {
      result[key] = true;
    }

    return result;
  }

  var is_client = typeof window !== 'undefined';
  var now = is_client ? function () {
    return window.performance.now();
  } : function () {
    return Date.now();
  };
  var raf = is_client ? function (cb) {
    return requestAnimationFrame(cb);
  } : noop; // used internally for testing

  var tasks = new Set();

  function run_tasks(now) {
    tasks.forEach(function (task) {
      if (!task.c(now)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0) raf(run_tasks);
  }
  /**
   * Creates a new task that runs on each raf frame
   * until it returns a falsy value or is aborted
   */


  function loop(callback) {
    var task;
    if (tasks.size === 0) raf(run_tasks);
    return {
      promise: new Promise(function (fulfill) {
        tasks.add(task = {
          c: callback,
          f: fulfill
        });
      }),
      abort: function abort() {
        tasks.delete(task);
      }
    };
  } // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM

  function append(target, node) {
    target.appendChild(node);
  }

  function get_root_for_style(node) {
    if (!node) return document;
    var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

    if (root && root.host) {
      return root;
    }

    return node.ownerDocument;
  }

  function append_empty_stylesheet(node) {
    var style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element;
  }

  function append_stylesheet(node, style) {
    append(node.head || node, style);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return function () {
      return node.removeEventListener(event, handler, options);
    };
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function custom_event(type, detail) {
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }

  var HtmlTag = /*#__PURE__*/function () {
    function HtmlTag() {
      _classCallCheck(this, HtmlTag);

      this.e = this.n = null;
    }

    _createClass(HtmlTag, [{
      key: "c",
      value: function c(html) {
        this.h(html);
      }
    }, {
      key: "m",
      value: function m(html, target) {
        var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        if (!this.e) {
          this.e = element(target.nodeName);
          this.t = target;
          this.c(html);
        }

        this.i(anchor);
      }
    }, {
      key: "h",
      value: function h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
      }
    }, {
      key: "i",
      value: function i(anchor) {
        for (var i = 0; i < this.n.length; i += 1) {
          insert(this.t, this.n[i], anchor);
        }
      }
    }, {
      key: "p",
      value: function p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
      }
    }, {
      key: "d",
      value: function d() {
        this.n.forEach(detach);
      }
    }]);

    return HtmlTag;
  }();

  function attribute_to_object(attributes) {
    var result = {};

    var _iterator2 = _createForOfIteratorHelper(attributes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var attribute = _step2.value;
        result[attribute.name] = attribute.value;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return result;
  }

  function get_custom_elements_slots(element) {
    var result = {};
    element.childNodes.forEach(function (node) {
      result[node.slot || 'default'] = true;
    });
    return result;
  }

  var active_docs = new Set();
  var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

  function hash(str) {
    var hash = 5381;
    var i = str.length;

    while (i--) {
      hash = (hash << 5) - hash ^ str.charCodeAt(i);
    }

    return hash >>> 0;
  }

  function create_rule(node, a, b, duration, delay, ease, fn) {
    var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var step = 16.666 / duration;
    var keyframes = '{\n';

    for (var p = 0; p <= 1; p += step) {
      var t = a + (b - a) * ease(p);
      keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
    }

    var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
    var name = "__svelte_".concat(hash(rule), "_").concat(uid);
    var doc = get_root_for_style(node);
    active_docs.add(doc);
    var stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = append_empty_stylesheet(node).sheet);
    var current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

    if (!current_rules[name]) {
      current_rules[name] = true;
      stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
    }

    var animation = node.style.animation || '';
    node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
    active += 1;
    return name;
  }

  function delete_rule(node, name) {
    var previous = (node.style.animation || '').split(', ');
    var next = previous.filter(name ? function (anim) {
      return anim.indexOf(name) < 0;
    } // remove specific animation
    : function (anim) {
      return anim.indexOf('__svelte') === -1;
    } // remove all Svelte animations
    );
    var deleted = previous.length - next.length;

    if (deleted) {
      node.style.animation = next.join(', ');
      active -= deleted;
      if (!active) clear_rules();
    }
  }

  function clear_rules() {
    raf(function () {
      if (active) return;
      active_docs.forEach(function (doc) {
        var stylesheet = doc.__svelte_stylesheet;
        var i = stylesheet.cssRules.length;

        while (i--) {
          stylesheet.deleteRule(i);
        }

        doc.__svelte_rules = {};
      });
      active_docs.clear();
    });
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }

  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
        var callback = render_callbacks[_i4];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var promise;

  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(function () {
        promise = null;
      });
    }

    return promise;
  }

  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  var null_transition = {
    duration: 0
  };

  function create_in_transition(node, fn, params) {
    var config = fn(node, params);
    var running = false;
    var animation_name;
    var task;
    var uid = 0;

    function cleanup() {
      if (animation_name) delete_rule(node, animation_name);
    }

    function go() {
      var _ref = config || null_transition,
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 300 : _ref$duration,
          _ref$easing = _ref.easing,
          easing = _ref$easing === void 0 ? identity : _ref$easing,
          _ref$tick = _ref.tick,
          tick = _ref$tick === void 0 ? noop : _ref$tick,
          css = _ref.css;

      if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
      tick(0, 1);
      var start_time = now() + delay;
      var end_time = start_time + duration;
      if (task) task.abort();
      running = true;
      add_render_callback(function () {
        return dispatch(node, true, 'start');
      });
      task = loop(function (now) {
        if (running) {
          if (now >= end_time) {
            tick(1, 0);
            dispatch(node, true, 'end');
            cleanup();
            return running = false;
          }

          if (now >= start_time) {
            var t = easing((now - start_time) / duration);
            tick(t, 1 - t);
          }
        }

        return running;
      });
    }

    var started = false;
    return {
      start: function start() {
        if (started) return;
        started = true;
        delete_rule(node);

        if (is_function(config)) {
          config = config();
          wait().then(go);
        } else {
          go();
        }
      },
      invalidate: function invalidate() {
        started = false;
      },
      end: function end() {
        if (running) {
          cleanup();
          running = false;
        }
      }
    };
  }

  function create_out_transition(node, fn, params) {
    var config = fn(node, params);
    var running = true;
    var animation_name;
    var group = outros;
    group.r += 1;

    function go() {
      var _ref2 = config || null_transition,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
          _ref2$duration = _ref2.duration,
          duration = _ref2$duration === void 0 ? 300 : _ref2$duration,
          _ref2$easing = _ref2.easing,
          easing = _ref2$easing === void 0 ? identity : _ref2$easing,
          _ref2$tick = _ref2.tick,
          tick = _ref2$tick === void 0 ? noop : _ref2$tick,
          css = _ref2.css;

      if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
      var start_time = now() + delay;
      var end_time = start_time + duration;
      add_render_callback(function () {
        return dispatch(node, false, 'start');
      });
      loop(function (now) {
        if (running) {
          if (now >= end_time) {
            tick(0, 1);
            dispatch(node, false, 'end');

            if (! --group.r) {
              // this will result in `end()` being called,
              // so we don't need to clean up here
              run_all(group.c);
            }

            return false;
          }

          if (now >= start_time) {
            var t = easing((now - start_time) / duration);
            tick(1 - t, t);
          }
        }

        return running;
      });
    }

    if (is_function(config)) {
      wait().then(function () {
        // @ts-ignore
        config = config();
        go();
      });
    } else {
      go();
    }

    return {
      end: function end(reset) {
        if (reset && config.tick) {
          config.tick(1, 0);
        }

        if (running) {
          if (animation_name) delete_rule(node, animation_name);
          running = false;
        }
      }
    };
  }

  function create_bidirectional_transition(node, fn, params, intro) {
    var config = fn(node, params);
    var t = intro ? 0 : 1;
    var running_program = null;
    var pending_program = null;
    var animation_name = null;

    function clear_animation() {
      if (animation_name) delete_rule(node, animation_name);
    }

    function init(program, duration) {
      var d = program.b - t;
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d: d,
        duration: duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }

    function go(b) {
      var _ref3 = config || null_transition,
          _ref3$delay = _ref3.delay,
          delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
          _ref3$duration = _ref3.duration,
          duration = _ref3$duration === void 0 ? 300 : _ref3$duration,
          _ref3$easing = _ref3.easing,
          easing = _ref3$easing === void 0 ? identity : _ref3$easing,
          _ref3$tick = _ref3.tick,
          tick = _ref3$tick === void 0 ? noop : _ref3$tick,
          css = _ref3.css;

      var program = {
        start: now() + delay,
        b: b
      };

      if (!b) {
        // @ts-ignore todo: improve typings
        program.group = outros;
        outros.r += 1;
      }

      if (running_program || pending_program) {
        pending_program = program;
      } else {
        // if this is an intro, and there's a delay, we need to do
        // an initial tick and/or apply CSS animation immediately
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b, duration, delay, easing, css);
        }

        if (b) tick(0, 1);
        running_program = init(program, duration);
        add_render_callback(function () {
          return dispatch(node, b, 'start');
        });
        loop(function (now) {
          if (pending_program && now > pending_program.start) {
            running_program = init(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, 'start');

            if (css) {
              clear_animation();
              animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
            }
          }

          if (running_program) {
            if (now >= running_program.end) {
              tick(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, 'end');

              if (!pending_program) {
                // we're done
                if (running_program.b) {
                  // intro — we can tidy up immediately
                  clear_animation();
                } else {
                  // outro — needs to be coordinated
                  if (! --running_program.group.r) run_all(running_program.group.c);
                }
              }

              running_program = null;
            } else if (now >= running_program.start) {
              var p = now - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick(t, 1 - t);
            }
          }

          return !!(running_program || pending_program);
        });
      }
    }

    return {
      run: function run(b) {
        if (is_function(config)) {
          wait().then(function () {
            // @ts-ignore
            config = config();
            go(b);
          });
        } else {
          go(b);
        }
      },
      end: function end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }

  function mount_component(component, target, anchor, customElement) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor);

    if (!customElement) {
      // onMount happens before the initial afterUpdate
      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
    }

    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
    var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : options.context || []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    var ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteElement;

  if (typeof HTMLElement === 'function') {
    SvelteElement = /*#__PURE__*/function (_HTMLElement) {
      _inherits(SvelteElement, _HTMLElement);

      var _super2 = _createSuper$5(SvelteElement);

      function SvelteElement() {
        var _this3;

        _classCallCheck(this, SvelteElement);

        _this3 = _super2.call(this);

        _this3.attachShadow({
          mode: 'open'
        });

        return _this3;
      }

      _createClass(SvelteElement, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          var on_mount = this.$$.on_mount;
          this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

          for (var key in this.$$.slotted) {
            // @ts-ignore todo: improve typings
            this.appendChild(this.$$.slotted[key]);
          }
        }
      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(attr, _oldValue, newValue) {
          this[attr] = newValue;
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          run_all(this.$$.on_disconnect);
        }
      }, {
        key: "$destroy",
        value: function $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop;
        }
      }, {
        key: "$on",
        value: function $on(type, callback) {
          // TODO should this delegate to addEventListener?
          var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return function () {
            var index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
          };
        }
      }, {
        key: "$set",
        value: function $set($$props) {
          if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
          }
        }
      }]);

      return SvelteElement;
    }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  }

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.42.6'
    }, detail), true));
  }

  function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', {
      node: node
    });
    detach(node);
  }

  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    var dispose = listen(node, event, handler, options);
    return function () {
      dispatch_dev('SvelteDOMRemoveEventListener', {
        node: node,
        event: event,
        handler: handler,
        modifiers: modifiers
      });
      dispose();
    };
  }

  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
      node: node,
      attribute: attribute
    });else dispatch_dev('SvelteDOMSetAttribute', {
      node: node,
      attribute: attribute,
      value: value
    });
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', {
      node: text,
      data: data
    });
    text.data = data;
  }

  function validate_slots(name, slot, keys) {
    for (var _i5 = 0, _Object$keys = Object.keys(slot); _i5 < _Object$keys.length; _i5++) {
      var slot_key = _Object$keys[_i5];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }

  function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  }

  function fly(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$delay = _ref3.delay,
        delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
        _ref3$duration = _ref3.duration,
        duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
        _ref3$easing = _ref3.easing,
        easing = _ref3$easing === void 0 ? cubicOut : _ref3$easing,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y,
        _ref3$opacity = _ref3.opacity,
        opacity = _ref3$opacity === void 0 ? 0 : _ref3$opacity;

    var style = getComputedStyle(node);
    var target_opacity = +style.opacity;
    var transform = style.transform === 'none' ? '' : style.transform;
    var od = target_opacity * (1 - opacity);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t, u) {
        return "\n\t\t\ttransform: ".concat(transform, " translate(").concat((1 - t) * x, "px, ").concat((1 - t) * y, "px);\n\t\t\topacity: ").concat(target_opacity - od * u);
      }
    };
  }

  function slide(node) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 400 : _ref4$duration,
        _ref4$easing = _ref4.easing,
        easing = _ref4$easing === void 0 ? cubicOut : _ref4$easing;

    var style = getComputedStyle(node);
    var opacity = +style.opacity;
    var height = parseFloat(style.height);
    var padding_top = parseFloat(style.paddingTop);
    var padding_bottom = parseFloat(style.paddingBottom);
    var margin_top = parseFloat(style.marginTop);
    var margin_bottom = parseFloat(style.marginBottom);
    var border_top_width = parseFloat(style.borderTopWidth);
    var border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
      delay: delay,
      duration: duration,
      easing: easing,
      css: function css(t) {
        return 'overflow: hidden;' + "opacity: ".concat(Math.min(t * 20, 1) * opacity, ";") + "height: ".concat(t * height, "px;") + "padding-top: ".concat(t * padding_top, "px;") + "padding-bottom: ".concat(t * padding_bottom, "px;") + "margin-top: ".concat(t * margin_top, "px;") + "margin-bottom: ".concat(t * margin_bottom, "px;") + "border-top-width: ".concat(t * border_top_width, "px;") + "border-bottom-width: ".concat(t * border_bottom_width, "px;");
      }
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
      key: "conserverFocusElement",
      value: function conserverFocusElement(componentShadow, componentRoot) {
        var elementsFocusablesShadow = Array.from(this.obtenirElementsFocusables(componentShadow));
        var elementsFocusablesRoot = Array.from(this.obtenirElementsFocusables(componentRoot));
        var elementsFocusables = elementsFocusablesShadow.concat(elementsFocusablesRoot);
        var premierElementFocusable = elementsFocusables[0];
        var dernierElementFocusable = elementsFocusables[elementsFocusables.length - 1];
        var KEYCODE_TAB = 9;
        componentShadow.addEventListener('keydown', function (e) {
          var estToucheTab = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

          if (!estToucheTab) {
            return;
          }

          var elementActif = document.activeElement.shadowRoot ? document.activeElement.shadowRoot.activeElement : document.activeElement;

          if (e.shiftKey)
            /* shift + tab */
            {
              if (elementActif === premierElementFocusable) {
                dernierElementFocusable.focus();
                e.preventDefault();
              }
            } else
            /* tab */
            {
              if (elementsFocusables.length === 1 || elementActif === dernierElementFocusable) {
                premierElementFocusable.focus();
                e.preventDefault();
              }
            }
        });
      }
    }, {
      key: "obtenirElementsFocusables",
      value: function obtenirElementsFocusables(element) {
        return element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input:not([type="hidden"]):not([disabled]), select:not([disabled])');
      }
      /**
       * Génère un id unique.
       * @returns L'id unique généré.
       */

    }, {
      key: "genererId",
      value: function genererId() {
        return Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
      }
      /**
       * Créé un événement custom pour un webComponent.
       * @param {*} component Objet associé à notre composant (objet DOM).
       * @param {*} nomEvenement Nom de l'événement. 
       * @param {*} detailsEvenement Détails de l'événement.
       */

    }, {
      key: "estMobile",
      value: function estMobile() {
        return navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;
      }
    }, {
      key: "ajusterInterfaceAvantAffichageModale",
      value: function ajusterInterfaceAvantAffichageModale(html, body) {
        if (!this.estMobile()) {
          var largeurScrollbarHtml = window.innerWidth - html.offsetWidth;

          if (largeurScrollbarHtml > 0) {
            html.style['padding-right'] = largeurScrollbarHtml + 'px';
          } else {
            var largeurScrollbarBody = window.innerWidth - body.offsetWidth;

            if (largeurScrollbarBody > 0) {
              body.style['padding-right'] = largeurScrollbarBody + 'px';
            }
          }
        }

        html.classList.add("utd-modale-ouverte");
      }
    }, {
      key: "ajusterInterfacePendantAffichageModale",
      value: function ajusterInterfacePendantAffichageModale(body, modale) {
        if (!this.estMobile()) {
          var largeurScrollbarModale = window.innerWidth - modale.offsetWidth;

          if (largeurScrollbarModale > 0) {
            body.style['padding-right'] = largeurScrollbarModale + 'px';
          }
        }
      }
    }, {
      key: "ajusterInterfaceApresFermetureModale",
      value: function ajusterInterfaceApresFermetureModale(html, body) {
        html.style.removeProperty('padding-right');
        body.style.removeProperty('padding-right');
        html.classList.remove("utd-modale-ouverte");
      }
    }, {
      key: "slotExiste",
      value: function slotExiste(slots, nomSlot) {
        return slots.some(function (s) {
          return s.slot === nomSlot;
        });
      }
      /**
       * Obtient la langue de la page courante.
       * @returns {string} Code de langue de la page courante (fr/en).
       */

    }, {
      key: "obtenirLanguePage",
      value: function obtenirLanguePage() {
        return document.getElementsByTagName("html")[0].getAttribute("lang") || "fr";
      }
    }]);

    return Utils;
  }();

  _defineProperty(Utils, "dispatchWcEvent", function (component, nomEvenement, detailsEvenement) {
    component.dispatchEvent(new CustomEvent(nomEvenement, {
      detail: detailsEvenement,
      composed: true // propage l'événement à travers le shadow DOM (Remonte au document)

    }));
  });

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var file$4 = "src\\librairie\\components\\accordeon.svelte"; // (45:8) {#if titre}

  function create_if_block_2$2(ctx) {
    var t;
    var block = {
      c: function create() {
        t = text(
        /*titre*/
        ctx[1]);
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*titre*/
        2) set_data_dev(t,
        /*titre*/
        ctx[1]);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$2.name,
      type: "if",
      source: "(45:8) {#if titre}",
      ctx: ctx
    });
    return block;
  } // (55:6) {#if afficher}


  function create_if_block$3(ctx) {
    var div;
    var t;
    var slot;
    var div_transition;
    var current;
    var if_block =
    /*contenu*/
    ctx[2] && create_if_block_1$2(ctx);
    var block = {
      c: function create() {
        div = element("div");
        if (if_block) if_block.c();
        t = space();
        slot = element("slot");
        attr_dev(slot, "name", "contenu");
        add_location(slot, file$4, 59, 8, 1642);
        add_location(div, file$4, 55, 6, 1526);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        if (if_block) if_block.m(div, null);
        append_dev(div, t);
        append_dev(div, slot);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (
        /*contenu*/
        ctx[2]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_1$2(ctx);
            if_block.c();
            if_block.m(div, t);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {
            duration: 250
          }, true);
          div_transition.run(1);
        });
        current = true;
      },
      o: function outro(local) {
        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {
          duration: 250
        }, false);
        div_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (if_block) if_block.d();
        if (detaching && div_transition) div_transition.end();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$3.name,
      type: "if",
      source: "(55:6) {#if afficher}",
      ctx: ctx
    });
    return block;
  } // (57:8) {#if contenu}


  function create_if_block_1$2(ctx) {
    var html_tag;
    var html_anchor;
    var block = {
      c: function create() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m: function mount(target, anchor) {
        html_tag.m(
        /*contenu*/
        ctx[2], target, anchor);
        insert_dev(target, html_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*contenu*/
        4) html_tag.p(
        /*contenu*/
        ctx[2]);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(html_anchor);
        if (detaching) html_tag.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$2.name,
      type: "if",
      source: "(57:8) {#if contenu}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$4(ctx) {
    var div2;
    var div0;
    var button;
    var span0;
    var t0;
    var slot;
    var t1;
    var span1;
    var span1_class_value;
    var t2;
    var div1;
    var div2_class_value;
    var t3;
    var link;
    var current;
    var mounted;
    var dispose;
    var if_block0 =
    /*titre*/
    ctx[1] && create_if_block_2$2(ctx);
    var if_block1 =
    /*afficher*/
    ctx[0] && create_if_block$3(ctx);
    var block = {
      c: function create() {
        div2 = element("div");
        div0 = element("div");
        button = element("button");
        span0 = element("span");
        if (if_block0) if_block0.c();
        t0 = space();
        slot = element("slot");
        t1 = space();
        span1 = element("span");
        t2 = space();
        div1 = element("div");
        if (if_block1) if_block1.c();
        t3 = space();
        link = element("link");
        this.c = noop;
        attr_dev(slot, "name", "titre");
        add_location(slot, file$4, 47, 8, 1306);
        attr_dev(span0, "class", "titre");
        add_location(span0, file$4, 43, 6, 1221);
        attr_dev(span1, "class", span1_class_value = "utd-icone-svg " + (
        /*afficher*/
        ctx[0] ? 'moins' : 'plus') + " md");
        add_location(span1, file$4, 49, 6, 1356);
        attr_dev(button, "class", "");
        attr_dev(button, "aria-controls",
        /*idContenu*/
        ctx[3]);
        attr_dev(button, "aria-expanded",
        /*afficher*/
        ctx[0]);
        add_location(button, file$4, 42, 4, 1107);
        attr_dev(div0, "class", "entete");
        add_location(div0, file$4, 41, 2, 1081);
        attr_dev(div1, "id",
        /*idContenu*/
        ctx[3]);
        attr_dev(div1, "class", "contenu");
        add_location(div1, file$4, 53, 4, 1457);
        attr_dev(div2, "class", div2_class_value = "utd-component utd-accordeon " + (
        /*afficher*/
        ctx[0] ? 'ouvert' : ''));
        add_location(div2, file$4, 40, 0, 1008);
        attr_dev(link, "rel", "stylesheet");
        attr_dev(link, "href", "/css/utd-webcomponents-v1.3.0.min.css");
        add_location(link, file$4, 66, 0, 1718);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div2, anchor);
        append_dev(div2, div0);
        append_dev(div0, button);
        append_dev(button, span0);
        if (if_block0) if_block0.m(span0, null);
        append_dev(span0, t0);
        append_dev(span0, slot);
        append_dev(button, t1);
        append_dev(button, span1);
        append_dev(div2, t2);
        append_dev(div2, div1);
        if (if_block1) if_block1.m(div1, null);
        insert_dev(target, t3, anchor);
        insert_dev(target, link, anchor);
        current = true;

        if (!mounted) {
          dispose = listen_dev(button, "click",
          /*toggleAffichageContenu*/
          ctx[4], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*titre*/
        ctx[1]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2$2(ctx);
            if_block0.c();
            if_block0.m(span0, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (!current || dirty &
        /*afficher*/
        1 && span1_class_value !== (span1_class_value = "utd-icone-svg " + (
        /*afficher*/
        ctx[0] ? 'moins' : 'plus') + " md")) {
          attr_dev(span1, "class", span1_class_value);
        }

        if (!current || dirty &
        /*afficher*/
        1) {
          attr_dev(button, "aria-expanded",
          /*afficher*/
          ctx[0]);
        }

        if (
        /*afficher*/
        ctx[0]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*afficher*/
            1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$3(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div1, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }

        if (!current || dirty &
        /*afficher*/
        1 && div2_class_value !== (div2_class_value = "utd-component utd-accordeon " + (
        /*afficher*/
        ctx[0] ? 'ouvert' : ''))) {
          attr_dev(div2, "class", div2_class_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div2);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (detaching) detach_dev(t3);
        if (detaching) detach_dev(link);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('utd-accordeon', slots, []);
    var _$$props$afficher = $$props.afficher,
        afficher = _$$props$afficher === void 0 ? false : _$$props$afficher;
    var _$$props$titre = $$props.titre,
        titre = _$$props$titre === void 0 ? "" : _$$props$titre;
    var _$$props$lang = $$props.lang,
        lang = _$$props$lang === void 0 ? "fr" : _$$props$lang;
    var _$$props$srtitre = $$props.srtitre,
        srtitre = _$$props$srtitre === void 0 ? "" : _$$props$srtitre;
    var _$$props$srboutonouvr = $$props.srboutonouvrir,
        srboutonouvrir = _$$props$srboutonouvr === void 0 ? "" : _$$props$srboutonouvr;
    var _$$props$srboutonferm = $$props.srboutonfermer,
        srboutonfermer = _$$props$srboutonferm === void 0 ? "" : _$$props$srboutonferm;
    var _$$props$contenu = $$props.contenu,
        contenu = _$$props$contenu === void 0 ? "" : _$$props$contenu;
    var idEntete = Utils.genererId();
    var idContenu = 'corps' + idEntete;
    var srTexteTitre = srtitre ? srtitre : lang === "fr" ? "Aide à propos de&nbsp;" : "Help about&nbsp;";
    var srTexteBoutonOuvrir = srboutonouvrir ? srboutonouvrir : lang === "fr" ? "Afficher l'aide contextuelle" : "Show help about";
    var srTexteBoutonFermer = srboutonfermer ? srboutonfermer : lang === "fr" ? "Fermer" : "Close";

    function toggleAffichageContenu() {
      $$invalidate(0, afficher = !afficher);
    }

    var writable_props = ['afficher', 'titre', 'lang', 'srtitre', 'srboutonouvrir', 'srboutonfermer', 'contenu'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<utd-accordeon> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('afficher' in $$props) $$invalidate(0, afficher = $$props.afficher);
      if ('titre' in $$props) $$invalidate(1, titre = $$props.titre);
      if ('lang' in $$props) $$invalidate(5, lang = $$props.lang);
      if ('srtitre' in $$props) $$invalidate(6, srtitre = $$props.srtitre);
      if ('srboutonouvrir' in $$props) $$invalidate(7, srboutonouvrir = $$props.srboutonouvrir);
      if ('srboutonfermer' in $$props) $$invalidate(8, srboutonfermer = $$props.srboutonfermer);
      if ('contenu' in $$props) $$invalidate(2, contenu = $$props.contenu);
    };

    $$self.$capture_state = function () {
      return {
        slide: slide,
        Utils: Utils,
        afficher: afficher,
        titre: titre,
        lang: lang,
        srtitre: srtitre,
        srboutonouvrir: srboutonouvrir,
        srboutonfermer: srboutonfermer,
        contenu: contenu,
        idEntete: idEntete,
        idContenu: idContenu,
        srTexteTitre: srTexteTitre,
        srTexteBoutonOuvrir: srTexteBoutonOuvrir,
        srTexteBoutonFermer: srTexteBoutonFermer,
        toggleAffichageContenu: toggleAffichageContenu
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('afficher' in $$props) $$invalidate(0, afficher = $$props.afficher);
      if ('titre' in $$props) $$invalidate(1, titre = $$props.titre);
      if ('lang' in $$props) $$invalidate(5, lang = $$props.lang);
      if ('srtitre' in $$props) $$invalidate(6, srtitre = $$props.srtitre);
      if ('srboutonouvrir' in $$props) $$invalidate(7, srboutonouvrir = $$props.srboutonouvrir);
      if ('srboutonfermer' in $$props) $$invalidate(8, srboutonfermer = $$props.srboutonfermer);
      if ('contenu' in $$props) $$invalidate(2, contenu = $$props.contenu);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [afficher, titre, contenu, idContenu, toggleAffichageContenu, lang, srtitre, srboutonouvrir, srboutonfermer];
  }

  var Accordeon = /*#__PURE__*/function (_SvelteElement) {
    _inherits(Accordeon, _SvelteElement);

    var _super = _createSuper$4(Accordeon);

    function Accordeon(options) {
      var _this;

      _classCallCheck(this, Accordeon);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), {
        target: _this.shadowRoot,
        props: attribute_to_object(_this.attributes),
        customElement: true
      }, instance$4, create_fragment$4, safe_not_equal, {
        afficher: 0,
        titre: 1,
        lang: 5,
        srtitre: 6,
        srboutonouvrir: 7,
        srboutonfermer: 8,
        contenu: 2
      }, null);

      if (options) {
        if (options.target) {
          insert_dev(options.target, _assertThisInitialized(_this), options.anchor);
        }

        if (options.props) {
          _this.$set(options.props);

          flush();
        }
      }

      return _this;
    }

    _createClass(Accordeon, [{
      key: "afficher",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(afficher) {
        this.$$set({
          afficher: afficher
        });
        flush();
      }
    }, {
      key: "titre",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(titre) {
        this.$$set({
          titre: titre
        });
        flush();
      }
    }, {
      key: "lang",
      get: function get() {
        return this.$$.ctx[5];
      },
      set: function set(lang) {
        this.$$set({
          lang: lang
        });
        flush();
      }
    }, {
      key: "srtitre",
      get: function get() {
        return this.$$.ctx[6];
      },
      set: function set(srtitre) {
        this.$$set({
          srtitre: srtitre
        });
        flush();
      }
    }, {
      key: "srboutonouvrir",
      get: function get() {
        return this.$$.ctx[7];
      },
      set: function set(srboutonouvrir) {
        this.$$set({
          srboutonouvrir: srboutonouvrir
        });
        flush();
      }
    }, {
      key: "srboutonfermer",
      get: function get() {
        return this.$$.ctx[8];
      },
      set: function set(srboutonfermer) {
        this.$$set({
          srboutonfermer: srboutonfermer
        });
        flush();
      }
    }, {
      key: "contenu",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(contenu) {
        this.$$set({
          contenu: contenu
        });
        flush();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["afficher", "titre", "lang", "srtitre", "srboutonouvrir", "srboutonfermer", "contenu"];
      }
    }]);

    return Accordeon;
  }(SvelteElement);

  customElements.define("utd-accordeon", Accordeon);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var file$3 = "src\\librairie\\components\\avis.svelte"; // (26:6) {#if contenu}

  function create_if_block$2(ctx) {
    var html_tag;
    var html_anchor;
    var block = {
      c: function create() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m: function mount(target, anchor) {
        html_tag.m(
        /*contenu*/
        ctx[2], target, anchor);
        insert_dev(target, html_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*contenu*/
        4) html_tag.p(
        /*contenu*/
        ctx[2]);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(html_anchor);
        if (detaching) html_tag.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$2.name,
      type: "if",
      source: "(26:6) {#if contenu}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var div4;
    var div1;
    var div0;
    var div0_class_value;
    var t0;
    var div3;
    var h2;
    var t1;
    var t2;
    var div2;
    var t3;
    var slot;
    var div4_class_value;
    var t4;
    var link;
    var if_block =
    /*contenu*/
    ctx[2] && create_if_block$2(ctx);
    var block = {
      c: function create() {
        div4 = element("div");
        div1 = element("div");
        div0 = element("div");
        t0 = space();
        div3 = element("div");
        h2 = element("h2");
        t1 = text(
        /*titre*/
        ctx[0]);
        t2 = space();
        div2 = element("div");
        if (if_block) if_block.c();
        t3 = space();
        slot = element("slot");
        t4 = space();
        link = element("link");
        this.c = noop;
        attr_dev(div0, "aria-hidden", "true");
        attr_dev(div0, "class", div0_class_value = "utd-icone-svg " +
        /*type*/
        ctx[1]);
        add_location(div0, file$3, 18, 4, 451);
        attr_dev(div1, "class", "zone-icone");
        add_location(div1, file$3, 17, 2, 421);
        attr_dev(h2, "class", "titre d-flex justify-content-between align-self-center");
        add_location(h2, file$3, 21, 4, 561);
        attr_dev(slot, "name", "contenu");
        add_location(slot, file$3, 28, 6, 746);
        attr_dev(div2, "class", "texte");
        add_location(div2, file$3, 24, 4, 660);
        attr_dev(div3, "class", "contenu zone-html");
        add_location(div3, file$3, 20, 2, 524);
        attr_dev(div4, "class", div4_class_value = "utd-component utd-avis " +
        /*type*/
        ctx[1]);
        attr_dev(div4, "role",
        /*role*/
        ctx[3]);
        add_location(div4, file$3, 16, 0, 367);
        attr_dev(link, "rel", "stylesheet");
        attr_dev(link, "href", "/css/utd-webcomponents-v1.3.0.min.css");
        add_location(link, file$3, 33, 0, 803);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div4, anchor);
        append_dev(div4, div1);
        append_dev(div1, div0);
        append_dev(div4, t0);
        append_dev(div4, div3);
        append_dev(div3, h2);
        append_dev(h2, t1);
        append_dev(div3, t2);
        append_dev(div3, div2);
        if (if_block) if_block.m(div2, null);
        append_dev(div2, t3);
        append_dev(div2, slot);
        insert_dev(target, t4, anchor);
        insert_dev(target, link, anchor);
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*type*/
        2 && div0_class_value !== (div0_class_value = "utd-icone-svg " +
        /*type*/
        ctx[1])) {
          attr_dev(div0, "class", div0_class_value);
        }

        if (dirty &
        /*titre*/
        1) set_data_dev(t1,
        /*titre*/
        ctx[0]);

        if (
        /*contenu*/
        ctx[2]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block$2(ctx);
            if_block.c();
            if_block.m(div2, t3);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*type*/
        2 && div4_class_value !== (div4_class_value = "utd-component utd-avis " +
        /*type*/
        ctx[1])) {
          attr_dev(div4, "class", div4_class_value);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div4);
        if (if_block) if_block.d();
        if (detaching) detach_dev(t4);
        if (detaching) detach_dev(link);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('utd-avis', slots, []);
    var _$$props$titre = $$props.titre,
        titre = _$$props$titre === void 0 ? "" : _$$props$titre;
    var _$$props$type = $$props.type,
        type = _$$props$type === void 0 ? "information" : _$$props$type;
    var _$$props$contenu = $$props.contenu,
        contenu = _$$props$contenu === void 0 ? "" : _$$props$contenu;
    var role = type === 'erreur' || type === 'avertissement' ? 'alert' : null;
    var writable_props = ['titre', 'type', 'contenu'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<utd-avis> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('titre' in $$props) $$invalidate(0, titre = $$props.titre);
      if ('type' in $$props) $$invalidate(1, type = $$props.type);
      if ('contenu' in $$props) $$invalidate(2, contenu = $$props.contenu);
    };

    $$self.$capture_state = function () {
      return {
        titre: titre,
        type: type,
        contenu: contenu,
        role: role
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('titre' in $$props) $$invalidate(0, titre = $$props.titre);
      if ('type' in $$props) $$invalidate(1, type = $$props.type);
      if ('contenu' in $$props) $$invalidate(2, contenu = $$props.contenu);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [titre, type, contenu, role];
  }

  var Avis = /*#__PURE__*/function (_SvelteElement) {
    _inherits(Avis, _SvelteElement);

    var _super = _createSuper$3(Avis);

    function Avis(options) {
      var _this;

      _classCallCheck(this, Avis);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), {
        target: _this.shadowRoot,
        props: attribute_to_object(_this.attributes),
        customElement: true
      }, instance$3, create_fragment$3, safe_not_equal, {
        titre: 0,
        type: 1,
        contenu: 2
      }, null);

      if (options) {
        if (options.target) {
          insert_dev(options.target, _assertThisInitialized(_this), options.anchor);
        }

        if (options.props) {
          _this.$set(options.props);

          flush();
        }
      }

      return _this;
    }

    _createClass(Avis, [{
      key: "titre",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(titre) {
        this.$$set({
          titre: titre
        });
        flush();
      }
    }, {
      key: "type",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(type) {
        this.$$set({
          type: type
        });
        flush();
      }
    }, {
      key: "contenu",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(contenu) {
        this.$$set({
          contenu: contenu
        });
        flush();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["titre", "type", "contenu"];
      }
    }]);

    return Avis;
  }(SvelteElement);

  customElements.define("utd-avis", Avis);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var file$2 = "src\\librairie\\components\\dialogueModal.svelte"; // (121:0) {#if estModaleAffichee}

  function create_if_block$1(ctx) {
    var div0;
    var t0;
    var div5;
    var div4;
    var button;
    var span;
    var t1;
    var div3;
    var div1;
    var t2;
    var h1;
    var t3;
    var div1_class_value;
    var t4;
    var div2;
    var slot;
    var t5;
    var show_if = Utils.slotExiste(
    /*slots*/
    ctx[5], 'pied');
    var div5_aria_describedby_value;
    var div5_class_value;
    var div5_intro;
    var div5_outro;
    var current;
    var mounted;
    var dispose;
    var if_block0 =
    /*type*/
    ctx[0] && create_if_block_2$1(ctx);
    var if_block1 = show_if && create_if_block_1$1(ctx);
    var block = {
      c: function create() {
        div0 = element("div");
        t0 = space();
        div5 = element("div");
        div4 = element("div");
        button = element("button");
        span = element("span");
        t1 = space();
        div3 = element("div");
        div1 = element("div");
        if (if_block0) if_block0.c();
        t2 = space();
        h1 = element("h1");
        t3 = text(
        /*titre*/
        ctx[2]);
        t4 = space();
        div2 = element("div");
        slot = element("slot");
        t5 = space();
        if (if_block1) if_block1.c();
        attr_dev(div0, "class", "utd-backdrop");
        add_location(div0, file$2, 121, 2, 4001);
        attr_dev(span, "aria-hidden", "true");
        attr_dev(span, "class", "utd-icone-svg x-fermer-bleu");
        add_location(span, file$2, 145, 8, 4863);
        attr_dev(button, "type", "button");
        attr_dev(button, "class", "close");
        attr_dev(button, "aria-label",
        /*srTexteBoutonFermer*/
        ctx[9]);
        add_location(button, file$2, 139, 8, 4693);
        attr_dev(h1, "id",
        /*idEntete*/
        ctx[7]);
        attr_dev(h1, "class", "titre-dialog");
        add_location(h1, file$2, 155, 10, 5190);
        attr_dev(div1, "class", div1_class_value = "entete " + (
        /*type*/
        ctx[0] ? 'avec-type' : ''));
        add_location(div1, file$2, 151, 8, 5015);
        attr_dev(slot, "name", "contenu");
        add_location(slot, file$2, 160, 10, 5337);
        attr_dev(div2, "class", "corps");
        attr_dev(div2, "id",
        /*idCorps*/
        ctx[8]);
        add_location(div2, file$2, 159, 8, 5293);
        attr_dev(div3, "class", "principal");
        add_location(div3, file$2, 150, 6, 4982);
        attr_dev(div4, "class", "conteneur");
        add_location(div4, file$2, 138, 4, 4660);
        attr_dev(div5, "tabindex", "-1");
        attr_dev(div5, "aria-labelledby",
        /*idEntete*/
        ctx[7]);
        attr_dev(div5, "aria-describedby", div5_aria_describedby_value =
        /*estfenetremessage*/
        ctx[1] === 'true' ?
        /*idCorps*/
        ctx[8] : null);
        attr_dev(div5, "class", div5_class_value = "utd-component utd-dialog " + (
        /*estfenetremessage*/
        ctx[1] === 'true' ? 'fenetre-message' : '') + " " + (
        /*estboutonstextelong*/
        ctx[3] === 'true' ? 'boutons-texte-long' : ''));
        attr_dev(div5, "id",
        /*idModale*/
        ctx[6]);
        attr_dev(div5, "aria-modal", "true");
        attr_dev(div5, "role", "dialog");
        add_location(div5, file$2, 122, 2, 4081);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div0, anchor);
        insert_dev(target, t0, anchor);
        insert_dev(target, div5, anchor);
        append_dev(div5, div4);
        append_dev(div4, button);
        append_dev(button, span);
        append_dev(div4, t1);
        append_dev(div4, div3);
        append_dev(div3, div1);
        if (if_block0) if_block0.m(div1, null);
        append_dev(div1, t2);
        append_dev(div1, h1);
        append_dev(h1, t3);
        append_dev(div3, t4);
        append_dev(div3, div2);
        append_dev(div2, slot);
        append_dev(div3, t5);
        if (if_block1) if_block1.m(div3, null);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(div0, "click",
          /*click_handler*/
          ctx[20], false, false, false), listen_dev(button, "click",
          /*click_handler_1*/
          ctx[21], false, false, false), listen_dev(div5, "click",
          /*clickModale*/
          ctx[12], false, false, false), listen_dev(div5, "keydown",
          /*keydown*/
          ctx[11], false, false, false), listen_dev(div5, "introend",
          /*ajusterModalePendantAffichage*/
          ctx[14], false, false, false), listen_dev(div5, "outroend",
          /*finAnimationFermeture*/
          ctx[13], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (
        /*type*/
        ctx[0]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2$1(ctx);
            if_block0.c();
            if_block0.m(div1, t2);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (!current || dirty &
        /*titre*/
        4) set_data_dev(t3,
        /*titre*/
        ctx[2]);

        if (!current || dirty &
        /*type*/
        1 && div1_class_value !== (div1_class_value = "entete " + (
        /*type*/
        ctx[0] ? 'avec-type' : ''))) {
          attr_dev(div1, "class", div1_class_value);
        }

        if (dirty &
        /*slots*/
        32) show_if = Utils.slotExiste(
        /*slots*/
        ctx[5], 'pied');

        if (show_if) {
          if (if_block1) ; else {
            if_block1 = create_if_block_1$1(ctx);
            if_block1.c();
            if_block1.m(div3, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }

        if (!current || dirty &
        /*estfenetremessage*/
        2 && div5_aria_describedby_value !== (div5_aria_describedby_value =
        /*estfenetremessage*/
        ctx[1] === 'true' ?
        /*idCorps*/
        ctx[8] : null)) {
          attr_dev(div5, "aria-describedby", div5_aria_describedby_value);
        }

        if (!current || dirty &
        /*estfenetremessage, estboutonstextelong*/
        10 && div5_class_value !== (div5_class_value = "utd-component utd-dialog " + (
        /*estfenetremessage*/
        ctx[1] === 'true' ? 'fenetre-message' : '') + " " + (
        /*estboutonstextelong*/
        ctx[3] === 'true' ? 'boutons-texte-long' : ''))) {
          attr_dev(div5, "class", div5_class_value);
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (div5_outro) div5_outro.end(1);
          div5_intro = create_in_transition(div5, fly, {
            y: 200,
            duration: 500
          });
          div5_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        if (div5_intro) div5_intro.invalidate();
        div5_outro = create_out_transition(div5, fly, {
          y: 200,
          duration: 250
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div0);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(div5);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (detaching && div5_outro) div5_outro.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block$1.name,
      type: "if",
      source: "(121:0) {#if estModaleAffichee}",
      ctx: ctx
    });
    return block;
  } // (153:10) {#if type}


  function create_if_block_2$1(ctx) {
    var span;
    var span_class_value;
    var block = {
      c: function create() {
        span = element("span");
        attr_dev(span, "class", span_class_value = "utd-icone-svg " +
        /*type*/
        ctx[0]);
        attr_dev(span, "aria-hidden", "true");
        add_location(span, file$2, 153, 12, 5097);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*type*/
        1 && span_class_value !== (span_class_value = "utd-icone-svg " +
        /*type*/
        ctx[0])) {
          attr_dev(span, "class", span_class_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2$1.name,
      type: "if",
      source: "(153:10) {#if type}",
      ctx: ctx
    });
    return block;
  } // (163:8) {#if Utils.slotExiste(slots, 'pied')}


  function create_if_block_1$1(ctx) {
    var div;
    var slot;
    var block = {
      c: function create() {
        div = element("div");
        slot = element("slot");
        attr_dev(slot, "name", "pied");
        add_location(slot, file$2, 164, 12, 5467);
        attr_dev(div, "class", "pied");
        add_location(div, file$2, 163, 10, 5435);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, slot);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(163:8) {#if Utils.slotExiste(slots, 'pied')}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var t;
    var link;
    var current;
    var if_block =
    /*estModaleAffichee*/
    ctx[4] && create_if_block$1(ctx);
    var block = {
      c: function create() {
        if (if_block) if_block.c();
        t = space();
        link = element("link");
        this.c = noop;
        attr_dev(link, "rel", "stylesheet");
        attr_dev(link, "href", "/css/utd-webcomponents-v1.3.0.min.css");
        add_location(link, file$2, 172, 0, 5577);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert_dev(target, t, anchor);
        insert_dev(target, link, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*estModaleAffichee*/
        ctx[4]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*estModaleAffichee*/
            16) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$1(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t.parentNode, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach_dev(t);
        if (detaching) detach_dev(link);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots$1 = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('utd-dialog', slots$1, []);
    var _$$props$afficher = $$props.afficher,
        afficher = _$$props$afficher === void 0 ? 'false' : _$$props$afficher;
    var _$$props$type = $$props.type,
        type = _$$props$type === void 0 ? '' : _$$props$type;
    var _$$props$estfenetreme = $$props.estfenetremessage,
        estfenetremessage = _$$props$estfenetreme === void 0 ? 'false' : _$$props$estfenetreme;
    var _$$props$raisonfermet = $$props.raisonfermeture,
        raisonfermeture = _$$props$raisonfermet === void 0 ? '' : _$$props$raisonfermet;
    var _$$props$titre = $$props.titre,
        titre = _$$props$titre === void 0 ? '' : _$$props$titre;
    var _$$props$lang = $$props.lang,
        lang = _$$props$lang === void 0 ? 'fr' : _$$props$lang;
    var _$$props$srboutonferm = $$props.srboutonfermer,
        srboutonfermer = _$$props$srboutonferm === void 0 ? '' : _$$props$srboutonferm;
    var _$$props$idfocus = $$props.idfocus,
        idfocus = _$$props$idfocus === void 0 ? '' : _$$props$idfocus;
    var _$$props$estboutonste = $$props.estboutonstextelong,
        estboutonstextelong = _$$props$estboutonste === void 0 ? 'false' : _$$props$estboutonste;
    var idModale = Utils.genererId();
    var idEntete = Utils.genererId();
    var idCorps = Utils.genererId();
    var srTexteBoutonFermer = srboutonfermer ? srboutonfermer : lang === "fr" ? "Fermer" : "Close";
    var estModaleAffichee = afficher === 'true';
    var thisComponent = get_current_component();
    var html;
    var body;
    var slots = [];
    var mounted = false;
    onMount(function () {
      html = thisComponent.getRootNode().getElementsByTagName("html")[0];
      body = thisComponent.getRootNode().getElementsByTagName("body")[0];
      $$invalidate(5, slots = Array.from(thisComponent.querySelectorAll('[slot]')));
      mounted = true;
    });

    function masquerModale(raisonFermetureModale) {
      $$invalidate(4, estModaleAffichee = false);
      $$invalidate(15, afficher = 'false'); //Si une raison de fermeture est reçue en param, on l'utilise sinon on prend la raison de fermeture qui est sur la modale "raisonfermeture" qui va contenir une raison de fermeture externe à la modale (ex. clic sur bouton primaire ou secondaire)

      var raison = raisonFermetureModale || raisonfermeture; //On redonne le focus au contrôle spécifié (normalement celui qui a initié l'affichage de la fenêtre modale)

      var controleFocus = thisComponent.getRootNode().getElementById(idfocus);

      if (controleFocus) {
        controleFocus.focus();
      }

      Utils.dispatchWcEvent(thisComponent, "fermeture", {
        raisonFermeture: raison
      });
    } // Exécuté lorsque la valeur de la prop "afficher" change


    function toggleAfficher() {
      if (mounted) {
        if (afficher === 'true') {
          $$invalidate(16, raisonfermeture = '');
          Utils.ajusterInterfaceAvantAffichageModale(html, body);
          $$invalidate(4, estModaleAffichee = true);
        } else {
          if (estModaleAffichee) {
            masquerModale();
          }
        }
      }
    }

    function keydown(e) {
      if (e.key === "Escape") {
        masquerModale('escape');
      }
    }

    function clickModale(e) {
      if (e.target === e.currentTarget) {
        masquerModale('clickBackdrop');
      }
    }

    function finAnimationFermeture(e) {
      Utils.ajusterInterfaceApresFermetureModale(html, body, thisComponent.shadowRoot.getElementById(idModale));
      Utils.dispatchWcEvent(thisComponent, "apresFermeture");
    }

    function ajusterModalePendantAffichage(e) {
      var modale = thisComponent.shadowRoot.getElementById(idModale);
      Utils.ajusterInterfacePendantAffichageModale(body, modale); //thisComponent.shadowRoot.getElementById(idModale).focus()

      donnerfocusPremierElementFocusable(modale);
      Utils.conserverFocusElement(modale, thisComponent);
    }

    function donnerfocusPremierElementFocusable(modale) {
      var premierElementFocusable = null;

      if (estfenetremessage === 'true') {
        premierElementFocusable = thisComponent.querySelector('.utd-btn.primaire');
      }

      if (!premierElementFocusable) {
        var elementsFocusablesShadow = Array.from(Utils.obtenirElementsFocusables(modale));
        var elementsFocusablesRoot = Array.from(Utils.obtenirElementsFocusables(thisComponent));
        var elementsFocusables = elementsFocusablesRoot.concat(elementsFocusablesShadow);
        premierElementFocusable = elementsFocusables[0];
      }

      premierElementFocusable.focus();
    }

    var writable_props = ['afficher', 'type', 'estfenetremessage', 'raisonfermeture', 'titre', 'lang', 'srboutonfermer', 'idfocus', 'estboutonstextelong'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<utd-dialog> was created with unknown prop '".concat(key, "'"));
    });

    var click_handler = function click_handler() {
      return masquerModale('clickBackdrop');
    };

    var click_handler_1 = function click_handler_1() {
      return masquerModale('boutonFermer');
    };

    $$self.$$set = function ($$props) {
      if ('afficher' in $$props) $$invalidate(15, afficher = $$props.afficher);
      if ('type' in $$props) $$invalidate(0, type = $$props.type);
      if ('estfenetremessage' in $$props) $$invalidate(1, estfenetremessage = $$props.estfenetremessage);
      if ('raisonfermeture' in $$props) $$invalidate(16, raisonfermeture = $$props.raisonfermeture);
      if ('titre' in $$props) $$invalidate(2, titre = $$props.titre);
      if ('lang' in $$props) $$invalidate(17, lang = $$props.lang);
      if ('srboutonfermer' in $$props) $$invalidate(18, srboutonfermer = $$props.srboutonfermer);
      if ('idfocus' in $$props) $$invalidate(19, idfocus = $$props.idfocus);
      if ('estboutonstextelong' in $$props) $$invalidate(3, estboutonstextelong = $$props.estboutonstextelong);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        fly: fly,
        get_current_component: get_current_component,
        Utils: Utils,
        afficher: afficher,
        type: type,
        estfenetremessage: estfenetremessage,
        raisonfermeture: raisonfermeture,
        titre: titre,
        lang: lang,
        srboutonfermer: srboutonfermer,
        idfocus: idfocus,
        estboutonstextelong: estboutonstextelong,
        idModale: idModale,
        idEntete: idEntete,
        idCorps: idCorps,
        srTexteBoutonFermer: srTexteBoutonFermer,
        estModaleAffichee: estModaleAffichee,
        thisComponent: thisComponent,
        html: html,
        body: body,
        slots: slots,
        mounted: mounted,
        masquerModale: masquerModale,
        toggleAfficher: toggleAfficher,
        keydown: keydown,
        clickModale: clickModale,
        finAnimationFermeture: finAnimationFermeture,
        ajusterModalePendantAffichage: ajusterModalePendantAffichage,
        donnerfocusPremierElementFocusable: donnerfocusPremierElementFocusable
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('afficher' in $$props) $$invalidate(15, afficher = $$props.afficher);
      if ('type' in $$props) $$invalidate(0, type = $$props.type);
      if ('estfenetremessage' in $$props) $$invalidate(1, estfenetremessage = $$props.estfenetremessage);
      if ('raisonfermeture' in $$props) $$invalidate(16, raisonfermeture = $$props.raisonfermeture);
      if ('titre' in $$props) $$invalidate(2, titre = $$props.titre);
      if ('lang' in $$props) $$invalidate(17, lang = $$props.lang);
      if ('srboutonfermer' in $$props) $$invalidate(18, srboutonfermer = $$props.srboutonfermer);
      if ('idfocus' in $$props) $$invalidate(19, idfocus = $$props.idfocus);
      if ('estboutonstextelong' in $$props) $$invalidate(3, estboutonstextelong = $$props.estboutonstextelong);
      if ('estModaleAffichee' in $$props) $$invalidate(4, estModaleAffichee = $$props.estModaleAffichee);
      if ('html' in $$props) html = $$props.html;
      if ('body' in $$props) body = $$props.body;
      if ('slots' in $$props) $$invalidate(5, slots = $$props.slots);
      if ('mounted' in $$props) mounted = $$props.mounted;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*afficher*/
      32768) {
        // Watch sur la prop afficher
        toggleAfficher();
      }
    };

    return [type, estfenetremessage, titre, estboutonstextelong, estModaleAffichee, slots, idModale, idEntete, idCorps, srTexteBoutonFermer, masquerModale, keydown, clickModale, finAnimationFermeture, ajusterModalePendantAffichage, afficher, raisonfermeture, lang, srboutonfermer, idfocus, click_handler, click_handler_1];
  }

  var DialogueModal = /*#__PURE__*/function (_SvelteElement) {
    _inherits(DialogueModal, _SvelteElement);

    var _super = _createSuper$2(DialogueModal);

    function DialogueModal(options) {
      var _this;

      _classCallCheck(this, DialogueModal);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), {
        target: _this.shadowRoot,
        props: attribute_to_object(_this.attributes),
        customElement: true
      }, instance$2, create_fragment$2, safe_not_equal, {
        afficher: 15,
        type: 0,
        estfenetremessage: 1,
        raisonfermeture: 16,
        titre: 2,
        lang: 17,
        srboutonfermer: 18,
        idfocus: 19,
        estboutonstextelong: 3
      }, null);

      if (options) {
        if (options.target) {
          insert_dev(options.target, _assertThisInitialized(_this), options.anchor);
        }

        if (options.props) {
          _this.$set(options.props);

          flush();
        }
      }

      return _this;
    }

    _createClass(DialogueModal, [{
      key: "afficher",
      get: function get() {
        return this.$$.ctx[15];
      },
      set: function set(afficher) {
        this.$$set({
          afficher: afficher
        });
        flush();
      }
    }, {
      key: "type",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(type) {
        this.$$set({
          type: type
        });
        flush();
      }
    }, {
      key: "estfenetremessage",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(estfenetremessage) {
        this.$$set({
          estfenetremessage: estfenetremessage
        });
        flush();
      }
    }, {
      key: "raisonfermeture",
      get: function get() {
        return this.$$.ctx[16];
      },
      set: function set(raisonfermeture) {
        this.$$set({
          raisonfermeture: raisonfermeture
        });
        flush();
      }
    }, {
      key: "titre",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(titre) {
        this.$$set({
          titre: titre
        });
        flush();
      }
    }, {
      key: "lang",
      get: function get() {
        return this.$$.ctx[17];
      },
      set: function set(lang) {
        this.$$set({
          lang: lang
        });
        flush();
      }
    }, {
      key: "srboutonfermer",
      get: function get() {
        return this.$$.ctx[18];
      },
      set: function set(srboutonfermer) {
        this.$$set({
          srboutonfermer: srboutonfermer
        });
        flush();
      }
    }, {
      key: "idfocus",
      get: function get() {
        return this.$$.ctx[19];
      },
      set: function set(idfocus) {
        this.$$set({
          idfocus: idfocus
        });
        flush();
      }
    }, {
      key: "estboutonstextelong",
      get: function get() {
        return this.$$.ctx[3];
      },
      set: function set(estboutonstextelong) {
        this.$$set({
          estboutonstextelong: estboutonstextelong
        });
        flush();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["afficher", "type", "estfenetremessage", "raisonfermeture", "titre", "lang", "srboutonfermer", "idfocus", "estboutonstextelong"];
      }
    }]);

    return DialogueModal;
  }(SvelteElement);

  customElements.define("utd-dialog", DialogueModal);

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var file$1 = "src\\librairie\\components\\hautPage.svelte";

  function create_fragment$1(ctx) {
    var div1;
    var button;
    var div0;
    var span;
    var t;
    var link;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        div1 = element("div");
        button = element("button");
        div0 = element("div");
        span = element("span");
        t = space();
        link = element("link");
        this.c = noop;
        attr_dev(span, "aria-hidden", "true");
        attr_dev(span, "class", "utd-icone-svg fleche-haut-blanche");
        add_location(span, file$1, 67, 6, 1971);
        attr_dev(div0, "class", "contenu");
        add_location(div0, file$1, 66, 4, 1942);
        attr_dev(button, "type", "button");
        attr_dev(button, "class", "utd-btn primaire");
        attr_dev(button, "title",
        /*title*/
        ctx[0]);
        add_location(button, file$1, 65, 2, 1845);
        attr_dev(div1, "class", "utd-component utd-hautpage");
        add_location(div1, file$1, 64, 0, 1801);
        attr_dev(link, "rel", "stylesheet");
        attr_dev(link, "href", "/css/utd-webcomponents-v1.3.0.min.css");
        add_location(link, file$1, 72, 0, 2085);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div1, anchor);
        append_dev(div1, button);
        append_dev(button, div0);
        append_dev(div0, span);
        insert_dev(target, t, anchor);
        insert_dev(target, link, anchor);

        if (!mounted) {
          dispose = listen_dev(button, "click", scrollerHautPage, false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*title*/
        1) {
          attr_dev(button, "title",
          /*title*/
          ctx[0]);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(div1);
        if (detaching) detach_dev(t);
        if (detaching) detach_dev(link);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function scrollerHautPage(e) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function instance$1($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('utd-hautpage', slots, []);
    var _$$props$title = $$props.title,
        title = _$$props$title === void 0 ? Utils.obtenirLanguePage() === 'fr' ? "Retour en haut de page." : "Return to the top of the page." : _$$props$title;
    var _$$props$hauteurMinim = $$props.hauteurMinimaleSroll,
        hauteurMinimaleSroll = _$$props$hauteurMinim === void 0 ? 555 : _$$props$hauteurMinim;
    var thisComponent = get_current_component();
    var html;
    var controle;
    var ticking = false;
    onMount(function () {
      html = thisComponent.getRootNode().getElementsByTagName("html")[0];
      controle = thisComponent.shadowRoot.querySelector('.utd-hautpage');
      controle.classList.add("utd-d-none");
    });
    window.addEventListener('scroll', function (e) {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          gererAffichageBouton();
          ticking = false;
        });
      }

      ticking = true;
    });

    function gererAffichageBouton() {
      var dureeAnimationMs = 500;

      if (document.body.scrollTop > hauteurMinimaleSroll || document.documentElement.scrollTop > hauteurMinimaleSroll) {
        if (controle.classList.contains('utd-d-none')) {
          controle.classList.remove('utd-d-none');
          setTimeout(function () {
            html.setAttribute('retourhautpagevisible', 'true');
            controle.classList.add('visible');
          }, 10);
        }
      } else {
        if (controle.classList.contains("visible")) {
          setTimeout(function () {
            controle.classList.add('utd-d-none');
            html.setAttribute('retourhautpagevisible', 'false');
          }, dureeAnimationMs);
        }

        controle.classList.remove('visible');
      }
    }

    var writable_props = ['title', 'hauteurMinimaleSroll'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<utd-hautpage> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('title' in $$props) $$invalidate(0, title = $$props.title);
      if ('hauteurMinimaleSroll' in $$props) $$invalidate(1, hauteurMinimaleSroll = $$props.hauteurMinimaleSroll);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        Utils: Utils,
        get_current_component: get_current_component,
        title: title,
        hauteurMinimaleSroll: hauteurMinimaleSroll,
        thisComponent: thisComponent,
        html: html,
        controle: controle,
        ticking: ticking,
        gererAffichageBouton: gererAffichageBouton,
        scrollerHautPage: scrollerHautPage
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('title' in $$props) $$invalidate(0, title = $$props.title);
      if ('hauteurMinimaleSroll' in $$props) $$invalidate(1, hauteurMinimaleSroll = $$props.hauteurMinimaleSroll);
      if ('html' in $$props) html = $$props.html;
      if ('controle' in $$props) controle = $$props.controle;
      if ('ticking' in $$props) ticking = $$props.ticking;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [title, hauteurMinimaleSroll];
  }

  var HautPage = /*#__PURE__*/function (_SvelteElement) {
    _inherits(HautPage, _SvelteElement);

    var _super = _createSuper$1(HautPage);

    function HautPage(options) {
      var _this;

      _classCallCheck(this, HautPage);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), {
        target: _this.shadowRoot,
        props: attribute_to_object(_this.attributes),
        customElement: true
      }, instance$1, create_fragment$1, safe_not_equal, {
        title: 0,
        hauteurMinimaleSroll: 1
      }, null);

      if (options) {
        if (options.target) {
          insert_dev(options.target, _assertThisInitialized(_this), options.anchor);
        }

        if (options.props) {
          _this.$set(options.props);

          flush();
        }
      }

      return _this;
    }

    _createClass(HautPage, [{
      key: "title",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(title) {
        this.$$set({
          title: title
        });
        flush();
      }
    }, {
      key: "hauteurMinimaleSroll",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(hauteurMinimaleSroll) {
        this.$$set({
          hauteurMinimaleSroll: hauteurMinimaleSroll
        });
        flush();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["title", "hauteurMinimaleSroll"];
      }
    }]);

    return HautPage;
  }(SvelteElement);

  customElements.define("utd-hautpage", HautPage);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var file = "src\\librairie\\components\\infobulle.svelte"; // (101:2) {#if $$slots["texte-lie"]}

  function create_if_block_4(ctx) {
    var span;
    var slot;
    var mounted;
    var dispose;
    var block = {
      c: function create() {
        span = element("span");
        slot = element("slot");
        attr_dev(slot, "name", "texte-lie");
        add_location(slot, file, 101, 54, 3416);
        attr_dev(span, "class", "texte-lie");
        add_location(span, file, 101, 4, 3366);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        append_dev(span, slot);

        if (!mounted) {
          dispose = listen_dev(span, "click",
          /*afficherModale*/
          ctx[10], false, false, false);
          mounted = true;
        }
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(span);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_4.name,
      type: "if",
      source: "(101:2) {#if $$slots[\\\"texte-lie\\\"]}",
      ctx: ctx
    });
    return block;
  } // (116:2) {#if afficher}


  function create_if_block(ctx) {
    var div;
    var t0;
    var span6;
    var span3;
    var h1;
    var span0;
    var t1;
    var span1;
    var t2;
    var button;
    var span2;
    var t3;
    var span5;
    var span4;
    var show_if;
    var t4;
    var p;
    var span6_intro;
    var span6_outro;
    var current;
    var mounted;
    var dispose;
    var if_block0 =
    /*titre*/
    ctx[1] && create_if_block_3(ctx);

    function select_block_type(ctx, dirty) {
      if (show_if == null || dirty &
      /*slots*/
      8) show_if = !!Utils.slotExiste(
      /*slots*/
      ctx[3], 'contenu');
      if (show_if) return create_if_block_1;
      if (
      /*contenu*/
      ctx[2]) return create_if_block_2;
    }

    var current_block_type = select_block_type(ctx, -1);
    var if_block1 = current_block_type && current_block_type(ctx);
    var block = {
      c: function create() {
        div = element("div");
        t0 = space();
        span6 = element("span");
        span3 = element("span");
        h1 = element("h1");
        span0 = element("span");
        t1 = space();
        span1 = element("span");
        if (if_block0) if_block0.c();
        t2 = space();
        button = element("button");
        span2 = element("span");
        t3 = space();
        span5 = element("span");
        span4 = element("span");
        if (if_block1) if_block1.c();
        t4 = space();
        p = element("p");
        attr_dev(div, "class", "utd-backdrop");
        add_location(div, file, 116, 4, 3881);
        attr_dev(span0, "class", "sr-only");
        add_location(span0, file, 132, 10, 4401);
        add_location(span1, file, 133, 10, 4462);
        attr_dev(h1, "id",
        /*idEntete*/
        ctx[6]);
        attr_dev(h1, "tabindex", "-1");
        add_location(h1, file, 131, 8, 4357);
        attr_dev(span2, "aria-hidden", "true");
        attr_dev(span2, "class", "utd-icone-svg x-fermer-bleu");
        add_location(span2, file, 145, 10, 4739);
        attr_dev(button, "type", "button");
        attr_dev(button, "class", "close");
        attr_dev(button, "aria-label",
        /*srTexteBoutonFermer*/
        ctx[9]);
        add_location(button, file, 139, 8, 4579);
        attr_dev(span3, "class", "utd-container entete");
        add_location(span3, file, 130, 6, 4312);
        attr_dev(p, "class", "utd-d-none");
        add_location(p, file, 163, 10, 5295);
        attr_dev(span4, "class", "corps");
        add_location(span4, file, 152, 8, 4935);
        attr_dev(span5, "class", "utd-container conteneur-corps");
        add_location(span5, file, 151, 6, 4881);
        attr_dev(span6, "tabindex", "-1");
        attr_dev(span6, "aria-labelledby",
        /*idEntete*/
        ctx[6]);
        attr_dev(span6, "class", "modale");
        attr_dev(span6, "id",
        /*idModale*/
        ctx[5]);
        attr_dev(span6, "aria-modal", "true");
        attr_dev(span6, "role", "dialog");
        add_location(span6, file, 117, 4, 3940);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        insert_dev(target, t0, anchor);
        insert_dev(target, span6, anchor);
        append_dev(span6, span3);
        append_dev(span3, h1);
        append_dev(h1, span0);
        span0.innerHTML =
        /*srTexteTitre*/
        ctx[7];
        append_dev(h1, t1);
        append_dev(h1, span1);
        if (if_block0) if_block0.m(span1, null);
        append_dev(span3, t2);
        append_dev(span3, button);
        append_dev(button, span2);
        append_dev(span6, t3);
        append_dev(span6, span5);
        append_dev(span5, span4);
        if (if_block1) if_block1.m(span4, null);
        append_dev(span4, t4);
        append_dev(span4, p);
        current = true;

        if (!mounted) {
          dispose = [listen_dev(div, "click",
          /*masquerModale*/
          ctx[11], false, false, false), listen_dev(button, "click",
          /*masquerModale*/
          ctx[11], false, false, false), listen_dev(span6, "keydown",
          /*keydown*/
          ctx[12], false, false, false), listen_dev(span6, "introend",
          /*conserverFocusAideContextuelle*/
          ctx[14], false, false, false), listen_dev(span6, "outroend",
          /*finAnimationFermeture*/
          ctx[13], false, false, false)];
          mounted = true;
        }
      },
      p: function update(ctx, dirty) {
        if (
        /*titre*/
        ctx[1]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_3(ctx);
            if_block0.c();
            if_block0.m(span1, null);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if (if_block1) if_block1.d(1);
          if_block1 = current_block_type && current_block_type(ctx);

          if (if_block1) {
            if_block1.c();
            if_block1.m(span4, t4);
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        add_render_callback(function () {
          if (span6_outro) span6_outro.end(1);
          span6_intro = create_in_transition(span6, fly, {
            y: 200,
            duration: 500
          });
          span6_intro.start();
        });
        current = true;
      },
      o: function outro(local) {
        if (span6_intro) span6_intro.invalidate();
        span6_outro = create_out_transition(span6, fly, {
          y: 200,
          duration: 250
        });
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (detaching) detach_dev(t0);
        if (detaching) detach_dev(span6);
        if (if_block0) if_block0.d();

        if (if_block1) {
          if_block1.d();
        }

        if (detaching && span6_outro) span6_outro.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block.name,
      type: "if",
      source: "(116:2) {#if afficher}",
      ctx: ctx
    });
    return block;
  } // (135:12) {#if titre}


  function create_if_block_3(ctx) {
    var t;
    var block = {
      c: function create() {
        t = text(
        /*titre*/
        ctx[1]);
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*titre*/
        2) set_data_dev(t,
        /*titre*/
        ctx[1]);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_3.name,
      type: "if",
      source: "(135:12) {#if titre}",
      ctx: ctx
    });
    return block;
  } // (160:12) {#if contenu}


  function create_if_block_2(ctx) {
    var html_tag;
    var html_anchor;
    var block = {
      c: function create() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },
      m: function mount(target, anchor) {
        html_tag.m(
        /*contenu*/
        ctx[2], target, anchor);
        insert_dev(target, html_anchor, anchor);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*contenu*/
        4) html_tag.p(
        /*contenu*/
        ctx[2]);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(html_anchor);
        if (detaching) html_tag.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_2.name,
      type: "if",
      source: "(160:12) {#if contenu}",
      ctx: ctx
    });
    return block;
  } // (154:10) {#if Utils.slotExiste(slots, 'contenu')}


  function create_if_block_1(ctx) {
    var slot;
    var t;
    var span;
    var block = {
      c: function create() {
        slot = element("slot");
        t = space();
        span = element("span");
        attr_dev(slot, "name", "contenu");
        attr_dev(slot, "class", "utd-d-none");
        add_location(slot, file, 154, 12, 5021);
        add_location(span, file, 155, 12, 5076);
      },
      m: function mount(target, anchor) {
        insert_dev(target, slot, anchor);
        insert_dev(target, t, anchor);
        insert_dev(target, span, anchor);
        span.innerHTML =
        /*htmlSlotContenu*/
        ctx[4];
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*htmlSlotContenu*/
        16) span.innerHTML =
        /*htmlSlotContenu*/
        ctx[4];
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(slot);
        if (detaching) detach_dev(t);
        if (detaching) detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_if_block_1.name,
      type: "if",
      source: "(154:10) {#if Utils.slotExiste(slots, 'contenu')}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment(ctx) {
    var span4;
    var t0;
    var span3;
    var t1;
    var button;
    var span2;
    var span1;
    var span0;
    var t2;
    var t3;
    var link;
    var current;
    var mounted;
    var dispose;
    var if_block0 =
    /*$$slots*/
    ctx[15]["texte-lie"] && create_if_block_4(ctx);
    var if_block1 =
    /*afficher*/
    ctx[0] && create_if_block(ctx);
    var block = {
      c: function create() {
        span4 = element("span");
        if (if_block0) if_block0.c();
        t0 = space();
        span3 = element("span");
        t1 = space();
        button = element("button");
        span2 = element("span");
        span1 = element("span");
        span0 = element("span");
        t2 = space();
        if (if_block1) if_block1.c();
        t3 = space();
        link = element("link");
        this.c = noop;
        attr_dev(span0, "aria-hidden", "true");
        attr_dev(span0, "class", "utd-icone-svg question");
        add_location(span0, file, 106, 10, 3702);
        attr_dev(span1, "aria-hidden", "true");
        attr_dev(span1, "class", "puce");
        add_location(span1, file, 105, 8, 3652);
        attr_dev(span2, "class", "conteneur-puce");
        add_location(span2, file, 104, 6, 3613);
        attr_dev(button, "type", "button");
        attr_dev(button, "aria-label",
        /*srTexteBoutonOuvrir*/
        ctx[8]);
        attr_dev(button, "class", "tooltip-toggle");
        add_location(button, file, 103, 42, 3501);
        attr_dev(span3, "class", "conteneur-tooltip");
        add_location(span3, file, 103, 2, 3461);
        attr_dev(span4, "class", "utd-component utd-infobulle");
        add_location(span4, file, 99, 0, 3288);
        attr_dev(link, "rel", "stylesheet");
        attr_dev(link, "href", "/css/utd-webcomponents-v1.3.0.min.css");
        add_location(link, file, 170, 0, 5388);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, span4, anchor);
        if (if_block0) if_block0.m(span4, null);
        append_dev(span4, t0);
        append_dev(span4, span3);
        append_dev(span3, t1);
        append_dev(span3, button);
        append_dev(button, span2);
        append_dev(span2, span1);
        append_dev(span1, span0);
        append_dev(span4, t2);
        if (if_block1) if_block1.m(span4, null);
        insert_dev(target, t3, anchor);
        insert_dev(target, link, anchor);
        current = true;

        if (!mounted) {
          dispose = listen_dev(button, "click",
          /*afficherModale*/
          ctx[10], false, false, false);
          mounted = true;
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*$$slots*/
        ctx[15]["texte-lie"]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_4(ctx);
            if_block0.c();
            if_block0.m(span4, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (
        /*afficher*/
        ctx[0]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*afficher*/
            1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(span4, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(span4);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (detaching) detach_dev(t3);
        if (detaching) detach_dev(link);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots$1 = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots('utd-infobulle', slots$1, []);
    var $$slots = compute_slots(slots$1);
    var _$$props$afficher = $$props.afficher,
        afficher = _$$props$afficher === void 0 ? false : _$$props$afficher;
    var _$$props$titre = $$props.titre,
        titre = _$$props$titre === void 0 ? "" : _$$props$titre;
    var _$$props$lang = $$props.lang,
        lang = _$$props$lang === void 0 ? "fr" : _$$props$lang;
    var _$$props$srtitre = $$props.srtitre,
        srtitre = _$$props$srtitre === void 0 ? "" : _$$props$srtitre;
    var _$$props$srboutonouvr = $$props.srboutonouvrir,
        srboutonouvrir = _$$props$srboutonouvr === void 0 ? "" : _$$props$srboutonouvr;
    var _$$props$srboutonferm = $$props.srboutonfermer,
        srboutonfermer = _$$props$srboutonferm === void 0 ? "" : _$$props$srboutonferm;
    var _$$props$contenu = $$props.contenu,
        contenu = _$$props$contenu === void 0 ? "" : _$$props$contenu;
    var idModale = Utils.genererId();
    var idEntete = Utils.genererId();
    var srTexteTitre = srtitre ? srtitre : lang === "fr" ? "Aide à propos de&nbsp;" : "Help about&nbsp;";
    var srTexteBoutonOuvrir = srboutonouvrir ? srboutonouvrir : lang === "fr" ? "Afficher l'aide contextuelle" : "Show help about";
    var srTexteBoutonFermer = srboutonfermer ? srboutonfermer : lang === "fr" ? "Fermer" : "Close";
    var thisComponent = get_current_component();
    var html;
    var body;
    var slots = [];
    var htmlSlotContenu;
    onMount(function () {
      html = thisComponent.getRootNode().getElementsByTagName("html")[0];
      body = thisComponent.getRootNode().getElementsByTagName("body")[0];
      $$invalidate(3, slots = Array.from(thisComponent.querySelectorAll('[slot]')));
      assignerHtmlSlotContenu();

      if (Utils.estMobile()) {
        html.classList.add("est-mobile");
      }
    });
    /**
    * Permet de pallier à un problème de perte de focus à l'intérieur de la modale. En effet, si on clique dans le contenu de la slot "contenu" et qu'on fait TAB, le focus
    * tombe dans la page en dessous car le keydown est sur le body de la page (probablement car nous sommes dans une slot).
    * Nous cachons donc le contenu de la slot, récupérons son html et l'assignons nous-même au contrôle. De cette façon nous allons nous réglons le problème et en bonus
    * nous nous assurons d'une conformité visuelle, puisque c'est le css de notre composant qui va s'appliquer et non celui de l'application.
    * NOTE. Le problème ne semble pas se produire avec le composant utd-dialog. On dirait que le fait que d'autres contrôles focusables sont présents empêche le problème. Je ne comprends pas vraiment.
    */

    function assignerHtmlSlotContenu() {
      if (slots.length) {
        var slotContenu = thisComponent.querySelector("[slot=contenu]");

        if (slotContenu) {
          var contenuHtml = thisComponent.querySelector("[slot=contenu]").innerHTML;

          if (contenuHtml) {
            $$invalidate(4, htmlSlotContenu = contenuHtml);
          }
        }
      }
    }

    function afficherModale(e) {
      Utils.ajusterInterfaceAvantAffichageModale(html, body);
      $$invalidate(0, afficher = true);
    }

    function masquerModale(e) {
      $$invalidate(0, afficher = false);
    }

    function keydown(e) {
      if (e.key === "Escape") {
        masquerModale();
      }
    }

    function finAnimationFermeture(e) {
      Utils.ajusterInterfaceApresFermetureModale(html, body);
    }

    function conserverFocusAideContextuelle(e) {
      thisComponent.shadowRoot.getElementById(idEntete).focus();
      Utils.conserverFocusElement(thisComponent.shadowRoot.getElementById(idModale), thisComponent);
    }

    var writable_props = ['afficher', 'titre', 'lang', 'srtitre', 'srboutonouvrir', 'srboutonfermer', 'contenu'];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<utd-infobulle> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ('afficher' in $$props) $$invalidate(0, afficher = $$props.afficher);
      if ('titre' in $$props) $$invalidate(1, titre = $$props.titre);
      if ('lang' in $$props) $$invalidate(16, lang = $$props.lang);
      if ('srtitre' in $$props) $$invalidate(17, srtitre = $$props.srtitre);
      if ('srboutonouvrir' in $$props) $$invalidate(18, srboutonouvrir = $$props.srboutonouvrir);
      if ('srboutonfermer' in $$props) $$invalidate(19, srboutonfermer = $$props.srboutonfermer);
      if ('contenu' in $$props) $$invalidate(2, contenu = $$props.contenu);
    };

    $$self.$capture_state = function () {
      return {
        onMount: onMount,
        fly: fly,
        get_current_component: get_current_component,
        Utils: Utils,
        afficher: afficher,
        titre: titre,
        lang: lang,
        srtitre: srtitre,
        srboutonouvrir: srboutonouvrir,
        srboutonfermer: srboutonfermer,
        contenu: contenu,
        idModale: idModale,
        idEntete: idEntete,
        srTexteTitre: srTexteTitre,
        srTexteBoutonOuvrir: srTexteBoutonOuvrir,
        srTexteBoutonFermer: srTexteBoutonFermer,
        thisComponent: thisComponent,
        html: html,
        body: body,
        slots: slots,
        htmlSlotContenu: htmlSlotContenu,
        assignerHtmlSlotContenu: assignerHtmlSlotContenu,
        afficherModale: afficherModale,
        masquerModale: masquerModale,
        keydown: keydown,
        finAnimationFermeture: finAnimationFermeture,
        conserverFocusAideContextuelle: conserverFocusAideContextuelle
      };
    };

    $$self.$inject_state = function ($$props) {
      if ('afficher' in $$props) $$invalidate(0, afficher = $$props.afficher);
      if ('titre' in $$props) $$invalidate(1, titre = $$props.titre);
      if ('lang' in $$props) $$invalidate(16, lang = $$props.lang);
      if ('srtitre' in $$props) $$invalidate(17, srtitre = $$props.srtitre);
      if ('srboutonouvrir' in $$props) $$invalidate(18, srboutonouvrir = $$props.srboutonouvrir);
      if ('srboutonfermer' in $$props) $$invalidate(19, srboutonfermer = $$props.srboutonfermer);
      if ('contenu' in $$props) $$invalidate(2, contenu = $$props.contenu);
      if ('html' in $$props) html = $$props.html;
      if ('body' in $$props) body = $$props.body;
      if ('slots' in $$props) $$invalidate(3, slots = $$props.slots);
      if ('htmlSlotContenu' in $$props) $$invalidate(4, htmlSlotContenu = $$props.htmlSlotContenu);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [afficher, titre, contenu, slots, htmlSlotContenu, idModale, idEntete, srTexteTitre, srTexteBoutonOuvrir, srTexteBoutonFermer, afficherModale, masquerModale, keydown, finAnimationFermeture, conserverFocusAideContextuelle, $$slots, lang, srtitre, srboutonouvrir, srboutonfermer];
  }

  var Infobulle = /*#__PURE__*/function (_SvelteElement) {
    _inherits(Infobulle, _SvelteElement);

    var _super = _createSuper(Infobulle);

    function Infobulle(options) {
      var _this;

      _classCallCheck(this, Infobulle);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), {
        target: _this.shadowRoot,
        props: _objectSpread(_objectSpread({}, attribute_to_object(_this.attributes)), {}, {
          $$slots: get_custom_elements_slots(_assertThisInitialized(_this))
        }),
        customElement: true
      }, instance, create_fragment, safe_not_equal, {
        afficher: 0,
        titre: 1,
        lang: 16,
        srtitre: 17,
        srboutonouvrir: 18,
        srboutonfermer: 19,
        contenu: 2
      }, null);

      if (options) {
        if (options.target) {
          insert_dev(options.target, _assertThisInitialized(_this), options.anchor);
        }

        if (options.props) {
          _this.$set(options.props);

          flush();
        }
      }

      return _this;
    }

    _createClass(Infobulle, [{
      key: "afficher",
      get: function get() {
        return this.$$.ctx[0];
      },
      set: function set(afficher) {
        this.$$set({
          afficher: afficher
        });
        flush();
      }
    }, {
      key: "titre",
      get: function get() {
        return this.$$.ctx[1];
      },
      set: function set(titre) {
        this.$$set({
          titre: titre
        });
        flush();
      }
    }, {
      key: "lang",
      get: function get() {
        return this.$$.ctx[16];
      },
      set: function set(lang) {
        this.$$set({
          lang: lang
        });
        flush();
      }
    }, {
      key: "srtitre",
      get: function get() {
        return this.$$.ctx[17];
      },
      set: function set(srtitre) {
        this.$$set({
          srtitre: srtitre
        });
        flush();
      }
    }, {
      key: "srboutonouvrir",
      get: function get() {
        return this.$$.ctx[18];
      },
      set: function set(srboutonouvrir) {
        this.$$set({
          srboutonouvrir: srboutonouvrir
        });
        flush();
      }
    }, {
      key: "srboutonfermer",
      get: function get() {
        return this.$$.ctx[19];
      },
      set: function set(srboutonfermer) {
        this.$$set({
          srboutonfermer: srboutonfermer
        });
        flush();
      }
    }, {
      key: "contenu",
      get: function get() {
        return this.$$.ctx[2];
      },
      set: function set(contenu) {
        this.$$set({
          contenu: contenu
        });
        flush();
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["afficher", "titre", "lang", "srtitre", "srboutonouvrir", "srboutonfermer", "contenu"];
      }
    }]);

    return Infobulle;
  }(SvelteElement);

  customElements.define("utd-infobulle", Infobulle);

})();
