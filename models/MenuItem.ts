import mongoose, { Schema, Document } from 'mongoose';

// Интерфейс для элемента меню
export interface IMenuItem extends Document {
  name: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  price: {
    [size: string]: number;
  };
  image: string;
  category: string;
  allergens: string[];
  recommended?: string;
  isFavorite: boolean;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Схема для элемента меню
const MenuItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, default: '' },
    ingredients: { type: [String], default: [] },
    price: {
      type: Map,
      of: Number,
      required: true
    },
    image: { type: String, default: '' },
    category: { type: String, required: true },
    allergens: { type: [String], default: [] },
    recommended: { type: String },
    isFavorite: { type: Boolean, default: false },
    isAvailable: { type: Boolean, default: true },
  },
  { 
    timestamps: true,
    collection: 'dishes'
  }
);

// Проверяем, существует ли уже модель, чтобы избежать ошибки переопределения модели
export default mongoose.models.MenuItem || mongoose.model<IMenuItem>('MenuItem', MenuItemSchema); 