exports.index = async (req, res, next) => {
    res.render('index', { title: 'Express' });
}

exports.contacte = async (req, res, next) => {
    res.render('contacte', { title: 'Contacte' });
}