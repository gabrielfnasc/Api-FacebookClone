import { HttpResponse } from "../http/presentation/controllers/helpers/Http";

export interface BaseController<T = any> {
  handle(request: T): Promise<HttpResponse>;
}
