"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentButton = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentButton extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-button',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentButton = FluentButton;
//# sourceMappingURL=fluent-button.js.map