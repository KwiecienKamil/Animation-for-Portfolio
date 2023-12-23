import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useRef } from "react";



export const FeatureTitle = ({ children}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px"
  });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "py-16 font-heading text-5xl transition-colors",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
};
