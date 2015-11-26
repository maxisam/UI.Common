/* tslint:disable:typedef comment-format */
/// <reference path="typings/angularjs/angular.d.ts" />

module UI {
    "use strict";

    export class DirectiveFactory {
        static GetFactoryFor<T extends ng.IDirective>(classType: Function): ng.IDirectiveFactory {
            var factory = (...args): T => {
                var directive = <any>classType;
                return new directive(...args); //Typescript 1.6 (return new (directive.bind(directive, ...args));)
            };
            factory.$inject = classType.$inject;
            return factory;
        }
    }

    export class GeneralFactory {
        static GetFactoryFor<T>(ClassType: Function): any {
            var factory = (...args): T => {
                var cType = <any>ClassType;
                return new cType(...args);  //Typescript 1.6 (return new (cType.bind(cType, ...args));)
            };
            factory.$inject = ClassType.$inject;
            return factory;
        }
    }
}
