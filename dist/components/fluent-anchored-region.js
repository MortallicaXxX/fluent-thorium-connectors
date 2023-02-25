"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentAnchoredRegion = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentAnchoredRegion extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-anchored-region',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentAnchoredRegion = FluentAnchoredRegion;
//# sourceMappingURL=fluent-anchored-region.js.map