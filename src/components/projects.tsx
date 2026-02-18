import { useState } from "react";
import { ArrowUpRight } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { TabList, Tabs } from "@/components/application/tabs/tabs";
import { Avatar } from "@/components/base/avatar/avatar";
import { Select } from "@/components/base/select/select";
import {
  type Article,
  Simple01Vertical,
} from "@/components/marketing/blog/base-components/blog-cards";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const articles: Article[] = [
  {
    id: "article-1",
    title: "XING Marketing Solutions",
    summary:
      "XING Marketing Solutions is a powerful platform that helps businesses reach their target audience effectively. With a range of tools and features, it enables marketers to create and manage successful campaigns on the XING network.",
    href: "#",
    category: {
      name: "Web",
      href: "#",
    },
    thumbnailUrl: "xing-ads.png",
    date: "May 2025-Dec 2025",
    tags: [
      {
        name: "Web",
        color: "brand",
        href: "#",
      },
      {
        name: "Research",
        color: "indigo",
        href: "#",
      },
      {
        name: "Presentation",
        color: "pink",
        href: "#",
      },
    ],
  },
  {
    id: "article-2",
    title: "LoopOS",
    summary:
      "LoopOS is the circular operating system that powers the Loop, a revolutionary device designed to enhance productivity and creativity. With its intuitive interface and seamless integration, LoopOS provides users with a unique and efficient computing experience.",
    href: "#",
    category: {
      name: "Product",
      href: "#",
    },
    thumbnailUrl: "loopos.png",
    date: "19 Jan 2025",
    tags: [
      {
        name: "Product",
        color: "blue-light",
        href: "#",
      },
      {
        name: "Tools",
        color: "pink",
        href: "#",
      },
      {
        name: "SaaS",
        color: "pink",
        href: "#",
      },
    ],
  },
  {
    id: "article-3",
    title: "Sonae",
    summary:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    href: "#",
    category: {
      name: "Software Engineering",
      href: "#",
    },
    thumbnailUrl: "sonae.png",
    date: "18 Jan 2025",
    tags: [
      {
        name: "Software Development",
        color: "success",
        href: "#",
      },
      {
        name: "Tools",
        color: "pink",
        href: "#",
      },
    ],
  },
  {
    id: "article-3.5",
    title: "Ticketline",
    summary:
      "Ticketline is a comprehensive ticketing solution that offers a seamless experience for event organizers and attendees. With its user-friendly interface and robust features, Ticketline simplifies the process of ticket sales, management, and distribution.",
    href: "#",
    category: {
      name: "Product",
      href: "#",
    },
    date: "17 Jan 2025",
    tags: [
      {
        name: "Software Development",
        color: "success",
        href: "#",
      },
      {
        name: "Tools",
        color: "pink",
        href: "#",
      },
    ],
    thumbnailUrl: "tl.png",
  },
  {
    id: "article-3.5",
    title: "ANF",
    summary:
      "ANF is a leading company in the fashion industry, known for its innovative designs and commitment to sustainability. With a focus on quality and style, ANF offers a wide range of clothing and accessories that cater to diverse tastes and preferences.",
    href: "#",
    category: {
      name: "Product",
      href: "#",
    },
    thumbnailUrl: "anf.png",
    date: "17 Jan 2025",
    tags: [
      {
        name: "Leadership",
        color: "brand",
        href: "#",
      },
      {
        name: "Management",
        color: "gray-blue",
        href: "#",
      },
    ],
  },
  {
    id: "article-4",
    title: "Loblaws",
    summary:
      "Loblaws is a leading Canadian supermarket chain that offers a wide range of products and services to its customers. With a focus on quality, convenience, and customer satisfaction, Loblaws has become a trusted name in the grocery industry.",
    href: "#",
    category: {
      name: "Product",
      href: "#",
    },
    thumbnailUrl:
      "https://media.istockphoto.com/id/2219865877/photo/front-view-of-the-loblaws-store-sign.jpg?s=612x612&w=0&k=20&c=tDzl1L16hrnRYOPFAus3fIg_Y5Wp7rnppV0sus7fiRk=",
    date: "16 Jan 2025",
    tags: [
      {
        name: "Product",
        color: "blue-light",
        href: "#",
      },
      {
        name: "Research",
        color: "indigo",
        href: "#",
      },
      {
        name: "Frameworks",
        color: "orange",
        href: "#",
      },
    ],
  },
];

const tabs = [
  {
    id: "all",
    label: "View all",
  },
  {
    id: "web",
    label: "Web Apps",
  },
  {
    id: "mobile",
    label: "Mobile",
  },
  {
    id: "others",
    label: "Others",
  },
];

const sortByOptions = [
  {
    id: "recent",
    label: "Most recent",
  },
  {
    id: "popular",
    label: "Most popular",
  },
  {
    id: "viewed",
    label: "Most viewed",
  },
];

export const Projects = () => {
  const isDesktop = useBreakpoint("lg");
  const [sortBy, setSortBy] = useState(sortByOptions[0].id);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const page = Math.min(Math.max(currentPage, 1), totalPages);

  return (
    <div className="bg-primary">
      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-container px-4 md:px-8">
          <div className="flex w-full max-w-3xl flex-col">
            {/* <span className="text-sm font-semibold text-brand-secondary md:text-md">
              A selection of my work.
            </span> */}
            <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
              Projects
            </h2>
            <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
              A selection of my work.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 pb-16 md:gap-16 md:px-8 md:pb-24">
        <div className="flex flex-col items-end gap-8 md:flex-row">
          <Tabs className="w-full">
            <TabList
              type="underline"
              size="md"
              items={tabs}
              className="overflow-auto"
            />
          </Tabs>

          <div className="relative w-full md:max-w-44">
            <Select
              aria-label="Sort by"
              size="md"
              selectedKey={sortBy}
              onSelectionChange={(value) => setSortBy(value as string)}
              items={sortByOptions}
            >
              {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
            </Select>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {articles
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((article, index) => (
              <li key={index} className={cx(!isDesktop && "nth-[n+7]:hidden")}>
                <Simple01Vertical article={article} />
              </li>
            ))}
        </ul>

        <PaginationPageDefault
          rounded
          page={page}
          total={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>
    </div>
  );
};
