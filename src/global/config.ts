// prettier-ignore
export const config = () => {
  return {
    appName:          'Backend',
    bcryptSalt:       '$2b$10$BpiAbfRC6aNum2lC6CA0oO',
    cryptIV:          '5de006283df4d5b5d3d457d9b35a6cf8',
    cacheDuration:    '8 hours',
    tokenExpiration:  '3 hours',
    emailDefault: {
      from:     'user1@provider1.com',
      to:       'user2@provider2.com',
      subject:  'Welcome',
      text:     'Hello World',
    },
    redisClientsDb: {
      serverExpress: 1,
      serverApollo: 2,
      keyvalMain: 3,
    },
  }
}
