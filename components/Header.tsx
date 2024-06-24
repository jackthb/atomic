import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import React from "react";
import { fetchMdx } from "../lib/helper";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [blogPosts, setBlogPosts] = useState(0);

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
          <Link
            href="/about"
            className={returnClassName(router.pathname, "/about")}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={returnClassName(router.pathname, "/projects")}
          >
            Projects
          </Link>
          {/*
          It's not ripe yet

          <Link
            href="/blog"
            className={returnClassName(router.pathname, "/blog")}
          >
            Blog
          </Link> */}
          <a href="mailto:hi@jackburgess.co.uk" className="mr-4 hover:underline">
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
            <BurgerItem page="home" onClick={() => setMenuOpen(false)} root />
            <BurgerItem page="about" onClick={() => setMenuOpen(false)} />
            <BurgerItem page="projects" onClick={() => setMenuOpen(false)} />
            <BurgerItem page="blog" onClick={() => setMenuOpen(false)} />
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

function BurgerItem({
  page,
  onClick,
  root,
}: {
  page: string;
  onClick: () => void;
  root?: boolean;
}) {
  return (
    <li className="border-b border-gray-300 py-5">
      <Link
        className="flex w-full font-semibold menu-item"
        href={root ? "/" : `/${page}`}
        onClick={onClick}
      >
        {capitalise(page)}
      </Link>
    </li>
  );
}

function capitalise(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function returnClassName(pathname: string, includes: string) {
  return `${
    pathname.includes(includes) ? "underline" : ""
  } mr-4 hover:underline`;
}
