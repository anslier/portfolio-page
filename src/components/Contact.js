import React from "react";

function Contact() {
	return (
		<div id="contact">
			<div class="bg-base-200 pt-12 place-items-center">
				<h4 class="font-bold pb-2 border-b border-gray-200 text-3xl text-center">
					Contact me!
				</h4>

				<p className="pt-12 pb-2 text-gray-700 text-center text-2xl">
					Let me know if you are interested in working with me.
				</p>

				<p className="pt-2 pb-12 text-gray-700 text-center text-2xl">
					<a
						href="mailto:alifasyrafrose@gmail.com"
						class="text-blue-500"
					>
						alifasyrafrose@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
}

export default Contact;
