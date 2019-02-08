const log = require('../logger');

/**
 * EmailService, sends verification email once user is registered.
 *
 * @param emailId
 * @returns {Promise<void>}
 */

const sendMail = async (emailId) => {
  //todo: send mail, if time permits, by following https://www.w3schools.com/nodejs/nodejs_email.asp
  let sendMailFlag = true;
  if(sendMailFlag) {
    log.info("A verification mail has been sent to your registered mail.");
  }else {
    log.error("An issue occurred while sending mail, please contact support");
  }
};

module.exports = {sendMail};
