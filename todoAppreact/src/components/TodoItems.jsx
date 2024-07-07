import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ initialItems ,handleBtn}) => {
    
  return (
    <div className={styles.itemsContainer}>
      {initialItems.map((item ,key) => (
        
       <TodoItem 
         key={item}
        todoDate={item.dueDate} 
        todoName={item.name}
        handleBtn={handleBtn}
       
       >

        </TodoItem>
        
      ))}
    </div>
  );
};

export default TodoItems;