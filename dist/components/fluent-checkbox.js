"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentCheckbox = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentCheckbox extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-checkbox',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentCheckbox = FluentCheckbox;
//# sourceMappingURL=fluent-checkbox.js.map