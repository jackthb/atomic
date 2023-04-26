import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaHamburger, FaMoon } from "react-icons/fa";
import Menu from "react-burger-menu/lib/menus/slide";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <header>
      <div className="py-0 px-5 sm:text-xl text-sm onLoad max-w-5xl m-auto h-28 md:flex hidden items-center">
        <div
          className={`${
            router.pathname == "/" ? "hidden" : ""
          } hover:underline`}
        >
          <Link href="/">Jack Burgess</Link>
        </div>
        <nav className="flex align-center ml-auto">
          <Link href="/about" legacyBehavior>
            <a
              className={`${
                router.pathname.includes("/about") ? "underline" : ""
              } mr-4 hover:underline`}
            >
              About
            </a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a
              className={`${
                router.pathname.includes("/projects") ? "underline" : ""
              } mr-4 hover:underline`}
            >
              Projects
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a
              className={`${
                router.pathname.includes("/blog") ? "underline" : ""
              } mr-4 hover:underline`}
            >
              Blog
            </a>
          </Link>
          <a href="mailto:jack@sien.vision" className="mr-4 hover:underline">
            Contact
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <FaMoon />
          </button>
        </nav>
      </div>
      <div className="sm:hidden">
        <Menu
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
          isOpen={isMenuOpen}
          right
          styles={{
            bmBurgerButton: {
              position: "fixed",
              width: "36px",
              height: "30px",
              right: "36px",
              top: "36px",
            },
            bmBurgerBars: {
              background: "#373a47",
              borderRadius: "10px",
            },
            bmCrossButton: {
              position: "fixed",
              width: "36px",
              height: "30px",
              right: "36px",
              top: "36px",
            },
            bmCross: {
              background: "#bdc3c7",
            },
            bmMenuWrap: {
              position: "fixed",
              height: "100%",
              width: "100%",
            },
            bmMenu: {
              background: "#373a47",
            },
            bmMorphShape: {
              fill: "#373a47",
            },
            bmOverlay: {
              background: "rgba(0, 0, 0, 0.3)",
              width: "100%",
              height: "100%",
              top: "0px",
              right: "0px",
            },
          }}
        >
          <ul className="absolute grid w-full px-10 py-16">
            <li className="border-b border-gray-300 py-5">
              <Link
                className="flex w-full font-semibold menu-item"
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-300 py-5">
              <Link
                className="flex w-full font-semibold menu-item"
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="border-b border-gray-300 py-5">
              <Link
                className="flex w-full font-semibold menu-item"
                href="/projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="border-b border-gray-300 py-5">
              <Link
                className="flex w-full font-semibold menu-item"
                href="/blog"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className="border-b border-gray-300 py-5">
              <a
                href="mailto:jack@sien.vision"
                className="mr-4 hover:underline"
              >
                Contact
              </a>
            </li>
            <li className="border-b border-gray-300 py-5">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <FaMoon />
              </button>
            </li>
          </ul>
        </Menu>
      </div>
    </header>
  );
}
