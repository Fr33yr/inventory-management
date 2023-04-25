import { Card } from "antd";
import { IProduct } from "models/data/product.model";

interface IOutOfStockProductProps {
  product: IProduct;
}

export const OutOfStockProduct: React.FC<IOutOfStockProductProps> = ({ product }) => {
  if (product.quantity === 0) {
    return (
      <Card>
        <h3>Agotado</h3>
        <p>{product.name} está agotado. Debes comprar.</p>
      </Card>
    );
  }
  return null;
};
