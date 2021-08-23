import Logo from "../../assets/logo.svg";
import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";

interface HeaderProps {
  toggleModal: () => void;
}

function Header({ toggleModal }: HeaderProps) {
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={toggleModal}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
