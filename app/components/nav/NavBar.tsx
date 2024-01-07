import Link from "next/link";
import Container from "../Container";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const NavBar = () => {
	return (
		<div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm ">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex items-center justify-between gap-3 md:gap-0">
						<Link className="font-bold text-2xl" href="/">
							E-shop
						</Link>
						<div className="hidden md:block">Search</div>
						<div className="flex items-center gap-8">
							<CartCount />
							<UserMenu />
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NavBar;
