import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const readKey = process.env.READ_KEY as string;

export async function getDataHome() {
	try {
		const res = await fetch(
			`${baseURL}/objects/666c574c864193998e15d8b2?read_key=${readKey}&depth=1&props=slug,title,metadata`,
			{ next: { revalidate: 120 } }
		);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		return res.json();
	} catch (err) {
		throw new Error("Failed to fetch data");
	}
}

export async function getSubMenu() {
	try {
		const res = await fetch(
			`${baseURL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${readKey}&depth=1&props=slug,title`,
			{ next: { revalidate: 120 } }
		);

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		return res.json();
	} catch (err) {
		throw new Error("Failed to fetch menu data!");
	}
}

export async function getItemBySlug(itemSlug: string) {
	const baseUrl = `${baseURL}/objects`;

	const queryParams = new URLSearchParams({
		query: JSON.stringify({
			slug: itemSlug
		}),
		props: "slug,title,metadata",
		read_key: readKey
	});

	const url = `${baseUrl}?${queryParams.toString()}`;

	try {
		const res = await fetch(url, { next: { revalidate: 120 } });

		if (!res.ok) {
			throw new Error(`HTTP error! status: ${res.status}`);
		}

		return res.json();
	} catch (err) {
		redirect("/");
	}
}
