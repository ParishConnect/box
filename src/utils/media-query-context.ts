import { createContext } from "react";

const context = createContext(["@media(max-width: 1121px)", "@media(max-width: 921px)", "@media(max-width: 421px)"]);

const { Consumer: MediaQueryConsumer, Provider: MediaQueryProvider } = context;

export default context;

export { MediaQueryConsumer, MediaQueryProvider };
