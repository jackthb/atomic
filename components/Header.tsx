import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header>
      <div className="py-0 px-5 sm:text-xl text-sm onLoad max-w-6xl m-auto h-28 flex items-center font-display">
        <div className={`${router.pathname == "/" ? "active" : ""} title`}>
          <Link href="/">JACK BURGESS</Link>
        </div>
        <nav className="block ml-auto">
          <Link href="/about">
            <a
              className={`${
                router.pathname == "/about" ? "about" : ""
              } title mr-4`}
            >
              About
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`${
                router.pathname == "/projects" ? "projects" : ""
              } title mr-4`}
            >
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`${
                router.pathname == "/blog" ? "blog" : ""
              } title mr-4`}
            >
              Blog
            </a>
          </Link>
          <a href="mailto:jackcburgess@gmail.com" className="title mr-4">
            Contact
          </a>
          <button
            className="title"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <FaLightbulb />
          </button>
        </nav>
      </div>
    </header>
  );
}
