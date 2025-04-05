export default function todosReducer(todosList, action) {
  if (action.type === "added") {
    if (action.info !== "")
    {
      return [
        ...todosList,
        {
          id: action.id,
          todoinfo: action.info,
          completed: false,
        },
      ];
    }else{
      return todosList;
    }
      
  } else if (action.type === "deleted") {
    return todosList.filter((currtodo) => currtodo.id != action.id);
  } else if (action.type === "checked") {
    return todosList.map((currtodo) =>
      currtodo.id === action.id
        ? { ...currtodo, completed: !currtodo.completed }
        : currtodo
    );
  } else if (action.type === "updated") {
    return todosList.map((currtodo) =>
      currtodo.id === action.id
        ? { ...currtodo, todoinfo: action.newinfo }
        : currtodo
    );
  } else {
    throw Error("Unknown action: " + action.type);
  }
}
