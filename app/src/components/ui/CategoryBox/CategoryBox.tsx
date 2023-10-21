"use client";

import { IconType } from "react-icons";
import { useHistory, useLocation } from "react-router-dom";
import { useCallback, useMemo } from "react";
import qs from "query-string";
import { ReadOnlyURLSearchParams } from "../../../types";

type CategoryBoxProps = {
  icon: IconType;
  label: string;
  description?: string;
  isSelected?: boolean;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  isSelected,
}) => {
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(search) as ReadOnlyURLSearchParams,
    [search]
  );

  const clickHandler = useCallback(() => {
    let currentQuery = {};
    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    const updatedQuery: any = { ...currentQuery, category: label };

    if (searchParams?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );

    history.push(url);
  }, [searchParams, label, history]);

  return (
    <div
      onClick={clickHandler}
      className={`p-3 flex flex-col justify-center items-center gap-2 border-b-2 cursor-pointer transition hover:text-neutral-800
      ${isSelected ? "border-b-neutral-800" : "border-transparent"}
      ${isSelected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
