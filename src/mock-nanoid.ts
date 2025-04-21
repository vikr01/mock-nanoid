const counterMap = new Map<number, number>();

function mockNanoid(length: number = 21): string {
  if (length <= 0) {
    return '';
  }

  if (!counterMap.has(length)) {
    counterMap.set(length, 0);
  }

  const counter = counterMap.get(length)!;

  const id = counter.toString().padStart(length, '0');

  counterMap.set(length, counter + 1);

  return id;
}

mockNanoid.resetMock = function (length?: number) {
  if (length != null) {
    counterMap.set(length, 0);
  } else {
    counterMap.clear();
  }
}

export { mockNanoid };
