import { useMenu } from '@/context/MenuContext';
import styles from './DishCard.module.scss';

const DishCard = ({ dish }) => {
  const { setSelectedDish } = useMenu();
  
  return (
    <div className={styles["dish-card"]} onClick={() => setSelectedDish(dish)}>
      <div className={styles["dish-image-container"]}>
        <img 
          src={dish.image} 
          alt={dish.name} 
          className={styles["dish-image"]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/images/default-dish.jpg';
          }}
        />
        <div className={styles["dish-category"]}>{dish.category}</div>
      </div>
      
      <div className={styles["dish-info"]}>
        <h3 className={styles["dish-name"]}>{dish.name}</h3>
        <p className={styles["dish-description"]}>{dish.shortDescription}</p>
        <div className={styles["dish-price"]}>${dish.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default DishCard;