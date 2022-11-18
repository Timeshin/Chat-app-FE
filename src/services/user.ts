import axios, { Axios, AxiosResponse } from 'axios'

class UserService {
  readonly api: Axios

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/'
    })
  }

  checkIsValidName = async (name: string) => {
    const { data } = await this.api.post<string, AxiosResponse<boolean>>('names', { name })

    return data
  }
}

export default new UserService()
