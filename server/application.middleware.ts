import * as config from "../nuxt.config.js";
import { NestMiddleware, Injectable } from "@nestjs/common";
import { Builder, Nuxt } from "nuxt";

@Injectable()
export class NuxtMiddleware implements NestMiddleware {
  async resolve() {
    const nuxt = await new Nuxt(config);
    config.dev = !(process.env.NODE_ENV === "production");

    if (config.dev) {
      new Builder(nuxt).build();
    }

    return async (req, res, next) => {
      await nuxt.render(req, res, next);
    };
  }
}