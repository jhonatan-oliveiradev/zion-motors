import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/home/contact";
import { Services } from "@/components/home/services";
import { SubMenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeModel } from "@/utils/home.types";
import { MenuModel } from "@/utils/menu.type";
import { PhoneIcon } from "lucide-react";

export default async function Home() {
	const { object }: HomeModel = await getDataHome();
	const menu: MenuModel = await getSubMenu();

	const {
		metadata: {
			heading,
			cta_button: { title: buttonTitle, url: buttonUrl },
			banner: { url: bannerUrl }
		}
	} = object;

	return (
		<section>
			{menu.objects.length > 0 && <SubMenu menu={menu} />}
			<Hero
				heading={heading}
				buttonTitle={buttonTitle}
				buttonUrl={buttonUrl}
				bannerUrl={bannerUrl}
				icon={<PhoneIcon size={16} color="#FFFFFF" />}
			/>
			<Container>
				<Services object={object} />
				<Contact object={object} />
			</Container>
		</section>
	);
}
