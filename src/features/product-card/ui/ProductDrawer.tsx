import type { FC } from "react"
import type { ProductCardProps } from "./ProductCard"
import StarIcon from "@shared/ui/icons/Star.svg?react";
import { useTranslation } from "react-i18next";
import Heart from '@shared/ui/icons/heart.svg?react';
import Xmark from '@shared/ui/icons/xmark.svg?react';
import HeartFill from '@shared/ui/icons/heartfill.svg?react';

export const ProductDrawer: FC<ProductCardProps & { onClose: () => void }> = props => {
    const { t } = useTranslation();

    const buttonText = props.isFavorite ? t('ProductCard.InFavorites') : t('ProductCard.AddToFavorites');

    return (
        <>
            <div className="flex flex-col fixed sm:left-0 right-0 top-0 w-screen h-screen sm:ml-auto sm:w-[490px] z-[101]">
                <div className="bg-[var(--product-card-image-bg)] h-[288px] flex items-center justify-center">
                    <div style={{
                        backgroundImage: `url(${props.image})`,
                    }} className="bg-contain bg-center bg-no-repeat h-[48px] w-[180px]" />
                </div>
                <div className="relative pt-6 p-5 flex-1 bg-[var(--bg-base)]">
                    <div className="font-medium text-2xl leading-8 text-[var(--text-inverted)]">
                        {props.title}
                    </div>
                    <div className="text-[var(--text-secondary)]" style={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon />
                        <span>{props.rating}</span>
                        <span style={{ padding: '0 4px' }}>
                            {t('Point')}
                        </span>
                        <div>
                            {t('ProductCard.MiddlePoint', {
                                v1: props.category,
                                v2: props.location
                            })}
                        </div>
                    </div>
                    <div className="pt-4 text-[var(--text-inverted)]">
                        {props.description}
                    </div>
                    <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                        <button onClick={() => {
                            props.onAddFavorite()
                        }} className="cursor-pointer h-12 w-full border-0 bg-[var(--state-control)] rounded-[10px] text-[var(--text-inverted)] flex items-center justify-center gap-2 text-base font-normal leading-6">
                            <div className="flex text-[var(--state-accent)]">
                                {props.isFavorite ? <HeartFill /> : <Heart />}
                            </div>
                            {buttonText}
                        </button>
                    </div>
                    <div onClick={() => props.onClose()} className="fixed top-[10px] right-[10px] w-10 h-10 rounded-full flex items-center justify-center shadow-[0_4px_20px_0_#0000001A] bg-[var(--bg-base)] text-[var(--text-inverted)]">
                        <Xmark />
                    </div>
                </div>
            </div>
            <div onClick={() => props.onClose()} className="sm:fixed sm:w-screen sm:h-screen sm:left-0 sm:top-0 sm:bg-black sm:opacity-50 sm:z-10" />
        </>

    )
}