import { useTranslation } from 'react-i18next';
import SearchIcon from '@shared/ui/icons/Search.svg?react';
import { useContext } from 'react';
import { FiltersContext } from './FiltersProvider';

export const FindProducts = () => {
    const { t } = useTranslation();
    const { search, setSearch } = useContext(FiltersContext);

    return <div className='relative'>
        <div className="flex absolute top-1/2 -translate-y-1/2 left-[13px] text-[var(--state-accent)]">
            <SearchIcon />
        </div>
        <input value={search} onChange={e => {
            setSearch?.(e.target.value);
        }} placeholder={t('FindProducts.Placeholder')} className="w-full sm:w-[504px] h-[48px] border border-transparent outline-none rounded-[10px] py-[12px] pr-[13px] pl-[45px] bg-[var(--state-control)] placeholder-[var(--text-inverted)] placeholder-font-normal placeholder-leading-[18px] placeholder-text-[14px] focus:placeholder-[var(--text-tertiary)] hover:bg-[var(--state-control-hover)] focus:bg-[var(--bg-base)] focus:border focus:border-[var(--stroke-field-default)]"/>
    </div>
}