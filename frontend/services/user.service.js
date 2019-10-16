import ApiService from '@/services/api.service'

class UserService {
  constructor() {
    this.request = new ApiService()
  }

  getUserList(query) {
    return this.request.get(`/users?q=${query}`)
  }
}

export default new UserService()