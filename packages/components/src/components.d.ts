import * as components from './index'
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        PgButton: typeof components.Button;
        pgIcon: typeof components.Icon;
    }

}
export {};