import { Filters } from "@widgets/Filters";
import { CommunitiesList } from "@entities/Community";

export const CommunitiesPage = () => {
  return (
    <div>
      <h1>Communities:</h1>
      <Filters />
      <CommunitiesList />
    </div>
  );
};
