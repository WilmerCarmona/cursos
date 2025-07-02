import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Card(props: Props) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
interface CardBodyProps {
  title?: string;
  text?: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <Fragment>
      {" "}
      {/*La etiqueta de Fragment tambien se puede colocar de ésta forma: (<> </>) */}
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </Fragment>
  );
}

export default Card;
