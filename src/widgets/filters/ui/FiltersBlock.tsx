import { CategorySelect } from "./CategorySelect"
import { CitySelect } from "./CitySelect"
import { SortedSelect } from "./SortedSelect"
import { useContext } from "react";
import { FiltersContext } from "./FiltersProvider";
import { Skeleton } from "@shared/ui";

export const FiltersBlock = () => {
    const {isLoading} = useContext(FiltersContext);

    return (
        <div className="flex items-center gap-[10px]">
            <Skeleton show={!isLoading} width={143} height={36} radius={18}>
                <SortedSelect />
            </Skeleton>
            <Skeleton show={!isLoading} width={107} height={36} radius={18}>
                <CategorySelect />
            </Skeleton>
            <Skeleton show={!isLoading} width={91} height={36} radius={18}>
                <CitySelect />
            </Skeleton>
        </div>
    )
}