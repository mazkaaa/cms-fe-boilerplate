import { Home, LucideProps, Settings, User } from "lucide-react"
import React from "react"

interface IMenuList {
  title: string
  url: string
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}
export const menuList: IMenuList[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "User Management",
    url: "/dashboard/usermanagement",
    icon: User,
  },
  {
    title: "Role Management",
    url: "/dashboard/role-management",
    icon: Settings,
  },
]