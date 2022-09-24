import SecureLS from 'secure-ls'

const ls = new SecureLS({
    encondingType: 'aes',
    isCompression: true,
    encryptionSecret: 'my-secret-key'
});

export default ls;