"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thoriumjs_1 = require("thoriumjs");
/**
 * ### fluent-accordion
 * An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.
 */
class FluentNumberField extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-number-field',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentNumberField = FluentNumberField;
//# sourceMappingURL=fluent-number-field.js.map