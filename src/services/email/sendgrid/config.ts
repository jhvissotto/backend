import { env, config as global_config } from '~/src/global'

// prettier-ignore
export const config = {
    access: {
        key_token: env().DBX_KEY_TOKEN,
    },
    send: {
        from:    global_config().emailDefault.from    || 'user1@provider1.com',
        to:      global_config().emailDefault.to      || 'user2@provider2.com',
        subject: global_config().emailDefault.subject || 'Welcome',
        text:    global_config().emailDefault.text    || 'Hello World',
    },
}
