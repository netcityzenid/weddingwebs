import mongoose, { Document, Model, Schema } from "mongoose";

interface IFormData extends Document {
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: Date;
}

const FormDataSchema: Schema<IFormData> = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  attendance: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FormData: Model<IFormData> = mongoose.models.FormData || mongoose.model<IFormData>("FormData", FormDataSchema);

export default FormData;
