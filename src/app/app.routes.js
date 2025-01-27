"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var container_component_1 = require("./container/container.component");
var home_component_1 = require("./container/home/home.component");
var form_component_1 = require("./container/form/form.component");
var result_component_1 = require("./container/result/result.component");
exports.routes = [
    {
        path: 'savings-prediction',
        component: container_component_1.ContainerComponent,
        children: [
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'form', component: form_component_1.FormComponent },
            { path: 'result', component: result_component_1.ResultComponent }
        ]
    }
];
