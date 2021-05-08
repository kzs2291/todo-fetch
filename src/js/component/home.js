import React from "react";

//import your own components
import { Header } from "./header.js";
import { Todo } from "./todo.js";

//create your first component
export const Home = () => {
	let myApi = "https://assets.breatheco.de/apis/fake/todos/user/jgarciaf106";
	return (
		<div className="text-center mx-auto mt-5 w-25 rounded border border-info">
			<Header />
			<Todo apiUrl={myApi} />
		</div>
	);
};
