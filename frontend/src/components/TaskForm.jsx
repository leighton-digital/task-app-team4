export const TaskForm = () => {
    return (
      <>
        <h3>Task Form</h3>
        <form>
        <p>Title: <input type="text"/></p>
        <p>Description: <input type="text"/></p>
        <p>Due Date: <input type="date"/></p>
        <input type="button" value="Submit" />
        </form>
      </>
    );
  };