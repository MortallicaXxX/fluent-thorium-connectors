"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentDivider = void 0;
const thoriumjs_1 = require("thoriumjs");
/**
 * As the name implies, it divides one section of content from another with a line. A web component implementation of a horizontal rule.
 */
class FluentDivider extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-divider',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentDivider = FluentDivider;
//# sourceMappingURL=fluent-divider.js.map