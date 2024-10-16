import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express'; // Importar el tipo Request de Express
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.query.age);
    const ageQueryParam = request.query.age;
    
    // Verifica que el parámetro age esté definido y sea convertible a número
    if (ageQueryParam && !isNaN(Number(ageQueryParam))) {
      const age = parseInt(ageQueryParam as string, 10);
      console.log(`Age: ${age}`);
      
      if (age < 18) {
        return false;
      }
    }
    return true;
  }
}
