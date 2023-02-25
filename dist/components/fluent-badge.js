"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentBadge = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentBadge extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-badge',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentBadge = FluentBadge;
//# sourceMappingURL=fluent-badge.js.map