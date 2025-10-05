import NotFoundIcon from '@shared/ui/icons/404.svg?react';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className='w-[307px] text-center pt-[80px] m-auto flex items-center flex-col'>
            <NotFoundIcon/>
            <div className='pt-[12px] text-[25px] font-semibold text-[var(--text-inverted)]'>
                {t('NotFound.Title')}
            </div>
            <div className='pt-[12px] text-[16px] leading-[24px] text-[var(--text-secondary)]'>
                {t('NotFound.Subtitle')}
            </div>
        </div>
    )
    
}