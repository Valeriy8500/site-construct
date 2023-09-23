import { useEffect, useState, useRef, useCallback } from "react";
import { useGetSitesQuery } from "@/entities/site/api/site.api.ts";
import { ISite } from "@/entities/site/model/site.types";

export const useScrollList = () => {
  const [dataList, setDataList] = useState<ISite[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isFirstRequest, setIsFirstRequest] = useState(true);
  const [lastIdSite, setLastId] = useState("");
  const { data, isLoading } = useGetSitesQuery(
    { startAt: lastIdSite, limitToFirst: 10 },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    if (data) {
      const lastIdElement = data.slice(-1)[0].id;
      if (lastIdElement !== lastIdSite) {
        const newDataList = isFirstRequest ? data : data.slice(1);
        setDataList(__prevState => [...__prevState, ...newDataList]);
        setHasMore(true);
        setIsFirstRequest(false);
      } else {
        setHasMore(false);
      }
    }
  }, [data]);

  useEffect(() => {
    return () => {
      refreshSiteList();
    };
  }, []);

  useEffect(() => {
    if (hasMore) {
      if (data) {
        const lastIdElement = data.slice(-1)[0].id;
        setLastId(lastIdElement);
      }
    }
  }, [pageNumber]);

  const refreshSiteList = () => {
    setDataList([]);
    setPageNumber(1);
    setHasMore(false);
    setIsFirstRequest(true);
    setLastId("");
  };

  const observer = useRef<IntersectionObserver | null>(null);
  const lastNodeRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(__prevState => __prevState + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return { data: dataList, lastNodeRef, isLoading, refreshSiteList };
};
