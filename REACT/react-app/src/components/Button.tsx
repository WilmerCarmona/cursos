import { ReactNode } from "react";

type Props = { children: ReactNode; isLoading: boolean; onClick: () => void };

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
