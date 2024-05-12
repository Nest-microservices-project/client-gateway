import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/transports/nats.module';
@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    // ClientsModule.register([
    //   {
    //     name: NATS_SERVICE,
    //     transport: Transport.NATS,
    //     options: {
    //       servers: envs.NATS_SERVERS,
    //     },
    //   },
    // ]),
    NatsModule,
  ],
})
export class ProductsModule {}
