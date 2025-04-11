import { FC, JSX, useRef, useCallback, useEffect } from 'react';

import useClickOutside from '@/hooks/useClickOutside';
import { useMenu } from '@/providers/MenuContext';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: FC<SectionProps> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-[1.2rem] text-primary mb-2">{title}</h3>
    {children}
  </div>
);

const DishDetails: FC = (): JSX.Element | null => {
  const { selectedDish, setSelectedDish } = useMenu();
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(() => setSelectedDish(null), [setSelectedDish]);

  useClickOutside(modalRef, handleClose);

  useEffect(() => {
    if (!selectedDish) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [selectedDish]);

  if (!selectedDish) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = '/assets/images/default-dish.jpg';
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center p-4 sm:p-8">
      <div
        ref={modalRef}
        className="relative bg-white rounded-[10px] w-full max-w-[1000px] max-h-[90vh] overflow-y-auto animate-slideIn"
      >
        <button
          className="absolute top-4 right-4 bg-white/70 border-none rounded-full w-9 h-9 text-[1.8rem] leading-[1] flex items-center justify-center z-10 cursor-pointer hover:bg-white"
          onClick={handleClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full h-[300px] md:w-1/2 md:h-auto">
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className="w-full h-full object-cover md:rounded-tl-[10px] md:rounded-bl-[10px]"
              onError={handleImageError}
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-2 py-[0.4rem] rounded-[20px] text-[0.9rem] font-medium">
              {selectedDish.category}
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 md:p-8">
            <h2 className="text-primary text-[1.8rem] mb-4">{selectedDish.name}</h2>

            <div className="flex items-center justify-between mb-6">
              <div className="text-[1.5rem] font-bold text-accent">
                {/* Цена */}
                <div className="mt-4">
                  <span className="text-2xl font-serif text-red-600">
                    ${(selectedDish.price.default ?? Object.values(selectedDish.price)[0])?.toFixed(2)}
                  </span>
                </div>
              </div>

              {selectedDish.allergens.length > 0 && (
                <div className="text-sm text-gray-600">
                  <span className="font-semibold mr-1">Contains:</span>
                  {selectedDish.allergens.join(', ')}
                </div>
              )}
            </div>

            <Section title="Description">
              <p className="leading-6 text-gray-600">{selectedDish.description}</p>
            </Section>

            <Section title="Ingredients">
              <ul className="list-none flex flex-wrap gap-2 mt-2">
                {selectedDish.ingredients.map((ingredient, index) => (
                  <li key={index} className="bg-secondary/90 px-2 py-1 rounded-[20px] text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </Section>

            {selectedDish.recommended && (
              <Section title="Chef's Note">
                <p className="italic mt-4 p-4 border-l-4 border-secondary rounded-r-[4px] bg-gray-50">
                  {selectedDish.recommended}
                </p>
              </Section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
