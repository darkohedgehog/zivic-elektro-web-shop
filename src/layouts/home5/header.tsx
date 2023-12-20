import {useRef, useState} from 'react';
import dynamic from 'next/dynamic';
import {siteSettings} from '@settings/site-settings';
import {ROUTES} from '@utils/routes';
import {useUI} from '@contexts/ui.context';
import {useActiveScroll} from '@utils/use-active-scroll';
import Container from '@components/ui/container';
import Logo from '@components/ui/logo';
import UserIcon from '@components/icons/user-icon';
import MenuIcon from '@components/icons/menu-icon';
import SearchIcon from '@components/icons/search-icon';
import HeaderMenu from '@layouts/header/header-menu';
import HeaderMenutop from '@layouts/header/header-menutop';
import LanguageSwitcher from '@components/ui/language-switcher';
import {useModalAction} from '@components/common/modal/modal.context';
import cn from 'classnames';
import Search from '@components/common/search';
import {FiMenu} from 'react-icons/fi';
import CategoryDropdownMenu from '@components/category/category-dropdown-menu';
import {useTranslation} from 'src/app/i18n/client';
import {AiOutlineUser} from 'react-icons/ai';

const AuthMenu = dynamic(() => import('@layouts/header/auth-menu'), {
    ssr: false,
});
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
    ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const {site_header} = siteSettings;

