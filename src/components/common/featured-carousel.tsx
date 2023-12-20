'use client';

import LicenseIcon from '@components/icons/featured/license-icon';
import FeedbackIcon from '@components/icons/featured/feedback-icon';
import SyncIcon from '@components/icons/featured/sync-icon';
import RocketIcon from '@components/icons/featured/rocket-icon';
import ThumbsIcon from '@components/icons/featured/thumbs-icon';

import FeaturedCard from '@components/cards/featured-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import {ROUTES} from "@utils/routes";

const data = [
    {
        id: 1,
        icon: (
            <RocketIcon
                color="#333"
            />
        ),
        title: 'DOSTAVA',
        description: 'Za sve iznose 4,00 €',
        href: ROUTES.SEARCH,
    },
    {
        id: 2,
        icon: (
            <SyncIcon
                color="#333"
            />
        ),
        title: 'POVRAT NOVCA',
        description: 'unutar 30 dana',
        href: ROUTES.SEARCH,
    },
    {
        id: 3,
        icon: (
            <FeedbackIcon
                color="#333"
            />
        ),
        title: 'NA RASPOLAGANJU SMO',
        description: 'od 08:00h do 16:00h',
        href: ROUTES.SEARCH,
    },
    {
        id: 4,
        icon: (
            <ThumbsIcon
                color="#333"
            />
        ),
        title: 'POVOLJNA KUPNJA',
        description: 'po našim cijenama',
        href: ROUTES.SEARCH,
    },
    {
        id: 5,
        icon: (
            <LicenseIcon
                color="#333"
            />
        ),
        title: 'SIGURNO PLAĆANJE',
        description: 'platite pouzećem',
        href: ROUTES.SEARCH,
    },
];

interface Props {
  lang: string;
  className?: string;
}

const breakpoints = {
  '1400': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '768': {
    slidesPerView: 2,
  },
  '640 ': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const FeatureCarousel: React.FC<Props> = ({
  lang,
  className = 'mb-8 md:mb-10',
}) => {
  return (
    <div className={`heightFull ${className}`}>
      <Carousel
        autoplay={false}
        breakpoints={breakpoints}
        prevActivateId="featured-carousel-button-prev"
        nextActivateId="featured-carousel-button-next"
        lang={lang}
        prevButtonClassName="start-3 3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
        nextButtonClassName={`end-3 3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 `}
        className={`rounded-md border border-black/10 py-6 `}
      >
        {data?.map((item) => (
          <SwiperSlide key={`featured-key-${item.id}`}>
            <FeaturedCard item={item} lang={lang} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureCarousel;
