import { FC, JSX } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { breakfastDishes, burgerDishes, saladDishes } from '@/data/initialDishes';
import { useMenu } from '@/providers/MenuContext';

import DishItem from './DishItem';

const DishList: FC = (): JSX.Element => {
  return (
    <div>
      <Tabs defaultValue="breakfast" className="w-full">
        <TabsList>
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="salads">Salads</TabsTrigger>
          <TabsTrigger value="burgers">Burgers</TabsTrigger>
        </TabsList>
        <TabsContent value="breakfast">
          {breakfastDishes.map(dish => {
            return <DishItem key={dish.id} dish={dish} />;
          })}
        </TabsContent>
        <TabsContent value="salads">
          {saladDishes.map(dish => {
            return <DishItem key={dish.id} dish={dish} />;
          })}
        </TabsContent>
        <TabsContent value="burgers">
          {burgerDishes.map(dish => {
            return <DishItem key={dish.id} dish={dish} />;
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DishList;
