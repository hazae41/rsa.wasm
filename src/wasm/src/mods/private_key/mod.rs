use wasm_bindgen::prelude::*;

use crate::RsaPublicKey;

use memory_wasm::Memory;

#[wasm_bindgen]
pub struct RsaPrivateKey {
    pub(crate) inner: rsa::RsaPrivateKey,
}

#[wasm_bindgen]
impl RsaPrivateKey {
    #[wasm_bindgen(constructor)]
    pub fn new(length: usize) -> Result<RsaPrivateKey, JsError> {
        let result = rsa::RsaPrivateKey::new(&mut rsa::rand_core::OsRng {}, length);
        let inner = result.map_err(|_| JsError::new("RsaPrivateKey::new"))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn from_pkcs1_der(input: &Memory) -> Result<RsaPrivateKey, JsError> {
        use rsa::pkcs1::DecodeRsaPrivateKey;

        let result = rsa::RsaPrivateKey::from_pkcs1_der(&input.inner);
        let inner = result.map_err(|_| JsError::new("RsaPrivateKey::from_pkcs1_der"))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn from_pkcs8_der(input: &Memory) -> Result<RsaPrivateKey, JsError> {
        use rsa::pkcs8::DecodePrivateKey;

        let result = rsa::RsaPrivateKey::from_pkcs8_der(&input.inner);
        let inner = result.map_err(|_| JsError::new("RsaPrivateKey::from_pkcs8_der"))?;

        Ok(Self { inner })
    }

    #[wasm_bindgen]
    pub fn to_pkcs1_der(&self) -> Result<Memory, JsError> {
        use rsa::pkcs1::EncodeRsaPrivateKey;

        let rdocument = self.inner.to_pkcs1_der();
        let document = rdocument.map_err(|_| JsError::new("RsaPrivateKey::to_pkcs1_der"))?;

        Ok(Memory::new(document.as_bytes().to_vec()))
    }

    #[wasm_bindgen]
    pub fn to_pkcs8_der(&self) -> Result<Memory, JsError> {
        use rsa::pkcs8::EncodePrivateKey;

        let rdocument = self.inner.to_pkcs8_der();
        let document = rdocument.map_err(|_| JsError::new("RsaPrivateKey::to_pkcs8_der"))?;

        Ok(Memory::new(document.as_bytes().to_vec()))
    }

    #[wasm_bindgen]
    pub fn to_public_key(&self) -> RsaPublicKey {
        let inner = self.inner.to_public_key();

        RsaPublicKey { inner }
    }

    #[wasm_bindgen]
    pub fn sign_pkcs1v15_unprefixed(&self, input: &Memory) -> Result<Memory, JsError> {
        use rsa::Pkcs1v15Sign;

        let routput = self
            .inner
            .sign(Pkcs1v15Sign::new_unprefixed(), &input.inner);

        let output = routput.map_err(|_| JsError::new("RsaPrivateKey::sign"))?;

        Ok(Memory::new(output))
    }
}
