import Logo from "../components/logo_svg";

export default function Secret() {
  return (
    <div className=" flex items-center justify-center w-full flex-col">
      <Logo className="w-[50%]" />
      <p className="text-3xl mb-10">You found a secret! Congrats!</p>
    </div>
  );
}
