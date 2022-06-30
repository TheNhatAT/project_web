import * as React from "react";
import FilterForm from "./FilterForm";
import HomeTag from "./HomeTag";
import RoomTag from "../example/components/RoomTag";


export default function Home() {
    return (
        <>
            <FilterForm />
            <HomeTag />
            <RoomTag />
        </>
    )
}