"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentFlipper = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentFlipper extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-flipper',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentFlipper = FluentFlipper;
//# sourceMappingURL=fluent-flipper.js.map