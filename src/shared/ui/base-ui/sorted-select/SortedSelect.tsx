import type { FC } from "react";
import { Select, type SelectProps } from "../select/Select";
import SortIcon from '@shared/ui/icons/sort.svg?react';

export const SortedSelect: FC<SelectProps> = props => {
    return <Select {...props}  reversContent icon={<SortIcon/>}/>
}