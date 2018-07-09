import { NestFactory } from "@nestjs/core";
import * as config from "../nuxt.config";
import { AppModule } from "./app.module";
import { Builder, Nuxt } from "nuxt";

async function bootstrap() {
  const nuxt = await new Nuxt(config);
  config.dev = !(process.env.NODE_ENV === "production");
  if (config.dev) {
    await new Builder(nuxt).build();
  }
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix("api");
  await app.listen(3000, () => console.log("Application is listening on port 3000."));
  await app.use(nuxt.render);
}

bootstrap();
