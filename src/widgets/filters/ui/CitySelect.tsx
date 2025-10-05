import { useTranslation } from "react-i18next"
import { Select } from "@shared/ui"
import { useContext } from "react";
import { FiltersContext } from "./FiltersProvider";


export const CitySelect = () => {
    const { t } = useTranslation();

    const { city, setCity } = useContext(FiltersContext)

    const options = [
        { title: t('Filters.CitySelect.OptionMoscow'), value: t('Filters.CitySelect.OptionMoscow') },
        { title: t('Filters.CitySelect.OptionPiter'), value: t('Filters.CitySelect.OptionPiter') },
        { title: t('Filters.CitySelect.OptionSaratov'), value: t('Filters.CitySelect.OptionSaratov') },
        { title: t('Filters.CitySelect.OptionTver'), value: t('Filters.CitySelect.OptionTver') },
        { title: t('Filters.CitySelect.OptionUfa'), value: t('Filters.CitySelect.OptionUfa') },
    ]

    return (
        <Select
            onChange={(v) => {
                setCity?.(v)
            }
            }
            value={city}
            placeholder={t('Filters.CitySelect.Placeholder')}
            options={options}
        />
    )
}