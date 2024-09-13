"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
          {children}
          <ToastContainer/>
          </PersistGate>
        </Provider>
      </body>

    </html>
  );
}
