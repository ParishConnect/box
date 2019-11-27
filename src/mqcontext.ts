import { createContext } from "react";

export const MediaQueryContext = createContext([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)"
]);

export const {
  Provider: MediaQueryProvider,
  Consumer: MediaQueryConsumer
} = MediaQueryContext;
