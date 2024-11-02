

//import Nav from "../components/nav";
import Link from "next/link";
import Button from "../components/button";

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="flex justify-between items-center border-b-2 border-black w-full">
      <div className="flex bg-[#fff] w-full p-2 gap-12 ">
        <Button href="/dashbord/create" >Publier</Button>
        <Button href="/dashbord/create" >Suprimer</Button>
        <Button href="/dashbord/create" >Mettre a jour</Button>
      </div>
      <div className="flex justify-center items-center bg-black text-white font-bold h-[48px] p-2 hover:bg-white hover:text-black transition-colors border-l-2 border-l-black">
        <Link href="/contact" >contacters</Link>
      </div>
    </div>
      {children}
    </> 
  );
}