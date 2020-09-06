// validators/AuthValidator.js
// Importamos express-validators para ayudarnos a implementar las reglas
// de validación

// Escribimos las reglas de validación para la acción register
exports.userHasAccess = (req) => {
    if (req.user) {
        if (req.user.role == "admin") {
            return 'admin'
        } else if (req.user.role == "user") {
            return 'user'
        }
    }

}