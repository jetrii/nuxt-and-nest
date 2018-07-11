import { Module, NestModule } from "@nestjs/common";
import { AppController } from "./application.controller";
import { AppService } from "./application.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule {}
