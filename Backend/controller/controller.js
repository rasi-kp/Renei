const Card=require('../model/card')

module.exports = {
  cards: async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const cards = await Card.findAll({});
      const totalPages = Math.ceil(cards.length / 3);
      const startIndex = (page - 1) * 3;
      const endIndex = page * 3;
      const paginatedcards = cards.slice(startIndex, endIndex);
      return res.status(200).json({
        page: page,
        limit: 3,
        totalPages: totalPages,
        data: paginatedcards
      });
  },
 
  success:async(req,res)=>{
    res.send("success to connect")
  },
  
}