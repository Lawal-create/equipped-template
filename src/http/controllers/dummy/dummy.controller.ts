import { Controller } from "@app/internal/controller";
import { Request, Response } from "express";
import { controller, httpGet, request, response } from "inversify-express-utils";

@controller("/dummy ")
export class DummyController extends Controller<string> {
  @httpGet("/")
  async ping(@request() req: Request, @response() res: Response) {
    this.send(req, res, "dummy!");
  }
}