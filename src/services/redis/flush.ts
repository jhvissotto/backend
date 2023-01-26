import { redis } from "~/src/services";

export async function flush({
  // isAsync = true,
  which = "db",
}: {
  // isAsync?: boolean;
  which?: "db" | "all";
}): Promise<
  | {
      response: any;
      error: null;
      isError: false;
    }
  | {
      response: null;
      error: Error;
      isError: true;
    }
> {
  //  body
  // const mode = isAsync ? "ASYNC" : null;

  return new Promise((resolve, reject) => {
    if (which == "db") {
      // if (isAsync) {
      //   redis.client.flushdb(mode, (error, response) => {
      //     if (error) reject({ response: null, error, isError: true });
      //     else resolve({ response, error: null, isError: false });
      //   });
      // } else {
      redis.client.flushdb((error, response) => {
        if (error) reject({ response: null, error, isError: true });
        else resolve({ response, error: null, isError: false });
      });
      // }
    }

    if (which == "all") {
      // if (isAsync) {
      //   redis.client.flushall(mode, (error, response) => {
      //     if (error) reject({ response: null, error, isError: true });
      //     else resolve({ response, error: null, isError: false });
      //   });
      // } else {
      redis.client.flushall((error, response) => {
        if (error) reject({ response: null, error, isError: true });
        else resolve({ response, error: null, isError: false });
      });
      // }
    }
  });
}
