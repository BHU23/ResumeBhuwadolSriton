import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ScrollToSection, useScrollOnLoad } from "../function";

const navigation = [
  { name: "About", href: "#about", offset: 20 },
  {
    name: "Education & Experience",
    href: "#education-experience",
    offset: 50,
  },
  { name: "Skills & Languages", href: "#skills-languages", offset: 50 },
  {
    name: "Extracurricular Activities & Interests",
    href: "#activities-interests",
    offset: 50,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  useScrollOnLoad(); // ใช้ hook นี้เพื่อเลื่อนไปยังตำแหน่งที่บันทึกไว้เมื่อหน้าถูกโหลดใหม่

  return (
    <Disclosure as="nav" className="bg-b5">
      {({ open }) => (
        <>
          <div className="mx-auto h-20">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden p-6">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-white hover:bg-b3 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-end md:hidden">
                  <span className="text-white text-3xl">Bhuwadol Sriton</span>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to="../">
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(event) =>
                            ScrollToSection(event, item.href, item.offset)
                          }
                          className={classNames(
                            "text-white hover:bg-gray hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link to="../">
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={(event) =>
                      ScrollToSection(event, item.href, item.offset)
                    }
                    className={classNames(
                      "text-gray hover:bg-gray hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
