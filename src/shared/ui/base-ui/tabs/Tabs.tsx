import type { FC } from "react"
import { Skeleton } from "../skeleton/Skeleton";

interface TabsProps {
    tab: number;
    isLoading?: boolean;
    options: { title: string, value: number }[];
    onChange: (tab: number) => void;
}

export const Tabs: FC<TabsProps> = props => {
    return (
        <div data-loading={props.isLoading ? "true" : "false"} className="w-full border-b border-[var(--card-border)] flex gap-6 h-[66px]  data-[loading=true]:items-center">
            {props.options.map(el => {
                return <Skeleton radius={18} show={!Boolean(props.isLoading)}>
                    <div
                        className="data-[selected=true]:text-[var(--text-inverted)] data-[selected=true]:border-[var(--state-accent)] border-b-3 border-[transparent]  cursor-pointer text-[20px] sm:text-[25px] font-semibold leading-[135%] flex items-center text-[var(--text-secondary)]"
                        data-selected={el.value === props.tab ? "true" : "false"}
                        onClick={() => {
                            props.onChange(el.value)
                        }} key={el.value}>{el.title}</div>
                </Skeleton>
            })}
        </div>
    )
}