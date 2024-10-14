import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from "sequelize";
import { modelNames } from "mongoose";

const models = initModels(sequelize); //khởi tạo các mô hình dựa trên sequelize

export const getLikeByRes = async (req, res, next) => {
  const { res_id } = req.params;
  console.log("res_id: ", res_id);
  const data = await models.like_res.findAll({
    where: {
      res_id,
    },
  });
  if (data.length === 0)
    return next(
      new Error("Khong tim thay luot like nao cho nha hang nay", 404)
    );

  res.status(200).json({
    message: "Lay thanh cong luot like cua nha hang",
    data,
  });
};

export const getLikeByUser = async (req, res, next) => {
  const { user_id } = req.params;
  const data = await models.like_res.findAll({
    where: {
      user_id,
    },
  });
  if (data.length === 0)
    return next(new Error("nguoi dung nay chua like nha hang nao", 404));

  res.status(200).json({
    message: "Lay thanh cong luot like cua nguoi dung",
    data,
  });
};
export const likeRes = async (req, res, next) => {
  const { user_id, res_id, date_like } = req.body;
  const newData = await models.like_res.create({
    user_id,
    res_id,
    date_like,
  });
  if (!newData) return next(new Error("Tao like khong thanh cong", 400));
  res.status(200).json({
    message: "tao like thanh cong!",
    data: newData,
  });
};

export const disLikeRes = async (req, res, next) => {
  const { user_id, res_id } = req.body;
  const data = await models.like_res.findOne({
    where: {
      user_id,
      res_id,
    },
  });

  if (!data)
    return next(
      new Error(
        "Khong tim thay nguoi dung va nha hang duoc like tuong ung",
        404
      )
    );
  data.destroy();
  res.status(200).json({
    message: "DisLike thanh cong",
  });
};

export const rateRes = async (req, res, next) => {
  const { user_id, res_id, amount, date_rate } = req.body;
  const newData = await models.rate_res.create({
    user_id,
    res_id,
    amount,
    date_rate,
  });
  if (!newData) return next(new Error("Danh gia khong thanh cong", 400));
  res.status(200).json({
    message: "Danh gia thanh cong!",
    data: newData,
  });
};

export const getRateByRes = async (req, res, next) => {
  const { res_id } = req.params;
  const data = await models.rate_res.findAll({
    where: {
      res_id,
    },
  });
  if (data.length === 0)
    return next(
      new Error("Khong tim thay nha hang ma banj muon xem danh gia", 404)
    );
  res.status(200).json({
    message: "Tim danh gia cua nha hang thanh cong",
    data,
  });
};

export const getRateByUser = async (req, res, next) => {
  const { user_id } = req.params;
  const data = await models.rate_res.findAll({
    where: {
      user_id,
    },
  });
  if (data.length === 0)
    return next(new Error("Khong tim thay danh gia nao cua ban", 404));
  res.status(200).json({
    message: "Tim danh gia cua ban thanh cong",
    data,
  });
};

export const makeOrder = async (req, res, next) => {
  const { user_id, food_id, amount, discount_code, arr_sub_id } = req.body;
  const newData = await models.orders.create({
    user_id,
    food_id,
    amount,
    discount_code,
    arr_sub_id,
  });
  if (!newData) return next(new Error("Dat hang khong thanh cong", 400));
  res.status(200).json({
    message: "Dat hang thanh cong!",
    newData,
  });
};
