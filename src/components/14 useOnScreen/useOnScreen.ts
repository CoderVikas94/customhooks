import { useEffect, useState, RefObject } from "react";

interface UseOnScreenProps {
  ref: RefObject<Element>;
  rootMargin?: string;
}

const useOnScreen = ({ ref, rootMargin = "0px" }: UseOnScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
};

export default useOnScreen;
