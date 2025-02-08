const HASH_FUNCTION = {
    "crc32":    crc32,
    "crc16":    crc16,
    "md5":      md5,
    "md4":      md4, 
    "md2":      md2,
    "sha1":     sha1, 
    "sha256":   sha256,
    "sha224":   sha224,
    "sha512":   sha512,
    "sha384":   sha384,
    "sha512-256": sha512_256,
    "sha512-224": sha512_224,
    "sha3-512":    sha3_512,
    "sha3-384": sha3_384,
    "sha3-256": sha3_256, 
    "sha3-224": sha3_224,
    "keccak512":keccak512,
    "keccak384":keccak384,
    "keccak256":keccak256,
    "keccak224":keccak224,
    "shake128": (str, key = 256) => shake128(str, key),
    "shake256": ( str, key = 512) => shake256(str, key),
}
/*
    console.log(sha3_512('Message to hash'))
    console.log(sha3_384('Message to hash'))
    console.log(sha3_256('Message to hash'))
    console.log(sha3_224('Message to hash'))

    console.log(keccak512('Message to hash'))   
    console.log(keccak384('Message to hash'))    
    console.log(keccak256('Message to hash'))  
    console.log(keccak224('Message to hash'))    

    console.log(shake128('Message to hash',  256))
    console.log(shake256('Message to hash',  512))

    // sha 2
    console.log(sha256('Message to hash'));
    console.log(sha224('Message to hash'));

    console.log(sha1('Message to hash'));
    // sha2-512
    console.log(sha512('Message to hash'))
    console.log(sha384('Message to hash'))
    console.log(sha512_256('Message to hash'))
    console.log(sha512_224('Message to hash'))

    console.log(crc16('Message to check'))
    console.log(crc32('Message to check'))
    console.log("md5")

    console.log(md5('The quick brown fox jumps over the lazy dog.'))
    console.log(md4('The quick brown fox jumps over the lazy dog'))
    console.log(md2('Message to hash'))
*/
