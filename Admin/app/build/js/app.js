webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(28);
	var app_component_1 = __webpack_require__(29);
	var appRouter_module_1 = __webpack_require__(31);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            forms_1.FormsModule,
	            platform_browser_1.BrowserModule,
	            http_1.HttpModule,
	            appRouter_module_1.AppRoutingModule,
	        ],
	        declarations: [
	            app_component_1.AppComponent,
	        ],
	        bootstrap: [app_component_1.AppComponent]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.3.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(25), __webpack_require__(4), __webpack_require__(5), __webpack_require__(26)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     *  Base class for control directives.
	      * *
	      * Only used internally in the forms module.
	      * *
	     * @abstract
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  A directive that contains multiple {@link NgControl}s.
	      * *
	      * Only used by the forms module.
	      * *
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             *  Get the form to which this container belongs.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             *  Get the path to this container.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPresent(obj) {
	        return obj != null;
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isBlank(obj) {
	        return obj == null;
	    }
	    /**
	     * @param {?} a
	     * @param {?} b
	     * @return {?}
	     */
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    /**
	     * @param {?} o
	     * @return {?}
	     */
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     *  Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.merge = function (m1, m2) {
	            var /** @type {?} */ m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.equals = function (m1, m2) {
	            var /** @type {?} */ k1 = Object.keys(m1);
	            var /** @type {?} */ k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
	                var /** @type {?} */ key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        /**
	         * @param {?} arr
	         * @param {?} condition
	         * @return {?}
	         */
	        ListWrapper.findLast = function (arr, condition) {
	            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
	                if (condition(arr[i])) {
	                    return arr[i];
	                }
	            }
	            return null;
	        };
	        /**
	         * @param {?} list
	         * @param {?} items
	         * @return {?}
	         */
	        ListWrapper.removeAll = function (list, items) {
	            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
	                var /** @type {?} */ index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        /**
	         * @param {?} list
	         * @param {?} el
	         * @return {?}
	         */
	        ListWrapper.remove = function (list, el) {
	            var /** @type {?} */ index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        /**
	         * @param {?} a
	         * @param {?} b
	         * @return {?}
	         */
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        /**
	         * @param {?} list
	         * @return {?}
	         */
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return ((flat)).concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var /** @type {?} */ isPromise = _angular_core.__core_private__.isPromise;
	
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var /** @type {?} */ NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var /** @type {?} */ NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     *  Provides a set of validators used by form controls.
	      * *
	      * A validator is a function that processes a {@link FormControl} or collection of
	      * controls and returns a map of errors. A null map means that validation has passed.
	      * *
	      * ### Example
	      * *
	      * ```typescript
	      * var loginControl = new FormControl("", Validators.required)
	      * ```
	      * *
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         *  Validator that requires controls to have a non-empty value.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         *  Validator that requires control value to be true.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.requiredTrue = function (control) {
	            return control.value === true ? null : { 'required': true };
	        };
	        /**
	         *  Validator that requires controls to have a value of a minimum length.
	         * @param {?} minLength
	         * @return {?}
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires controls to have a value of a maximum length.
	         * @param {?} maxLength
	         * @return {?}
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires a control to match a regex to its value.
	         * @param {?} pattern
	         * @return {?}
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var /** @type {?} */ regex;
	            var /** @type {?} */ regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         *  No-op validator.
	         * @param {?} c
	         * @return {?}
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         *  Compose multiple validators into a single function that returns the union
	          * of the individual error maps.
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        /**
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} arrayOfErrors
	     * @return {?}
	     */
	    function _mergeErrors(arrayOfErrors) {
	        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var /** @type {?} */ NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     *  The accessor for writing a value and listening to changes on a checkbox input element.
	      * *
	      * ### Example
	      * ```
	      * <input type="checkbox" name="rememberLogin" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return CheckboxControlValueAccessor;
	    }());
	
	    var /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The default accessor for writing a value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="text" name="searchQuery" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var DefaultValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeAsyncValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	
	    var /** @type {?} */ NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a number value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="number" [(ngModel)]="age">
	      * ```
	     */
	    var NumberValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @return {?}
	     */
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     *  A base class that all control directive extend.
	      * It binds a {@link FormControl} object to a DOM element.
	      * *
	      * Used internally by Angular forms.
	      * *
	     * @abstract
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @abstract
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgControl.prototype.viewToModelUpdate = function (newValue) { };
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var /** @type {?} */ RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        /**
	         * @param {?} control
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        /**
	         * @param {?} controlPair
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = function () { return []; };
	        return RadioControlRegistry;
	    }());
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any radio control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use radio buttons with form directives
	      * *
	      * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	      * in the same group have the same `name` attribute.  Radio buttons with different `name`
	      * attributes do not affect each other.
	      * *
	      * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	      * *
	      * When using radio buttons in a reactive form, radio buttons in the same group should have the
	      * same `formControlName`. You can also add a `name` attribute, but it's optional.
	      * *
	      * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         * @param {?} _registry
	         * @param {?} _injector
	         */
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ]; };
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var /** @type {?} */ RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a range value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="range" [(ngModel)]="age" >
	      * ```
	     */
	    var RangeValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return RangeValueAccessor;
	    }());
	
	    var /** @type {?} */ SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any select control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use select controls with form directives
	      * *
	      * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	      * attribute to the main `<select>` tag.
	      * *
	      * If your option values are simple strings, you can bind to the normal `value` property
	      * on the option.  If your option values happen to be objects (and you'd like to save the
	      * selection in your form as an object), use `ngValue` instead:
	      * *
	      * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	      * *
	      * In reactive forms, you'll also want to add your form directive (`formControlName` or
	      * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	      * choice of binding to the  `value` or `ngValue` property on the select's options.
	      * *
	      * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	      * *
	      * Note: We listen to the 'change' event because 'input' events aren't fired
	      * for selects in Firefox and IE:
	      * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	      * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var SelectControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var /** @type {?} */ valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectControlValueAccessor;
	    }());
	    /**
	     *  *
	      * *
	      * See docs for {@link SelectControlValueAccessor} for usage examples.
	      * *
	     */
	    var NgSelectOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var /** @type {?} */ SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  The accessor for writing a value and listening to changes on a select element.
	      * *
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            var /** @type {?} */ optionSelectedStateSetter;
	            if (Array.isArray(value)) {
	                // convert values to ids
	                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	            }
	            else {
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	            }
	            this._optionMap.forEach(optionSelectedStateSetter);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var /** @type {?} */ selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var /** @type {?} */ options = _.selectedOptions;
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var /** @type {?} */ options = (_.options);
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        if (opt.selected) {
	                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                _this.value = selected;
	                fn(selected);
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var /** @type {?} */ id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     *  Marks `<option>` as dynamic, so Angular can be notified when options change.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <select multiple name="city" ngModel>
	      * <option *ngFor="let c of cities" [value]="c"></option>
	      * </select>
	      * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @param {?} selected
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    /**
	     * @param {?} name
	     * @param {?} parent
	     * @return {?}
	     */
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    /**
	     * @param {?} dir
	     * @param {?} message
	     * @return {?}
	     */
	    function _throwError(dir, message) {
	        var /** @type {?} */ messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    /**
	     * @param {?} changes
	     * @param {?} viewModel
	     * @return {?}
	     */
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var /** @type {?} */ change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var /** @type {?} */ BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    /**
	     * @param {?} valueAccessor
	     * @return {?}
	     */
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    /**
	     * @param {?} dir
	     * @param {?} valueAccessors
	     * @return {?}
	     */
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var /** @type {?} */ defaultAccessor;
	        var /** @type {?} */ builtinAccessor;
	        var /** @type {?} */ customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	      * *
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             *  Get the {@link FormGroup} backing this binding.
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             *  Get the path to this control group.
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             *  Get the {@link Form} to which this group belongs.
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        /**
	         * @param {?} cd
	         */
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var /** @type {?} */ ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     *  Directive automatically applied to Angular form controls that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = function () { return [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     *  Directive automatically applied to Angular form groups that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  Use by directives and components to emit custom Events.
	      * *
	      * ### Examples
	      * *
	      * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	      * title gets clicked:
	      * *
	      * ```
	      * selector: 'zippy',
	      * template: `
	      * <div class="zippy">
	      * <div (click)="toggle()">Toggle</div>
	      * <div [hidden]="!visible">
	      * <ng-content></ng-content>
	      * </div>
	      * </div>`})
	      * export class Zippy {
	      * visible: boolean = true;
	      * @Output() open: EventEmitter<any> = new EventEmitter();
	      * @Output() close: EventEmitter<any> = new EventEmitter();
	      * *
	      * toggle() {
	      * this.visible = !this.visible;
	      * if (this.visible) {
	      * this.open.emit(null);
	      * } else {
	      * this.close.emit(null);
	      * }
	      * }
	      * }
	      * ```
	      * *
	      * The events payload can be accessed by the parameter `$event` on the components output event
	      * handler:
	      * *
	      * ```
	      * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	      * ```
	      * *
	      * Uses Rx.Observable but provides an adapter to make it work as specified here:
	      * https://github.com/jhusain/observable-spec
	      * *
	      * Once a reference implementation of the spec is available, switch to it.
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         *  Creates an instance of [EventEmitter], which depending on [isAsync],
	          * delivers events synchronously or asynchronously.
	         * @param {?=} isAsync
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        /**
	         * @param {?=} generatorOrNext
	         * @param {?=} error
	         * @param {?=} complete
	         * @return {?}
	         */
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var /** @type {?} */ schedulerFn;
	            var /** @type {?} */ errorFn = function (err) { return null; };
	            var /** @type {?} */ completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var /** @type {?} */ VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var /** @type {?} */ INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var /** @type {?} */ PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var /** @type {?} */ DISABLED = 'DISABLED';
	    /**
	     * @param {?} control
	     * @param {?} path
	     * @param {?} delimiter
	     * @return {?}
	     */
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = ((path)).split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return ((path)).reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(/** @type {?} */ (name)) || null;
	            }
	            return null;
	        }, control);
	    }
	    /**
	     * @param {?} r
	     * @return {?}
	     */
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    /**
	     * @param {?} asyncValidator
	     * @return {?}
	     */
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     *  {@link FormArray}.
	      * *
	      * It provides some of the shared behavior that all controls and groups of controls have, like
	      * running validators, calculating status, and resetting state. It also defines the properties
	      * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	      * instantiated directly.
	      * *
	     * @abstract
	     */
	    var AbstractControl = (function () {
	        /**
	         * @param {?} validator
	         * @param {?} asyncValidator
	         */
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             *  The value of the control.
	             * @return {?}
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             *  The parent control.
	             * @return {?}
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             *  The validation status of the control. There are four possible
	              * validation statuses:
	              * *
	              * * **VALID**:  control has passed all validation checks
	              * * **INVALID**: control has failed at least one validation check
	              * * **PENDING**: control is in the midst of conducting a validation check
	              * * **DISABLED**: control is exempt from validation checks
	              * *
	              * These statuses are mutually exclusive, so a control cannot be
	              * both valid AND invalid or invalid AND disabled.
	             * @return {?}
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             *  A control is `valid` when its `status === VALID`.
	              * *
	              * In order to have this status, the control must have passed all its
	              * validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             *  A control is `invalid` when its `status === INVALID`.
	              * *
	              * In order to have this status, the control must have failed
	              * at least one of its validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             *  A control is `pending` when its `status === PENDING`.
	              * *
	              * In order to have this status, the control must be in the
	              * middle of conducting a validation check.
	             * @return {?}
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             *  A control is `disabled` when its `status === DISABLED`.
	              * *
	              * Disabled controls are exempt from validation checks and
	              * are not included in the aggregate value of their ancestor
	              * controls.
	             * @return {?}
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             *  A control is `enabled` as long as its `status !== DISABLED`.
	              * *
	              * In other words, it has a status of `VALID`, `INVALID`, or
	              * `PENDING`.
	             * @return {?}
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             *  Returns any errors generated by failing validation. If there
	              * are no errors, it will return null.
	             * @return {?}
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             *  A control is `pristine` if the user has not yet changed
	              * the value in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             *  A control is `dirty` if the user has changed the value
	              * in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	             *  A control is marked `touched` once the user has triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             *  A control is `untouched` if the user has not yet triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             *  Emits an event every time the value of the control changes, in
	              * the UI or programmatically.
	             * @return {?}
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             *  Emits an event every time the validation status of the control
	              * is re-calculated.
	             * @return {?}
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the synchronous validators that are active on this control.  Calling
	          * this will overwrite any existing sync validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         *  Sets the async validators that are active on this control. Calling this
	          * will overwrite any existing async validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         *  Empties out the sync validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         *  Empties out the async validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         *  Marks the control as `touched`.
	          * *
	          * This will also mark all direct ancestors as `touched` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `untouched`.
	          * *
	          * If the control has any children, it will also mark all children as `untouched`
	          * to maintain the model, and re-calculate the `touched` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `dirty`.
	          * *
	          * This will also mark all direct ancestors as `dirty` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pristine`.
	          * *
	          * If the control has any children, it will also mark all children as `pristine`
	          * to maintain the model, and re-calculate the `pristine` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pending`.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Disables the control. This means the control will be exempt from validation checks and
	          * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	          * *
	          * If the control has children, all children will be disabled to maintain the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         *  Enables the control. This means the control will be included in validation checks and
	          * the aggregate value of its parent. Its status is re-calculated based on its value and
	          * its validators.
	          * *
	          * If the control has children, all children will be enabled.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        /**
	         * @param {?} onlySelf
	         * @return {?}
	         */
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        /**
	         * @param {?} parent
	         * @return {?}
	         */
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         *  Sets the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.setValue = function (value, options) { };
	        /**
	         *  Patches the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.patchValue = function (value, options) { };
	        /**
	         *  Resets the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?=} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.reset = function (value, options) { };
	        /**
	         *  Re-calculates the value and validation status of the control.
	          * *
	          * By default, it will also update the value and validity of its ancestors.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         *  Sets errors on a form control.
	          * *
	          * This is used when validations are run manually by the user, rather than automatically.
	          * *
	          * Calling `setErrors` will also update the validity of the parent control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const login = new FormControl("someLogin");
	          * login.setErrors({
	          * "notUnique": true
	          * });
	          * *
	          * expect(login.valid).toEqual(false);
	          * expect(login.errors).toEqual({"notUnique": true});
	          * *
	          * login.setValue("someOtherLogin");
	          * *
	          * expect(login.valid).toEqual(true);
	          * ```
	         * @param {?} errors
	         * @param {?=} __1
	         * @return {?}
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         *  Retrieves a child control given the control's name or path.
	          * *
	          * Paths can be passed in as an array or a string delimited by a dot.
	          * *
	          * To get a control nested within a `person` sub-group:
	          * *
	          * * `this.form.get('person.name');`
	          * *
	          * -OR-
	          * *
	          * * `this.form.get(['person', 'name']);`
	         * @param {?} path
	         * @return {?}
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns null or undefined.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var /** @type {?} */ control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns false.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             *  Retrieves the top-level ancestor of this control.
	             * @return {?}
	             */
	            get: function () {
	                var /** @type {?} */ x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._updateValue = function () { };
	        /**
	         * @abstract
	         * @param {?} cb
	         * @return {?}
	         */
	        AbstractControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @abstract
	         * @param {?} condition
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControls = function (condition) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._allControlsDisabled = function () { };
	        /**
	         * @param {?} status
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     *  *
	      * It is one of the three fundamental building blocks of Angular forms, along with
	      * {@link FormGroup} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormControl}, you can pass in an initial value as the
	      * first argument. Example:
	      * *
	      * ```ts
	      * const ctrl = new FormControl('some value');
	      * console.log(ctrl.value);     // 'some value'
	      * *```
	      * *
	      * You can also initialize the control with a form state object on instantiation,
	      * which includes both the value and whether or not the control is disabled.
	      * You can't use the value key without the disabled key; both are required
	      * to use this way of initialization.
	      * *
	      * ```ts
	      * const ctrl = new FormControl({value: 'n/a', disabled: true});
	      * console.log(ctrl.value);     // 'n/a'
	      * console.log(ctrl.status);   // 'DISABLED'
	      * ```
	      * *
	      * To include a sync validator (or an array of sync validators) with the control,
	      * pass it in as the second argument. Async validators are also supported, but
	      * have to be passed in separately as the third arg.
	      * *
	      * ```ts
	      * const ctrl = new FormControl('', Validators.required);
	      * console.log(ctrl.value);     // ''
	      * console.log(ctrl.status);   // 'INVALID'
	      * ```
	      * *
	      * See its superclass, {@link AbstractControl}, for more properties and methods.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        /**
	         * @param {?=} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         *  Set the value of the form control to `value`.
	          * *
	          * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	          * and not its parent component. This defaults to false.
	          * *
	          * If `emitEvent` is `true`, this
	          * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	          * to true (as it falls through to `updateValueAndValidity`).
	          * *
	          * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	          * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	          * specified.
	          * *
	          * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	          * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of a control.
	          * *
	          * This function is functionally the same as {@link FormControl.setValue} at this level.
	          * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	          * where it does behave differently.
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         *  Resets the form control. This means by default:
	          * *
	          * * it is marked as `pristine`
	          * * it is marked as `untouched`
	          * * value is set to null
	          * *
	          * You can also reset to a specific form state by passing through a standalone
	          * value or a form state object that contains both a value and a disabled state
	          * (these are the only two properties that cannot be calculated).
	          * *
	          * Ex:
	          * *
	          * ```ts
	          * this.control.reset('Nancy');
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * ```
	          * *
	          * OR
	          * *
	          * ```
	          * this.control.reset({value: 'Nancy', disabled: true});
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * console.log(this.control.status);  // 'DISABLED'
	          * ```
	         * @param {?=} formState
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         *  Register a listener for change events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         *  Register a listener for disabled events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	      * with each control name as the key.  It calculates its status by reducing the statuses
	      * of its children. For example, if one of the controls in a group is invalid, the entire
	      * group becomes invalid.
	      * *
	      * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	      * argument. The key for each child will be the name under which it is registered.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * first: new FormControl('Nancy', Validators.minLength(2)),
	      * last: new FormControl('Drew'),
	      * });
	      * *
	      * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	      * console.log(form.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include group-level validators as the second arg, or group-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * password: new FormControl('', Validators.minLength(2)),
	      * passwordConfirm: new FormControl('', Validators.minLength(2)),
	      * }, passwordMatchValidator);
	      * *
	      * *
	      * function passwordMatchValidator(g: FormGroup) {
	      * return g.get('password').value === g.get('passwordConfirm').value
	      * ? null : {'mismatch': true};
	      * }
	      * ```
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Registers a control with the group's list of controls.
	          * *
	          * This method does not update value or validity of the control, so for
	          * most cases you'll want to use {@link FormGroup.addControl} instead.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         *  Add a control to this group.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove a control from this group.
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Check whether there is an enabled control with the given name in the group.
	          * *
	          * It will return false for disabled controls. If you'd like to check for
	          * existence in the group only, use {@link AbstractControl.get} instead.
	         * @param {?} controlName
	         * @return {?}
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	          * the structure of the group, with control names as keys.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.setValue({first: 'Nancy', last: 'Drew'});
	          * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	          * names as keys, and will do its best to match the values to the correct controls
	          * in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the group without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.patchValue({first: 'Nancy'});
	          * console.log(form.value);   // {first: 'Nancy', last: null}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormGroup}. This means by default:
	          * *
	          * * The group and all descendants are marked `pristine`
	          * * The group and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in a map of states
	          * that matches the structure of your form, with control names as keys. The state
	          * can be a standalone value or a form state object with both a value and a disabled
	          * status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.form.reset({first: 'name', last: 'last name'});
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.form.reset({
	          * first: {value: 'name', disabled: true},
	          * last: 'last'
	          * });
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * console.log(this.form.get('first').status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the {@link FormGroup}, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the group.
	         * @return {?}
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /**
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var /** @type {?} */ res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /**
	         * @param {?} initValue
	         * @param {?} fn
	         * @return {?}
	         */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var /** @type {?} */ res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	      * It calculates its status by reducing the statuses of its children. For example, if one of
	      * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	      * *
	      * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormGroup}.
	      * *
	      * *
	      * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	      * argument.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const arr = new FormArray([
	      * new FormControl('Nancy', Validators.minLength(2)),
	      * new FormControl('Drew'),
	      * ]);
	      * *
	      * console.log(arr.value);   // ['Nancy', 'Drew']
	      * console.log(arr.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include array-level validators as the second arg, or array-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Adding or removing controls
	      * *
	      * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	      * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	      * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	      * the `FormArray` directly, as that will result in strange and unexpected behavior such
	      * as broken change detection.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Get the {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         *  Insert a new {@link AbstractControl} at the end of the array.
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Insert a new {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove the control at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             *  Length of the control array.
	             * @return {?}
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	          * the structure of the control.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.setValue(['Nancy', 'Drew']);
	          * console.log(arr.value);   // ['Nancy', 'Drew']
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	          * structure of the control, and will do its best to match the values to the correct
	          * controls in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the array without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.patchValue(['Nancy']);
	          * console.log(arr.value);   // ['Nancy', null]
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormArray}. This means by default:
	          * *
	          * * The array and all descendants are marked `pristine`
	          * * The array and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in an array of states
	          * that matches the structure of the control. The state can be a standalone value
	          * or a form state object with both a value and a disabled status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.arr.reset(['name', 'last name']);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.arr.reset([
	          * {value: 'name', disabled: true},
	          * 'last'
	          * ]);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * console.log(this.arr.get(0).status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the array, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the array.
	         * @return {?}
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /**
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var /** @type {?} */ resolvedPromise = Promise.resolve(null);
	    /**
	     *  to track aggregate form value and validation status.
	      * *
	      * *
	      * As soon as you import the `FormsModule`, this directive becomes active by default on
	      * all `<form>` tags.  You don't need to add a special selector.
	      * *
	      * You can export the directive into a local template variable using `ngForm` as the key
	      * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	      * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	      * will give you access to the aggregate value and validity status of the form, as well as
	      * user interaction properties like `dirty` and `touched`.
	      * *
	      * To register child controls with the form, you'll want to use {@link NgModel} with a
	      * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	      * sub-groups within the form.
	      * *
	      * You can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                dir._control = (container.registerControl(dir.name, dir.control));
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                var /** @type {?} */ group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
	                ctrl.setValue(value);
	            });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @param {?} path
	         * @return {?}
	         */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? (this.form.get(path)) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var /** @type {?} */ Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used as a child of {@link NgForm} (or in other words,
	      * within `<form>` tags).
	      * *
	      * Use this directive if you'd like to create a sub-group within a form. This can
	      * come in handy if you want to validate a sub-group of your form separately from
	      * the rest of your form, or if some values in your domain model make more sense to
	      * consume together in a nested object.
	      * *
	      * Pass in the name you'd like this sub-group to have and it will become the key
	      * for the sub-group in the form's full value. You can also export the directive into
	      * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	      * *
	      * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var /** @type {?} */ resolvedPromise$1 = Promise.resolve(null);
	    /**
	     *  to a form control element.
	      * *
	      * The {@link FormControl} instance will track the value, user interaction, and
	      * validation status of the control and keep the view synced with the model. If used
	      * within a parent form, the directive will also register itself with the form as a child
	      * control.
	      * *
	      * *
	      * This directive can be used by itself or as part of a larger form. All you need is the
	      * `ngModel` selector to activate it.
	      * *
	      * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	      * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	      * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	      * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	      * the domain model in your class as well.
	      * *
	      * If you wish to inspect the properties of the associated {@link FormControl} (like
	      * validity state), you can also export the directive into a local template variable using
	      * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	      * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	      * will fall through to the control anyway, so you can access them directly. You can see a
	      * full list of properties directly available in {@link AbstractControlDirective}.
	      * *
	      * The following is an example of a simple standalone control using `ngModel`:
	      * *
	      * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	      * *
	      * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	      * so that the control can be registered with the parent form under that name.
	      * *
	      * It's worth noting that in the context of a parent form, you often can skip one-way or
	      * two-way binding because the parent form will sync the value for you. You can access
	      * its properties by exporting it into a local template variable using `ngForm` (ex:
	      * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	      * *
	      * If you do need to populate initial values into your form, using a one-way binding for
	      * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	      * than the domain model's value on submit.
	      * *
	      * Take a look at an example of using `ngModel` within a form:
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * To see `ngModel` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     *  *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	      * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	      * {@link FormControlDirective}.
	      * *
	      * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	      * it does not require that your {@link FormControl} instance be part of any parent
	      * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	      * exists above it.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormControl} instance. See a full list of available properties in
	      * {@link AbstractControl}.
	      * *
	      * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	      * or you can set it programmatically later using {@link AbstractControl.setValue} or
	      * {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	      * @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     *  *
	      * *
	      * This directive accepts an existing {@link FormGroup} instance. It will then use this
	      * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	      * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	      * and {@link FormArrayName} directives.
	      * *
	      * **Set value**: You can set the form's initial value when instantiating the
	      * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	      * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	      * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	      * re-calculated.
	      * *
	      * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        /**
	         * @param {?} _validators
	         * @param {?} _asyncValidators
	         */
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var /** @type {?} */ ctrl = (this.form.get(dir.path));
	            ctrl.setValue(value);
	        };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateValidators = function () {
	            var /** @type {?} */ sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormGroup} you want to link, and
	      * will look for a {@link FormGroup} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form groups can come in handy when you want to validate a sub-group of a
	      * form separately from the rest or when you'd like to group the values of certain
	      * controls into their own nested object.
	      * *
	      * **Access the group**: You can access the associated {@link FormGroup} using the
	      * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	      * *
	      * You can also access individual controls within the group using dot syntax.
	      * Ex: `this.form.get('name.first')`
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormGroup}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the group, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var /** @type {?} */ formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormArray} you want to link, and
	      * will look for a {@link FormArray} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form arrays can come in handy when you have a group of form controls but
	      * you're not sure how many there will be. Form arrays allow you to create new
	      * form controls dynamically.
	      * *
	      * **Access the array**: You can access the associated {@link FormArray} using the
	      * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	      * Ex: `this.form.get('cities')`.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormArray}, or you can set the value programmatically later using the
	      * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	      * methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the array, you can
	      * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	      * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	      * status is re-calculated.
	      * *
	      * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	      * calling its {@link FormArray.push} method.
	      * Ex: `this.form.get('cities').push(new FormControl());`
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? (this._parent.formDirective) : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     *  element by name.
	      * *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the {@link FormControl} instance you want to
	      * link, and will look for a {@link FormControl} registered with that name in the
	      * closest {@link FormGroup} or {@link FormArray} above it.
	      * *
	      * **Access the control**: You can access the {@link FormControl} associated with
	      * this directive by using the {@link AbstractControl.get} method.
	      * Ex: `this.form.get('first');`
	      * *
	      * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	      * See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set value**: You can set an initial value for the control when instantiating the
	      * {@link FormControl}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * To see `formControlName` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    var /** @type {?} */ CHECKBOX_REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `required` validator to any controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input name="fullName" ngModel required>
	      * ```
	      * *
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._required; },
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = function () { return []; };
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     *  A Directive that adds the `required` validator to checkbox controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input type="checkbox" name="active" ngModel required>
	      * ```
	      * *
	     */
	    var CheckboxRequiredValidator = (function (_super) {
	        __extends$13(CheckboxRequiredValidator, _super);
	        function CheckboxRequiredValidator() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        CheckboxRequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.requiredTrue(c) : null;
	        };
	        CheckboxRequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxRequiredValidator.ctorParameters = function () { return []; };
	        return CheckboxRequiredValidator;
	    }(RequiredValidator));
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var /** @type {?} */ MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	      * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	      * *
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = function () { return []; };
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var /** @type {?} */ MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	      * `formControl`,
	      * or control with `ngModel` that also has a `maxlength` attribute.
	      * *
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = function () { return []; };
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var /** @type {?} */ PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `pattern` validator to any controls marked with the
	      * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	      * as the regex to validate Control value against.  Follows pattern attribute
	      * semantics; i.e. regex must match entire Control value.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	      * ```
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = function () { return []; };
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     *  *
	      * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	      * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	      * forms.
	      * *
	      * *
	      * To use, inject `FormBuilder` into your component class. You can then call its methods
	      * directly.
	      * *
	      * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: {@link ReactiveFormsModule}
	      * *
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         *  Construct a new {@link FormGroup} with the given map of configuration.
	          * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	          * *
	          * See the {@link FormGroup} constructor for more details.
	         * @param {?} controlsConfig
	         * @param {?=} extra
	         * @return {?}
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	            var /** @type {?} */ validator = isPresent(extra) ? extra['validator'] : null;
	            var /** @type {?} */ asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         *  Construct a new {@link FormControl} with the given `formState`,`validator`, and
	          * `asyncValidator`.
	          * *
	          * `formState` can either be a standalone value for the form control or an object
	          * that contains both a value and a disabled status.
	          * *
	         * @param {?} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         *  Construct a {@link FormArray} from the given `controlsConfig` array of
	          * configuration, with the given optional `validator` and `asyncValidator`.
	         * @param {?} controlsConfig
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /**
	         * @param {?} controlsConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var /** @type {?} */ controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /**
	         * @param {?} controlConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var /** @type {?} */ value = controlConfig[0];
	                var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = function () { return []; };
	        return FormBuilder;
	    }());
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new _angular_core.Version('2.3.1');
	
	    var /** @type {?} */ SHARED_FORM_DIRECTIVES = [
	        NgSelectOption,
	        NgSelectMultipleOption,
	        DefaultValueAccessor,
	        NumberValueAccessor,
	        RangeValueAccessor,
	        CheckboxControlValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	        NgControlStatus,
	        NgControlStatusGroup,
	        RequiredValidator,
	        MinLengthValidator,
	        MaxLengthValidator,
	        PatternValidator,
	        CheckboxRequiredValidator,
	    ];
	    var /** @type {?} */ TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var /** @type {?} */ REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     *  Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = function () { return []; };
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     *  The ng module for forms.
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = function () { return []; };
	        return FormsModule;
	    }());
	    /**
	     *  The ng module for reactive forms.
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = function () { return []; };
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.VERSION = VERSION;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	/**
	 * [Component description]
	 * @param  {'my-app'} {selector [description]
	 * @param  {`                                          <nav>                    <a routerLink="index" routerLinkActive="active">index</a>                    <a routerLink="login" routerLinkActive="active">login</a>                    <a routerLink="/" routerLinkActive="active">info</a>                </nav>                <router-outlet></router-outlet>        `} template [description]
	 * @param  {[type]}   }         [description]
	 * @return {[type]}             [description]
	 */
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'my-app',
	        template: "<router-outlet></router-outlet>",
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(32);
	var login_component_1 = __webpack_require__(62);
	var appRoutes = [
	    { path: '', component: login_component_1.LoginComponent2 },
	    { path: 'login2', component: login_component_1.LoginComponent2 },
	];
	var AppRoutingModule = (function () {
	    function AppRoutingModule() {
	    }
	    return AppRoutingModule;
	}());
	AppRoutingModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            router_1.RouterModule.forRoot(appRoutes, { useHash: true })
	        ],
	        declarations: [
	            login_component_1.LoginComponent2,
	        ],
	        exports: [
	            router_1.RouterModule
	        ],
	    }),
	    __metadata("design:paramtypes", [])
	], AppRoutingModule);
	exports.AppRoutingModule = AppRoutingModule;


/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(32);
	var LoginComponent2 = (function () {
	    function LoginComponent2(router) {
	        this.router = router;
	        this.username = "";
	        this.password = "";
	    }
	    LoginComponent2.prototype.loginHandle = function () {
	        if (this.username == 'admin' && this.password == "123456") {
	            alert(true);
	            this.router.navigate(['/']);
	        }
	        else {
	            alert(false);
	        }
	    };
	    return LoginComponent2;
	}());
	LoginComponent2 = __decorate([
	    core_1.Component({
	        template: __webpack_require__(63)
	    }),
	    __metadata("design:paramtypes", [router_1.Router])
	], LoginComponent2);
	exports.LoginComponent2 = LoginComponent2;


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"ui grid\">\r\n    <div class=\"six wide centered column\">\r\n        <form class=\"ui fluid form segment\">\r\n            <div class=\"field\">\r\n                <img class=\"ui small centered circular image\" src=\"" + __webpack_require__(64) + "\">\r\n            </div>\r\n            <div class=\"field\">\r\n                <label>账号</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type=\"text\" placeholder=\"账号\"  />\r\n                  <i class=\"user icon\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"field\">\r\n                <label>密码</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type=\"password\" placeholder=\"密码\" />\r\n                  <i class=\"lock icon\"></i>\r\n                </div>\r\n            </div>\r\n            <a class=\"ui fluid linkedin button\">Submit</a>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n";

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/angular.png";

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NyYy9hcHBSb3V0ZXIvYXBwUm91dGVyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc3JjL2NvbXBvbmVudC9sb2dpbjIvbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9zcmMvY29tcG9uZW50L2xvZ2luMi9sb2dpbi5odG1sIiwid2VicGFjazovLy8uL2FwcC9zcmMvYXNzZXRzL2ltZy9hbmd1bGFyLnBuZyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5REFBMkU7QUFDM0UsNENBQXNDO0FBSXRDLGtEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBELHFDQUF5QztBQUN6QyxrREFBMkQ7QUFDM0QsdUNBQTZDO0FBQzdDLHNDQUE4QztBQUU5QywrQ0FBOEM7QUFDOUMsa0RBQThEO0FBZTlELEtBQWEsU0FBUztLQUNsQjtLQUNBLENBQUM7S0FDTCxnQkFBQztBQUFELEVBQUM7QUFIWSxVQUFTO0tBYnJCLGVBQVEsQ0FBQztTQUNOLE9BQU8sRUFBRTthQUNMLG1CQUFXO2FBQ1gsZ0NBQWE7YUFDYixpQkFBVTthQUNWLG1DQUFnQjtVQUVuQjtTQUNELFlBQVksRUFBRTthQUNWLDRCQUFZO1VBQ2Y7U0FDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO01BQzVCLENBQUM7O0lBQ1csU0FBUyxDQUdyQjtBQUhZLCtCQUFTOzs7Ozs7OztBQ3JCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5Qyx5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SFksNkNBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjdCLHFDQUF3QztBQUN4Qyx3Q0FBdUM7QUFLdkMsS0FBYSxlQUFlO0tBS3hCLHlCQUFvQixNQUFjO1NBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtTQUhsQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1NBQ3JCLGFBQVEsR0FBVSxFQUFFLENBQUM7S0FHckIsQ0FBQztLQUVELHFDQUFXLEdBQVg7U0FDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDeEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hDLENBQUM7U0FBQyxJQUFJLENBQUMsQ0FBQzthQUNKLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUVqQixDQUFDO0tBQ0wsQ0FBQztLQUNMLHNCQUFDO0FBQUQsRUFBQztBQWpCWSxnQkFBZTtLQUgzQixnQkFBUyxDQUFDO1NBQ1QsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBYyxDQUFDO01BQ2xDLENBQUM7c0NBTThCLGVBQU07SUFMekIsZUFBZSxDQWlCM0I7QUFqQlksMkNBQWU7Ozs7Ozs7O0FDTjVCLCsrQjs7Ozs7OztBQ0FBLHFFIiwiZmlsZSI6ImJ1aWxkL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHtBcHBNb2R1bGV9IGZyb20gJy4vYXBwLm1vZHVsZSdcblxuXG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYXBwL3NyYy9hcHAudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gJy4vYXBwUm91dGVyL2FwcFJvdXRlci5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FwcC9zcmMvYXBwLm1vZHVsZS50cyIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2Mi4zLjFcbiAqIChjKSAyMDEwLTIwMTYgR29vZ2xlLCBJbmMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpLCByZXF1aXJlKCdyeGpzL29wZXJhdG9yL3RvUHJvbWlzZScpLCByZXF1aXJlKCdyeGpzL1N1YmplY3QnKSwgcmVxdWlyZSgncnhqcy9PYnNlcnZhYmxlJyksIHJlcXVpcmUoJ3J4anMvb2JzZXJ2YWJsZS9mcm9tUHJvbWlzZScpKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdAYW5ndWxhci9jb3JlJywgJ3J4anMvb3BlcmF0b3IvdG9Qcm9taXNlJywgJ3J4anMvU3ViamVjdCcsICdyeGpzL09ic2VydmFibGUnLCAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJ10sIGZhY3RvcnkpIDpcbiAgICAoZmFjdG9yeSgoZ2xvYmFsLm5nID0gZ2xvYmFsLm5nIHx8IHt9LCBnbG9iYWwubmcuZm9ybXMgPSBnbG9iYWwubmcuZm9ybXMgfHwge30pLGdsb2JhbC5uZy5jb3JlLGdsb2JhbC5SeC5PYnNlcnZhYmxlLnByb3RvdHlwZSxnbG9iYWwuUngsZ2xvYmFsLlJ4LGdsb2JhbC5SeC5PYnNlcnZhYmxlKSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLF9hbmd1bGFyX2NvcmUscnhqc19vcGVyYXRvcl90b1Byb21pc2Uscnhqc19TdWJqZWN0LHJ4anNfT2JzZXJ2YWJsZSxyeGpzX29ic2VydmFibGVfZnJvbVByb21pc2UpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqICBCYXNlIGNsYXNzIGZvciBjb250cm9sIGRpcmVjdGl2ZXMuXG4gICAgICAqICpcbiAgICAgICogT25seSB1c2VkIGludGVybmFsbHkgaW4gdGhlIGZvcm1zIG1vZHVsZS5cbiAgICAgICogKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHZhciBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsdWUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWxpZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJpbnZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuaW52YWxpZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwZW5kaW5nXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wucGVuZGluZyA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJlcnJvcnNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5lcnJvcnMgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwicHJpc3RpbmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5wcmlzdGluZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJkaXJ0eVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmRpcnR5IDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInRvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC50b3VjaGVkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInVudG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnVudG91Y2hlZCA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmRpc2FibGVkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcImVuYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5lbmFibGVkIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInN0YXR1c0NoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzIDogbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLCBcInZhbHVlQ2hhbmdlc1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcyA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wucmVzZXQodmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gcGF0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5oYXNFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIHBhdGgpIHtcbiAgICAgICAgICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuaGFzRXJyb3IoZXJyb3JDb2RlLCBwYXRoKSA6IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gcGF0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRFcnJvciA9IGZ1bmN0aW9uIChlcnJvckNvZGUsIHBhdGgpIHtcbiAgICAgICAgICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IG51bGw7IH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZ2V0RXJyb3IoZXJyb3JDb2RlLCBwYXRoKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmU7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDEgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgQSBkaXJlY3RpdmUgdGhhdCBjb250YWlucyBtdWx0aXBsZSB7QGxpbmsgTmdDb250cm9sfXMuXG4gICAgICAqICpcbiAgICAgICogT25seSB1c2VkIGJ5IHRoZSBmb3JtcyBtb2R1bGUuXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgQ29udHJvbENvbnRhaW5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxKENvbnRyb2xDb250YWluZXIsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIENvbnRyb2xDb250YWluZXIoKSB7XG4gICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udHJvbENvbnRhaW5lci5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBHZXQgdGhlIGZvcm0gdG8gd2hpY2ggdGhpcyBjb250YWluZXIgYmVsb25ncy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEdldCB0aGUgcGF0aCB0byB0aGlzIGNvbnRhaW5lci5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBDb250cm9sQ29udGFpbmVyO1xuICAgIH0oQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKSk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9ialxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNQcmVzZW50KG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICE9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gb2JqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0JsYW5rKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqID09IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gYVxuICAgICAqIEBwYXJhbSB7P30gYlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9vc2VJZGVudGljYWwoYSwgYikge1xuICAgICAgICByZXR1cm4gYSA9PT0gYiB8fCB0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInICYmIGlzTmFOKGEpICYmIGlzTmFOKGIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG9cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzSnNPYmplY3Qobykge1xuICAgICAgICByZXR1cm4gbyAhPT0gbnVsbCAmJiAodHlwZW9mIG8gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG8gPT09ICdvYmplY3QnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBvYmpcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJpbWl0aXZlKG9iaikge1xuICAgICAgICByZXR1cm4gIWlzSnNPYmplY3Qob2JqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgV3JhcHMgSmF2YXNjcmlwdCBPYmplY3RzXG4gICAgICovXG4gICAgdmFyIFN0cmluZ01hcFdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBTdHJpbmdNYXBXcmFwcGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG0xXG4gICAgICAgICAqIEBwYXJhbSB7P30gbTJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ01hcFdyYXBwZXIubWVyZ2UgPSBmdW5jdGlvbiAobTEsIG0yKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBtID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobTEpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIG1ba10gPSBtMVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBPYmplY3Qua2V5cyhtMik7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBfY1tfYl07XG4gICAgICAgICAgICAgICAgbVtrXSA9IG0yW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG0xXG4gICAgICAgICAqIEBwYXJhbSB7P30gbTJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ01hcFdyYXBwZXIuZXF1YWxzID0gZnVuY3Rpb24gKG0xLCBtMikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gazEgPSBPYmplY3Qua2V5cyhtMSk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBrMiA9IE9iamVjdC5rZXlzKG0yKTtcbiAgICAgICAgICAgIGlmIChrMS5sZW5ndGggIT0gazIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IGsxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8ga2V5ID0gazFbaV07XG4gICAgICAgICAgICAgICAgaWYgKG0xW2tleV0gIT09IG0yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU3RyaW5nTWFwV3JhcHBlcjtcbiAgICB9KCkpO1xuICAgIHZhciBMaXN0V3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIExpc3RXcmFwcGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGFyclxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIuZmluZExhc3QgPSBmdW5jdGlvbiAoYXJyLCBjb25kaXRpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24oYXJyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBsaXN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gaXRlbXNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIExpc3RXcmFwcGVyLnJlbW92ZUFsbCA9IGZ1bmN0aW9uIChsaXN0LCBpdGVtcykge1xuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaW5kZXggPSBsaXN0LmluZGV4T2YoaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGxpc3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBlbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTGlzdFdyYXBwZXIucmVtb3ZlID0gZnVuY3Rpb24gKGxpc3QsIGVsKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gYVxuICAgICAgICAgKiBAcGFyYW0gez99IGJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIExpc3RXcmFwcGVyLmVxdWFscyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGxpc3RcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIExpc3RXcmFwcGVyLmZsYXR0ZW4gPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QucmVkdWNlKGZ1bmN0aW9uIChmbGF0LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZmxhdEl0ZW0gPSBBcnJheS5pc0FycmF5KGl0ZW0pID8gTGlzdFdyYXBwZXIuZmxhdHRlbihpdGVtKSA6IGl0ZW07XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoZmxhdCkpLmNvbmNhdChmbGF0SXRlbSk7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBMaXN0V3JhcHBlcjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaXNQcm9taXNlID0gX2FuZ3VsYXJfY29yZS5fX2NvcmVfcHJpdmF0ZV9fLmlzUHJvbWlzZTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzRW1wdHlJbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcnMgZm9yIHZhbGlkYXRvcnMgdG8gYmUgdXNlZCBmb3Ige0BsaW5rIEZvcm1Db250cm9sfXMgaW4gYSBmb3JtLlxuICAgICAqXG4gICAgICogUHJvdmlkZSB0aGlzIHVzaW5nIGBtdWx0aTogdHJ1ZWAgdG8gYWRkIHZhbGlkYXRvcnMuXG4gICAgICpcbiAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAqXG4gICAgICoge0BleGFtcGxlIGNvcmUvZm9ybXMvdHMvbmdfdmFsaWRhdG9ycy9uZ192YWxpZGF0b3JzLnRzIHJlZ2lvbj0nbmdfdmFsaWRhdG9ycyd9XG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIE5HX1ZBTElEQVRPUlMgPSBuZXcgX2FuZ3VsYXJfY29yZS5PcGFxdWVUb2tlbignTmdWYWxpZGF0b3JzJyk7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXJzIGZvciBhc3luY2hyb25vdXMgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7QGxpbmsgRm9ybUNvbnRyb2x9c1xuICAgICAqIGluIGEgZm9ybS5cbiAgICAgKlxuICAgICAqIFByb3ZpZGUgdGhpcyB1c2luZyBgbXVsdGk6IHRydWVgIHRvIGFkZCB2YWxpZGF0b3JzLlxuICAgICAqXG4gICAgICogU2VlIHtAbGluayBOR19WQUxJREFUT1JTfSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIE5HX0FTWU5DX1ZBTElEQVRPUlMgPSBuZXcgX2FuZ3VsYXJfY29yZS5PcGFxdWVUb2tlbignTmdBc3luY1ZhbGlkYXRvcnMnKTtcbiAgICAvKipcbiAgICAgKiAgUHJvdmlkZXMgYSBzZXQgb2YgdmFsaWRhdG9ycyB1c2VkIGJ5IGZvcm0gY29udHJvbHMuXG4gICAgICAqICpcbiAgICAgICogQSB2YWxpZGF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHtAbGluayBGb3JtQ29udHJvbH0gb3IgY29sbGVjdGlvbiBvZlxuICAgICAgKiBjb250cm9scyBhbmQgcmV0dXJucyBhIG1hcCBvZiBlcnJvcnMuIEEgbnVsbCBtYXAgbWVhbnMgdGhhdCB2YWxpZGF0aW9uIGhhcyBwYXNzZWQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiBgYGB0eXBlc2NyaXB0XG4gICAgICAqIHZhciBsb2dpbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgICogYGBgXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgVmFsaWRhdG9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFZhbGlkYXRvcnMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQgPSBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpID8geyAncmVxdWlyZWQnOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2wgdmFsdWUgdG8gYmUgdHJ1ZS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZSA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbC52YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB7ICdyZXF1aXJlZCc6IHRydWUgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtaW5pbXVtIGxlbmd0aC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBtaW5MZW5ndGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoID0gZnVuY3Rpb24gKG1pbkxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbGVuZ3RoID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVuZ3RoIDwgbWluTGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgeyAnbWlubGVuZ3RoJzogeyAncmVxdWlyZWRMZW5ndGgnOiBtaW5MZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGggfSB9IDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgY29udHJvbHMgdG8gaGF2ZSBhIHZhbHVlIG9mIGEgbWF4aW11bSBsZW5ndGguXG4gICAgICAgICAqIEBwYXJhbSB7P30gbWF4TGVuZ3RoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCA9IGZ1bmN0aW9uIChtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGxlbmd0aCA9IGNvbnRyb2wudmFsdWUgPyBjb250cm9sLnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlbmd0aCA+IG1heExlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgIHsgJ21heGxlbmd0aCc6IHsgJ3JlcXVpcmVkTGVuZ3RoJzogbWF4TGVuZ3RoLCAnYWN0dWFsTGVuZ3RoJzogbGVuZ3RoIH0gfSA6XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGEgY29udHJvbCB0byBtYXRjaCBhIHJlZ2V4IHRvIGl0cyB2YWx1ZS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXR0ZXJuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4gPSBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZWdleDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlZ2V4U3RyO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlZ2V4U3RyID0gXCJeXCIgKyBwYXR0ZXJuICsgXCIkXCI7XG4gICAgICAgICAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZ2V4U3RyID0gcGF0dGVybi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gcGF0dGVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY29udHJvbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbHVlID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSkgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgeyAncGF0dGVybic6IHsgJ3JlcXVpcmVkUGF0dGVybic6IHJlZ2V4U3RyLCAnYWN0dWFsVmFsdWUnOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIE5vLW9wIHZhbGlkYXRvci5cbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3IgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBDb21wb3NlIG11bHRpcGxlIHZhbGlkYXRvcnMgaW50byBhIHNpbmdsZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHVuaW9uXG4gICAgICAgICAgKiBvZiB0aGUgaW5kaXZpZHVhbCBlcnJvciBtYXBzLlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZSA9IGZ1bmN0aW9uICh2YWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvcnMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBwcmVzZW50VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCk7XG4gICAgICAgICAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMgPSBmdW5jdGlvbiAodmFsaWRhdG9ycykge1xuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3JzKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgICAgICAgICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gcHJvbWlzZXMgPSBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykubWFwKF9jb252ZXJ0VG9Qcm9taXNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oX21lcmdlRXJyb3JzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3JzO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBvYmpcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jb252ZXJ0VG9Qcm9taXNlKG9iaikge1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKG9iaikgPyBvYmogOiByeGpzX29wZXJhdG9yX3RvUHJvbWlzZS50b1Byb21pc2UuY2FsbChvYmopO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCB2YWxpZGF0b3JzKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gdihjb250cm9sKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V4ZWN1dGVBc3luY1ZhbGlkYXRvcnMoY29udHJvbCwgdmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gdmFsaWRhdG9ycy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYoY29udHJvbCk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGFycmF5T2ZFcnJvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9tZXJnZUVycm9ycyhhcnJheU9mRXJyb3JzKSB7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlcyA9IGFycmF5T2ZFcnJvcnMucmVkdWNlKGZ1bmN0aW9uIChyZXMsIGVycm9ycykge1xuICAgICAgICAgICAgcmV0dXJuIGlzUHJlc2VudChlcnJvcnMpID8gU3RyaW5nTWFwV3JhcHBlci5tZXJnZShyZXMsIGVycm9ycykgOiByZXM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlcykubGVuZ3RoID09PSAwID8gbnVsbCA6IHJlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIHByb3ZpZGUgYSB7QGxpbmsgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciBmb3JtIGNvbnRyb2xzLlxuICAgICAqXG4gICAgICogU2VlIHtAbGluayBEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZm9yIGhvdyB0byBpbXBsZW1lbnQgb25lLlxuICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBOR19WQUxVRV9BQ0NFU1NPUiA9IG5ldyBfYW5ndWxhcl9jb3JlLk9wYXF1ZVRva2VuKCdOZ1ZhbHVlQWNjZXNzb3InKTtcblxuICAgIHZhciAvKiogQHR5cGUgez99ICovIENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgY2hlY2tib3ggaW5wdXQgZWxlbWVudC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiBgYGBcbiAgICAgICogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZW1lbWJlckxvZ2luXCIgbmdNb2RlbD5cbiAgICAgICogYGBgXG4gICAgICAqICpcbiAgICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZikge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmID0gX2VsZW1lbnRSZWY7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKF8pIHsgfTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1jaGVja2JveF1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1jaGVja2JveF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC5jaGVja2VkKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBERUZBVUxUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBEZWZhdWx0VmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgVGhlIGRlZmF1bHQgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICAgICAgKiB7QGxpbmsgTmdNb2RlbH0sIHtAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqIGBgYFxuICAgICAgKiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoUXVlcnlcIiBuZ01vZGVsPlxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIERlZmF1bHRWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIERlZmF1bHRWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uVG91Y2hlZCA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBEZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuc2V0RGlzYWJsZWRTdGF0ZSA9IGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgRGVmYXVsdFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW2Zvcm1Db250cm9sTmFtZV0sdGV4dGFyZWFbZm9ybUNvbnRyb2xOYW1lXSxpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtmb3JtQ29udHJvbF0sdGV4dGFyZWFbZm9ybUNvbnRyb2xdLGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW25nTW9kZWxdLHRleHRhcmVhW25nTW9kZWxdLFtuZ0RlZmF1bHRDb250cm9sXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB2c2F2a2luIHJlcGxhY2UgdGhlIGFib3ZlIHNlbGVjdG9yIHdpdGggdGhlIG9uZSBiZWxvdyBpdCBvbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zMDExIGlzIGltcGxlbWVudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3RvcjogJ1tuZ0NvbnRyb2xdLFtuZ01vZGVsXSxbbmdGb3JtQ29udHJvbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGlucHV0KSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0LnZhbHVlKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtERUZBVUxUX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBEZWZhdWx0VmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemVWYWxpZGF0b3IodmFsaWRhdG9yKSB7XG4gICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnZhbGlkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGMpIHsgcmV0dXJuICgodmFsaWRhdG9yKSkudmFsaWRhdGUoYyk7IH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbGlkYXRvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKHZhbGlkYXRvcikge1xuICAgICAgICBpZiAoKCh2YWxpZGF0b3IpKS52YWxpZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjKSB7IHJldHVybiAoKHZhbGlkYXRvcikpLnZhbGlkYXRlKGMpOyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICh2YWxpZGF0b3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gTlVNQkVSX1ZBTFVFX0FDQ0VTU09SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOdW1iZXJWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSBudW1iZXIgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAgICAgICoge0BsaW5rIE5nTW9kZWx9LCB7QGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge0BsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiBgYGBcbiAgICAgICogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImFnZVwiPlxuICAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB2YXIgTnVtYmVyVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOdW1iZXJWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChfKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVGhlIHZhbHVlIG5lZWRzIHRvIGJlIG5vcm1hbGl6ZWQgZm9yIElFOSwgb3RoZXJ3aXNlIGl0IGlzIHNldCB0byAnbnVsbCcgd2hlbiBudWxsXG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIE51bWJlclZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9bnVtYmVyXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9bnVtYmVyXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1udW1iZXJdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW05VTUJFUl9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOdW1iZXJWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQyID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bmltcGxlbWVudGVkKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogIEEgYmFzZSBjbGFzcyB0aGF0IGFsbCBjb250cm9sIGRpcmVjdGl2ZSBleHRlbmQuXG4gICAgICAqIEl0IGJpbmRzIGEge0BsaW5rIEZvcm1Db250cm9sfSBvYmplY3QgdG8gYSBET00gZWxlbWVudC5cbiAgICAgICogKlxuICAgICAgKiBVc2VkIGludGVybmFsbHkgYnkgQW5ndWxhciBmb3Jtcy5cbiAgICAgICogKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHZhciBOZ0NvbnRyb2wgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMihOZ0NvbnRyb2wsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIE5nQ29udHJvbCgpIHtcbiAgICAgICAgICAgIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBudWxsO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5nQ29udHJvbC5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAodW5pbXBsZW1lbnRlZCgpKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0NvbnRyb2wucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAodW5pbXBsZW1lbnRlZCgpKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdDb250cm9sLnByb3RvdHlwZS52aWV3VG9Nb2RlbFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyB9O1xuICAgICAgICByZXR1cm4gTmdDb250cm9sO1xuICAgIH0oQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBSQURJT19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgSW50ZXJuYWwgY2xhc3MgdXNlZCBieSBBbmd1bGFyIHRvIHVuY2hlY2sgcmFkaW8gYnV0dG9ucyB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLlxuICAgICAqL1xuICAgIHZhciBSYWRpb0NvbnRyb2xSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJhZGlvQ29udHJvbFJlZ2lzdHJ5KCkge1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGNvbnRyb2wsIGFjY2Vzc29yKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NvcnMucHVzaChbY29udHJvbCwgYWNjZXNzb3JdKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hY2Nlc3NvcnNbaV1bMV0gPT09IGFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc29ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xSZWdpc3RyeS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGFjY2Vzc29yKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX2lzU2FtZUdyb3VwKGMsIGFjY2Vzc29yKSAmJiBjWzFdICE9PSBhY2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgICAgICBjWzFdLmZpcmVVbmNoZWNrKGFjY2Vzc29yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFBhaXJcbiAgICAgICAgICogQHBhcmFtIHs/fSBhY2Nlc3NvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLl9pc1NhbWVHcm91cCA9IGZ1bmN0aW9uIChjb250cm9sUGFpciwgYWNjZXNzb3IpIHtcbiAgICAgICAgICAgIGlmICghY29udHJvbFBhaXJbMF0uY29udHJvbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbFBhaXJbMF0uX3BhcmVudCA9PT0gYWNjZXNzb3IuX2NvbnRyb2wuX3BhcmVudCAmJlxuICAgICAgICAgICAgICAgIGNvbnRyb2xQYWlyWzFdLm5hbWUgPT09IGFjY2Vzc29yLm5hbWU7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQ29udHJvbFJlZ2lzdHJ5LmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0YWJsZSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUmFkaW9Db250cm9sUmVnaXN0cnkuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgcmV0dXJuIFJhZGlvQ29udHJvbFJlZ2lzdHJ5O1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogICpcbiAgICAgICogVXNlZCBieSB7QGxpbmsgTmdNb2RlbH0sIHtAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICAgICAgKiB0byBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogSWYgeW91IGhhdmUgaW1wb3J0ZWQgdGhlIHtAbGluayBGb3Jtc01vZHVsZX0gb3IgdGhlIHtAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfSwgdGhpc1xuICAgICAgKiB2YWx1ZSBhY2Nlc3NvciB3aWxsIGJlIGFjdGl2ZSBvbiBhbnkgcmFkaW8gY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAgICAgICogKipub3QqKiBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEhvdyB0byB1c2UgcmFkaW8gYnV0dG9ucyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICAgICAgKiAqXG4gICAgICAqIFRvIHVzZSByYWRpbyBidXR0b25zIGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHlvdSdsbCB3YW50IHRvIGVuc3VyZSB0aGF0IHJhZGlvIGJ1dHRvbnNcbiAgICAgICogaW4gdGhlIHNhbWUgZ3JvdXAgaGF2ZSB0aGUgc2FtZSBgbmFtZWAgYXR0cmlidXRlLiAgUmFkaW8gYnV0dG9ucyB3aXRoIGRpZmZlcmVudCBgbmFtZWBcbiAgICAgICogYXR0cmlidXRlcyBkbyBub3QgYWZmZWN0IGVhY2ggb3RoZXIuXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL3JhZGlvQnV0dG9ucy9yYWRpb19idXR0b25fZXhhbXBsZS50cyByZWdpb249J1RlbXBsYXRlRHJpdmVuJ31cbiAgICAgICogKlxuICAgICAgKiBXaGVuIHVzaW5nIHJhZGlvIGJ1dHRvbnMgaW4gYSByZWFjdGl2ZSBmb3JtLCByYWRpbyBidXR0b25zIGluIHRoZSBzYW1lIGdyb3VwIHNob3VsZCBoYXZlIHRoZVxuICAgICAgKiBzYW1lIGBmb3JtQ29udHJvbE5hbWVgLiBZb3UgY2FuIGFsc28gYWRkIGEgYG5hbWVgIGF0dHJpYnV0ZSwgYnV0IGl0J3Mgb3B0aW9uYWwuXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlUmFkaW9CdXR0b25zL3JlYWN0aXZlX3JhZGlvX2J1dHRvbl9leGFtcGxlLnRzIHJlZ2lvbj0nUmVhY3RpdmUnfVxuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICogQHBhcmFtIHs/fSBfcmVnaXN0cnlcbiAgICAgICAgICogQHBhcmFtIHs/fSBfaW5qZWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IoX3JlbmRlcmVyLCBfZWxlbWVudFJlZiwgX3JlZ2lzdHJ5LCBfaW5qZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cnkgPSBfcmVnaXN0cnk7XG4gICAgICAgICAgICB0aGlzLl9pbmplY3RvciA9IF9pbmplY3RvcjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbCA9IHRoaXMuX2luamVjdG9yLmdldChOZ0NvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tOYW1lKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyeS5hZGQodGhpcy5fY29udHJvbCwgdGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3JlZ2lzdHJ5LnJlbW92ZSh0aGlzKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmbihfdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlZ2lzdHJ5LnNlbGVjdChfdGhpcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuZmlyZVVuY2hlY2sgPSBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2NoZWNrTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgJiYgdGhpcy5mb3JtQ29udHJvbE5hbWUgJiYgdGhpcy5uYW1lICE9PSB0aGlzLmZvcm1Db250cm9sTmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Rocm93TmFtZUVycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fdGhyb3dOYW1lRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICBJZiB5b3UgZGVmaW5lIGJvdGggYSBuYW1lIGFuZCBhIGZvcm1Db250cm9sTmFtZSBhdHRyaWJ1dGUgb24geW91ciByYWRpbyBidXR0b24sIHRoZWlyIHZhbHVlc1xcbiAgICAgIG11c3QgbWF0Y2guIEV4OiA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIGZvcm1Db250cm9sTmFtZT1cXFwiZm9vZFxcXCIgbmFtZT1cXFwiZm9vZFxcXCI+XFxuICAgIFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPXJhZGlvXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1yYWRpb11bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnKGNoYW5nZSknOiAnb25DaGFuZ2UoKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSQURJT19WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgICAgICB7IHR5cGU6IFJhZGlvQ29udHJvbFJlZ2lzdHJ5LCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdG9yLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICdmb3JtQ29udHJvbE5hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICd2YWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICB9KCkpO1xuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gUkFOR0VfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJhbmdlVmFsdWVBY2Nlc3NvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgcmFuZ2UgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAgICAgICoge0BsaW5rIE5nTW9kZWx9LCB7QGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge0BsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiBgYGBcbiAgICAgICogPGlucHV0IHR5cGU9XCJyYW5nZVwiIFsobmdNb2RlbCldPVwiYWdlXCIgPlxuICAgICAgKiBgYGBcbiAgICAgKi9cbiAgICB2YXIgUmFuZ2VWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFJhbmdlVmFsdWVBY2Nlc3NvcihfcmVuZGVyZXIsIF9lbGVtZW50UmVmKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBfZWxlbWVudFJlZjtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUud3JpdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5yZWdpc3Rlck9uQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7IGZuKHZhbHVlID09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTsgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5zZXREaXNhYmxlZFN0YXRlID0gZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICAgICAgICB9O1xuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9cmFuZ2VdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYW5nZV1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFuZ2VdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTU09SXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gUmFuZ2VWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBTRUxFQ1RfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gaWRcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfYnVpbGRWYWx1ZVN0cmluZyhpZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGlkID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKHZhbHVlKSlcbiAgICAgICAgICAgIHZhbHVlID0gJ09iamVjdCc7XG4gICAgICAgIHJldHVybiAoaWQgKyBcIjogXCIgKyB2YWx1ZSkuc2xpY2UoMCwgNTApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgKlxuICAgICAgKiBVc2VkIGJ5IHtAbGluayBOZ01vZGVsfSwge0BsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtAbGluayBGb3JtQ29udHJvbE5hbWV9XG4gICAgICAqIHRvIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIHtAbGluayBGb3JtQ29udHJvbH0gbW9kZWwuXG4gICAgICAqICpcbiAgICAgICogKlxuICAgICAgKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge0BsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge0BsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9LCB0aGlzXG4gICAgICAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSBzZWxlY3QgY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAgICAgICogKipub3QqKiBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IgdG8gYWN0aXZhdGUgaXQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEhvdyB0byB1c2Ugc2VsZWN0IGNvbnRyb2xzIHdpdGggZm9ybSBkaXJlY3RpdmVzXG4gICAgICAqICpcbiAgICAgICogVG8gdXNlIGEgc2VsZWN0IGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHNpbXBseSBhZGQgYW4gYG5nTW9kZWxgIGFuZCBhIGBuYW1lYFxuICAgICAgKiBhdHRyaWJ1dGUgdG8gdGhlIG1haW4gYDxzZWxlY3Q+YCB0YWcuXG4gICAgICAqICpcbiAgICAgICogSWYgeW91ciBvcHRpb24gdmFsdWVzIGFyZSBzaW1wbGUgc3RyaW5ncywgeW91IGNhbiBiaW5kIHRvIHRoZSBub3JtYWwgYHZhbHVlYCBwcm9wZXJ0eVxuICAgICAgKiBvbiB0aGUgb3B0aW9uLiAgSWYgeW91ciBvcHRpb24gdmFsdWVzIGhhcHBlbiB0byBiZSBvYmplY3RzIChhbmQgeW91J2QgbGlrZSB0byBzYXZlIHRoZVxuICAgICAgKiBzZWxlY3Rpb24gaW4geW91ciBmb3JtIGFzIGFuIG9iamVjdCksIHVzZSBgbmdWYWx1ZWAgaW5zdGVhZDpcbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2VsZWN0Q29udHJvbC9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiBJbiByZWFjdGl2ZSBmb3JtcywgeW91J2xsIGFsc28gd2FudCB0byBhZGQgeW91ciBmb3JtIGRpcmVjdGl2ZSAoYGZvcm1Db250cm9sTmFtZWAgb3JcbiAgICAgICogYGZvcm1Db250cm9sYCkgb24gdGhlIG1haW4gYDxzZWxlY3Q+YCB0YWcuIExpa2UgaW4gdGhlIGZvcm1lciBleGFtcGxlLCB5b3UgaGF2ZSB0aGVcbiAgICAgICogY2hvaWNlIG9mIGJpbmRpbmcgdG8gdGhlICBgdmFsdWVgIG9yIGBuZ1ZhbHVlYCBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0J3Mgb3B0aW9ucy5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvcmVhY3RpdmVTZWxlY3RDb250cm9sL3JlYWN0aXZlX3NlbGVjdF9jb250cm9sX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqIE5vdGU6IFdlIGxpc3RlbiB0byB0aGUgJ2NoYW5nZScgZXZlbnQgYmVjYXVzZSAnaW5wdXQnIGV2ZW50cyBhcmVuJ3QgZmlyZWRcbiAgICAgICogZm9yIHNlbGVjdHMgaW4gRmlyZWZveCBhbmQgSUU6XG4gICAgICAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwMjQzNTBcbiAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNDY2MDA0NS9cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5faWRDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS53cml0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWx1ZVN0cmluZyA9IF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuX2dldE9wdGlvbklkKHZhbHVlKSwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWVTdHJpbmcpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZVN0cmluZztcbiAgICAgICAgICAgICAgICBmbihfdGhpcy5fZ2V0T3B0aW9uVmFsdWUodmFsdWVTdHJpbmcpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPblRvdWNoZWQgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZWdpc3Rlck9wdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZ2V0T3B0aW9uSWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKHRoaXMuX29wdGlvbk1hcC5rZXlzKCkpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICBpZiAobG9vc2VJZGVudGljYWwodGhpcy5fb3B0aW9uTWFwLmdldChpZCksIHZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBpZCA9IF9leHRyYWN0SWQodmFsdWVTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbk1hcC5oYXMoaWQpID8gdGhpcy5fb3B0aW9uTWFwLmdldChpZCkgOiB2YWx1ZVN0cmluZztcbiAgICAgICAgfTtcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdDpub3QoW211bHRpcGxlXSlbZm9ybUNvbnRyb2xOYW1lXSxzZWxlY3Q6bm90KFttdWx0aXBsZV0pW2Zvcm1Db250cm9sXSxzZWxlY3Q6bm90KFttdWx0aXBsZV0pW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5SZW5kZXJlciwgfSxcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiAgKlxuICAgICAgKiAqXG4gICAgICAqIFNlZSBkb2NzIGZvciB7QGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZvciB1c2FnZSBleGFtcGxlcy5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBOZ1NlbGVjdE9wdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gTmdTZWxlY3RPcHRpb24oX2VsZW1lbnQsIF9yZW5kZXJlciwgX3NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QgPSBfc2VsZWN0O1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdClcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUsIFwibmdWYWx1ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuc2V0KHRoaXMuaWQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdTZWxlY3RPcHRpb24ucHJvdG90eXBlLl9zZXRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuZGVsZXRlKHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE5nU2VsZWN0T3B0aW9uLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ29wdGlvbicgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBOZ1NlbGVjdE9wdGlvbi5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgTmdTZWxlY3RPcHRpb24ucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmdWYWx1ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsXSB9LF0sXG4gICAgICAgICAgICAndmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ3ZhbHVlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nU2VsZWN0T3B0aW9uO1xuICAgIH0oKSk7XG5cbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBTRUxFQ1RfTVVMVElQTEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3I7IH0pLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBpZFxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nJDEoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmIChpZCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB2YWx1ZSA9IFwiJ1wiICsgdmFsdWUgKyBcIidcIjtcbiAgICAgICAgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpXG4gICAgICAgICAgICB2YWx1ZSA9ICdPYmplY3QnO1xuICAgICAgICByZXR1cm4gKGlkICsgXCI6IFwiICsgdmFsdWUpLnNsaWNlKDAsIDUwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V4dHJhY3RJZCQxKHZhbHVlU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgVGhlIGFjY2Vzc29yIGZvciB3cml0aW5nIGEgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIG9uIGEgc2VsZWN0IGVsZW1lbnQuXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yKF9yZW5kZXJlciwgX2VsZW1lbnRSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyID0gX3JlbmRlcmVyO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZiA9IF9lbGVtZW50UmVmO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5faWRDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykgeyB9O1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLndyaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCB2YWx1ZXMgdG8gaWRzXG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWRzXzEgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLl9nZXRPcHRpb25JZCh2KTsgfSk7XG4gICAgICAgICAgICAgICAgb3B0aW9uU2VsZWN0ZWRTdGF0ZVNldHRlciA9IGZ1bmN0aW9uIChvcHQsIG8pIHsgb3B0Ll9zZXRTZWxlY3RlZChpZHNfMS5pbmRleE9mKG8udG9TdHJpbmcoKSkgPiAtMSk7IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyID0gZnVuY3Rpb24gKG9wdCwgbykgeyBvcHQuX3NldFNlbGVjdGVkKGZhbHNlKTsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29wdGlvbk1hcC5mb3JFYWNoKG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUucmVnaXN0ZXJPbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHNlbGVjdGVkID0gW107XG4gICAgICAgICAgICAgICAgaWYgKF8uaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkT3B0aW9ucycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdGlvbnMgPSBfLnNlbGVjdGVkT3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIG9wdCA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbCA9IF90aGlzLl9nZXRPcHRpb25WYWx1ZShvcHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25zID0gKF8ub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBvcHQgPSBvcHRpb25zLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsID0gX3RoaXMuX2dldE9wdGlvblZhbHVlKG9wdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgZm4oc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnJlZ2lzdGVyT25Ub3VjaGVkID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMub25Ub3VjaGVkID0gZm47IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLnNldERpc2FibGVkU3RhdGUgPSBmdW5jdGlvbiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVnaXN0ZXJPcHRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlkID0gKHRoaXMuX2lkQ291bnRlcisrKS50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9uTWFwLnNldChpZCwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2dldE9wdGlvbklkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbSh0aGlzLl9vcHRpb25NYXAua2V5cygpKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKGxvb3NlSWRlbnRpY2FsKHRoaXMuX29wdGlvbk1hcC5nZXQoaWQpLl92YWx1ZSwgdmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZVN0cmluZykge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gaWQgPSBfZXh0cmFjdElkJDEodmFsdWVTdHJpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbk1hcC5oYXMoaWQpID8gdGhpcy5fb3B0aW9uTWFwLmdldChpZCkuX3ZhbHVlIDogdmFsdWVTdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xOYW1lXSxzZWxlY3RbbXVsdGlwbGVdW2Zvcm1Db250cm9sXSxzZWxlY3RbbXVsdGlwbGVdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW1NFTEVDVF9NVUxUSVBMRV9WQUxVRV9BQ0NFU1NPUl1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkVsZW1lbnRSZWYsIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogIE1hcmtzIGA8b3B0aW9uPmAgYXMgZHluYW1pYywgc28gQW5ndWxhciBjYW4gYmUgbm90aWZpZWQgd2hlbiBvcHRpb25zIGNoYW5nZS5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIGBgYFxuICAgICAgKiA8c2VsZWN0IG11bHRpcGxlIG5hbWU9XCJjaXR5XCIgbmdNb2RlbD5cbiAgICAgICogPG9wdGlvbiAqbmdGb3I9XCJsZXQgYyBvZiBjaXRpZXNcIiBbdmFsdWVdPVwiY1wiPjwvb3B0aW9uPlxuICAgICAgKiA8L3NlbGVjdD5cbiAgICAgICogYGBgXG4gICAgICovXG4gICAgdmFyIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBfZWxlbWVudFxuICAgICAgICAgKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICAgICAgICAgKiBAcGFyYW0gez99IF9zZWxlY3RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24oX2VsZW1lbnQsIF9yZW5kZXJlciwgX3NlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IF9lbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBfcmVuZGVyZXI7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QgPSBfc2VsZWN0O1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLl9zZWxlY3QuX3JlZ2lzdGVyT3B0aW9uKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZSwgXCJuZ1ZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZShfYnVpbGRWYWx1ZVN0cmluZyQxKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nJDEodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2V0RWxlbWVudFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHNlbGVjdGVkXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5fc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdvcHRpb24nIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5FbGVtZW50UmVmLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlJlbmRlcmVyLCB9LFxuICAgICAgICAgICAgeyB0eXBlOiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5Ib3N0IH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25nVmFsdWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nVmFsdWUnLF0gfSxdLFxuICAgICAgICAgICAgJ3ZhbHVlJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWyd2YWx1ZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29udHJvbFBhdGgobmFtZSwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQucGF0aC5jb25jYXQoW25hbWVdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFVwQ29udHJvbChjb250cm9sLCBkaXIpIHtcbiAgICAgICAgaWYgKCFjb250cm9sKVxuICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gICAgICAgIGlmICghZGlyLnZhbHVlQWNjZXNzb3IpXG4gICAgICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgY29udHJvbC52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW2NvbnRyb2wudmFsaWRhdG9yLCBkaXIudmFsaWRhdG9yXSk7XG4gICAgICAgIGNvbnRyb2wuYXN5bmNWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhbY29udHJvbC5hc3luY1ZhbGlkYXRvciwgZGlyLmFzeW5jVmFsaWRhdG9yXSk7XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUoY29udHJvbC52YWx1ZSk7XG4gICAgICAgIC8vIHZpZXcgLT4gbW9kZWxcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICBjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7IGVtaXRNb2RlbFRvVmlld0NoYW5nZTogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b3VjaGVkXG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpOyB9KTtcbiAgICAgICAgY29udHJvbC5yZWdpc3Rlck9uQ2hhbmdlKGZ1bmN0aW9uIChuZXdWYWx1ZSwgZW1pdE1vZGVsRXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGNvbnRyb2wgLT4gdmlld1xuICAgICAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAvLyBjb250cm9sIC0+IG5nTW9kZWxcbiAgICAgICAgICAgIGlmIChlbWl0TW9kZWxFdmVudClcbiAgICAgICAgICAgICAgICBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2wucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZ1bmN0aW9uIChpc0Rpc2FibGVkKSB7IGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlLXJ1biB2YWxpZGF0aW9uIHdoZW4gdmFsaWRhdG9yIGJpbmRpbmcgY2hhbmdlcywgZS5nLiBtaW5sZW5ndGg9MyAtPiBtaW5sZW5ndGg9NFxuICAgICAgICBkaXIuX3Jhd1ZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAoKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKVxuICAgICAgICAgICAgICAgICgodmFsaWRhdG9yKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXIuX3Jhd0FzeW5jVmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICgoKHZhbGlkYXRvcikpLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UpXG4gICAgICAgICAgICAgICAgKCh2YWxpZGF0b3IpKS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjbGVhblVwQ29udHJvbChjb250cm9sLCBkaXIpIHtcbiAgICAgICAgZGlyLnZhbHVlQWNjZXNzb3IucmVnaXN0ZXJPbkNoYW5nZShmdW5jdGlvbiAoKSB7IHJldHVybiBfbm9Db250cm9sRXJyb3IoZGlyKTsgfSk7XG4gICAgICAgIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9ub0NvbnRyb2xFcnJvcihkaXIpOyB9KTtcbiAgICAgICAgZGlyLl9yYXdWYWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkaXIuX3Jhd0FzeW5jVmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbnRyb2wpXG4gICAgICAgICAgICBjb250cm9sLl9jbGVhckNoYW5nZUZucygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VXBGb3JtQ29udGFpbmVyKGNvbnRyb2wsIGRpcikge1xuICAgICAgICBpZiAoaXNCbGFuayhjb250cm9sKSlcbiAgICAgICAgICAgIF90aHJvd0Vycm9yKGRpciwgJ0Nhbm5vdCBmaW5kIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgICAgICAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub0NvbnRyb2xFcnJvcihkaXIpIHtcbiAgICAgICAgcmV0dXJuIF90aHJvd0Vycm9yKGRpciwgJ1RoZXJlIGlzIG5vIEZvcm1Db250cm9sIGluc3RhbmNlIGF0dGFjaGVkIHRvIGZvcm0gY29udHJvbCBlbGVtZW50IHdpdGgnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgKiBAcGFyYW0gez99IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF90aHJvd0Vycm9yKGRpciwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBtZXNzYWdlRW5kO1xuICAgICAgICBpZiAoZGlyLnBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbWVzc2FnZUVuZCA9IFwicGF0aDogJ1wiICsgZGlyLnBhdGguam9pbignIC0+ICcpICsgXCInXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyLnBhdGhbMF0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2VFbmQgPSBcIm5hbWU6ICdcIiArIGRpci5wYXRoICsgXCInXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlRW5kID0gJ3Vuc3BlY2lmaWVkIG5hbWUgYXR0cmlidXRlJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArIFwiIFwiICsgbWVzc2FnZUVuZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9ycykge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZVZhbGlkYXRvcikpIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHZhbGlkYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIGlzUHJlc2VudCh2YWxpZGF0b3JzKSA/IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKSkgOlxuICAgICAgICAgICAgbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICogQHBhcmFtIHs/fSB2aWV3TW9kZWxcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHZpZXdNb2RlbCkge1xuICAgICAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNoYW5nZSA9IGNoYW5nZXNbJ21vZGVsJ107XG4gICAgICAgIGlmIChjaGFuZ2UuaXNGaXJzdENoYW5nZSgpKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiAhbG9vc2VJZGVudGljYWwodmlld01vZGVsLCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gQlVJTFRJTl9BQ0NFU1NPUlMgPSBbXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhbmdlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgTnVtYmVyVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgXTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQnVpbHRJbkFjY2Vzc29yKHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgcmV0dXJuIEJVSUxUSU5fQUNDRVNTT1JTLnNvbWUoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHZhbHVlQWNjZXNzb3IuY29uc3RydWN0b3IgPT09IGE7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFZhbHVlQWNjZXNzb3IoZGlyLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICBpZiAoIXZhbHVlQWNjZXNzb3JzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGRlZmF1bHRBY2Nlc3NvcjtcbiAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gYnVpbHRpbkFjY2Vzc29yO1xuICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdXN0b21BY2Nlc3NvcjtcbiAgICAgICAgdmFsdWVBY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgaWYgKHYuY29uc3RydWN0b3IgPT09IERlZmF1bHRWYWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzQnVpbHRJbkFjY2Vzc29yKHYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJ1aWx0aW5BY2Nlc3NvcilcbiAgICAgICAgICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTW9yZSB0aGFuIG9uZSBidWlsdC1pbiB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICAgICAgICAgICAgYnVpbHRpbkFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjdXN0b21BY2Nlc3NvcilcbiAgICAgICAgICAgICAgICAgICAgX3Rocm93RXJyb3IoZGlyLCAnTW9yZSB0aGFuIG9uZSBjdXN0b20gdmFsdWUgYWNjZXNzb3IgbWF0Y2hlcyBmb3JtIGNvbnRyb2wgd2l0aCcpO1xuICAgICAgICAgICAgICAgIGN1c3RvbUFjY2Vzc29yID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdXN0b21BY2Nlc3NvcilcbiAgICAgICAgICAgIHJldHVybiBjdXN0b21BY2Nlc3NvcjtcbiAgICAgICAgaWYgKGJ1aWx0aW5BY2Nlc3NvcilcbiAgICAgICAgICAgIHJldHVybiBidWlsdGluQWNjZXNzb3I7XG4gICAgICAgIGlmIChkZWZhdWx0QWNjZXNzb3IpXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdEFjY2Vzc29yO1xuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWxpZCB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgVGhpcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvZGUgc2hhcmVkIGJldHdlZW4ge0BsaW5rIE5nTW9kZWxHcm91cH0gYW5kIHtAbGluayBGb3JtR3JvdXBOYW1lfS5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUoKSB7XG4gICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1Hcm91cCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1Hcm91cCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEdldCB0aGUge0BsaW5rIEZvcm1Hcm91cH0gYmFja2luZyB0aGlzIGJpbmRpbmcuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRGb3JtR3JvdXAodGhpcyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udHJvbCBncm91cC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEdldCB0aGUge0BsaW5rIEZvcm19IHRvIHdoaWNoIHRoaXMgZ3JvdXAgYmVsb25ncy5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ2YWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciBBYnN0cmFjdENvbnRyb2xTdGF0dXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sU3RhdHVzKGNkKSB7XG4gICAgICAgICAgICB0aGlzLl9jZCA9IGNkO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NVbnRvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnVudG91Y2hlZCA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUsIFwibmdDbGFzc1RvdWNoZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnRvdWNoZWQgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NQcmlzdGluZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucHJpc3RpbmUgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NEaXJ0eVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wuZGlydHkgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NWYWxpZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wudmFsaWQgOiBmYWxzZTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2xTdGF0dXMucHJvdG90eXBlLCBcIm5nQ2xhc3NJbnZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC5pbnZhbGlkIDogZmFsc2U7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sU3RhdHVzLnByb3RvdHlwZSwgXCJuZ0NsYXNzUGVuZGluZ1wiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wucGVuZGluZyA6IGZhbHNlOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbFN0YXR1cztcbiAgICB9KCkpO1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG5nQ29udHJvbFN0YXR1c0hvc3QgPSB7XG4gICAgICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICduZ0NsYXNzVW50b3VjaGVkJyxcbiAgICAgICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICduZ0NsYXNzVG91Y2hlZCcsXG4gICAgICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ25nQ2xhc3NQcmlzdGluZScsXG4gICAgICAgICdbY2xhc3MubmctZGlydHldJzogJ25nQ2xhc3NEaXJ0eScsXG4gICAgICAgICdbY2xhc3MubmctdmFsaWRdJzogJ25nQ2xhc3NWYWxpZCcsXG4gICAgICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnbmdDbGFzc0ludmFsaWQnLFxuICAgICAgICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ25nQ2xhc3NQZW5kaW5nJyxcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBjb250cm9scyB0aGF0IHNldHMgQ1NTIGNsYXNzZXNcbiAgICAgICogYmFzZWQgb24gY29udHJvbCBzdGF0dXMgKHZhbGlkL2ludmFsaWQvZGlydHkvZXRjKS5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBOZ0NvbnRyb2xTdGF0dXMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMyhOZ0NvbnRyb2xTdGF0dXMsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNkXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ0NvbnRyb2xTdGF0dXMoY2QpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNkKTtcbiAgICAgICAgfVxuICAgICAgICBOZ0NvbnRyb2xTdGF0dXMuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV0sW25nTW9kZWxdLFtmb3JtQ29udHJvbF0nLCBob3N0OiBuZ0NvbnRyb2xTdGF0dXNIb3N0IH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdDb250cm9sU3RhdHVzLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBOZ0NvbnRyb2wsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgcmV0dXJuIE5nQ29udHJvbFN0YXR1cztcbiAgICB9KEFic3RyYWN0Q29udHJvbFN0YXR1cykpO1xuICAgIC8qKlxuICAgICAqICBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBncm91cHMgdGhhdCBzZXRzIENTUyBjbGFzc2VzXG4gICAgICAqIGJhc2VkIG9uIGNvbnRyb2wgc3RhdHVzICh2YWxpZC9pbnZhbGlkL2RpcnR5L2V0YykuXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgTmdDb250cm9sU3RhdHVzR3JvdXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMyhOZ0NvbnRyb2xTdGF0dXNHcm91cCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2RcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nQ29udHJvbFN0YXR1c0dyb3VwKGNkKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCBjZCk7XG4gICAgICAgIH1cbiAgICAgICAgTmdDb250cm9sU3RhdHVzR3JvdXAuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBOYW1lXSxbZm9ybUFycmF5TmFtZV0sW25nTW9kZWxHcm91cF0sW2Zvcm1Hcm91cF0sZm9ybTpub3QoW25nTm9Gb3JtXSksW25nRm9ybV0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogbmdDb250cm9sU3RhdHVzSG9zdFxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nQ29udHJvbFN0YXR1c0dyb3VwLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNlbGYgfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIHJldHVybiBOZ0NvbnRyb2xTdGF0dXNHcm91cDtcbiAgICB9KEFic3RyYWN0Q29udHJvbFN0YXR1cykpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkNSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBVc2UgYnkgZGlyZWN0aXZlcyBhbmQgY29tcG9uZW50cyB0byBlbWl0IGN1c3RvbSBFdmVudHMuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVzXG4gICAgICAqICpcbiAgICAgICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlLCBgWmlwcHlgIGFsdGVybmF0aXZlbHkgZW1pdHMgYG9wZW5gIGFuZCBgY2xvc2VgIGV2ZW50cyB3aGVuIGl0c1xuICAgICAgKiB0aXRsZSBnZXRzIGNsaWNrZWQ6XG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIHNlbGVjdG9yOiAnemlwcHknLFxuICAgICAgKiB0ZW1wbGF0ZTogYFxuICAgICAgKiA8ZGl2IGNsYXNzPVwiemlwcHlcIj5cbiAgICAgICogPGRpdiAoY2xpY2spPVwidG9nZ2xlKClcIj5Ub2dnbGU8L2Rpdj5cbiAgICAgICogPGRpdiBbaGlkZGVuXT1cIiF2aXNpYmxlXCI+XG4gICAgICAqIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICogPC9kaXY+XG4gICAgICAqIDwvZGl2PmB9KVxuICAgICAgKiBleHBvcnQgY2xhc3MgWmlwcHkge1xuICAgICAgKiB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICogQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgKiBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgKiAqXG4gICAgICAqIHRvZ2dsZSgpIHtcbiAgICAgICogdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgICAgICogaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgKiB0aGlzLm9wZW4uZW1pdChudWxsKTtcbiAgICAgICogfSBlbHNlIHtcbiAgICAgICogdGhpcy5jbG9zZS5lbWl0KG51bGwpO1xuICAgICAgKiB9XG4gICAgICAqIH1cbiAgICAgICogfVxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBUaGUgZXZlbnRzIHBheWxvYWQgY2FuIGJlIGFjY2Vzc2VkIGJ5IHRoZSBwYXJhbWV0ZXIgYCRldmVudGAgb24gdGhlIGNvbXBvbmVudHMgb3V0cHV0IGV2ZW50XG4gICAgICAqIGhhbmRsZXI6XG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIDx6aXBweSAob3Blbik9XCJvbk9wZW4oJGV2ZW50KVwiIChjbG9zZSk9XCJvbkNsb3NlKCRldmVudClcIj48L3ppcHB5PlxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBVc2VzIFJ4Lk9ic2VydmFibGUgYnV0IHByb3ZpZGVzIGFuIGFkYXB0ZXIgdG8gbWFrZSBpdCB3b3JrIGFzIHNwZWNpZmllZCBoZXJlOlxuICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vamh1c2Fpbi9vYnNlcnZhYmxlLXNwZWNcbiAgICAgICogKlxuICAgICAgKiBPbmNlIGEgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBzcGVjIGlzIGF2YWlsYWJsZSwgc3dpdGNoIHRvIGl0LlxuICAgICAqL1xuICAgIHZhciBFdmVudEVtaXR0ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNShFdmVudEVtaXR0ZXIsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBbRXZlbnRFbWl0dGVyXSwgd2hpY2ggZGVwZW5kaW5nIG9uIFtpc0FzeW5jXSxcbiAgICAgICAgICAqIGRlbGl2ZXJzIGV2ZW50cyBzeW5jaHJvbm91c2x5IG9yIGFzeW5jaHJvbm91c2x5LlxuICAgICAgICAgKiBAcGFyYW0gez89fSBpc0FzeW5jXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoaXNBc3luYykge1xuICAgICAgICAgICAgaWYgKGlzQXN5bmMgPT09IHZvaWQgMCkgeyBpc0FzeW5jID0gZmFsc2U7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fX2lzQXN5bmMgPSBpc0FzeW5jO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKHZhbHVlKSB7IF9zdXBlci5wcm90b3R5cGUubmV4dC5jYWxsKHRoaXMsIHZhbHVlKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGdlbmVyYXRvck9yTmV4dFxuICAgICAgICAgKiBAcGFyYW0gez89fSBlcnJvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBjb21wbGV0ZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoZ2VuZXJhdG9yT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHNjaGVkdWxlckZuO1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZXJyb3JGbiA9IGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIG51bGw7IH07XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb21wbGV0ZUZuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0b3JPck5leHQgJiYgdHlwZW9mIGdlbmVyYXRvck9yTmV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXJGbiA9IHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0Lm5leHQodmFsdWUpOyB9KTtcbiAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24gKHZhbHVlKSB7IGdlbmVyYXRvck9yTmV4dC5uZXh0KHZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdG9yT3JOZXh0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uIChlcnIpIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0b3JPck5leHQuZXJyb3IoZXJyKTsgfSk7IH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycikgeyBnZW5lcmF0b3JPck5leHQuZXJyb3IoZXJyKTsgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRvck9yTmV4dC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUZuID0gdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKCk7IH0pOyB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsgZ2VuZXJhdG9yT3JOZXh0LmNvbXBsZXRlKCk7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyRm4gPSB0aGlzLl9faXNBc3luYyA/IGZ1bmN0aW9uICh2YWx1ZSkgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdlbmVyYXRvck9yTmV4dCh2YWx1ZSk7IH0pOyB9IDpcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7IGdlbmVyYXRvck9yTmV4dCh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yRm4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2lzQXN5bmMgPyBmdW5jdGlvbiAoZXJyKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3IoZXJyKTsgfSk7IH0gOiBmdW5jdGlvbiAoZXJyKSB7IGVycm9yKGVycik7IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUZuID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19pc0FzeW5jID8gZnVuY3Rpb24gKCkgeyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBsZXRlKCk7IH0pOyB9IDogZnVuY3Rpb24gKCkgeyBjb21wbGV0ZSgpOyB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnN1YnNjcmliZS5jYWxsKHRoaXMsIHNjaGVkdWxlckZuLCBlcnJvckZuLCBjb21wbGV0ZUZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbiAgICB9KHJ4anNfU3ViamVjdC5TdWJqZWN0KSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ2ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyB2YWxpZCwgaS5lLiB0aGF0IG5vIGVycm9ycyBleGlzdCBpbiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gVkFMSUQgPSAnVkFMSUQnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgaW52YWxpZCwgaS5lLiB0aGF0IGFuIGVycm9yIGV4aXN0cyBpbiB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gSU5WQUxJRCA9ICdJTlZBTElEJztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHBlbmRpbmcsIGkuZS4gdGhhdCBhc3luYyB2YWxpZGF0aW9uIGlzIG9jY3VycmluZyBhbmRcbiAgICAgKiBlcnJvcnMgYXJlIG5vdCB5ZXQgYXZhaWxhYmxlIGZvciB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gUEVORElORyA9ICdQRU5ESU5HJztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGRpc2FibGVkLCBpLmUuIHRoYXQgdGhlIGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gYW5jZXN0b3JcbiAgICAgKiBjYWxjdWxhdGlvbnMgb2YgdmFsaWRpdHkgb3IgdmFsdWUuXG4gICAgICovXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gRElTQUJMRUQgPSAnRElTQUJMRUQnO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAqIEBwYXJhbSB7P30gcGF0aFxuICAgICAqIEBwYXJhbSB7P30gZGVsaW1pdGVyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZmluZChjb250cm9sLCBwYXRoLCBkZWxpbWl0ZXIpIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIShwYXRoIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICBwYXRoID0gKChwYXRoKSkuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCBpbnN0YW5jZW9mIEFycmF5ICYmIChwYXRoLmxlbmd0aCA9PT0gMCkpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuICgocGF0aCkpLnJlZHVjZShmdW5jdGlvbiAodiwgbmFtZSkge1xuICAgICAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5jb250cm9sc1tuYW1lXSB8fCBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5hdCgvKiogQHR5cGUgez99ICovIChuYW1lKSkgfHwgbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LCBjb250cm9sKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSByXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b09ic2VydmFibGUocikge1xuICAgICAgICByZXR1cm4gaXNQcm9taXNlKHIpID8gcnhqc19vYnNlcnZhYmxlX2Zyb21Qcm9taXNlLmZyb21Qcm9taXNlKHIpIDogcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWxpZGF0b3IpID8gY29tcG9zZVZhbGlkYXRvcnModmFsaWRhdG9yKSA6IHZhbGlkYXRvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhc3luY1ZhbGlkYXRvcikgPyBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9yKSA6IGFzeW5jVmFsaWRhdG9yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAge0BsaW5rIEZvcm1BcnJheX0uXG4gICAgICAqICpcbiAgICAgICogSXQgcHJvdmlkZXMgc29tZSBvZiB0aGUgc2hhcmVkIGJlaGF2aW9yIHRoYXQgYWxsIGNvbnRyb2xzIGFuZCBncm91cHMgb2YgY29udHJvbHMgaGF2ZSwgbGlrZVxuICAgICAgKiBydW5uaW5nIHZhbGlkYXRvcnMsIGNhbGN1bGF0aW5nIHN0YXR1cywgYW5kIHJlc2V0dGluZyBzdGF0ZS4gSXQgYWxzbyBkZWZpbmVzIHRoZSBwcm9wZXJ0aWVzXG4gICAgICAqIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBzdWItY2xhc3NlcywgbGlrZSBgdmFsdWVgLCBgdmFsaWRgLCBhbmQgYGRpcnR5YC4gSXQgc2hvdWxkbid0IGJlXG4gICAgICAqIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cbiAgICAgICogKlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHZhciBBYnN0cmFjdENvbnRyb2wgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gQWJzdHJhY3RDb250cm9sKHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgdGhpcy5hc3luY1ZhbGlkYXRvciA9IGFzeW5jVmFsaWRhdG9yO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAgICAgdGhpcy5fcHJpc3RpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICAgICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIFRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgVGhlIHBhcmVudCBjb250cm9sLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJzdGF0dXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgVGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLiBUaGVyZSBhcmUgZm91ciBwb3NzaWJsZVxuICAgICAgICAgICAgICAqIHZhbGlkYXRpb24gc3RhdHVzZXM6XG4gICAgICAgICAgICAgICogKlxuICAgICAgICAgICAgICAqICogKipWQUxJRCoqOiAgY29udHJvbCBoYXMgcGFzc2VkIGFsbCB2YWxpZGF0aW9uIGNoZWNrc1xuICAgICAgICAgICAgICAqICogKipJTlZBTElEKio6IGNvbnRyb2wgaGFzIGZhaWxlZCBhdCBsZWFzdCBvbmUgdmFsaWRhdGlvbiBjaGVja1xuICAgICAgICAgICAgICAqICogKipQRU5ESU5HKio6IGNvbnRyb2wgaXMgaW4gdGhlIG1pZHN0IG9mIGNvbmR1Y3RpbmcgYSB2YWxpZGF0aW9uIGNoZWNrXG4gICAgICAgICAgICAgICogKiAqKkRJU0FCTEVEKio6IGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3NcbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogVGhlc2Ugc3RhdHVzZXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSwgc28gYSBjb250cm9sIGNhbm5vdCBiZVxuICAgICAgICAgICAgICAqIGJvdGggdmFsaWQgQU5EIGludmFsaWQgb3IgaW52YWxpZCBBTkQgZGlzYWJsZWQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1czsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgdmFsaWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFZBTElEYC5cbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIHBhc3NlZCBhbGwgaXRzXG4gICAgICAgICAgICAgICogdmFsaWRhdGlvbiBjaGVja3MuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gVkFMSUQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJpbnZhbGlkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgaW52YWxpZGAgd2hlbiBpdHMgYHN0YXR1cyA9PT0gSU5WQUxJRGAuXG4gICAgICAgICAgICAgICogKlxuICAgICAgICAgICAgICAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgaGF2ZSBmYWlsZWRcbiAgICAgICAgICAgICAgKiBhdCBsZWFzdCBvbmUgb2YgaXRzIHZhbGlkYXRpb24gY2hlY2tzLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IElOVkFMSUQ7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZSwgXCJwZW5kaW5nXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgcGVuZGluZ2Agd2hlbiBpdHMgYHN0YXR1cyA9PT0gUEVORElOR2AuXG4gICAgICAgICAgICAgICogKlxuICAgICAgICAgICAgICAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgYmUgaW4gdGhlXG4gICAgICAgICAgICAgICogbWlkZGxlIG9mIGNvbmR1Y3RpbmcgYSB2YWxpZGF0aW9uIGNoZWNrLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT0gUEVORElORzsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgZGlzYWJsZWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IERJU0FCTEVEYC5cbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogRGlzYWJsZWQgY29udHJvbHMgYXJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICAgICAgICAgICAgICAqIGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGVpciBhbmNlc3RvclxuICAgICAgICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgPT09IERJU0FCTEVEOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZW5hYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBBIGNvbnRyb2wgaXMgYGVuYWJsZWRgIGFzIGxvbmcgYXMgaXRzIGBzdGF0dXMgIT09IERJU0FCTEVEYC5cbiAgICAgICAgICAgICAgKiAqXG4gICAgICAgICAgICAgICogSW4gb3RoZXIgd29yZHMsIGl0IGhhcyBhIHN0YXR1cyBvZiBgVkFMSURgLCBgSU5WQUxJRGAsIG9yXG4gICAgICAgICAgICAgICogYFBFTkRJTkdgLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXMgIT09IERJU0FCTEVEOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZXJyb3JzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIFJldHVybnMgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLiBJZiB0aGVyZVxuICAgICAgICAgICAgICAqIGFyZSBubyBlcnJvcnMsIGl0IHdpbGwgcmV0dXJuIG51bGwuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2Vycm9yczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInByaXN0aW5lXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWRcbiAgICAgICAgICAgICAgKiB0aGUgdmFsdWUgaW4gdGhlIFVJLlxuICAgICAgICAgICAgICAqICpcbiAgICAgICAgICAgICAgKiBOb3RlIHRoYXQgcHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgd2lsbFxuICAgICAgICAgICAgICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ByaXN0aW5lOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwiZGlydHlcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgQSBjb250cm9sIGlzIGBkaXJ0eWAgaWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICogaW4gdGhlIFVJLlxuICAgICAgICAgICAgICAqICpcbiAgICAgICAgICAgICAgKiBOb3RlIHRoYXQgcHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgd2lsbFxuICAgICAgICAgICAgICAqICpub3QqIG1hcmsgaXQgZGlydHkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLnByaXN0aW5lOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBBIGNvbnRyb2wgaXMgbWFya2VkIGB0b3VjaGVkYCBvbmNlIHRoZSB1c2VyIGhhcyB0cmlnZ2VyZWRcbiAgICAgICAgICAgICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdG91Y2hlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInVudG91Y2hlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqICBBIGNvbnRyb2wgaXMgYHVudG91Y2hlZGAgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgdHJpZ2dlcmVkXG4gICAgICAgICAgICAgICogYSBgYmx1cmAgZXZlbnQgb24gaXQuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICF0aGlzLl90b3VjaGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUsIFwidmFsdWVDaGFuZ2VzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIEVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNoYW5nZXMsIGluXG4gICAgICAgICAgICAgICogdGhlIFVJIG9yIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlQ2hhbmdlczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInN0YXR1c0NoYW5nZXNcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgRW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2xcbiAgICAgICAgICAgICAgKiBpcyByZS1jYWxjdWxhdGVkLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zdGF0dXNDaGFuZ2VzOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBTZXRzIHRoZSBzeW5jaHJvbm91cyB2YWxpZGF0b3JzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGlzIGNvbnRyb2wuICBDYWxsaW5nXG4gICAgICAgICAgKiB0aGlzIHdpbGwgb3ZlcndyaXRlIGFueSBleGlzdGluZyBzeW5jIHZhbGlkYXRvcnMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsaWRhdG9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnNldFZhbGlkYXRvcnMgPSBmdW5jdGlvbiAobmV3VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvciA9IGNvZXJjZVRvVmFsaWRhdG9yKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgU2V0cyB0aGUgYXN5bmMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiBDYWxsaW5nIHRoaXNcbiAgICAgICAgICAqIHdpbGwgb3ZlcndyaXRlIGFueSBleGlzdGluZyBhc3luYyB2YWxpZGF0b3JzLlxuICAgICAgICAgKiBAcGFyYW0gez99IG5ld1ZhbGlkYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRBc3luY1ZhbGlkYXRvcnMgPSBmdW5jdGlvbiAobmV3VmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFzeW5jVmFsaWRhdG9yID0gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIEVtcHRpZXMgb3V0IHRoZSBzeW5jIHZhbGlkYXRvciBsaXN0LlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5jbGVhclZhbGlkYXRvcnMgPSBmdW5jdGlvbiAoKSB7IHRoaXMudmFsaWRhdG9yID0gbnVsbDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFbXB0aWVzIG91dCB0aGUgYXN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmNsZWFyQXN5bmNWYWxpZGF0b3JzID0gZnVuY3Rpb24gKCkgeyB0aGlzLmFzeW5jVmFsaWRhdG9yID0gbnVsbDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBNYXJrcyB0aGUgY29udHJvbCBhcyBgdG91Y2hlZGAuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBUaGlzIHdpbGwgYWxzbyBtYXJrIGFsbCBkaXJlY3QgYW5jZXN0b3JzIGFzIGB0b3VjaGVkYCB0byBtYWludGFpblxuICAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVG91Y2hlZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIG9ubHlTZWxmID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5vbmx5U2VsZjtcbiAgICAgICAgICAgIHRoaXMuX3RvdWNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBNYXJrcyB0aGUgY29udHJvbCBhcyBgdW50b3VjaGVkYC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGl0IHdpbGwgYWxzbyBtYXJrIGFsbCBjaGlsZHJlbiBhcyBgdW50b3VjaGVkYFxuICAgICAgICAgICogdG8gbWFpbnRhaW4gdGhlIG1vZGVsLCBhbmQgcmUtY2FsY3VsYXRlIHRoZSBgdG91Y2hlZGAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAgICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzVW50b3VjaGVkID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fdG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wubWFya0FzVW50b3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgTWFya3MgdGhlIGNvbnRyb2wgYXMgYGRpcnR5YC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFRoaXMgd2lsbCBhbHNvIG1hcmsgYWxsIGRpcmVjdCBhbmNlc3RvcnMgYXMgYGRpcnR5YCB0byBtYWludGFpblxuICAgICAgICAgICogdGhlIG1vZGVsLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzRGlydHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQubWFya0FzRGlydHkoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgTWFya3MgdGhlIGNvbnRyb2wgYXMgYHByaXN0aW5lYC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGl0IHdpbGwgYWxzbyBtYXJrIGFsbCBjaGlsZHJlbiBhcyBgcHJpc3RpbmVgXG4gICAgICAgICAgKiB0byBtYWludGFpbiB0aGUgbW9kZWwsIGFuZCByZS1jYWxjdWxhdGUgdGhlIGBwcmlzdGluZWAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAgICAgICAgICAqIGNvbnRyb2xzLlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUubWFya0FzUHJpc3RpbmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5tYXJrQXNQcmlzdGluZSh7IG9ubHlTZWxmOiB0cnVlIH0pOyB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBNYXJrcyB0aGUgY29udHJvbCBhcyBgcGVuZGluZ2AuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5tYXJrQXNQZW5kaW5nID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgb25seVNlbGYgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLm9ubHlTZWxmO1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc1BlbmRpbmcoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgRGlzYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAgICAgICAgICAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGRpc2FibGVkIHRvIG1haW50YWluIHRoZSBtb2RlbC5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBESVNBQkxFRDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ycyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNvbnRyb2wpIHsgY29udHJvbC5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChlbWl0RXZlbnQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2VzLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKHRydWUpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBFbmFibGVzIHRoZSBjb250cm9sLiBUaGlzIG1lYW5zIHRoZSBjb250cm9sIHdpbGwgYmUgaW5jbHVkZWQgaW4gdmFsaWRhdGlvbiBjaGVja3MgYW5kXG4gICAgICAgICAgKiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIGl0cyBwYXJlbnQuIEl0cyBzdGF0dXMgaXMgcmUtY2FsY3VsYXRlZCBiYXNlZCBvbiBpdHMgdmFsdWUgYW5kXG4gICAgICAgICAgKiBpdHMgdmFsaWRhdG9ycy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZW5hYmxlZC5cbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIG9ubHlTZWxmID0gX2Iub25seVNlbGYsIGVtaXRFdmVudCA9IF9iLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFZBTElEO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IGNvbnRyb2wuZW5hYmxlKHsgb25seVNlbGY6IHRydWUgfSk7IH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmKTtcbiAgICAgICAgICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaChmdW5jdGlvbiAoY2hhbmdlRm4pIHsgcmV0dXJuIGNoYW5nZUZuKGZhbHNlKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG9ubHlTZWxmXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVBbmNlc3RvcnMgPSBmdW5jdGlvbiAob25seVNlbGYpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5zZXRQYXJlbnQgPSBmdW5jdGlvbiAocGFyZW50KSB7IHRoaXMuX3BhcmVudCA9IHBhcmVudDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IG9wdGlvbnNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUucGF0Y2hWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJlc2V0cyB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmUtY2FsY3VsYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogQnkgZGVmYXVsdCwgaXQgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIGl0cyBhbmNlc3RvcnMuXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5pdGlhbFN0YXR1cygpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcnMgPSB0aGlzLl9ydW5WYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLl9zdGF0dXMgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVuQXN5bmNWYWxpZGF0b3IoZW1pdEV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcy5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18wXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl91cGRhdGVUcmVlVmFsaWRpdHkgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBlbWl0RXZlbnQgPSAoX2EgPT09IHZvaWQgMCA/IHsgZW1pdEV2ZW50OiB0cnVlIH0gOiBfYSkuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjdHJsKSB7IHJldHVybiBjdHJsLl91cGRhdGVUcmVlVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTsgfSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fc2V0SW5pdGlhbFN0YXR1cyA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fc3RhdHVzID0gdGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpID8gRElTQUJMRUQgOiBWQUxJRDsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9ydW5WYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IgPyB0aGlzLnZhbGlkYXRvcih0aGlzKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGVtaXRFdmVudFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fcnVuQXN5bmNWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0dXMgPSBQRU5ESU5HO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gb2JzID0gdG9PYnNlcnZhYmxlKHRoaXMuYXN5bmNWYWxpZGF0b3IodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIG9icy5zdWJzY3JpYmUoeyBuZXh0OiBmdW5jdGlvbiAocmVzKSB7IHJldHVybiBfdGhpcy5zZXRFcnJvcnMocmVzLCB7IGVtaXRFdmVudDogZW1pdEV2ZW50IH0pOyB9IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgZXJyb3JzIG9uIGEgZm9ybSBjb250cm9sLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogVGhpcyBpcyB1c2VkIHdoZW4gdmFsaWRhdGlvbnMgYXJlIHJ1biBtYW51YWxseSBieSB0aGUgdXNlciwgcmF0aGVyIHRoYW4gYXV0b21hdGljYWxseS5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIENhbGxpbmcgYHNldEVycm9yc2Agd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woXCJzb21lTG9naW5cIik7XG4gICAgICAgICAgKiBsb2dpbi5zZXRFcnJvcnMoe1xuICAgICAgICAgICogXCJub3RVbmlxdWVcIjogdHJ1ZVxuICAgICAgICAgICogfSk7XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xuICAgICAgICAgICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7XCJub3RVbmlxdWVcIjogdHJ1ZX0pO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogbG9naW4uc2V0VmFsdWUoXCJzb21lT3RoZXJMb2dpblwiKTtcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yc1xuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuc2V0RXJyb3JzID0gZnVuY3Rpb24gKGVycm9ycywgX2EpIHtcbiAgICAgICAgICAgIHZhciBlbWl0RXZlbnQgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLmVtaXRFdmVudDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCAhPT0gZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJldHJpZXZlcyBhIGNoaWxkIGNvbnRyb2wgZ2l2ZW4gdGhlIGNvbnRyb2wncyBuYW1lIG9yIHBhdGguXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBQYXRocyBjYW4gYmUgcGFzc2VkIGluIGFzIGFuIGFycmF5IG9yIGEgc3RyaW5nIGRlbGltaXRlZCBieSBhIGRvdC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFRvIGdldCBhIGNvbnRyb2wgbmVzdGVkIHdpdGhpbiBhIGBwZXJzb25gIHN1Yi1ncm91cDpcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICogYHRoaXMuZm9ybS5nZXQoJ3BlcnNvbi5uYW1lJyk7YFxuICAgICAgICAgICogKlxuICAgICAgICAgICogLU9SLVxuICAgICAgICAgICogKlxuICAgICAgICAgICogKiBgdGhpcy5mb3JtLmdldChbJ3BlcnNvbicsICduYW1lJ10pO2BcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBfZmluZCh0aGlzLCBwYXRoLCAnLicpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBwYXRoIGhhcyB0aGUgZXJyb3Igc3BlY2lmaWVkLiBPdGhlcndpc2VcbiAgICAgICAgICAqIHJldHVybnMgbnVsbCBvciB1bmRlZmluZWQuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBJZiBubyBwYXRoIGlzIGdpdmVuLCBpdCBjaGVja3MgZm9yIHRoZSBlcnJvciBvbiB0aGUgcHJlc2VudCBjb250cm9sLlxuICAgICAgICAgKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBwYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLmdldEVycm9yID0gZnVuY3Rpb24gKGVycm9yQ29kZSwgcGF0aCkge1xuICAgICAgICAgICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbCA9IHBhdGggPyB0aGlzLmdldChwYXRoKSA6IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbCAmJiBjb250cm9sLl9lcnJvcnMgPyBjb250cm9sLl9lcnJvcnNbZXJyb3JDb2RlXSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICAgICAgICAgICogcmV0dXJucyBmYWxzZS5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuaGFzRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JDb2RlLCBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBudWxsOyB9XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmdldEVycm9yKGVycm9yQ29kZSwgcGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgUmV0cmlldmVzIHRoZSB0b3AtbGV2ZWwgYW5jZXN0b3Igb2YgdGhpcyBjb250cm9sLlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8geCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHguX3BhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB4ID0geC5fcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlbWl0RXZlbnRcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzID0gZnVuY3Rpb24gKGVtaXRFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XG4gICAgICAgICAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdHVzQ2hhbmdlcy5lbWl0KHRoaXMuX3N0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2luaXRPYnNlcnZhYmxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fY2FsY3VsYXRlU3RhdHVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gRElTQUJMRUQ7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3JzKVxuICAgICAgICAgICAgICAgIHJldHVybiBJTlZBTElEO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhQRU5ESU5HKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gUEVORElORztcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoSU5WQUxJRCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIElOVkFMSUQ7XG4gICAgICAgICAgICByZXR1cm4gVkFMSUQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gY2JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9scyA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gc3RhdHVzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9sc0hhdmVTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXM7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzRGlydHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuZGlydHk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX2FueUNvbnRyb2xzVG91Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scyhmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC50b3VjaGVkOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fdXBkYXRlUHJpc3RpbmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl9wcmlzdGluZSA9ICF0aGlzLl9hbnlDb250cm9sc0RpcnR5KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzBcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3VwZGF0ZVRvdWNoZWQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvbmx5U2VsZiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkub25seVNlbGY7XG4gICAgICAgICAgICB0aGlzLl90b3VjaGVkID0gdGhpcy5fYW55Q29udHJvbHNUb3VjaGVkKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9pc0JveGVkVmFsdWUgPSBmdW5jdGlvbiAoZm9ybVN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGZvcm1TdGF0ZSA9PT0gJ29iamVjdCcgJiYgZm9ybVN0YXRlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlKS5sZW5ndGggPT09IDIgJiYgJ3ZhbHVlJyBpbiBmb3JtU3RhdGUgJiYgJ2Rpc2FibGVkJyBpbiBmb3JtU3RhdGU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBBYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgcmV0dXJuIEFic3RyYWN0Q29udHJvbDtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqIEl0IGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIG9mIEFuZ3VsYXIgZm9ybXMsIGFsb25nIHdpdGhcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0gYW5kIHtAbGluayBGb3JtQXJyYXl9LlxuICAgICAgKiAqXG4gICAgICAqICpcbiAgICAgICogV2hlbiBpbnN0YW50aWF0aW5nIGEge0BsaW5rIEZvcm1Db250cm9sfSwgeW91IGNhbiBwYXNzIGluIGFuIGluaXRpYWwgdmFsdWUgYXMgdGhlXG4gICAgICAqIGZpcnN0IGFyZ3VtZW50LiBFeGFtcGxlOlxuICAgICAgKiAqXG4gICAgICAqIGBgYHRzXG4gICAgICAqIGNvbnN0IGN0cmwgPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWUgdmFsdWUnKTtcbiAgICAgICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnc29tZSB2YWx1ZSdcbiAgICAgICogKmBgYFxuICAgICAgKiAqXG4gICAgICAqIFlvdSBjYW4gYWxzbyBpbml0aWFsaXplIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIHN0YXRlIG9iamVjdCBvbiBpbnN0YW50aWF0aW9uLFxuICAgICAgKiB3aGljaCBpbmNsdWRlcyBib3RoIHRoZSB2YWx1ZSBhbmQgd2hldGhlciBvciBub3QgdGhlIGNvbnRyb2wgaXMgZGlzYWJsZWQuXG4gICAgICAqIFlvdSBjYW4ndCB1c2UgdGhlIHZhbHVlIGtleSB3aXRob3V0IHRoZSBkaXNhYmxlZCBrZXk7IGJvdGggYXJlIHJlcXVpcmVkXG4gICAgICAqIHRvIHVzZSB0aGlzIHdheSBvZiBpbml0aWFsaXphdGlvbi5cbiAgICAgICogKlxuICAgICAgKiBgYGB0c1xuICAgICAgKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlfSk7XG4gICAgICAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJ24vYSdcbiAgICAgICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdESVNBQkxFRCdcbiAgICAgICogYGBgXG4gICAgICAqICpcbiAgICAgICogVG8gaW5jbHVkZSBhIHN5bmMgdmFsaWRhdG9yIChvciBhbiBhcnJheSBvZiBzeW5jIHZhbGlkYXRvcnMpIHdpdGggdGhlIGNvbnRyb2wsXG4gICAgICAqIHBhc3MgaXQgaW4gYXMgdGhlIHNlY29uZCBhcmd1bWVudC4gQXN5bmMgdmFsaWRhdG9ycyBhcmUgYWxzbyBzdXBwb3J0ZWQsIGJ1dFxuICAgICAgKiBoYXZlIHRvIGJlIHBhc3NlZCBpbiBzZXBhcmF0ZWx5IGFzIHRoZSB0aGlyZCBhcmcuXG4gICAgICAqICpcbiAgICAgICogYGBgdHNcbiAgICAgICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJydcbiAgICAgICogY29uc29sZS5sb2coY3RybC5zdGF0dXMpOyAgIC8vICdJTlZBTElEJ1xuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBTZWUgaXRzIHN1cGVyY2xhc3MsIHtAbGluayBBYnN0cmFjdENvbnRyb2x9LCBmb3IgbW9yZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgRm9ybUNvbnRyb2wgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNihGb3JtQ29udHJvbCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGZvcm1TdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAgICAgICAgICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgaWYgKGZvcm1TdGF0ZSA9PT0gdm9pZCAwKSB7IGZvcm1TdGF0ZSA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgPT09IHZvaWQgMCkgeyB2YWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoYXN5bmNWYWxpZGF0b3IgPT09IHZvaWQgMCkgeyBhc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvciksIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3IpKTtcbiAgICAgICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogIFNldCB0aGUgdmFsdWUgb2YgdGhlIGZvcm0gY29udHJvbCB0byBgdmFsdWVgLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgYG9ubHlTZWxmYCBpcyBgdHJ1ZWAsIHRoaXMgY2hhbmdlIHdpbGwgb25seSBhZmZlY3QgdGhlIHZhbGlkYXRpb24gb2YgdGhpcyBgRm9ybUNvbnRyb2xgXG4gICAgICAgICAgKiBhbmQgbm90IGl0cyBwYXJlbnQgY29tcG9uZW50LiBUaGlzIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSWYgYGVtaXRFdmVudGAgaXMgYHRydWVgLCB0aGlzXG4gICAgICAgICAgKiBjaGFuZ2Ugd2lsbCBjYXVzZSBhIGB2YWx1ZUNoYW5nZXNgIGV2ZW50IG9uIHRoZSBgRm9ybUNvbnRyb2xgIHRvIGJlIGVtaXR0ZWQuIFRoaXMgZGVmYXVsdHNcbiAgICAgICAgICAqIHRvIHRydWUgKGFzIGl0IGZhbGxzIHRocm91Z2ggdG8gYHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHlgKS5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIGBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VgIGlzIGB0cnVlYCwgdGhlIHZpZXcgd2lsbCBiZSBub3RpZmllZCBhYm91dCB0aGUgbmV3IHZhbHVlXG4gICAgICAgICAgKiB2aWEgYW4gYG9uQ2hhbmdlYCBldmVudC4gVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYCBpcyBub3RcbiAgICAgICAgICAqIHNwZWNpZmllZC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIGBlbWl0Vmlld1RvTW9kZWxDaGFuZ2VgIGlzIGB0cnVlYCwgYW4gbmdNb2RlbENoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIHRvIHVwZGF0ZSB0aGVcbiAgICAgICAgICAqIG1vZGVsLiAgVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYCBpcyBub3Qgc3BlY2lmaWVkLlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQsIGVtaXRNb2RlbFRvVmlld0NoYW5nZSA9IF9iLmVtaXRNb2RlbFRvVmlld0NoYW5nZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlID0gX2IuZW1pdFZpZXdUb01vZGVsQ2hhbmdlO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZS5sZW5ndGggJiYgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZUZuKSB7IHJldHVybiBjaGFuZ2VGbihfdGhpcy5fdmFsdWUsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZSAhPT0gZmFsc2UpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgYSBjb250cm9sLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogVGhpcyBmdW5jdGlvbiBpcyBmdW5jdGlvbmFsbHkgdGhlIHNhbWUgYXMge0BsaW5rIEZvcm1Db250cm9sLnNldFZhbHVlfSBhdCB0aGlzIGxldmVsLlxuICAgICAgICAgICogSXQgZXhpc3RzIGZvciBzeW1tZXRyeSB3aXRoIHtAbGluayBGb3JtR3JvdXAucGF0Y2hWYWx1ZX0gb24gYEZvcm1Hcm91cHNgIGFuZCBgRm9ybUFycmF5c2AsXG4gICAgICAgICAgKiB3aGVyZSBpdCBkb2VzIGJlaGF2ZSBkaWZmZXJlbnRseS5cbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucGF0Y2hWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJlc2V0cyB0aGUgZm9ybSBjb250cm9sLiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAqIGl0IGlzIG1hcmtlZCBhcyBgcHJpc3RpbmVgXG4gICAgICAgICAgKiAqIGl0IGlzIG1hcmtlZCBhcyBgdW50b3VjaGVkYFxuICAgICAgICAgICogKiB2YWx1ZSBpcyBzZXQgdG8gbnVsbFxuICAgICAgICAgICogKlxuICAgICAgICAgICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIHRocm91Z2ggYSBzdGFuZGFsb25lXG4gICAgICAgICAgKiB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXRlXG4gICAgICAgICAgKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogRXg6XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGB0c1xuICAgICAgICAgICogdGhpcy5jb250cm9sLnJlc2V0KCdOYW5jeScpO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnZhbHVlKTsgIC8vICdOYW5jeSdcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogKlxuICAgICAgICAgICogT1JcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogdGhpcy5jb250cm9sLnJlc2V0KHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9KTtcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez89fSBmb3JtU3RhdGVcbiAgICAgICAgICogQHBhcmFtIHs/PX0gX18xXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoZm9ybVN0YXRlLCBfYSkge1xuICAgICAgICAgICAgaWYgKGZvcm1TdGF0ZSA9PT0gdm9pZCAwKSB7IGZvcm1TdGF0ZSA9IG51bGw7IH1cbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB0aGlzLl9hcHBseUZvcm1TdGF0ZShmb3JtU3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5tYXJrQXNQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIHRoaXMubWFya0FzVW50b3VjaGVkKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSwgeyBvbmx5U2VsZjogb25seVNlbGYsIGVtaXRFdmVudDogZW1pdEV2ZW50IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9hbnlDb250cm9scyA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgY2hhbmdlIGV2ZW50cy5cbiAgICAgICAgICogQHBhcmFtIHs/fSBmblxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLnJlZ2lzdGVyT25DaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UucHVzaChmbik7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9jbGVhckNoYW5nZUZucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlID0gW107XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgZGlzYWJsZWQgZXZlbnRzLlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlLnB1c2goZm4pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjYlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2wucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbC5wcm90b3R5cGUuX2FwcGx5Rm9ybVN0YXRlID0gZnVuY3Rpb24gKGZvcm1TdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQm94ZWRWYWx1ZShmb3JtU3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtU3RhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlLmRpc2FibGVkID8gdGhpcy5kaXNhYmxlKHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSkgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtQ29udHJvbDtcbiAgICB9KEFic3RyYWN0Q29udHJvbCkpO1xuICAgIC8qKlxuICAgICAqICBpbnN0YW5jZXMuXG4gICAgICAqICpcbiAgICAgICogQSBgRm9ybUdyb3VwYCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7QGxpbmsgRm9ybUNvbnRyb2x9IGludG8gb25lIG9iamVjdCxcbiAgICAgICogd2l0aCBlYWNoIGNvbnRyb2wgbmFtZSBhcyB0aGUga2V5LiAgSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXNlc1xuICAgICAgKiBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2YgdGhlIGNvbnRyb2xzIGluIGEgZ3JvdXAgaXMgaW52YWxpZCwgdGhlIGVudGlyZVxuICAgICAgKiBncm91cCBiZWNvbWVzIGludmFsaWQuXG4gICAgICAqICpcbiAgICAgICogYEZvcm1Hcm91cGAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcbiAgICAgICogYWxvbmcgd2l0aCB7QGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7QGxpbmsgRm9ybUFycmF5fS5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtAbGluayBGb3JtR3JvdXB9LCBwYXNzIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZCBjb250cm9scyBhcyB0aGUgZmlyc3RcbiAgICAgICogYXJndW1lbnQuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgd2lsbCBiZSB0aGUgbmFtZSB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICogZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gICAgICAqIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICAgICAgKiB9KTtcbiAgICAgICogKlxuICAgICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q7ICdEcmV3J31cbiAgICAgICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAgKiBZb3UgY2FuIGFsc28gaW5jbHVkZSBncm91cC1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBncm91cC1sZXZlbCBhc3luY1xuICAgICAgKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAgICAgICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIGBgYFxuICAgICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAqIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgICogcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgICogfSwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcik7XG4gICAgICAqICpcbiAgICAgICogKlxuICAgICAgKiBmdW5jdGlvbiBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKGc6IEZvcm1Hcm91cCkge1xuICAgICAgKiByZXR1cm4gZy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgPT09IGcuZ2V0KCdwYXNzd29yZENvbmZpcm0nKS52YWx1ZVxuICAgICAgKiA/IG51bGwgOiB7J21pc21hdGNoJzogdHJ1ZX07XG4gICAgICAqIH1cbiAgICAgICogYGBgXG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBGb3JtR3JvdXAgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNihGb3JtR3JvdXAsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUdyb3VwKGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yID09PSB2b2lkIDApIHsgdmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9yID09PSB2b2lkIDApIHsgYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcbiAgICAgICAgICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZWdpc3RlcnMgYSBjb250cm9sIHdpdGggdGhlIGdyb3VwJ3MgbGlzdCBvZiBjb250cm9scy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90IHVwZGF0ZSB2YWx1ZSBvciB2YWxpZGl0eSBvZiB0aGUgY29udHJvbCwgc28gZm9yXG4gICAgICAgICAgKiBtb3N0IGNhc2VzIHlvdSdsbCB3YW50IHRvIHVzZSB7QGxpbmsgRm9ybUdyb3VwLmFkZENvbnRyb2x9IGluc3RlYWQuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVnaXN0ZXJDb250cm9sID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG4gICAgICAgICAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBBZGQgYSBjb250cm9sIHRvIHRoaXMgZ3JvdXAuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChuYW1lLCBjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoaXMgZ3JvdXAuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICBkZWxldGUgKHRoaXMuY29udHJvbHNbbmFtZV0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuc2V0Q29udHJvbCA9IGZ1bmN0aW9uIChuYW1lLCBjb250cm9sKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSlcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgZGVsZXRlICh0aGlzLmNvbnRyb2xzW25hbWVdKTtcbiAgICAgICAgICAgIGlmIChjb250cm9sKVxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBDaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGVuYWJsZWQgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBncm91cC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIEl0IHdpbGwgcmV0dXJuIGZhbHNlIGZvciBkaXNhYmxlZCBjb250cm9scy4gSWYgeW91J2QgbGlrZSB0byBjaGVjayBmb3JcbiAgICAgICAgICAqIGV4aXN0ZW5jZSBpbiB0aGUgZ3JvdXAgb25seSwgdXNlIHtAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBpbnN0ZWFkLlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xOYW1lXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGNvbnRyb2xOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sTmFtZSkgJiYgdGhpcy5jb250cm9sc1tjb250cm9sTmFtZV0uZW5hYmxlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUge0BsaW5rIEZvcm1Hcm91cH0uIEl0IGFjY2VwdHMgYW4gb2JqZWN0IHRoYXQgbWF0Y2hlc1xuICAgICAgICAgICogdGhlIHN0cnVjdHVyZSBvZiB0aGUgZ3JvdXAsIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogVGhpcyBtZXRob2QgcGVyZm9ybXMgc3RyaWN0IGNoZWNrcywgc28gaXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgdHJ5XG4gICAgICAgICAgKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gICAgICAgICAgKiB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgKiBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAgKiBsYXN0OiBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAgICAgICogfSk7XG4gICAgICAgICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBmb3JtLnNldFZhbHVlKHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfSk7XG4gICAgICAgICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J31cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb250cm9sc1tuYW1lXS5zZXRWYWx1ZSh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB3aXRoIGNvbnRyb2xcbiAgICAgICAgICAqIG5hbWVzIGFzIGtleXMsIGFuZCB3aWxsIGRvIGl0cyBiZXN0IHRvIG1hdGNoIHRoZSB2YWx1ZXMgdG8gdGhlIGNvcnJlY3QgY29udHJvbHNcbiAgICAgICAgICAqIGluIHRoZSBncm91cC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIEl0IGFjY2VwdHMgYm90aCBzdXBlci1zZXRzIGFuZCBzdWItc2V0cyBvZiB0aGUgZ3JvdXAgd2l0aG91dCB0aHJvd2luZyBhbiBlcnJvci5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGBcbiAgICAgICAgICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAqIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICAqIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAgKiB9KTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGZvcm0ucGF0Y2hWYWx1ZSh7Zmlyc3Q6ICdOYW5jeSd9KTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogbnVsbH1cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250cm9sc1tuYW1lXS5wYXRjaFZhbHVlKHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVzZXRzIHRoZSB7QGxpbmsgRm9ybUdyb3VwfS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICAgICAgICAgICogKlxuICAgICAgICAgICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWBcbiAgICAgICAgICAqICogVGhlIGdyb3VwIGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgdW50b3VjaGVkYFxuICAgICAgICAgICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhIG1hcCBvZiBzdGF0ZXNcbiAgICAgICAgICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgZm9ybSwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuIFRoZSBzdGF0ZVxuICAgICAgICAgICogY2FuIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkXG4gICAgICAgICAgKiBzdGF0dXMuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgdHNcbiAgICAgICAgICAqIHRoaXMuZm9ybS5yZXNldCh7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9KTtcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XG4gICAgICAgICAgKiBgYGBcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIC0gT1IgLVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgXG4gICAgICAgICAgKiB0aGlzLmZvcm0ucmVzZXQoe1xuICAgICAgICAgICogZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAgKiBsYXN0OiAnbGFzdCdcbiAgICAgICAgICAqIH0pO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cbiAgICAgICAgICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jykuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IHt9OyB9XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5yZXNldCh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVQcmlzdGluZSh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRvdWNoZWQoeyBvbmx5U2VsZjogb25seVNlbGYgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUge0BsaW5rIEZvcm1Hcm91cH0sIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBJZiB5b3UnZCBsaWtlIHRvIGluY2x1ZGUgYWxsIHZhbHVlcyByZWdhcmRsZXNzIG9mIGRpc2FibGVkIHN0YXR1cywgdXNlIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyB0aGUgYmVzdCB3YXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZiB0aGUgZ3JvdXAuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLmdldFJhd1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZHVjZUNoaWxkcmVuKHt9LCBmdW5jdGlvbiAoYWNjLCBjb250cm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbC52YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3Rocm93SWZDb250cm9sTWlzc2luZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZ3JvdXAgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXFxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cXG4gICAgICBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgd2l0aCBuYW1lOiBcIiArIG5hbWUgKyBcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNiXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IHJldHVybiBjYihfdGhpcy5jb250cm9sc1trXSwgayk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3NldFVwQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5zZXRQYXJlbnQoX3RoaXMpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKF90aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3ZhbHVlID0gdGhpcy5fcmVkdWNlVmFsdWUoKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9hbnlDb250cm9scyA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlcyB8fCAoX3RoaXMuY29udGFpbnMobmFtZSkgJiYgY29uZGl0aW9uKGNvbnRyb2wpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9yZWR1Y2VWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oe30sIGZ1bmN0aW9uIChhY2MsIGNvbnRyb2wsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5lbmFibGVkIHx8IF90aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY1tuYW1lXSA9IGNvbnRyb2wudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5pdFZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cC5wcm90b3R5cGUuX3JlZHVjZUNoaWxkcmVuID0gZnVuY3Rpb24gKGluaXRWYWx1ZSwgZm4pIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlcyA9IGluaXRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkgeyByZXMgPSBmbihyZXMsIGNvbnRyb2wsIG5hbWUpOyB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwLnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udHJvbE5hbWUgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbY29udHJvbE5hbWVdLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGggPiAwIHx8IHRoaXMuZGlzYWJsZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXAucHJvdG90eXBlLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbiAoY29udHJvbCwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3VwcGx5IGEgdmFsdWUgZm9yIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICdcIiArIG5hbWUgKyBcIicuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwO1xuICAgIH0oQWJzdHJhY3RDb250cm9sKSk7XG4gICAgLyoqXG4gICAgICogIGluc3RhbmNlcy5cbiAgICAgICogKlxuICAgICAgKiBBIGBGb3JtQXJyYXlgIGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNoaWxkIHtAbGluayBGb3JtQ29udHJvbH0gaW50byBhbiBhcnJheS5cbiAgICAgICogSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXNlcyBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2ZcbiAgICAgICogdGhlIGNvbnRyb2xzIGluIGEgYEZvcm1BcnJheWAgaXMgaW52YWxpZCwgdGhlIGVudGlyZSBhcnJheSBiZWNvbWVzIGludmFsaWQuXG4gICAgICAqICpcbiAgICAgICogYEZvcm1BcnJheWAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcbiAgICAgICogYWxvbmcgd2l0aCB7QGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7QGxpbmsgRm9ybUdyb3VwfS5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIFdoZW4gaW5zdGFudGlhdGluZyBhIHtAbGluayBGb3JtQXJyYXl9LCBwYXNzIGluIGFuIGFycmF5IG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICAgICAgKiBhcmd1bWVudC5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIGBgYFxuICAgICAgKiBjb25zdCBhcnIgPSBuZXcgRm9ybUFycmF5KFtcbiAgICAgICogbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAgICAgICogbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gICAgICAqIF0pO1xuICAgICAgKiAqXG4gICAgICAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAgICAgICogY29uc29sZS5sb2coYXJyLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gICAgICAqIGBgYFxuICAgICAgKiAqXG4gICAgICAqIFlvdSBjYW4gYWxzbyBpbmNsdWRlIGFycmF5LWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGFycmF5LWxldmVsIGFzeW5jXG4gICAgICAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICAgICAgKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBBZGRpbmcgb3IgcmVtb3ZpbmcgY29udHJvbHNcbiAgICAgICogKlxuICAgICAgKiBUbyBjaGFuZ2UgdGhlIGNvbnRyb2xzIGluIHRoZSBhcnJheSwgdXNlIHRoZSBgcHVzaGAsIGBpbnNlcnRgLCBvciBgcmVtb3ZlQXRgIG1ldGhvZHNcbiAgICAgICogaW4gYEZvcm1BcnJheWAgaXRzZWxmLiBUaGVzZSBtZXRob2RzIGVuc3VyZSB0aGUgY29udHJvbHMgYXJlIHByb3Blcmx5IHRyYWNrZWQgaW4gdGhlXG4gICAgICAqIGZvcm0ncyBoaWVyYXJjaHkuIERvIG5vdCBtb2RpZnkgdGhlIGFycmF5IG9mIGBBYnN0cmFjdENvbnRyb2xgcyB1c2VkIHRvIGluc3RhbnRpYXRlXG4gICAgICAqIHRoZSBgRm9ybUFycmF5YCBkaXJlY3RseSwgYXMgdGhhdCB3aWxsIHJlc3VsdCBpbiBzdHJhbmdlIGFuZCB1bmV4cGVjdGVkIGJlaGF2aW9yIHN1Y2hcbiAgICAgICogYXMgYnJva2VuIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBGb3JtQXJyYXkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNihGb3JtQXJyYXksIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xzXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUFycmF5KGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yID09PSB2b2lkIDApIHsgdmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9yID09PSB2b2lkIDApIHsgYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcbiAgICAgICAgICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgICAgICAgICAgdGhpcy5fc2V0VXBDb250cm9scygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqICBHZXQgdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5hdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleF07IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgSW5zZXJ0IGEgbmV3IHtAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjb250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIEluc2VydCBhIG5ldyB7QGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gICAgICAgICAqIEBwYXJhbSB7P30gaW5kZXhcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgY29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDAsIGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBSZW1vdmUgdGhlIGNvbnRyb2wgYXQgdGhlIGdpdmVuIGBpbmRleGAgaW4gdGhlIGFycmF5LlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLnJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sc1tpbmRleF0uX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cbiAgICAgICAgICogQHBhcmFtIHs/fSBpbmRleFxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuc2V0Q29udHJvbCA9IGZ1bmN0aW9uIChpbmRleCwgY29udHJvbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZShmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMCwgY29udHJvbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheS5wcm90b3R5cGUsIFwibGVuZ3RoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogIExlbmd0aCBvZiB0aGUgY29udHJvbCBhcnJheS5cbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5jb250cm9scy5sZW5ndGg7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSB7QGxpbmsgRm9ybUFycmF5fS4gSXQgYWNjZXB0cyBhbiBhcnJheSB0aGF0IG1hdGNoZXNcbiAgICAgICAgICAqIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyBzdHJpY3QgY2hlY2tzLCBzbyBpdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSB0cnlcbiAgICAgICAgICAqIHRvIHNldCB0aGUgdmFsdWUgb2YgYSBjb250cm9sIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkZSB0aGVcbiAgICAgICAgICAqIHZhbHVlIG9mIGEgY29udHJvbC5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGBcbiAgICAgICAgICAqIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICAgICAgICAgICogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAgKiBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAgICAgICogXSk7XG4gICAgICAgICAgKiBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFtudWxsLCBudWxsXVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYXJyLnNldFZhbHVlKFsnTmFuY3knLCAnRHJldyddKTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgX2EpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKG5ld1ZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcoaW5kZXgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmF0KGluZGV4KS5zZXRWYWx1ZShuZXdWYWx1ZSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtAbGluayBGb3JtQXJyYXl9LiBJdCBhY2NlcHRzIGFuIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGVcbiAgICAgICAgICAqIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbCwgYW5kIHdpbGwgZG8gaXRzIGJlc3QgdG8gbWF0Y2ggdGhlIHZhbHVlcyB0byB0aGUgY29ycmVjdFxuICAgICAgICAgICogY29udHJvbHMgaW4gdGhlIGdyb3VwLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBhcnJheSB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gICAgICAgICAgKiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICAqIG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAgKiBdKTtcbiAgICAgICAgICAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gW251bGwsIG51bGxdXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBhcnIucGF0Y2hWYWx1ZShbJ05hbmN5J10pO1xuICAgICAgICAgICogY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgbnVsbF1cbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IF9fMVxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5wYXRjaFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBvbmx5U2VsZiA9IF9iLm9ubHlTZWxmLCBlbWl0RXZlbnQgPSBfYi5lbWl0RXZlbnQ7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChuZXdWYWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYXQoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmF0KGluZGV4KS5wYXRjaFZhbHVlKG5ld1ZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBvbmx5U2VsZiwgZW1pdEV2ZW50OiBlbWl0RXZlbnQgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgUmVzZXRzIHRoZSB7QGxpbmsgRm9ybUFycmF5fS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICAgICAgICAgICogKlxuICAgICAgICAgICogKiBUaGUgYXJyYXkgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWBcbiAgICAgICAgICAqICogVGhlIGFycmF5IGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgdW50b3VjaGVkYFxuICAgICAgICAgICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhbiBhcnJheSBvZiBzdGF0ZXNcbiAgICAgICAgICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLiBUaGUgc3RhdGUgY2FuIGJlIGEgc3RhbmRhbG9uZSB2YWx1ZVxuICAgICAgICAgICogb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGBgdHNcbiAgICAgICAgICAqIHRoaXMuYXJyLnJlc2V0KFsnbmFtZScsICdsYXN0IG5hbWUnXSk7XG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci52YWx1ZSk7ICAvLyBbJ25hbWUnLCAnbGFzdCBuYW1lJ11cbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgICogKlxuICAgICAgICAgICogLSBPUiAtXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBgYGBcbiAgICAgICAgICAqIHRoaXMuYXJyLnJlc2V0KFtcbiAgICAgICAgICAqIHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAgKiAnbGFzdCdcbiAgICAgICAgICAqIF0pO1xuICAgICAgICAgICogKlxuICAgICAgICAgICogY29uc29sZS5sb2codGhpcy5hcnIudmFsdWUpOyAgLy8gWyduYW1lJywgJ2xhc3QgbmFtZSddXG4gICAgICAgICAgKiBjb25zb2xlLmxvZyh0aGlzLmFyci5nZXQoMCkuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAgICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0gez89fSB2YWx1ZVxuICAgICAgICAgKiBAcGFyYW0gez89fSBfXzFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAodmFsdWUsIF9hKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkgeyB2YWx1ZSA9IFtdOyB9XG4gICAgICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgb25seVNlbGYgPSBfYi5vbmx5U2VsZiwgZW1pdEV2ZW50ID0gX2IuZW1pdEV2ZW50O1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wucmVzZXQodmFsdWVbaW5kZXhdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IG9ubHlTZWxmLCBlbWl0RXZlbnQ6IGVtaXRFdmVudCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByaXN0aW5lKHsgb25seVNlbGY6IG9ubHlTZWxmIH0pO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVG91Y2hlZCh7IG9ubHlTZWxmOiBvbmx5U2VsZiB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBUaGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZSBhcnJheSwgaW5jbHVkaW5nIGFueSBkaXNhYmxlZCBjb250cm9scy5cbiAgICAgICAgICAqICpcbiAgICAgICAgICAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gICAgICAgICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBhcnJheS5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuZ2V0UmF3VmFsdWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmNvbnRyb2xzLm1hcChmdW5jdGlvbiAoY29udHJvbCkgeyByZXR1cm4gY29udHJvbC52YWx1ZTsgfSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGluZGV4XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl90aHJvd0lmQ29udHJvbE1pc3NpbmcgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jb250cm9scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGFycmF5IHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxcbiAgICAgICAgeW91IG1heSB3YW50IHRvIGNoZWNrIG5leHQgdGljayAoZS5nLiB1c2Ugc2V0VGltZW91dCkuXFxuICAgICAgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmF0KGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIGZvcm0gY29udHJvbCBhdCBpbmRleCBcIiArIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2JcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2ZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sLCBpbmRleCkgeyBjYihjb250cm9sLCBpbmRleCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5jb250cm9scy5maWx0ZXIoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuZW5hYmxlZCB8fCBfdGhpcy5kaXNhYmxlZDsgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBjb250cm9sLnZhbHVlOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQXJyYXkucHJvdG90eXBlLl9hbnlDb250cm9scyA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLnNvbWUoZnVuY3Rpb24gKGNvbnRyb2wpIHsgcmV0dXJuIGNvbnRyb2wuZW5hYmxlZCAmJiBjb25kaXRpb24oY29udHJvbCk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX3NldFVwQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sKSB7IHJldHVybiBfdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1BcnJheS5wcm90b3R5cGUuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uIChjb250cm9sLCBpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBzdXBwbHkgYSB2YWx1ZSBmb3IgZm9ybSBjb250cm9sIGF0IGluZGV4OiBcIiArIGkgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fYWxsQ29udHJvbHNEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmNvbnRyb2xzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBjb250cm9sID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmVuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aCA+IDAgfHwgdGhpcy5kaXNhYmxlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5LnByb3RvdHlwZS5fcmVnaXN0ZXJDb250cm9sID0gZnVuY3Rpb24gKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xuICAgICAgICAgICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UodGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1BcnJheTtcbiAgICB9KEFic3RyYWN0Q29udHJvbCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkNCA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1EaXJlY3RpdmVQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ0Zvcm07IH0pXG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgLyoqXG4gICAgICogIHRvIHRyYWNrIGFnZ3JlZ2F0ZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cy5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIEFzIHNvb24gYXMgeW91IGltcG9ydCB0aGUgYEZvcm1zTW9kdWxlYCwgdGhpcyBkaXJlY3RpdmUgYmVjb21lcyBhY3RpdmUgYnkgZGVmYXVsdCBvblxuICAgICAgKiBhbGwgYDxmb3JtPmAgdGFncy4gIFlvdSBkb24ndCBuZWVkIHRvIGFkZCBhIHNwZWNpYWwgc2VsZWN0b3IuXG4gICAgICAqICpcbiAgICAgICogWW91IGNhbiBleHBvcnQgdGhlIGRpcmVjdGl2ZSBpbnRvIGEgbG9jYWwgdGVtcGxhdGUgdmFyaWFibGUgdXNpbmcgYG5nRm9ybWAgYXMgdGhlIGtleVxuICAgICAgKiAoZXg6IGAjbXlGb3JtPVwibmdGb3JtXCJgKS4gVGhpcyBpcyBvcHRpb25hbCwgYnV0IHVzZWZ1bC4gIE1hbnkgcHJvcGVydGllcyBmcm9tIHRoZSB1bmRlcmx5aW5nXG4gICAgICAqIHtAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIGFyZSBkdXBsaWNhdGVkIG9uIHRoZSBkaXJlY3RpdmUgaXRzZWxmLCBzbyBhIHJlZmVyZW5jZSB0byBpdFxuICAgICAgKiB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byB0aGUgYWdncmVnYXRlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0dXMgb2YgdGhlIGZvcm0sIGFzIHdlbGwgYXNcbiAgICAgICogdXNlciBpbnRlcmFjdGlvbiBwcm9wZXJ0aWVzIGxpa2UgYGRpcnR5YCBhbmQgYHRvdWNoZWRgLlxuICAgICAgKiAqXG4gICAgICAqIFRvIHJlZ2lzdGVyIGNoaWxkIGNvbnRyb2xzIHdpdGggdGhlIGZvcm0sIHlvdSdsbCB3YW50IHRvIHVzZSB7QGxpbmsgTmdNb2RlbH0gd2l0aCBhXG4gICAgICAqIGBuYW1lYCBhdHRyaWJ1dGUuICBZb3UgY2FuIGFsc28gdXNlIHtAbGluayBOZ01vZGVsR3JvdXB9IGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlXG4gICAgICAqIHN1Yi1ncm91cHMgd2l0aGluIHRoZSBmb3JtLlxuICAgICAgKiAqXG4gICAgICAqIFlvdSBjYW4gbGlzdGVuIHRvIHRoZSBkaXJlY3RpdmUncyBgbmdTdWJtaXRgIGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHVzZXIgaGFzXG4gICAgICAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAgICAgICogc3VibWlzc2lvbiBldmVudC5cbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybS9zaW1wbGVfZm9ybV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICAqICpcbiAgICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ0Zvcm0gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkNChOZ0Zvcm0sIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE5nRm9ybSh2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgdGhpcy5mb3JtID1cbiAgICAgICAgICAgICAgICBuZXcgRm9ybUdyb3VwKHt9LCBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSwgY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3N1Ym1pdHRlZDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImZvcm1EaXJlY3RpdmVcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm07IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdGb3JtLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ0Zvcm0ucHJvdG90eXBlLCBcImNvbnRyb2xzXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHM7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIGRpci5fY29udHJvbCA9IChjb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBkaXIuY29udHJvbCkpO1xuICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbChkaXIuY29udHJvbCwgZGlyKTtcbiAgICAgICAgICAgICAgICBkaXIuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuZ2V0Q29udHJvbCA9IGZ1bmN0aW9uIChkaXIpIHsgcmV0dXJuICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSBfdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ29udHJvbChkaXIubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5hZGRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRhaW5lciA9IF90aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBncm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgICAgICAgICAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihncm91cCwgZGlyKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVnaXN0ZXJDb250cm9sKGRpci5uYW1lLCBncm91cCk7XG4gICAgICAgICAgICAgICAgZ3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlbW92ZUZvcm1Hcm91cCA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gX3RoaXMuX2ZpbmRDb250YWluZXIoZGlyLnBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNvbnRyb2woZGlyLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuZ2V0Rm9ybUdyb3VwID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUudXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZGlyLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gKF90aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7XG4gICAgICAgICAgICAgICAgY3RybC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHsgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gJGV2ZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nRm9ybS5wcm90b3R5cGUub25SZXNldCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5yZXNldEZvcm0oKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ0Zvcm0ucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGF0aFxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdGb3JtLnByb3RvdHlwZS5fZmluZENvbnRhaW5lciA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoID8gKHRoaXMuZm9ybS5nZXQocGF0aCkpIDogdGhpcy5mb3JtO1xuICAgICAgICB9O1xuICAgICAgICBOZ0Zvcm0uZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm06bm90KFtuZ05vRm9ybV0pOm5vdChbZm9ybUdyb3VwXSksbmdGb3JtLFtuZ0Zvcm1dJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlcl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICcoc3VibWl0KSc6ICdvblN1Ym1pdCgkZXZlbnQpJywgJyhyZXNldCknOiAnb25SZXNldCgpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0czogWyduZ1N1Ym1pdCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ0Zvcm0nXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdGb3JtLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICByZXR1cm4gTmdGb3JtO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIEV4YW1wbGVzID0ge1xuICAgICAgICBmb3JtQ29udHJvbE5hbWU6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxcbiAgICB9KTtcIixcbiAgICAgICAgZm9ybUdyb3VwTmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgIDxkaXYgZm9ybUdyb3VwTmFtZT1cXFwicGVyc29uXFxcIj5cXG4gICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICAgcGVyc29uOiBuZXcgRm9ybUdyb3VwKHsgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKSB9KVxcbiAgICB9KTtcIixcbiAgICAgICAgZm9ybUFycmF5TmFtZTogXCJcXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cXFwibXlHcm91cFxcXCI+XFxuICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVxcXCJjaXRpZXNcXFwiPlxcbiAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBjaXR5IG9mIGNpdHlBcnJheS5jb250cm9sczsgbGV0IGk9aW5kZXhcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XFxcImlcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICBJbiB5b3VyIGNsYXNzOlxcblxcbiAgICB0aGlzLmNpdHlBcnJheSA9IG5ldyBGb3JtQXJyYXkoW25ldyBGb3JtQ29udHJvbCgnU0YnKV0pO1xcbiAgICB0aGlzLm15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcXG4gICAgICBjaXRpZXM6IHRoaXMuY2l0eUFycmF5XFxuICAgIH0pO1wiLFxuICAgICAgICBuZ01vZGVsR3JvdXA6IFwiXFxuICAgIDxmb3JtPlxcbiAgICAgICA8ZGl2IG5nTW9kZWxHcm91cD1cXFwicGVyc29uXFxcIj5cXG4gICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVxcXCJwZXJzb24ubmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIj5cXG4gICAgICAgPC9kaXY+XFxuICAgIDwvZm9ybT5cIixcbiAgICAgICAgbmdNb2RlbFdpdGhGb3JtR3JvdXA6IFwiXFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XFxcIm15R3JvdXBcXFwiPlxcbiAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVxcXCJmaXJzdE5hbWVcXFwiPlxcbiAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInNob3dNb3JlQ29udHJvbHNcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCI+XFxuICAgIDwvZGl2PlxcbiAgXCJcbiAgICB9O1xuXG4gICAgdmFyIFRlbXBsYXRlRHJpdmVuRXJyb3JzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVGVtcGxhdGVEcml2ZW5FcnJvcnMoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBUcnkgdXNpbmdcXG4gICAgICBmb3JtR3JvdXAncyBwYXJ0bmVyIGRpcmVjdGl2ZSBcXFwiZm9ybUNvbnRyb2xOYW1lXFxcIiBpbnN0ZWFkLiAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSArIFwiXFxuXFxuICAgICAgT3IsIGlmIHlvdSdkIGxpa2UgdG8gYXZvaWQgcmVnaXN0ZXJpbmcgdGhpcyBmb3JtIGNvbnRyb2wsIGluZGljYXRlIHRoYXQgaXQncyBzdGFuZGFsb25lIGluIG5nTW9kZWxPcHRpb25zOlxcblxcbiAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5uZ01vZGVsV2l0aEZvcm1Hcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMuZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIG5nTW9kZWwgY2Fubm90IGJlIHVzZWQgdG8gcmVnaXN0ZXIgZm9ybSBjb250cm9scyB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cE5hbWUgb3IgZm9ybUFycmF5TmFtZSBkaXJlY3RpdmUuXFxuXFxuICAgICAgT3B0aW9uIDE6IFVzZSBmb3JtQ29udHJvbE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsIChyZWFjdGl2ZSBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lICsgXCJcXG5cXG4gICAgICBPcHRpb24gMjogIFVwZGF0ZSBuZ01vZGVsJ3MgcGFyZW50IGJlIG5nTW9kZWxHcm91cCAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxHcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubWlzc2luZ05hbWVFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJZiBuZ01vZGVsIGlzIHVzZWQgd2l0aGluIGEgZm9ybSB0YWcsIGVpdGhlciB0aGUgbmFtZSBhdHRyaWJ1dGUgbXVzdCBiZSBzZXQgb3IgdGhlIGZvcm1cXG4gICAgICBjb250cm9sIG11c3QgYmUgZGVmaW5lZCBhcyAnc3RhbmRhbG9uZScgaW4gbmdNb2RlbE9wdGlvbnMuXFxuXFxuICAgICAgRXhhbXBsZSAxOiA8aW5wdXQgWyhuZ01vZGVsKV09XFxcInBlcnNvbi5maXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0XFxcIj5cXG4gICAgICBFeGFtcGxlIDI6IDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwicGVyc29uLmZpcnN0TmFtZVxcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIj5cIik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxHcm91cFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgIG5nTW9kZWxHcm91cCBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuXFxuXFxuICAgICAgT3B0aW9uIDE6IFVzZSBmb3JtR3JvdXBOYW1lIGluc3RlYWQgb2YgbmdNb2RlbEdyb3VwIChyZWFjdGl2ZSBzdHJhdGVneSk6XFxuXFxuICAgICAgXCIgKyBFeGFtcGxlcy5mb3JtR3JvdXBOYW1lICsgXCJcXG5cXG4gICAgICBPcHRpb24gMjogIFVzZSBhIHJlZ3VsYXIgZm9ybSB0YWcgaW5zdGVhZCBvZiB0aGUgZm9ybUdyb3VwIGRpcmVjdGl2ZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxHcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUZW1wbGF0ZURyaXZlbkVycm9ycztcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkOCA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIG1vZGVsR3JvdXBQcm92aWRlciA9IHtcbiAgICAgICAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBOZ01vZGVsR3JvdXA7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgKlxuICAgICAgKiAqXG4gICAgICAqIFRoaXMgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgYXMgYSBjaGlsZCBvZiB7QGxpbmsgTmdGb3JtfSAob3IgaW4gb3RoZXIgd29yZHMsXG4gICAgICAqIHdpdGhpbiBgPGZvcm0+YCB0YWdzKS5cbiAgICAgICogKlxuICAgICAgKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYSBzdWItZ3JvdXAgd2l0aGluIGEgZm9ybS4gVGhpcyBjYW5cbiAgICAgICogY29tZSBpbiBoYW5keSBpZiB5b3Ugd2FudCB0byB2YWxpZGF0ZSBhIHN1Yi1ncm91cCBvZiB5b3VyIGZvcm0gc2VwYXJhdGVseSBmcm9tXG4gICAgICAqIHRoZSByZXN0IG9mIHlvdXIgZm9ybSwgb3IgaWYgc29tZSB2YWx1ZXMgaW4geW91ciBkb21haW4gbW9kZWwgbWFrZSBtb3JlIHNlbnNlIHRvXG4gICAgICAqIGNvbnN1bWUgdG9nZXRoZXIgaW4gYSBuZXN0ZWQgb2JqZWN0LlxuICAgICAgKiAqXG4gICAgICAqIFBhc3MgaW4gdGhlIG5hbWUgeW91J2QgbGlrZSB0aGlzIHN1Yi1ncm91cCB0byBoYXZlIGFuZCBpdCB3aWxsIGJlY29tZSB0aGUga2V5XG4gICAgICAqIGZvciB0aGUgc3ViLWdyb3VwIGluIHRoZSBmb3JtJ3MgZnVsbCB2YWx1ZS4gWW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG9cbiAgICAgICogYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdNb2RlbEdyb3VwYCAoZXg6IGAjbXlHcm91cD1cIm5nTW9kZWxHcm91cFwiYCkuXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL25nTW9kZWxHcm91cC9uZ19tb2RlbF9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICAqICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgTmdNb2RlbEdyb3VwID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDgoTmdNb2RlbEdyb3VwLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ01vZGVsR3JvdXAocGFyZW50LCB2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsR3JvdXAucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdGb3JtKSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsR3JvdXBQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgTmdNb2RlbEdyb3VwLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1tuZ01vZGVsR3JvdXBdJywgcHJvdmlkZXJzOiBbbW9kZWxHcm91cFByb3ZpZGVyXSwgZXhwb3J0QXM6ICduZ01vZGVsR3JvdXAnIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgTmdNb2RlbEdyb3VwLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICAgICAgeyB0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ01vZGVsR3JvdXAucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbEdyb3VwJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nTW9kZWxHcm91cDtcbiAgICB9KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ3ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUNvbnRyb2xCaW5kaW5nID0ge1xuICAgICAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gTmdNb2RlbDsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGBuZ01vZGVsYCBmb3JjZXMgYW4gYWRkaXRpb25hbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1biB3aGVuIGl0cyBpbnB1dHMgY2hhbmdlOlxuICAgICAqIEUuZy46XG4gICAgICogYGBgXG4gICAgICogPGRpdj57e215TW9kZWwudmFsaWR9fTwvZGl2PlxuICAgICAqIDxpbnB1dCBbKG5nTW9kZWwpXT1cIm15VmFsdWVcIiAjbXlNb2RlbD1cIm5nTW9kZWxcIj5cbiAgICAgKiBgYGBcbiAgICAgKiBJLmUuIGBuZ01vZGVsYCBjYW4gZXhwb3J0IGl0c2VsZiBvbiB0aGUgZWxlbWVudCBhbmQgdGhlbiBiZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBOb3JtYWxseSwgdGhpcyB3b3VsZCByZXN1bHQgaW4gZXhwcmVzc2lvbnMgYmVmb3JlIHRoZSBgaW5wdXRgIHRoYXQgdXNlIHRoZSBleHBvcnRlZCBkaXJlY3RpdmVcbiAgICAgKiB0byBoYXZlIGFuZCBvbGQgdmFsdWUgYXMgdGhleSBoYXZlIGJlZW5cbiAgICAgKiBkaXJ0eSBjaGVja2VkIGJlZm9yZS4gQXMgdGhpcyBpcyBhIHZlcnkgY29tbW9uIGNhc2UgZm9yIGBuZ01vZGVsYCwgd2UgYWRkZWQgdGhpcyBzZWNvbmQgY2hhbmdlXG4gICAgICogZGV0ZWN0aW9uIHJ1bi5cbiAgICAgKlxuICAgICAqIE5vdGVzOlxuICAgICAqIC0gdGhpcyBpcyBqdXN0IG9uZSBleHRyYSBydW4gbm8gbWF0dGVyIGhvdyBtYW55IGBuZ01vZGVsYCBoYXZlIGJlZW4gY2hhbmdlZC5cbiAgICAgKiAtIHRoaXMgaXMgYSBnZW5lcmFsIHByb2JsZW0gd2hlbiB1c2luZyBgZXhwb3J0QXNgIGZvciBkaXJlY3RpdmVzIVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIHJlc29sdmVkUHJvbWlzZSQxID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIC8qKlxuICAgICAqICB0byBhIGZvcm0gY29udHJvbCBlbGVtZW50LlxuICAgICAgKiAqXG4gICAgICAqIFRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHdpbGwgdHJhY2sgdGhlIHZhbHVlLCB1c2VyIGludGVyYWN0aW9uLCBhbmRcbiAgICAgICogdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wgYW5kIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIG1vZGVsLiBJZiB1c2VkXG4gICAgICAqIHdpdGhpbiBhIHBhcmVudCBmb3JtLCB0aGUgZGlyZWN0aXZlIHdpbGwgYWxzbyByZWdpc3RlciBpdHNlbGYgd2l0aCB0aGUgZm9ybSBhcyBhIGNoaWxkXG4gICAgICAqIGNvbnRyb2wuXG4gICAgICAqICpcbiAgICAgICogKlxuICAgICAgKiBUaGlzIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBieSBpdHNlbGYgb3IgYXMgcGFydCBvZiBhIGxhcmdlciBmb3JtLiBBbGwgeW91IG5lZWQgaXMgdGhlXG4gICAgICAqIGBuZ01vZGVsYCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAgICAgICogKlxuICAgICAgKiBJdCBhY2NlcHRzIGEgZG9tYWluIG1vZGVsIGFzIGFuIG9wdGlvbmFsIHtAbGluayBASW5wdXR9LiBJZiB5b3UgaGF2ZSBhIG9uZS13YXkgYmluZGluZ1xuICAgICAgKiB0byBgbmdNb2RlbGAgd2l0aCBgW11gIHN5bnRheCwgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBkb21haW4gbW9kZWwgaW4gdGhlIGNvbXBvbmVudFxuICAgICAgKiBjbGFzcyB3aWxsIHNldCB0aGUgdmFsdWUgaW4gdGhlIHZpZXcuIElmIHlvdSBoYXZlIGEgdHdvLXdheSBiaW5kaW5nIHdpdGggYFsoKV1gIHN5bnRheFxuICAgICAgKiAoYWxzbyBrbm93biBhcyAnYmFuYW5hLWJveCBzeW50YXgnKSwgdGhlIHZhbHVlIGluIHRoZSBVSSB3aWxsIGFsd2F5cyBiZSBzeW5jZWQgYmFjayB0b1xuICAgICAgKiB0aGUgZG9tYWluIG1vZGVsIGluIHlvdXIgY2xhc3MgYXMgd2VsbC5cbiAgICAgICogKlxuICAgICAgKiBJZiB5b3Ugd2lzaCB0byBpbnNwZWN0IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBhc3NvY2lhdGVkIHtAbGluayBGb3JtQ29udHJvbH0gKGxpa2VcbiAgICAgICogdmFsaWRpdHkgc3RhdGUpLCB5b3UgY2FuIGFsc28gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nXG4gICAgICAqIGBuZ01vZGVsYCBhcyB0aGUga2V5IChleDogYCNteVZhcj1cIm5nTW9kZWxcImApLiBZb3UgY2FuIHRoZW4gYWNjZXNzIHRoZSBjb250cm9sIHVzaW5nIHRoZVxuICAgICAgKiBkaXJlY3RpdmUncyBgY29udHJvbGAgcHJvcGVydHksIGJ1dCBtb3N0IHByb3BlcnRpZXMgeW91J2xsIG5lZWQgKGxpa2UgYHZhbGlkYCBhbmQgYGRpcnR5YClcbiAgICAgICogd2lsbCBmYWxsIHRocm91Z2ggdG8gdGhlIGNvbnRyb2wgYW55d2F5LCBzbyB5b3UgY2FuIGFjY2VzcyB0aGVtIGRpcmVjdGx5LiBZb3UgY2FuIHNlZSBhXG4gICAgICAqIGZ1bGwgbGlzdCBvZiBwcm9wZXJ0aWVzIGRpcmVjdGx5IGF2YWlsYWJsZSBpbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfS5cbiAgICAgICogKlxuICAgICAgKiBUaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2YgYSBzaW1wbGUgc3RhbmRhbG9uZSBjb250cm9sIHVzaW5nIGBuZ01vZGVsYDpcbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlTmdNb2RlbC9zaW1wbGVfbmdfbW9kZWxfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICAqICpcbiAgICAgICogV2hlbiB1c2luZyB0aGUgYG5nTW9kZWxgIHdpdGhpbiBgPGZvcm0+YCB0YWdzLCB5b3UnbGwgYWxzbyBuZWVkIHRvIHN1cHBseSBhIGBuYW1lYCBhdHRyaWJ1dGVcbiAgICAgICogc28gdGhhdCB0aGUgY29udHJvbCBjYW4gYmUgcmVnaXN0ZXJlZCB3aXRoIHRoZSBwYXJlbnQgZm9ybSB1bmRlciB0aGF0IG5hbWUuXG4gICAgICAqICpcbiAgICAgICogSXQncyB3b3J0aCBub3RpbmcgdGhhdCBpbiB0aGUgY29udGV4dCBvZiBhIHBhcmVudCBmb3JtLCB5b3Ugb2Z0ZW4gY2FuIHNraXAgb25lLXdheSBvclxuICAgICAgKiB0d28td2F5IGJpbmRpbmcgYmVjYXVzZSB0aGUgcGFyZW50IGZvcm0gd2lsbCBzeW5jIHRoZSB2YWx1ZSBmb3IgeW91LiBZb3UgY2FuIGFjY2Vzc1xuICAgICAgKiBpdHMgcHJvcGVydGllcyBieSBleHBvcnRpbmcgaXQgaW50byBhIGxvY2FsIHRlbXBsYXRlIHZhcmlhYmxlIHVzaW5nIGBuZ0Zvcm1gIChleDpcbiAgICAgICogYCNmPVwibmdGb3JtXCJgKS4gVGhlbiB5b3UgY2FuIHBhc3MgaXQgd2hlcmUgaXQgbmVlZHMgdG8gZ28gb24gc3VibWl0LlxuICAgICAgKiAqXG4gICAgICAqIElmIHlvdSBkbyBuZWVkIHRvIHBvcHVsYXRlIGluaXRpYWwgdmFsdWVzIGludG8geW91ciBmb3JtLCB1c2luZyBhIG9uZS13YXkgYmluZGluZyBmb3JcbiAgICAgICogYG5nTW9kZWxgIHRlbmRzIHRvIGJlIHN1ZmZpY2llbnQgYXMgbG9uZyBhcyB5b3UgdXNlIHRoZSBleHBvcnRlZCBmb3JtJ3MgdmFsdWUgcmF0aGVyXG4gICAgICAqIHRoYW4gdGhlIGRvbWFpbiBtb2RlbCdzIHZhbHVlIG9uIHN1Ym1pdC5cbiAgICAgICogKlxuICAgICAgKiBUYWtlIGEgbG9vayBhdCBhbiBleGFtcGxlIG9mIHVzaW5nIGBuZ01vZGVsYCB3aXRoaW4gYSBmb3JtOlxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqIFRvIHNlZSBgbmdNb2RlbGAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gICAgICAqICpcbiAgICAgICogKiBSYWRpbyBidXR0b25zOiB7QGxpbmsgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgICogKiBTZWxlY3RzOiB7QGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9XG4gICAgICAqICpcbiAgICAgICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogKipOZ01vZHVsZSoqOiBgRm9ybXNNb2R1bGVgXG4gICAgICAqICpcbiAgICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBOZ01vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDcoTmdNb2RlbCwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBOZ01vZGVsKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JFcnJvcnMoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcmVnaXN0ZXJlZClcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRVcENvbnRyb2woKTtcbiAgICAgICAgICAgIGlmICgnaXNEaXNhYmxlZCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkKGNoYW5nZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5mb3JtRGlyZWN0aXZlICYmIHRoaXMuZm9ybURpcmVjdGl2ZS5yZW1vdmVDb250cm9sKHRoaXMpOyB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudCA/IGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KSA6IFt0aGlzLm5hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJmb3JtRGlyZWN0aXZlXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wYXJlbnQgPyB0aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSA6IG51bGw7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmdNb2RlbC5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOZ01vZGVsLnByb3RvdHlwZSwgXCJhc3luY1ZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLnZpZXdUb01vZGVsVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3NldFVwQ29udHJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU3RhbmRhbG9uZSgpID8gdGhpcy5fc2V0VXBTdGFuZGFsb25lKCkgOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX2lzU3RhbmRhbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5fcGFyZW50IHx8ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnN0YW5kYWxvbmUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9zZXRVcFN0YW5kYWxvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5fY29udHJvbCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja0ZvckVycm9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NoZWNrTmFtZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE5nTW9kZWwucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ01vZGVsR3JvdXApICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50IGluc3RhbmNlb2YgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5mb3JtR3JvdXBOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ0Zvcm0pKSB7XG4gICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubW9kZWxQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fY2hlY2tOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkgJiYgIXRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1pc3NpbmdOYW1lRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBOZ01vZGVsLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXNvbHZlZFByb21pc2UkMS50aGVuKGZ1bmN0aW9uICgpIHsgX3RoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwgeyBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U6IGZhbHNlIH0pOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTmdNb2RlbC5wcm90b3R5cGUuX3VwZGF0ZURpc2FibGVkID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBkaXNhYmxlZFZhbHVlID0gY2hhbmdlc1snaXNEaXNhYmxlZCddLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGlzRGlzYWJsZWQgPSBkaXNhYmxlZFZhbHVlID09PSAnJyB8fCAoZGlzYWJsZWRWYWx1ZSAmJiBkaXNhYmxlZFZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZSQxLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVkICYmICFfdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNEaXNhYmxlZCAmJiBfdGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIE5nTW9kZWwuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tuZ01vZGVsXTpub3QoW2Zvcm1Db250cm9sTmFtZV0pOm5vdChbZm9ybUNvbnRyb2xdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtmb3JtQ29udHJvbEJpbmRpbmddLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0QXM6ICduZ01vZGVsJ1xuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE5nTW9kZWwuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBOZ01vZGVsLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydkaXNhYmxlZCcsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ29wdGlvbnMnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWxPcHRpb25zJyxdIH0sXSxcbiAgICAgICAgICAgICd1cGRhdGUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk91dHB1dCwgYXJnczogWyduZ01vZGVsQ2hhbmdlJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE5nTW9kZWw7XG4gICAgfShOZ0NvbnRyb2wpKTtcblxuICAgIHZhciBSZWFjdGl2ZUVycm9ycyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlYWN0aXZlRXJyb3JzKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuY29udHJvbFBhcmVudEV4Y2VwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZvcm1Db250cm9sTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXFxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cXG5cXG4gICAgICBFeGFtcGxlOlxcblxcbiAgICAgIFwiICsgRXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZWFjdGl2ZUVycm9ycy5uZ01vZGVsR3JvdXBFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtQ29udHJvbE5hbWUgY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBuZ01vZGVsR3JvdXAgcGFyZW50LiBJdCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwYXJlbnRzXFxuICAgICAgIHRoYXQgYWxzbyBoYXZlIGEgXFxcImZvcm1cXFwiIHByZWZpeDogZm9ybUdyb3VwTmFtZSwgZm9ybUFycmF5TmFtZSwgb3IgZm9ybUdyb3VwLlxcblxcbiAgICAgICBPcHRpb24gMTogIFVwZGF0ZSB0aGUgcGFyZW50IHRvIGJlIGZvcm1Hcm91cE5hbWUgKHJlYWN0aXZlIGZvcm0gc3RyYXRlZ3kpXFxuXFxuICAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUgKyBcIlxcblxcbiAgICAgICAgT3B0aW9uIDI6IFVzZSBuZ01vZGVsIGluc3RlYWQgb2YgZm9ybUNvbnRyb2xOYW1lICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpXFxuXFxuICAgICAgICBcIiArIEV4YW1wbGVzLm5nTW9kZWxHcm91cCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtR3JvdXAgZXhwZWN0cyBhIEZvcm1Hcm91cCBpbnN0YW5jZS4gUGxlYXNlIHBhc3Mgb25lIGluLlxcblxcbiAgICAgICBFeGFtcGxlOlxcblxcbiAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgUmVhY3RpdmVFcnJvcnMuZ3JvdXBQYXJlbnRFeGNlcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtR3JvdXBOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcXG4gICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXFxuXFxuICAgICAgRXhhbXBsZTpcXG5cXG4gICAgICBcIiArIEV4YW1wbGVzLmZvcm1Hcm91cE5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmFycmF5UGFyZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZm9ybUFycmF5TmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXFxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cXG5cXG4gICAgICAgIEV4YW1wbGU6XFxuXFxuICAgICAgICBcIiArIEV4YW1wbGVzLmZvcm1BcnJheU5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpdGggYSByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZS4gSWYgeW91IHNldCBkaXNhYmxlZCB0byB0cnVlXFxuICAgICAgd2hlbiB5b3Ugc2V0IHVwIHRoaXMgY29udHJvbCBpbiB5b3VyIGNvbXBvbmVudCBjbGFzcywgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aWxsIGFjdHVhbGx5IGJlIHNldCBpbiB0aGUgRE9NIGZvclxcbiAgICAgIHlvdS4gV2UgcmVjb21tZW5kIHVzaW5nIHRoaXMgYXBwcm9hY2ggdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3JzLlxcbiAgICAgICBcXG4gICAgICBFeGFtcGxlOiBcXG4gICAgICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XFxuICAgICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcXG4gICAgICAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnRHJldycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXFxuICAgICAgfSk7XFxuICAgIFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0aXZlRXJyb3JzO1xuICAgIH0oKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQ5ID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUNvbnRyb2xCaW5kaW5nJDEgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5nQ29udHJvbCxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBGb3JtQ29udHJvbERpcmVjdGl2ZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqIEluIG90aGVyIHdvcmRzLCB0aGlzIGRpcmVjdGl2ZSBlbnN1cmVzIHRoYXQgYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9XG4gICAgICAqIGluc3RhbmNlIHByb2dyYW1tYXRpY2FsbHkgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCAobW9kZWwgLT4gdmlldykuIENvbnZlcnNlbHksXG4gICAgICAqIGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgdGhyb3VnaCB1c2VyIGlucHV0IHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlICh2aWV3IC0+IG1vZGVsKS5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIFVzZSB0aGlzIGRpcmVjdGl2ZSBpZiB5b3UnZCBsaWtlIHRvIGNyZWF0ZSBhbmQgbWFuYWdlIGEge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBkaXJlY3RseS5cbiAgICAgICogU2ltcGx5IGNyZWF0ZSBhIHtAbGluayBGb3JtQ29udHJvbH0sIHNhdmUgaXQgdG8geW91ciBjb21wb25lbnQgY2xhc3MsIGFuZCBwYXNzIGl0IGludG8gdGhlXG4gICAgICAqIHtAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0uXG4gICAgICAqICpcbiAgICAgICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCBhcyBhIHN0YW5kYWxvbmUgY29udHJvbC4gIFVubGlrZSB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSxcbiAgICAgICogaXQgZG9lcyBub3QgcmVxdWlyZSB0aGF0IHlvdXIge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSBiZSBwYXJ0IG9mIGFueSBwYXJlbnRcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0sIGFuZCBpdCB3b24ndCBiZSByZWdpc3RlcmVkIHRvIGFueSB7QGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSB0aGF0XG4gICAgICAqIGV4aXN0cyBhYm92ZSBpdC5cbiAgICAgICogKlxuICAgICAgKiAqKkdldCB0aGUgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlLiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW5cbiAgICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICAqICpcbiAgICAgICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gcGFzcyBpbiBhbiBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGUge0BsaW5rIEZvcm1Db250cm9sfSxcbiAgICAgICogb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvclxuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9LlxuICAgICAgKiAqXG4gICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICAgICAgKiBzdWJzY3JpYmUgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAgICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Db250cm9sL3NpbXBsZV9mb3JtX2NvbnRyb2xfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gICAgICAqICpcbiAgICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciBGb3JtQ29udHJvbERpcmVjdGl2ZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQ5KEZvcm1Db250cm9sRGlyZWN0aXZlLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvcnNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEZvcm1Db250cm9sRGlyZWN0aXZlKHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycywgdmFsdWVBY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiaXNEaXNhYmxlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoaXNEaXNhYmxlZCkgeyBSZWFjdGl2ZUVycm9ycy5kaXNhYmxlZEF0dHJXYXJuaW5nKCk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ29udHJvbENoYW5nZWQoY2hhbmdlcykpIHtcbiAgICAgICAgICAgICAgICBzZXRVcENvbnRyb2wodGhpcy5mb3JtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHRoaXMubW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiY29udHJvbFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5mb3JtOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sRGlyZWN0aXZlLnByb3RvdHlwZS52aWV3VG9Nb2RlbFVwZGF0ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUuX2lzQ29udHJvbENoYW5nZWQgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Zvcm0nKTtcbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sXScsIHByb3ZpZGVyczogW2Zvcm1Db250cm9sQmluZGluZyQxXSwgZXhwb3J0QXM6ICduZ0Zvcm0nIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUixdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBGb3JtQ29udHJvbERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdmb3JtJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtQ29udHJvbCcsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxuICAgICAgICAgICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sRGlyZWN0aXZlO1xuICAgIH0oTmdDb250cm9sKSk7XG5cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIF9fZXh0ZW5kcyQxMSA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIGZvcm1EaXJlY3RpdmVQcm92aWRlciQxID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1Hcm91cERpcmVjdGl2ZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqICpcbiAgICAgICogVGhpcyBkaXJlY3RpdmUgYWNjZXB0cyBhbiBleGlzdGluZyB7QGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZS4gSXQgd2lsbCB0aGVuIHVzZSB0aGlzXG4gICAgICAqIHtAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHRvIG1hdGNoIGFueSBjaGlsZCB7QGxpbmsgRm9ybUNvbnRyb2x9LCB7QGxpbmsgRm9ybUdyb3VwfSxcbiAgICAgICogYW5kIHtAbGluayBGb3JtQXJyYXl9IGluc3RhbmNlcyB0byBjaGlsZCB7QGxpbmsgRm9ybUNvbnRyb2xOYW1lfSwge0BsaW5rIEZvcm1Hcm91cE5hbWV9LFxuICAgICAgKiBhbmQge0BsaW5rIEZvcm1BcnJheU5hbWV9IGRpcmVjdGl2ZXMuXG4gICAgICAqICpcbiAgICAgICogKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgdGhlIGZvcm0ncyBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGVcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmcgdGhlIHtAbGluayBGb3JtR3JvdXB9J3NcbiAgICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige0BsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfSBtZXRob2RzLlxuICAgICAgKiAqXG4gICAgICAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSwgeW91IGNhbiBzdWJzY3JpYmVcbiAgICAgICogdG8gdGhlIHtAbGluayBGb3JtR3JvdXB9J3Mge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAgKiBpdHMge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICAgICAgKiByZS1jYWxjdWxhdGVkLlxuICAgICAgKiAqXG4gICAgICAqIEZ1cnRoZXJtb3JlLCB5b3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICAgICAgKiB0cmlnZ2VyZWQgYSBmb3JtIHN1Ym1pc3Npb24uIFRoZSBgbmdTdWJtaXRgIGV2ZW50IHdpbGwgYmUgZW1pdHRlZCB3aXRoIHRoZSBvcmlnaW5hbCBmb3JtXG4gICAgICAqIHN1Ym1pc3Npb24gZXZlbnQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNyZWF0ZSBmb3JtIGNvbnRyb2xzIGZvciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUuXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Hcm91cC9zaW1wbGVfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiAqKk5nTW9kdWxlKio6IHtAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICAgICAgKiAqXG4gICAgICAqIEBzdGFibGVcbiAgICAgKi9cbiAgICB2YXIgRm9ybUdyb3VwRGlyZWN0aXZlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDExKEZvcm1Hcm91cERpcmVjdGl2ZSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gX3ZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBfYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtR3JvdXBEaXJlY3RpdmUoX3ZhbGlkYXRvcnMsIF9hc3luY1ZhbGlkYXRvcnMpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9ycyA9IF92YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gX2FzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5uZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrRm9ybVByZXNlbnQoKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdmb3JtJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVWYWxpZGF0b3JzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9tVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZWdpc3RyYXRpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fc3VibWl0dGVkOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLCBcInBhdGhcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLmFkZENvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICBzZXRVcENvbnRyb2woY3RybCwgZGlyKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChkaXIpO1xuICAgICAgICAgICAgcmV0dXJuIGN0cmw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRDb250cm9sID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiAoZGlyKSB7IExpc3RXcmFwcGVyLnJlbW92ZSh0aGlzLmRpcmVjdGl2ZXMsIGRpcik7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5hZGRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjdHJsID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgICAgICAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICAgICAgICAgIGN0cmwudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5yZW1vdmVGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGRpclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5nZXRGb3JtR3JvdXAgPSBmdW5jdGlvbiAoZGlyKSB7IHJldHVybiAodGhpcy5mb3JtLmdldChkaXIucGF0aCkpOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuYWRkRm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9IHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpO1xuICAgICAgICAgICAgc2V0VXBGb3JtQ29udGFpbmVyKGN0cmwsIGRpcik7XG4gICAgICAgICAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUucmVtb3ZlRm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikgeyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBkaXJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Rm9ybUFycmF5ID0gZnVuY3Rpb24gKGRpcikgeyByZXR1cm4gKHRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZGlyXG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlTW9kZWwgPSBmdW5jdGlvbiAoZGlyLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY3RybCA9ICh0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSk7XG4gICAgICAgICAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gJGV2ZW50XG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgdGhpcy5fc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdTdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUub25SZXNldCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5yZXNldEZvcm0oKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHsgdmFsdWUgPSB1bmRlZmluZWQ7IH1cbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl91cGRhdGVEb21WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoZGlyKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gbmV3Q3RybCA9IF90aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyLl9jb250cm9sICE9PSBuZXdDdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFuVXBDb250cm9sKGRpci5fY29udHJvbCwgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0N0cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcENvbnRyb2wobmV3Q3RybCwgZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgZGlyLl9jb250cm9sID0gbmV3Q3RybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5fdXBkYXRlVHJlZVZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl91cGRhdGVSZWdpc3RyYXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3VwZGF0ZURvbVZhbHVlKCk7IH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29sZEZvcm0pXG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkRm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIHRoaXMuX29sZEZvcm0gPSB0aGlzLmZvcm07XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5fdXBkYXRlVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHN5bmMgPSBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybS52YWxpZGF0b3IgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW3RoaXMuZm9ybS52YWxpZGF0b3IsIHN5bmNdKTtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFzeW5jID0gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW3RoaXMuZm9ybS5hc3luY1ZhbGlkYXRvciwgYXN5bmNdKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9jaGVja0Zvcm1QcmVzZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5taXNzaW5nRm9ybUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tmb3JtR3JvdXBdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlciQxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJyhzdWJtaXQpJzogJ29uU3VibWl0KCRldmVudCknLCAnKHJlc2V0KSc6ICdvblJlc2V0KCknIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRBczogJ25nRm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtR3JvdXBEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1Hcm91cERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdmb3JtJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCwgYXJnczogWydmb3JtR3JvdXAnLF0gfSxdLFxuICAgICAgICAgICAgJ25nU3VibWl0JzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PdXRwdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwRGlyZWN0aXZlO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuXG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBfX2V4dGVuZHMkMTIgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBmb3JtR3JvdXBOYW1lUHJvdmlkZXIgPSB7XG4gICAgICAgIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUdyb3VwTmFtZTsgfSlcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqICpcbiAgICAgICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAgICAgICogYFtmb3JtR3JvdXBdYCkuXG4gICAgICAqICpcbiAgICAgICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7QGxpbmsgRm9ybUdyb3VwfSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAgICAgICogd2lsbCBsb29rIGZvciBhIHtAbGluayBGb3JtR3JvdXB9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICAgICAgKiB7QGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge0BsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0uXG4gICAgICAqICpcbiAgICAgICogTmVzdGVkIGZvcm0gZ3JvdXBzIGNhbiBjb21lIGluIGhhbmR5IHdoZW4geW91IHdhbnQgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgYVxuICAgICAgKiBmb3JtIHNlcGFyYXRlbHkgZnJvbSB0aGUgcmVzdCBvciB3aGVuIHlvdSdkIGxpa2UgdG8gZ3JvdXAgdGhlIHZhbHVlcyBvZiBjZXJ0YWluXG4gICAgICAqIGNvbnRyb2xzIGludG8gdGhlaXIgb3duIG5lc3RlZCBvYmplY3QuXG4gICAgICAqICpcbiAgICAgICogKipBY2Nlc3MgdGhlIGdyb3VwKio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtAbGluayBGb3JtR3JvdXB9IHVzaW5nIHRoZVxuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kLiBFeDogYHRoaXMuZm9ybS5nZXQoJ25hbWUnKWAuXG4gICAgICAqICpcbiAgICAgICogWW91IGNhbiBhbHNvIGFjY2VzcyBpbmRpdmlkdWFsIGNvbnRyb2xzIHdpdGhpbiB0aGUgZ3JvdXAgdXNpbmcgZG90IHN5bnRheC5cbiAgICAgICogRXg6IGB0aGlzLmZvcm0uZ2V0KCduYW1lLmZpcnN0JylgXG4gICAgICAqICpcbiAgICAgICogKipHZXQgdGhlIHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGVcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0uIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7QGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAgICAgICogKlxuICAgICAgKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICAgICAgKiB0aGUge0BsaW5rIEZvcm1Hcm91cH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAgICAgICoge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige0BsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAgICAgICogKlxuICAgICAgKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLCB5b3UgY2FuXG4gICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiB7QGV4YW1wbGUgZm9ybXMvdHMvbmVzdGVkRm9ybUdyb3VwL25lc3RlZF9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICAgICAgKiAqXG4gICAgICAqICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogKiAqKk5nTW9kdWxlKio6IGBSZWFjdGl2ZUZvcm1zTW9kdWxlYFxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIEZvcm1Hcm91cE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMkMTIoRm9ybUdyb3VwTmFtZSwgX3N1cGVyKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICAgICAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICAgICAgICAgKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUdyb3VwTmFtZShwYXJlbnQsIHZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Hcm91cE5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2hhc0ludmFsaWRQYXJlbnQodGhpcy5fcGFyZW50KSkge1xuICAgICAgICAgICAgICAgIFJlYWN0aXZlRXJyb3JzLmdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Hcm91cE5hbWUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUdyb3VwTmFtZVByb3ZpZGVyXSB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1Hcm91cE5hbWUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICBdOyB9O1xuICAgICAgICBGb3JtR3JvdXBOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Hcm91cE5hbWUnLF0gfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gRm9ybUdyb3VwTmFtZTtcbiAgICB9KEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSk7XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gZm9ybUFycmF5TmFtZVByb3ZpZGVyID0ge1xuICAgICAgICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZvcm1BcnJheU5hbWU7IH0pXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgKlxuICAgICAgKiAqXG4gICAgICAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7QGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gICAgICAqIGBbZm9ybUdyb3VwXWApLlxuICAgICAgKiAqXG4gICAgICAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQge0BsaW5rIEZvcm1BcnJheX0geW91IHdhbnQgdG8gbGluaywgYW5kXG4gICAgICAqIHdpbGwgbG9vayBmb3IgYSB7QGxpbmsgRm9ybUFycmF5fSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZSBwYXJlbnRcbiAgICAgICoge0BsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UgeW91IHBhc3NlZCBpbnRvIHtAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9LlxuICAgICAgKiAqXG4gICAgICAqIE5lc3RlZCBmb3JtIGFycmF5cyBjYW4gY29tZSBpbiBoYW5keSB3aGVuIHlvdSBoYXZlIGEgZ3JvdXAgb2YgZm9ybSBjb250cm9scyBidXRcbiAgICAgICogeW91J3JlIG5vdCBzdXJlIGhvdyBtYW55IHRoZXJlIHdpbGwgYmUuIEZvcm0gYXJyYXlzIGFsbG93IHlvdSB0byBjcmVhdGUgbmV3XG4gICAgICAqIGZvcm0gY29udHJvbHMgZHluYW1pY2FsbHkuXG4gICAgICAqICpcbiAgICAgICogKipBY2Nlc3MgdGhlIGFycmF5Kio6IFlvdSBjYW4gYWNjZXNzIHRoZSBhc3NvY2lhdGVkIHtAbGluayBGb3JtQXJyYXl9IHVzaW5nIHRoZVxuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kIG9uIHRoZSBwYXJlbnQge0BsaW5rIEZvcm1Hcm91cH0uXG4gICAgICAqIEV4OiBgdGhpcy5mb3JtLmdldCgnY2l0aWVzJylgLlxuICAgICAgKiAqXG4gICAgICAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gICAgICAqIHtAbGluayBGb3JtQXJyYXl9LiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge0BsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICAqICpcbiAgICAgICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gc2V0IGFuIGluaXRpYWwgdmFsdWUgZm9yIGVhY2ggY2hpbGQgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmdcbiAgICAgICogdGhlIHtAbGluayBGb3JtQXJyYXl9LCBvciB5b3UgY2FuIHNldCB0aGUgdmFsdWUgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB0aGVcbiAgICAgICoge0BsaW5rIEZvcm1BcnJheX0ncyB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnNldFZhbHVlfSBvciB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9XG4gICAgICAqIG1ldGhvZHMuXG4gICAgICAqICpcbiAgICAgICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBhcnJheSwgeW91IGNhblxuICAgICAgKiBzdWJzY3JpYmUgdG8gdGhlIHtAbGluayBGb3JtQXJyYXl9J3Mge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvXG4gICAgICAqIGxpc3RlbiB0byBpdHMge0BsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uXG4gICAgICAqIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkLlxuICAgICAgKiAqXG4gICAgICAqICoqQWRkIG5ldyBjb250cm9scyoqOiBZb3UgY2FuIGFkZCBuZXcgY29udHJvbHMgdG8gdGhlIHtAbGluayBGb3JtQXJyYXl9IGR5bmFtaWNhbGx5IGJ5XG4gICAgICAqIGNhbGxpbmcgaXRzIHtAbGluayBGb3JtQXJyYXkucHVzaH0gbWV0aG9kLlxuICAgICAgKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpLnB1c2gobmV3IEZvcm1Db250cm9sKCkpO2BcbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIHtAZXhhbXBsZSBmb3Jtcy90cy9uZXN0ZWRGb3JtQXJyYXkvbmVzdGVkX2Zvcm1fYXJyYXlfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gICAgICAqICpcbiAgICAgICogKiAqKm5wbSBwYWNrYWdlKio6IGBAYW5ndWxhci9mb3Jtc2BcbiAgICAgICogKlxuICAgICAgKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gICAgICAqICpcbiAgICAgKi9cbiAgICB2YXIgRm9ybUFycmF5TmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMihGb3JtQXJyYXlOYW1lLCBfc3VwZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBwYXJlbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gICAgICAgICAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBGb3JtQXJyYXlOYW1lKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja1BhcmVudFR5cGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRGb3JtQXJyYXkodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1BcnJheSh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcImNvbnRyb2xcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRGb3JtQXJyYXkodGhpcyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyAodGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1BcnJheU5hbWUucHJvdG90eXBlLCBcInZhbGlkYXRvclwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7IH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUFycmF5TmFtZS5wcm90b3R5cGUsIFwiYXN5bmNWYWxpZGF0b3JcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fYXN5bmNWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5wcm90b3R5cGUuX2NoZWNrUGFyZW50VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMuYXJyYXlQYXJlbnRFeGNlcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRm9ybUFycmF5TmFtZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUFycmF5TmFtZV0nLCBwcm92aWRlcnM6IFtmb3JtQXJyYXlOYW1lUHJvdmlkZXJdIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgRm9ybUFycmF5TmFtZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgICAgIHsgdHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSG9zdCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2tpcFNlbGYgfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgICAgICB7IHR5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk9wdGlvbmFsIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5TZWxmIH0sIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5JbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLF0gfSxdIH0sXG4gICAgICAgIF07IH07XG4gICAgICAgIEZvcm1BcnJheU5hbWUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbmFtZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQsIGFyZ3M6IFsnZm9ybUFycmF5TmFtZScsXSB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBGb3JtQXJyYXlOYW1lO1xuICAgIH0oQ29udHJvbENvbnRhaW5lcikpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gcGFyZW50XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfaGFzSW52YWxpZFBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICAgICAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1BcnJheU5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgX19leHRlbmRzJDEwID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbE5hbWVCaW5kaW5nID0ge1xuICAgICAgICBwcm92aWRlOiBOZ0NvbnRyb2wsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gRm9ybUNvbnRyb2xOYW1lOyB9KVxuICAgIH07XG4gICAgLyoqXG4gICAgICogIGVsZW1lbnQgYnkgbmFtZS5cbiAgICAgICogKlxuICAgICAgKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge0BsaW5rIEZvcm1Db250cm9sfVxuICAgICAgKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICAgICAgKiBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IHRocm91Z2ggdXNlciBpbnB1dCB3aWxsIGJlIHJlZmxlY3RlZCBpbiB0aGVcbiAgICAgICoge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSAodmlldyAtPiBtb2RlbCkuXG4gICAgICAqICpcbiAgICAgICogKlxuICAgICAgKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggYSBwYXJlbnQge0BsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICAgICAgKiBgW2Zvcm1Hcm91cF1gKS5cbiAgICAgICogKlxuICAgICAgKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUge0BsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB5b3Ugd2FudCB0b1xuICAgICAgKiBsaW5rLCBhbmQgd2lsbCBsb29rIGZvciBhIHtAbGluayBGb3JtQ29udHJvbH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGVcbiAgICAgICogY2xvc2VzdCB7QGxpbmsgRm9ybUdyb3VwfSBvciB7QGxpbmsgRm9ybUFycmF5fSBhYm92ZSBpdC5cbiAgICAgICogKlxuICAgICAgKiAqKkFjY2VzcyB0aGUgY29udHJvbCoqOiBZb3UgY2FuIGFjY2VzcyB0aGUge0BsaW5rIEZvcm1Db250cm9sfSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgICogdGhpcyBkaXJlY3RpdmUgYnkgdXNpbmcgdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wuZ2V0fSBtZXRob2QuXG4gICAgICAqIEV4OiBgdGhpcy5mb3JtLmdldCgnZmlyc3QnKTtgXG4gICAgICAqICpcbiAgICAgICogKipHZXQgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZSB7QGxpbmsgRm9ybUNvbnRyb2x9LlxuICAgICAgKiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge0BsaW5rIEFic3RyYWN0Q29udHJvbH0uXG4gICAgICAqICpcbiAgICAgICogKipTZXQgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIGNvbnRyb2wgd2hlbiBpbnN0YW50aWF0aW5nIHRoZVxuICAgICAgKiB7QGxpbmsgRm9ybUNvbnRyb2x9LCBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nXG4gICAgICAqIHtAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gICAgICAqICpcbiAgICAgICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLCB5b3UgY2FuXG4gICAgICAqIHN1YnNjcmliZSB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICAgICAgKiB7QGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gICAgICAqIHJlLWNhbGN1bGF0ZWQuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNyZWF0ZSBmb3JtIGNvbnRyb2xzIGZvciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUuXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Hcm91cC9zaW1wbGVfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiBUbyBzZWUgYGZvcm1Db250cm9sTmFtZWAgZXhhbXBsZXMgd2l0aCBkaWZmZXJlbnQgZm9ybSBjb250cm9sIHR5cGVzLCBzZWU6XG4gICAgICAqICpcbiAgICAgICogKiBSYWRpbyBidXR0b25zOiB7QGxpbmsgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn1cbiAgICAgICogKiBTZWxlY3RzOiB7QGxpbmsgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9XG4gICAgICAqICpcbiAgICAgICogKipucG0gcGFja2FnZSoqOiBgQGFuZ3VsYXIvZm9ybXNgXG4gICAgICAqICpcbiAgICAgICogKipOZ01vZHVsZSoqOiB7QGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAgICAgICogKlxuICAgICAgKiBAc3RhYmxlXG4gICAgICovXG4gICAgdmFyIEZvcm1Db250cm9sTmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyQxMChGb3JtQ29udHJvbE5hbWUsIF9zdXBlcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IHBhcmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAgICAgICAgICogQHBhcmFtIHs/fSB2YWx1ZUFjY2Vzc29yc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gRm9ybUNvbnRyb2xOYW1lKHBhcmVudCwgdmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzLCB2YWx1ZUFjY2Vzc29ycykge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImlzRGlzYWJsZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGlzRGlzYWJsZWQpIHsgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZygpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FkZGVkKVxuICAgICAgICAgICAgICAgIHRoaXMuX3NldFVwQ29udHJvbCgpO1xuICAgICAgICAgICAgaWYgKGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMudmlld01vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUudXBkYXRlTW9kZWwodGhpcywgdGhpcy5tb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1EaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUudmlld1RvTW9kZWxVcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwicGF0aFwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwiZm9ybURpcmVjdGl2ZVwiLCB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUsIFwidmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLCBcImFzeW5jVmFsaWRhdG9yXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZSwgXCJjb250cm9sXCIsIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9jaGVja1BhcmVudFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgUmVhY3RpdmVFcnJvcnMubmdNb2RlbEdyb3VwRXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cE5hbWUpICYmICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwRGlyZWN0aXZlKSAmJlxuICAgICAgICAgICAgICAgICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBSZWFjdGl2ZUVycm9ycy5jb250cm9sUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5fc2V0VXBDb250cm9sID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtRGlyZWN0aXZlLmFkZENvbnRyb2wodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hZGRlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIEZvcm1Db250cm9sTmFtZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXScsIHByb3ZpZGVyczogW2NvbnRyb2xOYW1lQmluZGluZ10gfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBGb3JtQ29udHJvbE5hbWUuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgICAgICB7IHR5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3B0aW9uYWwgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkhvc3QgfSwgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLlNraXBTZWxmIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUyxdIH0sXSB9LFxuICAgICAgICAgICAgeyB0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5PcHRpb25hbCB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuU2VsZiB9LCB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5qZWN0LCBhcmdzOiBbTkdfVkFMVUVfQUNDRVNTT1IsXSB9LF0gfSxcbiAgICAgICAgXTsgfTtcbiAgICAgICAgRm9ybUNvbnRyb2xOYW1lLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sTmFtZScsXSB9LF0sXG4gICAgICAgICAgICAnbW9kZWwnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ25nTW9kZWwnLF0gfSxdLFxuICAgICAgICAgICAgJ3VwZGF0ZSc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLF0gfSxdLFxuICAgICAgICAgICAgJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0LCBhcmdzOiBbJ2Rpc2FibGVkJyxdIH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEZvcm1Db250cm9sTmFtZTtcbiAgICB9KE5nQ29udHJvbCkpO1xuXG4gICAgdmFyIF9fZXh0ZW5kcyQxMyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFJFUVVJUkVEX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBSZXF1aXJlZFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBDSEVDS0JPWF9SRVFVSVJFRF9WQUxJREFUT1IgPSB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBfYW5ndWxhcl9jb3JlLmZvcndhcmRSZWYoZnVuY3Rpb24gKCkgeyByZXR1cm4gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRvciB0byBhbnkgY29udHJvbHMgbWFya2VkIHdpdGggdGhlXG4gICAgICAqIGByZXF1aXJlZGAgYXR0cmlidXRlLCB2aWEgdGhlIHtAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLlxuICAgICAgKiAqXG4gICAgICAqICMjIyBFeGFtcGxlXG4gICAgICAqICpcbiAgICAgICogYGBgXG4gICAgICAqIDxpbnB1dCBuYW1lPVwiZnVsbE5hbWVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBSZXF1aXJlZFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlcXVpcmVkVmFsaWRhdG9yKCkge1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUsIFwicmVxdWlyZWRcIiwge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0gez99IHZhbHVlXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgXCJcIiArIHZhbHVlICE9PSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZWQgPyBWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlID0gZnVuY3Rpb24gKGZuKSB7IHRoaXMuX29uQ2hhbmdlID0gZm47IH07XG4gICAgICAgIFJlcXVpcmVkVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICc6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0sOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtmb3JtQ29udHJvbF0sOm5vdChbdHlwZT1jaGVja2JveF0pW3JlcXVpcmVkXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtSRVFVSVJFRF9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucmVxdWlyZWRdJzogJ3JlcXVpcmVkID8gXCJcIiA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlZCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVxdWlyZWRWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICAvKipcbiAgICAgKiAgQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRvciB0byBjaGVja2JveCBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAgICAgICogYHJlcXVpcmVkYCBhdHRyaWJ1dGUsIHZpYSB0aGUge0BsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gICAgICAqICpcbiAgICAgICogIyMjIEV4YW1wbGVcbiAgICAgICogKlxuICAgICAgKiBgYGBcbiAgICAgICogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY3RpdmVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICAgICAgKiBgYGBcbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzJDEzKENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IoKSB7XG4gICAgICAgICAgICBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCA/IFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKGMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1jaGVja2JveF1bcmVxdWlyZWRdW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1jaGVja2JveF1bcmVxdWlyZWRdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtyZXF1aXJlZF1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfUkVRVUlSRURfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLnJlcXVpcmVkXSc6ICdyZXF1aXJlZCA/IFwiXCIgOiBudWxsJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICByZXR1cm4gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcjtcbiAgICB9KFJlcXVpcmVkVmFsaWRhdG9yKSk7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7QGxpbmsgTWluTGVuZ3RoVmFsaWRhdG9yfSB0byB7QGxpbmsgTkdfVkFMSURBVE9SU30uXG4gICAgICpcbiAgICAgKiAjIyBFeGFtcGxlOlxuICAgICAqXG4gICAgICoge0BleGFtcGxlIGNvbW1vbi9mb3Jtcy90cy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMgcmVnaW9uPSdtaW4nfVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIE1JTl9MRU5HVEhfVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1pbkxlbmd0aFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgQSBkaXJlY3RpdmUgd2hpY2ggaW5zdGFsbHMgdGhlIHtAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZWAsXG4gICAgICAqIGBmb3JtQ29udHJvbGAsIG9yIGNvbnRyb2wgd2l0aCBgbmdNb2RlbGAgdGhhdCBhbHNvIGhhcyBhIGBtaW5sZW5ndGhgIGF0dHJpYnV0ZS5cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBNaW5MZW5ndGhWYWxpZGF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBNaW5MZW5ndGhWYWxpZGF0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoJ21pbmxlbmd0aCcgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbkNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gY1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5taW5sZW5ndGggPT0gbnVsbCA/IG51bGwgOiB0aGlzLl92YWxpZGF0b3IoYyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZuXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl9jcmVhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1pbkxlbmd0aChwYXJzZUludCh0aGlzLm1pbmxlbmd0aCwgMTApKTtcbiAgICAgICAgfTtcbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuRGlyZWN0aXZlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbbWlubGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttaW5sZW5ndGhdW2Zvcm1Db250cm9sXSxbbWlubGVuZ3RoXVtuZ01vZGVsXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtNSU5fTEVOR1RIX1ZBTElEQVRPUl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiB7ICdbYXR0ci5taW5sZW5ndGhdJzogJ21pbmxlbmd0aCA/IG1pbmxlbmd0aCA6IG51bGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBNaW5MZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ21pbmxlbmd0aCc6IFt7IHR5cGU6IF9hbmd1bGFyX2NvcmUuSW5wdXQgfSxdLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTWluTGVuZ3RoVmFsaWRhdG9yO1xuICAgIH0oKSk7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7QGxpbmsgTWF4TGVuZ3RoVmFsaWRhdG9yfSB0byB7QGxpbmsgTkdfVkFMSURBVE9SU30uXG4gICAgICpcbiAgICAgKiAjIyBFeGFtcGxlOlxuICAgICAqXG4gICAgICoge0BleGFtcGxlIGNvbW1vbi9mb3Jtcy90cy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMgcmVnaW9uPSdtYXgnfVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIE1BWF9MRU5HVEhfVkFMSURBVE9SID0ge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICB1c2VFeGlzdGluZzogX2FuZ3VsYXJfY29yZS5mb3J3YXJkUmVmKGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1heExlbmd0aFZhbGlkYXRvcjsgfSksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAgQSBkaXJlY3RpdmUgd2hpY2ggaW5zdGFsbHMgdGhlIHtAbGluayBNYXhMZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZSxcbiAgICAgICogYGZvcm1Db250cm9sYCxcbiAgICAgICogb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1heGxlbmd0aGAgYXR0cmlidXRlLlxuICAgICAgKiAqXG4gICAgICovXG4gICAgdmFyIE1heExlbmd0aFZhbGlkYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIE1heExlbmd0aFZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm5nT25DaGFuZ2VzID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICgnbWF4bGVuZ3RoJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heGxlbmd0aCAhPSBudWxsID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSA9IGZ1bmN0aW9uIChmbikgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZhbGlkYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWF4TGVuZ3RoKHBhcnNlSW50KHRoaXMubWF4bGVuZ3RoLCAxMCkpO1xuICAgICAgICB9O1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5EaXJlY3RpdmUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1ttYXhsZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW21heGxlbmd0aF1bZm9ybUNvbnRyb2xdLFttYXhsZW5ndGhdW25nTW9kZWxdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyczogW01BWF9MRU5HVEhfVkFMSURBVE9SXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IHsgJ1thdHRyLm1heGxlbmd0aF0nOiAnbWF4bGVuZ3RoID8gbWF4bGVuZ3RoIDogbnVsbCcgfVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIE1heExlbmd0aFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgICAgICAnbWF4bGVuZ3RoJzogW3sgdHlwZTogX2FuZ3VsYXJfY29yZS5JbnB1dCB9LF0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBNYXhMZW5ndGhWYWxpZGF0b3I7XG4gICAgfSgpKTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBQQVRURVJOX1ZBTElEQVRPUiA9IHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgICAgdXNlRXhpc3Rpbmc6IF9hbmd1bGFyX2NvcmUuZm9yd2FyZFJlZihmdW5jdGlvbiAoKSB7IHJldHVybiBQYXR0ZXJuVmFsaWRhdG9yOyB9KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqICBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGBwYXR0ZXJuYCB2YWxpZGF0b3IgdG8gYW55IGNvbnRyb2xzIG1hcmtlZCB3aXRoIHRoZVxuICAgICAgKiBgcGF0dGVybmAgYXR0cmlidXRlLCB2aWEgdGhlIHtAbGluayBOR19WQUxJREFUT1JTfSBiaW5kaW5nLiBVc2VzIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgKiBhcyB0aGUgcmVnZXggdG8gdmFsaWRhdGUgQ29udHJvbCB2YWx1ZSBhZ2FpbnN0LiAgRm9sbG93cyBwYXR0ZXJuIGF0dHJpYnV0ZVxuICAgICAgKiBzZW1hbnRpY3M7IGkuZS4gcmVnZXggbXVzdCBtYXRjaCBlbnRpcmUgQ29udHJvbCB2YWx1ZS5cbiAgICAgICogKlxuICAgICAgKiAjIyMgRXhhbXBsZVxuICAgICAgKiAqXG4gICAgICAqIGBgYFxuICAgICAgKiA8aW5wdXQgW25hbWVdPVwiZnVsbE5hbWVcIiBwYXR0ZXJuPVwiW2EtekEtWiBdKlwiIG5nTW9kZWw+XG4gICAgICAqIGBgYFxuICAgICAqL1xuICAgIHZhciBQYXR0ZXJuVmFsaWRhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUGF0dGVyblZhbGlkYXRvcigpIHtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoJ3BhdHRlcm4nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcihjKTsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm5cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IucHJvdG90eXBlLnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UgPSBmdW5jdGlvbiAoZm4pIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5fY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkgeyB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKTsgfTtcbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkRpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnW3BhdHRlcm5dW2Zvcm1Db250cm9sTmFtZV0sW3BhdHRlcm5dW2Zvcm1Db250cm9sXSxbcGF0dGVybl1bbmdNb2RlbF0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUEFUVEVSTl9WQUxJREFUT1JdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogeyAnW2F0dHIucGF0dGVybl0nOiAncGF0dGVybiA/IHBhdHRlcm4gOiBudWxsJyB9XG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgUGF0dGVyblZhbGlkYXRvci5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICBQYXR0ZXJuVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICAgICAgJ3BhdHRlcm4nOiBbeyB0eXBlOiBfYW5ndWxhcl9jb3JlLklucHV0IH0sXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFBhdHRlcm5WYWxpZGF0b3I7XG4gICAgfSgpKTtcblxuICAgIC8qKlxuICAgICAqICAqXG4gICAgICAqIEl0IGlzIGVzc2VudGlhbGx5IHN5bnRhY3RpYyBzdWdhciB0aGF0IHNob3J0ZW5zIHRoZSBgbmV3IEZvcm1Hcm91cCgpYCxcbiAgICAgICogYG5ldyBGb3JtQ29udHJvbCgpYCwgYW5kIGBuZXcgRm9ybUFycmF5KClgIGJvaWxlcnBsYXRlIHRoYXQgY2FuIGJ1aWxkIHVwIGluIGxhcmdlclxuICAgICAgKiBmb3Jtcy5cbiAgICAgICogKlxuICAgICAgKiAqXG4gICAgICAqIFRvIHVzZSwgaW5qZWN0IGBGb3JtQnVpbGRlcmAgaW50byB5b3VyIGNvbXBvbmVudCBjbGFzcy4gWW91IGNhbiB0aGVuIGNhbGwgaXRzIG1ldGhvZHNcbiAgICAgICogZGlyZWN0bHkuXG4gICAgICAqICpcbiAgICAgICoge0BleGFtcGxlIGZvcm1zL3RzL2Zvcm1CdWlsZGVyL2Zvcm1fYnVpbGRlcl9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAgICAgICogKlxuICAgICAgKiAqICoqbnBtIHBhY2thZ2UqKjogYEBhbmd1bGFyL2Zvcm1zYFxuICAgICAgKiAqXG4gICAgICAqICogKipOZ01vZHVsZSoqOiB7QGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX1cbiAgICAgICogKlxuICAgICAqL1xuICAgIHZhciBGb3JtQnVpbGRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1CdWlsZGVyKCkge1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgQ29uc3RydWN0IGEgbmV3IHtAbGluayBGb3JtR3JvdXB9IHdpdGggdGhlIGdpdmVuIG1hcCBvZiBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICogVmFsaWQga2V5cyBmb3IgdGhlIGBleHRyYWAgcGFyYW1ldGVyIG1hcCBhcmUgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAgKiBTZWUgdGhlIHtAbGluayBGb3JtR3JvdXB9IGNvbnN0cnVjdG9yIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAgICAgICAgICogQHBhcmFtIHs/PX0gZXh0cmFcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5ncm91cCA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZywgZXh0cmEpIHtcbiAgICAgICAgICAgIGlmIChleHRyYSA9PT0gdm9pZCAwKSB7IGV4dHJhID0gbnVsbDsgfVxuICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gY29udHJvbHMgPSB0aGlzLl9yZWR1Y2VDb250cm9scyhjb250cm9sc0NvbmZpZyk7XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyB2YWxpZGF0b3IgPSBpc1ByZXNlbnQoZXh0cmEpID8gZXh0cmFbJ3ZhbGlkYXRvciddIDogbnVsbDtcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFzeW5jVmFsaWRhdG9yID0gaXNQcmVzZW50KGV4dHJhKSA/IGV4dHJhWydhc3luY1ZhbGlkYXRvciddIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICBDb25zdHJ1Y3QgYSBuZXcge0BsaW5rIEZvcm1Db250cm9sfSB3aXRoIHRoZSBnaXZlbiBgZm9ybVN0YXRlYCxgdmFsaWRhdG9yYCwgYW5kXG4gICAgICAgICAgKiBgYXN5bmNWYWxpZGF0b3JgLlxuICAgICAgICAgICogKlxuICAgICAgICAgICogYGZvcm1TdGF0ZWAgY2FuIGVpdGhlciBiZSBhIHN0YW5kYWxvbmUgdmFsdWUgZm9yIHRoZSBmb3JtIGNvbnRyb2wgb3IgYW4gb2JqZWN0XG4gICAgICAgICAgKiB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0dXMuXG4gICAgICAgICAgKiAqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICAgICAgICAgKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLmNvbnRyb2wgPSBmdW5jdGlvbiAoZm9ybVN0YXRlLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yID09PSB2b2lkIDApIHsgdmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9yID09PSB2b2lkIDApIHsgYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgQ29uc3RydWN0IGEge0BsaW5rIEZvcm1BcnJheX0gZnJvbSB0aGUgZ2l2ZW4gYGNvbnRyb2xzQ29uZmlnYCBhcnJheSBvZlxuICAgICAgICAgICogY29uZmlndXJhdGlvbiwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9uYWwgYHZhbGlkYXRvcmAgYW5kIGBhc3luY1ZhbGlkYXRvcmAuXG4gICAgICAgICAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAgICAgICAgICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gICAgICAgICAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBGb3JtQnVpbGRlci5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbiAoY29udHJvbHNDb25maWcsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yID09PSB2b2lkIDApIHsgdmFsaWRhdG9yID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKGFzeW5jVmFsaWRhdG9yID09PSB2b2lkIDApIHsgYXN5bmNWYWxpZGF0b3IgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9scyA9IGNvbnRyb2xzQ29uZmlnLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gX3RoaXMuX2NyZWF0ZUNvbnRyb2woYyk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgRm9ybUJ1aWxkZXIucHJvdG90eXBlLl9yZWR1Y2VDb250cm9scyA9IGZ1bmN0aW9uIChjb250cm9sc0NvbmZpZykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb250cm9sc0NvbmZpZykuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sc1tjb250cm9sTmFtZV0gPSBfdGhpcy5fY3JlYXRlQ29udHJvbChjb250cm9sc0NvbmZpZ1tjb250cm9sTmFtZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbnRyb2xDb25maWdcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIEZvcm1CdWlsZGVyLnByb3RvdHlwZS5fY3JlYXRlQ29udHJvbCA9IGZ1bmN0aW9uIChjb250cm9sQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtR3JvdXAgfHxcbiAgICAgICAgICAgICAgICBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xDb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xDb25maWcpKSB7XG4gICAgICAgICAgICAgICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gdmFsdWUgPSBjb250cm9sQ29uZmlnWzBdO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIHZhbGlkYXRvciA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMSA/IGNvbnRyb2xDb25maWdbMV0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciAvKiogQHR5cGUgez99ICovIGFzeW5jVmFsaWRhdG9yID0gY29udHJvbENvbmZpZy5sZW5ndGggPiAyID8gY29udHJvbENvbmZpZ1syXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCh2YWx1ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sKGNvbnRyb2xDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBGb3JtQnVpbGRlci5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLkluamVjdGFibGUgfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1CdWlsZGVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBGb3JtQnVpbGRlcjtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogQHN0YWJsZVxuICAgICAqL1xuICAgIHZhciAvKiogQHR5cGUgez99ICovIFZFUlNJT04gPSBuZXcgX2FuZ3VsYXJfY29yZS5WZXJzaW9uKCcyLjMuMScpO1xuXG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyA9IFtcbiAgICAgICAgTmdTZWxlY3RPcHRpb24sXG4gICAgICAgIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24sXG4gICAgICAgIERlZmF1bHRWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBOdW1iZXJWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBSYW5nZVZhbHVlQWNjZXNzb3IsXG4gICAgICAgIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBOZ0NvbnRyb2xTdGF0dXMsXG4gICAgICAgIE5nQ29udHJvbFN0YXR1c0dyb3VwLFxuICAgICAgICBSZXF1aXJlZFZhbGlkYXRvcixcbiAgICAgICAgTWluTGVuZ3RoVmFsaWRhdG9yLFxuICAgICAgICBNYXhMZW5ndGhWYWxpZGF0b3IsXG4gICAgICAgIFBhdHRlcm5WYWxpZGF0b3IsXG4gICAgICAgIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsXG4gICAgXTtcbiAgICB2YXIgLyoqIEB0eXBlIHs/fSAqLyBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFUyA9IFtOZ01vZGVsLCBOZ01vZGVsR3JvdXAsIE5nRm9ybV07XG4gICAgdmFyIC8qKiBAdHlwZSB7P30gKi8gUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVMgPSBbRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Hcm91cERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBGb3JtR3JvdXBOYW1lLCBGb3JtQXJyYXlOYW1lXTtcbiAgICAvKipcbiAgICAgKiAgSW50ZXJuYWwgbW9kdWxlIHVzZWQgZm9yIHNoYXJpbmcgZGlyZWN0aXZlcyBiZXR3ZWVuIEZvcm1zTW9kdWxlIGFuZCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgICovXG4gICAgdmFyIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogX2FuZ3VsYXJfY29yZS5OZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVMsXG4gICAgICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgICAgICBdO1xuICAgICAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICAgICAgSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9O1xuICAgICAgICByZXR1cm4gSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZTtcbiAgICB9KCkpO1xuXG4gICAgLyoqXG4gICAgICogIFRoZSBuZyBtb2R1bGUgZm9yIGZvcm1zLlxuICAgICAqL1xuICAgIHZhciBGb3Jtc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEZvcm1zTW9kdWxlKCkge1xuICAgICAgICB9XG4gICAgICAgIEZvcm1zTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgICAgICAgICB7IHR5cGU6IF9hbmd1bGFyX2NvcmUuTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbUmFkaW9Db250cm9sUmVnaXN0cnldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTXVxuICAgICAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICAgICAgXTtcbiAgICAgICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgICAgIEZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBGb3Jtc01vZHVsZTtcbiAgICB9KCkpO1xuICAgIC8qKlxuICAgICAqICBUaGUgbmcgbW9kdWxlIGZvciByZWFjdGl2ZSBmb3Jtcy5cbiAgICAgKi9cbiAgICB2YXIgUmVhY3RpdmVGb3Jtc01vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFJlYWN0aXZlRm9ybXNNb2R1bGUoKSB7XG4gICAgICAgIH1cbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBfYW5ndWxhcl9jb3JlLk5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXIsIFJhZGlvQ29udHJvbFJlZ2lzdHJ5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU11cbiAgICAgICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgICAgIF07XG4gICAgICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG4gICAgICAgIHJldHVybiBSZWFjdGl2ZUZvcm1zTW9kdWxlO1xuICAgIH0oKSk7XG5cbiAgICBleHBvcnRzLkFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSA9IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZTtcbiAgICBleHBvcnRzLkFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlID0gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLkNvbnRyb2xDb250YWluZXIgPSBDb250cm9sQ29udGFpbmVyO1xuICAgIGV4cG9ydHMuTkdfVkFMVUVfQUNDRVNTT1IgPSBOR19WQUxVRV9BQ0NFU1NPUjtcbiAgICBleHBvcnRzLkRlZmF1bHRWYWx1ZUFjY2Vzc29yID0gRGVmYXVsdFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5OZ0NvbnRyb2wgPSBOZ0NvbnRyb2w7XG4gICAgZXhwb3J0cy5OZ0NvbnRyb2xTdGF0dXMgPSBOZ0NvbnRyb2xTdGF0dXM7XG4gICAgZXhwb3J0cy5OZ0NvbnRyb2xTdGF0dXNHcm91cCA9IE5nQ29udHJvbFN0YXR1c0dyb3VwO1xuICAgIGV4cG9ydHMuTmdGb3JtID0gTmdGb3JtO1xuICAgIGV4cG9ydHMuTmdNb2RlbCA9IE5nTW9kZWw7XG4gICAgZXhwb3J0cy5OZ01vZGVsR3JvdXAgPSBOZ01vZGVsR3JvdXA7XG4gICAgZXhwb3J0cy5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yID0gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLkZvcm1Db250cm9sRGlyZWN0aXZlID0gRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5Gb3JtQ29udHJvbE5hbWUgPSBGb3JtQ29udHJvbE5hbWU7XG4gICAgZXhwb3J0cy5Gb3JtR3JvdXBEaXJlY3RpdmUgPSBGb3JtR3JvdXBEaXJlY3RpdmU7XG4gICAgZXhwb3J0cy5Gb3JtQXJyYXlOYW1lID0gRm9ybUFycmF5TmFtZTtcbiAgICBleHBvcnRzLkZvcm1Hcm91cE5hbWUgPSBGb3JtR3JvdXBOYW1lO1xuICAgIGV4cG9ydHMuTmdTZWxlY3RPcHRpb24gPSBOZ1NlbGVjdE9wdGlvbjtcbiAgICBleHBvcnRzLlNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yID0gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3I7XG4gICAgZXhwb3J0cy5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yID0gU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgICBleHBvcnRzLkNoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IgPSBDaGVja2JveFJlcXVpcmVkVmFsaWRhdG9yO1xuICAgIGV4cG9ydHMuTWF4TGVuZ3RoVmFsaWRhdG9yID0gTWF4TGVuZ3RoVmFsaWRhdG9yO1xuICAgIGV4cG9ydHMuTWluTGVuZ3RoVmFsaWRhdG9yID0gTWluTGVuZ3RoVmFsaWRhdG9yO1xuICAgIGV4cG9ydHMuUGF0dGVyblZhbGlkYXRvciA9IFBhdHRlcm5WYWxpZGF0b3I7XG4gICAgZXhwb3J0cy5SZXF1aXJlZFZhbGlkYXRvciA9IFJlcXVpcmVkVmFsaWRhdG9yO1xuICAgIGV4cG9ydHMuRm9ybUJ1aWxkZXIgPSBGb3JtQnVpbGRlcjtcbiAgICBleHBvcnRzLkFic3RyYWN0Q29udHJvbCA9IEFic3RyYWN0Q29udHJvbDtcbiAgICBleHBvcnRzLkZvcm1BcnJheSA9IEZvcm1BcnJheTtcbiAgICBleHBvcnRzLkZvcm1Db250cm9sID0gRm9ybUNvbnRyb2w7XG4gICAgZXhwb3J0cy5Gb3JtR3JvdXAgPSBGb3JtR3JvdXA7XG4gICAgZXhwb3J0cy5OR19BU1lOQ19WQUxJREFUT1JTID0gTkdfQVNZTkNfVkFMSURBVE9SUztcbiAgICBleHBvcnRzLk5HX1ZBTElEQVRPUlMgPSBOR19WQUxJREFUT1JTO1xuICAgIGV4cG9ydHMuVmFsaWRhdG9ycyA9IFZhbGlkYXRvcnM7XG4gICAgZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcbiAgICBleHBvcnRzLkZvcm1zTW9kdWxlID0gRm9ybXNNb2R1bGU7XG4gICAgZXhwb3J0cy5SZWFjdGl2ZUZvcm1zTW9kdWxlID0gUmVhY3RpdmVGb3Jtc01vZHVsZTtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtDb21wb25lbnR9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBbQ29tcG9uZW50IGRlc2NyaXB0aW9uXVxyXG4gKiBAcGFyYW0gIHsnbXktYXBwJ30ge3NlbGVjdG9yIFtkZXNjcmlwdGlvbl1cclxuICogQHBhcmFtICB7YCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXY+ICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiaW5kZXhcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+aW5kZXg8L2E+ICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwibG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+bG9naW48L2E+ICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5pbmZvPC9hPiAgICAgICAgICAgICAgICA8L25hdj4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiAgICAgICAgYH0gdGVtcGxhdGUgW2Rlc2NyaXB0aW9uXVxyXG4gKiBAcGFyYW0gIHtbdHlwZV19ICAgfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICAgICAgdGVtcGxhdGU6ICBgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmAsXHJcbiAgICAgICAgLy8gc3R5bGVzOiBbcmVxdWlyZShyZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZS9tYWluLmNzcycpKV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL2FwcC9zcmMvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50Mn0gZnJvbSAnLi4vY29tcG9uZW50L2xvZ2luMi9sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQyIH0sXHJcbiAgeyBwYXRoOiAnbG9naW4yJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudDIgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzLHsgdXNlSGFzaDogdHJ1ZSB9KVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2dpbkNvbXBvbmVudDIsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGVcclxuICBdLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9hcHAvc3JjL2FwcFJvdXRlci9hcHBSb3V0ZXIubW9kdWxlLnRzIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmh0bWwnKVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQyIHtcclxuXHJcbiAgICB1c2VybmFtZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcGFzc3dvcmQ6c3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5IYW5kbGUoKTp2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy51c2VybmFtZSA9PSAnYWRtaW4nICYmIHRoaXMucGFzc3dvcmQgPT0gXCIxMjM0NTZcIikge1xyXG4gICAgICAgICAgICBhbGVydCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vYXBwL3NyYy9jb21wb25lbnQvbG9naW4yL2xvZ2luLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ1aSBncmlkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2l4IHdpZGUgY2VudGVyZWQgY29sdW1uXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJ1aSBmbHVpZCBmb3JtIHNlZ21lbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwidWkgc21hbGwgY2VudGVyZWQgY2lyY3VsYXIgaW1hZ2VcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2ltZy9hbmd1bGFyLnBuZ1wiKSArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxsYWJlbD7otKblj7c8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBsZWZ0IGljb24gaW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6LSm5Y+3XFxcIiAgLz5cXHJcXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwidXNlciBpY29uXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxhYmVsPuWvhueggTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVpIGxlZnQgaWNvbiBpbnB1dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwi5a+G56CBXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJsb2NrIGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInVpIGZsdWlkIGxpbmtlZGluIGJ1dHRvblxcXCI+U3VibWl0PC9hPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zcmMvY29tcG9uZW50L2xvZ2luMi9sb2dpbi5odG1sXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJidWlsZC9hc3NldHMvYW5ndWxhci5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zcmMvYXNzZXRzL2ltZy9hbmd1bGFyLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==