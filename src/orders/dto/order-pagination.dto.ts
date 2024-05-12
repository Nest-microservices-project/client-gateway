import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/common';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDTO extends PaginationDTO {
  @IsOptional()
  @IsEnum(OrderStatusList, { message: `Valid status is ${OrderStatusList}` })
  status: OrderStatus;
}
