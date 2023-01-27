// libs
// import { cast } from "~/src/libs/functions";
// import { z } from "~/src/libs/utils/validator";
// app
import { ctrl, error } from '~/src'
// import { config } from "~/src/global";
// import { crypt, Token } from "~/src/security";
// import { getCredentials } from "~/src/libs/helpers/parse";
// local
import type { SchemaReq } from '.'
// import { defs, services } from ".";

// prettier-ignore
export async function _ctrl(
  req: ctrl.Req<SchemaReq.Params, SchemaReq.Query, SchemaReq.Body>,
  res: ctrl.Res
) {
  // ======== inputs ======== //
  const { params, query, body } = req;
  const {} = req.params;
  const {} = req.query;
  const {} = req.body;


  // test
  res. json({ success: true })


  // // ======== middlewares ======== //
  // const { validation } = req;

  // // ======== response ======== //
  // let resp = ctrl.newForm({
  //   // cache
  //   cache_enable: defs.canCache,
  //   cache_duration: defs.canCache ? config().cacheDuration : "",
  //   // validation
  //   validation_params: req.params,
  //   validation_query: req.query,
  //   validation_body: req.body,
  //   validation_isSanitized: validation.isSanitized,
  //   // security
  //   token_user: req.token,
  //   user_levelReq: defs.user_levelReq,
  //   // errors
  //   errors: [...validation.errors]
  // });


  // // ======== parse credentials ======== //
  // const { credentials } = getCredentials(req);
  // if (credentials.missingAny) error.createPush("MISSING_CREDENTIALS");



  // // ======== check database user ======== //
  // const check_user = await services.getUserById({
  //   id_user: credentials.user
  // });


  // // ======== if db error ======== //
  // if (check_user.isError) {
  //   resp.errors_inDatabase = true;
  //   error.catcherPush(check_user.error);
  // }

  // if (!check_user.isUnique) error.createPush("INVALID_USER");
  // resp.valid_user = check_user.isUnique;



  // // ======== check password ======== //
  // const check_pass = crypt.match(
  //   cast.string(credentials.pass),
  //   cast.string(check_user.itemFirst?.passHash)
  // );


  // // ======== prepare response ======== //
  // if (!check_pass.isValid) error.createPush("INVALID_PASS");
  // resp.valid_pass = check_pass.isValid;



  // // ======== serve token ======== //
  // if (check_user.isUnique && check_pass.isValid) {

  //   const { subject, payload } = Token.defs.USER_ACCESS
  //   const { token } = Token.create<z.infer<typeof payload>>({ 
  //     payload: {
  //       // user_id: credentials.user,
  //       // user_level: check_user.itemFirst['level']
  //     }  
  //   }, null, { subject });


  //   resp.token_server = token;
  // }


  // // ======== response ======== //
  // resp = ctrl.newForm({ errors: error.list });
  // return res.json(resp);
}
