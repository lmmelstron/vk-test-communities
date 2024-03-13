import { http, HttpResponse } from "msw";
import communities from "./db.json";

export const handlers = [
  http.get("/communities", () => {
    return HttpResponse.json(communities);
  }),
  http.get("/communities-error", () => {
    return new HttpResponse(null, { status: 404 });
  }),
];
