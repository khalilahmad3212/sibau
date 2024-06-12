import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdministrationService } from './administration.service';

@Controller('administration')
export class AdministrationController {
  constructor(
    private readonly administrationService: AdministrationService,
  ) { }

  @Post()
  createAdministration(
    @Body() body: any,
  ) {
    return this.administrationService.createAdministration(body);
  }

  @Get()
  getAdministration() {
    return this.administrationService.getAdministration();
  }

  @Get(':id')
  getAdministrationById(@Param('id') id: string) {
    return this.administrationService.getAdministrationById(+id);
  }
}
