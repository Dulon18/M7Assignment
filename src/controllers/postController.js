exports.create = async (req, res) => {
     res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Post Create function'
          })
 };

exports.read = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Post Read function'
          })
};

exports.delete = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Post Delete function'
          })
 };

exports.update = async (req, res) => {
      res.status(200).json(
          {
               status: 'success',
               data: 'Hi..Welcome To Post Update function'
          })
 };