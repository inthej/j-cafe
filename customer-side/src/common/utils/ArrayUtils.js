export class ArrayUtils {
  constructor() {
    throw new Error();
  }

  static isEmpty(list) {
    const empty = list === null || list === undefined || list.length === 0;
    return empty;
  }
}
