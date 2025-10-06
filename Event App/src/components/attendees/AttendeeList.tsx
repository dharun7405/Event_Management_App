import clsx from "clsx";
import type { User } from "../../types";
import { Button } from "../Button";
import { CheckIcon } from "lucide-react";

interface AttendeeListProps {
    attendees: User[],
    mode?: "display" | "selection";
    isOwner?: boolean,
    selectedAttendee?: User | null;
    onAttendeeSelect?: (attendee: User) => void;
    onRemoveAttendee?: (id: number) => void;
}

export function AttendeeList({
    attendees = [], mode = "display", isOwner, selectedAttendee,
    onAttendeeSelect = () => { }, onRemoveAttendee = () => { },
}: AttendeeListProps) {
    if (attendees.length === 0) return null;

    return (
        <div>
            <ul className="h-full divide-y divide-gray-200 pb-6">
                {attendees.map(({ id, name, email }) => (

                    <li key={id}
                        className={clsx("group flex items-center justify-between py-4 hover:bg-gray-500",
                            mode === "selection" && {
                                "cursor-pointer": true,
                                "bg-blue-50": selectedAttendee?.id === id,
                            }
                        )}
                        onClick={() => mode === "selection" && onAttendeeSelect({ id, name, email })
                        }>
                        <div>
                            <p className="font-medium text-gray-800">{name}</p>
                            <p className="font-sm text-gray-600">{email}</p>
                        </div>
                        {mode === "display" && isOwner && onRemoveAttendee && (
                            <Button size="small" variant="secondary"
                                className="mr-4 cursor-pointer rounded-full p-1.5 opacity-0 hover:bg-red-50 group-hover:opacity-100"
                                onClick={() => onRemoveAttendee(id)}
                            ></Button>
                        )}
                        {mode === "selection" && selectedAttendee?.id === id && (
                            <CheckIcon className="mr-4 h-5 w-5 text-blue-600" />
                        )}
                    </li>

                ))}
            </ul>
        </div>
    );
}