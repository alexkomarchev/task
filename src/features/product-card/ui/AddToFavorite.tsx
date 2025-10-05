import Heart from '@shared/ui/icons/heart.svg?react';
import HeartFill from '@shared/ui/icons/heartfill.svg?react';
import type { FC } from 'react';

interface AddToFavoriteProps {
    isFavorite: boolean;
    onFavoriteClick: () => void;
}

export const AddToFavorite: FC<AddToFavoriteProps> = props => {
    return (
        <div onClick={props.onFavoriteClick} className="w-8 h-8 rounded-full bg-[var(--bg-base)] shadow-[0_3px_3px_0_#0000000F] absolute right-[10px] top-[10px] flex items-center justify-center text-[var(--state-accent)]">
            {props.isFavorite ? <HeartFill/> : <Heart/>}
        </div>
    )
}