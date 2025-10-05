import AppLogo from "@shared/ui/icons/app-logo.svg?react";
import { FiltersBlock, FiltersProvider, FindProducts } from '@widgets/filters';
import { Outlet, useNavigate } from "react-router";
import { LoginState, Skeleton } from '@shared/ui';
import { useContext, useState } from "react";
import { FiltersContext } from "@widgets/filters/ui/FiltersProvider";
import SearchIcon from '@shared/ui/icons/search.svg?react';

const withFilters = (Component: React.FC) => {
    return () => (
        <FiltersProvider>
            <Component />
        </FiltersProvider>
    )
}

export const Layout = withFilters(() => {
    const navigate = useNavigate();
    const { isLoading } = useContext(FiltersContext);
    const [isSearchMobile,setIsSearchMobile] = useState(false);

    if (isSearchMobile) {
        return <div className="pt-[20px]">
                <div className="px-[16px]">
                    <FindProducts />
                </div>
                <Outlet/>
        </div>
    }

    return (
        <>
            <div className="mx-[16px] sm:m-0 py-[20px] sm:p-5 border-b border-[var(--card-border)]">
                <div className="flex items-center justify-between sm:w-[1200px] mx-auto text-[var(--app-logo-color)]">
                    <Skeleton show={!isLoading} width={155} height={40} radius={8}>
                        <div className="cursor-pointer" onClick={() => {
                            navigate('/');
                        }}>
                            <AppLogo />
                        </div>
                    </Skeleton>
                    <div className="hidden sm:block">
                        <Skeleton show={!isLoading} width={504} height={48} radius={10}>
                            <FindProducts />
                        </Skeleton>
                    </div>
                    <div className="sm:hidden flex items-center gap-[16px] text-[var(--state-accent)]">
                        <Skeleton show={!isLoading} width={24} height={24} radius={8}>
                            <div onClick={() => setIsSearchMobile(true)}>
                                <SearchIcon/>
                            </div>
                        </Skeleton>
                        <Skeleton show={!isLoading} width={24} height={24} radius={8}>
                            <LoginState />
                        </Skeleton>
                    </div>
                    <div className="hidden sm:block">
                        <Skeleton show={!isLoading} width={78} height={24} radius={8}>
                            <LoginState />
                        </Skeleton>
                    </div>
                </div>
            </div>
            <div className="box-border mx-[16px] sm:mx-0 py-4 border-b border-[var(--card-border)]">
                <div className="sm:w-[1200px] sm:mx-auto">
                    <FiltersBlock />
                </div>
            </div>
            <Outlet />
        </>
    )
})