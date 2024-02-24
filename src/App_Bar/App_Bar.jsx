import React from 'react';
import { NextUIProvider, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/react';
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from './Icons.jsx';

export default function App() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const userName = "Zaryab"; // replace this with the actual user's name

  return (
    <NextUIProvider dark>
      <Navbar>
        <NavbarBrand>
          <p style={{ fontWeight: 'bold', color: 'black', fontSize: '20px', marginLeft: '-10px' }}>Welcome Back, {userName}</p>
        </NavbarBrand>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Inventory Overview"
              description="Quickly assess stock levels, reorder points, and other essential data."
              startContent={icons.scale}
            >
              Inventory Overview
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Generate Reports and track usage metrics."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>

            <DropdownItem
              key="Product Management"
              description="Add new products, updating existing product details, and managing product categories."
              startContent={icons.server}
            >
              Product Management
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Reorder Supplies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Support
          </Link>
        </NavbarItem>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" style={{ marginRight: '10px' }}>
              Sign Up
            </Button>
            <Button as={Link} color="primary" href="#" variant="flat">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </NextUIProvider>
  );
}
