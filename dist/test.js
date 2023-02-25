"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsListHeader = void 0;
const thoriumjs_1 = require("thoriumjs");
const _1 = require("./");
class DetailsListHeader extends thoriumjs_1.Components.Nav {
    constructor() {
        super({
            childrens: [
                new _1.FluentButton({})
            ]
        });
    }
}
exports.DetailsListHeader = DetailsListHeader;
class EditableDetailsList extends thoriumjs_1.Components.Div {
    constructor() {
        super({
            childrens: [
                new DetailsListHeader(),
                new _1.FluentDataGrid({
                    prop: {},
                    proto: {}
                }, [
                    {
                        name: 'benoit',
                        age: '29'
                    },
                    {
                        name: 'guillaume',
                        age: '28'
                    },
                ])
            ]
        });
    }
}
exports.default = EditableDetailsList;
//# sourceMappingURL=test.js.map