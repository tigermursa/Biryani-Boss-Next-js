"use client"
import MainPage from "@/Components/ui/MainPage/MainPage";
import { NextUIProvider } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div>
      <NextUIProvider>
        <MainPage />
      </NextUIProvider>
    </div>
  );
};

export default HomePage;
