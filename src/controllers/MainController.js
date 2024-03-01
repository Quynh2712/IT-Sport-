const MainController = {
    //get Contact Us page
    getContactUs: (req, res) => {
        return res.render('contact');
    },
    //get About Page
    getAbout: (req, res) => {
        return res.render('about');
    },
    //get Event Page
    getEvent: (req, res) => {
        return res.render('event');
    },
    //get Login Page
    getLogin: (req, res) => {
        return res.render('login', { layout: 'submain' });
    }
}

module.exports = MainController;