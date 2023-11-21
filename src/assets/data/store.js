import { reactive } from "vue";

export const store = reactive({
  navbar: [
    {
      title: "Home",
      url: "#",
      options: [],
      options2: [],
    },
    {
      title: "Shop",
      url: "#",
      options: [
        {
          name: "Top Rated Product",
          sale: true,
          url: "#",
          isTitle: false,
        },
        {
          name: "Product Category",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
      options2: [],
    },
    {
      title: "Blog",
      url: "#",
      options: [
        {
          name: "Left Sidebar",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Right Sidebar",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Full Width",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
      options2: [],
    },
    {
      title: "Media",
      url: "#",
      options: [
        {
          name: "Gallery",
          sale: false,
          url: "#",
          isTitle: true,
        },
        {
          name: "2 Columns",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "3 Columns",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "4 Columns",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
      options2: [
        {
          name: "Portfolio",
          sale: false,
          url: "#",
          isTitle: true,
        },
        {
          name: "2 Columns",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "3 Columns",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "4 Columns",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
    },
    {
      title: "ShortCode",
      url: "#",
      options: [
        {
          name: "Shortcode Pages",
          sale: false,
          url: "#",
          isTitle: true,
        },
        {
          name: "Accordions & Toggles",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Buttons",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Divider",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Progress Bar & Pie Chart",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Lists",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
      options2: [
        {
          name: "Shortcode Pages",
          sale: false,
          url: "#",
          isTitle: true,
        },
        {
          name: "Services",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Tabs",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Map & Contact",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Message Boxes",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Pricing Table",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
    },
    {
      title: "Features",
      url: "#",
      options: [
        {
          name: "FAQs Page",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Typography",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Sitemap",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "About Us",
          sale: false,
          url: "#",
          isTitle: false,
        },
        {
          name: "Contact Us",
          sale: false,
          url: "#",
          isTitle: false,
        },
      ],
      options2: [],
    },
  ],
  largeCard: [
    {
      title: "The Battlefield 4 Naval Strike",
      tag: "Most Popular",
      img: "/images/cms-banner-01.jpg",
    },
    {
      title: "Assasin's Creed Unity Game",
      tag: "Latest Game",
      img: "/images/cms-banner-02.jpg",
    },
  ],
});
