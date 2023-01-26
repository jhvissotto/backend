export function tryCatch<Arg, Result, ErrorV, ErrorF, Final>({
  arg,
  fnTry,
  fnCatch,
  fnFinal,
}: {
  arg?: any;
  fnTry: (arg?: Arg) => Result | any;
  fnCatch?: (arg?: Arg, errorV?: ErrorV) => ErrorF | any;
  fnFinal?: (arg?: Arg, errorV?: ErrorV, errorF?: ErrorF) => Final | any;
}): {
  result: Result | any;
  errorV: ErrorV | any;
  errorF: ErrorF | any;
  final: Final | any;
} {
  const Return = {
    result: null,
    errorV: null,
    errorF: null,
    final: null,
  };

  try {
    const result = fnTry(arg);
    Return.result = result;
  } catch (error) {
    Return.errorV = error;

    if (fnCatch) {
      const errorF = fnCatch(arg, error);
      Return.errorF = errorF;
    }
  } finally {
    if (fnFinal) {
      const final = fnFinal(arg, Return.errorV, Return.errorF);
      Return.final = final;
    }
  }

  return Return;
}
