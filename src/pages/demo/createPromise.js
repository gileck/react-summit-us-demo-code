export function createPromise() {
    let resolve;
    const promise = new Promise(r => (resolve = r))
    promise.fulfilled = false;

    promise.then((r) => {
        promise.fulfilled = true;
    });
    
    return { promise, resolve };
  }