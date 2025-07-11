/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const __wbg_rsaprivatekey_free: (a: number, b: number) => void;
export const rsaprivatekey_new: (a: number) => [number, number, number];
export const rsaprivatekey_from_pkcs1_der: (a: number) => [number, number, number];
export const rsaprivatekey_from_pkcs8_der: (a: number) => [number, number, number];
export const rsaprivatekey_to_pkcs1_der: (a: number) => [number, number, number];
export const rsaprivatekey_to_pkcs8_der: (a: number) => [number, number, number];
export const rsaprivatekey_to_public_key: (a: number) => number;
export const rsaprivatekey_sign_pkcs1v15_unprefixed: (a: number, b: number) => [number, number, number];
export const __wbg_rsapublickey_free: (a: number, b: number) => void;
export const rsapublickey_from_pkcs1_der: (a: number) => [number, number, number];
export const rsapublickey_from_public_key_der: (a: number) => [number, number, number];
export const rsapublickey_to_pkcs1_der: (a: number) => [number, number, number];
export const rsapublickey_to_public_key_der: (a: number) => [number, number, number];
export const rsapublickey_verify_pkcs1v15_unprefixed: (a: number, b: number, c: number) => number;
export const __wbg_memory_free: (a: number, b: number) => void;
export const memory_new: (a: number, b: number) => number;
export const memory_ptr: (a: number) => number;
export const memory_len: (a: number) => number;
export const __wbindgen_exn_store: (a: number) => void;
export const __externref_table_alloc: () => number;
export const __wbindgen_export_2: WebAssembly.Table;
export const __externref_table_dealloc: (a: number) => void;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_start: () => void;
