import type { Metadata } from "next";
import Signup from "@sections/auth/Signup";

export const metadata: Metadata = {
  title: "Register - The Best React eCommerce Template",
  description:
    "Bonik is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store",
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react", "bonik"]
};

export default function SignUpPage() {
  return <Signup />;
}
