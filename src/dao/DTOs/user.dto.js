/* ************************************************************************** */
/* src/dao/DTOs/user.dto.js*/
/* ************************************************************************** */

class UserDTO {
    constructor(user) {
        this.first_name = user.first_name || '';
        this.last_name = user.last_name || '';
        this.email = user.email || '';
        this.age = user.age || null;
        this.password = user.password || '';
        this.role = user.role || 'user';
        this.cart = user.cart || null;
        this.token = '';
    }
}

module.exports = UserDTO;
