import React from 'react';
import HomeBanner from './_components/homeBanner';
import FeaturePropertyList from './_components/featurePropertyList';
import PublicCategoriesPage from './categories/page';
import Highlights from './_components/highlights';

const RootPage = () => {
    return (
        <div className='w-11/12 mx-auto px-8 py-8  items-center justify-center space-y-12'>
            <HomeBanner></HomeBanner>
            <PublicCategoriesPage></PublicCategoriesPage>
            <FeaturePropertyList></FeaturePropertyList>
            <Highlights></Highlights>
            
        </div>
    );
};

export default RootPage;