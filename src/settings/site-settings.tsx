//import { SAFlag } from '@components/icons/language/SAFlag';
//import { USFlag } from '@components/icons/language/USFlag';
import siteLogo from 'public/assets/images/logo.png';
import siteLogoBlack from 'public/assets/images/logo-black.png';

export const siteSettings = {
  name: 'Živić-Elektro',
  description:
    'Veleprodaja i maloprodaja elektro materijala',
  author: {
    name: 'Darko Živić',
    websiteUrl: '#',
    address: '',
  },
  logo: {
    url: siteLogo,
    urlReverse: siteLogoBlack,
    alt: 'Živić-Elektro',
    href: '/',
    width: 195,
    height: 26,
  },
  defaultLanguage: 'hr',
  currencyCode: 'EUR',
  site_header: {
    topmenu: [
      {
        id: 1,
        path: '/my-account/wishlist/',
        label: 'Lista želja',
      },
      {
        id: 2,
        path: '/checkout/',
        label: 'Košarica',
      },
     /* {
        id: 3,
        path: '/',
        label: 'menu-gift',
      },*/
    ],
    menu: [
     /* {
        id: 1,
        path: '/',
        label: 'menu-demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-home1',
          },
          {
            id: 2,
            path: '/home2',
            label: 'menu-home2',
          },
          {
            id: 4,
            path: '/home3',
            label: 'menu-home3',
          },
          {
            id: 6,
            path: '/home4',
            label: 'menu-home4',
          },
          {
            id: 7,
            path: '/home5',
            label: 'menu-home5',
          },

          {
            id: 9,
            path: '/home6',
            label: 'menu-home6',
          },
          {
            id: 10,
            path: '/home7',
            label: 'menu-home7',
          },
        ],
      },*/
      {
        id: 2,
        path: '/search',
        label: 'Proizvodi',
        type: 'mega',
        mega_categoryCol: 5,
        mega_bannerMode: 'none',
        mega_bannerImg: '/assets/images/mega/banner-menu.jpg',
        mega_bannerUrl: '/search',
        mega_contentBottom:
          '<strong>30% Off</strong> the shipping of your first order with the code: <strong>RAZOR-SALE30</strong>',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'Nadžbukni program',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/set_q_og_metalka.jpg',
              original: '/assets/images/category/set_q_og_metalka.jpg',
            },
            subMenu: [
              
              {
                id: 1,
                path: '/search',
                label: 'Bijela boja',
              },
              {
                id: 2,
                path: '/search',
                label: 'Siva boja',
              },
              {
                id: 3,
                path: '/search',
                label: 'Mini-OG',
              }
            ],
          },
          {
            id: 2,
            path: '/search',
            label: 'Podžbukni program',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/status_metalka.jpg',
              original: '/assets/images/category/status_metalka.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'Status',
              },
              {
                id: 2,
                path: '/search',
                label: 'Emporio',
              },
              {
                id: 3,
                path: '/search',
                label: 'Premier +',
              },
              {
                id: 4,
                path: '/search',
                label: 'Nature',
              }
            ],
          },
          {
            id: 3,
            path: '/search',
            label: 'Modularni program - Kombo',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/kombo_metalka.jpg',
              original: '/assets/images/category/kombo_metalka.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'Bijela boja',
              },
              {
                id: 2,
                path: '/search',
                label: 'Crna boja',
              },
              {
                id: 3,
                path: '/search',
                label: 'Nosači',
              },
              {
                id: 4,
                path: '/search',
                label: 'Ukrasni okviri',
              },
              {
                id: 5,
                path: '/search',
                label: 'Instalacijske kutije',
              },
            ],
          },
          {
            id: 4,
            path: '/search',
            label: 'Utikači i spojke',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_4.jpg',
              original: '/assets/images/category/collection_4.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'Utikači',
              },
              {
                id: 2,
                path: '/search',
                label: 'Spojke',
              },
              {
                id: 3,
                path: '/search',
                label: 'T-razdjelnici',
              },
            ],
          },
          {
            id: 5,
            path: '/search',
            label: 'Razdjelni ormari i kutije',
            image: {
              id: 1,
              thumbnail: '/assets/images/category/collection_5.jpg',
              original: '/assets/images/category/collection_5.jpg',
            },
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'Razdjelni ormari',
              },
              {
                id: 2,
                path: '/search',
                label: 'Razjelne kutije',
              },
            ],
          },
        ],
      },
     /* {
        id: 3,
        path: '/search',
        label: 'menu-dietary',
        type: 'mega',
        mega_categoryCol: 5,
        mega_bannerMode: 'right',
        mega_bannerImg: '/assets/images/mega/banner-menu.jpg',
        mega_bannerUrl: '/search',
        mega_contentBottom:
          '<strong>30% Off</strong> the shipping of your first order with the code: <strong>RAZOR-SALE30</strong>',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'menu-vegetarian',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-home-audio',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-helicopters',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-toys',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-outdoor',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-organic',
              },
            ],
          },
          {
            id: 2,
            path: '/search',
            label: 'menu-automotive',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-automotive',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-autocar',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-morecar',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-autosecurity',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-battereries',
              },
            ],
          },
          {
            id: 3,
            path: '/search',
            label: 'menu-mediterranean',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-vegetarian',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-kakogenic',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-mediterranean',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-organic',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-organic',
              },
            ],
          },
          {
            id: 4,
            path: '/search',
            label: 'menu-organic',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-battereries',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-beadphones',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-accessories',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-jewelry',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-wedding',
              },
            ],
          },
          {
            id: 5,
            path: '/search',
            label: 'menu-publications',
            subMenu: [
              {
                id: 1,
                path: '/search',
                label: 'menu-menwatch',
              },
              {
                id: 2,
                path: '/search',
                label: 'menu-womanwatch',
              },
              {
                id: 3,
                path: '/search',
                label: 'menu-gift',
              },
              {
                id: 4,
                path: '/search',
                label: 'menu-giftman',
              },
              {
                id: 5,
                path: '/search',
                label: 'menu-giftwoman',
              },
            ],
          },
        ],
      },*/
      /*{
        id: 4,
        path: '/shops/',
        label: 'menu-shops',
      },*/
      {
        id: 5,
        path: '/',
        label: 'Stranice',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Korisnici',
            subMenu: [
              {
                id: 1,
                path: '/my-account/account-settings',
                label: 'Moj nalog',
              },
              {
                id: 2,
                path: '/signin',
                label: 'Prijavi se',
              },
              {
                id: 3,
                path: '/signup',
                label: 'Odjavi se',
              },
            ],
          },
          {
            id: 2,
            path: '/about',
            label: 'O nama',
          },
          {
            id: 3,
            path: '/contact-us',
            label: 'Kontak',
          },
          {
            id: 4,
            path: '/privacy',
            label: 'Pravila privatnosti',
          },
          {
            id: 5,
            path: '/terms',
            label: 'Uvjeti korištenja',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'Košarica',
          },
          {
            id: 7,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
      {
        id: 6,
        path: '/blog/blog-category-grid',
        label: 'menu-blog',
        subMenu: [
          {
            id: 1,
            path: '/blog/blog-category-grid',
            label: 'menu-blog-grid',
          },
          {
            id: 2,
            path: '/blog/blog-category-list',
            label: 'menu-blog-list',
          },
          {
            id: 3,
            path: '/blog/blog-category-big',
            label: 'menu-blog-big',
          },
          {
            id: 4,
            path: '/blog',
            label: 'menu-blog-wide',
          },
          {
            id: 6,
            path: '/blog/blog-category-wide',
            label: 'menu-single-post',
            subMenu: [
              {
                id: 1,
                path: '/blog/blog-post-left',
                label: 'menu-left-sidebar',
              },
              {
                id: 2,
                path: '/blog/blog-post-right',
                label: 'menu-right-sidebar',
              },
              {
                id: 3,
                path: '/blog/the-litigants-on-the-screen-are-not-actors',
                label: 'menu-no-sidebar',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        path: '/contact-us',
        label: 'Kontakt',
      },
    ],
    /*languageMenu: [
      {
        id: 'ar',
        name: 'عربى',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'en',
        name: 'English',
        value: 'en',
        icon: <USFlag />,
      },
    ],*/
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'Najbolje ocjenjeni proizvodi',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'O nama',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'Kontakt',
      },
      {
        id: 4,
        path: '/faq',
        label: 'Često postavljena pitanja',
      },
    ],
  },
};
