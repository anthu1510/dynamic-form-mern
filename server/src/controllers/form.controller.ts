import { RequestHandler } from "express";
import FormModel from "../models/form.model";

export const createForm: RequestHandler = async (req, res, next) => {
  try {
    const newForm = new FormModel(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    next(error);
  }
};

export const getAllForm: RequestHandler = async (req, res, next) => {
  try {
    const forms = await FormModel.find();
    res.json(forms);
  } catch (error) {
    next(error);
  }
};

export const getFormById: RequestHandler = async (req, res, next) => {
  try {
    const form = await FormModel.findOne({ _id: req.params.id });
    res.json(form);
  } catch (error) {
    next(error);
  }
};

export const updateForm: RequestHandler = async (req, res, next) => {
  try {
    const form = await FormModel.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    res.json(form);
  } catch (error) {
    next(error);
  }
};

export const deleteForm: RequestHandler = async (req, res, next) => {
  try {
    const form = await FormModel.deleteOne({ _id: req.params.id });
    res.json({ message: "Form deleted" });
  } catch (error) {
    next(error);
  }
};
