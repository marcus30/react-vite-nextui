import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

function Nav() {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <Link className="font-bold text-inherit" href="/">Notes</Link>
                </NavbarBrand>
                {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="section-one">
                            Section 1
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="section-two">
                            Section 2
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="section-three">
                            Section 3
                        </Link>
                    </NavbarItem>
                </NavbarContent> */}
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}

export default Nav;