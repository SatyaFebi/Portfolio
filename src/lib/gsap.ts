import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let _registered = false;

export function ensureGsapPlugins() {
  if (_registered) return;
  try {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    ScrollTrigger.config({ ignoreMobileResize: true });
    _registered = true;
  } catch {
    // _refresh100vh can fail during React hydration recovery on mobile.
    // Retry after DOM stabilizes.
    requestAnimationFrame(() => {
      try {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        ScrollTrigger.config({ ignoreMobileResize: true });
        _registered = true;
      } catch {
        // silent - page won't crash, scroll animations just won't work
      }
    });
  }
}

export * from "gsap";
export { ScrollTrigger, ScrollToPlugin };
export default gsap;
