import { ProductCard } from "@features/product-card"
import { useContext, useMemo, useState, type FC } from "react"
import data from '../data.json';
import { FiltersContext, SortValue } from "@widgets/filters/ui/FiltersProvider";
import { useFavorites } from "@features/product-card/model/useFavorites";
import Folder from "@shared/ui/icons/Folder.svg?react";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@shared/ui";

interface CardsListProps {
    isFavoriteTab: boolean;
    onLeaveFavoriteTab: () => void;
}

export const CardsList: FC<CardsListProps> = props => {
    const { t } = useTranslation();
    const { favoritesIds, add, remove } = useFavorites();
    const [showDrawer, setShowDrawer] = useState<number | undefined>();
    const [result, setResult] = useState(() => {
        return data.map(el => ({ ...el, isFavorite: favoritesIds.includes(el.id) }))
    });

    const {
        search,
        sort,
        city,
        category,
        isLoading
    } = useContext(FiltersContext);

    const items = useMemo(() => {
        let items = structuredClone(result);

        if (props.isFavoriteTab) {
            items = items.filter(el => el.isFavorite);
        }

        if (category) {
            items = items.filter(i => i.category === category)
        }

        if (city) {
            items = items.filter(i => i.location === city)
        }

        if (search) {
            items = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
        }

        if (sort) {
            if (sort === SortValue.Rating) {
                items = items.slice().sort((a, b) => b.rating - a.rating);
            }

            if (sort === SortValue.Alphabet) {
                items = items.slice().sort((a, b) => a.title.localeCompare(b.title));
            }

        }
        return items
    }, [result, props.isFavoriteTab, category, city, search, sort])



    if (props.isFavoriteTab && items.length === 0) {
        return (
            <div className="flex w-[274px] flex-col items-center m-auto pt-[80px]">
                <Folder />
                <div className="text-[var(--text-inverted)] text-[25px] leading-[135%] font-semibold pt-[12px]">
                    {t('EmptyStub.Title')}
                </div>
                <div className="text-center text-[16px] pt-[12px] leading-[24px] text-[var(--text-secondary)]">
                    {t('EmptyStub.Hint')}
                </div>
                <button className="cursor-pointer w-full mt-6 h-12 text-base font-normal leading-6 border-0 text-[var(--text-inverted)] bg-[var(--state-control)] rounded-[10px]" onClick={() => {
                    props.onLeaveFavoriteTab();
                }}>
                    {t('EmptyStub.Btn')}
                </button>
            </div>
        )
    }

    return (
        <div className={`sm:w-[1200px] grid px-[16px] sm:px-0 sm:grid-cols-5 gap-x-4 gap-y-6 mx-auto pt-8 w-[100%] grid-cols-1`}>
            {items.map(el => <Skeleton radius={16} show={!isLoading}>
                <ProductCard
                    setShowDrawer={setShowDrawer}
                    showDrawer={showDrawer}
                    onAddFavorite={() => {
                        if (el.isFavorite) {
                            remove(el.id);
                            setResult(prev => prev.map(p => {
                                if (p.id === el.id) {
                                    return ({ ...el, isFavorite: false })
                                }
                                return p;
                            }))
                        } else {
                            add(el.id);
                            setResult(prev => prev.map(p => {
                                if (p.id === el.id) {
                                    return ({ ...el, isFavorite: true })
                                }
                                return p;
                            }))
                        }
                    }}
                    key={el.id}
                    {...el}
                />
            </Skeleton>)}
        </div>
    )
}