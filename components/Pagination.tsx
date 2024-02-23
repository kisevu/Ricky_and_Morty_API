"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import { PageProps } from "@/types/page";
import { Suspense } from "react";

export default function Pagination({ pages, currentPage }: PageProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (data: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (data.selected + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="flex justify-center w-full mt-10">
      <ReactPaginate
        pageCount={pages}
        forcePage={currentPage}
        onPageChange={handlePageChange}
        className="flex list-none m-0 p-0 items-center rounded-md bg-whiter"
        pageClassName={"mx-2 cursor-pointer"}
        activeClassName={
          "bg-blue-500 text-white border border-primary p-3 h-10 w-10 flex items-center justify-center rounded-md"
        }
        previousClassName={
          "mx-2 bg-primary text-whiter p-2 rounded cursor-pointer"
        }
        nextClassName={"mx-2 bg-primary text-whiter p-2 rounded cursor-pointer"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
    </Suspense>
  );
}
