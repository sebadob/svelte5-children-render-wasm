import * as wasm from "./wasm_modules_bg.wasm";
import {__wbg_set_wasm} from "./wasm_modules_bg.js";

__wbg_set_wasm(wasm);
export * from "./wasm_modules_bg.js";
