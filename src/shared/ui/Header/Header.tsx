import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="flex items-center justify-between gap-5 h-[136px]">
			<Link href="/">
				<Image src="/images/logo.svg" alt="logo" width={142} height={26} />
			</Link>

			<nav>
				<ul className="flex items-center gap-9">
					<li className="text-white text-2xl font-medium">
						<Link href="/">Работы</Link>
					</li>
					<li className="text-white text-2xl font-medium">
						<Link href="/">О компании</Link>
					</li>
					<li className="text-white text-2xl font-medium">
						<Link href="/">Акции</Link>
					</li>
					<li className="text-white text-2xl font-medium">
						<Link href="/">Контакты</Link>
					</li>
					<li className="text-white text-2xl font-medium">
						<Link href="tel:84952077570">+7 (495) 207-75-70</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
