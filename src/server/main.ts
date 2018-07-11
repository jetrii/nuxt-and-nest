import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./application.module";
import { Builder, Nuxt } from "nuxt";
import * as config from "../../nuxt.config.js";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  const nuxt = await new Nuxt(config);
  config.dev = !(process.env.NODE_ENV === "production");

  if (config.dev) {
    new Builder(nuxt).build();
  }

  await app.use(nuxt.render);

  await app.listen(5555, () => console.log("Application is listening on port 5555."));
}

bootstrap();
