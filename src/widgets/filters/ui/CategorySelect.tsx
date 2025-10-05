import { useTranslation } from "react-i18next"
import { Select } from "@shared/ui"
import { useContext } from "react";
import { FiltersContext } from "./FiltersProvider";


export const CategorySelect = () => {
    const { t } = useTranslation();

    const { category, setCategory } = useContext(FiltersContext)

    const options = [
        { title: t('Filters.CategorySelect.OptionAuto'), value: t('Filters.CategorySelect.OptionAuto') },
        { title: t('Filters.CategorySelect.OptionAksessuary'), value: t('Filters.CategorySelect.OptionAksessuary') },
        { title: t('Filters.CategorySelect.OptionHome'), value: t('Filters.CategorySelect.OptionHome') },
        { title: t('Filters.CategorySelect.Optionshoes'), value: t('Filters.CategorySelect.Optionshoes')},
        { title: t('Filters.CategorySelect.OptionСloth'), value: t('Filters.CategorySelect.OptionСloth')},
        { title: t('Filters.CategorySelect.OptionTechnique'), value:  t('Filters.CategorySelect.OptionTechnique')},
        { title: t('Filters.CategorySelect.OptionTourism'), value: t('Filters.CategorySelect.OptionTourism') },
    ]

    return (
        <Select 
            onChange={(v => {
                setCategory?.(v);
            })} 
            value={category} 
            placeholder={t('Filters.CategorySelect.Placeholder')} 
            options={options}
        />
    )
}