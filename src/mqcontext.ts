import { createContext } from "react";

export const MediaQueryContext = createContext(["@media(max-width: 1280px)", "@media(max-width: 736px)", "@media(min-width: 480px)"]);

export const { Provider: MediaQueryProvider, Consumer: MediaQueryConsumer } = MediaQueryContext;
