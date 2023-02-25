"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentTextField = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentTextField extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-text-field',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentTextField = FluentTextField;
//# sourceMappingURL=fluent-text-field.js.map