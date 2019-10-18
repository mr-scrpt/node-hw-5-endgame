/* const upload = require("../uploader");

const uploaderWithHandlerError = async (req, res, next) => {
  try {
    await upload.single("avatar")(req, res, async (req2, res2) => {
      try {
        await next();
      } catch (e) {
        console.log(err.message);
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = uploaderWithHandlerError;
 */
