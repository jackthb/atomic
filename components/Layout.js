import React, { Component } from "react";

import Header from "./Header.js";

export default function Layout({ children }) {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			{children}
		</div>
	);
}
