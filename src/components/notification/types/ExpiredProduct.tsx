import { Card } from "antd";
import { IProduct } from "models/data/product.model";

interface IExpiredProductProps {
  product: IProduct;
}

export const ExpiredProduct: React.FC<IExpiredProductProps> = ({ product }) => {
  const today = new Date();
  const expirationDate = new Date(product.expDate);

  if (expirationDate < today) {
    return (
      <Card>
        <h3>Producto Vencido</h3>
        <p>
          {product.name} está vencido. Fecha de caducidad:{" "}
          {product.expDate.toString()}
        </p>
      </Card>
    );
  }
  return null;
};
