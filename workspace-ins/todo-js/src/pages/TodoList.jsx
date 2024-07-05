import TodoItem from "@pages/TodoItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  data: PropTypes.arrayOf({
    id: PropTypes.string,
    title: PropTypes.string,
    done: PropTypes.bool
  }),
};

function TodoList({ data }){
  const items = data?.map(item => <TodoItem key={ item.id } item={ item } />);
  return (
    <ul>
      { items }
    </ul>
  );
}

export default TodoList;