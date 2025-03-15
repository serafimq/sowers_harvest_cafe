import { useMenu } from '@/providers/MenuContext';
import { FC, JSX } from 'react';

const DishDetails: FC = (): JSX.Element | null => {
  const { selectedDish, setSelectedDish } = useMenu();
  
  if (!selectedDish) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center p-4 sm:p-8">
      <div className="relative bg-white rounded-[10px] w-full max-w-[1000px] max-h-[90vh] overflow-y-auto animate-slideIn">
        <button 
          className="absolute top-4 right-4
             bg-white/70
             border-none rounded-full
             w-9 h-9
             text-[1.8rem] leading-[1]
             flex items-center justify-center
             z-10
             cursor-pointer
             hover:bg-white"
          onClick={() => setSelectedDish(null)}
        >
          ×
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="relative
               w-full h-[300px] md:w-1/2 md:h-auto">
            <img 
              src={selectedDish.image} 
              alt={selectedDish.name} 
              className="w-full h-full object-cover md:rounded-tl-[10px] md:rounded-bl-[10px]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/images/default-dish.jpg';
              }}
            />
            <div className="absolute top-4 left-4
                 bg-primary text-white
                 px-2 py-[0.4rem]
                 rounded-[20px]
                 text-[0.9rem] font-medium">{selectedDish.category}</div>
          </div>
          
          <div className="w-full p-6
               md:w-1/2 md:p-8">
            <h2 className="text-primary text-[1.8rem] mb-4">{selectedDish.name}</h2>
            
            <div className="flex items-center justify-between mb-6">
              <div className="text-[1.5rem] font-bold text-accent">${selectedDish.price.toFixed(2)}</div>
              
              {selectedDish.allergens && selectedDish.allergens.length > 0 && (
                <div className="text-sm text-gray-600">
                  <span className="font-semibold mr-1">Contains:</span>
                  {selectedDish.allergens.join(', ')}
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className='text-[1.2rem] text-primary mb-2'>
                Description
              </h3>
              <p className='leading-6 text-body'>
                {selectedDish.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className='text-[1.2rem] text-primary mb-2'>Ingredients</h3>
              <ul className="list-none flex flex-wrap gap-2 mt-2">
                {selectedDish.ingredients.map((ingredient, index) => (
                  <li key={index} className="bg-secondary/90 px-2 py-1 rounded-[20px] text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            {selectedDish.recommended && (
              <div className="mb-6">
                <h3 className='text-[1.2rem] text-primary mb-2'>Chef's Note</h3>
                <p className="italic mt-4 p-4 border-l-4 border-secondary rounded-r-[4px] bg-gray-50">
                  {selectedDish.recommended}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;