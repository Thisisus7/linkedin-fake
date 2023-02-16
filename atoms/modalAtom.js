import { atom } from "recoil";

// const [modal, setModal] = useState(false);

export const modalState = atom({
  key: "modalState",
  default: false,
});

// change modal types
export const modalTypeState = atom({
  key: "modalTypeState",
  default: "dropIn",
});