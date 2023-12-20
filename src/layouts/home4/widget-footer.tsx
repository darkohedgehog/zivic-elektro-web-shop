import Container from '@components/ui/container';
import WidgetLink from '@layouts/footer/widget-link';
import WidgetAbout from '@layouts/home4/widget-about-us-footer';
import WidgetSubscription from '@layouts/footer/widget-newsletter';

interface WidgetsProps {
    lang: string;
    social?: any;
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ lang, widgets, social }) => {
  
  return (
      <>
        <WidgetSubscription lang={lang} className="newsletterFooter  items-center" />
        <Container className={"sm:max-w-[1730px]"}>
          <div className="grid grid-cols-2 md:grid-cols-9 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px] pt-10 md:pt-16">
            <WidgetAbout
                lang={lang}
                social={social}
                className="col-span-full sm:col-span-1 md:col-span-3 "
            />
            {widgets?.map((widget) => (
                <WidgetLink
                    lang={lang}
                    key={`footer-widget--key${widget.id}`}
                    data={widget}
                    className="pb-3.5 sm:pb-0 col-span-1 md:col-span-3 xl:col-span-2"
                />
            ))}

          </div>
        </Container>
      </>

  );
};

export default Widgets;
