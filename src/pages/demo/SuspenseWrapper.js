import { Suspense, useRef, useMemo } from "react";
import { useEffect } from "react";
import { createPromise } from "./createPromise";
import { createIntersectionObserver } from "./createIntersectionObserver";

const isServer = typeof window === "undefined";

function SuspenseInner({ children, promise }) {
    if (!isServer && !promise.fulfilled) {
        // throw the promise to the suspense component
        throw promise;
    }
    return children;
}

export function SuspenseWrapper({ children }) {
  const ref = useRef(null);
  const { promise, resolve } = useMemo(() => createPromise(), [])

  useEffect(() => {
    createIntersectionObserver(ref.current, () => resolve())
  }, []);


  return (
    <div ref={ref}>
        <Suspense>
            <SuspenseInner promise={promise}>
                {children}
            </SuspenseInner>
        </Suspense>
    </div>
  );
}

