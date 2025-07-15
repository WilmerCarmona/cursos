import { ReactNode } from "react";
//import styles from "./Button.module.css";
import styled from "styled-components";
type BtnProps = {
  isLoading: boolean;
};
type Props = { children: ReactNode; isLoading?: boolean; onClick: () => void };
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  margin: 10px;
  padding: 25px 30px;
`;

function Button({ children, isLoading, onClick }: Props) {
  return (
    <Btn
      onClick={onClick}
      disabled={isLoading}
      isLoading={isLoading}
      // className={[styles.button, styles.padded].join(" ")}
      // className={[
      //   `btn btn-${isLoading ? "secondary" : "primary"}`,
      //   styles.button,
      // ].join(" ")}
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
