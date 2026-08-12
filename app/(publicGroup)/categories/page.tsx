import React, { Suspense } from 'react';
import CategoryList from '../_components/categoryList';
import { MyPropertySkeleton } from '@/app/(dashboardGroup)/dashboard/landlord/_components/myPropertSkelaton';

const PublicCategoriesPage = () => {
    return (
        <div>
            <div className='text-center md:text-4xl text-xl my-4'>
                <h1 className='md:text-4xl text-2xl font-bold'>Our Property Categories</h1>
            </div>
          <div >
              <Suspense fallback={<MyPropertySkeleton></MyPropertySkeleton>}>
                <CategoryList />
            </Suspense>
          </div>
        </div>
    );
};

export default PublicCategoriesPage;