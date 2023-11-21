import { reactive } from "vue";

export const store = reactive({
  navbar: [
    {
      title: "Home",
      url: "#",
      options: [],
    },
    {
      title: "Shop",
      url: "#",
      options: [
        {
          name: "Top Rated Product",
          sale: true,
          url: "#",
        },
        {
          name: "Product Category",
          sale: false,
          url: "#",
        },
      ],
    },
    {
      title: "Blog",
      url: "#",
      options: [],
    },
    {
      title: "Media",
      url: "#",
      options: [],
    },
    {
      title: "ShortCode",
      url: "#",
      options: [],
    },
    {
      title: "Features",
      url: "#",
      options: [],
    },
  ],
});
