import Link from "next/link";

export default function Nav({link,children}:{link:string,children:string}){
    return(
        <Link href={link} className="hover:border-b-2  text-2xl">{children}</Link>
    )

}