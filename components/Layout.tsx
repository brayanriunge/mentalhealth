import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

type Prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: Prop) {
  return (
    <div className=" bg-gradient-to-r from-blue-400 via-blue-600 to-green-400">
      <Navbar />
      <Toaster
        toastOptions={{
          loading: {
            duration: 1000,
          },
          success: {
            duration: 2000,
          },
        }}
      />
      {children}
    </div>
  );
}
