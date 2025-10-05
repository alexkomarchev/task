import type { FC, PropsWithChildren } from "react";

interface SkeletonProps {
    width?: number;
    height?: number;
    radius: number;
    show: boolean;
}

export const Skeleton: FC<PropsWithChildren<SkeletonProps>> = props => {
    if (props.show) {
        return props.children;
    }


    return (
        <div className="bg-[var(--skeleton-bg)]" style={{ width: props.width ?? 'auto', height: props.height ?? 'fit-content', borderRadius: props.radius }}>
            <div className="invisible w-full">
                {props.children}
            </div>
        </div>
    )
}