import { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Parse numeric part and suffix
          const cleanValue = value.replace(/,/g, "");
          const match = cleanValue.match(/^([\d.]+)(.*)$/);

          if (!match) {
            setDisplayValue(value);
            return;
          }

          const targetNumber = parseFloat(match[1]);
          const suffix = match[2] || "";
          const isDecimal = match[1].includes(".");
          const isCommaSeparated = value.includes(",");

          const duration = 1600; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out cubic: 1 - Math.pow(1 - progress, 3)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentNumber = easeOutProgress * targetNumber;

            let formattedNumber: string;
            if (isDecimal) {
              formattedNumber = currentNumber.toFixed(1);
            } else {
              const rounded = Math.floor(currentNumber);
              formattedNumber = isCommaSeparated
                ? rounded.toLocaleString()
                : rounded.toString();
            }

            if (progress < 1) {
              setDisplayValue(`${formattedNumber}${suffix}`);
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : "0"}
    </span>
  );
}
