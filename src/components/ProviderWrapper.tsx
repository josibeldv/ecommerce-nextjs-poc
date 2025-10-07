"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import ThemeWrapper from "@/components/ThemeWrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
