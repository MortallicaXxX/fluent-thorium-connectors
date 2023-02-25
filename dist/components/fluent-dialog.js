"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentDialog = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentDialog extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-dialog',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentDialog = FluentDialog;
//# sourceMappingURL=fluent-dialog.js.map