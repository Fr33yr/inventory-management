import { Card } from "antd";
import { IProduct } from "models/data/product.model";

interface IAlmostGoneProductProps {
  product: IProduct;
}

export const AlmostGoneProduct: React.FC<IAlmostGoneProductProps> = ({ product }) => {
  if (product.quantity <= 5) {
    return (
      <Card>
        <h3>Por Agotarse</h3>
        <p>
          {product.name} está por agotarse. Tienes menos de {product.quantity}{" "}
          de stock.
        </p>
      </Card>
    );
  }
  return null;
};
