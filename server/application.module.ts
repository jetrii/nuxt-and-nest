import { Module, NestModule } from "@nestjs/common";
import { AppController } from "./application.controller";
import { AppService } from "./application.service";
import { NuxtMiddleware } from "./application.middleware";
import { NuxtController } from "./nuxt.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule implements NestModule {
  configure(consumer): void {
    consumer.apply(NuxtMiddleware).forRoutes(NuxtController);
  }
}
