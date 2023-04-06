import { Link } from "react-router-dom";

interface Props {
  path: string;
  name: string;
}

function MenuLink({ path, name }: Props) {
  
  return (
    <>
      <li>
        <Link to={path}>{name}</Link>
      </li>
    </>
  );
}

export default MenuLink;
