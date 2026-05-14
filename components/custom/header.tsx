import Image from "next/image"
import { Menu } from "lucide-react"


export default function Header(){
    return (
        <div className="p-4 flex items-center justify-between">
            <Image src="/logo.png" alt="" width="84" height="36" /> 
            <Menu />
        </div>
    

)
}