import Navbar from "./Navbar";

type Prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: Prop) {
  return (
    <div className="bg-gray-20">
      <Navbar />
      {children}
    </div>
  );
}