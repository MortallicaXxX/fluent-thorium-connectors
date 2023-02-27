"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FluentTabPanel = exports.FluentTab = exports.FluentTabs = void 0;
const thoriumjs_1 = require("thoriumjs");
class FluentTabs extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-tabs',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentTabs = FluentTabs;
class FluentTab extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-tab',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentTab = FluentTab;
class FluentTabPanel extends thoriumjs_1.UserInterface.ElementUI {
    constructor(options) {
        super({
            type: 'fluent-tab-panel',
            prop: (options && options.prop ? options.prop : {}),
            childrens: (options && options.childrens ? options.childrens : []),
            proto: (options && options.proto ? options.proto : {})
        });
    }
}
exports.FluentTabPanel = FluentTabPanel;
//# sourceMappingURL=fluent-tabs.js.map