import { useEffect, type FC } from "react";
import { useTranslation } from "react-i18next";
import StarIcon from "@shared/ui/icons/star.svg?react";
import { AddToFavorite } from "./AddToFavorite";
import { ProductDrawer } from "./ProductDrawer";

export interface ProductCardProps {
    id: number;
    isFavorite: boolean;
    image: string;
    title: string;
    category: string;
    location: string;
    rating: number;
    description: string;
    onAddFavorite: () => void;
    showDrawer?: number;
    setShowDrawer: (value?: number) => void;
}

export const ProductCard: FC<ProductCardProps> = props => {
    const { t } = useTranslation();
    useEffect(() => {
        const root = document.getElementById('root');
        if (!root) {
            return;
        }
        if (props.showDrawer) {
            root.style.overflowY = 'hidden';
        } else {
            root.style.overflowY = 'scroll';
        }   
    }, [props.showDrawer])

    return (
        <div className="relative w-full cursor-pointer sm:w-[227px] h-[328px] rounded-[16px] overflow-hidden flex flex-col border border-[var(--card-border)] hover:border-[var(--state-accent)]">
            {props.showDrawer === props.id ?  <ProductDrawer onClose={() => props.setShowDrawer(undefined)} {...props} /> : null}
            <div className="bg-[var(--product-card-image-bg)] h-[188px] w-full flex items-center justify-center">
                <div style={{
                backgroundImage: `url(${props.image})`,
            }}  className="bg-contain bg-center bg-no-repeat w-[188px] h-[48px]"></div>
            </div>
            <div className="bg-[var(--card-body)] w-full pt-3 pl-3 pr-[13px] pb-3.5 flex-1">
                <div className="text-[var(--text-inverted)] font-medium text-base leading-6">
                    {props.title}
                </div>
                <div className="pt-1 text-[var(--text-secondary)] font-normal text-sm leading-[18px]">
                    {t('ProductCard.MiddlePoint', {
                        v1: props.category,
                        v2: props.location
                    })}
                </div>
                <div className="flex items-center gap-[2px] mt-2 text-[var(--text-secondary)] text-sm leading-[18px] font-normal">
                    <StarIcon />
                    <span>{props.rating}</span>
                </div>
                <div className="my-3 w-full h-px bg-[var(--card-border)]" />
                <div onClick={() => props.setShowDrawer(props.id)} className="font-medium text-base leading-[18px] text-[var(--state-accent)]">
                    {t('ProductCard.More')}
                </div>
            </div>
            <AddToFavorite onFavoriteClick={props.onAddFavorite} isFavorite={props.isFavorite}/>
        </div>
    )

}