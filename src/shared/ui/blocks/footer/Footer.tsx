import { useTranslation } from 'react-i18next';
import AppLogo from "@shared/ui/icons/app-logo.svg?react";
import Whatsapp from "@shared/ui/icons/Whatsapp.svg?react";
import Phone from "@shared/ui/icons/Call.svg?react";
import { useContext } from 'react';
import { FiltersContext } from '@widgets/filters/ui/FiltersProvider';

export const Footer = () => {
    const { t } = useTranslation();
    const { setCategory } = useContext(FiltersContext)
    const options = [
        t('Filters.CategorySelect.OptionTechnique'),
        t('Filters.CategorySelect.OptionСloth'),
        t('Filters.CategorySelect.Optionshoes'),
        t('Filters.CategorySelect.OptionHome'),
        t('Filters.CategorySelect.OptionAuto'),
        t('Filters.CategorySelect.OptionAksessuary'),
        t('Filters.CategorySelect.OptionTourism')
    ]

    return (
        <div data-theme='dark' className='bg-[#111111] h-[971px] sm:h-[542px] mt-[80px] px-[16px]'>
            <div className='sm:w-[1200px] pt-[40px] m-auto text-[var(--app-logo-color)] sm:flex'>
                <div className='sm:pt-[76px]'>
                    <AppLogo />
                    <div className='pt-[34px]'>
                        <div className='text-[20px] leading-[20px]'>
                            {t('Footer.ContactBlock.Title')}
                        </div>
                        <div className='flex items-center gap-[11px] pt-[20px]'>
                            <Whatsapp />
                            <div>
                                <div>{t('Footer.ContactBlock.WhatsApp')}</div>
                                <div>{t('Footer.ContactBlock.WhatsAppNumber')}</div>
                            </div>
                        </div>
                        <div className='flex items-center gap-[11px] pt-[20px]'>
                            <Phone />
                            <div>
                                <div>{t('Footer.ContactBlock.Call')}</div>
                                <div>{t('Footer.ContactBlock.CallNumber')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:pl-[300px] sm:pt-[80px] pt-[48px]'>
                    <div className='text-[20px] leading-[20px]'>{t('Footer.Categoryies')}</div>
                    <div className='h-[2px] rounded-[3px] w-[219px] bg-[var(--app-logo-color)] mt-[16px]'></div>
                    <ul className='pt-[20px] list-disc pl-4 space-y-[15px] *:text-[16px] *:cursor-pointer'>
                        {options.map(el => (
                            <li onClick={() => {
                                setCategory?.(el);
                            }}>{el}</li>
                        ))}
                    </ul>
                </div>
                <div className='sm:pl-[80px] sm:pt-[80px] pt-[48px]'>
                    <div className='text-[20px] leading-[20px]'>{t('Footer.Usefull.Title')}</div>
                    <div className='h-[2px] rounded-[3px] w-[219px] bg-[var(--app-logo-color)] mt-[16px]'></div>
                    <ul className='pt-[20px] list-disc pl-4 space-y-[15px] *:text-[16px] *:cursor-pointer'>
                        <li>
                            {t('Footer.Usefull.AboutCompany')}
                        </li>
                        <li>
                            {t('Footer.Usefull.Documents')}
                        </li>
                        <li>
                            {t('Footer.Usefull.Questions')}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}