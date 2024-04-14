import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsNumber({ maxDecimalPlaces: 4 })
  @IsPositive()
  @Min(0)
  @Type(() => Number)
  public price: number;
}
