import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import SearchBox from "@/components/SearchBox";
import DarkModeButton from "@/components/DarkModeButton";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center  mx-auto py-8 px-10">
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            Live{" "}
            <span className="underline decoration-6 decoration-orange-400">
              News
            </span>
          </h1>
        </Link>
        <DarkModeButton />
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;
