import { NextResponse, NextRequest } from 'next/server';
import connectToDatabase from '@/lib/db';
import MenuItem, { IMenuItem } from '@/models/MenuItem';
import { Dish, DishCategory } from '@/types/dish';

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    // Получаем параметр категории из URL
    const category = request.nextUrl.searchParams.get('category') as DishCategory | null;

    // Формируем фильтр для запроса
    const filter: Partial<Pick<IMenuItem, 'category'>> = {};
    if (category) {
      filter.category = category;
    }

    // Используем фильтр в запросе find
    const menuItems: IMenuItem[] = await MenuItem.find(filter);    

    const dishes: Dish[] = menuItems.map(item => {
      const plainItem = item.toObject(); // Преобразуем Mongoose документ в простой объект
      
      // Явно преобразуем Mongoose Map в обычный объект
      const priceObject = plainItem.price instanceof Map 
        ? Object.fromEntries(plainItem.price) 
        : plainItem.price; // На случай, если это уже объект (маловероятно, но безопасно)

      return {
        id: (item._id as any).toString(),
        name: plainItem.name,
        shortDescription: plainItem.shortDescription,
        description: plainItem.description,
        ingredients: plainItem.ingredients,
        price: priceObject, // Используем преобразованный объект
        image: plainItem.image,
        category: plainItem.category as DishCategory,
        allergens: plainItem.allergens,
        recommended: plainItem.recommended,
        isFavorite: plainItem.isFavorite,
        isAvailable: plainItem.isAvailable,
      };
    });
    
    return NextResponse.json({ dishes }, { status: 200 });
  } catch (error: any) { // Типизируем error как any
    console.error('Ошибка при получении меню:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при получении меню' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    // Получаем данные, предполагая, что они уже в формате, близком к IMenuItem
    const dishData = await request.json();
    
    // Создаем новый элемент меню напрямую из полученных данных
    // Добавляем isAvailable по умолчанию, если не предоставлено
    const newMenuItem = new MenuItem({
      ...dishData,
      isAvailable: dishData.isAvailable ?? true,
    });
    
    await newMenuItem.save();
    
    // Возвращаем созданный элемент, преобразуя _id в id и приводя к типу Dish
    const plainSavedItem = newMenuItem.toObject();
    const newDish: Dish = {
        id: (newMenuItem._id as any).toString(), // Явное приведение типа для _id
        name: plainSavedItem.name,
        shortDescription: plainSavedItem.shortDescription,
        description: plainSavedItem.description,
        ingredients: plainSavedItem.ingredients,
        price: plainSavedItem.price,
        image: plainSavedItem.image,
        category: plainSavedItem.category as DishCategory,
        allergens: plainSavedItem.allergens,
        recommended: plainSavedItem.recommended,
        isFavorite: plainSavedItem.isFavorite,
        isAvailable: plainSavedItem.isAvailable,
    };
    
    return NextResponse.json(
      { message: 'Блюдо успешно добавлено', dish: newDish },
      { status: 201 }
    );
  } catch (error: any) { // Типизируем error как any
    console.error('Ошибка при добавлении блюда:', error);
    // Улучшаем обработку ошибок валидации Mongoose
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Ошибка валидации данных блюда', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Произошла ошибка при добавлении блюда' },
      { status: 500 }
    );
  }
} 