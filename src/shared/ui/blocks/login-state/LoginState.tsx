import UserIcon from '@shared/ui/icons/user.svg?react';
import { useTranslation } from 'react-i18next';

export const LoginState = () => {
    const { t } = useTranslation();
    return (
        <div className="cursor-pointer flex items-center gap-[6px]">
            <div className="flex text-[var(--state-accent)]">
                <UserIcon/>
            </div>
            <div className="hidden sm:block text-[var(--text-inverted)] text-[16px] leading-[18px] font-medium">
                {t('Login.Login')}
            </div>
        </div>
    )
}