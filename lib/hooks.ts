import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { SectionName } from "@/lib/types";


export const useSectionInview = (sectionName : SectionName, threshold = 0.75 ) => {
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, timeOfLastClick, sectionName]);

	return {
		ref,
	}
}