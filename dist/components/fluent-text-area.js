"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thoriumjs_1 = require("thoriumjs");
class FluentTextArea extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-text-area',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentTextArea = FluentTextArea;
//# sourceMappingURL=fluent-text-area.js.map