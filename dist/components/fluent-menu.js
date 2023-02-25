"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentMenuItem = exports.FluentMenu = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentMenu extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-menu',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentMenu = FluentMenu;
class FluentMenuItem extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-menu-item',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentMenuItem = FluentMenuItem;
//# sourceMappingURL=fluent-menu.js.map