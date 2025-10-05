import { Tabs, useTheme } from '@shared/ui';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardsList } from './CardsList';
import { Footer } from '@shared/ui';
import { FiltersContext } from '@widgets/filters/ui/FiltersProvider';

enum Tab {
  All,
  Favorites
}

export const App = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(Tab.All);
  const { isLoading } = useContext(FiltersContext);
  useTheme();
  
  const options = [
    { title: t('Tabs.TabAll'), value: Tab.All },
    { title: t('Tabs.TabFavorites'), value: Tab.Favorites },
  ]

  return (
    <>
     <div className="sm:w-[1200px] sm:mx-auto px-[16px] sm:px-0">
        <Tabs isLoading={isLoading} options={options} tab={tab} onChange={setTab} />
      </div>
      <CardsList onLeaveFavoriteTab={() => {
        setTab(Tab.All);
      }} isFavoriteTab={tab === Tab.Favorites} />
      <Footer />
    </>

  );
}