"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thoriumjs_1 = require("thoriumjs");
class FluentComboBox extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-combobox',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentComboBox = FluentComboBox;
//# sourceMappingURL=fluent-combo-box.js.map