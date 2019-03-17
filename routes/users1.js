var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json('respond with a resource');
});
router.get('/1', function(req, res, next) {
  //res.send('respond with a resource');
  const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
  console.log(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
  res.json('email were send... had updated');
});

module.exports = router;
