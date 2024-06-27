export interface PostModel {
	objects: ObjectPostProps[];
}

interface ObjectPostProps {
	slug: string;
	title: string;
	metadata: {
		banner: {
			url: string;
		};
		button: {
			title: string;
			url: string;
		};
		description: {
			title: string;
			text: string;
			banner: {
				url: string;
			};
			button_active: boolean;
			button_title: string;
			button_url: string;
		};
	};
}
