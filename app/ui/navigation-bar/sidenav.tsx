import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 py-4 md:px-2 bg-gradient-to-b from-fuchsia-300 to-white h-screen">
      <NavLinks />
    </div>
  )
}