function Header({lang}: { lang: string }) {
    const {openSidebar, displaySearch, openSearch, isAuthorized, displayMobileSearch} = useUI();
    const {openModal} = useModalAction();
    const siteSearchRef = useRef() as DivElementRef;
    const {t} = useTranslation(lang, 'common');
    const siteHeaderRef = useRef() as DivElementRef;
    const [categoryMenu, setCategoryMenu] = useState(Boolean(true));
    useActiveScroll(siteHeaderRef);
    
    function handleLogin() {
        openModal('LOGIN_VIEW');
    }
    
    function handleMobileMenu() {
        return openSidebar();
    }
    
    function handleCategoryMenu() {
        setCategoryMenu(!categoryMenu);
    }
    
    return (
      <>
        <header
          id="siteHeader"
          ref={siteHeaderRef}
          className={cn(
            'header-four sticky-header sticky top-0 z-50 lg:relative w-full',
            displayMobileSearch && 'active-mobile-search'
          )}
        >
          <div className="innerSticky z-20 w-full transition duration-200 ease-in-out  body-font bg-brand-light">
            <Search
              lang={lang}
              searchId="mobile-search"
              className="top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1"
            />
            <div className="top-bar  text-13px border-b border-black/10">
              <Container className={'sm:max-w-[1730px]'}>
                <div className="h-12 flex justify-between items-center py-2 gap-5">
                  <text className={`hidden md:block truncate`}>
                    {t('text-free-shipping')}
                  </text>
                  <div className="flex flex-shrink-0 smx-auto max-w-[1920px]pace-s-5">
                    <HeaderMenutop
                      data={site_header.topmenu}
                      className="flex transition-all duration-200 ease-in-out"
                      lang={lang}
                    />
                    <LanguageSwitcher
                      lang={lang}
                    />
                  </div>
                </div>
              </Container>
            </div>
            <div className="border-b border-black/10">
              <Container className={'sm:max-w-[1730px]'}>
                <div className="flex items-center justify-between  py-2 md:py-5">
                  <div className="relative flex-shrink-0 lg:hidden">
                    <button
                      aria-label="Menu"
                      className="border border-black/40 rounded-md focus:outline-none outline-none menuBtn px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center"
                      onClick={handleMobileMenu}
                    >
                      <FiMenu className="text-xl lg:text-2xl " />
                    </button>
                  </div>
                  <Logo
                    lang={lang}
                    className="ps-3 md:ps-0 lg:mx-0"
                    variant={'black'}
                  />
                  {/* End of logo */}

                  <div className={`text-[14px] gap-2 lg:flex hidden`}>
                    <div className="image_hotline bg-iconPhone2"></div>
                    <div className={``}>
                      <div className="text-gray-400 ">{t('text-hotline')}</div>
                      <a className="text-sm  font-medium">{t('link-phone')}</a>
                    </div>
                  </div>
                  {/* End of Phone */}
                  <Search
                    searchId="top-bar-search"
                    lang={lang}
                    className="hidden lg:flex lg:max-w-[450px] xl:max-w-[800px] 2xl:max-w-800px] lg:mx-10"
                    variant="fill"
                  />
                  {/* End of search */}

                  <div className="flex space-x-5 xl:space-x-10 lg:max-w-[33%]">
                    <div className="items-center hidden lg:flex shrink-0 accountButton">
                      <AuthMenu
                        isAuthorized={isAuthorized}
                        className={'sm:text-skin-base '}
                        href={`/${lang}${ROUTES.ACCOUNT}`}
                        btnProps={{
                          children: (
                            <AiOutlineUser className="text-xl lg:text-3xl" />
                          ),
                          onClick: handleLogin,
                        }}
                      >
                        {t('text-account')}
                      </AuthMenu>
                    </div>
                    <CartButton
                      className="hidden lg:flex"
                      lang={lang}
                      iconClassName={'text-skin-base'}
                    />
                  </div>
                  {/* End of auth & lang */}
                </div>
              </Container>
            </div>

            <div className="hidden navbar lg:block bg-brand">
              <Container className={'sm:max-w-[1730px]'}>
                <div className="flex justify-between items-center">
                  <Logo
                    lang={lang}
                    className="navbar-logo w-0 opacity-0 transition-all duration-200 ease-in-out"
                  />
                  {/* End of logo */}
                  <div className="categories-header-button relative me-8 flex-shrink-0 w-72">
                    <button
                      className="border-white/20 min-h-[60px] focus:outline-none w-full font-medium text-white uppercase py-4 flex items-center ltr:border-r rtl:border-l"
                      onClick={handleCategoryMenu}
                    >
                      <FiMenu className="text-2xl me-3" />
                      {t('text-all-categories')}
                    </button>
                    {categoryMenu && (
                      <CategoryDropdownMenu categoriesLimit={9} lang={lang} />
                    )}
                  </div>
                  <HeaderMenu
                    data={site_header.menu}
                    className="flex transition-all duration-200 ease-in-out"
                    lang={lang}
                    bgPrimary={true}
                  />
                  {/* End of main menu */}
                  {displaySearch && (
                    <div className="sticky-search w-full absolute top-0 left-0 px-4 flex items-center justify-center h-full">
                      <Search
                        ref={siteSearchRef}
                        className="max-w-[780px] xl:max-w-[830px] 2xl:max-w-[1000px]"
                        lang={lang}
                      />
                    </div>
                  )}
                  {/* End of conditional search  */}
                  <div className="ms-auto flex items-center flex-shrink-0">
                    <div className="navbar-right flex items-center overflow-hidden w-0 opacity-0 transition-all duration-200 ease-in-out">
                      <button
                        type="button"
                        aria-label="Search Toggle"
                        onClick={() => openSearch()}
                        title="Search toggle"
                        className="outline-none me-6 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                      >
                        <SearchIcon className="w-[22px] h-[22px] text-white " />
                      </button>
                      {/* End of search handler btn */}

                      <div className="flex-shrink-0 flex items-center">
                        <AuthMenu
                          isAuthorized={isAuthorized}
                          className={'sm:text-brand-light '}
                          href={`/${lang}${ROUTES.ACCOUNT}`}
                          btnProps={{
                            children: (
                              <AiOutlineUser className="text-xl lg:text-3xl" />
                            ),
                            onClick: handleLogin,
                          }}
                        >
                          {t('text-account')}
                        </AuthMenu>
                      </div>
                      {/* End of auth */}

                      <CartButton
                        className="ms-8 "
                        iconClassName={'text-white'}
                        lang={lang}
                      />
                      {/* End of cart btn */}
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </header>
      </>
    );
}

export default Header;
