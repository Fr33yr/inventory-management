import { ICartItem } from "../../../models/data/index";
import {Image} from '../../common/index'

interface Props {
  data: ICartItem;
}

function CardView({ data }: Props) {

  return (
    <div>
        <div className="">
            <Image width={200} height={200} url={data.image}/>
        </div>
      <p>{data.name}</p>
      <p>cantidad:{data.amount}</p>
      <p>precio:{data.precio}</p>
    </div>
  );
}

export default CardView;
