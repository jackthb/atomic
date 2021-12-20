import Typed from "typed.js";

import React, { useEffect, useState } from "react";

export default function Typing({ text }) {
	const [isCompMounted, setCompMonuted] = useState(false);

	useEffect(() => setCompMonuted(true), []);
	if (isCompMounted) {
		var options = {
			strings: [text],
			typeSpeed: 80,
			cursorChar: "_",
		};
		var typed = new Typed(".element", options);
	}
	return <span className="element"></span>;
}
