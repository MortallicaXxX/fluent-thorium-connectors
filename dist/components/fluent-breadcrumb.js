"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentBreadcrumbItem = exports.FluentBreadcrumb = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentBreadcrumb extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-breadcrumb',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentBreadcrumb = FluentBreadcrumb;
class FluentBreadcrumbItem extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-breadcrumb-item',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentBreadcrumbItem = FluentBreadcrumbItem;
//# sourceMappingURL=fluent-breadcrumb.js.map