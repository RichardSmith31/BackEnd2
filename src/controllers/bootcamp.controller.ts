import { Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootCamps(): string{
        return "Aqui se mostraran  todos los bootcamps";

    }

    @Get("id")
    getBootCampById(@Param('id') id:string): string {
        return `aqui se va a mostrar el bootcamp con id: ${id}`
    }

    @Post()
    createBottcamp(): string{
        return "aqui se van a crear bootcamps"
    }

    @Put(":id")
    updateBootcamp(@Param('id') id:string) {
        return `aqui se va a actualizar el bootcamp con id: ${id}`
    }

    @Delete(":id")
    deleteBootCamp(@Param('id') id:string) : string {
        return  `aqui se va a eliminar el bootcamp: ${id}`
    }

}