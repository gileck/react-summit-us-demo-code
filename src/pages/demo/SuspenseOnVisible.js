import { Suspense, useRef, useMemo } from "react";
import { useEffect } from "react";
import { createPromise } from "./createDeffered";
import { createIntersectionObserver } from "./createIntersectionObserver";

const isServer = typeof window === "undefined";

function SuspenseWrapper({ children, promise }) {
    if (!isServer && !promise.fulfilled) {
        throw promise;
    }
    return children;
}

export function SuspenseOnVisible({ children }) {
  const ref = useRef(null);
  const { promise, resolve } = useMemo(() => createPromise(), [])

  useEffect(() => {
    createIntersectionObserver(ref.current, () => resolve())
  }, []);


  return (
    <div ref={ref}>
        <Suspense>
            <SuspenseWrapper promise={promise}>
                {children}
            </SuspenseWrapper>
        </Suspense>
    </div>
  );
}

