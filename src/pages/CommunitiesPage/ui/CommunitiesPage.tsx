import { Filters } from "@widgets/Filters";
import { CommunitiesList } from "@entities/Community";
import { memo } from "react";

export const CommunitiesPage = memo(() => {
  return (
    <div>
      <h1>Communities:</h1>
      <Filters />
      <CommunitiesList />
    </div>
  );
});
