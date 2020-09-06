// validators/AuthValidator.js
// Importamos express-validators para ayudarnos a implementar las reglas
// de validación

// Escribimos las reglas de validación para la acción register
exports.userHasAccess = ({ req, path }) => {
if (req.user) {
    if (req.user.role == "admin") {
        return true
    }
    if (path == '/dashboard') {
        return true
    } else if (path == 'homepage') {
        return true
    } else {
        return false
    }
} else {
    if (path == "/dashboard") {
        return true
    }
}

})