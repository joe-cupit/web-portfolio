import { useEffect, useState } from "react"
import { useLocation } from "react-router";

export default function DotCursor() {

  const { pathname } = useLocation();
  const [transform, setTransform] = useState([0, 0]);

  useEffect(() => {
    const cursor = document.querySelector(".dot-cursor") as HTMLElement;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion || !cursor) return;

    cursor.style.display = "block";
    cursor.classList = "dot-cursor";

    const style = document.createElement("style");
    style.textContent = "* {cursor: none !important;}";
    document.head.appendChild(style);

    const moveDot = (e: MouseEvent) => {
      setTransform([e.clientX, e.clientY]);
    }

    const clickDot = () => {
      cursor?.classList.add('clicked');
    }
    const unClickDot = () => {
      cursor?.classList.remove('clicked');
    }

    const mouseOverDot = () => {
      cursor?.classList.add('pointer');
    }
    const mouseLeaveDot = () => {
      cursor?.classList.remove('pointer');
    }

    window.addEventListener("mousemove", moveDot);
    window.addEventListener("mousedown", clickDot);
    window.addEventListener("mouseup", unClickDot);

    const clickableItems = document.querySelectorAll('a, button');
    clickableItems.forEach(item => {
      item.addEventListener('mouseover', mouseOverDot);
      item.addEventListener('mouseleave', mouseLeaveDot);
    });

    return (() => {
      window.removeEventListener("mousemove", moveDot);
      window.removeEventListener("mousedown", clickDot);
      window.removeEventListener("mouseup", unClickDot);

      clickableItems.forEach(item => {
        item.removeEventListener('mouseover', mouseOverDot);
        item.removeEventListener('mouseleave', mouseLeaveDot);
      });
    })
  }, [pathname])


  return (
    <div
      className='dot-cursor'
      style={{translate: `${transform[0]}px ${transform[1]}px`}}
    />
  )
}
