const tabuada = (req, res) => {
    res.render('tabuada', {
        num: req.params.num
    })
}

module.exports = {
    list, tabuada
}