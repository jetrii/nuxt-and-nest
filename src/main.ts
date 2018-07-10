import { NestFactory } from "@nestjs/core";
import * as config from "../nuxt.config";
import { AppModule } from "./app.module";
import { Builder, Nuxt } from "nuxt";

async function bootstrap() {
  const nuxt = await new Nuxt(config);
  const app = await NestFactory.create(AppModule);

  await app.setGlobalPrefix("api");
  await app.use(nuxt.render);

  config.dev = !(process.env.NODE_ENV === "production");

  if (config.dev) {
    await new Builder(nuxt).build();
  }

  await app.listen(3000, () => console.log("Application is listening on port 3000."));
}

bootstrap();
