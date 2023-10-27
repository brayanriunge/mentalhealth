import Navbar from "./Navbar";

type Prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: Prop) {
  return (
    <div className=" bg-gradient-to-r from-blue-400 via-blue-600 to-green-400">
      <Navbar />
      {children}
    </div>
  );
}