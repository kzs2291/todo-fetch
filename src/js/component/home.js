import React from "react";

import { Navbar } from "./navbar";
import { Todo } from "./todo";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Todo />
		</div>
	);
}
