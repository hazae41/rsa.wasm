/* tslint:disable */
/* eslint-disable */
/**
*/
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
/**
*/
export class RsaPrivateKey {
  [Symbol.dispose](): void;
/**
* @param {number} length
*/
  constructor(length: number);
/**
* @param {Memory} input
* @returns {RsaPrivateKey}
*/
  static from_pkcs1_der(input: Memory): RsaPrivateKey;
/**
* @param {Memory} input
* @returns {RsaPrivateKey}
*/
  static from_pkcs8_der(input: Memory): RsaPrivateKey;
/**
* @returns {Memory}
*/
  to_pkcs1_der(): Memory;
/**
* @returns {Memory}
*/
  to_pkcs8_der(): Memory;
/**
* @returns {RsaPublicKey}
*/
  to_public_key(): RsaPublicKey;
/**
* @param {Memory} input
* @returns {Memory}
*/
  sign_pkcs1v15_unprefixed(input: Memory): Memory;
}
/**
*/
export class RsaPublicKey {
  [Symbol.dispose](): void;
/**
* @param {Memory} input
* @returns {RsaPublicKey}
*/
  static from_pkcs1_der(input: Memory): RsaPublicKey;
/**
* @param {Memory} input
* @returns {RsaPublicKey}
*/
  static from_public_key_der(input: Memory): RsaPublicKey;
/**
* @returns {Memory}
*/
  to_pkcs1_der(): Memory;
/**
* @returns {Memory}
*/
  to_public_key_der(): Memory;
/**
* @param {Memory} input
* @param {Memory} signature
* @returns {boolean}
*/
  verify_pkcs1v15_unprefixed(input: Memory, signature: Memory): boolean;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_rsaprivatekey_free: (a: number, b: number) => void;
  readonly rsaprivatekey_new: (a: number, b: number) => void;
  readonly rsaprivatekey_from_pkcs1_der: (a: number, b: number) => void;
  readonly rsaprivatekey_from_pkcs8_der: (a: number, b: number) => void;
  readonly rsaprivatekey_to_pkcs1_der: (a: number, b: number) => void;
  readonly rsaprivatekey_to_pkcs8_der: (a: number, b: number) => void;
  readonly rsaprivatekey_to_public_key: (a: number) => number;
  readonly rsaprivatekey_sign_pkcs1v15_unprefixed: (a: number, b: number, c: number) => void;
  readonly __wbg_rsapublickey_free: (a: number, b: number) => void;
  readonly rsapublickey_from_pkcs1_der: (a: number, b: number) => void;
  readonly rsapublickey_from_public_key_der: (a: number, b: number) => void;
  readonly rsapublickey_to_pkcs1_der: (a: number, b: number) => void;
  readonly rsapublickey_to_public_key_der: (a: number, b: number) => void;
  readonly rsapublickey_verify_pkcs1v15_unprefixed: (a: number, b: number, c: number) => number;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
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
