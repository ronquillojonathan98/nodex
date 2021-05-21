class Routes {
    constructor(app)
    {
        this.app = app;

        this.app.get('', (req, res) => 
        {
            res.render('index', 
                {
                    title: 'HBS | Index',
                });
        });

        this.app.get('*', (req, res) => 
        {
            res.send('404 Page Not Found.')
        });
    }
}

module.exports = Routes;