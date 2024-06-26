import {
    ChevronDownIcon,
    CircleIcon,
    PlusIcon,
    StarIcon,
} from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
interface EventData {
    _id: string;
    title: string;
    description: string;
    time: string;
    venue: string;
    admin: string;
    md: string;
    attendees: string[];
    __v: number;
}
interface Props {
    Event: EventData
}

const EventCard: React.FC<Props> = ({ Event }) => {
    const date = Event.time;
    const dateObject = new Date(date);

    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    const formattedDate = dateObject.toLocaleDateString('en-US', options);


    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>
                        <Link href={`/events/${Event.title}`}>
                        <Button variant="link">{Event.title}</Button>
                        </Link>
                        
                    </CardTitle>
                    <CardDescription>
                        {Event.description}
                    </CardDescription>
                </div>
                <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
                    <Button variant="secondary" className="px-3 shadow-none">
                        <StarIcon className="mr-2 h-4 w-4" />
                        Star
                    </Button>
                    <Separator orientation="vertical" className="h-[20px]" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" className="px-2 shadow-none">
                                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            alignOffset={-5}
                            className="w-[200px]"
                            forceMount
                        >
                            <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>
                                Future Ideas
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <PlusIcon className="mr-2 h-4 w-4" /> Create List
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                        {Event.venue}
                    </div>
                    <div className="flex items-center">
                        <StarIcon className="mr-1 h-3 w-3" />
                        20k
                    </div>
                    <div>{formattedDate}</div>
                </div>
            </CardContent>
        </Card>
    )
}
export default EventCard;