import Logo from "~/assets/logo.png";

export const Welcome = ({message}: { message: string }) => {
  return (
    <main className="w-screen h-screen bg-[#F9F1D6] flex align-middle justify-center">
      <img src={Logo} alt="logo" className="object-contain"/>
    </main>
  )
};
