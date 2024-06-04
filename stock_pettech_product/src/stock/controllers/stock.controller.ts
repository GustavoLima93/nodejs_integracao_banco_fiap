import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { StockService } from '../services/stock.service';
import { z } from 'zod';
import { ZodValidationPipe } from 'src/shared/pipe/zod-validation.pipe';
import { LoggingInterceptor } from 'src/shared/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

const createStockSchema = z.object({
  name: z.string(),
  quantity: z.coerce.number(),
  relationId: z.string(),
});

const updateStockSchema = z.object({
  stock: z.coerce.number(),
});

type CreateStock = z.infer<typeof createStockSchema>;
type UpdateStock = z.infer<typeof updateStockSchema>;

@ApiTags('stock')
@UseInterceptors(LoggingInterceptor)
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  async getAllStock(
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return this.stockService.getAllStock(limit, page);
  }

  @Get(':productId')
  async getStock(@Param('productId') productId: string) {
    return this.stockService.getStock(productId);
  }

  @ApiBearerAuth()
  @UsePipes(new ZodValidationPipe(createStockSchema))
  @Post()
  async createStock(@Body() { name, quantity, relationId }: CreateStock) {
    return this.stockService.createStock({ name, quantity, relationId });
  }

  @Put(':productId')
  async updateStock(
    @Param('productId') productId: string,
    @Body(new ZodValidationPipe(updateStockSchema)) { stock }: UpdateStock,
  ) {
    return this.stockService.updateStock(productId, stock);
  }

  @Delete(':productId')
  async deleteStock(@Param('productId') productId: string) {
    return this.stockService.deleteStock(productId);
  }
}
