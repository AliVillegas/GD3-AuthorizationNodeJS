exports.dashboard = (req, res) => {
    if (req.user) {
        if (req.user.role == 'admin') {
            console.log("admin logged in  ")
            res.render('dashboard/dashboard', {
                userData: req.user,
                isAdmin: true
            });
        } else {
            console.log("user logged in ")
            res.render('dashboard/dashboard', {
                userData: req.user,
                isAdmin: false
            });
        }

        // logged in
    } else {
        res.render('dashboard/dashboard', {
            status: '403 Forbidden Access',
        })
        return

    }

}

exports.manageUsers = (req, res) => {
    //console.log(req.user)
    if (req.user && req.user.role == 'admin') {
        res.render('dashboard/userManagement', {
            userData: req.user,
            isAdmin: true
        });
        // logged in
    } else {
        res.render('dashboard/userManagement', {
            status: '403 Forbidden Access',
        })
        return

    }

}