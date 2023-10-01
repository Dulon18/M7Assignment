exports.create = async (req, res) => {
     res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome subAdmin Create function'
          })
 };

exports.read = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To subAdmin Read function'
          })
};

exports.delete = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To subAdmin Delete functionn'
          })
 };

exports.update = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To subAdmin Update function'
          })
 };