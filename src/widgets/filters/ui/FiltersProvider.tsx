import { createContext, useCallback, useEffect, useState, type FC, type PropsWithChildren } from 'react';
import { useLocation, useNavigate } from 'react-router';

export enum SortValue {
    Rating = 'Rating',
    Alphabet = 'Alphabet'
}

enum FilterType {
    Category = 'category',
    City = 'city',
    Search = 'search',
    Sort = 'sort',
}

export const FiltersContext = createContext<{
    category?: string;
    setCategory?: (v: string | undefined) => void,
    city?: string;
    setCity?: (v: string | undefined) => void,
    search?: string;
    setSearch?: (v: string | undefined) => void,
    sort?: SortValue;
    setSort?: (v: SortValue | undefined) => void,
    isLoading?: boolean;
}>({});


export const FiltersProvider: FC<PropsWithChildren> = props => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const getQuery = useCallback((key: FilterType) => {
        return searchParams.get(key) ? decodeURIComponent(searchParams.get(key) as string) : undefined;
    }, [searchParams])
   
    const [category, setCategory] = useState<string | undefined>(getQuery(FilterType.Category));
    const [city, setCity] = useState<string | undefined>(getQuery(FilterType.City));
    const [search, setSearch] = useState<string | undefined>(getQuery(FilterType.Search));
    // @ts-ignore
    const [sort, setSort] = useState<SortValue | undefined>(getQuery(FilterType.Sort));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [])

    const updateQuery = (key: FilterType, value?: string) => {
        const searchParams = new URLSearchParams(location.search);
        if (!value) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, encodeURIComponent(value));
        }
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: false });
      };

    return (
        <FiltersContext value={{
            isLoading,
            category,
            setCategory: (v) => {
                setCategory(v);
                updateQuery(FilterType.Category, v);
            },
            city,
            setCity: (v) => {
                setCity(v);
                updateQuery(FilterType.City, v);
            },
            search,
            setSearch: (v) => {
                setSearch(v);
                updateQuery(FilterType.Search, v);
            },
            sort,
            setSort: (v) => {
                setSort(v);
                updateQuery(FilterType.Sort, v);
            }
        }}>
            {props.children}
        </FiltersContext>

    );
}
