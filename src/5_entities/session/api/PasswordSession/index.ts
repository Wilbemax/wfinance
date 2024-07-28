import CryptoJS from 'crypto-js'

export default class PasswordService {
  static hashPassword(password: string): string {
    return CryptoJS.SHA256(password).toString()
  }
}
