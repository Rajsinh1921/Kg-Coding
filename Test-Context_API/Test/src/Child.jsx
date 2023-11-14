import { useContext } from "react";
import { data } from "../Storage/message_Storage";

function Child() {
  let message = "MRI JODE REH JO ";

  message = useContext(data);
  return <h2>Mahant Swami {message}</h2>;
}

export { Child };
