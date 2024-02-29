"use client";

import { ReduxProvider } from "@/context-redux/provider";
import React from "react";
import Header from "./Header";
import SideControl from "./SideControl";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "@/context-redux/store";
import { persistStore } from "redux-persist";

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const persistor = persistStore(store);
  return (
    <ReduxProvider>
      <PersistGate persistor={persistor}>
        <main className="w-full flex h-full flex-col items-center">
          <Header />
          <div className="relative flex justify-between w-full h-[calc(100%-90px)] sm:h-full">
            <SideControl />
            {children}
            {/* <Matrix /> */}
          </div>
        </main>
      </PersistGate>
    </ReduxProvider>
  );
}
