/* tslint:disable */
/* eslint-disable */
export class Memory {
  [Symbol.dispose](): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}
export class RsaPrivateKey {
  [Symbol.dispose](): void;
  constructor(length: number);
  static from_pkcs1_der(input: Memory): RsaPrivateKey;
  static from_pkcs8_der(input: Memory): RsaPrivateKey;
  to_pkcs1_der(): Memory;
  to_pkcs8_der(): Memory;
  to_public_key(): RsaPublicKey;
  sign_pkcs1v15_unprefixed(input: Memory): Memory;
}
export class RsaPublicKey {
  private constructor();
  [Symbol.dispose](): void;
  static from_pkcs1_der(input: Memory): RsaPublicKey;
  static from_public_key_der(input: Memory): RsaPublicKey;
  to_pkcs1_der(): Memory;
  to_public_key_der(): Memory;
  verify_pkcs1v15_unprefixed(input: Memory, signature: Memory): boolean;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_rsaprivatekey_free: (a: number, b: number) => void;
  readonly rsaprivatekey_new: (a: number) => [number, number, number];
  readonly rsaprivatekey_from_pkcs1_der: (a: number) => [number, number, number];
  readonly rsaprivatekey_from_pkcs8_der: (a: number) => [number, number, number];
  readonly rsaprivatekey_to_pkcs1_der: (a: number) => [number, number, number];
  readonly rsaprivatekey_to_pkcs8_der: (a: number) => [number, number, number];
  readonly rsaprivatekey_to_public_key: (a: number) => number;
  readonly rsaprivatekey_sign_pkcs1v15_unprefixed: (a: number, b: number) => [number, number, number];
  readonly __wbg_rsapublickey_free: (a: number, b: number) => void;
  readonly rsapublickey_from_pkcs1_der: (a: number) => [number, number, number];
  readonly rsapublickey_from_public_key_der: (a: number) => [number, number, number];
  readonly rsapublickey_to_pkcs1_der: (a: number) => [number, number, number];
  readonly rsapublickey_to_public_key_der: (a: number) => [number, number, number];
  readonly rsapublickey_verify_pkcs1v15_unprefixed: (a: number, b: number, c: number) => number;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
