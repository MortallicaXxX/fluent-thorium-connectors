"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thoriumjs_1 = require("thoriumjs");
class FluentDataGrid extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options, data) {
        super({
            type: 'fluent-data-grid',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: Object.assign(Object.assign({}, (options && options.proto ? options.proto : {})), { AfterInitialise() {
                    if (data)
                        this.rowsData = data;
                    if (options && options.proto && options.proto.AfterInitialise) {
                        options.proto.AfterInitialise();
                    }
                } })
        });
    }
}
exports.FluentDataGrid = FluentDataGrid;
//# sourceMappingURL=fluent-data-grid.js.map