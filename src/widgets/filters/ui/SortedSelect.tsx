import { SortedSelect as SortedSelectKit } from '@shared/ui'
import { useContext } from 'react';
import { useTranslation } from 'react-i18next'
import { FiltersContext, SortValue } from './FiltersProvider';

export const SortedSelect = () => {
    const { t } = useTranslation();

    const { sort, setSort } = useContext(FiltersContext);

    const options = [
        { title: t('Filters.SortedSelect.OptionRating'), value: SortValue.Rating },
        { title: t('Filters.SortedSelect.OptionAlphabet'), value: SortValue.Alphabet },
    ]


    return <SortedSelectKit options={options} value={sort} onChange={setSort as any} placeholder={t('Filters.SortedSelect.Placeholder')} />
}