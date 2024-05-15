import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "@/context/CartContext";
import CartDesktop from "@/Components/Cart/CartDesktop/CartDesktop";
import ReduxProvider from "@/Redux/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <CartProvider>
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
          <CartDesktop />
        </body>
      </html>
    </CartProvider>
  );
};
export default RootLayout;
