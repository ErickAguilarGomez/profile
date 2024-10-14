import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from '@nextui-org/react';

export default function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ['Inicio','Sobre mí','Proyectos','Certificados','Contactos'];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-black'>
            
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden text-white"
                />
                <NavbarBrand>
                <p className='text-white text-lg franklin tracking-widest'>ERICK AGUILAR</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className='text-white' href="#">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page"  className='text-white'>
                        Sobre mí
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-white' href="#">
                        Proyectos
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link className='text-white' href="#">
                        Certificados
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link className='text-white' href="#">
                        Contactos
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className='bg-white'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? 'foreground'
                                    : index === menuItems.length - 1
                                        ? 'foreground'
                                        : 'foreground'
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}



