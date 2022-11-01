import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useEmergenciesInPage } from "../Context/EmergenciesInPage";
import { Emergency } from "../Data/emergencies";
import EmergenciesList from "./Emergencies/EmergenciesList";
import "../Assets/styles/pagination.css";
import MapLeafletAll from "./Map/MapLeafletAll";

interface Props {
  itemsPerPage: number;
  emergencies: Emergency[];
}

export default function PaginatedItems({ itemsPerPage, emergencies }: Props) {
  const { modifyEmergencies } = useEmergenciesInPage();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<Emergency[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(emergencies.slice(itemOffset, endOffset));
    modifyEmergencies(emergencies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(emergencies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % emergencies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="conteiner">
        <EmergenciesList emergencies={currentItems} />
        <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="siguiente >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< anterior"
            renderOnZeroPageCount={undefined}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
        <MapLeafletAll emergencies={currentItems}></MapLeafletAll>
      </div>
    </>
  );
}
