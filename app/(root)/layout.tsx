import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const loggedIN = {firstName : 'Nikhil' , lastName : 'Bande'}
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIN}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
            <div>
                <MobileNav user={loggedIN}/>
            </div>
        </div>
        {children}     
      </div>
                       
    </main>
  );
}
