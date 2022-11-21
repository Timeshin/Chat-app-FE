import axios, { Axios, AxiosResponse } from 'axios'

class UserService {
  readonly api: Axios

  constructor() {
    this.api = axios.create({
      baseURL: 'https://chat-app-be-dhgf.onrender.com/'
    })
  }

  checkIsValidName = async (name: string) => {
    const { data } = await this.api.get<null, AxiosResponse<boolean>>('names', { 
      params: {
        name
      }
     })

    return data
  }
}

export default new UserService()
