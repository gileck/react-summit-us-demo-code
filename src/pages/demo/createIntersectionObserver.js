export function createIntersectionObserver(el, callback) {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            callback();
        }
      },
      { rootMargin: "0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
}