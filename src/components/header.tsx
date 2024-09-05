import { Kaisei_Decol } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa6";
import { ModeToggle } from "./mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const kaiseiDecol = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Header() {
  return (
    <header className="bg-primary/10 h-20 shadow shadow-primary">
      <nav className="container flex justify-between items-center gap-4 w-full h-full">
        <span
          className={cn(
            "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-primary",
            kaiseiDecol.className
          )}
        >
          NOVELTI MUIS
        </span>
        <ul className="md:flex justify-end items-center gap-4 hidden">
          <li>
            <Button>About Me</Button>
          </li>
          <li>
            <Button variant="outline">Publications</Button>
          </li>
          <li>
            <Button variant="outline">Blog</Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
        <ul className="flex justify-end items-center gap-4 md:hidden">
          <li>
            <ModeToggle />
          </li>
          <li>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon">
                  <FaBars />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mt-4">
                  <span
                    className={cn(
                      "scroll-m-20 text-3xl font-semibold text-center tracking-tight first:mt-0 text-primary",
                      kaiseiDecol.className
                    )}
                  >
                    NOVELTI MUIS
                  </span>
                </SheetHeader>
                <ul className="flex flex-col justify-end items-center gap-2 mt-8">
                  <li className="w-full">
                    <Button className="w-full">About Me</Button>
                  </li>
                  <li className="w-full">
                    <Button variant="outline" className="w-full">
                      Publications
                    </Button>
                  </li>
                  <li className="w-full">
                    <Button variant="outline" className="w-full">
                      Blog
                    </Button>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </header>
  );
}
