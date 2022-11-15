"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
exports.productRoutes = (0, express_1.Router)();
const product_modle_1 = require("../schemas/product.modle");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.productRoutes.get('/product/list', async (req, res) => {
    try {
        let limit;
        let offset;
        if (!req.query.limit || !req.query.limit) {
            limit = 3;
            offset = 0;
        }
        else {
            limit = parseInt(req.query.limit);
            offset = parseInt(req.query.offset);
        }
        const products = await product_modle_1.Product.find().limit(limit).skip(limit * offset);
        ;
        res.render("listProduct", { products: products });
    }
    catch (_a) {
        res.render("error");
    }
});
exports.productRoutes.post('/create', upload.none(), async (req, res) => {
    try {
        const productNew = new product_modle_1.Product(req.body);
        const product = await productNew.save();
        if (product) {
            res.render("success");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
exports.productRoutes.get('/list', async (req, res) => {
    try {
        const products = await product_modle_1.Product.find();
        res.render("listProduct", { products: products });
    }
    catch (_a) {
        res.render("error");
    }
});
exports.default = exports.productRoutes;
//# sourceMappingURL=product.router.js.map