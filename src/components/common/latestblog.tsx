'use client';
import LatestblogCard from '@components/cards/latestblog-card';
import SectionHeader from '@components/common/section-header';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';
import { useBlogsQuery } from '@framework/blog/get-all-blogs';

interface Props {
  className?: string;
  lang: string;
  headingPosition?: 'left' | 'center';
}

const breakpoints = {
  '1024': {
    slidesPerView: 1,
  },
  '768': {
    slidesPerView: 1,
  },
  '540': {
    slidesPerView: 1,
  },
  '0': {
    slidesPerView: 1,
  },
};

const Latestblog: React.FC<Props> = ({
  lang,
  className = 'relative mb-8',
  headingPosition = 'left',
}) => {
  const { data, isLoading, error } = useBlogsQuery({});
  const dataBlog = data?.blogs?.data;
  const { width } = useWindowSize();

  return (
    <div className={className}>
      <SectionHeader
        lang={lang}
        sectionHeading="text-latestblog"
        className="mb-5 md:mb-6 block-title"
      />
      <Carousel
        lang={lang}
        breakpoints={breakpoints}
        autoplay={false}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        className="-mx-1.5 md:-mx-2 xl:-mx-2.5 -my-4"
        prevActivateId="collection-carousel-button-prev"
        nextActivateId="collection-carousel-button-next"
      >
        {dataBlog?.slice(0, 3)?.map((item) => (
          <SwiperSlide
            key={`collection-key-${item.id}`}
            className="px-1.5 md:px-2 xl:px-2.5 py-4"
          >
            <LatestblogCard
              lang={lang}
              key={item.id}
              collection={item}
              href={`/${lang}${ROUTES.BLOG}/${item.slug}`}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default Latestblog;
