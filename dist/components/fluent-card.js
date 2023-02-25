"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentCard = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentCard extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-card',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentCard = FluentCard;
//# sourceMappingURL=fluent-card.js.map