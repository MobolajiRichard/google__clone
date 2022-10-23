import Link from "next/link"
import { AppsRounded } from "@mui/icons-material"
import { Avatar } from "@mui/material"

const Header = () => {
  return (
    <div className="flex p-2 justify-between items-center">
        <div className="flex space-x-4 ">
            <Link href=''><a>About</a></Link>
            <Link href=''><a>Store</a></Link>
        </div>
        <div className="flex space-x-4 items-center ">
            <Link href=''><a>Gmail</a></Link>
            <Link href=''><a>Images</a></Link>
            <AppsRounded/>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header