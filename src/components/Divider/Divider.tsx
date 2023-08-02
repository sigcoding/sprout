import { DividerProps } from "./types";

const Divider: React.FC = ({ direction }: DividerProps) => {
  return direction === "horizontal" ?
    <hr className="p-px bg-black border-0" />
    : <vl className="p-px bg-black border-0" />
}

export default Divider;
