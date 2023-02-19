// libs
import { resolvers } from '~/src/libs/helpers/operators'
// local
import { nexmo } from '.'

// prettier-ignore
export async function send({ from, to, text }: { 
    from: string, 
    to:   string, 
    text: string
  },   
    opts: Parameters<typeof nexmo.message.sendSms>[3]
) {
  

  
  type Response = ReturnType<typeof nexmo.message.sendSms>
  

  const { response, error, isSuccess, isError, duration } = await resolvers.r<Response>(
    new Promise((resolve, reject) => {
      nexmo.message.sendSms(
        from, to, text, 
        { ...opts }, 
        (error, resp) => error ? reject(error) : resolve(resp)
      )
    })
  )



  // feedback
  const sending = { response, error, isSuccess, isError, duration }
  return sending
}
