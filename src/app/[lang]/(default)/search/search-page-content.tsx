'use client';

import { ProductGrid } from '@components/product/product-grid';
import { ShopFilters } from '@components/search/filters';
import SearchTopBar from '@components/search/search-top-bar';
import Container from '@components/ui/container';
import { Element } from 'react-scroll';
import Breadcrumb from "@components/ui/breadcrumb";
import {useState} from "react";

export default function SearchPageContent({ lang }: { lang: string }) {
    const [viewAs, setViewAs] = useState(Boolean(true));
  return (
      <Container>
        {/* @ts-ignore */}
          <div className="pt-6">
              <Breadcrumb lang={lang} />
          </div>
        <Element name="grid" className="flex pt-7 lg:pt-11 pb-16 lg:pb-20 products-category">
          <div className="sticky hidden h-full shrink-0 ltr:pr-8 rtl:pl-8 xl:ltr:pr-16 xl:rtl:pl-16 lg:block w-80  top-16">
            <ShopFilters lang={lang} />
          </div>
          <div className="w-full lg:-mt-1">
            <SearchTopBar lang={lang}  viewAs={viewAs} onNavClick={setViewAs}/>
            <ProductGrid lang={lang} viewAs={viewAs} />
          </div>
        </Element>
      </Container>
  );
}
