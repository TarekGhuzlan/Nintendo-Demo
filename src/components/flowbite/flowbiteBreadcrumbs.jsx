import { Breadcrumb, BreadcrumbItem, Flowbite } from "flowbite-react";

const customTheme = {
  breadcrumb: {
    root: {
      base: "",
      list: "flex items-center text-xs font-bold ",
    },
    item: {
      base: "group flex items-center",
      chevron: "w-3  text-nin_breadcrumbs ml-1.5 mr-1 group-first:hidden  ",
      href: {
        off: "flex items-center  ",
        on: "flex items-center text-nin_lightgray",
      },
    },
  },
};

export function FlowbiteBreadcrumbs({ currentPage }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Breadcrumb aria-label="Default breadcrumb example">
        <BreadcrumbItem href="#">Store</BreadcrumbItem>
        <BreadcrumbItem href="#">Games</BreadcrumbItem>
        <BreadcrumbItem>{currentPage}</BreadcrumbItem>
      </Breadcrumb>
    </Flowbite>
  );
}
