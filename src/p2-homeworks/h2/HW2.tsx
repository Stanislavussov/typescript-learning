import React, {useState} from "react";
import Affairs from "./Affairs";
import AlternativeMessage from "../h1/AlternativeMessage";


// types Array<AffairType>
export type AffairPriorityType = "high" | "middle" | "low" // need to fix any
export type AffairType = { _id: number, name: string, priority: string }
export type FilterType = "all" | AffairPriorityType
export type DefaultAffairsType = typeof defaultAffairs

// constants
const defaultAffairs = [ // need to fix any
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "Some 1", priority: "middle"},
    {_id: 6, name: "Some 2", priority: "high"},
    {_id: 7, name: "Some 3", priority: "low"},
    {_id: 8, name: "Some 4", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: DefaultAffairsType, filter: FilterType): DefaultAffairsType => { // need to fix any
    switch (filter) {
        case "high":
            return affairs.filter(a => a.priority === "high")
        case "middle":
            return affairs.filter(a => a.priority === "middle")
        case "low":
            return affairs.filter(a => a.priority === "low")
        case "all":
            return affairs
    }
}

export const deleteAffair = (affairs: DefaultAffairsType, _id: number): DefaultAffairsType => { // need to fix any
    return affairs.filter(a => a._id !== _id);

}

function HW2() {
    const [affairs, setAffairs] = useState<DefaultAffairsType>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage  />*/}
            <hr/>
        </div>
    );
}

export default HW2;
