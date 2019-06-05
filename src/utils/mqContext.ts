import { createContext } from "react";
import facepaint from "facepaint";

const mqContext = createContext(facepaint(["@media(min-width: 420px)", "@media(min-width: 920px)", "@media(min-width: 1120px)"]));

export default mqContext;
