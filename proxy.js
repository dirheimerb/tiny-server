"use strict";
exports.__esModule = true;
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    var usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    var proxyVar = (function () {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    var noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    var reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    var upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push("".concat(upperReqHosts[0], ":").concat(reqPort));
    }
    var _loop_1 = function (upperNoProxyItem) {
        if (upperReqHosts.some(function (x) { return x === upperNoProxyItem; })) {
            return { value: true };
        }
    };
    // Compare request host against noproxy
    for (var _i = 0, _a = noProxy
        .split(',')
        .map(function (x) { return x.trim().toUpperCase(); })
        .filter(function (x) { return x; }); _i < _a.length; _i++) {
        var upperNoProxyItem = _a[_i];
        var state_1 = _loop_1(upperNoProxyItem);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
exports.checkBypass = checkBypass;
