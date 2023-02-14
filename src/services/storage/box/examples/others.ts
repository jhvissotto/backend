import { client } from '..'

// ==================================== //
// ======== delete comment_789 ======== //
// ==================================== //
await client.comments
  .delete('789')
  .then(() => {})
  .catch(e => {})
