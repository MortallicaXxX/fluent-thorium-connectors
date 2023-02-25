"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentAnchor = void 0;
const thoriumjs_1 = require("thoriumjs");
/**
 * ### fluent-anchor
 * fluent-anchor is a web component implementation of an HTML anchor element. The fluent-components anchor supports the same visual appearances as the button component (accent, lightweight, neutral, outline, stealth) as well as a hypertext appearance for use inline with text.
 */
class FluentAnchor extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-anchor',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentAnchor = FluentAnchor;
//# sourceMappingURL=fluent-anchor.js.map