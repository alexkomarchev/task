import { useState } from "react"

const lskey = 'Favorites';

export const useFavorites = () => {
    const [favoritesIds, setFavoritesIds] = useState<number[]>(() => {
        try {
            const notParserFavorites = localStorage.getItem(lskey);

            return notParserFavorites ? JSON.parse(notParserFavorites) : [];
        } catch {
            return []
        }
    });

    return {
        favoritesIds,
        add: (id: number) => {
            setFavoritesIds(prev => {
                const result = [...prev, id];
                localStorage.setItem(lskey, JSON.stringify(result))
                return result;
            })
        },
        remove: (id: number) => {
            setFavoritesIds(prev => {
                const result = prev.filter(el => el !== id);
                localStorage.setItem(lskey, JSON.stringify(result))
                return result;
            })
        },
    }

}