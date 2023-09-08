import {Button} from "@/src/components/ui/button";
import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<Button onClick={() => setCount(count + 1)}>
			Count is {count}
		</Button>
	);
};
