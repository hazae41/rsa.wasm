import { assert, test } from "@hazae41/phobos";
import { Memory, RsaPrivateKey, RsaPublicKey, initBundled } from "./index.js";

function equals(a: Uint8Array, b: Uint8Array) {
  const ba = Buffer.from(a.buffer)
  const bb = Buffer.from(b.buffer)

  return ba.equals(bb)
}

function assertKeypairToPkcs1(keypair: RsaPrivateKey) {
  using der = keypair.to_pkcs1_der()
  using der2 = RsaPrivateKey.from_pkcs1_der(der).to_pkcs1_der()
  assert(equals(der.bytes, der2.bytes), `keypair.to_pkcs1_der serialization`)
}

function assertKeypairToPkcs8(keypair: RsaPrivateKey) {
  using der = keypair.to_pkcs8_der()
  using der2 = RsaPrivateKey.from_pkcs8_der(der).to_pkcs8_der()
  assert(equals(der.bytes, der2.bytes), `keypair.to_pkcs8_der serialization`)
}

function assertIdentityToPkcs1(identity: RsaPublicKey) {
  using der = identity.to_pkcs1_der()
  using der2 = RsaPublicKey.from_pkcs1_der(der).to_pkcs1_der()
  assert(equals(der.bytes, der2.bytes), `identity.to_pkcs1_der serialization`)
}

function assertIdentityToPublicKey(identity: RsaPublicKey) {
  using der = identity.to_public_key_der()
  using der2 = RsaPublicKey.from_public_key_der(der).to_public_key_der()
  assert(equals(der.bytes, der2.bytes), `identity.to_public_key_der serialization`)
}

test("RSA", async () => {
  await initBundled()

  const hello = new TextEncoder().encode("hello world")

  using keypair = new RsaPrivateKey(2048)
  using identity = keypair.to_public_key()

  assertKeypairToPkcs1(keypair)
  assertKeypairToPkcs8(keypair)

  assertIdentityToPkcs1(identity)
  assertIdentityToPublicKey(identity)

  using presignature = new Memory(hello)
  using signature = keypair.sign_pkcs1v15_unprefixed(presignature)

  const verified = identity.verify_pkcs1v15_unprefixed(presignature, signature)

  assert(verified, `signature should be verified`)
})