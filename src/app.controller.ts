import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Students.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Endpoint: Puerta del software
  //     -Acepta peticiones de clientes bajo una url semantica
  //     -Retornar el(los) datos esperados

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Segundo endpoint - Estructurar un endopint
  //    1.  Verbo (metodo) http sobre el cual recibir
  //       Metodos diponibles: GET, POST, PUT, DELETE
  //    2. Firma del metodo a ejecutar
  //       cuando se invoque el endpoint
  @Get("/ficha")
  getFicha(): string{
    return "endpoint de la ficha 2902093"
  }

  //tercer endpoint
  @Get("/identificacion/:id/ciudad/:ciudad")
  identificacion(@Param('id') id:string , 
                 @Param('ciudad') ciudad:string, 
                 @Query('nombre') nombre: string, 
                 @Query('edad') edad: number ):Student {
    return new Student(+id, nombre, edad, ciudad); 
  }

}
