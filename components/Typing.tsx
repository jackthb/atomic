import Typed from "typed.js";

import React, { useEffect } from "react";

export default function Typing({ text }: { text: string }) {
  const el = React.useRef(null);

  useEffect(() => {
    if (el.current == null) return;
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 80,
      cursorChar: "_",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={el} className="element"></span>;
}
