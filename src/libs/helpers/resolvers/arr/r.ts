import { ArrayElement } from "type-fest/source/internal";
import { is } from "~/src/libs/functions/check";

export async function r<Response, Fallback = any, E = Error>(
  promise,
  fallback?: Fallback
): Promise<
  | {
      duration: number;
      isEmpty: boolean;
      isFilled: boolean;
      isArray: true;
      length: number;
      isZero: boolean;
      isUnique: boolean;
      isMany: boolean;
      itemFirst: ArrayElement<Response>;
      itemLast: ArrayElement<Response>;
      response: Response;
      error: null;
      isSuccess: true;
      isError: false;
      status: "success";
    }
  | {
      duration: number;
      isEmpty: boolean;
      isFilled: boolean;
      isArray: false;
      length: null;
      isZero: null;
      isUnique: null;
      isMany: null;
      itemFirst: null;
      itemLast: null;
      response: Response;
      error: null;
      isSuccess: true;
      isError: false;
      status: "success";
    }
  | {
      duration: number;
      isEmpty: null;
      isFilled: null;
      isArray: null;
      length: null;
      isZero: null;
      isUnique: null;
      isMany: null;
      itemFirst: null;
      itemLast: null;
      response: typeof fallback | null;
      error: E | Error;
      isSuccess: false;
      isError: true;
      status: "error";
    }
> {
  const start = Date.now();

  return await promise
    .then(([response]: [Response]) => {
      const end = Date.now();
      const duration = (end - start) / 1000;

      const isEmpty = is.empty(response);
      const isFilled = is.filled(response);

      const isArray = Array.isArray(response);
      const length = isArray ? response?.length : null;
      const isZero = isArray ? length == 0 : null;
      const isUnique = isArray ? length == 1 : null;
      const isMany = isArray ? length >= 2 : null;
      const itemFirst = isArray ? response[0] : null;
      const itemLast = isArray ? response[length - 1] : null;

      return {
        duration,
        isEmpty,
        isFilled,
        isArray,
        length,
        isZero,
        isUnique,
        isMany,
        itemFirst,
        itemLast,
        response,
        error: null,
        isSuccess: true,
        isError: false,
        status: "success"
      };
    })
    .catch((error: E | Error) => {
      const end = Date.now();
      const duration = (end - start) / 1000;

      return {
        duration,
        isEmpty: null,
        isFilled: null,
        isArray: null,
        length: null,
        isZero: null,
        isUnique: null,
        isMany: null,
        itemFirst: null,
        itemLast: null,
        response: fallback ?? null,
        error,
        isSuccess: false,
        isError: true,
        status: "error"
      };
    });
}
