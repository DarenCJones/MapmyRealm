import { NavLink } from "react-router";
import { NavigationMenu } from 'radix-ui'
import { Flex } from "@radix-ui/themes";

export default function Navbar() {
  const defaultLinkClass = `
    p-2
    hover:bg-(--gray-3)
    dark:hover:bg-(--gray-3)
    dark:hover:text-(--gray-12)
    text-(--teal-a11)
    dark:text-(--teal-a11)`;

  const activeLinkClass = `
    p-2
    hover:bg-(--gray-3)
    dark:hover:bg-(--gray-3)
    text-(--gray-a11)
    dark:text-(--gray-12)
    underline
    decoration-(--accent-indicator)
    underline-offset-8
    decoration-2`;

  return (
    <NavigationMenu.Root className="h-[var(--NavbarHeight)] pr-8 border-b-1 border-(--teal-6) bg-black">
      <NavigationMenu.List className='flex justify-end'>
        <Flex direction='row' gap='3'>
          <NavLink to='/' className={location.pathname === '/' ? activeLinkClass : defaultLinkClass}>
            <NavigationMenu.Item>
              Home
            </NavigationMenu.Item>
          </NavLink>
          <NavLink to='/about' className={location.pathname === '/about' ? activeLinkClass : defaultLinkClass}>
            <NavigationMenu.Item>
              About
            </NavigationMenu.Item>
          </NavLink>
          <NavLink to='/contact' className={location.pathname === '/content' ? activeLinkClass : defaultLinkClass}>
            <NavigationMenu.Item>
              Contact
            </NavigationMenu.Item>
          </NavLink>
          <NavLink to='/tutorial' className={location.pathname === '/tutorial' ? activeLinkClass : defaultLinkClass}>
            <NavigationMenu.Item>
              Tutorial
            </NavigationMenu.Item>
          </NavLink>
        </Flex>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
