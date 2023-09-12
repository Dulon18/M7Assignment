const express=require('express');
const BlogController=require('../controllers/blogController');
const CommentController=require('../controllers/commentController');
const MessageController=require('../controllers/messageController');
const PortfolioController=require('../controllers/portfolioController');
const ProductController=require('../controllers/productController');
const router = express.Router();

// blog route
router.get("/blog/create",BlogController.create);
router.get("/blog/read",BlogController.read);
router.get("/blog/update",BlogController.update);
router.get("/blog/delete",BlogController.delete);

// comment route
router.get("/comment/create",CommentController.create);
router.get("/comment/read",CommentController.read);
router.get("/comment/update",CommentController.update);
router.get("/comment/delete", CommentController.delete);

// message route
router.get("/message/create",MessageController.create);
router.get("/message/read",MessageController.read);
router.get("/message/update",MessageController.update);
router.get("/message/delete", MessageController.delete);

// portfolio route
router.get("/portfolio/create",PortfolioController.create);
router.get("/portfolio/read",PortfolioController.read);
router.get("/portfolio/update",PortfolioController.update);
router.get("/portfolio/delete", PortfolioController.delete);

// product route
router.get("/product/create",ProductController.create);
router.get("/product/read",ProductController.read);
router.get("/product/update",ProductController.update);
router.get("/product/delete", ProductController.delete);

module.exports=router;