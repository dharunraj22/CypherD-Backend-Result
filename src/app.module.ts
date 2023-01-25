import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Covalenthq/cov.module';

@Module({
  imports: [SharedModule,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
