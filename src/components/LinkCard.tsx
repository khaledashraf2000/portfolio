import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

interface LinkCardProps {
    title: string;
    description: string;
    img: string;
    url: string;
}

export default function LinkCard({ title, description, img, url }: LinkCardProps) {
    return (
        <Card className="w-[90%] md:min-w-[450px] h-[450px] flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="whitespace-normal select-none text-left">{title}</CardTitle>
                <CardDescription className="whitespace-normal select-none text-left">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-[50%] justify-center">
                <Image src={img} alt="" className="select-none h-full w-full object-cover" width={500} height={500} />
            </CardContent>
            <CardFooter>
                <div className="flex justify-end h-full w-full items-end">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Button variant={"secondary"}>Read More</Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    )
}
