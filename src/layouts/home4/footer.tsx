import Widgets from '@layouts/home4/widget-footer';
import Copyright from '@layouts/home4/copyright';
import { footer } from '@layouts/footer/data';
import React from "react";
const { widgets, payment,social } = footer;

interface Props {
    lang: string;
}
const Footer: React.FC<Props> = ({ lang }) => {
  return (
    <footer className="footer-four border-t border-black/10 pt-10 md:pt-16">
      <Widgets widgets={widgets} social={social} lang={lang} />
      <Copyright payment={payment} className={'bg-skin-base'} lang={lang} />
    </footer>
  );
};

export default Footer;
