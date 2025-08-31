import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg h-screen w-screen flex items-center justify-center">
      <div>
        Todo Application
        <br/>
        <Link className="bg-amber-600 text-2xl border-4 border-dotted" href="/signin">Signin to Our Todo Application</Link>
        <br/>
        <Link className="bg-amber-950 text-2xl border-4 border-dotted m-2" href="/signup">Signup to Our Todo Application</Link>
      </div>
    </div>
  );
}
