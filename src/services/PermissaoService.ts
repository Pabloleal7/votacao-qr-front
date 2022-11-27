
import axios from "axios";


export class PermissaoService {
  CATEGORIA_API_BASE_URL: string = "http://votacaoapi-env.eba-xvjwrpmr.us-east-1.elasticbeanstalk.com/liberar";

  find() {
    return axios.get<Boolean>(this.CATEGORIA_API_BASE_URL+"", {
      auth: { username: "pablo", password: "pablo" },
    });
  }

  liberar() {
    return axios.post<Boolean>(this.CATEGORIA_API_BASE_URL+"/true",null, {
      auth: { username: "pablo", password: "pablo" },
    });
  }


  bloquear() {
    return axios.post<Boolean>(this.CATEGORIA_API_BASE_URL+"/false",null ,{
      auth: { username: "pablo", password: "pablo" },
    });
  }
}


