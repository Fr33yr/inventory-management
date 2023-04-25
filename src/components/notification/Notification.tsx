import { Card, notification } from "antd";
import { IProduct } from "../../models/data/product.model";
import { useAppDispatch, useAppSelector } from "../../hooks/index";
import {ExpiredProduct,AlmostGoneProduct,OutOfStockProduct} from '../notification/types'

export const Notification: React.FC = () => {
    const { products } = useAppSelector((state) => state.products);
  
    return (
      <div>
        {products.map((product) => (
          <>
            <ExpiredProduct product={product} />
            <AlmostGoneProduct product={product} />
            <OutOfStockProduct product={product} />
          </>
        ))}
      </div>
    );
  };
