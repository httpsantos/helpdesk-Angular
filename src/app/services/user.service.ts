import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { User }           from '../model/user.model';
import { HELP_DESK_API }  from './helpdesk.api'

@Injectable()
export class UserService {

  constructor( private htpp: HttpClient ) { 

  }
  
  login( user: User ){
    return this.htpp.post(`${HELP_DESK_API}/api/auth`, user);
  }

  creatOrUpdate( user: User ){
    if(user.id != null && user.id != ''){
      return this.htpp.put(`${HELP_DESK_API}/api/user`, user);
    } else {
      user.id = null;
      return this.htpp.post(`${HELP_DESK_API}/api/user`, user);
    }
  }

  findALL(  ) {

  }
}
