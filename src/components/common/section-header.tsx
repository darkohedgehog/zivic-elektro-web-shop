'use client';

import cn from 'classnames';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';
import { useTranslation } from 'src/app/i18n/client';

interface Props {
  lang: string;
  sectionHeading?: string;
  sectionSubHeading?: string;
  className?: string;
  headingPosition?: 'left' | 'center';
}

const SectionHeader: React.FC<Props> = ({
  lang,
  sectionHeading = 'text-section-title',
  sectionSubHeading,
  className = 'mb-3',
  headingPosition = 'left',
}) => {
  const { t } = useTranslation(lang, 'common');
  return (
    <div
      className={cn(` ${className}`, {
        'text-center pb-2 lg:pb-3 xl:pb-4 3xl:pb-7':
          headingPosition === 'center',
      })}
    >
      <Heading
        variant="titleLarge"
        className={cn({
          '3xl:text-[25px] 3xl:leading-9': headingPosition === 'center',
        })}
      >
        <div  dangerouslySetInnerHTML={{
          __html: t(sectionHeading),
        }}>

        </div>
      </Heading>
      {sectionSubHeading && headingPosition === 'center' && (
        <Text variant="medium" className="pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3">
          {t(sectionSubHeading)}
        </Text>
      )}
    </div>
  );
};

export default SectionHeader;
