import Down from "@/components/Down";
import Navbar from "@/components/Navbar";
import Options from "@/components/Options";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar/>
      <Options/>
      <Down/>
    </div>
  );
}
