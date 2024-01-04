import Container from "./components/Container";
import HomeBanner from "./components/nav/HomeBanner";
import { products } from "./utils/products";

export default function Home() {
	return (
		<div className="p-8">
			<Container>
        <div>
          <HomeBanner />
        </div>
        <div>
          {products.map((product: any) => {
            return <div key={product.id}>{product.name}</div>
          })}
        </div>
			</Container>
		</div>
	);
}
