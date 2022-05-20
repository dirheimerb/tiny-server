"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
var http = require("http");
var https = require("https");
var tunnel = require("tunnel");
var pm = require("./proxy");
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    var proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
var HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect,
];
var HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout,
];
var RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
var ExponentialBackoffCeiling = 10;
var ExponentialBackoffTimeSlice = 5;
var HttpClientError = /** @class */ (function (_super) {
    __extends(HttpClientError, _super);
    function HttpClientError(message, statusCode) {
        var _this = _super.call(this, message) || this;
        _this.name = 'HttpClientError';
        _this.statusCode = statusCode;
        Object.setPrototypeOf(_this, HttpClientError.prototype);
        return _this;
    }
    return HttpClientError;
}(Error));
exports.HttpClientError = HttpClientError;
var HttpClientResponse = /** @class */ (function () {
    function HttpClientResponse(message) {
        this.message = message;
    }
    HttpClientResponse.prototype.readBody = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var output;
                        return __generator(this, function (_a) {
                            output = Buffer.alloc(0);
                            this.message.on('data', function (chunk) {
                                output = Buffer.concat([output, chunk]);
                            });
                            this.message.on('end', function () {
                                resolve(output.toString());
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return HttpClientResponse;
}());
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    var parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
var HttpClient = /** @class */ (function () {
    function HttpClient(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    HttpClient.prototype.options = function (requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('OPTIONS', requestUrl, null, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.get = function (requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('GET', requestUrl, null, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.del = function (requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('DELETE', requestUrl, null, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.post = function (requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('POST', requestUrl, data, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.patch = function (requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('PATCH', requestUrl, data, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.put = function (requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('PUT', requestUrl, data, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.head = function (requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request('HEAD', requestUrl, null, additionalHeaders || {})];
            });
        });
    };
    HttpClient.prototype.sendStream = function (verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request(verb, requestUrl, stream, additionalHeaders)];
            });
        });
    };
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    HttpClient.prototype.getJson = function (requestUrl, additionalHeaders) {
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                        return [4 /*yield*/, this.get(requestUrl, additionalHeaders)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, this._processResponse(res, this.requestOptions)];
                }
            });
        });
    };
    HttpClient.prototype.postJson = function (requestUrl, obj, additionalHeaders) {
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.stringify(obj, null, 2);
                        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                        return [4 /*yield*/, this.post(requestUrl, data, additionalHeaders)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, this._processResponse(res, this.requestOptions)];
                }
            });
        });
    };
    HttpClient.prototype.putJson = function (requestUrl, obj, additionalHeaders) {
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.stringify(obj, null, 2);
                        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                        return [4 /*yield*/, this.put(requestUrl, data, additionalHeaders)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, this._processResponse(res, this.requestOptions)];
                }
            });
        });
    };
    HttpClient.prototype.patchJson = function (requestUrl, obj, additionalHeaders) {
        if (additionalHeaders === void 0) { additionalHeaders = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.stringify(obj, null, 2);
                        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
                        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
                        return [4 /*yield*/, this.patch(requestUrl, data, additionalHeaders)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, this._processResponse(res, this.requestOptions)];
                }
            });
        });
    };
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    HttpClient.prototype.request = function (verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedUrl, info, maxTries, numTries, response, authenticationHandler, _i, _a, handler, redirectsRemaining, redirectUrl, parsedRedirectUrl, header;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this._disposed) {
                            throw new Error('Client has already been disposed.');
                        }
                        parsedUrl = new URL(requestUrl);
                        info = this._prepareRequest(verb, parsedUrl, headers);
                        maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                            ? this._maxRetries + 1
                            : 1;
                        numTries = 0;
                        _b.label = 1;
                    case 1: return [4 /*yield*/, this.requestRaw(info, data)];
                    case 2:
                        response = _b.sent();
                        // Check if it's an authentication challenge
                        if (response &&
                            response.message &&
                            response.message.statusCode === HttpCodes.Unauthorized) {
                            authenticationHandler = void 0;
                            for (_i = 0, _a = this.handlers; _i < _a.length; _i++) {
                                handler = _a[_i];
                                if (handler.canHandleAuthentication(response)) {
                                    authenticationHandler = handler;
                                    break;
                                }
                            }
                            if (authenticationHandler) {
                                return [2 /*return*/, authenticationHandler.handleAuthentication(this, info, data)];
                            }
                            else {
                                // We have received an unauthorized response but have no handlers to handle it.
                                // Let the response return to the caller.
                                return [2 /*return*/, response];
                            }
                        }
                        redirectsRemaining = this._maxRedirects;
                        _b.label = 3;
                    case 3:
                        if (!(response.message.statusCode &&
                            HttpRedirectCodes.includes(response.message.statusCode) &&
                            this._allowRedirects &&
                            redirectsRemaining > 0)) return [3 /*break*/, 6];
                        redirectUrl = response.message.headers['location'];
                        if (!redirectUrl) {
                            // if there's no location to redirect to, we won't
                            return [3 /*break*/, 6];
                        }
                        parsedRedirectUrl = new URL(redirectUrl);
                        if (parsedUrl.protocol === 'https:' &&
                            parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                            !this._allowRedirectDowngrade) {
                            throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                        }
                        // we need to finish reading the response before reassigning response
                        // which will leak the open socket.
                        return [4 /*yield*/, response.readBody()];
                    case 4:
                        // we need to finish reading the response before reassigning response
                        // which will leak the open socket.
                        _b.sent();
                        // strip authorization header if redirected to a different hostname
                        if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                            for (header in headers) {
                                // header names are case insensitive
                                if (header.toLowerCase() === 'authorization') {
                                    delete headers[header];
                                }
                            }
                        }
                        // let's make the request with the new redirectUrl
                        info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                        return [4 /*yield*/, this.requestRaw(info, data)];
                    case 5:
                        response = _b.sent();
                        redirectsRemaining--;
                        return [3 /*break*/, 3];
                    case 6:
                        if (!response.message.statusCode ||
                            !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                            // If not a retry code, return immediately instead of retrying
                            return [2 /*return*/, response];
                        }
                        numTries += 1;
                        if (!(numTries < maxTries)) return [3 /*break*/, 9];
                        return [4 /*yield*/, response.readBody()];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this._performExponentialBackoff(numTries)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        if (numTries < maxTries) return [3 /*break*/, 1];
                        _b.label = 10;
                    case 10: return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    HttpClient.prototype.dispose = function () {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    };
    /**
     * Raw request.
     * @param info
     * @param data
     */
    HttpClient.prototype.requestRaw = function (info, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        function callbackForResult(err, res) {
                            if (err) {
                                reject(err);
                            }
                            else if (!res) {
                                // If `err` is not passed, then `res` must be passed.
                                reject(new Error('Unknown error'));
                            }
                            else {
                                resolve(res);
                            }
                        }
                        _this.requestRawWithCallback(info, data, callbackForResult);
                    })];
            });
        });
    };
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    HttpClient.prototype.requestRawWithCallback = function (info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        var callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        var req = info.httpModule.request(info.options, function (msg) {
            var res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        var socket;
        req.on('socket', function (sock) {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, function () {
            if (socket) {
                socket.end();
            }
            handleResult(new Error("Request timeout: ".concat(info.options.path)));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    };
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    HttpClient.prototype.getAgent = function (serverUrl) {
        var parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    };
    HttpClient.prototype._prepareRequest = function (method, requestUrl, headers) {
        var info = {};
        info.parsedUrl = requestUrl;
        var usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        var defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
                var handler = _a[_i];
                handler.prepareRequest(info.options);
            }
        }
        return info;
    };
    HttpClient.prototype._mergeHeaders = function (headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    };
    HttpClient.prototype._getExistingOrDefaultHeader = function (additionalHeaders, header, _default) {
        var clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    };
    HttpClient.prototype._getAgent = function (parsedUrl) {
        var agent;
        var proxyUrl = pm.getProxyUrl(parsedUrl);
        var useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        var usingSsl = parsedUrl.protocol === 'https:';
        var maxSockets = 100;
        if (this.requestOptions) {
            maxSockets =
                this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            var agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: __assign(__assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: "".concat(proxyUrl.username, ":").concat(proxyUrl.password)
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            var tunnelAgent = void 0;
            var overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            var options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    };
    HttpClient.prototype._performExponentialBackoff = function (retryNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var ms;
            return __generator(this, function (_a) {
                retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
                ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); })];
            });
        });
    };
    HttpClient.prototype._processResponse = function (res, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        // get the result from the body
                        function dateTimeDeserializer(key, value) {
                            if (typeof value === 'string') {
                                var a = new Date(value);
                                if (!isNaN(a.valueOf())) {
                                    return a;
                                }
                            }
                            return value;
                        }
                        var statusCode, response, obj, contents, err_1, msg, err;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    statusCode = res.message.statusCode || 0;
                                    response = {
                                        statusCode: statusCode,
                                        result: null,
                                        headers: {}
                                    };
                                    // not found leads to null obj returned
                                    if (statusCode === HttpCodes.NotFound) {
                                        resolve(response);
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, res.readBody()];
                                case 2:
                                    contents = _a.sent();
                                    if (contents && contents.length > 0) {
                                        if (options && options.deserializeDates) {
                                            obj = JSON.parse(contents, dateTimeDeserializer);
                                        }
                                        else {
                                            obj = JSON.parse(contents);
                                        }
                                        response.result = obj;
                                    }
                                    response.headers = res.message.headers;
                                    return [3 /*break*/, 4];
                                case 3:
                                    err_1 = _a.sent();
                                    return [3 /*break*/, 4];
                                case 4:
                                    // note that 3xx redirects are handled by the http layer.
                                    if (statusCode > 299) {
                                        msg = void 0;
                                        // if exception/error in body, attempt to get better error
                                        if (obj && obj.message) {
                                            msg = obj.message;
                                        }
                                        else if (contents && contents.length > 0) {
                                            // it may be the case that the exception is in the body message as string
                                            msg = contents;
                                        }
                                        else {
                                            msg = "Failed request: (".concat(statusCode, ")");
                                        }
                                        err = new HttpClientError(msg, statusCode);
                                        err.result = response.result;
                                        reject(err);
                                    }
                                    else {
                                        resolve(response);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
var lowercaseKeys = function (obj) {
    return Object.keys(obj).reduce(function (c, k) { return ((c[k.toLowerCase()] = obj[k]), c); }, {});
};
